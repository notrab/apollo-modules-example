const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({
  modules: [require('./modules/product'), require('./modules/category')]
})

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`))
