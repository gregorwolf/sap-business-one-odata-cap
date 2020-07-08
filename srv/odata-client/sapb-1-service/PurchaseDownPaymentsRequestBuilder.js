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
exports.PurchaseDownPaymentsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var PurchaseDownPayments_1 = require("./PurchaseDownPayments");
/**
 * Request builder class for operations supported on the [[PurchaseDownPayments]] entity.
 */
var PurchaseDownPaymentsRequestBuilder = /** @class */ (function (_super) {
    __extends(PurchaseDownPaymentsRequestBuilder, _super);
    function PurchaseDownPaymentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PurchaseDownPayments` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseDownPayments.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseDownPayments` entity based on its keys.
     */
    PurchaseDownPaymentsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(PurchaseDownPayments_1.PurchaseDownPayments, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PurchaseDownPayments` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseDownPayments` entities.
     */
    PurchaseDownPaymentsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(PurchaseDownPayments_1.PurchaseDownPayments);
    };
    /**
     * Returns a request builder for creating a `PurchaseDownPayments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseDownPayments`.
     */
    PurchaseDownPaymentsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(PurchaseDownPayments_1.PurchaseDownPayments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PurchaseDownPayments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseDownPayments`.
     */
    PurchaseDownPaymentsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(PurchaseDownPayments_1.PurchaseDownPayments, entity);
    };
    PurchaseDownPaymentsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(PurchaseDownPayments_1.PurchaseDownPayments, docEntryOrEntity instanceof PurchaseDownPayments_1.PurchaseDownPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PurchaseDownPaymentsRequestBuilder;
}(v4_1.RequestBuilder));
exports.PurchaseDownPaymentsRequestBuilder = PurchaseDownPaymentsRequestBuilder;
//# sourceMappingURL=PurchaseDownPaymentsRequestBuilder.js.map