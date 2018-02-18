import config from '../../config';

export default {
  Mutation: {
    AddupdateTaskBoard: (_, args) => {
      console.log(args);
      const listIdx = config.toDoList.findIndex(list => list.taskHead === args.taskHead);
      const lstItmIdx = config.toDoList[listIdx].listItems.findIndex(listItm => listItm.id === args.listItems[0].id)
      config.toDoList[listIdx].listItems[lstItmIdx]['taskName'] = args.listItems[0].taskName;
      
      return args;
    }
  }
}