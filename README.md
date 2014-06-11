# transformer-resolve

Conversion resolution for [transformer](http://github.com/jbenet/transformer)

WARNING: require magic.

## Example

```js
var resolve = require('transformer-resolve')
var a2b = resolve('a-to-b') // requires the module

var dataA = ...
var dataB = a2b(dataA)
```
