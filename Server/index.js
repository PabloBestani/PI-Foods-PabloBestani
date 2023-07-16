const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getDietsSeed} = require("./src/seeders/seeders.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    getDietsSeed()
    .then((message) => {
      console.log(message)
    })
    .catch((error) => error.message);
  });
});
