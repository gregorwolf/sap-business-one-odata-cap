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
exports.PurchaseReturns = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseReturnsRequestBuilder_1 = require("./PurchaseReturnsRequestBuilder");
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
 * This class represents the entity "PurchaseReturns" of service "SAPB1".
 */
var PurchaseReturns = /** @class */ (function (_super) {
    __extends(PurchaseReturns, _super);
    function PurchaseReturns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PurchaseReturns`.
     * @returns A builder that constructs instances of entity type `PurchaseReturns`.
     */
    PurchaseReturns.builder = function () {
        return core_1.EntityV4.entityBuilder(PurchaseReturns);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseReturns` entity type.
     * @returns A `PurchaseReturns` request builder.
     */
    PurchaseReturns.requestBuilder = function () {
        return new PurchaseReturnsRequestBuilder_1.PurchaseReturnsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseReturns`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseReturns`.
     */
    PurchaseReturns.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PurchaseReturns);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseReturns.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseReturns.
     */
    PurchaseReturns._entityName = 'PurchaseReturns';
    /**
     * Default url path for the according service.
     */
    PurchaseReturns._defaultServicePath = '/b1s/v2/';
    return PurchaseReturns;
}(core_1.EntityV4));
exports.PurchaseReturns = PurchaseReturns;
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
(function (PurchaseReturns) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_ENTRY = new core_1.NumberField('DocEntry', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_NUM = new core_1.NumberField('DocNum', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_TYPE = new core_1.EnumField('DocType', PurchaseReturns);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.HAND_WRITTEN = new core_1.EnumField('HandWritten', PurchaseReturns);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PRINTED = new core_1.EnumField('Printed', PurchaseReturns);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_DATE = new core_1.DateField('DocDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_DUE_DATE = new core_1.DateField('DocDueDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CARD_CODE = new core_1.StringField('CardCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CARD_NAME = new core_1.StringField('CardName', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ADDRESS = new core_1.StringField('Address', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NUM_AT_CARD = new core_1.StringField('NumAtCard', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_TOTAL = new core_1.NumberField('DocTotal', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_CURRENCY = new core_1.StringField('DocCurrency', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_RATE = new core_1.NumberField('DocRate', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REFERENCE_1 = new core_1.StringField('Reference1', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REFERENCE_2 = new core_1.StringField('Reference2', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.COMMENTS = new core_1.StringField('Comments', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.JOURNAL_MEMO = new core_1.StringField('JournalMemo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_TIME = new core_1.TimeField('DocTime', PurchaseReturns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CONFIRMED = new core_1.EnumField('Confirmed', PurchaseReturns);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SUMMERY_TYPE = new core_1.EnumField('SummeryType', PurchaseReturns);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SHOW_SCN = new core_1.EnumField('ShowSCN', PurchaseReturns);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SERIES = new core_1.NumberField('Series', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_DATE = new core_1.DateField('TaxDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', PurchaseReturns);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', PurchaseReturns);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SHIP_TO_CODE = new core_1.StringField('ShipToCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.INDICATOR = new core_1.StringField('Indicator', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CREATION_DATE = new core_1.DateField('CreationDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.UPDATE_DATE = new core_1.DateField('UpdateDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TRANS_NUM = new core_1.NumberField('TransNum', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_SUM = new core_1.NumberField('VatSum', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_SUM_FC = new core_1.NumberField('VatSumFc', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NET_PROCEDURE = new core_1.EnumField('NetProcedure', PurchaseReturns);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FORM_1099 = new core_1.NumberField('Form1099', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BOX_1099 = new core_1.StringField('Box1099', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REVISION_PO = new core_1.EnumField('RevisionPo', PurchaseReturns);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQURIED_DATE = new core_1.DateField('RequriedDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CANCEL_DATE = new core_1.DateField('CancelDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', PurchaseReturns);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SUBMITTED = new core_1.EnumField('Submitted', PurchaseReturns);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SEGMENT = new core_1.NumberField('Segment', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PICK_STATUS = new core_1.EnumField('PickStatus', PurchaseReturns);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PICK = new core_1.EnumField('Pick', PurchaseReturns);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', PurchaseReturns);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', PurchaseReturns);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RESERVE = new core_1.EnumField('Reserve', PurchaseReturns);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PROJECT = new core_1.StringField('Project', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', PurchaseReturns);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ROUNDING = new core_1.EnumField('Rounding', PurchaseReturns);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DEFERRED_TAX = new core_1.EnumField('DeferredTax', PurchaseReturns);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_APPLIED = new core_1.NumberField('WTApplied', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', PurchaseReturns);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.AGENT_CODE = new core_1.StringField('AgentCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', PurchaseReturns);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BASE_AMOUNT = new core_1.NumberField('BaseAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_AMOUNT = new core_1.NumberField('WTAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_DATE = new core_1.DateField('VatDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', PurchaseReturns);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ADDRESS_2 = new core_1.StringField('Address2', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', PurchaseReturns);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_CODE = new core_1.StringField('PayToCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.MANUAL_NUMBER = new core_1.StringField('ManualNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', PurchaseReturns);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', PurchaseReturns);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT = new core_1.NumberField('DownPayment', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', PurchaseReturns);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PICK_REMARK = new core_1.StringField('PickRemark', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CLOSING_DATE = new core_1.DateField('ClosingDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SERIES_STRING = new core_1.StringField('SeriesString', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', PurchaseReturns);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', PurchaseReturns);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_PERCENT = new core_1.NumberField('VatPercent', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CANCELLED = new core_1.EnumField('Cancelled', PurchaseReturns);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', PurchaseReturns);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', PurchaseReturns);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GTS_CHECKER = new core_1.NumberField('GTSChecker', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GTS_PAYEE = new core_1.NumberField('GTSPayee', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXTRA_DAYS = new core_1.NumberField('ExtraDays', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.START_FROM = new core_1.EnumField('StartFrom', PurchaseReturns);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NTS_APPROVED = new core_1.EnumField('NTSApproved', PurchaseReturns);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', PurchaseReturns);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_SERIES = new core_1.NumberField('EDocSeries', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_NUM = new core_1.StringField('EDocNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_STATUS = new core_1.EnumField('EDocStatus', PurchaseReturns);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', PurchaseReturns);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GROUP_SERIES = new core_1.NumberField('GroupSeries', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GROUP_NUMBER = new core_1.NumberField('GroupNumber', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', PurchaseReturns);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', PurchaseReturns);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', PurchaseReturns);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', PurchaseReturns);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', PurchaseReturns);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CLOSING_OPTION = new core_1.EnumField('ClosingOption', PurchaseReturns);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', PurchaseReturns);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', PurchaseReturns);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', PurchaseReturns, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', PurchaseReturns);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BPL_NAME = new core_1.StringField('BPLName', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VAT_REG_NUM = new core_1.StringField('VATRegNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SUPPLIER = new core_1.StringField('Supplier', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RELEASER = new core_1.NumberField('Releaser', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RECEIVER = new core_1.NumberField('Receiver', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.IS_ALTERATION = new core_1.EnumField('IsAlteration', PurchaseReturns);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CANCEL_STATUS = new core_1.EnumField('CancelStatus', PurchaseReturns);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER = new core_1.StringField('Requester', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER_NAME = new core_1.StringField('RequesterName', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', PurchaseReturns);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REQ_TYPE = new core_1.NumberField('ReqType', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', PurchaseReturns);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', PurchaseReturns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', PurchaseReturns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', PurchaseReturns);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', PurchaseReturns);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', PurchaseReturns);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', PurchaseReturns);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.LETTER = new core_1.EnumField('Letter', PurchaseReturns);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.INTERIM_TYPE = new core_1.EnumField('InterimType', PurchaseReturns);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RELATED_TYPE = new core_1.NumberField('RelatedType', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', PurchaseReturns);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.UPDATE_TIME = new core_1.TimeField('UpdateTime', PurchaseReturns, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PRICE_MODE = new core_1.EnumField('PriceMode', PurchaseReturns);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.REVISION = new core_1.EnumField('Revision', PurchaseReturns);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', PurchaseReturns);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', PurchaseReturns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SHIP_FROM = new core_1.StringField('ShipFrom', PurchaseReturns, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', PurchaseReturns);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', PurchaseReturns);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', PurchaseReturns);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ISSUING_REASON = new core_1.NumberField('IssuingReason', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', PurchaseReturns, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', PurchaseReturns, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', PurchaseReturns, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseReturns, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', PurchaseReturns, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', PurchaseReturns, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', PurchaseReturns, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', PurchaseReturns, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', PurchaseReturns, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseReturns);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseReturns);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', PurchaseReturns, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', PurchaseReturns, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CURRENCY = new core_1.OneToOneLink('Currency', PurchaseReturns, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', PurchaseReturns, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', PurchaseReturns, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', PurchaseReturns, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', PurchaseReturns, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', PurchaseReturns, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.FORMS_1099 = new core_1.OneToOneLink('Forms1099', PurchaseReturns, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', PurchaseReturns, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', PurchaseReturns, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.PROJECT_2 = new core_1.OneToOneLink('Project2', PurchaseReturns, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', PurchaseReturns, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.COUNTRY = new core_1.OneToOneLink('Country', PurchaseReturns, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', PurchaseReturns, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', PurchaseReturns, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.NF_MODEL = new core_1.OneToOneLink('NFModel', PurchaseReturns, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', PurchaseReturns, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', PurchaseReturns, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.BRANCH = new core_1.OneToOneLink('Branch', PurchaseReturns, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.DEPARTMENT = new core_1.OneToOneLink('Department', PurchaseReturns, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseReturns.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', PurchaseReturns, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseReturns entity.
     */
    PurchaseReturns._allFields = [
        PurchaseReturns.DOC_ENTRY,
        PurchaseReturns.DOC_NUM,
        PurchaseReturns.DOC_TYPE,
        PurchaseReturns.HAND_WRITTEN,
        PurchaseReturns.PRINTED,
        PurchaseReturns.DOC_DATE,
        PurchaseReturns.DOC_DUE_DATE,
        PurchaseReturns.CARD_CODE,
        PurchaseReturns.CARD_NAME,
        PurchaseReturns.ADDRESS,
        PurchaseReturns.NUM_AT_CARD,
        PurchaseReturns.DOC_TOTAL,
        PurchaseReturns.ATTACHMENT_ENTRY,
        PurchaseReturns.DOC_CURRENCY,
        PurchaseReturns.DOC_RATE,
        PurchaseReturns.REFERENCE_1,
        PurchaseReturns.REFERENCE_2,
        PurchaseReturns.COMMENTS,
        PurchaseReturns.JOURNAL_MEMO,
        PurchaseReturns.PAYMENT_GROUP_CODE,
        PurchaseReturns.DOC_TIME,
        PurchaseReturns.SALES_PERSON_CODE,
        PurchaseReturns.TRANSPORTATION_CODE,
        PurchaseReturns.CONFIRMED,
        PurchaseReturns.IMPORT_FILE_NUM,
        PurchaseReturns.SUMMERY_TYPE,
        PurchaseReturns.CONTACT_PERSON_CODE,
        PurchaseReturns.SHOW_SCN,
        PurchaseReturns.SERIES,
        PurchaseReturns.TAX_DATE,
        PurchaseReturns.PARTIAL_SUPPLY,
        PurchaseReturns.DOC_OBJECT_CODE,
        PurchaseReturns.SHIP_TO_CODE,
        PurchaseReturns.INDICATOR,
        PurchaseReturns.FEDERAL_TAX_ID,
        PurchaseReturns.DISCOUNT_PERCENT,
        PurchaseReturns.PAYMENT_REFERENCE,
        PurchaseReturns.CREATION_DATE,
        PurchaseReturns.UPDATE_DATE,
        PurchaseReturns.FINANCIAL_PERIOD,
        PurchaseReturns.TRANS_NUM,
        PurchaseReturns.VAT_SUM,
        PurchaseReturns.VAT_SUM_SYS,
        PurchaseReturns.VAT_SUM_FC,
        PurchaseReturns.NET_PROCEDURE,
        PurchaseReturns.DOC_TOTAL_FC,
        PurchaseReturns.DOC_TOTAL_SYS,
        PurchaseReturns.FORM_1099,
        PurchaseReturns.BOX_1099,
        PurchaseReturns.REVISION_PO,
        PurchaseReturns.REQURIED_DATE,
        PurchaseReturns.CANCEL_DATE,
        PurchaseReturns.BLOCK_DUNNING,
        PurchaseReturns.SUBMITTED,
        PurchaseReturns.SEGMENT,
        PurchaseReturns.PICK_STATUS,
        PurchaseReturns.PICK,
        PurchaseReturns.PAYMENT_METHOD,
        PurchaseReturns.PAYMENT_BLOCK,
        PurchaseReturns.PAYMENT_BLOCK_ENTRY,
        PurchaseReturns.CENTRAL_BANK_INDICATOR,
        PurchaseReturns.MAXIMUM_CASH_DISCOUNT,
        PurchaseReturns.RESERVE,
        PurchaseReturns.PROJECT,
        PurchaseReturns.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseReturns.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseReturns.WARE_HOUSE_UPDATE_TYPE,
        PurchaseReturns.ROUNDING,
        PurchaseReturns.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseReturns.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseReturns.NEXT_CORRECTING_DOCUMENT,
        PurchaseReturns.DEFERRED_TAX,
        PurchaseReturns.TAX_EXEMPTION_LETTER_NUM,
        PurchaseReturns.WT_APPLIED,
        PurchaseReturns.WT_APPLIED_FC,
        PurchaseReturns.BILL_OF_EXCHANGE_RESERVED,
        PurchaseReturns.AGENT_CODE,
        PurchaseReturns.WT_APPLIED_SC,
        PurchaseReturns.TOTAL_EQUALIZATION_TAX,
        PurchaseReturns.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseReturns.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseReturns.NUMBER_OF_INSTALLMENTS,
        PurchaseReturns.APPLY_TAX_ON_FIRST_INSTALLMENT,
        PurchaseReturns.WT_NON_SUBJECT_AMOUNT,
        PurchaseReturns.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseReturns.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseReturns.WT_EXEMPTED_AMOUNT,
        PurchaseReturns.WT_EXEMPTED_AMOUNT_SC,
        PurchaseReturns.WT_EXEMPTED_AMOUNT_FC,
        PurchaseReturns.BASE_AMOUNT,
        PurchaseReturns.BASE_AMOUNT_SC,
        PurchaseReturns.BASE_AMOUNT_FC,
        PurchaseReturns.WT_AMOUNT,
        PurchaseReturns.WT_AMOUNT_SC,
        PurchaseReturns.WT_AMOUNT_FC,
        PurchaseReturns.VAT_DATE,
        PurchaseReturns.DOCUMENTS_OWNER,
        PurchaseReturns.FOLIO_PREFIX_STRING,
        PurchaseReturns.FOLIO_NUMBER,
        PurchaseReturns.DOCUMENT_SUB_TYPE,
        PurchaseReturns.BP_CHANNEL_CODE,
        PurchaseReturns.BP_CHANNEL_CONTACT,
        PurchaseReturns.ADDRESS_2,
        PurchaseReturns.DOCUMENT_STATUS,
        PurchaseReturns.PERIOD_INDICATOR,
        PurchaseReturns.PAY_TO_CODE,
        PurchaseReturns.MANUAL_NUMBER,
        PurchaseReturns.USE_SHPD_GOODS_ACT,
        PurchaseReturns.IS_PAY_TO_BANK,
        PurchaseReturns.PAY_TO_BANK_COUNTRY,
        PurchaseReturns.PAY_TO_BANK_CODE,
        PurchaseReturns.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseReturns.PAY_TO_BANK_BRANCH,
        PurchaseReturns.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseReturns.DOWN_PAYMENT,
        PurchaseReturns.RESERVE_INVOICE,
        PurchaseReturns.LANGUAGE_CODE,
        PurchaseReturns.TRACKING_NUMBER,
        PurchaseReturns.PICK_REMARK,
        PurchaseReturns.CLOSING_DATE,
        PurchaseReturns.SEQUENCE_CODE,
        PurchaseReturns.SEQUENCE_SERIAL,
        PurchaseReturns.SERIES_STRING,
        PurchaseReturns.SUB_SERIES_STRING,
        PurchaseReturns.SEQUENCE_MODEL,
        PurchaseReturns.USE_CORRECTION_VAT_GROUP,
        PurchaseReturns.TOTAL_DISCOUNT,
        PurchaseReturns.DOWN_PAYMENT_AMOUNT,
        PurchaseReturns.DOWN_PAYMENT_PERCENTAGE,
        PurchaseReturns.DOWN_PAYMENT_TYPE,
        PurchaseReturns.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseReturns.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseReturns.VAT_PERCENT,
        PurchaseReturns.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseReturns.OPENING_REMARKS,
        PurchaseReturns.CLOSING_REMARKS,
        PurchaseReturns.ROUNDING_DIFF_AMOUNT,
        PurchaseReturns.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseReturns.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseReturns.CANCELLED,
        PurchaseReturns.SIGNATURE_INPUT_MESSAGE,
        PurchaseReturns.SIGNATURE_DIGEST,
        PurchaseReturns.CERTIFICATION_NUMBER,
        PurchaseReturns.PRIVATE_KEY_VERSION,
        PurchaseReturns.CONTROL_ACCOUNT,
        PurchaseReturns.INSURANCE_OPERATION_347,
        PurchaseReturns.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        PurchaseReturns.GTS_CHECKER,
        PurchaseReturns.GTS_PAYEE,
        PurchaseReturns.EXTRA_MONTH,
        PurchaseReturns.EXTRA_DAYS,
        PurchaseReturns.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseReturns.START_FROM,
        PurchaseReturns.NTS_APPROVED,
        PurchaseReturns.E_TAX_WEB_SITE,
        PurchaseReturns.E_TAX_NUMBER,
        PurchaseReturns.NTS_APPROVED_NUMBER,
        PurchaseReturns.E_DOC_GENERATION_TYPE,
        PurchaseReturns.E_DOC_SERIES,
        PurchaseReturns.E_DOC_NUM,
        PurchaseReturns.E_DOC_EXPORT_FORMAT,
        PurchaseReturns.E_DOC_STATUS,
        PurchaseReturns.E_DOC_ERROR_CODE,
        PurchaseReturns.E_DOC_ERROR_MESSAGE,
        PurchaseReturns.DOWN_PAYMENT_STATUS,
        PurchaseReturns.GROUP_SERIES,
        PurchaseReturns.GROUP_NUMBER,
        PurchaseReturns.GROUP_HAND_WRITTEN,
        PurchaseReturns.REOPEN_ORIGINAL_DOCUMENT,
        PurchaseReturns.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        PurchaseReturns.CREATE_ONLINE_QUOTATION,
        PurchaseReturns.POS_EQUIPMENT_NUMBER,
        PurchaseReturns.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseReturns.POS_CASHIER_NUMBER,
        PurchaseReturns.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        PurchaseReturns.CLOSING_OPTION,
        PurchaseReturns.SPECIFIED_CLOSING_DATE,
        PurchaseReturns.OPEN_FOR_LANDED_COSTS,
        PurchaseReturns.AUTHORIZATION_STATUS,
        PurchaseReturns.TOTAL_DISCOUNT_FC,
        PurchaseReturns.TOTAL_DISCOUNT_SC,
        PurchaseReturns.RELEVANT_TO_GTS,
        PurchaseReturns.BPL_NAME,
        PurchaseReturns.VAT_REG_NUM,
        PurchaseReturns.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseReturns.SUPPLIER,
        PurchaseReturns.RELEASER,
        PurchaseReturns.RECEIVER,
        PurchaseReturns.BLANKET_AGREEMENT_NUMBER,
        PurchaseReturns.IS_ALTERATION,
        PurchaseReturns.CANCEL_STATUS,
        PurchaseReturns.ASSET_VALUE_DATE,
        PurchaseReturns.REQUESTER,
        PurchaseReturns.REQUESTER_NAME,
        PurchaseReturns.REQUESTER_BRANCH,
        PurchaseReturns.REQUESTER_DEPARTMENT,
        PurchaseReturns.REQUESTER_EMAIL,
        PurchaseReturns.SEND_NOTIFICATION,
        PurchaseReturns.REQ_TYPE,
        PurchaseReturns.DOCUMENT_DELIVERY,
        PurchaseReturns.AUTHORIZATION_CODE,
        PurchaseReturns.START_DELIVERY_DATE,
        PurchaseReturns.START_DELIVERY_TIME,
        PurchaseReturns.END_DELIVERY_DATE,
        PurchaseReturns.END_DELIVERY_TIME,
        PurchaseReturns.VEHICLE_PLATE,
        PurchaseReturns.AT_DOCUMENT_TYPE,
        PurchaseReturns.ELEC_COMM_STATUS,
        PurchaseReturns.ELEC_COMM_MESSAGE,
        PurchaseReturns.REUSE_DOCUMENT_NUM,
        PurchaseReturns.REUSE_NOTA_FISCAL_NUM,
        PurchaseReturns.PRINT_SEPA_DIRECT,
        PurchaseReturns.FISCAL_DOC_NUM,
        PurchaseReturns.POS_DAILY_SUMMARY_NO,
        PurchaseReturns.POS_RECEIPT_NO,
        PurchaseReturns.POINT_OF_ISSUE_CODE,
        PurchaseReturns.LETTER,
        PurchaseReturns.FOLIO_NUMBER_FROM,
        PurchaseReturns.FOLIO_NUMBER_TO,
        PurchaseReturns.INTERIM_TYPE,
        PurchaseReturns.RELATED_TYPE,
        PurchaseReturns.RELATED_ENTRY,
        PurchaseReturns.DOCUMENT_TAX_ID,
        PurchaseReturns.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseReturns.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseReturns.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        PurchaseReturns.POS_CASH_REGISTER,
        PurchaseReturns.UPDATE_TIME,
        PurchaseReturns.PRICE_MODE,
        PurchaseReturns.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseReturns.REVISION,
        PurchaseReturns.ORIGINAL_REF_NO,
        PurchaseReturns.ORIGINAL_REF_DATE,
        PurchaseReturns.GST_TRANSACTION_TYPE,
        PurchaseReturns.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseReturns.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseReturns.E_COMMERCE_OPERATOR,
        PurchaseReturns.E_COMMERCE_GSTIN,
        PurchaseReturns.TAX_INVOICE_NO,
        PurchaseReturns.TAX_INVOICE_DATE,
        PurchaseReturns.SHIP_FROM,
        PurchaseReturns.COMMISSION_TRADE,
        PurchaseReturns.COMMISSION_TRADE_RETURN,
        PurchaseReturns.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        PurchaseReturns.ISSUING_REASON,
        PurchaseReturns.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseReturns.DOCUMENT_LINES,
        PurchaseReturns.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseReturns.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseReturns.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseReturns.DOCUMENT_PACKAGES,
        PurchaseReturns.DOCUMENT_SPECIAL_LINES,
        PurchaseReturns.DOCUMENT_INSTALLMENTS,
        PurchaseReturns.DOWN_PAYMENTS_TO_DRAW,
        PurchaseReturns.TAX_EXTENSION,
        PurchaseReturns.ADDRESS_EXTENSION,
        PurchaseReturns.SOI_WIZARD_ID,
        PurchaseReturns.BUSINESS_PARTNER,
        PurchaseReturns.CURRENCY,
        PurchaseReturns.PAYMENT_TERMS_TYPE,
        PurchaseReturns.SALES_PERSON,
        PurchaseReturns.SHIPPING_TYPE,
        PurchaseReturns.FACTORING_INDICATOR,
        PurchaseReturns.JOURNAL_ENTRY,
        PurchaseReturns.FORMS_1099,
        PurchaseReturns.WIZARD_PAYMENT_METHOD,
        PurchaseReturns.PAYMENT_BLOCK_2,
        PurchaseReturns.PROJECT_2,
        PurchaseReturns.EMPLOYEE_INFO,
        PurchaseReturns.COUNTRY,
        PurchaseReturns.BUSINESS_PLACE,
        PurchaseReturns.USER_LANGUAGE,
        PurchaseReturns.NF_MODEL,
        PurchaseReturns.CHART_OF_ACCOUNT,
        PurchaseReturns.TAX_WEB_SITE,
        PurchaseReturns.BRANCH,
        PurchaseReturns.DEPARTMENT,
        PurchaseReturns.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseReturns.ALL_FIELDS = new core_1.AllFields('*', PurchaseReturns);
    /**
     * All key fields of the PurchaseReturns entity.
     */
    PurchaseReturns._keyFields = [PurchaseReturns.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseReturns.
     */
    PurchaseReturns._keys = PurchaseReturns._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseReturns = exports.PurchaseReturns || (exports.PurchaseReturns = {}));
exports.PurchaseReturns = PurchaseReturns;
//# sourceMappingURL=PurchaseReturns.js.map