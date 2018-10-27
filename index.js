const dir = require('dir_filenames')
const compile = require('protobuf-jsonschema')
const path = require('path')

/**
 * @param {string} dirpath
 */
function convert (dirpath) {
  if (!dirpath) throw new Error('Dirpath required!!!')
  let component = {}
  const filenames = dir(dirpath)
  for (let i = 0; i < filenames.length; ++i) {
    let filename = filenames[i]
    let filenameArray = filename.split('/')
    let popFileNameArr = filenameArray.pop()
    let filePath = path.join(dirpath + '/' + popFileNameArr)
    let modelName = popFileNameArr.replace(/\.\w+$/, '')
    let schemaName = modelName.slice(0, 1).toUpperCase() + modelName.slice(1)
    let schema = compile(filePath, schemaName)
    let schemaRealName = schema.definitions[schemaName].title
    let type = schema.definitions[schemaName].type
    let properties = schema.definitions[schemaName].properties
    component[schemaRealName] = {
      type: type,
      properties: properties
    }
  }
  return component
}

module.exports = convert