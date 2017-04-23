'use strict'

let path = require('path')
let sveltePreset = require('neutrino-preset-svelte')
let jestPreset = require('neutrino-preset-jest')
let airbnbPreset = require('neutrino-preset-airbnb-base')

module.exports = function (neutrino) {
	const NODE_MODULES = path.resolve(__dirname, 'node_modules')
	let config = neutrino.config

	neutrino.options.server = {
		host: 'localhost',
		port: 4000,
		https: false,
		open: false
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
	
	neutrino.use(airbnbPreset)
	neutrino.use(sveltePreset)
	neutrino.use(jestPreset)
}