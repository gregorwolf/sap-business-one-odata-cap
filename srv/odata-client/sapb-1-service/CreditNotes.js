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
exports.CreditNotes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CreditNotesRequestBuilder_1 = require("./CreditNotesRequestBuilder");
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
 * This class represents the entity "CreditNotes" of service "SAPB1".
 */
var CreditNotes = /** @class */ (function (_super) {
    __extends(CreditNotes, _super);
    function CreditNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CreditNotes`.
     * @returns A builder that constructs instances of entity type `CreditNotes`.
     */
    CreditNotes.builder = function () {
        return core_1.EntityV4.entityBuilder(CreditNotes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CreditNotes` entity type.
     * @returns A `CreditNotes` request builder.
     */
    CreditNotes.requestBuilder = function () {
        return new CreditNotesRequestBuilder_1.CreditNotesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CreditNotes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CreditNotes`.
     */
    CreditNotes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CreditNotes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CreditNotes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CreditNotes.
     */
    CreditNotes._entityName = 'CreditNotes';
    /**
     * Default url path for the according service.
     */
    CreditNotes._defaultServicePath = '/b1s/v2/';
    return CreditNotes;
}(core_1.EntityV4));
exports.CreditNotes = CreditNotes;
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
(function (CreditNotes) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_ENTRY = new core_1.NumberField('DocEntry', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_NUM = new core_1.NumberField('DocNum', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_TYPE = new core_1.EnumField('DocType', CreditNotes);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.HAND_WRITTEN = new core_1.EnumField('HandWritten', CreditNotes);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PRINTED = new core_1.EnumField('Printed', CreditNotes);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_DATE = new core_1.DateField('DocDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_DUE_DATE = new core_1.DateField('DocDueDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CARD_CODE = new core_1.StringField('CardCode', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CARD_NAME = new core_1.StringField('CardName', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ADDRESS = new core_1.StringField('Address', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.NUM_AT_CARD = new core_1.StringField('NumAtCard', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_TOTAL = new core_1.NumberField('DocTotal', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_CURRENCY = new core_1.StringField('DocCurrency', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_RATE = new core_1.NumberField('DocRate', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REFERENCE_1 = new core_1.StringField('Reference1', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REFERENCE_2 = new core_1.StringField('Reference2', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.COMMENTS = new core_1.StringField('Comments', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.JOURNAL_MEMO = new core_1.StringField('JournalMemo', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_TIME = new core_1.TimeField('DocTime', CreditNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CONFIRMED = new core_1.EnumField('Confirmed', CreditNotes);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SUMMERY_TYPE = new core_1.EnumField('SummeryType', CreditNotes);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SHOW_SCN = new core_1.EnumField('ShowSCN', CreditNotes);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SERIES = new core_1.NumberField('Series', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TAX_DATE = new core_1.DateField('TaxDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', CreditNotes);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', CreditNotes);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SHIP_TO_CODE = new core_1.StringField('ShipToCode', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.INDICATOR = new core_1.StringField('Indicator', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CREATION_DATE = new core_1.DateField('CreationDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.UPDATE_DATE = new core_1.DateField('UpdateDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TRANS_NUM = new core_1.NumberField('TransNum', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.VAT_SUM = new core_1.NumberField('VatSum', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.VAT_SUM_FC = new core_1.NumberField('VatSumFc', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.NET_PROCEDURE = new core_1.EnumField('NetProcedure', CreditNotes);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FORM_1099 = new core_1.NumberField('Form1099', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BOX_1099 = new core_1.StringField('Box1099', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REVISION_PO = new core_1.EnumField('RevisionPo', CreditNotes);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REQURIED_DATE = new core_1.DateField('RequriedDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CANCEL_DATE = new core_1.DateField('CancelDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', CreditNotes);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SUBMITTED = new core_1.EnumField('Submitted', CreditNotes);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SEGMENT = new core_1.NumberField('Segment', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PICK_STATUS = new core_1.EnumField('PickStatus', CreditNotes);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PICK = new core_1.EnumField('Pick', CreditNotes);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', CreditNotes);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', CreditNotes);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.RESERVE = new core_1.EnumField('Reserve', CreditNotes);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PROJECT = new core_1.StringField('Project', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', CreditNotes);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ROUNDING = new core_1.EnumField('Rounding', CreditNotes);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DEFERRED_TAX = new core_1.EnumField('DeferredTax', CreditNotes);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_APPLIED = new core_1.NumberField('WTApplied', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', CreditNotes);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.AGENT_CODE = new core_1.StringField('AgentCode', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', CreditNotes);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BASE_AMOUNT = new core_1.NumberField('BaseAmount', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_AMOUNT = new core_1.NumberField('WTAmount', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.VAT_DATE = new core_1.DateField('VatDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', CreditNotes);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ADDRESS_2 = new core_1.StringField('Address2', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', CreditNotes);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAY_TO_CODE = new core_1.StringField('PayToCode', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.MANUAL_NUMBER = new core_1.StringField('ManualNumber', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', CreditNotes);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', CreditNotes);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOWN_PAYMENT = new core_1.NumberField('DownPayment', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', CreditNotes);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PICK_REMARK = new core_1.StringField('PickRemark', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CLOSING_DATE = new core_1.DateField('ClosingDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SERIES_STRING = new core_1.StringField('SeriesString', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', CreditNotes);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', CreditNotes);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.VAT_PERCENT = new core_1.NumberField('VatPercent', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CANCELLED = new core_1.EnumField('Cancelled', CreditNotes);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', CreditNotes);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', CreditNotes);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.GTS_CHECKER = new core_1.NumberField('GTSChecker', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.GTS_PAYEE = new core_1.NumberField('GTSPayee', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.EXTRA_DAYS = new core_1.NumberField('ExtraDays', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.START_FROM = new core_1.EnumField('StartFrom', CreditNotes);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.NTS_APPROVED = new core_1.EnumField('NTSApproved', CreditNotes);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', CreditNotes);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_DOC_SERIES = new core_1.NumberField('EDocSeries', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_DOC_NUM = new core_1.StringField('EDocNum', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_DOC_STATUS = new core_1.EnumField('EDocStatus', CreditNotes);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', CreditNotes);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.GROUP_SERIES = new core_1.NumberField('GroupSeries', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.GROUP_NUMBER = new core_1.NumberField('GroupNumber', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', CreditNotes);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', CreditNotes);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', CreditNotes);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', CreditNotes);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', CreditNotes);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CLOSING_OPTION = new core_1.EnumField('ClosingOption', CreditNotes);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', CreditNotes);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', CreditNotes);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', CreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', CreditNotes);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BPL_NAME = new core_1.StringField('BPLName', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.VAT_REG_NUM = new core_1.StringField('VATRegNum', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SUPPLIER = new core_1.StringField('Supplier', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.RELEASER = new core_1.NumberField('Releaser', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.RECEIVER = new core_1.NumberField('Receiver', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.IS_ALTERATION = new core_1.EnumField('IsAlteration', CreditNotes);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CANCEL_STATUS = new core_1.EnumField('CancelStatus', CreditNotes);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REQUESTER = new core_1.StringField('Requester', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REQUESTER_NAME = new core_1.StringField('RequesterName', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', CreditNotes);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REQ_TYPE = new core_1.NumberField('ReqType', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', CreditNotes);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', CreditNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', CreditNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', CreditNotes);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', CreditNotes);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', CreditNotes);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', CreditNotes);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.LETTER = new core_1.EnumField('Letter', CreditNotes);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.INTERIM_TYPE = new core_1.EnumField('InterimType', CreditNotes);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.RELATED_TYPE = new core_1.NumberField('RelatedType', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', CreditNotes);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.UPDATE_TIME = new core_1.TimeField('UpdateTime', CreditNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PRICE_MODE = new core_1.EnumField('PriceMode', CreditNotes);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.REVISION = new core_1.EnumField('Revision', CreditNotes);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', CreditNotes);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', CreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SHIP_FROM = new core_1.StringField('ShipFrom', CreditNotes, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', CreditNotes);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', CreditNotes);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', CreditNotes);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ISSUING_REASON = new core_1.NumberField('IssuingReason', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', CreditNotes, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', CreditNotes, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', CreditNotes, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', CreditNotes, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', CreditNotes, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', CreditNotes, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', CreditNotes, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', CreditNotes, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', CreditNotes, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', CreditNotes);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', CreditNotes);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', CreditNotes, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', CreditNotes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CURRENCY = new core_1.OneToOneLink('Currency', CreditNotes, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', CreditNotes, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', CreditNotes, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', CreditNotes, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', CreditNotes, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', CreditNotes, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.FORMS_1099 = new core_1.OneToOneLink('Forms1099', CreditNotes, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', CreditNotes, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', CreditNotes, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.PROJECT_2 = new core_1.OneToOneLink('Project2', CreditNotes, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', CreditNotes, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.COUNTRY = new core_1.OneToOneLink('Country', CreditNotes, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', CreditNotes, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', CreditNotes, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.NF_MODEL = new core_1.OneToOneLink('NFModel', CreditNotes, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', CreditNotes, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', CreditNotes, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.BRANCH = new core_1.OneToOneLink('Branch', CreditNotes, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.DEPARTMENT = new core_1.OneToOneLink('Department', CreditNotes, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditNotes.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', CreditNotes, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the CreditNotes entity.
     */
    CreditNotes._allFields = [
        CreditNotes.DOC_ENTRY,
        CreditNotes.DOC_NUM,
        CreditNotes.DOC_TYPE,
        CreditNotes.HAND_WRITTEN,
        CreditNotes.PRINTED,
        CreditNotes.DOC_DATE,
        CreditNotes.DOC_DUE_DATE,
        CreditNotes.CARD_CODE,
        CreditNotes.CARD_NAME,
        CreditNotes.ADDRESS,
        CreditNotes.NUM_AT_CARD,
        CreditNotes.DOC_TOTAL,
        CreditNotes.ATTACHMENT_ENTRY,
        CreditNotes.DOC_CURRENCY,
        CreditNotes.DOC_RATE,
        CreditNotes.REFERENCE_1,
        CreditNotes.REFERENCE_2,
        CreditNotes.COMMENTS,
        CreditNotes.JOURNAL_MEMO,
        CreditNotes.PAYMENT_GROUP_CODE,
        CreditNotes.DOC_TIME,
        CreditNotes.SALES_PERSON_CODE,
        CreditNotes.TRANSPORTATION_CODE,
        CreditNotes.CONFIRMED,
        CreditNotes.IMPORT_FILE_NUM,
        CreditNotes.SUMMERY_TYPE,
        CreditNotes.CONTACT_PERSON_CODE,
        CreditNotes.SHOW_SCN,
        CreditNotes.SERIES,
        CreditNotes.TAX_DATE,
        CreditNotes.PARTIAL_SUPPLY,
        CreditNotes.DOC_OBJECT_CODE,
        CreditNotes.SHIP_TO_CODE,
        CreditNotes.INDICATOR,
        CreditNotes.FEDERAL_TAX_ID,
        CreditNotes.DISCOUNT_PERCENT,
        CreditNotes.PAYMENT_REFERENCE,
        CreditNotes.CREATION_DATE,
        CreditNotes.UPDATE_DATE,
        CreditNotes.FINANCIAL_PERIOD,
        CreditNotes.TRANS_NUM,
        CreditNotes.VAT_SUM,
        CreditNotes.VAT_SUM_SYS,
        CreditNotes.VAT_SUM_FC,
        CreditNotes.NET_PROCEDURE,
        CreditNotes.DOC_TOTAL_FC,
        CreditNotes.DOC_TOTAL_SYS,
        CreditNotes.FORM_1099,
        CreditNotes.BOX_1099,
        CreditNotes.REVISION_PO,
        CreditNotes.REQURIED_DATE,
        CreditNotes.CANCEL_DATE,
        CreditNotes.BLOCK_DUNNING,
        CreditNotes.SUBMITTED,
        CreditNotes.SEGMENT,
        CreditNotes.PICK_STATUS,
        CreditNotes.PICK,
        CreditNotes.PAYMENT_METHOD,
        CreditNotes.PAYMENT_BLOCK,
        CreditNotes.PAYMENT_BLOCK_ENTRY,
        CreditNotes.CENTRAL_BANK_INDICATOR,
        CreditNotes.MAXIMUM_CASH_DISCOUNT,
        CreditNotes.RESERVE,
        CreditNotes.PROJECT,
        CreditNotes.EXEMPTION_VALIDITY_DATE_FROM,
        CreditNotes.EXEMPTION_VALIDITY_DATE_TO,
        CreditNotes.WARE_HOUSE_UPDATE_TYPE,
        CreditNotes.ROUNDING,
        CreditNotes.EXTERNAL_CORRECTED_DOC_NUM,
        CreditNotes.INTERNAL_CORRECTED_DOC_NUM,
        CreditNotes.NEXT_CORRECTING_DOCUMENT,
        CreditNotes.DEFERRED_TAX,
        CreditNotes.TAX_EXEMPTION_LETTER_NUM,
        CreditNotes.WT_APPLIED,
        CreditNotes.WT_APPLIED_FC,
        CreditNotes.BILL_OF_EXCHANGE_RESERVED,
        CreditNotes.AGENT_CODE,
        CreditNotes.WT_APPLIED_SC,
        CreditNotes.TOTAL_EQUALIZATION_TAX,
        CreditNotes.TOTAL_EQUALIZATION_TAX_FC,
        CreditNotes.TOTAL_EQUALIZATION_TAX_SC,
        CreditNotes.NUMBER_OF_INSTALLMENTS,
        CreditNotes.APPLY_TAX_ON_FIRST_INSTALLMENT,
        CreditNotes.WT_NON_SUBJECT_AMOUNT,
        CreditNotes.WT_NON_SUBJECT_AMOUNT_SC,
        CreditNotes.WT_NON_SUBJECT_AMOUNT_FC,
        CreditNotes.WT_EXEMPTED_AMOUNT,
        CreditNotes.WT_EXEMPTED_AMOUNT_SC,
        CreditNotes.WT_EXEMPTED_AMOUNT_FC,
        CreditNotes.BASE_AMOUNT,
        CreditNotes.BASE_AMOUNT_SC,
        CreditNotes.BASE_AMOUNT_FC,
        CreditNotes.WT_AMOUNT,
        CreditNotes.WT_AMOUNT_SC,
        CreditNotes.WT_AMOUNT_FC,
        CreditNotes.VAT_DATE,
        CreditNotes.DOCUMENTS_OWNER,
        CreditNotes.FOLIO_PREFIX_STRING,
        CreditNotes.FOLIO_NUMBER,
        CreditNotes.DOCUMENT_SUB_TYPE,
        CreditNotes.BP_CHANNEL_CODE,
        CreditNotes.BP_CHANNEL_CONTACT,
        CreditNotes.ADDRESS_2,
        CreditNotes.DOCUMENT_STATUS,
        CreditNotes.PERIOD_INDICATOR,
        CreditNotes.PAY_TO_CODE,
        CreditNotes.MANUAL_NUMBER,
        CreditNotes.USE_SHPD_GOODS_ACT,
        CreditNotes.IS_PAY_TO_BANK,
        CreditNotes.PAY_TO_BANK_COUNTRY,
        CreditNotes.PAY_TO_BANK_CODE,
        CreditNotes.PAY_TO_BANK_ACCOUNT_NO,
        CreditNotes.PAY_TO_BANK_BRANCH,
        CreditNotes.BPL_ID_ASSIGNED_TO_INVOICE,
        CreditNotes.DOWN_PAYMENT,
        CreditNotes.RESERVE_INVOICE,
        CreditNotes.LANGUAGE_CODE,
        CreditNotes.TRACKING_NUMBER,
        CreditNotes.PICK_REMARK,
        CreditNotes.CLOSING_DATE,
        CreditNotes.SEQUENCE_CODE,
        CreditNotes.SEQUENCE_SERIAL,
        CreditNotes.SERIES_STRING,
        CreditNotes.SUB_SERIES_STRING,
        CreditNotes.SEQUENCE_MODEL,
        CreditNotes.USE_CORRECTION_VAT_GROUP,
        CreditNotes.TOTAL_DISCOUNT,
        CreditNotes.DOWN_PAYMENT_AMOUNT,
        CreditNotes.DOWN_PAYMENT_PERCENTAGE,
        CreditNotes.DOWN_PAYMENT_TYPE,
        CreditNotes.DOWN_PAYMENT_AMOUNT_SC,
        CreditNotes.DOWN_PAYMENT_AMOUNT_FC,
        CreditNotes.VAT_PERCENT,
        CreditNotes.SERVICE_GROSS_PROFIT_PERCENT,
        CreditNotes.OPENING_REMARKS,
        CreditNotes.CLOSING_REMARKS,
        CreditNotes.ROUNDING_DIFF_AMOUNT,
        CreditNotes.ROUNDING_DIFF_AMOUNT_FC,
        CreditNotes.ROUNDING_DIFF_AMOUNT_SC,
        CreditNotes.CANCELLED,
        CreditNotes.SIGNATURE_INPUT_MESSAGE,
        CreditNotes.SIGNATURE_DIGEST,
        CreditNotes.CERTIFICATION_NUMBER,
        CreditNotes.PRIVATE_KEY_VERSION,
        CreditNotes.CONTROL_ACCOUNT,
        CreditNotes.INSURANCE_OPERATION_347,
        CreditNotes.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        CreditNotes.GTS_CHECKER,
        CreditNotes.GTS_PAYEE,
        CreditNotes.EXTRA_MONTH,
        CreditNotes.EXTRA_DAYS,
        CreditNotes.CASH_DISCOUNT_DATE_OFFSET,
        CreditNotes.START_FROM,
        CreditNotes.NTS_APPROVED,
        CreditNotes.E_TAX_WEB_SITE,
        CreditNotes.E_TAX_NUMBER,
        CreditNotes.NTS_APPROVED_NUMBER,
        CreditNotes.E_DOC_GENERATION_TYPE,
        CreditNotes.E_DOC_SERIES,
        CreditNotes.E_DOC_NUM,
        CreditNotes.E_DOC_EXPORT_FORMAT,
        CreditNotes.E_DOC_STATUS,
        CreditNotes.E_DOC_ERROR_CODE,
        CreditNotes.E_DOC_ERROR_MESSAGE,
        CreditNotes.DOWN_PAYMENT_STATUS,
        CreditNotes.GROUP_SERIES,
        CreditNotes.GROUP_NUMBER,
        CreditNotes.GROUP_HAND_WRITTEN,
        CreditNotes.REOPEN_ORIGINAL_DOCUMENT,
        CreditNotes.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        CreditNotes.CREATE_ONLINE_QUOTATION,
        CreditNotes.POS_EQUIPMENT_NUMBER,
        CreditNotes.POS_MANUFACTURER_SERIAL_NUMBER,
        CreditNotes.POS_CASHIER_NUMBER,
        CreditNotes.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        CreditNotes.CLOSING_OPTION,
        CreditNotes.SPECIFIED_CLOSING_DATE,
        CreditNotes.OPEN_FOR_LANDED_COSTS,
        CreditNotes.AUTHORIZATION_STATUS,
        CreditNotes.TOTAL_DISCOUNT_FC,
        CreditNotes.TOTAL_DISCOUNT_SC,
        CreditNotes.RELEVANT_TO_GTS,
        CreditNotes.BPL_NAME,
        CreditNotes.VAT_REG_NUM,
        CreditNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        CreditNotes.SUPPLIER,
        CreditNotes.RELEASER,
        CreditNotes.RECEIVER,
        CreditNotes.BLANKET_AGREEMENT_NUMBER,
        CreditNotes.IS_ALTERATION,
        CreditNotes.CANCEL_STATUS,
        CreditNotes.ASSET_VALUE_DATE,
        CreditNotes.REQUESTER,
        CreditNotes.REQUESTER_NAME,
        CreditNotes.REQUESTER_BRANCH,
        CreditNotes.REQUESTER_DEPARTMENT,
        CreditNotes.REQUESTER_EMAIL,
        CreditNotes.SEND_NOTIFICATION,
        CreditNotes.REQ_TYPE,
        CreditNotes.DOCUMENT_DELIVERY,
        CreditNotes.AUTHORIZATION_CODE,
        CreditNotes.START_DELIVERY_DATE,
        CreditNotes.START_DELIVERY_TIME,
        CreditNotes.END_DELIVERY_DATE,
        CreditNotes.END_DELIVERY_TIME,
        CreditNotes.VEHICLE_PLATE,
        CreditNotes.AT_DOCUMENT_TYPE,
        CreditNotes.ELEC_COMM_STATUS,
        CreditNotes.ELEC_COMM_MESSAGE,
        CreditNotes.REUSE_DOCUMENT_NUM,
        CreditNotes.REUSE_NOTA_FISCAL_NUM,
        CreditNotes.PRINT_SEPA_DIRECT,
        CreditNotes.FISCAL_DOC_NUM,
        CreditNotes.POS_DAILY_SUMMARY_NO,
        CreditNotes.POS_RECEIPT_NO,
        CreditNotes.POINT_OF_ISSUE_CODE,
        CreditNotes.LETTER,
        CreditNotes.FOLIO_NUMBER_FROM,
        CreditNotes.FOLIO_NUMBER_TO,
        CreditNotes.INTERIM_TYPE,
        CreditNotes.RELATED_TYPE,
        CreditNotes.RELATED_ENTRY,
        CreditNotes.DOCUMENT_TAX_ID,
        CreditNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        CreditNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        CreditNotes.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        CreditNotes.POS_CASH_REGISTER,
        CreditNotes.UPDATE_TIME,
        CreditNotes.PRICE_MODE,
        CreditNotes.DOWN_PAYMENT_TRASACTION_ID,
        CreditNotes.REVISION,
        CreditNotes.ORIGINAL_REF_NO,
        CreditNotes.ORIGINAL_REF_DATE,
        CreditNotes.GST_TRANSACTION_TYPE,
        CreditNotes.ORIGINAL_CREDIT_OR_DEBIT_NO,
        CreditNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        CreditNotes.E_COMMERCE_OPERATOR,
        CreditNotes.E_COMMERCE_GSTIN,
        CreditNotes.TAX_INVOICE_NO,
        CreditNotes.TAX_INVOICE_DATE,
        CreditNotes.SHIP_FROM,
        CreditNotes.COMMISSION_TRADE,
        CreditNotes.COMMISSION_TRADE_RETURN,
        CreditNotes.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        CreditNotes.ISSUING_REASON,
        CreditNotes.DOCUMENT_APPROVAL_REQUESTS,
        CreditNotes.DOCUMENT_LINES,
        CreditNotes.DOCUMENT_ADDITIONAL_EXPENSES,
        CreditNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        CreditNotes.WITHHOLDING_TAX_DATA_COLLECTION,
        CreditNotes.DOCUMENT_PACKAGES,
        CreditNotes.DOCUMENT_SPECIAL_LINES,
        CreditNotes.DOCUMENT_INSTALLMENTS,
        CreditNotes.DOWN_PAYMENTS_TO_DRAW,
        CreditNotes.TAX_EXTENSION,
        CreditNotes.ADDRESS_EXTENSION,
        CreditNotes.SOI_WIZARD_ID,
        CreditNotes.BUSINESS_PARTNER,
        CreditNotes.CURRENCY,
        CreditNotes.PAYMENT_TERMS_TYPE,
        CreditNotes.SALES_PERSON,
        CreditNotes.SHIPPING_TYPE,
        CreditNotes.FACTORING_INDICATOR,
        CreditNotes.JOURNAL_ENTRY,
        CreditNotes.FORMS_1099,
        CreditNotes.WIZARD_PAYMENT_METHOD,
        CreditNotes.PAYMENT_BLOCK_2,
        CreditNotes.PROJECT_2,
        CreditNotes.EMPLOYEE_INFO,
        CreditNotes.COUNTRY,
        CreditNotes.BUSINESS_PLACE,
        CreditNotes.USER_LANGUAGE,
        CreditNotes.NF_MODEL,
        CreditNotes.CHART_OF_ACCOUNT,
        CreditNotes.TAX_WEB_SITE,
        CreditNotes.BRANCH,
        CreditNotes.DEPARTMENT,
        CreditNotes.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    CreditNotes.ALL_FIELDS = new core_1.AllFields('*', CreditNotes);
    /**
     * All key fields of the CreditNotes entity.
     */
    CreditNotes._keyFields = [CreditNotes.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property CreditNotes.
     */
    CreditNotes._keys = CreditNotes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CreditNotes = exports.CreditNotes || (exports.CreditNotes = {}));
exports.CreditNotes = CreditNotes;
//# sourceMappingURL=CreditNotes.js.map