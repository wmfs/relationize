/* eslint-env mocha */
'use strict'

const loadFromSchemaFiles = require('./load-from-schema-files')

module.exports = function schemaAudit (options, callback) {
  const schemas = []

  function finish () {
    if (Object.prototype.hasOwnProperty.call(options.source, 'schemas')) {
      options.source.schemas.forEach(
        function (schemaInfo) {
          schemas.push(
            {
              namespace: schemaInfo.namespace,
              content: schemaInfo.schema
            }
          )
        }
      )
    }
    callback(null, schemas)
  }

  if (Object.prototype.hasOwnProperty.call(options.source, 'paths')) {
    loadFromSchemaFiles(
      schemas,
      options,
      function (err) {
        if (err) {
          callback(err)
        } else {
          finish()
        }
      }
    )
  } else {
    finish()
  }
}
