const glob = require('glob')
const path = require('path')
const jsonfile = require('jsonfile')

async function loadFromSchemaFiles (paths) {
  const schemas = []

  for (const sourceDir of paths) {
    const fullPath = path.join(sourceDir.path, '**/*.json')
    const files = await expandLocation(fullPath)
    for (const file of files) {
      const content = await jsonfile.readFile(file)
      schemas.push({
        filename: path.basename(file, path.extname(file)),
        filePath: file,
        namespace: sourceDir.namespace,
        content
      })
    } // for ...
  } // for ...

  return schemas
} // loadFromSchemaFiles

function expandLocation (fileSource) {
  return new Promise((resolve, reject) => {
    glob(
      fileSource,
      { nodir: true },
      (err, files) => {
        if (err) return reject(err)
        resolve(files)
      }
    )
  })
} // expandLocation

module.exports = loadFromSchemaFiles
