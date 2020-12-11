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
exports.ReturnRequest = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ReturnRequestRequestBuilder_1 = require("./ReturnRequestRequestBuilder");
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
 * This class represents the entity "ReturnRequest" of service "SAPB1".
 */
var ReturnRequest = /** @class */ (function (_super) {
    __extends(ReturnRequest, _super);
    function ReturnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ReturnRequest`.
     * @returns A builder that constructs instances of entity type `ReturnRequest`.
     */
    ReturnRequest.builder = function () {
        return core_1.EntityV4.entityBuilder(ReturnRequest);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ReturnRequest` entity type.
     * @returns A `ReturnRequest` request builder.
     */
    ReturnRequest.requestBuilder = function () {
        return new ReturnRequestRequestBuilder_1.ReturnRequestRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReturnRequest`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ReturnRequest`.
     */
    ReturnRequest.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ReturnRequest);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ReturnRequest.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ReturnRequest.
     */
    ReturnRequest._entityName = 'ReturnRequest';
    /**
     * Default url path for the according service.
     */
    ReturnRequest._defaultServicePath = '/b1s/v2/';
    return ReturnRequest;
}(core_1.EntityV4));
exports.ReturnRequest = ReturnRequest;
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
(function (ReturnRequest) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_ENTRY = new core_1.NumberField('DocEntry', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_NUM = new core_1.NumberField('DocNum', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_TYPE = new core_1.EnumField('DocType', ReturnRequest);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.HAND_WRITTEN = new core_1.EnumField('HandWritten', ReturnRequest);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PRINTED = new core_1.EnumField('Printed', ReturnRequest);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_DATE = new core_1.DateField('DocDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_DUE_DATE = new core_1.DateField('DocDueDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CARD_CODE = new core_1.StringField('CardCode', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CARD_NAME = new core_1.StringField('CardName', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ADDRESS = new core_1.StringField('Address', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.NUM_AT_CARD = new core_1.StringField('NumAtCard', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_TOTAL = new core_1.NumberField('DocTotal', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_CURRENCY = new core_1.StringField('DocCurrency', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_RATE = new core_1.NumberField('DocRate', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REFERENCE_1 = new core_1.StringField('Reference1', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REFERENCE_2 = new core_1.StringField('Reference2', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.COMMENTS = new core_1.StringField('Comments', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.JOURNAL_MEMO = new core_1.StringField('JournalMemo', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_TIME = new core_1.TimeField('DocTime', ReturnRequest, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CONFIRMED = new core_1.EnumField('Confirmed', ReturnRequest);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SUMMERY_TYPE = new core_1.EnumField('SummeryType', ReturnRequest);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SHOW_SCN = new core_1.EnumField('ShowSCN', ReturnRequest);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SERIES = new core_1.NumberField('Series', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TAX_DATE = new core_1.DateField('TaxDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', ReturnRequest);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', ReturnRequest);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SHIP_TO_CODE = new core_1.StringField('ShipToCode', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.INDICATOR = new core_1.StringField('Indicator', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CREATION_DATE = new core_1.DateField('CreationDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.UPDATE_DATE = new core_1.DateField('UpdateDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TRANS_NUM = new core_1.NumberField('TransNum', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.VAT_SUM = new core_1.NumberField('VatSum', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.VAT_SUM_FC = new core_1.NumberField('VatSumFc', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.NET_PROCEDURE = new core_1.EnumField('NetProcedure', ReturnRequest);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FORM_1099 = new core_1.NumberField('Form1099', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BOX_1099 = new core_1.StringField('Box1099', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REVISION_PO = new core_1.EnumField('RevisionPo', ReturnRequest);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REQURIED_DATE = new core_1.DateField('RequriedDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CANCEL_DATE = new core_1.DateField('CancelDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', ReturnRequest);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SUBMITTED = new core_1.EnumField('Submitted', ReturnRequest);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SEGMENT = new core_1.NumberField('Segment', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PICK_STATUS = new core_1.EnumField('PickStatus', ReturnRequest);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PICK = new core_1.EnumField('Pick', ReturnRequest);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', ReturnRequest);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', ReturnRequest);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.RESERVE = new core_1.EnumField('Reserve', ReturnRequest);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PROJECT = new core_1.StringField('Project', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', ReturnRequest);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ROUNDING = new core_1.EnumField('Rounding', ReturnRequest);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DEFERRED_TAX = new core_1.EnumField('DeferredTax', ReturnRequest);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_APPLIED = new core_1.NumberField('WTApplied', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', ReturnRequest);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.AGENT_CODE = new core_1.StringField('AgentCode', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', ReturnRequest);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BASE_AMOUNT = new core_1.NumberField('BaseAmount', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_AMOUNT = new core_1.NumberField('WTAmount', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.VAT_DATE = new core_1.DateField('VatDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', ReturnRequest);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ADDRESS_2 = new core_1.StringField('Address2', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', ReturnRequest);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAY_TO_CODE = new core_1.StringField('PayToCode', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.MANUAL_NUMBER = new core_1.StringField('ManualNumber', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', ReturnRequest);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', ReturnRequest);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOWN_PAYMENT = new core_1.NumberField('DownPayment', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', ReturnRequest);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PICK_REMARK = new core_1.StringField('PickRemark', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CLOSING_DATE = new core_1.DateField('ClosingDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SERIES_STRING = new core_1.StringField('SeriesString', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', ReturnRequest);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', ReturnRequest);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.VAT_PERCENT = new core_1.NumberField('VatPercent', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CANCELLED = new core_1.EnumField('Cancelled', ReturnRequest);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', ReturnRequest);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', ReturnRequest);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.GTS_CHECKER = new core_1.NumberField('GTSChecker', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.GTS_PAYEE = new core_1.NumberField('GTSPayee', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.EXTRA_DAYS = new core_1.NumberField('ExtraDays', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.START_FROM = new core_1.EnumField('StartFrom', ReturnRequest);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.NTS_APPROVED = new core_1.EnumField('NTSApproved', ReturnRequest);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', ReturnRequest);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_DOC_SERIES = new core_1.NumberField('EDocSeries', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_DOC_NUM = new core_1.StringField('EDocNum', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_DOC_STATUS = new core_1.EnumField('EDocStatus', ReturnRequest);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', ReturnRequest);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.GROUP_SERIES = new core_1.NumberField('GroupSeries', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.GROUP_NUMBER = new core_1.NumberField('GroupNumber', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', ReturnRequest);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', ReturnRequest);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', ReturnRequest);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', ReturnRequest);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', ReturnRequest);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CLOSING_OPTION = new core_1.EnumField('ClosingOption', ReturnRequest);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', ReturnRequest);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', ReturnRequest);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', ReturnRequest, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', ReturnRequest);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BPL_NAME = new core_1.StringField('BPLName', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.VAT_REG_NUM = new core_1.StringField('VATRegNum', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SUPPLIER = new core_1.StringField('Supplier', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.RELEASER = new core_1.NumberField('Releaser', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.RECEIVER = new core_1.NumberField('Receiver', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.IS_ALTERATION = new core_1.EnumField('IsAlteration', ReturnRequest);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CANCEL_STATUS = new core_1.EnumField('CancelStatus', ReturnRequest);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REQUESTER = new core_1.StringField('Requester', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REQUESTER_NAME = new core_1.StringField('RequesterName', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', ReturnRequest);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REQ_TYPE = new core_1.NumberField('ReqType', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', ReturnRequest);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', ReturnRequest, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', ReturnRequest, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', ReturnRequest);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', ReturnRequest);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', ReturnRequest);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', ReturnRequest);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.LETTER = new core_1.EnumField('Letter', ReturnRequest);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.INTERIM_TYPE = new core_1.EnumField('InterimType', ReturnRequest);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.RELATED_TYPE = new core_1.NumberField('RelatedType', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', ReturnRequest);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.UPDATE_TIME = new core_1.TimeField('UpdateTime', ReturnRequest, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PRICE_MODE = new core_1.EnumField('PriceMode', ReturnRequest);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.REVISION = new core_1.EnumField('Revision', ReturnRequest);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', ReturnRequest);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', ReturnRequest, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SHIP_FROM = new core_1.StringField('ShipFrom', ReturnRequest, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', ReturnRequest);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', ReturnRequest);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', ReturnRequest);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ISSUING_REASON = new core_1.NumberField('IssuingReason', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', ReturnRequest, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', ReturnRequest, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', ReturnRequest, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', ReturnRequest, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', ReturnRequest, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', ReturnRequest, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', ReturnRequest, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', ReturnRequest, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', ReturnRequest, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', ReturnRequest);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', ReturnRequest);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', ReturnRequest, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', ReturnRequest, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CURRENCY = new core_1.OneToOneLink('Currency', ReturnRequest, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', ReturnRequest, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', ReturnRequest, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', ReturnRequest, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', ReturnRequest, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', ReturnRequest, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.FORMS_1099 = new core_1.OneToOneLink('Forms1099', ReturnRequest, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', ReturnRequest, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', ReturnRequest, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.PROJECT_2 = new core_1.OneToOneLink('Project2', ReturnRequest, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', ReturnRequest, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.COUNTRY = new core_1.OneToOneLink('Country', ReturnRequest, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', ReturnRequest, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', ReturnRequest, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.NF_MODEL = new core_1.OneToOneLink('NFModel', ReturnRequest, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', ReturnRequest, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', ReturnRequest, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.BRANCH = new core_1.OneToOneLink('Branch', ReturnRequest, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.DEPARTMENT = new core_1.OneToOneLink('Department', ReturnRequest, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReturnRequest.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', ReturnRequest, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the ReturnRequest entity.
     */
    ReturnRequest._allFields = [
        ReturnRequest.DOC_ENTRY,
        ReturnRequest.DOC_NUM,
        ReturnRequest.DOC_TYPE,
        ReturnRequest.HAND_WRITTEN,
        ReturnRequest.PRINTED,
        ReturnRequest.DOC_DATE,
        ReturnRequest.DOC_DUE_DATE,
        ReturnRequest.CARD_CODE,
        ReturnRequest.CARD_NAME,
        ReturnRequest.ADDRESS,
        ReturnRequest.NUM_AT_CARD,
        ReturnRequest.DOC_TOTAL,
        ReturnRequest.ATTACHMENT_ENTRY,
        ReturnRequest.DOC_CURRENCY,
        ReturnRequest.DOC_RATE,
        ReturnRequest.REFERENCE_1,
        ReturnRequest.REFERENCE_2,
        ReturnRequest.COMMENTS,
        ReturnRequest.JOURNAL_MEMO,
        ReturnRequest.PAYMENT_GROUP_CODE,
        ReturnRequest.DOC_TIME,
        ReturnRequest.SALES_PERSON_CODE,
        ReturnRequest.TRANSPORTATION_CODE,
        ReturnRequest.CONFIRMED,
        ReturnRequest.IMPORT_FILE_NUM,
        ReturnRequest.SUMMERY_TYPE,
        ReturnRequest.CONTACT_PERSON_CODE,
        ReturnRequest.SHOW_SCN,
        ReturnRequest.SERIES,
        ReturnRequest.TAX_DATE,
        ReturnRequest.PARTIAL_SUPPLY,
        ReturnRequest.DOC_OBJECT_CODE,
        ReturnRequest.SHIP_TO_CODE,
        ReturnRequest.INDICATOR,
        ReturnRequest.FEDERAL_TAX_ID,
        ReturnRequest.DISCOUNT_PERCENT,
        ReturnRequest.PAYMENT_REFERENCE,
        ReturnRequest.CREATION_DATE,
        ReturnRequest.UPDATE_DATE,
        ReturnRequest.FINANCIAL_PERIOD,
        ReturnRequest.TRANS_NUM,
        ReturnRequest.VAT_SUM,
        ReturnRequest.VAT_SUM_SYS,
        ReturnRequest.VAT_SUM_FC,
        ReturnRequest.NET_PROCEDURE,
        ReturnRequest.DOC_TOTAL_FC,
        ReturnRequest.DOC_TOTAL_SYS,
        ReturnRequest.FORM_1099,
        ReturnRequest.BOX_1099,
        ReturnRequest.REVISION_PO,
        ReturnRequest.REQURIED_DATE,
        ReturnRequest.CANCEL_DATE,
        ReturnRequest.BLOCK_DUNNING,
        ReturnRequest.SUBMITTED,
        ReturnRequest.SEGMENT,
        ReturnRequest.PICK_STATUS,
        ReturnRequest.PICK,
        ReturnRequest.PAYMENT_METHOD,
        ReturnRequest.PAYMENT_BLOCK,
        ReturnRequest.PAYMENT_BLOCK_ENTRY,
        ReturnRequest.CENTRAL_BANK_INDICATOR,
        ReturnRequest.MAXIMUM_CASH_DISCOUNT,
        ReturnRequest.RESERVE,
        ReturnRequest.PROJECT,
        ReturnRequest.EXEMPTION_VALIDITY_DATE_FROM,
        ReturnRequest.EXEMPTION_VALIDITY_DATE_TO,
        ReturnRequest.WARE_HOUSE_UPDATE_TYPE,
        ReturnRequest.ROUNDING,
        ReturnRequest.EXTERNAL_CORRECTED_DOC_NUM,
        ReturnRequest.INTERNAL_CORRECTED_DOC_NUM,
        ReturnRequest.NEXT_CORRECTING_DOCUMENT,
        ReturnRequest.DEFERRED_TAX,
        ReturnRequest.TAX_EXEMPTION_LETTER_NUM,
        ReturnRequest.WT_APPLIED,
        ReturnRequest.WT_APPLIED_FC,
        ReturnRequest.BILL_OF_EXCHANGE_RESERVED,
        ReturnRequest.AGENT_CODE,
        ReturnRequest.WT_APPLIED_SC,
        ReturnRequest.TOTAL_EQUALIZATION_TAX,
        ReturnRequest.TOTAL_EQUALIZATION_TAX_FC,
        ReturnRequest.TOTAL_EQUALIZATION_TAX_SC,
        ReturnRequest.NUMBER_OF_INSTALLMENTS,
        ReturnRequest.APPLY_TAX_ON_FIRST_INSTALLMENT,
        ReturnRequest.WT_NON_SUBJECT_AMOUNT,
        ReturnRequest.WT_NON_SUBJECT_AMOUNT_SC,
        ReturnRequest.WT_NON_SUBJECT_AMOUNT_FC,
        ReturnRequest.WT_EXEMPTED_AMOUNT,
        ReturnRequest.WT_EXEMPTED_AMOUNT_SC,
        ReturnRequest.WT_EXEMPTED_AMOUNT_FC,
        ReturnRequest.BASE_AMOUNT,
        ReturnRequest.BASE_AMOUNT_SC,
        ReturnRequest.BASE_AMOUNT_FC,
        ReturnRequest.WT_AMOUNT,
        ReturnRequest.WT_AMOUNT_SC,
        ReturnRequest.WT_AMOUNT_FC,
        ReturnRequest.VAT_DATE,
        ReturnRequest.DOCUMENTS_OWNER,
        ReturnRequest.FOLIO_PREFIX_STRING,
        ReturnRequest.FOLIO_NUMBER,
        ReturnRequest.DOCUMENT_SUB_TYPE,
        ReturnRequest.BP_CHANNEL_CODE,
        ReturnRequest.BP_CHANNEL_CONTACT,
        ReturnRequest.ADDRESS_2,
        ReturnRequest.DOCUMENT_STATUS,
        ReturnRequest.PERIOD_INDICATOR,
        ReturnRequest.PAY_TO_CODE,
        ReturnRequest.MANUAL_NUMBER,
        ReturnRequest.USE_SHPD_GOODS_ACT,
        ReturnRequest.IS_PAY_TO_BANK,
        ReturnRequest.PAY_TO_BANK_COUNTRY,
        ReturnRequest.PAY_TO_BANK_CODE,
        ReturnRequest.PAY_TO_BANK_ACCOUNT_NO,
        ReturnRequest.PAY_TO_BANK_BRANCH,
        ReturnRequest.BPL_ID_ASSIGNED_TO_INVOICE,
        ReturnRequest.DOWN_PAYMENT,
        ReturnRequest.RESERVE_INVOICE,
        ReturnRequest.LANGUAGE_CODE,
        ReturnRequest.TRACKING_NUMBER,
        ReturnRequest.PICK_REMARK,
        ReturnRequest.CLOSING_DATE,
        ReturnRequest.SEQUENCE_CODE,
        ReturnRequest.SEQUENCE_SERIAL,
        ReturnRequest.SERIES_STRING,
        ReturnRequest.SUB_SERIES_STRING,
        ReturnRequest.SEQUENCE_MODEL,
        ReturnRequest.USE_CORRECTION_VAT_GROUP,
        ReturnRequest.TOTAL_DISCOUNT,
        ReturnRequest.DOWN_PAYMENT_AMOUNT,
        ReturnRequest.DOWN_PAYMENT_PERCENTAGE,
        ReturnRequest.DOWN_PAYMENT_TYPE,
        ReturnRequest.DOWN_PAYMENT_AMOUNT_SC,
        ReturnRequest.DOWN_PAYMENT_AMOUNT_FC,
        ReturnRequest.VAT_PERCENT,
        ReturnRequest.SERVICE_GROSS_PROFIT_PERCENT,
        ReturnRequest.OPENING_REMARKS,
        ReturnRequest.CLOSING_REMARKS,
        ReturnRequest.ROUNDING_DIFF_AMOUNT,
        ReturnRequest.ROUNDING_DIFF_AMOUNT_FC,
        ReturnRequest.ROUNDING_DIFF_AMOUNT_SC,
        ReturnRequest.CANCELLED,
        ReturnRequest.SIGNATURE_INPUT_MESSAGE,
        ReturnRequest.SIGNATURE_DIGEST,
        ReturnRequest.CERTIFICATION_NUMBER,
        ReturnRequest.PRIVATE_KEY_VERSION,
        ReturnRequest.CONTROL_ACCOUNT,
        ReturnRequest.INSURANCE_OPERATION_347,
        ReturnRequest.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        ReturnRequest.GTS_CHECKER,
        ReturnRequest.GTS_PAYEE,
        ReturnRequest.EXTRA_MONTH,
        ReturnRequest.EXTRA_DAYS,
        ReturnRequest.CASH_DISCOUNT_DATE_OFFSET,
        ReturnRequest.START_FROM,
        ReturnRequest.NTS_APPROVED,
        ReturnRequest.E_TAX_WEB_SITE,
        ReturnRequest.E_TAX_NUMBER,
        ReturnRequest.NTS_APPROVED_NUMBER,
        ReturnRequest.E_DOC_GENERATION_TYPE,
        ReturnRequest.E_DOC_SERIES,
        ReturnRequest.E_DOC_NUM,
        ReturnRequest.E_DOC_EXPORT_FORMAT,
        ReturnRequest.E_DOC_STATUS,
        ReturnRequest.E_DOC_ERROR_CODE,
        ReturnRequest.E_DOC_ERROR_MESSAGE,
        ReturnRequest.DOWN_PAYMENT_STATUS,
        ReturnRequest.GROUP_SERIES,
        ReturnRequest.GROUP_NUMBER,
        ReturnRequest.GROUP_HAND_WRITTEN,
        ReturnRequest.REOPEN_ORIGINAL_DOCUMENT,
        ReturnRequest.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        ReturnRequest.CREATE_ONLINE_QUOTATION,
        ReturnRequest.POS_EQUIPMENT_NUMBER,
        ReturnRequest.POS_MANUFACTURER_SERIAL_NUMBER,
        ReturnRequest.POS_CASHIER_NUMBER,
        ReturnRequest.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        ReturnRequest.CLOSING_OPTION,
        ReturnRequest.SPECIFIED_CLOSING_DATE,
        ReturnRequest.OPEN_FOR_LANDED_COSTS,
        ReturnRequest.AUTHORIZATION_STATUS,
        ReturnRequest.TOTAL_DISCOUNT_FC,
        ReturnRequest.TOTAL_DISCOUNT_SC,
        ReturnRequest.RELEVANT_TO_GTS,
        ReturnRequest.BPL_NAME,
        ReturnRequest.VAT_REG_NUM,
        ReturnRequest.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        ReturnRequest.SUPPLIER,
        ReturnRequest.RELEASER,
        ReturnRequest.RECEIVER,
        ReturnRequest.BLANKET_AGREEMENT_NUMBER,
        ReturnRequest.IS_ALTERATION,
        ReturnRequest.CANCEL_STATUS,
        ReturnRequest.ASSET_VALUE_DATE,
        ReturnRequest.REQUESTER,
        ReturnRequest.REQUESTER_NAME,
        ReturnRequest.REQUESTER_BRANCH,
        ReturnRequest.REQUESTER_DEPARTMENT,
        ReturnRequest.REQUESTER_EMAIL,
        ReturnRequest.SEND_NOTIFICATION,
        ReturnRequest.REQ_TYPE,
        ReturnRequest.DOCUMENT_DELIVERY,
        ReturnRequest.AUTHORIZATION_CODE,
        ReturnRequest.START_DELIVERY_DATE,
        ReturnRequest.START_DELIVERY_TIME,
        ReturnRequest.END_DELIVERY_DATE,
        ReturnRequest.END_DELIVERY_TIME,
        ReturnRequest.VEHICLE_PLATE,
        ReturnRequest.AT_DOCUMENT_TYPE,
        ReturnRequest.ELEC_COMM_STATUS,
        ReturnRequest.ELEC_COMM_MESSAGE,
        ReturnRequest.REUSE_DOCUMENT_NUM,
        ReturnRequest.REUSE_NOTA_FISCAL_NUM,
        ReturnRequest.PRINT_SEPA_DIRECT,
        ReturnRequest.FISCAL_DOC_NUM,
        ReturnRequest.POS_DAILY_SUMMARY_NO,
        ReturnRequest.POS_RECEIPT_NO,
        ReturnRequest.POINT_OF_ISSUE_CODE,
        ReturnRequest.LETTER,
        ReturnRequest.FOLIO_NUMBER_FROM,
        ReturnRequest.FOLIO_NUMBER_TO,
        ReturnRequest.INTERIM_TYPE,
        ReturnRequest.RELATED_TYPE,
        ReturnRequest.RELATED_ENTRY,
        ReturnRequest.DOCUMENT_TAX_ID,
        ReturnRequest.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        ReturnRequest.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        ReturnRequest.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        ReturnRequest.POS_CASH_REGISTER,
        ReturnRequest.UPDATE_TIME,
        ReturnRequest.PRICE_MODE,
        ReturnRequest.DOWN_PAYMENT_TRASACTION_ID,
        ReturnRequest.REVISION,
        ReturnRequest.ORIGINAL_REF_NO,
        ReturnRequest.ORIGINAL_REF_DATE,
        ReturnRequest.GST_TRANSACTION_TYPE,
        ReturnRequest.ORIGINAL_CREDIT_OR_DEBIT_NO,
        ReturnRequest.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        ReturnRequest.E_COMMERCE_OPERATOR,
        ReturnRequest.E_COMMERCE_GSTIN,
        ReturnRequest.TAX_INVOICE_NO,
        ReturnRequest.TAX_INVOICE_DATE,
        ReturnRequest.SHIP_FROM,
        ReturnRequest.COMMISSION_TRADE,
        ReturnRequest.COMMISSION_TRADE_RETURN,
        ReturnRequest.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        ReturnRequest.ISSUING_REASON,
        ReturnRequest.DOCUMENT_APPROVAL_REQUESTS,
        ReturnRequest.DOCUMENT_LINES,
        ReturnRequest.DOCUMENT_ADDITIONAL_EXPENSES,
        ReturnRequest.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        ReturnRequest.WITHHOLDING_TAX_DATA_COLLECTION,
        ReturnRequest.DOCUMENT_PACKAGES,
        ReturnRequest.DOCUMENT_SPECIAL_LINES,
        ReturnRequest.DOCUMENT_INSTALLMENTS,
        ReturnRequest.DOWN_PAYMENTS_TO_DRAW,
        ReturnRequest.TAX_EXTENSION,
        ReturnRequest.ADDRESS_EXTENSION,
        ReturnRequest.SOI_WIZARD_ID,
        ReturnRequest.BUSINESS_PARTNER,
        ReturnRequest.CURRENCY,
        ReturnRequest.PAYMENT_TERMS_TYPE,
        ReturnRequest.SALES_PERSON,
        ReturnRequest.SHIPPING_TYPE,
        ReturnRequest.FACTORING_INDICATOR,
        ReturnRequest.JOURNAL_ENTRY,
        ReturnRequest.FORMS_1099,
        ReturnRequest.WIZARD_PAYMENT_METHOD,
        ReturnRequest.PAYMENT_BLOCK_2,
        ReturnRequest.PROJECT_2,
        ReturnRequest.EMPLOYEE_INFO,
        ReturnRequest.COUNTRY,
        ReturnRequest.BUSINESS_PLACE,
        ReturnRequest.USER_LANGUAGE,
        ReturnRequest.NF_MODEL,
        ReturnRequest.CHART_OF_ACCOUNT,
        ReturnRequest.TAX_WEB_SITE,
        ReturnRequest.BRANCH,
        ReturnRequest.DEPARTMENT,
        ReturnRequest.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    ReturnRequest.ALL_FIELDS = new core_1.AllFields('*', ReturnRequest);
    /**
     * All key fields of the ReturnRequest entity.
     */
    ReturnRequest._keyFields = [ReturnRequest.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property ReturnRequest.
     */
    ReturnRequest._keys = ReturnRequest._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ReturnRequest = exports.ReturnRequest || (exports.ReturnRequest = {}));
exports.ReturnRequest = ReturnRequest;
//# sourceMappingURL=ReturnRequest.js.map