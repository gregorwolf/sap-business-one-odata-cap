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
exports.IncomingPayments = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var IncomingPaymentsRequestBuilder_1 = require("./IncomingPaymentsRequestBuilder");
var PaymentCheck_1 = require("./PaymentCheck");
var PaymentInvoice_1 = require("./PaymentInvoice");
var PaymentCreditCard_1 = require("./PaymentCreditCard");
var PaymentAccount_1 = require("./PaymentAccount");
var BillOfExchange_1 = require("./BillOfExchange");
var WithholdingTaxCertificatesData_1 = require("./WithholdingTaxCertificatesData");
var CashFlowAssignment_1 = require("./CashFlowAssignment");
var PaymentsApprovalRequest_1 = require("./PaymentsApprovalRequest");
var WithholdingTaxDataWtx_1 = require("./WithholdingTaxDataWtx");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "IncomingPayments" of service "SAPB1".
 */
var IncomingPayments = /** @class */ (function (_super) {
    __extends(IncomingPayments, _super);
    function IncomingPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `IncomingPayments`.
     * @returns A builder that constructs instances of entity type `IncomingPayments`.
     */
    IncomingPayments.builder = function () {
        return core_1.EntityV4.entityBuilder(IncomingPayments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `IncomingPayments` entity type.
     * @returns A `IncomingPayments` request builder.
     */
    IncomingPayments.requestBuilder = function () {
        return new IncomingPaymentsRequestBuilder_1.IncomingPaymentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `IncomingPayments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `IncomingPayments`.
     */
    IncomingPayments.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, IncomingPayments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    IncomingPayments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for IncomingPayments.
     */
    IncomingPayments._entityName = 'IncomingPayments';
    /**
     * Default url path for the according service.
     */
    IncomingPayments._defaultServicePath = '/b1s/v2/';
    return IncomingPayments;
}(core_1.EntityV4));
exports.IncomingPayments = IncomingPayments;
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
(function (IncomingPayments) {
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DOC_NUM = new core_1.NumberField('DocNum', IncomingPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DOC_TYPE = new core_1.EnumField('DocType', IncomingPayments);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.HAND_WRITTEN = new core_1.EnumField('HandWritten', IncomingPayments);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PRINTED = new core_1.EnumField('Printed', IncomingPayments);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DOC_DATE = new core_1.DateField('DocDate', IncomingPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CARD_CODE = new core_1.StringField('CardCode', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CARD_NAME = new core_1.StringField('CardName', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.ADDRESS = new core_1.StringField('Address', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[cashAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CASH_ACCOUNT = new core_1.StringField('CashAccount', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DOC_CURRENCY = new core_1.StringField('DocCurrency', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[cashSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CASH_SUM = new core_1.NumberField('CashSum', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[checkAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CHECK_ACCOUNT = new core_1.StringField('CheckAccount', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[transferAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.TRANSFER_ACCOUNT = new core_1.StringField('TransferAccount', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[transferSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.TRANSFER_SUM = new core_1.NumberField('TransferSum', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[transferDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.TRANSFER_DATE = new core_1.DateField('TransferDate', IncomingPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transferReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.TRANSFER_REFERENCE = new core_1.StringField('TransferReference', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[localCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.LOCAL_CURRENCY = new core_1.EnumField('LocalCurrency', IncomingPayments);
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DOC_RATE = new core_1.NumberField('DocRate', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.REFERENCE_1 = new core_1.StringField('Reference1', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.REFERENCE_2 = new core_1.StringField('Reference2', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[counterReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.COUNTER_REFERENCE = new core_1.StringField('CounterReference', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.REMARKS = new core_1.StringField('Remarks', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.JOURNAL_REMARKS = new core_1.StringField('JournalRemarks', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[splitTransaction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.SPLIT_TRANSACTION = new core_1.EnumField('SplitTransaction', IncomingPayments);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', IncomingPayments, 'Edm.Int32');
    /**
     * Static representation of the [[applyVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.APPLY_VAT = new core_1.EnumField('ApplyVAT', IncomingPayments);
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.TAX_DATE = new core_1.DateField('TaxDate', IncomingPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.SERIES = new core_1.NumberField('Series', IncomingPayments, 'Edm.Int32');
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BANK_CODE = new core_1.StringField('BankCode', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BANK_ACCOUNT = new core_1.StringField('BankAccount', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PROJECT_CODE = new core_1.StringField('ProjectCode', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[currencyIsLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CURRENCY_IS_LOCAL = new core_1.EnumField('CurrencyIsLocal', IncomingPayments);
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DEDUCTION_PERCENT = new core_1.NumberField('DeductionPercent', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[deductionSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DEDUCTION_SUM = new core_1.NumberField('DeductionSum', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[cashSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CASH_SUM_FC = new core_1.NumberField('CashSumFC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[cashSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CASH_SUM_SYS = new core_1.NumberField('CashSumSys', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[boeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BOE_ACCOUNT = new core_1.StringField('BoeAccount', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[billOfExchangeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BILL_OF_EXCHANGE_AMOUNT = new core_1.NumberField('BillOfExchangeAmount', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[billofExchangeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BILLOF_EXCHANGE_STATUS = new core_1.EnumField('BillofExchangeStatus', IncomingPayments);
    /**
     * Static representation of the [[billOfExchangeAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BILL_OF_EXCHANGE_AMOUNT_FC = new core_1.NumberField('BillOfExchangeAmountFC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BILL_OF_EXCHANGE_AMOUNT_SC = new core_1.NumberField('BillOfExchangeAmountSC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeAgent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BILL_OF_EXCHANGE_AGENT = new core_1.StringField('BillOfExchangeAgent', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WT_CODE = new core_1.StringField('WTCode', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WT_AMOUNT = new core_1.NumberField('WTAmount', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WT_ACCOUNT = new core_1.StringField('WTAccount', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[wtTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WT_TAXABLE_AMOUNT = new core_1.NumberField('WTTaxableAmount', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[proforma]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PROFORMA = new core_1.EnumField('Proforma', IncomingPayments);
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAY_TO_CODE = new core_1.StringField('PayToCode', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', IncomingPayments);
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DOC_ENTRY = new core_1.NumberField('DocEntry', IncomingPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAYMENT_PRIORITY = new core_1.EnumField('PaymentPriority', IncomingPayments);
    /**
     * Static representation of the [[taxGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.TAX_GROUP = new core_1.StringField('TaxGroup', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[bankChargeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BANK_CHARGE_AMOUNT = new core_1.NumberField('BankChargeAmount', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[bankChargeAmountInFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BANK_CHARGE_AMOUNT_IN_FC = new core_1.NumberField('BankChargeAmountInFC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[bankChargeAmountInSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BANK_CHARGE_AMOUNT_IN_SC = new core_1.NumberField('BankChargeAmountInSC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[underOverpaymentdifference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.UNDER_OVERPAYMENTDIFFERENCE = new core_1.NumberField('UnderOverpaymentdifference', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[underOverpaymentdiffSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.UNDER_OVERPAYMENTDIFF_SC = new core_1.NumberField('UnderOverpaymentdiffSC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WT_BASE_SUM = new core_1.NumberField('WtBaseSum', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WT_BASE_SUM_FC = new core_1.NumberField('WtBaseSumFC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WT_BASE_SUM_SC = new core_1.NumberField('WtBaseSumSC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.VAT_DATE = new core_1.DateField('VatDate', IncomingPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transactionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.TRANSACTION_CODE = new core_1.StringField('TransactionCode', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[paymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAYMENT_TYPE = new core_1.EnumField('PaymentType', IncomingPayments);
    /**
     * Static representation of the [[transferRealAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.TRANSFER_REAL_AMOUNT = new core_1.NumberField('TransferRealAmount', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', IncomingPayments);
    /**
     * Static representation of the [[docTypte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DOC_TYPTE = new core_1.EnumField('DocTypte', IncomingPayments);
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.DUE_DATE = new core_1.DateField('DueDate', IncomingPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.LOCATION_CODE = new core_1.NumberField('LocationCode', IncomingPayments, 'Edm.Int32');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CANCELLED = new core_1.EnumField('Cancelled', IncomingPayments);
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[underOverpaymentdiffFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.UNDER_OVERPAYMENTDIFF_FC = new core_1.NumberField('UnderOverpaymentdiffFC', IncomingPayments, 'Edm.Double');
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', IncomingPayments);
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BPLID = new core_1.NumberField('BPLID', IncomingPayments, 'Edm.Int32');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BPL_NAME = new core_1.StringField('BPLName', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.VAT_REG_NUM = new core_1.StringField('VATRegNum', IncomingPayments, 'Edm.String');
    /**
     * Static representation of the [[blanketAgreement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BLANKET_AGREEMENT = new core_1.NumberField('BlanketAgreement', IncomingPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAYMENT_CHECKS = new core_1.CollectionField('PaymentChecks', IncomingPayments, PaymentCheck_1.PaymentCheck);
    /**
     * Static representation of the [[paymentInvoices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAYMENT_INVOICES = new core_1.CollectionField('PaymentInvoices', IncomingPayments, PaymentInvoice_1.PaymentInvoice);
    /**
     * Static representation of the [[paymentCreditCards]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAYMENT_CREDIT_CARDS = new core_1.CollectionField('PaymentCreditCards', IncomingPayments, PaymentCreditCard_1.PaymentCreditCard);
    /**
     * Static representation of the [[paymentAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAYMENT_ACCOUNTS = new core_1.CollectionField('PaymentAccounts', IncomingPayments, PaymentAccount_1.PaymentAccount);
    /**
     * Static representation of the [[billOfExchange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BILL_OF_EXCHANGE = new BillOfExchange_1.BillOfExchangeField('BillOfExchange', IncomingPayments);
    /**
     * Static representation of the [[withholdingTaxCertificatesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WITHHOLDING_TAX_CERTIFICATES_COLLECTION = new core_1.CollectionField('WithholdingTaxCertificatesCollection', IncomingPayments, WithholdingTaxCertificatesData_1.WithholdingTaxCertificatesData);
    /**
     * Static representation of the [[cashFlowAssignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CASH_FLOW_ASSIGNMENTS = new core_1.CollectionField('CashFlowAssignments', IncomingPayments, CashFlowAssignment_1.CashFlowAssignment);
    /**
     * Static representation of the [[paymentsApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PAYMENTS_APPROVAL_REQUESTS = new core_1.CollectionField('Payments_ApprovalRequests', IncomingPayments, PaymentsApprovalRequest_1.PaymentsApprovalRequest);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', IncomingPayments, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', IncomingPayments, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.CURRENCY = new core_1.OneToOneLink('Currency', IncomingPayments, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.PROJECT = new core_1.OneToOneLink('Project', IncomingPayments, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WITHHOLDING_TAX_CODE = new core_1.OneToOneLink('WithholdingTaxCode', IncomingPayments, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.COUNTRY = new core_1.OneToOneLink('Country', IncomingPayments, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.VAT_GROUP = new core_1.OneToOneLink('VatGroup', IncomingPayments, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.TRANSACTION_CODE_2 = new core_1.OneToOneLink('TransactionCode2', IncomingPayments, TransactionCodes_1.TransactionCodes);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.WAREHOUSE_LOCATION = new core_1.OneToOneLink('WarehouseLocation', IncomingPayments, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', IncomingPayments, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IncomingPayments.BLANKET_AGREEMENT_2 = new core_1.OneToOneLink('BlanketAgreement2', IncomingPayments, BlanketAgreements_1.BlanketAgreements);
    /**
     * All fields of the IncomingPayments entity.
     */
    IncomingPayments._allFields = [
        IncomingPayments.DOC_NUM,
        IncomingPayments.DOC_TYPE,
        IncomingPayments.HAND_WRITTEN,
        IncomingPayments.PRINTED,
        IncomingPayments.DOC_DATE,
        IncomingPayments.CARD_CODE,
        IncomingPayments.CARD_NAME,
        IncomingPayments.ADDRESS,
        IncomingPayments.CASH_ACCOUNT,
        IncomingPayments.DOC_CURRENCY,
        IncomingPayments.CASH_SUM,
        IncomingPayments.CHECK_ACCOUNT,
        IncomingPayments.TRANSFER_ACCOUNT,
        IncomingPayments.TRANSFER_SUM,
        IncomingPayments.TRANSFER_DATE,
        IncomingPayments.TRANSFER_REFERENCE,
        IncomingPayments.LOCAL_CURRENCY,
        IncomingPayments.DOC_RATE,
        IncomingPayments.REFERENCE_1,
        IncomingPayments.REFERENCE_2,
        IncomingPayments.COUNTER_REFERENCE,
        IncomingPayments.REMARKS,
        IncomingPayments.JOURNAL_REMARKS,
        IncomingPayments.SPLIT_TRANSACTION,
        IncomingPayments.CONTACT_PERSON_CODE,
        IncomingPayments.APPLY_VAT,
        IncomingPayments.TAX_DATE,
        IncomingPayments.SERIES,
        IncomingPayments.BANK_CODE,
        IncomingPayments.BANK_ACCOUNT,
        IncomingPayments.DISCOUNT_PERCENT,
        IncomingPayments.PROJECT_CODE,
        IncomingPayments.CURRENCY_IS_LOCAL,
        IncomingPayments.DEDUCTION_PERCENT,
        IncomingPayments.DEDUCTION_SUM,
        IncomingPayments.CASH_SUM_FC,
        IncomingPayments.CASH_SUM_SYS,
        IncomingPayments.BOE_ACCOUNT,
        IncomingPayments.BILL_OF_EXCHANGE_AMOUNT,
        IncomingPayments.BILLOF_EXCHANGE_STATUS,
        IncomingPayments.BILL_OF_EXCHANGE_AMOUNT_FC,
        IncomingPayments.BILL_OF_EXCHANGE_AMOUNT_SC,
        IncomingPayments.BILL_OF_EXCHANGE_AGENT,
        IncomingPayments.WT_CODE,
        IncomingPayments.WT_AMOUNT,
        IncomingPayments.WT_AMOUNT_FC,
        IncomingPayments.WT_AMOUNT_SC,
        IncomingPayments.WT_ACCOUNT,
        IncomingPayments.WT_TAXABLE_AMOUNT,
        IncomingPayments.PROFORMA,
        IncomingPayments.PAY_TO_BANK_CODE,
        IncomingPayments.PAY_TO_BANK_BRANCH,
        IncomingPayments.PAY_TO_BANK_ACCOUNT_NO,
        IncomingPayments.PAY_TO_CODE,
        IncomingPayments.PAY_TO_BANK_COUNTRY,
        IncomingPayments.IS_PAY_TO_BANK,
        IncomingPayments.DOC_ENTRY,
        IncomingPayments.PAYMENT_PRIORITY,
        IncomingPayments.TAX_GROUP,
        IncomingPayments.BANK_CHARGE_AMOUNT,
        IncomingPayments.BANK_CHARGE_AMOUNT_IN_FC,
        IncomingPayments.BANK_CHARGE_AMOUNT_IN_SC,
        IncomingPayments.UNDER_OVERPAYMENTDIFFERENCE,
        IncomingPayments.UNDER_OVERPAYMENTDIFF_SC,
        IncomingPayments.WT_BASE_SUM,
        IncomingPayments.WT_BASE_SUM_FC,
        IncomingPayments.WT_BASE_SUM_SC,
        IncomingPayments.VAT_DATE,
        IncomingPayments.TRANSACTION_CODE,
        IncomingPayments.PAYMENT_TYPE,
        IncomingPayments.TRANSFER_REAL_AMOUNT,
        IncomingPayments.DOC_OBJECT_CODE,
        IncomingPayments.DOC_TYPTE,
        IncomingPayments.DUE_DATE,
        IncomingPayments.LOCATION_CODE,
        IncomingPayments.CANCELLED,
        IncomingPayments.CONTROL_ACCOUNT,
        IncomingPayments.UNDER_OVERPAYMENTDIFF_FC,
        IncomingPayments.AUTHORIZATION_STATUS,
        IncomingPayments.BPLID,
        IncomingPayments.BPL_NAME,
        IncomingPayments.VAT_REG_NUM,
        IncomingPayments.BLANKET_AGREEMENT,
        IncomingPayments.PAYMENT_CHECKS,
        IncomingPayments.PAYMENT_INVOICES,
        IncomingPayments.PAYMENT_CREDIT_CARDS,
        IncomingPayments.PAYMENT_ACCOUNTS,
        IncomingPayments.BILL_OF_EXCHANGE,
        IncomingPayments.WITHHOLDING_TAX_CERTIFICATES_COLLECTION,
        IncomingPayments.CASH_FLOW_ASSIGNMENTS,
        IncomingPayments.PAYMENTS_APPROVAL_REQUESTS,
        IncomingPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        IncomingPayments.CHART_OF_ACCOUNT,
        IncomingPayments.CURRENCY,
        IncomingPayments.PROJECT,
        IncomingPayments.WITHHOLDING_TAX_CODE,
        IncomingPayments.COUNTRY,
        IncomingPayments.VAT_GROUP,
        IncomingPayments.TRANSACTION_CODE_2,
        IncomingPayments.WAREHOUSE_LOCATION,
        IncomingPayments.BUSINESS_PLACE,
        IncomingPayments.BLANKET_AGREEMENT_2
    ];
    /**
     * All fields selector.
     */
    IncomingPayments.ALL_FIELDS = new core_1.AllFields('*', IncomingPayments);
    /**
     * All key fields of the IncomingPayments entity.
     */
    IncomingPayments._keyFields = [IncomingPayments.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property IncomingPayments.
     */
    IncomingPayments._keys = IncomingPayments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(IncomingPayments = exports.IncomingPayments || (exports.IncomingPayments = {}));
exports.IncomingPayments = IncomingPayments;
//# sourceMappingURL=IncomingPayments.js.map