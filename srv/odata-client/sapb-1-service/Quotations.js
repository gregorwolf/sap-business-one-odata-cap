"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Quotations" of service "SAPB1".
 */
var Quotations = /** @class */ (function (_super) {
    __extends(Quotations, _super);
    function Quotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Quotations`.
     * @returns A builder that constructs instances of entity type `Quotations`.
     */
    Quotations.builder = function () {
        return core_1.EntityV4.entityBuilder(Quotations);
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
        return core_1.EntityV4.customFieldSelector(fieldName, Quotations);
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
     * Default url path for the according service.
     */
    Quotations._defaultServicePath = '/b1s/v2/';
    return Quotations;
}(core_1.EntityV4));
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
    Quotations.DOC_ENTRY = new core_1.NumberField('DocEntry', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_NUM = new core_1.NumberField('DocNum', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_TYPE = new core_1.EnumField('DocType', Quotations);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.HAND_WRITTEN = new core_1.EnumField('HandWritten', Quotations);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PRINTED = new core_1.EnumField('Printed', Quotations);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_DATE = new core_1.DateField('DocDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_DUE_DATE = new core_1.DateField('DocDueDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CARD_CODE = new core_1.StringField('CardCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CARD_NAME = new core_1.StringField('CardName', Quotations, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ADDRESS = new core_1.StringField('Address', Quotations, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NUM_AT_CARD = new core_1.StringField('NumAtCard', Quotations, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_TOTAL = new core_1.NumberField('DocTotal', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_CURRENCY = new core_1.StringField('DocCurrency', Quotations, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_RATE = new core_1.NumberField('DocRate', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REFERENCE_1 = new core_1.StringField('Reference1', Quotations, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REFERENCE_2 = new core_1.StringField('Reference2', Quotations, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.COMMENTS = new core_1.StringField('Comments', Quotations, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.JOURNAL_MEMO = new core_1.StringField('JournalMemo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_TIME = new core_1.TimeField('DocTime', Quotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CONFIRMED = new core_1.EnumField('Confirmed', Quotations);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SUMMERY_TYPE = new core_1.EnumField('SummeryType', Quotations);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SHOW_SCN = new core_1.EnumField('ShowSCN', Quotations);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SERIES = new core_1.NumberField('Series', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_DATE = new core_1.DateField('TaxDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', Quotations);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', Quotations);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SHIP_TO_CODE = new core_1.StringField('ShipToCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.INDICATOR = new core_1.StringField('Indicator', Quotations, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', Quotations, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', Quotations, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CREATION_DATE = new core_1.DateField('CreationDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.UPDATE_DATE = new core_1.DateField('UpdateDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TRANS_NUM = new core_1.NumberField('TransNum', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_SUM = new core_1.NumberField('VatSum', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_SUM_FC = new core_1.NumberField('VatSumFc', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NET_PROCEDURE = new core_1.EnumField('NetProcedure', Quotations);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FORM_1099 = new core_1.NumberField('Form1099', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BOX_1099 = new core_1.StringField('Box1099', Quotations, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REVISION_PO = new core_1.EnumField('RevisionPo', Quotations);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQURIED_DATE = new core_1.DateField('RequriedDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CANCEL_DATE = new core_1.DateField('CancelDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', Quotations);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SUBMITTED = new core_1.EnumField('Submitted', Quotations);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SEGMENT = new core_1.NumberField('Segment', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PICK_STATUS = new core_1.EnumField('PickStatus', Quotations);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PICK = new core_1.EnumField('Pick', Quotations);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', Quotations, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', Quotations);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', Quotations, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', Quotations);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RESERVE = new core_1.EnumField('Reserve', Quotations);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PROJECT = new core_1.StringField('Project', Quotations, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', Quotations);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ROUNDING = new core_1.EnumField('Rounding', Quotations);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DEFERRED_TAX = new core_1.EnumField('DeferredTax', Quotations);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_APPLIED = new core_1.NumberField('WTApplied', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', Quotations);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.AGENT_CODE = new core_1.StringField('AgentCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', Quotations);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BASE_AMOUNT = new core_1.NumberField('BaseAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_AMOUNT = new core_1.NumberField('WTAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_DATE = new core_1.DateField('VatDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', Quotations, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', Quotations);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ADDRESS_2 = new core_1.StringField('Address2', Quotations, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', Quotations);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', Quotations, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_CODE = new core_1.StringField('PayToCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.MANUAL_NUMBER = new core_1.StringField('ManualNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', Quotations);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', Quotations);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', Quotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', Quotations, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT = new core_1.NumberField('DownPayment', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', Quotations);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PICK_REMARK = new core_1.StringField('PickRemark', Quotations, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CLOSING_DATE = new core_1.DateField('ClosingDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SERIES_STRING = new core_1.StringField('SeriesString', Quotations, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', Quotations, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', Quotations, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', Quotations);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', Quotations);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_PERCENT = new core_1.NumberField('VatPercent', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', Quotations, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', Quotations, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CANCELLED = new core_1.EnumField('Cancelled', Quotations);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', Quotations, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', Quotations, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', Quotations, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', Quotations);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', Quotations);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GTS_CHECKER = new core_1.NumberField('GTSChecker', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GTS_PAYEE = new core_1.NumberField('GTSPayee', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXTRA_DAYS = new core_1.NumberField('ExtraDays', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.START_FROM = new core_1.EnumField('StartFrom', Quotations);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NTS_APPROVED = new core_1.EnumField('NTSApproved', Quotations);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', Quotations);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_SERIES = new core_1.NumberField('EDocSeries', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_NUM = new core_1.StringField('EDocNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_STATUS = new core_1.EnumField('EDocStatus', Quotations);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', Quotations, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', Quotations);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GROUP_SERIES = new core_1.NumberField('GroupSeries', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GROUP_NUMBER = new core_1.NumberField('GroupNumber', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', Quotations);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', Quotations);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', Quotations);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', Quotations);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', Quotations, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', Quotations);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CLOSING_OPTION = new core_1.EnumField('ClosingOption', Quotations);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', Quotations);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', Quotations);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', Quotations, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', Quotations);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BPL_NAME = new core_1.StringField('BPLName', Quotations, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VAT_REG_NUM = new core_1.StringField('VATRegNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SUPPLIER = new core_1.StringField('Supplier', Quotations, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RELEASER = new core_1.NumberField('Releaser', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RECEIVER = new core_1.NumberField('Receiver', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.IS_ALTERATION = new core_1.EnumField('IsAlteration', Quotations);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CANCEL_STATUS = new core_1.EnumField('CancelStatus', Quotations);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER = new core_1.StringField('Requester', Quotations, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER_NAME = new core_1.StringField('RequesterName', Quotations, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', Quotations, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', Quotations);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REQ_TYPE = new core_1.NumberField('ReqType', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', Quotations);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', Quotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', Quotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', Quotations, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', Quotations, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', Quotations);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', Quotations, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', Quotations);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', Quotations);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', Quotations);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', Quotations, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', Quotations, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.LETTER = new core_1.EnumField('Letter', Quotations);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.INTERIM_TYPE = new core_1.EnumField('InterimType', Quotations);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RELATED_TYPE = new core_1.NumberField('RelatedType', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', Quotations, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', Quotations, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', Quotations);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.UPDATE_TIME = new core_1.TimeField('UpdateTime', Quotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PRICE_MODE = new core_1.EnumField('PriceMode', Quotations);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', Quotations, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.REVISION = new core_1.EnumField('Revision', Quotations);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', Quotations);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', Quotations, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', Quotations, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', Quotations, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', Quotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SHIP_FROM = new core_1.StringField('ShipFrom', Quotations, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', Quotations);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', Quotations);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', Quotations);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.ISSUING_REASON = new core_1.NumberField('IssuingReason', Quotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', Quotations, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', Quotations, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', Quotations, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', Quotations, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', Quotations, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', Quotations, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', Quotations, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', Quotations, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', Quotations, DownPaymentToDraw_1.DownPaymentToDraw);
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
    Quotations.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', Quotations, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', Quotations, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CURRENCY = new core_1.OneToOneLink('Currency', Quotations, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', Quotations, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', Quotations, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', Quotations, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', Quotations, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.FORMS_1099 = new core_1.OneToOneLink('Forms1099', Quotations, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', Quotations, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', Quotations, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.PROJECT_2 = new core_1.OneToOneLink('Project2', Quotations, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', Quotations, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.COUNTRY = new core_1.OneToOneLink('Country', Quotations, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', Quotations, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', Quotations, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.NF_MODEL = new core_1.OneToOneLink('NFModel', Quotations, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', Quotations, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', Quotations, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.BRANCH = new core_1.OneToOneLink('Branch', Quotations, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.DEPARTMENT = new core_1.OneToOneLink('Department', Quotations, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Quotations.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', Quotations, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the Quotations entity.
     */
    Quotations._allFields = [
        Quotations.DOC_ENTRY,
        Quotations.DOC_NUM,
        Quotations.DOC_TYPE,
        Quotations.HAND_WRITTEN,
        Quotations.PRINTED,
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
        Quotations.CONFIRMED,
        Quotations.IMPORT_FILE_NUM,
        Quotations.SUMMERY_TYPE,
        Quotations.CONTACT_PERSON_CODE,
        Quotations.SHOW_SCN,
        Quotations.SERIES,
        Quotations.TAX_DATE,
        Quotations.PARTIAL_SUPPLY,
        Quotations.DOC_OBJECT_CODE,
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
        Quotations.NET_PROCEDURE,
        Quotations.DOC_TOTAL_FC,
        Quotations.DOC_TOTAL_SYS,
        Quotations.FORM_1099,
        Quotations.BOX_1099,
        Quotations.REVISION_PO,
        Quotations.REQURIED_DATE,
        Quotations.CANCEL_DATE,
        Quotations.BLOCK_DUNNING,
        Quotations.SUBMITTED,
        Quotations.SEGMENT,
        Quotations.PICK_STATUS,
        Quotations.PICK,
        Quotations.PAYMENT_METHOD,
        Quotations.PAYMENT_BLOCK,
        Quotations.PAYMENT_BLOCK_ENTRY,
        Quotations.CENTRAL_BANK_INDICATOR,
        Quotations.MAXIMUM_CASH_DISCOUNT,
        Quotations.RESERVE,
        Quotations.PROJECT,
        Quotations.EXEMPTION_VALIDITY_DATE_FROM,
        Quotations.EXEMPTION_VALIDITY_DATE_TO,
        Quotations.WARE_HOUSE_UPDATE_TYPE,
        Quotations.ROUNDING,
        Quotations.EXTERNAL_CORRECTED_DOC_NUM,
        Quotations.INTERNAL_CORRECTED_DOC_NUM,
        Quotations.NEXT_CORRECTING_DOCUMENT,
        Quotations.DEFERRED_TAX,
        Quotations.TAX_EXEMPTION_LETTER_NUM,
        Quotations.WT_APPLIED,
        Quotations.WT_APPLIED_FC,
        Quotations.BILL_OF_EXCHANGE_RESERVED,
        Quotations.AGENT_CODE,
        Quotations.WT_APPLIED_SC,
        Quotations.TOTAL_EQUALIZATION_TAX,
        Quotations.TOTAL_EQUALIZATION_TAX_FC,
        Quotations.TOTAL_EQUALIZATION_TAX_SC,
        Quotations.NUMBER_OF_INSTALLMENTS,
        Quotations.APPLY_TAX_ON_FIRST_INSTALLMENT,
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
        Quotations.DOCUMENT_SUB_TYPE,
        Quotations.BP_CHANNEL_CODE,
        Quotations.BP_CHANNEL_CONTACT,
        Quotations.ADDRESS_2,
        Quotations.DOCUMENT_STATUS,
        Quotations.PERIOD_INDICATOR,
        Quotations.PAY_TO_CODE,
        Quotations.MANUAL_NUMBER,
        Quotations.USE_SHPD_GOODS_ACT,
        Quotations.IS_PAY_TO_BANK,
        Quotations.PAY_TO_BANK_COUNTRY,
        Quotations.PAY_TO_BANK_CODE,
        Quotations.PAY_TO_BANK_ACCOUNT_NO,
        Quotations.PAY_TO_BANK_BRANCH,
        Quotations.BPL_ID_ASSIGNED_TO_INVOICE,
        Quotations.DOWN_PAYMENT,
        Quotations.RESERVE_INVOICE,
        Quotations.LANGUAGE_CODE,
        Quotations.TRACKING_NUMBER,
        Quotations.PICK_REMARK,
        Quotations.CLOSING_DATE,
        Quotations.SEQUENCE_CODE,
        Quotations.SEQUENCE_SERIAL,
        Quotations.SERIES_STRING,
        Quotations.SUB_SERIES_STRING,
        Quotations.SEQUENCE_MODEL,
        Quotations.USE_CORRECTION_VAT_GROUP,
        Quotations.TOTAL_DISCOUNT,
        Quotations.DOWN_PAYMENT_AMOUNT,
        Quotations.DOWN_PAYMENT_PERCENTAGE,
        Quotations.DOWN_PAYMENT_TYPE,
        Quotations.DOWN_PAYMENT_AMOUNT_SC,
        Quotations.DOWN_PAYMENT_AMOUNT_FC,
        Quotations.VAT_PERCENT,
        Quotations.SERVICE_GROSS_PROFIT_PERCENT,
        Quotations.OPENING_REMARKS,
        Quotations.CLOSING_REMARKS,
        Quotations.ROUNDING_DIFF_AMOUNT,
        Quotations.ROUNDING_DIFF_AMOUNT_FC,
        Quotations.ROUNDING_DIFF_AMOUNT_SC,
        Quotations.CANCELLED,
        Quotations.SIGNATURE_INPUT_MESSAGE,
        Quotations.SIGNATURE_DIGEST,
        Quotations.CERTIFICATION_NUMBER,
        Quotations.PRIVATE_KEY_VERSION,
        Quotations.CONTROL_ACCOUNT,
        Quotations.INSURANCE_OPERATION_347,
        Quotations.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        Quotations.GTS_CHECKER,
        Quotations.GTS_PAYEE,
        Quotations.EXTRA_MONTH,
        Quotations.EXTRA_DAYS,
        Quotations.CASH_DISCOUNT_DATE_OFFSET,
        Quotations.START_FROM,
        Quotations.NTS_APPROVED,
        Quotations.E_TAX_WEB_SITE,
        Quotations.E_TAX_NUMBER,
        Quotations.NTS_APPROVED_NUMBER,
        Quotations.E_DOC_GENERATION_TYPE,
        Quotations.E_DOC_SERIES,
        Quotations.E_DOC_NUM,
        Quotations.E_DOC_EXPORT_FORMAT,
        Quotations.E_DOC_STATUS,
        Quotations.E_DOC_ERROR_CODE,
        Quotations.E_DOC_ERROR_MESSAGE,
        Quotations.DOWN_PAYMENT_STATUS,
        Quotations.GROUP_SERIES,
        Quotations.GROUP_NUMBER,
        Quotations.GROUP_HAND_WRITTEN,
        Quotations.REOPEN_ORIGINAL_DOCUMENT,
        Quotations.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        Quotations.CREATE_ONLINE_QUOTATION,
        Quotations.POS_EQUIPMENT_NUMBER,
        Quotations.POS_MANUFACTURER_SERIAL_NUMBER,
        Quotations.POS_CASHIER_NUMBER,
        Quotations.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        Quotations.CLOSING_OPTION,
        Quotations.SPECIFIED_CLOSING_DATE,
        Quotations.OPEN_FOR_LANDED_COSTS,
        Quotations.AUTHORIZATION_STATUS,
        Quotations.TOTAL_DISCOUNT_FC,
        Quotations.TOTAL_DISCOUNT_SC,
        Quotations.RELEVANT_TO_GTS,
        Quotations.BPL_NAME,
        Quotations.VAT_REG_NUM,
        Quotations.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        Quotations.SUPPLIER,
        Quotations.RELEASER,
        Quotations.RECEIVER,
        Quotations.BLANKET_AGREEMENT_NUMBER,
        Quotations.IS_ALTERATION,
        Quotations.CANCEL_STATUS,
        Quotations.ASSET_VALUE_DATE,
        Quotations.REQUESTER,
        Quotations.REQUESTER_NAME,
        Quotations.REQUESTER_BRANCH,
        Quotations.REQUESTER_DEPARTMENT,
        Quotations.REQUESTER_EMAIL,
        Quotations.SEND_NOTIFICATION,
        Quotations.REQ_TYPE,
        Quotations.DOCUMENT_DELIVERY,
        Quotations.AUTHORIZATION_CODE,
        Quotations.START_DELIVERY_DATE,
        Quotations.START_DELIVERY_TIME,
        Quotations.END_DELIVERY_DATE,
        Quotations.END_DELIVERY_TIME,
        Quotations.VEHICLE_PLATE,
        Quotations.AT_DOCUMENT_TYPE,
        Quotations.ELEC_COMM_STATUS,
        Quotations.ELEC_COMM_MESSAGE,
        Quotations.REUSE_DOCUMENT_NUM,
        Quotations.REUSE_NOTA_FISCAL_NUM,
        Quotations.PRINT_SEPA_DIRECT,
        Quotations.FISCAL_DOC_NUM,
        Quotations.POS_DAILY_SUMMARY_NO,
        Quotations.POS_RECEIPT_NO,
        Quotations.POINT_OF_ISSUE_CODE,
        Quotations.LETTER,
        Quotations.FOLIO_NUMBER_FROM,
        Quotations.FOLIO_NUMBER_TO,
        Quotations.INTERIM_TYPE,
        Quotations.RELATED_TYPE,
        Quotations.RELATED_ENTRY,
        Quotations.DOCUMENT_TAX_ID,
        Quotations.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        Quotations.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        Quotations.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        Quotations.POS_CASH_REGISTER,
        Quotations.UPDATE_TIME,
        Quotations.PRICE_MODE,
        Quotations.DOWN_PAYMENT_TRASACTION_ID,
        Quotations.REVISION,
        Quotations.ORIGINAL_REF_NO,
        Quotations.ORIGINAL_REF_DATE,
        Quotations.GST_TRANSACTION_TYPE,
        Quotations.ORIGINAL_CREDIT_OR_DEBIT_NO,
        Quotations.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        Quotations.E_COMMERCE_OPERATOR,
        Quotations.E_COMMERCE_GSTIN,
        Quotations.TAX_INVOICE_NO,
        Quotations.TAX_INVOICE_DATE,
        Quotations.SHIP_FROM,
        Quotations.COMMISSION_TRADE,
        Quotations.COMMISSION_TRADE_RETURN,
        Quotations.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
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
    Quotations.ALL_FIELDS = new core_1.AllFields('*', Quotations);
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