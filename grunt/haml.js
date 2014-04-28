module.exports = {
    test: {
        files: [{
            expand: true,
            cwd: 'assets',
            src: [
                '**/*.haml',
                '**/**/*.haml',
                '**/**/**/*.haml',
                '**/**/**/**/*.haml',
            ],
            dest: 'public',
            ext: '.html',
            flatten: false
        }]
    }
};
