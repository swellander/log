const Sequelize = require('sequelize');
const connection = new Sequelize(process.env.DATABASE_URL);
const seedTasks = require('./seed');

const Task = connection.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  latitude: {
    type: Sequelize.INTEGER    
  },
  longitude: {
    type: Sequelize.INTEGER
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  completedAt: {
    type: Sequelize.DATE
  }
});

const syncSeed = async () => {
  await connection.sync({ force: true });
  await Promise.all(seedTasks.map( task => Task.create(task)));
}

module.exports = {
  syncSeed
}
