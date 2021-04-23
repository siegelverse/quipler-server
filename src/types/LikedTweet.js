"use strict";
exports.__esModule = true;
exports.LikedTweet = void 0;
var schema_1 = require("@nexus/schema");
exports.LikedTweet = schema_1.objectType({
    name: "LikedTweet",
    definition: function (t) {
        t.model.id();
        t.model.tweet();
        t.model.likedAt();
    }
});
