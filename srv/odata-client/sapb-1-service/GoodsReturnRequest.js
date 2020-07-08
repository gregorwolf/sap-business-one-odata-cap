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
exports.GoodsReturnRequest = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var GoodsReturnRequestRequestBuilder_1 = require("./GoodsReturnRequestRequestBuilder");
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
 * This class represents the entity "GoodsReturnRequest" of service "SAPB1".
 */
var GoodsReturnRequest = /** @class */ (function (_super) {
    __extends(GoodsReturnRequest, _super);
    function GoodsReturnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GoodsReturnRequest`.
     * @returns A builder that constructs instances of entity type `GoodsReturnRequest`.
     */
    GoodsReturnRequest.builder = function () {
        return v4_1.Entity.entityBuilder(GoodsReturnRequest);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GoodsReturnRequest` entity type.
     * @returns A `GoodsReturnRequest` request builder.
     */
    GoodsReturnRequest.requestBuilder = function () {
        return new GoodsReturnRequestRequestBuilder_1.GoodsReturnRequestRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoodsReturnRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoodsReturnRequest`.
     */
    GoodsReturnRequest.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, GoodsReturnRequest);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GoodsReturnRequest.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GoodsReturnRequest.
     */
    GoodsReturnRequest._entityName = 'GoodsReturnRequest';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoodsReturnRequest.
     */
    GoodsReturnRequest._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    GoodsReturnRequest._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GoodsReturnRequest;
}(v4_1.Entity));
exports.GoodsReturnRequest = GoodsReturnRequest;
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
(function (GoodsReturnRequest) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_ENTRY = new v4_1.NumberField('DocEntry', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_NUM = new v4_1.NumberField('DocNum', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_DATE = new v4_1.DateField('DocDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CARD_CODE = new v4_1.StringField('CardCode', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CARD_NAME = new v4_1.StringField('CardName', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ADDRESS = new v4_1.StringField('Address', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.NUM_AT_CARD = new v4_1.StringField('NumAtCard', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_TOTAL = new v4_1.NumberField('DocTotal', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_CURRENCY = new v4_1.StringField('DocCurrency', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_RATE = new v4_1.NumberField('DocRate', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REFERENCE_1 = new v4_1.StringField('Reference1', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REFERENCE_2 = new v4_1.StringField('Reference2', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.COMMENTS = new v4_1.StringField('Comments', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_TIME = new v4_1.TimeField('DocTime', GoodsReturnRequest, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SERIES = new v4_1.NumberField('Series', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TAX_DATE = new v4_1.DateField('TaxDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.INDICATOR = new v4_1.StringField('Indicator', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CREATION_DATE = new v4_1.DateField('CreationDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.UPDATE_DATE = new v4_1.DateField('UpdateDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TRANS_NUM = new v4_1.NumberField('TransNum', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.VAT_SUM = new v4_1.NumberField('VatSum', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FORM_1099 = new v4_1.NumberField('Form1099', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BOX_1099 = new v4_1.StringField('Box1099', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REQURIED_DATE = new v4_1.DateField('RequriedDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CANCEL_DATE = new v4_1.DateField('CancelDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SEGMENT = new v4_1.NumberField('Segment', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PROJECT = new v4_1.StringField('Project', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_APPLIED = new v4_1.NumberField('WTApplied', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.AGENT_CODE = new v4_1.StringField('AgentCode', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_AMOUNT = new v4_1.NumberField('WTAmount', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.VAT_DATE = new v4_1.DateField('VatDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ADDRESS_2 = new v4_1.StringField('Address2', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAY_TO_CODE = new v4_1.StringField('PayToCode', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PICK_REMARK = new v4_1.StringField('PickRemark', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CLOSING_DATE = new v4_1.DateField('ClosingDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SERIES_STRING = new v4_1.StringField('SeriesString', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.VAT_PERCENT = new v4_1.NumberField('VatPercent', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.GTS_CHECKER = new v4_1.NumberField('GTSChecker', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.GTS_PAYEE = new v4_1.NumberField('GTSPayee', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.E_DOC_NUM = new v4_1.StringField('EDocNum', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.GROUP_SERIES = new v4_1.NumberField('GroupSeries', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', GoodsReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BPL_NAME = new v4_1.StringField('BPLName', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.VAT_REG_NUM = new v4_1.StringField('VATRegNum', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SUPPLIER = new v4_1.StringField('Supplier', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.RELEASER = new v4_1.NumberField('Releaser', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.RECEIVER = new v4_1.NumberField('Receiver', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REQUESTER = new v4_1.StringField('Requester', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REQUESTER_NAME = new v4_1.StringField('RequesterName', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REQ_TYPE = new v4_1.NumberField('ReqType', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', GoodsReturnRequest, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', GoodsReturnRequest, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.RELATED_TYPE = new v4_1.NumberField('RelatedType', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.UPDATE_TIME = new v4_1.TimeField('UpdateTime', GoodsReturnRequest, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', GoodsReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SHIP_FROM = new v4_1.StringField('ShipFrom', GoodsReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ISSUING_REASON = new v4_1.NumberField('IssuingReason', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', GoodsReturnRequest, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', GoodsReturnRequest));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', GoodsReturnRequest, new DocumentLine_1.DocumentLineField('', GoodsReturnRequest));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', GoodsReturnRequest, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', GoodsReturnRequest));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', GoodsReturnRequest, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', GoodsReturnRequest));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', GoodsReturnRequest, new WithholdingTaxData_1.WithholdingTaxDataField('', GoodsReturnRequest));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', GoodsReturnRequest, new DocumentPackage_1.DocumentPackageField('', GoodsReturnRequest));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', GoodsReturnRequest, new DocumentSpecialLine_1.DocumentSpecialLineField('', GoodsReturnRequest));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', GoodsReturnRequest, new DocumentInstallment_1.DocumentInstallmentField('', GoodsReturnRequest));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', GoodsReturnRequest, new DownPaymentToDraw_1.DownPaymentToDrawField('', GoodsReturnRequest));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', GoodsReturnRequest);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', GoodsReturnRequest);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', GoodsReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', GoodsReturnRequest, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CURRENCY = new v4_1.OneToOneLink('Currency', GoodsReturnRequest, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', GoodsReturnRequest, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', GoodsReturnRequest, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', GoodsReturnRequest, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', GoodsReturnRequest, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', GoodsReturnRequest, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', GoodsReturnRequest, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', GoodsReturnRequest, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', GoodsReturnRequest, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.PROJECT_2 = new v4_1.OneToOneLink('Project2', GoodsReturnRequest, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', GoodsReturnRequest, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.COUNTRY = new v4_1.OneToOneLink('Country', GoodsReturnRequest, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', GoodsReturnRequest, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', GoodsReturnRequest, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.NF_MODEL = new v4_1.OneToOneLink('NFModel', GoodsReturnRequest, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', GoodsReturnRequest, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', GoodsReturnRequest, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.BRANCH = new v4_1.OneToOneLink('Branch', GoodsReturnRequest, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.DEPARTMENT = new v4_1.OneToOneLink('Department', GoodsReturnRequest, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GoodsReturnRequest.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', GoodsReturnRequest, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the GoodsReturnRequest entity.
     */
    GoodsReturnRequest._allFields = [
        GoodsReturnRequest.DOC_ENTRY,
        GoodsReturnRequest.DOC_NUM,
        GoodsReturnRequest.DOC_DATE,
        GoodsReturnRequest.DOC_DUE_DATE,
        GoodsReturnRequest.CARD_CODE,
        GoodsReturnRequest.CARD_NAME,
        GoodsReturnRequest.ADDRESS,
        GoodsReturnRequest.NUM_AT_CARD,
        GoodsReturnRequest.DOC_TOTAL,
        GoodsReturnRequest.ATTACHMENT_ENTRY,
        GoodsReturnRequest.DOC_CURRENCY,
        GoodsReturnRequest.DOC_RATE,
        GoodsReturnRequest.REFERENCE_1,
        GoodsReturnRequest.REFERENCE_2,
        GoodsReturnRequest.COMMENTS,
        GoodsReturnRequest.JOURNAL_MEMO,
        GoodsReturnRequest.PAYMENT_GROUP_CODE,
        GoodsReturnRequest.DOC_TIME,
        GoodsReturnRequest.SALES_PERSON_CODE,
        GoodsReturnRequest.TRANSPORTATION_CODE,
        GoodsReturnRequest.IMPORT_FILE_NUM,
        GoodsReturnRequest.CONTACT_PERSON_CODE,
        GoodsReturnRequest.SERIES,
        GoodsReturnRequest.TAX_DATE,
        GoodsReturnRequest.SHIP_TO_CODE,
        GoodsReturnRequest.INDICATOR,
        GoodsReturnRequest.FEDERAL_TAX_ID,
        GoodsReturnRequest.DISCOUNT_PERCENT,
        GoodsReturnRequest.PAYMENT_REFERENCE,
        GoodsReturnRequest.CREATION_DATE,
        GoodsReturnRequest.UPDATE_DATE,
        GoodsReturnRequest.FINANCIAL_PERIOD,
        GoodsReturnRequest.TRANS_NUM,
        GoodsReturnRequest.VAT_SUM,
        GoodsReturnRequest.VAT_SUM_SYS,
        GoodsReturnRequest.VAT_SUM_FC,
        GoodsReturnRequest.DOC_TOTAL_FC,
        GoodsReturnRequest.DOC_TOTAL_SYS,
        GoodsReturnRequest.FORM_1099,
        GoodsReturnRequest.BOX_1099,
        GoodsReturnRequest.REQURIED_DATE,
        GoodsReturnRequest.CANCEL_DATE,
        GoodsReturnRequest.SEGMENT,
        GoodsReturnRequest.PAYMENT_METHOD,
        GoodsReturnRequest.PAYMENT_BLOCK_ENTRY,
        GoodsReturnRequest.CENTRAL_BANK_INDICATOR,
        GoodsReturnRequest.PROJECT,
        GoodsReturnRequest.EXEMPTION_VALIDITY_DATE_FROM,
        GoodsReturnRequest.EXEMPTION_VALIDITY_DATE_TO,
        GoodsReturnRequest.EXTERNAL_CORRECTED_DOC_NUM,
        GoodsReturnRequest.INTERNAL_CORRECTED_DOC_NUM,
        GoodsReturnRequest.NEXT_CORRECTING_DOCUMENT,
        GoodsReturnRequest.TAX_EXEMPTION_LETTER_NUM,
        GoodsReturnRequest.WT_APPLIED,
        GoodsReturnRequest.WT_APPLIED_FC,
        GoodsReturnRequest.AGENT_CODE,
        GoodsReturnRequest.WT_APPLIED_SC,
        GoodsReturnRequest.TOTAL_EQUALIZATION_TAX,
        GoodsReturnRequest.TOTAL_EQUALIZATION_TAX_FC,
        GoodsReturnRequest.TOTAL_EQUALIZATION_TAX_SC,
        GoodsReturnRequest.NUMBER_OF_INSTALLMENTS,
        GoodsReturnRequest.WT_NON_SUBJECT_AMOUNT,
        GoodsReturnRequest.WT_NON_SUBJECT_AMOUNT_SC,
        GoodsReturnRequest.WT_NON_SUBJECT_AMOUNT_FC,
        GoodsReturnRequest.WT_EXEMPTED_AMOUNT,
        GoodsReturnRequest.WT_EXEMPTED_AMOUNT_SC,
        GoodsReturnRequest.WT_EXEMPTED_AMOUNT_FC,
        GoodsReturnRequest.BASE_AMOUNT,
        GoodsReturnRequest.BASE_AMOUNT_SC,
        GoodsReturnRequest.BASE_AMOUNT_FC,
        GoodsReturnRequest.WT_AMOUNT,
        GoodsReturnRequest.WT_AMOUNT_SC,
        GoodsReturnRequest.WT_AMOUNT_FC,
        GoodsReturnRequest.VAT_DATE,
        GoodsReturnRequest.DOCUMENTS_OWNER,
        GoodsReturnRequest.FOLIO_PREFIX_STRING,
        GoodsReturnRequest.FOLIO_NUMBER,
        GoodsReturnRequest.BP_CHANNEL_CODE,
        GoodsReturnRequest.BP_CHANNEL_CONTACT,
        GoodsReturnRequest.ADDRESS_2,
        GoodsReturnRequest.PERIOD_INDICATOR,
        GoodsReturnRequest.PAY_TO_CODE,
        GoodsReturnRequest.MANUAL_NUMBER,
        GoodsReturnRequest.PAY_TO_BANK_COUNTRY,
        GoodsReturnRequest.PAY_TO_BANK_CODE,
        GoodsReturnRequest.PAY_TO_BANK_ACCOUNT_NO,
        GoodsReturnRequest.PAY_TO_BANK_BRANCH,
        GoodsReturnRequest.BPL_ID_ASSIGNED_TO_INVOICE,
        GoodsReturnRequest.DOWN_PAYMENT,
        GoodsReturnRequest.LANGUAGE_CODE,
        GoodsReturnRequest.TRACKING_NUMBER,
        GoodsReturnRequest.PICK_REMARK,
        GoodsReturnRequest.CLOSING_DATE,
        GoodsReturnRequest.SEQUENCE_CODE,
        GoodsReturnRequest.SEQUENCE_SERIAL,
        GoodsReturnRequest.SERIES_STRING,
        GoodsReturnRequest.SUB_SERIES_STRING,
        GoodsReturnRequest.SEQUENCE_MODEL,
        GoodsReturnRequest.TOTAL_DISCOUNT,
        GoodsReturnRequest.DOWN_PAYMENT_AMOUNT,
        GoodsReturnRequest.DOWN_PAYMENT_PERCENTAGE,
        GoodsReturnRequest.DOWN_PAYMENT_AMOUNT_SC,
        GoodsReturnRequest.DOWN_PAYMENT_AMOUNT_FC,
        GoodsReturnRequest.VAT_PERCENT,
        GoodsReturnRequest.SERVICE_GROSS_PROFIT_PERCENT,
        GoodsReturnRequest.OPENING_REMARKS,
        GoodsReturnRequest.CLOSING_REMARKS,
        GoodsReturnRequest.ROUNDING_DIFF_AMOUNT,
        GoodsReturnRequest.ROUNDING_DIFF_AMOUNT_FC,
        GoodsReturnRequest.ROUNDING_DIFF_AMOUNT_SC,
        GoodsReturnRequest.SIGNATURE_INPUT_MESSAGE,
        GoodsReturnRequest.SIGNATURE_DIGEST,
        GoodsReturnRequest.CERTIFICATION_NUMBER,
        GoodsReturnRequest.PRIVATE_KEY_VERSION,
        GoodsReturnRequest.CONTROL_ACCOUNT,
        GoodsReturnRequest.GTS_CHECKER,
        GoodsReturnRequest.GTS_PAYEE,
        GoodsReturnRequest.EXTRA_MONTH,
        GoodsReturnRequest.EXTRA_DAYS,
        GoodsReturnRequest.CASH_DISCOUNT_DATE_OFFSET,
        GoodsReturnRequest.E_TAX_WEB_SITE,
        GoodsReturnRequest.E_TAX_NUMBER,
        GoodsReturnRequest.NTS_APPROVED_NUMBER,
        GoodsReturnRequest.E_DOC_SERIES,
        GoodsReturnRequest.E_DOC_NUM,
        GoodsReturnRequest.E_DOC_EXPORT_FORMAT,
        GoodsReturnRequest.E_DOC_ERROR_CODE,
        GoodsReturnRequest.E_DOC_ERROR_MESSAGE,
        GoodsReturnRequest.GROUP_SERIES,
        GoodsReturnRequest.GROUP_NUMBER,
        GoodsReturnRequest.POS_EQUIPMENT_NUMBER,
        GoodsReturnRequest.POS_MANUFACTURER_SERIAL_NUMBER,
        GoodsReturnRequest.POS_CASHIER_NUMBER,
        GoodsReturnRequest.SPECIFIED_CLOSING_DATE,
        GoodsReturnRequest.TOTAL_DISCOUNT_FC,
        GoodsReturnRequest.TOTAL_DISCOUNT_SC,
        GoodsReturnRequest.BPL_NAME,
        GoodsReturnRequest.VAT_REG_NUM,
        GoodsReturnRequest.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        GoodsReturnRequest.SUPPLIER,
        GoodsReturnRequest.RELEASER,
        GoodsReturnRequest.RECEIVER,
        GoodsReturnRequest.BLANKET_AGREEMENT_NUMBER,
        GoodsReturnRequest.ASSET_VALUE_DATE,
        GoodsReturnRequest.REQUESTER,
        GoodsReturnRequest.REQUESTER_NAME,
        GoodsReturnRequest.REQUESTER_BRANCH,
        GoodsReturnRequest.REQUESTER_DEPARTMENT,
        GoodsReturnRequest.REQUESTER_EMAIL,
        GoodsReturnRequest.REQ_TYPE,
        GoodsReturnRequest.AUTHORIZATION_CODE,
        GoodsReturnRequest.START_DELIVERY_DATE,
        GoodsReturnRequest.START_DELIVERY_TIME,
        GoodsReturnRequest.END_DELIVERY_DATE,
        GoodsReturnRequest.END_DELIVERY_TIME,
        GoodsReturnRequest.VEHICLE_PLATE,
        GoodsReturnRequest.AT_DOCUMENT_TYPE,
        GoodsReturnRequest.ELEC_COMM_MESSAGE,
        GoodsReturnRequest.FISCAL_DOC_NUM,
        GoodsReturnRequest.POS_DAILY_SUMMARY_NO,
        GoodsReturnRequest.POS_RECEIPT_NO,
        GoodsReturnRequest.POINT_OF_ISSUE_CODE,
        GoodsReturnRequest.FOLIO_NUMBER_FROM,
        GoodsReturnRequest.FOLIO_NUMBER_TO,
        GoodsReturnRequest.RELATED_TYPE,
        GoodsReturnRequest.RELATED_ENTRY,
        GoodsReturnRequest.DOCUMENT_TAX_ID,
        GoodsReturnRequest.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        GoodsReturnRequest.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        GoodsReturnRequest.POS_CASH_REGISTER,
        GoodsReturnRequest.UPDATE_TIME,
        GoodsReturnRequest.DOWN_PAYMENT_TRASACTION_ID,
        GoodsReturnRequest.ORIGINAL_REF_NO,
        GoodsReturnRequest.ORIGINAL_REF_DATE,
        GoodsReturnRequest.ORIGINAL_CREDIT_OR_DEBIT_NO,
        GoodsReturnRequest.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        GoodsReturnRequest.E_COMMERCE_OPERATOR,
        GoodsReturnRequest.E_COMMERCE_GSTIN,
        GoodsReturnRequest.TAX_INVOICE_NO,
        GoodsReturnRequest.TAX_INVOICE_DATE,
        GoodsReturnRequest.SHIP_FROM,
        GoodsReturnRequest.ISSUING_REASON,
        GoodsReturnRequest.DOCUMENT_APPROVAL_REQUESTS,
        GoodsReturnRequest.DOCUMENT_LINES,
        GoodsReturnRequest.DOCUMENT_ADDITIONAL_EXPENSES,
        GoodsReturnRequest.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        GoodsReturnRequest.WITHHOLDING_TAX_DATA_COLLECTION,
        GoodsReturnRequest.DOCUMENT_PACKAGES,
        GoodsReturnRequest.DOCUMENT_SPECIAL_LINES,
        GoodsReturnRequest.DOCUMENT_INSTALLMENTS,
        GoodsReturnRequest.DOWN_PAYMENTS_TO_DRAW,
        GoodsReturnRequest.TAX_EXTENSION,
        GoodsReturnRequest.ADDRESS_EXTENSION,
        GoodsReturnRequest.SOI_WIZARD_ID,
        GoodsReturnRequest.BUSINESS_PARTNER,
        GoodsReturnRequest.CURRENCY,
        GoodsReturnRequest.PAYMENT_TERMS_TYPE,
        GoodsReturnRequest.SALES_PERSON,
        GoodsReturnRequest.SHIPPING_TYPE,
        GoodsReturnRequest.FACTORING_INDICATOR,
        GoodsReturnRequest.JOURNAL_ENTRY,
        GoodsReturnRequest.FORMS_1099,
        GoodsReturnRequest.WIZARD_PAYMENT_METHOD,
        GoodsReturnRequest.PAYMENT_BLOCK_2,
        GoodsReturnRequest.PROJECT_2,
        GoodsReturnRequest.EMPLOYEE_INFO,
        GoodsReturnRequest.COUNTRY,
        GoodsReturnRequest.BUSINESS_PLACE,
        GoodsReturnRequest.USER_LANGUAGE,
        GoodsReturnRequest.NF_MODEL,
        GoodsReturnRequest.CHART_OF_ACCOUNT,
        GoodsReturnRequest.TAX_WEB_SITE,
        GoodsReturnRequest.BRANCH,
        GoodsReturnRequest.DEPARTMENT,
        GoodsReturnRequest.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    GoodsReturnRequest.ALL_FIELDS = new v4_1.AllFields('*', GoodsReturnRequest);
    /**
     * All key fields of the GoodsReturnRequest entity.
     */
    GoodsReturnRequest._keyFields = [GoodsReturnRequest.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property GoodsReturnRequest.
     */
    GoodsReturnRequest._keys = GoodsReturnRequest._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GoodsReturnRequest = exports.GoodsReturnRequest || (exports.GoodsReturnRequest = {}));
exports.GoodsReturnRequest = GoodsReturnRequest;
//# sourceMappingURL=GoodsReturnRequest.js.map