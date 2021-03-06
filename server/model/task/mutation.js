export default `
input addListItems {
  listId: String
  taskName:String!
}

type Mutation {
  
  AddupdateTaskBoard(
    taskHead: String!
    listItems: [addListItems]
    isAddMutation: String
  ):TaskBoard
  
  AddNewList(
   userId: String!
   taskHead: String!
  ):TaskBoard

  ChangePositionList(
    dragName:String!
    dragListIndex: Int!
    dropList: String!
    listName: String!
  ):TaskBoard

}
`;