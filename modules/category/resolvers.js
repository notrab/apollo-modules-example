const resolvers = {
  Query: {
    category(_, args) {
      return {
        id: args.id,
        name: 'Homeware',
        products: [
          {
            id: Math.round(Math.random() * 1000000),
            name: 'Lamp',
            price: 10000
          }
        ]
      }
    },

    categories() {
      return [
        {
          id: Math.round(Math.random() * 1000000),
          name: 'Homeware',
          products: [
            {
              id: Math.round(Math.random() * 1000000),
              name: 'Lamp',
              price: 10000
            },
            {
              id: Math.round(Math.random() * 1000000),
              name: 'Sofa',
              price: 50000
            }
          ]
        },
        {
          id: Math.round(Math.random() * 1000000),
          name: 'Kitchen',
          products: [
            {
              id: Math.round(Math.random() * 1000000),
              name: 'Toaster',
              price: 50000
            }
          ]
        }
      ]
    }
  },

  Mutation: {
    createCategory(_, args) {
      return {
        id: Math.round(Math.random() * 1000000),
        name: args.name,
        products: [
          {
            id: Math.round(Math.random() * 1000000),
            name: 'Lamp',
            price: 10000
          },
          {
            id: Math.round(Math.random() * 1000000),
            name: 'Sofa',
            price: 50000
          }
        ]
      }
    },

    updateCategory(_, args) {
      return {
        id: args.id,
        name: args.name || 'Homeware',
        products: [
          {
            id: Math.round(Math.random() * 1000000),
            name: 'Lamp',
            price: 10000
          },
          {
            id: Math.round(Math.random() * 1000000),
            name: 'Sofa',
            price: 50000
          }
        ]
      }
    },

    deleteCategory(_, { id }) {
      return {
        id,
        name: 'Deleted Category',
        products: [
          {
            id: Math.round(Math.random() * 1000000),
            name: 'Lamp',
            price: 10000
          },
          {
            id: Math.round(Math.random() * 1000000),
            name: 'Sofa',
            price: 50000
          }
        ]
      }
    }
  },

  Product: {
    category() {
      return {
        id: Math.round(Math.random() * 1000000),
        name: 'Homeware'
      }
    }
  }
}

module.exports = resolvers
