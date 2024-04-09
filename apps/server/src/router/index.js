const fs = require('fs');

function registerRouters(app) {
  const files = fs.readdirSync(__dirname);
  files.forEach((file) => {
    if (file.endsWith('.router.js')) {
      const router = require('./' + file);
      app.use(router.routes());
      app.use(router.allowedMethods());
    }
  });
}

module.exports = registerRouters;
