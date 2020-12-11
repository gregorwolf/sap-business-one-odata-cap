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
exports.TaxInvoiceReportRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TaxInvoiceReport_1 = require("./TaxInvoiceReport");
/**
 * Request builder class for operations supported on the [[TaxInvoiceReport]] entity.
 */
var TaxInvoiceReportRequestBuilder = /** @class */ (function (_super) {
    __extends(TaxInvoiceReportRequestBuilder, _super);
    function TaxInvoiceReportRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TaxInvoiceReport` entity based on its keys.
     * @param taxInvoiceReportNumber Key property. See [[TaxInvoiceReport.taxInvoiceReportNumber]].
     * @returns A request builder for creating requests to retrieve one `TaxInvoiceReport` entity based on its keys.
     */
    TaxInvoiceReportRequestBuilder.prototype.getByKey = function (taxInvoiceReportNumber) {
        return new core_1.GetByKeyRequestBuilderV4(TaxInvoiceReport_1.TaxInvoiceReport, { TaxInvoiceReportNumber: taxInvoiceReportNumber });
    };
    /**
     * Returns a request builder for querying all `TaxInvoiceReport` entities.
     * @returns A request builder for creating requests to retrieve all `TaxInvoiceReport` entities.
     */
    TaxInvoiceReportRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(TaxInvoiceReport_1.TaxInvoiceReport);
    };
    /**
     * Returns a request builder for creating a `TaxInvoiceReport` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TaxInvoiceReport`.
     */
    TaxInvoiceReportRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(TaxInvoiceReport_1.TaxInvoiceReport, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TaxInvoiceReport`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TaxInvoiceReport`.
     */
    TaxInvoiceReportRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(TaxInvoiceReport_1.TaxInvoiceReport, entity);
    };
    TaxInvoiceReportRequestBuilder.prototype.delete = function (taxInvoiceReportNumberOrEntity) {
        return new core_1.DeleteRequestBuilderV4(TaxInvoiceReport_1.TaxInvoiceReport, taxInvoiceReportNumberOrEntity instanceof TaxInvoiceReport_1.TaxInvoiceReport ? taxInvoiceReportNumberOrEntity : { TaxInvoiceReportNumber: taxInvoiceReportNumberOrEntity });
    };
    return TaxInvoiceReportRequestBuilder;
}(core_1.RequestBuilder));
exports.TaxInvoiceReportRequestBuilder = TaxInvoiceReportRequestBuilder;
//# sourceMappingURL=TaxInvoiceReportRequestBuilder.js.map