[![Standard - JavaScript Style Guide]( https://cdn.jsdelivr.net/gh/standard/standard@master/badge.svg )]( https://github.com/standard/standard )

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