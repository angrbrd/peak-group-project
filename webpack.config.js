var webpack = require("webpack");
var path = require('path');

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./index.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    path: __dirname + '/public/js',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
