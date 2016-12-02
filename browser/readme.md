# Megafon browser client

## Contribute
+ Please follow the [standardjs](https://github.com/feross/standard) code style
  + Editor plugin [available](https://github.com/feross/standard#text-editor-plugins)
+ Use `let`, `const`, `...rest`, `const {a, b} = obj` etc
+ Webpack requires relative to `./client`, i.e

  ```js
  // client/lib/foo.js
  import bar from 'lib/bar' // given client/lib/bar.js
  ```
