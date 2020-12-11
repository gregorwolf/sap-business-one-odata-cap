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
exports.DownPaymentsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(DownPayments_1.DownPayments, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `DownPayments` entities.
     * @returns A request builder for creating requests to retrieve all `DownPayments` entities.
     */
    DownPaymentsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(DownPayments_1.DownPayments);
    };
    /**
     * Returns a request builder for creating a `DownPayments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DownPayments`.
     */
    DownPaymentsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(DownPayments_1.DownPayments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DownPayments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DownPayments`.
     */
    DownPaymentsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(DownPayments_1.DownPayments, entity);
    };
    DownPaymentsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(DownPayments_1.DownPayments, docEntryOrEntity instanceof DownPayments_1.DownPayments ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return DownPaymentsRequestBuilder;
}(core_1.RequestBuilder));
exports.DownPaymentsRequestBuilder = DownPaymentsRequestBuilder;
//# sourceMappingURL=DownPaymentsRequestBuilder.js.map