# Timelite [![Build Status](https://travis-ci.org/joseluisq/timelite.svg?branch=master)](https://travis-ci.org/joseluisq/timelite) [![npm](https://img.shields.io/npm/v/timelite.svg)](https://www.npmjs.com/package/timelite) [![npm](https://img.shields.io/npm/dt/timelite.svg)](https://www.npmjs.com/package/timelite) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> String date and time utilities.

## API

__Time__

- [x] `add` : Add an array of string times. Eg. `add(['04:20:10', '21:15:10'])`
- [x] `str` : Format an array of time values into string time. Eg. `str([12, 0, 45])` => `[ 12, 00, 45 ]`
- [x] `sub` : Subtract an array of string times. Eg. `sub(['20:05:10', '10:10:50'])` => `[ 9, 54, 20 ]`

__Date__

- [x] `normalize` : Normalize string date values returning a valid date as an unsigned integer array.
- [x] `str` : Format an array date values into a valid string date.

## Install

[Yarn](https://github.com/yarnpkg/)

```sh
yarn add timelite --dev
```

[NPM](https://www.npmjs.com/)

```sh
npm install timelite --save-dev
```

[UMD](https://github.com/umdjs/umd/) file is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/timelite/timelite.umd.min.js"></script>
```

You can use the library via `window.timelite`.

## Usage

### Time

#### add

Add an array of string time values "HH:mm:ss".

```js
import { add } from 'timelite/time'

add(['04:20:10', '21:15:10'])
// [ 25, 35, 2 ]
add(['04:35:10', '21:35:10'])
// [ 26, 10, 2 ]
add(['30:59', '17:10'])
// [ 48, 09, 0 ]
add(['19:30:00', '00:30:00'])
// [ 20, 00, 0 ]
```

#### sub

Subtract an array of string time values "HH:mm:ss".

```js
import { sub } from 'timelite/time'

sub(['20:40:10', '20:10:50'])
// [ 0, 29, 20 ]
sub(['20:05:10', '10:10:50'])
// [ 9, 54, 20 ]
```

#### str

Format an array time values into string time.

```js
import { str } from 'timelite/time'

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
import { normalize } from 'timelite/date'

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

Format an array date values into a valid string date.

```js
import { str } from 'timelite/date'

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
