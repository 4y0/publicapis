"use strict";
module.exports = {
    "local": {
      "dialect": "sqlite",
      "storage": "./db.local.sqlite"
    }, 
    "development": {
      "username": process.env.DEVUN || "123",
      "password": process.env.DEVPW || "mAsterpas-.",
      "database": process.env.DEVDB || "SOMEPW",
      "host": process.env.DEVHOST || "SOMEHOST",
      "dialect": "mysql"
    },
    "test": {
      "username": process.env.TESTUN || "pwc-user2",
      "password": process.env.TESTPW || "LYmujLYxEMBpHdEW",
      "database": process.env.TESTDB || "citidev",
      "host": process.env.TESTHOST || "127.0.0.1",
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
