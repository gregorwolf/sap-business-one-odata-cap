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
exports.ReportFilter = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ReportFilterRequestBuilder_1 = require("./ReportFilterRequestBuilder");
var TaxReportGroup_1 = require("./TaxReportGroup");
var TaxReportBusinessPartner_1 = require("./TaxReportBusinessPartner");
var TaxReportDocument_1 = require("./TaxReportDocument");
var TaxReportSeries_1 = require("./TaxReportSeries");
var TaxReportAccount_1 = require("./TaxReportAccount");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ReportFilter" of service "SAPB1".
 */
var ReportFilter = /** @class */ (function (_super) {
    __extends(ReportFilter, _super);
    function ReportFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ReportFilter`.
     * @returns A builder that constructs instances of entity type `ReportFilter`.
     */
    ReportFilter.builder = function () {
        return core_1.EntityV4.entityBuilder(ReportFilter);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ReportFilter` entity type.
     * @returns A `ReportFilter` request builder.
     */
    ReportFilter.requestBuilder = function () {
        return new ReportFilterRequestBuilder_1.ReportFilterRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReportFilter`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ReportFilter`.
     */
    ReportFilter.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ReportFilter);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ReportFilter.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ReportFilter.
     */
    ReportFilter._entityName = 'ReportFilter';
    /**
     * Default url path for the according service.
     */
    ReportFilter._defaultServicePath = '/b1s/v2/';
    return ReportFilter;
}(core_1.EntityV4));
exports.ReportFilter = ReportFilter;
(function (ReportFilter) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.CODE = new core_1.NumberField('Code', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.NAME = new core_1.StringField('Name', ReportFilter, 'Edm.String');
    /**
     * Static representation of the [[reportLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.REPORT_LAYOUT = new core_1.EnumField('ReportLayout', ReportFilter);
    /**
     * Static representation of the [[firstPrintedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.FIRST_PRINTED_NUMBER = new core_1.NumberField('FirstPrintedNumber', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[fromDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.FROM_DATE = new core_1.DateField('FromDate', ReportFilter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[toDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TO_DATE = new core_1.DateField('ToDate', ReportFilter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_DATE = new core_1.EnumField('TaxDate', ReportFilter);
    /**
     * Static representation of the [[roundAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.ROUND_AMOUNT = new core_1.EnumField('RoundAmount', ReportFilter);
    /**
     * Static representation of the [[declarationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.DECLARATION_TYPE = new core_1.EnumField('DeclarationType', ReportFilter);
    /**
     * Static representation of the [[filterType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.FILTER_TYPE = new core_1.EnumField('FilterType', ReportFilter);
    /**
     * Static representation of the [[excludeWt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.EXCLUDE_WT = new core_1.EnumField('ExcludeWT', ReportFilter);
    /**
     * Static representation of the [[includeCustomers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.INCLUDE_CUSTOMERS = new core_1.EnumField('IncludeCustomers', ReportFilter);
    /**
     * Static representation of the [[includeVendors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.INCLUDE_VENDORS = new core_1.EnumField('IncludeVendors', ReportFilter);
    /**
     * Static representation of the [[period]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.PERIOD = new core_1.EnumField('Period', ReportFilter);
    /**
     * Static representation of the [[quarter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.QUARTER = new core_1.NumberField('Quarter', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[year]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.YEAR = new core_1.NumberField('Year', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.DOCUMENT_TYPE = new core_1.EnumField('DocumentType', ReportFilter);
    /**
     * Static representation of the [[firstRegisterNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.FIRST_REGISTER_NUMBER = new core_1.NumberField('FirstRegisterNumber', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[includeGlAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.INCLUDE_GL_ACCOUNTS = new core_1.EnumField('IncludeGLAccounts', ReportFilter);
    /**
     * Static representation of the [[appendixOorPSelection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.APPENDIX_OOR_P_SELECTION = new core_1.EnumField('AppendixOorPSelection', ReportFilter);
    /**
     * Static representation of the [[openingAndClosingBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.OPENING_AND_CLOSING_BALANCE = new core_1.EnumField('OpeningAndClosingBalance', ReportFilter);
    /**
     * Static representation of the [[fromSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.FROM_SERIES = new core_1.NumberField('FromSeries', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[toSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TO_SERIES = new core_1.NumberField('ToSeries', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[cancellation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.CANCELLATION = new core_1.EnumField('Cancellation', ReportFilter);
    /**
     * Static representation of the [[hideTaxWithoutTransaction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.HIDE_TAX_WITHOUT_TRANSACTION = new core_1.EnumField('HideTaxWithoutTransaction', ReportFilter);
    /**
     * Static representation of the [[includeSeriesFilter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.INCLUDE_SERIES_FILTER = new core_1.EnumField('IncludeSeriesFilter', ReportFilter);
    /**
     * Static representation of the [[includeDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.INCLUDE_DOCUMENT_TYPE = new core_1.EnumField('IncludeDocumentType', ReportFilter);
    /**
     * Static representation of the [[diplayCreditMemosInSeparateColumn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.DIPLAY_CREDIT_MEMOS_IN_SEPARATE_COLUMN = new core_1.EnumField('DiplayCreditMemosInSeparateColumn', ReportFilter);
    /**
     * Static representation of the [[showPaymentsWithDeferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.SHOW_PAYMENTS_WITH_DEFERRED_TAX = new core_1.EnumField('ShowPaymentsWithDeferredTax', ReportFilter);
    /**
     * Static representation of the [[quarterOrDates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.QUARTER_OR_DATES = new core_1.EnumField('QuarterOrDates', ReportFilter);
    /**
     * Static representation of the [[taxReportGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_GROUPS = new core_1.CollectionField('TaxReportGroups', ReportFilter, TaxReportGroup_1.TaxReportGroup);
    /**
     * Static representation of the [[taxReportBusinessPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_BUSINESS_PARTNERS = new core_1.CollectionField('TaxReportBusinessPartners', ReportFilter, TaxReportBusinessPartner_1.TaxReportBusinessPartner);
    /**
     * Static representation of the [[taxReportDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_DOCUMENTS = new core_1.CollectionField('TaxReportDocuments', ReportFilter, TaxReportDocument_1.TaxReportDocument);
    /**
     * Static representation of the [[taxReportSeriesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_SERIES_COLLECTION = new core_1.CollectionField('TaxReportSeriesCollection', ReportFilter, TaxReportSeries_1.TaxReportSeries);
    /**
     * Static representation of the [[taxReportAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_ACCOUNTS = new core_1.CollectionField('TaxReportAccounts', ReportFilter, TaxReportAccount_1.TaxReportAccount);
    /**
     * All fields of the ReportFilter entity.
     */
    ReportFilter._allFields = [
        ReportFilter.CODE,
        ReportFilter.NAME,
        ReportFilter.REPORT_LAYOUT,
        ReportFilter.FIRST_PRINTED_NUMBER,
        ReportFilter.FROM_DATE,
        ReportFilter.TO_DATE,
        ReportFilter.TAX_DATE,
        ReportFilter.ROUND_AMOUNT,
        ReportFilter.DECLARATION_TYPE,
        ReportFilter.FILTER_TYPE,
        ReportFilter.EXCLUDE_WT,
        ReportFilter.INCLUDE_CUSTOMERS,
        ReportFilter.INCLUDE_VENDORS,
        ReportFilter.PERIOD,
        ReportFilter.QUARTER,
        ReportFilter.YEAR,
        ReportFilter.DOCUMENT_TYPE,
        ReportFilter.FIRST_REGISTER_NUMBER,
        ReportFilter.INCLUDE_GL_ACCOUNTS,
        ReportFilter.APPENDIX_OOR_P_SELECTION,
        ReportFilter.OPENING_AND_CLOSING_BALANCE,
        ReportFilter.FROM_SERIES,
        ReportFilter.TO_SERIES,
        ReportFilter.CANCELLATION,
        ReportFilter.HIDE_TAX_WITHOUT_TRANSACTION,
        ReportFilter.INCLUDE_SERIES_FILTER,
        ReportFilter.INCLUDE_DOCUMENT_TYPE,
        ReportFilter.DIPLAY_CREDIT_MEMOS_IN_SEPARATE_COLUMN,
        ReportFilter.SHOW_PAYMENTS_WITH_DEFERRED_TAX,
        ReportFilter.QUARTER_OR_DATES,
        ReportFilter.TAX_REPORT_GROUPS,
        ReportFilter.TAX_REPORT_BUSINESS_PARTNERS,
        ReportFilter.TAX_REPORT_DOCUMENTS,
        ReportFilter.TAX_REPORT_SERIES_COLLECTION,
        ReportFilter.TAX_REPORT_ACCOUNTS
    ];
    /**
     * All fields selector.
     */
    ReportFilter.ALL_FIELDS = new core_1.AllFields('*', ReportFilter);
    /**
     * All key fields of the ReportFilter entity.
     */
    ReportFilter._keyFields = [ReportFilter.CODE];
    /**
     * Mapping of all key field names to the respective static field property ReportFilter.
     */
    ReportFilter._keys = ReportFilter._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ReportFilter = exports.ReportFilter || (exports.ReportFilter = {}));
exports.ReportFilter = ReportFilter;
//# sourceMappingURL=ReportFilter.js.map