"use strict";
exports.__esModule = true;
exports.User = void 0;
var schema_1 = require("@nexus/schema");
exports.User = schema_1.objectType({
    name: "User",
    definition: function (t) {
        t.model.id();
        t.model.name();
        t.model.email();
        t.model.tweets({ pagination: false });
        t.model.Profile();
        t.model.likedTweet();
        t.model.comments();
        t.model.Following();
    }
});
