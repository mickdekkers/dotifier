# dotifier [![Build Status](https://travis-ci.org/SoullessWaffle/dotifier.svg?branch=master)](https://travis-ci.org/SoullessWaffle/dotifier) [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

> Encode an integer into a Gmail address using dots


## Install

```
$ npm install --save dotifier
```


## Usage

```js
// example.js
var dotifier = require('dotifier');

console.log(dotifier.encode('examplegmail@gmail.com', 1));
//=> 'examplegmai.l@gmail.com'

console.log(dotifier.encode('examplegmail@gmail.com', 9));
//=> 'exampleg.mai.l@gmail.com'

console.log(dotifier.encode('examplegmail@gmail.com', 1337));
//=> 'e.xa.mpl.e.g.mai.l@gmail.com'


console.log(dotifier.decode('examplegmai.l@gmail.com'));
//=> 1

console.log(dotifier.decode('exampleg.mai.l@gmail.com'));
//=> 9

console.log(dotifier.decode('e.xa.mpl.e.g.mai.l@gmail.com'));
//=> 1337
```

> Gmail doesn't recognize dots as characters within usernames, you can add or remove the dots from a Gmail address without changing the actual destination address:
>
> - homerjsimpson@gmail.com = hom.er.j.sim.ps.on@gmail.com
> - homerjsimpson@gmail.com = HOMERJSIMPSON@gmail.com
> - homerjsimpson@gmail.com = Homer.J.Simpson@gmail.com
>
> All these addresses belong to the same person. You can see this if you try to sign in with your username, but adding or removing a dot from it. You'll still go to your account.

[Source](https://support.google.com/mail/answer/10313)

## API

### encode(email, integer)

Returns a string, or null if the input is invalid.

#### email

*Required*  
Type: `string`

Gmail address to use.

#### integer

*Required*  
Type: `number`

Integer to encode.

### decode(email)

Returns an integer, or null if the input is invalid.

#### email

*Required*  
Type: `string`

Gmail address to decode.

## License

MIT © Soullesswaffle
