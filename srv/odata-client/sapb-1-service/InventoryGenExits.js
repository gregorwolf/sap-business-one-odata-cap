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
exports.InventoryGenExits = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryGenExitsRequestBuilder_1 = require("./InventoryGenExitsRequestBuilder");
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
 * This class represents the entity "InventoryGenExits" of service "SAPB1".
 */
var InventoryGenExits = /** @class */ (function (_super) {
    __extends(InventoryGenExits, _super);
    function InventoryGenExits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InventoryGenExits`.
     * @returns A builder that constructs instances of entity type `InventoryGenExits`.
     */
    InventoryGenExits.builder = function () {
        return v4_1.Entity.entityBuilder(InventoryGenExits);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InventoryGenExits` entity type.
     * @returns A `InventoryGenExits` request builder.
     */
    InventoryGenExits.requestBuilder = function () {
        return new InventoryGenExitsRequestBuilder_1.InventoryGenExitsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryGenExits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryGenExits`.
     */
    InventoryGenExits.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, InventoryGenExits);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InventoryGenExits.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InventoryGenExits.
     */
    InventoryGenExits._entityName = 'InventoryGenExits';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InventoryGenExits.
     */
    InventoryGenExits._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    InventoryGenExits._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InventoryGenExits;
}(v4_1.Entity));
exports.InventoryGenExits = InventoryGenExits;
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
(function (InventoryGenExits) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_ENTRY = new v4_1.NumberField('DocEntry', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_NUM = new v4_1.NumberField('DocNum', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_DATE = new v4_1.DateField('DocDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_DUE_DATE = new v4_1.DateField('DocDueDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CARD_CODE = new v4_1.StringField('CardCode', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CARD_NAME = new v4_1.StringField('CardName', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ADDRESS = new v4_1.StringField('Address', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.NUM_AT_CARD = new v4_1.StringField('NumAtCard', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_TOTAL = new v4_1.NumberField('DocTotal', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_CURRENCY = new v4_1.StringField('DocCurrency', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_RATE = new v4_1.NumberField('DocRate', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REFERENCE_1 = new v4_1.StringField('Reference1', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REFERENCE_2 = new v4_1.StringField('Reference2', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.COMMENTS = new v4_1.StringField('Comments', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAYMENT_GROUP_CODE = new v4_1.NumberField('PaymentGroupCode', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_TIME = new v4_1.TimeField('DocTime', InventoryGenExits, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TRANSPORTATION_CODE = new v4_1.NumberField('TransportationCode', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.IMPORT_FILE_NUM = new v4_1.NumberField('ImportFileNum', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SERIES = new v4_1.NumberField('Series', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TAX_DATE = new v4_1.DateField('TaxDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.INDICATOR = new v4_1.StringField('Indicator', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAYMENT_REFERENCE = new v4_1.StringField('PaymentReference', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CREATION_DATE = new v4_1.DateField('CreationDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.UPDATE_DATE = new v4_1.DateField('UpdateDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TRANS_NUM = new v4_1.NumberField('TransNum', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.VAT_SUM = new v4_1.NumberField('VatSum', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.VAT_SUM_SYS = new v4_1.NumberField('VatSumSys', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.VAT_SUM_FC = new v4_1.NumberField('VatSumFc', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_TOTAL_FC = new v4_1.NumberField('DocTotalFc', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOC_TOTAL_SYS = new v4_1.NumberField('DocTotalSys', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FORM_1099 = new v4_1.NumberField('Form1099', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BOX_1099 = new v4_1.StringField('Box1099', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REQURIED_DATE = new v4_1.DateField('RequriedDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CANCEL_DATE = new v4_1.DateField('CancelDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SEGMENT = new v4_1.NumberField('Segment', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAYMENT_METHOD = new v4_1.StringField('PaymentMethod', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAYMENT_BLOCK_ENTRY = new v4_1.NumberField('PaymentBlockEntry', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CENTRAL_BANK_INDICATOR = new v4_1.StringField('CentralBankIndicator', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PROJECT = new v4_1.StringField('Project', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.EXTERNAL_CORRECTED_DOC_NUM = new v4_1.StringField('ExternalCorrectedDocNum', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.INTERNAL_CORRECTED_DOC_NUM = new v4_1.NumberField('InternalCorrectedDocNum', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.NEXT_CORRECTING_DOCUMENT = new v4_1.NumberField('NextCorrectingDocument', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_APPLIED = new v4_1.NumberField('WTApplied', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_APPLIED_FC = new v4_1.NumberField('WTAppliedFC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.AGENT_CODE = new v4_1.StringField('AgentCode', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_APPLIED_SC = new v4_1.NumberField('WTAppliedSC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TOTAL_EQUALIZATION_TAX = new v4_1.NumberField('TotalEqualizationTax', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TOTAL_EQUALIZATION_TAX_FC = new v4_1.NumberField('TotalEqualizationTaxFC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TOTAL_EQUALIZATION_TAX_SC = new v4_1.NumberField('TotalEqualizationTaxSC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_NON_SUBJECT_AMOUNT = new v4_1.NumberField('WTNonSubjectAmount', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_NON_SUBJECT_AMOUNT_SC = new v4_1.NumberField('WTNonSubjectAmountSC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_NON_SUBJECT_AMOUNT_FC = new v4_1.NumberField('WTNonSubjectAmountFC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_EXEMPTED_AMOUNT = new v4_1.NumberField('WTExemptedAmount', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_EXEMPTED_AMOUNT_SC = new v4_1.NumberField('WTExemptedAmountSC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_EXEMPTED_AMOUNT_FC = new v4_1.NumberField('WTExemptedAmountFC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BASE_AMOUNT = new v4_1.NumberField('BaseAmount', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BASE_AMOUNT_SC = new v4_1.NumberField('BaseAmountSC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BASE_AMOUNT_FC = new v4_1.NumberField('BaseAmountFC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_AMOUNT = new v4_1.NumberField('WTAmount', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_AMOUNT_SC = new v4_1.NumberField('WTAmountSC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WT_AMOUNT_FC = new v4_1.NumberField('WTAmountFC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.VAT_DATE = new v4_1.DateField('VatDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOCUMENTS_OWNER = new v4_1.NumberField('DocumentsOwner', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BP_CHANNEL_CODE = new v4_1.StringField('BPChannelCode', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ADDRESS_2 = new v4_1.StringField('Address2', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PERIOD_INDICATOR = new v4_1.StringField('PeriodIndicator', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAY_TO_CODE = new v4_1.StringField('PayToCode', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.MANUAL_NUMBER = new v4_1.StringField('ManualNumber', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAY_TO_BANK_COUNTRY = new v4_1.StringField('PayToBankCountry', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAY_TO_BANK_CODE = new v4_1.StringField('PayToBankCode', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAY_TO_BANK_ACCOUNT_NO = new v4_1.StringField('PayToBankAccountNo', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAY_TO_BANK_BRANCH = new v4_1.StringField('PayToBankBranch', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BPL_ID_ASSIGNED_TO_INVOICE = new v4_1.NumberField('BPL_IDAssignedToInvoice', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOWN_PAYMENT = new v4_1.NumberField('DownPayment', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TRACKING_NUMBER = new v4_1.StringField('TrackingNumber', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PICK_REMARK = new v4_1.StringField('PickRemark', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CLOSING_DATE = new v4_1.DateField('ClosingDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SEQUENCE_CODE = new v4_1.NumberField('SequenceCode', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SEQUENCE_SERIAL = new v4_1.NumberField('SequenceSerial', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SERIES_STRING = new v4_1.StringField('SeriesString', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SUB_SERIES_STRING = new v4_1.StringField('SubSeriesString', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SEQUENCE_MODEL = new v4_1.StringField('SequenceModel', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TOTAL_DISCOUNT = new v4_1.NumberField('TotalDiscount', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOWN_PAYMENT_AMOUNT = new v4_1.NumberField('DownPaymentAmount', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOWN_PAYMENT_PERCENTAGE = new v4_1.NumberField('DownPaymentPercentage', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOWN_PAYMENT_AMOUNT_SC = new v4_1.NumberField('DownPaymentAmountSC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOWN_PAYMENT_AMOUNT_FC = new v4_1.NumberField('DownPaymentAmountFC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.VAT_PERCENT = new v4_1.NumberField('VatPercent', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SERVICE_GROSS_PROFIT_PERCENT = new v4_1.NumberField('ServiceGrossProfitPercent', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.OPENING_REMARKS = new v4_1.StringField('OpeningRemarks', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CLOSING_REMARKS = new v4_1.StringField('ClosingRemarks', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ROUNDING_DIFF_AMOUNT = new v4_1.NumberField('RoundingDiffAmount', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ROUNDING_DIFF_AMOUNT_FC = new v4_1.NumberField('RoundingDiffAmountFC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ROUNDING_DIFF_AMOUNT_SC = new v4_1.NumberField('RoundingDiffAmountSC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SIGNATURE_INPUT_MESSAGE = new v4_1.StringField('SignatureInputMessage', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SIGNATURE_DIGEST = new v4_1.StringField('SignatureDigest', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CERTIFICATION_NUMBER = new v4_1.StringField('CertificationNumber', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PRIVATE_KEY_VERSION = new v4_1.NumberField('PrivateKeyVersion', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CONTROL_ACCOUNT = new v4_1.StringField('ControlAccount', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.GTS_CHECKER = new v4_1.NumberField('GTSChecker', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.GTS_PAYEE = new v4_1.NumberField('GTSPayee', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.EXTRA_MONTH = new v4_1.NumberField('ExtraMonth', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.EXTRA_DAYS = new v4_1.NumberField('ExtraDays', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CASH_DISCOUNT_DATE_OFFSET = new v4_1.NumberField('CashDiscountDateOffset', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.E_TAX_NUMBER = new v4_1.StringField('ETaxNumber', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.NTS_APPROVED_NUMBER = new v4_1.StringField('NTSApprovedNumber', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.E_DOC_SERIES = new v4_1.NumberField('EDocSeries', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.E_DOC_NUM = new v4_1.StringField('EDocNum', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.E_DOC_ERROR_CODE = new v4_1.StringField('EDocErrorCode', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.E_DOC_ERROR_MESSAGE = new v4_1.StringField('EDocErrorMessage', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.GROUP_SERIES = new v4_1.NumberField('GroupSeries', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.POS_EQUIPMENT_NUMBER = new v4_1.StringField('POSEquipmentNumber', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.POS_MANUFACTURER_SERIAL_NUMBER = new v4_1.StringField('POSManufacturerSerialNumber', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.POS_CASHIER_NUMBER = new v4_1.NumberField('POSCashierNumber', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SPECIFIED_CLOSING_DATE = new v4_1.DateField('SpecifiedClosingDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TOTAL_DISCOUNT_FC = new v4_1.NumberField('TotalDiscountFC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TOTAL_DISCOUNT_SC = new v4_1.NumberField('TotalDiscountSC', InventoryGenExits, 'Edm.Double');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BPL_NAME = new v4_1.StringField('BPLName', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.VAT_REG_NUM = new v4_1.StringField('VATRegNum', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ANNUAL_INVOICE_DECLARATION_REFERENCE = new v4_1.NumberField('AnnualInvoiceDeclarationReference', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SUPPLIER = new v4_1.StringField('Supplier', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.RELEASER = new v4_1.NumberField('Releaser', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.RECEIVER = new v4_1.NumberField('Receiver', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('BlanketAgreementNumber', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REQUESTER = new v4_1.StringField('Requester', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REQUESTER_NAME = new v4_1.StringField('RequesterName', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REQUESTER_BRANCH = new v4_1.NumberField('RequesterBranch', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REQUESTER_DEPARTMENT = new v4_1.NumberField('RequesterDepartment', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REQUESTER_EMAIL = new v4_1.StringField('RequesterEmail', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REQ_TYPE = new v4_1.NumberField('ReqType', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', InventoryGenExits, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', InventoryGenExits, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FISCAL_DOC_NUM = new v4_1.StringField('FiscalDocNum', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.POS_DAILY_SUMMARY_NO = new v4_1.NumberField('POSDailySummaryNo', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.POS_RECEIPT_NO = new v4_1.NumberField('POSReceiptNo', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.RELATED_TYPE = new v4_1.NumberField('RelatedType', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.RELATED_ENTRY = new v4_1.NumberField('RelatedEntry', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOCUMENT_TAX_ID = new v4_1.StringField('DocumentTaxID', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new v4_1.DateField('DateOfReportingControlStatementVAT', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new v4_1.StringField('ReportingSectionControlStatementVAT', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.POS_CASH_REGISTER = new v4_1.NumberField('POS_CashRegister', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.UPDATE_TIME = new v4_1.TimeField('UpdateTime', InventoryGenExits, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOWN_PAYMENT_TRASACTION_ID = new v4_1.StringField('DownPaymentTrasactionID', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ORIGINAL_REF_NO = new v4_1.StringField('OriginalRefNo', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ORIGINAL_REF_DATE = new v4_1.DateField('OriginalRefDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ORIGINAL_CREDIT_OR_DEBIT_NO = new v4_1.StringField('OriginalCreditOrDebitNo', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ORIGINAL_CREDIT_OR_DEBIT_DATE = new v4_1.DateField('OriginalCreditOrDebitDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.E_COMMERCE_OPERATOR = new v4_1.StringField('ECommerceOperator', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.E_COMMERCE_GSTIN = new v4_1.StringField('ECommerceGSTIN', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TAX_INVOICE_NO = new v4_1.StringField('TaxInvoiceNo', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TAX_INVOICE_DATE = new v4_1.DateField('TaxInvoiceDate', InventoryGenExits, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SHIP_FROM = new v4_1.StringField('ShipFrom', InventoryGenExits, 'Edm.String');
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ISSUING_REASON = new v4_1.NumberField('IssuingReason', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOCUMENT_APPROVAL_REQUESTS = new v4_1.CollectionField('Document_ApprovalRequests', InventoryGenExits, new DocumentApprovalRequest_1.DocumentApprovalRequestField('', InventoryGenExits));
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOCUMENT_LINES = new v4_1.CollectionField('DocumentLines', InventoryGenExits, new DocumentLine_1.DocumentLineField('', InventoryGenExits));
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOCUMENT_ADDITIONAL_EXPENSES = new v4_1.CollectionField('DocumentAdditionalExpenses', InventoryGenExits, new DocumentAdditionalExpense_1.DocumentAdditionalExpenseField('', InventoryGenExits));
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataWTXCollection', InventoryGenExits, new WithholdingTaxDataWtx_1.WithholdingTaxDataWtxField('', InventoryGenExits));
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WITHHOLDING_TAX_DATA_COLLECTION = new v4_1.CollectionField('WithholdingTaxDataCollection', InventoryGenExits, new WithholdingTaxData_1.WithholdingTaxDataField('', InventoryGenExits));
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOCUMENT_PACKAGES = new v4_1.CollectionField('DocumentPackages', InventoryGenExits, new DocumentPackage_1.DocumentPackageField('', InventoryGenExits));
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOCUMENT_SPECIAL_LINES = new v4_1.CollectionField('DocumentSpecialLines', InventoryGenExits, new DocumentSpecialLine_1.DocumentSpecialLineField('', InventoryGenExits));
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOCUMENT_INSTALLMENTS = new v4_1.CollectionField('DocumentInstallments', InventoryGenExits, new DocumentInstallment_1.DocumentInstallmentField('', InventoryGenExits));
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DOWN_PAYMENTS_TO_DRAW = new v4_1.CollectionField('DownPaymentsToDraw', InventoryGenExits, new DownPaymentToDraw_1.DownPaymentToDrawField('', InventoryGenExits));
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', InventoryGenExits);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', InventoryGenExits);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SOI_WIZARD_ID = new v4_1.NumberField('SOIWizardId', InventoryGenExits, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', InventoryGenExits, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CURRENCY = new v4_1.OneToOneLink('Currency', InventoryGenExits, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', InventoryGenExits, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', InventoryGenExits, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', InventoryGenExits, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', InventoryGenExits, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', InventoryGenExits, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', InventoryGenExits, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', InventoryGenExits, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', InventoryGenExits, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.PROJECT_2 = new v4_1.OneToOneLink('Project2', InventoryGenExits, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', InventoryGenExits, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.COUNTRY = new v4_1.OneToOneLink('Country', InventoryGenExits, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', InventoryGenExits, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', InventoryGenExits, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.NF_MODEL = new v4_1.OneToOneLink('NFModel', InventoryGenExits, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', InventoryGenExits, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', InventoryGenExits, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.BRANCH = new v4_1.OneToOneLink('Branch', InventoryGenExits, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.DEPARTMENT = new v4_1.OneToOneLink('Department', InventoryGenExits, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryGenExits.POS_DAILY_SUMMARY = new v4_1.OneToOneLink('POSDailySummary', InventoryGenExits, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the InventoryGenExits entity.
     */
    InventoryGenExits._allFields = [
        InventoryGenExits.DOC_ENTRY,
        InventoryGenExits.DOC_NUM,
        InventoryGenExits.DOC_DATE,
        InventoryGenExits.DOC_DUE_DATE,
        InventoryGenExits.CARD_CODE,
        InventoryGenExits.CARD_NAME,
        InventoryGenExits.ADDRESS,
        InventoryGenExits.NUM_AT_CARD,
        InventoryGenExits.DOC_TOTAL,
        InventoryGenExits.ATTACHMENT_ENTRY,
        InventoryGenExits.DOC_CURRENCY,
        InventoryGenExits.DOC_RATE,
        InventoryGenExits.REFERENCE_1,
        InventoryGenExits.REFERENCE_2,
        InventoryGenExits.COMMENTS,
        InventoryGenExits.JOURNAL_MEMO,
        InventoryGenExits.PAYMENT_GROUP_CODE,
        InventoryGenExits.DOC_TIME,
        InventoryGenExits.SALES_PERSON_CODE,
        InventoryGenExits.TRANSPORTATION_CODE,
        InventoryGenExits.IMPORT_FILE_NUM,
        InventoryGenExits.CONTACT_PERSON_CODE,
        InventoryGenExits.SERIES,
        InventoryGenExits.TAX_DATE,
        InventoryGenExits.SHIP_TO_CODE,
        InventoryGenExits.INDICATOR,
        InventoryGenExits.FEDERAL_TAX_ID,
        InventoryGenExits.DISCOUNT_PERCENT,
        InventoryGenExits.PAYMENT_REFERENCE,
        InventoryGenExits.CREATION_DATE,
        InventoryGenExits.UPDATE_DATE,
        InventoryGenExits.FINANCIAL_PERIOD,
        InventoryGenExits.TRANS_NUM,
        InventoryGenExits.VAT_SUM,
        InventoryGenExits.VAT_SUM_SYS,
        InventoryGenExits.VAT_SUM_FC,
        InventoryGenExits.DOC_TOTAL_FC,
        InventoryGenExits.DOC_TOTAL_SYS,
        InventoryGenExits.FORM_1099,
        InventoryGenExits.BOX_1099,
        InventoryGenExits.REQURIED_DATE,
        InventoryGenExits.CANCEL_DATE,
        InventoryGenExits.SEGMENT,
        InventoryGenExits.PAYMENT_METHOD,
        InventoryGenExits.PAYMENT_BLOCK_ENTRY,
        InventoryGenExits.CENTRAL_BANK_INDICATOR,
        InventoryGenExits.PROJECT,
        InventoryGenExits.EXEMPTION_VALIDITY_DATE_FROM,
        InventoryGenExits.EXEMPTION_VALIDITY_DATE_TO,
        InventoryGenExits.EXTERNAL_CORRECTED_DOC_NUM,
        InventoryGenExits.INTERNAL_CORRECTED_DOC_NUM,
        InventoryGenExits.NEXT_CORRECTING_DOCUMENT,
        InventoryGenExits.TAX_EXEMPTION_LETTER_NUM,
        InventoryGenExits.WT_APPLIED,
        InventoryGenExits.WT_APPLIED_FC,
        InventoryGenExits.AGENT_CODE,
        InventoryGenExits.WT_APPLIED_SC,
        InventoryGenExits.TOTAL_EQUALIZATION_TAX,
        InventoryGenExits.TOTAL_EQUALIZATION_TAX_FC,
        InventoryGenExits.TOTAL_EQUALIZATION_TAX_SC,
        InventoryGenExits.NUMBER_OF_INSTALLMENTS,
        InventoryGenExits.WT_NON_SUBJECT_AMOUNT,
        InventoryGenExits.WT_NON_SUBJECT_AMOUNT_SC,
        InventoryGenExits.WT_NON_SUBJECT_AMOUNT_FC,
        InventoryGenExits.WT_EXEMPTED_AMOUNT,
        InventoryGenExits.WT_EXEMPTED_AMOUNT_SC,
        InventoryGenExits.WT_EXEMPTED_AMOUNT_FC,
        InventoryGenExits.BASE_AMOUNT,
        InventoryGenExits.BASE_AMOUNT_SC,
        InventoryGenExits.BASE_AMOUNT_FC,
        InventoryGenExits.WT_AMOUNT,
        InventoryGenExits.WT_AMOUNT_SC,
        InventoryGenExits.WT_AMOUNT_FC,
        InventoryGenExits.VAT_DATE,
        InventoryGenExits.DOCUMENTS_OWNER,
        InventoryGenExits.FOLIO_PREFIX_STRING,
        InventoryGenExits.FOLIO_NUMBER,
        InventoryGenExits.BP_CHANNEL_CODE,
        InventoryGenExits.BP_CHANNEL_CONTACT,
        InventoryGenExits.ADDRESS_2,
        InventoryGenExits.PERIOD_INDICATOR,
        InventoryGenExits.PAY_TO_CODE,
        InventoryGenExits.MANUAL_NUMBER,
        InventoryGenExits.PAY_TO_BANK_COUNTRY,
        InventoryGenExits.PAY_TO_BANK_CODE,
        InventoryGenExits.PAY_TO_BANK_ACCOUNT_NO,
        InventoryGenExits.PAY_TO_BANK_BRANCH,
        InventoryGenExits.BPL_ID_ASSIGNED_TO_INVOICE,
        InventoryGenExits.DOWN_PAYMENT,
        InventoryGenExits.LANGUAGE_CODE,
        InventoryGenExits.TRACKING_NUMBER,
        InventoryGenExits.PICK_REMARK,
        InventoryGenExits.CLOSING_DATE,
        InventoryGenExits.SEQUENCE_CODE,
        InventoryGenExits.SEQUENCE_SERIAL,
        InventoryGenExits.SERIES_STRING,
        InventoryGenExits.SUB_SERIES_STRING,
        InventoryGenExits.SEQUENCE_MODEL,
        InventoryGenExits.TOTAL_DISCOUNT,
        InventoryGenExits.DOWN_PAYMENT_AMOUNT,
        InventoryGenExits.DOWN_PAYMENT_PERCENTAGE,
        InventoryGenExits.DOWN_PAYMENT_AMOUNT_SC,
        InventoryGenExits.DOWN_PAYMENT_AMOUNT_FC,
        InventoryGenExits.VAT_PERCENT,
        InventoryGenExits.SERVICE_GROSS_PROFIT_PERCENT,
        InventoryGenExits.OPENING_REMARKS,
        InventoryGenExits.CLOSING_REMARKS,
        InventoryGenExits.ROUNDING_DIFF_AMOUNT,
        InventoryGenExits.ROUNDING_DIFF_AMOUNT_FC,
        InventoryGenExits.ROUNDING_DIFF_AMOUNT_SC,
        InventoryGenExits.SIGNATURE_INPUT_MESSAGE,
        InventoryGenExits.SIGNATURE_DIGEST,
        InventoryGenExits.CERTIFICATION_NUMBER,
        InventoryGenExits.PRIVATE_KEY_VERSION,
        InventoryGenExits.CONTROL_ACCOUNT,
        InventoryGenExits.GTS_CHECKER,
        InventoryGenExits.GTS_PAYEE,
        InventoryGenExits.EXTRA_MONTH,
        InventoryGenExits.EXTRA_DAYS,
        InventoryGenExits.CASH_DISCOUNT_DATE_OFFSET,
        InventoryGenExits.E_TAX_WEB_SITE,
        InventoryGenExits.E_TAX_NUMBER,
        InventoryGenExits.NTS_APPROVED_NUMBER,
        InventoryGenExits.E_DOC_SERIES,
        InventoryGenExits.E_DOC_NUM,
        InventoryGenExits.E_DOC_EXPORT_FORMAT,
        InventoryGenExits.E_DOC_ERROR_CODE,
        InventoryGenExits.E_DOC_ERROR_MESSAGE,
        InventoryGenExits.GROUP_SERIES,
        InventoryGenExits.GROUP_NUMBER,
        InventoryGenExits.POS_EQUIPMENT_NUMBER,
        InventoryGenExits.POS_MANUFACTURER_SERIAL_NUMBER,
        InventoryGenExits.POS_CASHIER_NUMBER,
        InventoryGenExits.SPECIFIED_CLOSING_DATE,
        InventoryGenExits.TOTAL_DISCOUNT_FC,
        InventoryGenExits.TOTAL_DISCOUNT_SC,
        InventoryGenExits.BPL_NAME,
        InventoryGenExits.VAT_REG_NUM,
        InventoryGenExits.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        InventoryGenExits.SUPPLIER,
        InventoryGenExits.RELEASER,
        InventoryGenExits.RECEIVER,
        InventoryGenExits.BLANKET_AGREEMENT_NUMBER,
        InventoryGenExits.ASSET_VALUE_DATE,
        InventoryGenExits.REQUESTER,
        InventoryGenExits.REQUESTER_NAME,
        InventoryGenExits.REQUESTER_BRANCH,
        InventoryGenExits.REQUESTER_DEPARTMENT,
        InventoryGenExits.REQUESTER_EMAIL,
        InventoryGenExits.REQ_TYPE,
        InventoryGenExits.AUTHORIZATION_CODE,
        InventoryGenExits.START_DELIVERY_DATE,
        InventoryGenExits.START_DELIVERY_TIME,
        InventoryGenExits.END_DELIVERY_DATE,
        InventoryGenExits.END_DELIVERY_TIME,
        InventoryGenExits.VEHICLE_PLATE,
        InventoryGenExits.AT_DOCUMENT_TYPE,
        InventoryGenExits.ELEC_COMM_MESSAGE,
        InventoryGenExits.FISCAL_DOC_NUM,
        InventoryGenExits.POS_DAILY_SUMMARY_NO,
        InventoryGenExits.POS_RECEIPT_NO,
        InventoryGenExits.POINT_OF_ISSUE_CODE,
        InventoryGenExits.FOLIO_NUMBER_FROM,
        InventoryGenExits.FOLIO_NUMBER_TO,
        InventoryGenExits.RELATED_TYPE,
        InventoryGenExits.RELATED_ENTRY,
        InventoryGenExits.DOCUMENT_TAX_ID,
        InventoryGenExits.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        InventoryGenExits.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        InventoryGenExits.POS_CASH_REGISTER,
        InventoryGenExits.UPDATE_TIME,
        InventoryGenExits.DOWN_PAYMENT_TRASACTION_ID,
        InventoryGenExits.ORIGINAL_REF_NO,
        InventoryGenExits.ORIGINAL_REF_DATE,
        InventoryGenExits.ORIGINAL_CREDIT_OR_DEBIT_NO,
        InventoryGenExits.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        InventoryGenExits.E_COMMERCE_OPERATOR,
        InventoryGenExits.E_COMMERCE_GSTIN,
        InventoryGenExits.TAX_INVOICE_NO,
        InventoryGenExits.TAX_INVOICE_DATE,
        InventoryGenExits.SHIP_FROM,
        InventoryGenExits.ISSUING_REASON,
        InventoryGenExits.DOCUMENT_APPROVAL_REQUESTS,
        InventoryGenExits.DOCUMENT_LINES,
        InventoryGenExits.DOCUMENT_ADDITIONAL_EXPENSES,
        InventoryGenExits.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        InventoryGenExits.WITHHOLDING_TAX_DATA_COLLECTION,
        InventoryGenExits.DOCUMENT_PACKAGES,
        InventoryGenExits.DOCUMENT_SPECIAL_LINES,
        InventoryGenExits.DOCUMENT_INSTALLMENTS,
        InventoryGenExits.DOWN_PAYMENTS_TO_DRAW,
        InventoryGenExits.TAX_EXTENSION,
        InventoryGenExits.ADDRESS_EXTENSION,
        InventoryGenExits.SOI_WIZARD_ID,
        InventoryGenExits.BUSINESS_PARTNER,
        InventoryGenExits.CURRENCY,
        InventoryGenExits.PAYMENT_TERMS_TYPE,
        InventoryGenExits.SALES_PERSON,
        InventoryGenExits.SHIPPING_TYPE,
        InventoryGenExits.FACTORING_INDICATOR,
        InventoryGenExits.JOURNAL_ENTRY,
        InventoryGenExits.FORMS_1099,
        InventoryGenExits.WIZARD_PAYMENT_METHOD,
        InventoryGenExits.PAYMENT_BLOCK_2,
        InventoryGenExits.PROJECT_2,
        InventoryGenExits.EMPLOYEE_INFO,
        InventoryGenExits.COUNTRY,
        InventoryGenExits.BUSINESS_PLACE,
        InventoryGenExits.USER_LANGUAGE,
        InventoryGenExits.NF_MODEL,
        InventoryGenExits.CHART_OF_ACCOUNT,
        InventoryGenExits.TAX_WEB_SITE,
        InventoryGenExits.BRANCH,
        InventoryGenExits.DEPARTMENT,
        InventoryGenExits.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    InventoryGenExits.ALL_FIELDS = new v4_1.AllFields('*', InventoryGenExits);
    /**
     * All key fields of the InventoryGenExits entity.
     */
    InventoryGenExits._keyFields = [InventoryGenExits.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property InventoryGenExits.
     */
    InventoryGenExits._keys = InventoryGenExits._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InventoryGenExits = exports.InventoryGenExits || (exports.InventoryGenExits = {}));
exports.InventoryGenExits = InventoryGenExits;
//# sourceMappingURL=InventoryGenExits.js.map