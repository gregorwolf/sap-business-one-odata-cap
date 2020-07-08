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
exports.BankPages = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BankPagesRequestBuilder_1 = require("./BankPagesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BankPages" of service "SAPB1".
 */
var BankPages = /** @class */ (function (_super) {
    __extends(BankPages, _super);
    function BankPages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BankPages`.
     * @returns A builder that constructs instances of entity type `BankPages`.
     */
    BankPages.builder = function () {
        return v4_1.Entity.entityBuilder(BankPages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BankPages` entity type.
     * @returns A `BankPages` request builder.
     */
    BankPages.requestBuilder = function () {
        return new BankPagesRequestBuilder_1.BankPagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BankPages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BankPages`.
     */
    BankPages.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BankPages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BankPages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BankPages.
     */
    BankPages._entityName = 'BankPages';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BankPages.
     */
    BankPages._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BankPages._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BankPages;
}(v4_1.Entity));
exports.BankPages = BankPages;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var Users_1 = require("./Users");
var BusinessPartners_1 = require("./BusinessPartners");
(function (BankPages) {
    /**
     * Static representation of the [[accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.ACCOUNT_CODE = new v4_1.StringField('AccountCode', BankPages, 'Edm.String');
    /**
     * Static representation of the [[sequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.SEQUENCE = new v4_1.NumberField('Sequence', BankPages, 'Edm.Int32');
    /**
     * Static representation of the [[accountName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.ACCOUNT_NAME = new v4_1.StringField('AccountName', BankPages, 'Edm.String');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.REFERENCE = new v4_1.StringField('Reference', BankPages, 'Edm.String');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.DUE_DATE = new v4_1.DateField('DueDate', BankPages, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[memo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.MEMO = new v4_1.StringField('Memo', BankPages, 'Edm.String');
    /**
     * Static representation of the [[debitAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.DEBIT_AMOUNT = new v4_1.NumberField('DebitAmount', BankPages, 'Edm.Double');
    /**
     * Static representation of the [[creditAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.CREDIT_AMOUNT = new v4_1.NumberField('CreditAmount', BankPages, 'Edm.Double');
    /**
     * Static representation of the [[bankMatch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.BANK_MATCH = new v4_1.NumberField('BankMatch', BankPages, 'Edm.Int32');
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.DATA_SOURCE = new v4_1.StringField('DataSource', BankPages, 'Edm.String');
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.USER_SIGNATURE = new v4_1.NumberField('UserSignature', BankPages, 'Edm.Int32');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.EXTERNAL_CODE = new v4_1.StringField('ExternalCode', BankPages, 'Edm.String');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.CARD_CODE = new v4_1.StringField('CardCode', BankPages, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.CARD_NAME = new v4_1.StringField('CardName', BankPages, 'Edm.String');
    /**
     * Static representation of the [[statementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.STATEMENT_NUMBER = new v4_1.NumberField('StatementNumber', BankPages, 'Edm.Int32');
    /**
     * Static representation of the [[invoiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.INVOICE_NUMBER = new v4_1.StringField('InvoiceNumber', BankPages, 'Edm.String');
    /**
     * Static representation of the [[visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.VISUAL_ORDER = new v4_1.NumberField('VisualOrder', BankPages, 'Edm.Int32');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', BankPages, 'Edm.String');
    /**
     * Static representation of the [[invoiceNumberEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.INVOICE_NUMBER_EX = new v4_1.StringField('InvoiceNumberEx', BankPages, 'Edm.String');
    /**
     * Static representation of the [[bicSwiftCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.BIC_SWIFT_CODE = new v4_1.StringField('BICSwiftCode', BankPages, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', BankPages, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.USER = new v4_1.OneToOneLink('User', BankPages, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankPages.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', BankPages, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the BankPages entity.
     */
    BankPages._allFields = [
        BankPages.ACCOUNT_CODE,
        BankPages.SEQUENCE,
        BankPages.ACCOUNT_NAME,
        BankPages.REFERENCE,
        BankPages.DUE_DATE,
        BankPages.MEMO,
        BankPages.DEBIT_AMOUNT,
        BankPages.CREDIT_AMOUNT,
        BankPages.BANK_MATCH,
        BankPages.DATA_SOURCE,
        BankPages.USER_SIGNATURE,
        BankPages.EXTERNAL_CODE,
        BankPages.CARD_CODE,
        BankPages.CARD_NAME,
        BankPages.STATEMENT_NUMBER,
        BankPages.INVOICE_NUMBER,
        BankPages.VISUAL_ORDER,
        BankPages.PAYMENT_REFERENCE,
        BankPages.INVOICE_NUMBER_EX,
        BankPages.BIC_SWIFT_CODE,
        BankPages.CHART_OF_ACCOUNT,
        BankPages.USER,
        BankPages.BUSINESS_PARTNER
    ];
    /**
     * All fields selector.
     */
    BankPages.ALL_FIELDS = new v4_1.AllFields('*', BankPages);
    /**
     * All key fields of the BankPages entity.
     */
    BankPages._keyFields = [BankPages.ACCOUNT_CODE, BankPages.SEQUENCE];
    /**
     * Mapping of all key field names to the respective static field property BankPages.
     */
    BankPages._keys = BankPages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BankPages = exports.BankPages || (exports.BankPages = {}));
exports.BankPages = BankPages;
//# sourceMappingURL=BankPages.js.map