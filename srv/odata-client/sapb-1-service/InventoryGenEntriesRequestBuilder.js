"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryGenEntriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
/**
 * Request builder class for operations supported on the [[InventoryGenEntries]] entity.
 */
var InventoryGenEntriesRequestBuilder = /** @class */ (function (_super) {
    __extends(InventoryGenEntriesRequestBuilder, _super);
    function InventoryGenEntriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InventoryGenEntries` entity based on its keys.
     * @param docEntry Key property. See [[InventoryGenEntries.docEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryGenEntries` entity based on its keys.
     */
    InventoryGenEntriesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(InventoryGenEntries_1.InventoryGenEntries, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `InventoryGenEntries` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryGenEntries` entities.
     */
    InventoryGenEntriesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(InventoryGenEntries_1.InventoryGenEntries);
    };
    /**
     * Returns a request builder for creating a `InventoryGenEntries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryGenEntries`.
     */
    InventoryGenEntriesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(InventoryGenEntries_1.InventoryGenEntries, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InventoryGenEntries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryGenEntries`.
     */
    InventoryGenEntriesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(InventoryGenEntries_1.InventoryGenEntries, entity);
    };
    InventoryGenEntriesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(InventoryGenEntries_1.InventoryGenEntries, docEntryOrEntity instanceof InventoryGenEntries_1.InventoryGenEntries ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return InventoryGenEntriesRequestBuilder;
}(core_1.RequestBuilder));
exports.InventoryGenEntriesRequestBuilder = InventoryGenEntriesRequestBuilder;
//# sourceMappingURL=InventoryGenEntriesRequestBuilder.js.map