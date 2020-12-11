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
exports.StockTransfersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var StockTransfers_1 = require("./StockTransfers");
/**
 * Request builder class for operations supported on the [[StockTransfers]] entity.
 */
var StockTransfersRequestBuilder = /** @class */ (function (_super) {
    __extends(StockTransfersRequestBuilder, _super);
    function StockTransfersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `StockTransfers` entity based on its keys.
     * @param docEntry Key property. See [[StockTransfers.docEntry]].
     * @returns A request builder for creating requests to retrieve one `StockTransfers` entity based on its keys.
     */
    StockTransfersRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(StockTransfers_1.StockTransfers, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `StockTransfers` entities.
     * @returns A request builder for creating requests to retrieve all `StockTransfers` entities.
     */
    StockTransfersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(StockTransfers_1.StockTransfers);
    };
    /**
     * Returns a request builder for creating a `StockTransfers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `StockTransfers`.
     */
    StockTransfersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(StockTransfers_1.StockTransfers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `StockTransfers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `StockTransfers`.
     */
    StockTransfersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(StockTransfers_1.StockTransfers, entity);
    };
    StockTransfersRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(StockTransfers_1.StockTransfers, docEntryOrEntity instanceof StockTransfers_1.StockTransfers ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return StockTransfersRequestBuilder;
}(core_1.RequestBuilder));
exports.StockTransfersRequestBuilder = StockTransfersRequestBuilder;
//# sourceMappingURL=StockTransfersRequestBuilder.js.map