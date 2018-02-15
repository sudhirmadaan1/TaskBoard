export default `
type listItems {
  id: Int
  taskName:String!
}
type TaskBoard {
  id: Int
  taskHead: String!
  listItems:[listItems]
}
`