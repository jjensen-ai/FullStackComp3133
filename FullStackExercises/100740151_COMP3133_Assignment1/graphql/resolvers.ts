import { ArgumentNode, GraphQLError } from 'graphql';
import { employee } from '../models/employeeModel';
import { user } from '../models/users';

export const resolvers = {
  Query: {
    getAllEmployees: async () => {
      return await employee.find();
    },
    getEmployee: async ({ id }: any) => {
      return await employee.findById(id);
    },
  },

  Mutation: {
    signUp: async (parent: any, args: any | undefined) => {
      const { username, email, password } = args;

      if(!username){
        throw new GraphQLError('Please enter a username!')
      }
      else if(!email){
        throw new GraphQLError('Please enter an email')
      }
      else if(!password){
        throw new GraphQLError('Please enter a password')
      }
      
      const newUser = new user({ username, email, password });
      await newUser.save();
      return newUser;
    },
  },
};
