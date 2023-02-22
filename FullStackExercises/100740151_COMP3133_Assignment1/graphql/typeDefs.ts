import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type employee {
    id: ID
    first_name: String
    last_name: String
    email: String
    gender: String
    salary: Float
  }

  type user {
    id: ID
    username: String
    password: String
  }

  type Query {
    getAllEmployees: [employee]
    getEmployee(id: ID): employee
  }

  input UserDetails{
    id: ID
    username: String
    password: String
  }

  type Mutation{
    signUp(post: UserDetails): user
  }
`;