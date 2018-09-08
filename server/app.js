const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const { syncSeed, Task } = require('./db');
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//get todays date
const today = new Date();
// flatten time because we just want to work with today's date
today.setHours(0,0,0,0);

app.use(bodyParser.json());
app.use((req, res, next) => {
  next();
});

app.use('/dist', express.static('dist'));
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/index.html'));
// });

app.post('/tasks', (req, res) => {
  Task.create(req.body)
    .then( newTask => {
      res.send( newTask )
    });
});

app.put('/tasks/:id', (req, res, next) => {
  Task.update(req.body, {
    where: { id: req.params.id }
  })
    .then( updatedTask => res.send(updatedTask))
    .catch(next);
});

app.delete('/api/tasks/:id', (req, res, next) => {
  Task.destroy({where: {id: req.params.id}})
    .then(task => res.sendStatus(200))
    .catch(next)
});

app.get('/api/tasks', (req, res, next) => {
  Task.findAll()
    .then( tasks => res.json(tasks) )
    .catch(err => console.log('UH OH', err));
})

app.get('/api/tasks/today', (req, res, next) => {
  Task.findAll({
    where: {
      updatedAt: {
        [Op.gte]: today
      }
    }
  })
    .then( tasks => res.json(tasks))
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
