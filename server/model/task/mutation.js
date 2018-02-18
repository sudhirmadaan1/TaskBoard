export default `
input addListItems {
  id: Int
  taskName:String!
}
type Mutation {
  addTask(
    id: Int
    taskHead: String!
    listItems:[addListItems]
  ):TaskBoard
}
`;