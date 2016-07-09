module.exports = function (prop) {
  return function (stream, msg) {
    if (!prop) throw new Error('scoot-stream requires a default property')
    if (!stream) throw new Error('scoot-stream requires a stream')

    if (typeof msg === 'string') {
      var obj = {}
      obj[prop] = msg
      stream.write(JSON.stringify(obj) + '\n')
    } else if (msg !== null && typeof msg === 'object' && !(Array.isArray(msg))) {
      stream.write(JSON.stringify(msg) + '\n')
    } else throw new Error('scoot-stream requires a message string or object.')
  }
}
