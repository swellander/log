const router = require('express').Router();
const { Task } = require('../db');
const Op = require('sequelize').Op;

//get todays date
const today = new Date();
// flatten time because we just want to work with today's date
today.setHours(0,0,0,0);

router.delete('/tasks/:id', (req, res, next) => {
  Task.destroy({where: {id: req.params.id}})
    .then(task => res.sendStatus(200))
    .catch(next)
});

router.get('/tasks', (req, res, next) => {
  Task.findAll()
    .then( tasks => res.json(tasks) )
    .catch(err => console.log('UH OH', err));
})

router.get('/tasks/today', (req, res, next) => {
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

router.get('/tasks/:id', (req, res) => {
  Task.findOne({
    where: { id: req.params.id }
  })
    .then( task => res.send(task) );
});

module.exports = router;
