module.exports = {

	modernizr : {
		src:	'<%= paths.src %>/js/lib/modernizr.js',
		dest:	'<%= paths.dist %>/js/lib/modernizr.min.js'
	},

	core: {
		options: {
			banner:				'<%= banner %>'			
		},
		src:	'<%= paths.dist %>/js/app.js',
		dest:	'<%= paths.dist %>/js/app.min.js'
	},

	base: {
		options: {
			banner:				'<%= banner %>',
			compress:			true,
			mangle:				true,
			beautify:			false			
		},
		src:	'<%= paths.dist %>/js/base.js',
		dest:	'<%= paths.dist %>/js/base.min.js'
	},

	theme: {
		options: {
			banner:				'<%= banner %>',
			compress:			true,
			mangle:				true,
			beautify:			false			
		},
		src:	'<%= paths.dist %>/js/theme-base.js',
		dest:	'<%= paths.dist %>/js/theme-base.min.js'
	},

	plugins: {
		src: '<%= paths.dist %>/js/plugins.js',
		dest: '<%= paths.dist %>/js/plugins.min.js',
	}
};