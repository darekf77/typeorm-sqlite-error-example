"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var EverythingSubscriber = /** @class */ (function () {
    function EverythingSubscriber() {
    }
    /**
     * Called before entity insertion.
     */
    EverythingSubscriber.prototype.beforeInsert = function (event) {
        console.log("BEFORE ENTITY INSERTED: ", event.entity);
    };
    /**
     * Called before entity insertion.
     */
    EverythingSubscriber.prototype.beforeUpdate = function (event) {
        console.log("BEFORE ENTITY UPDATED: ", event.entity);
    };
    /**
     * Called before entity insertion.
     */
    EverythingSubscriber.prototype.beforeRemove = function (event) {
        console.log("BEFORE ENTITY WITH ID " + event.entityId + " REMOVED: ", event.entity);
    };
    /**
     * Called after entity insertion.
     */
    EverythingSubscriber.prototype.afterInsert = function (event) {
        console.log("AFTER ENTITY INSERTED: ", event.entity);
    };
    /**
     * Called after entity insertion.
     */
    EverythingSubscriber.prototype.afterUpdate = function (event) {
        console.log("AFTER ENTITY UPDATED: ", event.entity);
    };
    /**
     * Called after entity insertion.
     */
    EverythingSubscriber.prototype.afterRemove = function (event) {
        console.log("AFTER ENTITY WITH ID " + event.entityId + " REMOVED: ", event.entity);
    };
    /**
     * Called after entity is loaded.
     */
    EverythingSubscriber.prototype.afterLoad = function (entity) {
        console.log("AFTER ENTITY LOADED: ", entity);
    };
    EverythingSubscriber = tslib_1.__decorate([
        typeorm_1.EventSubscriber()
    ], EverythingSubscriber);
    return EverythingSubscriber;
}());
exports.EverythingSubscriber = EverythingSubscriber;
//# sourceMappingURL=everything.js.map