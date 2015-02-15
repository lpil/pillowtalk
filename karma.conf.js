// Karma configuration
// Generated on Sun Feb 15 2015 13:18:21 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'test/**/*.js'
    ],
    exclude: [
      '**/*.swp'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors:
    //  https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],

    singleRun: false
  });
};
