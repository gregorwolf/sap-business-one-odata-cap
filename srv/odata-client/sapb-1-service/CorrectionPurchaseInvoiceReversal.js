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
exports.CorrectionPurchaseInvoiceReversal = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CorrectionPurchaseInvoiceReversalRequestBuilder_1 = require("./CorrectionPurchaseInvoiceReversalRequestBuilder");
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
 * This class represents the entity "CorrectionPurchaseInvoiceReversal" of service "SAPB1".
 */
var CorrectionPurchaseInvoiceReversal = /** @class */ (function (_super) {
    __extends(CorrectionPurchaseInvoiceReversal, _super);
    function CorrectionPurchaseInvoiceReversal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CorrectionPurchaseInvoiceReversal`.
     * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoiceReversal`.
     */
    CorrectionPurchaseInvoiceReversal.builder = function () {
        return v4_1.Entity.entityBuilder(CorrectionPurchaseInvoiceReversal);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CorrectionPurchaseInvoiceReversal` entity type.
     * @returns A `CorrectionPurchaseInvoiceReversal` request builder.
     */
    CorrectionPurchaseInvoiceReversal.requestBuilder = function () {
        return new CorrectionPurchaseInvoiceReversalRequestBuilder_1.CorrectionPurchaseInvoiceReversalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CorrectionPurchaseInvoiceReversal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoiceReversal`.
     */
    CorrectionPurchaseInvoiceReversal.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, CorrectionPurchaseInvoiceReversal);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CorrectionPurchaseInvoiceReversal.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CorrectionPurchaseInvoiceReversal.
     */
    CorrectionPurchaseInvoiceReversal._entityName = 'CorrectionPurchaseInvoiceReversal';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CorrectionPurchaseInvoiceReversal.
     */
    CorrectionPurchaseInvoiceReversal._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    CorrectionPurchaseInvoiceReversal._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CorrectionPurchaseInvoiceReversal;
}(v4_1.Entity));
exports.CorrectionPurchaseInvoiceReversal = CorrectionPurchaseInvoiceReversal;
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
(function (CorrectionPurchaseInvoiceReversal) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_ENTRY = new v4_1.NumberField('DocEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_NUM = new v4_1.NumberField('DocNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_DATE = new v4_1.DateField('DocDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CARD_CODE = new v4_1.StringField('CardCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CARD_NAME = new v4_1.StringField('CardName', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ADDRESS = new v4_1.StringField('Address', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NUM_AT_CARD = new v4_1.StringField('NumAtCard', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_TOTAL = new v4_1.NumberField('DocTotal', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_CURRENCY = new v4_1.StringField('DocCurrency', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_RATE = new v4_1.NumberField('DocRate', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REFERENCE_1 = new v4_1.StringField('Reference1', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REFERENCE_2 = new v4_1.StringField('Reference2', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.COMMENTS = new v4_1.StringField('Comments', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_TIME = new v4_1.TimeField('DocTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SERIES = new v4_1.NumberField('Series', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_DATE = new v4_1.DateField('TaxDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.INDICATOR = new v4_1.StringField('Indicator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CREATION_DATE = new v4_1.DateField('CreationDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.UPDATE_DATE = new v4_1.DateField('UpdateDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TRANS_NUM = new v4_1.NumberField('TransNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_SUM = new v4_1.NumberField('VatSum', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FORM_1099 = new v4_1.NumberField('Form1099', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BOX_1099 = new v4_1.StringField('Box1099', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQURIED_DATE = new v4_1.DateField('RequriedDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CANCEL_DATE = new v4_1.DateField('CancelDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SEGMENT = new v4_1.NumberField('Segment', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PROJECT = new v4_1.StringField('Project', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_APPLIED = new v4_1.NumberField('WTApplied', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.AGENT_CODE = new v4_1.StringField('AgentCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_AMOUNT = new v4_1.NumberField('WTAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_DATE = new v4_1.DateField('VatDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ADDRESS_2 = new v4_1.StringField('Address2', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_CODE = new v4_1.StringField('PayToCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PICK_REMARK = new v4_1.StringField('PickRemark', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CLOSING_DATE = new v4_1.DateField('ClosingDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SERIES_STRING = new v4_1.StringField('SeriesString', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_PERCENT = new v4_1.NumberField('VatPercent', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GTS_CHECKER = new v4_1.NumberField('GTSChecker', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GTS_PAYEE = new v4_1.NumberField('GTSPayee', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_NUM = new v4_1.StringField('EDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GROUP_SERIES = new v4_1.NumberField('GroupSeries', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BPL_NAME = new v4_1.StringField('BPLName', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_REG_NUM = new v4_1.StringField('VATRegNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SUPPLIER = new v4_1.StringField('Supplier', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RELEASER = new v4_1.NumberField('Releaser', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RECEIVER = new v4_1.NumberField('Receiver', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER = new v4_1.StringField('Requester', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER_NAME = new v4_1.StringField('RequesterName', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQ_TYPE = new v4_1.NumberField('ReqType', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RELATED_TYPE = new v4_1.NumberField('RelatedType', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.UPDATE_TIME = new v4_1.TimeField('UpdateTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SHIP_FROM = new v4_1.StringField('ShipFrom', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ISSUING_REASON = new v4_1.NumberField('IssuingReason', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', CorrectionPurchaseInvoiceReversal, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', CorrectionPurchaseInvoiceReversal));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', CorrectionPurchaseInvoiceReversal, new DocumentLine_1.DocumentLineField('', CorrectionPurchaseInvoiceReversal));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', CorrectionPurchaseInvoiceReversal, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', CorrectionPurchaseInvoiceReversal));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', CorrectionPurchaseInvoiceReversal, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', CorrectionPurchaseInvoiceReversal));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', CorrectionPurchaseInvoiceReversal, new WithholdingTaxData_1.WithholdingTaxDataField('', CorrectionPurchaseInvoiceReversal));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', CorrectionPurchaseInvoiceReversal, new DocumentPackage_1.DocumentPackageField('', CorrectionPurchaseInvoiceReversal));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', CorrectionPurchaseInvoiceReversal, new DocumentSpecialLine_1.DocumentSpecialLineField('', CorrectionPurchaseInvoiceReversal));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', CorrectionPurchaseInvoiceReversal, new DocumentInstallment_1.DocumentInstallmentField('', CorrectionPurchaseInvoiceReversal));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', CorrectionPurchaseInvoiceReversal, new DownPaymentToDraw_1.DownPaymentToDrawField('', CorrectionPurchaseInvoiceReversal));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', CorrectionPurchaseInvoiceReversal, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CURRENCY = new v4_1.OneToOneLink('Currency', CorrectionPurchaseInvoiceReversal, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', CorrectionPurchaseInvoiceReversal, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', CorrectionPurchaseInvoiceReversal, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', CorrectionPurchaseInvoiceReversal, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', CorrectionPurchaseInvoiceReversal, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', CorrectionPurchaseInvoiceReversal, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', CorrectionPurchaseInvoiceReversal, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', CorrectionPurchaseInvoiceReversal, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', CorrectionPurchaseInvoiceReversal, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PROJECT_2 = new v4_1.OneToOneLink('Project2', CorrectionPurchaseInvoiceReversal, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', CorrectionPurchaseInvoiceReversal, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.COUNTRY = new v4_1.OneToOneLink('Country', CorrectionPurchaseInvoiceReversal, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', CorrectionPurchaseInvoiceReversal, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', CorrectionPurchaseInvoiceReversal, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NF_MODEL = new v4_1.OneToOneLink('NFModel', CorrectionPurchaseInvoiceReversal, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', CorrectionPurchaseInvoiceReversal, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', CorrectionPurchaseInvoiceReversal, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BRANCH = new v4_1.OneToOneLink('Branch', CorrectionPurchaseInvoiceReversal, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DEPARTMENT = new v4_1.OneToOneLink('Department', CorrectionPurchaseInvoiceReversal, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', CorrectionPurchaseInvoiceReversal, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the CorrectionPurchaseInvoiceReversal entity.
     */
    CorrectionPurchaseInvoiceReversal._allFields = [
        CorrectionPurchaseInvoiceReversal.DOC_ENTRY,
        CorrectionPurchaseInvoiceReversal.DOC_NUM,
        CorrectionPurchaseInvoiceReversal.DOC_DATE,
        CorrectionPurchaseInvoiceReversal.DOC_DUE_DATE,
        CorrectionPurchaseInvoiceReversal.CARD_CODE,
        CorrectionPurchaseInvoiceReversal.CARD_NAME,
        CorrectionPurchaseInvoiceReversal.ADDRESS,
        CorrectionPurchaseInvoiceReversal.NUM_AT_CARD,
        CorrectionPurchaseInvoiceReversal.DOC_TOTAL,
        CorrectionPurchaseInvoiceReversal.ATTACHMENT_ENTRY,
        CorrectionPurchaseInvoiceReversal.DOC_CURRENCY,
        CorrectionPurchaseInvoiceReversal.DOC_RATE,
        CorrectionPurchaseInvoiceReversal.REFERENCE_1,
        CorrectionPurchaseInvoiceReversal.REFERENCE_2,
        CorrectionPurchaseInvoiceReversal.COMMENTS,
        CorrectionPurchaseInvoiceReversal.JOURNAL_MEMO,
        CorrectionPurchaseInvoiceReversal.PAYMENT_GROUP_CODE,
        CorrectionPurchaseInvoiceReversal.DOC_TIME,
        CorrectionPurchaseInvoiceReversal.SALES_PERSON_CODE,
        CorrectionPurchaseInvoiceReversal.TRANSPORTATION_CODE,
        CorrectionPurchaseInvoiceReversal.IMPORT_FILE_NUM,
        CorrectionPurchaseInvoiceReversal.CONTACT_PERSON_CODE,
        CorrectionPurchaseInvoiceReversal.SERIES,
        CorrectionPurchaseInvoiceReversal.TAX_DATE,
        CorrectionPurchaseInvoiceReversal.SHIP_TO_CODE,
        CorrectionPurchaseInvoiceReversal.INDICATOR,
        CorrectionPurchaseInvoiceReversal.FEDERAL_TAX_ID,
        CorrectionPurchaseInvoiceReversal.DISCOUNT_PERCENT,
        CorrectionPurchaseInvoiceReversal.PAYMENT_REFERENCE,
        CorrectionPurchaseInvoiceReversal.CREATION_DATE,
        CorrectionPurchaseInvoiceReversal.UPDATE_DATE,
        CorrectionPurchaseInvoiceReversal.FINANCIAL_PERIOD,
        CorrectionPurchaseInvoiceReversal.TRANS_NUM,
        CorrectionPurchaseInvoiceReversal.VAT_SUM,
        CorrectionPurchaseInvoiceReversal.VAT_SUM_SYS,
        CorrectionPurchaseInvoiceReversal.VAT_SUM_FC,
        CorrectionPurchaseInvoiceReversal.DOC_TOTAL_FC,
        CorrectionPurchaseInvoiceReversal.DOC_TOTAL_SYS,
        CorrectionPurchaseInvoiceReversal.FORM_1099,
        CorrectionPurchaseInvoiceReversal.BOX_1099,
        CorrectionPurchaseInvoiceReversal.REQURIED_DATE,
        CorrectionPurchaseInvoiceReversal.CANCEL_DATE,
        CorrectionPurchaseInvoiceReversal.SEGMENT,
        CorrectionPurchaseInvoiceReversal.PAYMENT_METHOD,
        CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_ENTRY,
        CorrectionPurchaseInvoiceReversal.CENTRAL_BANK_INDICATOR,
        CorrectionPurchaseInvoiceReversal.PROJECT,
        CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_FROM,
        CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_TO,
        CorrectionPurchaseInvoiceReversal.EXTERNAL_CORRECTED_DOC_NUM,
        CorrectionPurchaseInvoiceReversal.INTERNAL_CORRECTED_DOC_NUM,
        CorrectionPurchaseInvoiceReversal.NEXT_CORRECTING_DOCUMENT,
        CorrectionPurchaseInvoiceReversal.TAX_EXEMPTION_LETTER_NUM,
        CorrectionPurchaseInvoiceReversal.WT_APPLIED,
        CorrectionPurchaseInvoiceReversal.WT_APPLIED_FC,
        CorrectionPurchaseInvoiceReversal.AGENT_CODE,
        CorrectionPurchaseInvoiceReversal.WT_APPLIED_SC,
        CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX,
        CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_FC,
        CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_SC,
        CorrectionPurchaseInvoiceReversal.NUMBER_OF_INSTALLMENTS,
        CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT,
        CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT,
        CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.BASE_AMOUNT,
        CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.WT_AMOUNT,
        CorrectionPurchaseInvoiceReversal.WT_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.WT_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.VAT_DATE,
        CorrectionPurchaseInvoiceReversal.DOCUMENTS_OWNER,
        CorrectionPurchaseInvoiceReversal.FOLIO_PREFIX_STRING,
        CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER,
        CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CODE,
        CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CONTACT,
        CorrectionPurchaseInvoiceReversal.ADDRESS_2,
        CorrectionPurchaseInvoiceReversal.PERIOD_INDICATOR,
        CorrectionPurchaseInvoiceReversal.PAY_TO_CODE,
        CorrectionPurchaseInvoiceReversal.MANUAL_NUMBER,
        CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_COUNTRY,
        CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_CODE,
        CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_ACCOUNT_NO,
        CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_BRANCH,
        CorrectionPurchaseInvoiceReversal.BPL_ID_ASSIGNED_TO_INVOICE,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT,
        CorrectionPurchaseInvoiceReversal.LANGUAGE_CODE,
        CorrectionPurchaseInvoiceReversal.TRACKING_NUMBER,
        CorrectionPurchaseInvoiceReversal.PICK_REMARK,
        CorrectionPurchaseInvoiceReversal.CLOSING_DATE,
        CorrectionPurchaseInvoiceReversal.SEQUENCE_CODE,
        CorrectionPurchaseInvoiceReversal.SEQUENCE_SERIAL,
        CorrectionPurchaseInvoiceReversal.SERIES_STRING,
        CorrectionPurchaseInvoiceReversal.SUB_SERIES_STRING,
        CorrectionPurchaseInvoiceReversal.SEQUENCE_MODEL,
        CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_PERCENTAGE,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.VAT_PERCENT,
        CorrectionPurchaseInvoiceReversal.SERVICE_GROSS_PROFIT_PERCENT,
        CorrectionPurchaseInvoiceReversal.OPENING_REMARKS,
        CorrectionPurchaseInvoiceReversal.CLOSING_REMARKS,
        CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT,
        CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.SIGNATURE_INPUT_MESSAGE,
        CorrectionPurchaseInvoiceReversal.SIGNATURE_DIGEST,
        CorrectionPurchaseInvoiceReversal.CERTIFICATION_NUMBER,
        CorrectionPurchaseInvoiceReversal.PRIVATE_KEY_VERSION,
        CorrectionPurchaseInvoiceReversal.CONTROL_ACCOUNT,
        CorrectionPurchaseInvoiceReversal.GTS_CHECKER,
        CorrectionPurchaseInvoiceReversal.GTS_PAYEE,
        CorrectionPurchaseInvoiceReversal.EXTRA_MONTH,
        CorrectionPurchaseInvoiceReversal.EXTRA_DAYS,
        CorrectionPurchaseInvoiceReversal.CASH_DISCOUNT_DATE_OFFSET,
        CorrectionPurchaseInvoiceReversal.E_TAX_WEB_SITE,
        CorrectionPurchaseInvoiceReversal.E_TAX_NUMBER,
        CorrectionPurchaseInvoiceReversal.NTS_APPROVED_NUMBER,
        CorrectionPurchaseInvoiceReversal.E_DOC_SERIES,
        CorrectionPurchaseInvoiceReversal.E_DOC_NUM,
        CorrectionPurchaseInvoiceReversal.E_DOC_EXPORT_FORMAT,
        CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_CODE,
        CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_MESSAGE,
        CorrectionPurchaseInvoiceReversal.GROUP_SERIES,
        CorrectionPurchaseInvoiceReversal.GROUP_NUMBER,
        CorrectionPurchaseInvoiceReversal.POS_EQUIPMENT_NUMBER,
        CorrectionPurchaseInvoiceReversal.POS_MANUFACTURER_SERIAL_NUMBER,
        CorrectionPurchaseInvoiceReversal.POS_CASHIER_NUMBER,
        CorrectionPurchaseInvoiceReversal.SPECIFIED_CLOSING_DATE,
        CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_FC,
        CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_SC,
        CorrectionPurchaseInvoiceReversal.BPL_NAME,
        CorrectionPurchaseInvoiceReversal.VAT_REG_NUM,
        CorrectionPurchaseInvoiceReversal.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        CorrectionPurchaseInvoiceReversal.SUPPLIER,
        CorrectionPurchaseInvoiceReversal.RELEASER,
        CorrectionPurchaseInvoiceReversal.RECEIVER,
        CorrectionPurchaseInvoiceReversal.BLANKET_AGREEMENT_NUMBER,
        CorrectionPurchaseInvoiceReversal.ASSET_VALUE_DATE,
        CorrectionPurchaseInvoiceReversal.REQUESTER,
        CorrectionPurchaseInvoiceReversal.REQUESTER_NAME,
        CorrectionPurchaseInvoiceReversal.REQUESTER_BRANCH,
        CorrectionPurchaseInvoiceReversal.REQUESTER_DEPARTMENT,
        CorrectionPurchaseInvoiceReversal.REQUESTER_EMAIL,
        CorrectionPurchaseInvoiceReversal.REQ_TYPE,
        CorrectionPurchaseInvoiceReversal.AUTHORIZATION_CODE,
        CorrectionPurchaseInvoiceReversal.START_DELIVERY_DATE,
        CorrectionPurchaseInvoiceReversal.START_DELIVERY_TIME,
        CorrectionPurchaseInvoiceReversal.END_DELIVERY_DATE,
        CorrectionPurchaseInvoiceReversal.END_DELIVERY_TIME,
        CorrectionPurchaseInvoiceReversal.VEHICLE_PLATE,
        CorrectionPurchaseInvoiceReversal.AT_DOCUMENT_TYPE,
        CorrectionPurchaseInvoiceReversal.ELEC_COMM_MESSAGE,
        CorrectionPurchaseInvoiceReversal.FISCAL_DOC_NUM,
        CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY_NO,
        CorrectionPurchaseInvoiceReversal.POS_RECEIPT_NO,
        CorrectionPurchaseInvoiceReversal.POINT_OF_ISSUE_CODE,
        CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_FROM,
        CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_TO,
        CorrectionPurchaseInvoiceReversal.RELATED_TYPE,
        CorrectionPurchaseInvoiceReversal.RELATED_ENTRY,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_TAX_ID,
        CorrectionPurchaseInvoiceReversal.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        CorrectionPurchaseInvoiceReversal.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        CorrectionPurchaseInvoiceReversal.POS_CASH_REGISTER,
        CorrectionPurchaseInvoiceReversal.UPDATE_TIME,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_TRASACTION_ID,
        CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_NO,
        CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_DATE,
        CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_NO,
        CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        CorrectionPurchaseInvoiceReversal.E_COMMERCE_OPERATOR,
        CorrectionPurchaseInvoiceReversal.E_COMMERCE_GSTIN,
        CorrectionPurchaseInvoiceReversal.TAX_INVOICE_NO,
        CorrectionPurchaseInvoiceReversal.TAX_INVOICE_DATE,
        CorrectionPurchaseInvoiceReversal.SHIP_FROM,
        CorrectionPurchaseInvoiceReversal.ISSUING_REASON,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_APPROVAL_REQUESTS,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_LINES,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_ADDITIONAL_EXPENSES,
        CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_COLLECTION,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_PACKAGES,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_SPECIAL_LINES,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_INSTALLMENTS,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENTS_TO_DRAW,
        CorrectionPurchaseInvoiceReversal.TAX_EXTENSION,
        CorrectionPurchaseInvoiceReversal.ADDRESS_EXTENSION,
        CorrectionPurchaseInvoiceReversal.SOI_WIZARD_ID,
        CorrectionPurchaseInvoiceReversal.BUSINESS_PARTNER,
        CorrectionPurchaseInvoiceReversal.CURRENCY,
        CorrectionPurchaseInvoiceReversal.PAYMENT_TERMS_TYPE,
        CorrectionPurchaseInvoiceReversal.SALES_PERSON,
        CorrectionPurchaseInvoiceReversal.SHIPPING_TYPE,
        CorrectionPurchaseInvoiceReversal.FACTORING_INDICATOR,
        CorrectionPurchaseInvoiceReversal.JOURNAL_ENTRY,
        CorrectionPurchaseInvoiceReversal.FORMS_1099,
        CorrectionPurchaseInvoiceReversal.WIZARD_PAYMENT_METHOD,
        CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_2,
        CorrectionPurchaseInvoiceReversal.PROJECT_2,
        CorrectionPurchaseInvoiceReversal.EMPLOYEE_INFO,
        CorrectionPurchaseInvoiceReversal.COUNTRY,
        CorrectionPurchaseInvoiceReversal.BUSINESS_PLACE,
        CorrectionPurchaseInvoiceReversal.USER_LANGUAGE,
        CorrectionPurchaseInvoiceReversal.NF_MODEL,
        CorrectionPurchaseInvoiceReversal.CHART_OF_ACCOUNT,
        CorrectionPurchaseInvoiceReversal.TAX_WEB_SITE,
        CorrectionPurchaseInvoiceReversal.BRANCH,
        CorrectionPurchaseInvoiceReversal.DEPARTMENT,
        CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    CorrectionPurchaseInvoiceReversal.ALL_FIELDS = new v4_1.AllFields('*', CorrectionPurchaseInvoiceReversal);
    /**
     * All key fields of the CorrectionPurchaseInvoiceReversal entity.
     */
    CorrectionPurchaseInvoiceReversal._keyFields = [CorrectionPurchaseInvoiceReversal.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property CorrectionPurchaseInvoiceReversal.
     */
    CorrectionPurchaseInvoiceReversal._keys = CorrectionPurchaseInvoiceReversal._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CorrectionPurchaseInvoiceReversal = exports.CorrectionPurchaseInvoiceReversal || (exports.CorrectionPurchaseInvoiceReversal = {}));
exports.CorrectionPurchaseInvoiceReversal = CorrectionPurchaseInvoiceReversal;
//# sourceMappingURL=CorrectionPurchaseInvoiceReversal.js.map