'use strict'

let postCssLoaderMiddleware = require('./middleware-postcss-loader.js')
let stylelint = require('stylelint')
let postcssReporter = require('postcss-reporter')

module.exports = function (neutrino, options = {}) { 
	let prodRun = (process.env.NODE_ENV === 'production')

	neutrino.use(postCssLoaderMiddleware, {
		include: options.include,
		exclude: options.exclude,
		sourceMap: true, /* 'inline' */
		plugins: [
			// require("postcss-import")({
			// 	plugins: [
			// 	require("stylelint")({ /* your options */ })
			// 	]
			// }),
			stylelint(options),
			postcssReporter({ 
				plugins: ['stylelint'],
				noPlugin: false,
				// throwError : Boolean(prodRun),
				// clearReportedMessages: true,
				clearAllMessages: true
			})
		]
	})

	neutrino.register('stylelintrc', function(){
		return options.config
	})
}