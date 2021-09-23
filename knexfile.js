// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
     // filename: './dev.sqlite3'
     filename: './server/db/questionnaire.db'

    }
  },
  useNullAsDefault: true

};
