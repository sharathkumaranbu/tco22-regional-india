const getGraphqlData = require("../helpers/get-graphql-data");

const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      return getGraphqlData("users", info, args);
    },
    todos: async (parent, args, context, info) => {
      return getGraphqlData("todos", info, args);
    },
    posts: async (parent, args, context, info) => {
      return getGraphqlData("posts", info, args);
    },
    albums: async (parent, args, context, info) => {
      return getGraphqlData("albums", info, args);
    },
    comments: async (parent, args, context, info) => {
      return getGraphqlData("comments", info, args);
    },
    photos: async (parent, args, context, info) => {
      return getGraphqlData("photos", info, args);
    },
  },
};

module.exports = resolvers;
