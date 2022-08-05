const applicationConfig = {
  graphQlPath: "/api/graphql",
  port: process.env.PORT || 3001,
  mongodbUrl: process.env.MONGODB_URL || "mongodb://localhost:27017",
  databaseName: process.env.DATABASE_NAME || "topcoder",
};

module.exports = applicationConfig;
