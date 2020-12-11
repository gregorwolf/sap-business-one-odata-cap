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
exports.PaymentRunExport = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PaymentRunExportRequestBuilder_1 = require("./PaymentRunExportRequestBuilder");
var PaymentRunExportLine_1 = require("./PaymentRunExportLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentRunExport" of service "SAPB1".
 */
var PaymentRunExport = /** @class */ (function (_super) {
    __extends(PaymentRunExport, _super);
    function PaymentRunExport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PaymentRunExport`.
     * @returns A builder that constructs instances of entity type `PaymentRunExport`.
     */
    PaymentRunExport.builder = function () {
        return core_1.EntityV4.entityBuilder(PaymentRunExport);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentRunExport` entity type.
     * @returns A `PaymentRunExport` request builder.
     */
    PaymentRunExport.requestBuilder = function () {
        return new PaymentRunExportRequestBuilder_1.PaymentRunExportRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentRunExport`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentRunExport`.
     */
    PaymentRunExport.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PaymentRunExport);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentRunExport.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentRunExport.
     */
    PaymentRunExport._entityName = 'PaymentRunExport';
    /**
     * Default url path for the according service.
     */
    PaymentRunExport._defaultServicePath = '/b1s/v2/';
    return PaymentRunExport;
}(core_1.EntityV4));
exports.PaymentRunExport = PaymentRunExport;
var BankChargesAllocationCodes_1 = require("./BankChargesAllocationCodes");
(function (PaymentRunExport) {
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.ABSOLUTE_ENTRY = new core_1.NumberField('AbsoluteEntry', PaymentRunExport, 'Edm.Int32');
    /**
     * Static representation of the [[runDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.RUN_DATE = new core_1.DateField('RunDate', PaymentRunExport, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[vendorNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.VENDOR_NUM = new core_1.StringField('VendorNum', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[customerNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.CUSTOMER_NUM = new core_1.StringField('CustomerNum', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.DOC_NUM = new core_1.NumberField('DocNum', PaymentRunExport, 'Edm.Int32');
    /**
     * Static representation of the [[fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.FISCAL_YEAR = new core_1.DateField('FiscalYear', PaymentRunExport, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[countery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COUNTERY = new core_1.StringField('Countery', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[companyTaxNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMPANY_TAX_NUM = new core_1.StringField('CompanyTaxNum', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_NAME = new core_1.StringField('PayeeName', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeePostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_POSTAL_CODE = new core_1.StringField('PayeePostalCode', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_CITY = new core_1.StringField('PayeeCity', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_STREET = new core_1.StringField('PayeeStreet', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_COUNTRY = new core_1.StringField('PayeeCountry', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_STATE = new core_1.StringField('PayeeState', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_NAME = new core_1.StringField('PayeeBankName', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankZip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_ZIP = new core_1.StringField('PayeeBankZip', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_CITY = new core_1.StringField('PayeeBankCity', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_STREET = new core_1.StringField('PayeeBankStreet', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_COUNTRY = new core_1.StringField('PayeeBankCountry', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_ACCOUNT = new core_1.StringField('PayeeBankAccount', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_CODE = new core_1.StringField('PayeeBankCode', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankCtrlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_CTRL_KEY = new core_1.StringField('PayeeBankCtrlKey', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankSwiftNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_SWIFT_NUM = new core_1.StringField('PayeeBankSwiftNum', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankIban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_IBAN = new core_1.StringField('PayeeBankIBAN', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.POSTING_DATE = new core_1.DateField('PostingDate', PaymentRunExport, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.BANK_ACCOUNT = new core_1.StringField('BankAccount', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.BANK_COUNTRY = new core_1.StringField('BankCountry', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.BANK_CODE = new core_1.StringField('BankCode', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[bankIban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.BANK_IBAN = new core_1.StringField('BankIBAN', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.GL_ACCOUNT = new core_1.StringField('GLAccount', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.CURRENCY = new core_1.StringField('Currency', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[docAmountLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.DOC_AMOUNT_LOCAL = new core_1.NumberField('DocAmountLocal', PaymentRunExport, 'Edm.Double');
    /**
     * Static representation of the [[docCurrnecy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.DOC_CURRNECY = new core_1.StringField('DocCurrnecy', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[docAmountForign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.DOC_AMOUNT_FORIGN = new core_1.NumberField('DocAmountForign', PaymentRunExport, 'Edm.Double');
    /**
     * Static representation of the [[docCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.DOC_CASH_DISCOUNT = new core_1.NumberField('DocCashDiscount', PaymentRunExport, 'Edm.Double');
    /**
     * Static representation of the [[docCashDiscountForign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.DOC_CASH_DISCOUNT_FORIGN = new core_1.NumberField('DocCashDiscountForign', PaymentRunExport, 'Edm.Double');
    /**
     * Static representation of the [[docNumOffieldPaid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.DOC_NUM_OFFIELD_PAID = new core_1.NumberField('DocNumOffieldPaid', PaymentRunExport, 'Edm.Int32');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.DOC_RATE = new core_1.NumberField('DocRate', PaymentRunExport, 'Edm.Double');
    /**
     * Static representation of the [[wizCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.WIZ_CODE = new core_1.NumberField('WizCode', PaymentRunExport, 'Edm.Int32');
    /**
     * Static representation of the [[collectionAuthorization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COLLECTION_AUTHORIZATION = new core_1.EnumField('CollectionAuthorization', PaymentRunExport);
    /**
     * Static representation of the [[payeeBankPostOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_POST_OFFICE = new core_1.EnumField('PayeeBankPostOffice', PaymentRunExport);
    /**
     * Static representation of the [[payeeBankNextCheckNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_NEXT_CHECK_NUMBER = new core_1.NumberField('PayeeBankNextCheckNumber', PaymentRunExport, 'Edm.Int32');
    /**
     * Static representation of the [[payeeBankHouseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_HOUSE_BANK = new core_1.EnumField('PayeeBankHouseBank', PaymentRunExport);
    /**
     * Static representation of the [[payeeBankBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_BLOCK = new core_1.StringField('PayeeBankBlock', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_COUNTY = new core_1.StringField('PayeeBankCounty', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_STATE = new core_1.StringField('PayeeBankState', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankBisr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_BISR = new core_1.EnumField('PayeeBankBISR', PaymentRunExport);
    /**
     * Static representation of the [[payeeBankUserNum1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_USER_NUM_1 = new core_1.StringField('PayeeBankUserNum1', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankUserNum2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_USER_NUM_2 = new core_1.StringField('PayeeBankUserNum2', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankUserNum3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_USER_NUM_3 = new core_1.StringField('PayeeBankUserNum3', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankUserNum4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_USER_NUM_4 = new core_1.StringField('PayeeBankUserNum4', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[instructionKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.INSTRUCTION_KEY = new core_1.StringField('InstructionKey', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_FORMAT = new core_1.StringField('PaymentFormat', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[companyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMPANY_NAME = new core_1.StringField('CompanyName', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[companyAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMPANY_ADDRESS = new core_1.StringField('CompanyAddress', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.STATUS = new core_1.EnumField('Status', PaymentRunExport);
    /**
     * Static representation of the [[compIsrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMP_ISR_BILLER_ID = new core_1.StringField('CompIsrBillerID', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[vendorIsrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.VENDOR_ISR_BILLER_ID = new core_1.StringField('VendorIsrBillerID', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[additionalIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.ADDITIONAL_ID_NUMBER = new core_1.StringField('AdditionalIdNumber', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[organizationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.ORGANIZATION_NUMBER = new core_1.StringField('OrganizationNumber', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_BANK_BRANCH = new core_1.StringField('PayeeBankBranch', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_BANK_BRANCH = new core_1.StringField('PaymentBankBranch', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.USER_NAME = new core_1.StringField('UserName', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[userEMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.USER_E_MAIL = new core_1.StringField('UserEMail', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[userMobilePhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.USER_MOBILE_PHONE_NUMBER = new core_1.StringField('UserMobilePhoneNumber', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[userFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.USER_FAX_NUMBER = new core_1.StringField('UserFaxNumber', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[userDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.USER_DEPARTMENT = new core_1.NumberField('UserDepartment', PaymentRunExport, 'Edm.Int32');
    /**
     * Static representation of the [[debitMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.DEBIT_MEMO = new core_1.EnumField('DebitMemo', PaymentRunExport);
    /**
     * Static representation of the [[euInternalTransfer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.EU_INTERNAL_TRANSFER = new core_1.EnumField('EUInternalTransfer', PaymentRunExport);
    /**
     * Static representation of the [[filePath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.FILE_PATH = new core_1.StringField('FilePath', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[orderingParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.ORDERING_PARTY = new core_1.StringField('OrderingParty', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentBankControlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_BANK_CONTROL_KEY = new core_1.StringField('PaymentBankControlKey', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_TAX_NUMBER = new core_1.StringField('PayeeTaxNumber', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentKeyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_KEY_CODE = new core_1.StringField('PaymentKeyCode', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[payeeReferenceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYEE_REFERENCE_DETAILS = new core_1.StringField('PayeeReferenceDetails', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[formatName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.FORMAT_NAME = new core_1.StringField('FormatName', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentDonewithCheck]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_DONEWITH_CHECK = new core_1.EnumField('PaymentDonewithCheck', PaymentRunExport);
    /**
     * Static representation of the [[companyBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMPANY_BLOCK = new core_1.StringField('CompanyBlock', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[companyCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMPANY_CITY = new core_1.StringField('CompanyCity', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[companyCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMPANY_COUNTY = new core_1.StringField('CompanyCounty', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[companyState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMPANY_STATE = new core_1.StringField('CompanyState', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[companyStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMPANY_STREET = new core_1.StringField('CompanyStreet', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[companyZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.COMPANY_ZIP_CODE = new core_1.StringField('CompanyZipCode', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentBankCharges]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_BANK_CHARGES = new core_1.StringField('PaymentBankCharges', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentBankUserNo1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_BANK_USER_NO_1 = new core_1.StringField('PaymentBankUserNo1', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentBankUserNo2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_BANK_USER_NO_2 = new core_1.StringField('PaymentBankUserNo2', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentBankUserNo3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_BANK_USER_NO_3 = new core_1.StringField('PaymentBankUserNo3', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentBankUserNo4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_BANK_USER_NO_4 = new core_1.StringField('PaymentBankUserNo4', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentBankChargesAllocationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_BANK_CHARGES_ALLOCATION_CODE = new core_1.StringField('PaymentBankChargesAllocationCode', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[paymentOrderNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_ORDER_NUM = new core_1.NumberField('PaymentOrderNum', PaymentRunExport, 'Edm.Int32');
    /**
     * Static representation of the [[freeText1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.FREE_TEXT_1 = new core_1.StringField('FreeText1', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[freeText2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.FREE_TEXT_2 = new core_1.StringField('FreeText2', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[freeText3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.FREE_TEXT_3 = new core_1.StringField('FreeText3', PaymentRunExport, 'Edm.String');
    /**
     * Static representation of the [[rowType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.ROW_TYPE = new core_1.EnumField('RowType', PaymentRunExport);
    /**
     * Static representation of the [[paymentRunExportLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.PAYMENT_RUN_EXPORT_LINES = new core_1.CollectionField('PaymentRunExport_Lines', PaymentRunExport, PaymentRunExportLine_1.PaymentRunExportLine);
    /**
     * Static representation of the one-to-one navigation property [[bankChargesAllocationCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentRunExport.BANK_CHARGES_ALLOCATION_CODE = new core_1.OneToOneLink('BankChargesAllocationCode', PaymentRunExport, BankChargesAllocationCodes_1.BankChargesAllocationCodes);
    /**
     * All fields of the PaymentRunExport entity.
     */
    PaymentRunExport._allFields = [
        PaymentRunExport.ABSOLUTE_ENTRY,
        PaymentRunExport.RUN_DATE,
        PaymentRunExport.VENDOR_NUM,
        PaymentRunExport.CUSTOMER_NUM,
        PaymentRunExport.PAYMENT_METHOD,
        PaymentRunExport.DOC_NUM,
        PaymentRunExport.FISCAL_YEAR,
        PaymentRunExport.COUNTERY,
        PaymentRunExport.COMPANY_TAX_NUM,
        PaymentRunExport.PAYEE_NAME,
        PaymentRunExport.PAYEE_POSTAL_CODE,
        PaymentRunExport.PAYEE_CITY,
        PaymentRunExport.PAYEE_STREET,
        PaymentRunExport.PAYEE_COUNTRY,
        PaymentRunExport.PAYEE_STATE,
        PaymentRunExport.PAYEE_BANK_NAME,
        PaymentRunExport.PAYEE_BANK_ZIP,
        PaymentRunExport.PAYEE_BANK_CITY,
        PaymentRunExport.PAYEE_BANK_STREET,
        PaymentRunExport.PAYEE_BANK_COUNTRY,
        PaymentRunExport.PAYEE_BANK_ACCOUNT,
        PaymentRunExport.PAYEE_BANK_CODE,
        PaymentRunExport.PAYEE_BANK_CTRL_KEY,
        PaymentRunExport.PAYEE_BANK_SWIFT_NUM,
        PaymentRunExport.PAYEE_BANK_IBAN,
        PaymentRunExport.POSTING_DATE,
        PaymentRunExport.BANK_ACCOUNT,
        PaymentRunExport.BANK_COUNTRY,
        PaymentRunExport.BANK_CODE,
        PaymentRunExport.BANK_IBAN,
        PaymentRunExport.GL_ACCOUNT,
        PaymentRunExport.CURRENCY,
        PaymentRunExport.DOC_AMOUNT_LOCAL,
        PaymentRunExport.DOC_CURRNECY,
        PaymentRunExport.DOC_AMOUNT_FORIGN,
        PaymentRunExport.DOC_CASH_DISCOUNT,
        PaymentRunExport.DOC_CASH_DISCOUNT_FORIGN,
        PaymentRunExport.DOC_NUM_OFFIELD_PAID,
        PaymentRunExport.DOC_RATE,
        PaymentRunExport.WIZ_CODE,
        PaymentRunExport.COLLECTION_AUTHORIZATION,
        PaymentRunExport.PAYEE_BANK_POST_OFFICE,
        PaymentRunExport.PAYEE_BANK_NEXT_CHECK_NUMBER,
        PaymentRunExport.PAYEE_BANK_HOUSE_BANK,
        PaymentRunExport.PAYEE_BANK_BLOCK,
        PaymentRunExport.PAYEE_BANK_COUNTY,
        PaymentRunExport.PAYEE_BANK_STATE,
        PaymentRunExport.PAYEE_BANK_BISR,
        PaymentRunExport.PAYEE_BANK_USER_NUM_1,
        PaymentRunExport.PAYEE_BANK_USER_NUM_2,
        PaymentRunExport.PAYEE_BANK_USER_NUM_3,
        PaymentRunExport.PAYEE_BANK_USER_NUM_4,
        PaymentRunExport.INSTRUCTION_KEY,
        PaymentRunExport.PAYMENT_FORMAT,
        PaymentRunExport.COMPANY_NAME,
        PaymentRunExport.COMPANY_ADDRESS,
        PaymentRunExport.STATUS,
        PaymentRunExport.COMP_ISR_BILLER_ID,
        PaymentRunExport.VENDOR_ISR_BILLER_ID,
        PaymentRunExport.ADDITIONAL_ID_NUMBER,
        PaymentRunExport.ORGANIZATION_NUMBER,
        PaymentRunExport.PAYEE_BANK_BRANCH,
        PaymentRunExport.PAYMENT_BANK_BRANCH,
        PaymentRunExport.USER_NAME,
        PaymentRunExport.USER_E_MAIL,
        PaymentRunExport.USER_MOBILE_PHONE_NUMBER,
        PaymentRunExport.USER_FAX_NUMBER,
        PaymentRunExport.USER_DEPARTMENT,
        PaymentRunExport.DEBIT_MEMO,
        PaymentRunExport.EU_INTERNAL_TRANSFER,
        PaymentRunExport.FILE_PATH,
        PaymentRunExport.ORDERING_PARTY,
        PaymentRunExport.PAYMENT_BANK_CONTROL_KEY,
        PaymentRunExport.PAYEE_TAX_NUMBER,
        PaymentRunExport.PAYMENT_KEY_CODE,
        PaymentRunExport.PAYEE_REFERENCE_DETAILS,
        PaymentRunExport.FORMAT_NAME,
        PaymentRunExport.PAYMENT_DONEWITH_CHECK,
        PaymentRunExport.COMPANY_BLOCK,
        PaymentRunExport.COMPANY_CITY,
        PaymentRunExport.COMPANY_COUNTY,
        PaymentRunExport.COMPANY_STATE,
        PaymentRunExport.COMPANY_STREET,
        PaymentRunExport.COMPANY_ZIP_CODE,
        PaymentRunExport.PAYMENT_BANK_CHARGES,
        PaymentRunExport.PAYMENT_BANK_USER_NO_1,
        PaymentRunExport.PAYMENT_BANK_USER_NO_2,
        PaymentRunExport.PAYMENT_BANK_USER_NO_3,
        PaymentRunExport.PAYMENT_BANK_USER_NO_4,
        PaymentRunExport.PAYMENT_BANK_CHARGES_ALLOCATION_CODE,
        PaymentRunExport.PAYMENT_ORDER_NUM,
        PaymentRunExport.FREE_TEXT_1,
        PaymentRunExport.FREE_TEXT_2,
        PaymentRunExport.FREE_TEXT_3,
        PaymentRunExport.ROW_TYPE,
        PaymentRunExport.PAYMENT_RUN_EXPORT_LINES,
        PaymentRunExport.BANK_CHARGES_ALLOCATION_CODE
    ];
    /**
     * All fields selector.
     */
    PaymentRunExport.ALL_FIELDS = new core_1.AllFields('*', PaymentRunExport);
    /**
     * All key fields of the PaymentRunExport entity.
     */
    PaymentRunExport._keyFields = [PaymentRunExport.ABSOLUTE_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PaymentRunExport.
     */
    PaymentRunExport._keys = PaymentRunExport._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentRunExport = exports.PaymentRunExport || (exports.PaymentRunExport = {}));
exports.PaymentRunExport = PaymentRunExport;
//# sourceMappingURL=PaymentRunExport.js.map