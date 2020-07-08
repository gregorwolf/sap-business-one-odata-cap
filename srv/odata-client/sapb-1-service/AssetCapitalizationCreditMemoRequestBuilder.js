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
exports.AssetCapitalizationCreditMemoRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
        return new v4_1.GetByKeyRequestBuilder(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `AssetCapitalizationCreditMemo` entities.
     * @returns A request builder for creating requests to retrieve all `AssetCapitalizationCreditMemo` entities.
     */
    AssetCapitalizationCreditMemoRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo);
    };
    /**
     * Returns a request builder for creating a `AssetCapitalizationCreditMemo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetCapitalizationCreditMemo`.
     */
    AssetCapitalizationCreditMemoRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssetCapitalizationCreditMemo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetCapitalizationCreditMemo`.
     */
    AssetCapitalizationCreditMemoRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo, entity);
    };
    AssetCapitalizationCreditMemoRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo, docEntryOrEntity instanceof AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return AssetCapitalizationCreditMemoRequestBuilder;
}(v4_1.RequestBuilder));
exports.AssetCapitalizationCreditMemoRequestBuilder = AssetCapitalizationCreditMemoRequestBuilder;
//# sourceMappingURL=AssetCapitalizationCreditMemoRequestBuilder.js.map