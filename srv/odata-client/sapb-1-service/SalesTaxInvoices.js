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
exports.SalesTaxInvoices = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesTaxInvoicesRequestBuilder_1 = require("./SalesTaxInvoicesRequestBuilder");
var SalesTaxInvoiceLine_1 = require("./SalesTaxInvoiceLine");
var SalesTaxInvoiceOperationCode_1 = require("./SalesTaxInvoiceOperationCode");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SalesTaxInvoices" of service "SAPB1".
 */
var SalesTaxInvoices = /** @class */ (function (_super) {
    __extends(SalesTaxInvoices, _super);
    function SalesTaxInvoices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SalesTaxInvoices`.
     * @returns A builder that constructs instances of entity type `SalesTaxInvoices`.
     */
    SalesTaxInvoices.builder = function () {
        return core_1.EntityV4.entityBuilder(SalesTaxInvoices);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesTaxInvoices` entity type.
     * @returns A `SalesTaxInvoices` request builder.
     */
    SalesTaxInvoices.requestBuilder = function () {
        return new SalesTaxInvoicesRequestBuilder_1.SalesTaxInvoicesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxInvoices`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesTaxInvoices`.
     */
    SalesTaxInvoices.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, SalesTaxInvoices);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesTaxInvoices.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesTaxInvoices.
     */
    SalesTaxInvoices._entityName = 'SalesTaxInvoices';
    /**
     * Default url path for the according service.
     */
    SalesTaxInvoices._defaultServicePath = '/b1s/v2/';
    return SalesTaxInvoices;
}(core_1.EntityV4));
exports.SalesTaxInvoices = SalesTaxInvoices;
var BusinessPartners_1 = require("./BusinessPartners");
(function (SalesTaxInvoices) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.DOC_ENTRY = new core_1.NumberField('DocEntry', SalesTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.DOC_NUM = new core_1.NumberField('DocNum', SalesTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.DOC_TYPE = new core_1.EnumField('DocType', SalesTaxInvoices);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.PRINTED = new core_1.EnumField('Printed', SalesTaxInvoices);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.DOC_DATE = new core_1.DateField('DocDate', SalesTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.CARD_CODE = new core_1.StringField('CardCode', SalesTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.CREATION_DATE = new core_1.DateField('CreationDate', SalesTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.UPDATE_DATE = new core_1.DateField('UpdateDate', SalesTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.DOC_DUE_DATE = new core_1.DateField('DocDueDate', SalesTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.SERIES = new core_1.NumberField('Series', SalesTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.SEGMENT = new core_1.NumberField('Segment', SalesTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', SalesTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.TAX_DATE = new core_1.DateField('TaxDate', SalesTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.COMMENTS = new core_1.StringField('Comments', SalesTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.SHIP_TO_CODE = new core_1.StringField('ShipToCode', SalesTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.ADDRESS = new core_1.StringField('Address', SalesTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.ADDRESS_2 = new core_1.StringField('Address2', SalesTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[currencySource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.CURRENCY_SOURCE = new core_1.EnumField('CurrencySource', SalesTaxInvoices);
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.DOC_CURRENCY = new core_1.StringField('DocCurrency', SalesTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[customerOrVendorRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.CUSTOMER_OR_VENDOR_REF_NO = new core_1.StringField('CustomerOrVendorRefNo', SalesTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[customerOrVendorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.CUSTOMER_OR_VENDOR_NAME = new core_1.StringField('CustomerOrVendorName', SalesTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.CANCEL_DATE = new core_1.DateField('CancelDate', SalesTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.DOCUMENT_TOTAL = new core_1.NumberField('DocumentTotal', SalesTaxInvoices, 'Edm.Double');
    /**
     * Static representation of the [[taxTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.TAX_TOTAL = new core_1.NumberField('TaxTotal', SalesTaxInvoices, 'Edm.Double');
    /**
     * Static representation of the [[paymentRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.PAYMENT_REF_NO = new core_1.StringField('PaymentRefNo', SalesTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[paymentRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.PAYMENT_REF_DATE = new core_1.DateField('PaymentRefDate', SalesTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[alterationRevision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.ALTERATION_REVISION = new core_1.NumberField('AlterationRevision', SalesTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[salesTaxInvoiceLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.SALES_TAX_INVOICE_LINES = new core_1.CollectionField('SalesTaxInvoiceLines', SalesTaxInvoices, SalesTaxInvoiceLine_1.SalesTaxInvoiceLine);
    /**
     * Static representation of the [[salesTaxInvoiceOperationCodes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.SALES_TAX_INVOICE_OPERATION_CODES = new core_1.CollectionField('SalesTaxInvoiceOperationCodes', SalesTaxInvoices, SalesTaxInvoiceOperationCode_1.SalesTaxInvoiceOperationCode);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxInvoices.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', SalesTaxInvoices, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the SalesTaxInvoices entity.
     */
    SalesTaxInvoices._allFields = [
        SalesTaxInvoices.DOC_ENTRY,
        SalesTaxInvoices.DOC_NUM,
        SalesTaxInvoices.DOC_TYPE,
        SalesTaxInvoices.PRINTED,
        SalesTaxInvoices.DOC_DATE,
        SalesTaxInvoices.CARD_CODE,
        SalesTaxInvoices.CREATION_DATE,
        SalesTaxInvoices.UPDATE_DATE,
        SalesTaxInvoices.DOC_DUE_DATE,
        SalesTaxInvoices.SERIES,
        SalesTaxInvoices.SEGMENT,
        SalesTaxInvoices.CONTACT_PERSON_CODE,
        SalesTaxInvoices.TAX_DATE,
        SalesTaxInvoices.COMMENTS,
        SalesTaxInvoices.SHIP_TO_CODE,
        SalesTaxInvoices.ADDRESS,
        SalesTaxInvoices.ADDRESS_2,
        SalesTaxInvoices.CURRENCY_SOURCE,
        SalesTaxInvoices.DOC_CURRENCY,
        SalesTaxInvoices.CUSTOMER_OR_VENDOR_REF_NO,
        SalesTaxInvoices.CUSTOMER_OR_VENDOR_NAME,
        SalesTaxInvoices.CANCEL_DATE,
        SalesTaxInvoices.DOCUMENT_TOTAL,
        SalesTaxInvoices.TAX_TOTAL,
        SalesTaxInvoices.PAYMENT_REF_NO,
        SalesTaxInvoices.PAYMENT_REF_DATE,
        SalesTaxInvoices.ALTERATION_REVISION,
        SalesTaxInvoices.SALES_TAX_INVOICE_LINES,
        SalesTaxInvoices.SALES_TAX_INVOICE_OPERATION_CODES,
        SalesTaxInvoices.BUSINESS_PARTNER
    ];
    /**
     * All fields selector.
     */
    SalesTaxInvoices.ALL_FIELDS = new core_1.AllFields('*', SalesTaxInvoices);
    /**
     * All key fields of the SalesTaxInvoices entity.
     */
    SalesTaxInvoices._keyFields = [SalesTaxInvoices.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property SalesTaxInvoices.
     */
    SalesTaxInvoices._keys = SalesTaxInvoices._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesTaxInvoices = exports.SalesTaxInvoices || (exports.SalesTaxInvoices = {}));
exports.SalesTaxInvoices = SalesTaxInvoices;
//# sourceMappingURL=SalesTaxInvoices.js.map