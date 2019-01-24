const replacemeService = require('./services/replacemeService')
const logging = require('../src/logging')
module.exports = {
  Query: {
    employees: async _ => {

      logging.log('info', 'Getting employees in resolver')
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
