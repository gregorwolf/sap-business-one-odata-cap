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
exports.PurchaseDownPayments = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseDownPaymentsRequestBuilder_1 = require("./PurchaseDownPaymentsRequestBuilder");
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
 * This class represents the entity "PurchaseDownPayments" of service "SAPB1".
 */
var PurchaseDownPayments = /** @class */ (function (_super) {
    __extends(PurchaseDownPayments, _super);
    function PurchaseDownPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PurchaseDownPayments`.
     * @returns A builder that constructs instances of entity type `PurchaseDownPayments`.
     */
    PurchaseDownPayments.builder = function () {
        return core_1.EntityV4.entityBuilder(PurchaseDownPayments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseDownPayments` entity type.
     * @returns A `PurchaseDownPayments` request builder.
     */
    PurchaseDownPayments.requestBuilder = function () {
        return new PurchaseDownPaymentsRequestBuilder_1.PurchaseDownPaymentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseDownPayments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseDownPayments`.
     */
    PurchaseDownPayments.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PurchaseDownPayments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseDownPayments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseDownPayments.
     */
    PurchaseDownPayments._entityName = 'PurchaseDownPayments';
    /**
     * Default url path for the according service.
     */
    PurchaseDownPayments._defaultServicePath = '/b1s/v2/';
    return PurchaseDownPayments;
}(core_1.EntityV4));
exports.PurchaseDownPayments = PurchaseDownPayments;
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
(function (PurchaseDownPayments) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_ENTRY = new core_1.NumberField('DocEntry', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_NUM = new core_1.NumberField('DocNum', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_TYPE = new core_1.EnumField('DocType', PurchaseDownPayments);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.HAND_WRITTEN = new core_1.EnumField('HandWritten', PurchaseDownPayments);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PRINTED = new core_1.EnumField('Printed', PurchaseDownPayments);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_DATE = new core_1.DateField('DocDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_DUE_DATE = new core_1.DateField('DocDueDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CARD_CODE = new core_1.StringField('CardCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CARD_NAME = new core_1.StringField('CardName', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ADDRESS = new core_1.StringField('Address', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NUM_AT_CARD = new core_1.StringField('NumAtCard', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_TOTAL = new core_1.NumberField('DocTotal', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_CURRENCY = new core_1.StringField('DocCurrency', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_RATE = new core_1.NumberField('DocRate', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REFERENCE_1 = new core_1.StringField('Reference1', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REFERENCE_2 = new core_1.StringField('Reference2', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.COMMENTS = new core_1.StringField('Comments', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.JOURNAL_MEMO = new core_1.StringField('JournalMemo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_TIME = new core_1.TimeField('DocTime', PurchaseDownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CONFIRMED = new core_1.EnumField('Confirmed', PurchaseDownPayments);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SUMMERY_TYPE = new core_1.EnumField('SummeryType', PurchaseDownPayments);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SHOW_SCN = new core_1.EnumField('ShowSCN', PurchaseDownPayments);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SERIES = new core_1.NumberField('Series', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_DATE = new core_1.DateField('TaxDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', PurchaseDownPayments);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', PurchaseDownPayments);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SHIP_TO_CODE = new core_1.StringField('ShipToCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.INDICATOR = new core_1.StringField('Indicator', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CREATION_DATE = new core_1.DateField('CreationDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.UPDATE_DATE = new core_1.DateField('UpdateDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TRANS_NUM = new core_1.NumberField('TransNum', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_SUM = new core_1.NumberField('VatSum', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_SUM_FC = new core_1.NumberField('VatSumFc', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NET_PROCEDURE = new core_1.EnumField('NetProcedure', PurchaseDownPayments);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FORM_1099 = new core_1.NumberField('Form1099', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BOX_1099 = new core_1.StringField('Box1099', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REVISION_PO = new core_1.EnumField('RevisionPo', PurchaseDownPayments);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQURIED_DATE = new core_1.DateField('RequriedDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CANCEL_DATE = new core_1.DateField('CancelDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', PurchaseDownPayments);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SUBMITTED = new core_1.EnumField('Submitted', PurchaseDownPayments);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SEGMENT = new core_1.NumberField('Segment', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PICK_STATUS = new core_1.EnumField('PickStatus', PurchaseDownPayments);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PICK = new core_1.EnumField('Pick', PurchaseDownPayments);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', PurchaseDownPayments);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', PurchaseDownPayments);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RESERVE = new core_1.EnumField('Reserve', PurchaseDownPayments);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PROJECT = new core_1.StringField('Project', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', PurchaseDownPayments);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ROUNDING = new core_1.EnumField('Rounding', PurchaseDownPayments);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DEFERRED_TAX = new core_1.EnumField('DeferredTax', PurchaseDownPayments);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_APPLIED = new core_1.NumberField('WTApplied', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', PurchaseDownPayments);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.AGENT_CODE = new core_1.StringField('AgentCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', PurchaseDownPayments);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BASE_AMOUNT = new core_1.NumberField('BaseAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_AMOUNT = new core_1.NumberField('WTAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_DATE = new core_1.DateField('VatDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', PurchaseDownPayments);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ADDRESS_2 = new core_1.StringField('Address2', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', PurchaseDownPayments);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_CODE = new core_1.StringField('PayToCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.MANUAL_NUMBER = new core_1.StringField('ManualNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', PurchaseDownPayments);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', PurchaseDownPayments);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT = new core_1.NumberField('DownPayment', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', PurchaseDownPayments);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PICK_REMARK = new core_1.StringField('PickRemark', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CLOSING_DATE = new core_1.DateField('ClosingDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SERIES_STRING = new core_1.StringField('SeriesString', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', PurchaseDownPayments);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', PurchaseDownPayments);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_PERCENT = new core_1.NumberField('VatPercent', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CANCELLED = new core_1.EnumField('Cancelled', PurchaseDownPayments);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', PurchaseDownPayments);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', PurchaseDownPayments);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GTS_CHECKER = new core_1.NumberField('GTSChecker', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GTS_PAYEE = new core_1.NumberField('GTSPayee', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXTRA_DAYS = new core_1.NumberField('ExtraDays', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.START_FROM = new core_1.EnumField('StartFrom', PurchaseDownPayments);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NTS_APPROVED = new core_1.EnumField('NTSApproved', PurchaseDownPayments);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', PurchaseDownPayments);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_SERIES = new core_1.NumberField('EDocSeries', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_NUM = new core_1.StringField('EDocNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_STATUS = new core_1.EnumField('EDocStatus', PurchaseDownPayments);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', PurchaseDownPayments);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GROUP_SERIES = new core_1.NumberField('GroupSeries', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GROUP_NUMBER = new core_1.NumberField('GroupNumber', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', PurchaseDownPayments);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', PurchaseDownPayments);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', PurchaseDownPayments);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', PurchaseDownPayments);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', PurchaseDownPayments);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CLOSING_OPTION = new core_1.EnumField('ClosingOption', PurchaseDownPayments);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', PurchaseDownPayments);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', PurchaseDownPayments);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', PurchaseDownPayments, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', PurchaseDownPayments);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BPL_NAME = new core_1.StringField('BPLName', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VAT_REG_NUM = new core_1.StringField('VATRegNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SUPPLIER = new core_1.StringField('Supplier', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RELEASER = new core_1.NumberField('Releaser', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RECEIVER = new core_1.NumberField('Receiver', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.IS_ALTERATION = new core_1.EnumField('IsAlteration', PurchaseDownPayments);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CANCEL_STATUS = new core_1.EnumField('CancelStatus', PurchaseDownPayments);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER = new core_1.StringField('Requester', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER_NAME = new core_1.StringField('RequesterName', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', PurchaseDownPayments);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REQ_TYPE = new core_1.NumberField('ReqType', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', PurchaseDownPayments);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', PurchaseDownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', PurchaseDownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', PurchaseDownPayments);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', PurchaseDownPayments);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', PurchaseDownPayments);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', PurchaseDownPayments);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.LETTER = new core_1.EnumField('Letter', PurchaseDownPayments);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.INTERIM_TYPE = new core_1.EnumField('InterimType', PurchaseDownPayments);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RELATED_TYPE = new core_1.NumberField('RelatedType', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', PurchaseDownPayments);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.UPDATE_TIME = new core_1.TimeField('UpdateTime', PurchaseDownPayments, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PRICE_MODE = new core_1.EnumField('PriceMode', PurchaseDownPayments);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.REVISION = new core_1.EnumField('Revision', PurchaseDownPayments);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', PurchaseDownPayments);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', PurchaseDownPayments, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SHIP_FROM = new core_1.StringField('ShipFrom', PurchaseDownPayments, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', PurchaseDownPayments);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', PurchaseDownPayments);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', PurchaseDownPayments);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ISSUING_REASON = new core_1.NumberField('IssuingReason', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', PurchaseDownPayments, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', PurchaseDownPayments, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', PurchaseDownPayments, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseDownPayments, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', PurchaseDownPayments, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', PurchaseDownPayments, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', PurchaseDownPayments, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', PurchaseDownPayments, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', PurchaseDownPayments, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseDownPayments);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseDownPayments);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', PurchaseDownPayments, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', PurchaseDownPayments, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CURRENCY = new core_1.OneToOneLink('Currency', PurchaseDownPayments, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', PurchaseDownPayments, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', PurchaseDownPayments, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', PurchaseDownPayments, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', PurchaseDownPayments, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', PurchaseDownPayments, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.FORMS_1099 = new core_1.OneToOneLink('Forms1099', PurchaseDownPayments, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', PurchaseDownPayments, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', PurchaseDownPayments, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.PROJECT_2 = new core_1.OneToOneLink('Project2', PurchaseDownPayments, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', PurchaseDownPayments, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.COUNTRY = new core_1.OneToOneLink('Country', PurchaseDownPayments, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', PurchaseDownPayments, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', PurchaseDownPayments, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.NF_MODEL = new core_1.OneToOneLink('NFModel', PurchaseDownPayments, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', PurchaseDownPayments, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', PurchaseDownPayments, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.BRANCH = new core_1.OneToOneLink('Branch', PurchaseDownPayments, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.DEPARTMENT = new core_1.OneToOneLink('Department', PurchaseDownPayments, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDownPayments.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', PurchaseDownPayments, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseDownPayments entity.
     */
    PurchaseDownPayments._allFields = [
        PurchaseDownPayments.DOC_ENTRY,
        PurchaseDownPayments.DOC_NUM,
        PurchaseDownPayments.DOC_TYPE,
        PurchaseDownPayments.HAND_WRITTEN,
        PurchaseDownPayments.PRINTED,
        PurchaseDownPayments.DOC_DATE,
        PurchaseDownPayments.DOC_DUE_DATE,
        PurchaseDownPayments.CARD_CODE,
        PurchaseDownPayments.CARD_NAME,
        PurchaseDownPayments.ADDRESS,
        PurchaseDownPayments.NUM_AT_CARD,
        PurchaseDownPayments.DOC_TOTAL,
        PurchaseDownPayments.ATTACHMENT_ENTRY,
        PurchaseDownPayments.DOC_CURRENCY,
        PurchaseDownPayments.DOC_RATE,
        PurchaseDownPayments.REFERENCE_1,
        PurchaseDownPayments.REFERENCE_2,
        PurchaseDownPayments.COMMENTS,
        PurchaseDownPayments.JOURNAL_MEMO,
        PurchaseDownPayments.PAYMENT_GROUP_CODE,
        PurchaseDownPayments.DOC_TIME,
        PurchaseDownPayments.SALES_PERSON_CODE,
        PurchaseDownPayments.TRANSPORTATION_CODE,
        PurchaseDownPayments.CONFIRMED,
        PurchaseDownPayments.IMPORT_FILE_NUM,
        PurchaseDownPayments.SUMMERY_TYPE,
        PurchaseDownPayments.CONTACT_PERSON_CODE,
        PurchaseDownPayments.SHOW_SCN,
        PurchaseDownPayments.SERIES,
        PurchaseDownPayments.TAX_DATE,
        PurchaseDownPayments.PARTIAL_SUPPLY,
        PurchaseDownPayments.DOC_OBJECT_CODE,
        PurchaseDownPayments.SHIP_TO_CODE,
        PurchaseDownPayments.INDICATOR,
        PurchaseDownPayments.FEDERAL_TAX_ID,
        PurchaseDownPayments.DISCOUNT_PERCENT,
        PurchaseDownPayments.PAYMENT_REFERENCE,
        PurchaseDownPayments.CREATION_DATE,
        PurchaseDownPayments.UPDATE_DATE,
        PurchaseDownPayments.FINANCIAL_PERIOD,
        PurchaseDownPayments.TRANS_NUM,
        PurchaseDownPayments.VAT_SUM,
        PurchaseDownPayments.VAT_SUM_SYS,
        PurchaseDownPayments.VAT_SUM_FC,
        PurchaseDownPayments.NET_PROCEDURE,
        PurchaseDownPayments.DOC_TOTAL_FC,
        PurchaseDownPayments.DOC_TOTAL_SYS,
        PurchaseDownPayments.FORM_1099,
        PurchaseDownPayments.BOX_1099,
        PurchaseDownPayments.REVISION_PO,
        PurchaseDownPayments.REQURIED_DATE,
        PurchaseDownPayments.CANCEL_DATE,
        PurchaseDownPayments.BLOCK_DUNNING,
        PurchaseDownPayments.SUBMITTED,
        PurchaseDownPayments.SEGMENT,
        PurchaseDownPayments.PICK_STATUS,
        PurchaseDownPayments.PICK,
        PurchaseDownPayments.PAYMENT_METHOD,
        PurchaseDownPayments.PAYMENT_BLOCK,
        PurchaseDownPayments.PAYMENT_BLOCK_ENTRY,
        PurchaseDownPayments.CENTRAL_BANK_INDICATOR,
        PurchaseDownPayments.MAXIMUM_CASH_DISCOUNT,
        PurchaseDownPayments.RESERVE,
        PurchaseDownPayments.PROJECT,
        PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseDownPayments.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseDownPayments.WARE_HOUSE_UPDATE_TYPE,
        PurchaseDownPayments.ROUNDING,
        PurchaseDownPayments.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseDownPayments.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseDownPayments.NEXT_CORRECTING_DOCUMENT,
        PurchaseDownPayments.DEFERRED_TAX,
        PurchaseDownPayments.TAX_EXEMPTION_LETTER_NUM,
        PurchaseDownPayments.WT_APPLIED,
        PurchaseDownPayments.WT_APPLIED_FC,
        PurchaseDownPayments.BILL_OF_EXCHANGE_RESERVED,
        PurchaseDownPayments.AGENT_CODE,
        PurchaseDownPayments.WT_APPLIED_SC,
        PurchaseDownPayments.TOTAL_EQUALIZATION_TAX,
        PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseDownPayments.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseDownPayments.NUMBER_OF_INSTALLMENTS,
        PurchaseDownPayments.APPLY_TAX_ON_FIRST_INSTALLMENT,
        PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT,
        PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseDownPayments.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseDownPayments.WT_EXEMPTED_AMOUNT,
        PurchaseDownPayments.WT_EXEMPTED_AMOUNT_SC,
        PurchaseDownPayments.WT_EXEMPTED_AMOUNT_FC,
        PurchaseDownPayments.BASE_AMOUNT,
        PurchaseDownPayments.BASE_AMOUNT_SC,
        PurchaseDownPayments.BASE_AMOUNT_FC,
        PurchaseDownPayments.WT_AMOUNT,
        PurchaseDownPayments.WT_AMOUNT_SC,
        PurchaseDownPayments.WT_AMOUNT_FC,
        PurchaseDownPayments.VAT_DATE,
        PurchaseDownPayments.DOCUMENTS_OWNER,
        PurchaseDownPayments.FOLIO_PREFIX_STRING,
        PurchaseDownPayments.FOLIO_NUMBER,
        PurchaseDownPayments.DOCUMENT_SUB_TYPE,
        PurchaseDownPayments.BP_CHANNEL_CODE,
        PurchaseDownPayments.BP_CHANNEL_CONTACT,
        PurchaseDownPayments.ADDRESS_2,
        PurchaseDownPayments.DOCUMENT_STATUS,
        PurchaseDownPayments.PERIOD_INDICATOR,
        PurchaseDownPayments.PAY_TO_CODE,
        PurchaseDownPayments.MANUAL_NUMBER,
        PurchaseDownPayments.USE_SHPD_GOODS_ACT,
        PurchaseDownPayments.IS_PAY_TO_BANK,
        PurchaseDownPayments.PAY_TO_BANK_COUNTRY,
        PurchaseDownPayments.PAY_TO_BANK_CODE,
        PurchaseDownPayments.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseDownPayments.PAY_TO_BANK_BRANCH,
        PurchaseDownPayments.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseDownPayments.DOWN_PAYMENT,
        PurchaseDownPayments.RESERVE_INVOICE,
        PurchaseDownPayments.LANGUAGE_CODE,
        PurchaseDownPayments.TRACKING_NUMBER,
        PurchaseDownPayments.PICK_REMARK,
        PurchaseDownPayments.CLOSING_DATE,
        PurchaseDownPayments.SEQUENCE_CODE,
        PurchaseDownPayments.SEQUENCE_SERIAL,
        PurchaseDownPayments.SERIES_STRING,
        PurchaseDownPayments.SUB_SERIES_STRING,
        PurchaseDownPayments.SEQUENCE_MODEL,
        PurchaseDownPayments.USE_CORRECTION_VAT_GROUP,
        PurchaseDownPayments.TOTAL_DISCOUNT,
        PurchaseDownPayments.DOWN_PAYMENT_AMOUNT,
        PurchaseDownPayments.DOWN_PAYMENT_PERCENTAGE,
        PurchaseDownPayments.DOWN_PAYMENT_TYPE,
        PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseDownPayments.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseDownPayments.VAT_PERCENT,
        PurchaseDownPayments.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseDownPayments.OPENING_REMARKS,
        PurchaseDownPayments.CLOSING_REMARKS,
        PurchaseDownPayments.ROUNDING_DIFF_AMOUNT,
        PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseDownPayments.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseDownPayments.CANCELLED,
        PurchaseDownPayments.SIGNATURE_INPUT_MESSAGE,
        PurchaseDownPayments.SIGNATURE_DIGEST,
        PurchaseDownPayments.CERTIFICATION_NUMBER,
        PurchaseDownPayments.PRIVATE_KEY_VERSION,
        PurchaseDownPayments.CONTROL_ACCOUNT,
        PurchaseDownPayments.INSURANCE_OPERATION_347,
        PurchaseDownPayments.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        PurchaseDownPayments.GTS_CHECKER,
        PurchaseDownPayments.GTS_PAYEE,
        PurchaseDownPayments.EXTRA_MONTH,
        PurchaseDownPayments.EXTRA_DAYS,
        PurchaseDownPayments.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseDownPayments.START_FROM,
        PurchaseDownPayments.NTS_APPROVED,
        PurchaseDownPayments.E_TAX_WEB_SITE,
        PurchaseDownPayments.E_TAX_NUMBER,
        PurchaseDownPayments.NTS_APPROVED_NUMBER,
        PurchaseDownPayments.E_DOC_GENERATION_TYPE,
        PurchaseDownPayments.E_DOC_SERIES,
        PurchaseDownPayments.E_DOC_NUM,
        PurchaseDownPayments.E_DOC_EXPORT_FORMAT,
        PurchaseDownPayments.E_DOC_STATUS,
        PurchaseDownPayments.E_DOC_ERROR_CODE,
        PurchaseDownPayments.E_DOC_ERROR_MESSAGE,
        PurchaseDownPayments.DOWN_PAYMENT_STATUS,
        PurchaseDownPayments.GROUP_SERIES,
        PurchaseDownPayments.GROUP_NUMBER,
        PurchaseDownPayments.GROUP_HAND_WRITTEN,
        PurchaseDownPayments.REOPEN_ORIGINAL_DOCUMENT,
        PurchaseDownPayments.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        PurchaseDownPayments.CREATE_ONLINE_QUOTATION,
        PurchaseDownPayments.POS_EQUIPMENT_NUMBER,
        PurchaseDownPayments.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseDownPayments.POS_CASHIER_NUMBER,
        PurchaseDownPayments.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        PurchaseDownPayments.CLOSING_OPTION,
        PurchaseDownPayments.SPECIFIED_CLOSING_DATE,
        PurchaseDownPayments.OPEN_FOR_LANDED_COSTS,
        PurchaseDownPayments.AUTHORIZATION_STATUS,
        PurchaseDownPayments.TOTAL_DISCOUNT_FC,
        PurchaseDownPayments.TOTAL_DISCOUNT_SC,
        PurchaseDownPayments.RELEVANT_TO_GTS,
        PurchaseDownPayments.BPL_NAME,
        PurchaseDownPayments.VAT_REG_NUM,
        PurchaseDownPayments.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseDownPayments.SUPPLIER,
        PurchaseDownPayments.RELEASER,
        PurchaseDownPayments.RECEIVER,
        PurchaseDownPayments.BLANKET_AGREEMENT_NUMBER,
        PurchaseDownPayments.IS_ALTERATION,
        PurchaseDownPayments.CANCEL_STATUS,
        PurchaseDownPayments.ASSET_VALUE_DATE,
        PurchaseDownPayments.REQUESTER,
        PurchaseDownPayments.REQUESTER_NAME,
        PurchaseDownPayments.REQUESTER_BRANCH,
        PurchaseDownPayments.REQUESTER_DEPARTMENT,
        PurchaseDownPayments.REQUESTER_EMAIL,
        PurchaseDownPayments.SEND_NOTIFICATION,
        PurchaseDownPayments.REQ_TYPE,
        PurchaseDownPayments.DOCUMENT_DELIVERY,
        PurchaseDownPayments.AUTHORIZATION_CODE,
        PurchaseDownPayments.START_DELIVERY_DATE,
        PurchaseDownPayments.START_DELIVERY_TIME,
        PurchaseDownPayments.END_DELIVERY_DATE,
        PurchaseDownPayments.END_DELIVERY_TIME,
        PurchaseDownPayments.VEHICLE_PLATE,
        PurchaseDownPayments.AT_DOCUMENT_TYPE,
        PurchaseDownPayments.ELEC_COMM_STATUS,
        PurchaseDownPayments.ELEC_COMM_MESSAGE,
        PurchaseDownPayments.REUSE_DOCUMENT_NUM,
        PurchaseDownPayments.REUSE_NOTA_FISCAL_NUM,
        PurchaseDownPayments.PRINT_SEPA_DIRECT,
        PurchaseDownPayments.FISCAL_DOC_NUM,
        PurchaseDownPayments.POS_DAILY_SUMMARY_NO,
        PurchaseDownPayments.POS_RECEIPT_NO,
        PurchaseDownPayments.POINT_OF_ISSUE_CODE,
        PurchaseDownPayments.LETTER,
        PurchaseDownPayments.FOLIO_NUMBER_FROM,
        PurchaseDownPayments.FOLIO_NUMBER_TO,
        PurchaseDownPayments.INTERIM_TYPE,
        PurchaseDownPayments.RELATED_TYPE,
        PurchaseDownPayments.RELATED_ENTRY,
        PurchaseDownPayments.DOCUMENT_TAX_ID,
        PurchaseDownPayments.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseDownPayments.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseDownPayments.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        PurchaseDownPayments.POS_CASH_REGISTER,
        PurchaseDownPayments.UPDATE_TIME,
        PurchaseDownPayments.PRICE_MODE,
        PurchaseDownPayments.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseDownPayments.REVISION,
        PurchaseDownPayments.ORIGINAL_REF_NO,
        PurchaseDownPayments.ORIGINAL_REF_DATE,
        PurchaseDownPayments.GST_TRANSACTION_TYPE,
        PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseDownPayments.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseDownPayments.E_COMMERCE_OPERATOR,
        PurchaseDownPayments.E_COMMERCE_GSTIN,
        PurchaseDownPayments.TAX_INVOICE_NO,
        PurchaseDownPayments.TAX_INVOICE_DATE,
        PurchaseDownPayments.SHIP_FROM,
        PurchaseDownPayments.COMMISSION_TRADE,
        PurchaseDownPayments.COMMISSION_TRADE_RETURN,
        PurchaseDownPayments.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        PurchaseDownPayments.ISSUING_REASON,
        PurchaseDownPayments.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseDownPayments.DOCUMENT_LINES,
        PurchaseDownPayments.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseDownPayments.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseDownPayments.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseDownPayments.DOCUMENT_PACKAGES,
        PurchaseDownPayments.DOCUMENT_SPECIAL_LINES,
        PurchaseDownPayments.DOCUMENT_INSTALLMENTS,
        PurchaseDownPayments.DOWN_PAYMENTS_TO_DRAW,
        PurchaseDownPayments.TAX_EXTENSION,
        PurchaseDownPayments.ADDRESS_EXTENSION,
        PurchaseDownPayments.SOI_WIZARD_ID,
        PurchaseDownPayments.BUSINESS_PARTNER,
        PurchaseDownPayments.CURRENCY,
        PurchaseDownPayments.PAYMENT_TERMS_TYPE,
        PurchaseDownPayments.SALES_PERSON,
        PurchaseDownPayments.SHIPPING_TYPE,
        PurchaseDownPayments.FACTORING_INDICATOR,
        PurchaseDownPayments.JOURNAL_ENTRY,
        PurchaseDownPayments.FORMS_1099,
        PurchaseDownPayments.WIZARD_PAYMENT_METHOD,
        PurchaseDownPayments.PAYMENT_BLOCK_2,
        PurchaseDownPayments.PROJECT_2,
        PurchaseDownPayments.EMPLOYEE_INFO,
        PurchaseDownPayments.COUNTRY,
        PurchaseDownPayments.BUSINESS_PLACE,
        PurchaseDownPayments.USER_LANGUAGE,
        PurchaseDownPayments.NF_MODEL,
        PurchaseDownPayments.CHART_OF_ACCOUNT,
        PurchaseDownPayments.TAX_WEB_SITE,
        PurchaseDownPayments.BRANCH,
        PurchaseDownPayments.DEPARTMENT,
        PurchaseDownPayments.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseDownPayments.ALL_FIELDS = new core_1.AllFields('*', PurchaseDownPayments);
    /**
     * All key fields of the PurchaseDownPayments entity.
     */
    PurchaseDownPayments._keyFields = [PurchaseDownPayments.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseDownPayments.
     */
    PurchaseDownPayments._keys = PurchaseDownPayments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseDownPayments = exports.PurchaseDownPayments || (exports.PurchaseDownPayments = {}));
exports.PurchaseDownPayments = PurchaseDownPayments;
//# sourceMappingURL=PurchaseDownPayments.js.map