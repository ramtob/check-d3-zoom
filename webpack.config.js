var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
        path: 'build',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: [path.resolve('src')
                    ,
                    path.resolve('node_modules/d3-selection')
                    ,
                    path.resolve('node_modules/d3-force')
                    ,
                    path.resolve('node_modules/d3-quadtree')
                    ,
                    path.resolve('node_modules/d3-collection')
                    ,
                    path.resolve('node_modules/d3-dispatch')
                    ,
                    path.resolve('node_modules/d3-timer')
                    ,
                    path.resolve('node_modules/d3-scale')
                    ,
                    path.resolve('node_modules/d3-array')
                    ,
                    path.resolve('node_modules/d3-interpolate')
                    ,
                    path.resolve('node_modules/d3-color')
                    ,
                    path.resolve('node_modules/d3-format')
                    ,
                    path.resolve('node_modules/d3-time')
                    ,
                    path.resolve('node_modules/d3-drag')
                    ,
                    path.resolve('node_modules/d3-zoom')
                    ,
                    path.resolve('node_modules/d3-transition')
                    ,
                    path.resolve('node_modules/d3-ease')
                ]
                // include: __dirname + '/src',
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('css'),
                //loaders: ['style', 'css'],
                //include: path.resolve('src')
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    devtool: 'source-map',
    resolve: {
        packageMains: ["module", "webpack", "browser", "web", "browserify", ["jam", "main"], "main"]
    }
};