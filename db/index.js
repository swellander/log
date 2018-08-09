const Sequelize = require('sequelize');
const connection = new Sequelize(process.env.DATABASE_URL);


const sync = () => connnection.sync();

module.exports = {
  sync
}
