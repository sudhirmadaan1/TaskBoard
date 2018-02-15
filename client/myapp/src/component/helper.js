export const addTask = (list, newVal, idx) => {
  return {
    idx:idx,
    newValues: {
      id:list.id,
      taskHead:list.taskHead,
      listItems:[
        ...list.listItems,
        {
          id:3,
          taskName:newVal
        }
      ]
    }
  }
}