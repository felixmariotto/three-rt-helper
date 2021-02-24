const webpack = require('webpack');

module.exports = env => {

	return {

		mode: 'production',

		entry: {
			'../dist/three-rt-helper': './src/three-rt-helper.js',
		},

		output: {
			filename: '[name].js',
			library: 'RenderTargetHelper',
			libraryTarget: 'umd'
		}

	}

}