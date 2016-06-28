const scoot = require('../')
const test = require('tape')
const through = require('through2')
const split = require('split2')

test('simple', t => {
  t.plan(1)

  const stream = through()

  const sp = stream.pipe(split(JSON.parse))
  sp.on('error', err => {
    t.fail(err)
  })

  const so = scoot('test')

  so(stream, 'pass?')

  sp.pipe(through.obj((row, enc, next) => {
    if (!row) next()

    if (row.test) {
      t.same(row.test, 'pass?')
    }

    next()
  }))
})
