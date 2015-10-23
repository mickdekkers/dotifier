module.exports = function (config) {
  var customLaunchers = {
    'sl_chrome': {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 10'
    },
    'sl_firefox': {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Windows 10'
    },
    'sl_ie_11': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 10',
      version: '11'
    }
  };

  var sauceLabs = {
    testName: 'Dotifier Browser Tests',
    tags: []
  };
  if (process.env.TRAVIS_JOB_NUMBER) {
    sauceLabs.startConnect = false;
    sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER.replace(/\./g, '_');
    sauceLabs.tags.push('ci');
    sauceLabs.tags.push(process.env.TRAVIS_BRANCH);
    sauceLabs.tags.push(process.env.TRAVIS_COMMIT.slice(0, 6));
    if (process.env.TRAVIS_PULL_REQUEST !== 'false') {
      sauceLabs.tags.push('pr-' + process.env.TRAVIS_PULL_REQUEST);
    }
  } else {
    sauceLabs.tags.push('manual');
  }
  console.log(sauceLabs.tags);
  config.set({
    files: [
      'node_modules/mocha/mocha.js',
      'node_modules/chai/chai.js',
      'node_modules/validator/validator.js',
      'index.js',
      'test.js'
    ],
    sauceLabs: sauceLabs,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    frameworks: ['mocha'],
    reporters: ['dots', 'saucelabs'],
    concurrency: 5,
    singleRun: true
  });
};
