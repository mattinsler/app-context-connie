# app-context-connie

[connie](https://www.npmjs.com/package/connie) initializer for [app-context](https://www.npmjs.com/package/app-context)

### Installation

```bash
$ npm install --save app-context-connie
```

### Usage

```javascript
var AppContext = require('app-context');
var connie = require('app-context-connie');

module.exports = AppContext.createContext({
  configure: function() {
    this.use(
      AppContext.RunLevel.Connected,
      // load the configuration from a directory using connie
      connie('dir', 'config/' + APP.environment)
      // load the configuration from a file using connie
      connie('file', 'config/' + APP.environment + '.json')
    );

    // you can optionally use app-context-connie through app-context-initialize
    var initialize = require('app-context-initialize');
    this.use(
      AppContext.RunLevel.Connected,
      initialize(['connie', 'dir', 'config/' + APP.environment])
    );
  }
});
```
