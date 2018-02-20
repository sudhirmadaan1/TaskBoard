export default `
input addListItems {
  id: Int
  taskName:String!
}
input listItem {
  id:Int
  taskHead: String!
}
type Mutation {
  AddupdateTaskBoard(
    taskHead: String!
    listItems: [addListItems]
    isAddMutation: String
  ):TaskBoard
  AddNewList(
    id:Int
    taskHead: String!
  ):TaskBoard
}
`;