module.exports = function(grunt) {

  grunt.initConfig({

  pkg: grunt.file.readJSON('package.json'),

// SETUP:

    bowercopy: {
        options: {
            // Bower components folder will be removed afterwards
            clean: true
        },
        boilerplate: {
            files: {
              'public': 'html5-boilerplate'
            }
        },
    },
    rename: {
        normalize: {
            src: 'public/css/normalize.css', dest: 'public/css/_normalize.scss'
        },
        main: {
            src: 'public/css/main.css', dest: 'public/css/_main.scss'
        },
    },
    'string-replace': {
      dist: {
        files: {
          'public/index.html': 'public/index.html'
        },
        options: {
          replacements: [
            // place files inline example
            {
              pattern: '<link rel="stylesheet" href="css/normalize.css">'+"\n"+'        <link rel="stylesheet" href="css/main.css">',
              replacement: '<link rel="stylesheet" href="css/global.css">'
            },
            {
              pattern: '<script src="js/plugins.js"></script>',
              replacement: ''
            },
            {
              pattern: '<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->'+"\n",
              replacement: ''
            },
            {
              pattern: '<script src="js/main.js"></script>',
              replacement: '<script src="js/global.js"></script>'
            },
            {
              pattern: "\n\n",
              replacement: ''
            }
          ]
        },
      },
    },

// CSS:

    sass: {
      dist: {
        options: {
          // cssmin will minify later
          style: 'expanded'
        },
        files: {
          'public/css/global.css': 'assets/sass/main.sass'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 10 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'public/css/global.css',
        dest: 'public/css/'
      }
    },
    cssmin: {
      combine: {
        files: {
          'public/css/global.css': ['public/css/global.css'],
          'public/_site/css/global.css': ['public/css/global.css'],
        }
      }
    },

// JAVASCRIPT:

    concat: {
      dist: {
        src: [
          'assets/js/lib/*.js',
          'assets/js/main.js'
        ],
        dest: 'public/js/main.js'
      }
    },
    uglify: {
      build: {
        src: 'public/js/main.js',
        dest: 'public/js/main.js'
      }
    },

// IMAGES:

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/img/'
        }]
      }
    },

// OTHER:


    jekyll: {
      options: {
        src : 'public',
        dest : 'public/_site',
      },
      dev: {
        src : 'public',
        dest : 'public/_site',
      },
    },
    livereload: {
      options: {
        base: 'public',
      },
        files: ['public/_site/css/global.css', 'public/_site/*.html']
    },




    watch: {
      css: {
        files: ['assets/sass/*.sass', 'assets/sass/parts/*.sass', 'assets/sass/*.scss', 'assets/sass/parts/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
      jekyll: {
        files: ['public/*.html', 'public/js/*', 'public/_layouts/*', 'public/_posts/*'],
        tasks: ['jekyll'],
        options: {
          livereload: true,
        },
      },
    },

  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'imagemin', 'jekyll']);
  grunt.registerTask('setup', ['bowercopy', 'rename', 'string-replace']);
  grunt.registerTask('dev', ['watch']);

};