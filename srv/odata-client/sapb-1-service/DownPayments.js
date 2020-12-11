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
exports.DownPayments = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DownPaymentsRequestBuilder_1 = require("./DownPaymentsRequestBuilder");
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
 * This class represents the entity "DownPayments" of service "SAPB1".
 */
var DownPayments = /** @class */ (function (_super) {
    __extends(DownPayments, _super);
    function DownPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `DownPayments`.
     * @returns A builder that constructs instances of entity type `DownPayments`.
     */
    DownPayments.builder = function () {
        return core_1.EntityV4.entityBuilder(DownPayments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DownPayments` entity type.
     * @returns A `DownPayments` request builder.
     */
    DownPayments.requestBuilder = function () {
        return new DownPaymentsRequestBuilder_1.DownPaymentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DownPayments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DownPayments`.
     */
    DownPayments.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, DownPayments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DownPayments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DownPayments.
     */
    DownPayments._entityName = 'DownPayments';
    /**
     * Default url path for the according service.
     */
    DownPayments._defaultServicePath = '/b1s/v2/';
    return DownPayments;
}(core_1.EntityV4));
exports.DownPayments = DownPayments;
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
(function (DownPayments) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_ENTRY = new core_1.NumberField('DocEntry', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_NUM = new core_1.NumberField('DocNum', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_TYPE = new core_1.EnumField('DocType', DownPayments);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.HAND_WRITTEN = new core_1.EnumField('HandWritten', DownPayments);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PRINTED = new core_1.EnumField('Printed', DownPayments);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_DATE = new core_1.DateField('DocDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_DUE_DATE = new core_1.DateField('DocDueDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CARD_CODE = new core_1.StringField('CardCode', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CARD_NAME = new core_1.StringField('CardName', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ADDRESS = new core_1.StringField('Address', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.NUM_AT_CARD = new core_1.StringField('NumAtCard', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_TOTAL = new core_1.NumberField('DocTotal', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_CURRENCY = new core_1.StringField('DocCurrency', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_RATE = new core_1.NumberField('DocRate', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REFERENCE_1 = new core_1.StringField('Reference1', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REFERENCE_2 = new core_1.StringField('Reference2', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.COMMENTS = new core_1.StringField('Comments', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.JOURNAL_MEMO = new core_1.StringField('JournalMemo', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_TIME = new core_1.TimeField('DocTime', DownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CONFIRMED = new core_1.EnumField('Confirmed', DownPayments);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SUMMERY_TYPE = new core_1.EnumField('SummeryType', DownPayments);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SHOW_SCN = new core_1.EnumField('ShowSCN', DownPayments);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SERIES = new core_1.NumberField('Series', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TAX_DATE = new core_1.DateField('TaxDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', DownPayments);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', DownPayments);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SHIP_TO_CODE = new core_1.StringField('ShipToCode', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.INDICATOR = new core_1.StringField('Indicator', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CREATION_DATE = new core_1.DateField('CreationDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.UPDATE_DATE = new core_1.DateField('UpdateDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TRANS_NUM = new core_1.NumberField('TransNum', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.VAT_SUM = new core_1.NumberField('VatSum', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.VAT_SUM_FC = new core_1.NumberField('VatSumFc', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.NET_PROCEDURE = new core_1.EnumField('NetProcedure', DownPayments);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FORM_1099 = new core_1.NumberField('Form1099', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BOX_1099 = new core_1.StringField('Box1099', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REVISION_PO = new core_1.EnumField('RevisionPo', DownPayments);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REQURIED_DATE = new core_1.DateField('RequriedDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CANCEL_DATE = new core_1.DateField('CancelDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', DownPayments);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SUBMITTED = new core_1.EnumField('Submitted', DownPayments);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SEGMENT = new core_1.NumberField('Segment', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PICK_STATUS = new core_1.EnumField('PickStatus', DownPayments);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PICK = new core_1.EnumField('Pick', DownPayments);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', DownPayments);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', DownPayments);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.RESERVE = new core_1.EnumField('Reserve', DownPayments);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PROJECT = new core_1.StringField('Project', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', DownPayments);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ROUNDING = new core_1.EnumField('Rounding', DownPayments);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DEFERRED_TAX = new core_1.EnumField('DeferredTax', DownPayments);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_APPLIED = new core_1.NumberField('WTApplied', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', DownPayments);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.AGENT_CODE = new core_1.StringField('AgentCode', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', DownPayments);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BASE_AMOUNT = new core_1.NumberField('BaseAmount', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_AMOUNT = new core_1.NumberField('WTAmount', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.VAT_DATE = new core_1.DateField('VatDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', DownPayments);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ADDRESS_2 = new core_1.StringField('Address2', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', DownPayments);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAY_TO_CODE = new core_1.StringField('PayToCode', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.MANUAL_NUMBER = new core_1.StringField('ManualNumber', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', DownPayments);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', DownPayments);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOWN_PAYMENT = new core_1.NumberField('DownPayment', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', DownPayments);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PICK_REMARK = new core_1.StringField('PickRemark', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CLOSING_DATE = new core_1.DateField('ClosingDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SERIES_STRING = new core_1.StringField('SeriesString', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', DownPayments);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', DownPayments);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.VAT_PERCENT = new core_1.NumberField('VatPercent', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CANCELLED = new core_1.EnumField('Cancelled', DownPayments);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', DownPayments);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', DownPayments);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.GTS_CHECKER = new core_1.NumberField('GTSChecker', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.GTS_PAYEE = new core_1.NumberField('GTSPayee', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.EXTRA_DAYS = new core_1.NumberField('ExtraDays', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.START_FROM = new core_1.EnumField('StartFrom', DownPayments);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.NTS_APPROVED = new core_1.EnumField('NTSApproved', DownPayments);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', DownPayments);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_DOC_SERIES = new core_1.NumberField('EDocSeries', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_DOC_NUM = new core_1.StringField('EDocNum', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_DOC_STATUS = new core_1.EnumField('EDocStatus', DownPayments);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', DownPayments);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.GROUP_SERIES = new core_1.NumberField('GroupSeries', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.GROUP_NUMBER = new core_1.NumberField('GroupNumber', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', DownPayments);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', DownPayments);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', DownPayments);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', DownPayments);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', DownPayments);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CLOSING_OPTION = new core_1.EnumField('ClosingOption', DownPayments);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', DownPayments);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', DownPayments);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', DownPayments, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', DownPayments);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BPL_NAME = new core_1.StringField('BPLName', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.VAT_REG_NUM = new core_1.StringField('VATRegNum', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SUPPLIER = new core_1.StringField('Supplier', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.RELEASER = new core_1.NumberField('Releaser', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.RECEIVER = new core_1.NumberField('Receiver', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.IS_ALTERATION = new core_1.EnumField('IsAlteration', DownPayments);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CANCEL_STATUS = new core_1.EnumField('CancelStatus', DownPayments);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REQUESTER = new core_1.StringField('Requester', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REQUESTER_NAME = new core_1.StringField('RequesterName', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', DownPayments);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REQ_TYPE = new core_1.NumberField('ReqType', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', DownPayments);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', DownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', DownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', DownPayments);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', DownPayments);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', DownPayments);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', DownPayments);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.LETTER = new core_1.EnumField('Letter', DownPayments);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.INTERIM_TYPE = new core_1.EnumField('InterimType', DownPayments);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.RELATED_TYPE = new core_1.NumberField('RelatedType', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', DownPayments);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.UPDATE_TIME = new core_1.TimeField('UpdateTime', DownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PRICE_MODE = new core_1.EnumField('PriceMode', DownPayments);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.REVISION = new core_1.EnumField('Revision', DownPayments);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', DownPayments);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', DownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SHIP_FROM = new core_1.StringField('ShipFrom', DownPayments, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', DownPayments);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', DownPayments);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', DownPayments);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ISSUING_REASON = new core_1.NumberField('IssuingReason', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', DownPayments, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', DownPayments, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', DownPayments, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', DownPayments, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', DownPayments, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', DownPayments, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', DownPayments, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', DownPayments, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', DownPayments, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', DownPayments);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', DownPayments);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', DownPayments, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', DownPayments, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CURRENCY = new core_1.OneToOneLink('Currency', DownPayments, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', DownPayments, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', DownPayments, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', DownPayments, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', DownPayments, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', DownPayments, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.FORMS_1099 = new core_1.OneToOneLink('Forms1099', DownPayments, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', DownPayments, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', DownPayments, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.PROJECT_2 = new core_1.OneToOneLink('Project2', DownPayments, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', DownPayments, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.COUNTRY = new core_1.OneToOneLink('Country', DownPayments, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', DownPayments, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', DownPayments, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.NF_MODEL = new core_1.OneToOneLink('NFModel', DownPayments, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', DownPayments, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', DownPayments, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.BRANCH = new core_1.OneToOneLink('Branch', DownPayments, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.DEPARTMENT = new core_1.OneToOneLink('Department', DownPayments, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DownPayments.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', DownPayments, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the DownPayments entity.
     */
    DownPayments._allFields = [
        DownPayments.DOC_ENTRY,
        DownPayments.DOC_NUM,
        DownPayments.DOC_TYPE,
        DownPayments.HAND_WRITTEN,
        DownPayments.PRINTED,
        DownPayments.DOC_DATE,
        DownPayments.DOC_DUE_DATE,
        DownPayments.CARD_CODE,
        DownPayments.CARD_NAME,
        DownPayments.ADDRESS,
        DownPayments.NUM_AT_CARD,
        DownPayments.DOC_TOTAL,
        DownPayments.ATTACHMENT_ENTRY,
        DownPayments.DOC_CURRENCY,
        DownPayments.DOC_RATE,
        DownPayments.REFERENCE_1,
        DownPayments.REFERENCE_2,
        DownPayments.COMMENTS,
        DownPayments.JOURNAL_MEMO,
        DownPayments.PAYMENT_GROUP_CODE,
        DownPayments.DOC_TIME,
        DownPayments.SALES_PERSON_CODE,
        DownPayments.TRANSPORTATION_CODE,
        DownPayments.CONFIRMED,
        DownPayments.IMPORT_FILE_NUM,
        DownPayments.SUMMERY_TYPE,
        DownPayments.CONTACT_PERSON_CODE,
        DownPayments.SHOW_SCN,
        DownPayments.SERIES,
        DownPayments.TAX_DATE,
        DownPayments.PARTIAL_SUPPLY,
        DownPayments.DOC_OBJECT_CODE,
        DownPayments.SHIP_TO_CODE,
        DownPayments.INDICATOR,
        DownPayments.FEDERAL_TAX_ID,
        DownPayments.DISCOUNT_PERCENT,
        DownPayments.PAYMENT_REFERENCE,
        DownPayments.CREATION_DATE,
        DownPayments.UPDATE_DATE,
        DownPayments.FINANCIAL_PERIOD,
        DownPayments.TRANS_NUM,
        DownPayments.VAT_SUM,
        DownPayments.VAT_SUM_SYS,
        DownPayments.VAT_SUM_FC,
        DownPayments.NET_PROCEDURE,
        DownPayments.DOC_TOTAL_FC,
        DownPayments.DOC_TOTAL_SYS,
        DownPayments.FORM_1099,
        DownPayments.BOX_1099,
        DownPayments.REVISION_PO,
        DownPayments.REQURIED_DATE,
        DownPayments.CANCEL_DATE,
        DownPayments.BLOCK_DUNNING,
        DownPayments.SUBMITTED,
        DownPayments.SEGMENT,
        DownPayments.PICK_STATUS,
        DownPayments.PICK,
        DownPayments.PAYMENT_METHOD,
        DownPayments.PAYMENT_BLOCK,
        DownPayments.PAYMENT_BLOCK_ENTRY,
        DownPayments.CENTRAL_BANK_INDICATOR,
        DownPayments.MAXIMUM_CASH_DISCOUNT,
        DownPayments.RESERVE,
        DownPayments.PROJECT,
        DownPayments.EXEMPTION_VALIDITY_DATE_FROM,
        DownPayments.EXEMPTION_VALIDITY_DATE_TO,
        DownPayments.WARE_HOUSE_UPDATE_TYPE,
        DownPayments.ROUNDING,
        DownPayments.EXTERNAL_CORRECTED_DOC_NUM,
        DownPayments.INTERNAL_CORRECTED_DOC_NUM,
        DownPayments.NEXT_CORRECTING_DOCUMENT,
        DownPayments.DEFERRED_TAX,
        DownPayments.TAX_EXEMPTION_LETTER_NUM,
        DownPayments.WT_APPLIED,
        DownPayments.WT_APPLIED_FC,
        DownPayments.BILL_OF_EXCHANGE_RESERVED,
        DownPayments.AGENT_CODE,
        DownPayments.WT_APPLIED_SC,
        DownPayments.TOTAL_EQUALIZATION_TAX,
        DownPayments.TOTAL_EQUALIZATION_TAX_FC,
        DownPayments.TOTAL_EQUALIZATION_TAX_SC,
        DownPayments.NUMBER_OF_INSTALLMENTS,
        DownPayments.APPLY_TAX_ON_FIRST_INSTALLMENT,
        DownPayments.WT_NON_SUBJECT_AMOUNT,
        DownPayments.WT_NON_SUBJECT_AMOUNT_SC,
        DownPayments.WT_NON_SUBJECT_AMOUNT_FC,
        DownPayments.WT_EXEMPTED_AMOUNT,
        DownPayments.WT_EXEMPTED_AMOUNT_SC,
        DownPayments.WT_EXEMPTED_AMOUNT_FC,
        DownPayments.BASE_AMOUNT,
        DownPayments.BASE_AMOUNT_SC,
        DownPayments.BASE_AMOUNT_FC,
        DownPayments.WT_AMOUNT,
        DownPayments.WT_AMOUNT_SC,
        DownPayments.WT_AMOUNT_FC,
        DownPayments.VAT_DATE,
        DownPayments.DOCUMENTS_OWNER,
        DownPayments.FOLIO_PREFIX_STRING,
        DownPayments.FOLIO_NUMBER,
        DownPayments.DOCUMENT_SUB_TYPE,
        DownPayments.BP_CHANNEL_CODE,
        DownPayments.BP_CHANNEL_CONTACT,
        DownPayments.ADDRESS_2,
        DownPayments.DOCUMENT_STATUS,
        DownPayments.PERIOD_INDICATOR,
        DownPayments.PAY_TO_CODE,
        DownPayments.MANUAL_NUMBER,
        DownPayments.USE_SHPD_GOODS_ACT,
        DownPayments.IS_PAY_TO_BANK,
        DownPayments.PAY_TO_BANK_COUNTRY,
        DownPayments.PAY_TO_BANK_CODE,
        DownPayments.PAY_TO_BANK_ACCOUNT_NO,
        DownPayments.PAY_TO_BANK_BRANCH,
        DownPayments.BPL_ID_ASSIGNED_TO_INVOICE,
        DownPayments.DOWN_PAYMENT,
        DownPayments.RESERVE_INVOICE,
        DownPayments.LANGUAGE_CODE,
        DownPayments.TRACKING_NUMBER,
        DownPayments.PICK_REMARK,
        DownPayments.CLOSING_DATE,
        DownPayments.SEQUENCE_CODE,
        DownPayments.SEQUENCE_SERIAL,
        DownPayments.SERIES_STRING,
        DownPayments.SUB_SERIES_STRING,
        DownPayments.SEQUENCE_MODEL,
        DownPayments.USE_CORRECTION_VAT_GROUP,
        DownPayments.TOTAL_DISCOUNT,
        DownPayments.DOWN_PAYMENT_AMOUNT,
        DownPayments.DOWN_PAYMENT_PERCENTAGE,
        DownPayments.DOWN_PAYMENT_TYPE,
        DownPayments.DOWN_PAYMENT_AMOUNT_SC,
        DownPayments.DOWN_PAYMENT_AMOUNT_FC,
        DownPayments.VAT_PERCENT,
        DownPayments.SERVICE_GROSS_PROFIT_PERCENT,
        DownPayments.OPENING_REMARKS,
        DownPayments.CLOSING_REMARKS,
        DownPayments.ROUNDING_DIFF_AMOUNT,
        DownPayments.ROUNDING_DIFF_AMOUNT_FC,
        DownPayments.ROUNDING_DIFF_AMOUNT_SC,
        DownPayments.CANCELLED,
        DownPayments.SIGNATURE_INPUT_MESSAGE,
        DownPayments.SIGNATURE_DIGEST,
        DownPayments.CERTIFICATION_NUMBER,
        DownPayments.PRIVATE_KEY_VERSION,
        DownPayments.CONTROL_ACCOUNT,
        DownPayments.INSURANCE_OPERATION_347,
        DownPayments.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        DownPayments.GTS_CHECKER,
        DownPayments.GTS_PAYEE,
        DownPayments.EXTRA_MONTH,
        DownPayments.EXTRA_DAYS,
        DownPayments.CASH_DISCOUNT_DATE_OFFSET,
        DownPayments.START_FROM,
        DownPayments.NTS_APPROVED,
        DownPayments.E_TAX_WEB_SITE,
        DownPayments.E_TAX_NUMBER,
        DownPayments.NTS_APPROVED_NUMBER,
        DownPayments.E_DOC_GENERATION_TYPE,
        DownPayments.E_DOC_SERIES,
        DownPayments.E_DOC_NUM,
        DownPayments.E_DOC_EXPORT_FORMAT,
        DownPayments.E_DOC_STATUS,
        DownPayments.E_DOC_ERROR_CODE,
        DownPayments.E_DOC_ERROR_MESSAGE,
        DownPayments.DOWN_PAYMENT_STATUS,
        DownPayments.GROUP_SERIES,
        DownPayments.GROUP_NUMBER,
        DownPayments.GROUP_HAND_WRITTEN,
        DownPayments.REOPEN_ORIGINAL_DOCUMENT,
        DownPayments.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        DownPayments.CREATE_ONLINE_QUOTATION,
        DownPayments.POS_EQUIPMENT_NUMBER,
        DownPayments.POS_MANUFACTURER_SERIAL_NUMBER,
        DownPayments.POS_CASHIER_NUMBER,
        DownPayments.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        DownPayments.CLOSING_OPTION,
        DownPayments.SPECIFIED_CLOSING_DATE,
        DownPayments.OPEN_FOR_LANDED_COSTS,
        DownPayments.AUTHORIZATION_STATUS,
        DownPayments.TOTAL_DISCOUNT_FC,
        DownPayments.TOTAL_DISCOUNT_SC,
        DownPayments.RELEVANT_TO_GTS,
        DownPayments.BPL_NAME,
        DownPayments.VAT_REG_NUM,
        DownPayments.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        DownPayments.SUPPLIER,
        DownPayments.RELEASER,
        DownPayments.RECEIVER,
        DownPayments.BLANKET_AGREEMENT_NUMBER,
        DownPayments.IS_ALTERATION,
        DownPayments.CANCEL_STATUS,
        DownPayments.ASSET_VALUE_DATE,
        DownPayments.REQUESTER,
        DownPayments.REQUESTER_NAME,
        DownPayments.REQUESTER_BRANCH,
        DownPayments.REQUESTER_DEPARTMENT,
        DownPayments.REQUESTER_EMAIL,
        DownPayments.SEND_NOTIFICATION,
        DownPayments.REQ_TYPE,
        DownPayments.DOCUMENT_DELIVERY,
        DownPayments.AUTHORIZATION_CODE,
        DownPayments.START_DELIVERY_DATE,
        DownPayments.START_DELIVERY_TIME,
        DownPayments.END_DELIVERY_DATE,
        DownPayments.END_DELIVERY_TIME,
        DownPayments.VEHICLE_PLATE,
        DownPayments.AT_DOCUMENT_TYPE,
        DownPayments.ELEC_COMM_STATUS,
        DownPayments.ELEC_COMM_MESSAGE,
        DownPayments.REUSE_DOCUMENT_NUM,
        DownPayments.REUSE_NOTA_FISCAL_NUM,
        DownPayments.PRINT_SEPA_DIRECT,
        DownPayments.FISCAL_DOC_NUM,
        DownPayments.POS_DAILY_SUMMARY_NO,
        DownPayments.POS_RECEIPT_NO,
        DownPayments.POINT_OF_ISSUE_CODE,
        DownPayments.LETTER,
        DownPayments.FOLIO_NUMBER_FROM,
        DownPayments.FOLIO_NUMBER_TO,
        DownPayments.INTERIM_TYPE,
        DownPayments.RELATED_TYPE,
        DownPayments.RELATED_ENTRY,
        DownPayments.DOCUMENT_TAX_ID,
        DownPayments.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        DownPayments.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        DownPayments.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        DownPayments.POS_CASH_REGISTER,
        DownPayments.UPDATE_TIME,
        DownPayments.PRICE_MODE,
        DownPayments.DOWN_PAYMENT_TRASACTION_ID,
        DownPayments.REVISION,
        DownPayments.ORIGINAL_REF_NO,
        DownPayments.ORIGINAL_REF_DATE,
        DownPayments.GST_TRANSACTION_TYPE,
        DownPayments.ORIGINAL_CREDIT_OR_DEBIT_NO,
        DownPayments.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        DownPayments.E_COMMERCE_OPERATOR,
        DownPayments.E_COMMERCE_GSTIN,
        DownPayments.TAX_INVOICE_NO,
        DownPayments.TAX_INVOICE_DATE,
        DownPayments.SHIP_FROM,
        DownPayments.COMMISSION_TRADE,
        DownPayments.COMMISSION_TRADE_RETURN,
        DownPayments.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        DownPayments.ISSUING_REASON,
        DownPayments.DOCUMENT_APPROVAL_REQUESTS,
        DownPayments.DOCUMENT_LINES,
        DownPayments.DOCUMENT_ADDITIONAL_EXPENSES,
        DownPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        DownPayments.WITHHOLDING_TAX_DATA_COLLECTION,
        DownPayments.DOCUMENT_PACKAGES,
        DownPayments.DOCUMENT_SPECIAL_LINES,
        DownPayments.DOCUMENT_INSTALLMENTS,
        DownPayments.DOWN_PAYMENTS_TO_DRAW,
        DownPayments.TAX_EXTENSION,
        DownPayments.ADDRESS_EXTENSION,
        DownPayments.SOI_WIZARD_ID,
        DownPayments.BUSINESS_PARTNER,
        DownPayments.CURRENCY,
        DownPayments.PAYMENT_TERMS_TYPE,
        DownPayments.SALES_PERSON,
        DownPayments.SHIPPING_TYPE,
        DownPayments.FACTORING_INDICATOR,
        DownPayments.JOURNAL_ENTRY,
        DownPayments.FORMS_1099,
        DownPayments.WIZARD_PAYMENT_METHOD,
        DownPayments.PAYMENT_BLOCK_2,
        DownPayments.PROJECT_2,
        DownPayments.EMPLOYEE_INFO,
        DownPayments.COUNTRY,
        DownPayments.BUSINESS_PLACE,
        DownPayments.USER_LANGUAGE,
        DownPayments.NF_MODEL,
        DownPayments.CHART_OF_ACCOUNT,
        DownPayments.TAX_WEB_SITE,
        DownPayments.BRANCH,
        DownPayments.DEPARTMENT,
        DownPayments.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    DownPayments.ALL_FIELDS = new core_1.AllFields('*', DownPayments);
    /**
     * All key fields of the DownPayments entity.
     */
    DownPayments._keyFields = [DownPayments.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property DownPayments.
     */
    DownPayments._keys = DownPayments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DownPayments = exports.DownPayments || (exports.DownPayments = {}));
exports.DownPayments = DownPayments;
//# sourceMappingURL=DownPayments.js.map