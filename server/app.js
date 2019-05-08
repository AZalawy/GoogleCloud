const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');

const app = express();
//app.use(express.static(__dirname));
//app.use('/graphql', graphqlHTTP(() => ({ schema, graphiql: true })));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

/*app.listen(0, function() {
  const port = this.address().port;
  console.log(`Started on http://localhost:${port}/`);
});*/

app.listen(4000, ()=>{console.log("le port de 4000 est à l'écoute");});
