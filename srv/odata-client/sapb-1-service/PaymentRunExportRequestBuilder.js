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
exports.PaymentRunExportRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(PaymentRunExport_1.PaymentRunExport, { AbsoluteEntry: absoluteEntry });
    };
    /**
     * Returns a request builder for querying all `PaymentRunExport` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentRunExport` entities.
     */
    PaymentRunExportRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PaymentRunExport_1.PaymentRunExport);
    };
    /**
     * Returns a request builder for creating a `PaymentRunExport` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentRunExport`.
     */
    PaymentRunExportRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PaymentRunExport_1.PaymentRunExport, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentRunExport`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentRunExport`.
     */
    PaymentRunExportRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PaymentRunExport_1.PaymentRunExport, entity);
    };
    PaymentRunExportRequestBuilder.prototype.delete = function (absoluteEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PaymentRunExport_1.PaymentRunExport, absoluteEntryOrEntity instanceof PaymentRunExport_1.PaymentRunExport ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity });
    };
    return PaymentRunExportRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentRunExportRequestBuilder = PaymentRunExportRequestBuilder;
//# sourceMappingURL=PaymentRunExportRequestBuilder.js.map