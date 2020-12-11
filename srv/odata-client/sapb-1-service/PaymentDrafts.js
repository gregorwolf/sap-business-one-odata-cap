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
exports.PaymentDrafts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PaymentDraftsRequestBuilder_1 = require("./PaymentDraftsRequestBuilder");
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
 * This class represents the entity "PaymentDrafts" of service "SAPB1".
 */
var PaymentDrafts = /** @class */ (function (_super) {
    __extends(PaymentDrafts, _super);
    function PaymentDrafts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PaymentDrafts`.
     * @returns A builder that constructs instances of entity type `PaymentDrafts`.
     */
    PaymentDrafts.builder = function () {
        return core_1.EntityV4.entityBuilder(PaymentDrafts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentDrafts` entity type.
     * @returns A `PaymentDrafts` request builder.
     */
    PaymentDrafts.requestBuilder = function () {
        return new PaymentDraftsRequestBuilder_1.PaymentDraftsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentDrafts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentDrafts`.
     */
    PaymentDrafts.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PaymentDrafts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentDrafts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentDrafts.
     */
    PaymentDrafts._entityName = 'PaymentDrafts';
    /**
     * Default url path for the according service.
     */
    PaymentDrafts._defaultServicePath = '/b1s/v2/';
    return PaymentDrafts;
}(core_1.EntityV4));
exports.PaymentDrafts = PaymentDrafts;
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
(function (PaymentDrafts) {
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DOC_NUM = new core_1.NumberField('DocNum', PaymentDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DOC_TYPE = new core_1.EnumField('DocType', PaymentDrafts);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.HAND_WRITTEN = new core_1.EnumField('HandWritten', PaymentDrafts);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PRINTED = new core_1.EnumField('Printed', PaymentDrafts);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DOC_DATE = new core_1.DateField('DocDate', PaymentDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CARD_CODE = new core_1.StringField('CardCode', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CARD_NAME = new core_1.StringField('CardName', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.ADDRESS = new core_1.StringField('Address', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[cashAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CASH_ACCOUNT = new core_1.StringField('CashAccount', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DOC_CURRENCY = new core_1.StringField('DocCurrency', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[cashSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CASH_SUM = new core_1.NumberField('CashSum', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[checkAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CHECK_ACCOUNT = new core_1.StringField('CheckAccount', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[transferAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.TRANSFER_ACCOUNT = new core_1.StringField('TransferAccount', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[transferSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.TRANSFER_SUM = new core_1.NumberField('TransferSum', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[transferDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.TRANSFER_DATE = new core_1.DateField('TransferDate', PaymentDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transferReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.TRANSFER_REFERENCE = new core_1.StringField('TransferReference', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[localCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.LOCAL_CURRENCY = new core_1.EnumField('LocalCurrency', PaymentDrafts);
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DOC_RATE = new core_1.NumberField('DocRate', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.REFERENCE_1 = new core_1.StringField('Reference1', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.REFERENCE_2 = new core_1.StringField('Reference2', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[counterReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.COUNTER_REFERENCE = new core_1.StringField('CounterReference', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.REMARKS = new core_1.StringField('Remarks', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.JOURNAL_REMARKS = new core_1.StringField('JournalRemarks', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[splitTransaction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.SPLIT_TRANSACTION = new core_1.EnumField('SplitTransaction', PaymentDrafts);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', PaymentDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[applyVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.APPLY_VAT = new core_1.EnumField('ApplyVAT', PaymentDrafts);
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.TAX_DATE = new core_1.DateField('TaxDate', PaymentDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.SERIES = new core_1.NumberField('Series', PaymentDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BANK_CODE = new core_1.StringField('BankCode', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BANK_ACCOUNT = new core_1.StringField('BankAccount', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PROJECT_CODE = new core_1.StringField('ProjectCode', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[currencyIsLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CURRENCY_IS_LOCAL = new core_1.EnumField('CurrencyIsLocal', PaymentDrafts);
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DEDUCTION_PERCENT = new core_1.NumberField('DeductionPercent', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[deductionSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DEDUCTION_SUM = new core_1.NumberField('DeductionSum', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[cashSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CASH_SUM_FC = new core_1.NumberField('CashSumFC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[cashSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CASH_SUM_SYS = new core_1.NumberField('CashSumSys', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[boeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BOE_ACCOUNT = new core_1.StringField('BoeAccount', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[billOfExchangeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BILL_OF_EXCHANGE_AMOUNT = new core_1.NumberField('BillOfExchangeAmount', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[billofExchangeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BILLOF_EXCHANGE_STATUS = new core_1.EnumField('BillofExchangeStatus', PaymentDrafts);
    /**
     * Static representation of the [[billOfExchangeAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BILL_OF_EXCHANGE_AMOUNT_FC = new core_1.NumberField('BillOfExchangeAmountFC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BILL_OF_EXCHANGE_AMOUNT_SC = new core_1.NumberField('BillOfExchangeAmountSC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeAgent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BILL_OF_EXCHANGE_AGENT = new core_1.StringField('BillOfExchangeAgent', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WT_CODE = new core_1.StringField('WTCode', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WT_AMOUNT = new core_1.NumberField('WTAmount', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[wtAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WT_ACCOUNT = new core_1.StringField('WTAccount', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[wtTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WT_TAXABLE_AMOUNT = new core_1.NumberField('WTTaxableAmount', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[proforma]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PROFORMA = new core_1.EnumField('Proforma', PaymentDrafts);
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAY_TO_CODE = new core_1.StringField('PayToCode', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', PaymentDrafts);
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DOC_ENTRY = new core_1.NumberField('DocEntry', PaymentDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[paymentPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAYMENT_PRIORITY = new core_1.EnumField('PaymentPriority', PaymentDrafts);
    /**
     * Static representation of the [[taxGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.TAX_GROUP = new core_1.StringField('TaxGroup', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[bankChargeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BANK_CHARGE_AMOUNT = new core_1.NumberField('BankChargeAmount', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[bankChargeAmountInFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BANK_CHARGE_AMOUNT_IN_FC = new core_1.NumberField('BankChargeAmountInFC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[bankChargeAmountInSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BANK_CHARGE_AMOUNT_IN_SC = new core_1.NumberField('BankChargeAmountInSC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[underOverpaymentdifference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.UNDER_OVERPAYMENTDIFFERENCE = new core_1.NumberField('UnderOverpaymentdifference', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[underOverpaymentdiffSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.UNDER_OVERPAYMENTDIFF_SC = new core_1.NumberField('UnderOverpaymentdiffSC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WT_BASE_SUM = new core_1.NumberField('WtBaseSum', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WT_BASE_SUM_FC = new core_1.NumberField('WtBaseSumFC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WT_BASE_SUM_SC = new core_1.NumberField('WtBaseSumSC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.VAT_DATE = new core_1.DateField('VatDate', PaymentDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transactionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.TRANSACTION_CODE = new core_1.StringField('TransactionCode', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[paymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAYMENT_TYPE = new core_1.EnumField('PaymentType', PaymentDrafts);
    /**
     * Static representation of the [[transferRealAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.TRANSFER_REAL_AMOUNT = new core_1.NumberField('TransferRealAmount', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', PaymentDrafts);
    /**
     * Static representation of the [[docTypte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DOC_TYPTE = new core_1.EnumField('DocTypte', PaymentDrafts);
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.DUE_DATE = new core_1.DateField('DueDate', PaymentDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.LOCATION_CODE = new core_1.NumberField('LocationCode', PaymentDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CANCELLED = new core_1.EnumField('Cancelled', PaymentDrafts);
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[underOverpaymentdiffFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.UNDER_OVERPAYMENTDIFF_FC = new core_1.NumberField('UnderOverpaymentdiffFC', PaymentDrafts, 'Edm.Double');
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', PaymentDrafts);
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BPLID = new core_1.NumberField('BPLID', PaymentDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BPL_NAME = new core_1.StringField('BPLName', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.VAT_REG_NUM = new core_1.StringField('VATRegNum', PaymentDrafts, 'Edm.String');
    /**
     * Static representation of the [[blanketAgreement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BLANKET_AGREEMENT = new core_1.NumberField('BlanketAgreement', PaymentDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[paymentChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAYMENT_CHECKS = new core_1.CollectionField('PaymentChecks', PaymentDrafts, PaymentCheck_1.PaymentCheck);
    /**
     * Static representation of the [[paymentInvoices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAYMENT_INVOICES = new core_1.CollectionField('PaymentInvoices', PaymentDrafts, PaymentInvoice_1.PaymentInvoice);
    /**
     * Static representation of the [[paymentCreditCards]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAYMENT_CREDIT_CARDS = new core_1.CollectionField('PaymentCreditCards', PaymentDrafts, PaymentCreditCard_1.PaymentCreditCard);
    /**
     * Static representation of the [[paymentAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAYMENT_ACCOUNTS = new core_1.CollectionField('PaymentAccounts', PaymentDrafts, PaymentAccount_1.PaymentAccount);
    /**
     * Static representation of the [[billOfExchange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BILL_OF_EXCHANGE = new BillOfExchange_1.BillOfExchangeField('BillOfExchange', PaymentDrafts);
    /**
     * Static representation of the [[withholdingTaxCertificatesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WITHHOLDING_TAX_CERTIFICATES_COLLECTION = new core_1.CollectionField('WithholdingTaxCertificatesCollection', PaymentDrafts, WithholdingTaxCertificatesData_1.WithholdingTaxCertificatesData);
    /**
     * Static representation of the [[cashFlowAssignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CASH_FLOW_ASSIGNMENTS = new core_1.CollectionField('CashFlowAssignments', PaymentDrafts, CashFlowAssignment_1.CashFlowAssignment);
    /**
     * Static representation of the [[paymentsApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PAYMENTS_APPROVAL_REQUESTS = new core_1.CollectionField('Payments_ApprovalRequests', PaymentDrafts, PaymentsApprovalRequest_1.PaymentsApprovalRequest);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', PaymentDrafts, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', PaymentDrafts, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.CURRENCY = new core_1.OneToOneLink('Currency', PaymentDrafts, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.PROJECT = new core_1.OneToOneLink('Project', PaymentDrafts, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WITHHOLDING_TAX_CODE = new core_1.OneToOneLink('WithholdingTaxCode', PaymentDrafts, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.COUNTRY = new core_1.OneToOneLink('Country', PaymentDrafts, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.VAT_GROUP = new core_1.OneToOneLink('VatGroup', PaymentDrafts, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.TRANSACTION_CODE_2 = new core_1.OneToOneLink('TransactionCode2', PaymentDrafts, TransactionCodes_1.TransactionCodes);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.WAREHOUSE_LOCATION = new core_1.OneToOneLink('WarehouseLocation', PaymentDrafts, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', PaymentDrafts, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentDrafts.BLANKET_AGREEMENT_2 = new core_1.OneToOneLink('BlanketAgreement2', PaymentDrafts, BlanketAgreements_1.BlanketAgreements);
    /**
     * All fields of the PaymentDrafts entity.
     */
    PaymentDrafts._allFields = [
        PaymentDrafts.DOC_NUM,
        PaymentDrafts.DOC_TYPE,
        PaymentDrafts.HAND_WRITTEN,
        PaymentDrafts.PRINTED,
        PaymentDrafts.DOC_DATE,
        PaymentDrafts.CARD_CODE,
        PaymentDrafts.CARD_NAME,
        PaymentDrafts.ADDRESS,
        PaymentDrafts.CASH_ACCOUNT,
        PaymentDrafts.DOC_CURRENCY,
        PaymentDrafts.CASH_SUM,
        PaymentDrafts.CHECK_ACCOUNT,
        PaymentDrafts.TRANSFER_ACCOUNT,
        PaymentDrafts.TRANSFER_SUM,
        PaymentDrafts.TRANSFER_DATE,
        PaymentDrafts.TRANSFER_REFERENCE,
        PaymentDrafts.LOCAL_CURRENCY,
        PaymentDrafts.DOC_RATE,
        PaymentDrafts.REFERENCE_1,
        PaymentDrafts.REFERENCE_2,
        PaymentDrafts.COUNTER_REFERENCE,
        PaymentDrafts.REMARKS,
        PaymentDrafts.JOURNAL_REMARKS,
        PaymentDrafts.SPLIT_TRANSACTION,
        PaymentDrafts.CONTACT_PERSON_CODE,
        PaymentDrafts.APPLY_VAT,
        PaymentDrafts.TAX_DATE,
        PaymentDrafts.SERIES,
        PaymentDrafts.BANK_CODE,
        PaymentDrafts.BANK_ACCOUNT,
        PaymentDrafts.DISCOUNT_PERCENT,
        PaymentDrafts.PROJECT_CODE,
        PaymentDrafts.CURRENCY_IS_LOCAL,
        PaymentDrafts.DEDUCTION_PERCENT,
        PaymentDrafts.DEDUCTION_SUM,
        PaymentDrafts.CASH_SUM_FC,
        PaymentDrafts.CASH_SUM_SYS,
        PaymentDrafts.BOE_ACCOUNT,
        PaymentDrafts.BILL_OF_EXCHANGE_AMOUNT,
        PaymentDrafts.BILLOF_EXCHANGE_STATUS,
        PaymentDrafts.BILL_OF_EXCHANGE_AMOUNT_FC,
        PaymentDrafts.BILL_OF_EXCHANGE_AMOUNT_SC,
        PaymentDrafts.BILL_OF_EXCHANGE_AGENT,
        PaymentDrafts.WT_CODE,
        PaymentDrafts.WT_AMOUNT,
        PaymentDrafts.WT_AMOUNT_FC,
        PaymentDrafts.WT_AMOUNT_SC,
        PaymentDrafts.WT_ACCOUNT,
        PaymentDrafts.WT_TAXABLE_AMOUNT,
        PaymentDrafts.PROFORMA,
        PaymentDrafts.PAY_TO_BANK_CODE,
        PaymentDrafts.PAY_TO_BANK_BRANCH,
        PaymentDrafts.PAY_TO_BANK_ACCOUNT_NO,
        PaymentDrafts.PAY_TO_CODE,
        PaymentDrafts.PAY_TO_BANK_COUNTRY,
        PaymentDrafts.IS_PAY_TO_BANK,
        PaymentDrafts.DOC_ENTRY,
        PaymentDrafts.PAYMENT_PRIORITY,
        PaymentDrafts.TAX_GROUP,
        PaymentDrafts.BANK_CHARGE_AMOUNT,
        PaymentDrafts.BANK_CHARGE_AMOUNT_IN_FC,
        PaymentDrafts.BANK_CHARGE_AMOUNT_IN_SC,
        PaymentDrafts.UNDER_OVERPAYMENTDIFFERENCE,
        PaymentDrafts.UNDER_OVERPAYMENTDIFF_SC,
        PaymentDrafts.WT_BASE_SUM,
        PaymentDrafts.WT_BASE_SUM_FC,
        PaymentDrafts.WT_BASE_SUM_SC,
        PaymentDrafts.VAT_DATE,
        PaymentDrafts.TRANSACTION_CODE,
        PaymentDrafts.PAYMENT_TYPE,
        PaymentDrafts.TRANSFER_REAL_AMOUNT,
        PaymentDrafts.DOC_OBJECT_CODE,
        PaymentDrafts.DOC_TYPTE,
        PaymentDrafts.DUE_DATE,
        PaymentDrafts.LOCATION_CODE,
        PaymentDrafts.CANCELLED,
        PaymentDrafts.CONTROL_ACCOUNT,
        PaymentDrafts.UNDER_OVERPAYMENTDIFF_FC,
        PaymentDrafts.AUTHORIZATION_STATUS,
        PaymentDrafts.BPLID,
        PaymentDrafts.BPL_NAME,
        PaymentDrafts.VAT_REG_NUM,
        PaymentDrafts.BLANKET_AGREEMENT,
        PaymentDrafts.PAYMENT_CHECKS,
        PaymentDrafts.PAYMENT_INVOICES,
        PaymentDrafts.PAYMENT_CREDIT_CARDS,
        PaymentDrafts.PAYMENT_ACCOUNTS,
        PaymentDrafts.BILL_OF_EXCHANGE,
        PaymentDrafts.WITHHOLDING_TAX_CERTIFICATES_COLLECTION,
        PaymentDrafts.CASH_FLOW_ASSIGNMENTS,
        PaymentDrafts.PAYMENTS_APPROVAL_REQUESTS,
        PaymentDrafts.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PaymentDrafts.CHART_OF_ACCOUNT,
        PaymentDrafts.CURRENCY,
        PaymentDrafts.PROJECT,
        PaymentDrafts.WITHHOLDING_TAX_CODE,
        PaymentDrafts.COUNTRY,
        PaymentDrafts.VAT_GROUP,
        PaymentDrafts.TRANSACTION_CODE_2,
        PaymentDrafts.WAREHOUSE_LOCATION,
        PaymentDrafts.BUSINESS_PLACE,
        PaymentDrafts.BLANKET_AGREEMENT_2
    ];
    /**
     * All fields selector.
     */
    PaymentDrafts.ALL_FIELDS = new core_1.AllFields('*', PaymentDrafts);
    /**
     * All key fields of the PaymentDrafts entity.
     */
    PaymentDrafts._keyFields = [PaymentDrafts.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PaymentDrafts.
     */
    PaymentDrafts._keys = PaymentDrafts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentDrafts = exports.PaymentDrafts || (exports.PaymentDrafts = {}));
exports.PaymentDrafts = PaymentDrafts;
//# sourceMappingURL=PaymentDrafts.js.map