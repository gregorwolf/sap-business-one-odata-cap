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
exports.GoodsReturnRequestRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
/**
 * Request builder class for operations supported on the [[GoodsReturnRequest]] entity.
 */
var GoodsReturnRequestRequestBuilder = /** @class */ (function (_super) {
    __extends(GoodsReturnRequestRequestBuilder, _super);
    function GoodsReturnRequestRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GoodsReturnRequest` entity based on its keys.
     * @param docEntry Key property. See [[GoodsReturnRequest.docEntry]].
     * @returns A request builder for creating requests to retrieve one `GoodsReturnRequest` entity based on its keys.
     */
    GoodsReturnRequestRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(GoodsReturnRequest_1.GoodsReturnRequest, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `GoodsReturnRequest` entities.
     * @returns A request builder for creating requests to retrieve all `GoodsReturnRequest` entities.
     */
    GoodsReturnRequestRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(GoodsReturnRequest_1.GoodsReturnRequest);
    };
    /**
     * Returns a request builder for creating a `GoodsReturnRequest` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GoodsReturnRequest`.
     */
    GoodsReturnRequestRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(GoodsReturnRequest_1.GoodsReturnRequest, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `GoodsReturnRequest`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GoodsReturnRequest`.
     */
    GoodsReturnRequestRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(GoodsReturnRequest_1.GoodsReturnRequest, entity);
    };
    GoodsReturnRequestRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(GoodsReturnRequest_1.GoodsReturnRequest, docEntryOrEntity instanceof GoodsReturnRequest_1.GoodsReturnRequest ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return GoodsReturnRequestRequestBuilder;
}(v4_1.RequestBuilder));
exports.GoodsReturnRequestRequestBuilder = GoodsReturnRequestRequestBuilder;
//# sourceMappingURL=GoodsReturnRequestRequestBuilder.js.map