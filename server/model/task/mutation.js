export default `
input addListItems {
  id: Int
  taskName:String!
}
type Mutation {
  AddupdateTaskBoard(
    taskHead: String!
    listItems:[addListItems]
  ):TaskBoard
}
`;