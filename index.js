module.exports = prop => (stream, msg) => {
  if (!prop) throw new Error('scoot-stream requires a default property')
  if (!stream) throw new Error('scoot-stream requires a stream')

  if (typeof msg === 'string') {
    const obj = {}
    obj[prop] = msg
    stream.write(`${JSON.stringify(obj)}
`)
  } else if (msg !== null && typeof msg === 'object' && !(Array.isArray(msg))) {
    stream.write(`${JSON.stringify(msg)}
`)
  } else throw new Error('scoot-stream requires a message string or object.')
}
