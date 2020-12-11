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
exports.InventoryGenExitsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(InventoryGenExits_1.InventoryGenExits, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `InventoryGenExits` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryGenExits` entities.
     */
    InventoryGenExitsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(InventoryGenExits_1.InventoryGenExits);
    };
    /**
     * Returns a request builder for creating a `InventoryGenExits` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryGenExits`.
     */
    InventoryGenExitsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(InventoryGenExits_1.InventoryGenExits, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InventoryGenExits`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryGenExits`.
     */
    InventoryGenExitsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(InventoryGenExits_1.InventoryGenExits, entity);
    };
    InventoryGenExitsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(InventoryGenExits_1.InventoryGenExits, docEntryOrEntity instanceof InventoryGenExits_1.InventoryGenExits ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return InventoryGenExitsRequestBuilder;
}(core_1.RequestBuilder));
exports.InventoryGenExitsRequestBuilder = InventoryGenExitsRequestBuilder;
//# sourceMappingURL=InventoryGenExitsRequestBuilder.js.map