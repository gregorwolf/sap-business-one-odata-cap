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
exports.IncomingPaymentsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var IncomingPayments_1 = require("./IncomingPayments");
/**
 * Request builder class for operations supported on the [[IncomingPayments]] entity.
 */
var IncomingPaymentsRequestBuilder = /** @class */ (function (_super) {
    __extends(IncomingPaymentsRequestBuilder, _super);
    function IncomingPaymentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `IncomingPayments` entity based on its keys.
     * @param docEntry Key property. See [[IncomingPayments.docEntry]].
     * @returns A request builder for creating requests to retrieve one `IncomingPayments` entity based on its keys.
     */
    IncomingPaymentsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(IncomingPayments_1.IncomingPayments, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `IncomingPayments` entities.
     * @returns A request builder for creating requests to retrieve all `IncomingPayments` entities.
     */
    IncomingPaymentsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(IncomingPayments_1.IncomingPayments);
    };
    /**
     * Returns a request builder for creating a `IncomingPayments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IncomingPayments`.
     */
    IncomingPaymentsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(IncomingPayments_1.IncomingPayments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `IncomingPayments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IncomingPayments`.
     */
    IncomingPaymentsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(IncomingPayments_1.IncomingPayments, entity);
    };
    IncomingPaymentsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(IncomingPayments_1.IncomingPayments, docEntryOrEntity instanceof IncomingPayments_1.IncomingPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return IncomingPaymentsRequestBuilder;
}(v4_1.RequestBuilder));
exports.IncomingPaymentsRequestBuilder = IncomingPaymentsRequestBuilder;
//# sourceMappingURL=IncomingPaymentsRequestBuilder.js.map