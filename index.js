'use strict'

let path = require('path')
let sveltePreset = require('neutrino-preset-svelte')
let jestPreset = require('neutrino-preset-jest')
let vuePreset = require('./presets/vue-preset.js')
let stylelintPreset = require('./presets/stylelint/stylelint-preset.js')
let eslintPreset = require('./presets/eslint/eslint-preset.js')

module.exports = function (neutrino) {
	const NODE_MODULES = path.resolve(__dirname, 'node_modules')
	let config = neutrino.config

	config
		.resolve.modules
			.add(NODE_MODULES)
			.end().end()
		.resolveLoader.modules
			.add(NODE_MODULES)
			.end().end()

	neutrino.use(eslintPreset)
	neutrino.use(sveltePreset, {
		server: {
			public: true,
			port: 3000,
			https: false,
			open: true
		},
		browsers: ['last 3 versions']
	})
	neutrino.use(stylelintPreset)
	neutrino.use(vuePreset)
	neutrino.use(jestPreset, {
		coveragePathIgnorePatterns: [ '/.*\\.vue$'],
		transform: {
			'\\.vue$': require.resolve('./middlewares/jest-vue-processor.js')
		}
	})

	// var len = config.toConfig().module.rules.length
	// console.log(config.toConfig().module.rules[len-2].use[0])
}