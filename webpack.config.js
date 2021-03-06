const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}