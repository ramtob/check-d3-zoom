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
	
	var d3 = Object.assign({}, __webpack_require__(4), __webpack_require__(42), __webpack_require__(90), __webpack_require__(212), __webpack_require__(92), __webpack_require__(218));
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _center = __webpack_require__(5);
	
	Object.defineProperty(exports, "forceCenter", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_center).default;
	  }
	});
	
	var _collide = __webpack_require__(6);
	
	Object.defineProperty(exports, "forceCollide", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_collide).default;
	  }
	});
	
	var _link = __webpack_require__(24);
	
	Object.defineProperty(exports, "forceLink", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_link).default;
	  }
	});
	
	var _manyBody = __webpack_require__(32);
	
	Object.defineProperty(exports, "forceManyBody", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_manyBody).default;
	  }
	});
	
	var _simulation = __webpack_require__(33);
	
	Object.defineProperty(exports, "forceSimulation", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_simulation).default;
	  }
	});
	
	var _x = __webpack_require__(40);
	
	Object.defineProperty(exports, "forceX", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_x).default;
	  }
	});
	
	var _y = __webpack_require__(41);
	
	Object.defineProperty(exports, "forceY", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_y).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x, y) {
	  var nodes;
	
	  if (x == null) x = 0;
	  if (y == null) y = 0;
	
	  function force() {
	    var i,
	        n = nodes.length,
	        node,
	        sx = 0,
	        sy = 0;
	
	    for (i = 0; i < n; ++i) {
	      node = nodes[i], sx += node.x, sy += node.y;
	    }
	
	    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
	      node = nodes[i], node.x -= sx, node.y -= sy;
	    }
	  }
	
	  force.initialize = function (_) {
	    nodes = _;
	  };
	
	  force.x = function (_) {
	    return arguments.length ? (x = +_, force) : x;
	  };
	
	  force.y = function (_) {
	    return arguments.length ? (y = +_, force) : y;
	  };
	
	  return force;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (radius) {
	  var nodes,
	      radii,
	      strength = 1,
	      iterations = 1;
	
	  if (typeof radius !== "function") radius = (0, _constant2.default)(radius == null ? 1 : +radius);
	
	  function force() {
	    var i,
	        n = nodes.length,
	        tree,
	        node,
	        xi,
	        yi,
	        ri,
	        ri2;
	
	    for (var k = 0; k < iterations; ++k) {
	      tree = (0, _d3Quadtree.quadtree)(nodes, x, y).visitAfter(prepare);
	      for (i = 0; i < n; ++i) {
	        node = nodes[i];
	        ri = radii[i], ri2 = ri * ri;
	        xi = node.x + node.vx;
	        yi = node.y + node.vy;
	        tree.visit(apply);
	      }
	    }
	
	    function apply(quad, x0, y0, x1, y1) {
	      var data = quad.data,
	          rj = quad.r,
	          r = ri + rj;
	      if (data) {
	        if (data.index > i) {
	          var x = xi - data.x - data.vx,
	              y = yi - data.y - data.vy,
	              l = x * x + y * y;
	          if (l < r * r) {
	            if (x === 0) x = (0, _jiggle2.default)(), l += x * x;
	            if (y === 0) y = (0, _jiggle2.default)(), l += y * y;
	            l = (r - (l = Math.sqrt(l))) / l * strength;
	            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
	            node.vy += (y *= l) * r;
	            data.vx -= x * (r = 1 - r);
	            data.vy -= y * r;
	          }
	        }
	        return;
	      }
	      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
	    }
	  }
	
	  function prepare(quad) {
	    if (quad.data) return quad.r = radii[quad.data.index];
	    for (var i = quad.r = 0; i < 4; ++i) {
	      if (quad[i] && quad[i].r > quad.r) {
	        quad.r = quad[i].r;
	      }
	    }
	  }
	
	  function initialize() {
	    if (!nodes) return;
	    var i,
	        n = nodes.length;
	    radii = new Array(n);
	    for (i = 0; i < n; ++i) {
	      radii[i] = +radius(nodes[i], i, nodes);
	    }
	  }
	
	  force.initialize = function (_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.iterations = function (_) {
	    return arguments.length ? (iterations = +_, force) : iterations;
	  };
	
	  force.strength = function (_) {
	    return arguments.length ? (strength = +_, force) : strength;
	  };
	
	  force.radius = function (_) {
	    return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : radius;
	  };
	
	  return force;
	};
	
	var _constant = __webpack_require__(7);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _jiggle = __webpack_require__(8);
	
	var _jiggle2 = _interopRequireDefault(_jiggle);
	
	var _d3Quadtree = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function x(d) {
	  return d.x + d.vx;
	}
	
	function y(d) {
	  return d.y + d.vy;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return function () {
	    return x;
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return (Math.random() - 0.5) * 1e-6;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _quadtree = __webpack_require__(10);
	
	Object.defineProperty(exports, "quadtree", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quadtree).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = quadtree;
	
	var _add = __webpack_require__(11);
	
	var _add2 = _interopRequireDefault(_add);
	
	var _cover = __webpack_require__(12);
	
	var _cover2 = _interopRequireDefault(_cover);
	
	var _data = __webpack_require__(13);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _extent = __webpack_require__(14);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _find = __webpack_require__(15);
	
	var _find2 = _interopRequireDefault(_find);
	
	var _remove = __webpack_require__(17);
	
	var _remove2 = _interopRequireDefault(_remove);
	
	var _root = __webpack_require__(18);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _size = __webpack_require__(19);
	
	var _size2 = _interopRequireDefault(_size);
	
	var _visit = __webpack_require__(20);
	
	var _visit2 = _interopRequireDefault(_visit);
	
	var _visitAfter = __webpack_require__(21);
	
	var _visitAfter2 = _interopRequireDefault(_visitAfter);
	
	var _x = __webpack_require__(22);
	
	var _x2 = _interopRequireDefault(_x);
	
	var _y = __webpack_require__(23);
	
	var _y2 = _interopRequireDefault(_y);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function quadtree(nodes, x, y) {
	  var tree = new Quadtree(x == null ? _x.defaultX : x, y == null ? _y.defaultY : y, NaN, NaN, NaN, NaN);
	  return nodes == null ? tree : tree.addAll(nodes);
	}
	
	function Quadtree(x, y, x0, y0, x1, y1) {
	  this._x = x;
	  this._y = y;
	  this._x0 = x0;
	  this._y0 = y0;
	  this._x1 = x1;
	  this._y1 = y1;
	  this._root = undefined;
	}
	
	function leaf_copy(leaf) {
	  var copy = { data: leaf.data },
	      next = copy;
	  while (leaf = leaf.next) {
	    next = next.next = { data: leaf.data };
	  }return copy;
	}
	
	var treeProto = quadtree.prototype = Quadtree.prototype;
	
	treeProto.copy = function () {
	  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
	      node = this._root,
	      nodes,
	      child;
	
	  if (!node) return copy;
	
	  if (!node.length) return copy._root = leaf_copy(node), copy;
	
	  nodes = [{ source: node, target: copy._root = new Array(4) }];
	  while (node = nodes.pop()) {
	    for (var i = 0; i < 4; ++i) {
	      if (child = node.source[i]) {
	        if (child.length) nodes.push({ source: child, target: node.target[i] = new Array(4) });else node.target[i] = leaf_copy(child);
	      }
	    }
	  }
	
	  return copy;
	};
	
	treeProto.add = _add2.default;
	treeProto.addAll = _add.addAll;
	treeProto.cover = _cover2.default;
	treeProto.data = _data2.default;
	treeProto.extent = _extent2.default;
	treeProto.find = _find2.default;
	treeProto.remove = _remove2.default;
	treeProto.removeAll = _remove.removeAll;
	treeProto.root = _root2.default;
	treeProto.size = _size2.default;
	treeProto.visit = _visit2.default;
	treeProto.visitAfter = _visitAfter2.default;
	treeProto.x = _x2.default;
	treeProto.y = _y2.default;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (d) {
	  var x = +this._x.call(null, d),
	      y = +this._y.call(null, d);
	  return add(this.cover(x, y), x, y, d);
	};
	
	exports.addAll = addAll;
	
	
	function add(tree, x, y, d) {
	  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points
	
	  var parent,
	      node = tree._root,
	      leaf = { data: d },
	      x0 = tree._x0,
	      y0 = tree._y0,
	      x1 = tree._x1,
	      y1 = tree._y1,
	      xm,
	      ym,
	      xp,
	      yp,
	      right,
	      bottom,
	      i,
	      j;
	
	  // If the tree is empty, initialize the root as a leaf.
	  if (!node) return tree._root = leaf, tree;
	
	  // Find the existing leaf for the new point, or add it.
	  while (node.length) {
	    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
	    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
	    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
	  }
	
	  // Is the new point is exactly coincident with the existing point?
	  xp = +tree._x.call(null, node.data);
	  yp = +tree._y.call(null, node.data);
	  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
	
	  // Otherwise, split the leaf node until the old and new point are separated.
	  do {
	    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
	    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
	    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
	  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
	  return parent[j] = node, parent[i] = leaf, tree;
	}
	
	function addAll(data) {
	  var d,
	      i,
	      n = data.length,
	      x,
	      y,
	      xz = new Array(n),
	      yz = new Array(n),
	      x0 = Infinity,
	      y0 = Infinity,
	      x1 = -Infinity,
	      y1 = -Infinity;
	
	  // Compute the points and their extent.
	  for (i = 0; i < n; ++i) {
	    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
	    xz[i] = x;
	    yz[i] = y;
	    if (x < x0) x0 = x;
	    if (x > x1) x1 = x;
	    if (y < y0) y0 = y;
	    if (y > y1) y1 = y;
	  }
	
	  // If there were no (valid) points, inherit the existing extent.
	  if (x1 < x0) x0 = this._x0, x1 = this._x1;
	  if (y1 < y0) y0 = this._y0, y1 = this._y1;
	
	  // Expand the tree to cover the new points.
	  this.cover(x0, y0).cover(x1, y1);
	
	  // Add the new points.
	  for (i = 0; i < n; ++i) {
	    add(this, xz[i], yz[i], data[i]);
	  }
	
	  return this;
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x, y) {
	  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points
	
	  var x0 = this._x0,
	      y0 = this._y0,
	      x1 = this._x1,
	      y1 = this._y1;
	
	  // If the quadtree has no extent, initialize them.
	  // Integer extent are necessary so that if we later double the extent,
	  // the existing quadrant boundaries don’t change due to floating point error!
	  if (isNaN(x0)) {
	    x1 = (x0 = Math.floor(x)) + 1;
	    y1 = (y0 = Math.floor(y)) + 1;
	  }
	
	  // Otherwise, double repeatedly to cover.
	  else if (x0 > x || x > x1 || y0 > y || y > y1) {
	      var z = x1 - x0,
	          node = this._root,
	          parent,
	          i;
	
	      switch (i = (y < (y0 + y1) / 2) << 1 | x < (x0 + x1) / 2) {
	        case 0:
	          {
	            do {
	              parent = new Array(4), parent[i] = node, node = parent;
	            } while ((z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1));
	            break;
	          }
	        case 1:
	          {
	            do {
	              parent = new Array(4), parent[i] = node, node = parent;
	            } while ((z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1));
	            break;
	          }
	        case 2:
	          {
	            do {
	              parent = new Array(4), parent[i] = node, node = parent;
	            } while ((z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y));
	            break;
	          }
	        case 3:
	          {
	            do {
	              parent = new Array(4), parent[i] = node, node = parent;
	            } while ((z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y));
	            break;
	          }
	      }
	
	      if (this._root && this._root.length) this._root = node;
	    }
	
	    // If the quadtree covers the point already, just return.
	    else return this;
	
	  this._x0 = x0;
	  this._y0 = y0;
	  this._x1 = x1;
	  this._y1 = y1;
	  return this;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var data = [];
	  this.visit(function (node) {
	    if (!node.length) do {
	      data.push(node.data);
	    } while (node = node.next);
	  });
	  return data;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (_) {
	    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x, y, radius) {
	  var data,
	      x0 = this._x0,
	      y0 = this._y0,
	      x1,
	      y1,
	      x2,
	      y2,
	      x3 = this._x1,
	      y3 = this._y1,
	      quads = [],
	      node = this._root,
	      q,
	      i;
	
	  if (node) quads.push(new _quad2.default(node, x0, y0, x3, y3));
	  if (radius == null) radius = Infinity;else {
	    x0 = x - radius, y0 = y - radius;
	    x3 = x + radius, y3 = y + radius;
	    radius *= radius;
	  }
	
	  while (q = quads.pop()) {
	
	    // Stop searching if this quadrant can’t contain a closer node.
	    if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;
	
	    // Bisect the current quadrant.
	    if (node.length) {
	      var xm = (x1 + x2) / 2,
	          ym = (y1 + y2) / 2;
	
	      quads.push(new _quad2.default(node[3], xm, ym, x2, y2), new _quad2.default(node[2], x1, ym, xm, y2), new _quad2.default(node[1], xm, y1, x2, ym), new _quad2.default(node[0], x1, y1, xm, ym));
	
	      // Visit the closest quadrant first.
	      if (i = (y >= ym) << 1 | x >= xm) {
	        q = quads[quads.length - 1];
	        quads[quads.length - 1] = quads[quads.length - 1 - i];
	        quads[quads.length - 1 - i] = q;
	      }
	    }
	
	    // Visit this point. (Visiting coincident points isn’t necessary!)
	    else {
	        var dx = x - +this._x.call(null, node.data),
	            dy = y - +this._y.call(null, node.data),
	            d2 = dx * dx + dy * dy;
	        if (d2 < radius) {
	          var d = Math.sqrt(radius = d2);
	          x0 = x - d, y0 = y - d;
	          x3 = x + d, y3 = y + d;
	          data = node.data;
	        }
	      }
	  }
	
	  return data;
	};
	
	var _quad = __webpack_require__(16);
	
	var _quad2 = _interopRequireDefault(_quad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (node, x0, y0, x1, y1) {
	  this.node = node;
	  this.x0 = x0;
	  this.y0 = y0;
	  this.x1 = x1;
	  this.y1 = y1;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (d) {
	  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points
	
	  var parent,
	      node = this._root,
	      retainer,
	      previous,
	      next,
	      x0 = this._x0,
	      y0 = this._y0,
	      x1 = this._x1,
	      y1 = this._y1,
	      x,
	      y,
	      xm,
	      ym,
	      right,
	      bottom,
	      i,
	      j;
	
	  // If the tree is empty, initialize the root as a leaf.
	  if (!node) return this;
	
	  // Find the leaf node for the point.
	  // While descending, also retain the deepest parent with a non-removed sibling.
	  if (node.length) while (true) {
	    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
	    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
	    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
	    if (!node.length) break;
	    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
	  }
	
	  // Find the point to remove.
	  while (node.data !== d) {
	    if (!(previous = node, node = node.next)) return this;
	  }if (next = node.next) delete node.next;
	
	  // If there are multiple coincident points, remove just the point.
	  if (previous) return next ? previous.next = next : delete previous.next, this;
	
	  // If this is the root point, remove it.
	  if (!parent) return this._root = next, this;
	
	  // Remove this leaf.
	  next ? parent[i] = next : delete parent[i];
	
	  // If the parent now contains exactly one leaf, collapse superfluous parents.
	  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
	    if (retainer) retainer[j] = node;else this._root = node;
	  }
	
	  return this;
	};
	
	exports.removeAll = removeAll;
	function removeAll(data) {
	  for (var i = 0, n = data.length; i < n; ++i) {
	    this.remove(data[i]);
	  }return this;
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return this._root;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var size = 0;
	  this.visit(function (node) {
	    if (!node.length) do {
	      ++size;
	    } while (node = node.next);
	  });
	  return size;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (callback) {
	  var quads = [],
	      q,
	      node = this._root,
	      child,
	      x0,
	      y0,
	      x1,
	      y1;
	  if (node) quads.push(new _quad2.default(node, this._x0, this._y0, this._x1, this._y1));
	  while (q = quads.pop()) {
	    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
	      var xm = (x0 + x1) / 2,
	          ym = (y0 + y1) / 2;
	      if (child = node[3]) quads.push(new _quad2.default(child, xm, ym, x1, y1));
	      if (child = node[2]) quads.push(new _quad2.default(child, x0, ym, xm, y1));
	      if (child = node[1]) quads.push(new _quad2.default(child, xm, y0, x1, ym));
	      if (child = node[0]) quads.push(new _quad2.default(child, x0, y0, xm, ym));
	    }
	  }
	  return this;
	};
	
	var _quad = __webpack_require__(16);
	
	var _quad2 = _interopRequireDefault(_quad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (callback) {
	  var quads = [],
	      next = [],
	      q;
	  if (this._root) quads.push(new _quad2.default(this._root, this._x0, this._y0, this._x1, this._y1));
	  while (q = quads.pop()) {
	    var node = q.node;
	    if (node.length) {
	      var child,
	          x0 = q.x0,
	          y0 = q.y0,
	          x1 = q.x1,
	          y1 = q.y1,
	          xm = (x0 + x1) / 2,
	          ym = (y0 + y1) / 2;
	      if (child = node[0]) quads.push(new _quad2.default(child, x0, y0, xm, ym));
	      if (child = node[1]) quads.push(new _quad2.default(child, xm, y0, x1, ym));
	      if (child = node[2]) quads.push(new _quad2.default(child, x0, ym, xm, y1));
	      if (child = node[3]) quads.push(new _quad2.default(child, xm, ym, x1, y1));
	    }
	    next.push(q);
	  }
	  while (q = next.pop()) {
	    callback(q.node, q.x0, q.y0, q.x1, q.y1);
	  }
	  return this;
	};
	
	var _quad = __webpack_require__(16);
	
	var _quad2 = _interopRequireDefault(_quad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultX = defaultX;
	
	exports.default = function (_) {
	  return arguments.length ? (this._x = _, this) : this._x;
	};
	
	function defaultX(d) {
	  return d[0];
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultY = defaultY;
	
	exports.default = function (_) {
	  return arguments.length ? (this._y = _, this) : this._y;
	};
	
	function defaultY(d) {
	  return d[1];
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = function (links) {
	  var id = index,
	      strength = defaultStrength,
	      strengths,
	      distance = (0, _constant2.default)(30),
	      distances,
	      nodes,
	      count,
	      bias,
	      iterations = 1;
	
	  if (links == null) links = [];
	
	  function defaultStrength(link) {
	    return 1 / Math.min(count[link.source.index], count[link.target.index]);
	  }
	
	  function force(alpha) {
	    for (var k = 0, n = links.length; k < iterations; ++k) {
	      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
	        link = links[i], source = link.source, target = link.target;
	        x = target.x + target.vx - source.x - source.vx || (0, _jiggle2.default)();
	        y = target.y + target.vy - source.y - source.vy || (0, _jiggle2.default)();
	        l = Math.sqrt(x * x + y * y);
	        l = (l - distances[i]) / l * alpha * strengths[i];
	        x *= l, y *= l;
	        target.vx -= x * (b = bias[i]);
	        target.vy -= y * b;
	        source.vx += x * (b = 1 - b);
	        source.vy += y * b;
	      }
	    }
	  }
	
	  function initialize() {
	    if (!nodes) return;
	
	    var i,
	        n = nodes.length,
	        m = links.length,
	        nodeById = (0, _d3Collection.map)(nodes, id),
	        link;
	
	    for (i = 0, count = new Array(n); i < n; ++i) {
	      count[i] = 0;
	    }
	
	    for (i = 0; i < m; ++i) {
	      link = links[i], link.index = i;
	      if (_typeof(link.source) !== "object") link.source = find(nodeById, link.source);
	      if (_typeof(link.target) !== "object") link.target = find(nodeById, link.target);
	      ++count[link.source.index], ++count[link.target.index];
	    }
	
	    for (i = 0, bias = new Array(m); i < m; ++i) {
	      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
	    }
	
	    strengths = new Array(m), initializeStrength();
	    distances = new Array(m), initializeDistance();
	  }
	
	  function initializeStrength() {
	    if (!nodes) return;
	
	    for (var i = 0, n = links.length; i < n; ++i) {
	      strengths[i] = +strength(links[i], i, links);
	    }
	  }
	
	  function initializeDistance() {
	    if (!nodes) return;
	
	    for (var i = 0, n = links.length; i < n; ++i) {
	      distances[i] = +distance(links[i], i, links);
	    }
	  }
	
	  force.initialize = function (_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.links = function (_) {
	    return arguments.length ? (links = _, initialize(), force) : links;
	  };
	
	  force.id = function (_) {
	    return arguments.length ? (id = _, force) : id;
	  };
	
	  force.iterations = function (_) {
	    return arguments.length ? (iterations = +_, force) : iterations;
	  };
	
	  force.strength = function (_) {
	    return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initializeStrength(), force) : strength;
	  };
	
	  force.distance = function (_) {
	    return arguments.length ? (distance = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initializeDistance(), force) : distance;
	  };
	
	  return force;
	};
	
	var _constant = __webpack_require__(7);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _jiggle = __webpack_require__(8);
	
	var _jiggle2 = _interopRequireDefault(_jiggle);
	
	var _d3Collection = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function index(d, i) {
	  return i;
	}
	
	function find(nodeById, nodeId) {
	  var node = nodeById.get(nodeId);
	  if (!node) throw new Error("missing: " + nodeId);
	  return node;
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _nest = __webpack_require__(26);
	
	Object.defineProperty(exports, "nest", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nest).default;
	  }
	});
	
	var _set = __webpack_require__(28);
	
	Object.defineProperty(exports, "set", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_set).default;
	  }
	});
	
	var _map = __webpack_require__(27);
	
	Object.defineProperty(exports, "map", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_map).default;
	  }
	});
	
	var _keys = __webpack_require__(29);
	
	Object.defineProperty(exports, "keys", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_keys).default;
	  }
	});
	
	var _values = __webpack_require__(30);
	
	Object.defineProperty(exports, "values", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_values).default;
	  }
	});
	
	var _entries = __webpack_require__(31);
	
	Object.defineProperty(exports, "entries", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_entries).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var keys = [],
	      _sortKeys = [],
	      _sortValues,
	      _rollup,
	      nest;
	
	  function apply(array, depth, createResult, setResult) {
	    if (depth >= keys.length) return _rollup != null ? _rollup(array) : _sortValues != null ? array.sort(_sortValues) : array;
	
	    var i = -1,
	        n = array.length,
	        key = keys[depth++],
	        keyValue,
	        value,
	        valuesByKey = (0, _map2.default)(),
	        values,
	        result = createResult();
	
	    while (++i < n) {
	      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
	        values.push(value);
	      } else {
	        valuesByKey.set(keyValue, [value]);
	      }
	    }
	
	    valuesByKey.each(function (values, key) {
	      setResult(result, key, apply(values, depth, createResult, setResult));
	    });
	
	    return result;
	  }
	
	  function _entries(map, depth) {
	    if (++depth > keys.length) return map;
	    var array,
	        sortKey = _sortKeys[depth - 1];
	    if (_rollup != null && depth >= keys.length) array = map.entries();else array = [], map.each(function (v, k) {
	      array.push({ key: k, values: _entries(v, depth) });
	    });
	    return sortKey != null ? array.sort(function (a, b) {
	      return sortKey(a.key, b.key);
	    }) : array;
	  }
	
	  return nest = {
	    object: function object(array) {
	      return apply(array, 0, createObject, setObject);
	    },
	    map: function map(array) {
	      return apply(array, 0, createMap, setMap);
	    },
	    entries: function entries(array) {
	      return _entries(apply(array, 0, createMap, setMap), 0);
	    },
	    key: function key(d) {
	      keys.push(d);return nest;
	    },
	    sortKeys: function sortKeys(order) {
	      _sortKeys[keys.length - 1] = order;return nest;
	    },
	    sortValues: function sortValues(order) {
	      _sortValues = order;return nest;
	    },
	    rollup: function rollup(f) {
	      _rollup = f;return nest;
	    }
	  };
	};
	
	var _map = __webpack_require__(27);
	
	var _map2 = _interopRequireDefault(_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createObject() {
	  return {};
	}
	
	function setObject(object, key, value) {
	  object[key] = value;
	}
	
	function createMap() {
	  return (0, _map2.default)();
	}
	
	function setMap(map, key, value) {
	  map.set(key, value);
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var prefix = exports.prefix = "$";
	
	function Map() {}
	
	Map.prototype = map.prototype = {
	  constructor: Map,
	  has: function has(key) {
	    return prefix + key in this;
	  },
	  get: function get(key) {
	    return this[prefix + key];
	  },
	  set: function set(key, value) {
	    this[prefix + key] = value;
	    return this;
	  },
	  remove: function remove(key) {
	    var property = prefix + key;
	    return property in this && delete this[property];
	  },
	  clear: function clear() {
	    for (var property in this) {
	      if (property[0] === prefix) delete this[property];
	    }
	  },
	  keys: function keys() {
	    var keys = [];
	    for (var property in this) {
	      if (property[0] === prefix) keys.push(property.slice(1));
	    }return keys;
	  },
	  values: function values() {
	    var values = [];
	    for (var property in this) {
	      if (property[0] === prefix) values.push(this[property]);
	    }return values;
	  },
	  entries: function entries() {
	    var entries = [];
	    for (var property in this) {
	      if (property[0] === prefix) entries.push({ key: property.slice(1), value: this[property] });
	    }return entries;
	  },
	  size: function size() {
	    var size = 0;
	    for (var property in this) {
	      if (property[0] === prefix) ++size;
	    }return size;
	  },
	  empty: function empty() {
	    for (var property in this) {
	      if (property[0] === prefix) return false;
	    }return true;
	  },
	  each: function each(f) {
	    for (var property in this) {
	      if (property[0] === prefix) f(this[property], property.slice(1), this);
	    }
	  }
	};
	
	function map(object, f) {
	  var map = new Map();
	
	  // Copy constructor.
	  if (object instanceof Map) object.each(function (value, key) {
	    map.set(key, value);
	  });
	
	  // Index array by numeric index or specified key function.
	  else if (Array.isArray(object)) {
	      var i = -1,
	          n = object.length,
	          o;
	
	      if (f == null) while (++i < n) {
	        map.set(i, object[i]);
	      } else while (++i < n) {
	        map.set(f(o = object[i], i, object), o);
	      }
	    }
	
	    // Convert object to map.
	    else if (object) for (var key in object) {
	        map.set(key, object[key]);
	      }return map;
	}
	
	exports.default = map;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map = __webpack_require__(27);
	
	var _map2 = _interopRequireDefault(_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Set() {}
	
	var proto = _map2.default.prototype;
	
	Set.prototype = set.prototype = {
	  constructor: Set,
	  has: proto.has,
	  add: function add(value) {
	    value += "";
	    this[_map.prefix + value] = value;
	    return this;
	  },
	  remove: proto.remove,
	  clear: proto.clear,
	  values: proto.keys,
	  size: proto.size,
	  empty: proto.empty,
	  each: proto.each
	};
	
	function set(object, f) {
	  var set = new Set();
	
	  // Copy constructor.
	  if (object instanceof Set) object.each(function (value) {
	    set.add(value);
	  });
	
	  // Otherwise, assume it’s an array.
	  else if (object) {
	      var i = -1,
	          n = object.length;
	      if (f == null) while (++i < n) {
	        set.add(object[i]);
	      } else while (++i < n) {
	        set.add(f(object[i], i, object));
	      }
	    }
	
	  return set;
	}
	
	exports.default = set;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (map) {
	  var keys = [];
	  for (var key in map) {
	    keys.push(key);
	  }return keys;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (map) {
	  var values = [];
	  for (var key in map) {
	    values.push(map[key]);
	  }return values;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (map) {
	  var entries = [];
	  for (var key in map) {
	    entries.push({ key: key, value: map[key] });
	  }return entries;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var nodes,
	      node,
	      alpha,
	      strength = (0, _constant2.default)(-30),
	      strengths,
	      distanceMin2 = 1,
	      distanceMax2 = Infinity,
	      theta2 = 0.81;
	
	  function force(_) {
	    var i,
	        n = nodes.length,
	        tree = (0, _d3Quadtree.quadtree)(nodes, _simulation.x, _simulation.y).visitAfter(accumulate);
	    for (alpha = _, i = 0; i < n; ++i) {
	      node = nodes[i], tree.visit(apply);
	    }
	  }
	
	  function initialize() {
	    if (!nodes) return;
	    var i,
	        n = nodes.length;
	    strengths = new Array(n);
	    for (i = 0; i < n; ++i) {
	      strengths[i] = +strength(nodes[i], i, nodes);
	    }
	  }
	
	  function accumulate(quad) {
	    var strength = 0,
	        q,
	        c,
	        x,
	        y,
	        i;
	
	    // For internal nodes, accumulate forces from child quadrants.
	    if (quad.length) {
	      for (x = y = i = 0; i < 4; ++i) {
	        if ((q = quad[i]) && (c = q.value)) {
	          strength += c, x += c * q.x, y += c * q.y;
	        }
	      }
	      quad.x = x / strength;
	      quad.y = y / strength;
	    }
	
	    // For leaf nodes, accumulate forces from coincident quadrants.
	    else {
	        q = quad;
	        q.x = q.data.x;
	        q.y = q.data.y;
	        do {
	          strength += strengths[q.data.index];
	        } while (q = q.next);
	      }
	
	    quad.value = strength;
	  }
	
	  function apply(quad, x1, _, x2) {
	    if (!quad.value) return true;
	
	    var x = quad.x - node.x,
	        y = quad.y - node.y,
	        w = x2 - x1,
	        l = x * x + y * y;
	
	    // Apply the Barnes-Hut approximation if possible.
	    // Limit forces for very close nodes; randomize direction if coincident.
	    if (w * w / theta2 < l) {
	      if (l < distanceMax2) {
	        if (x === 0) x = (0, _jiggle2.default)(), l += x * x;
	        if (y === 0) y = (0, _jiggle2.default)(), l += y * y;
	        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	        node.vx += x * quad.value * alpha / l;
	        node.vy += y * quad.value * alpha / l;
	      }
	      return true;
	    }
	
	    // Otherwise, process points directly.
	    else if (quad.length || l >= distanceMax2) return;
	
	    // Limit forces for very close nodes; randomize direction if coincident.
	    if (quad.data !== node || quad.next) {
	      if (x === 0) x = (0, _jiggle2.default)(), l += x * x;
	      if (y === 0) y = (0, _jiggle2.default)(), l += y * y;
	      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	    }
	
	    do {
	      if (quad.data !== node) {
	        w = strengths[quad.data.index] * alpha / l;
	        node.vx += x * w;
	        node.vy += y * w;
	      }
	    } while (quad = quad.next);
	  }
	
	  force.initialize = function (_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.strength = function (_) {
	    return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : strength;
	  };
	
	  force.distanceMin = function (_) {
	    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
	  };
	
	  force.distanceMax = function (_) {
	    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
	  };
	
	  force.theta = function (_) {
	    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
	  };
	
	  return force;
	};
	
	var _constant = __webpack_require__(7);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _jiggle = __webpack_require__(8);
	
	var _jiggle2 = _interopRequireDefault(_jiggle);
	
	var _d3Quadtree = __webpack_require__(9);
	
	var _simulation = __webpack_require__(33);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	exports.x = x;
	exports.y = y;
	
	var _d3Dispatch = __webpack_require__(34);
	
	var _d3Collection = __webpack_require__(25);
	
	var _d3Timer = __webpack_require__(36);
	
	function x(d) {
	  return d.x;
	}
	
	function y(d) {
	  return d.y;
	}
	
	var initialRadius = 10,
	    initialAngle = Math.PI * (3 - Math.sqrt(5));
	
	function _default(_nodes) {
	  var simulation,
	      _alpha = 1,
	      _alphaMin = 0.001,
	      _alphaDecay = 1 - Math.pow(_alphaMin, 1 / 300),
	      _alphaTarget = 0,
	      _velocityDecay = 0.6,
	      forces = (0, _d3Collection.map)(),
	      stepper = (0, _d3Timer.timer)(step),
	      event = (0, _d3Dispatch.dispatch)("tick", "end");
	
	  if (_nodes == null) _nodes = [];
	
	  function step() {
	    tick();
	    event.call("tick", simulation);
	    if (_alpha < _alphaMin) {
	      stepper.stop();
	      event.call("end", simulation);
	    }
	  }
	
	  function tick() {
	    var i,
	        n = _nodes.length,
	        node;
	
	    _alpha += (_alphaTarget - _alpha) * _alphaDecay;
	
	    forces.each(function (force) {
	      force(_alpha);
	    });
	
	    for (i = 0; i < n; ++i) {
	      node = _nodes[i];
	      if (node.fx == null) node.x += node.vx *= _velocityDecay;else node.x = node.fx, node.vx = 0;
	      if (node.fy == null) node.y += node.vy *= _velocityDecay;else node.y = node.fy, node.vy = 0;
	    }
	  }
	
	  function initializeNodes() {
	    for (var i = 0, n = _nodes.length, node; i < n; ++i) {
	      node = _nodes[i], node.index = i;
	      if (isNaN(node.x) || isNaN(node.y)) {
	        var radius = initialRadius * Math.sqrt(i),
	            angle = i * initialAngle;
	        node.x = radius * Math.cos(angle);
	        node.y = radius * Math.sin(angle);
	      }
	      if (isNaN(node.vx) || isNaN(node.vy)) {
	        node.vx = node.vy = 0;
	      }
	    }
	  }
	
	  function initializeForce(force) {
	    if (force.initialize) force.initialize(_nodes);
	    return force;
	  }
	
	  initializeNodes();
	
	  return simulation = {
	    tick: tick,
	
	    restart: function restart() {
	      return stepper.restart(step), simulation;
	    },
	
	    stop: function stop() {
	      return stepper.stop(), simulation;
	    },
	
	    nodes: function nodes(_) {
	      return arguments.length ? (_nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : _nodes;
	    },
	
	    alpha: function alpha(_) {
	      return arguments.length ? (_alpha = +_, simulation) : _alpha;
	    },
	
	    alphaMin: function alphaMin(_) {
	      return arguments.length ? (_alphaMin = +_, simulation) : _alphaMin;
	    },
	
	    alphaDecay: function alphaDecay(_) {
	      return arguments.length ? (_alphaDecay = +_, simulation) : +_alphaDecay;
	    },
	
	    alphaTarget: function alphaTarget(_) {
	      return arguments.length ? (_alphaTarget = +_, simulation) : _alphaTarget;
	    },
	
	    velocityDecay: function velocityDecay(_) {
	      return arguments.length ? (_velocityDecay = 1 - _, simulation) : 1 - _velocityDecay;
	    },
	
	    force: function force(name, _) {
	      return arguments.length > 1 ? (_ == null ? forces.remove(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
	    },
	
	    find: function find(x, y, radius) {
	      var i = 0,
	          n = _nodes.length,
	          dx,
	          dy,
	          d2,
	          node,
	          closest;
	
	      if (radius == null) radius = Infinity;else radius *= radius;
	
	      for (i = 0; i < n; ++i) {
	        node = _nodes[i];
	        dx = x - node.x;
	        dy = y - node.y;
	        d2 = dx * dx + dy * dy;
	        if (d2 < radius) closest = node, radius = d2;
	      }
	
	      return closest;
	    },
	
	    on: function on(name, _) {
	      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
	    }
	  };
	}
	exports.default = _default;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dispatch = __webpack_require__(35);
	
	Object.defineProperty(exports, "dispatch", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dispatch).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var noop = { value: function value() {} };
	
	function dispatch() {
	  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
	    if (!(t = arguments[i] + "") || t in _) throw new Error("illegal type: " + t);
	    _[t] = [];
	  }
	  return new Dispatch(_);
	}
	
	function Dispatch(_) {
	  this._ = _;
	}
	
	function parseTypenames(typenames, types) {
	  return typenames.trim().split(/^|\s+/).map(function (t) {
	    var name = "",
	        i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
	    return { type: t, name: name };
	  });
	}
	
	Dispatch.prototype = dispatch.prototype = {
	  constructor: Dispatch,
	  on: function on(typename, callback) {
	    var _ = this._,
	        T = parseTypenames(typename + "", _),
	        t,
	        i = -1,
	        n = T.length;
	
	    // If no callback was specified, return the callback of the given type and name.
	    if (arguments.length < 2) {
	      while (++i < n) {
	        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
	      }return;
	    }
	
	    // If a type was specified, set the callback for the given type and name.
	    // Otherwise, if a null callback was specified, remove callbacks of the given name.
	    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
	    while (++i < n) {
	      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) {
	        _[t] = set(_[t], typename.name, null);
	      }
	    }
	
	    return this;
	  },
	  copy: function copy() {
	    var copy = {},
	        _ = this._;
	    for (var t in _) {
	      copy[t] = _[t].slice();
	    }return new Dispatch(copy);
	  },
	  call: function call(type, that) {
	    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
	      args[i] = arguments[i + 2];
	    }if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
	      t[i].value.apply(that, args);
	    }
	  },
	  apply: function apply(type, that, args) {
	    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
	      t[i].value.apply(that, args);
	    }
	  }
	};
	
	function get(type, name) {
	  for (var i = 0, n = type.length, c; i < n; ++i) {
	    if ((c = type[i]).name === name) {
	      return c.value;
	    }
	  }
	}
	
	function set(type, name, callback) {
	  for (var i = 0, n = type.length; i < n; ++i) {
	    if (type[i].name === name) {
	      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
	      break;
	    }
	  }
	  if (callback != null) type.push({ name: name, value: callback });
	  return type;
	}
	
	exports.default = dispatch;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _timer = __webpack_require__(37);
	
	Object.defineProperty(exports, "now", {
	  enumerable: true,
	  get: function get() {
	    return _timer.now;
	  }
	});
	Object.defineProperty(exports, "timer", {
	  enumerable: true,
	  get: function get() {
	    return _timer.timer;
	  }
	});
	Object.defineProperty(exports, "timerFlush", {
	  enumerable: true,
	  get: function get() {
	    return _timer.timerFlush;
	  }
	});
	
	var _timeout = __webpack_require__(38);
	
	Object.defineProperty(exports, "timeout", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_timeout).default;
	  }
	});
	
	var _interval = __webpack_require__(39);
	
	Object.defineProperty(exports, "interval", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_interval).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.now = now;
	exports.Timer = Timer;
	exports.timer = timer;
	exports.timerFlush = timerFlush;
	var frame = 0,
	    // is an animation frame pending?
	timeout = 0,
	    // is a timeout pending?
	interval = 0,
	    // are any timers active?
	pokeDelay = 1000,
	    // how frequently we check for clock skew
	taskHead,
	    taskTail,
	    clockLast = 0,
	    clockNow = 0,
	    clockSkew = 0,
	    clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
	    setFrame = typeof requestAnimationFrame === "function" ? requestAnimationFrame : function (f) {
	  setTimeout(f, 17);
	};
	
	function now() {
	  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
	}
	
	function clearNow() {
	  clockNow = 0;
	}
	
	function Timer() {
	  this._call = this._time = this._next = null;
	}
	
	Timer.prototype = timer.prototype = {
	  constructor: Timer,
	  restart: function restart(callback, delay, time) {
	    if (typeof callback !== "function") throw new TypeError("callback is not a function");
	    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
	    if (!this._next && taskTail !== this) {
	      if (taskTail) taskTail._next = this;else taskHead = this;
	      taskTail = this;
	    }
	    this._call = callback;
	    this._time = time;
	    sleep();
	  },
	  stop: function stop() {
	    if (this._call) {
	      this._call = null;
	      this._time = Infinity;
	      sleep();
	    }
	  }
	};
	
	function timer(callback, delay, time) {
	  var t = new Timer();
	  t.restart(callback, delay, time);
	  return t;
	}
	
	function timerFlush() {
	  now(); // Get the current time, if not already set.
	  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
	  var t = taskHead,
	      e;
	  while (t) {
	    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
	    t = t._next;
	  }
	  --frame;
	}
	
	function wake() {
	  clockNow = (clockLast = clock.now()) + clockSkew;
	  frame = timeout = 0;
	  try {
	    timerFlush();
	  } finally {
	    frame = 0;
	    nap();
	    clockNow = 0;
	  }
	}
	
	function poke() {
	  var now = clock.now(),
	      delay = now - clockLast;
	  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
	}
	
	function nap() {
	  var t0,
	      t1 = taskHead,
	      t2,
	      time = Infinity;
	  while (t1) {
	    if (t1._call) {
	      if (time > t1._time) time = t1._time;
	      t0 = t1, t1 = t1._next;
	    } else {
	      t2 = t1._next, t1._next = null;
	      t1 = t0 ? t0._next = t2 : taskHead = t2;
	    }
	  }
	  taskTail = t0;
	  sleep(time);
	}
	
	function sleep(time) {
	  if (frame) return; // Soonest alarm already set, or will be.
	  if (timeout) timeout = clearTimeout(timeout);
	  var delay = time - clockNow;
	  if (delay > 24) {
	    if (time < Infinity) timeout = setTimeout(wake, delay);
	    if (interval) interval = clearInterval(interval);
	  } else {
	    if (!interval) interval = setInterval(poke, pokeDelay);
	    frame = 1, setFrame(wake);
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (callback, delay, time) {
	  var t = new _timer.Timer();
	  delay = delay == null ? 0 : +delay;
	  t.restart(function (elapsed) {
	    t.stop();
	    callback(elapsed + delay);
	  }, delay, time);
	  return t;
	};
	
	var _timer = __webpack_require__(37);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (callback, delay, time) {
	  var t = new _timer.Timer(),
	      total = delay;
	  if (delay == null) return t.restart(callback, delay, time), t;
	  delay = +delay, time = time == null ? (0, _timer.now)() : +time;
	  t.restart(function tick(elapsed) {
	    elapsed += total;
	    t.restart(tick, total += delay, time);
	    callback(elapsed);
	  }, delay, time);
	  return t;
	};
	
	var _timer = __webpack_require__(37);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  var strength = (0, _constant2.default)(0.1),
	      nodes,
	      strengths,
	      xz;
	
	  if (typeof x !== "function") x = (0, _constant2.default)(x == null ? 0 : +x);
	
	  function force(alpha) {
	    for (var i = 0, n = nodes.length, node; i < n; ++i) {
	      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
	    }
	  }
	
	  function initialize() {
	    if (!nodes) return;
	    var i,
	        n = nodes.length;
	    strengths = new Array(n);
	    xz = new Array(n);
	    for (i = 0; i < n; ++i) {
	      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	    }
	  }
	
	  force.initialize = function (_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.strength = function (_) {
	    return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : strength;
	  };
	
	  force.x = function (_) {
	    return arguments.length ? (x = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : x;
	  };
	
	  return force;
	};
	
	var _constant = __webpack_require__(7);
	
	var _constant2 = _interopRequireDefault(_constant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (y) {
	  var strength = (0, _constant2.default)(0.1),
	      nodes,
	      strengths,
	      yz;
	
	  if (typeof y !== "function") y = (0, _constant2.default)(y == null ? 0 : +y);
	
	  function force(alpha) {
	    for (var i = 0, n = nodes.length, node; i < n; ++i) {
	      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
	    }
	  }
	
	  function initialize() {
	    if (!nodes) return;
	    var i,
	        n = nodes.length;
	    strengths = new Array(n);
	    yz = new Array(n);
	    for (i = 0; i < n; ++i) {
	      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	    }
	  }
	
	  force.initialize = function (_) {
	    nodes = _;
	    initialize();
	  };
	
	  force.strength = function (_) {
	    return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : strength;
	  };
	
	  force.y = function (_) {
	    return arguments.length ? (y = typeof _ === "function" ? _ : (0, _constant2.default)(+_), initialize(), force) : y;
	  };
	
	  return force;
	};
	
	var _constant = __webpack_require__(7);
	
	var _constant2 = _interopRequireDefault(_constant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _creator = __webpack_require__(43);
	
	Object.defineProperty(exports, "creator", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_creator).default;
	  }
	});
	
	var _local = __webpack_require__(46);
	
	Object.defineProperty(exports, "local", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_local).default;
	  }
	});
	
	var _matcher = __webpack_require__(47);
	
	Object.defineProperty(exports, "matcher", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_matcher).default;
	  }
	});
	
	var _mouse = __webpack_require__(48);
	
	Object.defineProperty(exports, "mouse", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_mouse).default;
	  }
	});
	
	var _namespace = __webpack_require__(44);
	
	Object.defineProperty(exports, "namespace", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_namespace).default;
	  }
	});
	
	var _namespaces = __webpack_require__(45);
	
	Object.defineProperty(exports, "namespaces", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_namespaces).default;
	  }
	});
	
	var _select = __webpack_require__(52);
	
	Object.defineProperty(exports, "select", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_select).default;
	  }
	});
	
	var _selectAll = __webpack_require__(87);
	
	Object.defineProperty(exports, "selectAll", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_selectAll).default;
	  }
	});
	
	var _index = __webpack_require__(53);
	
	Object.defineProperty(exports, "selection", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});
	
	var _selector = __webpack_require__(55);
	
	Object.defineProperty(exports, "selector", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_selector).default;
	  }
	});
	
	var _selectorAll = __webpack_require__(57);
	
	Object.defineProperty(exports, "selectorAll", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_selectorAll).default;
	  }
	});
	
	var _touch = __webpack_require__(88);
	
	Object.defineProperty(exports, "touch", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_touch).default;
	  }
	});
	
	var _touches = __webpack_require__(89);
	
	Object.defineProperty(exports, "touches", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_touches).default;
	  }
	});
	
	var _window = __webpack_require__(75);
	
	Object.defineProperty(exports, "window", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_window).default;
	  }
	});
	
	var _on = __webpack_require__(50);
	
	Object.defineProperty(exports, "event", {
	  enumerable: true,
	  get: function get() {
	    return _on.event;
	  }
	});
	Object.defineProperty(exports, "customEvent", {
	  enumerable: true,
	  get: function get() {
	    return _on.customEvent;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name) {
	  var fullname = (0, _namespace2.default)(name);
	  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
	};
	
	var _namespace = __webpack_require__(44);
	
	var _namespace2 = _interopRequireDefault(_namespace);
	
	var _namespaces = __webpack_require__(45);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function creatorInherit(name) {
	  return function () {
	    var document = this.ownerDocument,
	        uri = this.namespaceURI;
	    return uri === _namespaces.xhtml && document.documentElement.namespaceURI === _namespaces.xhtml ? document.createElement(name) : document.createElementNS(uri, name);
	  };
	}
	
	function creatorFixed(fullname) {
	  return function () {
	    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	  };
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name) {
	  var prefix = name += "",
	      i = prefix.indexOf(":");
	  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	  return _namespaces2.default.hasOwnProperty(prefix) ? { space: _namespaces2.default[prefix], local: name } : name;
	};
	
	var _namespaces = __webpack_require__(45);
	
	var _namespaces2 = _interopRequireDefault(_namespaces);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var xhtml = exports.xhtml = "http://www.w3.org/1999/xhtml";
	
	exports.default = {
	  svg: "http://www.w3.org/2000/svg",
	  xhtml: xhtml,
	  xlink: "http://www.w3.org/1999/xlink",
	  xml: "http://www.w3.org/XML/1998/namespace",
	  xmlns: "http://www.w3.org/2000/xmlns/"
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = local;
	var nextId = 0;
	
	function local() {
	  return new Local();
	}
	
	function Local() {
	  this._ = "@" + (++nextId).toString(36);
	}
	
	Local.prototype = local.prototype = {
	  constructor: Local,
	  get: function get(node) {
	    var id = this._;
	    while (!(id in node)) {
	      if (!(node = node.parentNode)) return;
	    }return node[id];
	  },
	  set: function set(node, value) {
	    return node[this._] = value;
	  },
	  remove: function remove(node) {
	    return this._ in node && delete node[this._];
	  },
	  toString: function toString() {
	    return this._;
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var matcher = function matcher(selector) {
	  return function () {
	    return this.matches(selector);
	  };
	};
	
	if (typeof document !== "undefined") {
	  var element = document.documentElement;
	  if (!element.matches) {
	    var vendorMatches = element.webkitMatchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector;
	    matcher = function matcher(selector) {
	      return function () {
	        return vendorMatches.call(this, selector);
	      };
	    };
	  }
	}
	
	exports.default = matcher;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (node) {
	  var event = (0, _sourceEvent2.default)();
	  if (event.changedTouches) event = event.changedTouches[0];
	  return (0, _point2.default)(node, event);
	};
	
	var _sourceEvent = __webpack_require__(49);
	
	var _sourceEvent2 = _interopRequireDefault(_sourceEvent);
	
	var _point = __webpack_require__(51);
	
	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var current = _on.event,
	      source;
	  while (source = current.sourceEvent) {
	    current = source;
	  }return current;
	};
	
	var _on = __webpack_require__(50);

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (typename, value, capture) {
	  var typenames = parseTypenames(typename + ""),
	      i,
	      n = typenames.length,
	      t;
	
	  if (arguments.length < 2) {
	    var on = this.node().__on;
	    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	      for (i = 0, o = on[j]; i < n; ++i) {
	        if ((t = typenames[i]).type === o.type && t.name === o.name) {
	          return o.value;
	        }
	      }
	    }
	    return;
	  }
	
	  on = value ? onAdd : onRemove;
	  if (capture == null) capture = false;
	  for (i = 0; i < n; ++i) {
	    this.each(on(typenames[i], value, capture));
	  }return this;
	};
	
	exports.customEvent = customEvent;
	var filterEvents = {};
	
	var event = exports.event = null;
	
	if (typeof document !== "undefined") {
	  var element = document.documentElement;
	  if (!("onmouseenter" in element)) {
	    filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
	  }
	}
	
	function filterContextListener(listener, index, group) {
	  listener = contextListener(listener, index, group);
	  return function (event) {
	    var related = event.relatedTarget;
	    if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
	      listener.call(this, event);
	    }
	  };
	}
	
	function contextListener(listener, index, group) {
	  return function (event1) {
	    var event0 = event; // Events can be reentrant (e.g., focus).
	    exports.event = event = event1;
	    try {
	      listener.call(this, this.__data__, index, group);
	    } finally {
	      exports.event = event = event0;
	    }
	  };
	}
	
	function parseTypenames(typenames) {
	  return typenames.trim().split(/^|\s+/).map(function (t) {
	    var name = "",
	        i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    return { type: t, name: name };
	  });
	}
	
	function onRemove(typename) {
	  return function () {
	    var on = this.__on;
	    if (!on) return;
	    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.capture);
	      } else {
	        on[++i] = o;
	      }
	    }
	    if (++i) on.length = i;else delete this.__on;
	  };
	}
	
	function onAdd(typename, value, capture) {
	  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
	  return function (d, i, group) {
	    var on = this.__on,
	        o,
	        listener = wrap(value, i, group);
	    if (on) for (var j = 0, m = on.length; j < m; ++j) {
	      if ((o = on[j]).type === typename.type && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.capture);
	        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
	        o.value = value;
	        return;
	      }
	    }
	    this.addEventListener(typename.type, listener, capture);
	    o = { type: typename.type, name: typename.name, value: value, listener: listener, capture: capture };
	    if (!on) this.__on = [o];else on.push(o);
	  };
	}
	
	function customEvent(event1, listener, that, args) {
	  var event0 = event;
	  event1.sourceEvent = event;
	  exports.event = event = event1;
	  try {
	    return listener.apply(that, args);
	  } finally {
	    exports.event = event = event0;
	  }
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (node, event) {
	  var svg = node.ownerSVGElement || node;
	
	  if (svg.createSVGPoint) {
	    var point = svg.createSVGPoint();
	    point.x = event.clientX, point.y = event.clientY;
	    point = point.matrixTransform(node.getScreenCTM().inverse());
	    return [point.x, point.y];
	  }
	
	  var rect = node.getBoundingClientRect();
	  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (selector) {
	    return typeof selector === "string" ? new _index.Selection([[document.querySelector(selector)]], [document.documentElement]) : new _index.Selection([[selector]], _index.root);
	};
	
	var _index = __webpack_require__(53);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.root = undefined;
	exports.Selection = Selection;
	
	var _select = __webpack_require__(54);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _selectAll = __webpack_require__(56);
	
	var _selectAll2 = _interopRequireDefault(_selectAll);
	
	var _filter = __webpack_require__(58);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _data = __webpack_require__(59);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _enter = __webpack_require__(60);
	
	var _enter2 = _interopRequireDefault(_enter);
	
	var _exit = __webpack_require__(63);
	
	var _exit2 = _interopRequireDefault(_exit);
	
	var _merge = __webpack_require__(64);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _order = __webpack_require__(65);
	
	var _order2 = _interopRequireDefault(_order);
	
	var _sort = __webpack_require__(66);
	
	var _sort2 = _interopRequireDefault(_sort);
	
	var _call = __webpack_require__(67);
	
	var _call2 = _interopRequireDefault(_call);
	
	var _nodes = __webpack_require__(68);
	
	var _nodes2 = _interopRequireDefault(_nodes);
	
	var _node = __webpack_require__(69);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _size = __webpack_require__(70);
	
	var _size2 = _interopRequireDefault(_size);
	
	var _empty = __webpack_require__(71);
	
	var _empty2 = _interopRequireDefault(_empty);
	
	var _each = __webpack_require__(72);
	
	var _each2 = _interopRequireDefault(_each);
	
	var _attr = __webpack_require__(73);
	
	var _attr2 = _interopRequireDefault(_attr);
	
	var _style = __webpack_require__(74);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _property = __webpack_require__(76);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _classed = __webpack_require__(77);
	
	var _classed2 = _interopRequireDefault(_classed);
	
	var _text = __webpack_require__(78);
	
	var _text2 = _interopRequireDefault(_text);
	
	var _html = __webpack_require__(79);
	
	var _html2 = _interopRequireDefault(_html);
	
	var _raise = __webpack_require__(80);
	
	var _raise2 = _interopRequireDefault(_raise);
	
	var _lower = __webpack_require__(81);
	
	var _lower2 = _interopRequireDefault(_lower);
	
	var _append = __webpack_require__(82);
	
	var _append2 = _interopRequireDefault(_append);
	
	var _insert = __webpack_require__(83);
	
	var _insert2 = _interopRequireDefault(_insert);
	
	var _remove = __webpack_require__(84);
	
	var _remove2 = _interopRequireDefault(_remove);
	
	var _datum = __webpack_require__(85);
	
	var _datum2 = _interopRequireDefault(_datum);
	
	var _on = __webpack_require__(50);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _dispatch = __webpack_require__(86);
	
	var _dispatch2 = _interopRequireDefault(_dispatch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var root = exports.root = [null];
	
	function Selection(groups, parents) {
	  this._groups = groups;
	  this._parents = parents;
	}
	
	function selection() {
	  return new Selection([[document.documentElement]], root);
	}
	
	Selection.prototype = selection.prototype = {
	  constructor: Selection,
	  select: _select2.default,
	  selectAll: _selectAll2.default,
	  filter: _filter2.default,
	  data: _data2.default,
	  enter: _enter2.default,
	  exit: _exit2.default,
	  merge: _merge2.default,
	  order: _order2.default,
	  sort: _sort2.default,
	  call: _call2.default,
	  nodes: _nodes2.default,
	  node: _node2.default,
	  size: _size2.default,
	  empty: _empty2.default,
	  each: _each2.default,
	  attr: _attr2.default,
	  style: _style2.default,
	  property: _property2.default,
	  classed: _classed2.default,
	  text: _text2.default,
	  html: _html2.default,
	  raise: _raise2.default,
	  lower: _lower2.default,
	  append: _append2.default,
	  insert: _insert2.default,
	  remove: _remove2.default,
	  datum: _datum2.default,
	  on: _on2.default,
	  dispatch: _dispatch2.default
	};
	
	exports.default = selection;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (select) {
	  if (typeof select !== "function") select = (0, _selector2.default)(select);
	
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	      }
	    }
	  }
	
	  return new _index.Selection(subgroups, this._parents);
	};
	
	var _index = __webpack_require__(53);
	
	var _selector = __webpack_require__(55);
	
	var _selector2 = _interopRequireDefault(_selector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (selector) {
	  return selector == null ? none : function () {
	    return this.querySelector(selector);
	  };
	};
	
	function none() {}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (select) {
	  if (typeof select !== "function") select = (0, _selectorAll2.default)(select);
	
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        subgroups.push(select.call(node, node.__data__, i, group));
	        parents.push(node);
	      }
	    }
	  }
	
	  return new _index.Selection(subgroups, parents);
	};
	
	var _index = __webpack_require__(53);
	
	var _selectorAll = __webpack_require__(57);
	
	var _selectorAll2 = _interopRequireDefault(_selectorAll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (selector) {
	  return selector == null ? empty : function () {
	    return this.querySelectorAll(selector);
	  };
	};
	
	function empty() {
	  return [];
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (match) {
	  if (typeof match !== "function") match = (0, _matcher2.default)(match);
	
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	
	  return new _index.Selection(subgroups, this._parents);
	};
	
	var _index = __webpack_require__(53);
	
	var _matcher = __webpack_require__(47);
	
	var _matcher2 = _interopRequireDefault(_matcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value, key) {
	  if (!value) {
	    data = new Array(this.size()), j = -1;
	    this.each(function (d) {
	      data[++j] = d;
	    });
	    return data;
	  }
	
	  var bind = key ? bindKey : bindIndex,
	      parents = this._parents,
	      groups = this._groups;
	
	  if (typeof value !== "function") value = (0, _constant2.default)(value);
	
	  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	    var parent = parents[j],
	        group = groups[j],
	        groupLength = group.length,
	        data = value.call(parent, parent && parent.__data__, j, parents),
	        dataLength = data.length,
	        enterGroup = enter[j] = new Array(dataLength),
	        updateGroup = update[j] = new Array(dataLength),
	        exitGroup = exit[j] = new Array(groupLength);
	
	    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
	
	    // Now connect the enter nodes to their following update node, such that
	    // appendChild can insert the materialized enter node before this node,
	    // rather than at the end of the parent node.
	    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	      if (previous = enterGroup[i0]) {
	        if (i0 >= i1) i1 = i0 + 1;
	        while (!(next = updateGroup[i1]) && ++i1 < dataLength) {}
	        previous._next = next || null;
	      }
	    }
	  }
	
	  update = new _index.Selection(update, parents);
	  update._enter = enter;
	  update._exit = exit;
	  return update;
	};
	
	var _index = __webpack_require__(53);
	
	var _enter = __webpack_require__(60);
	
	var _constant = __webpack_require__(62);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var keyPrefix = "$"; // Protect against keys like “__proto__”.
	
	function bindIndex(parent, group, enter, update, exit, data) {
	  var i = 0,
	      node,
	      groupLength = group.length,
	      dataLength = data.length;
	
	  // Put any non-null nodes that fit into update.
	  // Put any null nodes into enter.
	  // Put any remaining data into enter.
	  for (; i < dataLength; ++i) {
	    if (node = group[i]) {
	      node.__data__ = data[i];
	      update[i] = node;
	    } else {
	      enter[i] = new _enter.EnterNode(parent, data[i]);
	    }
	  }
	
	  // Put any non-null nodes that don’t fit into exit.
	  for (; i < groupLength; ++i) {
	    if (node = group[i]) {
	      exit[i] = node;
	    }
	  }
	}
	
	function bindKey(parent, group, enter, update, exit, data, key) {
	  var i,
	      node,
	      nodeByKeyValue = {},
	      groupLength = group.length,
	      dataLength = data.length,
	      keyValues = new Array(groupLength),
	      keyValue;
	
	  // Compute the key for each node.
	  // If multiple nodes have the same key, the duplicates are added to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if (node = group[i]) {
	      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
	      if (keyValue in nodeByKeyValue) {
	        exit[i] = node;
	      } else {
	        nodeByKeyValue[keyValue] = node;
	      }
	    }
	  }
	
	  // Compute the key for each datum.
	  // If there a node associated with this key, join and add it to update.
	  // If there is not (or the key is a duplicate), add it to enter.
	  for (i = 0; i < dataLength; ++i) {
	    keyValue = keyPrefix + key.call(parent, data[i], i, data);
	    if (node = nodeByKeyValue[keyValue]) {
	      update[i] = node;
	      node.__data__ = data[i];
	      nodeByKeyValue[keyValue] = null;
	    } else {
	      enter[i] = new _enter.EnterNode(parent, data[i]);
	    }
	  }
	
	  // Add any remaining nodes that were not bound to data to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
	      exit[i] = node;
	    }
	  }
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return new _index.Selection(this._enter || this._groups.map(_sparse2.default), this._parents);
	};
	
	exports.EnterNode = EnterNode;
	
	var _sparse = __webpack_require__(61);
	
	var _sparse2 = _interopRequireDefault(_sparse);
	
	var _index = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function EnterNode(parent, datum) {
	  this.ownerDocument = parent.ownerDocument;
	  this.namespaceURI = parent.namespaceURI;
	  this._next = null;
	  this._parent = parent;
	  this.__data__ = datum;
	}
	
	EnterNode.prototype = {
	  constructor: EnterNode,
	  appendChild: function appendChild(child) {
	    return this._parent.insertBefore(child, this._next);
	  },
	  insertBefore: function insertBefore(child, next) {
	    return this._parent.insertBefore(child, next);
	  },
	  querySelector: function querySelector(selector) {
	    return this._parent.querySelector(selector);
	  },
	  querySelectorAll: function querySelectorAll(selector) {
	    return this._parent.querySelectorAll(selector);
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (update) {
	  return new Array(update.length);
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return function () {
	    return x;
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return new _index.Selection(this._exit || this._groups.map(_sparse2.default), this._parents);
	};
	
	var _sparse = __webpack_require__(61);
	
	var _sparse2 = _interopRequireDefault(_sparse);
	
	var _index = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (selection) {
	
	  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	
	  return new _index.Selection(merges, this._parents);
	};
	
	var _index = __webpack_require__(53);

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	      if (node = group[i]) {
	        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	        next = node;
	      }
	    }
	  }
	
	  return this;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (compare) {
	  if (!compare) compare = ascending;
	
	  function compareNode(a, b) {
	    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	  }
	
	  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        sortgroup[i] = node;
	      }
	    }
	    sortgroup.sort(compareNode);
	  }
	
	  return new _index.Selection(sortgroups, this._parents).order();
	};
	
	var _index = __webpack_require__(53);
	
	function ascending(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var callback = arguments[0];
	  arguments[0] = this;
	  callback.apply(null, arguments);
	  return this;
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var nodes = new Array(this.size()),
	      i = -1;
	  this.each(function () {
	    nodes[++i] = this;
	  });
	  return nodes;
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	      var node = group[i];
	      if (node) return node;
	    }
	  }
	
	  return null;
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var size = 0;
	  this.each(function () {
	    ++size;
	  });
	  return size;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return !this.node();
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (callback) {
	
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) callback.call(node, node.__data__, i, group);
	    }
	  }
	
	  return this;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, value) {
	  var fullname = (0, _namespace2.default)(name);
	
	  if (arguments.length < 2) {
	    var node = this.node();
	    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
	  }
	
	  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
	};
	
	var _namespace = __webpack_require__(44);
	
	var _namespace2 = _interopRequireDefault(_namespace);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function attrRemove(name) {
	  return function () {
	    this.removeAttribute(name);
	  };
	}
	
	function attrRemoveNS(fullname) {
	  return function () {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	
	function attrConstant(name, value) {
	  return function () {
	    this.setAttribute(name, value);
	  };
	}
	
	function attrConstantNS(fullname, value) {
	  return function () {
	    this.setAttributeNS(fullname.space, fullname.local, value);
	  };
	}
	
	function attrFunction(name, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
	  };
	}
	
	function attrFunctionNS(fullname, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
	  };
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, value, priority) {
	  var node;
	  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : (0, _window2.default)(node = this.node()).getComputedStyle(node, null).getPropertyValue(name);
	};
	
	var _window = __webpack_require__(75);
	
	var _window2 = _interopRequireDefault(_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function styleRemove(name) {
	  return function () {
	    this.style.removeProperty(name);
	  };
	}
	
	function styleConstant(name, value, priority) {
	  return function () {
	    this.style.setProperty(name, value, priority);
	  };
	}
	
	function styleFunction(name, value, priority) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
	  };
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (node) {
	    return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
	    node.document && node // node is a Window
	    || node.defaultView; // node is a Document
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, value) {
	  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
	};
	
	function propertyRemove(name) {
	  return function () {
	    delete this[name];
	  };
	}
	
	function propertyConstant(name, value) {
	  return function () {
	    this[name] = value;
	  };
	}
	
	function propertyFunction(name, value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    if (v == null) delete this[name];else this[name] = v;
	  };
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, value) {
	  var names = classArray(name + "");
	
	  if (arguments.length < 2) {
	    var list = classList(this.node()),
	        i = -1,
	        n = names.length;
	    while (++i < n) {
	      if (!list.contains(names[i])) return false;
	    }return true;
	  }
	
	  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
	};
	
	function classArray(string) {
	  return string.trim().split(/^|\s+/);
	}
	
	function classList(node) {
	  return node.classList || new ClassList(node);
	}
	
	function ClassList(node) {
	  this._node = node;
	  this._names = classArray(node.getAttribute("class") || "");
	}
	
	ClassList.prototype = {
	  add: function add(name) {
	    var i = this._names.indexOf(name);
	    if (i < 0) {
	      this._names.push(name);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  remove: function remove(name) {
	    var i = this._names.indexOf(name);
	    if (i >= 0) {
	      this._names.splice(i, 1);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  contains: function contains(name) {
	    return this._names.indexOf(name) >= 0;
	  }
	};
	
	function classedAdd(node, names) {
	  var list = classList(node),
	      i = -1,
	      n = names.length;
	  while (++i < n) {
	    list.add(names[i]);
	  }
	}
	
	function classedRemove(node, names) {
	  var list = classList(node),
	      i = -1,
	      n = names.length;
	  while (++i < n) {
	    list.remove(names[i]);
	  }
	}
	
	function classedTrue(names) {
	  return function () {
	    classedAdd(this, names);
	  };
	}
	
	function classedFalse(names) {
	  return function () {
	    classedRemove(this, names);
	  };
	}
	
	function classedFunction(names, value) {
	  return function () {
	    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	  };
	}

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
	};
	
	function textRemove() {
	  this.textContent = "";
	}
	
	function textConstant(value) {
	  return function () {
	    this.textContent = value;
	  };
	}
	
	function textFunction(value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    this.textContent = v == null ? "" : v;
	  };
	}

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
	};
	
	function htmlRemove() {
	  this.innerHTML = "";
	}
	
	function htmlConstant(value) {
	  return function () {
	    this.innerHTML = value;
	  };
	}
	
	function htmlFunction(value) {
	  return function () {
	    var v = value.apply(this, arguments);
	    this.innerHTML = v == null ? "" : v;
	  };
	}

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return this.each(raise);
	};
	
	function raise() {
	  if (this.nextSibling) this.parentNode.appendChild(this);
	}

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return this.each(lower);
	};
	
	function lower() {
	  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name) {
	  var create = typeof name === "function" ? name : (0, _creator2.default)(name);
	  return this.select(function () {
	    return this.appendChild(create.apply(this, arguments));
	  });
	};
	
	var _creator = __webpack_require__(43);
	
	var _creator2 = _interopRequireDefault(_creator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, before) {
	  var create = typeof name === "function" ? name : (0, _creator2.default)(name),
	      select = before == null ? constantNull : typeof before === "function" ? before : (0, _selector2.default)(before);
	  return this.select(function () {
	    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	  });
	};
	
	var _creator = __webpack_require__(43);
	
	var _creator2 = _interopRequireDefault(_creator);
	
	var _selector = __webpack_require__(55);
	
	var _selector2 = _interopRequireDefault(_selector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function constantNull() {
	  return null;
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return this.each(remove);
	};
	
	function remove() {
	  var parent = this.parentNode;
	  if (parent) parent.removeChild(this);
	}

/***/ },
/* 85 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (value) {
	    return arguments.length ? this.property("__data__", value) : this.node().__data__;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (type, params) {
	  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
	};
	
	var _window = __webpack_require__(75);
	
	var _window2 = _interopRequireDefault(_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function dispatchEvent(node, type, params) {
	  var window = (0, _window2.default)(node),
	      event = window.CustomEvent;
	
	  if (event) {
	    event = new event(type, params);
	  } else {
	    event = window.document.createEvent("Event");
	    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
	  }
	
	  node.dispatchEvent(event);
	}
	
	function dispatchConstant(type, params) {
	  return function () {
	    return dispatchEvent(this, type, params);
	  };
	}
	
	function dispatchFunction(type, params) {
	  return function () {
	    return dispatchEvent(this, type, params.apply(this, arguments));
	  };
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (selector) {
	    return typeof selector === "string" ? new _index.Selection([document.querySelectorAll(selector)], [document.documentElement]) : new _index.Selection([selector == null ? [] : selector], _index.root);
	};
	
	var _index = __webpack_require__(53);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (node, touches, identifier) {
	  if (arguments.length < 3) identifier = touches, touches = (0, _sourceEvent2.default)().changedTouches;
	
	  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
	    if ((touch = touches[i]).identifier === identifier) {
	      return (0, _point2.default)(node, touch);
	    }
	  }
	
	  return null;
	};
	
	var _sourceEvent = __webpack_require__(49);
	
	var _sourceEvent2 = _interopRequireDefault(_sourceEvent);
	
	var _point = __webpack_require__(51);
	
	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (node, touches) {
	  if (touches == null) touches = (0, _sourceEvent2.default)().touches;
	
	  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
	    points[i] = (0, _point2.default)(node, touches[i]);
	  }
	
	  return points;
	};
	
	var _sourceEvent = __webpack_require__(49);
	
	var _sourceEvent2 = _interopRequireDefault(_sourceEvent);
	
	var _point = __webpack_require__(51);
	
	var _point2 = _interopRequireDefault(_point);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _band = __webpack_require__(91);
	
	Object.defineProperty(exports, "scaleBand", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_band).default;
	  }
	});
	Object.defineProperty(exports, "scalePoint", {
	  enumerable: true,
	  get: function get() {
	    return _band.point;
	  }
	});
	
	var _identity = __webpack_require__(125);
	
	Object.defineProperty(exports, "scaleIdentity", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_identity).default;
	  }
	});
	
	var _linear = __webpack_require__(126);
	
	Object.defineProperty(exports, "scaleLinear", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_linear).default;
	  }
	});
	
	var _log = __webpack_require__(173);
	
	Object.defineProperty(exports, "scaleLog", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_log).default;
	  }
	});
	
	var _ordinal = __webpack_require__(123);
	
	Object.defineProperty(exports, "scaleOrdinal", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ordinal).default;
	  }
	});
	Object.defineProperty(exports, "scaleImplicit", {
	  enumerable: true,
	  get: function get() {
	    return _ordinal.implicit;
	  }
	});
	
	var _pow = __webpack_require__(175);
	
	Object.defineProperty(exports, "scalePow", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_pow).default;
	  }
	});
	Object.defineProperty(exports, "scaleSqrt", {
	  enumerable: true,
	  get: function get() {
	    return _pow.sqrt;
	  }
	});
	
	var _quantile = __webpack_require__(176);
	
	Object.defineProperty(exports, "scaleQuantile", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quantile).default;
	  }
	});
	
	var _quantize = __webpack_require__(177);
	
	Object.defineProperty(exports, "scaleQuantize", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quantize).default;
	  }
	});
	
	var _threshold = __webpack_require__(178);
	
	Object.defineProperty(exports, "scaleThreshold", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_threshold).default;
	  }
	});
	
	var _time = __webpack_require__(179);
	
	Object.defineProperty(exports, "scaleTime", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_time).default;
	  }
	});
	
	var _utcTime = __webpack_require__(202);
	
	Object.defineProperty(exports, "scaleUtc", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_utcTime).default;
	  }
	});
	
	var _category = __webpack_require__(203);
	
	Object.defineProperty(exports, "schemeCategory10", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category).default;
	  }
	});
	
	var _category20b = __webpack_require__(205);
	
	Object.defineProperty(exports, "schemeCategory20b", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category20b).default;
	  }
	});
	
	var _category20c = __webpack_require__(206);
	
	Object.defineProperty(exports, "schemeCategory20c", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category20c).default;
	  }
	});
	
	var _category2 = __webpack_require__(207);
	
	Object.defineProperty(exports, "schemeCategory20", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category2).default;
	  }
	});
	
	var _cubehelix = __webpack_require__(208);
	
	Object.defineProperty(exports, "interpolateCubehelixDefault", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_cubehelix).default;
	  }
	});
	
	var _rainbow = __webpack_require__(209);
	
	Object.defineProperty(exports, "interpolateRainbow", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_rainbow).default;
	  }
	});
	Object.defineProperty(exports, "interpolateWarm", {
	  enumerable: true,
	  get: function get() {
	    return _rainbow.warm;
	  }
	});
	Object.defineProperty(exports, "interpolateCool", {
	  enumerable: true,
	  get: function get() {
	    return _rainbow.cool;
	  }
	});
	
	var _viridis = __webpack_require__(210);
	
	Object.defineProperty(exports, "interpolateViridis", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_viridis).default;
	  }
	});
	Object.defineProperty(exports, "interpolateMagma", {
	  enumerable: true,
	  get: function get() {
	    return _viridis.magma;
	  }
	});
	Object.defineProperty(exports, "interpolateInferno", {
	  enumerable: true,
	  get: function get() {
	    return _viridis.inferno;
	  }
	});
	Object.defineProperty(exports, "interpolatePlasma", {
	  enumerable: true,
	  get: function get() {
	    return _viridis.plasma;
	  }
	});
	
	var _sequential = __webpack_require__(211);
	
	Object.defineProperty(exports, "scaleSequential", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_sequential).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = band;
	exports.point = point;
	
	var _d3Array = __webpack_require__(92);
	
	var _ordinal = __webpack_require__(123);
	
	var _ordinal2 = _interopRequireDefault(_ordinal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function band() {
	  var scale = (0, _ordinal2.default)().unknown(undefined),
	      domain = scale.domain,
	      ordinalRange = scale.range,
	      range = [0, 1],
	      step,
	      bandwidth,
	      round = false,
	      paddingInner = 0,
	      paddingOuter = 0,
	      align = 0.5;
	
	  delete scale.unknown;
	
	  function rescale() {
	    var n = domain().length,
	        reverse = range[1] < range[0],
	        start = range[reverse - 0],
	        stop = range[1 - reverse];
	    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
	    if (round) step = Math.floor(step);
	    start += (stop - start - step * (n - paddingInner)) * align;
	    bandwidth = step * (1 - paddingInner);
	    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
	    var values = (0, _d3Array.range)(n).map(function (i) {
	      return start + step * i;
	    });
	    return ordinalRange(reverse ? values.reverse() : values);
	  }
	
	  scale.domain = function (_) {
	    return arguments.length ? (domain(_), rescale()) : domain();
	  };
	
	  scale.range = function (_) {
	    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
	  };
	
	  scale.rangeRound = function (_) {
	    return range = [+_[0], +_[1]], round = true, rescale();
	  };
	
	  scale.bandwidth = function () {
	    return bandwidth;
	  };
	
	  scale.step = function () {
	    return step;
	  };
	
	  scale.round = function (_) {
	    return arguments.length ? (round = !!_, rescale()) : round;
	  };
	
	  scale.padding = function (_) {
	    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	  };
	
	  scale.paddingInner = function (_) {
	    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	  };
	
	  scale.paddingOuter = function (_) {
	    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
	  };
	
	  scale.align = function (_) {
	    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
	  };
	
	  scale.copy = function () {
	    return band().domain(domain()).range(range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
	  };
	
	  return rescale();
	}
	
	function pointish(scale) {
	  var copy = scale.copy;
	
	  scale.padding = scale.paddingOuter;
	  delete scale.paddingInner;
	  delete scale.paddingOuter;
	
	  scale.copy = function () {
	    return pointish(copy());
	  };
	
	  return scale;
	}
	
	function point() {
	  return pointish(band().paddingInner(1));
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bisect = __webpack_require__(93);
	
	Object.defineProperty(exports, "bisect", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bisect).default;
	  }
	});
	Object.defineProperty(exports, "bisectRight", {
	  enumerable: true,
	  get: function get() {
	    return _bisect.bisectRight;
	  }
	});
	Object.defineProperty(exports, "bisectLeft", {
	  enumerable: true,
	  get: function get() {
	    return _bisect.bisectLeft;
	  }
	});
	
	var _ascending = __webpack_require__(94);
	
	Object.defineProperty(exports, "ascending", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ascending).default;
	  }
	});
	
	var _bisector = __webpack_require__(95);
	
	Object.defineProperty(exports, "bisector", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bisector).default;
	  }
	});
	
	var _descending = __webpack_require__(96);
	
	Object.defineProperty(exports, "descending", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_descending).default;
	  }
	});
	
	var _deviation = __webpack_require__(97);
	
	Object.defineProperty(exports, "deviation", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_deviation).default;
	  }
	});
	
	var _extent = __webpack_require__(100);
	
	Object.defineProperty(exports, "extent", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_extent).default;
	  }
	});
	
	var _histogram = __webpack_require__(101);
	
	Object.defineProperty(exports, "histogram", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_histogram).default;
	  }
	});
	
	var _freedmanDiaconis = __webpack_require__(108);
	
	Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_freedmanDiaconis).default;
	  }
	});
	
	var _scott = __webpack_require__(110);
	
	Object.defineProperty(exports, "thresholdScott", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_scott).default;
	  }
	});
	
	var _sturges = __webpack_require__(107);
	
	Object.defineProperty(exports, "thresholdSturges", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_sturges).default;
	  }
	});
	
	var _max = __webpack_require__(111);
	
	Object.defineProperty(exports, "max", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_max).default;
	  }
	});
	
	var _mean = __webpack_require__(112);
	
	Object.defineProperty(exports, "mean", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_mean).default;
	  }
	});
	
	var _median = __webpack_require__(113);
	
	Object.defineProperty(exports, "median", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_median).default;
	  }
	});
	
	var _merge = __webpack_require__(114);
	
	Object.defineProperty(exports, "merge", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_merge).default;
	  }
	});
	
	var _min = __webpack_require__(115);
	
	Object.defineProperty(exports, "min", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_min).default;
	  }
	});
	
	var _pairs = __webpack_require__(116);
	
	Object.defineProperty(exports, "pairs", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_pairs).default;
	  }
	});
	
	var _permute = __webpack_require__(117);
	
	Object.defineProperty(exports, "permute", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_permute).default;
	  }
	});
	
	var _quantile = __webpack_require__(109);
	
	Object.defineProperty(exports, "quantile", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quantile).default;
	  }
	});
	
	var _range = __webpack_require__(106);
	
	Object.defineProperty(exports, "range", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_range).default;
	  }
	});
	
	var _scan = __webpack_require__(118);
	
	Object.defineProperty(exports, "scan", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_scan).default;
	  }
	});
	
	var _shuffle = __webpack_require__(119);
	
	Object.defineProperty(exports, "shuffle", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_shuffle).default;
	  }
	});
	
	var _sum = __webpack_require__(120);
	
	Object.defineProperty(exports, "sum", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_sum).default;
	  }
	});
	
	var _ticks = __webpack_require__(105);
	
	Object.defineProperty(exports, "ticks", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ticks).default;
	  }
	});
	Object.defineProperty(exports, "tickStep", {
	  enumerable: true,
	  get: function get() {
	    return _ticks.tickStep;
	  }
	});
	
	var _transpose = __webpack_require__(121);
	
	Object.defineProperty(exports, "transpose", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_transpose).default;
	  }
	});
	
	var _variance = __webpack_require__(98);
	
	Object.defineProperty(exports, "variance", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_variance).default;
	  }
	});
	
	var _zip = __webpack_require__(122);
	
	Object.defineProperty(exports, "zip", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_zip).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bisectLeft = exports.bisectRight = undefined;
	
	var _ascending = __webpack_require__(94);
	
	var _ascending2 = _interopRequireDefault(_ascending);
	
	var _bisector = __webpack_require__(95);
	
	var _bisector2 = _interopRequireDefault(_bisector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ascendingBisect = (0, _bisector2.default)(_ascending2.default);
	var bisectRight = exports.bisectRight = ascendingBisect.right;
	var bisectLeft = exports.bisectLeft = ascendingBisect.left;
	exports.default = bisectRight;

/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (compare) {
	  if (compare.length === 1) compare = ascendingComparator(compare);
	  return {
	    left: function left(a, x, lo, hi) {
	      if (lo == null) lo = 0;
	      if (hi == null) hi = a.length;
	      while (lo < hi) {
	        var mid = lo + hi >>> 1;
	        if (compare(a[mid], x) < 0) lo = mid + 1;else hi = mid;
	      }
	      return lo;
	    },
	    right: function right(a, x, lo, hi) {
	      if (lo == null) lo = 0;
	      if (hi == null) hi = a.length;
	      while (lo < hi) {
	        var mid = lo + hi >>> 1;
	        if (compare(a[mid], x) > 0) hi = mid;else lo = mid + 1;
	      }
	      return lo;
	    }
	  };
	};
	
	var _ascending = __webpack_require__(94);
	
	var _ascending2 = _interopRequireDefault(_ascending);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ascendingComparator(f) {
	  return function (d, x) {
	    return (0, _ascending2.default)(f(d), x);
	  };
	}

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (a, b) {
	  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, f) {
	  var v = (0, _variance2.default)(array, f);
	  return v ? Math.sqrt(v) : v;
	};
	
	var _variance = __webpack_require__(98);
	
	var _variance2 = _interopRequireDefault(_variance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, f) {
	  var n = array.length,
	      m = 0,
	      a,
	      d,
	      s = 0,
	      i = -1,
	      j = 0;
	
	  if (f == null) {
	    while (++i < n) {
	      if (!isNaN(a = (0, _number2.default)(array[i]))) {
	        d = a - m;
	        m += d / ++j;
	        s += d * (a - m);
	      }
	    }
	  } else {
	    while (++i < n) {
	      if (!isNaN(a = (0, _number2.default)(f(array[i], i, array)))) {
	        d = a - m;
	        m += d / ++j;
	        s += d * (a - m);
	      }
	    }
	  }
	
	  if (j > 1) return s / (j - 1);
	};
	
	var _number = __webpack_require__(99);
	
	var _number2 = _interopRequireDefault(_number);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return x === null ? NaN : +x;
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, f) {
	  var i = -1,
	      n = array.length,
	      a,
	      b,
	      c;
	
	  if (f == null) {
	    while (++i < n) {
	      if ((b = array[i]) != null && b >= b) {
	        a = c = b;break;
	      }
	    }while (++i < n) {
	      if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	  } else {
	    while (++i < n) {
	      if ((b = f(array[i], i, array)) != null && b >= b) {
	        a = c = b;break;
	      }
	    }while (++i < n) {
	      if ((b = f(array[i], i, array)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	  }
	
	  return [a, c];
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var value = _identity2.default,
	      domain = _extent2.default,
	      threshold = _sturges2.default;
	
	  function histogram(data) {
	    var i,
	        n = data.length,
	        x,
	        values = new Array(n);
	
	    for (i = 0; i < n; ++i) {
	      values[i] = value(data[i], i, data);
	    }
	
	    var xz = domain(values),
	        x0 = xz[0],
	        x1 = xz[1],
	        tz = threshold(values, x0, x1);
	
	    // Convert number of thresholds into uniform thresholds.
	    if (!Array.isArray(tz)) tz = (0, _ticks2.default)(x0, x1, tz);
	
	    // Remove any thresholds outside the domain.
	    var m = tz.length;
	    while (tz[0] <= x0) {
	      tz.shift(), --m;
	    }while (tz[m - 1] >= x1) {
	      tz.pop(), --m;
	    }var bins = new Array(m + 1),
	        bin;
	
	    // Initialize bins.
	    for (i = 0; i <= m; ++i) {
	      bin = bins[i] = [];
	      bin.x0 = i > 0 ? tz[i - 1] : x0;
	      bin.x1 = i < m ? tz[i] : x1;
	    }
	
	    // Assign data to bins by value, ignoring any outside the domain.
	    for (i = 0; i < n; ++i) {
	      x = values[i];
	      if (x0 <= x && x <= x1) {
	        bins[(0, _bisect2.default)(tz, x, 0, m)].push(data[i]);
	      }
	    }
	
	    return bins;
	  }
	
	  histogram.value = function (_) {
	    return arguments.length ? (value = typeof _ === "function" ? _ : (0, _constant2.default)(_), histogram) : value;
	  };
	
	  histogram.domain = function (_) {
	    return arguments.length ? (domain = typeof _ === "function" ? _ : (0, _constant2.default)([_[0], _[1]]), histogram) : domain;
	  };
	
	  histogram.thresholds = function (_) {
	    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? (0, _constant2.default)(_array.slice.call(_)) : (0, _constant2.default)(_), histogram) : threshold;
	  };
	
	  return histogram;
	};
	
	var _array = __webpack_require__(102);
	
	var _bisect = __webpack_require__(93);
	
	var _bisect2 = _interopRequireDefault(_bisect);
	
	var _constant = __webpack_require__(103);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _extent = __webpack_require__(100);
	
	var _extent2 = _interopRequireDefault(_extent);
	
	var _identity = __webpack_require__(104);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _ticks = __webpack_require__(105);
	
	var _ticks2 = _interopRequireDefault(_ticks);
	
	var _sturges = __webpack_require__(107);
	
	var _sturges2 = _interopRequireDefault(_sturges);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var array = Array.prototype;
	
	var slice = exports.slice = array.slice;
	var map = exports.map = array.map;

/***/ },
/* 103 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return function () {
	    return x;
	  };
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return x;
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (start, stop, count) {
	  var step = tickStep(start, stop, count);
	  return (0, _range2.default)(Math.ceil(start / step) * step, Math.floor(stop / step) * step + step / 2, // inclusive
	  step);
	};
	
	exports.tickStep = tickStep;
	
	var _range = __webpack_require__(106);
	
	var _range2 = _interopRequireDefault(_range);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var e10 = Math.sqrt(50),
	    e5 = Math.sqrt(10),
	    e2 = Math.sqrt(2);
	
	function tickStep(start, stop, count) {
	  var step0 = Math.abs(stop - start) / Math.max(0, count),
	      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
	      error = step0 / step1;
	  if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
	  return stop < start ? -step1 : step1;
	}

/***/ },
/* 106 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (start, stop, step) {
	  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
	
	  var i = -1,
	      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
	      range = new Array(n);
	
	  while (++i < n) {
	    range[i] = start + i * step;
	  }
	
	  return range;
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (values) {
	  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (values, min, max) {
	  values = _array.map.call(values, _number2.default).sort(_ascending2.default);
	  return Math.ceil((max - min) / (2 * ((0, _quantile2.default)(values, 0.75) - (0, _quantile2.default)(values, 0.25)) * Math.pow(values.length, -1 / 3)));
	};
	
	var _array = __webpack_require__(102);
	
	var _ascending = __webpack_require__(94);
	
	var _ascending2 = _interopRequireDefault(_ascending);
	
	var _number = __webpack_require__(99);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _quantile = __webpack_require__(109);
	
	var _quantile2 = _interopRequireDefault(_quantile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, p, f) {
	  if (f == null) f = _number2.default;
	  if (!(n = array.length)) return;
	  if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
	  if (p >= 1) return +f(array[n - 1], n - 1, array);
	  var n,
	      h = (n - 1) * p,
	      i = Math.floor(h),
	      a = +f(array[i], i, array),
	      b = +f(array[i + 1], i + 1, array);
	  return a + (b - a) * (h - i);
	};
	
	var _number = __webpack_require__(99);
	
	var _number2 = _interopRequireDefault(_number);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (values, min, max) {
	  return Math.ceil((max - min) / (3.5 * (0, _deviation2.default)(values) * Math.pow(values.length, -1 / 3)));
	};
	
	var _deviation = __webpack_require__(97);
	
	var _deviation2 = _interopRequireDefault(_deviation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 111 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, f) {
	  var i = -1,
	      n = array.length,
	      a,
	      b;
	
	  if (f == null) {
	    while (++i < n) {
	      if ((b = array[i]) != null && b >= b) {
	        a = b;break;
	      }
	    }while (++i < n) {
	      if ((b = array[i]) != null && b > a) a = b;
	    }
	  } else {
	    while (++i < n) {
	      if ((b = f(array[i], i, array)) != null && b >= b) {
	        a = b;break;
	      }
	    }while (++i < n) {
	      if ((b = f(array[i], i, array)) != null && b > a) a = b;
	    }
	  }
	
	  return a;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, f) {
	  var s = 0,
	      n = array.length,
	      a,
	      i = -1,
	      j = n;
	
	  if (f == null) {
	    while (++i < n) {
	      if (!isNaN(a = (0, _number2.default)(array[i]))) s += a;else --j;
	    }
	  } else {
	    while (++i < n) {
	      if (!isNaN(a = (0, _number2.default)(f(array[i], i, array)))) s += a;else --j;
	    }
	  }
	
	  if (j) return s / j;
	};
	
	var _number = __webpack_require__(99);
	
	var _number2 = _interopRequireDefault(_number);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, f) {
	  var numbers = [],
	      n = array.length,
	      a,
	      i = -1;
	
	  if (f == null) {
	    while (++i < n) {
	      if (!isNaN(a = (0, _number2.default)(array[i]))) numbers.push(a);
	    }
	  } else {
	    while (++i < n) {
	      if (!isNaN(a = (0, _number2.default)(f(array[i], i, array)))) numbers.push(a);
	    }
	  }
	
	  return (0, _quantile2.default)(numbers.sort(_ascending2.default), 0.5);
	};
	
	var _ascending = __webpack_require__(94);
	
	var _ascending2 = _interopRequireDefault(_ascending);
	
	var _number = __webpack_require__(99);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _quantile = __webpack_require__(109);
	
	var _quantile2 = _interopRequireDefault(_quantile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 114 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (arrays) {
	  var n = arrays.length,
	      m,
	      i = -1,
	      j = 0,
	      merged,
	      array;
	
	  while (++i < n) {
	    j += arrays[i].length;
	  }merged = new Array(j);
	
	  while (--n >= 0) {
	    array = arrays[n];
	    m = array.length;
	    while (--m >= 0) {
	      merged[--j] = array[m];
	    }
	  }
	
	  return merged;
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, f) {
	  var i = -1,
	      n = array.length,
	      a,
	      b;
	
	  if (f == null) {
	    while (++i < n) {
	      if ((b = array[i]) != null && b >= b) {
	        a = b;break;
	      }
	    }while (++i < n) {
	      if ((b = array[i]) != null && a > b) a = b;
	    }
	  } else {
	    while (++i < n) {
	      if ((b = f(array[i], i, array)) != null && b >= b) {
	        a = b;break;
	      }
	    }while (++i < n) {
	      if ((b = f(array[i], i, array)) != null && a > b) a = b;
	    }
	  }
	
	  return a;
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array) {
	  var i = 0,
	      n = array.length - 1,
	      p = array[0],
	      pairs = new Array(n < 0 ? 0 : n);
	  while (i < n) {
	    pairs[i] = [p, p = array[++i]];
	  }return pairs;
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, indexes) {
	  var i = indexes.length,
	      permutes = new Array(i);
	  while (i--) {
	    permutes[i] = array[indexes[i]];
	  }return permutes;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (array, compare) {
	    if (!(n = array.length)) return;
	    var i = 0,
	        n,
	        j = 0,
	        xi,
	        xj = array[j];
	
	    if (!compare) compare = _ascending2.default;
	
	    while (++i < n) {
	        if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;
	    }if (compare(xj, xj) === 0) return j;
	};
	
	var _ascending = __webpack_require__(94);
	
	var _ascending2 = _interopRequireDefault(_ascending);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, i0, i1) {
	  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
	      t,
	      i;
	
	  while (m) {
	    i = Math.random() * m-- | 0;
	    t = array[m + i0];
	    array[m + i0] = array[i + i0];
	    array[i + i0] = t;
	  }
	
	  return array;
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (array, f) {
	  var s = 0,
	      n = array.length,
	      a,
	      i = -1;
	
	  if (f == null) {
	    while (++i < n) {
	      if (a = +array[i]) s += a;
	    } // Note: zero and null are equivalent.
	  } else {
	    while (++i < n) {
	      if (a = +f(array[i], i, array)) s += a;
	    }
	  }
	
	  return s;
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (matrix) {
	  if (!(n = matrix.length)) return [];
	  for (var i = -1, m = (0, _min2.default)(matrix, length), transpose = new Array(m); ++i < m;) {
	    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
	      row[j] = matrix[j][i];
	    }
	  }
	  return transpose;
	};
	
	var _min = __webpack_require__(115);
	
	var _min2 = _interopRequireDefault(_min);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function length(d) {
	  return d.length;
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return (0, _transpose2.default)(arguments);
	};
	
	var _transpose = __webpack_require__(121);
	
	var _transpose2 = _interopRequireDefault(_transpose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.implicit = undefined;
	exports.default = ordinal;
	
	var _d3Collection = __webpack_require__(25);
	
	var _array = __webpack_require__(124);
	
	var implicit = exports.implicit = { name: "implicit" };
	
	function ordinal(range) {
	  var index = (0, _d3Collection.map)(),
	      domain = [],
	      unknown = implicit;
	
	  range = range == null ? [] : _array.slice.call(range);
	
	  function scale(d) {
	    var key = d + "",
	        i = index.get(key);
	    if (!i) {
	      if (unknown !== implicit) return unknown;
	      index.set(key, i = domain.push(d));
	    }
	    return range[(i - 1) % range.length];
	  }
	
	  scale.domain = function (_) {
	    if (!arguments.length) return domain.slice();
	    domain = [], index = (0, _d3Collection.map)();
	    var i = -1,
	        n = _.length,
	        d,
	        key;
	    while (++i < n) {
	      if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
	    }return scale;
	  };
	
	  scale.range = function (_) {
	    return arguments.length ? (range = _array.slice.call(_), scale) : range.slice();
	  };
	
	  scale.unknown = function (_) {
	    return arguments.length ? (unknown = _, scale) : unknown;
	  };
	
	  scale.copy = function () {
	    return ordinal().domain(domain).range(range).unknown(unknown);
	  };
	
	  return scale;
	}

/***/ },
/* 124 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var array = Array.prototype;
	
	var map = exports.map = array.map;
	var slice = exports.slice = array.slice;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = identity;
	
	var _array = __webpack_require__(124);
	
	var _linear = __webpack_require__(126);
	
	var _number = __webpack_require__(157);
	
	var _number2 = _interopRequireDefault(_number);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function identity() {
	  var domain = [0, 1];
	
	  function scale(x) {
	    return +x;
	  }
	
	  scale.invert = scale;
	
	  scale.domain = scale.range = function (_) {
	    return arguments.length ? (domain = _array.map.call(_, _number2.default), scale) : domain.slice();
	  };
	
	  scale.copy = function () {
	    return identity().domain(domain);
	  };
	
	  return (0, _linear.linearish)(scale);
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.linearish = linearish;
	exports.default = linear;
	
	var _d3Array = __webpack_require__(92);
	
	var _d3Interpolate = __webpack_require__(127);
	
	var _continuous = __webpack_require__(155);
	
	var _continuous2 = _interopRequireDefault(_continuous);
	
	var _tickFormat = __webpack_require__(158);
	
	var _tickFormat2 = _interopRequireDefault(_tickFormat);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function linearish(scale) {
	  var domain = scale.domain;
	
	  scale.ticks = function (count) {
	    var d = domain();
	    return (0, _d3Array.ticks)(d[0], d[d.length - 1], count == null ? 10 : count);
	  };
	
	  scale.tickFormat = function (count, specifier) {
	    return (0, _tickFormat2.default)(domain(), count, specifier);
	  };
	
	  scale.nice = function (count) {
	    var d = domain(),
	        i = d.length - 1,
	        n = count == null ? 10 : count,
	        start = d[0],
	        stop = d[i],
	        step = (0, _d3Array.tickStep)(start, stop, n);
	
	    if (step) {
	      step = (0, _d3Array.tickStep)(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
	      d[0] = Math.floor(start / step) * step;
	      d[i] = Math.ceil(stop / step) * step;
	      domain(d);
	    }
	
	    return scale;
	  };
	
	  return scale;
	}
	
	function linear() {
	  var scale = (0, _continuous2.default)(_continuous.deinterpolateLinear, _d3Interpolate.interpolateNumber);
	
	  scale.copy = function () {
	    return (0, _continuous.copy)(scale, linear());
	  };
	
	  return linearish(scale);
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _value = __webpack_require__(128);
	
	Object.defineProperty(exports, "interpolate", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_value).default;
	  }
	});
	
	var _array = __webpack_require__(140);
	
	Object.defineProperty(exports, "interpolateArray", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_array).default;
	  }
	});
	
	var _basis = __webpack_require__(136);
	
	Object.defineProperty(exports, "interpolateBasis", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_basis).default;
	  }
	});
	
	var _basisClosed = __webpack_require__(137);
	
	Object.defineProperty(exports, "interpolateBasisClosed", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_basisClosed).default;
	  }
	});
	
	var _date = __webpack_require__(141);
	
	Object.defineProperty(exports, "interpolateDate", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_date).default;
	  }
	});
	
	var _number = __webpack_require__(142);
	
	Object.defineProperty(exports, "interpolateNumber", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_number).default;
	  }
	});
	
	var _object = __webpack_require__(143);
	
	Object.defineProperty(exports, "interpolateObject", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_object).default;
	  }
	});
	
	var _round = __webpack_require__(145);
	
	Object.defineProperty(exports, "interpolateRound", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_round).default;
	  }
	});
	
	var _string = __webpack_require__(144);
	
	Object.defineProperty(exports, "interpolateString", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_string).default;
	  }
	});
	
	var _index = __webpack_require__(146);
	
	Object.defineProperty(exports, "interpolateTransformCss", {
	  enumerable: true,
	  get: function get() {
	    return _index.interpolateTransformCss;
	  }
	});
	Object.defineProperty(exports, "interpolateTransformSvg", {
	  enumerable: true,
	  get: function get() {
	    return _index.interpolateTransformSvg;
	  }
	});
	
	var _zoom = __webpack_require__(149);
	
	Object.defineProperty(exports, "interpolateZoom", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_zoom).default;
	  }
	});
	
	var _rgb = __webpack_require__(135);
	
	Object.defineProperty(exports, "interpolateRgb", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_rgb).default;
	  }
	});
	Object.defineProperty(exports, "interpolateRgbBasis", {
	  enumerable: true,
	  get: function get() {
	    return _rgb.rgbBasis;
	  }
	});
	Object.defineProperty(exports, "interpolateRgbBasisClosed", {
	  enumerable: true,
	  get: function get() {
	    return _rgb.rgbBasisClosed;
	  }
	});
	
	var _hsl = __webpack_require__(150);
	
	Object.defineProperty(exports, "interpolateHsl", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hsl).default;
	  }
	});
	Object.defineProperty(exports, "interpolateHslLong", {
	  enumerable: true,
	  get: function get() {
	    return _hsl.hslLong;
	  }
	});
	
	var _lab = __webpack_require__(151);
	
	Object.defineProperty(exports, "interpolateLab", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_lab).default;
	  }
	});
	
	var _hcl = __webpack_require__(152);
	
	Object.defineProperty(exports, "interpolateHcl", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hcl).default;
	  }
	});
	Object.defineProperty(exports, "interpolateHclLong", {
	  enumerable: true,
	  get: function get() {
	    return _hcl.hclLong;
	  }
	});
	
	var _cubehelix = __webpack_require__(153);
	
	Object.defineProperty(exports, "interpolateCubehelix", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_cubehelix).default;
	  }
	});
	Object.defineProperty(exports, "interpolateCubehelixLong", {
	  enumerable: true,
	  get: function get() {
	    return _cubehelix.cubehelixLong;
	  }
	});
	
	var _quantize = __webpack_require__(154);
	
	Object.defineProperty(exports, "quantize", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_quantize).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = function (a, b) {
	    var t = typeof b === "undefined" ? "undefined" : _typeof(b),
	        c;
	    return b == null || t === "boolean" ? (0, _constant2.default)(b) : (t === "number" ? _number2.default : t === "string" ? (c = (0, _d3Color.color)(b)) ? (b = c, _rgb2.default) : _string2.default : b instanceof _d3Color.color ? _rgb2.default : b instanceof Date ? _date2.default : Array.isArray(b) ? _array2.default : isNaN(b) ? _object2.default : _number2.default)(a, b);
	};
	
	var _d3Color = __webpack_require__(129);
	
	var _rgb = __webpack_require__(135);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _array = __webpack_require__(140);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _date = __webpack_require__(141);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _number = __webpack_require__(142);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _object = __webpack_require__(143);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _string = __webpack_require__(144);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _constant = __webpack_require__(139);
	
	var _constant2 = _interopRequireDefault(_constant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _color = __webpack_require__(130);
	
	Object.defineProperty(exports, "color", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_color).default;
	  }
	});
	Object.defineProperty(exports, "rgb", {
	  enumerable: true,
	  get: function get() {
	    return _color.rgb;
	  }
	});
	Object.defineProperty(exports, "hsl", {
	  enumerable: true,
	  get: function get() {
	    return _color.hsl;
	  }
	});
	
	var _lab = __webpack_require__(132);
	
	Object.defineProperty(exports, "lab", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_lab).default;
	  }
	});
	Object.defineProperty(exports, "hcl", {
	  enumerable: true,
	  get: function get() {
	    return _lab.hcl;
	  }
	});
	
	var _cubehelix = __webpack_require__(134);
	
	Object.defineProperty(exports, "cubehelix", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_cubehelix).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.brighter = exports.darker = undefined;
	exports.Color = Color;
	exports.default = color;
	exports.rgbConvert = rgbConvert;
	exports.rgb = rgb;
	exports.Rgb = Rgb;
	exports.hslConvert = hslConvert;
	exports.hsl = hsl;
	
	var _define = __webpack_require__(131);
	
	var _define2 = _interopRequireDefault(_define);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Color() {}
	
	var _darker = 0.7;
	exports.darker = _darker;
	var _brighter = 1 / _darker;
	
	exports.brighter = _brighter;
	var reI = "\\s*([+-]?\\d+)\\s*",
	    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
	    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
	    reHex3 = /^#([0-9a-f]{3})$/,
	    reHex6 = /^#([0-9a-f]{6})$/,
	    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
	    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
	    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
	    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
	    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
	    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
	
	var named = {
	  aliceblue: 0xf0f8ff,
	  antiquewhite: 0xfaebd7,
	  aqua: 0x00ffff,
	  aquamarine: 0x7fffd4,
	  azure: 0xf0ffff,
	  beige: 0xf5f5dc,
	  bisque: 0xffe4c4,
	  black: 0x000000,
	  blanchedalmond: 0xffebcd,
	  blue: 0x0000ff,
	  blueviolet: 0x8a2be2,
	  brown: 0xa52a2a,
	  burlywood: 0xdeb887,
	  cadetblue: 0x5f9ea0,
	  chartreuse: 0x7fff00,
	  chocolate: 0xd2691e,
	  coral: 0xff7f50,
	  cornflowerblue: 0x6495ed,
	  cornsilk: 0xfff8dc,
	  crimson: 0xdc143c,
	  cyan: 0x00ffff,
	  darkblue: 0x00008b,
	  darkcyan: 0x008b8b,
	  darkgoldenrod: 0xb8860b,
	  darkgray: 0xa9a9a9,
	  darkgreen: 0x006400,
	  darkgrey: 0xa9a9a9,
	  darkkhaki: 0xbdb76b,
	  darkmagenta: 0x8b008b,
	  darkolivegreen: 0x556b2f,
	  darkorange: 0xff8c00,
	  darkorchid: 0x9932cc,
	  darkred: 0x8b0000,
	  darksalmon: 0xe9967a,
	  darkseagreen: 0x8fbc8f,
	  darkslateblue: 0x483d8b,
	  darkslategray: 0x2f4f4f,
	  darkslategrey: 0x2f4f4f,
	  darkturquoise: 0x00ced1,
	  darkviolet: 0x9400d3,
	  deeppink: 0xff1493,
	  deepskyblue: 0x00bfff,
	  dimgray: 0x696969,
	  dimgrey: 0x696969,
	  dodgerblue: 0x1e90ff,
	  firebrick: 0xb22222,
	  floralwhite: 0xfffaf0,
	  forestgreen: 0x228b22,
	  fuchsia: 0xff00ff,
	  gainsboro: 0xdcdcdc,
	  ghostwhite: 0xf8f8ff,
	  gold: 0xffd700,
	  goldenrod: 0xdaa520,
	  gray: 0x808080,
	  green: 0x008000,
	  greenyellow: 0xadff2f,
	  grey: 0x808080,
	  honeydew: 0xf0fff0,
	  hotpink: 0xff69b4,
	  indianred: 0xcd5c5c,
	  indigo: 0x4b0082,
	  ivory: 0xfffff0,
	  khaki: 0xf0e68c,
	  lavender: 0xe6e6fa,
	  lavenderblush: 0xfff0f5,
	  lawngreen: 0x7cfc00,
	  lemonchiffon: 0xfffacd,
	  lightblue: 0xadd8e6,
	  lightcoral: 0xf08080,
	  lightcyan: 0xe0ffff,
	  lightgoldenrodyellow: 0xfafad2,
	  lightgray: 0xd3d3d3,
	  lightgreen: 0x90ee90,
	  lightgrey: 0xd3d3d3,
	  lightpink: 0xffb6c1,
	  lightsalmon: 0xffa07a,
	  lightseagreen: 0x20b2aa,
	  lightskyblue: 0x87cefa,
	  lightslategray: 0x778899,
	  lightslategrey: 0x778899,
	  lightsteelblue: 0xb0c4de,
	  lightyellow: 0xffffe0,
	  lime: 0x00ff00,
	  limegreen: 0x32cd32,
	  linen: 0xfaf0e6,
	  magenta: 0xff00ff,
	  maroon: 0x800000,
	  mediumaquamarine: 0x66cdaa,
	  mediumblue: 0x0000cd,
	  mediumorchid: 0xba55d3,
	  mediumpurple: 0x9370db,
	  mediumseagreen: 0x3cb371,
	  mediumslateblue: 0x7b68ee,
	  mediumspringgreen: 0x00fa9a,
	  mediumturquoise: 0x48d1cc,
	  mediumvioletred: 0xc71585,
	  midnightblue: 0x191970,
	  mintcream: 0xf5fffa,
	  mistyrose: 0xffe4e1,
	  moccasin: 0xffe4b5,
	  navajowhite: 0xffdead,
	  navy: 0x000080,
	  oldlace: 0xfdf5e6,
	  olive: 0x808000,
	  olivedrab: 0x6b8e23,
	  orange: 0xffa500,
	  orangered: 0xff4500,
	  orchid: 0xda70d6,
	  palegoldenrod: 0xeee8aa,
	  palegreen: 0x98fb98,
	  paleturquoise: 0xafeeee,
	  palevioletred: 0xdb7093,
	  papayawhip: 0xffefd5,
	  peachpuff: 0xffdab9,
	  peru: 0xcd853f,
	  pink: 0xffc0cb,
	  plum: 0xdda0dd,
	  powderblue: 0xb0e0e6,
	  purple: 0x800080,
	  rebeccapurple: 0x663399,
	  red: 0xff0000,
	  rosybrown: 0xbc8f8f,
	  royalblue: 0x4169e1,
	  saddlebrown: 0x8b4513,
	  salmon: 0xfa8072,
	  sandybrown: 0xf4a460,
	  seagreen: 0x2e8b57,
	  seashell: 0xfff5ee,
	  sienna: 0xa0522d,
	  silver: 0xc0c0c0,
	  skyblue: 0x87ceeb,
	  slateblue: 0x6a5acd,
	  slategray: 0x708090,
	  slategrey: 0x708090,
	  snow: 0xfffafa,
	  springgreen: 0x00ff7f,
	  steelblue: 0x4682b4,
	  tan: 0xd2b48c,
	  teal: 0x008080,
	  thistle: 0xd8bfd8,
	  tomato: 0xff6347,
	  turquoise: 0x40e0d0,
	  violet: 0xee82ee,
	  wheat: 0xf5deb3,
	  white: 0xffffff,
	  whitesmoke: 0xf5f5f5,
	  yellow: 0xffff00,
	  yellowgreen: 0x9acd32
	};
	
	(0, _define2.default)(Color, color, {
	  displayable: function displayable() {
	    return this.rgb().displayable();
	  },
	  toString: function toString() {
	    return this.rgb() + "";
	  }
	});
	
	function color(format) {
	  var m;
	  format = (format + "").trim().toLowerCase();
	  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 0xf | m >> 4 & 0x0f0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
	  ) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
	  : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
	  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
	  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
	  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
	  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
	  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
	  : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
	}
	
	function rgbn(n) {
	  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
	}
	
	function rgba(r, g, b, a) {
	  if (a <= 0) r = g = b = NaN;
	  return new Rgb(r, g, b, a);
	}
	
	function rgbConvert(o) {
	  if (!(o instanceof Color)) o = color(o);
	  if (!o) return new Rgb();
	  o = o.rgb();
	  return new Rgb(o.r, o.g, o.b, o.opacity);
	}
	
	function rgb(r, g, b, opacity) {
	  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
	}
	
	function Rgb(r, g, b, opacity) {
	  this.r = +r;
	  this.g = +g;
	  this.b = +b;
	  this.opacity = +opacity;
	}
	
	(0, _define2.default)(Rgb, rgb, (0, _define.extend)(Color, {
	  brighter: function brighter(k) {
	    k = k == null ? _brighter : Math.pow(_brighter, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  darker: function darker(k) {
	    k = k == null ? _darker : Math.pow(_darker, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  rgb: function rgb() {
	    return this;
	  },
	  displayable: function displayable() {
	    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
	  },
	  toString: function toString() {
	    var a = this.opacity;a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
	    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
	  }
	}));
	
	function hsla(h, s, l, a) {
	  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
	  return new Hsl(h, s, l, a);
	}
	
	function hslConvert(o) {
	  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
	  if (!(o instanceof Color)) o = color(o);
	  if (!o) return new Hsl();
	  if (o instanceof Hsl) return o;
	  o = o.rgb();
	  var r = o.r / 255,
	      g = o.g / 255,
	      b = o.b / 255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      h = NaN,
	      s = max - min,
	      l = (max + min) / 2;
	  if (s) {
	    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
	    s /= l < 0.5 ? max + min : 2 - max - min;
	    h *= 60;
	  } else {
	    s = l > 0 && l < 1 ? 0 : h;
	  }
	  return new Hsl(h, s, l, o.opacity);
	}
	
	function hsl(h, s, l, opacity) {
	  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
	}
	
	function Hsl(h, s, l, opacity) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	
	(0, _define2.default)(Hsl, hsl, (0, _define.extend)(Color, {
	  brighter: function brighter(k) {
	    k = k == null ? _brighter : Math.pow(_brighter, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  },
	  darker: function darker(k) {
	    k = k == null ? _darker : Math.pow(_darker, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  },
	  rgb: function rgb() {
	    var h = this.h % 360 + (this.h < 0) * 360,
	        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	        l = this.l,
	        m2 = l + (l < 0.5 ? l : 1 - l) * s,
	        m1 = 2 * l - m2;
	    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
	  },
	  displayable: function displayable() {
	    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	  }
	}));
	
	/* From FvD 13.37, CSS Color Module Level 3 */
	function hsl2rgb(h, m1, m2) {
	  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
	}

/***/ },
/* 131 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (constructor, factory, prototype) {
	  constructor.prototype = factory.prototype = prototype;
	  prototype.constructor = constructor;
	};
	
	exports.extend = extend;
	function extend(parent, definition) {
	  var prototype = Object.create(parent.prototype);
	  for (var key in definition) {
	    prototype[key] = definition[key];
	  }return prototype;
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = lab;
	exports.Lab = Lab;
	exports.hcl = hcl;
	exports.Hcl = Hcl;
	
	var _define = __webpack_require__(131);
	
	var _define2 = _interopRequireDefault(_define);
	
	var _color = __webpack_require__(130);
	
	var _math = __webpack_require__(133);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Kn = 18,
	    Xn = 0.950470,
	    // D65 standard referent
	Yn = 1,
	    Zn = 1.088830,
	    t0 = 4 / 29,
	    t1 = 6 / 29,
	    t2 = 3 * t1 * t1,
	    t3 = t1 * t1 * t1;
	
	function labConvert(o) {
	  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	  if (o instanceof Hcl) {
	    var h = o.h * _math.deg2rad;
	    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
	  }
	  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
	  var b = rgb2xyz(o.r),
	      a = rgb2xyz(o.g),
	      l = rgb2xyz(o.b),
	      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
	      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
	      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
	  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
	}
	
	function lab(l, a, b, opacity) {
	  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
	}
	
	function Lab(l, a, b, opacity) {
	  this.l = +l;
	  this.a = +a;
	  this.b = +b;
	  this.opacity = +opacity;
	}
	
	(0, _define2.default)(Lab, lab, (0, _define.extend)(_color.Color, {
	  brighter: function brighter(k) {
	    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  },
	  darker: function darker(k) {
	    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	  },
	  rgb: function rgb() {
	    var y = (this.l + 16) / 116,
	        x = isNaN(this.a) ? y : y + this.a / 500,
	        z = isNaN(this.b) ? y : y - this.b / 200;
	    y = Yn * lab2xyz(y);
	    x = Xn * lab2xyz(x);
	    z = Zn * lab2xyz(z);
	    return new _color.Rgb(xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
	    xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z), xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z), this.opacity);
	  }
	}));
	
	function xyz2lab(t) {
	  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
	}
	
	function lab2xyz(t) {
	  return t > t1 ? t * t * t : t2 * (t - t0);
	}
	
	function xyz2rgb(x) {
	  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	}
	
	function rgb2xyz(x) {
	  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	}
	
	function hclConvert(o) {
	  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	  if (!(o instanceof Lab)) o = labConvert(o);
	  var h = Math.atan2(o.b, o.a) * _math.rad2deg;
	  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
	}
	
	function hcl(h, c, l, opacity) {
	  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
	}
	
	function Hcl(h, c, l, opacity) {
	  this.h = +h;
	  this.c = +c;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	
	(0, _define2.default)(Hcl, hcl, (0, _define.extend)(_color.Color, {
	  brighter: function brighter(k) {
	    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
	  },
	  darker: function darker(k) {
	    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
	  },
	  rgb: function rgb() {
	    return labConvert(this).rgb();
	  }
	}));

/***/ },
/* 133 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var deg2rad = exports.deg2rad = Math.PI / 180;
	var rad2deg = exports.rad2deg = 180 / Math.PI;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cubehelix;
	exports.Cubehelix = Cubehelix;
	
	var _define = __webpack_require__(131);
	
	var _define2 = _interopRequireDefault(_define);
	
	var _color = __webpack_require__(130);
	
	var _math = __webpack_require__(133);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var A = -0.14861,
	    B = +1.78277,
	    C = -0.29227,
	    D = -0.90649,
	    E = +1.97294,
	    ED = E * D,
	    EB = E * B,
	    BC_DA = B * C - D * A;
	
	function cubehelixConvert(o) {
	  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
	  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
	  var r = o.r / 255,
	      g = o.g / 255,
	      b = o.b / 255,
	      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
	      bl = b - l,
	      k = (E * (g - l) - C * bl) / D,
	      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
	      // NaN if l=0 or l=1
	  h = s ? Math.atan2(k, bl) * _math.rad2deg - 120 : NaN;
	  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
	}
	
	function cubehelix(h, s, l, opacity) {
	  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
	}
	
	function Cubehelix(h, s, l, opacity) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	  this.opacity = +opacity;
	}
	
	(0, _define2.default)(Cubehelix, cubehelix, (0, _define.extend)(_color.Color, {
	  brighter: function brighter(k) {
	    k = k == null ? _color.brighter : Math.pow(_color.brighter, k);
	    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	  },
	  darker: function darker(k) {
	    k = k == null ? _color.darker : Math.pow(_color.darker, k);
	    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	  },
	  rgb: function rgb() {
	    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math.deg2rad,
	        l = +this.l,
	        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
	        cosh = Math.cos(h),
	        sinh = Math.sin(h);
	    return new _color.Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
	  }
	}));

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.rgbBasisClosed = exports.rgbBasis = undefined;
	
	var _d3Color = __webpack_require__(129);
	
	var _basis = __webpack_require__(136);
	
	var _basis2 = _interopRequireDefault(_basis);
	
	var _basisClosed = __webpack_require__(137);
	
	var _basisClosed2 = _interopRequireDefault(_basisClosed);
	
	var _color = __webpack_require__(138);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function rgbGamma(y) {
	  var color = (0, _color.gamma)(y);
	
	  function rgb(start, end) {
	    var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r),
	        g = color(start.g, end.g),
	        b = color(start.b, end.b),
	        opacity = color(start.opacity, end.opacity);
	    return function (t) {
	      start.r = r(t);
	      start.g = g(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }
	
	  rgb.gamma = rgbGamma;
	
	  return rgb;
	}(1);
	
	function rgbSpline(spline) {
	  return function (colors) {
	    var n = colors.length,
	        r = new Array(n),
	        g = new Array(n),
	        b = new Array(n),
	        i,
	        color;
	    for (i = 0; i < n; ++i) {
	      color = (0, _d3Color.rgb)(colors[i]);
	      r[i] = color.r || 0;
	      g[i] = color.g || 0;
	      b[i] = color.b || 0;
	    }
	    r = spline(r);
	    g = spline(g);
	    b = spline(b);
	    color.opacity = 1;
	    return function (t) {
	      color.r = r(t);
	      color.g = g(t);
	      color.b = b(t);
	      return color + "";
	    };
	  };
	}
	
	var rgbBasis = exports.rgbBasis = rgbSpline(_basis2.default);
	var rgbBasisClosed = exports.rgbBasisClosed = rgbSpline(_basisClosed2.default);

/***/ },
/* 136 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.basis = basis;
	
	exports.default = function (values) {
	  var n = values.length - 1;
	  return function (t) {
	    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
	        v1 = values[i],
	        v2 = values[i + 1],
	        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
	        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
	    return basis((t - i / n) * n, v0, v1, v2, v3);
	  };
	};
	
	function basis(t1, v0, v1, v2, v3) {
	  var t2 = t1 * t1,
	      t3 = t2 * t1;
	  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (values) {
	  var n = values.length;
	  return function (t) {
	    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
	        v0 = values[(i + n - 1) % n],
	        v1 = values[i % n],
	        v2 = values[(i + 1) % n],
	        v3 = values[(i + 2) % n];
	    return (0, _basis.basis)((t - i / n) * n, v0, v1, v2, v3);
	  };
	};
	
	var _basis = __webpack_require__(136);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hue = hue;
	exports.gamma = gamma;
	exports.default = nogamma;
	
	var _constant = __webpack_require__(139);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function linear(a, d) {
	  return function (t) {
	    return a + t * d;
	  };
	}
	
	function exponential(a, b, y) {
	  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
	    return Math.pow(a + t * b, y);
	  };
	}
	
	function hue(a, b) {
	  var d = b - a;
	  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constant2.default)(isNaN(a) ? b : a);
	}
	
	function gamma(y) {
	  return (y = +y) === 1 ? nogamma : function (a, b) {
	    return b - a ? exponential(a, b, y) : (0, _constant2.default)(isNaN(a) ? b : a);
	  };
	}
	
	function nogamma(a, b) {
	  var d = b - a;
	  return d ? linear(a, d) : (0, _constant2.default)(isNaN(a) ? b : a);
	}

/***/ },
/* 139 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return function () {
	    return x;
	  };
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (a, b) {
	  var nb = b ? b.length : 0,
	      na = a ? Math.min(nb, a.length) : 0,
	      x = new Array(nb),
	      c = new Array(nb),
	      i;
	
	  for (i = 0; i < na; ++i) {
	    x[i] = (0, _value2.default)(a[i], b[i]);
	  }for (; i < nb; ++i) {
	    c[i] = b[i];
	  }return function (t) {
	    for (i = 0; i < na; ++i) {
	      c[i] = x[i](t);
	    }return c;
	  };
	};
	
	var _value = __webpack_require__(128);
	
	var _value2 = _interopRequireDefault(_value);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 141 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (a, b) {
	  var d = new Date();
	  return a = +a, b -= a, function (t) {
	    return d.setTime(a + b * t), d;
	  };
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (a, b) {
	  return a = +a, b -= a, function (t) {
	    return a + b * t;
	  };
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = function (a, b) {
	  var i = {},
	      c = {},
	      k;
	
	  if (a === null || (typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object") a = {};
	  if (b === null || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") b = {};
	
	  for (k in b) {
	    if (k in a) {
	      i[k] = (0, _value2.default)(a[k], b[k]);
	    } else {
	      c[k] = b[k];
	    }
	  }
	
	  return function (t) {
	    for (k in i) {
	      c[k] = i[k](t);
	    }return c;
	  };
	};
	
	var _value = __webpack_require__(128);
	
	var _value2 = _interopRequireDefault(_value);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (a, b) {
	  var bi = reA.lastIndex = reB.lastIndex = 0,
	      // scan index for next number in b
	  am,
	      // current match in a
	  bm,
	      // current match in b
	  bs,
	      // string preceding current number in b, if any
	  i = -1,
	      // index in s
	  s = [],
	      // string constants and placeholders
	  q = []; // number interpolators
	
	  // Coerce inputs to strings.
	  a = a + "", b = b + "";
	
	  // Interpolate pairs of numbers in a & b.
	  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
	    if ((bs = bm.index) > bi) {
	      // a string precedes the next number in b
	      bs = b.slice(bi, bs);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }
	    if ((am = am[0]) === (bm = bm[0])) {
	      // numbers in a & b match
	      if (s[i]) s[i] += bm; // coalesce with previous string
	      else s[++i] = bm;
	    } else {
	      // interpolate non-matching numbers
	      s[++i] = null;
	      q.push({ i: i, x: (0, _number2.default)(am, bm) });
	    }
	    bi = reB.lastIndex;
	  }
	
	  // Add remains of b.
	  if (bi < b.length) {
	    bs = b.slice(bi);
	    if (s[i]) s[i] += bs; // coalesce with previous string
	    else s[++i] = bs;
	  }
	
	  // Special optimization for only a single match.
	  // Otherwise, interpolate each of the numbers and rejoin the string.
	  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
	    for (var i = 0, o; i < b; ++i) {
	      s[(o = q[i]).i] = o.x(t);
	    }return s.join("");
	  });
	};
	
	var _number = __webpack_require__(142);
	
	var _number2 = _interopRequireDefault(_number);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	    reB = new RegExp(reA.source, "g");
	
	function zero(b) {
	  return function () {
	    return b;
	  };
	}
	
	function one(b) {
	  return function (t) {
	    return b(t) + "";
	  };
	}

/***/ },
/* 145 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (a, b) {
	  return a = +a, b -= a, function (t) {
	    return Math.round(a + b * t);
	  };
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.interpolateTransformSvg = exports.interpolateTransformCss = undefined;
	
	var _number = __webpack_require__(142);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _parse = __webpack_require__(147);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function interpolateTransform(parse, pxComma, pxParen, degParen) {
	
	  function pop(s) {
	    return s.length ? s.pop() + " " : "";
	  }
	
	  function translate(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push("translate(", null, pxComma, null, pxParen);
	      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
	    } else if (xb || yb) {
	      s.push("translate(" + xb + pxComma + yb + pxParen);
	    }
	  }
	
	  function rotate(a, b, s, q) {
	    if (a !== b) {
	      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
	      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
	    } else if (b) {
	      s.push(pop(s) + "rotate(" + b + degParen);
	    }
	  }
	
	  function skewX(a, b, s, q) {
	    if (a !== b) {
	      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0, _number2.default)(a, b) });
	    } else if (b) {
	      s.push(pop(s) + "skewX(" + b + degParen);
	    }
	  }
	
	  function scale(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	      q.push({ i: i - 4, x: (0, _number2.default)(xa, xb) }, { i: i - 2, x: (0, _number2.default)(ya, yb) });
	    } else if (xb !== 1 || yb !== 1) {
	      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	    }
	  }
	
	  return function (a, b) {
	    var s = [],
	        // string constants and placeholders
	    q = []; // number interpolators
	    a = parse(a), b = parse(b);
	    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
	    rotate(a.rotate, b.rotate, s, q);
	    skewX(a.skewX, b.skewX, s, q);
	    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
	    a = b = null; // gc
	    return function (t) {
	      var i = -1,
	          n = q.length,
	          o;
	      while (++i < n) {
	        s[(o = q[i]).i] = o.x(t);
	      }return s.join("");
	    };
	  };
	}
	
	var interpolateTransformCss = exports.interpolateTransformCss = interpolateTransform(_parse.parseCss, "px, ", "px)", "deg)");
	var interpolateTransformSvg = exports.interpolateTransformSvg = interpolateTransform(_parse.parseSvg, ", ", ")", ")");

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseCss = parseCss;
	exports.parseSvg = parseSvg;
	
	var _decompose = __webpack_require__(148);
	
	var _decompose2 = _interopRequireDefault(_decompose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cssNode, cssRoot, cssView, svgNode;
	
	function parseCss(value) {
	  if (value === "none") return _decompose.identity;
	  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
	  cssNode.style.transform = value;
	  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
	  cssRoot.removeChild(cssNode);
	  value = value.slice(7, -1).split(",");
	  return (0, _decompose2.default)(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
	}
	
	function parseSvg(value) {
	  if (value == null) return _decompose.identity;
	  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	  svgNode.setAttribute("transform", value);
	  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose.identity;
	  value = value.matrix;
	  return (0, _decompose2.default)(value.a, value.b, value.c, value.d, value.e, value.f);
	}

/***/ },
/* 148 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (a, b, c, d, e, f) {
	  var scaleX, scaleY, skewX;
	  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	  return {
	    translateX: e,
	    translateY: f,
	    rotate: Math.atan2(b, a) * degrees,
	    skewX: Math.atan(skewX) * degrees,
	    scaleX: scaleX,
	    scaleY: scaleY
	  };
	};
	
	var degrees = 180 / Math.PI;
	
	var identity = exports.identity = {
	  translateX: 0,
	  translateY: 0,
	  rotate: 0,
	  skewX: 0,
	  scaleX: 1,
	  scaleY: 1
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (p0, p1) {
	  var ux0 = p0[0],
	      uy0 = p0[1],
	      w0 = p0[2],
	      ux1 = p1[0],
	      uy1 = p1[1],
	      w1 = p1[2],
	      dx = ux1 - ux0,
	      dy = uy1 - uy0,
	      d2 = dx * dx + dy * dy,
	      i,
	      S;
	
	  // Special case for u0 ≅ u1.
	  if (d2 < epsilon2) {
	    S = Math.log(w1 / w0) / rho;
	    i = function i(t) {
	      return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
	    };
	  }
	
	  // General case.
	  else {
	      var d1 = Math.sqrt(d2),
	          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / rho;
	      i = function i(t) {
	        var s = t * S,
	            coshr0 = cosh(r0),
	            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
	        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
	      };
	    }
	
	  i.duration = S * 1000;
	
	  return i;
	};
	
	var rho = Math.SQRT2,
	    rho2 = 2,
	    rho4 = 4,
	    epsilon2 = 1e-12;
	
	function cosh(x) {
	  return ((x = Math.exp(x)) + 1 / x) / 2;
	}
	
	function sinh(x) {
	  return ((x = Math.exp(x)) - 1 / x) / 2;
	}
	
	function tanh(x) {
	  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	}
	
	// p0 = [ux0, uy0, w0]
	// p1 = [ux1, uy1, w1]

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hslLong = undefined;
	
	var _d3Color = __webpack_require__(129);
	
	var _color = __webpack_require__(138);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function hsl(hue) {
	  return function (start, end) {
	    var h = hue((start = (0, _d3Color.hsl)(start)).h, (end = (0, _d3Color.hsl)(end)).h),
	        s = (0, _color2.default)(start.s, end.s),
	        l = (0, _color2.default)(start.l, end.l),
	        opacity = (0, _color2.default)(start.opacity, end.opacity);
	    return function (t) {
	      start.h = h(t);
	      start.s = s(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  };
	}
	
	exports.default = hsl(_color.hue);
	var hslLong = exports.hslLong = hsl(_color2.default);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = lab;
	
	var _d3Color = __webpack_require__(129);
	
	var _color = __webpack_require__(138);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function lab(start, end) {
	  var l = (0, _color2.default)((start = (0, _d3Color.lab)(start)).l, (end = (0, _d3Color.lab)(end)).l),
	      a = (0, _color2.default)(start.a, end.a),
	      b = (0, _color2.default)(start.b, end.b),
	      opacity = (0, _color2.default)(start.opacity, end.opacity);
	  return function (t) {
	    start.l = l(t);
	    start.a = a(t);
	    start.b = b(t);
	    start.opacity = opacity(t);
	    return start + "";
	  };
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hclLong = undefined;
	
	var _d3Color = __webpack_require__(129);
	
	var _color = __webpack_require__(138);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function hcl(hue) {
	  return function (start, end) {
	    var h = hue((start = (0, _d3Color.hcl)(start)).h, (end = (0, _d3Color.hcl)(end)).h),
	        c = (0, _color2.default)(start.c, end.c),
	        l = (0, _color2.default)(start.l, end.l),
	        opacity = (0, _color2.default)(start.opacity, end.opacity);
	    return function (t) {
	      start.h = h(t);
	      start.c = c(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  };
	}
	
	exports.default = hcl(_color.hue);
	var hclLong = exports.hclLong = hcl(_color2.default);

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cubehelixLong = undefined;
	
	var _d3Color = __webpack_require__(129);
	
	var _color = __webpack_require__(138);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function cubehelix(hue) {
	  return function cubehelixGamma(y) {
	    y = +y;
	
	    function cubehelix(start, end) {
	      var h = hue((start = (0, _d3Color.cubehelix)(start)).h, (end = (0, _d3Color.cubehelix)(end)).h),
	          s = (0, _color2.default)(start.s, end.s),
	          l = (0, _color2.default)(start.l, end.l),
	          opacity = (0, _color2.default)(start.opacity, end.opacity);
	      return function (t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(Math.pow(t, y));
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	
	    cubehelix.gamma = cubehelixGamma;
	
	    return cubehelix;
	  }(1);
	}
	
	exports.default = cubehelix(_color.hue);
	var cubehelixLong = exports.cubehelixLong = cubehelix(_color2.default);

/***/ },
/* 154 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (interpolator, n) {
	  var samples = new Array(n);
	  for (var i = 0; i < n; ++i) {
	    samples[i] = interpolator(i / (n - 1));
	  }return samples;
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deinterpolateLinear = deinterpolateLinear;
	exports.copy = copy;
	exports.default = continuous;
	
	var _d3Array = __webpack_require__(92);
	
	var _d3Interpolate = __webpack_require__(127);
	
	var _array = __webpack_require__(124);
	
	var _constant = __webpack_require__(156);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _number = __webpack_require__(157);
	
	var _number2 = _interopRequireDefault(_number);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var unit = [0, 1];
	
	function deinterpolateLinear(a, b) {
	  return (b -= a = +a) ? function (x) {
	    return (x - a) / b;
	  } : (0, _constant2.default)(b);
	}
	
	function deinterpolateClamp(deinterpolate) {
	  return function (a, b) {
	    var d = deinterpolate(a = +a, b = +b);
	    return function (x) {
	      return x <= a ? 0 : x >= b ? 1 : d(x);
	    };
	  };
	}
	
	function reinterpolateClamp(reinterpolate) {
	  return function (a, b) {
	    var r = reinterpolate(a = +a, b = +b);
	    return function (t) {
	      return t <= 0 ? a : t >= 1 ? b : r(t);
	    };
	  };
	}
	
	function bimap(domain, range, deinterpolate, reinterpolate) {
	  var d0 = domain[0],
	      d1 = domain[1],
	      r0 = range[0],
	      r1 = range[1];
	  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
	  return function (x) {
	    return r0(d0(x));
	  };
	}
	
	function polymap(domain, range, deinterpolate, reinterpolate) {
	  var j = Math.min(domain.length, range.length) - 1,
	      d = new Array(j),
	      r = new Array(j),
	      i = -1;
	
	  // Reverse descending domains.
	  if (domain[j] < domain[0]) {
	    domain = domain.slice().reverse();
	    range = range.slice().reverse();
	  }
	
	  while (++i < j) {
	    d[i] = deinterpolate(domain[i], domain[i + 1]);
	    r[i] = reinterpolate(range[i], range[i + 1]);
	  }
	
	  return function (x) {
	    var i = (0, _d3Array.bisect)(domain, x, 1, j) - 1;
	    return r[i](d[i](x));
	  };
	}
	
	function copy(source, target) {
	  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp());
	}
	
	// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
	// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
	function continuous(deinterpolate, reinterpolate) {
	  var domain = unit,
	      range = unit,
	      interpolate = _d3Interpolate.interpolate,
	      clamp = false,
	      piecewise,
	      output,
	      input;
	
	  function rescale() {
	    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
	    output = input = null;
	    return scale;
	  }
	
	  function scale(x) {
	    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
	  }
	
	  scale.invert = function (y) {
	    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
	  };
	
	  scale.domain = function (_) {
	    return arguments.length ? (domain = _array.map.call(_, _number2.default), rescale()) : domain.slice();
	  };
	
	  scale.range = function (_) {
	    return arguments.length ? (range = _array.slice.call(_), rescale()) : range.slice();
	  };
	
	  scale.rangeRound = function (_) {
	    return range = _array.slice.call(_), interpolate = _d3Interpolate.interpolateRound, rescale();
	  };
	
	  scale.clamp = function (_) {
	    return arguments.length ? (clamp = !!_, rescale()) : clamp;
	  };
	
	  scale.interpolate = function (_) {
	    return arguments.length ? (interpolate = _, rescale()) : interpolate;
	  };
	
	  return rescale();
	}

/***/ },
/* 156 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return function () {
	    return x;
	  };
	};

/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return +x;
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (domain, count, specifier) {
	  var start = domain[0],
	      stop = domain[domain.length - 1],
	      step = (0, _d3Array.tickStep)(start, stop, count == null ? 10 : count),
	      precision;
	  specifier = (0, _d3Format.formatSpecifier)(specifier == null ? ",f" : specifier);
	  switch (specifier.type) {
	    case "s":
	      {
	        var value = Math.max(Math.abs(start), Math.abs(stop));
	        if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionPrefix)(step, value))) specifier.precision = precision;
	        return (0, _d3Format.formatPrefix)(specifier, value);
	      }
	    case "":
	    case "e":
	    case "g":
	    case "p":
	    case "r":
	      {
	        if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionRound)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
	        break;
	      }
	    case "f":
	    case "%":
	      {
	        if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionFixed)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
	        break;
	      }
	  }
	  return (0, _d3Format.format)(specifier);
	};
	
	var _d3Array = __webpack_require__(92);
	
	var _d3Format = __webpack_require__(159);

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defaultLocale = __webpack_require__(160);
	
	Object.defineProperty(exports, "formatDefaultLocale", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_defaultLocale).default;
	  }
	});
	Object.defineProperty(exports, "format", {
	  enumerable: true,
	  get: function get() {
	    return _defaultLocale.format;
	  }
	});
	Object.defineProperty(exports, "formatPrefix", {
	  enumerable: true,
	  get: function get() {
	    return _defaultLocale.formatPrefix;
	  }
	});
	
	var _locale = __webpack_require__(161);
	
	Object.defineProperty(exports, "formatLocale", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_locale).default;
	  }
	});
	
	var _formatSpecifier = __webpack_require__(165);
	
	Object.defineProperty(exports, "formatSpecifier", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_formatSpecifier).default;
	  }
	});
	
	var _precisionFixed = __webpack_require__(170);
	
	Object.defineProperty(exports, "precisionFixed", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_precisionFixed).default;
	  }
	});
	
	var _precisionPrefix = __webpack_require__(171);
	
	Object.defineProperty(exports, "precisionPrefix", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_precisionPrefix).default;
	  }
	});
	
	var _precisionRound = __webpack_require__(172);
	
	Object.defineProperty(exports, "precisionRound", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_precisionRound).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatPrefix = exports.format = undefined;
	exports.default = defaultLocale;
	
	var _locale = __webpack_require__(161);
	
	var _locale2 = _interopRequireDefault(_locale);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locale;
	var format = exports.format = undefined;
	var formatPrefix = exports.formatPrefix = undefined;
	
	defaultLocale({
	  decimal: ".",
	  thousands: ",",
	  grouping: [3],
	  currency: ["$", ""]
	});
	
	function defaultLocale(definition) {
	  locale = (0, _locale2.default)(definition);
	  exports.format = format = locale.format;
	  exports.formatPrefix = formatPrefix = locale.formatPrefix;
	  return locale;
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (locale) {
	  var group = locale.grouping && locale.thousands ? (0, _formatGroup2.default)(locale.grouping, locale.thousands) : identity,
	      currency = locale.currency,
	      decimal = locale.decimal;
	
	  function newFormat(specifier) {
	    specifier = (0, _formatSpecifier2.default)(specifier);
	
	    var fill = specifier.fill,
	        align = specifier.align,
	        sign = specifier.sign,
	        symbol = specifier.symbol,
	        zero = specifier.zero,
	        width = specifier.width,
	        comma = specifier.comma,
	        precision = specifier.precision,
	        type = specifier.type;
	
	    // Compute the prefix and suffix.
	    // For SI-prefix, the suffix is lazily computed.
	    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
	        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";
	
	    // What format function should we use?
	    // Is this an integer type?
	    // Can this type generate exponential notation?
	    var formatType = _formatTypes2.default[type],
	        maybeSuffix = !type || /[defgprs%]/.test(type);
	
	    // Set the default precision if not specified,
	    // or clamp the specified precision to the supported range.
	    // For significant precision, it must be in [1, 21].
	    // For fixed precision, it must be in [0, 20].
	    precision = precision == null ? type ? 6 : 12 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
	
	    function format(value) {
	      var valuePrefix = prefix,
	          valueSuffix = suffix,
	          i,
	          n,
	          c;
	
	      if (type === "c") {
	        valueSuffix = formatType(value) + valueSuffix;
	        value = "";
	      } else {
	        value = +value;
	
	        // Convert negative to positive, and compute the prefix.
	        // Note that -0 is not less than 0, but 1 / -0 is!
	        var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);
	
	        // Perform the initial formatting.
	        value = formatType(value, precision);
	
	        // If the original value was negative, it may be rounded to zero during
	        // formatting; treat this as (positive) zero.
	        if (valueNegative) {
	          i = -1, n = value.length;
	          valueNegative = false;
	          while (++i < n) {
	            if (c = value.charCodeAt(i), 48 < c && c < 58 || type === "x" && 96 < c && c < 103 || type === "X" && 64 < c && c < 71) {
	              valueNegative = true;
	              break;
	            }
	          }
	        }
	
	        // Compute the prefix and suffix.
	        valuePrefix = (valueNegative ? sign === "(" ? sign : "-" : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
	        valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + _formatPrefixAuto.prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");
	
	        // Break the formatted value into the integer “value” part that can be
	        // grouped, and fractional or exponential “suffix” part that is not.
	        if (maybeSuffix) {
	          i = -1, n = value.length;
	          while (++i < n) {
	            if (c = value.charCodeAt(i), 48 > c || c > 57) {
	              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
	              value = value.slice(0, i);
	              break;
	            }
	          }
	        }
	      }
	
	      // If the fill character is not "0", grouping is applied before padding.
	      if (comma && !zero) value = group(value, Infinity);
	
	      // Compute the padding.
	      var length = valuePrefix.length + value.length + valueSuffix.length,
	          padding = length < width ? new Array(width - length + 1).join(fill) : "";
	
	      // If the fill character is "0", grouping is applied after padding.
	      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
	
	      // Reconstruct the final output based on the desired alignment.
	      switch (align) {
	        case "<":
	          return valuePrefix + value + valueSuffix + padding;
	        case "=":
	          return valuePrefix + padding + value + valueSuffix;
	        case "^":
	          return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
	      }
	      return padding + valuePrefix + value + valueSuffix;
	    }
	
	    format.toString = function () {
	      return specifier + "";
	    };
	
	    return format;
	  }
	
	  function formatPrefix(specifier, value) {
	    var f = newFormat((specifier = (0, _formatSpecifier2.default)(specifier), specifier.type = "f", specifier)),
	        e = Math.max(-8, Math.min(8, Math.floor((0, _exponent2.default)(value) / 3))) * 3,
	        k = Math.pow(10, -e),
	        prefix = prefixes[8 + e / 3];
	    return function (value) {
	      return f(k * value) + prefix;
	    };
	  }
	
	  return {
	    format: newFormat,
	    formatPrefix: formatPrefix
	  };
	};
	
	var _exponent = __webpack_require__(162);
	
	var _exponent2 = _interopRequireDefault(_exponent);
	
	var _formatGroup = __webpack_require__(164);
	
	var _formatGroup2 = _interopRequireDefault(_formatGroup);
	
	var _formatSpecifier = __webpack_require__(165);
	
	var _formatSpecifier2 = _interopRequireDefault(_formatSpecifier);
	
	var _formatTypes = __webpack_require__(166);
	
	var _formatTypes2 = _interopRequireDefault(_formatTypes);
	
	var _formatPrefixAuto = __webpack_require__(168);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
	
	function identity(x) {
	  return x;
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return x = (0, _formatDecimal2.default)(Math.abs(x)), x ? x[1] : NaN;
	};
	
	var _formatDecimal = __webpack_require__(163);
	
	var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 163 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x, p) {
	  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
	  var i,
	      coefficient = x.slice(0, i);
	
	  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
	  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
	  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
	};

/***/ },
/* 164 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (grouping, thousands) {
	  return function (value, width) {
	    var i = value.length,
	        t = [],
	        j = 0,
	        g = grouping[0],
	        length = 0;
	
	    while (i > 0 && g > 0) {
	      if (length + g + 1 > width) g = Math.max(1, width - length);
	      t.push(value.substring(i -= g, i + g));
	      if ((length += g + 1) > width) break;
	      g = grouping[j = (j + 1) % grouping.length];
	    }
	
	    return t.reverse().join(thousands);
	  };
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (specifier) {
	  return new FormatSpecifier(specifier);
	};
	
	var _formatTypes = __webpack_require__(166);
	
	var _formatTypes2 = _interopRequireDefault(_formatTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// [[fill]align][sign][symbol][0][width][,][.precision][type]
	var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
	
	function FormatSpecifier(specifier) {
	  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
	
	  var match,
	      fill = match[1] || " ",
	      align = match[2] || ">",
	      sign = match[3] || "-",
	      symbol = match[4] || "",
	      zero = !!match[5],
	      width = match[6] && +match[6],
	      comma = !!match[7],
	      precision = match[8] && +match[8].slice(1),
	      type = match[9] || "";
	
	  // The "n" type is an alias for ",g".
	  if (type === "n") comma = true, type = "g";
	
	  // Map invalid types to the default format.
	  else if (!_formatTypes2.default[type]) type = "";
	
	  // If zero fill is specified, padding goes after sign and before digits.
	  if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
	
	  this.fill = fill;
	  this.align = align;
	  this.sign = sign;
	  this.symbol = symbol;
	  this.zero = zero;
	  this.width = width;
	  this.comma = comma;
	  this.precision = precision;
	  this.type = type;
	}
	
	FormatSpecifier.prototype.toString = function () {
	  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + this.type;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _formatDefault = __webpack_require__(167);
	
	var _formatDefault2 = _interopRequireDefault(_formatDefault);
	
	var _formatPrefixAuto = __webpack_require__(168);
	
	var _formatPrefixAuto2 = _interopRequireDefault(_formatPrefixAuto);
	
	var _formatRounded = __webpack_require__(169);
	
	var _formatRounded2 = _interopRequireDefault(_formatRounded);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  "": _formatDefault2.default,
	  "%": function _(x, p) {
	    return (x * 100).toFixed(p);
	  },
	  "b": function b(x) {
	    return Math.round(x).toString(2);
	  },
	  "c": function c(x) {
	    return x + "";
	  },
	  "d": function d(x) {
	    return Math.round(x).toString(10);
	  },
	  "e": function e(x, p) {
	    return x.toExponential(p);
	  },
	  "f": function f(x, p) {
	    return x.toFixed(p);
	  },
	  "g": function g(x, p) {
	    return x.toPrecision(p);
	  },
	  "o": function o(x) {
	    return Math.round(x).toString(8);
	  },
	  "p": function p(x, _p) {
	    return (0, _formatRounded2.default)(x * 100, _p);
	  },
	  "r": _formatRounded2.default,
	  "s": _formatPrefixAuto2.default,
	  "X": function X(x) {
	    return Math.round(x).toString(16).toUpperCase();
	  },
	  "x": function x(_x) {
	    return Math.round(_x).toString(16);
	  }
	};

/***/ },
/* 167 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x, p) {
	  x = x.toPrecision(p);
	
	  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
	    switch (x[i]) {
	      case ".":
	        i0 = i1 = i;break;
	      case "0":
	        if (i0 === 0) i0 = i;i1 = i;break;
	      case "e":
	        break out;
	      default:
	        if (i0 > 0) i0 = 0;break;
	    }
	  }
	
	  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.prefixExponent = undefined;
	
	exports.default = function (x, p) {
	    var d = (0, _formatDecimal2.default)(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1],
	        i = exponent - (exports.prefixExponent = prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
	        n = coefficient.length;
	    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, _formatDecimal2.default)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
	};
	
	var _formatDecimal = __webpack_require__(163);
	
	var _formatDecimal2 = _interopRequireDefault(_formatDecimal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var prefixExponent = exports.prefixExponent = undefined;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (x, p) {
	    var d = (0, _formatDecimal2.default)(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1];
	    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
	};
	
	var _formatDecimal = __webpack_require__(163);
	
	var _formatDecimal2 = _interopRequireDefault(_formatDecimal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (step) {
	  return Math.max(0, -(0, _exponent2.default)(Math.abs(step)));
	};
	
	var _exponent = __webpack_require__(162);
	
	var _exponent2 = _interopRequireDefault(_exponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (step, value) {
	  return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, _exponent2.default)(value) / 3))) * 3 - (0, _exponent2.default)(Math.abs(step)));
	};
	
	var _exponent = __webpack_require__(162);
	
	var _exponent2 = _interopRequireDefault(_exponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (step, max) {
	  step = Math.abs(step), max = Math.abs(max) - step;
	  return Math.max(0, (0, _exponent2.default)(max) - (0, _exponent2.default)(step)) + 1;
	};
	
	var _exponent = __webpack_require__(162);
	
	var _exponent2 = _interopRequireDefault(_exponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = log;
	
	var _d3Array = __webpack_require__(92);
	
	var _d3Format = __webpack_require__(159);
	
	var _constant = __webpack_require__(156);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _nice = __webpack_require__(174);
	
	var _nice2 = _interopRequireDefault(_nice);
	
	var _continuous = __webpack_require__(155);
	
	var _continuous2 = _interopRequireDefault(_continuous);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function deinterpolate(a, b) {
	  return (b = Math.log(b / a)) ? function (x) {
	    return Math.log(x / a) / b;
	  } : (0, _constant2.default)(b);
	}
	
	function reinterpolate(a, b) {
	  return a < 0 ? function (t) {
	    return -Math.pow(-b, t) * Math.pow(-a, 1 - t);
	  } : function (t) {
	    return Math.pow(b, t) * Math.pow(a, 1 - t);
	  };
	}
	
	function pow10(x) {
	  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
	}
	
	function powp(base) {
	  return base === 10 ? pow10 : base === Math.E ? Math.exp : function (x) {
	    return Math.pow(base, x);
	  };
	}
	
	function logp(base) {
	  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function (x) {
	    return Math.log(x) / base;
	  });
	}
	
	function reflect(f) {
	  return function (x) {
	    return -f(-x);
	  };
	}
	
	function log() {
	  var scale = (0, _continuous2.default)(deinterpolate, reinterpolate).domain([1, 10]),
	      domain = scale.domain,
	      base = 10,
	      logs = logp(10),
	      pows = powp(10);
	
	  function rescale() {
	    logs = logp(base), pows = powp(base);
	    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
	    return scale;
	  }
	
	  scale.base = function (_) {
	    return arguments.length ? (base = +_, rescale()) : base;
	  };
	
	  scale.domain = function (_) {
	    return arguments.length ? (domain(_), rescale()) : domain();
	  };
	
	  scale.ticks = function (count) {
	    var d = domain(),
	        u = d[0],
	        v = d[d.length - 1],
	        r;
	
	    if (r = v < u) i = u, u = v, v = i;
	
	    var i = logs(u),
	        j = logs(v),
	        p,
	        k,
	        t,
	        n = count == null ? 10 : +count,
	        z = [];
	
	    if (!(base % 1) && j - i < n) {
	      i = Math.round(i) - 1, j = Math.round(j) + 1;
	      if (u > 0) for (; i < j; ++i) {
	        for (k = 1, p = pows(i); k < base; ++k) {
	          t = p * k;
	          if (t < u) continue;
	          if (t > v) break;
	          z.push(t);
	        }
	      } else for (; i < j; ++i) {
	        for (k = base - 1, p = pows(i); k >= 1; --k) {
	          t = p * k;
	          if (t < u) continue;
	          if (t > v) break;
	          z.push(t);
	        }
	      }
	    } else {
	      z = (0, _d3Array.ticks)(i, j, Math.min(j - i, n)).map(pows);
	    }
	
	    return r ? z.reverse() : z;
	  };
	
	  scale.tickFormat = function (count, specifier) {
	    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
	    if (typeof specifier !== "function") specifier = (0, _d3Format.format)(specifier);
	    if (count === Infinity) return specifier;
	    if (count == null) count = 10;
	    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
	    return function (d) {
	      var i = d / pows(Math.round(logs(d)));
	      if (i * base < base - 0.5) i *= base;
	      return i <= k ? specifier(d) : "";
	    };
	  };
	
	  scale.nice = function () {
	    return domain((0, _nice2.default)(domain(), {
	      floor: function floor(x) {
	        return pows(Math.floor(logs(x)));
	      },
	      ceil: function ceil(x) {
	        return pows(Math.ceil(logs(x)));
	      }
	    }));
	  };
	
	  scale.copy = function () {
	    return (0, _continuous.copy)(scale, log().base(base));
	  };
	
	  return scale;
	}

/***/ },
/* 174 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (domain, interval) {
	  domain = domain.slice();
	
	  var i0 = 0,
	      i1 = domain.length - 1,
	      x0 = domain[i0],
	      x1 = domain[i1],
	      t;
	
	  if (x1 < x0) {
	    t = i0, i0 = i1, i1 = t;
	    t = x0, x0 = x1, x1 = t;
	  }
	
	  domain[i0] = interval.floor(x0);
	  domain[i1] = interval.ceil(x1);
	  return domain;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = pow;
	exports.sqrt = sqrt;
	
	var _constant = __webpack_require__(156);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _linear = __webpack_require__(126);
	
	var _continuous = __webpack_require__(155);
	
	var _continuous2 = _interopRequireDefault(_continuous);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function raise(x, exponent) {
	  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
	}
	
	function pow() {
	  var exponent = 1,
	      scale = (0, _continuous2.default)(deinterpolate, reinterpolate),
	      domain = scale.domain;
	
	  function deinterpolate(a, b) {
	    return (b = raise(b, exponent) - (a = raise(a, exponent))) ? function (x) {
	      return (raise(x, exponent) - a) / b;
	    } : (0, _constant2.default)(b);
	  }
	
	  function reinterpolate(a, b) {
	    b = raise(b, exponent) - (a = raise(a, exponent));
	    return function (t) {
	      return raise(a + b * t, 1 / exponent);
	    };
	  }
	
	  scale.exponent = function (_) {
	    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
	  };
	
	  scale.copy = function () {
	    return (0, _continuous.copy)(scale, pow().exponent(exponent));
	  };
	
	  return (0, _linear.linearish)(scale);
	}
	
	function sqrt() {
	  return pow().exponent(0.5);
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = quantile;
	
	var _d3Array = __webpack_require__(92);
	
	var _array = __webpack_require__(124);
	
	function quantile() {
	  var domain = [],
	      range = [],
	      thresholds = [];
	
	  function rescale() {
	    var i = 0,
	        n = Math.max(1, range.length);
	    thresholds = new Array(n - 1);
	    while (++i < n) {
	      thresholds[i - 1] = (0, _d3Array.quantile)(domain, i / n);
	    }return scale;
	  }
	
	  function scale(x) {
	    if (!isNaN(x = +x)) return range[(0, _d3Array.bisect)(thresholds, x)];
	  }
	
	  scale.invertExtent = function (y) {
	    var i = range.indexOf(y);
	    return i < 0 ? [NaN, NaN] : [i > 0 ? thresholds[i - 1] : domain[0], i < thresholds.length ? thresholds[i] : domain[domain.length - 1]];
	  };
	
	  scale.domain = function (_) {
	    if (!arguments.length) return domain.slice();
	    domain = [];
	    for (var i = 0, n = _.length, d; i < n; ++i) {
	      if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
	    }domain.sort(_d3Array.ascending);
	    return rescale();
	  };
	
	  scale.range = function (_) {
	    return arguments.length ? (range = _array.slice.call(_), rescale()) : range.slice();
	  };
	
	  scale.quantiles = function () {
	    return thresholds.slice();
	  };
	
	  scale.copy = function () {
	    return quantile().domain(domain).range(range);
	  };
	
	  return scale;
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = quantize;
	
	var _d3Array = __webpack_require__(92);
	
	var _array = __webpack_require__(124);
	
	var _linear = __webpack_require__(126);
	
	function quantize() {
	  var x0 = 0,
	      x1 = 1,
	      n = 1,
	      domain = [0.5],
	      range = [0, 1];
	
	  function scale(x) {
	    if (x <= x) return range[(0, _d3Array.bisect)(domain, x, 0, n)];
	  }
	
	  function rescale() {
	    var i = -1;
	    domain = new Array(n);
	    while (++i < n) {
	      domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
	    }return scale;
	  }
	
	  scale.domain = function (_) {
	    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
	  };
	
	  scale.range = function (_) {
	    return arguments.length ? (n = (range = _array.slice.call(_)).length - 1, rescale()) : range.slice();
	  };
	
	  scale.invertExtent = function (y) {
	    var i = range.indexOf(y);
	    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
	  };
	
	  scale.copy = function () {
	    return quantize().domain([x0, x1]).range(range);
	  };
	
	  return (0, _linear.linearish)(scale);
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = threshold;
	
	var _d3Array = __webpack_require__(92);
	
	var _array = __webpack_require__(124);
	
	function threshold() {
	  var domain = [0.5],
	      range = [0, 1],
	      n = 1;
	
	  function scale(x) {
	    if (x <= x) return range[(0, _d3Array.bisect)(domain, x, 0, n)];
	  }
	
	  scale.domain = function (_) {
	    return arguments.length ? (domain = _array.slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
	  };
	
	  scale.range = function (_) {
	    return arguments.length ? (range = _array.slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
	  };
	
	  scale.invertExtent = function (y) {
	    var i = range.indexOf(y);
	    return [domain[i - 1], domain[i]];
	  };
	
	  scale.copy = function () {
	    return threshold().domain(domain).range(range);
	  };
	
	  return scale;
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.calendar = calendar;
	
	exports.default = function () {
	  return calendar(_d3Time.timeYear, _d3Time.timeMonth, _d3Time.timeWeek, _d3Time.timeDay, _d3Time.timeHour, _d3Time.timeMinute, _d3Time.timeSecond, _d3Time.timeMillisecond, _d3TimeFormat.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
	};
	
	var _d3Array = __webpack_require__(92);
	
	var _d3Interpolate = __webpack_require__(127);
	
	var _d3Time = __webpack_require__(180);
	
	var _d3TimeFormat = __webpack_require__(197);
	
	var _array = __webpack_require__(124);
	
	var _continuous = __webpack_require__(155);
	
	var _continuous2 = _interopRequireDefault(_continuous);
	
	var _nice = __webpack_require__(174);
	
	var _nice2 = _interopRequireDefault(_nice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var durationSecond = 1000,
	    durationMinute = durationSecond * 60,
	    durationHour = durationMinute * 60,
	    durationDay = durationHour * 24,
	    durationWeek = durationDay * 7,
	    durationMonth = durationDay * 30,
	    durationYear = durationDay * 365;
	
	function date(t) {
	  return new Date(t);
	}
	
	function number(t) {
	  return t instanceof Date ? +t : +new Date(+t);
	}
	
	function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
	  var scale = (0, _continuous2.default)(_continuous.deinterpolateLinear, _d3Interpolate.interpolateNumber),
	      invert = scale.invert,
	      domain = scale.domain;
	
	  var formatMillisecond = format(".%L"),
	      formatSecond = format(":%S"),
	      formatMinute = format("%I:%M"),
	      formatHour = format("%I %p"),
	      formatDay = format("%a %d"),
	      formatWeek = format("%b %d"),
	      formatMonth = format("%B"),
	      formatYear = format("%Y");
	
	  var tickIntervals = [[second, 1, durationSecond], [second, 5, 5 * durationSecond], [second, 15, 15 * durationSecond], [second, 30, 30 * durationSecond], [minute, 1, durationMinute], [minute, 5, 5 * durationMinute], [minute, 15, 15 * durationMinute], [minute, 30, 30 * durationMinute], [hour, 1, durationHour], [hour, 3, 3 * durationHour], [hour, 6, 6 * durationHour], [hour, 12, 12 * durationHour], [day, 1, durationDay], [day, 2, 2 * durationDay], [week, 1, durationWeek], [month, 1, durationMonth], [month, 3, 3 * durationMonth], [year, 1, durationYear]];
	
	  function tickFormat(date) {
	    return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
	  }
	
	  function tickInterval(interval, start, stop, step) {
	    if (interval == null) interval = 10;
	
	    // If a desired tick count is specified, pick a reasonable tick interval
	    // based on the extent of the domain and a rough estimate of tick size.
	    // Otherwise, assume interval is already a time interval and use it.
	    if (typeof interval === "number") {
	      var target = Math.abs(stop - start) / interval,
	          i = (0, _d3Array.bisector)(function (i) {
	        return i[2];
	      }).right(tickIntervals, target);
	      if (i === tickIntervals.length) {
	        step = (0, _d3Array.tickStep)(start / durationYear, stop / durationYear, interval);
	        interval = year;
	      } else if (i) {
	        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
	        step = i[1];
	        interval = i[0];
	      } else {
	        step = (0, _d3Array.tickStep)(start, stop, interval);
	        interval = millisecond;
	      }
	    }
	
	    return step == null ? interval : interval.every(step);
	  }
	
	  scale.invert = function (y) {
	    return new Date(invert(y));
	  };
	
	  scale.domain = function (_) {
	    return arguments.length ? domain(_array.map.call(_, number)) : domain().map(date);
	  };
	
	  scale.ticks = function (interval, step) {
	    var d = domain(),
	        t0 = d[0],
	        t1 = d[d.length - 1],
	        r = t1 < t0,
	        t;
	    if (r) t = t0, t0 = t1, t1 = t;
	    t = tickInterval(interval, t0, t1, step);
	    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
	    return r ? t.reverse() : t;
	  };
	
	  scale.tickFormat = function (count, specifier) {
	    return specifier == null ? tickFormat : format(specifier);
	  };
	
	  scale.nice = function (interval, step) {
	    var d = domain();
	    return (interval = tickInterval(interval, d[0], d[d.length - 1], step)) ? domain((0, _nice2.default)(d, interval)) : scale;
	  };
	
	  scale.copy = function () {
	    return (0, _continuous.copy)(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
	  };
	
	  return scale;
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _interval = __webpack_require__(181);
	
	Object.defineProperty(exports, "timeInterval", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_interval).default;
	  }
	});
	
	var _millisecond = __webpack_require__(182);
	
	Object.defineProperty(exports, "timeMillisecond", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_millisecond).default;
	  }
	});
	Object.defineProperty(exports, "timeMilliseconds", {
	  enumerable: true,
	  get: function get() {
	    return _millisecond.milliseconds;
	  }
	});
	Object.defineProperty(exports, "utcMillisecond", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_millisecond).default;
	  }
	});
	Object.defineProperty(exports, "utcMilliseconds", {
	  enumerable: true,
	  get: function get() {
	    return _millisecond.milliseconds;
	  }
	});
	
	var _second = __webpack_require__(183);
	
	Object.defineProperty(exports, "timeSecond", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_second).default;
	  }
	});
	Object.defineProperty(exports, "timeSeconds", {
	  enumerable: true,
	  get: function get() {
	    return _second.seconds;
	  }
	});
	Object.defineProperty(exports, "utcSecond", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_second).default;
	  }
	});
	Object.defineProperty(exports, "utcSeconds", {
	  enumerable: true,
	  get: function get() {
	    return _second.seconds;
	  }
	});
	
	var _minute = __webpack_require__(185);
	
	Object.defineProperty(exports, "timeMinute", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_minute).default;
	  }
	});
	Object.defineProperty(exports, "timeMinutes", {
	  enumerable: true,
	  get: function get() {
	    return _minute.minutes;
	  }
	});
	
	var _hour = __webpack_require__(186);
	
	Object.defineProperty(exports, "timeHour", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hour).default;
	  }
	});
	Object.defineProperty(exports, "timeHours", {
	  enumerable: true,
	  get: function get() {
	    return _hour.hours;
	  }
	});
	
	var _day = __webpack_require__(187);
	
	Object.defineProperty(exports, "timeDay", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_day).default;
	  }
	});
	Object.defineProperty(exports, "timeDays", {
	  enumerable: true,
	  get: function get() {
	    return _day.days;
	  }
	});
	
	var _week = __webpack_require__(188);
	
	Object.defineProperty(exports, "timeWeek", {
	  enumerable: true,
	  get: function get() {
	    return _week.sunday;
	  }
	});
	Object.defineProperty(exports, "timeWeeks", {
	  enumerable: true,
	  get: function get() {
	    return _week.sundays;
	  }
	});
	Object.defineProperty(exports, "timeSunday", {
	  enumerable: true,
	  get: function get() {
	    return _week.sunday;
	  }
	});
	Object.defineProperty(exports, "timeSundays", {
	  enumerable: true,
	  get: function get() {
	    return _week.sundays;
	  }
	});
	Object.defineProperty(exports, "timeMonday", {
	  enumerable: true,
	  get: function get() {
	    return _week.monday;
	  }
	});
	Object.defineProperty(exports, "timeMondays", {
	  enumerable: true,
	  get: function get() {
	    return _week.mondays;
	  }
	});
	Object.defineProperty(exports, "timeTuesday", {
	  enumerable: true,
	  get: function get() {
	    return _week.tuesday;
	  }
	});
	Object.defineProperty(exports, "timeTuesdays", {
	  enumerable: true,
	  get: function get() {
	    return _week.tuesdays;
	  }
	});
	Object.defineProperty(exports, "timeWednesday", {
	  enumerable: true,
	  get: function get() {
	    return _week.wednesday;
	  }
	});
	Object.defineProperty(exports, "timeWednesdays", {
	  enumerable: true,
	  get: function get() {
	    return _week.wednesdays;
	  }
	});
	Object.defineProperty(exports, "timeThursday", {
	  enumerable: true,
	  get: function get() {
	    return _week.thursday;
	  }
	});
	Object.defineProperty(exports, "timeThursdays", {
	  enumerable: true,
	  get: function get() {
	    return _week.thursdays;
	  }
	});
	Object.defineProperty(exports, "timeFriday", {
	  enumerable: true,
	  get: function get() {
	    return _week.friday;
	  }
	});
	Object.defineProperty(exports, "timeFridays", {
	  enumerable: true,
	  get: function get() {
	    return _week.fridays;
	  }
	});
	Object.defineProperty(exports, "timeSaturday", {
	  enumerable: true,
	  get: function get() {
	    return _week.saturday;
	  }
	});
	Object.defineProperty(exports, "timeSaturdays", {
	  enumerable: true,
	  get: function get() {
	    return _week.saturdays;
	  }
	});
	
	var _month = __webpack_require__(189);
	
	Object.defineProperty(exports, "timeMonth", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_month).default;
	  }
	});
	Object.defineProperty(exports, "timeMonths", {
	  enumerable: true,
	  get: function get() {
	    return _month.months;
	  }
	});
	
	var _year = __webpack_require__(190);
	
	Object.defineProperty(exports, "timeYear", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_year).default;
	  }
	});
	Object.defineProperty(exports, "timeYears", {
	  enumerable: true,
	  get: function get() {
	    return _year.years;
	  }
	});
	
	var _utcMinute = __webpack_require__(191);
	
	Object.defineProperty(exports, "utcMinute", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_utcMinute).default;
	  }
	});
	Object.defineProperty(exports, "utcMinutes", {
	  enumerable: true,
	  get: function get() {
	    return _utcMinute.utcMinutes;
	  }
	});
	
	var _utcHour = __webpack_require__(192);
	
	Object.defineProperty(exports, "utcHour", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_utcHour).default;
	  }
	});
	Object.defineProperty(exports, "utcHours", {
	  enumerable: true,
	  get: function get() {
	    return _utcHour.utcHours;
	  }
	});
	
	var _utcDay = __webpack_require__(193);
	
	Object.defineProperty(exports, "utcDay", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_utcDay).default;
	  }
	});
	Object.defineProperty(exports, "utcDays", {
	  enumerable: true,
	  get: function get() {
	    return _utcDay.utcDays;
	  }
	});
	
	var _utcWeek = __webpack_require__(194);
	
	Object.defineProperty(exports, "utcWeek", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcSunday;
	  }
	});
	Object.defineProperty(exports, "utcWeeks", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcSundays;
	  }
	});
	Object.defineProperty(exports, "utcSunday", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcSunday;
	  }
	});
	Object.defineProperty(exports, "utcSundays", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcSundays;
	  }
	});
	Object.defineProperty(exports, "utcMonday", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcMonday;
	  }
	});
	Object.defineProperty(exports, "utcMondays", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcMondays;
	  }
	});
	Object.defineProperty(exports, "utcTuesday", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcTuesday;
	  }
	});
	Object.defineProperty(exports, "utcTuesdays", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcTuesdays;
	  }
	});
	Object.defineProperty(exports, "utcWednesday", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcWednesday;
	  }
	});
	Object.defineProperty(exports, "utcWednesdays", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcWednesdays;
	  }
	});
	Object.defineProperty(exports, "utcThursday", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcThursday;
	  }
	});
	Object.defineProperty(exports, "utcThursdays", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcThursdays;
	  }
	});
	Object.defineProperty(exports, "utcFriday", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcFriday;
	  }
	});
	Object.defineProperty(exports, "utcFridays", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcFridays;
	  }
	});
	Object.defineProperty(exports, "utcSaturday", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcSaturday;
	  }
	});
	Object.defineProperty(exports, "utcSaturdays", {
	  enumerable: true,
	  get: function get() {
	    return _utcWeek.utcSaturdays;
	  }
	});
	
	var _utcMonth = __webpack_require__(195);
	
	Object.defineProperty(exports, "utcMonth", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_utcMonth).default;
	  }
	});
	Object.defineProperty(exports, "utcMonths", {
	  enumerable: true,
	  get: function get() {
	    return _utcMonth.utcMonths;
	  }
	});
	
	var _utcYear = __webpack_require__(196);
	
	Object.defineProperty(exports, "utcYear", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_utcYear).default;
	  }
	});
	Object.defineProperty(exports, "utcYears", {
	  enumerable: true,
	  get: function get() {
	    return _utcYear.utcYears;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 181 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = newInterval;
	var t0 = new Date(),
	    t1 = new Date();
	
	function newInterval(floori, offseti, count, field) {
	
	  function interval(date) {
	    return floori(date = new Date(+date)), date;
	  }
	
	  interval.floor = interval;
	
	  interval.ceil = function (date) {
	    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
	  };
	
	  interval.round = function (date) {
	    var d0 = interval(date),
	        d1 = interval.ceil(date);
	    return date - d0 < d1 - date ? d0 : d1;
	  };
	
	  interval.offset = function (date, step) {
	    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
	  };
	
	  interval.range = function (start, stop, step) {
	    var range = [];
	    start = interval.ceil(start);
	    step = step == null ? 1 : Math.floor(step);
	    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
	    do {
	      range.push(new Date(+start));
	    } while ((offseti(start, step), floori(start), start < stop));
	    return range;
	  };
	
	  interval.filter = function (test) {
	    return newInterval(function (date) {
	      if (date >= date) while (floori(date), !test(date)) {
	        date.setTime(date - 1);
	      }
	    }, function (date, step) {
	      if (date >= date) while (--step >= 0) {
	        while (offseti(date, 1), !test(date)) {}
	      } // eslint-disable-line no-empty
	    });
	  };
	
	  if (count) {
	    interval.count = function (start, end) {
	      t0.setTime(+start), t1.setTime(+end);
	      floori(t0), floori(t1);
	      return Math.floor(count(t0, t1));
	    };
	
	    interval.every = function (step) {
	      step = Math.floor(step);
	      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
	        return field(d) % step === 0;
	      } : function (d) {
	        return interval.count(0, d) % step === 0;
	      });
	    };
	  }
	
	  return interval;
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.milliseconds = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var millisecond = (0, _interval2.default)(function () {
	  // noop
	}, function (date, step) {
	  date.setTime(+date + step);
	}, function (start, end) {
	  return end - start;
	});
	
	// An optimized implementation for this simple case.
	millisecond.every = function (k) {
	  k = Math.floor(k);
	  if (!isFinite(k) || !(k > 0)) return null;
	  if (!(k > 1)) return millisecond;
	  return (0, _interval2.default)(function (date) {
	    date.setTime(Math.floor(date / k) * k);
	  }, function (date, step) {
	    date.setTime(+date + step * k);
	  }, function (start, end) {
	    return (end - start) / k;
	  });
	};
	
	exports.default = millisecond;
	var milliseconds = exports.milliseconds = millisecond.range;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.seconds = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	var _duration = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var second = (0, _interval2.default)(function (date) {
	  date.setTime(Math.floor(date / _duration.durationSecond) * _duration.durationSecond);
	}, function (date, step) {
	  date.setTime(+date + step * _duration.durationSecond);
	}, function (start, end) {
	  return (end - start) / _duration.durationSecond;
	}, function (date) {
	  return date.getUTCSeconds();
	});
	
	exports.default = second;
	var seconds = exports.seconds = second.range;

/***/ },
/* 184 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var durationSecond = exports.durationSecond = 1e3;
	var durationMinute = exports.durationMinute = 6e4;
	var durationHour = exports.durationHour = 36e5;
	var durationDay = exports.durationDay = 864e5;
	var durationWeek = exports.durationWeek = 6048e5;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.minutes = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	var _duration = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var minute = (0, _interval2.default)(function (date) {
	  date.setTime(Math.floor(date / _duration.durationMinute) * _duration.durationMinute);
	}, function (date, step) {
	  date.setTime(+date + step * _duration.durationMinute);
	}, function (start, end) {
	  return (end - start) / _duration.durationMinute;
	}, function (date) {
	  return date.getMinutes();
	});
	
	exports.default = minute;
	var minutes = exports.minutes = minute.range;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hours = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	var _duration = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hour = (0, _interval2.default)(function (date) {
	  var offset = date.getTimezoneOffset() * _duration.durationMinute % _duration.durationHour;
	  if (offset < 0) offset += _duration.durationHour;
	  date.setTime(Math.floor((+date - offset) / _duration.durationHour) * _duration.durationHour + offset);
	}, function (date, step) {
	  date.setTime(+date + step * _duration.durationHour);
	}, function (start, end) {
	  return (end - start) / _duration.durationHour;
	}, function (date) {
	  return date.getHours();
	});
	
	exports.default = hour;
	var hours = exports.hours = hour.range;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.days = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	var _duration = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var day = (0, _interval2.default)(function (date) {
	  date.setHours(0, 0, 0, 0);
	}, function (date, step) {
	  date.setDate(date.getDate() + step);
	}, function (start, end) {
	  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration.durationMinute) / _duration.durationDay;
	}, function (date) {
	  return date.getDate() - 1;
	});
	
	exports.default = day;
	var days = exports.days = day.range;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.saturdays = exports.fridays = exports.thursdays = exports.wednesdays = exports.tuesdays = exports.mondays = exports.sundays = exports.saturday = exports.friday = exports.thursday = exports.wednesday = exports.tuesday = exports.monday = exports.sunday = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	var _duration = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function weekday(i) {
	  return (0, _interval2.default)(function (date) {
	    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
	    date.setHours(0, 0, 0, 0);
	  }, function (date, step) {
	    date.setDate(date.getDate() + step * 7);
	  }, function (start, end) {
	    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration.durationMinute) / _duration.durationWeek;
	  });
	}
	
	var sunday = exports.sunday = weekday(0);
	var monday = exports.monday = weekday(1);
	var tuesday = exports.tuesday = weekday(2);
	var wednesday = exports.wednesday = weekday(3);
	var thursday = exports.thursday = weekday(4);
	var friday = exports.friday = weekday(5);
	var saturday = exports.saturday = weekday(6);
	
	var sundays = exports.sundays = sunday.range;
	var mondays = exports.mondays = monday.range;
	var tuesdays = exports.tuesdays = tuesday.range;
	var wednesdays = exports.wednesdays = wednesday.range;
	var thursdays = exports.thursdays = thursday.range;
	var fridays = exports.fridays = friday.range;
	var saturdays = exports.saturdays = saturday.range;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.months = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var month = (0, _interval2.default)(function (date) {
	  date.setDate(1);
	  date.setHours(0, 0, 0, 0);
	}, function (date, step) {
	  date.setMonth(date.getMonth() + step);
	}, function (start, end) {
	  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
	}, function (date) {
	  return date.getMonth();
	});
	
	exports.default = month;
	var months = exports.months = month.range;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.years = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var year = (0, _interval2.default)(function (date) {
	  date.setMonth(0, 1);
	  date.setHours(0, 0, 0, 0);
	}, function (date, step) {
	  date.setFullYear(date.getFullYear() + step);
	}, function (start, end) {
	  return end.getFullYear() - start.getFullYear();
	}, function (date) {
	  return date.getFullYear();
	});
	
	// An optimized implementation for this simple case.
	year.every = function (k) {
	  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, _interval2.default)(function (date) {
	    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
	    date.setMonth(0, 1);
	    date.setHours(0, 0, 0, 0);
	  }, function (date, step) {
	    date.setFullYear(date.getFullYear() + step * k);
	  });
	};
	
	exports.default = year;
	var years = exports.years = year.range;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utcMinutes = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	var _duration = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var utcMinute = (0, _interval2.default)(function (date) {
	  date.setUTCSeconds(0, 0);
	}, function (date, step) {
	  date.setTime(+date + step * _duration.durationMinute);
	}, function (start, end) {
	  return (end - start) / _duration.durationMinute;
	}, function (date) {
	  return date.getUTCMinutes();
	});
	
	exports.default = utcMinute;
	var utcMinutes = exports.utcMinutes = utcMinute.range;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utcHours = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	var _duration = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var utcHour = (0, _interval2.default)(function (date) {
	  date.setUTCMinutes(0, 0, 0);
	}, function (date, step) {
	  date.setTime(+date + step * _duration.durationHour);
	}, function (start, end) {
	  return (end - start) / _duration.durationHour;
	}, function (date) {
	  return date.getUTCHours();
	});
	
	exports.default = utcHour;
	var utcHours = exports.utcHours = utcHour.range;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utcDays = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	var _duration = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var utcDay = (0, _interval2.default)(function (date) {
	  date.setUTCHours(0, 0, 0, 0);
	}, function (date, step) {
	  date.setUTCDate(date.getUTCDate() + step);
	}, function (start, end) {
	  return (end - start) / _duration.durationDay;
	}, function (date) {
	  return date.getUTCDate() - 1;
	});
	
	exports.default = utcDay;
	var utcDays = exports.utcDays = utcDay.range;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utcSaturdays = exports.utcFridays = exports.utcThursdays = exports.utcWednesdays = exports.utcTuesdays = exports.utcMondays = exports.utcSundays = exports.utcSaturday = exports.utcFriday = exports.utcThursday = exports.utcWednesday = exports.utcTuesday = exports.utcMonday = exports.utcSunday = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	var _duration = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function utcWeekday(i) {
	  return (0, _interval2.default)(function (date) {
	    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function (date, step) {
	    date.setUTCDate(date.getUTCDate() + step * 7);
	  }, function (start, end) {
	    return (end - start) / _duration.durationWeek;
	  });
	}
	
	var utcSunday = exports.utcSunday = utcWeekday(0);
	var utcMonday = exports.utcMonday = utcWeekday(1);
	var utcTuesday = exports.utcTuesday = utcWeekday(2);
	var utcWednesday = exports.utcWednesday = utcWeekday(3);
	var utcThursday = exports.utcThursday = utcWeekday(4);
	var utcFriday = exports.utcFriday = utcWeekday(5);
	var utcSaturday = exports.utcSaturday = utcWeekday(6);
	
	var utcSundays = exports.utcSundays = utcSunday.range;
	var utcMondays = exports.utcMondays = utcMonday.range;
	var utcTuesdays = exports.utcTuesdays = utcTuesday.range;
	var utcWednesdays = exports.utcWednesdays = utcWednesday.range;
	var utcThursdays = exports.utcThursdays = utcThursday.range;
	var utcFridays = exports.utcFridays = utcFriday.range;
	var utcSaturdays = exports.utcSaturdays = utcSaturday.range;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utcMonths = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var utcMonth = (0, _interval2.default)(function (date) {
	  date.setUTCDate(1);
	  date.setUTCHours(0, 0, 0, 0);
	}, function (date, step) {
	  date.setUTCMonth(date.getUTCMonth() + step);
	}, function (start, end) {
	  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
	}, function (date) {
	  return date.getUTCMonth();
	});
	
	exports.default = utcMonth;
	var utcMonths = exports.utcMonths = utcMonth.range;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utcYears = undefined;
	
	var _interval = __webpack_require__(181);
	
	var _interval2 = _interopRequireDefault(_interval);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var utcYear = (0, _interval2.default)(function (date) {
	  date.setUTCMonth(0, 1);
	  date.setUTCHours(0, 0, 0, 0);
	}, function (date, step) {
	  date.setUTCFullYear(date.getUTCFullYear() + step);
	}, function (start, end) {
	  return end.getUTCFullYear() - start.getUTCFullYear();
	}, function (date) {
	  return date.getUTCFullYear();
	});
	
	// An optimized implementation for this simple case.
	utcYear.every = function (k) {
	  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, _interval2.default)(function (date) {
	    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
	    date.setUTCMonth(0, 1);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function (date, step) {
	    date.setUTCFullYear(date.getUTCFullYear() + step * k);
	  });
	};
	
	exports.default = utcYear;
	var utcYears = exports.utcYears = utcYear.range;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defaultLocale = __webpack_require__(198);
	
	Object.defineProperty(exports, "timeFormatDefaultLocale", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_defaultLocale).default;
	  }
	});
	Object.defineProperty(exports, "timeFormat", {
	  enumerable: true,
	  get: function get() {
	    return _defaultLocale.timeFormat;
	  }
	});
	Object.defineProperty(exports, "timeParse", {
	  enumerable: true,
	  get: function get() {
	    return _defaultLocale.timeParse;
	  }
	});
	Object.defineProperty(exports, "utcFormat", {
	  enumerable: true,
	  get: function get() {
	    return _defaultLocale.utcFormat;
	  }
	});
	Object.defineProperty(exports, "utcParse", {
	  enumerable: true,
	  get: function get() {
	    return _defaultLocale.utcParse;
	  }
	});
	
	var _locale = __webpack_require__(199);
	
	Object.defineProperty(exports, "timeFormatLocale", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_locale).default;
	  }
	});
	
	var _isoFormat = __webpack_require__(200);
	
	Object.defineProperty(exports, "isoFormat", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isoFormat).default;
	  }
	});
	
	var _isoParse = __webpack_require__(201);
	
	Object.defineProperty(exports, "isoParse", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_isoParse).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utcParse = exports.utcFormat = exports.timeParse = exports.timeFormat = undefined;
	exports.default = defaultLocale;
	
	var _locale = __webpack_require__(199);
	
	var _locale2 = _interopRequireDefault(_locale);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locale;
	var timeFormat = exports.timeFormat = undefined;
	var timeParse = exports.timeParse = undefined;
	var utcFormat = exports.utcFormat = undefined;
	var utcParse = exports.utcParse = undefined;
	
	defaultLocale({
	  dateTime: "%x, %X",
	  date: "%-m/%-d/%Y",
	  time: "%-I:%M:%S %p",
	  periods: ["AM", "PM"],
	  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});
	
	function defaultLocale(definition) {
	  locale = (0, _locale2.default)(definition);
	  exports.timeFormat = timeFormat = locale.format;
	  exports.timeParse = timeParse = locale.parse;
	  exports.utcFormat = utcFormat = locale.utcFormat;
	  exports.utcParse = utcParse = locale.utcParse;
	  return locale;
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = formatLocale;
	
	var _d3Time = __webpack_require__(180);
	
	function localDate(d) {
	  if (0 <= d.y && d.y < 100) {
	    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
	    date.setFullYear(d.y);
	    return date;
	  }
	  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
	}
	
	function utcDate(d) {
	  if (0 <= d.y && d.y < 100) {
	    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
	    date.setUTCFullYear(d.y);
	    return date;
	  }
	  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
	}
	
	function newYear(y) {
	  return { y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
	}
	
	function formatLocale(locale) {
	  var locale_dateTime = locale.dateTime,
	      locale_date = locale.date,
	      locale_time = locale.time,
	      locale_periods = locale.periods,
	      locale_weekdays = locale.days,
	      locale_shortWeekdays = locale.shortDays,
	      locale_months = locale.months,
	      locale_shortMonths = locale.shortMonths;
	
	  var periodRe = formatRe(locale_periods),
	      periodLookup = formatLookup(locale_periods),
	      weekdayRe = formatRe(locale_weekdays),
	      weekdayLookup = formatLookup(locale_weekdays),
	      shortWeekdayRe = formatRe(locale_shortWeekdays),
	      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
	      monthRe = formatRe(locale_months),
	      monthLookup = formatLookup(locale_months),
	      shortMonthRe = formatRe(locale_shortMonths),
	      shortMonthLookup = formatLookup(locale_shortMonths);
	
	  var formats = {
	    "a": formatShortWeekday,
	    "A": formatWeekday,
	    "b": formatShortMonth,
	    "B": formatMonth,
	    "c": null,
	    "d": formatDayOfMonth,
	    "e": formatDayOfMonth,
	    "H": formatHour24,
	    "I": formatHour12,
	    "j": formatDayOfYear,
	    "L": formatMilliseconds,
	    "m": formatMonthNumber,
	    "M": formatMinutes,
	    "p": formatPeriod,
	    "S": formatSeconds,
	    "U": formatWeekNumberSunday,
	    "w": formatWeekdayNumber,
	    "W": formatWeekNumberMonday,
	    "x": null,
	    "X": null,
	    "y": formatYear,
	    "Y": formatFullYear,
	    "Z": formatZone,
	    "%": formatLiteralPercent
	  };
	
	  var utcFormats = {
	    "a": formatUTCShortWeekday,
	    "A": formatUTCWeekday,
	    "b": formatUTCShortMonth,
	    "B": formatUTCMonth,
	    "c": null,
	    "d": formatUTCDayOfMonth,
	    "e": formatUTCDayOfMonth,
	    "H": formatUTCHour24,
	    "I": formatUTCHour12,
	    "j": formatUTCDayOfYear,
	    "L": formatUTCMilliseconds,
	    "m": formatUTCMonthNumber,
	    "M": formatUTCMinutes,
	    "p": formatUTCPeriod,
	    "S": formatUTCSeconds,
	    "U": formatUTCWeekNumberSunday,
	    "w": formatUTCWeekdayNumber,
	    "W": formatUTCWeekNumberMonday,
	    "x": null,
	    "X": null,
	    "y": formatUTCYear,
	    "Y": formatUTCFullYear,
	    "Z": formatUTCZone,
	    "%": formatLiteralPercent
	  };
	
	  var parses = {
	    "a": parseShortWeekday,
	    "A": parseWeekday,
	    "b": parseShortMonth,
	    "B": parseMonth,
	    "c": parseLocaleDateTime,
	    "d": parseDayOfMonth,
	    "e": parseDayOfMonth,
	    "H": parseHour24,
	    "I": parseHour24,
	    "j": parseDayOfYear,
	    "L": parseMilliseconds,
	    "m": parseMonthNumber,
	    "M": parseMinutes,
	    "p": parsePeriod,
	    "S": parseSeconds,
	    "U": parseWeekNumberSunday,
	    "w": parseWeekdayNumber,
	    "W": parseWeekNumberMonday,
	    "x": parseLocaleDate,
	    "X": parseLocaleTime,
	    "y": parseYear,
	    "Y": parseFullYear,
	    "Z": parseZone,
	    "%": parseLiteralPercent
	  };
	
	  // These recursive directive definitions must be deferred.
	  formats.x = newFormat(locale_date, formats);
	  formats.X = newFormat(locale_time, formats);
	  formats.c = newFormat(locale_dateTime, formats);
	  utcFormats.x = newFormat(locale_date, utcFormats);
	  utcFormats.X = newFormat(locale_time, utcFormats);
	  utcFormats.c = newFormat(locale_dateTime, utcFormats);
	
	  function newFormat(specifier, formats) {
	    return function (date) {
	      var string = [],
	          i = -1,
	          j = 0,
	          n = specifier.length,
	          c,
	          pad,
	          format;
	
	      if (!(date instanceof Date)) date = new Date(+date);
	
	      while (++i < n) {
	        if (specifier.charCodeAt(i) === 37) {
	          string.push(specifier.slice(j, i));
	          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
	          if (format = formats[c]) c = format(date, pad);
	          string.push(c);
	          j = i + 1;
	        }
	      }
	
	      string.push(specifier.slice(j, i));
	      return string.join("");
	    };
	  }
	
	  function newParse(specifier, newDate) {
	    return function (string) {
	      var d = newYear(1900),
	          i = parseSpecifier(d, specifier, string += "", 0);
	      if (i != string.length) return null;
	
	      // The am-pm flag is 0 for AM, and 1 for PM.
	      if ("p" in d) d.H = d.H % 12 + d.p * 12;
	
	      // Convert day-of-week and week-of-year to day-of-year.
	      if ("W" in d || "U" in d) {
	        if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	        var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
	        d.m = 0;
	        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
	      }
	
	      // If a time zone is specified, all fields are interpreted as UTC and then
	      // offset according to the specified time zone.
	      if ("Z" in d) {
	        d.H += d.Z / 100 | 0;
	        d.M += d.Z % 100;
	        return utcDate(d);
	      }
	
	      // Otherwise, all fields are in local time.
	      return newDate(d);
	    };
	  }
	
	  function parseSpecifier(d, specifier, string, j) {
	    var i = 0,
	        n = specifier.length,
	        m = string.length,
	        c,
	        parse;
	
	    while (i < n) {
	      if (j >= m) return -1;
	      c = specifier.charCodeAt(i++);
	      if (c === 37) {
	        c = specifier.charAt(i++);
	        parse = parses[c in pads ? specifier.charAt(i++) : c];
	        if (!parse || (j = parse(d, string, j)) < 0) return -1;
	      } else if (c != string.charCodeAt(j++)) {
	        return -1;
	      }
	    }
	
	    return j;
	  }
	
	  function parsePeriod(d, string, i) {
	    var n = periodRe.exec(string.slice(i));
	    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseShortWeekday(d, string, i) {
	    var n = shortWeekdayRe.exec(string.slice(i));
	    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseWeekday(d, string, i) {
	    var n = weekdayRe.exec(string.slice(i));
	    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseShortMonth(d, string, i) {
	    var n = shortMonthRe.exec(string.slice(i));
	    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseMonth(d, string, i) {
	    var n = monthRe.exec(string.slice(i));
	    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	  }
	
	  function parseLocaleDateTime(d, string, i) {
	    return parseSpecifier(d, locale_dateTime, string, i);
	  }
	
	  function parseLocaleDate(d, string, i) {
	    return parseSpecifier(d, locale_date, string, i);
	  }
	
	  function parseLocaleTime(d, string, i) {
	    return parseSpecifier(d, locale_time, string, i);
	  }
	
	  function formatShortWeekday(d) {
	    return locale_shortWeekdays[d.getDay()];
	  }
	
	  function formatWeekday(d) {
	    return locale_weekdays[d.getDay()];
	  }
	
	  function formatShortMonth(d) {
	    return locale_shortMonths[d.getMonth()];
	  }
	
	  function formatMonth(d) {
	    return locale_months[d.getMonth()];
	  }
	
	  function formatPeriod(d) {
	    return locale_periods[+(d.getHours() >= 12)];
	  }
	
	  function formatUTCShortWeekday(d) {
	    return locale_shortWeekdays[d.getUTCDay()];
	  }
	
	  function formatUTCWeekday(d) {
	    return locale_weekdays[d.getUTCDay()];
	  }
	
	  function formatUTCShortMonth(d) {
	    return locale_shortMonths[d.getUTCMonth()];
	  }
	
	  function formatUTCMonth(d) {
	    return locale_months[d.getUTCMonth()];
	  }
	
	  function formatUTCPeriod(d) {
	    return locale_periods[+(d.getUTCHours() >= 12)];
	  }
	
	  return {
	    format: function format(specifier) {
	      var f = newFormat(specifier += "", formats);
	      f.toString = function () {
	        return specifier;
	      };
	      return f;
	    },
	    parse: function parse(specifier) {
	      var p = newParse(specifier += "", localDate);
	      p.toString = function () {
	        return specifier;
	      };
	      return p;
	    },
	    utcFormat: function utcFormat(specifier) {
	      var f = newFormat(specifier += "", utcFormats);
	      f.toString = function () {
	        return specifier;
	      };
	      return f;
	    },
	    utcParse: function utcParse(specifier) {
	      var p = newParse(specifier, utcDate);
	      p.toString = function () {
	        return specifier;
	      };
	      return p;
	    }
	  };
	}
	
	var pads = { "-": "", "_": " ", "0": "0" },
	    numberRe = /^\s*\d+/,
	    // note: ignores next directive
	percentRe = /^%/,
	    requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	
	function pad(value, fill, width) {
	  var sign = value < 0 ? "-" : "",
	      string = (sign ? -value : value) + "",
	      length = string.length;
	  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	}
	
	function requote(s) {
	  return s.replace(requoteRe, "\\$&");
	}
	
	function formatRe(names) {
	  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
	}
	
	function formatLookup(names) {
	  var map = {},
	      i = -1,
	      n = names.length;
	  while (++i < n) {
	    map[names[i].toLowerCase()] = i;
	  }return map;
	}
	
	function parseWeekdayNumber(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 1));
	  return n ? (d.w = +n[0], i + n[0].length) : -1;
	}
	
	function parseWeekNumberSunday(d, string, i) {
	  var n = numberRe.exec(string.slice(i));
	  return n ? (d.U = +n[0], i + n[0].length) : -1;
	}
	
	function parseWeekNumberMonday(d, string, i) {
	  var n = numberRe.exec(string.slice(i));
	  return n ? (d.W = +n[0], i + n[0].length) : -1;
	}
	
	function parseFullYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 4));
	  return n ? (d.y = +n[0], i + n[0].length) : -1;
	}
	
	function parseYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
	}
	
	function parseZone(d, string, i) {
	  var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
	  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
	}
	
	function parseMonthNumber(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
	}
	
	function parseDayOfMonth(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.d = +n[0], i + n[0].length) : -1;
	}
	
	function parseDayOfYear(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 3));
	  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
	}
	
	function parseHour24(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.H = +n[0], i + n[0].length) : -1;
	}
	
	function parseMinutes(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.M = +n[0], i + n[0].length) : -1;
	}
	
	function parseSeconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 2));
	  return n ? (d.S = +n[0], i + n[0].length) : -1;
	}
	
	function parseMilliseconds(d, string, i) {
	  var n = numberRe.exec(string.slice(i, i + 3));
	  return n ? (d.L = +n[0], i + n[0].length) : -1;
	}
	
	function parseLiteralPercent(d, string, i) {
	  var n = percentRe.exec(string.slice(i, i + 1));
	  return n ? i + n[0].length : -1;
	}
	
	function formatDayOfMonth(d, p) {
	  return pad(d.getDate(), p, 2);
	}
	
	function formatHour24(d, p) {
	  return pad(d.getHours(), p, 2);
	}
	
	function formatHour12(d, p) {
	  return pad(d.getHours() % 12 || 12, p, 2);
	}
	
	function formatDayOfYear(d, p) {
	  return pad(1 + _d3Time.timeDay.count((0, _d3Time.timeYear)(d), d), p, 3);
	}
	
	function formatMilliseconds(d, p) {
	  return pad(d.getMilliseconds(), p, 3);
	}
	
	function formatMonthNumber(d, p) {
	  return pad(d.getMonth() + 1, p, 2);
	}
	
	function formatMinutes(d, p) {
	  return pad(d.getMinutes(), p, 2);
	}
	
	function formatSeconds(d, p) {
	  return pad(d.getSeconds(), p, 2);
	}
	
	function formatWeekNumberSunday(d, p) {
	  return pad(_d3Time.timeSunday.count((0, _d3Time.timeYear)(d), d), p, 2);
	}
	
	function formatWeekdayNumber(d) {
	  return d.getDay();
	}
	
	function formatWeekNumberMonday(d, p) {
	  return pad(_d3Time.timeMonday.count((0, _d3Time.timeYear)(d), d), p, 2);
	}
	
	function formatYear(d, p) {
	  return pad(d.getFullYear() % 100, p, 2);
	}
	
	function formatFullYear(d, p) {
	  return pad(d.getFullYear() % 10000, p, 4);
	}
	
	function formatZone(d) {
	  var z = d.getTimezoneOffset();
	  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
	}
	
	function formatUTCDayOfMonth(d, p) {
	  return pad(d.getUTCDate(), p, 2);
	}
	
	function formatUTCHour24(d, p) {
	  return pad(d.getUTCHours(), p, 2);
	}
	
	function formatUTCHour12(d, p) {
	  return pad(d.getUTCHours() % 12 || 12, p, 2);
	}
	
	function formatUTCDayOfYear(d, p) {
	  return pad(1 + _d3Time.utcDay.count((0, _d3Time.utcYear)(d), d), p, 3);
	}
	
	function formatUTCMilliseconds(d, p) {
	  return pad(d.getUTCMilliseconds(), p, 3);
	}
	
	function formatUTCMonthNumber(d, p) {
	  return pad(d.getUTCMonth() + 1, p, 2);
	}
	
	function formatUTCMinutes(d, p) {
	  return pad(d.getUTCMinutes(), p, 2);
	}
	
	function formatUTCSeconds(d, p) {
	  return pad(d.getUTCSeconds(), p, 2);
	}
	
	function formatUTCWeekNumberSunday(d, p) {
	  return pad(_d3Time.utcSunday.count((0, _d3Time.utcYear)(d), d), p, 2);
	}
	
	function formatUTCWeekdayNumber(d) {
	  return d.getUTCDay();
	}
	
	function formatUTCWeekNumberMonday(d, p) {
	  return pad(_d3Time.utcMonday.count((0, _d3Time.utcYear)(d), d), p, 2);
	}
	
	function formatUTCYear(d, p) {
	  return pad(d.getUTCFullYear() % 100, p, 2);
	}
	
	function formatUTCFullYear(d, p) {
	  return pad(d.getUTCFullYear() % 10000, p, 4);
	}
	
	function formatUTCZone() {
	  return "+0000";
	}
	
	function formatLiteralPercent() {
	  return "%";
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isoSpecifier = undefined;
	
	var _defaultLocale = __webpack_require__(198);
	
	var isoSpecifier = exports.isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
	
	function formatIsoNative(date) {
	    return date.toISOString();
	}
	
	var formatIso = Date.prototype.toISOString ? formatIsoNative : (0, _defaultLocale.utcFormat)(isoSpecifier);
	
	exports.default = formatIso;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isoFormat = __webpack_require__(200);
	
	var _defaultLocale = __webpack_require__(198);
	
	function parseIsoNative(string) {
	  var date = new Date(string);
	  return isNaN(date) ? null : date;
	}
	
	var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : (0, _defaultLocale.utcParse)(_isoFormat.isoSpecifier);
	
	exports.default = parseIso;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return (0, _time.calendar)(_d3Time.utcYear, _d3Time.utcMonth, _d3Time.utcWeek, _d3Time.utcDay, _d3Time.utcHour, _d3Time.utcMinute, _d3Time.utcSecond, _d3Time.utcMillisecond, _d3TimeFormat.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
	};
	
	var _time = __webpack_require__(179);
	
	var _d3TimeFormat = __webpack_require__(197);
	
	var _d3Time = __webpack_require__(180);

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(204);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _colors2.default)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

/***/ },
/* 204 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (s) {
	  return s.match(/.{6}/g).map(function (x) {
	    return "#" + x;
	  });
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(204);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _colors2.default)("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(204);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _colors2.default)("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(204);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _colors2.default)("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _d3Color = __webpack_require__(129);
	
	var _d3Interpolate = __webpack_require__(127);
	
	exports.default = (0, _d3Interpolate.interpolateCubehelixLong)((0, _d3Color.cubehelix)(300, 0.5, 0.0), (0, _d3Color.cubehelix)(-240, 0.5, 1.0));

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cool = exports.warm = undefined;
	
	exports.default = function (t) {
	  if (t < 0 || t > 1) t -= Math.floor(t);
	  var ts = Math.abs(t - 0.5);
	  rainbow.h = 360 * t - 100;
	  rainbow.s = 1.5 - 1.5 * ts;
	  rainbow.l = 0.8 - 0.9 * ts;
	  return rainbow + "";
	};
	
	var _d3Color = __webpack_require__(129);
	
	var _d3Interpolate = __webpack_require__(127);
	
	var warm = exports.warm = (0, _d3Interpolate.interpolateCubehelixLong)((0, _d3Color.cubehelix)(-100, 0.75, 0.35), (0, _d3Color.cubehelix)(80, 1.50, 0.8));
	
	var cool = exports.cool = (0, _d3Interpolate.interpolateCubehelixLong)((0, _d3Color.cubehelix)(260, 0.75, 0.35), (0, _d3Color.cubehelix)(80, 1.50, 0.8));
	
	var rainbow = (0, _d3Color.cubehelix)();

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.plasma = exports.inferno = exports.magma = undefined;
	
	var _colors = __webpack_require__(204);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ramp(range) {
	  var n = range.length;
	  return function (t) {
	    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
	  };
	}
	
	exports.default = ramp((0, _colors2.default)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
	var magma = exports.magma = ramp((0, _colors2.default)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
	
	var inferno = exports.inferno = ramp((0, _colors2.default)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
	
	var plasma = exports.plasma = ramp((0, _colors2.default)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sequential;
	
	var _linear = __webpack_require__(126);
	
	function sequential(interpolator) {
	  var x0 = 0,
	      x1 = 1,
	      clamp = false;
	
	  function scale(x) {
	    var t = (x - x0) / (x1 - x0);
	    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
	  }
	
	  scale.domain = function (_) {
	    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
	  };
	
	  scale.clamp = function (_) {
	    return arguments.length ? (clamp = !!_, scale) : clamp;
	  };
	
	  scale.interpolator = function (_) {
	    return arguments.length ? (interpolator = _, scale) : interpolator;
	  };
	
	  scale.copy = function () {
	    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
	  };
	
	  return (0, _linear.linearish)(scale);
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _drag = __webpack_require__(213);
	
	Object.defineProperty(exports, "drag", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_drag).default;
	  }
	});
	
	var _nodrag = __webpack_require__(214);
	
	Object.defineProperty(exports, "dragDisable", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nodrag).default;
	  }
	});
	Object.defineProperty(exports, "dragEnable", {
	  enumerable: true,
	  get: function get() {
	    return _nodrag.yesdrag;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var filter = defaultFilter,
	      container = defaultContainer,
	      subject = defaultSubject,
	      gestures = {},
	      listeners = (0, _d3Dispatch.dispatch)("start", "drag", "end"),
	      active = 0,
	      mousemoving,
	      touchending;
	
	  function drag(selection) {
	    selection.on("mousedown.drag", mousedowned).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	  }
	
	  function mousedowned() {
	    if (touchending || !filter.apply(this, arguments)) return;
	    var gesture = beforestart("mouse", container.apply(this, arguments), _d3Selection.mouse, this, arguments);
	    if (!gesture) return;
	    (0, _d3Selection.select)(_d3Selection.event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
	    (0, _nodrag2.default)(_d3Selection.event.view);
	    (0, _noevent.nopropagation)();
	    mousemoving = false;
	    gesture("start");
	  }
	
	  function mousemoved() {
	    (0, _noevent2.default)();
	    mousemoving = true;
	    gestures.mouse("drag");
	  }
	
	  function mouseupped() {
	    (0, _d3Selection.select)(_d3Selection.event.view).on("mousemove.drag mouseup.drag", null);
	    (0, _nodrag.yesdrag)(_d3Selection.event.view, mousemoving);
	    (0, _noevent2.default)();
	    gestures.mouse("end");
	  }
	
	  function touchstarted() {
	    if (!filter.apply(this, arguments)) return;
	    var touches = _d3Selection.event.changedTouches,
	        c = container.apply(this, arguments),
	        n = touches.length,
	        i,
	        gesture;
	
	    for (i = 0; i < n; ++i) {
	      if (gesture = beforestart(touches[i].identifier, c, _d3Selection.touch, this, arguments)) {
	        (0, _noevent.nopropagation)();
	        gesture("start");
	      }
	    }
	  }
	
	  function touchmoved() {
	    var touches = _d3Selection.event.changedTouches,
	        n = touches.length,
	        i,
	        gesture;
	
	    for (i = 0; i < n; ++i) {
	      if (gesture = gestures[touches[i].identifier]) {
	        (0, _noevent2.default)();
	        gesture("drag");
	      }
	    }
	  }
	
	  function touchended() {
	    var touches = _d3Selection.event.changedTouches,
	        n = touches.length,
	        i,
	        gesture;
	
	    if (touchending) clearTimeout(touchending);
	    touchending = setTimeout(function () {
	      touchending = null;
	    }, 500); // Ghost clicks are delayed!
	    for (i = 0; i < n; ++i) {
	      if (gesture = gestures[touches[i].identifier]) {
	        (0, _noevent.nopropagation)();
	        gesture("end");
	      }
	    }
	  }
	
	  function beforestart(id, container, point, that, args) {
	    var p = point(container, id),
	        s,
	        dx,
	        dy,
	        sublisteners = listeners.copy();
	
	    if (!(0, _d3Selection.customEvent)(new _event2.default(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function () {
	      if ((_d3Selection.event.subject = s = subject.apply(that, args)) == null) return false;
	      dx = s.x - p[0] || 0;
	      dy = s.y - p[1] || 0;
	      return true;
	    })) return;
	
	    return function gesture(type) {
	      var p0 = p,
	          n;
	      switch (type) {
	        case "start":
	          gestures[id] = gesture, n = active++;break;
	        case "end":
	          delete gestures[id], --active; // nobreak
	        case "drag":
	          p = point(container, id), n = active;break;
	      }
	      (0, _d3Selection.customEvent)(new _event2.default(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
	    };
	  }
	
	  drag.filter = function (_) {
	    return arguments.length ? (filter = typeof _ === "function" ? _ : (0, _constant2.default)(!!_), drag) : filter;
	  };
	
	  drag.container = function (_) {
	    return arguments.length ? (container = typeof _ === "function" ? _ : (0, _constant2.default)(_), drag) : container;
	  };
	
	  drag.subject = function (_) {
	    return arguments.length ? (subject = typeof _ === "function" ? _ : (0, _constant2.default)(_), drag) : subject;
	  };
	
	  drag.on = function () {
	    var value = listeners.on.apply(listeners, arguments);
	    return value === listeners ? drag : value;
	  };
	
	  return drag;
	};
	
	var _d3Dispatch = __webpack_require__(34);
	
	var _d3Selection = __webpack_require__(42);
	
	var _nodrag = __webpack_require__(214);
	
	var _nodrag2 = _interopRequireDefault(_nodrag);
	
	var _noevent = __webpack_require__(215);
	
	var _noevent2 = _interopRequireDefault(_noevent);
	
	var _constant = __webpack_require__(216);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _event = __webpack_require__(217);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Ignore right-click, since that should open the context menu.
	function defaultFilter() {
	  return !_d3Selection.event.button;
	}
	
	function defaultContainer() {
	  return this.parentNode;
	}
	
	function defaultSubject(d) {
	  return d == null ? { x: _d3Selection.event.x, y: _d3Selection.event.y } : d;
	}

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (view) {
	  var root = view.document.documentElement,
	      selection = (0, _d3Selection.select)(view).on("dragstart.drag", _noevent2.default, true);
	  if ("onselectstart" in root) {
	    selection.on("selectstart.drag", _noevent2.default, true);
	  } else {
	    root.__noselect = root.style.MozUserSelect;
	    root.style.MozUserSelect = "none";
	  }
	};
	
	exports.yesdrag = yesdrag;
	
	var _d3Selection = __webpack_require__(42);
	
	var _noevent = __webpack_require__(215);
	
	var _noevent2 = _interopRequireDefault(_noevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function yesdrag(view, noclick) {
	  var root = view.document.documentElement,
	      selection = (0, _d3Selection.select)(view).on("dragstart.drag", null);
	  if (noclick) {
	    selection.on("click.drag", _noevent2.default, true);
	    setTimeout(function () {
	      selection.on("click.drag", null);
	    }, 0);
	  }
	  if ("onselectstart" in root) {
	    selection.on("selectstart.drag", null);
	  } else {
	    root.style.MozUserSelect = root.__noselect;
	    delete root.__noselect;
	  }
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.nopropagation = nopropagation;
	
	exports.default = function () {
	  _d3Selection.event.preventDefault();
	  _d3Selection.event.stopImmediatePropagation();
	};
	
	var _d3Selection = __webpack_require__(42);
	
	function nopropagation() {
	  _d3Selection.event.stopImmediatePropagation();
	}

/***/ },
/* 216 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return function () {
	    return x;
	  };
	};

/***/ },
/* 217 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DragEvent;
	function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
	  this.target = target;
	  this.type = type;
	  this.subject = subject;
	  this.identifier = id;
	  this.active = active;
	  this.x = x;
	  this.y = y;
	  this.dx = dx;
	  this.dy = dy;
	  this._ = dispatch;
	}
	
	DragEvent.prototype.on = function () {
	  var value = this._.on.apply(this._, arguments);
	  return value === this._ ? this : value;
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _zoom = __webpack_require__(219);
	
	Object.defineProperty(exports, "zoom", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_zoom).default;
	  }
	});
	
	var _transform = __webpack_require__(259);
	
	Object.defineProperty(exports, "zoomTransform", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_transform).default;
	  }
	});
	Object.defineProperty(exports, "zoomIdentity", {
	  enumerable: true,
	  get: function get() {
	    return _transform.identity;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var filter = defaultFilter,
	      extent = defaultExtent,
	      k0 = 0,
	      k1 = Infinity,
	      x0 = -k1,
	      x1 = k1,
	      y0 = x0,
	      y1 = x1,
	      duration = 250,
	      gestures = [],
	      listeners = (0, _d3Dispatch.dispatch)("start", "zoom", "end"),
	      touchstarting,
	      touchending,
	      touchDelay = 500,
	      wheelDelay = 150;
	
	  function zoom(selection) {
	    selection.on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").property("__zoom", defaultTransform);
	  }
	
	  zoom.transform = function (collection, transform) {
	    var selection = collection.selection ? collection.selection() : collection;
	    selection.property("__zoom", defaultTransform);
	    if (collection !== selection) {
	      schedule(collection, transform);
	    } else {
	      selection.interrupt().each(function () {
	        gesture(this, arguments).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
	      });
	    }
	  };
	
	  zoom.scaleBy = function (selection, k) {
	    zoom.scaleTo(selection, function () {
	      var k0 = this.__zoom.k,
	          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
	      return k0 * k1;
	    });
	  };
	
	  zoom.scaleTo = function (selection, k) {
	    zoom.transform(selection, function () {
	      var e = extent.apply(this, arguments),
	          t0 = this.__zoom,
	          p0 = centroid(e),
	          p1 = t0.invert(p0),
	          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
	      return constrain(translate(scale(t0, k1), p0, p1), e);
	    });
	  };
	
	  zoom.translateBy = function (selection, x, y) {
	    zoom.transform(selection, function () {
	      return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments));
	    });
	  };
	
	  function scale(transform, k) {
	    k = Math.max(k0, Math.min(k1, k));
	    return k === transform.k ? transform : new _transform.Transform(k, transform.x, transform.y);
	  }
	
	  function translate(transform, p0, p1) {
	    var x = p0[0] - p1[0] * transform.k,
	        y = p0[1] - p1[1] * transform.k;
	    return x === transform.x && y === transform.y ? transform : new _transform.Transform(transform.k, x, y);
	  }
	
	  function constrain(transform, extent) {
	    var dx = Math.min(0, transform.invertX(extent[0][0]) - x0) || Math.max(0, transform.invertX(extent[1][0]) - x1),
	        dy = Math.min(0, transform.invertY(extent[0][1]) - y0) || Math.max(0, transform.invertY(extent[1][1]) - y1);
	    return dx || dy ? transform.translate(dx, dy) : transform;
	  }
	
	  function centroid(extent) {
	    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
	  }
	
	  function schedule(transition, transform, center) {
	    transition.on("start.zoom", function () {
	      gesture(this, arguments).start();
	    }).on("interrupt.zoom end.zoom", function () {
	      gesture(this, arguments).end();
	    }).tween("zoom", function () {
	      var that = this,
	          args = arguments,
	          g = gesture(that, args),
	          e = extent.apply(that, args),
	          p = center || centroid(e),
	          w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
	          a = that.__zoom,
	          b = typeof transform === "function" ? transform.apply(that, args) : transform,
	          i = (0, _d3Interpolate.interpolateZoom)(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
	      return function (t) {
	        if (t === 1) t = b; // Avoid rounding error on end.
	        else {
	            var l = i(t),
	                k = w / l[2];t = new _transform.Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
	          }
	        g.zoom(null, t);
	      };
	    });
	  }
	
	  function gesture(that, args) {
	    for (var i = 0, n = gestures.length, g; i < n; ++i) {
	      if ((g = gestures[i]).that === that) {
	        return g;
	      }
	    }
	    return new Gesture(that, args);
	  }
	
	  function Gesture(that, args) {
	    this.that = that;
	    this.args = args;
	    this.index = -1;
	    this.active = 0;
	    this.extent = extent.apply(that, args);
	  }
	
	  Gesture.prototype = {
	    start: function start() {
	      if (++this.active === 1) {
	        this.index = gestures.push(this) - 1;
	        this.emit("start");
	      }
	      return this;
	    },
	    zoom: function zoom(key, transform) {
	      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
	      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
	      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
	      this.that.__zoom = transform;
	      this.emit("zoom");
	      return this;
	    },
	    end: function end() {
	      if (--this.active === 0) {
	        gestures.splice(this.index, 1);
	        this.index = -1;
	        this.emit("end");
	      }
	      return this;
	    },
	    emit: function emit(type) {
	      (0, _d3Selection.customEvent)(new _event2.default(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
	    }
	  };
	
	  function wheeled() {
	    if (!filter.apply(this, arguments)) return;
	    var g = gesture(this, arguments),
	        t = this.__zoom,
	        k = Math.max(k0, Math.min(k1, t.k * Math.pow(2, -_d3Selection.event.deltaY * (_d3Selection.event.deltaMode ? 120 : 1) / 500))),
	        p = (0, _d3Selection.mouse)(this);
	
	    // If the mouse is in the same location as before, reuse it.
	    // If there were recent wheel events, reset the wheel idle timeout.
	    if (g.wheel) {
	      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
	        g.mouse[1] = t.invert(g.mouse[0] = p);
	      }
	      clearTimeout(g.wheel);
	    }
	
	    // If this wheel event won’t trigger a transform change, ignore it.
	    else if (t.k === k) return;
	
	      // Otherwise, capture the mouse point and location at the start.
	      else {
	          g.mouse = [p, t.invert(p)];
	          (0, _d3Transition.interrupt)(this);
	          g.start();
	        }
	
	    (0, _noevent2.default)();
	    g.wheel = setTimeout(wheelidled, wheelDelay);
	    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent));
	
	    function wheelidled() {
	      g.wheel = null;
	      g.end();
	    }
	  }
	
	  function mousedowned() {
	    if (touchending || !filter.apply(this, arguments)) return;
	    var g = gesture(this, arguments),
	        v = (0, _d3Selection.select)(_d3Selection.event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
	        p = (0, _d3Selection.mouse)(this);
	
	    (0, _d3Drag.dragDisable)(_d3Selection.event.view);
	    (0, _noevent.nopropagation)();
	    g.mouse = [p, this.__zoom.invert(p)];
	    (0, _d3Transition.interrupt)(this);
	    g.start();
	
	    function mousemoved() {
	      (0, _noevent2.default)();
	      g.moved = true;
	      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, _d3Selection.mouse)(g.that), g.mouse[1]), g.extent));
	    }
	
	    function mouseupped() {
	      v.on("mousemove.zoom mouseup.zoom", null);
	      (0, _d3Drag.dragEnable)(_d3Selection.event.view, g.moved);
	      (0, _noevent2.default)();
	      g.end();
	    }
	  }
	
	  function dblclicked() {
	    if (!filter.apply(this, arguments)) return;
	    var t0 = this.__zoom,
	        p0 = (0, _d3Selection.mouse)(this),
	        p1 = t0.invert(p0),
	        k1 = t0.k * (_d3Selection.event.shiftKey ? 0.5 : 2),
	        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments));
	
	    (0, _noevent2.default)();
	    if (duration > 0) (0, _d3Selection.select)(this).transition().duration(duration).call(schedule, t1, p0);else (0, _d3Selection.select)(this).call(zoom.transform, t1);
	  }
	
	  function touchstarted() {
	    if (!filter.apply(this, arguments)) return;
	    var g = gesture(this, arguments),
	        touches = _d3Selection.event.changedTouches,
	        n = touches.length,
	        i,
	        t,
	        p;
	
	    (0, _noevent.nopropagation)();
	    for (i = 0; i < n; ++i) {
	      t = touches[i], p = (0, _d3Selection.touch)(this, touches, t.identifier);
	      p = [p, this.__zoom.invert(p), t.identifier];
	      if (!g.touch0) g.touch0 = p;else if (!g.touch1) g.touch1 = p;
	    }
	    if (touchstarting) {
	      touchstarting = clearTimeout(touchstarting);
	      if (!g.touch1) return g.end(), dblclicked.apply(this, arguments);
	    }
	    if (_d3Selection.event.touches.length === n) {
	      touchstarting = setTimeout(function () {
	        touchstarting = null;
	      }, touchDelay);
	      (0, _d3Transition.interrupt)(this);
	      g.start();
	    }
	  }
	
	  function touchmoved() {
	    var g = gesture(this, arguments),
	        touches = _d3Selection.event.changedTouches,
	        n = touches.length,
	        i,
	        t,
	        p,
	        l;
	
	    (0, _noevent2.default)();
	    if (touchstarting) touchstarting = clearTimeout(touchstarting);
	    for (i = 0; i < n; ++i) {
	      t = touches[i], p = (0, _d3Selection.touch)(this, touches, t.identifier);
	      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
	    }
	    t = g.that.__zoom;
	    if (g.touch1) {
	      var p0 = g.touch0[0],
	          l0 = g.touch0[1],
	          p1 = g.touch1[0],
	          l1 = g.touch1[1],
	          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
	          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
	      t = scale(t, Math.sqrt(dp / dl));
	      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
	      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
	    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];else return;
	    g.zoom("touch", constrain(translate(t, p, l), g.extent));
	  }
	
	  function touchended() {
	    var g = gesture(this, arguments),
	        touches = _d3Selection.event.changedTouches,
	        n = touches.length,
	        i,
	        t;
	
	    (0, _noevent.nopropagation)();
	    if (touchending) clearTimeout(touchending);
	    touchending = setTimeout(function () {
	      touchending = null;
	    }, touchDelay);
	    for (i = 0; i < n; ++i) {
	      t = touches[i];
	      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
	    }
	    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
	    if (!g.touch0) g.end();
	  }
	
	  zoom.filter = function (_) {
	    return arguments.length ? (filter = typeof _ === "function" ? _ : (0, _constant2.default)(!!_), zoom) : filter;
	  };
	
	  zoom.extent = function (_) {
	    return arguments.length ? (extent = typeof _ === "function" ? _ : (0, _constant2.default)([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
	  };
	
	  zoom.scaleExtent = function (_) {
	    return arguments.length ? (k0 = +_[0], k1 = +_[1], zoom) : [k0, k1];
	  };
	
	  zoom.translateExtent = function (_) {
	    return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], zoom) : [[x0, y0], [x1, y1]];
	  };
	
	  zoom.duration = function (_) {
	    return arguments.length ? (duration = +_, zoom) : duration;
	  };
	
	  zoom.on = function () {
	    var value = listeners.on.apply(listeners, arguments);
	    return value === listeners ? zoom : value;
	  };
	
	  return zoom;
	};
	
	var _d3Dispatch = __webpack_require__(34);
	
	var _d3Drag = __webpack_require__(212);
	
	var _d3Interpolate = __webpack_require__(127);
	
	var _d3Selection = __webpack_require__(42);
	
	var _d3Transition = __webpack_require__(220);
	
	var _constant = __webpack_require__(257);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _event = __webpack_require__(258);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _transform = __webpack_require__(259);
	
	var _noevent = __webpack_require__(260);
	
	var _noevent2 = _interopRequireDefault(_noevent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Ignore right-click, since that should open the context menu.
	function defaultFilter() {
	  return !_d3Selection.event.button;
	}
	
	function defaultExtent() {
	  var e = this,
	      w,
	      h;
	  if (e instanceof SVGElement) {
	    e = e.ownerSVGElement || e;
	    w = e.width.baseVal.value;
	    h = e.height.baseVal.value;
	  } else {
	    w = e.clientWidth;
	    h = e.clientHeight;
	  }
	  return [[0, 0], [w, h]];
	}
	
	function defaultTransform() {
	  return this.__zoom || _transform.identity;
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.interrupt = exports.active = exports.transition = undefined;
	
	var _index = __webpack_require__(221);
	
	Object.defineProperty(exports, "transition", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_index).default;
	  }
	});
	
	var _active = __webpack_require__(241);
	
	Object.defineProperty(exports, "active", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_active).default;
	  }
	});
	
	var _interrupt = __webpack_require__(242);
	
	Object.defineProperty(exports, "interrupt", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_interrupt).default;
	  }
	});
	
	__webpack_require__(243);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Transition = Transition;
	exports.default = transition;
	exports.newId = newId;
	
	var _d3Selection = __webpack_require__(42);
	
	var _attr = __webpack_require__(222);
	
	var _attr2 = _interopRequireDefault(_attr);
	
	var _attrTween = __webpack_require__(226);
	
	var _attrTween2 = _interopRequireDefault(_attrTween);
	
	var _delay = __webpack_require__(227);
	
	var _delay2 = _interopRequireDefault(_delay);
	
	var _duration = __webpack_require__(228);
	
	var _duration2 = _interopRequireDefault(_duration);
	
	var _ease = __webpack_require__(229);
	
	var _ease2 = _interopRequireDefault(_ease);
	
	var _filter = __webpack_require__(230);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _merge = __webpack_require__(231);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _on = __webpack_require__(232);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _remove = __webpack_require__(233);
	
	var _remove2 = _interopRequireDefault(_remove);
	
	var _select = __webpack_require__(234);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _selectAll = __webpack_require__(235);
	
	var _selectAll2 = _interopRequireDefault(_selectAll);
	
	var _selection = __webpack_require__(236);
	
	var _selection2 = _interopRequireDefault(_selection);
	
	var _style = __webpack_require__(237);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _styleTween = __webpack_require__(238);
	
	var _styleTween2 = _interopRequireDefault(_styleTween);
	
	var _text = __webpack_require__(239);
	
	var _text2 = _interopRequireDefault(_text);
	
	var _transition = __webpack_require__(240);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	var _tween = __webpack_require__(223);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var id = 0;
	
	function Transition(groups, parents, name, id) {
	  this._groups = groups;
	  this._parents = parents;
	  this._name = name;
	  this._id = id;
	}
	
	function transition(name) {
	  return (0, _d3Selection.selection)().transition(name);
	}
	
	function newId() {
	  return ++id;
	}
	
	var selection_prototype = _d3Selection.selection.prototype;
	
	Transition.prototype = transition.prototype = {
	  constructor: Transition,
	  select: _select2.default,
	  selectAll: _selectAll2.default,
	  filter: _filter2.default,
	  merge: _merge2.default,
	  selection: _selection2.default,
	  transition: _transition2.default,
	  call: selection_prototype.call,
	  nodes: selection_prototype.nodes,
	  node: selection_prototype.node,
	  size: selection_prototype.size,
	  empty: selection_prototype.empty,
	  each: selection_prototype.each,
	  on: _on2.default,
	  attr: _attr2.default,
	  attrTween: _attrTween2.default,
	  style: _style2.default,
	  styleTween: _styleTween2.default,
	  text: _text2.default,
	  remove: _remove2.default,
	  tween: _tween2.default,
	  delay: _delay2.default,
	  duration: _duration2.default,
	  ease: _ease2.default
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, value) {
	  var fullname = (0, _d3Selection.namespace)(name),
	      i = fullname === "transform" ? _d3Interpolate.interpolateTransformSvg : _interpolate2.default;
	  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, _tween.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
	};
	
	var _d3Interpolate = __webpack_require__(127);
	
	var _d3Selection = __webpack_require__(42);
	
	var _tween = __webpack_require__(223);
	
	var _interpolate = __webpack_require__(225);
	
	var _interpolate2 = _interopRequireDefault(_interpolate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function attrRemove(name) {
	  return function () {
	    this.removeAttribute(name);
	  };
	}
	
	function attrRemoveNS(fullname) {
	  return function () {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}
	
	function attrConstant(name, interpolate, value1) {
	  var value00, interpolate0;
	  return function () {
	    var value0 = this.getAttribute(name);
	    return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
	  };
	}
	
	function attrConstantNS(fullname, interpolate, value1) {
	  var value00, interpolate0;
	  return function () {
	    var value0 = this.getAttributeNS(fullname.space, fullname.local);
	    return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
	  };
	}
	
	function attrFunction(name, interpolate, value) {
	  var value00, value10, interpolate0;
	  return function () {
	    var value0,
	        value1 = value(this);
	    if (value1 == null) return void this.removeAttribute(name);
	    value0 = this.getAttribute(name);
	    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
	  };
	}
	
	function attrFunctionNS(fullname, interpolate, value) {
	  var value00, value10, interpolate0;
	  return function () {
	    var value0,
	        value1 = value(this);
	    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
	    value0 = this.getAttributeNS(fullname.space, fullname.local);
	    return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
	  };
	}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, value) {
	  var id = this._id;
	
	  name += "";
	
	  if (arguments.length < 2) {
	    var tween = (0, _schedule.get)(this.node(), id).tween;
	    for (var i = 0, n = tween.length, t; i < n; ++i) {
	      if ((t = tween[i]).name === name) {
	        return t.value;
	      }
	    }
	    return null;
	  }
	
	  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
	};
	
	exports.tweenValue = tweenValue;
	
	var _schedule = __webpack_require__(224);
	
	function tweenRemove(id, name) {
	  var tween0, tween1;
	  return function () {
	    var schedule = (0, _schedule.set)(this, id),
	        tween = schedule.tween;
	
	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = tween0 = tween;
	      for (var i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1 = tween1.slice();
	          tween1.splice(i, 1);
	          break;
	        }
	      }
	    }
	
	    schedule.tween = tween1;
	  };
	}
	
	function tweenFunction(id, name, value) {
	  var tween0, tween1;
	  if (typeof value !== "function") throw new Error();
	  return function () {
	    var schedule = (0, _schedule.set)(this, id),
	        tween = schedule.tween;
	
	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = (tween0 = tween).slice();
	      for (var t = { name: name, value: value }, i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1[i] = t;
	          break;
	        }
	      }
	      if (i === n) tween1.push(t);
	    }
	
	    schedule.tween = tween1;
	  };
	}
	
	function tweenValue(transition, name, value) {
	  var id = transition._id;
	
	  transition.each(function () {
	    var schedule = (0, _schedule.set)(this, id);
	    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	  });
	
	  return function (node) {
	    return (0, _schedule.get)(node, id).value[name];
	  };
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ENDED = exports.ENDING = exports.RUNNING = exports.STARTED = exports.STARTING = exports.SCHEDULED = exports.CREATED = undefined;
	
	exports.default = function (node, name, id, index, group, timing) {
	  var schedules = node.__transition;
	  if (!schedules) node.__transition = {};else if (id in schedules) return;
	  create(node, id, {
	    name: name,
	    index: index, // For context during callback.
	    group: group, // For context during callback.
	    on: emptyOn,
	    tween: emptyTween,
	    time: timing.time,
	    delay: timing.delay,
	    duration: timing.duration,
	    ease: timing.ease,
	    timer: null,
	    state: CREATED
	  });
	};
	
	exports.init = init;
	exports.set = set;
	exports.get = get;
	
	var _d3Dispatch = __webpack_require__(34);
	
	var _d3Timer = __webpack_require__(36);
	
	var emptyOn = (0, _d3Dispatch.dispatch)("start", "end", "interrupt");
	var emptyTween = [];
	
	var CREATED = exports.CREATED = 0;
	var SCHEDULED = exports.SCHEDULED = 1;
	var STARTING = exports.STARTING = 2;
	var STARTED = exports.STARTED = 3;
	var RUNNING = exports.RUNNING = 4;
	var ENDING = exports.ENDING = 5;
	var ENDED = exports.ENDED = 6;
	
	function init(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
	  return schedule;
	}
	
	function set(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
	  return schedule;
	}
	
	function get(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
	  return schedule;
	}
	
	function create(node, id, self) {
	  var schedules = node.__transition,
	      tween;
	
	  // Initialize the self timer when the transition is created.
	  // Note the actual delay is not known until the first callback!
	  schedules[id] = self;
	  self.timer = (0, _d3Timer.timer)(schedule, 0, self.time);
	
	  function schedule(elapsed) {
	    self.state = SCHEDULED;
	    self.timer.restart(start, self.delay, self.time);
	
	    // If the elapsed delay is less than our first sleep, start immediately.
	    if (self.delay <= elapsed) start(elapsed - self.delay);
	  }
	
	  function start(elapsed) {
	    var i, j, n, o;
	
	    // If the state is not SCHEDULED, then we previously errored on start.
	    if (self.state !== SCHEDULED) return stop();
	
	    for (i in schedules) {
	      o = schedules[i];
	      if (o.name !== self.name) continue;
	
	      // While this element already has a starting transition during this frame,
	      // defer starting an interrupting transition until that transition has a
	      // chance to tick (and possibly end); see d3/d3-transition#54!
	      if (o.state === STARTED) return (0, _d3Timer.timeout)(start);
	
	      // Interrupt the active transition, if any.
	      // Dispatch the interrupt event.
	      if (o.state === RUNNING) {
	        o.state = ENDED;
	        o.timer.stop();
	        o.on.call("interrupt", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }
	
	      // Cancel any pre-empted transitions. No interrupt event is dispatched
	      // because the cancelled transitions never started. Note that this also
	      // removes this transition from the pending list!
	      else if (+i < id) {
	          o.state = ENDED;
	          o.timer.stop();
	          delete schedules[i];
	        }
	    }
	
	    // Defer the first tick to end of the current frame; see d3/d3#1576.
	    // Note the transition may be canceled after start and before the first tick!
	    // Note this must be scheduled before the start event; see d3/d3-transition#16!
	    // Assuming this is successful, subsequent callbacks go straight to tick.
	    (0, _d3Timer.timeout)(function () {
	      if (self.state === STARTED) {
	        self.state = RUNNING;
	        self.timer.restart(tick, self.delay, self.time);
	        tick(elapsed);
	      }
	    });
	
	    // Dispatch the start event.
	    // Note this must be done before the tween are initialized.
	    self.state = STARTING;
	    self.on.call("start", node, node.__data__, self.index, self.group);
	    if (self.state !== STARTING) return; // interrupted
	    self.state = STARTED;
	
	    // Initialize the tween, deleting null tween.
	    tween = new Array(n = self.tween.length);
	    for (i = 0, j = -1; i < n; ++i) {
	      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
	        tween[++j] = o;
	      }
	    }
	    tween.length = j + 1;
	  }
	
	  function tick(elapsed) {
	    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
	        i = -1,
	        n = tween.length;
	
	    while (++i < n) {
	      tween[i].call(null, t);
	    }
	
	    // Dispatch the end event.
	    if (self.state === ENDING) {
	      self.on.call("end", node, node.__data__, self.index, self.group);
	      stop();
	    }
	  }
	
	  function stop() {
	    self.state = ENDED;
	    self.timer.stop();
	    delete schedules[id];
	    for (var i in schedules) {
	      return;
	    } // eslint-disable-line no-unused-vars
	    delete node.__transition;
	  }
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (a, b) {
	    var c;
	    return (typeof b === "number" ? _d3Interpolate.interpolateNumber : b instanceof _d3Color.color ? _d3Interpolate.interpolateRgb : (c = (0, _d3Color.color)(b)) ? (b = c, _d3Interpolate.interpolateRgb) : _d3Interpolate.interpolateString)(a, b);
	};
	
	var _d3Color = __webpack_require__(129);
	
	var _d3Interpolate = __webpack_require__(127);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, value) {
	  var key = "attr." + name;
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  var fullname = (0, _d3Selection.namespace)(name);
	  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
	};
	
	var _d3Selection = __webpack_require__(42);
	
	function attrTweenNS(fullname, value) {
	  function tween() {
	    var node = this,
	        i = value.apply(node, arguments);
	    return i && function (t) {
	      node.setAttributeNS(fullname.space, fullname.local, i(t));
	    };
	  }
	  tween._value = value;
	  return tween;
	}
	
	function attrTween(name, value) {
	  function tween() {
	    var node = this,
	        i = value.apply(node, arguments);
	    return i && function (t) {
	      node.setAttribute(name, i(t));
	    };
	  }
	  tween._value = value;
	  return tween;
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  var id = this._id;
	
	  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, _schedule.get)(this.node(), id).delay;
	};
	
	var _schedule = __webpack_require__(224);
	
	function delayFunction(id, value) {
	  return function () {
	    (0, _schedule.init)(this, id).delay = +value.apply(this, arguments);
	  };
	}
	
	function delayConstant(id, value) {
	  return value = +value, function () {
	    (0, _schedule.init)(this, id).delay = value;
	  };
	}

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  var id = this._id;
	
	  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, _schedule.get)(this.node(), id).duration;
	};
	
	var _schedule = __webpack_require__(224);
	
	function durationFunction(id, value) {
	  return function () {
	    (0, _schedule.set)(this, id).duration = +value.apply(this, arguments);
	  };
	}
	
	function durationConstant(id, value) {
	  return value = +value, function () {
	    (0, _schedule.set)(this, id).duration = value;
	  };
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  var id = this._id;
	
	  return arguments.length ? this.each(easeConstant(id, value)) : (0, _schedule.get)(this.node(), id).ease;
	};
	
	var _schedule = __webpack_require__(224);
	
	function easeConstant(id, value) {
	  if (typeof value !== "function") throw new Error();
	  return function () {
	    (0, _schedule.set)(this, id).ease = value;
	  };
	}

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (match) {
	  if (typeof match !== "function") match = (0, _d3Selection.matcher)(match);
	
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }
	
	  return new _index.Transition(subgroups, this._parents, this._name, this._id);
	};
	
	var _d3Selection = __webpack_require__(42);
	
	var _index = __webpack_require__(221);

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (transition) {
	  if (transition._id !== this._id) throw new Error();
	
	  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }
	
	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }
	
	  return new _index.Transition(merges, this._parents, this._name, this._id);
	};
	
	var _index = __webpack_require__(221);

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, listener) {
	  var id = this._id;
	
	  return arguments.length < 2 ? (0, _schedule.get)(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
	};
	
	var _schedule = __webpack_require__(224);
	
	function start(name) {
	  return (name + "").trim().split(/^|\s+/).every(function (t) {
	    var i = t.indexOf(".");
	    if (i >= 0) t = t.slice(0, i);
	    return !t || t === "start";
	  });
	}
	
	function onFunction(id, name, listener) {
	  var on0,
	      on1,
	      sit = start(name) ? _schedule.init : _schedule.set;
	  return function () {
	    var schedule = sit(this, id),
	        on = schedule.on;
	
	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
	
	    schedule.on = on1;
	  };
	}

/***/ },
/* 233 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return this.on("end.remove", removeFunction(this._id));
	};
	
	function removeFunction(id) {
	  return function () {
	    var parent = this.parentNode;
	    for (var i in this.__transition) {
	      if (+i !== id) return;
	    }if (parent) parent.removeChild(this);
	  };
	}

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (select) {
	  var name = this._name,
	      id = this._id;
	
	  if (typeof select !== "function") select = (0, _d3Selection.selector)(select);
	
	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	        (0, _schedule2.default)(subgroup[i], name, id, i, subgroup, (0, _schedule.get)(node, id));
	      }
	    }
	  }
	
	  return new _index.Transition(subgroups, this._parents, name, id);
	};
	
	var _d3Selection = __webpack_require__(42);
	
	var _index = __webpack_require__(221);
	
	var _schedule = __webpack_require__(224);
	
	var _schedule2 = _interopRequireDefault(_schedule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (select) {
	  var name = this._name,
	      id = this._id;
	
	  if (typeof select !== "function") select = (0, _d3Selection.selectorAll)(select);
	
	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0, _schedule.get)(node, id), k = 0, l = children.length; k < l; ++k) {
	          if (child = children[k]) {
	            (0, _schedule2.default)(child, name, id, k, children, inherit);
	          }
	        }
	        subgroups.push(children);
	        parents.push(node);
	      }
	    }
	  }
	
	  return new _index.Transition(subgroups, parents, name, id);
	};
	
	var _d3Selection = __webpack_require__(42);
	
	var _index = __webpack_require__(221);
	
	var _schedule = __webpack_require__(224);
	
	var _schedule2 = _interopRequireDefault(_schedule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return new Selection(this._groups, this._parents);
	};
	
	var _d3Selection = __webpack_require__(42);
	
	var Selection = _d3Selection.selection.prototype.constructor;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (name, value, priority) {
	    var i = (name += "") === "transform" ? _d3Interpolate.interpolateTransformCss : _interpolate2.default;
	    return value == null ? this.styleTween(name, styleRemove(name, i)).on("end.style." + name, styleRemoveEnd(name)) : this.styleTween(name, typeof value === "function" ? styleFunction(name, i, (0, _tween.tweenValue)(this, "style." + name, value)) : styleConstant(name, i, value), priority);
	};
	
	var _d3Interpolate = __webpack_require__(127);
	
	var _d3Selection = __webpack_require__(42);
	
	var _tween = __webpack_require__(223);
	
	var _interpolate = __webpack_require__(225);
	
	var _interpolate2 = _interopRequireDefault(_interpolate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function styleRemove(name, interpolate) {
	    var value00, value10, interpolate0;
	    return function () {
	        var style = (0, _d3Selection.window)(this).getComputedStyle(this, null),
	            value0 = style.getPropertyValue(name),
	            value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
	        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	}
	
	function styleRemoveEnd(name) {
	    return function () {
	        this.style.removeProperty(name);
	    };
	}
	
	function styleConstant(name, interpolate, value1) {
	    var value00, interpolate0;
	    return function () {
	        var value0 = (0, _d3Selection.window)(this).getComputedStyle(this, null).getPropertyValue(name);
	        return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value1);
	    };
	}
	
	function styleFunction(name, interpolate, value) {
	    var value00, value10, interpolate0;
	    return function () {
	        var style = (0, _d3Selection.window)(this).getComputedStyle(this, null),
	            value0 = style.getPropertyValue(name),
	            value1 = value(this);
	        if (value1 == null) value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
	        return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	}

/***/ },
/* 238 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name, value, priority) {
	  var key = "style." + (name += "");
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error();
	  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
	};
	
	function styleTween(name, value, priority) {
	  function tween() {
	    var node = this,
	        i = value.apply(node, arguments);
	    return i && function (t) {
	      node.style.setProperty(name, i(t), priority);
	    };
	  }
	  tween._value = value;
	  return tween;
	}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  return this.tween("text", typeof value === "function" ? textFunction((0, _tween.tweenValue)(this, "text", value)) : textConstant(value == null ? "" : value + ""));
	};
	
	var _tween = __webpack_require__(223);
	
	function textConstant(value) {
	  return function () {
	    this.textContent = value;
	  };
	}
	
	function textFunction(value) {
	  return function () {
	    var value1 = value(this);
	    this.textContent = value1 == null ? "" : value1;
	  };
	}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var name = this._name,
	      id0 = this._id,
	      id1 = (0, _index.newId)();
	
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        var inherit = (0, _schedule.get)(node, id0);
	        (0, _schedule2.default)(node, name, id1, i, group, {
	          time: inherit.time + inherit.delay + inherit.duration,
	          delay: 0,
	          duration: inherit.duration,
	          ease: inherit.ease
	        });
	      }
	    }
	  }
	
	  return new _index.Transition(groups, this._parents, name, id1);
	};
	
	var _index = __webpack_require__(221);
	
	var _schedule = __webpack_require__(224);
	
	var _schedule2 = _interopRequireDefault(_schedule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (node, name) {
	  var schedules = node.__transition,
	      schedule,
	      i;
	
	  if (schedules) {
	    name = name == null ? null : name + "";
	    for (i in schedules) {
	      if ((schedule = schedules[i]).state > _schedule.SCHEDULED && schedule.name === name) {
	        return new _index.Transition([[node]], root, name, +i);
	      }
	    }
	  }
	
	  return null;
	};
	
	var _index = __webpack_require__(221);
	
	var _schedule = __webpack_require__(224);
	
	var root = [null];

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (node, name) {
	  var schedules = node.__transition,
	      schedule,
	      active,
	      empty = true,
	      i;
	
	  if (!schedules) return;
	
	  name = name == null ? null : name + "";
	
	  for (i in schedules) {
	    if ((schedule = schedules[i]).name !== name) {
	      empty = false;continue;
	    }
	    active = schedule.state > _schedule.STARTING && schedule.state < _schedule.ENDING;
	    schedule.state = _schedule.ENDED;
	    schedule.timer.stop();
	    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
	    delete schedules[i];
	  }
	
	  if (empty) delete node.__transition;
	};
	
	var _schedule = __webpack_require__(224);

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _d3Selection = __webpack_require__(42);
	
	var _interrupt = __webpack_require__(244);
	
	var _interrupt2 = _interopRequireDefault(_interrupt);
	
	var _transition = __webpack_require__(245);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_d3Selection.selection.prototype.interrupt = _interrupt2.default;
	_d3Selection.selection.prototype.transition = _transition2.default;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name) {
	  return this.each(function () {
	    (0, _interrupt2.default)(this, name);
	  });
	};
	
	var _interrupt = __webpack_require__(242);
	
	var _interrupt2 = _interopRequireDefault(_interrupt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (name) {
	  var id, timing;
	
	  if (name instanceof _index.Transition) {
	    id = name._id, name = name._name;
	  } else {
	    id = (0, _index.newId)(), (timing = defaultTiming).time = (0, _d3Timer.now)(), name = name == null ? null : name + "";
	  }
	
	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        (0, _schedule2.default)(node, name, id, i, group, timing || inherit(node, id));
	      }
	    }
	  }
	
	  return new _index.Transition(groups, this._parents, name, id);
	};
	
	var _index = __webpack_require__(221);
	
	var _schedule = __webpack_require__(224);
	
	var _schedule2 = _interopRequireDefault(_schedule);
	
	var _d3Ease = __webpack_require__(246);
	
	var _d3Timer = __webpack_require__(36);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultTiming = {
	  time: null, // Set on use.
	  delay: 0,
	  duration: 250,
	  ease: _d3Ease.easeCubicInOut
	};
	
	function inherit(node, id) {
	  var timing;
	  while (!(timing = node.__transition) || !(timing = timing[id])) {
	    if (!(node = node.parentNode)) {
	      return defaultTiming.time = (0, _d3Timer.now)(), defaultTiming;
	    }
	  }
	  return timing;
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _linear = __webpack_require__(247);
	
	Object.defineProperty(exports, "easeLinear", {
	  enumerable: true,
	  get: function get() {
	    return _linear.linear;
	  }
	});
	
	var _quad = __webpack_require__(248);
	
	Object.defineProperty(exports, "easeQuad", {
	  enumerable: true,
	  get: function get() {
	    return _quad.quadInOut;
	  }
	});
	Object.defineProperty(exports, "easeQuadIn", {
	  enumerable: true,
	  get: function get() {
	    return _quad.quadIn;
	  }
	});
	Object.defineProperty(exports, "easeQuadOut", {
	  enumerable: true,
	  get: function get() {
	    return _quad.quadOut;
	  }
	});
	Object.defineProperty(exports, "easeQuadInOut", {
	  enumerable: true,
	  get: function get() {
	    return _quad.quadInOut;
	  }
	});
	
	var _cubic = __webpack_require__(249);
	
	Object.defineProperty(exports, "easeCubic", {
	  enumerable: true,
	  get: function get() {
	    return _cubic.cubicInOut;
	  }
	});
	Object.defineProperty(exports, "easeCubicIn", {
	  enumerable: true,
	  get: function get() {
	    return _cubic.cubicIn;
	  }
	});
	Object.defineProperty(exports, "easeCubicOut", {
	  enumerable: true,
	  get: function get() {
	    return _cubic.cubicOut;
	  }
	});
	Object.defineProperty(exports, "easeCubicInOut", {
	  enumerable: true,
	  get: function get() {
	    return _cubic.cubicInOut;
	  }
	});
	
	var _poly = __webpack_require__(250);
	
	Object.defineProperty(exports, "easePoly", {
	  enumerable: true,
	  get: function get() {
	    return _poly.polyInOut;
	  }
	});
	Object.defineProperty(exports, "easePolyIn", {
	  enumerable: true,
	  get: function get() {
	    return _poly.polyIn;
	  }
	});
	Object.defineProperty(exports, "easePolyOut", {
	  enumerable: true,
	  get: function get() {
	    return _poly.polyOut;
	  }
	});
	Object.defineProperty(exports, "easePolyInOut", {
	  enumerable: true,
	  get: function get() {
	    return _poly.polyInOut;
	  }
	});
	
	var _sin = __webpack_require__(251);
	
	Object.defineProperty(exports, "easeSin", {
	  enumerable: true,
	  get: function get() {
	    return _sin.sinInOut;
	  }
	});
	Object.defineProperty(exports, "easeSinIn", {
	  enumerable: true,
	  get: function get() {
	    return _sin.sinIn;
	  }
	});
	Object.defineProperty(exports, "easeSinOut", {
	  enumerable: true,
	  get: function get() {
	    return _sin.sinOut;
	  }
	});
	Object.defineProperty(exports, "easeSinInOut", {
	  enumerable: true,
	  get: function get() {
	    return _sin.sinInOut;
	  }
	});
	
	var _exp = __webpack_require__(252);
	
	Object.defineProperty(exports, "easeExp", {
	  enumerable: true,
	  get: function get() {
	    return _exp.expInOut;
	  }
	});
	Object.defineProperty(exports, "easeExpIn", {
	  enumerable: true,
	  get: function get() {
	    return _exp.expIn;
	  }
	});
	Object.defineProperty(exports, "easeExpOut", {
	  enumerable: true,
	  get: function get() {
	    return _exp.expOut;
	  }
	});
	Object.defineProperty(exports, "easeExpInOut", {
	  enumerable: true,
	  get: function get() {
	    return _exp.expInOut;
	  }
	});
	
	var _circle = __webpack_require__(253);
	
	Object.defineProperty(exports, "easeCircle", {
	  enumerable: true,
	  get: function get() {
	    return _circle.circleInOut;
	  }
	});
	Object.defineProperty(exports, "easeCircleIn", {
	  enumerable: true,
	  get: function get() {
	    return _circle.circleIn;
	  }
	});
	Object.defineProperty(exports, "easeCircleOut", {
	  enumerable: true,
	  get: function get() {
	    return _circle.circleOut;
	  }
	});
	Object.defineProperty(exports, "easeCircleInOut", {
	  enumerable: true,
	  get: function get() {
	    return _circle.circleInOut;
	  }
	});
	
	var _bounce = __webpack_require__(254);
	
	Object.defineProperty(exports, "easeBounce", {
	  enumerable: true,
	  get: function get() {
	    return _bounce.bounceOut;
	  }
	});
	Object.defineProperty(exports, "easeBounceIn", {
	  enumerable: true,
	  get: function get() {
	    return _bounce.bounceIn;
	  }
	});
	Object.defineProperty(exports, "easeBounceOut", {
	  enumerable: true,
	  get: function get() {
	    return _bounce.bounceOut;
	  }
	});
	Object.defineProperty(exports, "easeBounceInOut", {
	  enumerable: true,
	  get: function get() {
	    return _bounce.bounceInOut;
	  }
	});
	
	var _back = __webpack_require__(255);
	
	Object.defineProperty(exports, "easeBack", {
	  enumerable: true,
	  get: function get() {
	    return _back.backInOut;
	  }
	});
	Object.defineProperty(exports, "easeBackIn", {
	  enumerable: true,
	  get: function get() {
	    return _back.backIn;
	  }
	});
	Object.defineProperty(exports, "easeBackOut", {
	  enumerable: true,
	  get: function get() {
	    return _back.backOut;
	  }
	});
	Object.defineProperty(exports, "easeBackInOut", {
	  enumerable: true,
	  get: function get() {
	    return _back.backInOut;
	  }
	});
	
	var _elastic = __webpack_require__(256);
	
	Object.defineProperty(exports, "easeElastic", {
	  enumerable: true,
	  get: function get() {
	    return _elastic.elasticOut;
	  }
	});
	Object.defineProperty(exports, "easeElasticIn", {
	  enumerable: true,
	  get: function get() {
	    return _elastic.elasticIn;
	  }
	});
	Object.defineProperty(exports, "easeElasticOut", {
	  enumerable: true,
	  get: function get() {
	    return _elastic.elasticOut;
	  }
	});
	Object.defineProperty(exports, "easeElasticInOut", {
	  enumerable: true,
	  get: function get() {
	    return _elastic.elasticInOut;
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.linear = linear;
	function linear(t) {
	  return +t;
	}

/***/ },
/* 248 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.quadIn = quadIn;
	exports.quadOut = quadOut;
	exports.quadInOut = quadInOut;
	function quadIn(t) {
	  return t * t;
	}
	
	function quadOut(t) {
	  return t * (2 - t);
	}
	
	function quadInOut(t) {
	  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
	}

/***/ },
/* 249 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cubicIn = cubicIn;
	exports.cubicOut = cubicOut;
	exports.cubicInOut = cubicInOut;
	function cubicIn(t) {
	  return t * t * t;
	}
	
	function cubicOut(t) {
	  return --t * t * t + 1;
	}
	
	function cubicInOut(t) {
	  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
	}

/***/ },
/* 250 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var exponent = 3;
	
	var polyIn = exports.polyIn = function custom(e) {
	  e = +e;
	
	  function polyIn(t) {
	    return Math.pow(t, e);
	  }
	
	  polyIn.exponent = custom;
	
	  return polyIn;
	}(exponent);
	
	var polyOut = exports.polyOut = function custom(e) {
	  e = +e;
	
	  function polyOut(t) {
	    return 1 - Math.pow(1 - t, e);
	  }
	
	  polyOut.exponent = custom;
	
	  return polyOut;
	}(exponent);
	
	var polyInOut = exports.polyInOut = function custom(e) {
	  e = +e;
	
	  function polyInOut(t) {
	    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
	  }
	
	  polyInOut.exponent = custom;
	
	  return polyInOut;
	}(exponent);

/***/ },
/* 251 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sinIn = sinIn;
	exports.sinOut = sinOut;
	exports.sinInOut = sinInOut;
	var pi = Math.PI,
	    halfPi = pi / 2;
	
	function sinIn(t) {
	  return 1 - Math.cos(t * halfPi);
	}
	
	function sinOut(t) {
	  return Math.sin(t * halfPi);
	}
	
	function sinInOut(t) {
	  return (1 - Math.cos(pi * t)) / 2;
	}

/***/ },
/* 252 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.expIn = expIn;
	exports.expOut = expOut;
	exports.expInOut = expInOut;
	function expIn(t) {
	  return Math.pow(2, 10 * t - 10);
	}
	
	function expOut(t) {
	  return 1 - Math.pow(2, -10 * t);
	}
	
	function expInOut(t) {
	  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
	}

/***/ },
/* 253 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.circleIn = circleIn;
	exports.circleOut = circleOut;
	exports.circleInOut = circleInOut;
	function circleIn(t) {
	  return 1 - Math.sqrt(1 - t * t);
	}
	
	function circleOut(t) {
	  return Math.sqrt(1 - --t * t);
	}
	
	function circleInOut(t) {
	  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
	}

/***/ },
/* 254 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bounceIn = bounceIn;
	exports.bounceOut = bounceOut;
	exports.bounceInOut = bounceInOut;
	var b1 = 4 / 11,
	    b2 = 6 / 11,
	    b3 = 8 / 11,
	    b4 = 3 / 4,
	    b5 = 9 / 11,
	    b6 = 10 / 11,
	    b7 = 15 / 16,
	    b8 = 21 / 22,
	    b9 = 63 / 64,
	    b0 = 1 / b1 / b1;
	
	function bounceIn(t) {
	  return 1 - bounceOut(1 - t);
	}
	
	function bounceOut(t) {
	  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
	}
	
	function bounceInOut(t) {
	  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
	}

/***/ },
/* 255 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var overshoot = 1.70158;
	
	var backIn = exports.backIn = function custom(s) {
	  s = +s;
	
	  function backIn(t) {
	    return t * t * ((s + 1) * t - s);
	  }
	
	  backIn.overshoot = custom;
	
	  return backIn;
	}(overshoot);
	
	var backOut = exports.backOut = function custom(s) {
	  s = +s;
	
	  function backOut(t) {
	    return --t * t * ((s + 1) * t + s) + 1;
	  }
	
	  backOut.overshoot = custom;
	
	  return backOut;
	}(overshoot);
	
	var backInOut = exports.backInOut = function custom(s) {
	  s = +s;
	
	  function backInOut(t) {
	    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
	  }
	
	  backInOut.overshoot = custom;
	
	  return backInOut;
	}(overshoot);

/***/ },
/* 256 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tau = 2 * Math.PI,
	    amplitude = 1,
	    period = 0.3;
	
	var elasticIn = exports.elasticIn = function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	  function elasticIn(t) {
	    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
	  }
	
	  elasticIn.amplitude = function (a) {
	    return custom(a, p * tau);
	  };
	  elasticIn.period = function (p) {
	    return custom(a, p);
	  };
	
	  return elasticIn;
	}(amplitude, period);
	
	var elasticOut = exports.elasticOut = function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	  function elasticOut(t) {
	    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
	  }
	
	  elasticOut.amplitude = function (a) {
	    return custom(a, p * tau);
	  };
	  elasticOut.period = function (p) {
	    return custom(a, p);
	  };
	
	  return elasticOut;
	}(amplitude, period);
	
	var elasticInOut = exports.elasticInOut = function custom(a, p) {
	  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	  function elasticInOut(t) {
	    return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
	  }
	
	  elasticInOut.amplitude = function (a) {
	    return custom(a, p * tau);
	  };
	  elasticInOut.period = function (p) {
	    return custom(a, p);
	  };
	
	  return elasticInOut;
	}(amplitude, period);

/***/ },
/* 257 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (x) {
	  return function () {
	    return x;
	  };
	};

/***/ },
/* 258 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ZoomEvent;
	function ZoomEvent(target, type, transform) {
	  this.target = target;
	  this.type = type;
	  this.transform = transform;
	}

/***/ },
/* 259 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Transform = Transform;
	exports.default = transform;
	function Transform(k, x, y) {
	  this.k = k;
	  this.x = x;
	  this.y = y;
	}
	
	Transform.prototype = {
	  constructor: Transform,
	  scale: function scale(k) {
	    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
	  },
	  translate: function translate(x, y) {
	    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
	  },
	  apply: function apply(point) {
	    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
	  },
	  applyX: function applyX(x) {
	    return x * this.k + this.x;
	  },
	  applyY: function applyY(y) {
	    return y * this.k + this.y;
	  },
	  invert: function invert(location) {
	    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
	  },
	  invertX: function invertX(x) {
	    return (x - this.x) / this.k;
	  },
	  invertY: function invertY(y) {
	    return (y - this.y) / this.k;
	  },
	  rescaleX: function rescaleX(x) {
	    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
	  },
	  rescaleY: function rescaleY(y) {
	    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
	  },
	  toString: function toString() {
	    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	  }
	};
	
	var identity = exports.identity = new Transform(1, 0, 0);
	
	transform.prototype = Transform.prototype;
	
	function transform(node) {
	  return node.__zoom || identity;
	}

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.nopropagation = nopropagation;
	
	exports.default = function () {
	  _d3Selection.event.preventDefault();
	  _d3Selection.event.stopImmediatePropagation();
	};
	
	var _d3Selection = __webpack_require__(42);
	
	function nopropagation() {
	  _d3Selection.event.stopImmediatePropagation();
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map