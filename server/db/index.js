const Sequelize = require('sequelize');
const connection = new Sequelize(process.env.DATABASE_URL, { logging: false });
const seedTasks = require('./seed');

const Task = connection.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  notes: {
    type: Sequelize.TEXT
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  inProgress: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }, 
  latitude: {
    type: Sequelize.INTEGER    
  },
  longitude: {
    type: Sequelize.INTEGER
  },
  complete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  duration: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: null
  }
});

Task.beforeValidate( instance => {
  if(typeof instance.tags === 'string') {
    instance.tags = instance.tags.split(', ').map( tag => tag.trim()); 
    instance.name = instance.name.toLowerCase();
  }
})

const syncSeed = async () => {
  await connection.sync({ force: true });
  await Promise.all(seedTasks.map( task => Task.create(task)));
}

module.exports = {
  syncSeed,
  Task
}
