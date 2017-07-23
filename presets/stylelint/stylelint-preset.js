'use strict'

let merge = require('deepmerge');

let stylelintMiddleware = require('../../middlewares/middleware-stylelint.js')
let stylelintConfig = require('./stylelint.config.js')

module.exports = function (neutrino, options = {}) {
	neutrino.use(stylelintMiddleware, {
		// configFile: options.configFile,
		// configBasedir
		// configOverrides
		// formatter - Options: "json"|"string"|"verbose", or a function. Default is "json".
		ignoreDisables: false,
		reportNeedlessDisables: false,
		cache: false,
		fix: false,
		config: merge(stylelintConfig, options)
	})
}