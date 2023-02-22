import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type employee {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: Float!
  }

  type user {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getAllEmployees: [employee]
    getEmployee(id: ID): employee
  }

  type Mutation{
    signUp(username: String, email: String, password: String): user
  }
`;