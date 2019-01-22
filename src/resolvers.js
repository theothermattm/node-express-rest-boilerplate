const replacemeService = require('./services/replacemeService')
module.exports = {
  Query: {
    employees: async _ => {
      return replacemeService.getModelItems()
    }
  },
  Mutation: {
    updateEmployee: async (_, { id, employee }) => {
      employee.id = id
      let returnedEmployee = replacemeService.updateModelItem(employee)
      return { code: 200, success: true, employee: returnedEmployee }
    },
    addEmployee: async (_, { employee }) => {
      let returnedEmployee = replacemeService.addModelItem(employee)
      return { code: 200, success: true, employee: returnedEmployee }
    }
  }
}
