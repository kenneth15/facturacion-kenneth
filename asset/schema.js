var { buildSchema } = require('graphql');

var schema = buildSchema(`
type Query {
  me: User
  hello: String
  user: String
}

type User {
  id: ID
  name: String
}

type Mutation {
  setUser(username: String, password: String): String
}
`);

module.exports= schema