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
exports.InventoryGenExitsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var InventoryGenExits_1 = require("./InventoryGenExits");
/**
 * Request builder class for operations supported on the [[InventoryGenExits]] entity.
 */
var InventoryGenExitsRequestBuilder = /** @class */ (function (_super) {
    __extends(InventoryGenExitsRequestBuilder, _super);
    function InventoryGenExitsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InventoryGenExits` entity based on its keys.
     * @param docEntry Key property. See [[InventoryGenExits.docEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryGenExits` entity based on its keys.
     */
    InventoryGenExitsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(InventoryGenExits_1.InventoryGenExits, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `InventoryGenExits` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryGenExits` entities.
     */
    InventoryGenExitsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(InventoryGenExits_1.InventoryGenExits);
    };
    /**
     * Returns a request builder for creating a `InventoryGenExits` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryGenExits`.
     */
    InventoryGenExitsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(InventoryGenExits_1.InventoryGenExits, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InventoryGenExits`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryGenExits`.
     */
    InventoryGenExitsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(InventoryGenExits_1.InventoryGenExits, entity);
    };
    InventoryGenExitsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(InventoryGenExits_1.InventoryGenExits, docEntryOrEntity instanceof InventoryGenExits_1.InventoryGenExits ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return InventoryGenExitsRequestBuilder;
}(v4_1.RequestBuilder));
exports.InventoryGenExitsRequestBuilder = InventoryGenExitsRequestBuilder;
//# sourceMappingURL=InventoryGenExitsRequestBuilder.js.map