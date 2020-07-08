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
exports.VendorPaymentsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var VendorPayments_1 = require("./VendorPayments");
/**
 * Request builder class for operations supported on the [[VendorPayments]] entity.
 */
var VendorPaymentsRequestBuilder = /** @class */ (function (_super) {
    __extends(VendorPaymentsRequestBuilder, _super);
    function VendorPaymentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `VendorPayments` entity based on its keys.
     * @param docEntry Key property. See [[VendorPayments.docEntry]].
     * @returns A request builder for creating requests to retrieve one `VendorPayments` entity based on its keys.
     */
    VendorPaymentsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(VendorPayments_1.VendorPayments, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `VendorPayments` entities.
     * @returns A request builder for creating requests to retrieve all `VendorPayments` entities.
     */
    VendorPaymentsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(VendorPayments_1.VendorPayments);
    };
    /**
     * Returns a request builder for creating a `VendorPayments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `VendorPayments`.
     */
    VendorPaymentsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(VendorPayments_1.VendorPayments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `VendorPayments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `VendorPayments`.
     */
    VendorPaymentsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(VendorPayments_1.VendorPayments, entity);
    };
    VendorPaymentsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(VendorPayments_1.VendorPayments, docEntryOrEntity instanceof VendorPayments_1.VendorPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return VendorPaymentsRequestBuilder;
}(v4_1.RequestBuilder));
exports.VendorPaymentsRequestBuilder = VendorPaymentsRequestBuilder;
//# sourceMappingURL=VendorPaymentsRequestBuilder.js.map