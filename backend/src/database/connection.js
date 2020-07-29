const knex = require('knex');
const configuration = require('../../knexfile');

const conntection = knex(configuration.development);

module.exports = conntection;