module.exports = {
	images: {
		files: [
			{
				expand:	true,
				cwd:	'<%= paths.src %>/images/',
				src:	[
					'**/*.*',
					'!/sprites/**'
				],
				dest:	'<%= paths.dist %>/images/'
			}
		]
	}
};