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
exports.Returns = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ReturnsRequestBuilder_1 = require("./ReturnsRequestBuilder");
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
 * This class represents the entity "Returns" of service "SAPB1".
 */
var Returns = /** @class */ (function (_super) {
    __extends(Returns, _super);
    function Returns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Returns`.
     * @returns A builder that constructs instances of entity type `Returns`.
     */
    Returns.builder = function () {
        return core_1.EntityV4.entityBuilder(Returns);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Returns` entity type.
     * @returns A `Returns` request builder.
     */
    Returns.requestBuilder = function () {
        return new ReturnsRequestBuilder_1.ReturnsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Returns`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Returns`.
     */
    Returns.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Returns);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Returns.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Returns.
     */
    Returns._entityName = 'Returns';
    /**
     * Default url path for the according service.
     */
    Returns._defaultServicePath = '/b1s/v2/';
    return Returns;
}(core_1.EntityV4));
exports.Returns = Returns;
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
(function (Returns) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_ENTRY = new core_1.NumberField('DocEntry', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_NUM = new core_1.NumberField('DocNum', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_TYPE = new core_1.EnumField('DocType', Returns);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.HAND_WRITTEN = new core_1.EnumField('HandWritten', Returns);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PRINTED = new core_1.EnumField('Printed', Returns);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_DATE = new core_1.DateField('DocDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_DUE_DATE = new core_1.DateField('DocDueDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CARD_CODE = new core_1.StringField('CardCode', Returns, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CARD_NAME = new core_1.StringField('CardName', Returns, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ADDRESS = new core_1.StringField('Address', Returns, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.NUM_AT_CARD = new core_1.StringField('NumAtCard', Returns, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_TOTAL = new core_1.NumberField('DocTotal', Returns, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_CURRENCY = new core_1.StringField('DocCurrency', Returns, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_RATE = new core_1.NumberField('DocRate', Returns, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REFERENCE_1 = new core_1.StringField('Reference1', Returns, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REFERENCE_2 = new core_1.StringField('Reference2', Returns, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.COMMENTS = new core_1.StringField('Comments', Returns, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.JOURNAL_MEMO = new core_1.StringField('JournalMemo', Returns, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_TIME = new core_1.TimeField('DocTime', Returns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CONFIRMED = new core_1.EnumField('Confirmed', Returns);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SUMMERY_TYPE = new core_1.EnumField('SummeryType', Returns);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SHOW_SCN = new core_1.EnumField('ShowSCN', Returns);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SERIES = new core_1.NumberField('Series', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TAX_DATE = new core_1.DateField('TaxDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', Returns);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', Returns);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SHIP_TO_CODE = new core_1.StringField('ShipToCode', Returns, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.INDICATOR = new core_1.StringField('Indicator', Returns, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', Returns, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', Returns, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', Returns, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CREATION_DATE = new core_1.DateField('CreationDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.UPDATE_DATE = new core_1.DateField('UpdateDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TRANS_NUM = new core_1.NumberField('TransNum', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.VAT_SUM = new core_1.NumberField('VatSum', Returns, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', Returns, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.VAT_SUM_FC = new core_1.NumberField('VatSumFc', Returns, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.NET_PROCEDURE = new core_1.EnumField('NetProcedure', Returns);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', Returns, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', Returns, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FORM_1099 = new core_1.NumberField('Form1099', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BOX_1099 = new core_1.StringField('Box1099', Returns, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REVISION_PO = new core_1.EnumField('RevisionPo', Returns);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REQURIED_DATE = new core_1.DateField('RequriedDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CANCEL_DATE = new core_1.DateField('CancelDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', Returns);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SUBMITTED = new core_1.EnumField('Submitted', Returns);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SEGMENT = new core_1.NumberField('Segment', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PICK_STATUS = new core_1.EnumField('PickStatus', Returns);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PICK = new core_1.EnumField('Pick', Returns);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', Returns, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', Returns);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', Returns, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', Returns);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.RESERVE = new core_1.EnumField('Reserve', Returns);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PROJECT = new core_1.StringField('Project', Returns, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', Returns);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ROUNDING = new core_1.EnumField('Rounding', Returns);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', Returns, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DEFERRED_TAX = new core_1.EnumField('DeferredTax', Returns);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', Returns, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_APPLIED = new core_1.NumberField('WTApplied', Returns, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', Returns);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.AGENT_CODE = new core_1.StringField('AgentCode', Returns, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', Returns, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', Returns);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', Returns, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', Returns, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BASE_AMOUNT = new core_1.NumberField('BaseAmount', Returns, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_AMOUNT = new core_1.NumberField('WTAmount', Returns, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.VAT_DATE = new core_1.DateField('VatDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', Returns, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', Returns);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', Returns, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ADDRESS_2 = new core_1.StringField('Address2', Returns, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', Returns);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', Returns, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAY_TO_CODE = new core_1.StringField('PayToCode', Returns, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.MANUAL_NUMBER = new core_1.StringField('ManualNumber', Returns, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', Returns);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', Returns);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', Returns, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', Returns, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', Returns, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', Returns, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOWN_PAYMENT = new core_1.NumberField('DownPayment', Returns, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', Returns);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', Returns, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PICK_REMARK = new core_1.StringField('PickRemark', Returns, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CLOSING_DATE = new core_1.DateField('ClosingDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SERIES_STRING = new core_1.StringField('SeriesString', Returns, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', Returns, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', Returns, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', Returns);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', Returns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', Returns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', Returns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', Returns);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.VAT_PERCENT = new core_1.NumberField('VatPercent', Returns, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', Returns, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', Returns, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', Returns, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', Returns, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CANCELLED = new core_1.EnumField('Cancelled', Returns);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', Returns, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', Returns, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', Returns, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', Returns, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', Returns);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', Returns);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.GTS_CHECKER = new core_1.NumberField('GTSChecker', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.GTS_PAYEE = new core_1.NumberField('GTSPayee', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.EXTRA_DAYS = new core_1.NumberField('ExtraDays', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.START_FROM = new core_1.EnumField('StartFrom', Returns);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.NTS_APPROVED = new core_1.EnumField('NTSApproved', Returns);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', Returns, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', Returns, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', Returns);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_DOC_SERIES = new core_1.NumberField('EDocSeries', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_DOC_NUM = new core_1.StringField('EDocNum', Returns, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_DOC_STATUS = new core_1.EnumField('EDocStatus', Returns);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', Returns, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', Returns, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', Returns);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.GROUP_SERIES = new core_1.NumberField('GroupSeries', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.GROUP_NUMBER = new core_1.NumberField('GroupNumber', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', Returns);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', Returns);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', Returns);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', Returns);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', Returns, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', Returns, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', Returns);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CLOSING_OPTION = new core_1.EnumField('ClosingOption', Returns);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', Returns);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', Returns);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', Returns, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', Returns);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BPL_NAME = new core_1.StringField('BPLName', Returns, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.VAT_REG_NUM = new core_1.StringField('VATRegNum', Returns, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SUPPLIER = new core_1.StringField('Supplier', Returns, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.RELEASER = new core_1.NumberField('Releaser', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.RECEIVER = new core_1.NumberField('Receiver', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.IS_ALTERATION = new core_1.EnumField('IsAlteration', Returns);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CANCEL_STATUS = new core_1.EnumField('CancelStatus', Returns);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REQUESTER = new core_1.StringField('Requester', Returns, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REQUESTER_NAME = new core_1.StringField('RequesterName', Returns, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', Returns, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', Returns);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REQ_TYPE = new core_1.NumberField('ReqType', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', Returns);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', Returns, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', Returns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', Returns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', Returns, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', Returns, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', Returns);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', Returns, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', Returns);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', Returns);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', Returns);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', Returns, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', Returns, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.LETTER = new core_1.EnumField('Letter', Returns);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.INTERIM_TYPE = new core_1.EnumField('InterimType', Returns);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.RELATED_TYPE = new core_1.NumberField('RelatedType', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', Returns, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', Returns, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', Returns);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.UPDATE_TIME = new core_1.TimeField('UpdateTime', Returns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PRICE_MODE = new core_1.EnumField('PriceMode', Returns);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', Returns, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.REVISION = new core_1.EnumField('Revision', Returns);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', Returns, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', Returns);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', Returns, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', Returns, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', Returns, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', Returns, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', Returns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SHIP_FROM = new core_1.StringField('ShipFrom', Returns, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', Returns);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', Returns);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', Returns);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ISSUING_REASON = new core_1.NumberField('IssuingReason', Returns, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', Returns, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', Returns, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', Returns, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', Returns, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', Returns, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', Returns, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', Returns, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', Returns, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', Returns, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', Returns);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', Returns);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', Returns, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', Returns, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CURRENCY = new core_1.OneToOneLink('Currency', Returns, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', Returns, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', Returns, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', Returns, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', Returns, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', Returns, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.FORMS_1099 = new core_1.OneToOneLink('Forms1099', Returns, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', Returns, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', Returns, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.PROJECT_2 = new core_1.OneToOneLink('Project2', Returns, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', Returns, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.COUNTRY = new core_1.OneToOneLink('Country', Returns, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', Returns, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', Returns, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.NF_MODEL = new core_1.OneToOneLink('NFModel', Returns, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', Returns, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', Returns, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.BRANCH = new core_1.OneToOneLink('Branch', Returns, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.DEPARTMENT = new core_1.OneToOneLink('Department', Returns, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Returns.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', Returns, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the Returns entity.
     */
    Returns._allFields = [
        Returns.DOC_ENTRY,
        Returns.DOC_NUM,
        Returns.DOC_TYPE,
        Returns.HAND_WRITTEN,
        Returns.PRINTED,
        Returns.DOC_DATE,
        Returns.DOC_DUE_DATE,
        Returns.CARD_CODE,
        Returns.CARD_NAME,
        Returns.ADDRESS,
        Returns.NUM_AT_CARD,
        Returns.DOC_TOTAL,
        Returns.ATTACHMENT_ENTRY,
        Returns.DOC_CURRENCY,
        Returns.DOC_RATE,
        Returns.REFERENCE_1,
        Returns.REFERENCE_2,
        Returns.COMMENTS,
        Returns.JOURNAL_MEMO,
        Returns.PAYMENT_GROUP_CODE,
        Returns.DOC_TIME,
        Returns.SALES_PERSON_CODE,
        Returns.TRANSPORTATION_CODE,
        Returns.CONFIRMED,
        Returns.IMPORT_FILE_NUM,
        Returns.SUMMERY_TYPE,
        Returns.CONTACT_PERSON_CODE,
        Returns.SHOW_SCN,
        Returns.SERIES,
        Returns.TAX_DATE,
        Returns.PARTIAL_SUPPLY,
        Returns.DOC_OBJECT_CODE,
        Returns.SHIP_TO_CODE,
        Returns.INDICATOR,
        Returns.FEDERAL_TAX_ID,
        Returns.DISCOUNT_PERCENT,
        Returns.PAYMENT_REFERENCE,
        Returns.CREATION_DATE,
        Returns.UPDATE_DATE,
        Returns.FINANCIAL_PERIOD,
        Returns.TRANS_NUM,
        Returns.VAT_SUM,
        Returns.VAT_SUM_SYS,
        Returns.VAT_SUM_FC,
        Returns.NET_PROCEDURE,
        Returns.DOC_TOTAL_FC,
        Returns.DOC_TOTAL_SYS,
        Returns.FORM_1099,
        Returns.BOX_1099,
        Returns.REVISION_PO,
        Returns.REQURIED_DATE,
        Returns.CANCEL_DATE,
        Returns.BLOCK_DUNNING,
        Returns.SUBMITTED,
        Returns.SEGMENT,
        Returns.PICK_STATUS,
        Returns.PICK,
        Returns.PAYMENT_METHOD,
        Returns.PAYMENT_BLOCK,
        Returns.PAYMENT_BLOCK_ENTRY,
        Returns.CENTRAL_BANK_INDICATOR,
        Returns.MAXIMUM_CASH_DISCOUNT,
        Returns.RESERVE,
        Returns.PROJECT,
        Returns.EXEMPTION_VALIDITY_DATE_FROM,
        Returns.EXEMPTION_VALIDITY_DATE_TO,
        Returns.WARE_HOUSE_UPDATE_TYPE,
        Returns.ROUNDING,
        Returns.EXTERNAL_CORRECTED_DOC_NUM,
        Returns.INTERNAL_CORRECTED_DOC_NUM,
        Returns.NEXT_CORRECTING_DOCUMENT,
        Returns.DEFERRED_TAX,
        Returns.TAX_EXEMPTION_LETTER_NUM,
        Returns.WT_APPLIED,
        Returns.WT_APPLIED_FC,
        Returns.BILL_OF_EXCHANGE_RESERVED,
        Returns.AGENT_CODE,
        Returns.WT_APPLIED_SC,
        Returns.TOTAL_EQUALIZATION_TAX,
        Returns.TOTAL_EQUALIZATION_TAX_FC,
        Returns.TOTAL_EQUALIZATION_TAX_SC,
        Returns.NUMBER_OF_INSTALLMENTS,
        Returns.APPLY_TAX_ON_FIRST_INSTALLMENT,
        Returns.WT_NON_SUBJECT_AMOUNT,
        Returns.WT_NON_SUBJECT_AMOUNT_SC,
        Returns.WT_NON_SUBJECT_AMOUNT_FC,
        Returns.WT_EXEMPTED_AMOUNT,
        Returns.WT_EXEMPTED_AMOUNT_SC,
        Returns.WT_EXEMPTED_AMOUNT_FC,
        Returns.BASE_AMOUNT,
        Returns.BASE_AMOUNT_SC,
        Returns.BASE_AMOUNT_FC,
        Returns.WT_AMOUNT,
        Returns.WT_AMOUNT_SC,
        Returns.WT_AMOUNT_FC,
        Returns.VAT_DATE,
        Returns.DOCUMENTS_OWNER,
        Returns.FOLIO_PREFIX_STRING,
        Returns.FOLIO_NUMBER,
        Returns.DOCUMENT_SUB_TYPE,
        Returns.BP_CHANNEL_CODE,
        Returns.BP_CHANNEL_CONTACT,
        Returns.ADDRESS_2,
        Returns.DOCUMENT_STATUS,
        Returns.PERIOD_INDICATOR,
        Returns.PAY_TO_CODE,
        Returns.MANUAL_NUMBER,
        Returns.USE_SHPD_GOODS_ACT,
        Returns.IS_PAY_TO_BANK,
        Returns.PAY_TO_BANK_COUNTRY,
        Returns.PAY_TO_BANK_CODE,
        Returns.PAY_TO_BANK_ACCOUNT_NO,
        Returns.PAY_TO_BANK_BRANCH,
        Returns.BPL_ID_ASSIGNED_TO_INVOICE,
        Returns.DOWN_PAYMENT,
        Returns.RESERVE_INVOICE,
        Returns.LANGUAGE_CODE,
        Returns.TRACKING_NUMBER,
        Returns.PICK_REMARK,
        Returns.CLOSING_DATE,
        Returns.SEQUENCE_CODE,
        Returns.SEQUENCE_SERIAL,
        Returns.SERIES_STRING,
        Returns.SUB_SERIES_STRING,
        Returns.SEQUENCE_MODEL,
        Returns.USE_CORRECTION_VAT_GROUP,
        Returns.TOTAL_DISCOUNT,
        Returns.DOWN_PAYMENT_AMOUNT,
        Returns.DOWN_PAYMENT_PERCENTAGE,
        Returns.DOWN_PAYMENT_TYPE,
        Returns.DOWN_PAYMENT_AMOUNT_SC,
        Returns.DOWN_PAYMENT_AMOUNT_FC,
        Returns.VAT_PERCENT,
        Returns.SERVICE_GROSS_PROFIT_PERCENT,
        Returns.OPENING_REMARKS,
        Returns.CLOSING_REMARKS,
        Returns.ROUNDING_DIFF_AMOUNT,
        Returns.ROUNDING_DIFF_AMOUNT_FC,
        Returns.ROUNDING_DIFF_AMOUNT_SC,
        Returns.CANCELLED,
        Returns.SIGNATURE_INPUT_MESSAGE,
        Returns.SIGNATURE_DIGEST,
        Returns.CERTIFICATION_NUMBER,
        Returns.PRIVATE_KEY_VERSION,
        Returns.CONTROL_ACCOUNT,
        Returns.INSURANCE_OPERATION_347,
        Returns.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        Returns.GTS_CHECKER,
        Returns.GTS_PAYEE,
        Returns.EXTRA_MONTH,
        Returns.EXTRA_DAYS,
        Returns.CASH_DISCOUNT_DATE_OFFSET,
        Returns.START_FROM,
        Returns.NTS_APPROVED,
        Returns.E_TAX_WEB_SITE,
        Returns.E_TAX_NUMBER,
        Returns.NTS_APPROVED_NUMBER,
        Returns.E_DOC_GENERATION_TYPE,
        Returns.E_DOC_SERIES,
        Returns.E_DOC_NUM,
        Returns.E_DOC_EXPORT_FORMAT,
        Returns.E_DOC_STATUS,
        Returns.E_DOC_ERROR_CODE,
        Returns.E_DOC_ERROR_MESSAGE,
        Returns.DOWN_PAYMENT_STATUS,
        Returns.GROUP_SERIES,
        Returns.GROUP_NUMBER,
        Returns.GROUP_HAND_WRITTEN,
        Returns.REOPEN_ORIGINAL_DOCUMENT,
        Returns.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        Returns.CREATE_ONLINE_QUOTATION,
        Returns.POS_EQUIPMENT_NUMBER,
        Returns.POS_MANUFACTURER_SERIAL_NUMBER,
        Returns.POS_CASHIER_NUMBER,
        Returns.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        Returns.CLOSING_OPTION,
        Returns.SPECIFIED_CLOSING_DATE,
        Returns.OPEN_FOR_LANDED_COSTS,
        Returns.AUTHORIZATION_STATUS,
        Returns.TOTAL_DISCOUNT_FC,
        Returns.TOTAL_DISCOUNT_SC,
        Returns.RELEVANT_TO_GTS,
        Returns.BPL_NAME,
        Returns.VAT_REG_NUM,
        Returns.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        Returns.SUPPLIER,
        Returns.RELEASER,
        Returns.RECEIVER,
        Returns.BLANKET_AGREEMENT_NUMBER,
        Returns.IS_ALTERATION,
        Returns.CANCEL_STATUS,
        Returns.ASSET_VALUE_DATE,
        Returns.REQUESTER,
        Returns.REQUESTER_NAME,
        Returns.REQUESTER_BRANCH,
        Returns.REQUESTER_DEPARTMENT,
        Returns.REQUESTER_EMAIL,
        Returns.SEND_NOTIFICATION,
        Returns.REQ_TYPE,
        Returns.DOCUMENT_DELIVERY,
        Returns.AUTHORIZATION_CODE,
        Returns.START_DELIVERY_DATE,
        Returns.START_DELIVERY_TIME,
        Returns.END_DELIVERY_DATE,
        Returns.END_DELIVERY_TIME,
        Returns.VEHICLE_PLATE,
        Returns.AT_DOCUMENT_TYPE,
        Returns.ELEC_COMM_STATUS,
        Returns.ELEC_COMM_MESSAGE,
        Returns.REUSE_DOCUMENT_NUM,
        Returns.REUSE_NOTA_FISCAL_NUM,
        Returns.PRINT_SEPA_DIRECT,
        Returns.FISCAL_DOC_NUM,
        Returns.POS_DAILY_SUMMARY_NO,
        Returns.POS_RECEIPT_NO,
        Returns.POINT_OF_ISSUE_CODE,
        Returns.LETTER,
        Returns.FOLIO_NUMBER_FROM,
        Returns.FOLIO_NUMBER_TO,
        Returns.INTERIM_TYPE,
        Returns.RELATED_TYPE,
        Returns.RELATED_ENTRY,
        Returns.DOCUMENT_TAX_ID,
        Returns.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        Returns.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        Returns.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        Returns.POS_CASH_REGISTER,
        Returns.UPDATE_TIME,
        Returns.PRICE_MODE,
        Returns.DOWN_PAYMENT_TRASACTION_ID,
        Returns.REVISION,
        Returns.ORIGINAL_REF_NO,
        Returns.ORIGINAL_REF_DATE,
        Returns.GST_TRANSACTION_TYPE,
        Returns.ORIGINAL_CREDIT_OR_DEBIT_NO,
        Returns.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        Returns.E_COMMERCE_OPERATOR,
        Returns.E_COMMERCE_GSTIN,
        Returns.TAX_INVOICE_NO,
        Returns.TAX_INVOICE_DATE,
        Returns.SHIP_FROM,
        Returns.COMMISSION_TRADE,
        Returns.COMMISSION_TRADE_RETURN,
        Returns.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        Returns.ISSUING_REASON,
        Returns.DOCUMENT_APPROVAL_REQUESTS,
        Returns.DOCUMENT_LINES,
        Returns.DOCUMENT_ADDITIONAL_EXPENSES,
        Returns.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        Returns.WITHHOLDING_TAX_DATA_COLLECTION,
        Returns.DOCUMENT_PACKAGES,
        Returns.DOCUMENT_SPECIAL_LINES,
        Returns.DOCUMENT_INSTALLMENTS,
        Returns.DOWN_PAYMENTS_TO_DRAW,
        Returns.TAX_EXTENSION,
        Returns.ADDRESS_EXTENSION,
        Returns.SOI_WIZARD_ID,
        Returns.BUSINESS_PARTNER,
        Returns.CURRENCY,
        Returns.PAYMENT_TERMS_TYPE,
        Returns.SALES_PERSON,
        Returns.SHIPPING_TYPE,
        Returns.FACTORING_INDICATOR,
        Returns.JOURNAL_ENTRY,
        Returns.FORMS_1099,
        Returns.WIZARD_PAYMENT_METHOD,
        Returns.PAYMENT_BLOCK_2,
        Returns.PROJECT_2,
        Returns.EMPLOYEE_INFO,
        Returns.COUNTRY,
        Returns.BUSINESS_PLACE,
        Returns.USER_LANGUAGE,
        Returns.NF_MODEL,
        Returns.CHART_OF_ACCOUNT,
        Returns.TAX_WEB_SITE,
        Returns.BRANCH,
        Returns.DEPARTMENT,
        Returns.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    Returns.ALL_FIELDS = new core_1.AllFields('*', Returns);
    /**
     * All key fields of the Returns entity.
     */
    Returns._keyFields = [Returns.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Returns.
     */
    Returns._keys = Returns._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Returns = exports.Returns || (exports.Returns = {}));
exports.Returns = Returns;
//# sourceMappingURL=Returns.js.map