var args = ['unix-time', 'js-date']
if (process.argv.length >= 4)
  args = process.argv.slice(2)
console.log('resolving: ' + args)

var resolve = require('./')
resolve.useGlobalModules(true)
console.log(resolve(args))
