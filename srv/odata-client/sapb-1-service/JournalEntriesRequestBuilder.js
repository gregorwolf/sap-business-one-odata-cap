"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JournalEntriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var JournalEntries_1 = require("./JournalEntries");
/**
 * Request builder class for operations supported on the [[JournalEntries]] entity.
 */
var JournalEntriesRequestBuilder = /** @class */ (function (_super) {
    __extends(JournalEntriesRequestBuilder, _super);
    function JournalEntriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JournalEntries` entity based on its keys.
     * @param jdtNum Key property. See [[JournalEntries.jdtNum]].
     * @returns A request builder for creating requests to retrieve one `JournalEntries` entity based on its keys.
     */
    JournalEntriesRequestBuilder.prototype.getByKey = function (jdtNum) {
        return new v4_1.GetByKeyRequestBuilder(JournalEntries_1.JournalEntries, { JdtNum: jdtNum });
    };
    /**
     * Returns a request builder for querying all `JournalEntries` entities.
     * @returns A request builder for creating requests to retrieve all `JournalEntries` entities.
     */
    JournalEntriesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(JournalEntries_1.JournalEntries);
    };
    /**
     * Returns a request builder for creating a `JournalEntries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JournalEntries`.
     */
    JournalEntriesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(JournalEntries_1.JournalEntries, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JournalEntries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JournalEntries`.
     */
    JournalEntriesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(JournalEntries_1.JournalEntries, entity);
    };
    JournalEntriesRequestBuilder.prototype.delete = function (jdtNumOrEntity) {
        return new v4_1.DeleteRequestBuilder(JournalEntries_1.JournalEntries, jdtNumOrEntity instanceof JournalEntries_1.JournalEntries ? jdtNumOrEntity : { JdtNum: jdtNumOrEntity });
    };
    return JournalEntriesRequestBuilder;
}(v4_1.RequestBuilder));
exports.JournalEntriesRequestBuilder = JournalEntriesRequestBuilder;
//# sourceMappingURL=JournalEntriesRequestBuilder.js.map