const path = require('path');

module.exports = {
  // ... Otras configuraciones de webpack ...

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  }
};