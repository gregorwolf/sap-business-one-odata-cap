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
exports.HouseBankAccounts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var HouseBankAccountsRequestBuilder_1 = require("./HouseBankAccountsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "HouseBankAccounts" of service "SAPB1".
 */
var HouseBankAccounts = /** @class */ (function (_super) {
    __extends(HouseBankAccounts, _super);
    function HouseBankAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `HouseBankAccounts`.
     * @returns A builder that constructs instances of entity type `HouseBankAccounts`.
     */
    HouseBankAccounts.builder = function () {
        return core_1.EntityV4.entityBuilder(HouseBankAccounts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `HouseBankAccounts` entity type.
     * @returns A `HouseBankAccounts` request builder.
     */
    HouseBankAccounts.requestBuilder = function () {
        return new HouseBankAccountsRequestBuilder_1.HouseBankAccountsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HouseBankAccounts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HouseBankAccounts`.
     */
    HouseBankAccounts.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, HouseBankAccounts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    HouseBankAccounts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for HouseBankAccounts.
     */
    HouseBankAccounts._entityName = 'HouseBankAccounts';
    /**
     * Default url path for the according service.
     */
    HouseBankAccounts._defaultServicePath = '/b1s/v2/';
    return HouseBankAccounts;
}(core_1.EntityV4));
exports.HouseBankAccounts = HouseBankAccounts;
var WizardPaymentMethods_1 = require("./WizardPaymentMethods");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var Countries_1 = require("./Countries");
var Banks_1 = require("./Banks");
var BankStatements_1 = require("./BankStatements");
(function (HouseBankAccounts) {
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BANK_CODE = new core_1.StringField('BankCode', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[accNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.ACC_NO = new core_1.StringField('AccNo', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BRANCH = new core_1.StringField('Branch', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[nextCheckNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.NEXT_CHECK_NO = new core_1.NumberField('NextCheckNo', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.GL_ACCOUNT = new core_1.StringField('GLAccount', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.STREET = new core_1.StringField('Street', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BLOCK = new core_1.StringField('Block', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.ZIP_CODE = new core_1.StringField('ZipCode', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.CITY = new core_1.StringField('City', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.COUNTY = new core_1.StringField('County', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.COUNTRY = new core_1.StringField('Country', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.STATE = new core_1.StringField('State', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[bisr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BISR = new core_1.EnumField('BISR', HouseBankAccounts);
    /**
     * Static representation of the [[controlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.CONTROL_KEY = new core_1.StringField('ControlKey', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[userNo1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.USER_NO_1 = new core_1.StringField('UserNo1', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[userNo2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.USER_NO_2 = new core_1.StringField('UserNo2', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[userNo3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.USER_NO_3 = new core_1.StringField('UserNo3', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[userNo4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.USER_NO_4 = new core_1.StringField('UserNo4', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.IBAN = new core_1.StringField('IBAN', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[debtofDiscountedBillofExc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.DEBTOF_DISCOUNTED_BILLOF_EXC = new core_1.StringField('DebtofDiscountedBillofExc', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[toleranceDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.TOLERANCE_DAYS = new core_1.NumberField('ToleranceDays', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[minAmountofBillofExchang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.MIN_AMOUNTOF_BILLOF_EXCHANG = new core_1.NumberField('MinAmountofBillofExchang', HouseBankAccounts, 'Edm.Double');
    /**
     * Static representation of the [[maxAmountofBillofExchan]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.MAX_AMOUNTOF_BILLOF_EXCHAN = new core_1.NumberField('MaxAmountofBillofExchan', HouseBankAccounts, 'Edm.Double');
    /**
     * Static representation of the [[discountLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.DISCOUNT_LIMIT = new core_1.NumberField('DiscountLimit', HouseBankAccounts, 'Edm.Double');
    /**
     * Static representation of the [[daysInAdvance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.DAYS_IN_ADVANCE = new core_1.NumberField('DaysInAdvance', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[bankonCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BANKON_COLLECTION = new core_1.StringField('BankonCollection', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[bankonDiscounted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BANKON_DISCOUNTED = new core_1.StringField('BankonDiscounted', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[glInterimAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.GL_INTERIM_ACCOUNT = new core_1.StringField('GLInterimAccount', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.ABSOLUTE_ENTRY = new core_1.NumberField('AbsoluteEntry', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[bankKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BANK_KEY = new core_1.NumberField('BankKey', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[lockChecksPrinting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.LOCK_CHECKS_PRINTING = new core_1.EnumField('LockChecksPrinting', HouseBankAccounts);
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.TEMPLATE_NAME = new core_1.StringField('TemplateName', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[maximumLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.MAXIMUM_LINES = new core_1.NumberField('MaximumLines', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[printOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.PRINT_ON = new core_1.EnumField('PrintOn', HouseBankAccounts);
    /**
     * Static representation of the [[customerIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.CUSTOMER_ID_NUMBER = new core_1.StringField('CustomerIdNumber', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[isrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.ISR_BILLER_ID = new core_1.StringField('ISRBillerID', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[isrType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.ISR_TYPE = new core_1.NumberField('ISRType', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[accountCheckDigit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.ACCOUNT_CHECK_DIGIT = new core_1.StringField('AccountCheckDigit', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[ourNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.OUR_NUMBER = new core_1.NumberField('OurNumber', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[agreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.AGREEMENT_NUMBER = new core_1.StringField('AgreementNumber', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.ADDRESS_TYPE = new core_1.StringField('AddressType', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.STREET_NO = new core_1.StringField('StreetNo', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[building]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BUILDING = new core_1.StringField('Building', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[incomingPaymentSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.INCOMING_PAYMENT_SERIES = new core_1.NumberField('IncomingPaymentSeries', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[outgoingPaymentSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.OUTGOING_PAYMENT_SERIES = new core_1.NumberField('OutgoingPaymentSeries', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[journalEntrySeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.JOURNAL_ENTRY_SERIES = new core_1.NumberField('JournalEntrySeries', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[importFileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.IMPORT_FILE_NAME = new core_1.StringField('ImportFileName', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[accountName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.ACCOUNT_NAME = new core_1.StringField('AccountName', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[bicSwiftCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BIC_SWIFT_CODE = new core_1.StringField('BICSwiftCode', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[fineAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.FINE_ACCOUNT = new core_1.StringField('FineAccount', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[interestAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.INTEREST_ACCOUNT = new core_1.StringField('InterestAccount', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[discountAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.DISCOUNT_ACCOUNT = new core_1.StringField('DiscountAccount', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[serviceFeeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.SERVICE_FEE_ACCOUNT = new core_1.StringField('ServiceFeeAccount', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[iofTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.IOF_TAX_ACCOUNT = new core_1.StringField('IOFTaxAccount', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[otherExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.OTHER_EXPENSES_ACCOUNT = new core_1.StringField('OtherExpensesAccount', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[otherIncomesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.OTHER_INCOMES_ACCOUNT = new core_1.StringField('OtherIncomesAccount', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[retornoFileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.RETORNO_FILE_NAME = new core_1.StringField('RetornoFileName', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[branchCheckDigit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BRANCH_CHECK_DIGIT = new core_1.StringField('BranchCheckDigit', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[collectionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.COLLECTION_CODE = new core_1.StringField('CollectionCode', HouseBankAccounts, 'Edm.String');
    /**
     * Static representation of the [[fileSeqNextNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.FILE_SEQ_NEXT_NUMBER = new core_1.NumberField('FileSeqNextNumber', HouseBankAccounts, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.WIZARD_PAYMENT_METHODS = new core_1.OneToManyLink('WizardPaymentMethods', HouseBankAccounts, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', HouseBankAccounts, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.COUNTRY_2 = new core_1.OneToOneLink('Country2', HouseBankAccounts, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[bank]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BANK = new core_1.OneToOneLink('Bank', HouseBankAccounts, Banks_1.Banks);
    /**
     * Static representation of the one-to-many navigation property [[bankStatements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HouseBankAccounts.BANK_STATEMENTS = new core_1.OneToManyLink('BankStatements', HouseBankAccounts, BankStatements_1.BankStatements);
    /**
     * All fields of the HouseBankAccounts entity.
     */
    HouseBankAccounts._allFields = [
        HouseBankAccounts.BANK_CODE,
        HouseBankAccounts.ACC_NO,
        HouseBankAccounts.BRANCH,
        HouseBankAccounts.NEXT_CHECK_NO,
        HouseBankAccounts.GL_ACCOUNT,
        HouseBankAccounts.STREET,
        HouseBankAccounts.BLOCK,
        HouseBankAccounts.ZIP_CODE,
        HouseBankAccounts.CITY,
        HouseBankAccounts.COUNTY,
        HouseBankAccounts.COUNTRY,
        HouseBankAccounts.STATE,
        HouseBankAccounts.BISR,
        HouseBankAccounts.CONTROL_KEY,
        HouseBankAccounts.USER_NO_1,
        HouseBankAccounts.USER_NO_2,
        HouseBankAccounts.USER_NO_3,
        HouseBankAccounts.USER_NO_4,
        HouseBankAccounts.IBAN,
        HouseBankAccounts.DEBTOF_DISCOUNTED_BILLOF_EXC,
        HouseBankAccounts.TOLERANCE_DAYS,
        HouseBankAccounts.MIN_AMOUNTOF_BILLOF_EXCHANG,
        HouseBankAccounts.MAX_AMOUNTOF_BILLOF_EXCHAN,
        HouseBankAccounts.DISCOUNT_LIMIT,
        HouseBankAccounts.DAYS_IN_ADVANCE,
        HouseBankAccounts.BANKON_COLLECTION,
        HouseBankAccounts.BANKON_DISCOUNTED,
        HouseBankAccounts.GL_INTERIM_ACCOUNT,
        HouseBankAccounts.ABSOLUTE_ENTRY,
        HouseBankAccounts.BANK_KEY,
        HouseBankAccounts.LOCK_CHECKS_PRINTING,
        HouseBankAccounts.TEMPLATE_NAME,
        HouseBankAccounts.MAXIMUM_LINES,
        HouseBankAccounts.PRINT_ON,
        HouseBankAccounts.CUSTOMER_ID_NUMBER,
        HouseBankAccounts.ISR_BILLER_ID,
        HouseBankAccounts.ISR_TYPE,
        HouseBankAccounts.ACCOUNT_CHECK_DIGIT,
        HouseBankAccounts.OUR_NUMBER,
        HouseBankAccounts.AGREEMENT_NUMBER,
        HouseBankAccounts.ADDRESS_TYPE,
        HouseBankAccounts.STREET_NO,
        HouseBankAccounts.BUILDING,
        HouseBankAccounts.INCOMING_PAYMENT_SERIES,
        HouseBankAccounts.OUTGOING_PAYMENT_SERIES,
        HouseBankAccounts.JOURNAL_ENTRY_SERIES,
        HouseBankAccounts.IMPORT_FILE_NAME,
        HouseBankAccounts.ACCOUNT_NAME,
        HouseBankAccounts.BIC_SWIFT_CODE,
        HouseBankAccounts.FINE_ACCOUNT,
        HouseBankAccounts.INTEREST_ACCOUNT,
        HouseBankAccounts.DISCOUNT_ACCOUNT,
        HouseBankAccounts.SERVICE_FEE_ACCOUNT,
        HouseBankAccounts.IOF_TAX_ACCOUNT,
        HouseBankAccounts.OTHER_EXPENSES_ACCOUNT,
        HouseBankAccounts.OTHER_INCOMES_ACCOUNT,
        HouseBankAccounts.RETORNO_FILE_NAME,
        HouseBankAccounts.BRANCH_CHECK_DIGIT,
        HouseBankAccounts.COLLECTION_CODE,
        HouseBankAccounts.FILE_SEQ_NEXT_NUMBER,
        HouseBankAccounts.WIZARD_PAYMENT_METHODS,
        HouseBankAccounts.CHART_OF_ACCOUNT,
        HouseBankAccounts.COUNTRY_2,
        HouseBankAccounts.BANK,
        HouseBankAccounts.BANK_STATEMENTS
    ];
    /**
     * All fields selector.
     */
    HouseBankAccounts.ALL_FIELDS = new core_1.AllFields('*', HouseBankAccounts);
    /**
     * All key fields of the HouseBankAccounts entity.
     */
    HouseBankAccounts._keyFields = [HouseBankAccounts.ABSOLUTE_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property HouseBankAccounts.
     */
    HouseBankAccounts._keys = HouseBankAccounts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(HouseBankAccounts = exports.HouseBankAccounts || (exports.HouseBankAccounts = {}));
exports.HouseBankAccounts = HouseBankAccounts;
//# sourceMappingURL=HouseBankAccounts.js.map