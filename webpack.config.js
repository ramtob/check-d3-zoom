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
                include: path.resolve('src'),
                // include: __dirname + '/src',
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
                //loaders: ['style', 'css'],
                //include: path.resolve('src')
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};