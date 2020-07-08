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
exports.InventoryGenEntries = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryGenEntriesRequestBuilder_1 = require("./InventoryGenEntriesRequestBuilder");
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
 * This class represents the entity "InventoryGenEntries" of service "SAPB1".
 */
var InventoryGenEntries = /** @class */ (function (_super) {
    __extends(InventoryGenEntries, _super);
    function InventoryGenEntries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InventoryGenEntries`.
     * @returns A builder that constructs instances of entity type `InventoryGenEntries`.
     */
    InventoryGenEntries.builder = function () {
        return v4_1.Entity.entityBuilder(InventoryGenEntries);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InventoryGenEntries` entity type.
     * @returns A `InventoryGenEntries` request builder.
     */
    InventoryGenEntries.requestBuilder = function () {
        return new InventoryGenEntriesRequestBuilder_1.InventoryGenEntriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryGenEntries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryGenEntries`.
     */
    InventoryGenEntries.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, InventoryGenEntries);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InventoryGenEntries.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InventoryGenEntries.
     */
    InventoryGenEntries._entityName = 'InventoryGenEntries';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InventoryGenEntries.
     */
    InventoryGenEntries._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    InventoryGenEntries._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InventoryGenEntries;
}(v4_1.Entity));
exports.InventoryGenEntries = InventoryGenEntries;
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
(function (InventoryGenEntries) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_ENTRY = new v4_1.NumberField('DocEntry', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_NUM = new v4_1.NumberField('DocNum', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_DATE = new v4_1.DateField('DocDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CARD_CODE = new v4_1.StringField('CardCode', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CARD_NAME = new v4_1.StringField('CardName', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ADDRESS = new v4_1.StringField('Address', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.NUM_AT_CARD = new v4_1.StringField('NumAtCard', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_TOTAL = new v4_1.NumberField('DocTotal', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_CURRENCY = new v4_1.StringField('DocCurrency', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_RATE = new v4_1.NumberField('DocRate', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REFERENCE_1 = new v4_1.StringField('Reference1', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REFERENCE_2 = new v4_1.StringField('Reference2', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.COMMENTS = new v4_1.StringField('Comments', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_TIME = new v4_1.TimeField('DocTime', InventoryGenEntries, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SERIES = new v4_1.NumberField('Series', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TAX_DATE = new v4_1.DateField('TaxDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.INDICATOR = new v4_1.StringField('Indicator', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CREATION_DATE = new v4_1.DateField('CreationDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.UPDATE_DATE = new v4_1.DateField('UpdateDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TRANS_NUM = new v4_1.NumberField('TransNum', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.VAT_SUM = new v4_1.NumberField('VatSum', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FORM_1099 = new v4_1.NumberField('Form1099', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BOX_1099 = new v4_1.StringField('Box1099', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REQURIED_DATE = new v4_1.DateField('RequriedDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CANCEL_DATE = new v4_1.DateField('CancelDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SEGMENT = new v4_1.NumberField('Segment', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PROJECT = new v4_1.StringField('Project', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_APPLIED = new v4_1.NumberField('WTApplied', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.AGENT_CODE = new v4_1.StringField('AgentCode', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_AMOUNT = new v4_1.NumberField('WTAmount', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.VAT_DATE = new v4_1.DateField('VatDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ADDRESS_2 = new v4_1.StringField('Address2', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAY_TO_CODE = new v4_1.StringField('PayToCode', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PICK_REMARK = new v4_1.StringField('PickRemark', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CLOSING_DATE = new v4_1.DateField('ClosingDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SERIES_STRING = new v4_1.StringField('SeriesString', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.VAT_PERCENT = new v4_1.NumberField('VatPercent', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.GTS_CHECKER = new v4_1.NumberField('GTSChecker', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.GTS_PAYEE = new v4_1.NumberField('GTSPayee', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.E_DOC_NUM = new v4_1.StringField('EDocNum', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.GROUP_SERIES = new v4_1.NumberField('GroupSeries', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', InventoryGenEntries, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BPL_NAME = new v4_1.StringField('BPLName', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.VAT_REG_NUM = new v4_1.StringField('VATRegNum', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SUPPLIER = new v4_1.StringField('Supplier', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.RELEASER = new v4_1.NumberField('Releaser', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.RECEIVER = new v4_1.NumberField('Receiver', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REQUESTER = new v4_1.StringField('Requester', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REQUESTER_NAME = new v4_1.StringField('RequesterName', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REQ_TYPE = new v4_1.NumberField('ReqType', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', InventoryGenEntries, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', InventoryGenEntries, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.RELATED_TYPE = new v4_1.NumberField('RelatedType', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.UPDATE_TIME = new v4_1.TimeField('UpdateTime', InventoryGenEntries, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', InventoryGenEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SHIP_FROM = new v4_1.StringField('ShipFrom', InventoryGenEntries, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ISSUING_REASON = new v4_1.NumberField('IssuingReason', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', InventoryGenEntries, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', InventoryGenEntries));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', InventoryGenEntries, new DocumentLine_1.DocumentLineField('', InventoryGenEntries));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', InventoryGenEntries, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', InventoryGenEntries));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', InventoryGenEntries, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', InventoryGenEntries));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', InventoryGenEntries, new WithholdingTaxData_1.WithholdingTaxDataField('', InventoryGenEntries));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', InventoryGenEntries, new DocumentPackage_1.DocumentPackageField('', InventoryGenEntries));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', InventoryGenEntries, new DocumentSpecialLine_1.DocumentSpecialLineField('', InventoryGenEntries));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', InventoryGenEntries, new DocumentInstallment_1.DocumentInstallmentField('', InventoryGenEntries));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', InventoryGenEntries, new DownPaymentToDraw_1.DownPaymentToDrawField('', InventoryGenEntries));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', InventoryGenEntries);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', InventoryGenEntries);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', InventoryGenEntries, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', InventoryGenEntries, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CURRENCY = new v4_1.OneToOneLink('Currency', InventoryGenEntries, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', InventoryGenEntries, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', InventoryGenEntries, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', InventoryGenEntries, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', InventoryGenEntries, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', InventoryGenEntries, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', InventoryGenEntries, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', InventoryGenEntries, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', InventoryGenEntries, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.PROJECT_2 = new v4_1.OneToOneLink('Project2', InventoryGenEntries, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', InventoryGenEntries, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.COUNTRY = new v4_1.OneToOneLink('Country', InventoryGenEntries, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', InventoryGenEntries, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', InventoryGenEntries, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.NF_MODEL = new v4_1.OneToOneLink('NFModel', InventoryGenEntries, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', InventoryGenEntries, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', InventoryGenEntries, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.BRANCH = new v4_1.OneToOneLink('Branch', InventoryGenEntries, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.DEPARTMENT = new v4_1.OneToOneLink('Department', InventoryGenEntries, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenEntries.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', InventoryGenEntries, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the InventoryGenEntries entity.
     */
    InventoryGenEntries._allFields = [
        InventoryGenEntries.DOC_ENTRY,
        InventoryGenEntries.DOC_NUM,
        InventoryGenEntries.DOC_DATE,
        InventoryGenEntries.DOC_DUE_DATE,
        InventoryGenEntries.CARD_CODE,
        InventoryGenEntries.CARD_NAME,
        InventoryGenEntries.ADDRESS,
        InventoryGenEntries.NUM_AT_CARD,
        InventoryGenEntries.DOC_TOTAL,
        InventoryGenEntries.ATTACHMENT_ENTRY,
        InventoryGenEntries.DOC_CURRENCY,
        InventoryGenEntries.DOC_RATE,
        InventoryGenEntries.REFERENCE_1,
        InventoryGenEntries.REFERENCE_2,
        InventoryGenEntries.COMMENTS,
        InventoryGenEntries.JOURNAL_MEMO,
        InventoryGenEntries.PAYMENT_GROUP_CODE,
        InventoryGenEntries.DOC_TIME,
        InventoryGenEntries.SALES_PERSON_CODE,
        InventoryGenEntries.TRANSPORTATION_CODE,
        InventoryGenEntries.IMPORT_FILE_NUM,
        InventoryGenEntries.CONTACT_PERSON_CODE,
        InventoryGenEntries.SERIES,
        InventoryGenEntries.TAX_DATE,
        InventoryGenEntries.SHIP_TO_CODE,
        InventoryGenEntries.INDICATOR,
        InventoryGenEntries.FEDERAL_TAX_ID,
        InventoryGenEntries.DISCOUNT_PERCENT,
        InventoryGenEntries.PAYMENT_REFERENCE,
        InventoryGenEntries.CREATION_DATE,
        InventoryGenEntries.UPDATE_DATE,
        InventoryGenEntries.FINANCIAL_PERIOD,
        InventoryGenEntries.TRANS_NUM,
        InventoryGenEntries.VAT_SUM,
        InventoryGenEntries.VAT_SUM_SYS,
        InventoryGenEntries.VAT_SUM_FC,
        InventoryGenEntries.DOC_TOTAL_FC,
        InventoryGenEntries.DOC_TOTAL_SYS,
        InventoryGenEntries.FORM_1099,
        InventoryGenEntries.BOX_1099,
        InventoryGenEntries.REQURIED_DATE,
        InventoryGenEntries.CANCEL_DATE,
        InventoryGenEntries.SEGMENT,
        InventoryGenEntries.PAYMENT_METHOD,
        InventoryGenEntries.PAYMENT_BLOCK_ENTRY,
        InventoryGenEntries.CENTRAL_BANK_INDICATOR,
        InventoryGenEntries.PROJECT,
        InventoryGenEntries.EXEMPTION_VALIDITY_DATE_FROM,
        InventoryGenEntries.EXEMPTION_VALIDITY_DATE_TO,
        InventoryGenEntries.EXTERNAL_CORRECTED_DOC_NUM,
        InventoryGenEntries.INTERNAL_CORRECTED_DOC_NUM,
        InventoryGenEntries.NEXT_CORRECTING_DOCUMENT,
        InventoryGenEntries.TAX_EXEMPTION_LETTER_NUM,
        InventoryGenEntries.WT_APPLIED,
        InventoryGenEntries.WT_APPLIED_FC,
        InventoryGenEntries.AGENT_CODE,
        InventoryGenEntries.WT_APPLIED_SC,
        InventoryGenEntries.TOTAL_EQUALIZATION_TAX,
        InventoryGenEntries.TOTAL_EQUALIZATION_TAX_FC,
        InventoryGenEntries.TOTAL_EQUALIZATION_TAX_SC,
        InventoryGenEntries.NUMBER_OF_INSTALLMENTS,
        InventoryGenEntries.WT_NON_SUBJECT_AMOUNT,
        InventoryGenEntries.WT_NON_SUBJECT_AMOUNT_SC,
        InventoryGenEntries.WT_NON_SUBJECT_AMOUNT_FC,
        InventoryGenEntries.WT_EXEMPTED_AMOUNT,
        InventoryGenEntries.WT_EXEMPTED_AMOUNT_SC,
        InventoryGenEntries.WT_EXEMPTED_AMOUNT_FC,
        InventoryGenEntries.BASE_AMOUNT,
        InventoryGenEntries.BASE_AMOUNT_SC,
        InventoryGenEntries.BASE_AMOUNT_FC,
        InventoryGenEntries.WT_AMOUNT,
        InventoryGenEntries.WT_AMOUNT_SC,
        InventoryGenEntries.WT_AMOUNT_FC,
        InventoryGenEntries.VAT_DATE,
        InventoryGenEntries.DOCUMENTS_OWNER,
        InventoryGenEntries.FOLIO_PREFIX_STRING,
        InventoryGenEntries.FOLIO_NUMBER,
        InventoryGenEntries.BP_CHANNEL_CODE,
        InventoryGenEntries.BP_CHANNEL_CONTACT,
        InventoryGenEntries.ADDRESS_2,
        InventoryGenEntries.PERIOD_INDICATOR,
        InventoryGenEntries.PAY_TO_CODE,
        InventoryGenEntries.MANUAL_NUMBER,
        InventoryGenEntries.PAY_TO_BANK_COUNTRY,
        InventoryGenEntries.PAY_TO_BANK_CODE,
        InventoryGenEntries.PAY_TO_BANK_ACCOUNT_NO,
        InventoryGenEntries.PAY_TO_BANK_BRANCH,
        InventoryGenEntries.BPL_ID_ASSIGNED_TO_INVOICE,
        InventoryGenEntries.DOWN_PAYMENT,
        InventoryGenEntries.LANGUAGE_CODE,
        InventoryGenEntries.TRACKING_NUMBER,
        InventoryGenEntries.PICK_REMARK,
        InventoryGenEntries.CLOSING_DATE,
        InventoryGenEntries.SEQUENCE_CODE,
        InventoryGenEntries.SEQUENCE_SERIAL,
        InventoryGenEntries.SERIES_STRING,
        InventoryGenEntries.SUB_SERIES_STRING,
        InventoryGenEntries.SEQUENCE_MODEL,
        InventoryGenEntries.TOTAL_DISCOUNT,
        InventoryGenEntries.DOWN_PAYMENT_AMOUNT,
        InventoryGenEntries.DOWN_PAYMENT_PERCENTAGE,
        InventoryGenEntries.DOWN_PAYMENT_AMOUNT_SC,
        InventoryGenEntries.DOWN_PAYMENT_AMOUNT_FC,
        InventoryGenEntries.VAT_PERCENT,
        InventoryGenEntries.SERVICE_GROSS_PROFIT_PERCENT,
        InventoryGenEntries.OPENING_REMARKS,
        InventoryGenEntries.CLOSING_REMARKS,
        InventoryGenEntries.ROUNDING_DIFF_AMOUNT,
        InventoryGenEntries.ROUNDING_DIFF_AMOUNT_FC,
        InventoryGenEntries.ROUNDING_DIFF_AMOUNT_SC,
        InventoryGenEntries.SIGNATURE_INPUT_MESSAGE,
        InventoryGenEntries.SIGNATURE_DIGEST,
        InventoryGenEntries.CERTIFICATION_NUMBER,
        InventoryGenEntries.PRIVATE_KEY_VERSION,
        InventoryGenEntries.CONTROL_ACCOUNT,
        InventoryGenEntries.GTS_CHECKER,
        InventoryGenEntries.GTS_PAYEE,
        InventoryGenEntries.EXTRA_MONTH,
        InventoryGenEntries.EXTRA_DAYS,
        InventoryGenEntries.CASH_DISCOUNT_DATE_OFFSET,
        InventoryGenEntries.E_TAX_WEB_SITE,
        InventoryGenEntries.E_TAX_NUMBER,
        InventoryGenEntries.NTS_APPROVED_NUMBER,
        InventoryGenEntries.E_DOC_SERIES,
        InventoryGenEntries.E_DOC_NUM,
        InventoryGenEntries.E_DOC_EXPORT_FORMAT,
        InventoryGenEntries.E_DOC_ERROR_CODE,
        InventoryGenEntries.E_DOC_ERROR_MESSAGE,
        InventoryGenEntries.GROUP_SERIES,
        InventoryGenEntries.GROUP_NUMBER,
        InventoryGenEntries.POS_EQUIPMENT_NUMBER,
        InventoryGenEntries.POS_MANUFACTURER_SERIAL_NUMBER,
        InventoryGenEntries.POS_CASHIER_NUMBER,
        InventoryGenEntries.SPECIFIED_CLOSING_DATE,
        InventoryGenEntries.TOTAL_DISCOUNT_FC,
        InventoryGenEntries.TOTAL_DISCOUNT_SC,
        InventoryGenEntries.BPL_NAME,
        InventoryGenEntries.VAT_REG_NUM,
        InventoryGenEntries.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        InventoryGenEntries.SUPPLIER,
        InventoryGenEntries.RELEASER,
        InventoryGenEntries.RECEIVER,
        InventoryGenEntries.BLANKET_AGREEMENT_NUMBER,
        InventoryGenEntries.ASSET_VALUE_DATE,
        InventoryGenEntries.REQUESTER,
        InventoryGenEntries.REQUESTER_NAME,
        InventoryGenEntries.REQUESTER_BRANCH,
        InventoryGenEntries.REQUESTER_DEPARTMENT,
        InventoryGenEntries.REQUESTER_EMAIL,
        InventoryGenEntries.REQ_TYPE,
        InventoryGenEntries.AUTHORIZATION_CODE,
        InventoryGenEntries.START_DELIVERY_DATE,
        InventoryGenEntries.START_DELIVERY_TIME,
        InventoryGenEntries.END_DELIVERY_DATE,
        InventoryGenEntries.END_DELIVERY_TIME,
        InventoryGenEntries.VEHICLE_PLATE,
        InventoryGenEntries.AT_DOCUMENT_TYPE,
        InventoryGenEntries.ELEC_COMM_MESSAGE,
        InventoryGenEntries.FISCAL_DOC_NUM,
        InventoryGenEntries.POS_DAILY_SUMMARY_NO,
        InventoryGenEntries.POS_RECEIPT_NO,
        InventoryGenEntries.POINT_OF_ISSUE_CODE,
        InventoryGenEntries.FOLIO_NUMBER_FROM,
        InventoryGenEntries.FOLIO_NUMBER_TO,
        InventoryGenEntries.RELATED_TYPE,
        InventoryGenEntries.RELATED_ENTRY,
        InventoryGenEntries.DOCUMENT_TAX_ID,
        InventoryGenEntries.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        InventoryGenEntries.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        InventoryGenEntries.POS_CASH_REGISTER,
        InventoryGenEntries.UPDATE_TIME,
        InventoryGenEntries.DOWN_PAYMENT_TRASACTION_ID,
        InventoryGenEntries.ORIGINAL_REF_NO,
        InventoryGenEntries.ORIGINAL_REF_DATE,
        InventoryGenEntries.ORIGINAL_CREDIT_OR_DEBIT_NO,
        InventoryGenEntries.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        InventoryGenEntries.E_COMMERCE_OPERATOR,
        InventoryGenEntries.E_COMMERCE_GSTIN,
        InventoryGenEntries.TAX_INVOICE_NO,
        InventoryGenEntries.TAX_INVOICE_DATE,
        InventoryGenEntries.SHIP_FROM,
        InventoryGenEntries.ISSUING_REASON,
        InventoryGenEntries.DOCUMENT_APPROVAL_REQUESTS,
        InventoryGenEntries.DOCUMENT_LINES,
        InventoryGenEntries.DOCUMENT_ADDITIONAL_EXPENSES,
        InventoryGenEntries.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        InventoryGenEntries.WITHHOLDING_TAX_DATA_COLLECTION,
        InventoryGenEntries.DOCUMENT_PACKAGES,
        InventoryGenEntries.DOCUMENT_SPECIAL_LINES,
        InventoryGenEntries.DOCUMENT_INSTALLMENTS,
        InventoryGenEntries.DOWN_PAYMENTS_TO_DRAW,
        InventoryGenEntries.TAX_EXTENSION,
        InventoryGenEntries.ADDRESS_EXTENSION,
        InventoryGenEntries.SOI_WIZARD_ID,
        InventoryGenEntries.BUSINESS_PARTNER,
        InventoryGenEntries.CURRENCY,
        InventoryGenEntries.PAYMENT_TERMS_TYPE,
        InventoryGenEntries.SALES_PERSON,
        InventoryGenEntries.SHIPPING_TYPE,
        InventoryGenEntries.FACTORING_INDICATOR,
        InventoryGenEntries.JOURNAL_ENTRY,
        InventoryGenEntries.FORMS_1099,
        InventoryGenEntries.WIZARD_PAYMENT_METHOD,
        InventoryGenEntries.PAYMENT_BLOCK_2,
        InventoryGenEntries.PROJECT_2,
        InventoryGenEntries.EMPLOYEE_INFO,
        InventoryGenEntries.COUNTRY,
        InventoryGenEntries.BUSINESS_PLACE,
        InventoryGenEntries.USER_LANGUAGE,
        InventoryGenEntries.NF_MODEL,
        InventoryGenEntries.CHART_OF_ACCOUNT,
        InventoryGenEntries.TAX_WEB_SITE,
        InventoryGenEntries.BRANCH,
        InventoryGenEntries.DEPARTMENT,
        InventoryGenEntries.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    InventoryGenEntries.ALL_FIELDS = new v4_1.AllFields('*', InventoryGenEntries);
    /**
     * All key fields of the InventoryGenEntries entity.
     */
    InventoryGenEntries._keyFields = [InventoryGenEntries.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property InventoryGenEntries.
     */
    InventoryGenEntries._keys = InventoryGenEntries._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InventoryGenEntries = exports.InventoryGenEntries || (exports.InventoryGenEntries = {}));
exports.InventoryGenEntries = InventoryGenEntries;
//# sourceMappingURL=InventoryGenEntries.js.map