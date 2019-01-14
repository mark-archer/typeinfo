var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function () {

  return {
    files: [
      //{ pattern: 'node_modules/chai/chai.js', instrument: false },
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'utils.ts', load: false },
      { pattern: 'TypeInfo.ts', load: false },
      { pattern: './hostlangv4/**/*.ts', load: false },
    ],

    tests: [
      { pattern: 'test_client/**/*_spec.ts', load: false }
    ],

    postprocessor: webpackPostprocessor

    //,testFramework: 'mocha'

    ,env: {
      kind: 'chrome'
    }

    ,setup: function () {
      //window.expect = chai.expect;
      window.__moduleBundler.loadTests();
    }
  };
};