const { MongoClient } = require("mongodb");

const { mongodbUrl, databaseName } = require("../config/application-config");

let db;

const getDb = async () => {
  if (db) {
    return db;
  }
  const client = new MongoClient(mongodbUrl);
  await client.connect();
  db = client.db(databaseName);
  return db;
};

module.exports = { getDb };
