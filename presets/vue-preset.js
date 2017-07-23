'use strict'

const path = require('path');
const merge = require('deepmerge');

module.exports = ({ config }, options = {}) => {
	const LOADER_EXTENSIONS = /\.vue$/;
	const NODE_MODULES = path.resolve(__dirname, '../node_modules');
	let compileRule = config.module.rules.get('compile');
	let vueRule = config.module.rule('vue')

	vueRule
		.test(LOADER_EXTENSIONS)
		.use('vue')
		.loader(require.resolve('vue-loader'))
		.tap((opts = {}) => merge(opts, options))

	if (compileRule && compileRule.uses.has('babel')) {
		const babelOptions = compileRule.use('babel').get('options');
		
		vueRule
			.use('vue')
			.tap((opts = {}) => merge({
				loaders: {
					js: {
						loader: 'babel-loader',
						options: babelOptions
					}
				}
			}, opts));
	}

	config
		.resolve.extensions
			.add('.vue')
			.end().end()
		.resolveLoader.modules
			.add(NODE_MODULES)
			.end().end();
};
