const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSSExtract = new ExtractTextPlugin('styles.css');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public', 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				use: ['css-hot-loader'].concat(
					CSSExtract.extract({
						use: ['css-loader', 'sass-loader'],
					}),
				),
			},
		],
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [CSSExtract],
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		publicPath: '/dist/',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
