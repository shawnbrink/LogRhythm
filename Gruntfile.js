module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    build:'build',
    mods:'vendor',
    app:'app',

    pkg: grunt.file.readJSON('package.json'),
    
    browserify: {
      vendor: {
        src: [],
        dest: 'build/js/vendor.js',
        options: {
          require: ['jquery','underscore','backbone'],
        }
      },
  
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
     

    
  
  });

  grunt.registerTask('default', ['copy','browserify']);




};