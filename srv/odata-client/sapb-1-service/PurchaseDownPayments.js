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
exports.PurchaseDownPayments = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseDownPaymentsRequestBuilder_1 = require("./PurchaseDownPaymentsRequestBuilder");
var DocumentApprovalRequest_1 = require("./DocumentApprovalRequest");
var DocumentLine_1 = require("./DocumentLine");
var DocumentAdditionalExpense_1 = require("./DocumentAdditionalExpense");
var WithholdingTaxDataWtx_1 = require("./WithholdingTaxDataWtx");
var WithholdingTaxData_1 = require("./WithholdingTaxData");
var DocumentPackage_1 = require("./DocumentPackage");
var DocumentSpecialLine_1 = require("./DocumentSpecialLine");
var DocumentInstallment_1 = require("./DocumentInstallment");
var DownPaymentToDraw_1 = require("./DownPaymentToDraw");
var TaxExtension_1 = require("./TaxExtension");
var AddressExtension_1 = require("./AddressExtension");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "PurchaseDownPayments" of service "SAPB1".
 */
var PurchaseDownPayments = /** @class */ (function (_super) {
    __extends(PurchaseDownPayments, _super);
    function PurchaseDownPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PurchaseDownPayments`.
     * @returns A builder that constructs instances of entity type `PurchaseDownPayments`.
     */
    PurchaseDownPayments.builder = function () {
        return v4_1.Entity.entityBuilder(PurchaseDownPayments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseDownPayments` entity type.
     * @returns A `PurchaseDownPayments` request builder.
     */
    PurchaseDownPayments.requestBuilder = function () {
        return new PurchaseDownPaymentsRequestBuilder_1.PurchaseDownPaymentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseDownPayments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseDownPayments`.
     */
    PurchaseDownPayments.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, PurchaseDownPayments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseDownPayments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseDownPayments.
     */
    PurchaseDownPayments._entityName = 'PurchaseDownPayments';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PurchaseDownPayments.
     */
    PurchaseDownPayments._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    PurchaseDownPayments._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PurchaseDownPayments;
}(v4_1.Entity));
exports.PurchaseDownPayments = PurchaseDownPayments;
var BusinessPartners_1 = require("./BusinessPartners");
var Currencies_1 = require("./Currencies");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
var SalesPersons_1 = require("./SalesPersons");
var ShippingTypes_1 = require("./ShippingTypes");
var FactoringIndicators_1 = require("./FactoringIndicators");
var JournalEntries_1 = require("./JournalEntries");
var Forms1099_1 = require("./Forms1099");
var WizardPaymentMethods_1 = require("./WizardPaymentMethods");
var PaymentBlocks_1 = require("./PaymentBlocks");
var Projects_1 = require("./Projects");
var EmployeesInfo_1 = require("./EmployeesInfo");
var Countries_1 = require("./Countries");
var BusinessPlaces_1 = require("./BusinessPlaces");
var UserLanguages_1 = require("./UserLanguages");
var NfModels_1 = require("./NfModels");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var TaxWebSites_1 = require("./TaxWebSites");
var Branches_1 = require("./Branches");
var Departments_1 = require("./Departments");
var PosDailySummary_1 = require("./PosDailySummary");
(function (PurchaseDownPayments) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_ENTRY = new v4_1.NumberField('DocEntry', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_NUM = new v4_1.NumberField('DocNum', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_DATE = new v4_1.DateField('DocDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CARD_CODE = new v4_1.StringField('CardCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CARD_NAME = new v4_1.StringField('CardName', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ADDRESS = new v4_1.StringField('Address', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NUM_AT_CARD = new v4_1.StringField('NumAtCard', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_TOTAL = new v4_1.NumberField('DocTotal', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_CURRENCY = new v4_1.StringField('DocCurrency', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_RATE = new v4_1.NumberField('DocRate', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REFERENCE_1 = new v4_1.StringField('Reference1', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REFERENCE_2 = new v4_1.StringField('Reference2', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.COMMENTS = new v4_1.StringField('Comments', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_TIME = new v4_1.TimeField('DocTime', PurchaseDownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SERIES = new v4_1.NumberField('Series', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_DATE = new v4_1.DateField('TaxDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.INDICATOR = new v4_1.StringField('Indicator', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CREATION_DATE = new v4_1.DateField('CreationDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.UPDATE_DATE = new v4_1.DateField('UpdateDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TRANS_NUM = new v4_1.NumberField('TransNum', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_SUM = new v4_1.NumberField('VatSum', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FORM_1099 = new v4_1.NumberField('Form1099', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BOX_1099 = new v4_1.StringField('Box1099', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQURIED_DATE = new v4_1.DateField('RequriedDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CANCEL_DATE = new v4_1.DateField('CancelDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SEGMENT = new v4_1.NumberField('Segment', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PROJECT = new v4_1.StringField('Project', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_APPLIED = new v4_1.NumberField('WTApplied', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.AGENT_CODE = new v4_1.StringField('AgentCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_AMOUNT = new v4_1.NumberField('WTAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_DATE = new v4_1.DateField('VatDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ADDRESS_2 = new v4_1.StringField('Address2', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_CODE = new v4_1.StringField('PayToCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PICK_REMARK = new v4_1.StringField('PickRemark', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CLOSING_DATE = new v4_1.DateField('ClosingDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SERIES_STRING = new v4_1.StringField('SeriesString', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_PERCENT = new v4_1.NumberField('VatPercent', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GTS_CHECKER = new v4_1.NumberField('GTSChecker', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GTS_PAYEE = new v4_1.NumberField('GTSPayee', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_NUM = new v4_1.StringField('EDocNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GROUP_SERIES = new v4_1.NumberField('GroupSeries', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BPL_NAME = new v4_1.StringField('BPLName', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_REG_NUM = new v4_1.StringField('VATRegNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SUPPLIER = new v4_1.StringField('Supplier', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RELEASER = new v4_1.NumberField('Releaser', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RECEIVER = new v4_1.NumberField('Receiver', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER = new v4_1.StringField('Requester', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER_NAME = new v4_1.StringField('RequesterName', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQ_TYPE = new v4_1.NumberField('ReqType', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', PurchaseDownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', PurchaseDownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RELATED_TYPE = new v4_1.NumberField('RelatedType', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.UPDATE_TIME = new v4_1.TimeField('UpdateTime', PurchaseDownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SHIP_FROM = new v4_1.StringField('ShipFrom', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ISSUING_REASON = new v4_1.NumberField('IssuingReason', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', PurchaseDownPayments, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', PurchaseDownPayments));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', PurchaseDownPayments, new DocumentLine_1.DocumentLineField('', PurchaseDownPayments));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', PurchaseDownPayments, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', PurchaseDownPayments));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseDownPayments, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', PurchaseDownPayments));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', PurchaseDownPayments, new WithholdingTaxData_1.WithholdingTaxDataField('', PurchaseDownPayments));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', PurchaseDownPayments, new DocumentPackage_1.DocumentPackageField('', PurchaseDownPayments));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', PurchaseDownPayments, new DocumentSpecialLine_1.DocumentSpecialLineField('', PurchaseDownPayments));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', PurchaseDownPayments, new DocumentInstallment_1.DocumentInstallmentField('', PurchaseDownPayments));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', PurchaseDownPayments, new DownPaymentToDraw_1.DownPaymentToDrawField('', PurchaseDownPayments));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseDownPayments);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseDownPayments);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', PurchaseDownPayments, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CURRENCY = new v4_1.OneToOneLink('Currency', PurchaseDownPayments, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', PurchaseDownPayments, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', PurchaseDownPayments, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', PurchaseDownPayments, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', PurchaseDownPayments, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', PurchaseDownPayments, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', PurchaseDownPayments, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', PurchaseDownPayments, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', PurchaseDownPayments, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PROJECT_2 = new v4_1.OneToOneLink('Project2', PurchaseDownPayments, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', PurchaseDownPayments, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.COUNTRY = new v4_1.OneToOneLink('Country', PurchaseDownPayments, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', PurchaseDownPayments, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', PurchaseDownPayments, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NF_MODEL = new v4_1.OneToOneLink('NFModel', PurchaseDownPayments, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', PurchaseDownPayments, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', PurchaseDownPayments, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BRANCH = new v4_1.OneToOneLink('Branch', PurchaseDownPayments, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DEPARTMENT = new v4_1.OneToOneLink('Department', PurchaseDownPayments, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', PurchaseDownPayments, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseDownPayments entity.
     */
    PurchaseDownPayments._allFields = [
        PurchaseDownPayments.DOC_ENTRY,
        PurchaseDownPayments.DOC_NUM,
        PurchaseDownPayments.DOC_DATE,
        PurchaseDownPayments.DOC_DUE_DATE,
        PurchaseDownPayments.CARD_CODE,
        PurchaseDownPayments.CARD_NAME,
        PurchaseDownPayments.ADDRESS,
        PurchaseDownPayments.NUM_AT_CARD,
        PurchaseDownPayments.DOC_TOTAL,
        PurchaseDownPayments.ATTACHMENT_ENTRY,
        PurchaseDownPayments.DOC_CURRENCY,
        PurchaseDownPayments.DOC_RATE,
        PurchaseDownPayments.REFERENCE_1,
        PurchaseDownPayments.REFERENCE_2,
        PurchaseDownPayments.COMMENTS,
        PurchaseDownPayments.JOURNAL_MEMO,
        PurchaseDownPayments.PAYMENT_GROUP_CODE,
        PurchaseDownPayments.DOC_TIME,
        PurchaseDownPayments.SALES_PERSON_CODE,
        PurchaseDownPayments.TRANSPORTATION_CODE,
        PurchaseDownPayments.IMPORT_FILE_NUM,
        PurchaseDownPayments.CONTACT_PERSON_CODE,
        PurchaseDownPayments.SERIES,
        PurchaseDownPayments.TAX_DATE,
        PurchaseDownPayments.SHIP_TO_CODE,
        PurchaseDownPayments.INDICATOR,
        PurchaseDownPayments.FEDERAL_TAX_ID,
        PurchaseDownPayments.DISCOUNT_PERCENT,
        PurchaseDownPayments.PAYMENT_REFERENCE,
        PurchaseDownPayments.CREATION_DATE,
        PurchaseDownPayments.UPDATE_DATE,
        PurchaseDownPayments.FINANCIAL_PERIOD,
        PurchaseDownPayments.TRANS_NUM,
        PurchaseDownPayments.VAT_SUM,
        PurchaseDownPayments.VAT_SUM_SYS,
        PurchaseDownPayments.VAT_SUM_FC,
        PurchaseDownPayments.DOC_TOTAL_FC,
        PurchaseDownPayments.DOC_TOTAL_SYS,
        PurchaseDownPayments.FORM_1099,
        PurchaseDownPayments.BOX_1099,
        PurchaseDownPayments.REQURIED_DATE,
        PurchaseDownPayments.CANCEL_DATE,
        PurchaseDownPayments.SEGMENT,
        PurchaseDownPayments.PAYMENT_METHOD,
        PurchaseDownPayments.PAYMENT_BLOCK_ENTRY,
        PurchaseDownPayments.CENTRAL_BANK_INDICATOR,
        PurchaseDownPayments.PROJECT,
        PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseDownPayments.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseDownPayments.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseDownPayments.NEXT_CORRECTING_DOCUMENT,
        PurchaseDownPayments.TAX_EXEMPTION_LETTER_NUM,
        PurchaseDownPayments.WT_APPLIED,
        PurchaseDownPayments.WT_APPLIED_FC,
        PurchaseDownPayments.AGENT_CODE,
        PurchaseDownPayments.WT_APPLIED_SC,
        PurchaseDownPayments.TOTAL_EQUALIZATION_TAX,
        PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseDownPayments.NUMBER_OF_INSTALLMENTS,
        PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT,
        PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseDownPayments.WT_EXEMPTED_AMOUNT,
        PurchaseDownPayments.WT_EXEMPTED_AMOUNT_SC,
        PurchaseDownPayments.WT_EXEMPTED_AMOUNT_FC,
        PurchaseDownPayments.BASE_AMOUNT,
        PurchaseDownPayments.BASE_AMOUNT_SC,
        PurchaseDownPayments.BASE_AMOUNT_FC,
        PurchaseDownPayments.WT_AMOUNT,
        PurchaseDownPayments.WT_AMOUNT_SC,
        PurchaseDownPayments.WT_AMOUNT_FC,
        PurchaseDownPayments.VAT_DATE,
        PurchaseDownPayments.DOCUMENTS_OWNER,
        PurchaseDownPayments.FOLIO_PREFIX_STRING,
        PurchaseDownPayments.FOLIO_NUMBER,
        PurchaseDownPayments.BP_CHANNEL_CODE,
        PurchaseDownPayments.BP_CHANNEL_CONTACT,
        PurchaseDownPayments.ADDRESS_2,
        PurchaseDownPayments.PERIOD_INDICATOR,
        PurchaseDownPayments.PAY_TO_CODE,
        PurchaseDownPayments.MANUAL_NUMBER,
        PurchaseDownPayments.PAY_TO_BANK_COUNTRY,
        PurchaseDownPayments.PAY_TO_BANK_CODE,
        PurchaseDownPayments.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseDownPayments.PAY_TO_BANK_BRANCH,
        PurchaseDownPayments.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseDownPayments.DOWN_PAYMENT,
        PurchaseDownPayments.LANGUAGE_CODE,
        PurchaseDownPayments.TRACKING_NUMBER,
        PurchaseDownPayments.PICK_REMARK,
        PurchaseDownPayments.CLOSING_DATE,
        PurchaseDownPayments.SEQUENCE_CODE,
        PurchaseDownPayments.SEQUENCE_SERIAL,
        PurchaseDownPayments.SERIES_STRING,
        PurchaseDownPayments.SUB_SERIES_STRING,
        PurchaseDownPayments.SEQUENCE_MODEL,
        PurchaseDownPayments.TOTAL_DISCOUNT,
        PurchaseDownPayments.DOWN_PAYMENT_AMOUNT,
        PurchaseDownPayments.DOWN_PAYMENT_PERCENTAGE,
        PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseDownPayments.VAT_PERCENT,
        PurchaseDownPayments.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseDownPayments.OPENING_REMARKS,
        PurchaseDownPayments.CLOSING_REMARKS,
        PurchaseDownPayments.ROUNDING_DIFF_AMOUNT,
        PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseDownPayments.SIGNATURE_INPUT_MESSAGE,
        PurchaseDownPayments.SIGNATURE_DIGEST,
        PurchaseDownPayments.CERTIFICATION_NUMBER,
        PurchaseDownPayments.PRIVATE_KEY_VERSION,
        PurchaseDownPayments.CONTROL_ACCOUNT,
        PurchaseDownPayments.GTS_CHECKER,
        PurchaseDownPayments.GTS_PAYEE,
        PurchaseDownPayments.EXTRA_MONTH,
        PurchaseDownPayments.EXTRA_DAYS,
        PurchaseDownPayments.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseDownPayments.E_TAX_WEB_SITE,
        PurchaseDownPayments.E_TAX_NUMBER,
        PurchaseDownPayments.NTS_APPROVED_NUMBER,
        PurchaseDownPayments.E_DOC_SERIES,
        PurchaseDownPayments.E_DOC_NUM,
        PurchaseDownPayments.E_DOC_EXPORT_FORMAT,
        PurchaseDownPayments.E_DOC_ERROR_CODE,
        PurchaseDownPayments.E_DOC_ERROR_MESSAGE,
        PurchaseDownPayments.GROUP_SERIES,
        PurchaseDownPayments.GROUP_NUMBER,
        PurchaseDownPayments.POS_EQUIPMENT_NUMBER,
        PurchaseDownPayments.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseDownPayments.POS_CASHIER_NUMBER,
        PurchaseDownPayments.SPECIFIED_CLOSING_DATE,
        PurchaseDownPayments.TOTAL_DISCOUNT_FC,
        PurchaseDownPayments.TOTAL_DISCOUNT_SC,
        PurchaseDownPayments.BPL_NAME,
        PurchaseDownPayments.VAT_REG_NUM,
        PurchaseDownPayments.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseDownPayments.SUPPLIER,
        PurchaseDownPayments.RELEASER,
        PurchaseDownPayments.RECEIVER,
        PurchaseDownPayments.BLANKET_AGREEMENT_NUMBER,
        PurchaseDownPayments.ASSET_VALUE_DATE,
        PurchaseDownPayments.REQUESTER,
        PurchaseDownPayments.REQUESTER_NAME,
        PurchaseDownPayments.REQUESTER_BRANCH,
        PurchaseDownPayments.REQUESTER_DEPARTMENT,
        PurchaseDownPayments.REQUESTER_EMAIL,
        PurchaseDownPayments.REQ_TYPE,
        PurchaseDownPayments.AUTHORIZATION_CODE,
        PurchaseDownPayments.START_DELIVERY_DATE,
        PurchaseDownPayments.START_DELIVERY_TIME,
        PurchaseDownPayments.END_DELIVERY_DATE,
        PurchaseDownPayments.END_DELIVERY_TIME,
        PurchaseDownPayments.VEHICLE_PLATE,
        PurchaseDownPayments.AT_DOCUMENT_TYPE,
        PurchaseDownPayments.ELEC_COMM_MESSAGE,
        PurchaseDownPayments.FISCAL_DOC_NUM,
        PurchaseDownPayments.POS_DAILY_SUMMARY_NO,
        PurchaseDownPayments.POS_RECEIPT_NO,
        PurchaseDownPayments.POINT_OF_ISSUE_CODE,
        PurchaseDownPayments.FOLIO_NUMBER_FROM,
        PurchaseDownPayments.FOLIO_NUMBER_TO,
        PurchaseDownPayments.RELATED_TYPE,
        PurchaseDownPayments.RELATED_ENTRY,
        PurchaseDownPayments.DOCUMENT_TAX_ID,
        PurchaseDownPayments.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseDownPayments.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseDownPayments.POS_CASH_REGISTER,
        PurchaseDownPayments.UPDATE_TIME,
        PurchaseDownPayments.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseDownPayments.ORIGINAL_REF_NO,
        PurchaseDownPayments.ORIGINAL_REF_DATE,
        PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseDownPayments.E_COMMERCE_OPERATOR,
        PurchaseDownPayments.E_COMMERCE_GSTIN,
        PurchaseDownPayments.TAX_INVOICE_NO,
        PurchaseDownPayments.TAX_INVOICE_DATE,
        PurchaseDownPayments.SHIP_FROM,
        PurchaseDownPayments.ISSUING_REASON,
        PurchaseDownPayments.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseDownPayments.DOCUMENT_LINES,
        PurchaseDownPayments.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseDownPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseDownPayments.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseDownPayments.DOCUMENT_PACKAGES,
        PurchaseDownPayments.DOCUMENT_SPECIAL_LINES,
        PurchaseDownPayments.DOCUMENT_INSTALLMENTS,
        PurchaseDownPayments.DOWN_PAYMENTS_TO_DRAW,
        PurchaseDownPayments.TAX_EXTENSION,
        PurchaseDownPayments.ADDRESS_EXTENSION,
        PurchaseDownPayments.SOI_WIZARD_ID,
        PurchaseDownPayments.BUSINESS_PARTNER,
        PurchaseDownPayments.CURRENCY,
        PurchaseDownPayments.PAYMENT_TERMS_TYPE,
        PurchaseDownPayments.SALES_PERSON,
        PurchaseDownPayments.SHIPPING_TYPE,
        PurchaseDownPayments.FACTORING_INDICATOR,
        PurchaseDownPayments.JOURNAL_ENTRY,
        PurchaseDownPayments.FORMS_1099,
        PurchaseDownPayments.WIZARD_PAYMENT_METHOD,
        PurchaseDownPayments.PAYMENT_BLOCK_2,
        PurchaseDownPayments.PROJECT_2,
        PurchaseDownPayments.EMPLOYEE_INFO,
        PurchaseDownPayments.COUNTRY,
        PurchaseDownPayments.BUSINESS_PLACE,
        PurchaseDownPayments.USER_LANGUAGE,
        PurchaseDownPayments.NF_MODEL,
        PurchaseDownPayments.CHART_OF_ACCOUNT,
        PurchaseDownPayments.TAX_WEB_SITE,
        PurchaseDownPayments.BRANCH,
        PurchaseDownPayments.DEPARTMENT,
        PurchaseDownPayments.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseDownPayments.ALL_FIELDS = new v4_1.AllFields('*', PurchaseDownPayments);
    /**
     * All key fields of the PurchaseDownPayments entity.
     */
    PurchaseDownPayments._keyFields = [PurchaseDownPayments.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseDownPayments.
     */
    PurchaseDownPayments._keys = PurchaseDownPayments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseDownPayments = exports.PurchaseDownPayments || (exports.PurchaseDownPayments = {}));
exports.PurchaseDownPayments = PurchaseDownPayments;
//# sourceMappingURL=PurchaseDownPayments.js.map