const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`GraphQL server ready at ${url}`);
});
