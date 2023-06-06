const loader = require('./loader')
const parser = require('./parser')

async function relationize (options) {
  const schemaFiles = await loader(options)
  return parser(schemaFiles, options)
}

module.exports = relationize
