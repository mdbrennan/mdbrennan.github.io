  /*global module:false*/

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /***********************************
     * Paths configuration for modules
     ***********************************/
    paths: require('./config/paths'),

    /***********************************
     * Banner to add to assets
     * - Update licences, privacy, etc.
     ***********************************/
    banner: grunt.file.readJSON('config/banner.json').join(''),

    /***********************************
     * Detects errors and potential problems in JavaScript
     * Also used to enforce coding conventions
     * - Unsure of whether to use 'undef' - needs more investigation
     ***********************************/
    jshint: require('./config/jshint'),

    /***********************************
     * Concatenates files together
     * - Files concatenated in same order as specified in 'src'
     ***********************************/
    concat: require('./config/concat'),

    /***********************************
     * JavaScript parser / mangler / compressor
     * - Need to get source maps working
     ***********************************/
    uglify: require('./config/uglify'),

    /***********************************
     * CSS compilation / minification
     * - 'environment': development, production
     * - 'outputStyle': nested, expanded, compact, compressed
     * - Need to get staticRoot working for local
     ***********************************/
    compass: require('./config/compass'),

    /***********************************
     * Copy unprocessed files from src/ to assets/
     ***********************************/
    copy: require('./config/copy'),

    /***********************************
     * Clean the directories. Currently used to clean images directory before running imagemin, as imagemin can't delete files outside of the working directory
     ***********************************/
    clean: require('./config/clean'),

    /***********************************
     * Compress and optimise images
     ***********************************/
    imagemin: require('./config/imagemin'),    
    

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: [
          '<%= paths.html %>/**.html',
          '<%= paths.html %>/**/*.html'
        ]
      },

      js: {
        files: [
          '<%= paths.src %>/js/*.js',
          '<%= paths.src %>/js/**/*.js'          
        ],
        tasks: ['concat', 'uglify', 'copy']
      },      

      css: {
        files: [
          '<%= paths.src %>/sass/**/*.scss'
        ],
        tasks: ['compass', 'copy']
      },

      images: {
        files: [
          '<%= paths.src %>/images/*.*',
          '<%= paths.src %>/images/**/*.*'
        ],
        tasks: ['clean:images', 'imagemin']
      }
    }

  });

  // Load the NPM plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('build', ['compass', 'concat', 'uglify', 'copy']); 

    

  grunt.registerTask('js', ['concat', 'uglify']);

  grunt.registerTask('images', ['clean:images', 'imagemin']);
};
