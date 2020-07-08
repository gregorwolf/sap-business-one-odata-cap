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
exports.DeliveryNotes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DeliveryNotesRequestBuilder_1 = require("./DeliveryNotesRequestBuilder");
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
 * This class represents the entity "DeliveryNotes" of service "SAPB1".
 */
var DeliveryNotes = /** @class */ (function (_super) {
    __extends(DeliveryNotes, _super);
    function DeliveryNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DeliveryNotes`.
     * @returns A builder that constructs instances of entity type `DeliveryNotes`.
     */
    DeliveryNotes.builder = function () {
        return v4_1.Entity.entityBuilder(DeliveryNotes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DeliveryNotes` entity type.
     * @returns A `DeliveryNotes` request builder.
     */
    DeliveryNotes.requestBuilder = function () {
        return new DeliveryNotesRequestBuilder_1.DeliveryNotesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeliveryNotes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeliveryNotes`.
     */
    DeliveryNotes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, DeliveryNotes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DeliveryNotes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DeliveryNotes.
     */
    DeliveryNotes._entityName = 'DeliveryNotes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DeliveryNotes.
     */
    DeliveryNotes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    DeliveryNotes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DeliveryNotes;
}(v4_1.Entity));
exports.DeliveryNotes = DeliveryNotes;
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
(function (DeliveryNotes) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_ENTRY = new v4_1.NumberField('DocEntry', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_NUM = new v4_1.NumberField('DocNum', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_DATE = new v4_1.DateField('DocDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CARD_CODE = new v4_1.StringField('CardCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CARD_NAME = new v4_1.StringField('CardName', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ADDRESS = new v4_1.StringField('Address', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NUM_AT_CARD = new v4_1.StringField('NumAtCard', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_TOTAL = new v4_1.NumberField('DocTotal', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_CURRENCY = new v4_1.StringField('DocCurrency', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_RATE = new v4_1.NumberField('DocRate', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REFERENCE_1 = new v4_1.StringField('Reference1', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REFERENCE_2 = new v4_1.StringField('Reference2', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.COMMENTS = new v4_1.StringField('Comments', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_TIME = new v4_1.TimeField('DocTime', DeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SERIES = new v4_1.NumberField('Series', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_DATE = new v4_1.DateField('TaxDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.INDICATOR = new v4_1.StringField('Indicator', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CREATION_DATE = new v4_1.DateField('CreationDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.UPDATE_DATE = new v4_1.DateField('UpdateDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TRANS_NUM = new v4_1.NumberField('TransNum', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_SUM = new v4_1.NumberField('VatSum', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FORM_1099 = new v4_1.NumberField('Form1099', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BOX_1099 = new v4_1.StringField('Box1099', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQURIED_DATE = new v4_1.DateField('RequriedDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CANCEL_DATE = new v4_1.DateField('CancelDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SEGMENT = new v4_1.NumberField('Segment', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PROJECT = new v4_1.StringField('Project', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_APPLIED = new v4_1.NumberField('WTApplied', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.AGENT_CODE = new v4_1.StringField('AgentCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_AMOUNT = new v4_1.NumberField('WTAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_DATE = new v4_1.DateField('VatDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ADDRESS_2 = new v4_1.StringField('Address2', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_CODE = new v4_1.StringField('PayToCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PICK_REMARK = new v4_1.StringField('PickRemark', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CLOSING_DATE = new v4_1.DateField('ClosingDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SERIES_STRING = new v4_1.StringField('SeriesString', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_PERCENT = new v4_1.NumberField('VatPercent', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GTS_CHECKER = new v4_1.NumberField('GTSChecker', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GTS_PAYEE = new v4_1.NumberField('GTSPayee', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_NUM = new v4_1.StringField('EDocNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GROUP_SERIES = new v4_1.NumberField('GroupSeries', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BPL_NAME = new v4_1.StringField('BPLName', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_REG_NUM = new v4_1.StringField('VATRegNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SUPPLIER = new v4_1.StringField('Supplier', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RELEASER = new v4_1.NumberField('Releaser', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RECEIVER = new v4_1.NumberField('Receiver', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER = new v4_1.StringField('Requester', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER_NAME = new v4_1.StringField('RequesterName', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQ_TYPE = new v4_1.NumberField('ReqType', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', DeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', DeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RELATED_TYPE = new v4_1.NumberField('RelatedType', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.UPDATE_TIME = new v4_1.TimeField('UpdateTime', DeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SHIP_FROM = new v4_1.StringField('ShipFrom', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ISSUING_REASON = new v4_1.NumberField('IssuingReason', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', DeliveryNotes, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', DeliveryNotes));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', DeliveryNotes, new DocumentLine_1.DocumentLineField('', DeliveryNotes));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', DeliveryNotes, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', DeliveryNotes));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', DeliveryNotes, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', DeliveryNotes));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', DeliveryNotes, new WithholdingTaxData_1.WithholdingTaxDataField('', DeliveryNotes));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', DeliveryNotes, new DocumentPackage_1.DocumentPackageField('', DeliveryNotes));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', DeliveryNotes, new DocumentSpecialLine_1.DocumentSpecialLineField('', DeliveryNotes));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', DeliveryNotes, new DocumentInstallment_1.DocumentInstallmentField('', DeliveryNotes));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', DeliveryNotes, new DownPaymentToDraw_1.DownPaymentToDrawField('', DeliveryNotes));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', DeliveryNotes);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', DeliveryNotes);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', DeliveryNotes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CURRENCY = new v4_1.OneToOneLink('Currency', DeliveryNotes, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', DeliveryNotes, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', DeliveryNotes, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', DeliveryNotes, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', DeliveryNotes, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', DeliveryNotes, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', DeliveryNotes, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', DeliveryNotes, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', DeliveryNotes, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PROJECT_2 = new v4_1.OneToOneLink('Project2', DeliveryNotes, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', DeliveryNotes, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.COUNTRY = new v4_1.OneToOneLink('Country', DeliveryNotes, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', DeliveryNotes, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', DeliveryNotes, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NF_MODEL = new v4_1.OneToOneLink('NFModel', DeliveryNotes, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', DeliveryNotes, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', DeliveryNotes, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BRANCH = new v4_1.OneToOneLink('Branch', DeliveryNotes, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DEPARTMENT = new v4_1.OneToOneLink('Department', DeliveryNotes, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', DeliveryNotes, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the DeliveryNotes entity.
     */
    DeliveryNotes._allFields = [
        DeliveryNotes.DOC_ENTRY,
        DeliveryNotes.DOC_NUM,
        DeliveryNotes.DOC_DATE,
        DeliveryNotes.DOC_DUE_DATE,
        DeliveryNotes.CARD_CODE,
        DeliveryNotes.CARD_NAME,
        DeliveryNotes.ADDRESS,
        DeliveryNotes.NUM_AT_CARD,
        DeliveryNotes.DOC_TOTAL,
        DeliveryNotes.ATTACHMENT_ENTRY,
        DeliveryNotes.DOC_CURRENCY,
        DeliveryNotes.DOC_RATE,
        DeliveryNotes.REFERENCE_1,
        DeliveryNotes.REFERENCE_2,
        DeliveryNotes.COMMENTS,
        DeliveryNotes.JOURNAL_MEMO,
        DeliveryNotes.PAYMENT_GROUP_CODE,
        DeliveryNotes.DOC_TIME,
        DeliveryNotes.SALES_PERSON_CODE,
        DeliveryNotes.TRANSPORTATION_CODE,
        DeliveryNotes.IMPORT_FILE_NUM,
        DeliveryNotes.CONTACT_PERSON_CODE,
        DeliveryNotes.SERIES,
        DeliveryNotes.TAX_DATE,
        DeliveryNotes.SHIP_TO_CODE,
        DeliveryNotes.INDICATOR,
        DeliveryNotes.FEDERAL_TAX_ID,
        DeliveryNotes.DISCOUNT_PERCENT,
        DeliveryNotes.PAYMENT_REFERENCE,
        DeliveryNotes.CREATION_DATE,
        DeliveryNotes.UPDATE_DATE,
        DeliveryNotes.FINANCIAL_PERIOD,
        DeliveryNotes.TRANS_NUM,
        DeliveryNotes.VAT_SUM,
        DeliveryNotes.VAT_SUM_SYS,
        DeliveryNotes.VAT_SUM_FC,
        DeliveryNotes.DOC_TOTAL_FC,
        DeliveryNotes.DOC_TOTAL_SYS,
        DeliveryNotes.FORM_1099,
        DeliveryNotes.BOX_1099,
        DeliveryNotes.REQURIED_DATE,
        DeliveryNotes.CANCEL_DATE,
        DeliveryNotes.SEGMENT,
        DeliveryNotes.PAYMENT_METHOD,
        DeliveryNotes.PAYMENT_BLOCK_ENTRY,
        DeliveryNotes.CENTRAL_BANK_INDICATOR,
        DeliveryNotes.PROJECT,
        DeliveryNotes.EXEMPTION_VALIDITY_DATE_FROM,
        DeliveryNotes.EXEMPTION_VALIDITY_DATE_TO,
        DeliveryNotes.EXTERNAL_CORRECTED_DOC_NUM,
        DeliveryNotes.INTERNAL_CORRECTED_DOC_NUM,
        DeliveryNotes.NEXT_CORRECTING_DOCUMENT,
        DeliveryNotes.TAX_EXEMPTION_LETTER_NUM,
        DeliveryNotes.WT_APPLIED,
        DeliveryNotes.WT_APPLIED_FC,
        DeliveryNotes.AGENT_CODE,
        DeliveryNotes.WT_APPLIED_SC,
        DeliveryNotes.TOTAL_EQUALIZATION_TAX,
        DeliveryNotes.TOTAL_EQUALIZATION_TAX_FC,
        DeliveryNotes.TOTAL_EQUALIZATION_TAX_SC,
        DeliveryNotes.NUMBER_OF_INSTALLMENTS,
        DeliveryNotes.WT_NON_SUBJECT_AMOUNT,
        DeliveryNotes.WT_NON_SUBJECT_AMOUNT_SC,
        DeliveryNotes.WT_NON_SUBJECT_AMOUNT_FC,
        DeliveryNotes.WT_EXEMPTED_AMOUNT,
        DeliveryNotes.WT_EXEMPTED_AMOUNT_SC,
        DeliveryNotes.WT_EXEMPTED_AMOUNT_FC,
        DeliveryNotes.BASE_AMOUNT,
        DeliveryNotes.BASE_AMOUNT_SC,
        DeliveryNotes.BASE_AMOUNT_FC,
        DeliveryNotes.WT_AMOUNT,
        DeliveryNotes.WT_AMOUNT_SC,
        DeliveryNotes.WT_AMOUNT_FC,
        DeliveryNotes.VAT_DATE,
        DeliveryNotes.DOCUMENTS_OWNER,
        DeliveryNotes.FOLIO_PREFIX_STRING,
        DeliveryNotes.FOLIO_NUMBER,
        DeliveryNotes.BP_CHANNEL_CODE,
        DeliveryNotes.BP_CHANNEL_CONTACT,
        DeliveryNotes.ADDRESS_2,
        DeliveryNotes.PERIOD_INDICATOR,
        DeliveryNotes.PAY_TO_CODE,
        DeliveryNotes.MANUAL_NUMBER,
        DeliveryNotes.PAY_TO_BANK_COUNTRY,
        DeliveryNotes.PAY_TO_BANK_CODE,
        DeliveryNotes.PAY_TO_BANK_ACCOUNT_NO,
        DeliveryNotes.PAY_TO_BANK_BRANCH,
        DeliveryNotes.BPL_ID_ASSIGNED_TO_INVOICE,
        DeliveryNotes.DOWN_PAYMENT,
        DeliveryNotes.LANGUAGE_CODE,
        DeliveryNotes.TRACKING_NUMBER,
        DeliveryNotes.PICK_REMARK,
        DeliveryNotes.CLOSING_DATE,
        DeliveryNotes.SEQUENCE_CODE,
        DeliveryNotes.SEQUENCE_SERIAL,
        DeliveryNotes.SERIES_STRING,
        DeliveryNotes.SUB_SERIES_STRING,
        DeliveryNotes.SEQUENCE_MODEL,
        DeliveryNotes.TOTAL_DISCOUNT,
        DeliveryNotes.DOWN_PAYMENT_AMOUNT,
        DeliveryNotes.DOWN_PAYMENT_PERCENTAGE,
        DeliveryNotes.DOWN_PAYMENT_AMOUNT_SC,
        DeliveryNotes.DOWN_PAYMENT_AMOUNT_FC,
        DeliveryNotes.VAT_PERCENT,
        DeliveryNotes.SERVICE_GROSS_PROFIT_PERCENT,
        DeliveryNotes.OPENING_REMARKS,
        DeliveryNotes.CLOSING_REMARKS,
        DeliveryNotes.ROUNDING_DIFF_AMOUNT,
        DeliveryNotes.ROUNDING_DIFF_AMOUNT_FC,
        DeliveryNotes.ROUNDING_DIFF_AMOUNT_SC,
        DeliveryNotes.SIGNATURE_INPUT_MESSAGE,
        DeliveryNotes.SIGNATURE_DIGEST,
        DeliveryNotes.CERTIFICATION_NUMBER,
        DeliveryNotes.PRIVATE_KEY_VERSION,
        DeliveryNotes.CONTROL_ACCOUNT,
        DeliveryNotes.GTS_CHECKER,
        DeliveryNotes.GTS_PAYEE,
        DeliveryNotes.EXTRA_MONTH,
        DeliveryNotes.EXTRA_DAYS,
        DeliveryNotes.CASH_DISCOUNT_DATE_OFFSET,
        DeliveryNotes.E_TAX_WEB_SITE,
        DeliveryNotes.E_TAX_NUMBER,
        DeliveryNotes.NTS_APPROVED_NUMBER,
        DeliveryNotes.E_DOC_SERIES,
        DeliveryNotes.E_DOC_NUM,
        DeliveryNotes.E_DOC_EXPORT_FORMAT,
        DeliveryNotes.E_DOC_ERROR_CODE,
        DeliveryNotes.E_DOC_ERROR_MESSAGE,
        DeliveryNotes.GROUP_SERIES,
        DeliveryNotes.GROUP_NUMBER,
        DeliveryNotes.POS_EQUIPMENT_NUMBER,
        DeliveryNotes.POS_MANUFACTURER_SERIAL_NUMBER,
        DeliveryNotes.POS_CASHIER_NUMBER,
        DeliveryNotes.SPECIFIED_CLOSING_DATE,
        DeliveryNotes.TOTAL_DISCOUNT_FC,
        DeliveryNotes.TOTAL_DISCOUNT_SC,
        DeliveryNotes.BPL_NAME,
        DeliveryNotes.VAT_REG_NUM,
        DeliveryNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        DeliveryNotes.SUPPLIER,
        DeliveryNotes.RELEASER,
        DeliveryNotes.RECEIVER,
        DeliveryNotes.BLANKET_AGREEMENT_NUMBER,
        DeliveryNotes.ASSET_VALUE_DATE,
        DeliveryNotes.REQUESTER,
        DeliveryNotes.REQUESTER_NAME,
        DeliveryNotes.REQUESTER_BRANCH,
        DeliveryNotes.REQUESTER_DEPARTMENT,
        DeliveryNotes.REQUESTER_EMAIL,
        DeliveryNotes.REQ_TYPE,
        DeliveryNotes.AUTHORIZATION_CODE,
        DeliveryNotes.START_DELIVERY_DATE,
        DeliveryNotes.START_DELIVERY_TIME,
        DeliveryNotes.END_DELIVERY_DATE,
        DeliveryNotes.END_DELIVERY_TIME,
        DeliveryNotes.VEHICLE_PLATE,
        DeliveryNotes.AT_DOCUMENT_TYPE,
        DeliveryNotes.ELEC_COMM_MESSAGE,
        DeliveryNotes.FISCAL_DOC_NUM,
        DeliveryNotes.POS_DAILY_SUMMARY_NO,
        DeliveryNotes.POS_RECEIPT_NO,
        DeliveryNotes.POINT_OF_ISSUE_CODE,
        DeliveryNotes.FOLIO_NUMBER_FROM,
        DeliveryNotes.FOLIO_NUMBER_TO,
        DeliveryNotes.RELATED_TYPE,
        DeliveryNotes.RELATED_ENTRY,
        DeliveryNotes.DOCUMENT_TAX_ID,
        DeliveryNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        DeliveryNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        DeliveryNotes.POS_CASH_REGISTER,
        DeliveryNotes.UPDATE_TIME,
        DeliveryNotes.DOWN_PAYMENT_TRASACTION_ID,
        DeliveryNotes.ORIGINAL_REF_NO,
        DeliveryNotes.ORIGINAL_REF_DATE,
        DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_NO,
        DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        DeliveryNotes.E_COMMERCE_OPERATOR,
        DeliveryNotes.E_COMMERCE_GSTIN,
        DeliveryNotes.TAX_INVOICE_NO,
        DeliveryNotes.TAX_INVOICE_DATE,
        DeliveryNotes.SHIP_FROM,
        DeliveryNotes.ISSUING_REASON,
        DeliveryNotes.DOCUMENT_APPROVAL_REQUESTS,
        DeliveryNotes.DOCUMENT_LINES,
        DeliveryNotes.DOCUMENT_ADDITIONAL_EXPENSES,
        DeliveryNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        DeliveryNotes.WITHHOLDING_TAX_DATA_COLLECTION,
        DeliveryNotes.DOCUMENT_PACKAGES,
        DeliveryNotes.DOCUMENT_SPECIAL_LINES,
        DeliveryNotes.DOCUMENT_INSTALLMENTS,
        DeliveryNotes.DOWN_PAYMENTS_TO_DRAW,
        DeliveryNotes.TAX_EXTENSION,
        DeliveryNotes.ADDRESS_EXTENSION,
        DeliveryNotes.SOI_WIZARD_ID,
        DeliveryNotes.BUSINESS_PARTNER,
        DeliveryNotes.CURRENCY,
        DeliveryNotes.PAYMENT_TERMS_TYPE,
        DeliveryNotes.SALES_PERSON,
        DeliveryNotes.SHIPPING_TYPE,
        DeliveryNotes.FACTORING_INDICATOR,
        DeliveryNotes.JOURNAL_ENTRY,
        DeliveryNotes.FORMS_1099,
        DeliveryNotes.WIZARD_PAYMENT_METHOD,
        DeliveryNotes.PAYMENT_BLOCK_2,
        DeliveryNotes.PROJECT_2,
        DeliveryNotes.EMPLOYEE_INFO,
        DeliveryNotes.COUNTRY,
        DeliveryNotes.BUSINESS_PLACE,
        DeliveryNotes.USER_LANGUAGE,
        DeliveryNotes.NF_MODEL,
        DeliveryNotes.CHART_OF_ACCOUNT,
        DeliveryNotes.TAX_WEB_SITE,
        DeliveryNotes.BRANCH,
        DeliveryNotes.DEPARTMENT,
        DeliveryNotes.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    DeliveryNotes.ALL_FIELDS = new v4_1.AllFields('*', DeliveryNotes);
    /**
     * All key fields of the DeliveryNotes entity.
     */
    DeliveryNotes._keyFields = [DeliveryNotes.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property DeliveryNotes.
     */
    DeliveryNotes._keys = DeliveryNotes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DeliveryNotes = exports.DeliveryNotes || (exports.DeliveryNotes = {}));
exports.DeliveryNotes = DeliveryNotes;
//# sourceMappingURL=DeliveryNotes.js.map