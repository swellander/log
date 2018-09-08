const router = require('express').Router();

router.post('/', (req, res) => {
  Task.create(req.body)
    .then( newTask => {
      res.send( newTask )
    });
});

router.put('/:id', (req, res, next) => {
  Task.update(req.body, {
    where: { id: req.params.id }
  })
    .then( updatedTask => res.send(updatedTask))
    .catch(next);
});

module.exports = router;
