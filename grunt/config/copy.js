module.exports = {
	
	themejs: {
		files: [
			{
				expand:	true,
				cwd:	'<%= paths.dist %>/js/',
				src:	[							
							'**',
							'!base.js',
							'!base.min.js'							
						],
				dest:	'<%= paths.theme %>/js/'
			}
		]
	},

	themefonts: {
		files: [
			{
				expand:	true,
				cwd:	'<%= paths.dist %>/fonts/',
				src:	[
							'**'							
						],
				dest:	'<%= paths.theme %>/fonts/'
			}
		]
	},

	themecss: {
		files: [
			{
				expand:	true,
				cwd:	'<%= paths.dist %>/css/',
				src:	[
							'**'							
						],
				dest:	'<%= paths.theme %>/css/'
			}
		]
	},

	fonts: {
		files: [
			{
				expand:	true,
				cwd:	'<%= paths.src %>/fonts/',
				src:	'**/*.*',
				dest:	'<%= paths.dist %>/fonts/'
			}
		]
	}

};