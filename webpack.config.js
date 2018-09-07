var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        port: 3030,
        // proxy: {
        //     '/data/*': {
        //         target: 'http://www.weather.com.cn/',
        //         secure: false,
        //         changeOrigin: true
        //     }
        // }
    },
    module: {
      rules: [
           {test: /\.js?$/,exclude: /(node_modules|bower_components)/,loader: 'babel-loader',},
           {test: /\.css$/,use: ['style-loader','css-loader'] },
           { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },  //添加
           { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" }, //添加
           { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" }, //添加
           { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" } //添加
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};