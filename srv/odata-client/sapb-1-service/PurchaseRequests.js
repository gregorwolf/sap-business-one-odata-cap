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
exports.PurchaseRequests = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseRequestsRequestBuilder_1 = require("./PurchaseRequestsRequestBuilder");
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
 * This class represents the entity "PurchaseRequests" of service "SAPB1".
 */
var PurchaseRequests = /** @class */ (function (_super) {
    __extends(PurchaseRequests, _super);
    function PurchaseRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PurchaseRequests`.
     * @returns A builder that constructs instances of entity type `PurchaseRequests`.
     */
    PurchaseRequests.builder = function () {
        return v4_1.Entity.entityBuilder(PurchaseRequests);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseRequests` entity type.
     * @returns A `PurchaseRequests` request builder.
     */
    PurchaseRequests.requestBuilder = function () {
        return new PurchaseRequestsRequestBuilder_1.PurchaseRequestsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseRequests`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseRequests`.
     */
    PurchaseRequests.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, PurchaseRequests);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseRequests.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseRequests.
     */
    PurchaseRequests._entityName = 'PurchaseRequests';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PurchaseRequests.
     */
    PurchaseRequests._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    PurchaseRequests._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PurchaseRequests;
}(v4_1.Entity));
exports.PurchaseRequests = PurchaseRequests;
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
(function (PurchaseRequests) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_ENTRY = new v4_1.NumberField('DocEntry', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_NUM = new v4_1.NumberField('DocNum', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_DATE = new v4_1.DateField('DocDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CARD_CODE = new v4_1.StringField('CardCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CARD_NAME = new v4_1.StringField('CardName', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ADDRESS = new v4_1.StringField('Address', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NUM_AT_CARD = new v4_1.StringField('NumAtCard', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_TOTAL = new v4_1.NumberField('DocTotal', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_CURRENCY = new v4_1.StringField('DocCurrency', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_RATE = new v4_1.NumberField('DocRate', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REFERENCE_1 = new v4_1.StringField('Reference1', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REFERENCE_2 = new v4_1.StringField('Reference2', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.COMMENTS = new v4_1.StringField('Comments', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_TIME = new v4_1.TimeField('DocTime', PurchaseRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SERIES = new v4_1.NumberField('Series', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_DATE = new v4_1.DateField('TaxDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.INDICATOR = new v4_1.StringField('Indicator', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CREATION_DATE = new v4_1.DateField('CreationDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.UPDATE_DATE = new v4_1.DateField('UpdateDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TRANS_NUM = new v4_1.NumberField('TransNum', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_SUM = new v4_1.NumberField('VatSum', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FORM_1099 = new v4_1.NumberField('Form1099', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BOX_1099 = new v4_1.StringField('Box1099', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQURIED_DATE = new v4_1.DateField('RequriedDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CANCEL_DATE = new v4_1.DateField('CancelDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SEGMENT = new v4_1.NumberField('Segment', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PROJECT = new v4_1.StringField('Project', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_APPLIED = new v4_1.NumberField('WTApplied', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.AGENT_CODE = new v4_1.StringField('AgentCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_AMOUNT = new v4_1.NumberField('WTAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_DATE = new v4_1.DateField('VatDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ADDRESS_2 = new v4_1.StringField('Address2', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_CODE = new v4_1.StringField('PayToCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PICK_REMARK = new v4_1.StringField('PickRemark', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CLOSING_DATE = new v4_1.DateField('ClosingDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SERIES_STRING = new v4_1.StringField('SeriesString', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_PERCENT = new v4_1.NumberField('VatPercent', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GTS_CHECKER = new v4_1.NumberField('GTSChecker', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GTS_PAYEE = new v4_1.NumberField('GTSPayee', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_NUM = new v4_1.StringField('EDocNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GROUP_SERIES = new v4_1.NumberField('GroupSeries', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BPL_NAME = new v4_1.StringField('BPLName', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_REG_NUM = new v4_1.StringField('VATRegNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SUPPLIER = new v4_1.StringField('Supplier', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RELEASER = new v4_1.NumberField('Releaser', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RECEIVER = new v4_1.NumberField('Receiver', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER = new v4_1.StringField('Requester', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER_NAME = new v4_1.StringField('RequesterName', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQ_TYPE = new v4_1.NumberField('ReqType', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', PurchaseRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', PurchaseRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RELATED_TYPE = new v4_1.NumberField('RelatedType', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.UPDATE_TIME = new v4_1.TimeField('UpdateTime', PurchaseRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SHIP_FROM = new v4_1.StringField('ShipFrom', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ISSUING_REASON = new v4_1.NumberField('IssuingReason', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', PurchaseRequests, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', PurchaseRequests));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', PurchaseRequests, new DocumentLine_1.DocumentLineField('', PurchaseRequests));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', PurchaseRequests, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', PurchaseRequests));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseRequests, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', PurchaseRequests));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', PurchaseRequests, new WithholdingTaxData_1.WithholdingTaxDataField('', PurchaseRequests));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', PurchaseRequests, new DocumentPackage_1.DocumentPackageField('', PurchaseRequests));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', PurchaseRequests, new DocumentSpecialLine_1.DocumentSpecialLineField('', PurchaseRequests));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', PurchaseRequests, new DocumentInstallment_1.DocumentInstallmentField('', PurchaseRequests));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', PurchaseRequests, new DownPaymentToDraw_1.DownPaymentToDrawField('', PurchaseRequests));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseRequests);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseRequests);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', PurchaseRequests, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CURRENCY = new v4_1.OneToOneLink('Currency', PurchaseRequests, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', PurchaseRequests, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', PurchaseRequests, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', PurchaseRequests, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', PurchaseRequests, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', PurchaseRequests, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', PurchaseRequests, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', PurchaseRequests, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PROJECT_2 = new v4_1.OneToOneLink('Project2', PurchaseRequests, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', PurchaseRequests, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.COUNTRY = new v4_1.OneToOneLink('Country', PurchaseRequests, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', PurchaseRequests, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', PurchaseRequests, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NF_MODEL = new v4_1.OneToOneLink('NFModel', PurchaseRequests, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', PurchaseRequests, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', PurchaseRequests, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BRANCH = new v4_1.OneToOneLink('Branch', PurchaseRequests, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DEPARTMENT = new v4_1.OneToOneLink('Department', PurchaseRequests, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', PurchaseRequests, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseRequests entity.
     */
    PurchaseRequests._allFields = [
        PurchaseRequests.DOC_ENTRY,
        PurchaseRequests.DOC_NUM,
        PurchaseRequests.DOC_DATE,
        PurchaseRequests.DOC_DUE_DATE,
        PurchaseRequests.CARD_CODE,
        PurchaseRequests.CARD_NAME,
        PurchaseRequests.ADDRESS,
        PurchaseRequests.NUM_AT_CARD,
        PurchaseRequests.DOC_TOTAL,
        PurchaseRequests.ATTACHMENT_ENTRY,
        PurchaseRequests.DOC_CURRENCY,
        PurchaseRequests.DOC_RATE,
        PurchaseRequests.REFERENCE_1,
        PurchaseRequests.REFERENCE_2,
        PurchaseRequests.COMMENTS,
        PurchaseRequests.JOURNAL_MEMO,
        PurchaseRequests.PAYMENT_GROUP_CODE,
        PurchaseRequests.DOC_TIME,
        PurchaseRequests.SALES_PERSON_CODE,
        PurchaseRequests.TRANSPORTATION_CODE,
        PurchaseRequests.IMPORT_FILE_NUM,
        PurchaseRequests.CONTACT_PERSON_CODE,
        PurchaseRequests.SERIES,
        PurchaseRequests.TAX_DATE,
        PurchaseRequests.SHIP_TO_CODE,
        PurchaseRequests.INDICATOR,
        PurchaseRequests.FEDERAL_TAX_ID,
        PurchaseRequests.DISCOUNT_PERCENT,
        PurchaseRequests.PAYMENT_REFERENCE,
        PurchaseRequests.CREATION_DATE,
        PurchaseRequests.UPDATE_DATE,
        PurchaseRequests.FINANCIAL_PERIOD,
        PurchaseRequests.TRANS_NUM,
        PurchaseRequests.VAT_SUM,
        PurchaseRequests.VAT_SUM_SYS,
        PurchaseRequests.VAT_SUM_FC,
        PurchaseRequests.DOC_TOTAL_FC,
        PurchaseRequests.DOC_TOTAL_SYS,
        PurchaseRequests.FORM_1099,
        PurchaseRequests.BOX_1099,
        PurchaseRequests.REQURIED_DATE,
        PurchaseRequests.CANCEL_DATE,
        PurchaseRequests.SEGMENT,
        PurchaseRequests.PAYMENT_METHOD,
        PurchaseRequests.PAYMENT_BLOCK_ENTRY,
        PurchaseRequests.CENTRAL_BANK_INDICATOR,
        PurchaseRequests.PROJECT,
        PurchaseRequests.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseRequests.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseRequests.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseRequests.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseRequests.NEXT_CORRECTING_DOCUMENT,
        PurchaseRequests.TAX_EXEMPTION_LETTER_NUM,
        PurchaseRequests.WT_APPLIED,
        PurchaseRequests.WT_APPLIED_FC,
        PurchaseRequests.AGENT_CODE,
        PurchaseRequests.WT_APPLIED_SC,
        PurchaseRequests.TOTAL_EQUALIZATION_TAX,
        PurchaseRequests.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseRequests.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseRequests.NUMBER_OF_INSTALLMENTS,
        PurchaseRequests.WT_NON_SUBJECT_AMOUNT,
        PurchaseRequests.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseRequests.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseRequests.WT_EXEMPTED_AMOUNT,
        PurchaseRequests.WT_EXEMPTED_AMOUNT_SC,
        PurchaseRequests.WT_EXEMPTED_AMOUNT_FC,
        PurchaseRequests.BASE_AMOUNT,
        PurchaseRequests.BASE_AMOUNT_SC,
        PurchaseRequests.BASE_AMOUNT_FC,
        PurchaseRequests.WT_AMOUNT,
        PurchaseRequests.WT_AMOUNT_SC,
        PurchaseRequests.WT_AMOUNT_FC,
        PurchaseRequests.VAT_DATE,
        PurchaseRequests.DOCUMENTS_OWNER,
        PurchaseRequests.FOLIO_PREFIX_STRING,
        PurchaseRequests.FOLIO_NUMBER,
        PurchaseRequests.BP_CHANNEL_CODE,
        PurchaseRequests.BP_CHANNEL_CONTACT,
        PurchaseRequests.ADDRESS_2,
        PurchaseRequests.PERIOD_INDICATOR,
        PurchaseRequests.PAY_TO_CODE,
        PurchaseRequests.MANUAL_NUMBER,
        PurchaseRequests.PAY_TO_BANK_COUNTRY,
        PurchaseRequests.PAY_TO_BANK_CODE,
        PurchaseRequests.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseRequests.PAY_TO_BANK_BRANCH,
        PurchaseRequests.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseRequests.DOWN_PAYMENT,
        PurchaseRequests.LANGUAGE_CODE,
        PurchaseRequests.TRACKING_NUMBER,
        PurchaseRequests.PICK_REMARK,
        PurchaseRequests.CLOSING_DATE,
        PurchaseRequests.SEQUENCE_CODE,
        PurchaseRequests.SEQUENCE_SERIAL,
        PurchaseRequests.SERIES_STRING,
        PurchaseRequests.SUB_SERIES_STRING,
        PurchaseRequests.SEQUENCE_MODEL,
        PurchaseRequests.TOTAL_DISCOUNT,
        PurchaseRequests.DOWN_PAYMENT_AMOUNT,
        PurchaseRequests.DOWN_PAYMENT_PERCENTAGE,
        PurchaseRequests.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseRequests.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseRequests.VAT_PERCENT,
        PurchaseRequests.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseRequests.OPENING_REMARKS,
        PurchaseRequests.CLOSING_REMARKS,
        PurchaseRequests.ROUNDING_DIFF_AMOUNT,
        PurchaseRequests.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseRequests.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseRequests.SIGNATURE_INPUT_MESSAGE,
        PurchaseRequests.SIGNATURE_DIGEST,
        PurchaseRequests.CERTIFICATION_NUMBER,
        PurchaseRequests.PRIVATE_KEY_VERSION,
        PurchaseRequests.CONTROL_ACCOUNT,
        PurchaseRequests.GTS_CHECKER,
        PurchaseRequests.GTS_PAYEE,
        PurchaseRequests.EXTRA_MONTH,
        PurchaseRequests.EXTRA_DAYS,
        PurchaseRequests.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseRequests.E_TAX_WEB_SITE,
        PurchaseRequests.E_TAX_NUMBER,
        PurchaseRequests.NTS_APPROVED_NUMBER,
        PurchaseRequests.E_DOC_SERIES,
        PurchaseRequests.E_DOC_NUM,
        PurchaseRequests.E_DOC_EXPORT_FORMAT,
        PurchaseRequests.E_DOC_ERROR_CODE,
        PurchaseRequests.E_DOC_ERROR_MESSAGE,
        PurchaseRequests.GROUP_SERIES,
        PurchaseRequests.GROUP_NUMBER,
        PurchaseRequests.POS_EQUIPMENT_NUMBER,
        PurchaseRequests.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseRequests.POS_CASHIER_NUMBER,
        PurchaseRequests.SPECIFIED_CLOSING_DATE,
        PurchaseRequests.TOTAL_DISCOUNT_FC,
        PurchaseRequests.TOTAL_DISCOUNT_SC,
        PurchaseRequests.BPL_NAME,
        PurchaseRequests.VAT_REG_NUM,
        PurchaseRequests.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseRequests.SUPPLIER,
        PurchaseRequests.RELEASER,
        PurchaseRequests.RECEIVER,
        PurchaseRequests.BLANKET_AGREEMENT_NUMBER,
        PurchaseRequests.ASSET_VALUE_DATE,
        PurchaseRequests.REQUESTER,
        PurchaseRequests.REQUESTER_NAME,
        PurchaseRequests.REQUESTER_BRANCH,
        PurchaseRequests.REQUESTER_DEPARTMENT,
        PurchaseRequests.REQUESTER_EMAIL,
        PurchaseRequests.REQ_TYPE,
        PurchaseRequests.AUTHORIZATION_CODE,
        PurchaseRequests.START_DELIVERY_DATE,
        PurchaseRequests.START_DELIVERY_TIME,
        PurchaseRequests.END_DELIVERY_DATE,
        PurchaseRequests.END_DELIVERY_TIME,
        PurchaseRequests.VEHICLE_PLATE,
        PurchaseRequests.AT_DOCUMENT_TYPE,
        PurchaseRequests.ELEC_COMM_MESSAGE,
        PurchaseRequests.FISCAL_DOC_NUM,
        PurchaseRequests.POS_DAILY_SUMMARY_NO,
        PurchaseRequests.POS_RECEIPT_NO,
        PurchaseRequests.POINT_OF_ISSUE_CODE,
        PurchaseRequests.FOLIO_NUMBER_FROM,
        PurchaseRequests.FOLIO_NUMBER_TO,
        PurchaseRequests.RELATED_TYPE,
        PurchaseRequests.RELATED_ENTRY,
        PurchaseRequests.DOCUMENT_TAX_ID,
        PurchaseRequests.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseRequests.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseRequests.POS_CASH_REGISTER,
        PurchaseRequests.UPDATE_TIME,
        PurchaseRequests.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseRequests.ORIGINAL_REF_NO,
        PurchaseRequests.ORIGINAL_REF_DATE,
        PurchaseRequests.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseRequests.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseRequests.E_COMMERCE_OPERATOR,
        PurchaseRequests.E_COMMERCE_GSTIN,
        PurchaseRequests.TAX_INVOICE_NO,
        PurchaseRequests.TAX_INVOICE_DATE,
        PurchaseRequests.SHIP_FROM,
        PurchaseRequests.ISSUING_REASON,
        PurchaseRequests.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseRequests.DOCUMENT_LINES,
        PurchaseRequests.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseRequests.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseRequests.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseRequests.DOCUMENT_PACKAGES,
        PurchaseRequests.DOCUMENT_SPECIAL_LINES,
        PurchaseRequests.DOCUMENT_INSTALLMENTS,
        PurchaseRequests.DOWN_PAYMENTS_TO_DRAW,
        PurchaseRequests.TAX_EXTENSION,
        PurchaseRequests.ADDRESS_EXTENSION,
        PurchaseRequests.SOI_WIZARD_ID,
        PurchaseRequests.BUSINESS_PARTNER,
        PurchaseRequests.CURRENCY,
        PurchaseRequests.PAYMENT_TERMS_TYPE,
        PurchaseRequests.SALES_PERSON,
        PurchaseRequests.SHIPPING_TYPE,
        PurchaseRequests.FACTORING_INDICATOR,
        PurchaseRequests.FORMS_1099,
        PurchaseRequests.WIZARD_PAYMENT_METHOD,
        PurchaseRequests.PAYMENT_BLOCK_2,
        PurchaseRequests.PROJECT_2,
        PurchaseRequests.EMPLOYEE_INFO,
        PurchaseRequests.COUNTRY,
        PurchaseRequests.BUSINESS_PLACE,
        PurchaseRequests.USER_LANGUAGE,
        PurchaseRequests.NF_MODEL,
        PurchaseRequests.CHART_OF_ACCOUNT,
        PurchaseRequests.TAX_WEB_SITE,
        PurchaseRequests.BRANCH,
        PurchaseRequests.DEPARTMENT,
        PurchaseRequests.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseRequests.ALL_FIELDS = new v4_1.AllFields('*', PurchaseRequests);
    /**
     * All key fields of the PurchaseRequests entity.
     */
    PurchaseRequests._keyFields = [PurchaseRequests.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseRequests.
     */
    PurchaseRequests._keys = PurchaseRequests._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseRequests = exports.PurchaseRequests || (exports.PurchaseRequests = {}));
exports.PurchaseRequests = PurchaseRequests;
//# sourceMappingURL=PurchaseRequests.js.map