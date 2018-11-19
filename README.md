[![Standard - JavaScript Style Guide]( https://cdn.rawgit.com/standard/standard/master/badge.svg )]( https://github.com/standard/standard ) [![Greenkeeper badge](https://badges.greenkeeper.io/AlfieriChou/protobuf-model-schema.svg)](https://greenkeeper.io/)

# protobuf-model-schema
Convert protobuf models to JsonSchema models.

### demo

```javascript
const convert = require('./')
const appRoot = require('app-root-path')

const dirpath = `${appRoot}/proto`
const jsonschema = convert(dirpath)
console.log('------->', jsonschema)
```