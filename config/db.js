"use strict";
module.exports = {
    "local": {
      "dialect": "sqlite",
      "storage": "./db.local.sqlite"
    }, 
    "development": {
      "username": process.env.DEVUN,
      "password": process.env.DEVPW,
      "database": process.env.DEVDB,
      "host": process.env.DEVHOST,
      "dialect": "mysql"
    },
    "test": {
      "username": process.env.TESTUN,
      "password": process.env.TESTPW,
      "database": process.env.TESTDB,
      "host": process.env.TESTHOST,
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.PRODUN || "32ABC",
      "password": process.env.PRODPW || "LOMIEXH293098",
      "database": process.env.PRODDB || "citi",
      "host": process.env.PRODHOST || "127.0.0.1",
      "dialect": "mysql"
    },
    "logging":true

}
