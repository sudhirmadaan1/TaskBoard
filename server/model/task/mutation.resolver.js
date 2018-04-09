import config from '../../config';
import KanBanBoard from './schema';
import { v4 } from 'uuid';

export default {
  Mutation: {
    AddupdateTaskBoard: (_, args) => {
      KanBanBoard.findOne({taskHead: args.taskHead})
      .then(task => {
        if(args.isAddMutation === 'ADD_VALUE') {
          args.listItems[0]['listId'] = v4();
          task.listItems.push(args.listItems[0]);
        }
        task.save()
      })
      .catch(err => {throw new Error(err)})
      .finally(()=> {
        KanBanBoard.find({}, (err, data) => {
          console.log('dataaaaaaaaaaaa', data)
          return data;
        });
      })
      
      // KanBanBoard.find({}, (err, data) => {
      //  const listIdx = data.findIndex(list => list.taskHead === args.taskHead);
        // if(args.isAddMutation === 'ADD_VALUE') {
        //   args.listItems[0]['listId'] = v4();
        //   console.log(args);
        //   // data[0]['listItems'].push(args.listItems[0]);
        // } else {
        //     console.log('eeeeeeeeeeeeeeeeeee');
        //     const lstItmIdx = data[0]['taskHead'].listItems.findIndex(listItm => listItm.id === args.listItems[0].id)
        //     config.toDoList[listIdx].listItems[lstItmIdx]['taskName'] = args.listItems[0].taskName;
        //   }
          // return data;
      // });
      // const listIdx = config.toDoList.findIndex(list => list.taskHead === args.taskHead);
      // if(args.isAddMutation === 'ADD_VALUE') {
      //   config.toDoList[listIdx].listItems.push(args.listItems[0]);
      // } else {
      //   const listIdx = config.toDoList.findIndex(list => list.taskHead === args.taskHead);
      //   const lstItmIdx = config.toDoList[listIdx].listItems.findIndex(listItm => listItm.id === args.listItems[0].id)
      //   config.toDoList[listIdx].listItems[lstItmIdx]['taskName'] = args.listItems[0].taskName;
      // }
      // return args;
    },
    AddNewList: (_, args) => {
      return KanBanBoard.create({
          "taskId":v4(),
          "taskHead": args.taskHead
      }, (err,data) => {
        if(err) {
          console.log(err);
        }
        return data;
      });
    }
  }
}