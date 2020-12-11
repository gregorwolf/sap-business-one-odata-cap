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
exports.CorrectionPurchaseInvoice = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CorrectionPurchaseInvoiceRequestBuilder_1 = require("./CorrectionPurchaseInvoiceRequestBuilder");
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
 * This class represents the entity "CorrectionPurchaseInvoice" of service "SAPB1".
 */
var CorrectionPurchaseInvoice = /** @class */ (function (_super) {
    __extends(CorrectionPurchaseInvoice, _super);
    function CorrectionPurchaseInvoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CorrectionPurchaseInvoice`.
     * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoice`.
     */
    CorrectionPurchaseInvoice.builder = function () {
        return core_1.EntityV4.entityBuilder(CorrectionPurchaseInvoice);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CorrectionPurchaseInvoice` entity type.
     * @returns A `CorrectionPurchaseInvoice` request builder.
     */
    CorrectionPurchaseInvoice.requestBuilder = function () {
        return new CorrectionPurchaseInvoiceRequestBuilder_1.CorrectionPurchaseInvoiceRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CorrectionPurchaseInvoice`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CorrectionPurchaseInvoice`.
     */
    CorrectionPurchaseInvoice.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CorrectionPurchaseInvoice);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CorrectionPurchaseInvoice.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CorrectionPurchaseInvoice.
     */
    CorrectionPurchaseInvoice._entityName = 'CorrectionPurchaseInvoice';
    /**
     * Default url path for the according service.
     */
    CorrectionPurchaseInvoice._defaultServicePath = '/b1s/v2/';
    return CorrectionPurchaseInvoice;
}(core_1.EntityV4));
exports.CorrectionPurchaseInvoice = CorrectionPurchaseInvoice;
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
(function (CorrectionPurchaseInvoice) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_ENTRY = new core_1.NumberField('DocEntry', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_NUM = new core_1.NumberField('DocNum', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_TYPE = new core_1.EnumField('DocType', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.HAND_WRITTEN = new core_1.EnumField('HandWritten', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PRINTED = new core_1.EnumField('Printed', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_DATE = new core_1.DateField('DocDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_DUE_DATE = new core_1.DateField('DocDueDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CARD_CODE = new core_1.StringField('CardCode', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CARD_NAME = new core_1.StringField('CardName', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ADDRESS = new core_1.StringField('Address', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.NUM_AT_CARD = new core_1.StringField('NumAtCard', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_TOTAL = new core_1.NumberField('DocTotal', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_CURRENCY = new core_1.StringField('DocCurrency', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_RATE = new core_1.NumberField('DocRate', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REFERENCE_1 = new core_1.StringField('Reference1', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REFERENCE_2 = new core_1.StringField('Reference2', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.COMMENTS = new core_1.StringField('Comments', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.JOURNAL_MEMO = new core_1.StringField('JournalMemo', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_TIME = new core_1.TimeField('DocTime', CorrectionPurchaseInvoice, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CONFIRMED = new core_1.EnumField('Confirmed', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SUMMERY_TYPE = new core_1.EnumField('SummeryType', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SHOW_SCN = new core_1.EnumField('ShowSCN', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SERIES = new core_1.NumberField('Series', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TAX_DATE = new core_1.DateField('TaxDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SHIP_TO_CODE = new core_1.StringField('ShipToCode', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.INDICATOR = new core_1.StringField('Indicator', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CREATION_DATE = new core_1.DateField('CreationDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.UPDATE_DATE = new core_1.DateField('UpdateDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TRANS_NUM = new core_1.NumberField('TransNum', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.VAT_SUM = new core_1.NumberField('VatSum', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.VAT_SUM_FC = new core_1.NumberField('VatSumFc', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.NET_PROCEDURE = new core_1.EnumField('NetProcedure', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FORM_1099 = new core_1.NumberField('Form1099', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BOX_1099 = new core_1.StringField('Box1099', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REVISION_PO = new core_1.EnumField('RevisionPo', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REQURIED_DATE = new core_1.DateField('RequriedDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CANCEL_DATE = new core_1.DateField('CancelDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SUBMITTED = new core_1.EnumField('Submitted', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SEGMENT = new core_1.NumberField('Segment', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PICK_STATUS = new core_1.EnumField('PickStatus', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PICK = new core_1.EnumField('Pick', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.RESERVE = new core_1.EnumField('Reserve', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PROJECT = new core_1.StringField('Project', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ROUNDING = new core_1.EnumField('Rounding', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DEFERRED_TAX = new core_1.EnumField('DeferredTax', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_APPLIED = new core_1.NumberField('WTApplied', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.AGENT_CODE = new core_1.StringField('AgentCode', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BASE_AMOUNT = new core_1.NumberField('BaseAmount', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_AMOUNT = new core_1.NumberField('WTAmount', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.VAT_DATE = new core_1.DateField('VatDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ADDRESS_2 = new core_1.StringField('Address2', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAY_TO_CODE = new core_1.StringField('PayToCode', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.MANUAL_NUMBER = new core_1.StringField('ManualNumber', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOWN_PAYMENT = new core_1.NumberField('DownPayment', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PICK_REMARK = new core_1.StringField('PickRemark', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CLOSING_DATE = new core_1.DateField('ClosingDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SERIES_STRING = new core_1.StringField('SeriesString', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.VAT_PERCENT = new core_1.NumberField('VatPercent', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CANCELLED = new core_1.EnumField('Cancelled', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.GTS_CHECKER = new core_1.NumberField('GTSChecker', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.GTS_PAYEE = new core_1.NumberField('GTSPayee', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.EXTRA_DAYS = new core_1.NumberField('ExtraDays', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.START_FROM = new core_1.EnumField('StartFrom', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.NTS_APPROVED = new core_1.EnumField('NTSApproved', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_DOC_SERIES = new core_1.NumberField('EDocSeries', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_DOC_NUM = new core_1.StringField('EDocNum', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_DOC_STATUS = new core_1.EnumField('EDocStatus', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.GROUP_SERIES = new core_1.NumberField('GroupSeries', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.GROUP_NUMBER = new core_1.NumberField('GroupNumber', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CLOSING_OPTION = new core_1.EnumField('ClosingOption', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', CorrectionPurchaseInvoice, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BPL_NAME = new core_1.StringField('BPLName', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.VAT_REG_NUM = new core_1.StringField('VATRegNum', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SUPPLIER = new core_1.StringField('Supplier', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.RELEASER = new core_1.NumberField('Releaser', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.RECEIVER = new core_1.NumberField('Receiver', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.IS_ALTERATION = new core_1.EnumField('IsAlteration', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CANCEL_STATUS = new core_1.EnumField('CancelStatus', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REQUESTER = new core_1.StringField('Requester', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REQUESTER_NAME = new core_1.StringField('RequesterName', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REQ_TYPE = new core_1.NumberField('ReqType', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', CorrectionPurchaseInvoice, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', CorrectionPurchaseInvoice, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.LETTER = new core_1.EnumField('Letter', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.INTERIM_TYPE = new core_1.EnumField('InterimType', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.RELATED_TYPE = new core_1.NumberField('RelatedType', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.UPDATE_TIME = new core_1.TimeField('UpdateTime', CorrectionPurchaseInvoice, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PRICE_MODE = new core_1.EnumField('PriceMode', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.REVISION = new core_1.EnumField('Revision', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', CorrectionPurchaseInvoice, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SHIP_FROM = new core_1.StringField('ShipFrom', CorrectionPurchaseInvoice, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ISSUING_REASON = new core_1.NumberField('IssuingReason', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', CorrectionPurchaseInvoice, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', CorrectionPurchaseInvoice, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', CorrectionPurchaseInvoice, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', CorrectionPurchaseInvoice, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', CorrectionPurchaseInvoice, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', CorrectionPurchaseInvoice, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', CorrectionPurchaseInvoice, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', CorrectionPurchaseInvoice, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', CorrectionPurchaseInvoice, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', CorrectionPurchaseInvoice);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', CorrectionPurchaseInvoice, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', CorrectionPurchaseInvoice, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CURRENCY = new core_1.OneToOneLink('Currency', CorrectionPurchaseInvoice, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', CorrectionPurchaseInvoice, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', CorrectionPurchaseInvoice, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', CorrectionPurchaseInvoice, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', CorrectionPurchaseInvoice, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', CorrectionPurchaseInvoice, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.FORMS_1099 = new core_1.OneToOneLink('Forms1099', CorrectionPurchaseInvoice, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', CorrectionPurchaseInvoice, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', CorrectionPurchaseInvoice, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.PROJECT_2 = new core_1.OneToOneLink('Project2', CorrectionPurchaseInvoice, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', CorrectionPurchaseInvoice, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.COUNTRY = new core_1.OneToOneLink('Country', CorrectionPurchaseInvoice, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', CorrectionPurchaseInvoice, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', CorrectionPurchaseInvoice, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.NF_MODEL = new core_1.OneToOneLink('NFModel', CorrectionPurchaseInvoice, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', CorrectionPurchaseInvoice, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', CorrectionPurchaseInvoice, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.BRANCH = new core_1.OneToOneLink('Branch', CorrectionPurchaseInvoice, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.DEPARTMENT = new core_1.OneToOneLink('Department', CorrectionPurchaseInvoice, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CorrectionPurchaseInvoice.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', CorrectionPurchaseInvoice, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the CorrectionPurchaseInvoice entity.
     */
    CorrectionPurchaseInvoice._allFields = [
        CorrectionPurchaseInvoice.DOC_ENTRY,
        CorrectionPurchaseInvoice.DOC_NUM,
        CorrectionPurchaseInvoice.DOC_TYPE,
        CorrectionPurchaseInvoice.HAND_WRITTEN,
        CorrectionPurchaseInvoice.PRINTED,
        CorrectionPurchaseInvoice.DOC_DATE,
        CorrectionPurchaseInvoice.DOC_DUE_DATE,
        CorrectionPurchaseInvoice.CARD_CODE,
        CorrectionPurchaseInvoice.CARD_NAME,
        CorrectionPurchaseInvoice.ADDRESS,
        CorrectionPurchaseInvoice.NUM_AT_CARD,
        CorrectionPurchaseInvoice.DOC_TOTAL,
        CorrectionPurchaseInvoice.ATTACHMENT_ENTRY,
        CorrectionPurchaseInvoice.DOC_CURRENCY,
        CorrectionPurchaseInvoice.DOC_RATE,
        CorrectionPurchaseInvoice.REFERENCE_1,
        CorrectionPurchaseInvoice.REFERENCE_2,
        CorrectionPurchaseInvoice.COMMENTS,
        CorrectionPurchaseInvoice.JOURNAL_MEMO,
        CorrectionPurchaseInvoice.PAYMENT_GROUP_CODE,
        CorrectionPurchaseInvoice.DOC_TIME,
        CorrectionPurchaseInvoice.SALES_PERSON_CODE,
        CorrectionPurchaseInvoice.TRANSPORTATION_CODE,
        CorrectionPurchaseInvoice.CONFIRMED,
        CorrectionPurchaseInvoice.IMPORT_FILE_NUM,
        CorrectionPurchaseInvoice.SUMMERY_TYPE,
        CorrectionPurchaseInvoice.CONTACT_PERSON_CODE,
        CorrectionPurchaseInvoice.SHOW_SCN,
        CorrectionPurchaseInvoice.SERIES,
        CorrectionPurchaseInvoice.TAX_DATE,
        CorrectionPurchaseInvoice.PARTIAL_SUPPLY,
        CorrectionPurchaseInvoice.DOC_OBJECT_CODE,
        CorrectionPurchaseInvoice.SHIP_TO_CODE,
        CorrectionPurchaseInvoice.INDICATOR,
        CorrectionPurchaseInvoice.FEDERAL_TAX_ID,
        CorrectionPurchaseInvoice.DISCOUNT_PERCENT,
        CorrectionPurchaseInvoice.PAYMENT_REFERENCE,
        CorrectionPurchaseInvoice.CREATION_DATE,
        CorrectionPurchaseInvoice.UPDATE_DATE,
        CorrectionPurchaseInvoice.FINANCIAL_PERIOD,
        CorrectionPurchaseInvoice.TRANS_NUM,
        CorrectionPurchaseInvoice.VAT_SUM,
        CorrectionPurchaseInvoice.VAT_SUM_SYS,
        CorrectionPurchaseInvoice.VAT_SUM_FC,
        CorrectionPurchaseInvoice.NET_PROCEDURE,
        CorrectionPurchaseInvoice.DOC_TOTAL_FC,
        CorrectionPurchaseInvoice.DOC_TOTAL_SYS,
        CorrectionPurchaseInvoice.FORM_1099,
        CorrectionPurchaseInvoice.BOX_1099,
        CorrectionPurchaseInvoice.REVISION_PO,
        CorrectionPurchaseInvoice.REQURIED_DATE,
        CorrectionPurchaseInvoice.CANCEL_DATE,
        CorrectionPurchaseInvoice.BLOCK_DUNNING,
        CorrectionPurchaseInvoice.SUBMITTED,
        CorrectionPurchaseInvoice.SEGMENT,
        CorrectionPurchaseInvoice.PICK_STATUS,
        CorrectionPurchaseInvoice.PICK,
        CorrectionPurchaseInvoice.PAYMENT_METHOD,
        CorrectionPurchaseInvoice.PAYMENT_BLOCK,
        CorrectionPurchaseInvoice.PAYMENT_BLOCK_ENTRY,
        CorrectionPurchaseInvoice.CENTRAL_BANK_INDICATOR,
        CorrectionPurchaseInvoice.MAXIMUM_CASH_DISCOUNT,
        CorrectionPurchaseInvoice.RESERVE,
        CorrectionPurchaseInvoice.PROJECT,
        CorrectionPurchaseInvoice.EXEMPTION_VALIDITY_DATE_FROM,
        CorrectionPurchaseInvoice.EXEMPTION_VALIDITY_DATE_TO,
        CorrectionPurchaseInvoice.WARE_HOUSE_UPDATE_TYPE,
        CorrectionPurchaseInvoice.ROUNDING,
        CorrectionPurchaseInvoice.EXTERNAL_CORRECTED_DOC_NUM,
        CorrectionPurchaseInvoice.INTERNAL_CORRECTED_DOC_NUM,
        CorrectionPurchaseInvoice.NEXT_CORRECTING_DOCUMENT,
        CorrectionPurchaseInvoice.DEFERRED_TAX,
        CorrectionPurchaseInvoice.TAX_EXEMPTION_LETTER_NUM,
        CorrectionPurchaseInvoice.WT_APPLIED,
        CorrectionPurchaseInvoice.WT_APPLIED_FC,
        CorrectionPurchaseInvoice.BILL_OF_EXCHANGE_RESERVED,
        CorrectionPurchaseInvoice.AGENT_CODE,
        CorrectionPurchaseInvoice.WT_APPLIED_SC,
        CorrectionPurchaseInvoice.TOTAL_EQUALIZATION_TAX,
        CorrectionPurchaseInvoice.TOTAL_EQUALIZATION_TAX_FC,
        CorrectionPurchaseInvoice.TOTAL_EQUALIZATION_TAX_SC,
        CorrectionPurchaseInvoice.NUMBER_OF_INSTALLMENTS,
        CorrectionPurchaseInvoice.APPLY_TAX_ON_FIRST_INSTALLMENT,
        CorrectionPurchaseInvoice.WT_NON_SUBJECT_AMOUNT,
        CorrectionPurchaseInvoice.WT_NON_SUBJECT_AMOUNT_SC,
        CorrectionPurchaseInvoice.WT_NON_SUBJECT_AMOUNT_FC,
        CorrectionPurchaseInvoice.WT_EXEMPTED_AMOUNT,
        CorrectionPurchaseInvoice.WT_EXEMPTED_AMOUNT_SC,
        CorrectionPurchaseInvoice.WT_EXEMPTED_AMOUNT_FC,
        CorrectionPurchaseInvoice.BASE_AMOUNT,
        CorrectionPurchaseInvoice.BASE_AMOUNT_SC,
        CorrectionPurchaseInvoice.BASE_AMOUNT_FC,
        CorrectionPurchaseInvoice.WT_AMOUNT,
        CorrectionPurchaseInvoice.WT_AMOUNT_SC,
        CorrectionPurchaseInvoice.WT_AMOUNT_FC,
        CorrectionPurchaseInvoice.VAT_DATE,
        CorrectionPurchaseInvoice.DOCUMENTS_OWNER,
        CorrectionPurchaseInvoice.FOLIO_PREFIX_STRING,
        CorrectionPurchaseInvoice.FOLIO_NUMBER,
        CorrectionPurchaseInvoice.DOCUMENT_SUB_TYPE,
        CorrectionPurchaseInvoice.BP_CHANNEL_CODE,
        CorrectionPurchaseInvoice.BP_CHANNEL_CONTACT,
        CorrectionPurchaseInvoice.ADDRESS_2,
        CorrectionPurchaseInvoice.DOCUMENT_STATUS,
        CorrectionPurchaseInvoice.PERIOD_INDICATOR,
        CorrectionPurchaseInvoice.PAY_TO_CODE,
        CorrectionPurchaseInvoice.MANUAL_NUMBER,
        CorrectionPurchaseInvoice.USE_SHPD_GOODS_ACT,
        CorrectionPurchaseInvoice.IS_PAY_TO_BANK,
        CorrectionPurchaseInvoice.PAY_TO_BANK_COUNTRY,
        CorrectionPurchaseInvoice.PAY_TO_BANK_CODE,
        CorrectionPurchaseInvoice.PAY_TO_BANK_ACCOUNT_NO,
        CorrectionPurchaseInvoice.PAY_TO_BANK_BRANCH,
        CorrectionPurchaseInvoice.BPL_ID_ASSIGNED_TO_INVOICE,
        CorrectionPurchaseInvoice.DOWN_PAYMENT,
        CorrectionPurchaseInvoice.RESERVE_INVOICE,
        CorrectionPurchaseInvoice.LANGUAGE_CODE,
        CorrectionPurchaseInvoice.TRACKING_NUMBER,
        CorrectionPurchaseInvoice.PICK_REMARK,
        CorrectionPurchaseInvoice.CLOSING_DATE,
        CorrectionPurchaseInvoice.SEQUENCE_CODE,
        CorrectionPurchaseInvoice.SEQUENCE_SERIAL,
        CorrectionPurchaseInvoice.SERIES_STRING,
        CorrectionPurchaseInvoice.SUB_SERIES_STRING,
        CorrectionPurchaseInvoice.SEQUENCE_MODEL,
        CorrectionPurchaseInvoice.USE_CORRECTION_VAT_GROUP,
        CorrectionPurchaseInvoice.TOTAL_DISCOUNT,
        CorrectionPurchaseInvoice.DOWN_PAYMENT_AMOUNT,
        CorrectionPurchaseInvoice.DOWN_PAYMENT_PERCENTAGE,
        CorrectionPurchaseInvoice.DOWN_PAYMENT_TYPE,
        CorrectionPurchaseInvoice.DOWN_PAYMENT_AMOUNT_SC,
        CorrectionPurchaseInvoice.DOWN_PAYMENT_AMOUNT_FC,
        CorrectionPurchaseInvoice.VAT_PERCENT,
        CorrectionPurchaseInvoice.SERVICE_GROSS_PROFIT_PERCENT,
        CorrectionPurchaseInvoice.OPENING_REMARKS,
        CorrectionPurchaseInvoice.CLOSING_REMARKS,
        CorrectionPurchaseInvoice.ROUNDING_DIFF_AMOUNT,
        CorrectionPurchaseInvoice.ROUNDING_DIFF_AMOUNT_FC,
        CorrectionPurchaseInvoice.ROUNDING_DIFF_AMOUNT_SC,
        CorrectionPurchaseInvoice.CANCELLED,
        CorrectionPurchaseInvoice.SIGNATURE_INPUT_MESSAGE,
        CorrectionPurchaseInvoice.SIGNATURE_DIGEST,
        CorrectionPurchaseInvoice.CERTIFICATION_NUMBER,
        CorrectionPurchaseInvoice.PRIVATE_KEY_VERSION,
        CorrectionPurchaseInvoice.CONTROL_ACCOUNT,
        CorrectionPurchaseInvoice.INSURANCE_OPERATION_347,
        CorrectionPurchaseInvoice.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        CorrectionPurchaseInvoice.GTS_CHECKER,
        CorrectionPurchaseInvoice.GTS_PAYEE,
        CorrectionPurchaseInvoice.EXTRA_MONTH,
        CorrectionPurchaseInvoice.EXTRA_DAYS,
        CorrectionPurchaseInvoice.CASH_DISCOUNT_DATE_OFFSET,
        CorrectionPurchaseInvoice.START_FROM,
        CorrectionPurchaseInvoice.NTS_APPROVED,
        CorrectionPurchaseInvoice.E_TAX_WEB_SITE,
        CorrectionPurchaseInvoice.E_TAX_NUMBER,
        CorrectionPurchaseInvoice.NTS_APPROVED_NUMBER,
        CorrectionPurchaseInvoice.E_DOC_GENERATION_TYPE,
        CorrectionPurchaseInvoice.E_DOC_SERIES,
        CorrectionPurchaseInvoice.E_DOC_NUM,
        CorrectionPurchaseInvoice.E_DOC_EXPORT_FORMAT,
        CorrectionPurchaseInvoice.E_DOC_STATUS,
        CorrectionPurchaseInvoice.E_DOC_ERROR_CODE,
        CorrectionPurchaseInvoice.E_DOC_ERROR_MESSAGE,
        CorrectionPurchaseInvoice.DOWN_PAYMENT_STATUS,
        CorrectionPurchaseInvoice.GROUP_SERIES,
        CorrectionPurchaseInvoice.GROUP_NUMBER,
        CorrectionPurchaseInvoice.GROUP_HAND_WRITTEN,
        CorrectionPurchaseInvoice.REOPEN_ORIGINAL_DOCUMENT,
        CorrectionPurchaseInvoice.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        CorrectionPurchaseInvoice.CREATE_ONLINE_QUOTATION,
        CorrectionPurchaseInvoice.POS_EQUIPMENT_NUMBER,
        CorrectionPurchaseInvoice.POS_MANUFACTURER_SERIAL_NUMBER,
        CorrectionPurchaseInvoice.POS_CASHIER_NUMBER,
        CorrectionPurchaseInvoice.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        CorrectionPurchaseInvoice.CLOSING_OPTION,
        CorrectionPurchaseInvoice.SPECIFIED_CLOSING_DATE,
        CorrectionPurchaseInvoice.OPEN_FOR_LANDED_COSTS,
        CorrectionPurchaseInvoice.AUTHORIZATION_STATUS,
        CorrectionPurchaseInvoice.TOTAL_DISCOUNT_FC,
        CorrectionPurchaseInvoice.TOTAL_DISCOUNT_SC,
        CorrectionPurchaseInvoice.RELEVANT_TO_GTS,
        CorrectionPurchaseInvoice.BPL_NAME,
        CorrectionPurchaseInvoice.VAT_REG_NUM,
        CorrectionPurchaseInvoice.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        CorrectionPurchaseInvoice.SUPPLIER,
        CorrectionPurchaseInvoice.RELEASER,
        CorrectionPurchaseInvoice.RECEIVER,
        CorrectionPurchaseInvoice.BLANKET_AGREEMENT_NUMBER,
        CorrectionPurchaseInvoice.IS_ALTERATION,
        CorrectionPurchaseInvoice.CANCEL_STATUS,
        CorrectionPurchaseInvoice.ASSET_VALUE_DATE,
        CorrectionPurchaseInvoice.REQUESTER,
        CorrectionPurchaseInvoice.REQUESTER_NAME,
        CorrectionPurchaseInvoice.REQUESTER_BRANCH,
        CorrectionPurchaseInvoice.REQUESTER_DEPARTMENT,
        CorrectionPurchaseInvoice.REQUESTER_EMAIL,
        CorrectionPurchaseInvoice.SEND_NOTIFICATION,
        CorrectionPurchaseInvoice.REQ_TYPE,
        CorrectionPurchaseInvoice.DOCUMENT_DELIVERY,
        CorrectionPurchaseInvoice.AUTHORIZATION_CODE,
        CorrectionPurchaseInvoice.START_DELIVERY_DATE,
        CorrectionPurchaseInvoice.START_DELIVERY_TIME,
        CorrectionPurchaseInvoice.END_DELIVERY_DATE,
        CorrectionPurchaseInvoice.END_DELIVERY_TIME,
        CorrectionPurchaseInvoice.VEHICLE_PLATE,
        CorrectionPurchaseInvoice.AT_DOCUMENT_TYPE,
        CorrectionPurchaseInvoice.ELEC_COMM_STATUS,
        CorrectionPurchaseInvoice.ELEC_COMM_MESSAGE,
        CorrectionPurchaseInvoice.REUSE_DOCUMENT_NUM,
        CorrectionPurchaseInvoice.REUSE_NOTA_FISCAL_NUM,
        CorrectionPurchaseInvoice.PRINT_SEPA_DIRECT,
        CorrectionPurchaseInvoice.FISCAL_DOC_NUM,
        CorrectionPurchaseInvoice.POS_DAILY_SUMMARY_NO,
        CorrectionPurchaseInvoice.POS_RECEIPT_NO,
        CorrectionPurchaseInvoice.POINT_OF_ISSUE_CODE,
        CorrectionPurchaseInvoice.LETTER,
        CorrectionPurchaseInvoice.FOLIO_NUMBER_FROM,
        CorrectionPurchaseInvoice.FOLIO_NUMBER_TO,
        CorrectionPurchaseInvoice.INTERIM_TYPE,
        CorrectionPurchaseInvoice.RELATED_TYPE,
        CorrectionPurchaseInvoice.RELATED_ENTRY,
        CorrectionPurchaseInvoice.DOCUMENT_TAX_ID,
        CorrectionPurchaseInvoice.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        CorrectionPurchaseInvoice.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        CorrectionPurchaseInvoice.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        CorrectionPurchaseInvoice.POS_CASH_REGISTER,
        CorrectionPurchaseInvoice.UPDATE_TIME,
        CorrectionPurchaseInvoice.PRICE_MODE,
        CorrectionPurchaseInvoice.DOWN_PAYMENT_TRASACTION_ID,
        CorrectionPurchaseInvoice.REVISION,
        CorrectionPurchaseInvoice.ORIGINAL_REF_NO,
        CorrectionPurchaseInvoice.ORIGINAL_REF_DATE,
        CorrectionPurchaseInvoice.GST_TRANSACTION_TYPE,
        CorrectionPurchaseInvoice.ORIGINAL_CREDIT_OR_DEBIT_NO,
        CorrectionPurchaseInvoice.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        CorrectionPurchaseInvoice.E_COMMERCE_OPERATOR,
        CorrectionPurchaseInvoice.E_COMMERCE_GSTIN,
        CorrectionPurchaseInvoice.TAX_INVOICE_NO,
        CorrectionPurchaseInvoice.TAX_INVOICE_DATE,
        CorrectionPurchaseInvoice.SHIP_FROM,
        CorrectionPurchaseInvoice.COMMISSION_TRADE,
        CorrectionPurchaseInvoice.COMMISSION_TRADE_RETURN,
        CorrectionPurchaseInvoice.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        CorrectionPurchaseInvoice.ISSUING_REASON,
        CorrectionPurchaseInvoice.DOCUMENT_APPROVAL_REQUESTS,
        CorrectionPurchaseInvoice.DOCUMENT_LINES,
        CorrectionPurchaseInvoice.DOCUMENT_ADDITIONAL_EXPENSES,
        CorrectionPurchaseInvoice.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        CorrectionPurchaseInvoice.WITHHOLDING_TAX_DATA_COLLECTION,
        CorrectionPurchaseInvoice.DOCUMENT_PACKAGES,
        CorrectionPurchaseInvoice.DOCUMENT_SPECIAL_LINES,
        CorrectionPurchaseInvoice.DOCUMENT_INSTALLMENTS,
        CorrectionPurchaseInvoice.DOWN_PAYMENTS_TO_DRAW,
        CorrectionPurchaseInvoice.TAX_EXTENSION,
        CorrectionPurchaseInvoice.ADDRESS_EXTENSION,
        CorrectionPurchaseInvoice.SOI_WIZARD_ID,
        CorrectionPurchaseInvoice.BUSINESS_PARTNER,
        CorrectionPurchaseInvoice.CURRENCY,
        CorrectionPurchaseInvoice.PAYMENT_TERMS_TYPE,
        CorrectionPurchaseInvoice.SALES_PERSON,
        CorrectionPurchaseInvoice.SHIPPING_TYPE,
        CorrectionPurchaseInvoice.FACTORING_INDICATOR,
        CorrectionPurchaseInvoice.JOURNAL_ENTRY,
        CorrectionPurchaseInvoice.FORMS_1099,
        CorrectionPurchaseInvoice.WIZARD_PAYMENT_METHOD,
        CorrectionPurchaseInvoice.PAYMENT_BLOCK_2,
        CorrectionPurchaseInvoice.PROJECT_2,
        CorrectionPurchaseInvoice.EMPLOYEE_INFO,
        CorrectionPurchaseInvoice.COUNTRY,
        CorrectionPurchaseInvoice.BUSINESS_PLACE,
        CorrectionPurchaseInvoice.USER_LANGUAGE,
        CorrectionPurchaseInvoice.NF_MODEL,
        CorrectionPurchaseInvoice.CHART_OF_ACCOUNT,
        CorrectionPurchaseInvoice.TAX_WEB_SITE,
        CorrectionPurchaseInvoice.BRANCH,
        CorrectionPurchaseInvoice.DEPARTMENT,
        CorrectionPurchaseInvoice.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    CorrectionPurchaseInvoice.ALL_FIELDS = new core_1.AllFields('*', CorrectionPurchaseInvoice);
    /**
     * All key fields of the CorrectionPurchaseInvoice entity.
     */
    CorrectionPurchaseInvoice._keyFields = [CorrectionPurchaseInvoice.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property CorrectionPurchaseInvoice.
     */
    CorrectionPurchaseInvoice._keys = CorrectionPurchaseInvoice._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CorrectionPurchaseInvoice = exports.CorrectionPurchaseInvoice || (exports.CorrectionPurchaseInvoice = {}));
exports.CorrectionPurchaseInvoice = CorrectionPurchaseInvoice;
//# sourceMappingURL=CorrectionPurchaseInvoice.js.map