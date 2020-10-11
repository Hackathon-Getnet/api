require('dotenv').config()
module.exports = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      // Ref.: https://github.com/brianc/node-postgres/issues/2009
      rejectUnauthorized: false
    },
    keepAlive: true
  },
  ssl: true,
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true
  }
}
