import TaskBoard from './type';
import Query from './query';
import queryResolver from './query.resolver'

const TaskBoardQuery = `
  ${TaskBoard}
  ${Query}
`;

export default {
  typeDefs: TaskBoardQuery,
  resolvers: {
    Query:queryResolver
  }
}