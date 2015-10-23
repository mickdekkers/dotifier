# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [1.2.0] - 2015-10-23
### Added
- Browser support.
- ES5 support (no longer dependent on ES2015).
- Universal Module Definition: Dotifier can now be used in CommonJS, AMD and
browser environments.
- Automated browser testing for Chrome, Firefox, IE11 and Edge using
[Karma](https://www.npmjs.com/package/karma) and [Sauce Labs](https://saucelabs.com/).
- This CHANGELOG.

### Changed
- Renamed `index.js` to `dotifier.js`

### Removed
- Binary and Octal tests because they cause uncatchable syntax errors in ES5

## [1.1.0] - 2015-10-22
### Added
- Decode method: just input a valid email and Dotifier will retrieve an integer.
- 'How it works' README section.
- Provide at least 3 test cases for each method.
- Improved badge formatting in the README.

### Fixed
- Example code in README usage section.
- Clarify in the API section of the readme that encode returns null when
the input is invalid.

## [1.0.2] - 2015-10-15
### Added
- Project explanation in README.

## [1.0.1] - 2015-10-15
### Fixed
- Dotifier reference in README usage section.

## 1.0.0 - 2015-10-15
### Added
- Initial npm release.

[Unreleased]: https://github.com/SoullessWaffle/dotifier/compare/1.1.0...HEAD
[1.2.0]: https://github.com/SoullessWaffle/dotifier/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/SoullessWaffle/dotifier/compare/1.0.2...1.1.0
[1.0.2]: https://github.com/SoullessWaffle/dotifier/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/SoullessWaffle/dotifier/compare/1.0.0...1.0.1
