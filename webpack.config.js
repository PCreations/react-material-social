var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    /*plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],*/
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel-loader']
            },

            {
                test: /\.(png|jpg)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader?name=images/[name].[ext]&limit=8192'
            },

        ]
    },
    resolve: {
        root: path.join(__dirname, '..', 'app'),
        extensions: ['', '.js', '.jsx', '.json', '.css', '.png', '.jpg', '.jpeg', '.gif']
    },
};