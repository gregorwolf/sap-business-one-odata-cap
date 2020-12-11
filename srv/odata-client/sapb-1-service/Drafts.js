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
exports.Drafts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DraftsRequestBuilder_1 = require("./DraftsRequestBuilder");
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
 * This class represents the entity "Drafts" of service "SAPB1".
 */
var Drafts = /** @class */ (function (_super) {
    __extends(Drafts, _super);
    function Drafts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Drafts`.
     * @returns A builder that constructs instances of entity type `Drafts`.
     */
    Drafts.builder = function () {
        return core_1.EntityV4.entityBuilder(Drafts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Drafts` entity type.
     * @returns A `Drafts` request builder.
     */
    Drafts.requestBuilder = function () {
        return new DraftsRequestBuilder_1.DraftsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Drafts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Drafts`.
     */
    Drafts.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Drafts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Drafts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Drafts.
     */
    Drafts._entityName = 'Drafts';
    /**
     * Default url path for the according service.
     */
    Drafts._defaultServicePath = '/b1s/v2/';
    return Drafts;
}(core_1.EntityV4));
exports.Drafts = Drafts;
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
(function (Drafts) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_ENTRY = new core_1.NumberField('DocEntry', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_NUM = new core_1.NumberField('DocNum', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_TYPE = new core_1.EnumField('DocType', Drafts);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.HAND_WRITTEN = new core_1.EnumField('HandWritten', Drafts);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PRINTED = new core_1.EnumField('Printed', Drafts);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_DATE = new core_1.DateField('DocDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_DUE_DATE = new core_1.DateField('DocDueDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CARD_CODE = new core_1.StringField('CardCode', Drafts, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CARD_NAME = new core_1.StringField('CardName', Drafts, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ADDRESS = new core_1.StringField('Address', Drafts, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.NUM_AT_CARD = new core_1.StringField('NumAtCard', Drafts, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_TOTAL = new core_1.NumberField('DocTotal', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_CURRENCY = new core_1.StringField('DocCurrency', Drafts, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_RATE = new core_1.NumberField('DocRate', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REFERENCE_1 = new core_1.StringField('Reference1', Drafts, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REFERENCE_2 = new core_1.StringField('Reference2', Drafts, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.COMMENTS = new core_1.StringField('Comments', Drafts, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.JOURNAL_MEMO = new core_1.StringField('JournalMemo', Drafts, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_TIME = new core_1.TimeField('DocTime', Drafts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CONFIRMED = new core_1.EnumField('Confirmed', Drafts);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SUMMERY_TYPE = new core_1.EnumField('SummeryType', Drafts);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SHOW_SCN = new core_1.EnumField('ShowSCN', Drafts);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SERIES = new core_1.NumberField('Series', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TAX_DATE = new core_1.DateField('TaxDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', Drafts);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', Drafts);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SHIP_TO_CODE = new core_1.StringField('ShipToCode', Drafts, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.INDICATOR = new core_1.StringField('Indicator', Drafts, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', Drafts, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', Drafts, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CREATION_DATE = new core_1.DateField('CreationDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.UPDATE_DATE = new core_1.DateField('UpdateDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TRANS_NUM = new core_1.NumberField('TransNum', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.VAT_SUM = new core_1.NumberField('VatSum', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.VAT_SUM_FC = new core_1.NumberField('VatSumFc', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.NET_PROCEDURE = new core_1.EnumField('NetProcedure', Drafts);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FORM_1099 = new core_1.NumberField('Form1099', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BOX_1099 = new core_1.StringField('Box1099', Drafts, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REVISION_PO = new core_1.EnumField('RevisionPo', Drafts);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REQURIED_DATE = new core_1.DateField('RequriedDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CANCEL_DATE = new core_1.DateField('CancelDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', Drafts);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SUBMITTED = new core_1.EnumField('Submitted', Drafts);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SEGMENT = new core_1.NumberField('Segment', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PICK_STATUS = new core_1.EnumField('PickStatus', Drafts);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PICK = new core_1.EnumField('Pick', Drafts);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', Drafts, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', Drafts);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', Drafts, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', Drafts);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.RESERVE = new core_1.EnumField('Reserve', Drafts);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PROJECT = new core_1.StringField('Project', Drafts, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', Drafts);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ROUNDING = new core_1.EnumField('Rounding', Drafts);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', Drafts, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DEFERRED_TAX = new core_1.EnumField('DeferredTax', Drafts);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', Drafts, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_APPLIED = new core_1.NumberField('WTApplied', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', Drafts);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.AGENT_CODE = new core_1.StringField('AgentCode', Drafts, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', Drafts);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BASE_AMOUNT = new core_1.NumberField('BaseAmount', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_AMOUNT = new core_1.NumberField('WTAmount', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.VAT_DATE = new core_1.DateField('VatDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', Drafts, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', Drafts);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', Drafts, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ADDRESS_2 = new core_1.StringField('Address2', Drafts, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', Drafts);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', Drafts, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAY_TO_CODE = new core_1.StringField('PayToCode', Drafts, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.MANUAL_NUMBER = new core_1.StringField('ManualNumber', Drafts, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', Drafts);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', Drafts);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', Drafts, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', Drafts, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', Drafts, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', Drafts, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOWN_PAYMENT = new core_1.NumberField('DownPayment', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', Drafts);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', Drafts, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PICK_REMARK = new core_1.StringField('PickRemark', Drafts, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CLOSING_DATE = new core_1.DateField('ClosingDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SERIES_STRING = new core_1.StringField('SeriesString', Drafts, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', Drafts, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', Drafts, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', Drafts);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', Drafts);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.VAT_PERCENT = new core_1.NumberField('VatPercent', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', Drafts, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', Drafts, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CANCELLED = new core_1.EnumField('Cancelled', Drafts);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', Drafts, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', Drafts, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', Drafts, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', Drafts, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', Drafts);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', Drafts);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.GTS_CHECKER = new core_1.NumberField('GTSChecker', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.GTS_PAYEE = new core_1.NumberField('GTSPayee', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.EXTRA_DAYS = new core_1.NumberField('ExtraDays', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.START_FROM = new core_1.EnumField('StartFrom', Drafts);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.NTS_APPROVED = new core_1.EnumField('NTSApproved', Drafts);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', Drafts, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', Drafts, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', Drafts);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_DOC_SERIES = new core_1.NumberField('EDocSeries', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_DOC_NUM = new core_1.StringField('EDocNum', Drafts, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_DOC_STATUS = new core_1.EnumField('EDocStatus', Drafts);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', Drafts, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', Drafts, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', Drafts);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.GROUP_SERIES = new core_1.NumberField('GroupSeries', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.GROUP_NUMBER = new core_1.NumberField('GroupNumber', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', Drafts);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', Drafts);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', Drafts);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', Drafts);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', Drafts, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', Drafts, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', Drafts);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CLOSING_OPTION = new core_1.EnumField('ClosingOption', Drafts);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', Drafts);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', Drafts);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', Drafts, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', Drafts);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BPL_NAME = new core_1.StringField('BPLName', Drafts, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.VAT_REG_NUM = new core_1.StringField('VATRegNum', Drafts, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SUPPLIER = new core_1.StringField('Supplier', Drafts, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.RELEASER = new core_1.NumberField('Releaser', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.RECEIVER = new core_1.NumberField('Receiver', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.IS_ALTERATION = new core_1.EnumField('IsAlteration', Drafts);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CANCEL_STATUS = new core_1.EnumField('CancelStatus', Drafts);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REQUESTER = new core_1.StringField('Requester', Drafts, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REQUESTER_NAME = new core_1.StringField('RequesterName', Drafts, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', Drafts, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', Drafts);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REQ_TYPE = new core_1.NumberField('ReqType', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', Drafts);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', Drafts, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', Drafts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', Drafts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', Drafts, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', Drafts, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', Drafts);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', Drafts, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', Drafts);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', Drafts);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', Drafts);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', Drafts, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', Drafts, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.LETTER = new core_1.EnumField('Letter', Drafts);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.INTERIM_TYPE = new core_1.EnumField('InterimType', Drafts);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.RELATED_TYPE = new core_1.NumberField('RelatedType', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', Drafts, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', Drafts, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', Drafts);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.UPDATE_TIME = new core_1.TimeField('UpdateTime', Drafts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PRICE_MODE = new core_1.EnumField('PriceMode', Drafts);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', Drafts, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.REVISION = new core_1.EnumField('Revision', Drafts);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', Drafts, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', Drafts);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', Drafts, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', Drafts, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', Drafts, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', Drafts, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', Drafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SHIP_FROM = new core_1.StringField('ShipFrom', Drafts, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', Drafts);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', Drafts);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', Drafts);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ISSUING_REASON = new core_1.NumberField('IssuingReason', Drafts, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', Drafts, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', Drafts, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', Drafts, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', Drafts, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', Drafts, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', Drafts, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', Drafts, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', Drafts, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', Drafts, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', Drafts);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', Drafts);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', Drafts, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', Drafts, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CURRENCY = new core_1.OneToOneLink('Currency', Drafts, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', Drafts, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', Drafts, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', Drafts, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', Drafts, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', Drafts, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.FORMS_1099 = new core_1.OneToOneLink('Forms1099', Drafts, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', Drafts, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', Drafts, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.PROJECT_2 = new core_1.OneToOneLink('Project2', Drafts, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', Drafts, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.COUNTRY = new core_1.OneToOneLink('Country', Drafts, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', Drafts, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', Drafts, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.NF_MODEL = new core_1.OneToOneLink('NFModel', Drafts, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', Drafts, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', Drafts, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.BRANCH = new core_1.OneToOneLink('Branch', Drafts, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.DEPARTMENT = new core_1.OneToOneLink('Department', Drafts, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Drafts.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', Drafts, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the Drafts entity.
     */
    Drafts._allFields = [
        Drafts.DOC_ENTRY,
        Drafts.DOC_NUM,
        Drafts.DOC_TYPE,
        Drafts.HAND_WRITTEN,
        Drafts.PRINTED,
        Drafts.DOC_DATE,
        Drafts.DOC_DUE_DATE,
        Drafts.CARD_CODE,
        Drafts.CARD_NAME,
        Drafts.ADDRESS,
        Drafts.NUM_AT_CARD,
        Drafts.DOC_TOTAL,
        Drafts.ATTACHMENT_ENTRY,
        Drafts.DOC_CURRENCY,
        Drafts.DOC_RATE,
        Drafts.REFERENCE_1,
        Drafts.REFERENCE_2,
        Drafts.COMMENTS,
        Drafts.JOURNAL_MEMO,
        Drafts.PAYMENT_GROUP_CODE,
        Drafts.DOC_TIME,
        Drafts.SALES_PERSON_CODE,
        Drafts.TRANSPORTATION_CODE,
        Drafts.CONFIRMED,
        Drafts.IMPORT_FILE_NUM,
        Drafts.SUMMERY_TYPE,
        Drafts.CONTACT_PERSON_CODE,
        Drafts.SHOW_SCN,
        Drafts.SERIES,
        Drafts.TAX_DATE,
        Drafts.PARTIAL_SUPPLY,
        Drafts.DOC_OBJECT_CODE,
        Drafts.SHIP_TO_CODE,
        Drafts.INDICATOR,
        Drafts.FEDERAL_TAX_ID,
        Drafts.DISCOUNT_PERCENT,
        Drafts.PAYMENT_REFERENCE,
        Drafts.CREATION_DATE,
        Drafts.UPDATE_DATE,
        Drafts.FINANCIAL_PERIOD,
        Drafts.TRANS_NUM,
        Drafts.VAT_SUM,
        Drafts.VAT_SUM_SYS,
        Drafts.VAT_SUM_FC,
        Drafts.NET_PROCEDURE,
        Drafts.DOC_TOTAL_FC,
        Drafts.DOC_TOTAL_SYS,
        Drafts.FORM_1099,
        Drafts.BOX_1099,
        Drafts.REVISION_PO,
        Drafts.REQURIED_DATE,
        Drafts.CANCEL_DATE,
        Drafts.BLOCK_DUNNING,
        Drafts.SUBMITTED,
        Drafts.SEGMENT,
        Drafts.PICK_STATUS,
        Drafts.PICK,
        Drafts.PAYMENT_METHOD,
        Drafts.PAYMENT_BLOCK,
        Drafts.PAYMENT_BLOCK_ENTRY,
        Drafts.CENTRAL_BANK_INDICATOR,
        Drafts.MAXIMUM_CASH_DISCOUNT,
        Drafts.RESERVE,
        Drafts.PROJECT,
        Drafts.EXEMPTION_VALIDITY_DATE_FROM,
        Drafts.EXEMPTION_VALIDITY_DATE_TO,
        Drafts.WARE_HOUSE_UPDATE_TYPE,
        Drafts.ROUNDING,
        Drafts.EXTERNAL_CORRECTED_DOC_NUM,
        Drafts.INTERNAL_CORRECTED_DOC_NUM,
        Drafts.NEXT_CORRECTING_DOCUMENT,
        Drafts.DEFERRED_TAX,
        Drafts.TAX_EXEMPTION_LETTER_NUM,
        Drafts.WT_APPLIED,
        Drafts.WT_APPLIED_FC,
        Drafts.BILL_OF_EXCHANGE_RESERVED,
        Drafts.AGENT_CODE,
        Drafts.WT_APPLIED_SC,
        Drafts.TOTAL_EQUALIZATION_TAX,
        Drafts.TOTAL_EQUALIZATION_TAX_FC,
        Drafts.TOTAL_EQUALIZATION_TAX_SC,
        Drafts.NUMBER_OF_INSTALLMENTS,
        Drafts.APPLY_TAX_ON_FIRST_INSTALLMENT,
        Drafts.WT_NON_SUBJECT_AMOUNT,
        Drafts.WT_NON_SUBJECT_AMOUNT_SC,
        Drafts.WT_NON_SUBJECT_AMOUNT_FC,
        Drafts.WT_EXEMPTED_AMOUNT,
        Drafts.WT_EXEMPTED_AMOUNT_SC,
        Drafts.WT_EXEMPTED_AMOUNT_FC,
        Drafts.BASE_AMOUNT,
        Drafts.BASE_AMOUNT_SC,
        Drafts.BASE_AMOUNT_FC,
        Drafts.WT_AMOUNT,
        Drafts.WT_AMOUNT_SC,
        Drafts.WT_AMOUNT_FC,
        Drafts.VAT_DATE,
        Drafts.DOCUMENTS_OWNER,
        Drafts.FOLIO_PREFIX_STRING,
        Drafts.FOLIO_NUMBER,
        Drafts.DOCUMENT_SUB_TYPE,
        Drafts.BP_CHANNEL_CODE,
        Drafts.BP_CHANNEL_CONTACT,
        Drafts.ADDRESS_2,
        Drafts.DOCUMENT_STATUS,
        Drafts.PERIOD_INDICATOR,
        Drafts.PAY_TO_CODE,
        Drafts.MANUAL_NUMBER,
        Drafts.USE_SHPD_GOODS_ACT,
        Drafts.IS_PAY_TO_BANK,
        Drafts.PAY_TO_BANK_COUNTRY,
        Drafts.PAY_TO_BANK_CODE,
        Drafts.PAY_TO_BANK_ACCOUNT_NO,
        Drafts.PAY_TO_BANK_BRANCH,
        Drafts.BPL_ID_ASSIGNED_TO_INVOICE,
        Drafts.DOWN_PAYMENT,
        Drafts.RESERVE_INVOICE,
        Drafts.LANGUAGE_CODE,
        Drafts.TRACKING_NUMBER,
        Drafts.PICK_REMARK,
        Drafts.CLOSING_DATE,
        Drafts.SEQUENCE_CODE,
        Drafts.SEQUENCE_SERIAL,
        Drafts.SERIES_STRING,
        Drafts.SUB_SERIES_STRING,
        Drafts.SEQUENCE_MODEL,
        Drafts.USE_CORRECTION_VAT_GROUP,
        Drafts.TOTAL_DISCOUNT,
        Drafts.DOWN_PAYMENT_AMOUNT,
        Drafts.DOWN_PAYMENT_PERCENTAGE,
        Drafts.DOWN_PAYMENT_TYPE,
        Drafts.DOWN_PAYMENT_AMOUNT_SC,
        Drafts.DOWN_PAYMENT_AMOUNT_FC,
        Drafts.VAT_PERCENT,
        Drafts.SERVICE_GROSS_PROFIT_PERCENT,
        Drafts.OPENING_REMARKS,
        Drafts.CLOSING_REMARKS,
        Drafts.ROUNDING_DIFF_AMOUNT,
        Drafts.ROUNDING_DIFF_AMOUNT_FC,
        Drafts.ROUNDING_DIFF_AMOUNT_SC,
        Drafts.CANCELLED,
        Drafts.SIGNATURE_INPUT_MESSAGE,
        Drafts.SIGNATURE_DIGEST,
        Drafts.CERTIFICATION_NUMBER,
        Drafts.PRIVATE_KEY_VERSION,
        Drafts.CONTROL_ACCOUNT,
        Drafts.INSURANCE_OPERATION_347,
        Drafts.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        Drafts.GTS_CHECKER,
        Drafts.GTS_PAYEE,
        Drafts.EXTRA_MONTH,
        Drafts.EXTRA_DAYS,
        Drafts.CASH_DISCOUNT_DATE_OFFSET,
        Drafts.START_FROM,
        Drafts.NTS_APPROVED,
        Drafts.E_TAX_WEB_SITE,
        Drafts.E_TAX_NUMBER,
        Drafts.NTS_APPROVED_NUMBER,
        Drafts.E_DOC_GENERATION_TYPE,
        Drafts.E_DOC_SERIES,
        Drafts.E_DOC_NUM,
        Drafts.E_DOC_EXPORT_FORMAT,
        Drafts.E_DOC_STATUS,
        Drafts.E_DOC_ERROR_CODE,
        Drafts.E_DOC_ERROR_MESSAGE,
        Drafts.DOWN_PAYMENT_STATUS,
        Drafts.GROUP_SERIES,
        Drafts.GROUP_NUMBER,
        Drafts.GROUP_HAND_WRITTEN,
        Drafts.REOPEN_ORIGINAL_DOCUMENT,
        Drafts.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        Drafts.CREATE_ONLINE_QUOTATION,
        Drafts.POS_EQUIPMENT_NUMBER,
        Drafts.POS_MANUFACTURER_SERIAL_NUMBER,
        Drafts.POS_CASHIER_NUMBER,
        Drafts.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        Drafts.CLOSING_OPTION,
        Drafts.SPECIFIED_CLOSING_DATE,
        Drafts.OPEN_FOR_LANDED_COSTS,
        Drafts.AUTHORIZATION_STATUS,
        Drafts.TOTAL_DISCOUNT_FC,
        Drafts.TOTAL_DISCOUNT_SC,
        Drafts.RELEVANT_TO_GTS,
        Drafts.BPL_NAME,
        Drafts.VAT_REG_NUM,
        Drafts.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        Drafts.SUPPLIER,
        Drafts.RELEASER,
        Drafts.RECEIVER,
        Drafts.BLANKET_AGREEMENT_NUMBER,
        Drafts.IS_ALTERATION,
        Drafts.CANCEL_STATUS,
        Drafts.ASSET_VALUE_DATE,
        Drafts.REQUESTER,
        Drafts.REQUESTER_NAME,
        Drafts.REQUESTER_BRANCH,
        Drafts.REQUESTER_DEPARTMENT,
        Drafts.REQUESTER_EMAIL,
        Drafts.SEND_NOTIFICATION,
        Drafts.REQ_TYPE,
        Drafts.DOCUMENT_DELIVERY,
        Drafts.AUTHORIZATION_CODE,
        Drafts.START_DELIVERY_DATE,
        Drafts.START_DELIVERY_TIME,
        Drafts.END_DELIVERY_DATE,
        Drafts.END_DELIVERY_TIME,
        Drafts.VEHICLE_PLATE,
        Drafts.AT_DOCUMENT_TYPE,
        Drafts.ELEC_COMM_STATUS,
        Drafts.ELEC_COMM_MESSAGE,
        Drafts.REUSE_DOCUMENT_NUM,
        Drafts.REUSE_NOTA_FISCAL_NUM,
        Drafts.PRINT_SEPA_DIRECT,
        Drafts.FISCAL_DOC_NUM,
        Drafts.POS_DAILY_SUMMARY_NO,
        Drafts.POS_RECEIPT_NO,
        Drafts.POINT_OF_ISSUE_CODE,
        Drafts.LETTER,
        Drafts.FOLIO_NUMBER_FROM,
        Drafts.FOLIO_NUMBER_TO,
        Drafts.INTERIM_TYPE,
        Drafts.RELATED_TYPE,
        Drafts.RELATED_ENTRY,
        Drafts.DOCUMENT_TAX_ID,
        Drafts.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        Drafts.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        Drafts.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        Drafts.POS_CASH_REGISTER,
        Drafts.UPDATE_TIME,
        Drafts.PRICE_MODE,
        Drafts.DOWN_PAYMENT_TRASACTION_ID,
        Drafts.REVISION,
        Drafts.ORIGINAL_REF_NO,
        Drafts.ORIGINAL_REF_DATE,
        Drafts.GST_TRANSACTION_TYPE,
        Drafts.ORIGINAL_CREDIT_OR_DEBIT_NO,
        Drafts.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        Drafts.E_COMMERCE_OPERATOR,
        Drafts.E_COMMERCE_GSTIN,
        Drafts.TAX_INVOICE_NO,
        Drafts.TAX_INVOICE_DATE,
        Drafts.SHIP_FROM,
        Drafts.COMMISSION_TRADE,
        Drafts.COMMISSION_TRADE_RETURN,
        Drafts.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        Drafts.ISSUING_REASON,
        Drafts.DOCUMENT_APPROVAL_REQUESTS,
        Drafts.DOCUMENT_LINES,
        Drafts.DOCUMENT_ADDITIONAL_EXPENSES,
        Drafts.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        Drafts.WITHHOLDING_TAX_DATA_COLLECTION,
        Drafts.DOCUMENT_PACKAGES,
        Drafts.DOCUMENT_SPECIAL_LINES,
        Drafts.DOCUMENT_INSTALLMENTS,
        Drafts.DOWN_PAYMENTS_TO_DRAW,
        Drafts.TAX_EXTENSION,
        Drafts.ADDRESS_EXTENSION,
        Drafts.SOI_WIZARD_ID,
        Drafts.BUSINESS_PARTNER,
        Drafts.CURRENCY,
        Drafts.PAYMENT_TERMS_TYPE,
        Drafts.SALES_PERSON,
        Drafts.SHIPPING_TYPE,
        Drafts.FACTORING_INDICATOR,
        Drafts.JOURNAL_ENTRY,
        Drafts.FORMS_1099,
        Drafts.WIZARD_PAYMENT_METHOD,
        Drafts.PAYMENT_BLOCK_2,
        Drafts.PROJECT_2,
        Drafts.EMPLOYEE_INFO,
        Drafts.COUNTRY,
        Drafts.BUSINESS_PLACE,
        Drafts.USER_LANGUAGE,
        Drafts.NF_MODEL,
        Drafts.CHART_OF_ACCOUNT,
        Drafts.TAX_WEB_SITE,
        Drafts.BRANCH,
        Drafts.DEPARTMENT,
        Drafts.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    Drafts.ALL_FIELDS = new core_1.AllFields('*', Drafts);
    /**
     * All key fields of the Drafts entity.
     */
    Drafts._keyFields = [Drafts.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Drafts.
     */
    Drafts._keys = Drafts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Drafts = exports.Drafts || (exports.Drafts = {}));
exports.Drafts = Drafts;
//# sourceMappingURL=Drafts.js.map