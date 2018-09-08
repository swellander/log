const router = require('express').Router();

router.use('/tasks', require('./tasks'));
router.use('/api', require('./api'));

module.exports = router;
