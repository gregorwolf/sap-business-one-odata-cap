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
exports.CorrectionInvoice = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CorrectionInvoiceRequestBuilder_1 = require("./CorrectionInvoiceRequestBuilder");
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
 * This class represents the entity "CorrectionInvoice" of service "SAPB1".
 */
var CorrectionInvoice = /** @class */ (function (_super) {
    __extends(CorrectionInvoice, _super);
    function CorrectionInvoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CorrectionInvoice`.
     * @returns A builder that constructs instances of entity type `CorrectionInvoice`.
     */
    CorrectionInvoice.builder = function () {
        return v4_1.Entity.entityBuilder(CorrectionInvoice);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CorrectionInvoice` entity type.
     * @returns A `CorrectionInvoice` request builder.
     */
    CorrectionInvoice.requestBuilder = function () {
        return new CorrectionInvoiceRequestBuilder_1.CorrectionInvoiceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CorrectionInvoice`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CorrectionInvoice`.
     */
    CorrectionInvoice.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, CorrectionInvoice);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CorrectionInvoice.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CorrectionInvoice.
     */
    CorrectionInvoice._entityName = 'CorrectionInvoice';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CorrectionInvoice.
     */
    CorrectionInvoice._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    CorrectionInvoice._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CorrectionInvoice;
}(v4_1.Entity));
exports.CorrectionInvoice = CorrectionInvoice;
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
(function (CorrectionInvoice) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_ENTRY = new v4_1.NumberField('DocEntry', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_NUM = new v4_1.NumberField('DocNum', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_DATE = new v4_1.DateField('DocDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CARD_CODE = new v4_1.StringField('CardCode', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CARD_NAME = new v4_1.StringField('CardName', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ADDRESS = new v4_1.StringField('Address', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.NUM_AT_CARD = new v4_1.StringField('NumAtCard', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_TOTAL = new v4_1.NumberField('DocTotal', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_CURRENCY = new v4_1.StringField('DocCurrency', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_RATE = new v4_1.NumberField('DocRate', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REFERENCE_1 = new v4_1.StringField('Reference1', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REFERENCE_2 = new v4_1.StringField('Reference2', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.COMMENTS = new v4_1.StringField('Comments', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_TIME = new v4_1.TimeField('DocTime', CorrectionInvoice, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SERIES = new v4_1.NumberField('Series', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TAX_DATE = new v4_1.DateField('TaxDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.INDICATOR = new v4_1.StringField('Indicator', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CREATION_DATE = new v4_1.DateField('CreationDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.UPDATE_DATE = new v4_1.DateField('UpdateDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TRANS_NUM = new v4_1.NumberField('TransNum', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.VAT_SUM = new v4_1.NumberField('VatSum', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FORM_1099 = new v4_1.NumberField('Form1099', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BOX_1099 = new v4_1.StringField('Box1099', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REQURIED_DATE = new v4_1.DateField('RequriedDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CANCEL_DATE = new v4_1.DateField('CancelDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SEGMENT = new v4_1.NumberField('Segment', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PROJECT = new v4_1.StringField('Project', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_APPLIED = new v4_1.NumberField('WTApplied', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.AGENT_CODE = new v4_1.StringField('AgentCode', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_AMOUNT = new v4_1.NumberField('WTAmount', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.VAT_DATE = new v4_1.DateField('VatDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ADDRESS_2 = new v4_1.StringField('Address2', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAY_TO_CODE = new v4_1.StringField('PayToCode', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PICK_REMARK = new v4_1.StringField('PickRemark', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CLOSING_DATE = new v4_1.DateField('ClosingDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SERIES_STRING = new v4_1.StringField('SeriesString', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.VAT_PERCENT = new v4_1.NumberField('VatPercent', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.GTS_CHECKER = new v4_1.NumberField('GTSChecker', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.GTS_PAYEE = new v4_1.NumberField('GTSPayee', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.E_DOC_NUM = new v4_1.StringField('EDocNum', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.GROUP_SERIES = new v4_1.NumberField('GroupSeries', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', CorrectionInvoice, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BPL_NAME = new v4_1.StringField('BPLName', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.VAT_REG_NUM = new v4_1.StringField('VATRegNum', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SUPPLIER = new v4_1.StringField('Supplier', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.RELEASER = new v4_1.NumberField('Releaser', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.RECEIVER = new v4_1.NumberField('Receiver', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REQUESTER = new v4_1.StringField('Requester', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REQUESTER_NAME = new v4_1.StringField('RequesterName', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REQ_TYPE = new v4_1.NumberField('ReqType', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', CorrectionInvoice, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', CorrectionInvoice, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.RELATED_TYPE = new v4_1.NumberField('RelatedType', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.UPDATE_TIME = new v4_1.TimeField('UpdateTime', CorrectionInvoice, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', CorrectionInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SHIP_FROM = new v4_1.StringField('ShipFrom', CorrectionInvoice, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ISSUING_REASON = new v4_1.NumberField('IssuingReason', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', CorrectionInvoice, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', CorrectionInvoice));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', CorrectionInvoice, new DocumentLine_1.DocumentLineField('', CorrectionInvoice));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', CorrectionInvoice, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', CorrectionInvoice));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', CorrectionInvoice, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', CorrectionInvoice));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', CorrectionInvoice, new WithholdingTaxData_1.WithholdingTaxDataField('', CorrectionInvoice));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', CorrectionInvoice, new DocumentPackage_1.DocumentPackageField('', CorrectionInvoice));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', CorrectionInvoice, new DocumentSpecialLine_1.DocumentSpecialLineField('', CorrectionInvoice));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', CorrectionInvoice, new DocumentInstallment_1.DocumentInstallmentField('', CorrectionInvoice));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', CorrectionInvoice, new DownPaymentToDraw_1.DownPaymentToDrawField('', CorrectionInvoice));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', CorrectionInvoice);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', CorrectionInvoice);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', CorrectionInvoice, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', CorrectionInvoice, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CURRENCY = new v4_1.OneToOneLink('Currency', CorrectionInvoice, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', CorrectionInvoice, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', CorrectionInvoice, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', CorrectionInvoice, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', CorrectionInvoice, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', CorrectionInvoice, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', CorrectionInvoice, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', CorrectionInvoice, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', CorrectionInvoice, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.PROJECT_2 = new v4_1.OneToOneLink('Project2', CorrectionInvoice, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', CorrectionInvoice, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.COUNTRY = new v4_1.OneToOneLink('Country', CorrectionInvoice, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', CorrectionInvoice, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', CorrectionInvoice, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.NF_MODEL = new v4_1.OneToOneLink('NFModel', CorrectionInvoice, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', CorrectionInvoice, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', CorrectionInvoice, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.BRANCH = new v4_1.OneToOneLink('Branch', CorrectionInvoice, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.DEPARTMENT = new v4_1.OneToOneLink('Department', CorrectionInvoice, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoice.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', CorrectionInvoice, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the CorrectionInvoice entity.
     */
    CorrectionInvoice._allFields = [
        CorrectionInvoice.DOC_ENTRY,
        CorrectionInvoice.DOC_NUM,
        CorrectionInvoice.DOC_DATE,
        CorrectionInvoice.DOC_DUE_DATE,
        CorrectionInvoice.CARD_CODE,
        CorrectionInvoice.CARD_NAME,
        CorrectionInvoice.ADDRESS,
        CorrectionInvoice.NUM_AT_CARD,
        CorrectionInvoice.DOC_TOTAL,
        CorrectionInvoice.ATTACHMENT_ENTRY,
        CorrectionInvoice.DOC_CURRENCY,
        CorrectionInvoice.DOC_RATE,
        CorrectionInvoice.REFERENCE_1,
        CorrectionInvoice.REFERENCE_2,
        CorrectionInvoice.COMMENTS,
        CorrectionInvoice.JOURNAL_MEMO,
        CorrectionInvoice.PAYMENT_GROUP_CODE,
        CorrectionInvoice.DOC_TIME,
        CorrectionInvoice.SALES_PERSON_CODE,
        CorrectionInvoice.TRANSPORTATION_CODE,
        CorrectionInvoice.IMPORT_FILE_NUM,
        CorrectionInvoice.CONTACT_PERSON_CODE,
        CorrectionInvoice.SERIES,
        CorrectionInvoice.TAX_DATE,
        CorrectionInvoice.SHIP_TO_CODE,
        CorrectionInvoice.INDICATOR,
        CorrectionInvoice.FEDERAL_TAX_ID,
        CorrectionInvoice.DISCOUNT_PERCENT,
        CorrectionInvoice.PAYMENT_REFERENCE,
        CorrectionInvoice.CREATION_DATE,
        CorrectionInvoice.UPDATE_DATE,
        CorrectionInvoice.FINANCIAL_PERIOD,
        CorrectionInvoice.TRANS_NUM,
        CorrectionInvoice.VAT_SUM,
        CorrectionInvoice.VAT_SUM_SYS,
        CorrectionInvoice.VAT_SUM_FC,
        CorrectionInvoice.DOC_TOTAL_FC,
        CorrectionInvoice.DOC_TOTAL_SYS,
        CorrectionInvoice.FORM_1099,
        CorrectionInvoice.BOX_1099,
        CorrectionInvoice.REQURIED_DATE,
        CorrectionInvoice.CANCEL_DATE,
        CorrectionInvoice.SEGMENT,
        CorrectionInvoice.PAYMENT_METHOD,
        CorrectionInvoice.PAYMENT_BLOCK_ENTRY,
        CorrectionInvoice.CENTRAL_BANK_INDICATOR,
        CorrectionInvoice.PROJECT,
        CorrectionInvoice.EXEMPTION_VALIDITY_DATE_FROM,
        CorrectionInvoice.EXEMPTION_VALIDITY_DATE_TO,
        CorrectionInvoice.EXTERNAL_CORRECTED_DOC_NUM,
        CorrectionInvoice.INTERNAL_CORRECTED_DOC_NUM,
        CorrectionInvoice.NEXT_CORRECTING_DOCUMENT,
        CorrectionInvoice.TAX_EXEMPTION_LETTER_NUM,
        CorrectionInvoice.WT_APPLIED,
        CorrectionInvoice.WT_APPLIED_FC,
        CorrectionInvoice.AGENT_CODE,
        CorrectionInvoice.WT_APPLIED_SC,
        CorrectionInvoice.TOTAL_EQUALIZATION_TAX,
        CorrectionInvoice.TOTAL_EQUALIZATION_TAX_FC,
        CorrectionInvoice.TOTAL_EQUALIZATION_TAX_SC,
        CorrectionInvoice.NUMBER_OF_INSTALLMENTS,
        CorrectionInvoice.WT_NON_SUBJECT_AMOUNT,
        CorrectionInvoice.WT_NON_SUBJECT_AMOUNT_SC,
        CorrectionInvoice.WT_NON_SUBJECT_AMOUNT_FC,
        CorrectionInvoice.WT_EXEMPTED_AMOUNT,
        CorrectionInvoice.WT_EXEMPTED_AMOUNT_SC,
        CorrectionInvoice.WT_EXEMPTED_AMOUNT_FC,
        CorrectionInvoice.BASE_AMOUNT,
        CorrectionInvoice.BASE_AMOUNT_SC,
        CorrectionInvoice.BASE_AMOUNT_FC,
        CorrectionInvoice.WT_AMOUNT,
        CorrectionInvoice.WT_AMOUNT_SC,
        CorrectionInvoice.WT_AMOUNT_FC,
        CorrectionInvoice.VAT_DATE,
        CorrectionInvoice.DOCUMENTS_OWNER,
        CorrectionInvoice.FOLIO_PREFIX_STRING,
        CorrectionInvoice.FOLIO_NUMBER,
        CorrectionInvoice.BP_CHANNEL_CODE,
        CorrectionInvoice.BP_CHANNEL_CONTACT,
        CorrectionInvoice.ADDRESS_2,
        CorrectionInvoice.PERIOD_INDICATOR,
        CorrectionInvoice.PAY_TO_CODE,
        CorrectionInvoice.MANUAL_NUMBER,
        CorrectionInvoice.PAY_TO_BANK_COUNTRY,
        CorrectionInvoice.PAY_TO_BANK_CODE,
        CorrectionInvoice.PAY_TO_BANK_ACCOUNT_NO,
        CorrectionInvoice.PAY_TO_BANK_BRANCH,
        CorrectionInvoice.BPL_ID_ASSIGNED_TO_INVOICE,
        CorrectionInvoice.DOWN_PAYMENT,
        CorrectionInvoice.LANGUAGE_CODE,
        CorrectionInvoice.TRACKING_NUMBER,
        CorrectionInvoice.PICK_REMARK,
        CorrectionInvoice.CLOSING_DATE,
        CorrectionInvoice.SEQUENCE_CODE,
        CorrectionInvoice.SEQUENCE_SERIAL,
        CorrectionInvoice.SERIES_STRING,
        CorrectionInvoice.SUB_SERIES_STRING,
        CorrectionInvoice.SEQUENCE_MODEL,
        CorrectionInvoice.TOTAL_DISCOUNT,
        CorrectionInvoice.DOWN_PAYMENT_AMOUNT,
        CorrectionInvoice.DOWN_PAYMENT_PERCENTAGE,
        CorrectionInvoice.DOWN_PAYMENT_AMOUNT_SC,
        CorrectionInvoice.DOWN_PAYMENT_AMOUNT_FC,
        CorrectionInvoice.VAT_PERCENT,
        CorrectionInvoice.SERVICE_GROSS_PROFIT_PERCENT,
        CorrectionInvoice.OPENING_REMARKS,
        CorrectionInvoice.CLOSING_REMARKS,
        CorrectionInvoice.ROUNDING_DIFF_AMOUNT,
        CorrectionInvoice.ROUNDING_DIFF_AMOUNT_FC,
        CorrectionInvoice.ROUNDING_DIFF_AMOUNT_SC,
        CorrectionInvoice.SIGNATURE_INPUT_MESSAGE,
        CorrectionInvoice.SIGNATURE_DIGEST,
        CorrectionInvoice.CERTIFICATION_NUMBER,
        CorrectionInvoice.PRIVATE_KEY_VERSION,
        CorrectionInvoice.CONTROL_ACCOUNT,
        CorrectionInvoice.GTS_CHECKER,
        CorrectionInvoice.GTS_PAYEE,
        CorrectionInvoice.EXTRA_MONTH,
        CorrectionInvoice.EXTRA_DAYS,
        CorrectionInvoice.CASH_DISCOUNT_DATE_OFFSET,
        CorrectionInvoice.E_TAX_WEB_SITE,
        CorrectionInvoice.E_TAX_NUMBER,
        CorrectionInvoice.NTS_APPROVED_NUMBER,
        CorrectionInvoice.E_DOC_SERIES,
        CorrectionInvoice.E_DOC_NUM,
        CorrectionInvoice.E_DOC_EXPORT_FORMAT,
        CorrectionInvoice.E_DOC_ERROR_CODE,
        CorrectionInvoice.E_DOC_ERROR_MESSAGE,
        CorrectionInvoice.GROUP_SERIES,
        CorrectionInvoice.GROUP_NUMBER,
        CorrectionInvoice.POS_EQUIPMENT_NUMBER,
        CorrectionInvoice.POS_MANUFACTURER_SERIAL_NUMBER,
        CorrectionInvoice.POS_CASHIER_NUMBER,
        CorrectionInvoice.SPECIFIED_CLOSING_DATE,
        CorrectionInvoice.TOTAL_DISCOUNT_FC,
        CorrectionInvoice.TOTAL_DISCOUNT_SC,
        CorrectionInvoice.BPL_NAME,
        CorrectionInvoice.VAT_REG_NUM,
        CorrectionInvoice.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        CorrectionInvoice.SUPPLIER,
        CorrectionInvoice.RELEASER,
        CorrectionInvoice.RECEIVER,
        CorrectionInvoice.BLANKET_AGREEMENT_NUMBER,
        CorrectionInvoice.ASSET_VALUE_DATE,
        CorrectionInvoice.REQUESTER,
        CorrectionInvoice.REQUESTER_NAME,
        CorrectionInvoice.REQUESTER_BRANCH,
        CorrectionInvoice.REQUESTER_DEPARTMENT,
        CorrectionInvoice.REQUESTER_EMAIL,
        CorrectionInvoice.REQ_TYPE,
        CorrectionInvoice.AUTHORIZATION_CODE,
        CorrectionInvoice.START_DELIVERY_DATE,
        CorrectionInvoice.START_DELIVERY_TIME,
        CorrectionInvoice.END_DELIVERY_DATE,
        CorrectionInvoice.END_DELIVERY_TIME,
        CorrectionInvoice.VEHICLE_PLATE,
        CorrectionInvoice.AT_DOCUMENT_TYPE,
        CorrectionInvoice.ELEC_COMM_MESSAGE,
        CorrectionInvoice.FISCAL_DOC_NUM,
        CorrectionInvoice.POS_DAILY_SUMMARY_NO,
        CorrectionInvoice.POS_RECEIPT_NO,
        CorrectionInvoice.POINT_OF_ISSUE_CODE,
        CorrectionInvoice.FOLIO_NUMBER_FROM,
        CorrectionInvoice.FOLIO_NUMBER_TO,
        CorrectionInvoice.RELATED_TYPE,
        CorrectionInvoice.RELATED_ENTRY,
        CorrectionInvoice.DOCUMENT_TAX_ID,
        CorrectionInvoice.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        CorrectionInvoice.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        CorrectionInvoice.POS_CASH_REGISTER,
        CorrectionInvoice.UPDATE_TIME,
        CorrectionInvoice.DOWN_PAYMENT_TRASACTION_ID,
        CorrectionInvoice.ORIGINAL_REF_NO,
        CorrectionInvoice.ORIGINAL_REF_DATE,
        CorrectionInvoice.ORIGINAL_CREDIT_OR_DEBIT_NO,
        CorrectionInvoice.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        CorrectionInvoice.E_COMMERCE_OPERATOR,
        CorrectionInvoice.E_COMMERCE_GSTIN,
        CorrectionInvoice.TAX_INVOICE_NO,
        CorrectionInvoice.TAX_INVOICE_DATE,
        CorrectionInvoice.SHIP_FROM,
        CorrectionInvoice.ISSUING_REASON,
        CorrectionInvoice.DOCUMENT_APPROVAL_REQUESTS,
        CorrectionInvoice.DOCUMENT_LINES,
        CorrectionInvoice.DOCUMENT_ADDITIONAL_EXPENSES,
        CorrectionInvoice.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        CorrectionInvoice.WITHHOLDING_TAX_DATA_COLLECTION,
        CorrectionInvoice.DOCUMENT_PACKAGES,
        CorrectionInvoice.DOCUMENT_SPECIAL_LINES,
        CorrectionInvoice.DOCUMENT_INSTALLMENTS,
        CorrectionInvoice.DOWN_PAYMENTS_TO_DRAW,
        CorrectionInvoice.TAX_EXTENSION,
        CorrectionInvoice.ADDRESS_EXTENSION,
        CorrectionInvoice.SOI_WIZARD_ID,
        CorrectionInvoice.BUSINESS_PARTNER,
        CorrectionInvoice.CURRENCY,
        CorrectionInvoice.PAYMENT_TERMS_TYPE,
        CorrectionInvoice.SALES_PERSON,
        CorrectionInvoice.SHIPPING_TYPE,
        CorrectionInvoice.FACTORING_INDICATOR,
        CorrectionInvoice.JOURNAL_ENTRY,
        CorrectionInvoice.FORMS_1099,
        CorrectionInvoice.WIZARD_PAYMENT_METHOD,
        CorrectionInvoice.PAYMENT_BLOCK_2,
        CorrectionInvoice.PROJECT_2,
        CorrectionInvoice.EMPLOYEE_INFO,
        CorrectionInvoice.COUNTRY,
        CorrectionInvoice.BUSINESS_PLACE,
        CorrectionInvoice.USER_LANGUAGE,
        CorrectionInvoice.NF_MODEL,
        CorrectionInvoice.CHART_OF_ACCOUNT,
        CorrectionInvoice.TAX_WEB_SITE,
        CorrectionInvoice.BRANCH,
        CorrectionInvoice.DEPARTMENT,
        CorrectionInvoice.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    CorrectionInvoice.ALL_FIELDS = new v4_1.AllFields('*', CorrectionInvoice);
    /**
     * All key fields of the CorrectionInvoice entity.
     */
    CorrectionInvoice._keyFields = [CorrectionInvoice.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property CorrectionInvoice.
     */
    CorrectionInvoice._keys = CorrectionInvoice._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CorrectionInvoice = exports.CorrectionInvoice || (exports.CorrectionInvoice = {}));
exports.CorrectionInvoice = CorrectionInvoice;
//# sourceMappingURL=CorrectionInvoice.js.map