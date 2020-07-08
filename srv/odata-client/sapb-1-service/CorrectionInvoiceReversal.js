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
exports.CorrectionInvoiceReversal = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CorrectionInvoiceReversalRequestBuilder_1 = require("./CorrectionInvoiceReversalRequestBuilder");
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
 * This class represents the entity "CorrectionInvoiceReversal" of service "SAPB1".
 */
var CorrectionInvoiceReversal = /** @class */ (function (_super) {
    __extends(CorrectionInvoiceReversal, _super);
    function CorrectionInvoiceReversal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CorrectionInvoiceReversal`.
     * @returns A builder that constructs instances of entity type `CorrectionInvoiceReversal`.
     */
    CorrectionInvoiceReversal.builder = function () {
        return v4_1.Entity.entityBuilder(CorrectionInvoiceReversal);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CorrectionInvoiceReversal` entity type.
     * @returns A `CorrectionInvoiceReversal` request builder.
     */
    CorrectionInvoiceReversal.requestBuilder = function () {
        return new CorrectionInvoiceReversalRequestBuilder_1.CorrectionInvoiceReversalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CorrectionInvoiceReversal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CorrectionInvoiceReversal`.
     */
    CorrectionInvoiceReversal.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, CorrectionInvoiceReversal);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CorrectionInvoiceReversal.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CorrectionInvoiceReversal.
     */
    CorrectionInvoiceReversal._entityName = 'CorrectionInvoiceReversal';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CorrectionInvoiceReversal.
     */
    CorrectionInvoiceReversal._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    CorrectionInvoiceReversal._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CorrectionInvoiceReversal;
}(v4_1.Entity));
exports.CorrectionInvoiceReversal = CorrectionInvoiceReversal;
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
(function (CorrectionInvoiceReversal) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_ENTRY = new v4_1.NumberField('DocEntry', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_NUM = new v4_1.NumberField('DocNum', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_DATE = new v4_1.DateField('DocDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CARD_CODE = new v4_1.StringField('CardCode', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CARD_NAME = new v4_1.StringField('CardName', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ADDRESS = new v4_1.StringField('Address', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.NUM_AT_CARD = new v4_1.StringField('NumAtCard', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_TOTAL = new v4_1.NumberField('DocTotal', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_CURRENCY = new v4_1.StringField('DocCurrency', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_RATE = new v4_1.NumberField('DocRate', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REFERENCE_1 = new v4_1.StringField('Reference1', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REFERENCE_2 = new v4_1.StringField('Reference2', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.COMMENTS = new v4_1.StringField('Comments', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_TIME = new v4_1.TimeField('DocTime', CorrectionInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SERIES = new v4_1.NumberField('Series', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TAX_DATE = new v4_1.DateField('TaxDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.INDICATOR = new v4_1.StringField('Indicator', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CREATION_DATE = new v4_1.DateField('CreationDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.UPDATE_DATE = new v4_1.DateField('UpdateDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TRANS_NUM = new v4_1.NumberField('TransNum', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.VAT_SUM = new v4_1.NumberField('VatSum', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FORM_1099 = new v4_1.NumberField('Form1099', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BOX_1099 = new v4_1.StringField('Box1099', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REQURIED_DATE = new v4_1.DateField('RequriedDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CANCEL_DATE = new v4_1.DateField('CancelDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SEGMENT = new v4_1.NumberField('Segment', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PROJECT = new v4_1.StringField('Project', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_APPLIED = new v4_1.NumberField('WTApplied', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.AGENT_CODE = new v4_1.StringField('AgentCode', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_AMOUNT = new v4_1.NumberField('WTAmount', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.VAT_DATE = new v4_1.DateField('VatDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ADDRESS_2 = new v4_1.StringField('Address2', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAY_TO_CODE = new v4_1.StringField('PayToCode', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PICK_REMARK = new v4_1.StringField('PickRemark', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CLOSING_DATE = new v4_1.DateField('ClosingDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SERIES_STRING = new v4_1.StringField('SeriesString', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.VAT_PERCENT = new v4_1.NumberField('VatPercent', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.GTS_CHECKER = new v4_1.NumberField('GTSChecker', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.GTS_PAYEE = new v4_1.NumberField('GTSPayee', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.E_DOC_NUM = new v4_1.StringField('EDocNum', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.GROUP_SERIES = new v4_1.NumberField('GroupSeries', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', CorrectionInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BPL_NAME = new v4_1.StringField('BPLName', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.VAT_REG_NUM = new v4_1.StringField('VATRegNum', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SUPPLIER = new v4_1.StringField('Supplier', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.RELEASER = new v4_1.NumberField('Releaser', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.RECEIVER = new v4_1.NumberField('Receiver', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REQUESTER = new v4_1.StringField('Requester', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REQUESTER_NAME = new v4_1.StringField('RequesterName', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REQ_TYPE = new v4_1.NumberField('ReqType', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', CorrectionInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', CorrectionInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.RELATED_TYPE = new v4_1.NumberField('RelatedType', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.UPDATE_TIME = new v4_1.TimeField('UpdateTime', CorrectionInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', CorrectionInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SHIP_FROM = new v4_1.StringField('ShipFrom', CorrectionInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ISSUING_REASON = new v4_1.NumberField('IssuingReason', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', CorrectionInvoiceReversal, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', CorrectionInvoiceReversal));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', CorrectionInvoiceReversal, new DocumentLine_1.DocumentLineField('', CorrectionInvoiceReversal));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', CorrectionInvoiceReversal, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', CorrectionInvoiceReversal));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', CorrectionInvoiceReversal, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', CorrectionInvoiceReversal));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', CorrectionInvoiceReversal, new WithholdingTaxData_1.WithholdingTaxDataField('', CorrectionInvoiceReversal));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', CorrectionInvoiceReversal, new DocumentPackage_1.DocumentPackageField('', CorrectionInvoiceReversal));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', CorrectionInvoiceReversal, new DocumentSpecialLine_1.DocumentSpecialLineField('', CorrectionInvoiceReversal));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', CorrectionInvoiceReversal, new DocumentInstallment_1.DocumentInstallmentField('', CorrectionInvoiceReversal));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', CorrectionInvoiceReversal, new DownPaymentToDraw_1.DownPaymentToDrawField('', CorrectionInvoiceReversal));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', CorrectionInvoiceReversal);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', CorrectionInvoiceReversal);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', CorrectionInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', CorrectionInvoiceReversal, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CURRENCY = new v4_1.OneToOneLink('Currency', CorrectionInvoiceReversal, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', CorrectionInvoiceReversal, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', CorrectionInvoiceReversal, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', CorrectionInvoiceReversal, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', CorrectionInvoiceReversal, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', CorrectionInvoiceReversal, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', CorrectionInvoiceReversal, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', CorrectionInvoiceReversal, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', CorrectionInvoiceReversal, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.PROJECT_2 = new v4_1.OneToOneLink('Project2', CorrectionInvoiceReversal, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', CorrectionInvoiceReversal, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.COUNTRY = new v4_1.OneToOneLink('Country', CorrectionInvoiceReversal, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', CorrectionInvoiceReversal, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', CorrectionInvoiceReversal, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.NF_MODEL = new v4_1.OneToOneLink('NFModel', CorrectionInvoiceReversal, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', CorrectionInvoiceReversal, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', CorrectionInvoiceReversal, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.BRANCH = new v4_1.OneToOneLink('Branch', CorrectionInvoiceReversal, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.DEPARTMENT = new v4_1.OneToOneLink('Department', CorrectionInvoiceReversal, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionInvoiceReversal.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', CorrectionInvoiceReversal, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the CorrectionInvoiceReversal entity.
     */
    CorrectionInvoiceReversal._allFields = [
        CorrectionInvoiceReversal.DOC_ENTRY,
        CorrectionInvoiceReversal.DOC_NUM,
        CorrectionInvoiceReversal.DOC_DATE,
        CorrectionInvoiceReversal.DOC_DUE_DATE,
        CorrectionInvoiceReversal.CARD_CODE,
        CorrectionInvoiceReversal.CARD_NAME,
        CorrectionInvoiceReversal.ADDRESS,
        CorrectionInvoiceReversal.NUM_AT_CARD,
        CorrectionInvoiceReversal.DOC_TOTAL,
        CorrectionInvoiceReversal.ATTACHMENT_ENTRY,
        CorrectionInvoiceReversal.DOC_CURRENCY,
        CorrectionInvoiceReversal.DOC_RATE,
        CorrectionInvoiceReversal.REFERENCE_1,
        CorrectionInvoiceReversal.REFERENCE_2,
        CorrectionInvoiceReversal.COMMENTS,
        CorrectionInvoiceReversal.JOURNAL_MEMO,
        CorrectionInvoiceReversal.PAYMENT_GROUP_CODE,
        CorrectionInvoiceReversal.DOC_TIME,
        CorrectionInvoiceReversal.SALES_PERSON_CODE,
        CorrectionInvoiceReversal.TRANSPORTATION_CODE,
        CorrectionInvoiceReversal.IMPORT_FILE_NUM,
        CorrectionInvoiceReversal.CONTACT_PERSON_CODE,
        CorrectionInvoiceReversal.SERIES,
        CorrectionInvoiceReversal.TAX_DATE,
        CorrectionInvoiceReversal.SHIP_TO_CODE,
        CorrectionInvoiceReversal.INDICATOR,
        CorrectionInvoiceReversal.FEDERAL_TAX_ID,
        CorrectionInvoiceReversal.DISCOUNT_PERCENT,
        CorrectionInvoiceReversal.PAYMENT_REFERENCE,
        CorrectionInvoiceReversal.CREATION_DATE,
        CorrectionInvoiceReversal.UPDATE_DATE,
        CorrectionInvoiceReversal.FINANCIAL_PERIOD,
        CorrectionInvoiceReversal.TRANS_NUM,
        CorrectionInvoiceReversal.VAT_SUM,
        CorrectionInvoiceReversal.VAT_SUM_SYS,
        CorrectionInvoiceReversal.VAT_SUM_FC,
        CorrectionInvoiceReversal.DOC_TOTAL_FC,
        CorrectionInvoiceReversal.DOC_TOTAL_SYS,
        CorrectionInvoiceReversal.FORM_1099,
        CorrectionInvoiceReversal.BOX_1099,
        CorrectionInvoiceReversal.REQURIED_DATE,
        CorrectionInvoiceReversal.CANCEL_DATE,
        CorrectionInvoiceReversal.SEGMENT,
        CorrectionInvoiceReversal.PAYMENT_METHOD,
        CorrectionInvoiceReversal.PAYMENT_BLOCK_ENTRY,
        CorrectionInvoiceReversal.CENTRAL_BANK_INDICATOR,
        CorrectionInvoiceReversal.PROJECT,
        CorrectionInvoiceReversal.EXEMPTION_VALIDITY_DATE_FROM,
        CorrectionInvoiceReversal.EXEMPTION_VALIDITY_DATE_TO,
        CorrectionInvoiceReversal.EXTERNAL_CORRECTED_DOC_NUM,
        CorrectionInvoiceReversal.INTERNAL_CORRECTED_DOC_NUM,
        CorrectionInvoiceReversal.NEXT_CORRECTING_DOCUMENT,
        CorrectionInvoiceReversal.TAX_EXEMPTION_LETTER_NUM,
        CorrectionInvoiceReversal.WT_APPLIED,
        CorrectionInvoiceReversal.WT_APPLIED_FC,
        CorrectionInvoiceReversal.AGENT_CODE,
        CorrectionInvoiceReversal.WT_APPLIED_SC,
        CorrectionInvoiceReversal.TOTAL_EQUALIZATION_TAX,
        CorrectionInvoiceReversal.TOTAL_EQUALIZATION_TAX_FC,
        CorrectionInvoiceReversal.TOTAL_EQUALIZATION_TAX_SC,
        CorrectionInvoiceReversal.NUMBER_OF_INSTALLMENTS,
        CorrectionInvoiceReversal.WT_NON_SUBJECT_AMOUNT,
        CorrectionInvoiceReversal.WT_NON_SUBJECT_AMOUNT_SC,
        CorrectionInvoiceReversal.WT_NON_SUBJECT_AMOUNT_FC,
        CorrectionInvoiceReversal.WT_EXEMPTED_AMOUNT,
        CorrectionInvoiceReversal.WT_EXEMPTED_AMOUNT_SC,
        CorrectionInvoiceReversal.WT_EXEMPTED_AMOUNT_FC,
        CorrectionInvoiceReversal.BASE_AMOUNT,
        CorrectionInvoiceReversal.BASE_AMOUNT_SC,
        CorrectionInvoiceReversal.BASE_AMOUNT_FC,
        CorrectionInvoiceReversal.WT_AMOUNT,
        CorrectionInvoiceReversal.WT_AMOUNT_SC,
        CorrectionInvoiceReversal.WT_AMOUNT_FC,
        CorrectionInvoiceReversal.VAT_DATE,
        CorrectionInvoiceReversal.DOCUMENTS_OWNER,
        CorrectionInvoiceReversal.FOLIO_PREFIX_STRING,
        CorrectionInvoiceReversal.FOLIO_NUMBER,
        CorrectionInvoiceReversal.BP_CHANNEL_CODE,
        CorrectionInvoiceReversal.BP_CHANNEL_CONTACT,
        CorrectionInvoiceReversal.ADDRESS_2,
        CorrectionInvoiceReversal.PERIOD_INDICATOR,
        CorrectionInvoiceReversal.PAY_TO_CODE,
        CorrectionInvoiceReversal.MANUAL_NUMBER,
        CorrectionInvoiceReversal.PAY_TO_BANK_COUNTRY,
        CorrectionInvoiceReversal.PAY_TO_BANK_CODE,
        CorrectionInvoiceReversal.PAY_TO_BANK_ACCOUNT_NO,
        CorrectionInvoiceReversal.PAY_TO_BANK_BRANCH,
        CorrectionInvoiceReversal.BPL_ID_ASSIGNED_TO_INVOICE,
        CorrectionInvoiceReversal.DOWN_PAYMENT,
        CorrectionInvoiceReversal.LANGUAGE_CODE,
        CorrectionInvoiceReversal.TRACKING_NUMBER,
        CorrectionInvoiceReversal.PICK_REMARK,
        CorrectionInvoiceReversal.CLOSING_DATE,
        CorrectionInvoiceReversal.SEQUENCE_CODE,
        CorrectionInvoiceReversal.SEQUENCE_SERIAL,
        CorrectionInvoiceReversal.SERIES_STRING,
        CorrectionInvoiceReversal.SUB_SERIES_STRING,
        CorrectionInvoiceReversal.SEQUENCE_MODEL,
        CorrectionInvoiceReversal.TOTAL_DISCOUNT,
        CorrectionInvoiceReversal.DOWN_PAYMENT_AMOUNT,
        CorrectionInvoiceReversal.DOWN_PAYMENT_PERCENTAGE,
        CorrectionInvoiceReversal.DOWN_PAYMENT_AMOUNT_SC,
        CorrectionInvoiceReversal.DOWN_PAYMENT_AMOUNT_FC,
        CorrectionInvoiceReversal.VAT_PERCENT,
        CorrectionInvoiceReversal.SERVICE_GROSS_PROFIT_PERCENT,
        CorrectionInvoiceReversal.OPENING_REMARKS,
        CorrectionInvoiceReversal.CLOSING_REMARKS,
        CorrectionInvoiceReversal.ROUNDING_DIFF_AMOUNT,
        CorrectionInvoiceReversal.ROUNDING_DIFF_AMOUNT_FC,
        CorrectionInvoiceReversal.ROUNDING_DIFF_AMOUNT_SC,
        CorrectionInvoiceReversal.SIGNATURE_INPUT_MESSAGE,
        CorrectionInvoiceReversal.SIGNATURE_DIGEST,
        CorrectionInvoiceReversal.CERTIFICATION_NUMBER,
        CorrectionInvoiceReversal.PRIVATE_KEY_VERSION,
        CorrectionInvoiceReversal.CONTROL_ACCOUNT,
        CorrectionInvoiceReversal.GTS_CHECKER,
        CorrectionInvoiceReversal.GTS_PAYEE,
        CorrectionInvoiceReversal.EXTRA_MONTH,
        CorrectionInvoiceReversal.EXTRA_DAYS,
        CorrectionInvoiceReversal.CASH_DISCOUNT_DATE_OFFSET,
        CorrectionInvoiceReversal.E_TAX_WEB_SITE,
        CorrectionInvoiceReversal.E_TAX_NUMBER,
        CorrectionInvoiceReversal.NTS_APPROVED_NUMBER,
        CorrectionInvoiceReversal.E_DOC_SERIES,
        CorrectionInvoiceReversal.E_DOC_NUM,
        CorrectionInvoiceReversal.E_DOC_EXPORT_FORMAT,
        CorrectionInvoiceReversal.E_DOC_ERROR_CODE,
        CorrectionInvoiceReversal.E_DOC_ERROR_MESSAGE,
        CorrectionInvoiceReversal.GROUP_SERIES,
        CorrectionInvoiceReversal.GROUP_NUMBER,
        CorrectionInvoiceReversal.POS_EQUIPMENT_NUMBER,
        CorrectionInvoiceReversal.POS_MANUFACTURER_SERIAL_NUMBER,
        CorrectionInvoiceReversal.POS_CASHIER_NUMBER,
        CorrectionInvoiceReversal.SPECIFIED_CLOSING_DATE,
        CorrectionInvoiceReversal.TOTAL_DISCOUNT_FC,
        CorrectionInvoiceReversal.TOTAL_DISCOUNT_SC,
        CorrectionInvoiceReversal.BPL_NAME,
        CorrectionInvoiceReversal.VAT_REG_NUM,
        CorrectionInvoiceReversal.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        CorrectionInvoiceReversal.SUPPLIER,
        CorrectionInvoiceReversal.RELEASER,
        CorrectionInvoiceReversal.RECEIVER,
        CorrectionInvoiceReversal.BLANKET_AGREEMENT_NUMBER,
        CorrectionInvoiceReversal.ASSET_VALUE_DATE,
        CorrectionInvoiceReversal.REQUESTER,
        CorrectionInvoiceReversal.REQUESTER_NAME,
        CorrectionInvoiceReversal.REQUESTER_BRANCH,
        CorrectionInvoiceReversal.REQUESTER_DEPARTMENT,
        CorrectionInvoiceReversal.REQUESTER_EMAIL,
        CorrectionInvoiceReversal.REQ_TYPE,
        CorrectionInvoiceReversal.AUTHORIZATION_CODE,
        CorrectionInvoiceReversal.START_DELIVERY_DATE,
        CorrectionInvoiceReversal.START_DELIVERY_TIME,
        CorrectionInvoiceReversal.END_DELIVERY_DATE,
        CorrectionInvoiceReversal.END_DELIVERY_TIME,
        CorrectionInvoiceReversal.VEHICLE_PLATE,
        CorrectionInvoiceReversal.AT_DOCUMENT_TYPE,
        CorrectionInvoiceReversal.ELEC_COMM_MESSAGE,
        CorrectionInvoiceReversal.FISCAL_DOC_NUM,
        CorrectionInvoiceReversal.POS_DAILY_SUMMARY_NO,
        CorrectionInvoiceReversal.POS_RECEIPT_NO,
        CorrectionInvoiceReversal.POINT_OF_ISSUE_CODE,
        CorrectionInvoiceReversal.FOLIO_NUMBER_FROM,
        CorrectionInvoiceReversal.FOLIO_NUMBER_TO,
        CorrectionInvoiceReversal.RELATED_TYPE,
        CorrectionInvoiceReversal.RELATED_ENTRY,
        CorrectionInvoiceReversal.DOCUMENT_TAX_ID,
        CorrectionInvoiceReversal.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        CorrectionInvoiceReversal.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        CorrectionInvoiceReversal.POS_CASH_REGISTER,
        CorrectionInvoiceReversal.UPDATE_TIME,
        CorrectionInvoiceReversal.DOWN_PAYMENT_TRASACTION_ID,
        CorrectionInvoiceReversal.ORIGINAL_REF_NO,
        CorrectionInvoiceReversal.ORIGINAL_REF_DATE,
        CorrectionInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_NO,
        CorrectionInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        CorrectionInvoiceReversal.E_COMMERCE_OPERATOR,
        CorrectionInvoiceReversal.E_COMMERCE_GSTIN,
        CorrectionInvoiceReversal.TAX_INVOICE_NO,
        CorrectionInvoiceReversal.TAX_INVOICE_DATE,
        CorrectionInvoiceReversal.SHIP_FROM,
        CorrectionInvoiceReversal.ISSUING_REASON,
        CorrectionInvoiceReversal.DOCUMENT_APPROVAL_REQUESTS,
        CorrectionInvoiceReversal.DOCUMENT_LINES,
        CorrectionInvoiceReversal.DOCUMENT_ADDITIONAL_EXPENSES,
        CorrectionInvoiceReversal.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        CorrectionInvoiceReversal.WITHHOLDING_TAX_DATA_COLLECTION,
        CorrectionInvoiceReversal.DOCUMENT_PACKAGES,
        CorrectionInvoiceReversal.DOCUMENT_SPECIAL_LINES,
        CorrectionInvoiceReversal.DOCUMENT_INSTALLMENTS,
        CorrectionInvoiceReversal.DOWN_PAYMENTS_TO_DRAW,
        CorrectionInvoiceReversal.TAX_EXTENSION,
        CorrectionInvoiceReversal.ADDRESS_EXTENSION,
        CorrectionInvoiceReversal.SOI_WIZARD_ID,
        CorrectionInvoiceReversal.BUSINESS_PARTNER,
        CorrectionInvoiceReversal.CURRENCY,
        CorrectionInvoiceReversal.PAYMENT_TERMS_TYPE,
        CorrectionInvoiceReversal.SALES_PERSON,
        CorrectionInvoiceReversal.SHIPPING_TYPE,
        CorrectionInvoiceReversal.FACTORING_INDICATOR,
        CorrectionInvoiceReversal.JOURNAL_ENTRY,
        CorrectionInvoiceReversal.FORMS_1099,
        CorrectionInvoiceReversal.WIZARD_PAYMENT_METHOD,
        CorrectionInvoiceReversal.PAYMENT_BLOCK_2,
        CorrectionInvoiceReversal.PROJECT_2,
        CorrectionInvoiceReversal.EMPLOYEE_INFO,
        CorrectionInvoiceReversal.COUNTRY,
        CorrectionInvoiceReversal.BUSINESS_PLACE,
        CorrectionInvoiceReversal.USER_LANGUAGE,
        CorrectionInvoiceReversal.NF_MODEL,
        CorrectionInvoiceReversal.CHART_OF_ACCOUNT,
        CorrectionInvoiceReversal.TAX_WEB_SITE,
        CorrectionInvoiceReversal.BRANCH,
        CorrectionInvoiceReversal.DEPARTMENT,
        CorrectionInvoiceReversal.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    CorrectionInvoiceReversal.ALL_FIELDS = new v4_1.AllFields('*', CorrectionInvoiceReversal);
    /**
     * All key fields of the CorrectionInvoiceReversal entity.
     */
    CorrectionInvoiceReversal._keyFields = [CorrectionInvoiceReversal.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property CorrectionInvoiceReversal.
     */
    CorrectionInvoiceReversal._keys = CorrectionInvoiceReversal._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CorrectionInvoiceReversal = exports.CorrectionInvoiceReversal || (exports.CorrectionInvoiceReversal = {}));
exports.CorrectionInvoiceReversal = CorrectionInvoiceReversal;
//# sourceMappingURL=CorrectionInvoiceReversal.js.map