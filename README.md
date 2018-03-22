# Timelite [![Build Status](https://travis-ci.org/joseluisq/timelite.svg?branch=master)](https://travis-ci.org/joseluisq/timelite) [![npm](https://img.shields.io/npm/v/timelite.svg)](https://www.npmjs.com/package/timelite) [![npm](https://img.shields.io/npm/dt/timelite.svg)](https://www.npmjs.com/package/timelite) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> String time utilities with ease.

__Note:__ This project is "Work In Progress" yet.

## API

__Time__

- [x] `add` : Add an array of string times. Eg. `add(['04:20:10', '21:15:10'])`
- [x] `str` : Format an array of time values into string time. Eg. `str([12, 0, 45])` > `"12:00:45"`
- [ ] `sub` : Subtract an array of string times. Eg. `add(['04:20:10', '21:15:10'])`

__Date__

- [x] `normalize` : Normalize string date values returning a valid date as an unsigned integer array.
- [x] `str` : Format an array date values into string date.

## Install

[Yarn](https://github.com/yarnpkg/)

```sh
yarn add timelite --dev
```

[NPM](https://www.npmjs.com/)

```sh
npm install timelite --save-dev
```

## Usage

### Time

#### add

Add an array of string time values "HH:mm:ss".

```js
const { add } = require('timelite/time')

add(['04:20:10', '21:15:10'])
// "25:35:20"
add(['04:35:10', '21:35:10'])
// "26:10:20"
add(['30:59', '17:10'])
// "48:09:00"
add(['19:30:00', '00:30:00'])
// "20:00:00"
```

#### str

Format an array time values into string time.

```js
const { str } = require('timelite/time')

str([12, 10, 45])
// "12:10:45"
str([5, 1, 0])
// "05:01:00"
str([7, 22])
// "07:22:00"
```

### Date

#### normalize

Normalize string date values returning a valid date as an unsigned integer array.

```js
const { normalize } = require('timelite/date')

normalize('1980-09-02')
// [ 1980, 9, 2 ]
normalize('17')
// [ 2017, 1, 1 ]
normalize('18-04')
// [ 2018, 4, 1 ]
normalize('0-02-31')
// [ 2000, 2, 28 ]
```

#### str

Format an array date values into string date.

```js
const { normalize } = require('timelite/date')

str([ 0, 0, 0 ])
// 2000-01-01
str([ 17, 14, 5 ])
// 2017-12-05
str([ 1988, 2 ])
// 1988-02-01
```

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/timelite/pulls) or [issue](https://github.com/joseluisq/timelite/issues).

## License
MIT license

© 2018 [José Luis Quintana](http://git.io/joseluisq)
