/* eslint-env mocha */
'use strict'

const loadFromSchemaFiles = require('./load-from-schema-files')

async function schemaAudit (options) {
  const { paths = [], schemas = [] } = options.source

  const allSchemas = await loadFromSchemaFiles(paths)

  schemas.forEach(schema => allSchemas.push({
    namespace: schema.namespace,
    content: schema.schema
  }))

  return allSchemas
} // schemaAudit

module.exports = schemaAudit
