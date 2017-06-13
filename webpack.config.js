var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: { port: 3000 },
    devtool: 'eval',
    entry: ['webpack-dev-server/client?http://localhost:3000', './src/index.jsx'], 
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'src/js/bundle.min.js'
    }
};
