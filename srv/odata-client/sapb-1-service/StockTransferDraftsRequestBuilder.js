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
exports.StockTransferDraftsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var StockTransferDrafts_1 = require("./StockTransferDrafts");
/**
 * Request builder class for operations supported on the [[StockTransferDrafts]] entity.
 */
var StockTransferDraftsRequestBuilder = /** @class */ (function (_super) {
    __extends(StockTransferDraftsRequestBuilder, _super);
    function StockTransferDraftsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `StockTransferDrafts` entity based on its keys.
     * @param docEntry Key property. See [[StockTransferDrafts.docEntry]].
     * @returns A request builder for creating requests to retrieve one `StockTransferDrafts` entity based on its keys.
     */
    StockTransferDraftsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(StockTransferDrafts_1.StockTransferDrafts, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `StockTransferDrafts` entities.
     * @returns A request builder for creating requests to retrieve all `StockTransferDrafts` entities.
     */
    StockTransferDraftsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(StockTransferDrafts_1.StockTransferDrafts);
    };
    /**
     * Returns a request builder for creating a `StockTransferDrafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `StockTransferDrafts`.
     */
    StockTransferDraftsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(StockTransferDrafts_1.StockTransferDrafts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `StockTransferDrafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `StockTransferDrafts`.
     */
    StockTransferDraftsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(StockTransferDrafts_1.StockTransferDrafts, entity);
    };
    StockTransferDraftsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(StockTransferDrafts_1.StockTransferDrafts, docEntryOrEntity instanceof StockTransferDrafts_1.StockTransferDrafts ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return StockTransferDraftsRequestBuilder;
}(v4_1.RequestBuilder));
exports.StockTransferDraftsRequestBuilder = StockTransferDraftsRequestBuilder;
//# sourceMappingURL=StockTransferDraftsRequestBuilder.js.map