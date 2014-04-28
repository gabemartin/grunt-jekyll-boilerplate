module.exports = {
    dist: {
        options: {
            // cssmin will minify later
            style: 'expanded'
        },
        files: {
            'public/css/global.css': 'assets/sass/main.sass'
        },
    },
};
