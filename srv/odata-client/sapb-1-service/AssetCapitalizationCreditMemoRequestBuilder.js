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
exports.AssetCapitalizationCreditMemoRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AssetCapitalizationCreditMemo_1 = require("./AssetCapitalizationCreditMemo");
/**
 * Request builder class for operations supported on the [[AssetCapitalizationCreditMemo]] entity.
 */
var AssetCapitalizationCreditMemoRequestBuilder = /** @class */ (function (_super) {
    __extends(AssetCapitalizationCreditMemoRequestBuilder, _super);
    function AssetCapitalizationCreditMemoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AssetCapitalizationCreditMemo` entity based on its keys.
     * @param docEntry Key property. See [[AssetCapitalizationCreditMemo.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetCapitalizationCreditMemo` entity based on its keys.
     */
    AssetCapitalizationCreditMemoRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `AssetCapitalizationCreditMemo` entities.
     * @returns A request builder for creating requests to retrieve all `AssetCapitalizationCreditMemo` entities.
     */
    AssetCapitalizationCreditMemoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo);
    };
    /**
     * Returns a request builder for creating a `AssetCapitalizationCreditMemo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetCapitalizationCreditMemo`.
     */
    AssetCapitalizationCreditMemoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssetCapitalizationCreditMemo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetCapitalizationCreditMemo`.
     */
    AssetCapitalizationCreditMemoRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo, entity);
    };
    AssetCapitalizationCreditMemoRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo, docEntryOrEntity instanceof AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return AssetCapitalizationCreditMemoRequestBuilder;
}(core_1.RequestBuilder));
exports.AssetCapitalizationCreditMemoRequestBuilder = AssetCapitalizationCreditMemoRequestBuilder;
//# sourceMappingURL=AssetCapitalizationCreditMemoRequestBuilder.js.map