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
exports.PurchaseOrders = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseOrdersRequestBuilder_1 = require("./PurchaseOrdersRequestBuilder");
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
 * This class represents the entity "PurchaseOrders" of service "SAPB1".
 */
var PurchaseOrders = /** @class */ (function (_super) {
    __extends(PurchaseOrders, _super);
    function PurchaseOrders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PurchaseOrders`.
     * @returns A builder that constructs instances of entity type `PurchaseOrders`.
     */
    PurchaseOrders.builder = function () {
        return core_1.EntityV4.entityBuilder(PurchaseOrders);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseOrders` entity type.
     * @returns A `PurchaseOrders` request builder.
     */
    PurchaseOrders.requestBuilder = function () {
        return new PurchaseOrdersRequestBuilder_1.PurchaseOrdersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseOrders`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseOrders`.
     */
    PurchaseOrders.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PurchaseOrders);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseOrders.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseOrders.
     */
    PurchaseOrders._entityName = 'PurchaseOrders';
    /**
     * Default url path for the according service.
     */
    PurchaseOrders._defaultServicePath = '/b1s/v2/';
    return PurchaseOrders;
}(core_1.EntityV4));
exports.PurchaseOrders = PurchaseOrders;
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
(function (PurchaseOrders) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_ENTRY = new core_1.NumberField('DocEntry', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_NUM = new core_1.NumberField('DocNum', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_TYPE = new core_1.EnumField('DocType', PurchaseOrders);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.HAND_WRITTEN = new core_1.EnumField('HandWritten', PurchaseOrders);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PRINTED = new core_1.EnumField('Printed', PurchaseOrders);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_DATE = new core_1.DateField('DocDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_DUE_DATE = new core_1.DateField('DocDueDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CARD_CODE = new core_1.StringField('CardCode', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CARD_NAME = new core_1.StringField('CardName', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ADDRESS = new core_1.StringField('Address', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.NUM_AT_CARD = new core_1.StringField('NumAtCard', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_TOTAL = new core_1.NumberField('DocTotal', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_CURRENCY = new core_1.StringField('DocCurrency', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_RATE = new core_1.NumberField('DocRate', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REFERENCE_1 = new core_1.StringField('Reference1', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REFERENCE_2 = new core_1.StringField('Reference2', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.COMMENTS = new core_1.StringField('Comments', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.JOURNAL_MEMO = new core_1.StringField('JournalMemo', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_TIME = new core_1.TimeField('DocTime', PurchaseOrders, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CONFIRMED = new core_1.EnumField('Confirmed', PurchaseOrders);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SUMMERY_TYPE = new core_1.EnumField('SummeryType', PurchaseOrders);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SHOW_SCN = new core_1.EnumField('ShowSCN', PurchaseOrders);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SERIES = new core_1.NumberField('Series', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TAX_DATE = new core_1.DateField('TaxDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', PurchaseOrders);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', PurchaseOrders);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SHIP_TO_CODE = new core_1.StringField('ShipToCode', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.INDICATOR = new core_1.StringField('Indicator', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CREATION_DATE = new core_1.DateField('CreationDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.UPDATE_DATE = new core_1.DateField('UpdateDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TRANS_NUM = new core_1.NumberField('TransNum', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.VAT_SUM = new core_1.NumberField('VatSum', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.VAT_SUM_FC = new core_1.NumberField('VatSumFc', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.NET_PROCEDURE = new core_1.EnumField('NetProcedure', PurchaseOrders);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FORM_1099 = new core_1.NumberField('Form1099', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BOX_1099 = new core_1.StringField('Box1099', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REVISION_PO = new core_1.EnumField('RevisionPo', PurchaseOrders);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REQURIED_DATE = new core_1.DateField('RequriedDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CANCEL_DATE = new core_1.DateField('CancelDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', PurchaseOrders);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SUBMITTED = new core_1.EnumField('Submitted', PurchaseOrders);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SEGMENT = new core_1.NumberField('Segment', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PICK_STATUS = new core_1.EnumField('PickStatus', PurchaseOrders);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PICK = new core_1.EnumField('Pick', PurchaseOrders);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', PurchaseOrders);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', PurchaseOrders);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.RESERVE = new core_1.EnumField('Reserve', PurchaseOrders);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PROJECT = new core_1.StringField('Project', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', PurchaseOrders);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ROUNDING = new core_1.EnumField('Rounding', PurchaseOrders);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DEFERRED_TAX = new core_1.EnumField('DeferredTax', PurchaseOrders);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_APPLIED = new core_1.NumberField('WTApplied', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', PurchaseOrders);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.AGENT_CODE = new core_1.StringField('AgentCode', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', PurchaseOrders);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BASE_AMOUNT = new core_1.NumberField('BaseAmount', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_AMOUNT = new core_1.NumberField('WTAmount', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.VAT_DATE = new core_1.DateField('VatDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', PurchaseOrders);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ADDRESS_2 = new core_1.StringField('Address2', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', PurchaseOrders);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAY_TO_CODE = new core_1.StringField('PayToCode', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.MANUAL_NUMBER = new core_1.StringField('ManualNumber', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', PurchaseOrders);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', PurchaseOrders);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOWN_PAYMENT = new core_1.NumberField('DownPayment', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', PurchaseOrders);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PICK_REMARK = new core_1.StringField('PickRemark', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CLOSING_DATE = new core_1.DateField('ClosingDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SERIES_STRING = new core_1.StringField('SeriesString', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', PurchaseOrders);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', PurchaseOrders);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.VAT_PERCENT = new core_1.NumberField('VatPercent', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CANCELLED = new core_1.EnumField('Cancelled', PurchaseOrders);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', PurchaseOrders);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', PurchaseOrders);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.GTS_CHECKER = new core_1.NumberField('GTSChecker', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.GTS_PAYEE = new core_1.NumberField('GTSPayee', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.EXTRA_DAYS = new core_1.NumberField('ExtraDays', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.START_FROM = new core_1.EnumField('StartFrom', PurchaseOrders);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.NTS_APPROVED = new core_1.EnumField('NTSApproved', PurchaseOrders);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', PurchaseOrders);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_DOC_SERIES = new core_1.NumberField('EDocSeries', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_DOC_NUM = new core_1.StringField('EDocNum', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_DOC_STATUS = new core_1.EnumField('EDocStatus', PurchaseOrders);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', PurchaseOrders);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.GROUP_SERIES = new core_1.NumberField('GroupSeries', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.GROUP_NUMBER = new core_1.NumberField('GroupNumber', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', PurchaseOrders);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', PurchaseOrders);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', PurchaseOrders);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', PurchaseOrders);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', PurchaseOrders);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CLOSING_OPTION = new core_1.EnumField('ClosingOption', PurchaseOrders);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', PurchaseOrders);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', PurchaseOrders);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', PurchaseOrders, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', PurchaseOrders);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BPL_NAME = new core_1.StringField('BPLName', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.VAT_REG_NUM = new core_1.StringField('VATRegNum', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SUPPLIER = new core_1.StringField('Supplier', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.RELEASER = new core_1.NumberField('Releaser', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.RECEIVER = new core_1.NumberField('Receiver', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.IS_ALTERATION = new core_1.EnumField('IsAlteration', PurchaseOrders);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CANCEL_STATUS = new core_1.EnumField('CancelStatus', PurchaseOrders);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REQUESTER = new core_1.StringField('Requester', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REQUESTER_NAME = new core_1.StringField('RequesterName', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', PurchaseOrders);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REQ_TYPE = new core_1.NumberField('ReqType', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', PurchaseOrders);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', PurchaseOrders, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', PurchaseOrders, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', PurchaseOrders);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', PurchaseOrders);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', PurchaseOrders);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', PurchaseOrders);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.LETTER = new core_1.EnumField('Letter', PurchaseOrders);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.INTERIM_TYPE = new core_1.EnumField('InterimType', PurchaseOrders);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.RELATED_TYPE = new core_1.NumberField('RelatedType', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', PurchaseOrders);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.UPDATE_TIME = new core_1.TimeField('UpdateTime', PurchaseOrders, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PRICE_MODE = new core_1.EnumField('PriceMode', PurchaseOrders);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.REVISION = new core_1.EnumField('Revision', PurchaseOrders);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', PurchaseOrders);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', PurchaseOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SHIP_FROM = new core_1.StringField('ShipFrom', PurchaseOrders, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', PurchaseOrders);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', PurchaseOrders);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', PurchaseOrders);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ISSUING_REASON = new core_1.NumberField('IssuingReason', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', PurchaseOrders, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', PurchaseOrders, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', PurchaseOrders, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseOrders, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', PurchaseOrders, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', PurchaseOrders, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', PurchaseOrders, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', PurchaseOrders, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', PurchaseOrders, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseOrders);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseOrders);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', PurchaseOrders, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', PurchaseOrders, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CURRENCY = new core_1.OneToOneLink('Currency', PurchaseOrders, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', PurchaseOrders, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', PurchaseOrders, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', PurchaseOrders, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', PurchaseOrders, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.FORMS_1099 = new core_1.OneToOneLink('Forms1099', PurchaseOrders, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', PurchaseOrders, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', PurchaseOrders, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.PROJECT_2 = new core_1.OneToOneLink('Project2', PurchaseOrders, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', PurchaseOrders, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.COUNTRY = new core_1.OneToOneLink('Country', PurchaseOrders, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', PurchaseOrders, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', PurchaseOrders, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.NF_MODEL = new core_1.OneToOneLink('NFModel', PurchaseOrders, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', PurchaseOrders, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', PurchaseOrders, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.BRANCH = new core_1.OneToOneLink('Branch', PurchaseOrders, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.DEPARTMENT = new core_1.OneToOneLink('Department', PurchaseOrders, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseOrders.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', PurchaseOrders, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseOrders entity.
     */
    PurchaseOrders._allFields = [
        PurchaseOrders.DOC_ENTRY,
        PurchaseOrders.DOC_NUM,
        PurchaseOrders.DOC_TYPE,
        PurchaseOrders.HAND_WRITTEN,
        PurchaseOrders.PRINTED,
        PurchaseOrders.DOC_DATE,
        PurchaseOrders.DOC_DUE_DATE,
        PurchaseOrders.CARD_CODE,
        PurchaseOrders.CARD_NAME,
        PurchaseOrders.ADDRESS,
        PurchaseOrders.NUM_AT_CARD,
        PurchaseOrders.DOC_TOTAL,
        PurchaseOrders.ATTACHMENT_ENTRY,
        PurchaseOrders.DOC_CURRENCY,
        PurchaseOrders.DOC_RATE,
        PurchaseOrders.REFERENCE_1,
        PurchaseOrders.REFERENCE_2,
        PurchaseOrders.COMMENTS,
        PurchaseOrders.JOURNAL_MEMO,
        PurchaseOrders.PAYMENT_GROUP_CODE,
        PurchaseOrders.DOC_TIME,
        PurchaseOrders.SALES_PERSON_CODE,
        PurchaseOrders.TRANSPORTATION_CODE,
        PurchaseOrders.CONFIRMED,
        PurchaseOrders.IMPORT_FILE_NUM,
        PurchaseOrders.SUMMERY_TYPE,
        PurchaseOrders.CONTACT_PERSON_CODE,
        PurchaseOrders.SHOW_SCN,
        PurchaseOrders.SERIES,
        PurchaseOrders.TAX_DATE,
        PurchaseOrders.PARTIAL_SUPPLY,
        PurchaseOrders.DOC_OBJECT_CODE,
        PurchaseOrders.SHIP_TO_CODE,
        PurchaseOrders.INDICATOR,
        PurchaseOrders.FEDERAL_TAX_ID,
        PurchaseOrders.DISCOUNT_PERCENT,
        PurchaseOrders.PAYMENT_REFERENCE,
        PurchaseOrders.CREATION_DATE,
        PurchaseOrders.UPDATE_DATE,
        PurchaseOrders.FINANCIAL_PERIOD,
        PurchaseOrders.TRANS_NUM,
        PurchaseOrders.VAT_SUM,
        PurchaseOrders.VAT_SUM_SYS,
        PurchaseOrders.VAT_SUM_FC,
        PurchaseOrders.NET_PROCEDURE,
        PurchaseOrders.DOC_TOTAL_FC,
        PurchaseOrders.DOC_TOTAL_SYS,
        PurchaseOrders.FORM_1099,
        PurchaseOrders.BOX_1099,
        PurchaseOrders.REVISION_PO,
        PurchaseOrders.REQURIED_DATE,
        PurchaseOrders.CANCEL_DATE,
        PurchaseOrders.BLOCK_DUNNING,
        PurchaseOrders.SUBMITTED,
        PurchaseOrders.SEGMENT,
        PurchaseOrders.PICK_STATUS,
        PurchaseOrders.PICK,
        PurchaseOrders.PAYMENT_METHOD,
        PurchaseOrders.PAYMENT_BLOCK,
        PurchaseOrders.PAYMENT_BLOCK_ENTRY,
        PurchaseOrders.CENTRAL_BANK_INDICATOR,
        PurchaseOrders.MAXIMUM_CASH_DISCOUNT,
        PurchaseOrders.RESERVE,
        PurchaseOrders.PROJECT,
        PurchaseOrders.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseOrders.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseOrders.WARE_HOUSE_UPDATE_TYPE,
        PurchaseOrders.ROUNDING,
        PurchaseOrders.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseOrders.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseOrders.NEXT_CORRECTING_DOCUMENT,
        PurchaseOrders.DEFERRED_TAX,
        PurchaseOrders.TAX_EXEMPTION_LETTER_NUM,
        PurchaseOrders.WT_APPLIED,
        PurchaseOrders.WT_APPLIED_FC,
        PurchaseOrders.BILL_OF_EXCHANGE_RESERVED,
        PurchaseOrders.AGENT_CODE,
        PurchaseOrders.WT_APPLIED_SC,
        PurchaseOrders.TOTAL_EQUALIZATION_TAX,
        PurchaseOrders.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseOrders.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseOrders.NUMBER_OF_INSTALLMENTS,
        PurchaseOrders.APPLY_TAX_ON_FIRST_INSTALLMENT,
        PurchaseOrders.WT_NON_SUBJECT_AMOUNT,
        PurchaseOrders.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseOrders.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseOrders.WT_EXEMPTED_AMOUNT,
        PurchaseOrders.WT_EXEMPTED_AMOUNT_SC,
        PurchaseOrders.WT_EXEMPTED_AMOUNT_FC,
        PurchaseOrders.BASE_AMOUNT,
        PurchaseOrders.BASE_AMOUNT_SC,
        PurchaseOrders.BASE_AMOUNT_FC,
        PurchaseOrders.WT_AMOUNT,
        PurchaseOrders.WT_AMOUNT_SC,
        PurchaseOrders.WT_AMOUNT_FC,
        PurchaseOrders.VAT_DATE,
        PurchaseOrders.DOCUMENTS_OWNER,
        PurchaseOrders.FOLIO_PREFIX_STRING,
        PurchaseOrders.FOLIO_NUMBER,
        PurchaseOrders.DOCUMENT_SUB_TYPE,
        PurchaseOrders.BP_CHANNEL_CODE,
        PurchaseOrders.BP_CHANNEL_CONTACT,
        PurchaseOrders.ADDRESS_2,
        PurchaseOrders.DOCUMENT_STATUS,
        PurchaseOrders.PERIOD_INDICATOR,
        PurchaseOrders.PAY_TO_CODE,
        PurchaseOrders.MANUAL_NUMBER,
        PurchaseOrders.USE_SHPD_GOODS_ACT,
        PurchaseOrders.IS_PAY_TO_BANK,
        PurchaseOrders.PAY_TO_BANK_COUNTRY,
        PurchaseOrders.PAY_TO_BANK_CODE,
        PurchaseOrders.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseOrders.PAY_TO_BANK_BRANCH,
        PurchaseOrders.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseOrders.DOWN_PAYMENT,
        PurchaseOrders.RESERVE_INVOICE,
        PurchaseOrders.LANGUAGE_CODE,
        PurchaseOrders.TRACKING_NUMBER,
        PurchaseOrders.PICK_REMARK,
        PurchaseOrders.CLOSING_DATE,
        PurchaseOrders.SEQUENCE_CODE,
        PurchaseOrders.SEQUENCE_SERIAL,
        PurchaseOrders.SERIES_STRING,
        PurchaseOrders.SUB_SERIES_STRING,
        PurchaseOrders.SEQUENCE_MODEL,
        PurchaseOrders.USE_CORRECTION_VAT_GROUP,
        PurchaseOrders.TOTAL_DISCOUNT,
        PurchaseOrders.DOWN_PAYMENT_AMOUNT,
        PurchaseOrders.DOWN_PAYMENT_PERCENTAGE,
        PurchaseOrders.DOWN_PAYMENT_TYPE,
        PurchaseOrders.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseOrders.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseOrders.VAT_PERCENT,
        PurchaseOrders.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseOrders.OPENING_REMARKS,
        PurchaseOrders.CLOSING_REMARKS,
        PurchaseOrders.ROUNDING_DIFF_AMOUNT,
        PurchaseOrders.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseOrders.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseOrders.CANCELLED,
        PurchaseOrders.SIGNATURE_INPUT_MESSAGE,
        PurchaseOrders.SIGNATURE_DIGEST,
        PurchaseOrders.CERTIFICATION_NUMBER,
        PurchaseOrders.PRIVATE_KEY_VERSION,
        PurchaseOrders.CONTROL_ACCOUNT,
        PurchaseOrders.INSURANCE_OPERATION_347,
        PurchaseOrders.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        PurchaseOrders.GTS_CHECKER,
        PurchaseOrders.GTS_PAYEE,
        PurchaseOrders.EXTRA_MONTH,
        PurchaseOrders.EXTRA_DAYS,
        PurchaseOrders.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseOrders.START_FROM,
        PurchaseOrders.NTS_APPROVED,
        PurchaseOrders.E_TAX_WEB_SITE,
        PurchaseOrders.E_TAX_NUMBER,
        PurchaseOrders.NTS_APPROVED_NUMBER,
        PurchaseOrders.E_DOC_GENERATION_TYPE,
        PurchaseOrders.E_DOC_SERIES,
        PurchaseOrders.E_DOC_NUM,
        PurchaseOrders.E_DOC_EXPORT_FORMAT,
        PurchaseOrders.E_DOC_STATUS,
        PurchaseOrders.E_DOC_ERROR_CODE,
        PurchaseOrders.E_DOC_ERROR_MESSAGE,
        PurchaseOrders.DOWN_PAYMENT_STATUS,
        PurchaseOrders.GROUP_SERIES,
        PurchaseOrders.GROUP_NUMBER,
        PurchaseOrders.GROUP_HAND_WRITTEN,
        PurchaseOrders.REOPEN_ORIGINAL_DOCUMENT,
        PurchaseOrders.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        PurchaseOrders.CREATE_ONLINE_QUOTATION,
        PurchaseOrders.POS_EQUIPMENT_NUMBER,
        PurchaseOrders.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseOrders.POS_CASHIER_NUMBER,
        PurchaseOrders.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        PurchaseOrders.CLOSING_OPTION,
        PurchaseOrders.SPECIFIED_CLOSING_DATE,
        PurchaseOrders.OPEN_FOR_LANDED_COSTS,
        PurchaseOrders.AUTHORIZATION_STATUS,
        PurchaseOrders.TOTAL_DISCOUNT_FC,
        PurchaseOrders.TOTAL_DISCOUNT_SC,
        PurchaseOrders.RELEVANT_TO_GTS,
        PurchaseOrders.BPL_NAME,
        PurchaseOrders.VAT_REG_NUM,
        PurchaseOrders.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseOrders.SUPPLIER,
        PurchaseOrders.RELEASER,
        PurchaseOrders.RECEIVER,
        PurchaseOrders.BLANKET_AGREEMENT_NUMBER,
        PurchaseOrders.IS_ALTERATION,
        PurchaseOrders.CANCEL_STATUS,
        PurchaseOrders.ASSET_VALUE_DATE,
        PurchaseOrders.REQUESTER,
        PurchaseOrders.REQUESTER_NAME,
        PurchaseOrders.REQUESTER_BRANCH,
        PurchaseOrders.REQUESTER_DEPARTMENT,
        PurchaseOrders.REQUESTER_EMAIL,
        PurchaseOrders.SEND_NOTIFICATION,
        PurchaseOrders.REQ_TYPE,
        PurchaseOrders.DOCUMENT_DELIVERY,
        PurchaseOrders.AUTHORIZATION_CODE,
        PurchaseOrders.START_DELIVERY_DATE,
        PurchaseOrders.START_DELIVERY_TIME,
        PurchaseOrders.END_DELIVERY_DATE,
        PurchaseOrders.END_DELIVERY_TIME,
        PurchaseOrders.VEHICLE_PLATE,
        PurchaseOrders.AT_DOCUMENT_TYPE,
        PurchaseOrders.ELEC_COMM_STATUS,
        PurchaseOrders.ELEC_COMM_MESSAGE,
        PurchaseOrders.REUSE_DOCUMENT_NUM,
        PurchaseOrders.REUSE_NOTA_FISCAL_NUM,
        PurchaseOrders.PRINT_SEPA_DIRECT,
        PurchaseOrders.FISCAL_DOC_NUM,
        PurchaseOrders.POS_DAILY_SUMMARY_NO,
        PurchaseOrders.POS_RECEIPT_NO,
        PurchaseOrders.POINT_OF_ISSUE_CODE,
        PurchaseOrders.LETTER,
        PurchaseOrders.FOLIO_NUMBER_FROM,
        PurchaseOrders.FOLIO_NUMBER_TO,
        PurchaseOrders.INTERIM_TYPE,
        PurchaseOrders.RELATED_TYPE,
        PurchaseOrders.RELATED_ENTRY,
        PurchaseOrders.DOCUMENT_TAX_ID,
        PurchaseOrders.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseOrders.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseOrders.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        PurchaseOrders.POS_CASH_REGISTER,
        PurchaseOrders.UPDATE_TIME,
        PurchaseOrders.PRICE_MODE,
        PurchaseOrders.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseOrders.REVISION,
        PurchaseOrders.ORIGINAL_REF_NO,
        PurchaseOrders.ORIGINAL_REF_DATE,
        PurchaseOrders.GST_TRANSACTION_TYPE,
        PurchaseOrders.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseOrders.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseOrders.E_COMMERCE_OPERATOR,
        PurchaseOrders.E_COMMERCE_GSTIN,
        PurchaseOrders.TAX_INVOICE_NO,
        PurchaseOrders.TAX_INVOICE_DATE,
        PurchaseOrders.SHIP_FROM,
        PurchaseOrders.COMMISSION_TRADE,
        PurchaseOrders.COMMISSION_TRADE_RETURN,
        PurchaseOrders.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        PurchaseOrders.ISSUING_REASON,
        PurchaseOrders.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseOrders.DOCUMENT_LINES,
        PurchaseOrders.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseOrders.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseOrders.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseOrders.DOCUMENT_PACKAGES,
        PurchaseOrders.DOCUMENT_SPECIAL_LINES,
        PurchaseOrders.DOCUMENT_INSTALLMENTS,
        PurchaseOrders.DOWN_PAYMENTS_TO_DRAW,
        PurchaseOrders.TAX_EXTENSION,
        PurchaseOrders.ADDRESS_EXTENSION,
        PurchaseOrders.SOI_WIZARD_ID,
        PurchaseOrders.BUSINESS_PARTNER,
        PurchaseOrders.CURRENCY,
        PurchaseOrders.PAYMENT_TERMS_TYPE,
        PurchaseOrders.SALES_PERSON,
        PurchaseOrders.SHIPPING_TYPE,
        PurchaseOrders.FACTORING_INDICATOR,
        PurchaseOrders.FORMS_1099,
        PurchaseOrders.WIZARD_PAYMENT_METHOD,
        PurchaseOrders.PAYMENT_BLOCK_2,
        PurchaseOrders.PROJECT_2,
        PurchaseOrders.EMPLOYEE_INFO,
        PurchaseOrders.COUNTRY,
        PurchaseOrders.BUSINESS_PLACE,
        PurchaseOrders.USER_LANGUAGE,
        PurchaseOrders.NF_MODEL,
        PurchaseOrders.CHART_OF_ACCOUNT,
        PurchaseOrders.TAX_WEB_SITE,
        PurchaseOrders.BRANCH,
        PurchaseOrders.DEPARTMENT,
        PurchaseOrders.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseOrders.ALL_FIELDS = new core_1.AllFields('*', PurchaseOrders);
    /**
     * All key fields of the PurchaseOrders entity.
     */
    PurchaseOrders._keyFields = [PurchaseOrders.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseOrders.
     */
    PurchaseOrders._keys = PurchaseOrders._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseOrders = exports.PurchaseOrders || (exports.PurchaseOrders = {}));
exports.PurchaseOrders = PurchaseOrders;
//# sourceMappingURL=PurchaseOrders.js.map