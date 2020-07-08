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
exports.PurchaseQuotationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
/**
 * Request builder class for operations supported on the [[PurchaseQuotations]] entity.
 */
var PurchaseQuotationsRequestBuilder = /** @class */ (function (_super) {
    __extends(PurchaseQuotationsRequestBuilder, _super);
    function PurchaseQuotationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PurchaseQuotations` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseQuotations.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseQuotations` entity based on its keys.
     */
    PurchaseQuotationsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(PurchaseQuotations_1.PurchaseQuotations, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PurchaseQuotations` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseQuotations` entities.
     */
    PurchaseQuotationsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(PurchaseQuotations_1.PurchaseQuotations);
    };
    /**
     * Returns a request builder for creating a `PurchaseQuotations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseQuotations`.
     */
    PurchaseQuotationsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(PurchaseQuotations_1.PurchaseQuotations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PurchaseQuotations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseQuotations`.
     */
    PurchaseQuotationsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(PurchaseQuotations_1.PurchaseQuotations, entity);
    };
    PurchaseQuotationsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(PurchaseQuotations_1.PurchaseQuotations, docEntryOrEntity instanceof PurchaseQuotations_1.PurchaseQuotations ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PurchaseQuotationsRequestBuilder;
}(v4_1.RequestBuilder));
exports.PurchaseQuotationsRequestBuilder = PurchaseQuotationsRequestBuilder;
//# sourceMappingURL=PurchaseQuotationsRequestBuilder.js.map