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
exports.AssetTransferRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AssetTransfer_1 = require("./AssetTransfer");
/**
 * Request builder class for operations supported on the [[AssetTransfer]] entity.
 */
var AssetTransferRequestBuilder = /** @class */ (function (_super) {
    __extends(AssetTransferRequestBuilder, _super);
    function AssetTransferRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AssetTransfer` entity based on its keys.
     * @param docEntry Key property. See [[AssetTransfer.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetTransfer` entity based on its keys.
     */
    AssetTransferRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(AssetTransfer_1.AssetTransfer, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `AssetTransfer` entities.
     * @returns A request builder for creating requests to retrieve all `AssetTransfer` entities.
     */
    AssetTransferRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(AssetTransfer_1.AssetTransfer);
    };
    /**
     * Returns a request builder for creating a `AssetTransfer` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetTransfer`.
     */
    AssetTransferRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(AssetTransfer_1.AssetTransfer, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssetTransfer`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetTransfer`.
     */
    AssetTransferRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(AssetTransfer_1.AssetTransfer, entity);
    };
    AssetTransferRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(AssetTransfer_1.AssetTransfer, docEntryOrEntity instanceof AssetTransfer_1.AssetTransfer ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return AssetTransferRequestBuilder;
}(core_1.RequestBuilder));
exports.AssetTransferRequestBuilder = AssetTransferRequestBuilder;
//# sourceMappingURL=AssetTransferRequestBuilder.js.map