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
exports.InventoryCountingsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var InventoryCountings_1 = require("./InventoryCountings");
/**
 * Request builder class for operations supported on the [[InventoryCountings]] entity.
 */
var InventoryCountingsRequestBuilder = /** @class */ (function (_super) {
    __extends(InventoryCountingsRequestBuilder, _super);
    function InventoryCountingsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InventoryCountings` entity based on its keys.
     * @param documentEntry Key property. See [[InventoryCountings.documentEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryCountings` entity based on its keys.
     */
    InventoryCountingsRequestBuilder.prototype.getByKey = function (documentEntry) {
        return new core_1.GetByKeyRequestBuilderV4(InventoryCountings_1.InventoryCountings, { DocumentEntry: documentEntry });
    };
    /**
     * Returns a request builder for querying all `InventoryCountings` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryCountings` entities.
     */
    InventoryCountingsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(InventoryCountings_1.InventoryCountings);
    };
    /**
     * Returns a request builder for creating a `InventoryCountings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryCountings`.
     */
    InventoryCountingsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(InventoryCountings_1.InventoryCountings, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InventoryCountings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryCountings`.
     */
    InventoryCountingsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(InventoryCountings_1.InventoryCountings, entity);
    };
    InventoryCountingsRequestBuilder.prototype.delete = function (documentEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(InventoryCountings_1.InventoryCountings, documentEntryOrEntity instanceof InventoryCountings_1.InventoryCountings ? documentEntryOrEntity : { DocumentEntry: documentEntryOrEntity });
    };
    return InventoryCountingsRequestBuilder;
}(core_1.RequestBuilder));
exports.InventoryCountingsRequestBuilder = InventoryCountingsRequestBuilder;
//# sourceMappingURL=InventoryCountingsRequestBuilder.js.map