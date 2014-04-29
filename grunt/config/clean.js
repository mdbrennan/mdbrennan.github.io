module.exports = {
	options: {
		force: true
	},
	images: {
		files: [
			{
				expand:	true,
				cwd:	'<%= paths.dist %>/images/',
				src:	[
					'**/*.*',
					'!/sprites/**'
				]
			}
		]
	}
};