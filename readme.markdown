# scoot-stream

[![build status](http://img.shields.io/travis/jekrb/scoot-stream.svg?style=flat)](http://travis-ci.org/jekrb/scoot-stream)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

stream.write(JSON.stringify(obj) + '\n') shortcut

## Install

```
npm install scoot-stream -S
```

## Usage

```js
const scoot = require('scoot-stream')
const through = require('through2')
const split = require('split2')

const so = scoot('hello')

const stream = through()
const sp = stream.pipe(split(JSON.parse))

sp.on('error', console.log)

sp.pipe(through(row, enc, next) => {
  if (row.hello) {
    console.log(row.hello) // world
  }

  if (row.foo) {
    console.log(row.foo) // bar
  }
})

so(stream, 'world')
so(stream, {
  foo: 'bar'
})
```


## API


#### `scoot(String)`

Pass in a base string for scoot use as the property of the object you're stringifying.

#### `so(Stream, String)`

Pass in a writable stream and a string to use as the value for the object you're stringifying.


#### `so(Stream, Object)`

Pass in a writable stream and an object to stringify.
