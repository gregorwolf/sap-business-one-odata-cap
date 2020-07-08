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
exports.PurchaseInvoices = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseInvoicesRequestBuilder_1 = require("./PurchaseInvoicesRequestBuilder");
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
 * This class represents the entity "PurchaseInvoices" of service "SAPB1".
 */
var PurchaseInvoices = /** @class */ (function (_super) {
    __extends(PurchaseInvoices, _super);
    function PurchaseInvoices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PurchaseInvoices`.
     * @returns A builder that constructs instances of entity type `PurchaseInvoices`.
     */
    PurchaseInvoices.builder = function () {
        return v4_1.Entity.entityBuilder(PurchaseInvoices);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseInvoices` entity type.
     * @returns A `PurchaseInvoices` request builder.
     */
    PurchaseInvoices.requestBuilder = function () {
        return new PurchaseInvoicesRequestBuilder_1.PurchaseInvoicesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseInvoices`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseInvoices`.
     */
    PurchaseInvoices.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, PurchaseInvoices);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseInvoices.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseInvoices.
     */
    PurchaseInvoices._entityName = 'PurchaseInvoices';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PurchaseInvoices.
     */
    PurchaseInvoices._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    PurchaseInvoices._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PurchaseInvoices;
}(v4_1.Entity));
exports.PurchaseInvoices = PurchaseInvoices;
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
(function (PurchaseInvoices) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_ENTRY = new v4_1.NumberField('DocEntry', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_NUM = new v4_1.NumberField('DocNum', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_DATE = new v4_1.DateField('DocDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CARD_CODE = new v4_1.StringField('CardCode', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CARD_NAME = new v4_1.StringField('CardName', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ADDRESS = new v4_1.StringField('Address', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.NUM_AT_CARD = new v4_1.StringField('NumAtCard', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_TOTAL = new v4_1.NumberField('DocTotal', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_CURRENCY = new v4_1.StringField('DocCurrency', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_RATE = new v4_1.NumberField('DocRate', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REFERENCE_1 = new v4_1.StringField('Reference1', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REFERENCE_2 = new v4_1.StringField('Reference2', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.COMMENTS = new v4_1.StringField('Comments', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_TIME = new v4_1.TimeField('DocTime', PurchaseInvoices, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SERIES = new v4_1.NumberField('Series', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TAX_DATE = new v4_1.DateField('TaxDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.INDICATOR = new v4_1.StringField('Indicator', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CREATION_DATE = new v4_1.DateField('CreationDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.UPDATE_DATE = new v4_1.DateField('UpdateDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TRANS_NUM = new v4_1.NumberField('TransNum', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.VAT_SUM = new v4_1.NumberField('VatSum', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FORM_1099 = new v4_1.NumberField('Form1099', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BOX_1099 = new v4_1.StringField('Box1099', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REQURIED_DATE = new v4_1.DateField('RequriedDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CANCEL_DATE = new v4_1.DateField('CancelDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SEGMENT = new v4_1.NumberField('Segment', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PROJECT = new v4_1.StringField('Project', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_APPLIED = new v4_1.NumberField('WTApplied', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.AGENT_CODE = new v4_1.StringField('AgentCode', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_AMOUNT = new v4_1.NumberField('WTAmount', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.VAT_DATE = new v4_1.DateField('VatDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ADDRESS_2 = new v4_1.StringField('Address2', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAY_TO_CODE = new v4_1.StringField('PayToCode', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PICK_REMARK = new v4_1.StringField('PickRemark', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CLOSING_DATE = new v4_1.DateField('ClosingDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SERIES_STRING = new v4_1.StringField('SeriesString', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.VAT_PERCENT = new v4_1.NumberField('VatPercent', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.GTS_CHECKER = new v4_1.NumberField('GTSChecker', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.GTS_PAYEE = new v4_1.NumberField('GTSPayee', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.E_DOC_NUM = new v4_1.StringField('EDocNum', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.GROUP_SERIES = new v4_1.NumberField('GroupSeries', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', PurchaseInvoices, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BPL_NAME = new v4_1.StringField('BPLName', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.VAT_REG_NUM = new v4_1.StringField('VATRegNum', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SUPPLIER = new v4_1.StringField('Supplier', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.RELEASER = new v4_1.NumberField('Releaser', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.RECEIVER = new v4_1.NumberField('Receiver', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REQUESTER = new v4_1.StringField('Requester', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REQUESTER_NAME = new v4_1.StringField('RequesterName', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REQ_TYPE = new v4_1.NumberField('ReqType', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', PurchaseInvoices, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', PurchaseInvoices, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.RELATED_TYPE = new v4_1.NumberField('RelatedType', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.UPDATE_TIME = new v4_1.TimeField('UpdateTime', PurchaseInvoices, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', PurchaseInvoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SHIP_FROM = new v4_1.StringField('ShipFrom', PurchaseInvoices, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ISSUING_REASON = new v4_1.NumberField('IssuingReason', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', PurchaseInvoices, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', PurchaseInvoices));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', PurchaseInvoices, new DocumentLine_1.DocumentLineField('', PurchaseInvoices));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', PurchaseInvoices, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', PurchaseInvoices));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseInvoices, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', PurchaseInvoices));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', PurchaseInvoices, new WithholdingTaxData_1.WithholdingTaxDataField('', PurchaseInvoices));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', PurchaseInvoices, new DocumentPackage_1.DocumentPackageField('', PurchaseInvoices));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', PurchaseInvoices, new DocumentSpecialLine_1.DocumentSpecialLineField('', PurchaseInvoices));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', PurchaseInvoices, new DocumentInstallment_1.DocumentInstallmentField('', PurchaseInvoices));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', PurchaseInvoices, new DownPaymentToDraw_1.DownPaymentToDrawField('', PurchaseInvoices));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseInvoices);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseInvoices);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', PurchaseInvoices, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', PurchaseInvoices, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CURRENCY = new v4_1.OneToOneLink('Currency', PurchaseInvoices, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', PurchaseInvoices, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', PurchaseInvoices, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', PurchaseInvoices, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', PurchaseInvoices, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', PurchaseInvoices, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', PurchaseInvoices, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', PurchaseInvoices, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', PurchaseInvoices, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.PROJECT_2 = new v4_1.OneToOneLink('Project2', PurchaseInvoices, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', PurchaseInvoices, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.COUNTRY = new v4_1.OneToOneLink('Country', PurchaseInvoices, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', PurchaseInvoices, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', PurchaseInvoices, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.NF_MODEL = new v4_1.OneToOneLink('NFModel', PurchaseInvoices, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', PurchaseInvoices, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', PurchaseInvoices, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.BRANCH = new v4_1.OneToOneLink('Branch', PurchaseInvoices, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.DEPARTMENT = new v4_1.OneToOneLink('Department', PurchaseInvoices, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseInvoices.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', PurchaseInvoices, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseInvoices entity.
     */
    PurchaseInvoices._allFields = [
        PurchaseInvoices.DOC_ENTRY,
        PurchaseInvoices.DOC_NUM,
        PurchaseInvoices.DOC_DATE,
        PurchaseInvoices.DOC_DUE_DATE,
        PurchaseInvoices.CARD_CODE,
        PurchaseInvoices.CARD_NAME,
        PurchaseInvoices.ADDRESS,
        PurchaseInvoices.NUM_AT_CARD,
        PurchaseInvoices.DOC_TOTAL,
        PurchaseInvoices.ATTACHMENT_ENTRY,
        PurchaseInvoices.DOC_CURRENCY,
        PurchaseInvoices.DOC_RATE,
        PurchaseInvoices.REFERENCE_1,
        PurchaseInvoices.REFERENCE_2,
        PurchaseInvoices.COMMENTS,
        PurchaseInvoices.JOURNAL_MEMO,
        PurchaseInvoices.PAYMENT_GROUP_CODE,
        PurchaseInvoices.DOC_TIME,
        PurchaseInvoices.SALES_PERSON_CODE,
        PurchaseInvoices.TRANSPORTATION_CODE,
        PurchaseInvoices.IMPORT_FILE_NUM,
        PurchaseInvoices.CONTACT_PERSON_CODE,
        PurchaseInvoices.SERIES,
        PurchaseInvoices.TAX_DATE,
        PurchaseInvoices.SHIP_TO_CODE,
        PurchaseInvoices.INDICATOR,
        PurchaseInvoices.FEDERAL_TAX_ID,
        PurchaseInvoices.DISCOUNT_PERCENT,
        PurchaseInvoices.PAYMENT_REFERENCE,
        PurchaseInvoices.CREATION_DATE,
        PurchaseInvoices.UPDATE_DATE,
        PurchaseInvoices.FINANCIAL_PERIOD,
        PurchaseInvoices.TRANS_NUM,
        PurchaseInvoices.VAT_SUM,
        PurchaseInvoices.VAT_SUM_SYS,
        PurchaseInvoices.VAT_SUM_FC,
        PurchaseInvoices.DOC_TOTAL_FC,
        PurchaseInvoices.DOC_TOTAL_SYS,
        PurchaseInvoices.FORM_1099,
        PurchaseInvoices.BOX_1099,
        PurchaseInvoices.REQURIED_DATE,
        PurchaseInvoices.CANCEL_DATE,
        PurchaseInvoices.SEGMENT,
        PurchaseInvoices.PAYMENT_METHOD,
        PurchaseInvoices.PAYMENT_BLOCK_ENTRY,
        PurchaseInvoices.CENTRAL_BANK_INDICATOR,
        PurchaseInvoices.PROJECT,
        PurchaseInvoices.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseInvoices.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseInvoices.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseInvoices.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseInvoices.NEXT_CORRECTING_DOCUMENT,
        PurchaseInvoices.TAX_EXEMPTION_LETTER_NUM,
        PurchaseInvoices.WT_APPLIED,
        PurchaseInvoices.WT_APPLIED_FC,
        PurchaseInvoices.AGENT_CODE,
        PurchaseInvoices.WT_APPLIED_SC,
        PurchaseInvoices.TOTAL_EQUALIZATION_TAX,
        PurchaseInvoices.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseInvoices.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseInvoices.NUMBER_OF_INSTALLMENTS,
        PurchaseInvoices.WT_NON_SUBJECT_AMOUNT,
        PurchaseInvoices.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseInvoices.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseInvoices.WT_EXEMPTED_AMOUNT,
        PurchaseInvoices.WT_EXEMPTED_AMOUNT_SC,
        PurchaseInvoices.WT_EXEMPTED_AMOUNT_FC,
        PurchaseInvoices.BASE_AMOUNT,
        PurchaseInvoices.BASE_AMOUNT_SC,
        PurchaseInvoices.BASE_AMOUNT_FC,
        PurchaseInvoices.WT_AMOUNT,
        PurchaseInvoices.WT_AMOUNT_SC,
        PurchaseInvoices.WT_AMOUNT_FC,
        PurchaseInvoices.VAT_DATE,
        PurchaseInvoices.DOCUMENTS_OWNER,
        PurchaseInvoices.FOLIO_PREFIX_STRING,
        PurchaseInvoices.FOLIO_NUMBER,
        PurchaseInvoices.BP_CHANNEL_CODE,
        PurchaseInvoices.BP_CHANNEL_CONTACT,
        PurchaseInvoices.ADDRESS_2,
        PurchaseInvoices.PERIOD_INDICATOR,
        PurchaseInvoices.PAY_TO_CODE,
        PurchaseInvoices.MANUAL_NUMBER,
        PurchaseInvoices.PAY_TO_BANK_COUNTRY,
        PurchaseInvoices.PAY_TO_BANK_CODE,
        PurchaseInvoices.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseInvoices.PAY_TO_BANK_BRANCH,
        PurchaseInvoices.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseInvoices.DOWN_PAYMENT,
        PurchaseInvoices.LANGUAGE_CODE,
        PurchaseInvoices.TRACKING_NUMBER,
        PurchaseInvoices.PICK_REMARK,
        PurchaseInvoices.CLOSING_DATE,
        PurchaseInvoices.SEQUENCE_CODE,
        PurchaseInvoices.SEQUENCE_SERIAL,
        PurchaseInvoices.SERIES_STRING,
        PurchaseInvoices.SUB_SERIES_STRING,
        PurchaseInvoices.SEQUENCE_MODEL,
        PurchaseInvoices.TOTAL_DISCOUNT,
        PurchaseInvoices.DOWN_PAYMENT_AMOUNT,
        PurchaseInvoices.DOWN_PAYMENT_PERCENTAGE,
        PurchaseInvoices.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseInvoices.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseInvoices.VAT_PERCENT,
        PurchaseInvoices.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseInvoices.OPENING_REMARKS,
        PurchaseInvoices.CLOSING_REMARKS,
        PurchaseInvoices.ROUNDING_DIFF_AMOUNT,
        PurchaseInvoices.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseInvoices.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseInvoices.SIGNATURE_INPUT_MESSAGE,
        PurchaseInvoices.SIGNATURE_DIGEST,
        PurchaseInvoices.CERTIFICATION_NUMBER,
        PurchaseInvoices.PRIVATE_KEY_VERSION,
        PurchaseInvoices.CONTROL_ACCOUNT,
        PurchaseInvoices.GTS_CHECKER,
        PurchaseInvoices.GTS_PAYEE,
        PurchaseInvoices.EXTRA_MONTH,
        PurchaseInvoices.EXTRA_DAYS,
        PurchaseInvoices.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseInvoices.E_TAX_WEB_SITE,
        PurchaseInvoices.E_TAX_NUMBER,
        PurchaseInvoices.NTS_APPROVED_NUMBER,
        PurchaseInvoices.E_DOC_SERIES,
        PurchaseInvoices.E_DOC_NUM,
        PurchaseInvoices.E_DOC_EXPORT_FORMAT,
        PurchaseInvoices.E_DOC_ERROR_CODE,
        PurchaseInvoices.E_DOC_ERROR_MESSAGE,
        PurchaseInvoices.GROUP_SERIES,
        PurchaseInvoices.GROUP_NUMBER,
        PurchaseInvoices.POS_EQUIPMENT_NUMBER,
        PurchaseInvoices.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseInvoices.POS_CASHIER_NUMBER,
        PurchaseInvoices.SPECIFIED_CLOSING_DATE,
        PurchaseInvoices.TOTAL_DISCOUNT_FC,
        PurchaseInvoices.TOTAL_DISCOUNT_SC,
        PurchaseInvoices.BPL_NAME,
        PurchaseInvoices.VAT_REG_NUM,
        PurchaseInvoices.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseInvoices.SUPPLIER,
        PurchaseInvoices.RELEASER,
        PurchaseInvoices.RECEIVER,
        PurchaseInvoices.BLANKET_AGREEMENT_NUMBER,
        PurchaseInvoices.ASSET_VALUE_DATE,
        PurchaseInvoices.REQUESTER,
        PurchaseInvoices.REQUESTER_NAME,
        PurchaseInvoices.REQUESTER_BRANCH,
        PurchaseInvoices.REQUESTER_DEPARTMENT,
        PurchaseInvoices.REQUESTER_EMAIL,
        PurchaseInvoices.REQ_TYPE,
        PurchaseInvoices.AUTHORIZATION_CODE,
        PurchaseInvoices.START_DELIVERY_DATE,
        PurchaseInvoices.START_DELIVERY_TIME,
        PurchaseInvoices.END_DELIVERY_DATE,
        PurchaseInvoices.END_DELIVERY_TIME,
        PurchaseInvoices.VEHICLE_PLATE,
        PurchaseInvoices.AT_DOCUMENT_TYPE,
        PurchaseInvoices.ELEC_COMM_MESSAGE,
        PurchaseInvoices.FISCAL_DOC_NUM,
        PurchaseInvoices.POS_DAILY_SUMMARY_NO,
        PurchaseInvoices.POS_RECEIPT_NO,
        PurchaseInvoices.POINT_OF_ISSUE_CODE,
        PurchaseInvoices.FOLIO_NUMBER_FROM,
        PurchaseInvoices.FOLIO_NUMBER_TO,
        PurchaseInvoices.RELATED_TYPE,
        PurchaseInvoices.RELATED_ENTRY,
        PurchaseInvoices.DOCUMENT_TAX_ID,
        PurchaseInvoices.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseInvoices.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseInvoices.POS_CASH_REGISTER,
        PurchaseInvoices.UPDATE_TIME,
        PurchaseInvoices.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseInvoices.ORIGINAL_REF_NO,
        PurchaseInvoices.ORIGINAL_REF_DATE,
        PurchaseInvoices.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseInvoices.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseInvoices.E_COMMERCE_OPERATOR,
        PurchaseInvoices.E_COMMERCE_GSTIN,
        PurchaseInvoices.TAX_INVOICE_NO,
        PurchaseInvoices.TAX_INVOICE_DATE,
        PurchaseInvoices.SHIP_FROM,
        PurchaseInvoices.ISSUING_REASON,
        PurchaseInvoices.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseInvoices.DOCUMENT_LINES,
        PurchaseInvoices.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseInvoices.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseInvoices.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseInvoices.DOCUMENT_PACKAGES,
        PurchaseInvoices.DOCUMENT_SPECIAL_LINES,
        PurchaseInvoices.DOCUMENT_INSTALLMENTS,
        PurchaseInvoices.DOWN_PAYMENTS_TO_DRAW,
        PurchaseInvoices.TAX_EXTENSION,
        PurchaseInvoices.ADDRESS_EXTENSION,
        PurchaseInvoices.SOI_WIZARD_ID,
        PurchaseInvoices.BUSINESS_PARTNER,
        PurchaseInvoices.CURRENCY,
        PurchaseInvoices.PAYMENT_TERMS_TYPE,
        PurchaseInvoices.SALES_PERSON,
        PurchaseInvoices.SHIPPING_TYPE,
        PurchaseInvoices.FACTORING_INDICATOR,
        PurchaseInvoices.JOURNAL_ENTRY,
        PurchaseInvoices.FORMS_1099,
        PurchaseInvoices.WIZARD_PAYMENT_METHOD,
        PurchaseInvoices.PAYMENT_BLOCK_2,
        PurchaseInvoices.PROJECT_2,
        PurchaseInvoices.EMPLOYEE_INFO,
        PurchaseInvoices.COUNTRY,
        PurchaseInvoices.BUSINESS_PLACE,
        PurchaseInvoices.USER_LANGUAGE,
        PurchaseInvoices.NF_MODEL,
        PurchaseInvoices.CHART_OF_ACCOUNT,
        PurchaseInvoices.TAX_WEB_SITE,
        PurchaseInvoices.BRANCH,
        PurchaseInvoices.DEPARTMENT,
        PurchaseInvoices.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseInvoices.ALL_FIELDS = new v4_1.AllFields('*', PurchaseInvoices);
    /**
     * All key fields of the PurchaseInvoices entity.
     */
    PurchaseInvoices._keyFields = [PurchaseInvoices.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseInvoices.
     */
    PurchaseInvoices._keys = PurchaseInvoices._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseInvoices = exports.PurchaseInvoices || (exports.PurchaseInvoices = {}));
exports.PurchaseInvoices = PurchaseInvoices;
//# sourceMappingURL=PurchaseInvoices.js.map