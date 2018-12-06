const resolvers = {
  Query: {
    product(_, args) {
      return { id: args.id, name: 'Lamp', price: 10000 }
    },

    products() {
      return [
        { id: Math.round(Math.random() * 1000000), name: 'Lamp', price: 10000 },
        { id: Math.round(Math.random() * 1000000), name: 'Boots', price: 30000 }
      ]
    }
  },

  Mutation: {
    createProduct(_, args) {
      return {
        id: Math.round(Math.random() * 1000000),
        name: args.name,
        price: args.price
      }
    },

    updateProduct(_, args) {
      return {
        id: args.id,
        name: args.name || 'Test product',
        price: args.price || 20000
      }
    },

    deleteProduct(_, { id }) {
      return {
        id,
        name: 'Deleted product',
        price: 40000
      }
    }
  }
}

module.exports = resolvers
