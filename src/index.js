import styles from './app.css';
import app from './app.js';
import * as sel from 'd3-selection';
let d3 = Object.assign({},
    sel,
    require("d3-force"),
//    require("d3-selection"),
    require("d3-scale"),
    require("d3-drag"),
    require("d3-array"),
    require("d3-zoom")
);
app(d3);
