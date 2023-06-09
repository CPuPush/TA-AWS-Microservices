require('dotenv').config();
module.exports = {
  "development": {
    "username": `${process.env.DB_USERNAME}`,
    "password": `${process.env.DB_PASSWORD}`,
    "database": `${process.env.DB_NAME}`,
    "port": `${process.env.DB_PORT}`,
    "host": `${process.env.DB_HOST}`,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": `${process.env.DB_USERNAME_PRO}`,
    "password": `${process.env.DB_PASSWORD_PRO}`,
    "database": `${process.env.DB_NAME_PRO}`,
    "port": `${process.env.DB_PORT_PRO}`,
    "host": `${process.env.DB_HOST_PRO}`,
    "dialect": "postgres"
  }
}
