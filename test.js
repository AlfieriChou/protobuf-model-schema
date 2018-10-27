const convert = require('./')
const appRoot = require('app-root-path')

const test = async () => {
  const dirpath = `${appRoot}/proto`
  const jsonschema = await convert(dirpath)
  console.log('------->', jsonschema)
  return jsonschema
}

test()