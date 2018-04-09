export default `
input addListItems {
  listId: Int
  taskName:String!
}

type Mutation {
  
  AddupdateTaskBoard(
    taskHead: String!
    listItems: [addListItems]
    isAddMutation: String
  ):TaskBoard
  
  AddNewList(
   taskHead: String!
  ):TaskBoard

}
`;