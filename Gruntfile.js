'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      test: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['karma', 'newer:jshint:test']
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
        '!client/**',
        '!node_modules/**'
      ],
      client: {
        options: {
          browser: true
        },
        files: {
          src: ['client/**/*.js']
        }
      },
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
