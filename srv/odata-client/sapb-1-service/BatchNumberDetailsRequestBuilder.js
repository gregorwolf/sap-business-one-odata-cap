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
exports.BatchNumberDetailsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BatchNumberDetails_1 = require("./BatchNumberDetails");
/**
 * Request builder class for operations supported on the [[BatchNumberDetails]] entity.
 */
var BatchNumberDetailsRequestBuilder = /** @class */ (function (_super) {
    __extends(BatchNumberDetailsRequestBuilder, _super);
    function BatchNumberDetailsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BatchNumberDetails` entity based on its keys.
     * @param docEntry Key property. See [[BatchNumberDetails.docEntry]].
     * @returns A request builder for creating requests to retrieve one `BatchNumberDetails` entity based on its keys.
     */
    BatchNumberDetailsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(BatchNumberDetails_1.BatchNumberDetails, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `BatchNumberDetails` entities.
     * @returns A request builder for creating requests to retrieve all `BatchNumberDetails` entities.
     */
    BatchNumberDetailsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BatchNumberDetails_1.BatchNumberDetails);
    };
    /**
     * Returns a request builder for creating a `BatchNumberDetails` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BatchNumberDetails`.
     */
    BatchNumberDetailsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BatchNumberDetails_1.BatchNumberDetails, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BatchNumberDetails`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BatchNumberDetails`.
     */
    BatchNumberDetailsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BatchNumberDetails_1.BatchNumberDetails, entity);
    };
    BatchNumberDetailsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(BatchNumberDetails_1.BatchNumberDetails, docEntryOrEntity instanceof BatchNumberDetails_1.BatchNumberDetails ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return BatchNumberDetailsRequestBuilder;
}(v4_1.RequestBuilder));
exports.BatchNumberDetailsRequestBuilder = BatchNumberDetailsRequestBuilder;
//# sourceMappingURL=BatchNumberDetailsRequestBuilder.js.map