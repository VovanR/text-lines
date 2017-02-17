const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const ENV = {
	production: 'production',
	development: 'development'
};

const isDev = process.env.NODE_ENV !== ENV.production;

module.exports = {
	entry: {
		app: './app/index.js'
	},
	output: {
		path: './dist',
		filename: '[name].js',
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: {
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				})
			}
		]
	},
	resolve: {
		alias: {
			css: path.resolve(__dirname, 'app/css')
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(isDev ? ENV.development : ENV.production)
		}),
		new UglifyJSPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		})
	],
	devtool: isDev && 'cheap-module-source-map'
};
