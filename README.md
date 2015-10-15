# dotifier [![Build Status](https://travis-ci.org/soullesswaffle/dotifier.svg?branch=master)](https://travis-ci.org/soullesswaffle/dotifier) [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

> Encode an integer into a Gmail address using dots


## Install

```
$ npm install --save dotifier
```


## Usage

```js
// example.js
var dotifier = require('./index.js');

console.log(dotifier.encode('examplegmail@gmail.com', 1));
//=> 'examplegmai.l@gmail.com'

console.log(dotifier.encode('examplegmail@gmail.com', 5));
//=> 'exampleg.mai.l@gmail.com'

console.log(dotifier.encode('examplegmail@gmail.com', 1337));
//=> 'e.xa.mpl.e.g.mai.l@gmail.com'
```

## API

### encode(email, integer)

Returns a string.

#### email

*Required*  
Type: `string`

Gmail address to use.

#### integer

*Required*  
Type: `number`

Integer to encode.

## License

MIT © Soullesswaffle
