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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxInvoiceReport = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TaxInvoiceReportRequestBuilder_1 = require("./TaxInvoiceReportRequestBuilder");
var TaxInvoiceReportLine_1 = require("./TaxInvoiceReportLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "TaxInvoiceReport" of service "SAPB1".
 */
var TaxInvoiceReport = /** @class */ (function (_super) {
    __extends(TaxInvoiceReport, _super);
    function TaxInvoiceReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TaxInvoiceReport`.
     * @returns A builder that constructs instances of entity type `TaxInvoiceReport`.
     */
    TaxInvoiceReport.builder = function () {
        return v4_1.Entity.entityBuilder(TaxInvoiceReport);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TaxInvoiceReport` entity type.
     * @returns A `TaxInvoiceReport` request builder.
     */
    TaxInvoiceReport.requestBuilder = function () {
        return new TaxInvoiceReportRequestBuilder_1.TaxInvoiceReportRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TaxInvoiceReport`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TaxInvoiceReport`.
     */
    TaxInvoiceReport.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, TaxInvoiceReport);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TaxInvoiceReport.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TaxInvoiceReport.
     */
    TaxInvoiceReport._entityName = 'TaxInvoiceReport';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TaxInvoiceReport.
     */
    TaxInvoiceReport._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    TaxInvoiceReport._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TaxInvoiceReport;
}(v4_1.Entity));
exports.TaxInvoiceReport = TaxInvoiceReport;
var TaxWebSites_1 = require("./TaxWebSites");
(function (TaxInvoiceReport) {
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', TaxInvoiceReport, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.E_TAX_NO = new v4_1.StringField('ETaxNo', TaxInvoiceReport, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovalNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.NTS_APPROVAL_NO = new v4_1.StringField('NTSApprovalNo', TaxInvoiceReport, 'Edm.String');
    /**
     * Static representation of the [[originalNtsApprovalNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.ORIGINAL_NTS_APPROVAL_NO = new v4_1.StringField('OriginalNTSApprovalNo', TaxInvoiceReport, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.REMARKS = new v4_1.StringField('Remarks', TaxInvoiceReport, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceReportNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.TAX_INVOICE_REPORT_NUMBER = new v4_1.StringField('TaxInvoiceReportNumber', TaxInvoiceReport, 'Edm.String');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.DATE = new v4_1.DateField('Date', TaxInvoiceReport, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[businessPlace]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.BUSINESS_PLACE = new v4_1.NumberField('BusinessPlace', TaxInvoiceReport, 'Edm.Int32');
    /**
     * Static representation of the [[bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.BP_CODE = new v4_1.StringField('BPCode', TaxInvoiceReport, 'Edm.String');
    /**
     * Static representation of the [[bpName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.BP_NAME = new v4_1.StringField('BPName', TaxInvoiceReport, 'Edm.String');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', TaxInvoiceReport, 'Edm.Double');
    /**
     * Static representation of the [[taxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.TAX_AMOUNT = new v4_1.NumberField('TaxAmount', TaxInvoiceReport, 'Edm.Double');
    /**
     * Static representation of the [[canceled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.CANCELED = new v4_1.StringField('Canceled', TaxInvoiceReport, 'Edm.String');
    /**
     * Static representation of the [[reportType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.REPORT_TYPE = new v4_1.NumberField('ReportType', TaxInvoiceReport, 'Edm.Int32');
    /**
     * Static representation of the [[taxInvoiceReportLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.TAX_INVOICE_REPORT_LINE_COLLECTION = new v4_1.CollectionField('TaxInvoiceReportLineCollection', TaxInvoiceReport, new TaxInvoiceReportLine_1.TaxInvoiceReportLineField('', TaxInvoiceReport));
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxInvoiceReport.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', TaxInvoiceReport, TaxWebSites_1.TaxWebSites);
    /**
     * All fields of the TaxInvoiceReport entity.
     */
    TaxInvoiceReport._allFields = [
        TaxInvoiceReport.E_TAX_WEB_SITE,
        TaxInvoiceReport.E_TAX_NO,
        TaxInvoiceReport.NTS_APPROVAL_NO,
        TaxInvoiceReport.ORIGINAL_NTS_APPROVAL_NO,
        TaxInvoiceReport.REMARKS,
        TaxInvoiceReport.TAX_INVOICE_REPORT_NUMBER,
        TaxInvoiceReport.DATE,
        TaxInvoiceReport.BUSINESS_PLACE,
        TaxInvoiceReport.BP_CODE,
        TaxInvoiceReport.BP_NAME,
        TaxInvoiceReport.BASE_AMOUNT,
        TaxInvoiceReport.TAX_AMOUNT,
        TaxInvoiceReport.CANCELED,
        TaxInvoiceReport.REPORT_TYPE,
        TaxInvoiceReport.TAX_INVOICE_REPORT_LINE_COLLECTION,
        TaxInvoiceReport.TAX_WEB_SITE
    ];
    /**
     * All fields selector.
     */
    TaxInvoiceReport.ALL_FIELDS = new v4_1.AllFields('*', TaxInvoiceReport);
    /**
     * All key fields of the TaxInvoiceReport entity.
     */
    TaxInvoiceReport._keyFields = [TaxInvoiceReport.TAX_INVOICE_REPORT_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property TaxInvoiceReport.
     */
    TaxInvoiceReport._keys = TaxInvoiceReport._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TaxInvoiceReport = exports.TaxInvoiceReport || (exports.TaxInvoiceReport = {}));
exports.TaxInvoiceReport = TaxInvoiceReport;
//# sourceMappingURL=TaxInvoiceReport.js.map