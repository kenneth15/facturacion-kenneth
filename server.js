var express = require('express');
var graphqlHTTP = require('express-graphql');
var middleware = require('./src/middleware')
var schema = require('./asset/schema')
var root = require('./src')


var app = express();
app.use(middleware);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({"clave": "valor", "clave1": {"clave1": "valor"}});
});

app.get('/secundario', function (req, res) {
  res.json({"clave": "valor de la clave dentro de /secundario"});
});


app.listen(3000, function () {
  console.log('Example app listening on post 300!');
});*/