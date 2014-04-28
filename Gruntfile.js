module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  grunt.registerTask('prod', ['concat', 'sass', 'autoprefixer', 'uglify', 'cssmin', 'htmlmin', 'string-replace']);
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('grunt', ['watch']);
  grunt.registerTask('mixins', ['bowercopy:mixins', 'concat', 'sass', 'autoprefixer']); // This will update your mixins folder with latest repo.
  grunt.registerTask('setup9876gkjg', ['bowercopy:boilerplate']); // WARNING: Running this task will wipe out your site.
};