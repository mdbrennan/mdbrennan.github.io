module.exports = {
	options: {
		curly:		true,
		eqeqeq:		true,
		forin:		true,
		immed:		true,
		latedef:	true,
		newcap:		true,
		noarg:		true,
		quotmark:	'single',
		sub:		true,
		undef:		true,
		unused:		true,
		boss:		true,
		eqnull:		true,
		browser:	true,
		globals: {
			'jQuery':	true,
			'$':		true,
			'window':	true,
			'document':	true,
			'console':	false,
			'WCMS':		true
		}
	},

	all: {
		src: ['<%= paths.js.all %>/**/*.js']
	}
};