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