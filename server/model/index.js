import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import boardSchema from './task/index';

const type = [
  boardSchema.typeDefs
];

const resolvers = [
  boardSchema.resolvers.Query
]

const RootQuery = mergeTypes(type);
const RootResolvers = mergeResolvers(resolvers);

export default makeExecutableSchema({
  typeDefs:[RootQuery],
  resolvers:RootResolvers
});
