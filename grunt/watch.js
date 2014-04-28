module.exports = {
    main: {
        files: ['Gruntfile.js', 'grunt/*.js'],
        tasks: ['grunt'],
        options: {
            spawn: true,
            livereload: true
        }
    },
    css: {
        files: ['assets/sass/*.{sass,scss}', 'assets/sass/**/*.{sass,scss}'],
        tasks: ['concat', 'sass', 'autoprefixer'],
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
        files: ['assets/js/*.js', 'public/*.html', 'public/**/*.html', 'public/**/*.md'],
        tasks: ['jekyll'],
        options: {
            spawn: false,
            livereload: true,
        }
    },
};
