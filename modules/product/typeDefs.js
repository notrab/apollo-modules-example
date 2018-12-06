const { gql } = require('apollo-server')

const typeDefs = gql`
  extend type Query {
    product(id: ID!): Product
    products: [Product]
  }

  extend type Mutation {
    createProduct(name: String!, price: Int!): Product
    updateProduct(id: ID!, name: String, price: Int): Product
    deleteProduct(id: ID!): Product
  }

  type Product {
    id: ID!
    name: String!
    price: Int!
  }
`

module.exports = typeDefs
