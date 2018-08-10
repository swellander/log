const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const client = require('./db');
const TodoList = require('./todoList');
const taskList = require('./views/taskList');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const db = require('./db');

const list = new TodoList();
list.add('Mow Lawn', 0);
list.add('Pick up groceries', 1);
list.add('Work out', 2);

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
})

app.get('/', (req, res) => {
  res.send(taskList(list.getTasks()));
})

app.post('/', (req, res) => {
  const title = req.body.taskTitle;
  list.add(title, uuid());
  res.send(taskList(list.getTasks()));
})

db.syncSeed() 
  .then( () => app.listen(port, () => console.log(`Listening on port ${port}`)));

