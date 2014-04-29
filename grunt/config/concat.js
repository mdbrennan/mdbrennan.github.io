module.exports = {

	options: {
		separator: ';'
	},

	app: {
		src:	[				
			'<%= paths.src %>/js/global.js',
			'<%= paths.src %>/js/tracking.js',			
		],
		dest:	'<%= paths.dist %>/js/app.js'
	},

	base: {
		src:	[
			'<%= paths.src %>/js/lib/jquery-1.11.0.js',
			'<%= paths.src %>/js/lib/jquery.ui.core.js',
			'<%= paths.src %>/js/lib/jquery.ui.widget.js',	
			'<%= paths.src %>/js/lib/jquery.ui.effect.js',			
		],
		dest:	'<%= paths.dist %>/js/base.js'
	},

	plugins:{
		src:	[
			'<%= paths.src %>/js/plugins/*.js',		
		],
		dest:	'<%= paths.dist %>/js/plugins.js'
	}

};