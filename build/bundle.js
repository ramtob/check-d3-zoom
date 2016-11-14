/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _app3 = __webpack_require__(3);
	
	var _app4 = _interopRequireDefault(_app3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var d3 = Object.assign({}, __webpack_require__(4), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(8), __webpack_require__(9));
	(0, _app4.default)(d3);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (d3) {
	    var svg = d3.select("svg"),
	        width = +svg.attr("width"),
	        height = +svg.attr("height");
	
	    var point = svg.node().createSVGPoint();
	    console.log("point = " + point);
	
	    var color = d3.scaleOrdinal(d3.schemeCategory20);
	
	    var simulation = d3.forceSimulation().force("link", d3.forceLink().distance(100).id(function (d) {
	        return d.id;
	    })).force("charge", d3.forceManyBody().strength(-300)).force("center", d3.forceCenter(width / 2, height / 2));
	
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
	    };
	
	    var link = svg.append("g").attr("class", "links").selectAll("line").data(graph.links).enter().append("line").attr("stroke-width", function (d) {
	        return Math.sqrt(d.value);
	    });
	
	    var node = svg.append("g").attr("class", "nodes").selectAll("circle").data(graph.nodes).enter().append("circle").attr("r", 20).attr("fill", function (d) {
	        return color(d.group);
	    }).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
	
	    node.append("title").text(function (d) {
	        return d.id;
	    });
	
	    simulation.nodes(graph.nodes).on("tick", ticked).on("end", simend);
	
	    simulation.force("link").links(graph.links);
	
	    var currentScale = 1;
	
	    var zoomed = function zoomed() {
	        var t = d3.event.transform;
	        if (t.k !== currentScale) {
	            currentScale = t.k;
	            console.log('new scale: ' + currentScale);
	            setPanningLimit();
	        }
	        console.log('transform: ' + t.k);
	        node.attr('transform', t);
	        link.attr('transform', t);
	    };
	
	    var zoom = d3.zoom().scaleExtent([0.1, 10]).on('zoom', zoomed);
	    // Set up zoom on body only (not header)
	    svg.call(zoom);
	
	    function ticked() {
	        link.attr("x1", function (d) {
	            return d.source.x;
	        }).attr("y1", function (d) {
	            return d.source.y;
	        }).attr("x2", function (d) {
	            return d.target.x;
	        }).attr("y2", function (d) {
	            return d.target.y;
	        });
	
	        node.attr("cx", function (d) {
	            return d.x;
	        }).attr("cy", function (d) {
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
	
	    function simend() {
	        setPanningLimit();
	    }
	
	    function setPanningLimit() {
	        var x = d3.extent(graph.nodes, function (node) {
	            return node.x;
	        }),
	            y = d3.extent(graph.nodes, function (node) {
	            return node.y;
	        });
	        console.log('x-extent: ' + x, 'y-extent: ' + y, 'scale: ' + currentScale);
	        var panLimit = [[-x[1] * currentScale, -y[1] * currentScale], [2 * width - x[0] * currentScale, 2 * height - y[0] * currentScale]];
	        console.log('pan limit: ' + panLimit);
	        zoom.translateExtent(panLimit);
	    }
	};
	
	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	export {default as forceCenter} from "./src/center";
	export {default as forceCollide} from "./src/collide";
	export {default as forceLink} from "./src/link";
	export {default as forceManyBody} from "./src/manyBody";
	export {default as forceSimulation} from "./src/simulation";
	export {default as forceX} from "./src/x";
	export {default as forceY} from "./src/y";


/***/ },
/* 5 */
/***/ function(module, exports) {

	export {default as creator} from "./src/creator";
	export {default as local} from "./src/local";
	export {default as matcher} from "./src/matcher";
	export {default as mouse} from "./src/mouse";
	export {default as namespace} from "./src/namespace";
	export {default as namespaces} from "./src/namespaces";
	export {default as select} from "./src/select";
	export {default as selectAll} from "./src/selectAll";
	export {default as selection} from "./src/selection/index";
	export {default as selector} from "./src/selector";
	export {default as selectorAll} from "./src/selectorAll";
	export {default as touch} from "./src/touch";
	export {default as touches} from "./src/touches";
	export {default as window} from "./src/window";
	export {event, customEvent} from "./src/selection/on";


/***/ },
/* 6 */
/***/ function(module, exports) {

	export {
	  default as scaleBand,
	  point as scalePoint
	} from "./src/band";
	
	export {
	  default as scaleIdentity
	} from "./src/identity";
	
	export {
	  default as scaleLinear
	} from "./src/linear";
	
	export {
	  default as scaleLog
	} from "./src/log";
	
	export {
	  default as scaleOrdinal,
	  implicit as scaleImplicit
	} from "./src/ordinal";
	
	export {
	  default as scalePow,
	  sqrt as scaleSqrt
	} from "./src/pow";
	
	export {
	  default as scaleQuantile
	} from "./src/quantile";
	
	export {
	  default as scaleQuantize
	} from "./src/quantize";
	
	export {
	  default as scaleThreshold
	} from "./src/threshold";
	
	export {
	  default as scaleTime
	} from "./src/time";
	
	export {
	  default as scaleUtc
	} from "./src/utcTime";
	
	export {
	  default as schemeCategory10
	} from "./src/category10";
	
	export {
	  default as schemeCategory20b
	} from "./src/category20b";
	
	export {
	  default as schemeCategory20c
	} from "./src/category20c";
	
	export {
	  default as schemeCategory20
	} from "./src/category20";
	
	export {
	  default as interpolateCubehelixDefault
	} from "./src/cubehelix";
	
	export {
	  default as interpolateRainbow,
	  warm as interpolateWarm,
	  cool as interpolateCool
	} from "./src/rainbow";
	
	export {
	  default as interpolateViridis,
	  magma as interpolateMagma,
	  inferno as interpolateInferno,
	  plasma as interpolatePlasma
	} from "./src/viridis";
	
	export {
	  default as scaleSequential
	} from "./src/sequential";


/***/ },
/* 7 */
/***/ function(module, exports) {

	export {default as drag} from "./src/drag";
	export {default as dragDisable, yesdrag as dragEnable} from "./src/nodrag";


/***/ },
/* 8 */
/***/ function(module, exports) {

	export {default as bisect, bisectRight, bisectLeft} from "./src/bisect";
	export {default as ascending} from "./src/ascending";
	export {default as bisector} from "./src/bisector";
	export {default as descending} from "./src/descending";
	export {default as deviation} from "./src/deviation";
	export {default as extent} from "./src/extent";
	export {default as histogram} from "./src/histogram";
	export {default as thresholdFreedmanDiaconis} from "./src/threshold/freedmanDiaconis";
	export {default as thresholdScott} from "./src/threshold/scott";
	export {default as thresholdSturges} from "./src/threshold/sturges";
	export {default as max} from "./src/max";
	export {default as mean} from "./src/mean";
	export {default as median} from "./src/median";
	export {default as merge} from "./src/merge";
	export {default as min} from "./src/min";
	export {default as pairs} from "./src/pairs";
	export {default as permute} from "./src/permute";
	export {default as quantile} from "./src/quantile";
	export {default as range} from "./src/range";
	export {default as scan} from "./src/scan";
	export {default as shuffle} from "./src/shuffle";
	export {default as sum} from "./src/sum";
	export {default as ticks, tickStep} from "./src/ticks";
	export {default as transpose} from "./src/transpose";
	export {default as variance} from "./src/variance";
	export {default as zip} from "./src/zip";


/***/ },
/* 9 */
/***/ function(module, exports) {

	export {default as zoom} from "./src/zoom";
	export {default as zoomTransform, identity as zoomIdentity} from "./src/transform";


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map