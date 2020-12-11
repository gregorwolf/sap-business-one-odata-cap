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
exports.ChecksforPayment = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ChecksforPaymentRequestBuilder_1 = require("./ChecksforPaymentRequestBuilder");
var ChecksforPaymentLine_1 = require("./ChecksforPaymentLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ChecksforPayment" of service "SAPB1".
 */
var ChecksforPayment = /** @class */ (function (_super) {
    __extends(ChecksforPayment, _super);
    function ChecksforPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ChecksforPayment`.
     * @returns A builder that constructs instances of entity type `ChecksforPayment`.
     */
    ChecksforPayment.builder = function () {
        return core_1.EntityV4.entityBuilder(ChecksforPayment);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ChecksforPayment` entity type.
     * @returns A `ChecksforPayment` request builder.
     */
    ChecksforPayment.requestBuilder = function () {
        return new ChecksforPaymentRequestBuilder_1.ChecksforPaymentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ChecksforPayment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ChecksforPayment`.
     */
    ChecksforPayment.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ChecksforPayment);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ChecksforPayment.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ChecksforPayment.
     */
    ChecksforPayment._entityName = 'ChecksforPayment';
    /**
     * Default url path for the according service.
     */
    ChecksforPayment._defaultServicePath = '/b1s/v2/';
    return ChecksforPayment;
}(core_1.EntityV4));
exports.ChecksforPayment = ChecksforPayment;
var JournalEntries_1 = require("./JournalEntries");
var Countries_1 = require("./Countries");
(function (ChecksforPayment) {
    /**
     * Static representation of the [[checkKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CHECK_KEY = new core_1.NumberField('CheckKey', ChecksforPayment, 'Edm.Int32');
    /**
     * Static representation of the [[checkNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CHECK_NUMBER = new core_1.NumberField('CheckNumber', ChecksforPayment, 'Edm.Int32');
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.BANK_CODE = new core_1.StringField('BankCode', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.BRANCH = new core_1.StringField('Branch', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.BANK_NAME = new core_1.StringField('BankName', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[checkDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CHECK_DATE = new core_1.DateField('CheckDate', ChecksforPayment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[accountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.ACCOUNT_NUMBER = new core_1.StringField('AccountNumber', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.DETAILS = new core_1.StringField('Details', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[journalEntryReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.JOURNAL_ENTRY_REFERENCE = new core_1.StringField('JournalEntryReference', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[paymentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.PAYMENT_DATE = new core_1.DateField('PaymentDate', ChecksforPayment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[paymentNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.PAYMENT_NO = new core_1.NumberField('PaymentNo', ChecksforPayment, 'Edm.Int32');
    /**
     * Static representation of the [[checkAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CHECK_AMOUNT = new core_1.NumberField('CheckAmount', ChecksforPayment, 'Edm.Double');
    /**
     * Static representation of the [[transferable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.TRANSFERABLE = new core_1.EnumField('Transferable', ChecksforPayment);
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.VENDOR_CODE = new core_1.StringField('VendorCode', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[checkCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CHECK_CURRENCY = new core_1.StringField('CheckCurrency', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[canceled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CANCELED = new core_1.EnumField('Canceled', ChecksforPayment);
    /**
     * Static representation of the [[cardOrAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CARD_OR_ACCOUNT = new core_1.EnumField('CardOrAccount', ChecksforPayment);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.PRINTED = new core_1.EnumField('Printed', ChecksforPayment);
    /**
     * Static representation of the [[vendorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.VENDOR_NAME = new core_1.StringField('VendorName', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[signature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.SIGNATURE = new core_1.StringField('Signature', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[customerAccountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CUSTOMER_ACCOUNT_CODE = new core_1.StringField('CustomerAccountCode', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.TRANSACTION_NUMBER = new core_1.NumberField('TransactionNumber', ChecksforPayment, 'Edm.Int32');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.ADDRESS = new core_1.StringField('Address', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[createJournalEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CREATE_JOURNAL_ENTRY = new core_1.EnumField('CreateJournalEntry', ChecksforPayment);
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.UPDATE_DATE = new core_1.DateField('UpdateDate', ChecksforPayment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CREATION_DATE = new core_1.DateField('CreationDate', ChecksforPayment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[taxTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.TAX_TOTAL = new core_1.NumberField('TaxTotal', ChecksforPayment, 'Edm.Double');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.TAX_DATE = new core_1.DateField('TaxDate', ChecksforPayment, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[deductionRefundAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.DEDUCTION_REFUND_AMOUNT = new core_1.NumberField('DeductionRefundAmount', ChecksforPayment, 'Edm.Double');
    /**
     * Static representation of the [[printedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.PRINTED_BY = new core_1.NumberField('PrintedBy', ChecksforPayment, 'Edm.Int32');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.COUNTRY_CODE = new core_1.StringField('CountryCode', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[totalinWords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.TOTALIN_WORDS = new core_1.StringField('TotalinWords', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[addressName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.ADDRESS_NAME = new core_1.StringField('AddressName', ChecksforPayment, 'Edm.String');
    /**
     * Static representation of the [[manualCheck]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.MANUAL_CHECK = new core_1.EnumField('ManualCheck', ChecksforPayment);
    /**
     * Static representation of the [[checksforPaymentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.CHECKSFOR_PAYMENT_LINES = new core_1.CollectionField('ChecksforPaymentLines', ChecksforPayment, ChecksforPaymentLine_1.ChecksforPaymentLine);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', ChecksforPayment, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChecksforPayment.COUNTRY = new core_1.OneToOneLink('Country', ChecksforPayment, Countries_1.Countries);
    /**
     * All fields of the ChecksforPayment entity.
     */
    ChecksforPayment._allFields = [
        ChecksforPayment.CHECK_KEY,
        ChecksforPayment.CHECK_NUMBER,
        ChecksforPayment.BANK_CODE,
        ChecksforPayment.BRANCH,
        ChecksforPayment.BANK_NAME,
        ChecksforPayment.CHECK_DATE,
        ChecksforPayment.ACCOUNT_NUMBER,
        ChecksforPayment.DETAILS,
        ChecksforPayment.JOURNAL_ENTRY_REFERENCE,
        ChecksforPayment.PAYMENT_DATE,
        ChecksforPayment.PAYMENT_NO,
        ChecksforPayment.CHECK_AMOUNT,
        ChecksforPayment.TRANSFERABLE,
        ChecksforPayment.VENDOR_CODE,
        ChecksforPayment.CHECK_CURRENCY,
        ChecksforPayment.CANCELED,
        ChecksforPayment.CARD_OR_ACCOUNT,
        ChecksforPayment.PRINTED,
        ChecksforPayment.VENDOR_NAME,
        ChecksforPayment.SIGNATURE,
        ChecksforPayment.CUSTOMER_ACCOUNT_CODE,
        ChecksforPayment.TRANSACTION_NUMBER,
        ChecksforPayment.ADDRESS,
        ChecksforPayment.CREATE_JOURNAL_ENTRY,
        ChecksforPayment.UPDATE_DATE,
        ChecksforPayment.CREATION_DATE,
        ChecksforPayment.TAX_TOTAL,
        ChecksforPayment.TAX_DATE,
        ChecksforPayment.DEDUCTION_REFUND_AMOUNT,
        ChecksforPayment.PRINTED_BY,
        ChecksforPayment.COUNTRY_CODE,
        ChecksforPayment.TOTALIN_WORDS,
        ChecksforPayment.ADDRESS_NAME,
        ChecksforPayment.MANUAL_CHECK,
        ChecksforPayment.CHECKSFOR_PAYMENT_LINES,
        ChecksforPayment.JOURNAL_ENTRY,
        ChecksforPayment.COUNTRY
    ];
    /**
     * All fields selector.
     */
    ChecksforPayment.ALL_FIELDS = new core_1.AllFields('*', ChecksforPayment);
    /**
     * All key fields of the ChecksforPayment entity.
     */
    ChecksforPayment._keyFields = [ChecksforPayment.CHECK_KEY];
    /**
     * Mapping of all key field names to the respective static field property ChecksforPayment.
     */
    ChecksforPayment._keys = ChecksforPayment._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ChecksforPayment = exports.ChecksforPayment || (exports.ChecksforPayment = {}));
exports.ChecksforPayment = ChecksforPayment;
//# sourceMappingURL=ChecksforPayment.js.map