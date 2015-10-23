# dotifier [![npm version](https://img.shields.io/npm/v/dotifier.svg?style=flat-square)](https://www.npmjs.com/package/dotifier) [![build status](https://img.shields.io/travis/SoullessWaffle/dotifier.svg?style=flat-square)](https://travis-ci.org/SoullessWaffle/dotifier)

> Encode an integer into a Gmail address using dots

## Install

```
$ npm install --save dotifier
```

## Usage

### Server

```js
var dotifier = require('dotifier');
```

### Client

Dotifier can be loaded either directly, or using [AMD](http://requirejs.org/docs/whyamd.html).

*Note: requires [validator.js](https://github.com/chriso/validator.js)*
```html
<script type="application/javascript" src="dotifier.js"></script>
```

Example usage:
```js
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

## How it works

Gmail doesn't recognize dots as characters within usernames, meaning you can add or remove dots from a Gmail address without changing the actual destination address:
```
hom.er.j.sim.ps.on@gmail.com = homerjsimpson@gmail.com
HOMERJSIMPSON@gmail.com      = homerjsimpson@gmail.com
Homer.J.Simpson@gmail.com    = homerjsimpson@gmail.com
```
All these addresses belong to the same person. You can test this yourself if you try to sign in with your username with a dot removed or added to it. You'll still sign in to your account.
[Source](https://support.google.com/mail/answer/10313)

By treating a dot as a `1` and the absence of a dot as a `0`, we can store an arbitrary binary number in a Gmail address and later retrieve it:
```
0  = 0b0      = example@gmail.com
1  = 0b1      = exampl.e@gmail.com
2  = 0b10     = examp.le@gmail.com
3  = 0b11     = examp.l.e@gmail.com
10 = 0b1010   = exa.mp.le@gmail.com
43 = 0b101011 = e.xa.mp.l.e@gmail.com
```

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
