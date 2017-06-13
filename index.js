'use strict'

let path = require('path')
let sveltePreset = require('neutrino-preset-svelte')
let vuePreset = require('neutrino-preset-vue')
let jestPreset = require('neutrino-preset-jest')
let airbnbPreset = require('neutrino-preset-airbnb-base')
let eslintConfig = require('./eslint.config.js')

module.exports = function (neutrino) {
	const NODE_MODULES = path.resolve(__dirname, 'node_modules')
	let config = neutrino.config

	neutrino.options.server = {
		host: 'localhost',
		port: 4000,
		https: false,
		open: true
	}

	neutrino.options.compile = {
		targets: {
			browsers: ['last 3 versions']
		}
	}

	config
		.resolve.modules
			.add(NODE_MODULES)
			.end().end()
		.resolveLoader.modules
			.add(NODE_MODULES)
			.end().end()
	
	neutrino.use(airbnbPreset, {
   	eslint: eslintConfig
  	})
	neutrino.use(sveltePreset)
	neutrino.use(vuePreset)
	neutrino.use(jestPreset)

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