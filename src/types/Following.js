"use strict";
exports.__esModule = true;
exports.Following = void 0;
var schema_1 = require("@nexus/schema");
exports.Following = schema_1.objectType({
    name: "Following",
    definition: function (t) {
        t.model.id();
        t.model.User();
        t.model.name();
        t.model.avatar();
        t.model.followId();
    }
});
