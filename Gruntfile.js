module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    build:'build',
    mods:'vendor',
    app:'app',

    pkg: grunt.file.readJSON('package.json'),
    
    browserify: {
      dist: {
        src: ['ui/js/app.js'],
        dest: 'build/js/app.js',
        options: {
          transform: ['node-underscorify'],
          debug: true
          
        }

        // Note: The entire `browserify-shim` config is inside `package.json`.
      }
    },

    copy: {
      main: {
        expand: true,
        src: ['ui/css/bootstrap.min.css'],
        dest: 'build/css/',
        flatten: true,
        filter: 'isFile',
      },
      js: {
        expand: true,
        src: ['ui/js/edit.js'],
        dest: 'build/js/',
        flatten: true,
        filter: 'isFile',
      },


  },
  "jsbeautifier" : {
    files : ["ui/**/*.js"],
    options : {
    }
}
     
     

    
  
  });

  grunt.registerTask('default', ['copy','browserify']);

  grunt.registerTask('pretty', ['jsbeautifier']);



};