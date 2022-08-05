require("dotenv").config();

const { ApolloServerPluginLandingPageDisabled } = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-express");
const compression = require("compression");
const express = require("express");
const {
  typeDefs: scalarsTypeDefs,
  resolvers: scalarsResolvers,
} = require("graphql-scalars");
const helmet = require("helmet");

const { graphQlPath, port } = require("./config/application-config");

const resolvers = require("./resolvers/graphql-resolver");

const typeDefs = require("./schemas");

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs: [typeDefs.definitions, ...scalarsTypeDefs],
    resolvers: { ...resolvers, ...scalarsResolvers },
    plugins: [ApolloServerPluginLandingPageDisabled],
    introspection: process.env.DEPLOYMENT_ENV !== "prd",
    cache: null,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: graphQlPath });
  app.listen(port, () => {
    console.info(`Express server listening on the port ${port}`);
  });
};

startServer();

module.exports = app;
