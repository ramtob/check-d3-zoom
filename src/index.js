import styles from './app.css';
import app from './app.js';
let d3 = Object.assign({},
    require("d3-force"),
    require("d3-selection"),
    require("d3-scale"),
    require("d3-drag"),
    require("d3-array"),
    require("d3-zoom")
);
app(d3);
