"use strict";
exports.__esModule = true;
exports.Query = void 0;
var schema_1 = require("@nexus/schema");
var utils_1 = require("../utils");
exports.Query = schema_1.queryType({
    definition: function (t) {
        t.field("me", {
            type: "User",
            nullable: true,
            resolve: function (parent, args, ctx) {
                var userId = utils_1.getUserId(ctx);
                return ctx.prisma.user.findOne({
                    where: {
                        id: Number(userId)
                    }
                });
            }
        });
        t.list.field("users", {
            type: "User",
            resolve: function (parent, args, ctx) {
                return ctx.prisma.user.findMany();
            }
        });
        t.list.field("tweets", {
            type: "Tweet",
            resolve: function (parent, args, ctx) {
                return ctx.prisma.tweet.findMany();
            }
        });
        t.field("tweet", {
            type: "Tweet",
            nullable: true,
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.tweet.findOne({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
        t.field("user", {
            type: "User",
            nullable: true,
            args: { id: schema_1.intArg() },
            resolve: function (parent, _a, ctx) {
                var id = _a.id;
                return ctx.prisma.user.findOne({
                    where: {
                        id: Number(id)
                    }
                });
            }
        });
    }
});
