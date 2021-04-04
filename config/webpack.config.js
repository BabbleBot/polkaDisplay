const path = require('path');
const webpack = require('webpack');
const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
	mode: 'development',
	entry: {
		app: resolve('src/js/app.js'),
		bookmarklet: resolve('src/js/bookmarklet.js'),
	},
	output: {
		filename: '[name].min.js',
		path: resolve('public/js'),
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ['vue-style-loader', {
							loader: 'css-loader',
						}],
						js: [
							'babel-loader',
						],
					},
					cacheBusting: true,
				},
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [
					resolve('src'),
					resolve('node_modules/webpack-dev-server/client'),
				],
			},
		],
	},
	// watch: true,
	watchOptions: {
		ignored: /node_modules/,
		poll: 1000,
	},
	devtool: 'eval',
	devServer: {
		host: 'localhost',
		port: 8080,
		publicPath: resolve('public'),
		contentBase: resolve('public'),
		compress: true,
		progress: true,
		open: false,
		// watchContentBase: true,
		writeToDisk: true,
	},
	plugins: [],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
		},
		extensions: ['*', '.vue', '.js', '.json'],
	},
	performance: {
		hints: false,
	},
};