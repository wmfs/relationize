
const loader = require('./loader')
const parser = require('./parser')
const promisify = require('util').promisify

const NotSet = 'NotSet'
const relationizeP = promisify(relationize)

async function relationize (options, callback = NotSet) {
  if (callback === NotSet) {
    return relationizeP(options)
  }

  const schemaFiles = await loader(options)
  callback(null, parser(schemaFiles, options))
}

module.exports = relationize
