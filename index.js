const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const client = require('./db');
const TodoList = require('./todoList');

const list = new TodoList();
list.add('Mow Lawn', 0);
list.add('Pick up groceries', 1);
list.add('Work out', 2);

app.get('/', (req, res) => {
  res.send('This is the Home page!');
})

app.listen(port, () => `Listening on port ${port}`);