const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    employees: [Employee]
  }
  type Employee {
    id: String!
    firstName: String
    lastName: String
    location : String
    tasks: [Task]
  }

  type Task {
    id : ID!
    description: String
    name: String
    completed: Boolean
  }

  input UpdateEmployeeInput {
    id: ID
    firstName: String!
    lastName: String!
    location: String
    tasks: [TaskInput]
  }

  input AddEmployeeInput {
    firstName: String!
    lastName: String!
    location: String
    tasks : [TaskInput]
  }

  input TaskInput {
    id: ID
    description: String
    name: String
    completed: Boolean
  }

  type Mutation {
    updateEmployee( id: ID!, employee: UpdateEmployeeInput! ) : AddUpdateEmployeeMutationResponse
    addEmployee(employee: AddEmployeeInput!) : AddUpdateEmployeeMutationResponse
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
