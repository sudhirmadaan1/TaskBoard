export const addNewTaskHelper = (list, newVal, idx) => {
  const newId = Math.round(Math.random() * 2000); 
  return {
    idx:idx,
    newAddedId: newId,
    newValues: {
      id:list.id,
      taskHead:list.taskHead,
      listItems:[
        ...list.listItems,
        {
          id:newId,
          taskName:newVal
        }
      ]
    }
  }
}