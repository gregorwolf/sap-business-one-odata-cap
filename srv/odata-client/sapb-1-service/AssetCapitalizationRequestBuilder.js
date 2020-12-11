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
exports.AssetCapitalizationRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AssetCapitalization_1 = require("./AssetCapitalization");
/**
 * Request builder class for operations supported on the [[AssetCapitalization]] entity.
 */
var AssetCapitalizationRequestBuilder = /** @class */ (function (_super) {
    __extends(AssetCapitalizationRequestBuilder, _super);
    function AssetCapitalizationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AssetCapitalization` entity based on its keys.
     * @param docEntry Key property. See [[AssetCapitalization.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetCapitalization` entity based on its keys.
     */
    AssetCapitalizationRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(AssetCapitalization_1.AssetCapitalization, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `AssetCapitalization` entities.
     * @returns A request builder for creating requests to retrieve all `AssetCapitalization` entities.
     */
    AssetCapitalizationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(AssetCapitalization_1.AssetCapitalization);
    };
    /**
     * Returns a request builder for creating a `AssetCapitalization` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetCapitalization`.
     */
    AssetCapitalizationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(AssetCapitalization_1.AssetCapitalization, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssetCapitalization`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetCapitalization`.
     */
    AssetCapitalizationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(AssetCapitalization_1.AssetCapitalization, entity);
    };
    AssetCapitalizationRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(AssetCapitalization_1.AssetCapitalization, docEntryOrEntity instanceof AssetCapitalization_1.AssetCapitalization ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return AssetCapitalizationRequestBuilder;
}(core_1.RequestBuilder));
exports.AssetCapitalizationRequestBuilder = AssetCapitalizationRequestBuilder;
//# sourceMappingURL=AssetCapitalizationRequestBuilder.js.map