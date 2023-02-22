import { ArgumentNode } from 'graphql';
import { employee } from '../models/employeeModel';
import { user } from '../models/users';

export const resolvers = {
  Query: {
    getAllEmployees: async () => {
      return await employee.find();
    },
    getEmployee: async (_: any, { id }: any) => {
      return await employee.findById(id);
    },
  },

  Mutation: {
    signUp: (args: {input: userDetails}): user => {
      const {id, username, password} = args
    }
  }
};