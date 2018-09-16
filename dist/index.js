"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var post_1 = require("./post");
var everything_1 = require("./everything");
// first create a connection
var options = {
    "database": "tmp/db.sqlite3",
    "type": "sqlite",
    "synchronize": true,
    "dropSchema": true,
    "logging": false,
    entities: [post_1.Post],
    subscribers: [everything_1.EverythingSubscriber]
};
typeorm_1.createConnection(options).then(function (connection) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var p1, repo;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                p1 = new post_1.Post();
                return [4 /*yield*/, connection.getRepository(post_1.Post)];
            case 1:
                repo = _a.sent();
                return [4 /*yield*/, repo.save(p1)];
            case 2:
                _a.sent();
                return [4 /*yield*/, repo.findOne(1)];
            case 3:
                p1 = _a.sent();
                p1.title = 'asd';
                return [4 /*yield*/, repo.update(1, p1)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }, function (error) { return console.log("Cannot connect: ", error.stack ? error.stack : error); });
//# sourceMappingURL=index.js.map