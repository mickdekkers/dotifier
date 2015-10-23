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
    },
    'sl_edge': {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      platform: 'Windows 10'
    }
  };

  var sauceLabs = {
    username: 'Soullesswaffle',
    accessKey: '99ebc221-7542-4dc9-8e29-9a629d0b6cda',
    testName: 'Dotifier Browser Tests',
    tags: []
  };
  if (process.env.TRAVIS_JOB_NUMBER) {
    sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    sauceLabs.tags.push('ci');
    sauceLabs.tags.push(process.env.TRAVIS_BRANCH);
    sauceLabs.tags.push(process.env.TRAVIS_COMMIT.slice(0, 7));
    if (process.env.TRAVIS_PULL_REQUEST !== 'false') {
      sauceLabs.tags.push('pr-' + process.env.TRAVIS_PULL_REQUEST);
    }
  } else {
    sauceLabs.tags.push('manual');
  }
  console.log('Sauce Labs tags:', sauceLabs.tags);
  config.set({
    files: [
      'node_modules/mocha/mocha.js',
      'node_modules/chai/chai.js',
      'node_modules/validator/validator.js',
      'dotifier.js',
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
