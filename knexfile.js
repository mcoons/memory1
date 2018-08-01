
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/resolution'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
