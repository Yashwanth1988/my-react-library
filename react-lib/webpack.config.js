const path = require('path');
const webpack = require('webpack');


module.exports = {

    entry : './index.js',
    output : {
        path : path.join(__dirname, '/dist'),
        publicPath: '/dist/',
        filename : 'bundle.js'
    },
    devtool: 'eval-source-map',

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env", "@babel/preset-react"] }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      },

    resolve: { extensions: ["*", ".js", ".jsx"] },


}
