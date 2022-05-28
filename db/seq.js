const { Sequelize } = require('sequelize');

const seq = new Sequelize( 'xc-db', 'root', 'xc901022', {
  host: 'localhost',
  dialect: 'mysql'
} );

// TEST-connect
// seq.authenticate().then(r => console.log('r', r)).catch(err => console.log('err', err))

module.exports = seq
