module.exports = {
	
	lib: {
		files: [
			{
				expand:	true,
				cwd:	'<%= paths.src %>/js/lib/',
				src:	'**',
				dest:	'<%= paths.dist %>/js/lib/'
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