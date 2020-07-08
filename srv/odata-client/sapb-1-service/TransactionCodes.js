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
exports.TransactionCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TransactionCodesRequestBuilder_1 = require("./TransactionCodesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "TransactionCodes" of service "SAPB1".
 */
var TransactionCodes = /** @class */ (function (_super) {
    __extends(TransactionCodes, _super);
    function TransactionCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TransactionCodes`.
     * @returns A builder that constructs instances of entity type `TransactionCodes`.
     */
    TransactionCodes.builder = function () {
        return v4_1.Entity.entityBuilder(TransactionCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TransactionCodes` entity type.
     * @returns A `TransactionCodes` request builder.
     */
    TransactionCodes.requestBuilder = function () {
        return new TransactionCodesRequestBuilder_1.TransactionCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TransactionCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TransactionCodes`.
     */
    TransactionCodes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, TransactionCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TransactionCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TransactionCodes.
     */
    TransactionCodes._entityName = 'TransactionCodes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TransactionCodes.
     */
    TransactionCodes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    TransactionCodes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TransactionCodes;
}(v4_1.Entity));
exports.TransactionCodes = TransactionCodes;
var VendorPayments_1 = require("./VendorPayments");
var JournalEntries_1 = require("./JournalEntries");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var PaymentDrafts_1 = require("./PaymentDrafts");
var IncomingPayments_1 = require("./IncomingPayments");
(function (TransactionCodes) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TransactionCodes.CODE = new v4_1.StringField('Code', TransactionCodes, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TransactionCodes.DESCRIPTION = new v4_1.StringField('Description', TransactionCodes, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TransactionCodes.VENDOR_PAYMENTS = new v4_1.OneToManyLink('VendorPayments', TransactionCodes, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TransactionCodes.JOURNAL_ENTRIES = new v4_1.OneToManyLink('JournalEntries', TransactionCodes, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TransactionCodes.CHART_OF_ACCOUNTS = new v4_1.OneToManyLink('ChartOfAccounts', TransactionCodes, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TransactionCodes.PAYMENT_DRAFTS = new v4_1.OneToManyLink('PaymentDrafts', TransactionCodes, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TransactionCodes.INCOMING_PAYMENTS = new v4_1.OneToManyLink('IncomingPayments', TransactionCodes, IncomingPayments_1.IncomingPayments);
    /**
     * All fields of the TransactionCodes entity.
     */
    TransactionCodes._allFields = [
        TransactionCodes.CODE,
        TransactionCodes.DESCRIPTION,
        TransactionCodes.VENDOR_PAYMENTS,
        TransactionCodes.JOURNAL_ENTRIES,
        TransactionCodes.CHART_OF_ACCOUNTS,
        TransactionCodes.PAYMENT_DRAFTS,
        TransactionCodes.INCOMING_PAYMENTS
    ];
    /**
     * All fields selector.
     */
    TransactionCodes.ALL_FIELDS = new v4_1.AllFields('*', TransactionCodes);
    /**
     * All key fields of the TransactionCodes entity.
     */
    TransactionCodes._keyFields = [TransactionCodes.CODE];
    /**
     * Mapping of all key field names to the respective static field property TransactionCodes.
     */
    TransactionCodes._keys = TransactionCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TransactionCodes = exports.TransactionCodes || (exports.TransactionCodes = {}));
exports.TransactionCodes = TransactionCodes;
//# sourceMappingURL=TransactionCodes.js.map