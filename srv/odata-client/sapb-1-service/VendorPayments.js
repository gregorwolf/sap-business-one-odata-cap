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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "VendorPayments" of service "SAPB1".
 */
var VendorPayments = /** @class */ (function (_super) {
    __extends(VendorPayments, _super);
    function VendorPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `VendorPayments`.
     * @returns A builder that constructs instances of entity type `VendorPayments`.
     */
    VendorPayments.builder = function () {
        return core_1.EntityV4.entityBuilder(VendorPayments);
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
        return core_1.EntityV4.customFieldSelector(fieldName, VendorPayments);
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
     * Default url path for the according service.
     */
    VendorPayments._defaultServicePath = '/b1s/v2/';
    return VendorPayments;
}(core_1.EntityV4));
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
    VendorPayments.DOC_NUM = new core_1.NumberField('DocNum', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_TYPE = new core_1.EnumField('DocType', VendorPayments);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.HAND_WRITTEN = new core_1.EnumField('HandWritten', VendorPayments);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PRINTED = new core_1.EnumField('Printed', VendorPayments);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_DATE = new core_1.DateField('DocDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CARD_CODE = new core_1.StringField('CardCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CARD_NAME = new core_1.StringField('CardName', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.ADDRESS = new core_1.StringField('Address', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[cashAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_ACCOUNT = new core_1.StringField('CashAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_CURRENCY = new core_1.StringField('DocCurrency', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[cashSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_SUM = new core_1.NumberField('CashSum', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[checkAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CHECK_ACCOUNT = new core_1.StringField('CheckAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[transferAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_ACCOUNT = new core_1.StringField('TransferAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[transferSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_SUM = new core_1.NumberField('TransferSum', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[transferDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_DATE = new core_1.DateField('TransferDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transferReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_REFERENCE = new core_1.StringField('TransferReference', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[localCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.LOCAL_CURRENCY = new core_1.EnumField('LocalCurrency', VendorPayments);
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_RATE = new core_1.NumberField('DocRate', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.REFERENCE_1 = new core_1.StringField('Reference1', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.REFERENCE_2 = new core_1.StringField('Reference2', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[counterReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.COUNTER_REFERENCE = new core_1.StringField('CounterReference', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.REMARKS = new core_1.StringField('Remarks', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.JOURNAL_REMARKS = new core_1.StringField('JournalRemarks', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[splitTransaction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.SPLIT_TRANSACTION = new core_1.EnumField('SplitTransaction', VendorPayments);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[applyVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.APPLY_VAT = new core_1.EnumField('ApplyVAT', VendorPayments);
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TAX_DATE = new core_1.DateField('TaxDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.SERIES = new core_1.NumberField('Series', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_CODE = new core_1.StringField('BankCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_ACCOUNT = new core_1.StringField('BankAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PROJECT_CODE = new core_1.StringField('ProjectCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[currencyIsLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CURRENCY_IS_LOCAL = new core_1.EnumField('CurrencyIsLocal', VendorPayments);
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DEDUCTION_PERCENT = new core_1.NumberField('DeductionPercent', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[deductionSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DEDUCTION_SUM = new core_1.NumberField('DeductionSum', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[cashSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_SUM_FC = new core_1.NumberField('CashSumFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[cashSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_SUM_SYS = new core_1.NumberField('CashSumSys', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[boeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BOE_ACCOUNT = new core_1.StringField('BoeAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[billOfExchangeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE_AMOUNT = new core_1.NumberField('BillOfExchangeAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[billofExchangeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILLOF_EXCHANGE_STATUS = new core_1.EnumField('BillofExchangeStatus', VendorPayments);
    /**
     * Static representation of the [[billOfExchangeAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE_AMOUNT_FC = new core_1.NumberField('BillOfExchangeAmountFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE_AMOUNT_SC = new core_1.NumberField('BillOfExchangeAmountSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeAgent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE_AGENT = new core_1.StringField('BillOfExchangeAgent', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_CODE = new core_1.StringField('WTCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_AMOUNT = new core_1.NumberField('WTAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_ACCOUNT = new core_1.StringField('WTAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[wtTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_TAXABLE_AMOUNT = new core_1.NumberField('WTTaxableAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[proforma]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PROFORMA = new core_1.EnumField('Proforma', VendorPayments);
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_CODE = new core_1.StringField('PayToCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', VendorPayments);
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_ENTRY = new core_1.NumberField('DocEntry', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_PRIORITY = new core_1.EnumField('PaymentPriority', VendorPayments);
    /**
     * Static representation of the [[taxGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TAX_GROUP = new core_1.StringField('TaxGroup', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[bankChargeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_CHARGE_AMOUNT = new core_1.NumberField('BankChargeAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[bankChargeAmountInFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_CHARGE_AMOUNT_IN_FC = new core_1.NumberField('BankChargeAmountInFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[bankChargeAmountInSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BANK_CHARGE_AMOUNT_IN_SC = new core_1.NumberField('BankChargeAmountInSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[underOverpaymentdifference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.UNDER_OVERPAYMENTDIFFERENCE = new core_1.NumberField('UnderOverpaymentdifference', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[underOverpaymentdiffSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.UNDER_OVERPAYMENTDIFF_SC = new core_1.NumberField('UnderOverpaymentdiffSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_BASE_SUM = new core_1.NumberField('WtBaseSum', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_BASE_SUM_FC = new core_1.NumberField('WtBaseSumFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtBaseSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WT_BASE_SUM_SC = new core_1.NumberField('WtBaseSumSC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.VAT_DATE = new core_1.DateField('VatDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transactionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSACTION_CODE = new core_1.StringField('TransactionCode', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[paymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_TYPE = new core_1.EnumField('PaymentType', VendorPayments);
    /**
     * Static representation of the [[transferRealAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSFER_REAL_AMOUNT = new core_1.NumberField('TransferRealAmount', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', VendorPayments);
    /**
     * Static representation of the [[docTypte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DOC_TYPTE = new core_1.EnumField('DocTypte', VendorPayments);
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.DUE_DATE = new core_1.DateField('DueDate', VendorPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.LOCATION_CODE = new core_1.NumberField('LocationCode', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CANCELLED = new core_1.EnumField('Cancelled', VendorPayments);
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[underOverpaymentdiffFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.UNDER_OVERPAYMENTDIFF_FC = new core_1.NumberField('UnderOverpaymentdiffFC', VendorPayments, 'Edm.Double');
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', VendorPayments);
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BPLID = new core_1.NumberField('BPLID', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BPL_NAME = new core_1.StringField('BPLName', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.VAT_REG_NUM = new core_1.StringField('VATRegNum', VendorPayments, 'Edm.String');
    /**
     * Static representation of the [[blanketAgreement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BLANKET_AGREEMENT = new core_1.NumberField('BlanketAgreement', VendorPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_CHECKS = new core_1.CollectionField('PaymentChecks', VendorPayments, PaymentCheck_1.PaymentCheck);
    /**
     * Static representation of the [[paymentInvoices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_INVOICES = new core_1.CollectionField('PaymentInvoices', VendorPayments, PaymentInvoice_1.PaymentInvoice);
    /**
     * Static representation of the [[paymentCreditCards]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_CREDIT_CARDS = new core_1.CollectionField('PaymentCreditCards', VendorPayments, PaymentCreditCard_1.PaymentCreditCard);
    /**
     * Static representation of the [[paymentAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENT_ACCOUNTS = new core_1.CollectionField('PaymentAccounts', VendorPayments, PaymentAccount_1.PaymentAccount);
    /**
     * Static representation of the [[billOfExchange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BILL_OF_EXCHANGE = new BillOfExchange_1.BillOfExchangeField('BillOfExchange', VendorPayments);
    /**
     * Static representation of the [[withholdingTaxCertificatesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WITHHOLDING_TAX_CERTIFICATES_COLLECTION = new core_1.CollectionField('WithholdingTaxCertificatesCollection', VendorPayments, WithholdingTaxCertificatesData_1.WithholdingTaxCertificatesData);
    /**
     * Static representation of the [[cashFlowAssignments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CASH_FLOW_ASSIGNMENTS = new core_1.CollectionField('CashFlowAssignments', VendorPayments, CashFlowAssignment_1.CashFlowAssignment);
    /**
     * Static representation of the [[paymentsApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PAYMENTS_APPROVAL_REQUESTS = new core_1.CollectionField('Payments_ApprovalRequests', VendorPayments, PaymentsApprovalRequest_1.PaymentsApprovalRequest);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', VendorPayments, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', VendorPayments, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.CURRENCY = new core_1.OneToOneLink('Currency', VendorPayments, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.PROJECT = new core_1.OneToOneLink('Project', VendorPayments, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WITHHOLDING_TAX_CODE = new core_1.OneToOneLink('WithholdingTaxCode', VendorPayments, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.COUNTRY = new core_1.OneToOneLink('Country', VendorPayments, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.VAT_GROUP = new core_1.OneToOneLink('VatGroup', VendorPayments, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.TRANSACTION_CODE_2 = new core_1.OneToOneLink('TransactionCode2', VendorPayments, TransactionCodes_1.TransactionCodes);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.WAREHOUSE_LOCATION = new core_1.OneToOneLink('WarehouseLocation', VendorPayments, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', VendorPayments, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VendorPayments.BLANKET_AGREEMENT_2 = new core_1.OneToOneLink('BlanketAgreement2', VendorPayments, BlanketAgreements_1.BlanketAgreements);
    /**
     * All fields of the VendorPayments entity.
     */
    VendorPayments._allFields = [
        VendorPayments.DOC_NUM,
        VendorPayments.DOC_TYPE,
        VendorPayments.HAND_WRITTEN,
        VendorPayments.PRINTED,
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
        VendorPayments.LOCAL_CURRENCY,
        VendorPayments.DOC_RATE,
        VendorPayments.REFERENCE_1,
        VendorPayments.REFERENCE_2,
        VendorPayments.COUNTER_REFERENCE,
        VendorPayments.REMARKS,
        VendorPayments.JOURNAL_REMARKS,
        VendorPayments.SPLIT_TRANSACTION,
        VendorPayments.CONTACT_PERSON_CODE,
        VendorPayments.APPLY_VAT,
        VendorPayments.TAX_DATE,
        VendorPayments.SERIES,
        VendorPayments.BANK_CODE,
        VendorPayments.BANK_ACCOUNT,
        VendorPayments.DISCOUNT_PERCENT,
        VendorPayments.PROJECT_CODE,
        VendorPayments.CURRENCY_IS_LOCAL,
        VendorPayments.DEDUCTION_PERCENT,
        VendorPayments.DEDUCTION_SUM,
        VendorPayments.CASH_SUM_FC,
        VendorPayments.CASH_SUM_SYS,
        VendorPayments.BOE_ACCOUNT,
        VendorPayments.BILL_OF_EXCHANGE_AMOUNT,
        VendorPayments.BILLOF_EXCHANGE_STATUS,
        VendorPayments.BILL_OF_EXCHANGE_AMOUNT_FC,
        VendorPayments.BILL_OF_EXCHANGE_AMOUNT_SC,
        VendorPayments.BILL_OF_EXCHANGE_AGENT,
        VendorPayments.WT_CODE,
        VendorPayments.WT_AMOUNT,
        VendorPayments.WT_AMOUNT_FC,
        VendorPayments.WT_AMOUNT_SC,
        VendorPayments.WT_ACCOUNT,
        VendorPayments.WT_TAXABLE_AMOUNT,
        VendorPayments.PROFORMA,
        VendorPayments.PAY_TO_BANK_CODE,
        VendorPayments.PAY_TO_BANK_BRANCH,
        VendorPayments.PAY_TO_BANK_ACCOUNT_NO,
        VendorPayments.PAY_TO_CODE,
        VendorPayments.PAY_TO_BANK_COUNTRY,
        VendorPayments.IS_PAY_TO_BANK,
        VendorPayments.DOC_ENTRY,
        VendorPayments.PAYMENT_PRIORITY,
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
        VendorPayments.PAYMENT_TYPE,
        VendorPayments.TRANSFER_REAL_AMOUNT,
        VendorPayments.DOC_OBJECT_CODE,
        VendorPayments.DOC_TYPTE,
        VendorPayments.DUE_DATE,
        VendorPayments.LOCATION_CODE,
        VendorPayments.CANCELLED,
        VendorPayments.CONTROL_ACCOUNT,
        VendorPayments.UNDER_OVERPAYMENTDIFF_FC,
        VendorPayments.AUTHORIZATION_STATUS,
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
    VendorPayments.ALL_FIELDS = new core_1.AllFields('*', VendorPayments);
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