const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const {connectMongo} = require("./utils/ConnectMongoose");
const schema = require("./schema/schema");
const cors = require("cors");
const app = express();

const port = 8080;

app.use(cors());
app.use("/graphql", graphqlHTTP({schema, graphiql: true}));

const onStart = async () => {
    try {
        await connectMongo();
        console.log("Database is running");
        app.listen(port, () => {
            console.log(`Server listening on port: ${port}`);
        });
    } catch (err) {
        console.error("Served launch failed: ", err.message);
    }
};

onStart();
