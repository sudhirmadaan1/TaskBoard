

## Prerequisite

- App is created using CreateReactApp. To start with; use `npm install create-react-app`. 
- Concurrent module is being used for server start. `npm install -g concurrently`
- System should have `Mongodb`
- `Node` 7+ will work with this app

How to set DB path in Mongodb
`mongod --dbpath /usr/local/var/mongodb/`

# KanBan Board

1.) `npm install || yarn install`

2.) `Again yarn install in client > myapp`

3.) On root, run `yarn run dev`. It runs concurrently client and backend node server. 

4.) User can Add a list by using `Add a list...` button. User can add multiple task by using `Add a list button`

5.) User can `Add new task` and `Edit` by using Dialog box.

6.) User can `Drag` and `Drop` task within their added list.


#Tech Stack being used
1.) React
2.) Apollo Client
3.) Node.js
4.) Graphql
5.) MongoDb
