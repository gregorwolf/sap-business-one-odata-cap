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
exports.WarehouseLocations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WarehouseLocationsRequestBuilder_1 = require("./WarehouseLocationsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "WarehouseLocations" of service "SAPB1".
 */
var WarehouseLocations = /** @class */ (function (_super) {
    __extends(WarehouseLocations, _super);
    function WarehouseLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WarehouseLocations`.
     * @returns A builder that constructs instances of entity type `WarehouseLocations`.
     */
    WarehouseLocations.builder = function () {
        return v4_1.Entity.entityBuilder(WarehouseLocations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WarehouseLocations` entity type.
     * @returns A `WarehouseLocations` request builder.
     */
    WarehouseLocations.requestBuilder = function () {
        return new WarehouseLocationsRequestBuilder_1.WarehouseLocationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WarehouseLocations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WarehouseLocations`.
     */
    WarehouseLocations.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, WarehouseLocations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WarehouseLocations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WarehouseLocations.
     */
    WarehouseLocations._entityName = 'WarehouseLocations';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WarehouseLocations.
     */
    WarehouseLocations._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    WarehouseLocations._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WarehouseLocations;
}(v4_1.Entity));
exports.WarehouseLocations = WarehouseLocations;
var Warehouses_1 = require("./Warehouses");
var VendorPayments_1 = require("./VendorPayments");
var Items_1 = require("./Items");
var JournalEntries_1 = require("./JournalEntries");
var Countries_1 = require("./Countries");
var CertificateSeries_1 = require("./CertificateSeries");
var PaymentDrafts_1 = require("./PaymentDrafts");
var WithholdingTaxCodes_1 = require("./WithholdingTaxCodes");
var IncomingPayments_1 = require("./IncomingPayments");
(function (WarehouseLocations) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.CODE = new v4_1.NumberField('Code', WarehouseLocations, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.NAME = new v4_1.StringField('Name', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[lstvatNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.LSTVAT_NUMBER = new v4_1.StringField('LSTVATNumber', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[cstNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.CST_NUMBER = new v4_1.StringField('CSTNumber', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[exemptionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.EXEMPTION_NUMBER = new v4_1.StringField('ExemptionNumber', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[tanNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.TAN_NUMBER = new v4_1.StringField('TANNumber', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[serviceTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.SERVICE_TAX_NUMBER = new v4_1.StringField('ServiceTaxNumber', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[assesseeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.ASSESSEE_TYPE = new v4_1.StringField('AssesseeType', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[companyType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.COMPANY_TYPE = new v4_1.StringField('CompanyType', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[natureOfBusiness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.NATURE_OF_BUSINESS = new v4_1.StringField('NatureOfBusiness', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[tinNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.TIN_NUMBER = new v4_1.StringField('TINNumber', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[registrationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.REGISTRATION_TYPE = new v4_1.StringField('RegistrationType', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[eccNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.ECC_NUMBER = new v4_1.StringField('EccNumber', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[ceRange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.CE_RANGE = new v4_1.StringField('CERange', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[ceDivision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.CE_DIVISION = new v4_1.StringField('CEDivision', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[ceCommissionerate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.CE_COMMISSIONERATE = new v4_1.StringField('CECommissionerate', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[manufacturerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.MANUFACTURER_CODE = new v4_1.StringField('ManufacturerCode', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[jurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.JURISDICTION = new v4_1.StringField('Jurisdiction', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.STREET = new v4_1.StringField('Street', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.BLOCK = new v4_1.StringField('Block', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.ZIP_CODE = new v4_1.StringField('ZipCode', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.CITY = new v4_1.StringField('City', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.COUNTY = new v4_1.StringField('County', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.COUNTRY = new v4_1.StringField('Country', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.STATE = new v4_1.StringField('State', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[panNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.PAN_NUMBER = new v4_1.StringField('PANNumber', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[ceRegisterNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.CE_REGISTER_NUMBER = new v4_1.StringField('CERegisterNumber', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[buildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.BUILDING_FLOOR_ROOM = new v4_1.StringField('BuildingFloorRoom', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[gstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.GSTIN = new v4_1.StringField('GSTIN', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[gsttds]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.GSTTDS = new v4_1.StringField('GSTTDS', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the [[gstisd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.GSTISD = new v4_1.StringField('GSTISD', WarehouseLocations, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.WAREHOUSES = new v4_1.OneToManyLink('Warehouses', WarehouseLocations, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.VENDOR_PAYMENTS = new v4_1.OneToManyLink('VendorPayments', WarehouseLocations, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.ITEMS = new v4_1.OneToManyLink('Items', WarehouseLocations, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.JOURNAL_ENTRIES = new v4_1.OneToManyLink('JournalEntries', WarehouseLocations, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.COUNTRY_2 = new v4_1.OneToOneLink('Country2', WarehouseLocations, Countries_1.Countries);
    /**
     * Static representation of the one-to-many navigation property [[certificateSeries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.CERTIFICATE_SERIES = new v4_1.OneToManyLink('CertificateSeries', WarehouseLocations, CertificateSeries_1.CertificateSeries);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.PAYMENT_DRAFTS = new v4_1.OneToManyLink('PaymentDrafts', WarehouseLocations, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.WITHHOLDING_TAX_CODES = new v4_1.OneToManyLink('WithholdingTaxCodes', WarehouseLocations, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WarehouseLocations.INCOMING_PAYMENTS = new v4_1.OneToManyLink('IncomingPayments', WarehouseLocations, IncomingPayments_1.IncomingPayments);
    /**
     * All fields of the WarehouseLocations entity.
     */
    WarehouseLocations._allFields = [
        WarehouseLocations.CODE,
        WarehouseLocations.NAME,
        WarehouseLocations.LSTVAT_NUMBER,
        WarehouseLocations.CST_NUMBER,
        WarehouseLocations.EXEMPTION_NUMBER,
        WarehouseLocations.TAN_NUMBER,
        WarehouseLocations.SERVICE_TAX_NUMBER,
        WarehouseLocations.ASSESSEE_TYPE,
        WarehouseLocations.COMPANY_TYPE,
        WarehouseLocations.NATURE_OF_BUSINESS,
        WarehouseLocations.TIN_NUMBER,
        WarehouseLocations.REGISTRATION_TYPE,
        WarehouseLocations.ECC_NUMBER,
        WarehouseLocations.CE_RANGE,
        WarehouseLocations.CE_DIVISION,
        WarehouseLocations.CE_COMMISSIONERATE,
        WarehouseLocations.MANUFACTURER_CODE,
        WarehouseLocations.JURISDICTION,
        WarehouseLocations.STREET,
        WarehouseLocations.BLOCK,
        WarehouseLocations.ZIP_CODE,
        WarehouseLocations.CITY,
        WarehouseLocations.COUNTY,
        WarehouseLocations.COUNTRY,
        WarehouseLocations.STATE,
        WarehouseLocations.PAN_NUMBER,
        WarehouseLocations.CE_REGISTER_NUMBER,
        WarehouseLocations.BUILDING_FLOOR_ROOM,
        WarehouseLocations.GSTIN,
        WarehouseLocations.GSTTDS,
        WarehouseLocations.GSTISD,
        WarehouseLocations.WAREHOUSES,
        WarehouseLocations.VENDOR_PAYMENTS,
        WarehouseLocations.ITEMS,
        WarehouseLocations.JOURNAL_ENTRIES,
        WarehouseLocations.COUNTRY_2,
        WarehouseLocations.CERTIFICATE_SERIES,
        WarehouseLocations.PAYMENT_DRAFTS,
        WarehouseLocations.WITHHOLDING_TAX_CODES,
        WarehouseLocations.INCOMING_PAYMENTS
    ];
    /**
     * All fields selector.
     */
    WarehouseLocations.ALL_FIELDS = new v4_1.AllFields('*', WarehouseLocations);
    /**
     * All key fields of the WarehouseLocations entity.
     */
    WarehouseLocations._keyFields = [WarehouseLocations.CODE];
    /**
     * Mapping of all key field names to the respective static field property WarehouseLocations.
     */
    WarehouseLocations._keys = WarehouseLocations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WarehouseLocations = exports.WarehouseLocations || (exports.WarehouseLocations = {}));
exports.WarehouseLocations = WarehouseLocations;
//# sourceMappingURL=WarehouseLocations.js.map