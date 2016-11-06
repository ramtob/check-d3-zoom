var path = require('path');

module.exports = {
    entry:  './src',
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
                loaders: ['style', 'css'],
                include: path.resolve('src')
            }
        ],
    }
};