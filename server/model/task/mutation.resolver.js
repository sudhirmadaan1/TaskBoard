import config from '../../config';

export default {
  Mutation: {
    AddupdateTaskBoard: (_, args) => {
      const listIdx = config.toDoList.findIndex(list => list.taskHead === args.taskHead);
      if(args.isAddMutation === 'ADD_VALUE') {
        config.toDoList[listIdx].listItems.push(args.listItems[0]);
      } else {
        const listIdx = config.toDoList.findIndex(list => list.taskHead === args.taskHead);
        const lstItmIdx = config.toDoList[listIdx].listItems.findIndex(listItm => listItm.id === args.listItems[0].id)
        config.toDoList[listIdx].listItems[lstItmIdx]['taskName'] = args.listItems[0].taskName;
      }
      return args;
    },
    AddNewList: (_, args) => {
      args['listItems'] = [];
      config.toDoList.push(args);
      return args;
    }
  }
}