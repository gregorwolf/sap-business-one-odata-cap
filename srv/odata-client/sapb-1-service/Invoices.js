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
exports.Invoices = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InvoicesRequestBuilder_1 = require("./InvoicesRequestBuilder");
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
 * This class represents the entity "Invoices" of service "SAPB1".
 */
var Invoices = /** @class */ (function (_super) {
    __extends(Invoices, _super);
    function Invoices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Invoices`.
     * @returns A builder that constructs instances of entity type `Invoices`.
     */
    Invoices.builder = function () {
        return v4_1.Entity.entityBuilder(Invoices);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Invoices` entity type.
     * @returns A `Invoices` request builder.
     */
    Invoices.requestBuilder = function () {
        return new InvoicesRequestBuilder_1.InvoicesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Invoices`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Invoices`.
     */
    Invoices.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Invoices);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Invoices.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Invoices.
     */
    Invoices._entityName = 'Invoices';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Invoices.
     */
    Invoices._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Invoices._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Invoices;
}(v4_1.Entity));
exports.Invoices = Invoices;
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
(function (Invoices) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_ENTRY = new v4_1.NumberField('DocEntry', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_NUM = new v4_1.NumberField('DocNum', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_DATE = new v4_1.DateField('DocDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CARD_CODE = new v4_1.StringField('CardCode', Invoices, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CARD_NAME = new v4_1.StringField('CardName', Invoices, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ADDRESS = new v4_1.StringField('Address', Invoices, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.NUM_AT_CARD = new v4_1.StringField('NumAtCard', Invoices, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_TOTAL = new v4_1.NumberField('DocTotal', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_CURRENCY = new v4_1.StringField('DocCurrency', Invoices, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_RATE = new v4_1.NumberField('DocRate', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REFERENCE_1 = new v4_1.StringField('Reference1', Invoices, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REFERENCE_2 = new v4_1.StringField('Reference2', Invoices, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.COMMENTS = new v4_1.StringField('Comments', Invoices, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', Invoices, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_TIME = new v4_1.TimeField('DocTime', Invoices, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SERIES = new v4_1.NumberField('Series', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TAX_DATE = new v4_1.DateField('TaxDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', Invoices, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.INDICATOR = new v4_1.StringField('Indicator', Invoices, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', Invoices, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', Invoices, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CREATION_DATE = new v4_1.DateField('CreationDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.UPDATE_DATE = new v4_1.DateField('UpdateDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TRANS_NUM = new v4_1.NumberField('TransNum', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.VAT_SUM = new v4_1.NumberField('VatSum', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FORM_1099 = new v4_1.NumberField('Form1099', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BOX_1099 = new v4_1.StringField('Box1099', Invoices, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REQURIED_DATE = new v4_1.DateField('RequriedDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CANCEL_DATE = new v4_1.DateField('CancelDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SEGMENT = new v4_1.NumberField('Segment', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', Invoices, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', Invoices, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PROJECT = new v4_1.StringField('Project', Invoices, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', Invoices, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', Invoices, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_APPLIED = new v4_1.NumberField('WTApplied', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.AGENT_CODE = new v4_1.StringField('AgentCode', Invoices, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_AMOUNT = new v4_1.NumberField('WTAmount', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.VAT_DATE = new v4_1.DateField('VatDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', Invoices, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', Invoices, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ADDRESS_2 = new v4_1.StringField('Address2', Invoices, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', Invoices, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAY_TO_CODE = new v4_1.StringField('PayToCode', Invoices, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', Invoices, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', Invoices, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', Invoices, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', Invoices, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', Invoices, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', Invoices, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PICK_REMARK = new v4_1.StringField('PickRemark', Invoices, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CLOSING_DATE = new v4_1.DateField('ClosingDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SERIES_STRING = new v4_1.StringField('SeriesString', Invoices, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', Invoices, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', Invoices, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.VAT_PERCENT = new v4_1.NumberField('VatPercent', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', Invoices, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', Invoices, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', Invoices, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', Invoices, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', Invoices, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', Invoices, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.GTS_CHECKER = new v4_1.NumberField('GTSChecker', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.GTS_PAYEE = new v4_1.NumberField('GTSPayee', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', Invoices, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', Invoices, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.E_DOC_NUM = new v4_1.StringField('EDocNum', Invoices, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', Invoices, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', Invoices, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.GROUP_SERIES = new v4_1.NumberField('GroupSeries', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', Invoices, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', Invoices, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', Invoices, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BPL_NAME = new v4_1.StringField('BPLName', Invoices, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.VAT_REG_NUM = new v4_1.StringField('VATRegNum', Invoices, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SUPPLIER = new v4_1.StringField('Supplier', Invoices, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.RELEASER = new v4_1.NumberField('Releaser', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.RECEIVER = new v4_1.NumberField('Receiver', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REQUESTER = new v4_1.StringField('Requester', Invoices, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REQUESTER_NAME = new v4_1.StringField('RequesterName', Invoices, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', Invoices, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REQ_TYPE = new v4_1.NumberField('ReqType', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', Invoices, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', Invoices, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', Invoices, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', Invoices, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', Invoices, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', Invoices, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', Invoices, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', Invoices, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.RELATED_TYPE = new v4_1.NumberField('RelatedType', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', Invoices, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', Invoices, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.UPDATE_TIME = new v4_1.TimeField('UpdateTime', Invoices, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', Invoices, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', Invoices, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', Invoices, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', Invoices, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', Invoices, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', Invoices, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', Invoices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SHIP_FROM = new v4_1.StringField('ShipFrom', Invoices, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ISSUING_REASON = new v4_1.NumberField('IssuingReason', Invoices, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', Invoices, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', Invoices));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', Invoices, new DocumentLine_1.DocumentLineField('', Invoices));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', Invoices, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', Invoices));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', Invoices, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', Invoices));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', Invoices, new WithholdingTaxData_1.WithholdingTaxDataField('', Invoices));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', Invoices, new DocumentPackage_1.DocumentPackageField('', Invoices));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', Invoices, new DocumentSpecialLine_1.DocumentSpecialLineField('', Invoices));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', Invoices, new DocumentInstallment_1.DocumentInstallmentField('', Invoices));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', Invoices, new DownPaymentToDraw_1.DownPaymentToDrawField('', Invoices));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', Invoices);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', Invoices);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', Invoices, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', Invoices, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CURRENCY = new v4_1.OneToOneLink('Currency', Invoices, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', Invoices, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', Invoices, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', Invoices, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', Invoices, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', Invoices, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', Invoices, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', Invoices, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', Invoices, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.PROJECT_2 = new v4_1.OneToOneLink('Project2', Invoices, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', Invoices, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.COUNTRY = new v4_1.OneToOneLink('Country', Invoices, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', Invoices, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', Invoices, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.NF_MODEL = new v4_1.OneToOneLink('NFModel', Invoices, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', Invoices, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', Invoices, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.BRANCH = new v4_1.OneToOneLink('Branch', Invoices, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.DEPARTMENT = new v4_1.OneToOneLink('Department', Invoices, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Invoices.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', Invoices, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the Invoices entity.
     */
    Invoices._allFields = [
        Invoices.DOC_ENTRY,
        Invoices.DOC_NUM,
        Invoices.DOC_DATE,
        Invoices.DOC_DUE_DATE,
        Invoices.CARD_CODE,
        Invoices.CARD_NAME,
        Invoices.ADDRESS,
        Invoices.NUM_AT_CARD,
        Invoices.DOC_TOTAL,
        Invoices.ATTACHMENT_ENTRY,
        Invoices.DOC_CURRENCY,
        Invoices.DOC_RATE,
        Invoices.REFERENCE_1,
        Invoices.REFERENCE_2,
        Invoices.COMMENTS,
        Invoices.JOURNAL_MEMO,
        Invoices.PAYMENT_GROUP_CODE,
        Invoices.DOC_TIME,
        Invoices.SALES_PERSON_CODE,
        Invoices.TRANSPORTATION_CODE,
        Invoices.IMPORT_FILE_NUM,
        Invoices.CONTACT_PERSON_CODE,
        Invoices.SERIES,
        Invoices.TAX_DATE,
        Invoices.SHIP_TO_CODE,
        Invoices.INDICATOR,
        Invoices.FEDERAL_TAX_ID,
        Invoices.DISCOUNT_PERCENT,
        Invoices.PAYMENT_REFERENCE,
        Invoices.CREATION_DATE,
        Invoices.UPDATE_DATE,
        Invoices.FINANCIAL_PERIOD,
        Invoices.TRANS_NUM,
        Invoices.VAT_SUM,
        Invoices.VAT_SUM_SYS,
        Invoices.VAT_SUM_FC,
        Invoices.DOC_TOTAL_FC,
        Invoices.DOC_TOTAL_SYS,
        Invoices.FORM_1099,
        Invoices.BOX_1099,
        Invoices.REQURIED_DATE,
        Invoices.CANCEL_DATE,
        Invoices.SEGMENT,
        Invoices.PAYMENT_METHOD,
        Invoices.PAYMENT_BLOCK_ENTRY,
        Invoices.CENTRAL_BANK_INDICATOR,
        Invoices.PROJECT,
        Invoices.EXEMPTION_VALIDITY_DATE_FROM,
        Invoices.EXEMPTION_VALIDITY_DATE_TO,
        Invoices.EXTERNAL_CORRECTED_DOC_NUM,
        Invoices.INTERNAL_CORRECTED_DOC_NUM,
        Invoices.NEXT_CORRECTING_DOCUMENT,
        Invoices.TAX_EXEMPTION_LETTER_NUM,
        Invoices.WT_APPLIED,
        Invoices.WT_APPLIED_FC,
        Invoices.AGENT_CODE,
        Invoices.WT_APPLIED_SC,
        Invoices.TOTAL_EQUALIZATION_TAX,
        Invoices.TOTAL_EQUALIZATION_TAX_FC,
        Invoices.TOTAL_EQUALIZATION_TAX_SC,
        Invoices.NUMBER_OF_INSTALLMENTS,
        Invoices.WT_NON_SUBJECT_AMOUNT,
        Invoices.WT_NON_SUBJECT_AMOUNT_SC,
        Invoices.WT_NON_SUBJECT_AMOUNT_FC,
        Invoices.WT_EXEMPTED_AMOUNT,
        Invoices.WT_EXEMPTED_AMOUNT_SC,
        Invoices.WT_EXEMPTED_AMOUNT_FC,
        Invoices.BASE_AMOUNT,
        Invoices.BASE_AMOUNT_SC,
        Invoices.BASE_AMOUNT_FC,
        Invoices.WT_AMOUNT,
        Invoices.WT_AMOUNT_SC,
        Invoices.WT_AMOUNT_FC,
        Invoices.VAT_DATE,
        Invoices.DOCUMENTS_OWNER,
        Invoices.FOLIO_PREFIX_STRING,
        Invoices.FOLIO_NUMBER,
        Invoices.BP_CHANNEL_CODE,
        Invoices.BP_CHANNEL_CONTACT,
        Invoices.ADDRESS_2,
        Invoices.PERIOD_INDICATOR,
        Invoices.PAY_TO_CODE,
        Invoices.MANUAL_NUMBER,
        Invoices.PAY_TO_BANK_COUNTRY,
        Invoices.PAY_TO_BANK_CODE,
        Invoices.PAY_TO_BANK_ACCOUNT_NO,
        Invoices.PAY_TO_BANK_BRANCH,
        Invoices.BPL_ID_ASSIGNED_TO_INVOICE,
        Invoices.DOWN_PAYMENT,
        Invoices.LANGUAGE_CODE,
        Invoices.TRACKING_NUMBER,
        Invoices.PICK_REMARK,
        Invoices.CLOSING_DATE,
        Invoices.SEQUENCE_CODE,
        Invoices.SEQUENCE_SERIAL,
        Invoices.SERIES_STRING,
        Invoices.SUB_SERIES_STRING,
        Invoices.SEQUENCE_MODEL,
        Invoices.TOTAL_DISCOUNT,
        Invoices.DOWN_PAYMENT_AMOUNT,
        Invoices.DOWN_PAYMENT_PERCENTAGE,
        Invoices.DOWN_PAYMENT_AMOUNT_SC,
        Invoices.DOWN_PAYMENT_AMOUNT_FC,
        Invoices.VAT_PERCENT,
        Invoices.SERVICE_GROSS_PROFIT_PERCENT,
        Invoices.OPENING_REMARKS,
        Invoices.CLOSING_REMARKS,
        Invoices.ROUNDING_DIFF_AMOUNT,
        Invoices.ROUNDING_DIFF_AMOUNT_FC,
        Invoices.ROUNDING_DIFF_AMOUNT_SC,
        Invoices.SIGNATURE_INPUT_MESSAGE,
        Invoices.SIGNATURE_DIGEST,
        Invoices.CERTIFICATION_NUMBER,
        Invoices.PRIVATE_KEY_VERSION,
        Invoices.CONTROL_ACCOUNT,
        Invoices.GTS_CHECKER,
        Invoices.GTS_PAYEE,
        Invoices.EXTRA_MONTH,
        Invoices.EXTRA_DAYS,
        Invoices.CASH_DISCOUNT_DATE_OFFSET,
        Invoices.E_TAX_WEB_SITE,
        Invoices.E_TAX_NUMBER,
        Invoices.NTS_APPROVED_NUMBER,
        Invoices.E_DOC_SERIES,
        Invoices.E_DOC_NUM,
        Invoices.E_DOC_EXPORT_FORMAT,
        Invoices.E_DOC_ERROR_CODE,
        Invoices.E_DOC_ERROR_MESSAGE,
        Invoices.GROUP_SERIES,
        Invoices.GROUP_NUMBER,
        Invoices.POS_EQUIPMENT_NUMBER,
        Invoices.POS_MANUFACTURER_SERIAL_NUMBER,
        Invoices.POS_CASHIER_NUMBER,
        Invoices.SPECIFIED_CLOSING_DATE,
        Invoices.TOTAL_DISCOUNT_FC,
        Invoices.TOTAL_DISCOUNT_SC,
        Invoices.BPL_NAME,
        Invoices.VAT_REG_NUM,
        Invoices.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        Invoices.SUPPLIER,
        Invoices.RELEASER,
        Invoices.RECEIVER,
        Invoices.BLANKET_AGREEMENT_NUMBER,
        Invoices.ASSET_VALUE_DATE,
        Invoices.REQUESTER,
        Invoices.REQUESTER_NAME,
        Invoices.REQUESTER_BRANCH,
        Invoices.REQUESTER_DEPARTMENT,
        Invoices.REQUESTER_EMAIL,
        Invoices.REQ_TYPE,
        Invoices.AUTHORIZATION_CODE,
        Invoices.START_DELIVERY_DATE,
        Invoices.START_DELIVERY_TIME,
        Invoices.END_DELIVERY_DATE,
        Invoices.END_DELIVERY_TIME,
        Invoices.VEHICLE_PLATE,
        Invoices.AT_DOCUMENT_TYPE,
        Invoices.ELEC_COMM_MESSAGE,
        Invoices.FISCAL_DOC_NUM,
        Invoices.POS_DAILY_SUMMARY_NO,
        Invoices.POS_RECEIPT_NO,
        Invoices.POINT_OF_ISSUE_CODE,
        Invoices.FOLIO_NUMBER_FROM,
        Invoices.FOLIO_NUMBER_TO,
        Invoices.RELATED_TYPE,
        Invoices.RELATED_ENTRY,
        Invoices.DOCUMENT_TAX_ID,
        Invoices.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        Invoices.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        Invoices.POS_CASH_REGISTER,
        Invoices.UPDATE_TIME,
        Invoices.DOWN_PAYMENT_TRASACTION_ID,
        Invoices.ORIGINAL_REF_NO,
        Invoices.ORIGINAL_REF_DATE,
        Invoices.ORIGINAL_CREDIT_OR_DEBIT_NO,
        Invoices.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        Invoices.E_COMMERCE_OPERATOR,
        Invoices.E_COMMERCE_GSTIN,
        Invoices.TAX_INVOICE_NO,
        Invoices.TAX_INVOICE_DATE,
        Invoices.SHIP_FROM,
        Invoices.ISSUING_REASON,
        Invoices.DOCUMENT_APPROVAL_REQUESTS,
        Invoices.DOCUMENT_LINES,
        Invoices.DOCUMENT_ADDITIONAL_EXPENSES,
        Invoices.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        Invoices.WITHHOLDING_TAX_DATA_COLLECTION,
        Invoices.DOCUMENT_PACKAGES,
        Invoices.DOCUMENT_SPECIAL_LINES,
        Invoices.DOCUMENT_INSTALLMENTS,
        Invoices.DOWN_PAYMENTS_TO_DRAW,
        Invoices.TAX_EXTENSION,
        Invoices.ADDRESS_EXTENSION,
        Invoices.SOI_WIZARD_ID,
        Invoices.BUSINESS_PARTNER,
        Invoices.CURRENCY,
        Invoices.PAYMENT_TERMS_TYPE,
        Invoices.SALES_PERSON,
        Invoices.SHIPPING_TYPE,
        Invoices.FACTORING_INDICATOR,
        Invoices.JOURNAL_ENTRY,
        Invoices.FORMS_1099,
        Invoices.WIZARD_PAYMENT_METHOD,
        Invoices.PAYMENT_BLOCK_2,
        Invoices.PROJECT_2,
        Invoices.EMPLOYEE_INFO,
        Invoices.COUNTRY,
        Invoices.BUSINESS_PLACE,
        Invoices.USER_LANGUAGE,
        Invoices.NF_MODEL,
        Invoices.CHART_OF_ACCOUNT,
        Invoices.TAX_WEB_SITE,
        Invoices.BRANCH,
        Invoices.DEPARTMENT,
        Invoices.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    Invoices.ALL_FIELDS = new v4_1.AllFields('*', Invoices);
    /**
     * All key fields of the Invoices entity.
     */
    Invoices._keyFields = [Invoices.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Invoices.
     */
    Invoices._keys = Invoices._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Invoices = exports.Invoices || (exports.Invoices = {}));
exports.Invoices = Invoices;
//# sourceMappingURL=Invoices.js.map