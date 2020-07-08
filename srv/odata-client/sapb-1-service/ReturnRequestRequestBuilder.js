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
exports.ReturnRequestRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ReturnRequest_1 = require("./ReturnRequest");
/**
 * Request builder class for operations supported on the [[ReturnRequest]] entity.
 */
var ReturnRequestRequestBuilder = /** @class */ (function (_super) {
    __extends(ReturnRequestRequestBuilder, _super);
    function ReturnRequestRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ReturnRequest` entity based on its keys.
     * @param docEntry Key property. See [[ReturnRequest.docEntry]].
     * @returns A request builder for creating requests to retrieve one `ReturnRequest` entity based on its keys.
     */
    ReturnRequestRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(ReturnRequest_1.ReturnRequest, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `ReturnRequest` entities.
     * @returns A request builder for creating requests to retrieve all `ReturnRequest` entities.
     */
    ReturnRequestRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ReturnRequest_1.ReturnRequest);
    };
    /**
     * Returns a request builder for creating a `ReturnRequest` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ReturnRequest`.
     */
    ReturnRequestRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ReturnRequest_1.ReturnRequest, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ReturnRequest`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ReturnRequest`.
     */
    ReturnRequestRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ReturnRequest_1.ReturnRequest, entity);
    };
    ReturnRequestRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(ReturnRequest_1.ReturnRequest, docEntryOrEntity instanceof ReturnRequest_1.ReturnRequest ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return ReturnRequestRequestBuilder;
}(v4_1.RequestBuilder));
exports.ReturnRequestRequestBuilder = ReturnRequestRequestBuilder;
//# sourceMappingURL=ReturnRequestRequestBuilder.js.map