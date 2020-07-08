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
exports.PaymentRunExportRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var PaymentRunExport_1 = require("./PaymentRunExport");
/**
 * Request builder class for operations supported on the [[PaymentRunExport]] entity.
 */
var PaymentRunExportRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentRunExportRequestBuilder, _super);
    function PaymentRunExportRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentRunExport` entity based on its keys.
     * @param absoluteEntry Key property. See [[PaymentRunExport.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `PaymentRunExport` entity based on its keys.
     */
    PaymentRunExportRequestBuilder.prototype.getByKey = function (absoluteEntry) {
        return new v4_1.GetByKeyRequestBuilder(PaymentRunExport_1.PaymentRunExport, { AbsoluteEntry: absoluteEntry });
    };
    /**
     * Returns a request builder for querying all `PaymentRunExport` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentRunExport` entities.
     */
    PaymentRunExportRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(PaymentRunExport_1.PaymentRunExport);
    };
    /**
     * Returns a request builder for creating a `PaymentRunExport` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentRunExport`.
     */
    PaymentRunExportRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(PaymentRunExport_1.PaymentRunExport, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentRunExport`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentRunExport`.
     */
    PaymentRunExportRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(PaymentRunExport_1.PaymentRunExport, entity);
    };
    PaymentRunExportRequestBuilder.prototype.delete = function (absoluteEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(PaymentRunExport_1.PaymentRunExport, absoluteEntryOrEntity instanceof PaymentRunExport_1.PaymentRunExport ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity });
    };
    return PaymentRunExportRequestBuilder;
}(v4_1.RequestBuilder));
exports.PaymentRunExportRequestBuilder = PaymentRunExportRequestBuilder;
//# sourceMappingURL=PaymentRunExportRequestBuilder.js.map