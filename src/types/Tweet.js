"use strict";
exports.__esModule = true;
exports.Tweet = void 0;
var schema_1 = require("@nexus/schema");
exports.Tweet = schema_1.objectType({
    name: "Tweet",
    definition: function (t) {
        t.model.id();
        t.model.content();
        t.model.author();
        t.model.createdAt();
        t.model.likes();
        t.model.comments();
    }
});
