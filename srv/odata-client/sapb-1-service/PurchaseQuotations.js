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
exports.PurchaseQuotations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseQuotationsRequestBuilder_1 = require("./PurchaseQuotationsRequestBuilder");
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
 * This class represents the entity "PurchaseQuotations" of service "SAPB1".
 */
var PurchaseQuotations = /** @class */ (function (_super) {
    __extends(PurchaseQuotations, _super);
    function PurchaseQuotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PurchaseQuotations`.
     * @returns A builder that constructs instances of entity type `PurchaseQuotations`.
     */
    PurchaseQuotations.builder = function () {
        return core_1.EntityV4.entityBuilder(PurchaseQuotations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseQuotations` entity type.
     * @returns A `PurchaseQuotations` request builder.
     */
    PurchaseQuotations.requestBuilder = function () {
        return new PurchaseQuotationsRequestBuilder_1.PurchaseQuotationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseQuotations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseQuotations`.
     */
    PurchaseQuotations.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PurchaseQuotations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseQuotations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseQuotations.
     */
    PurchaseQuotations._entityName = 'PurchaseQuotations';
    /**
     * Default url path for the according service.
     */
    PurchaseQuotations._defaultServicePath = '/b1s/v2/';
    return PurchaseQuotations;
}(core_1.EntityV4));
exports.PurchaseQuotations = PurchaseQuotations;
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
(function (PurchaseQuotations) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_ENTRY = new core_1.NumberField('DocEntry', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_NUM = new core_1.NumberField('DocNum', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_TYPE = new core_1.EnumField('DocType', PurchaseQuotations);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.HAND_WRITTEN = new core_1.EnumField('HandWritten', PurchaseQuotations);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PRINTED = new core_1.EnumField('Printed', PurchaseQuotations);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_DATE = new core_1.DateField('DocDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_DUE_DATE = new core_1.DateField('DocDueDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CARD_CODE = new core_1.StringField('CardCode', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CARD_NAME = new core_1.StringField('CardName', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ADDRESS = new core_1.StringField('Address', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.NUM_AT_CARD = new core_1.StringField('NumAtCard', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_TOTAL = new core_1.NumberField('DocTotal', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_CURRENCY = new core_1.StringField('DocCurrency', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_RATE = new core_1.NumberField('DocRate', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REFERENCE_1 = new core_1.StringField('Reference1', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REFERENCE_2 = new core_1.StringField('Reference2', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.COMMENTS = new core_1.StringField('Comments', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.JOURNAL_MEMO = new core_1.StringField('JournalMemo', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_TIME = new core_1.TimeField('DocTime', PurchaseQuotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CONFIRMED = new core_1.EnumField('Confirmed', PurchaseQuotations);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SUMMERY_TYPE = new core_1.EnumField('SummeryType', PurchaseQuotations);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SHOW_SCN = new core_1.EnumField('ShowSCN', PurchaseQuotations);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SERIES = new core_1.NumberField('Series', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TAX_DATE = new core_1.DateField('TaxDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', PurchaseQuotations);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', PurchaseQuotations);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SHIP_TO_CODE = new core_1.StringField('ShipToCode', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.INDICATOR = new core_1.StringField('Indicator', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CREATION_DATE = new core_1.DateField('CreationDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.UPDATE_DATE = new core_1.DateField('UpdateDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TRANS_NUM = new core_1.NumberField('TransNum', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.VAT_SUM = new core_1.NumberField('VatSum', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.VAT_SUM_FC = new core_1.NumberField('VatSumFc', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.NET_PROCEDURE = new core_1.EnumField('NetProcedure', PurchaseQuotations);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FORM_1099 = new core_1.NumberField('Form1099', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BOX_1099 = new core_1.StringField('Box1099', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REVISION_PO = new core_1.EnumField('RevisionPo', PurchaseQuotations);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REQURIED_DATE = new core_1.DateField('RequriedDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CANCEL_DATE = new core_1.DateField('CancelDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', PurchaseQuotations);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SUBMITTED = new core_1.EnumField('Submitted', PurchaseQuotations);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SEGMENT = new core_1.NumberField('Segment', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PICK_STATUS = new core_1.EnumField('PickStatus', PurchaseQuotations);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PICK = new core_1.EnumField('Pick', PurchaseQuotations);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', PurchaseQuotations);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', PurchaseQuotations);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.RESERVE = new core_1.EnumField('Reserve', PurchaseQuotations);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PROJECT = new core_1.StringField('Project', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', PurchaseQuotations);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ROUNDING = new core_1.EnumField('Rounding', PurchaseQuotations);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DEFERRED_TAX = new core_1.EnumField('DeferredTax', PurchaseQuotations);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_APPLIED = new core_1.NumberField('WTApplied', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', PurchaseQuotations);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.AGENT_CODE = new core_1.StringField('AgentCode', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', PurchaseQuotations);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BASE_AMOUNT = new core_1.NumberField('BaseAmount', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_AMOUNT = new core_1.NumberField('WTAmount', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.VAT_DATE = new core_1.DateField('VatDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', PurchaseQuotations);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ADDRESS_2 = new core_1.StringField('Address2', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', PurchaseQuotations);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAY_TO_CODE = new core_1.StringField('PayToCode', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.MANUAL_NUMBER = new core_1.StringField('ManualNumber', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', PurchaseQuotations);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', PurchaseQuotations);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOWN_PAYMENT = new core_1.NumberField('DownPayment', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', PurchaseQuotations);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PICK_REMARK = new core_1.StringField('PickRemark', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CLOSING_DATE = new core_1.DateField('ClosingDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SERIES_STRING = new core_1.StringField('SeriesString', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', PurchaseQuotations);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', PurchaseQuotations);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.VAT_PERCENT = new core_1.NumberField('VatPercent', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CANCELLED = new core_1.EnumField('Cancelled', PurchaseQuotations);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', PurchaseQuotations);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', PurchaseQuotations);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.GTS_CHECKER = new core_1.NumberField('GTSChecker', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.GTS_PAYEE = new core_1.NumberField('GTSPayee', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.EXTRA_DAYS = new core_1.NumberField('ExtraDays', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.START_FROM = new core_1.EnumField('StartFrom', PurchaseQuotations);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.NTS_APPROVED = new core_1.EnumField('NTSApproved', PurchaseQuotations);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', PurchaseQuotations);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_DOC_SERIES = new core_1.NumberField('EDocSeries', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_DOC_NUM = new core_1.StringField('EDocNum', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_DOC_STATUS = new core_1.EnumField('EDocStatus', PurchaseQuotations);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', PurchaseQuotations);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.GROUP_SERIES = new core_1.NumberField('GroupSeries', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.GROUP_NUMBER = new core_1.NumberField('GroupNumber', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', PurchaseQuotations);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', PurchaseQuotations);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', PurchaseQuotations);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', PurchaseQuotations);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', PurchaseQuotations);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CLOSING_OPTION = new core_1.EnumField('ClosingOption', PurchaseQuotations);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', PurchaseQuotations);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', PurchaseQuotations);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', PurchaseQuotations, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', PurchaseQuotations);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BPL_NAME = new core_1.StringField('BPLName', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.VAT_REG_NUM = new core_1.StringField('VATRegNum', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SUPPLIER = new core_1.StringField('Supplier', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.RELEASER = new core_1.NumberField('Releaser', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.RECEIVER = new core_1.NumberField('Receiver', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.IS_ALTERATION = new core_1.EnumField('IsAlteration', PurchaseQuotations);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CANCEL_STATUS = new core_1.EnumField('CancelStatus', PurchaseQuotations);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REQUESTER = new core_1.StringField('Requester', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REQUESTER_NAME = new core_1.StringField('RequesterName', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', PurchaseQuotations);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REQ_TYPE = new core_1.NumberField('ReqType', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', PurchaseQuotations);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', PurchaseQuotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', PurchaseQuotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', PurchaseQuotations);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', PurchaseQuotations);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', PurchaseQuotations);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', PurchaseQuotations);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.LETTER = new core_1.EnumField('Letter', PurchaseQuotations);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.INTERIM_TYPE = new core_1.EnumField('InterimType', PurchaseQuotations);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.RELATED_TYPE = new core_1.NumberField('RelatedType', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', PurchaseQuotations);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.UPDATE_TIME = new core_1.TimeField('UpdateTime', PurchaseQuotations, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PRICE_MODE = new core_1.EnumField('PriceMode', PurchaseQuotations);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.REVISION = new core_1.EnumField('Revision', PurchaseQuotations);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', PurchaseQuotations);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', PurchaseQuotations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SHIP_FROM = new core_1.StringField('ShipFrom', PurchaseQuotations, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', PurchaseQuotations);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', PurchaseQuotations);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', PurchaseQuotations);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ISSUING_REASON = new core_1.NumberField('IssuingReason', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', PurchaseQuotations, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', PurchaseQuotations, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', PurchaseQuotations, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseQuotations, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', PurchaseQuotations, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', PurchaseQuotations, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', PurchaseQuotations, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', PurchaseQuotations, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', PurchaseQuotations, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseQuotations);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseQuotations);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', PurchaseQuotations, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', PurchaseQuotations, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CURRENCY = new core_1.OneToOneLink('Currency', PurchaseQuotations, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', PurchaseQuotations, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', PurchaseQuotations, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', PurchaseQuotations, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', PurchaseQuotations, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.FORMS_1099 = new core_1.OneToOneLink('Forms1099', PurchaseQuotations, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', PurchaseQuotations, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', PurchaseQuotations, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.PROJECT_2 = new core_1.OneToOneLink('Project2', PurchaseQuotations, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', PurchaseQuotations, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.COUNTRY = new core_1.OneToOneLink('Country', PurchaseQuotations, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', PurchaseQuotations, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', PurchaseQuotations, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.NF_MODEL = new core_1.OneToOneLink('NFModel', PurchaseQuotations, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', PurchaseQuotations, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', PurchaseQuotations, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.BRANCH = new core_1.OneToOneLink('Branch', PurchaseQuotations, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.DEPARTMENT = new core_1.OneToOneLink('Department', PurchaseQuotations, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseQuotations.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', PurchaseQuotations, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseQuotations entity.
     */
    PurchaseQuotations._allFields = [
        PurchaseQuotations.DOC_ENTRY,
        PurchaseQuotations.DOC_NUM,
        PurchaseQuotations.DOC_TYPE,
        PurchaseQuotations.HAND_WRITTEN,
        PurchaseQuotations.PRINTED,
        PurchaseQuotations.DOC_DATE,
        PurchaseQuotations.DOC_DUE_DATE,
        PurchaseQuotations.CARD_CODE,
        PurchaseQuotations.CARD_NAME,
        PurchaseQuotations.ADDRESS,
        PurchaseQuotations.NUM_AT_CARD,
        PurchaseQuotations.DOC_TOTAL,
        PurchaseQuotations.ATTACHMENT_ENTRY,
        PurchaseQuotations.DOC_CURRENCY,
        PurchaseQuotations.DOC_RATE,
        PurchaseQuotations.REFERENCE_1,
        PurchaseQuotations.REFERENCE_2,
        PurchaseQuotations.COMMENTS,
        PurchaseQuotations.JOURNAL_MEMO,
        PurchaseQuotations.PAYMENT_GROUP_CODE,
        PurchaseQuotations.DOC_TIME,
        PurchaseQuotations.SALES_PERSON_CODE,
        PurchaseQuotations.TRANSPORTATION_CODE,
        PurchaseQuotations.CONFIRMED,
        PurchaseQuotations.IMPORT_FILE_NUM,
        PurchaseQuotations.SUMMERY_TYPE,
        PurchaseQuotations.CONTACT_PERSON_CODE,
        PurchaseQuotations.SHOW_SCN,
        PurchaseQuotations.SERIES,
        PurchaseQuotations.TAX_DATE,
        PurchaseQuotations.PARTIAL_SUPPLY,
        PurchaseQuotations.DOC_OBJECT_CODE,
        PurchaseQuotations.SHIP_TO_CODE,
        PurchaseQuotations.INDICATOR,
        PurchaseQuotations.FEDERAL_TAX_ID,
        PurchaseQuotations.DISCOUNT_PERCENT,
        PurchaseQuotations.PAYMENT_REFERENCE,
        PurchaseQuotations.CREATION_DATE,
        PurchaseQuotations.UPDATE_DATE,
        PurchaseQuotations.FINANCIAL_PERIOD,
        PurchaseQuotations.TRANS_NUM,
        PurchaseQuotations.VAT_SUM,
        PurchaseQuotations.VAT_SUM_SYS,
        PurchaseQuotations.VAT_SUM_FC,
        PurchaseQuotations.NET_PROCEDURE,
        PurchaseQuotations.DOC_TOTAL_FC,
        PurchaseQuotations.DOC_TOTAL_SYS,
        PurchaseQuotations.FORM_1099,
        PurchaseQuotations.BOX_1099,
        PurchaseQuotations.REVISION_PO,
        PurchaseQuotations.REQURIED_DATE,
        PurchaseQuotations.CANCEL_DATE,
        PurchaseQuotations.BLOCK_DUNNING,
        PurchaseQuotations.SUBMITTED,
        PurchaseQuotations.SEGMENT,
        PurchaseQuotations.PICK_STATUS,
        PurchaseQuotations.PICK,
        PurchaseQuotations.PAYMENT_METHOD,
        PurchaseQuotations.PAYMENT_BLOCK,
        PurchaseQuotations.PAYMENT_BLOCK_ENTRY,
        PurchaseQuotations.CENTRAL_BANK_INDICATOR,
        PurchaseQuotations.MAXIMUM_CASH_DISCOUNT,
        PurchaseQuotations.RESERVE,
        PurchaseQuotations.PROJECT,
        PurchaseQuotations.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseQuotations.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseQuotations.WARE_HOUSE_UPDATE_TYPE,
        PurchaseQuotations.ROUNDING,
        PurchaseQuotations.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseQuotations.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseQuotations.NEXT_CORRECTING_DOCUMENT,
        PurchaseQuotations.DEFERRED_TAX,
        PurchaseQuotations.TAX_EXEMPTION_LETTER_NUM,
        PurchaseQuotations.WT_APPLIED,
        PurchaseQuotations.WT_APPLIED_FC,
        PurchaseQuotations.BILL_OF_EXCHANGE_RESERVED,
        PurchaseQuotations.AGENT_CODE,
        PurchaseQuotations.WT_APPLIED_SC,
        PurchaseQuotations.TOTAL_EQUALIZATION_TAX,
        PurchaseQuotations.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseQuotations.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseQuotations.NUMBER_OF_INSTALLMENTS,
        PurchaseQuotations.APPLY_TAX_ON_FIRST_INSTALLMENT,
        PurchaseQuotations.WT_NON_SUBJECT_AMOUNT,
        PurchaseQuotations.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseQuotations.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseQuotations.WT_EXEMPTED_AMOUNT,
        PurchaseQuotations.WT_EXEMPTED_AMOUNT_SC,
        PurchaseQuotations.WT_EXEMPTED_AMOUNT_FC,
        PurchaseQuotations.BASE_AMOUNT,
        PurchaseQuotations.BASE_AMOUNT_SC,
        PurchaseQuotations.BASE_AMOUNT_FC,
        PurchaseQuotations.WT_AMOUNT,
        PurchaseQuotations.WT_AMOUNT_SC,
        PurchaseQuotations.WT_AMOUNT_FC,
        PurchaseQuotations.VAT_DATE,
        PurchaseQuotations.DOCUMENTS_OWNER,
        PurchaseQuotations.FOLIO_PREFIX_STRING,
        PurchaseQuotations.FOLIO_NUMBER,
        PurchaseQuotations.DOCUMENT_SUB_TYPE,
        PurchaseQuotations.BP_CHANNEL_CODE,
        PurchaseQuotations.BP_CHANNEL_CONTACT,
        PurchaseQuotations.ADDRESS_2,
        PurchaseQuotations.DOCUMENT_STATUS,
        PurchaseQuotations.PERIOD_INDICATOR,
        PurchaseQuotations.PAY_TO_CODE,
        PurchaseQuotations.MANUAL_NUMBER,
        PurchaseQuotations.USE_SHPD_GOODS_ACT,
        PurchaseQuotations.IS_PAY_TO_BANK,
        PurchaseQuotations.PAY_TO_BANK_COUNTRY,
        PurchaseQuotations.PAY_TO_BANK_CODE,
        PurchaseQuotations.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseQuotations.PAY_TO_BANK_BRANCH,
        PurchaseQuotations.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseQuotations.DOWN_PAYMENT,
        PurchaseQuotations.RESERVE_INVOICE,
        PurchaseQuotations.LANGUAGE_CODE,
        PurchaseQuotations.TRACKING_NUMBER,
        PurchaseQuotations.PICK_REMARK,
        PurchaseQuotations.CLOSING_DATE,
        PurchaseQuotations.SEQUENCE_CODE,
        PurchaseQuotations.SEQUENCE_SERIAL,
        PurchaseQuotations.SERIES_STRING,
        PurchaseQuotations.SUB_SERIES_STRING,
        PurchaseQuotations.SEQUENCE_MODEL,
        PurchaseQuotations.USE_CORRECTION_VAT_GROUP,
        PurchaseQuotations.TOTAL_DISCOUNT,
        PurchaseQuotations.DOWN_PAYMENT_AMOUNT,
        PurchaseQuotations.DOWN_PAYMENT_PERCENTAGE,
        PurchaseQuotations.DOWN_PAYMENT_TYPE,
        PurchaseQuotations.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseQuotations.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseQuotations.VAT_PERCENT,
        PurchaseQuotations.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseQuotations.OPENING_REMARKS,
        PurchaseQuotations.CLOSING_REMARKS,
        PurchaseQuotations.ROUNDING_DIFF_AMOUNT,
        PurchaseQuotations.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseQuotations.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseQuotations.CANCELLED,
        PurchaseQuotations.SIGNATURE_INPUT_MESSAGE,
        PurchaseQuotations.SIGNATURE_DIGEST,
        PurchaseQuotations.CERTIFICATION_NUMBER,
        PurchaseQuotations.PRIVATE_KEY_VERSION,
        PurchaseQuotations.CONTROL_ACCOUNT,
        PurchaseQuotations.INSURANCE_OPERATION_347,
        PurchaseQuotations.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        PurchaseQuotations.GTS_CHECKER,
        PurchaseQuotations.GTS_PAYEE,
        PurchaseQuotations.EXTRA_MONTH,
        PurchaseQuotations.EXTRA_DAYS,
        PurchaseQuotations.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseQuotations.START_FROM,
        PurchaseQuotations.NTS_APPROVED,
        PurchaseQuotations.E_TAX_WEB_SITE,
        PurchaseQuotations.E_TAX_NUMBER,
        PurchaseQuotations.NTS_APPROVED_NUMBER,
        PurchaseQuotations.E_DOC_GENERATION_TYPE,
        PurchaseQuotations.E_DOC_SERIES,
        PurchaseQuotations.E_DOC_NUM,
        PurchaseQuotations.E_DOC_EXPORT_FORMAT,
        PurchaseQuotations.E_DOC_STATUS,
        PurchaseQuotations.E_DOC_ERROR_CODE,
        PurchaseQuotations.E_DOC_ERROR_MESSAGE,
        PurchaseQuotations.DOWN_PAYMENT_STATUS,
        PurchaseQuotations.GROUP_SERIES,
        PurchaseQuotations.GROUP_NUMBER,
        PurchaseQuotations.GROUP_HAND_WRITTEN,
        PurchaseQuotations.REOPEN_ORIGINAL_DOCUMENT,
        PurchaseQuotations.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        PurchaseQuotations.CREATE_ONLINE_QUOTATION,
        PurchaseQuotations.POS_EQUIPMENT_NUMBER,
        PurchaseQuotations.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseQuotations.POS_CASHIER_NUMBER,
        PurchaseQuotations.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        PurchaseQuotations.CLOSING_OPTION,
        PurchaseQuotations.SPECIFIED_CLOSING_DATE,
        PurchaseQuotations.OPEN_FOR_LANDED_COSTS,
        PurchaseQuotations.AUTHORIZATION_STATUS,
        PurchaseQuotations.TOTAL_DISCOUNT_FC,
        PurchaseQuotations.TOTAL_DISCOUNT_SC,
        PurchaseQuotations.RELEVANT_TO_GTS,
        PurchaseQuotations.BPL_NAME,
        PurchaseQuotations.VAT_REG_NUM,
        PurchaseQuotations.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseQuotations.SUPPLIER,
        PurchaseQuotations.RELEASER,
        PurchaseQuotations.RECEIVER,
        PurchaseQuotations.BLANKET_AGREEMENT_NUMBER,
        PurchaseQuotations.IS_ALTERATION,
        PurchaseQuotations.CANCEL_STATUS,
        PurchaseQuotations.ASSET_VALUE_DATE,
        PurchaseQuotations.REQUESTER,
        PurchaseQuotations.REQUESTER_NAME,
        PurchaseQuotations.REQUESTER_BRANCH,
        PurchaseQuotations.REQUESTER_DEPARTMENT,
        PurchaseQuotations.REQUESTER_EMAIL,
        PurchaseQuotations.SEND_NOTIFICATION,
        PurchaseQuotations.REQ_TYPE,
        PurchaseQuotations.DOCUMENT_DELIVERY,
        PurchaseQuotations.AUTHORIZATION_CODE,
        PurchaseQuotations.START_DELIVERY_DATE,
        PurchaseQuotations.START_DELIVERY_TIME,
        PurchaseQuotations.END_DELIVERY_DATE,
        PurchaseQuotations.END_DELIVERY_TIME,
        PurchaseQuotations.VEHICLE_PLATE,
        PurchaseQuotations.AT_DOCUMENT_TYPE,
        PurchaseQuotations.ELEC_COMM_STATUS,
        PurchaseQuotations.ELEC_COMM_MESSAGE,
        PurchaseQuotations.REUSE_DOCUMENT_NUM,
        PurchaseQuotations.REUSE_NOTA_FISCAL_NUM,
        PurchaseQuotations.PRINT_SEPA_DIRECT,
        PurchaseQuotations.FISCAL_DOC_NUM,
        PurchaseQuotations.POS_DAILY_SUMMARY_NO,
        PurchaseQuotations.POS_RECEIPT_NO,
        PurchaseQuotations.POINT_OF_ISSUE_CODE,
        PurchaseQuotations.LETTER,
        PurchaseQuotations.FOLIO_NUMBER_FROM,
        PurchaseQuotations.FOLIO_NUMBER_TO,
        PurchaseQuotations.INTERIM_TYPE,
        PurchaseQuotations.RELATED_TYPE,
        PurchaseQuotations.RELATED_ENTRY,
        PurchaseQuotations.DOCUMENT_TAX_ID,
        PurchaseQuotations.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseQuotations.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseQuotations.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        PurchaseQuotations.POS_CASH_REGISTER,
        PurchaseQuotations.UPDATE_TIME,
        PurchaseQuotations.PRICE_MODE,
        PurchaseQuotations.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseQuotations.REVISION,
        PurchaseQuotations.ORIGINAL_REF_NO,
        PurchaseQuotations.ORIGINAL_REF_DATE,
        PurchaseQuotations.GST_TRANSACTION_TYPE,
        PurchaseQuotations.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseQuotations.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseQuotations.E_COMMERCE_OPERATOR,
        PurchaseQuotations.E_COMMERCE_GSTIN,
        PurchaseQuotations.TAX_INVOICE_NO,
        PurchaseQuotations.TAX_INVOICE_DATE,
        PurchaseQuotations.SHIP_FROM,
        PurchaseQuotations.COMMISSION_TRADE,
        PurchaseQuotations.COMMISSION_TRADE_RETURN,
        PurchaseQuotations.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        PurchaseQuotations.ISSUING_REASON,
        PurchaseQuotations.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseQuotations.DOCUMENT_LINES,
        PurchaseQuotations.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseQuotations.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseQuotations.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseQuotations.DOCUMENT_PACKAGES,
        PurchaseQuotations.DOCUMENT_SPECIAL_LINES,
        PurchaseQuotations.DOCUMENT_INSTALLMENTS,
        PurchaseQuotations.DOWN_PAYMENTS_TO_DRAW,
        PurchaseQuotations.TAX_EXTENSION,
        PurchaseQuotations.ADDRESS_EXTENSION,
        PurchaseQuotations.SOI_WIZARD_ID,
        PurchaseQuotations.BUSINESS_PARTNER,
        PurchaseQuotations.CURRENCY,
        PurchaseQuotations.PAYMENT_TERMS_TYPE,
        PurchaseQuotations.SALES_PERSON,
        PurchaseQuotations.SHIPPING_TYPE,
        PurchaseQuotations.FACTORING_INDICATOR,
        PurchaseQuotations.FORMS_1099,
        PurchaseQuotations.WIZARD_PAYMENT_METHOD,
        PurchaseQuotations.PAYMENT_BLOCK_2,
        PurchaseQuotations.PROJECT_2,
        PurchaseQuotations.EMPLOYEE_INFO,
        PurchaseQuotations.COUNTRY,
        PurchaseQuotations.BUSINESS_PLACE,
        PurchaseQuotations.USER_LANGUAGE,
        PurchaseQuotations.NF_MODEL,
        PurchaseQuotations.CHART_OF_ACCOUNT,
        PurchaseQuotations.TAX_WEB_SITE,
        PurchaseQuotations.BRANCH,
        PurchaseQuotations.DEPARTMENT,
        PurchaseQuotations.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseQuotations.ALL_FIELDS = new core_1.AllFields('*', PurchaseQuotations);
    /**
     * All key fields of the PurchaseQuotations entity.
     */
    PurchaseQuotations._keyFields = [PurchaseQuotations.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseQuotations.
     */
    PurchaseQuotations._keys = PurchaseQuotations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseQuotations = exports.PurchaseQuotations || (exports.PurchaseQuotations = {}));
exports.PurchaseQuotations = PurchaseQuotations;
//# sourceMappingURL=PurchaseQuotations.js.map