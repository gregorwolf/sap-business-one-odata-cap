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
exports.VendorPayments = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var VendorPaymentsRequestBuilder_1 = require("./VendorPaymentsRequestBuilder");
var PaymentCheck_1 = require("./PaymentCheck");
var PaymentInvoice_1 = require("./PaymentInvoice");
var PaymentCreditCard_1 = require("./PaymentCreditCard");
var PaymentAccount_1 = require("./PaymentAccount");
var BillOfExchange_1 = require("./BillOfExchange");
var WithholdingTaxCertificatesData_1 = require("./WithholdingTaxCertificatesData");
var CashFlowAssignment_1 = require("./CashFlowAssignment");
var PaymentsApprovalRequest_1 = require("./PaymentsApprovalRequest");
var WithholdingTaxDataWtx_1 = require("./WithholdingTaxDataWtx");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "VendorPayments" of service "SAPB1".
 */
var VendorPayments = /** @class */ (function (_super) {
    __extends(VendorPayments, _super);
    function VendorPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `VendorPayments`.
     * @returns A builder that constructs instances of entity type `VendorPayments`.
     */
    VendorPayments.builder = function () {
        return v4_1.Entity.entityBuilder(VendorPayments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `VendorPayments` entity type.
     * @returns A `VendorPayments` request builder.
     */
    VendorPayments.requestBuilder = function () {
        return new VendorPaymentsRequestBuilder_1.VendorPaymentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `VendorPayments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `VendorPayments`.
     */
    VendorPayments.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, VendorPayments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    VendorPayments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for VendorPayments.
     */
    VendorPayments._entityName = 'VendorPayments';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for VendorPayments.
     */
    VendorPayments._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    VendorPayments._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return VendorPayments;
}(v4_1.Entity));
exports.VendorPayments = VendorPayments;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var Currencies_1 = require("./Currencies");
var Projects_1 = require("./Projects");
var WithholdingTaxCodes_1 = require("./WithholdingTaxCodes");
var Countries_1 = require("./Countries");
var VatGroups_1 = require("./VatGroups");
var TransactionCodes_1 = require("./TransactionCodes");
var WarehouseLocations_1 = require("./WarehouseLocations");
var BusinessPlaces_1 = require("./BusinessPlaces");
var BlanketAgreements_1 = require("./BlanketAgreements");
(function (VendorPayments) {
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_NUM = new v4_1.NumberField('DocNum', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_DATE = new v4_1.DateField('DocDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CARD_CODE = new v4_1.StringField('CardCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CARD_NAME = new v4_1.StringField('CardName', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.ADDRESS = new v4_1.StringField('Address', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[cashAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_ACCOUNT = new v4_1.StringField('CashAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_CURRENCY = new v4_1.StringField('DocCurrency', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[cashSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_SUM = new v4_1.NumberField('CashSum', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[checkAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CHECK_ACCOUNT = new v4_1.StringField('CheckAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[transferAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_ACCOUNT = new v4_1.StringField('TransferAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[transferSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_SUM = new v4_1.NumberField('TransferSum', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[transferDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_DATE = new v4_1.DateField('TransferDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transferReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_REFERENCE = new v4_1.StringField('TransferReference', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_RATE = new v4_1.NumberField('DocRate', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.REFERENCE_1 = new v4_1.StringField('Reference1', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.REFERENCE_2 = new v4_1.StringField('Reference2', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[counterReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.COUNTER_REFERENCE = new v4_1.StringField('CounterReference', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.REMARKS = new v4_1.StringField('Remarks', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.JOURNAL_REMARKS = new v4_1.StringField('JournalRemarks', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TAX_DATE = new v4_1.DateField('TaxDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.SERIES = new v4_1.NumberField('Series', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_CODE = new v4_1.StringField('BankCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_ACCOUNT = new v4_1.StringField('BankAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PROJECT_CODE = new v4_1.StringField('ProjectCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DEDUCTION_PERCENT = new v4_1.NumberField('DeductionPercent', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[deductionSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DEDUCTION_SUM = new v4_1.NumberField('DeductionSum', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[cashSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_SUM_FC = new v4_1.NumberField('CashSumFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[cashSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_SUM_SYS = new v4_1.NumberField('CashSumSys', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[boeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BOE_ACCOUNT = new v4_1.StringField('BoeAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[billOfExchangeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE_AMOUNT = new v4_1.NumberField('BillOfExchangeAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE_AMOUNT_FC = new v4_1.NumberField('BillOfExchangeAmountFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE_AMOUNT_SC = new v4_1.NumberField('BillOfExchangeAmountSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeAgent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE_AGENT = new v4_1.StringField('BillOfExchangeAgent', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_CODE = new v4_1.StringField('WTCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_AMOUNT = new v4_1.NumberField('WTAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_ACCOUNT = new v4_1.StringField('WTAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[wtTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_TAXABLE_AMOUNT = new v4_1.NumberField('WTTaxableAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_CODE = new v4_1.StringField('PayToCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_ENTRY = new v4_1.NumberField('DocEntry', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[taxGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TAX_GROUP = new v4_1.StringField('TaxGroup', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[bankChargeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_CHARGE_AMOUNT = new v4_1.NumberField('BankChargeAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[bankChargeAmountInFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_CHARGE_AMOUNT_IN_FC = new v4_1.NumberField('BankChargeAmountInFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[bankChargeAmountInSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_CHARGE_AMOUNT_IN_SC = new v4_1.NumberField('BankChargeAmountInSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[underOverpaymentdifference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.UNDER_OVERPAYMENTDIFFERENCE = new v4_1.NumberField('UnderOverpaymentdifference', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[underOverpaymentdiffSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.UNDER_OVERPAYMENTDIFF_SC = new v4_1.NumberField('UnderOverpaymentdiffSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_BASE_SUM = new v4_1.NumberField('WtBaseSum', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_BASE_SUM_FC = new v4_1.NumberField('WtBaseSumFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_BASE_SUM_SC = new v4_1.NumberField('WtBaseSumSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.VAT_DATE = new v4_1.DateField('VatDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transactionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSACTION_CODE = new v4_1.StringField('TransactionCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[transferRealAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_REAL_AMOUNT = new v4_1.NumberField('TransferRealAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DUE_DATE = new v4_1.DateField('DueDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.LOCATION_CODE = new v4_1.NumberField('LocationCode', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[underOverpaymentdiffFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.UNDER_OVERPAYMENTDIFF_FC = new v4_1.NumberField('UnderOverpaymentdiffFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BPLID = new v4_1.NumberField('BPLID', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BPL_NAME = new v4_1.StringField('BPLName', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.VAT_REG_NUM = new v4_1.StringField('VATRegNum', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[blanketAgreement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BLANKET_AGREEMENT = new v4_1.NumberField('BlanketAgreement', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_CHECKS = new v4_1.CollectionField('PaymentChecks', VendorPayments, new PaymentCheck_1.PaymentCheckField('', VendorPayments));
    /**
     * Static representation of the [[paymentInvoices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_INVOICES = new v4_1.CollectionField('PaymentInvoices', VendorPayments, new PaymentInvoice_1.PaymentInvoiceField('', VendorPayments));
    /**
     * Static representation of the [[paymentCreditCards]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_CREDIT_CARDS = new v4_1.CollectionField('PaymentCreditCards', VendorPayments, new PaymentCreditCard_1.PaymentCreditCardField('', VendorPayments));
    /**
     * Static representation of the [[paymentAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_ACCOUNTS = new v4_1.CollectionField('PaymentAccounts', VendorPayments, new PaymentAccount_1.PaymentAccountField('', VendorPayments));
    /**
     * Static representation of the [[billOfExchange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE = new BillOfExchange_1.BillOfExchangeField('BillOfExchange', VendorPayments);
    /**
     * Static representation of the [[withholdingTaxCertificatesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WITHHOLDING_TAX_CERTIFICATES_COLLECTION = new v4_1.CollectionField('WithholdingTaxCertificatesCollection', VendorPayments, new WithholdingTaxCertificatesData_1.WithholdingTaxCertificatesDataField('', VendorPayments));
    /**
     * Static representation of the [[cashFlowAssignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_FLOW_ASSIGNMENTS = new v4_1.CollectionField('CashFlowAssignments', VendorPayments, new CashFlowAssignment_1.CashFlowAssignmentField('', VendorPayments));
    /**
     * Static representation of the [[paymentsApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENTS_APPROVAL_REQUESTS = new v4_1.CollectionField('Payments_ApprovalRequests', VendorPayments, new PaymentsApprovalRequest_1.PaymentsApprovalRequestField('', VendorPayments));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', VendorPayments, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', VendorPayments));
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', VendorPayments, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CURRENCY = new v4_1.OneToOneLink('Currency', VendorPayments, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PROJECT = new v4_1.OneToOneLink('Project', VendorPayments, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WITHHOLDING_TAX_CODE = new v4_1.OneToOneLink('WithholdingTaxCode', VendorPayments, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.COUNTRY = new v4_1.OneToOneLink('Country', VendorPayments, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.VAT_GROUP = new v4_1.OneToOneLink('VatGroup', VendorPayments, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSACTION_CODE_2 = new v4_1.OneToOneLink('TransactionCode2', VendorPayments, TransactionCodes_1.TransactionCodes);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WAREHOUSE_LOCATION = new v4_1.OneToOneLink('WarehouseLocation', VendorPayments, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', VendorPayments, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BLANKET_AGREEMENT_2 = new v4_1.OneToOneLink('BlanketAgreement2', VendorPayments, BlanketAgreements_1.BlanketAgreements);
    /**
     * All fields of the VendorPayments entity.
     */
    VendorPayments._allFields = [
        VendorPayments.DOC_NUM,
        VendorPayments.DOC_DATE,
        VendorPayments.CARD_CODE,
        VendorPayments.CARD_NAME,
        VendorPayments.ADDRESS,
        VendorPayments.CASH_ACCOUNT,
        VendorPayments.DOC_CURRENCY,
        VendorPayments.CASH_SUM,
        VendorPayments.CHECK_ACCOUNT,
        VendorPayments.TRANSFER_ACCOUNT,
        VendorPayments.TRANSFER_SUM,
        VendorPayments.TRANSFER_DATE,
        VendorPayments.TRANSFER_REFERENCE,
        VendorPayments.DOC_RATE,
        VendorPayments.REFERENCE_1,
        VendorPayments.REFERENCE_2,
        VendorPayments.COUNTER_REFERENCE,
        VendorPayments.REMARKS,
        VendorPayments.JOURNAL_REMARKS,
        VendorPayments.CONTACT_PERSON_CODE,
        VendorPayments.TAX_DATE,
        VendorPayments.SERIES,
        VendorPayments.BANK_CODE,
        VendorPayments.BANK_ACCOUNT,
        VendorPayments.DISCOUNT_PERCENT,
        VendorPayments.PROJECT_CODE,
        VendorPayments.DEDUCTION_PERCENT,
        VendorPayments.DEDUCTION_SUM,
        VendorPayments.CASH_SUM_FC,
        VendorPayments.CASH_SUM_SYS,
        VendorPayments.BOE_ACCOUNT,
        VendorPayments.BILL_OF_EXCHANGE_AMOUNT,
        VendorPayments.BILL_OF_EXCHANGE_AMOUNT_FC,
        VendorPayments.BILL_OF_EXCHANGE_AMOUNT_SC,
        VendorPayments.BILL_OF_EXCHANGE_AGENT,
        VendorPayments.WT_CODE,
        VendorPayments.WT_AMOUNT,
        VendorPayments.WT_AMOUNT_FC,
        VendorPayments.WT_AMOUNT_SC,
        VendorPayments.WT_ACCOUNT,
        VendorPayments.WT_TAXABLE_AMOUNT,
        VendorPayments.PAY_TO_BANK_CODE,
        VendorPayments.PAY_TO_BANK_BRANCH,
        VendorPayments.PAY_TO_BANK_ACCOUNT_NO,
        VendorPayments.PAY_TO_CODE,
        VendorPayments.PAY_TO_BANK_COUNTRY,
        VendorPayments.DOC_ENTRY,
        VendorPayments.TAX_GROUP,
        VendorPayments.BANK_CHARGE_AMOUNT,
        VendorPayments.BANK_CHARGE_AMOUNT_IN_FC,
        VendorPayments.BANK_CHARGE_AMOUNT_IN_SC,
        VendorPayments.UNDER_OVERPAYMENTDIFFERENCE,
        VendorPayments.UNDER_OVERPAYMENTDIFF_SC,
        VendorPayments.WT_BASE_SUM,
        VendorPayments.WT_BASE_SUM_FC,
        VendorPayments.WT_BASE_SUM_SC,
        VendorPayments.VAT_DATE,
        VendorPayments.TRANSACTION_CODE,
        VendorPayments.TRANSFER_REAL_AMOUNT,
        VendorPayments.DUE_DATE,
        VendorPayments.LOCATION_CODE,
        VendorPayments.CONTROL_ACCOUNT,
        VendorPayments.UNDER_OVERPAYMENTDIFF_FC,
        VendorPayments.BPLID,
        VendorPayments.BPL_NAME,
        VendorPayments.VAT_REG_NUM,
        VendorPayments.BLANKET_AGREEMENT,
        VendorPayments.PAYMENT_CHECKS,
        VendorPayments.PAYMENT_INVOICES,
        VendorPayments.PAYMENT_CREDIT_CARDS,
        VendorPayments.PAYMENT_ACCOUNTS,
        VendorPayments.BILL_OF_EXCHANGE,
        VendorPayments.WITHHOLDING_TAX_CERTIFICATES_COLLECTION,
        VendorPayments.CASH_FLOW_ASSIGNMENTS,
        VendorPayments.PAYMENTS_APPROVAL_REQUESTS,
        VendorPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        VendorPayments.CHART_OF_ACCOUNT,
        VendorPayments.CURRENCY,
        VendorPayments.PROJECT,
        VendorPayments.WITHHOLDING_TAX_CODE,
        VendorPayments.COUNTRY,
        VendorPayments.VAT_GROUP,
        VendorPayments.TRANSACTION_CODE_2,
        VendorPayments.WAREHOUSE_LOCATION,
        VendorPayments.BUSINESS_PLACE,
        VendorPayments.BLANKET_AGREEMENT_2
    ];
    /**
     * All fields selector.
     */
    VendorPayments.ALL_FIELDS = new v4_1.AllFields('*', VendorPayments);
    /**
     * All key fields of the VendorPayments entity.
     */
    VendorPayments._keyFields = [VendorPayments.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property VendorPayments.
     */
    VendorPayments._keys = VendorPayments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(VendorPayments = exports.VendorPayments || (exports.VendorPayments = {}));
exports.VendorPayments = VendorPayments;
//# sourceMappingURL=VendorPayments.js.map