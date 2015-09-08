# app-context-connie

[connie](https://www.npmjs.com/package/connie) initializer for [app-context](https://www.npmjs.com/package/app-context)

### Installation

```bash
$ npm install --save app-context-connie
```

### Usage

```javascript
module.exports = function() {
  this.runlevel('configured')
    // load configuration from a JSON file
    .use('connie', 'file', 'config/${environment}.json')
    // load configuration from a directory
    .use('connie', 'dir', 'config/${environment}')
    // load configuration from a JSON HTTP endpoint
    .use('connie', 'http', 'http://user:pass@my-config-server.com/config.json');
};
```
