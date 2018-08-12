const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const { syncSeed, Task } = require('./db');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.post('/tasks', (req, res) => {
  Task.create(req.body)
    .then( newTask => res.send( newTask ));
})

app.get('/api/tasks', (req, res, next) => {
  Task.findAll()
    .then( tasks => res.send(tasks))
    .catch(next);
});

app.get('/api/tasks/:id', (req, res) => {
  Task.findOne({
    where: { id: req.params.id }
  })
    .then( task => res.send(task) );
});

syncSeed() 
  .then( () => app.listen(port, () => console.log(`Listening on port ${port}`)));

