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
exports.BillOfExchangeTransactions = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BillOfExchangeTransactionsRequestBuilder_1 = require("./BillOfExchangeTransactionsRequestBuilder");
var BillOfExchangeTransactionLine_1 = require("./BillOfExchangeTransactionLine");
var BillOfExchangeTransDeposit_1 = require("./BillOfExchangeTransDeposit");
var BillOfExchangeTransBankPage_1 = require("./BillOfExchangeTransBankPage");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BillOfExchangeTransactions" of service "SAPB1".
 */
var BillOfExchangeTransactions = /** @class */ (function (_super) {
    __extends(BillOfExchangeTransactions, _super);
    function BillOfExchangeTransactions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BillOfExchangeTransactions`.
     * @returns A builder that constructs instances of entity type `BillOfExchangeTransactions`.
     */
    BillOfExchangeTransactions.builder = function () {
        return v4_1.Entity.entityBuilder(BillOfExchangeTransactions);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BillOfExchangeTransactions` entity type.
     * @returns A `BillOfExchangeTransactions` request builder.
     */
    BillOfExchangeTransactions.requestBuilder = function () {
        return new BillOfExchangeTransactionsRequestBuilder_1.BillOfExchangeTransactionsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BillOfExchangeTransactions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BillOfExchangeTransactions`.
     */
    BillOfExchangeTransactions.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BillOfExchangeTransactions);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BillOfExchangeTransactions.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BillOfExchangeTransactions.
     */
    BillOfExchangeTransactions._entityName = 'BillOfExchangeTransactions';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BillOfExchangeTransactions.
     */
    BillOfExchangeTransactions._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BillOfExchangeTransactions._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BillOfExchangeTransactions;
}(v4_1.Entity));
exports.BillOfExchangeTransactions = BillOfExchangeTransactions;
var JournalEntries_1 = require("./JournalEntries");
(function (BillOfExchangeTransactions) {
    /**
     * Static representation of the [[transactionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.TRANSACTION_DATE = new v4_1.DateField('TransactionDate', BillOfExchangeTransactions, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transactionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.TRANSACTION_TIME = new v4_1.TimeField('TransactionTime', BillOfExchangeTransactions, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.TRANSACTION_NUMBER = new v4_1.NumberField('TransactionNumber', BillOfExchangeTransactions, 'Edm.Int32');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.POSTING_DATE = new v4_1.DateField('PostingDate', BillOfExchangeTransactions, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.TAX_DATE = new v4_1.DateField('TaxDate', BillOfExchangeTransactions, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[boeTransactionkey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.BOE_TRANSACTIONKEY = new v4_1.NumberField('BOETransactionkey', BillOfExchangeTransactions, 'Edm.Int32');
    /**
     * Static representation of the [[billOfExchangeTransactionLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.BILL_OF_EXCHANGE_TRANSACTION_LINES = new v4_1.CollectionField('BillOfExchangeTransactionLines', BillOfExchangeTransactions, new BillOfExchangeTransactionLine_1.BillOfExchangeTransactionLineField('', BillOfExchangeTransactions));
    /**
     * Static representation of the [[billOfExchangeTransDeposits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.BILL_OF_EXCHANGE_TRANS_DEPOSITS = new v4_1.CollectionField('BillOfExchangeTransDeposits', BillOfExchangeTransactions, new BillOfExchangeTransDeposit_1.BillOfExchangeTransDepositField('', BillOfExchangeTransactions));
    /**
     * Static representation of the [[billOfExchangeTransBankPages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.BILL_OF_EXCHANGE_TRANS_BANK_PAGES = new v4_1.CollectionField('BillOfExchangeTransBankPages', BillOfExchangeTransactions, new BillOfExchangeTransBankPage_1.BillOfExchangeTransBankPageField('', BillOfExchangeTransactions));
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BillOfExchangeTransactions.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', BillOfExchangeTransactions, JournalEntries_1.JournalEntries);
    /**
     * All fields of the BillOfExchangeTransactions entity.
     */
    BillOfExchangeTransactions._allFields = [
        BillOfExchangeTransactions.TRANSACTION_DATE,
        BillOfExchangeTransactions.TRANSACTION_TIME,
        BillOfExchangeTransactions.TRANSACTION_NUMBER,
        BillOfExchangeTransactions.POSTING_DATE,
        BillOfExchangeTransactions.TAX_DATE,
        BillOfExchangeTransactions.BOE_TRANSACTIONKEY,
        BillOfExchangeTransactions.BILL_OF_EXCHANGE_TRANSACTION_LINES,
        BillOfExchangeTransactions.BILL_OF_EXCHANGE_TRANS_DEPOSITS,
        BillOfExchangeTransactions.BILL_OF_EXCHANGE_TRANS_BANK_PAGES,
        BillOfExchangeTransactions.JOURNAL_ENTRY
    ];
    /**
     * All fields selector.
     */
    BillOfExchangeTransactions.ALL_FIELDS = new v4_1.AllFields('*', BillOfExchangeTransactions);
    /**
     * All key fields of the BillOfExchangeTransactions entity.
     */
    BillOfExchangeTransactions._keyFields = [BillOfExchangeTransactions.BOE_TRANSACTIONKEY];
    /**
     * Mapping of all key field names to the respective static field property BillOfExchangeTransactions.
     */
    BillOfExchangeTransactions._keys = BillOfExchangeTransactions._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BillOfExchangeTransactions = exports.BillOfExchangeTransactions || (exports.BillOfExchangeTransactions = {}));
exports.BillOfExchangeTransactions = BillOfExchangeTransactions;
//# sourceMappingURL=BillOfExchangeTransactions.js.map