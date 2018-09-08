const app = require('./app');
const port = process.env.PORT || 3001;
const db = require('./db');

db.syncSeed() 
  .then( () => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => new Error(err))
