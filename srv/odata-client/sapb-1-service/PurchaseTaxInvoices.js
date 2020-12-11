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
exports.PurchaseTaxInvoices = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseTaxInvoicesRequestBuilder_1 = require("./PurchaseTaxInvoicesRequestBuilder");
var PurchaseTaxInvoiceLine_1 = require("./PurchaseTaxInvoiceLine");
var PurchaseTaxInvoiceOperationCode_1 = require("./PurchaseTaxInvoiceOperationCode");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PurchaseTaxInvoices" of service "SAPB1".
 */
var PurchaseTaxInvoices = /** @class */ (function (_super) {
    __extends(PurchaseTaxInvoices, _super);
    function PurchaseTaxInvoices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PurchaseTaxInvoices`.
     * @returns A builder that constructs instances of entity type `PurchaseTaxInvoices`.
     */
    PurchaseTaxInvoices.builder = function () {
        return core_1.EntityV4.entityBuilder(PurchaseTaxInvoices);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseTaxInvoices` entity type.
     * @returns A `PurchaseTaxInvoices` request builder.
     */
    PurchaseTaxInvoices.requestBuilder = function () {
        return new PurchaseTaxInvoicesRequestBuilder_1.PurchaseTaxInvoicesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseTaxInvoices`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseTaxInvoices`.
     */
    PurchaseTaxInvoices.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PurchaseTaxInvoices);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseTaxInvoices.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseTaxInvoices.
     */
    PurchaseTaxInvoices._entityName = 'PurchaseTaxInvoices';
    /**
     * Default url path for the according service.
     */
    PurchaseTaxInvoices._defaultServicePath = '/b1s/v2/';
    return PurchaseTaxInvoices;
}(core_1.EntityV4));
exports.PurchaseTaxInvoices = PurchaseTaxInvoices;
var BusinessPartners_1 = require("./BusinessPartners");
(function (PurchaseTaxInvoices) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.DOC_ENTRY = new core_1.NumberField('DocEntry', PurchaseTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.DOC_NUM = new core_1.NumberField('DocNum', PurchaseTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.DOC_TYPE = new core_1.EnumField('DocType', PurchaseTaxInvoices);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.PRINTED = new core_1.EnumField('Printed', PurchaseTaxInvoices);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.DOC_DATE = new core_1.DateField('DocDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.CARD_CODE = new core_1.StringField('CardCode', PurchaseTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.CREATION_DATE = new core_1.DateField('CreationDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.UPDATE_DATE = new core_1.DateField('UpdateDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.DOC_DUE_DATE = new core_1.DateField('DocDueDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.SERIES = new core_1.NumberField('Series', PurchaseTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.SEGMENT = new core_1.NumberField('Segment', PurchaseTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', PurchaseTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.TAX_DATE = new core_1.DateField('TaxDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.COMMENTS = new core_1.StringField('Comments', PurchaseTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.SHIP_TO_CODE = new core_1.StringField('ShipToCode', PurchaseTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.ADDRESS = new core_1.StringField('Address', PurchaseTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.ADDRESS_2 = new core_1.StringField('Address2', PurchaseTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[currencySource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.CURRENCY_SOURCE = new core_1.EnumField('CurrencySource', PurchaseTaxInvoices);
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.DOC_CURRENCY = new core_1.StringField('DocCurrency', PurchaseTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[customerOrVendorRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.CUSTOMER_OR_VENDOR_REF_NO = new core_1.StringField('CustomerOrVendorRefNo', PurchaseTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[customerOrVendorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.CUSTOMER_OR_VENDOR_NAME = new core_1.StringField('CustomerOrVendorName', PurchaseTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.CANCEL_DATE = new core_1.DateField('CancelDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.DOCUMENT_TOTAL = new core_1.NumberField('DocumentTotal', PurchaseTaxInvoices, 'Edm.Double');
    /**
     * Static representation of the [[taxTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.TAX_TOTAL = new core_1.NumberField('TaxTotal', PurchaseTaxInvoices, 'Edm.Double');
    /**
     * Static representation of the [[paymentRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.PAYMENT_REF_NO = new core_1.StringField('PaymentRefNo', PurchaseTaxInvoices, 'Edm.String');
    /**
     * Static representation of the [[paymentRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.PAYMENT_REF_DATE = new core_1.DateField('PaymentRefDate', PurchaseTaxInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[alterationRevision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.ALTERATION_REVISION = new core_1.NumberField('AlterationRevision', PurchaseTaxInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseTaxInvoiceLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.PURCHASE_TAX_INVOICE_LINES = new core_1.CollectionField('PurchaseTaxInvoiceLines', PurchaseTaxInvoices, PurchaseTaxInvoiceLine_1.PurchaseTaxInvoiceLine);
    /**
     * Static representation of the [[purchaseTaxInvoiceOperationCodes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.PURCHASE_TAX_INVOICE_OPERATION_CODES = new core_1.CollectionField('PurchaseTaxInvoiceOperationCodes', PurchaseTaxInvoices, PurchaseTaxInvoiceOperationCode_1.PurchaseTaxInvoiceOperationCode);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseTaxInvoices.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', PurchaseTaxInvoices, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the PurchaseTaxInvoices entity.
     */
    PurchaseTaxInvoices._allFields = [
        PurchaseTaxInvoices.DOC_ENTRY,
        PurchaseTaxInvoices.DOC_NUM,
        PurchaseTaxInvoices.DOC_TYPE,
        PurchaseTaxInvoices.PRINTED,
        PurchaseTaxInvoices.DOC_DATE,
        PurchaseTaxInvoices.CARD_CODE,
        PurchaseTaxInvoices.CREATION_DATE,
        PurchaseTaxInvoices.UPDATE_DATE,
        PurchaseTaxInvoices.DOC_DUE_DATE,
        PurchaseTaxInvoices.SERIES,
        PurchaseTaxInvoices.SEGMENT,
        PurchaseTaxInvoices.CONTACT_PERSON_CODE,
        PurchaseTaxInvoices.TAX_DATE,
        PurchaseTaxInvoices.COMMENTS,
        PurchaseTaxInvoices.SHIP_TO_CODE,
        PurchaseTaxInvoices.ADDRESS,
        PurchaseTaxInvoices.ADDRESS_2,
        PurchaseTaxInvoices.CURRENCY_SOURCE,
        PurchaseTaxInvoices.DOC_CURRENCY,
        PurchaseTaxInvoices.CUSTOMER_OR_VENDOR_REF_NO,
        PurchaseTaxInvoices.CUSTOMER_OR_VENDOR_NAME,
        PurchaseTaxInvoices.CANCEL_DATE,
        PurchaseTaxInvoices.DOCUMENT_TOTAL,
        PurchaseTaxInvoices.TAX_TOTAL,
        PurchaseTaxInvoices.PAYMENT_REF_NO,
        PurchaseTaxInvoices.PAYMENT_REF_DATE,
        PurchaseTaxInvoices.ALTERATION_REVISION,
        PurchaseTaxInvoices.PURCHASE_TAX_INVOICE_LINES,
        PurchaseTaxInvoices.PURCHASE_TAX_INVOICE_OPERATION_CODES,
        PurchaseTaxInvoices.BUSINESS_PARTNER
    ];
    /**
     * All fields selector.
     */
    PurchaseTaxInvoices.ALL_FIELDS = new core_1.AllFields('*', PurchaseTaxInvoices);
    /**
     * All key fields of the PurchaseTaxInvoices entity.
     */
    PurchaseTaxInvoices._keyFields = [PurchaseTaxInvoices.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseTaxInvoices.
     */
    PurchaseTaxInvoices._keys = PurchaseTaxInvoices._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseTaxInvoices = exports.PurchaseTaxInvoices || (exports.PurchaseTaxInvoices = {}));
exports.PurchaseTaxInvoices = PurchaseTaxInvoices;
//# sourceMappingURL=PurchaseTaxInvoices.js.map