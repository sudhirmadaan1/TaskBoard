let config = {
  PORT: 4000,
  MONGO: {
    PROTOCOL: "mongodb://",
    DOMAIN: "localhost",
    PORT: ":27017",
    BUCKET: "/gameBucket"
  },
  toDoList: [{
    "id":1,
    "taskHead": "Backlog",
    "listItems": [{
      "id":1,
      "taskName": "Stack Route",
    },
    {
      "id":2,
      "taskName": "Learn Redux",
    }]
  },{
    "id":2,
    "taskHead": "Doing",
    "listItems": [{
      "id":1,
      "taskName": "Learning React",
    },
    {
      "id":2,
      "taskName": "Learn Graphql",
    }]
  },
  {
    "id":3,
    "taskHead": "Done",
    "listItems": [{
      "id":1,
      "taskName": "Redux Training",
    },
    {
      "id":2,
      "taskName": "Node Training",
    }]
  }]
}

module.exports = config;