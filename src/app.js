import {event} from 'd3-selection';

export default function (d3) {
    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var point = svg.node().createSVGPoint();
    console.log("point = "+point);

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().distance(100).id(function(d) {
            return d.id;
        }))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));

    var graph = {
        "nodes": [{
            "id": "Myriel",
            "group": 1
        }
            /*
             , {
             "id": "Napoleon",
             "group": 1
             }, {
             "id": "Mlle.Baptistine",
             "group": 1
             }, {
             "id": "Mme.Magloire",
             "group": 1
             }, {
             "id": "CountessdeLo",
             "group": 1
             }, {
             "id": "Geborand",
             "group": 1
             }, {
             "id": "Champtercier",
             "group": 1
             }, {
             "id": "Cravatte",
             "group": 1
             }, {
             "id": "Count",
             "group": 1
             }, {
             "id": "OldMan",
             "group": 1
             }, {
             "id": "Labarre",
             "group": 2
             }, {
             "id": "Valjean",
             "group": 2
             }, {
             "id": "Marguerite",
             "group": 3
             }, {
             "id": "Mme.deR",
             "group": 2
             }, {
             "id": "Isabeau",
             "group": 2
             }, {
             "id": "Gervais",
             "group": 2
             },
             */
        ],
        "links": [
            /*
             {
             "source": "Napoleon",
             "target": "Myriel",
             "value": 1
             }, {
             "source": "Mlle.Baptistine",
             "target": "Myriel",
             "value": 8
             }, {
             "source": "Mme.Magloire",
             "target": "Myriel",
             "value": 10
             }, {
             "source": "Mme.Magloire",
             "target": "Mlle.Baptistine",
             "value": 6
             }, {
             "source": "CountessdeLo",
             "target": "Myriel",
             "value": 1
             }, {
             "source": "Geborand",
             "target": "Myriel",
             "value": 1
             }, {
             "source": "Champtercier",
             "target": "Myriel",
             "value": 1
             }, {
             "source": "Cravatte",
             "target": "Myriel",
             "value": 1
             }, {
             "source": "Count",
             "target": "Myriel",
             "value": 2
             }, {
             "source": "OldMan",
             "target": "Myriel",
             "value": 1
             }, {
             "source": "Valjean",
             "target": "Labarre",
             "value": 1
             }, {
             "source": "Valjean",
             "target": "Mme.Magloire",
             "value": 3
             }, {
             "source": "Valjean",
             "target": "Mlle.Baptistine",
             "value": 3
             }, {
             "source": "Valjean",
             "target": "Myriel",
             "value": 5
             }, {
             "source": "Marguerite",
             "target": "Valjean",
             "value": 1
             }, {
             "source": "Mme.deR",
             "target": "Valjean",
             "value": 1
             }, {
             "source": "Isabeau",
             "target": "Valjean",
             "value": 1
             }, {
             "source": "Gervais",
             "target": "Valjean",
             "value": 1
             },
             */
        ]
    }


    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("stroke-width", function(d) {
            return Math.sqrt(d.value);
        });

    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)

        .enter().append("circle")
        .attr("r", 20)
        .attr("fill", function(d) {
            return color(d.group);
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    node.append("title")
        .text(function(d) {
            return d.id;
        });

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked)
        .on("end", simend)
    ;

    simulation.force("link")
        .links(graph.links);

    var currentScale = 1;

    var zoomed = function() {
        //console.log(event);
        var t = event.transform;
        if (t.k !== currentScale) {
            currentScale = t.k;
            console.log('new scale: ' + currentScale);
            setPanningLimit();
        }
        console.log('transform: ' + t.k)
        node.attr('transform', t);
        link.attr('transform', t);
    };

    var zoom = d3.zoom().scaleExtent([0.1, 10]).on('zoom', zoomed);
// Set up zoom on body only (not header)
    svg.call(zoom);

    function ticked() {
        link
            .attr("x1", function(d) {
                return d.source.x;
            })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            });

        node
            .attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });
    }


    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    function simend (){
        setPanningLimit();
    }

    function setPanningLimit (){
        var x = d3.extent(graph.nodes, function(node){
                return node.x
            }),
            y = d3.extent(graph.nodes, function(node){
                return node.y
            });
        console.log('x-extent: '+x,'y-extent: '+y,'scale: '+currentScale);
        var panLimit = [[-x[1]*currentScale,-y[1]*currentScale],[2*width-x[0]*currentScale,2*height-y[0]*currentScale]];
        console.log('pan limit: '+panLimit);
        zoom.translateExtent(panLimit);
    }
};