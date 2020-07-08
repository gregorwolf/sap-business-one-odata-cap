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
exports.Quotations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var QuotationsRequestBuilder_1 = require("./QuotationsRequestBuilder");
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
 * This class represents the entity "Quotations" of service "SAPB1".
 */
var Quotations = /** @class */ (function (_super) {
    __extends(Quotations, _super);
    function Quotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Quotations`.
     * @returns A builder that constructs instances of entity type `Quotations`.
     */
    Quotations.builder = function () {
        return v4_1.Entity.entityBuilder(Quotations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Quotations` entity type.
     * @returns A `Quotations` request builder.
     */
    Quotations.requestBuilder = function () {
        return new QuotationsRequestBuilder_1.QuotationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Quotations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Quotations`.
     */
    Quotations.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Quotations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Quotations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Quotations.
     */
    Quotations._entityName = 'Quotations';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Quotations.
     */
    Quotations._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Quotations._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Quotations;
}(v4_1.Entity));
exports.Quotations = Quotations;
var BusinessPartners_1 = require("./BusinessPartners");
var Currencies_1 = require("./Currencies");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
var SalesPersons_1 = require("./SalesPersons");
var ShippingTypes_1 = require("./ShippingTypes");
var FactoringIndicators_1 = require("./FactoringIndicators");
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
(function (Quotations) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_ENTRY = new v4_1.NumberField('DocEntry', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_NUM = new v4_1.NumberField('DocNum', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_DATE = new v4_1.DateField('DocDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CARD_CODE = new v4_1.StringField('CardCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CARD_NAME = new v4_1.StringField('CardName', Quotations, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ADDRESS = new v4_1.StringField('Address', Quotations, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NUM_AT_CARD = new v4_1.StringField('NumAtCard', Quotations, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_TOTAL = new v4_1.NumberField('DocTotal', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_CURRENCY = new v4_1.StringField('DocCurrency', Quotations, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_RATE = new v4_1.NumberField('DocRate', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REFERENCE_1 = new v4_1.StringField('Reference1', Quotations, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REFERENCE_2 = new v4_1.StringField('Reference2', Quotations, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.COMMENTS = new v4_1.StringField('Comments', Quotations, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_TIME = new v4_1.TimeField('DocTime', Quotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SERIES = new v4_1.NumberField('Series', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_DATE = new v4_1.DateField('TaxDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.INDICATOR = new v4_1.StringField('Indicator', Quotations, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', Quotations, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', Quotations, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CREATION_DATE = new v4_1.DateField('CreationDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.UPDATE_DATE = new v4_1.DateField('UpdateDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TRANS_NUM = new v4_1.NumberField('TransNum', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_SUM = new v4_1.NumberField('VatSum', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FORM_1099 = new v4_1.NumberField('Form1099', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BOX_1099 = new v4_1.StringField('Box1099', Quotations, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQURIED_DATE = new v4_1.DateField('RequriedDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CANCEL_DATE = new v4_1.DateField('CancelDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SEGMENT = new v4_1.NumberField('Segment', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', Quotations, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', Quotations, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PROJECT = new v4_1.StringField('Project', Quotations, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_APPLIED = new v4_1.NumberField('WTApplied', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.AGENT_CODE = new v4_1.StringField('AgentCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_AMOUNT = new v4_1.NumberField('WTAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_DATE = new v4_1.DateField('VatDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', Quotations, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ADDRESS_2 = new v4_1.StringField('Address2', Quotations, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', Quotations, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_CODE = new v4_1.StringField('PayToCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', Quotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', Quotations, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PICK_REMARK = new v4_1.StringField('PickRemark', Quotations, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CLOSING_DATE = new v4_1.DateField('ClosingDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SERIES_STRING = new v4_1.StringField('SeriesString', Quotations, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', Quotations, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', Quotations, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_PERCENT = new v4_1.NumberField('VatPercent', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', Quotations, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', Quotations, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', Quotations, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', Quotations, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', Quotations, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GTS_CHECKER = new v4_1.NumberField('GTSChecker', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GTS_PAYEE = new v4_1.NumberField('GTSPayee', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_NUM = new v4_1.StringField('EDocNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', Quotations, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GROUP_SERIES = new v4_1.NumberField('GroupSeries', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BPL_NAME = new v4_1.StringField('BPLName', Quotations, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_REG_NUM = new v4_1.StringField('VATRegNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SUPPLIER = new v4_1.StringField('Supplier', Quotations, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RELEASER = new v4_1.NumberField('Releaser', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RECEIVER = new v4_1.NumberField('Receiver', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER = new v4_1.StringField('Requester', Quotations, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER_NAME = new v4_1.StringField('RequesterName', Quotations, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', Quotations, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQ_TYPE = new v4_1.NumberField('ReqType', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', Quotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', Quotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', Quotations, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', Quotations, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', Quotations, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RELATED_TYPE = new v4_1.NumberField('RelatedType', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', Quotations, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', Quotations, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.UPDATE_TIME = new v4_1.TimeField('UpdateTime', Quotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', Quotations, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', Quotations, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', Quotations, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SHIP_FROM = new v4_1.StringField('ShipFrom', Quotations, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ISSUING_REASON = new v4_1.NumberField('IssuingReason', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', Quotations, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', Quotations));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', Quotations, new DocumentLine_1.DocumentLineField('', Quotations));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', Quotations, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', Quotations));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', Quotations, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', Quotations));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', Quotations, new WithholdingTaxData_1.WithholdingTaxDataField('', Quotations));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', Quotations, new DocumentPackage_1.DocumentPackageField('', Quotations));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', Quotations, new DocumentSpecialLine_1.DocumentSpecialLineField('', Quotations));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', Quotations, new DocumentInstallment_1.DocumentInstallmentField('', Quotations));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', Quotations, new DownPaymentToDraw_1.DownPaymentToDrawField('', Quotations));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', Quotations);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', Quotations);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', Quotations, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', Quotations, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CURRENCY = new v4_1.OneToOneLink('Currency', Quotations, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', Quotations, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', Quotations, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', Quotations, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', Quotations, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', Quotations, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', Quotations, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', Quotations, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PROJECT_2 = new v4_1.OneToOneLink('Project2', Quotations, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', Quotations, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.COUNTRY = new v4_1.OneToOneLink('Country', Quotations, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', Quotations, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', Quotations, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NF_MODEL = new v4_1.OneToOneLink('NFModel', Quotations, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', Quotations, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', Quotations, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BRANCH = new v4_1.OneToOneLink('Branch', Quotations, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DEPARTMENT = new v4_1.OneToOneLink('Department', Quotations, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', Quotations, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the Quotations entity.
     */
    Quotations._allFields = [
        Quotations.DOC_ENTRY,
        Quotations.DOC_NUM,
        Quotations.DOC_DATE,
        Quotations.DOC_DUE_DATE,
        Quotations.CARD_CODE,
        Quotations.CARD_NAME,
        Quotations.ADDRESS,
        Quotations.NUM_AT_CARD,
        Quotations.DOC_TOTAL,
        Quotations.ATTACHMENT_ENTRY,
        Quotations.DOC_CURRENCY,
        Quotations.DOC_RATE,
        Quotations.REFERENCE_1,
        Quotations.REFERENCE_2,
        Quotations.COMMENTS,
        Quotations.JOURNAL_MEMO,
        Quotations.PAYMENT_GROUP_CODE,
        Quotations.DOC_TIME,
        Quotations.SALES_PERSON_CODE,
        Quotations.TRANSPORTATION_CODE,
        Quotations.IMPORT_FILE_NUM,
        Quotations.CONTACT_PERSON_CODE,
        Quotations.SERIES,
        Quotations.TAX_DATE,
        Quotations.SHIP_TO_CODE,
        Quotations.INDICATOR,
        Quotations.FEDERAL_TAX_ID,
        Quotations.DISCOUNT_PERCENT,
        Quotations.PAYMENT_REFERENCE,
        Quotations.CREATION_DATE,
        Quotations.UPDATE_DATE,
        Quotations.FINANCIAL_PERIOD,
        Quotations.TRANS_NUM,
        Quotations.VAT_SUM,
        Quotations.VAT_SUM_SYS,
        Quotations.VAT_SUM_FC,
        Quotations.DOC_TOTAL_FC,
        Quotations.DOC_TOTAL_SYS,
        Quotations.FORM_1099,
        Quotations.BOX_1099,
        Quotations.REQURIED_DATE,
        Quotations.CANCEL_DATE,
        Quotations.SEGMENT,
        Quotations.PAYMENT_METHOD,
        Quotations.PAYMENT_BLOCK_ENTRY,
        Quotations.CENTRAL_BANK_INDICATOR,
        Quotations.PROJECT,
        Quotations.EXEMPTION_VALIDITY_DATE_FROM,
        Quotations.EXEMPTION_VALIDITY_DATE_TO,
        Quotations.EXTERNAL_CORRECTED_DOC_NUM,
        Quotations.INTERNAL_CORRECTED_DOC_NUM,
        Quotations.NEXT_CORRECTING_DOCUMENT,
        Quotations.TAX_EXEMPTION_LETTER_NUM,
        Quotations.WT_APPLIED,
        Quotations.WT_APPLIED_FC,
        Quotations.AGENT_CODE,
        Quotations.WT_APPLIED_SC,
        Quotations.TOTAL_EQUALIZATION_TAX,
        Quotations.TOTAL_EQUALIZATION_TAX_FC,
        Quotations.TOTAL_EQUALIZATION_TAX_SC,
        Quotations.NUMBER_OF_INSTALLMENTS,
        Quotations.WT_NON_SUBJECT_AMOUNT,
        Quotations.WT_NON_SUBJECT_AMOUNT_SC,
        Quotations.WT_NON_SUBJECT_AMOUNT_FC,
        Quotations.WT_EXEMPTED_AMOUNT,
        Quotations.WT_EXEMPTED_AMOUNT_SC,
        Quotations.WT_EXEMPTED_AMOUNT_FC,
        Quotations.BASE_AMOUNT,
        Quotations.BASE_AMOUNT_SC,
        Quotations.BASE_AMOUNT_FC,
        Quotations.WT_AMOUNT,
        Quotations.WT_AMOUNT_SC,
        Quotations.WT_AMOUNT_FC,
        Quotations.VAT_DATE,
        Quotations.DOCUMENTS_OWNER,
        Quotations.FOLIO_PREFIX_STRING,
        Quotations.FOLIO_NUMBER,
        Quotations.BP_CHANNEL_CODE,
        Quotations.BP_CHANNEL_CONTACT,
        Quotations.ADDRESS_2,
        Quotations.PERIOD_INDICATOR,
        Quotations.PAY_TO_CODE,
        Quotations.MANUAL_NUMBER,
        Quotations.PAY_TO_BANK_COUNTRY,
        Quotations.PAY_TO_BANK_CODE,
        Quotations.PAY_TO_BANK_ACCOUNT_NO,
        Quotations.PAY_TO_BANK_BRANCH,
        Quotations.BPL_ID_ASSIGNED_TO_INVOICE,
        Quotations.DOWN_PAYMENT,
        Quotations.LANGUAGE_CODE,
        Quotations.TRACKING_NUMBER,
        Quotations.PICK_REMARK,
        Quotations.CLOSING_DATE,
        Quotations.SEQUENCE_CODE,
        Quotations.SEQUENCE_SERIAL,
        Quotations.SERIES_STRING,
        Quotations.SUB_SERIES_STRING,
        Quotations.SEQUENCE_MODEL,
        Quotations.TOTAL_DISCOUNT,
        Quotations.DOWN_PAYMENT_AMOUNT,
        Quotations.DOWN_PAYMENT_PERCENTAGE,
        Quotations.DOWN_PAYMENT_AMOUNT_SC,
        Quotations.DOWN_PAYMENT_AMOUNT_FC,
        Quotations.VAT_PERCENT,
        Quotations.SERVICE_GROSS_PROFIT_PERCENT,
        Quotations.OPENING_REMARKS,
        Quotations.CLOSING_REMARKS,
        Quotations.ROUNDING_DIFF_AMOUNT,
        Quotations.ROUNDING_DIFF_AMOUNT_FC,
        Quotations.ROUNDING_DIFF_AMOUNT_SC,
        Quotations.SIGNATURE_INPUT_MESSAGE,
        Quotations.SIGNATURE_DIGEST,
        Quotations.CERTIFICATION_NUMBER,
        Quotations.PRIVATE_KEY_VERSION,
        Quotations.CONTROL_ACCOUNT,
        Quotations.GTS_CHECKER,
        Quotations.GTS_PAYEE,
        Quotations.EXTRA_MONTH,
        Quotations.EXTRA_DAYS,
        Quotations.CASH_DISCOUNT_DATE_OFFSET,
        Quotations.E_TAX_WEB_SITE,
        Quotations.E_TAX_NUMBER,
        Quotations.NTS_APPROVED_NUMBER,
        Quotations.E_DOC_SERIES,
        Quotations.E_DOC_NUM,
        Quotations.E_DOC_EXPORT_FORMAT,
        Quotations.E_DOC_ERROR_CODE,
        Quotations.E_DOC_ERROR_MESSAGE,
        Quotations.GROUP_SERIES,
        Quotations.GROUP_NUMBER,
        Quotations.POS_EQUIPMENT_NUMBER,
        Quotations.POS_MANUFACTURER_SERIAL_NUMBER,
        Quotations.POS_CASHIER_NUMBER,
        Quotations.SPECIFIED_CLOSING_DATE,
        Quotations.TOTAL_DISCOUNT_FC,
        Quotations.TOTAL_DISCOUNT_SC,
        Quotations.BPL_NAME,
        Quotations.VAT_REG_NUM,
        Quotations.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        Quotations.SUPPLIER,
        Quotations.RELEASER,
        Quotations.RECEIVER,
        Quotations.BLANKET_AGREEMENT_NUMBER,
        Quotations.ASSET_VALUE_DATE,
        Quotations.REQUESTER,
        Quotations.REQUESTER_NAME,
        Quotations.REQUESTER_BRANCH,
        Quotations.REQUESTER_DEPARTMENT,
        Quotations.REQUESTER_EMAIL,
        Quotations.REQ_TYPE,
        Quotations.AUTHORIZATION_CODE,
        Quotations.START_DELIVERY_DATE,
        Quotations.START_DELIVERY_TIME,
        Quotations.END_DELIVERY_DATE,
        Quotations.END_DELIVERY_TIME,
        Quotations.VEHICLE_PLATE,
        Quotations.AT_DOCUMENT_TYPE,
        Quotations.ELEC_COMM_MESSAGE,
        Quotations.FISCAL_DOC_NUM,
        Quotations.POS_DAILY_SUMMARY_NO,
        Quotations.POS_RECEIPT_NO,
        Quotations.POINT_OF_ISSUE_CODE,
        Quotations.FOLIO_NUMBER_FROM,
        Quotations.FOLIO_NUMBER_TO,
        Quotations.RELATED_TYPE,
        Quotations.RELATED_ENTRY,
        Quotations.DOCUMENT_TAX_ID,
        Quotations.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        Quotations.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        Quotations.POS_CASH_REGISTER,
        Quotations.UPDATE_TIME,
        Quotations.DOWN_PAYMENT_TRASACTION_ID,
        Quotations.ORIGINAL_REF_NO,
        Quotations.ORIGINAL_REF_DATE,
        Quotations.ORIGINAL_CREDIT_OR_DEBIT_NO,
        Quotations.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        Quotations.E_COMMERCE_OPERATOR,
        Quotations.E_COMMERCE_GSTIN,
        Quotations.TAX_INVOICE_NO,
        Quotations.TAX_INVOICE_DATE,
        Quotations.SHIP_FROM,
        Quotations.ISSUING_REASON,
        Quotations.DOCUMENT_APPROVAL_REQUESTS,
        Quotations.DOCUMENT_LINES,
        Quotations.DOCUMENT_ADDITIONAL_EXPENSES,
        Quotations.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        Quotations.WITHHOLDING_TAX_DATA_COLLECTION,
        Quotations.DOCUMENT_PACKAGES,
        Quotations.DOCUMENT_SPECIAL_LINES,
        Quotations.DOCUMENT_INSTALLMENTS,
        Quotations.DOWN_PAYMENTS_TO_DRAW,
        Quotations.TAX_EXTENSION,
        Quotations.ADDRESS_EXTENSION,
        Quotations.SOI_WIZARD_ID,
        Quotations.BUSINESS_PARTNER,
        Quotations.CURRENCY,
        Quotations.PAYMENT_TERMS_TYPE,
        Quotations.SALES_PERSON,
        Quotations.SHIPPING_TYPE,
        Quotations.FACTORING_INDICATOR,
        Quotations.FORMS_1099,
        Quotations.WIZARD_PAYMENT_METHOD,
        Quotations.PAYMENT_BLOCK_2,
        Quotations.PROJECT_2,
        Quotations.EMPLOYEE_INFO,
        Quotations.COUNTRY,
        Quotations.BUSINESS_PLACE,
        Quotations.USER_LANGUAGE,
        Quotations.NF_MODEL,
        Quotations.CHART_OF_ACCOUNT,
        Quotations.TAX_WEB_SITE,
        Quotations.BRANCH,
        Quotations.DEPARTMENT,
        Quotations.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    Quotations.ALL_FIELDS = new v4_1.AllFields('*', Quotations);
    /**
     * All key fields of the Quotations entity.
     */
    Quotations._keyFields = [Quotations.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Quotations.
     */
    Quotations._keys = Quotations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Quotations = exports.Quotations || (exports.Quotations = {}));
exports.Quotations = Quotations;
//# sourceMappingURL=Quotations.js.map