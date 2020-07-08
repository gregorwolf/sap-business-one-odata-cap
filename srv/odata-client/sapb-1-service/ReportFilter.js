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
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ReportFilter" of service "SAPB1".
 */
var ReportFilter = /** @class */ (function (_super) {
    __extends(ReportFilter, _super);
    function ReportFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ReportFilter`.
     * @returns A builder that constructs instances of entity type `ReportFilter`.
     */
    ReportFilter.builder = function () {
        return v4_1.Entity.entityBuilder(ReportFilter);
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
        return v4_1.Entity.customFieldSelector(fieldName, ReportFilter);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ReportFilter.
     */
    ReportFilter._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ReportFilter._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ReportFilter;
}(v4_1.Entity));
exports.ReportFilter = ReportFilter;
(function (ReportFilter) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.CODE = new v4_1.NumberField('Code', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.NAME = new v4_1.StringField('Name', ReportFilter, 'Edm.String');
    /**
     * Static representation of the [[firstPrintedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.FIRST_PRINTED_NUMBER = new v4_1.NumberField('FirstPrintedNumber', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[fromDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.FROM_DATE = new v4_1.DateField('FromDate', ReportFilter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[toDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TO_DATE = new v4_1.DateField('ToDate', ReportFilter, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[quarter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.QUARTER = new v4_1.NumberField('Quarter', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[year]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.YEAR = new v4_1.NumberField('Year', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[firstRegisterNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.FIRST_REGISTER_NUMBER = new v4_1.NumberField('FirstRegisterNumber', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[fromSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.FROM_SERIES = new v4_1.NumberField('FromSeries', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[toSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TO_SERIES = new v4_1.NumberField('ToSeries', ReportFilter, 'Edm.Int32');
    /**
     * Static representation of the [[taxReportGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_GROUPS = new v4_1.CollectionField('TaxReportGroups', ReportFilter, new TaxReportGroup_1.TaxReportGroupField('', ReportFilter));
    /**
     * Static representation of the [[taxReportBusinessPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_BUSINESS_PARTNERS = new v4_1.CollectionField('TaxReportBusinessPartners', ReportFilter, new TaxReportBusinessPartner_1.TaxReportBusinessPartnerField('', ReportFilter));
    /**
     * Static representation of the [[taxReportDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_DOCUMENTS = new v4_1.CollectionField('TaxReportDocuments', ReportFilter, new TaxReportDocument_1.TaxReportDocumentField('', ReportFilter));
    /**
     * Static representation of the [[taxReportSeriesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_SERIES_COLLECTION = new v4_1.CollectionField('TaxReportSeriesCollection', ReportFilter, new TaxReportSeries_1.TaxReportSeriesField('', ReportFilter));
    /**
     * Static representation of the [[taxReportAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportFilter.TAX_REPORT_ACCOUNTS = new v4_1.CollectionField('TaxReportAccounts', ReportFilter, new TaxReportAccount_1.TaxReportAccountField('', ReportFilter));
    /**
     * All fields of the ReportFilter entity.
     */
    ReportFilter._allFields = [
        ReportFilter.CODE,
        ReportFilter.NAME,
        ReportFilter.FIRST_PRINTED_NUMBER,
        ReportFilter.FROM_DATE,
        ReportFilter.TO_DATE,
        ReportFilter.QUARTER,
        ReportFilter.YEAR,
        ReportFilter.FIRST_REGISTER_NUMBER,
        ReportFilter.FROM_SERIES,
        ReportFilter.TO_SERIES,
        ReportFilter.TAX_REPORT_GROUPS,
        ReportFilter.TAX_REPORT_BUSINESS_PARTNERS,
        ReportFilter.TAX_REPORT_DOCUMENTS,
        ReportFilter.TAX_REPORT_SERIES_COLLECTION,
        ReportFilter.TAX_REPORT_ACCOUNTS
    ];
    /**
     * All fields selector.
     */
    ReportFilter.ALL_FIELDS = new v4_1.AllFields('*', ReportFilter);
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