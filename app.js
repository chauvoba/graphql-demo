const PORT = 3000;
const express = require("express");
const schema = require("./Schema/index");
const { graphqlHTTP } = require("express-graphql");

const app = express();
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});