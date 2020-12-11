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
exports.CorrectionPurchaseInvoiceReversal = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CorrectionPurchaseInvoiceReversalRequestBuilder_1 = require("./CorrectionPurchaseInvoiceReversalRequestBuilder");
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
 * This class represents the entity "CorrectionPurchaseInvoiceReversal" of service "SAPB1".
 */
var CorrectionPurchaseInvoiceReversal = /** @class */ (function (_super) {
    __extends(CorrectionPurchaseInvoiceReversal, _super);
    function CorrectionPurchaseInvoiceReversal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CorrectionPurchaseInvoiceReversal`.
     * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoiceReversal`.
     */
    CorrectionPurchaseInvoiceReversal.builder = function () {
        return core_1.EntityV4.entityBuilder(CorrectionPurchaseInvoiceReversal);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CorrectionPurchaseInvoiceReversal` entity type.
     * @returns A `CorrectionPurchaseInvoiceReversal` request builder.
     */
    CorrectionPurchaseInvoiceReversal.requestBuilder = function () {
        return new CorrectionPurchaseInvoiceReversalRequestBuilder_1.CorrectionPurchaseInvoiceReversalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CorrectionPurchaseInvoiceReversal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoiceReversal`.
     */
    CorrectionPurchaseInvoiceReversal.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CorrectionPurchaseInvoiceReversal);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CorrectionPurchaseInvoiceReversal.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CorrectionPurchaseInvoiceReversal.
     */
    CorrectionPurchaseInvoiceReversal._entityName = 'CorrectionPurchaseInvoiceReversal';
    /**
     * Default url path for the according service.
     */
    CorrectionPurchaseInvoiceReversal._defaultServicePath = '/b1s/v2/';
    return CorrectionPurchaseInvoiceReversal;
}(core_1.EntityV4));
exports.CorrectionPurchaseInvoiceReversal = CorrectionPurchaseInvoiceReversal;
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
(function (CorrectionPurchaseInvoiceReversal) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_ENTRY = new core_1.NumberField('DocEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_NUM = new core_1.NumberField('DocNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_TYPE = new core_1.EnumField('DocType', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.HAND_WRITTEN = new core_1.EnumField('HandWritten', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PRINTED = new core_1.EnumField('Printed', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_DATE = new core_1.DateField('DocDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_DUE_DATE = new core_1.DateField('DocDueDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CARD_CODE = new core_1.StringField('CardCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CARD_NAME = new core_1.StringField('CardName', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ADDRESS = new core_1.StringField('Address', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NUM_AT_CARD = new core_1.StringField('NumAtCard', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_TOTAL = new core_1.NumberField('DocTotal', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_CURRENCY = new core_1.StringField('DocCurrency', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_RATE = new core_1.NumberField('DocRate', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REFERENCE_1 = new core_1.StringField('Reference1', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REFERENCE_2 = new core_1.StringField('Reference2', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.COMMENTS = new core_1.StringField('Comments', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.JOURNAL_MEMO = new core_1.StringField('JournalMemo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_TIME = new core_1.TimeField('DocTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CONFIRMED = new core_1.EnumField('Confirmed', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SUMMERY_TYPE = new core_1.EnumField('SummeryType', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SHOW_SCN = new core_1.EnumField('ShowSCN', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SERIES = new core_1.NumberField('Series', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_DATE = new core_1.DateField('TaxDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SHIP_TO_CODE = new core_1.StringField('ShipToCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.INDICATOR = new core_1.StringField('Indicator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CREATION_DATE = new core_1.DateField('CreationDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.UPDATE_DATE = new core_1.DateField('UpdateDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TRANS_NUM = new core_1.NumberField('TransNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_SUM = new core_1.NumberField('VatSum', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_SUM_FC = new core_1.NumberField('VatSumFc', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NET_PROCEDURE = new core_1.EnumField('NetProcedure', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FORM_1099 = new core_1.NumberField('Form1099', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BOX_1099 = new core_1.StringField('Box1099', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REVISION_PO = new core_1.EnumField('RevisionPo', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQURIED_DATE = new core_1.DateField('RequriedDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CANCEL_DATE = new core_1.DateField('CancelDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SUBMITTED = new core_1.EnumField('Submitted', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SEGMENT = new core_1.NumberField('Segment', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PICK_STATUS = new core_1.EnumField('PickStatus', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PICK = new core_1.EnumField('Pick', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RESERVE = new core_1.EnumField('Reserve', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PROJECT = new core_1.StringField('Project', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ROUNDING = new core_1.EnumField('Rounding', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DEFERRED_TAX = new core_1.EnumField('DeferredTax', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_APPLIED = new core_1.NumberField('WTApplied', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.AGENT_CODE = new core_1.StringField('AgentCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BASE_AMOUNT = new core_1.NumberField('BaseAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_AMOUNT = new core_1.NumberField('WTAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_DATE = new core_1.DateField('VatDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ADDRESS_2 = new core_1.StringField('Address2', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_CODE = new core_1.StringField('PayToCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.MANUAL_NUMBER = new core_1.StringField('ManualNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT = new core_1.NumberField('DownPayment', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PICK_REMARK = new core_1.StringField('PickRemark', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CLOSING_DATE = new core_1.DateField('ClosingDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SERIES_STRING = new core_1.StringField('SeriesString', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_PERCENT = new core_1.NumberField('VatPercent', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CANCELLED = new core_1.EnumField('Cancelled', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GTS_CHECKER = new core_1.NumberField('GTSChecker', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GTS_PAYEE = new core_1.NumberField('GTSPayee', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXTRA_DAYS = new core_1.NumberField('ExtraDays', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.START_FROM = new core_1.EnumField('StartFrom', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NTS_APPROVED = new core_1.EnumField('NTSApproved', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_SERIES = new core_1.NumberField('EDocSeries', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_NUM = new core_1.StringField('EDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_STATUS = new core_1.EnumField('EDocStatus', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GROUP_SERIES = new core_1.NumberField('GroupSeries', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GROUP_NUMBER = new core_1.NumberField('GroupNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CLOSING_OPTION = new core_1.EnumField('ClosingOption', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', CorrectionPurchaseInvoiceReversal, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BPL_NAME = new core_1.StringField('BPLName', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VAT_REG_NUM = new core_1.StringField('VATRegNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SUPPLIER = new core_1.StringField('Supplier', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RELEASER = new core_1.NumberField('Releaser', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RECEIVER = new core_1.NumberField('Receiver', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.IS_ALTERATION = new core_1.EnumField('IsAlteration', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CANCEL_STATUS = new core_1.EnumField('CancelStatus', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER = new core_1.StringField('Requester', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER_NAME = new core_1.StringField('RequesterName', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REQ_TYPE = new core_1.NumberField('ReqType', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.LETTER = new core_1.EnumField('Letter', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.INTERIM_TYPE = new core_1.EnumField('InterimType', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RELATED_TYPE = new core_1.NumberField('RelatedType', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.UPDATE_TIME = new core_1.TimeField('UpdateTime', CorrectionPurchaseInvoiceReversal, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PRICE_MODE = new core_1.EnumField('PriceMode', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.REVISION = new core_1.EnumField('Revision', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', CorrectionPurchaseInvoiceReversal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SHIP_FROM = new core_1.StringField('ShipFrom', CorrectionPurchaseInvoiceReversal, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ISSUING_REASON = new core_1.NumberField('IssuingReason', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', CorrectionPurchaseInvoiceReversal, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', CorrectionPurchaseInvoiceReversal, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', CorrectionPurchaseInvoiceReversal, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', CorrectionPurchaseInvoiceReversal, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', CorrectionPurchaseInvoiceReversal, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', CorrectionPurchaseInvoiceReversal, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', CorrectionPurchaseInvoiceReversal, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', CorrectionPurchaseInvoiceReversal, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', CorrectionPurchaseInvoiceReversal, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', CorrectionPurchaseInvoiceReversal, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', CorrectionPurchaseInvoiceReversal, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CURRENCY = new core_1.OneToOneLink('Currency', CorrectionPurchaseInvoiceReversal, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', CorrectionPurchaseInvoiceReversal, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', CorrectionPurchaseInvoiceReversal, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', CorrectionPurchaseInvoiceReversal, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', CorrectionPurchaseInvoiceReversal, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', CorrectionPurchaseInvoiceReversal, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.FORMS_1099 = new core_1.OneToOneLink('Forms1099', CorrectionPurchaseInvoiceReversal, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', CorrectionPurchaseInvoiceReversal, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', CorrectionPurchaseInvoiceReversal, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.PROJECT_2 = new core_1.OneToOneLink('Project2', CorrectionPurchaseInvoiceReversal, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', CorrectionPurchaseInvoiceReversal, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.COUNTRY = new core_1.OneToOneLink('Country', CorrectionPurchaseInvoiceReversal, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', CorrectionPurchaseInvoiceReversal, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', CorrectionPurchaseInvoiceReversal, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.NF_MODEL = new core_1.OneToOneLink('NFModel', CorrectionPurchaseInvoiceReversal, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', CorrectionPurchaseInvoiceReversal, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', CorrectionPurchaseInvoiceReversal, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.BRANCH = new core_1.OneToOneLink('Branch', CorrectionPurchaseInvoiceReversal, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.DEPARTMENT = new core_1.OneToOneLink('Department', CorrectionPurchaseInvoiceReversal, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', CorrectionPurchaseInvoiceReversal, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the CorrectionPurchaseInvoiceReversal entity.
     */
    CorrectionPurchaseInvoiceReversal._allFields = [
        CorrectionPurchaseInvoiceReversal.DOC_ENTRY,
        CorrectionPurchaseInvoiceReversal.DOC_NUM,
        CorrectionPurchaseInvoiceReversal.DOC_TYPE,
        CorrectionPurchaseInvoiceReversal.HAND_WRITTEN,
        CorrectionPurchaseInvoiceReversal.PRINTED,
        CorrectionPurchaseInvoiceReversal.DOC_DATE,
        CorrectionPurchaseInvoiceReversal.DOC_DUE_DATE,
        CorrectionPurchaseInvoiceReversal.CARD_CODE,
        CorrectionPurchaseInvoiceReversal.CARD_NAME,
        CorrectionPurchaseInvoiceReversal.ADDRESS,
        CorrectionPurchaseInvoiceReversal.NUM_AT_CARD,
        CorrectionPurchaseInvoiceReversal.DOC_TOTAL,
        CorrectionPurchaseInvoiceReversal.ATTACHMENT_ENTRY,
        CorrectionPurchaseInvoiceReversal.DOC_CURRENCY,
        CorrectionPurchaseInvoiceReversal.DOC_RATE,
        CorrectionPurchaseInvoiceReversal.REFERENCE_1,
        CorrectionPurchaseInvoiceReversal.REFERENCE_2,
        CorrectionPurchaseInvoiceReversal.COMMENTS,
        CorrectionPurchaseInvoiceReversal.JOURNAL_MEMO,
        CorrectionPurchaseInvoiceReversal.PAYMENT_GROUP_CODE,
        CorrectionPurchaseInvoiceReversal.DOC_TIME,
        CorrectionPurchaseInvoiceReversal.SALES_PERSON_CODE,
        CorrectionPurchaseInvoiceReversal.TRANSPORTATION_CODE,
        CorrectionPurchaseInvoiceReversal.CONFIRMED,
        CorrectionPurchaseInvoiceReversal.IMPORT_FILE_NUM,
        CorrectionPurchaseInvoiceReversal.SUMMERY_TYPE,
        CorrectionPurchaseInvoiceReversal.CONTACT_PERSON_CODE,
        CorrectionPurchaseInvoiceReversal.SHOW_SCN,
        CorrectionPurchaseInvoiceReversal.SERIES,
        CorrectionPurchaseInvoiceReversal.TAX_DATE,
        CorrectionPurchaseInvoiceReversal.PARTIAL_SUPPLY,
        CorrectionPurchaseInvoiceReversal.DOC_OBJECT_CODE,
        CorrectionPurchaseInvoiceReversal.SHIP_TO_CODE,
        CorrectionPurchaseInvoiceReversal.INDICATOR,
        CorrectionPurchaseInvoiceReversal.FEDERAL_TAX_ID,
        CorrectionPurchaseInvoiceReversal.DISCOUNT_PERCENT,
        CorrectionPurchaseInvoiceReversal.PAYMENT_REFERENCE,
        CorrectionPurchaseInvoiceReversal.CREATION_DATE,
        CorrectionPurchaseInvoiceReversal.UPDATE_DATE,
        CorrectionPurchaseInvoiceReversal.FINANCIAL_PERIOD,
        CorrectionPurchaseInvoiceReversal.TRANS_NUM,
        CorrectionPurchaseInvoiceReversal.VAT_SUM,
        CorrectionPurchaseInvoiceReversal.VAT_SUM_SYS,
        CorrectionPurchaseInvoiceReversal.VAT_SUM_FC,
        CorrectionPurchaseInvoiceReversal.NET_PROCEDURE,
        CorrectionPurchaseInvoiceReversal.DOC_TOTAL_FC,
        CorrectionPurchaseInvoiceReversal.DOC_TOTAL_SYS,
        CorrectionPurchaseInvoiceReversal.FORM_1099,
        CorrectionPurchaseInvoiceReversal.BOX_1099,
        CorrectionPurchaseInvoiceReversal.REVISION_PO,
        CorrectionPurchaseInvoiceReversal.REQURIED_DATE,
        CorrectionPurchaseInvoiceReversal.CANCEL_DATE,
        CorrectionPurchaseInvoiceReversal.BLOCK_DUNNING,
        CorrectionPurchaseInvoiceReversal.SUBMITTED,
        CorrectionPurchaseInvoiceReversal.SEGMENT,
        CorrectionPurchaseInvoiceReversal.PICK_STATUS,
        CorrectionPurchaseInvoiceReversal.PICK,
        CorrectionPurchaseInvoiceReversal.PAYMENT_METHOD,
        CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK,
        CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_ENTRY,
        CorrectionPurchaseInvoiceReversal.CENTRAL_BANK_INDICATOR,
        CorrectionPurchaseInvoiceReversal.MAXIMUM_CASH_DISCOUNT,
        CorrectionPurchaseInvoiceReversal.RESERVE,
        CorrectionPurchaseInvoiceReversal.PROJECT,
        CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_FROM,
        CorrectionPurchaseInvoiceReversal.EXEMPTION_VALIDITY_DATE_TO,
        CorrectionPurchaseInvoiceReversal.WARE_HOUSE_UPDATE_TYPE,
        CorrectionPurchaseInvoiceReversal.ROUNDING,
        CorrectionPurchaseInvoiceReversal.EXTERNAL_CORRECTED_DOC_NUM,
        CorrectionPurchaseInvoiceReversal.INTERNAL_CORRECTED_DOC_NUM,
        CorrectionPurchaseInvoiceReversal.NEXT_CORRECTING_DOCUMENT,
        CorrectionPurchaseInvoiceReversal.DEFERRED_TAX,
        CorrectionPurchaseInvoiceReversal.TAX_EXEMPTION_LETTER_NUM,
        CorrectionPurchaseInvoiceReversal.WT_APPLIED,
        CorrectionPurchaseInvoiceReversal.WT_APPLIED_FC,
        CorrectionPurchaseInvoiceReversal.BILL_OF_EXCHANGE_RESERVED,
        CorrectionPurchaseInvoiceReversal.AGENT_CODE,
        CorrectionPurchaseInvoiceReversal.WT_APPLIED_SC,
        CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX,
        CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_FC,
        CorrectionPurchaseInvoiceReversal.TOTAL_EQUALIZATION_TAX_SC,
        CorrectionPurchaseInvoiceReversal.NUMBER_OF_INSTALLMENTS,
        CorrectionPurchaseInvoiceReversal.APPLY_TAX_ON_FIRST_INSTALLMENT,
        CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT,
        CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.WT_NON_SUBJECT_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT,
        CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.WT_EXEMPTED_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.BASE_AMOUNT,
        CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.BASE_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.WT_AMOUNT,
        CorrectionPurchaseInvoiceReversal.WT_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.WT_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.VAT_DATE,
        CorrectionPurchaseInvoiceReversal.DOCUMENTS_OWNER,
        CorrectionPurchaseInvoiceReversal.FOLIO_PREFIX_STRING,
        CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_SUB_TYPE,
        CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CODE,
        CorrectionPurchaseInvoiceReversal.BP_CHANNEL_CONTACT,
        CorrectionPurchaseInvoiceReversal.ADDRESS_2,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_STATUS,
        CorrectionPurchaseInvoiceReversal.PERIOD_INDICATOR,
        CorrectionPurchaseInvoiceReversal.PAY_TO_CODE,
        CorrectionPurchaseInvoiceReversal.MANUAL_NUMBER,
        CorrectionPurchaseInvoiceReversal.USE_SHPD_GOODS_ACT,
        CorrectionPurchaseInvoiceReversal.IS_PAY_TO_BANK,
        CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_COUNTRY,
        CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_CODE,
        CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_ACCOUNT_NO,
        CorrectionPurchaseInvoiceReversal.PAY_TO_BANK_BRANCH,
        CorrectionPurchaseInvoiceReversal.BPL_ID_ASSIGNED_TO_INVOICE,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT,
        CorrectionPurchaseInvoiceReversal.RESERVE_INVOICE,
        CorrectionPurchaseInvoiceReversal.LANGUAGE_CODE,
        CorrectionPurchaseInvoiceReversal.TRACKING_NUMBER,
        CorrectionPurchaseInvoiceReversal.PICK_REMARK,
        CorrectionPurchaseInvoiceReversal.CLOSING_DATE,
        CorrectionPurchaseInvoiceReversal.SEQUENCE_CODE,
        CorrectionPurchaseInvoiceReversal.SEQUENCE_SERIAL,
        CorrectionPurchaseInvoiceReversal.SERIES_STRING,
        CorrectionPurchaseInvoiceReversal.SUB_SERIES_STRING,
        CorrectionPurchaseInvoiceReversal.SEQUENCE_MODEL,
        CorrectionPurchaseInvoiceReversal.USE_CORRECTION_VAT_GROUP,
        CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_PERCENTAGE,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_TYPE,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.VAT_PERCENT,
        CorrectionPurchaseInvoiceReversal.SERVICE_GROSS_PROFIT_PERCENT,
        CorrectionPurchaseInvoiceReversal.OPENING_REMARKS,
        CorrectionPurchaseInvoiceReversal.CLOSING_REMARKS,
        CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT,
        CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_FC,
        CorrectionPurchaseInvoiceReversal.ROUNDING_DIFF_AMOUNT_SC,
        CorrectionPurchaseInvoiceReversal.CANCELLED,
        CorrectionPurchaseInvoiceReversal.SIGNATURE_INPUT_MESSAGE,
        CorrectionPurchaseInvoiceReversal.SIGNATURE_DIGEST,
        CorrectionPurchaseInvoiceReversal.CERTIFICATION_NUMBER,
        CorrectionPurchaseInvoiceReversal.PRIVATE_KEY_VERSION,
        CorrectionPurchaseInvoiceReversal.CONTROL_ACCOUNT,
        CorrectionPurchaseInvoiceReversal.INSURANCE_OPERATION_347,
        CorrectionPurchaseInvoiceReversal.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        CorrectionPurchaseInvoiceReversal.GTS_CHECKER,
        CorrectionPurchaseInvoiceReversal.GTS_PAYEE,
        CorrectionPurchaseInvoiceReversal.EXTRA_MONTH,
        CorrectionPurchaseInvoiceReversal.EXTRA_DAYS,
        CorrectionPurchaseInvoiceReversal.CASH_DISCOUNT_DATE_OFFSET,
        CorrectionPurchaseInvoiceReversal.START_FROM,
        CorrectionPurchaseInvoiceReversal.NTS_APPROVED,
        CorrectionPurchaseInvoiceReversal.E_TAX_WEB_SITE,
        CorrectionPurchaseInvoiceReversal.E_TAX_NUMBER,
        CorrectionPurchaseInvoiceReversal.NTS_APPROVED_NUMBER,
        CorrectionPurchaseInvoiceReversal.E_DOC_GENERATION_TYPE,
        CorrectionPurchaseInvoiceReversal.E_DOC_SERIES,
        CorrectionPurchaseInvoiceReversal.E_DOC_NUM,
        CorrectionPurchaseInvoiceReversal.E_DOC_EXPORT_FORMAT,
        CorrectionPurchaseInvoiceReversal.E_DOC_STATUS,
        CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_CODE,
        CorrectionPurchaseInvoiceReversal.E_DOC_ERROR_MESSAGE,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_STATUS,
        CorrectionPurchaseInvoiceReversal.GROUP_SERIES,
        CorrectionPurchaseInvoiceReversal.GROUP_NUMBER,
        CorrectionPurchaseInvoiceReversal.GROUP_HAND_WRITTEN,
        CorrectionPurchaseInvoiceReversal.REOPEN_ORIGINAL_DOCUMENT,
        CorrectionPurchaseInvoiceReversal.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        CorrectionPurchaseInvoiceReversal.CREATE_ONLINE_QUOTATION,
        CorrectionPurchaseInvoiceReversal.POS_EQUIPMENT_NUMBER,
        CorrectionPurchaseInvoiceReversal.POS_MANUFACTURER_SERIAL_NUMBER,
        CorrectionPurchaseInvoiceReversal.POS_CASHIER_NUMBER,
        CorrectionPurchaseInvoiceReversal.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        CorrectionPurchaseInvoiceReversal.CLOSING_OPTION,
        CorrectionPurchaseInvoiceReversal.SPECIFIED_CLOSING_DATE,
        CorrectionPurchaseInvoiceReversal.OPEN_FOR_LANDED_COSTS,
        CorrectionPurchaseInvoiceReversal.AUTHORIZATION_STATUS,
        CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_FC,
        CorrectionPurchaseInvoiceReversal.TOTAL_DISCOUNT_SC,
        CorrectionPurchaseInvoiceReversal.RELEVANT_TO_GTS,
        CorrectionPurchaseInvoiceReversal.BPL_NAME,
        CorrectionPurchaseInvoiceReversal.VAT_REG_NUM,
        CorrectionPurchaseInvoiceReversal.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        CorrectionPurchaseInvoiceReversal.SUPPLIER,
        CorrectionPurchaseInvoiceReversal.RELEASER,
        CorrectionPurchaseInvoiceReversal.RECEIVER,
        CorrectionPurchaseInvoiceReversal.BLANKET_AGREEMENT_NUMBER,
        CorrectionPurchaseInvoiceReversal.IS_ALTERATION,
        CorrectionPurchaseInvoiceReversal.CANCEL_STATUS,
        CorrectionPurchaseInvoiceReversal.ASSET_VALUE_DATE,
        CorrectionPurchaseInvoiceReversal.REQUESTER,
        CorrectionPurchaseInvoiceReversal.REQUESTER_NAME,
        CorrectionPurchaseInvoiceReversal.REQUESTER_BRANCH,
        CorrectionPurchaseInvoiceReversal.REQUESTER_DEPARTMENT,
        CorrectionPurchaseInvoiceReversal.REQUESTER_EMAIL,
        CorrectionPurchaseInvoiceReversal.SEND_NOTIFICATION,
        CorrectionPurchaseInvoiceReversal.REQ_TYPE,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_DELIVERY,
        CorrectionPurchaseInvoiceReversal.AUTHORIZATION_CODE,
        CorrectionPurchaseInvoiceReversal.START_DELIVERY_DATE,
        CorrectionPurchaseInvoiceReversal.START_DELIVERY_TIME,
        CorrectionPurchaseInvoiceReversal.END_DELIVERY_DATE,
        CorrectionPurchaseInvoiceReversal.END_DELIVERY_TIME,
        CorrectionPurchaseInvoiceReversal.VEHICLE_PLATE,
        CorrectionPurchaseInvoiceReversal.AT_DOCUMENT_TYPE,
        CorrectionPurchaseInvoiceReversal.ELEC_COMM_STATUS,
        CorrectionPurchaseInvoiceReversal.ELEC_COMM_MESSAGE,
        CorrectionPurchaseInvoiceReversal.REUSE_DOCUMENT_NUM,
        CorrectionPurchaseInvoiceReversal.REUSE_NOTA_FISCAL_NUM,
        CorrectionPurchaseInvoiceReversal.PRINT_SEPA_DIRECT,
        CorrectionPurchaseInvoiceReversal.FISCAL_DOC_NUM,
        CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY_NO,
        CorrectionPurchaseInvoiceReversal.POS_RECEIPT_NO,
        CorrectionPurchaseInvoiceReversal.POINT_OF_ISSUE_CODE,
        CorrectionPurchaseInvoiceReversal.LETTER,
        CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_FROM,
        CorrectionPurchaseInvoiceReversal.FOLIO_NUMBER_TO,
        CorrectionPurchaseInvoiceReversal.INTERIM_TYPE,
        CorrectionPurchaseInvoiceReversal.RELATED_TYPE,
        CorrectionPurchaseInvoiceReversal.RELATED_ENTRY,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_TAX_ID,
        CorrectionPurchaseInvoiceReversal.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        CorrectionPurchaseInvoiceReversal.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        CorrectionPurchaseInvoiceReversal.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        CorrectionPurchaseInvoiceReversal.POS_CASH_REGISTER,
        CorrectionPurchaseInvoiceReversal.UPDATE_TIME,
        CorrectionPurchaseInvoiceReversal.PRICE_MODE,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENT_TRASACTION_ID,
        CorrectionPurchaseInvoiceReversal.REVISION,
        CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_NO,
        CorrectionPurchaseInvoiceReversal.ORIGINAL_REF_DATE,
        CorrectionPurchaseInvoiceReversal.GST_TRANSACTION_TYPE,
        CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_NO,
        CorrectionPurchaseInvoiceReversal.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        CorrectionPurchaseInvoiceReversal.E_COMMERCE_OPERATOR,
        CorrectionPurchaseInvoiceReversal.E_COMMERCE_GSTIN,
        CorrectionPurchaseInvoiceReversal.TAX_INVOICE_NO,
        CorrectionPurchaseInvoiceReversal.TAX_INVOICE_DATE,
        CorrectionPurchaseInvoiceReversal.SHIP_FROM,
        CorrectionPurchaseInvoiceReversal.COMMISSION_TRADE,
        CorrectionPurchaseInvoiceReversal.COMMISSION_TRADE_RETURN,
        CorrectionPurchaseInvoiceReversal.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        CorrectionPurchaseInvoiceReversal.ISSUING_REASON,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_APPROVAL_REQUESTS,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_LINES,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_ADDITIONAL_EXPENSES,
        CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        CorrectionPurchaseInvoiceReversal.WITHHOLDING_TAX_DATA_COLLECTION,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_PACKAGES,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_SPECIAL_LINES,
        CorrectionPurchaseInvoiceReversal.DOCUMENT_INSTALLMENTS,
        CorrectionPurchaseInvoiceReversal.DOWN_PAYMENTS_TO_DRAW,
        CorrectionPurchaseInvoiceReversal.TAX_EXTENSION,
        CorrectionPurchaseInvoiceReversal.ADDRESS_EXTENSION,
        CorrectionPurchaseInvoiceReversal.SOI_WIZARD_ID,
        CorrectionPurchaseInvoiceReversal.BUSINESS_PARTNER,
        CorrectionPurchaseInvoiceReversal.CURRENCY,
        CorrectionPurchaseInvoiceReversal.PAYMENT_TERMS_TYPE,
        CorrectionPurchaseInvoiceReversal.SALES_PERSON,
        CorrectionPurchaseInvoiceReversal.SHIPPING_TYPE,
        CorrectionPurchaseInvoiceReversal.FACTORING_INDICATOR,
        CorrectionPurchaseInvoiceReversal.JOURNAL_ENTRY,
        CorrectionPurchaseInvoiceReversal.FORMS_1099,
        CorrectionPurchaseInvoiceReversal.WIZARD_PAYMENT_METHOD,
        CorrectionPurchaseInvoiceReversal.PAYMENT_BLOCK_2,
        CorrectionPurchaseInvoiceReversal.PROJECT_2,
        CorrectionPurchaseInvoiceReversal.EMPLOYEE_INFO,
        CorrectionPurchaseInvoiceReversal.COUNTRY,
        CorrectionPurchaseInvoiceReversal.BUSINESS_PLACE,
        CorrectionPurchaseInvoiceReversal.USER_LANGUAGE,
        CorrectionPurchaseInvoiceReversal.NF_MODEL,
        CorrectionPurchaseInvoiceReversal.CHART_OF_ACCOUNT,
        CorrectionPurchaseInvoiceReversal.TAX_WEB_SITE,
        CorrectionPurchaseInvoiceReversal.BRANCH,
        CorrectionPurchaseInvoiceReversal.DEPARTMENT,
        CorrectionPurchaseInvoiceReversal.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    CorrectionPurchaseInvoiceReversal.ALL_FIELDS = new core_1.AllFields('*', CorrectionPurchaseInvoiceReversal);
    /**
     * All key fields of the CorrectionPurchaseInvoiceReversal entity.
     */
    CorrectionPurchaseInvoiceReversal._keyFields = [CorrectionPurchaseInvoiceReversal.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property CorrectionPurchaseInvoiceReversal.
     */
    CorrectionPurchaseInvoiceReversal._keys = CorrectionPurchaseInvoiceReversal._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CorrectionPurchaseInvoiceReversal = exports.CorrectionPurchaseInvoiceReversal || (exports.CorrectionPurchaseInvoiceReversal = {}));
exports.CorrectionPurchaseInvoiceReversal = CorrectionPurchaseInvoiceReversal;
//# sourceMappingURL=CorrectionPurchaseInvoiceReversal.js.map