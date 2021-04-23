"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var context_1 = require("./context");
var permissions_1 = require("./permissions");
var schema_1 = require("./schema");
new graphql_yoga_1.GraphQLServer({
    schema: schema_1.schema,
    context: context_1.createContext,
    middlewares: [permissions_1.permissions]
}).start(function () { return console.log("\uD83D\uDE80 Server ready at: http://localhost:4000"); });
