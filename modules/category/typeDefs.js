const { gql } = require('apollo-server')

const typeDefs = gql`
  extend type Query {
    category(id: ID!): Category
    categories: [Category]
  }

  extend type Mutation {
    createCategory(name: String!): Category
    updateCategory(id: ID!, name: String): Category
    deleteCategory(id: ID!): Category
  }

  extend type Product {
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product]
  }
`

module.exports = typeDefs
