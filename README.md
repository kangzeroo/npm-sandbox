# NPM Sandbox
This is a npm library for learning how to use make npm packages.

```
$ npm install --save npm-sandbox
```

Try it out with a test app:
```
// $ node test.js

const { setFn, triggerFn } = require('npm-sandbox')

console.log('Before function mutation: ', triggerFn('First attempt'))

setFn((str) => {
  return str.toUpperCase()
})

console.log('After function mutation', triggerFn('Whats up Doc'))

```

It should output:
```
Before function mutation:  () => "Unchanged fnA"
Changing fn to  (str) => {
  return str.toUpperCase()
}
After function mutation (str) => {
  return str.toUpperCase()
}
```
