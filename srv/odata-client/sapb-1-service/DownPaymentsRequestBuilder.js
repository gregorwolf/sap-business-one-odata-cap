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
exports.DownPaymentsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var DownPayments_1 = require("./DownPayments");
/**
 * Request builder class for operations supported on the [[DownPayments]] entity.
 */
var DownPaymentsRequestBuilder = /** @class */ (function (_super) {
    __extends(DownPaymentsRequestBuilder, _super);
    function DownPaymentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DownPayments` entity based on its keys.
     * @param docEntry Key property. See [[DownPayments.docEntry]].
     * @returns A request builder for creating requests to retrieve one `DownPayments` entity based on its keys.
     */
    DownPaymentsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(DownPayments_1.DownPayments, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `DownPayments` entities.
     * @returns A request builder for creating requests to retrieve all `DownPayments` entities.
     */
    DownPaymentsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(DownPayments_1.DownPayments);
    };
    /**
     * Returns a request builder for creating a `DownPayments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DownPayments`.
     */
    DownPaymentsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(DownPayments_1.DownPayments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DownPayments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DownPayments`.
     */
    DownPaymentsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(DownPayments_1.DownPayments, entity);
    };
    DownPaymentsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(DownPayments_1.DownPayments, docEntryOrEntity instanceof DownPayments_1.DownPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return DownPaymentsRequestBuilder;
}(v4_1.RequestBuilder));
exports.DownPaymentsRequestBuilder = DownPaymentsRequestBuilder;
//# sourceMappingURL=DownPaymentsRequestBuilder.js.map