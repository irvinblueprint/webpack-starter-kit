const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './app.bundle.js'
		
	},
	module: {
		rules: [
			// {
			// 	test: /\.scss$/, 
			// 	loaders: ['style-loader', 'css-loader', 'sass-loader']
			// },
			{
				// do this if you use extract text plugin
				test: /\.scss$/, 
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
					publicPath:  '/dist'
				})
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: 'babel-loader'
			}
			// {
		 //      test: /\.less$/,
		 //      loader: ['style-loader', 'css-loader', 'less-loader']
		 //    }
		]
	},
	plugins: [
       new HtmlWebpackPlugin({
			title: 'Custom Project',
			minify: {
					collapseWhitespace: true
			},
			hash: true,
			//filename: './../index.html',
			template: './src/index.html'
       }),
       new ExtractTextPlugin({
       		filename: 'app.css'
       })
	],
	 devServer: {
	 	contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        stats: "errors-only",
        open: true
  },
}