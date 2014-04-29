module.exports = {
	all: {
		options: {
			sassDir:						'<%= paths.src %>/sass/',
			cssDir:							'<%= paths.dist %>/css/',
			imagesDir:						'<%= paths.src %>/images/',
			generatedImagesDir:				'<%= paths.dist %>/images/',
			importPath: 					'<%= paths.src %>/sass/',
			httpGeneratedImagesPath:		'../../images/',
			environment:					'production',			//development, production
			outputStyle:					'compressed'			// nested, expanded, compact, compressed
		}
	}
};