module.exports = {
  inline: {
    options: {
      replacements: [
        // place files inline example
        {
            pattern: '<script>document.write(\'<script src="http://\' + (location.host || \'localhost\').split(\':\')[0] + \':35729/livereload.js?snipver=1"></\' + \'script>\')</script>',
            replacement: ''
        }
      ]
    },
    files: {
      'public/': 'public/*.html',
    }
  }
};