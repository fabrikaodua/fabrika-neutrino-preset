'use strict'

let airbnbPreset = require('neutrino-preset-airbnb-base')
let arrify = require('arrify')
const merge = require('deepmerge');

let eslintConfig = require('./eslint.config.js')

module.exports = function (neutrino) {
	let config = neutrino.config
	let lintRule = config.module.rule('lint')
	const EXTENSIONS = arrify(lintRule.get('test')).concat([/\.vue$/])

	neutrino.use(airbnbPreset, {
		eslint: eslintConfig
	})

	config.module
		.rule('lint')
		.test(EXTENSIONS)
		.use('eslint')
			.tap(options => merge(options, {
				plugins: ['vue'],
				env: { node: true },
				rules: {
					'vue/jsx-uses-vars': 2
				}
			}));

	
	// config.module
   //    .rule('lint')
   //    .use('eslint')
   //    .tap(options => {
	// 		options.parser = 'vue-eslint-parser'
	// 		options.parserOptions.parser = 'babel-eslint'
	// 		options.parserOptions.sourceType = 'module'
	// 		return options
	//    });
}