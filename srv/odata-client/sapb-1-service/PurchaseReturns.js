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
exports.PurchaseReturns = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseReturnsRequestBuilder_1 = require("./PurchaseReturnsRequestBuilder");
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
 * This class represents the entity "PurchaseReturns" of service "SAPB1".
 */
var PurchaseReturns = /** @class */ (function (_super) {
    __extends(PurchaseReturns, _super);
    function PurchaseReturns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PurchaseReturns`.
     * @returns A builder that constructs instances of entity type `PurchaseReturns`.
     */
    PurchaseReturns.builder = function () {
        return v4_1.Entity.entityBuilder(PurchaseReturns);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseReturns` entity type.
     * @returns A `PurchaseReturns` request builder.
     */
    PurchaseReturns.requestBuilder = function () {
        return new PurchaseReturnsRequestBuilder_1.PurchaseReturnsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseReturns`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseReturns`.
     */
    PurchaseReturns.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, PurchaseReturns);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseReturns.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseReturns.
     */
    PurchaseReturns._entityName = 'PurchaseReturns';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PurchaseReturns.
     */
    PurchaseReturns._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    PurchaseReturns._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PurchaseReturns;
}(v4_1.Entity));
exports.PurchaseReturns = PurchaseReturns;
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
(function (PurchaseReturns) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_ENTRY = new v4_1.NumberField('DocEntry', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_NUM = new v4_1.NumberField('DocNum', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_DATE = new v4_1.DateField('DocDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CARD_CODE = new v4_1.StringField('CardCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CARD_NAME = new v4_1.StringField('CardName', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ADDRESS = new v4_1.StringField('Address', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NUM_AT_CARD = new v4_1.StringField('NumAtCard', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_TOTAL = new v4_1.NumberField('DocTotal', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_CURRENCY = new v4_1.StringField('DocCurrency', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_RATE = new v4_1.NumberField('DocRate', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REFERENCE_1 = new v4_1.StringField('Reference1', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REFERENCE_2 = new v4_1.StringField('Reference2', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.COMMENTS = new v4_1.StringField('Comments', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_TIME = new v4_1.TimeField('DocTime', PurchaseReturns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SERIES = new v4_1.NumberField('Series', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_DATE = new v4_1.DateField('TaxDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.INDICATOR = new v4_1.StringField('Indicator', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CREATION_DATE = new v4_1.DateField('CreationDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.UPDATE_DATE = new v4_1.DateField('UpdateDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TRANS_NUM = new v4_1.NumberField('TransNum', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_SUM = new v4_1.NumberField('VatSum', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FORM_1099 = new v4_1.NumberField('Form1099', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BOX_1099 = new v4_1.StringField('Box1099', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQURIED_DATE = new v4_1.DateField('RequriedDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CANCEL_DATE = new v4_1.DateField('CancelDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SEGMENT = new v4_1.NumberField('Segment', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PROJECT = new v4_1.StringField('Project', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_APPLIED = new v4_1.NumberField('WTApplied', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.AGENT_CODE = new v4_1.StringField('AgentCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_AMOUNT = new v4_1.NumberField('WTAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_DATE = new v4_1.DateField('VatDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ADDRESS_2 = new v4_1.StringField('Address2', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_CODE = new v4_1.StringField('PayToCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PICK_REMARK = new v4_1.StringField('PickRemark', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CLOSING_DATE = new v4_1.DateField('ClosingDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SERIES_STRING = new v4_1.StringField('SeriesString', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_PERCENT = new v4_1.NumberField('VatPercent', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GTS_CHECKER = new v4_1.NumberField('GTSChecker', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GTS_PAYEE = new v4_1.NumberField('GTSPayee', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_NUM = new v4_1.StringField('EDocNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GROUP_SERIES = new v4_1.NumberField('GroupSeries', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BPL_NAME = new v4_1.StringField('BPLName', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_REG_NUM = new v4_1.StringField('VATRegNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SUPPLIER = new v4_1.StringField('Supplier', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RELEASER = new v4_1.NumberField('Releaser', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RECEIVER = new v4_1.NumberField('Receiver', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER = new v4_1.StringField('Requester', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER_NAME = new v4_1.StringField('RequesterName', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQ_TYPE = new v4_1.NumberField('ReqType', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', PurchaseReturns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', PurchaseReturns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RELATED_TYPE = new v4_1.NumberField('RelatedType', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.UPDATE_TIME = new v4_1.TimeField('UpdateTime', PurchaseReturns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SHIP_FROM = new v4_1.StringField('ShipFrom', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ISSUING_REASON = new v4_1.NumberField('IssuingReason', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', PurchaseReturns, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', PurchaseReturns));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', PurchaseReturns, new DocumentLine_1.DocumentLineField('', PurchaseReturns));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', PurchaseReturns, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', PurchaseReturns));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseReturns, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', PurchaseReturns));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', PurchaseReturns, new WithholdingTaxData_1.WithholdingTaxDataField('', PurchaseReturns));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', PurchaseReturns, new DocumentPackage_1.DocumentPackageField('', PurchaseReturns));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', PurchaseReturns, new DocumentSpecialLine_1.DocumentSpecialLineField('', PurchaseReturns));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', PurchaseReturns, new DocumentInstallment_1.DocumentInstallmentField('', PurchaseReturns));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', PurchaseReturns, new DownPaymentToDraw_1.DownPaymentToDrawField('', PurchaseReturns));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseReturns);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseReturns);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', PurchaseReturns, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CURRENCY = new v4_1.OneToOneLink('Currency', PurchaseReturns, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', PurchaseReturns, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', PurchaseReturns, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', PurchaseReturns, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', PurchaseReturns, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', PurchaseReturns, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', PurchaseReturns, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', PurchaseReturns, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', PurchaseReturns, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PROJECT_2 = new v4_1.OneToOneLink('Project2', PurchaseReturns, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', PurchaseReturns, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.COUNTRY = new v4_1.OneToOneLink('Country', PurchaseReturns, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', PurchaseReturns, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', PurchaseReturns, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NF_MODEL = new v4_1.OneToOneLink('NFModel', PurchaseReturns, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', PurchaseReturns, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', PurchaseReturns, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BRANCH = new v4_1.OneToOneLink('Branch', PurchaseReturns, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DEPARTMENT = new v4_1.OneToOneLink('Department', PurchaseReturns, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', PurchaseReturns, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseReturns entity.
     */
    PurchaseReturns._allFields = [
        PurchaseReturns.DOC_ENTRY,
        PurchaseReturns.DOC_NUM,
        PurchaseReturns.DOC_DATE,
        PurchaseReturns.DOC_DUE_DATE,
        PurchaseReturns.CARD_CODE,
        PurchaseReturns.CARD_NAME,
        PurchaseReturns.ADDRESS,
        PurchaseReturns.NUM_AT_CARD,
        PurchaseReturns.DOC_TOTAL,
        PurchaseReturns.ATTACHMENT_ENTRY,
        PurchaseReturns.DOC_CURRENCY,
        PurchaseReturns.DOC_RATE,
        PurchaseReturns.REFERENCE_1,
        PurchaseReturns.REFERENCE_2,
        PurchaseReturns.COMMENTS,
        PurchaseReturns.JOURNAL_MEMO,
        PurchaseReturns.PAYMENT_GROUP_CODE,
        PurchaseReturns.DOC_TIME,
        PurchaseReturns.SALES_PERSON_CODE,
        PurchaseReturns.TRANSPORTATION_CODE,
        PurchaseReturns.IMPORT_FILE_NUM,
        PurchaseReturns.CONTACT_PERSON_CODE,
        PurchaseReturns.SERIES,
        PurchaseReturns.TAX_DATE,
        PurchaseReturns.SHIP_TO_CODE,
        PurchaseReturns.INDICATOR,
        PurchaseReturns.FEDERAL_TAX_ID,
        PurchaseReturns.DISCOUNT_PERCENT,
        PurchaseReturns.PAYMENT_REFERENCE,
        PurchaseReturns.CREATION_DATE,
        PurchaseReturns.UPDATE_DATE,
        PurchaseReturns.FINANCIAL_PERIOD,
        PurchaseReturns.TRANS_NUM,
        PurchaseReturns.VAT_SUM,
        PurchaseReturns.VAT_SUM_SYS,
        PurchaseReturns.VAT_SUM_FC,
        PurchaseReturns.DOC_TOTAL_FC,
        PurchaseReturns.DOC_TOTAL_SYS,
        PurchaseReturns.FORM_1099,
        PurchaseReturns.BOX_1099,
        PurchaseReturns.REQURIED_DATE,
        PurchaseReturns.CANCEL_DATE,
        PurchaseReturns.SEGMENT,
        PurchaseReturns.PAYMENT_METHOD,
        PurchaseReturns.PAYMENT_BLOCK_ENTRY,
        PurchaseReturns.CENTRAL_BANK_INDICATOR,
        PurchaseReturns.PROJECT,
        PurchaseReturns.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseReturns.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseReturns.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseReturns.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseReturns.NEXT_CORRECTING_DOCUMENT,
        PurchaseReturns.TAX_EXEMPTION_LETTER_NUM,
        PurchaseReturns.WT_APPLIED,
        PurchaseReturns.WT_APPLIED_FC,
        PurchaseReturns.AGENT_CODE,
        PurchaseReturns.WT_APPLIED_SC,
        PurchaseReturns.TOTAL_EQUALIZATION_TAX,
        PurchaseReturns.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseReturns.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseReturns.NUMBER_OF_INSTALLMENTS,
        PurchaseReturns.WT_NON_SUBJECT_AMOUNT,
        PurchaseReturns.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseReturns.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseReturns.WT_EXEMPTED_AMOUNT,
        PurchaseReturns.WT_EXEMPTED_AMOUNT_SC,
        PurchaseReturns.WT_EXEMPTED_AMOUNT_FC,
        PurchaseReturns.BASE_AMOUNT,
        PurchaseReturns.BASE_AMOUNT_SC,
        PurchaseReturns.BASE_AMOUNT_FC,
        PurchaseReturns.WT_AMOUNT,
        PurchaseReturns.WT_AMOUNT_SC,
        PurchaseReturns.WT_AMOUNT_FC,
        PurchaseReturns.VAT_DATE,
        PurchaseReturns.DOCUMENTS_OWNER,
        PurchaseReturns.FOLIO_PREFIX_STRING,
        PurchaseReturns.FOLIO_NUMBER,
        PurchaseReturns.BP_CHANNEL_CODE,
        PurchaseReturns.BP_CHANNEL_CONTACT,
        PurchaseReturns.ADDRESS_2,
        PurchaseReturns.PERIOD_INDICATOR,
        PurchaseReturns.PAY_TO_CODE,
        PurchaseReturns.MANUAL_NUMBER,
        PurchaseReturns.PAY_TO_BANK_COUNTRY,
        PurchaseReturns.PAY_TO_BANK_CODE,
        PurchaseReturns.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseReturns.PAY_TO_BANK_BRANCH,
        PurchaseReturns.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseReturns.DOWN_PAYMENT,
        PurchaseReturns.LANGUAGE_CODE,
        PurchaseReturns.TRACKING_NUMBER,
        PurchaseReturns.PICK_REMARK,
        PurchaseReturns.CLOSING_DATE,
        PurchaseReturns.SEQUENCE_CODE,
        PurchaseReturns.SEQUENCE_SERIAL,
        PurchaseReturns.SERIES_STRING,
        PurchaseReturns.SUB_SERIES_STRING,
        PurchaseReturns.SEQUENCE_MODEL,
        PurchaseReturns.TOTAL_DISCOUNT,
        PurchaseReturns.DOWN_PAYMENT_AMOUNT,
        PurchaseReturns.DOWN_PAYMENT_PERCENTAGE,
        PurchaseReturns.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseReturns.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseReturns.VAT_PERCENT,
        PurchaseReturns.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseReturns.OPENING_REMARKS,
        PurchaseReturns.CLOSING_REMARKS,
        PurchaseReturns.ROUNDING_DIFF_AMOUNT,
        PurchaseReturns.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseReturns.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseReturns.SIGNATURE_INPUT_MESSAGE,
        PurchaseReturns.SIGNATURE_DIGEST,
        PurchaseReturns.CERTIFICATION_NUMBER,
        PurchaseReturns.PRIVATE_KEY_VERSION,
        PurchaseReturns.CONTROL_ACCOUNT,
        PurchaseReturns.GTS_CHECKER,
        PurchaseReturns.GTS_PAYEE,
        PurchaseReturns.EXTRA_MONTH,
        PurchaseReturns.EXTRA_DAYS,
        PurchaseReturns.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseReturns.E_TAX_WEB_SITE,
        PurchaseReturns.E_TAX_NUMBER,
        PurchaseReturns.NTS_APPROVED_NUMBER,
        PurchaseReturns.E_DOC_SERIES,
        PurchaseReturns.E_DOC_NUM,
        PurchaseReturns.E_DOC_EXPORT_FORMAT,
        PurchaseReturns.E_DOC_ERROR_CODE,
        PurchaseReturns.E_DOC_ERROR_MESSAGE,
        PurchaseReturns.GROUP_SERIES,
        PurchaseReturns.GROUP_NUMBER,
        PurchaseReturns.POS_EQUIPMENT_NUMBER,
        PurchaseReturns.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseReturns.POS_CASHIER_NUMBER,
        PurchaseReturns.SPECIFIED_CLOSING_DATE,
        PurchaseReturns.TOTAL_DISCOUNT_FC,
        PurchaseReturns.TOTAL_DISCOUNT_SC,
        PurchaseReturns.BPL_NAME,
        PurchaseReturns.VAT_REG_NUM,
        PurchaseReturns.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseReturns.SUPPLIER,
        PurchaseReturns.RELEASER,
        PurchaseReturns.RECEIVER,
        PurchaseReturns.BLANKET_AGREEMENT_NUMBER,
        PurchaseReturns.ASSET_VALUE_DATE,
        PurchaseReturns.REQUESTER,
        PurchaseReturns.REQUESTER_NAME,
        PurchaseReturns.REQUESTER_BRANCH,
        PurchaseReturns.REQUESTER_DEPARTMENT,
        PurchaseReturns.REQUESTER_EMAIL,
        PurchaseReturns.REQ_TYPE,
        PurchaseReturns.AUTHORIZATION_CODE,
        PurchaseReturns.START_DELIVERY_DATE,
        PurchaseReturns.START_DELIVERY_TIME,
        PurchaseReturns.END_DELIVERY_DATE,
        PurchaseReturns.END_DELIVERY_TIME,
        PurchaseReturns.VEHICLE_PLATE,
        PurchaseReturns.AT_DOCUMENT_TYPE,
        PurchaseReturns.ELEC_COMM_MESSAGE,
        PurchaseReturns.FISCAL_DOC_NUM,
        PurchaseReturns.POS_DAILY_SUMMARY_NO,
        PurchaseReturns.POS_RECEIPT_NO,
        PurchaseReturns.POINT_OF_ISSUE_CODE,
        PurchaseReturns.FOLIO_NUMBER_FROM,
        PurchaseReturns.FOLIO_NUMBER_TO,
        PurchaseReturns.RELATED_TYPE,
        PurchaseReturns.RELATED_ENTRY,
        PurchaseReturns.DOCUMENT_TAX_ID,
        PurchaseReturns.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseReturns.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseReturns.POS_CASH_REGISTER,
        PurchaseReturns.UPDATE_TIME,
        PurchaseReturns.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseReturns.ORIGINAL_REF_NO,
        PurchaseReturns.ORIGINAL_REF_DATE,
        PurchaseReturns.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseReturns.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseReturns.E_COMMERCE_OPERATOR,
        PurchaseReturns.E_COMMERCE_GSTIN,
        PurchaseReturns.TAX_INVOICE_NO,
        PurchaseReturns.TAX_INVOICE_DATE,
        PurchaseReturns.SHIP_FROM,
        PurchaseReturns.ISSUING_REASON,
        PurchaseReturns.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseReturns.DOCUMENT_LINES,
        PurchaseReturns.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseReturns.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseReturns.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseReturns.DOCUMENT_PACKAGES,
        PurchaseReturns.DOCUMENT_SPECIAL_LINES,
        PurchaseReturns.DOCUMENT_INSTALLMENTS,
        PurchaseReturns.DOWN_PAYMENTS_TO_DRAW,
        PurchaseReturns.TAX_EXTENSION,
        PurchaseReturns.ADDRESS_EXTENSION,
        PurchaseReturns.SOI_WIZARD_ID,
        PurchaseReturns.BUSINESS_PARTNER,
        PurchaseReturns.CURRENCY,
        PurchaseReturns.PAYMENT_TERMS_TYPE,
        PurchaseReturns.SALES_PERSON,
        PurchaseReturns.SHIPPING_TYPE,
        PurchaseReturns.FACTORING_INDICATOR,
        PurchaseReturns.JOURNAL_ENTRY,
        PurchaseReturns.FORMS_1099,
        PurchaseReturns.WIZARD_PAYMENT_METHOD,
        PurchaseReturns.PAYMENT_BLOCK_2,
        PurchaseReturns.PROJECT_2,
        PurchaseReturns.EMPLOYEE_INFO,
        PurchaseReturns.COUNTRY,
        PurchaseReturns.BUSINESS_PLACE,
        PurchaseReturns.USER_LANGUAGE,
        PurchaseReturns.NF_MODEL,
        PurchaseReturns.CHART_OF_ACCOUNT,
        PurchaseReturns.TAX_WEB_SITE,
        PurchaseReturns.BRANCH,
        PurchaseReturns.DEPARTMENT,
        PurchaseReturns.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseReturns.ALL_FIELDS = new v4_1.AllFields('*', PurchaseReturns);
    /**
     * All key fields of the PurchaseReturns entity.
     */
    PurchaseReturns._keyFields = [PurchaseReturns.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseReturns.
     */
    PurchaseReturns._keys = PurchaseReturns._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseReturns = exports.PurchaseReturns || (exports.PurchaseReturns = {}));
exports.PurchaseReturns = PurchaseReturns;
//# sourceMappingURL=PurchaseReturns.js.map