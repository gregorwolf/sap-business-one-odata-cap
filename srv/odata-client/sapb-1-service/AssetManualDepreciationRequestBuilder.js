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
exports.AssetManualDepreciationRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AssetManualDepreciation_1 = require("./AssetManualDepreciation");
/**
 * Request builder class for operations supported on the [[AssetManualDepreciation]] entity.
 */
var AssetManualDepreciationRequestBuilder = /** @class */ (function (_super) {
    __extends(AssetManualDepreciationRequestBuilder, _super);
    function AssetManualDepreciationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AssetManualDepreciation` entity based on its keys.
     * @param docEntry Key property. See [[AssetManualDepreciation.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetManualDepreciation` entity based on its keys.
     */
    AssetManualDepreciationRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(AssetManualDepreciation_1.AssetManualDepreciation, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `AssetManualDepreciation` entities.
     * @returns A request builder for creating requests to retrieve all `AssetManualDepreciation` entities.
     */
    AssetManualDepreciationRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AssetManualDepreciation_1.AssetManualDepreciation);
    };
    /**
     * Returns a request builder for creating a `AssetManualDepreciation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetManualDepreciation`.
     */
    AssetManualDepreciationRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AssetManualDepreciation_1.AssetManualDepreciation, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssetManualDepreciation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetManualDepreciation`.
     */
    AssetManualDepreciationRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AssetManualDepreciation_1.AssetManualDepreciation, entity);
    };
    AssetManualDepreciationRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(AssetManualDepreciation_1.AssetManualDepreciation, docEntryOrEntity instanceof AssetManualDepreciation_1.AssetManualDepreciation ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return AssetManualDepreciationRequestBuilder;
}(v4_1.RequestBuilder));
exports.AssetManualDepreciationRequestBuilder = AssetManualDepreciationRequestBuilder;
//# sourceMappingURL=AssetManualDepreciationRequestBuilder.js.map