const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { syncSeed, Task } = require('./db');
const path = require('path');


app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
})

app.get('/api/tasks', (req, res, next) => {
  Task.findAll()
    .then( tasks => res.send(tasks))
    .catch(next);
});

syncSeed() 
  .then( () => app.listen(port, () => console.log(`Listening on port ${port}`)));

