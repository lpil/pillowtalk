'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      jsTest: {
        files: ['**/*.js', '!**/node_modules/**/*'],
        tasks: ['karma', 'jshint']
      }
    },

    // Tests
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    // Linter
    jshint: {
      options: {
        jshintrc: true
      },
      app: [
        '**/*.js',
        '!node_modules/**'
      ]
    }
  });

  grunt.registerTask('test', 'Run tests and linters', [
    'karma',
    'jshint'
  ]);

  grunt.registerTask('default', [
    'test',
    'watch'
  ]);
};
