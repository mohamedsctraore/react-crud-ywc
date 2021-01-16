module.exports = {
  HOST: "us-cdbr-east-03.cleardb.com",
  USER: "b65a2c3ef67350",
  PASSWORD: "ca67bb56",
  DB: "heroku_5fe58d5c6486270",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
