# Timelite [![Build Status](https://travis-ci.com/joseluisq/timelite.svg?branch=master)](https://travis-ci.com/joseluisq/timelite) [![npm](https://img.shields.io/npm/v/timelite.svg)](https://www.npmjs.com/package/timelite) [![npm](https://img.shields.io/npm/dt/timelite.svg)](https://www.npmjs.com/package/timelite) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> String date and time utilities. :clock10:

## Overview

__Timelite__ works in the top of [Datetime Strings (ISO 8601)](https://es.wikipedia.org/wiki/ISO_8601), receiving one array of string datetimes and returning one array of [Unsigned Datetime Integers](https://en.wikipedia.org/wiki/Signedness). This makes it a portable, compact and faster library if you are probably thinking about [why not around Date](https://codeofmatt.com/javascript-date-type-is-horribly-broken/).

## API

For now, the API is quite limited but feel free to contribute.

__Time__

- [x] `add` : Add an array of string times. E.g. `add(['04:20:10', '21:15:10'])` => `[ 25, 35, 2 ]`
- [x] `str` : Format an array of time values into string time. E.g. `str([12, 10, 45])` => `12:10:45`
- [x] `sub` : Subtract an array of string times. E.g. `sub(['20:40:10', '20:10:50'])` => `[ 0, 29, 20 ]`

__Date__

- [x] `normalize` : Normalize string date values returning a valid date as an unsigned integer array. E.g. `normalize('0-02-31')` => `[ 2000, 2, 28 ]`
- [x] `str` : Format an array date values into a valid string date. E.g. `str([0, 0, 0])` => `'2000-01-01'`

## Install

[Yarn](https://github.com/yarnpkg/)

```sh
yarn add timelite
```

[NPM](https://www.npmjs.com/)

```sh
npm install timelite
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

© 2018-present [Jose Quintana](http://git.io/joseluisq)
