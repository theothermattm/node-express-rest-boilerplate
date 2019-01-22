const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    employees: [Employee]
  }
  type Employee {
    id: String!
    firstName: String
    lastName: String
    locaiton: String
    tasks: [Task]
  }

  type Task {
    description: String
    name: String
    completed: Boolean
  }

  input UpdateEmployeeInput {
    firstName: String
    lastName: String
    location: String
    tasks: [TaskInput]
  }

  input AddEmployeeInput {
    firstName: String!
    lastName: String!
    location: String!
  }

  input TaskInput {
    description: String
    name: String
    completed: Boolean
  }

  type Mutation {
    updateEmployee( id: ID!, employee: AddEmployeeInput! ) : AddUpdateEmployeeMutationResponse
    addEmployee(employee: UpdateEmployeeInput!) : AddUpdateEmployeeMutationResponse
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String
  }

  type AddUpdateEmployeeMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String
    employee: Employee
  }
`
module.exports = typeDefs
