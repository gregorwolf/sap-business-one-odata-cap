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
exports.PurchaseCreditNotes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseCreditNotesRequestBuilder_1 = require("./PurchaseCreditNotesRequestBuilder");
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
 * This class represents the entity "PurchaseCreditNotes" of service "SAPB1".
 */
var PurchaseCreditNotes = /** @class */ (function (_super) {
    __extends(PurchaseCreditNotes, _super);
    function PurchaseCreditNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PurchaseCreditNotes`.
     * @returns A builder that constructs instances of entity type `PurchaseCreditNotes`.
     */
    PurchaseCreditNotes.builder = function () {
        return core_1.EntityV4.entityBuilder(PurchaseCreditNotes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseCreditNotes` entity type.
     * @returns A `PurchaseCreditNotes` request builder.
     */
    PurchaseCreditNotes.requestBuilder = function () {
        return new PurchaseCreditNotesRequestBuilder_1.PurchaseCreditNotesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseCreditNotes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseCreditNotes`.
     */
    PurchaseCreditNotes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PurchaseCreditNotes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseCreditNotes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseCreditNotes.
     */
    PurchaseCreditNotes._entityName = 'PurchaseCreditNotes';
    /**
     * Default url path for the according service.
     */
    PurchaseCreditNotes._defaultServicePath = '/b1s/v2/';
    return PurchaseCreditNotes;
}(core_1.EntityV4));
exports.PurchaseCreditNotes = PurchaseCreditNotes;
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
(function (PurchaseCreditNotes) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_ENTRY = new core_1.NumberField('DocEntry', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_NUM = new core_1.NumberField('DocNum', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_TYPE = new core_1.EnumField('DocType', PurchaseCreditNotes);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.HAND_WRITTEN = new core_1.EnumField('HandWritten', PurchaseCreditNotes);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PRINTED = new core_1.EnumField('Printed', PurchaseCreditNotes);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_DATE = new core_1.DateField('DocDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_DUE_DATE = new core_1.DateField('DocDueDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CARD_CODE = new core_1.StringField('CardCode', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CARD_NAME = new core_1.StringField('CardName', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ADDRESS = new core_1.StringField('Address', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.NUM_AT_CARD = new core_1.StringField('NumAtCard', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_TOTAL = new core_1.NumberField('DocTotal', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_CURRENCY = new core_1.StringField('DocCurrency', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_RATE = new core_1.NumberField('DocRate', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REFERENCE_1 = new core_1.StringField('Reference1', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REFERENCE_2 = new core_1.StringField('Reference2', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.COMMENTS = new core_1.StringField('Comments', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.JOURNAL_MEMO = new core_1.StringField('JournalMemo', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_TIME = new core_1.TimeField('DocTime', PurchaseCreditNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CONFIRMED = new core_1.EnumField('Confirmed', PurchaseCreditNotes);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SUMMERY_TYPE = new core_1.EnumField('SummeryType', PurchaseCreditNotes);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SHOW_SCN = new core_1.EnumField('ShowSCN', PurchaseCreditNotes);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SERIES = new core_1.NumberField('Series', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TAX_DATE = new core_1.DateField('TaxDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', PurchaseCreditNotes);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', PurchaseCreditNotes);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SHIP_TO_CODE = new core_1.StringField('ShipToCode', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.INDICATOR = new core_1.StringField('Indicator', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CREATION_DATE = new core_1.DateField('CreationDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.UPDATE_DATE = new core_1.DateField('UpdateDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TRANS_NUM = new core_1.NumberField('TransNum', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.VAT_SUM = new core_1.NumberField('VatSum', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.VAT_SUM_FC = new core_1.NumberField('VatSumFc', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.NET_PROCEDURE = new core_1.EnumField('NetProcedure', PurchaseCreditNotes);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FORM_1099 = new core_1.NumberField('Form1099', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BOX_1099 = new core_1.StringField('Box1099', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REVISION_PO = new core_1.EnumField('RevisionPo', PurchaseCreditNotes);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REQURIED_DATE = new core_1.DateField('RequriedDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CANCEL_DATE = new core_1.DateField('CancelDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', PurchaseCreditNotes);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SUBMITTED = new core_1.EnumField('Submitted', PurchaseCreditNotes);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SEGMENT = new core_1.NumberField('Segment', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PICK_STATUS = new core_1.EnumField('PickStatus', PurchaseCreditNotes);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PICK = new core_1.EnumField('Pick', PurchaseCreditNotes);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', PurchaseCreditNotes);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', PurchaseCreditNotes);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.RESERVE = new core_1.EnumField('Reserve', PurchaseCreditNotes);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PROJECT = new core_1.StringField('Project', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', PurchaseCreditNotes);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ROUNDING = new core_1.EnumField('Rounding', PurchaseCreditNotes);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DEFERRED_TAX = new core_1.EnumField('DeferredTax', PurchaseCreditNotes);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_APPLIED = new core_1.NumberField('WTApplied', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', PurchaseCreditNotes);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.AGENT_CODE = new core_1.StringField('AgentCode', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', PurchaseCreditNotes);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BASE_AMOUNT = new core_1.NumberField('BaseAmount', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_AMOUNT = new core_1.NumberField('WTAmount', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.VAT_DATE = new core_1.DateField('VatDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', PurchaseCreditNotes);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ADDRESS_2 = new core_1.StringField('Address2', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', PurchaseCreditNotes);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAY_TO_CODE = new core_1.StringField('PayToCode', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.MANUAL_NUMBER = new core_1.StringField('ManualNumber', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', PurchaseCreditNotes);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', PurchaseCreditNotes);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOWN_PAYMENT = new core_1.NumberField('DownPayment', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', PurchaseCreditNotes);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PICK_REMARK = new core_1.StringField('PickRemark', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CLOSING_DATE = new core_1.DateField('ClosingDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SERIES_STRING = new core_1.StringField('SeriesString', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', PurchaseCreditNotes);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', PurchaseCreditNotes);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.VAT_PERCENT = new core_1.NumberField('VatPercent', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CANCELLED = new core_1.EnumField('Cancelled', PurchaseCreditNotes);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', PurchaseCreditNotes);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', PurchaseCreditNotes);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.GTS_CHECKER = new core_1.NumberField('GTSChecker', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.GTS_PAYEE = new core_1.NumberField('GTSPayee', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.EXTRA_DAYS = new core_1.NumberField('ExtraDays', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.START_FROM = new core_1.EnumField('StartFrom', PurchaseCreditNotes);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.NTS_APPROVED = new core_1.EnumField('NTSApproved', PurchaseCreditNotes);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', PurchaseCreditNotes);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_DOC_SERIES = new core_1.NumberField('EDocSeries', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_DOC_NUM = new core_1.StringField('EDocNum', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_DOC_STATUS = new core_1.EnumField('EDocStatus', PurchaseCreditNotes);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', PurchaseCreditNotes);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.GROUP_SERIES = new core_1.NumberField('GroupSeries', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.GROUP_NUMBER = new core_1.NumberField('GroupNumber', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', PurchaseCreditNotes);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', PurchaseCreditNotes);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', PurchaseCreditNotes);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', PurchaseCreditNotes);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', PurchaseCreditNotes);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CLOSING_OPTION = new core_1.EnumField('ClosingOption', PurchaseCreditNotes);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', PurchaseCreditNotes);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', PurchaseCreditNotes);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', PurchaseCreditNotes, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', PurchaseCreditNotes);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BPL_NAME = new core_1.StringField('BPLName', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.VAT_REG_NUM = new core_1.StringField('VATRegNum', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SUPPLIER = new core_1.StringField('Supplier', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.RELEASER = new core_1.NumberField('Releaser', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.RECEIVER = new core_1.NumberField('Receiver', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.IS_ALTERATION = new core_1.EnumField('IsAlteration', PurchaseCreditNotes);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CANCEL_STATUS = new core_1.EnumField('CancelStatus', PurchaseCreditNotes);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REQUESTER = new core_1.StringField('Requester', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REQUESTER_NAME = new core_1.StringField('RequesterName', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', PurchaseCreditNotes);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REQ_TYPE = new core_1.NumberField('ReqType', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', PurchaseCreditNotes);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', PurchaseCreditNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', PurchaseCreditNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', PurchaseCreditNotes);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', PurchaseCreditNotes);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', PurchaseCreditNotes);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', PurchaseCreditNotes);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.LETTER = new core_1.EnumField('Letter', PurchaseCreditNotes);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.INTERIM_TYPE = new core_1.EnumField('InterimType', PurchaseCreditNotes);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.RELATED_TYPE = new core_1.NumberField('RelatedType', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', PurchaseCreditNotes);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.UPDATE_TIME = new core_1.TimeField('UpdateTime', PurchaseCreditNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PRICE_MODE = new core_1.EnumField('PriceMode', PurchaseCreditNotes);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.REVISION = new core_1.EnumField('Revision', PurchaseCreditNotes);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', PurchaseCreditNotes);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', PurchaseCreditNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SHIP_FROM = new core_1.StringField('ShipFrom', PurchaseCreditNotes, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', PurchaseCreditNotes);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', PurchaseCreditNotes);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', PurchaseCreditNotes);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ISSUING_REASON = new core_1.NumberField('IssuingReason', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', PurchaseCreditNotes, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', PurchaseCreditNotes, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', PurchaseCreditNotes, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseCreditNotes, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', PurchaseCreditNotes, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', PurchaseCreditNotes, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', PurchaseCreditNotes, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', PurchaseCreditNotes, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', PurchaseCreditNotes, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseCreditNotes);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseCreditNotes);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', PurchaseCreditNotes, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', PurchaseCreditNotes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CURRENCY = new core_1.OneToOneLink('Currency', PurchaseCreditNotes, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', PurchaseCreditNotes, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', PurchaseCreditNotes, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', PurchaseCreditNotes, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', PurchaseCreditNotes, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', PurchaseCreditNotes, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.FORMS_1099 = new core_1.OneToOneLink('Forms1099', PurchaseCreditNotes, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', PurchaseCreditNotes, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', PurchaseCreditNotes, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.PROJECT_2 = new core_1.OneToOneLink('Project2', PurchaseCreditNotes, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', PurchaseCreditNotes, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.COUNTRY = new core_1.OneToOneLink('Country', PurchaseCreditNotes, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', PurchaseCreditNotes, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', PurchaseCreditNotes, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.NF_MODEL = new core_1.OneToOneLink('NFModel', PurchaseCreditNotes, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', PurchaseCreditNotes, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', PurchaseCreditNotes, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.BRANCH = new core_1.OneToOneLink('Branch', PurchaseCreditNotes, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.DEPARTMENT = new core_1.OneToOneLink('Department', PurchaseCreditNotes, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseCreditNotes.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', PurchaseCreditNotes, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseCreditNotes entity.
     */
    PurchaseCreditNotes._allFields = [
        PurchaseCreditNotes.DOC_ENTRY,
        PurchaseCreditNotes.DOC_NUM,
        PurchaseCreditNotes.DOC_TYPE,
        PurchaseCreditNotes.HAND_WRITTEN,
        PurchaseCreditNotes.PRINTED,
        PurchaseCreditNotes.DOC_DATE,
        PurchaseCreditNotes.DOC_DUE_DATE,
        PurchaseCreditNotes.CARD_CODE,
        PurchaseCreditNotes.CARD_NAME,
        PurchaseCreditNotes.ADDRESS,
        PurchaseCreditNotes.NUM_AT_CARD,
        PurchaseCreditNotes.DOC_TOTAL,
        PurchaseCreditNotes.ATTACHMENT_ENTRY,
        PurchaseCreditNotes.DOC_CURRENCY,
        PurchaseCreditNotes.DOC_RATE,
        PurchaseCreditNotes.REFERENCE_1,
        PurchaseCreditNotes.REFERENCE_2,
        PurchaseCreditNotes.COMMENTS,
        PurchaseCreditNotes.JOURNAL_MEMO,
        PurchaseCreditNotes.PAYMENT_GROUP_CODE,
        PurchaseCreditNotes.DOC_TIME,
        PurchaseCreditNotes.SALES_PERSON_CODE,
        PurchaseCreditNotes.TRANSPORTATION_CODE,
        PurchaseCreditNotes.CONFIRMED,
        PurchaseCreditNotes.IMPORT_FILE_NUM,
        PurchaseCreditNotes.SUMMERY_TYPE,
        PurchaseCreditNotes.CONTACT_PERSON_CODE,
        PurchaseCreditNotes.SHOW_SCN,
        PurchaseCreditNotes.SERIES,
        PurchaseCreditNotes.TAX_DATE,
        PurchaseCreditNotes.PARTIAL_SUPPLY,
        PurchaseCreditNotes.DOC_OBJECT_CODE,
        PurchaseCreditNotes.SHIP_TO_CODE,
        PurchaseCreditNotes.INDICATOR,
        PurchaseCreditNotes.FEDERAL_TAX_ID,
        PurchaseCreditNotes.DISCOUNT_PERCENT,
        PurchaseCreditNotes.PAYMENT_REFERENCE,
        PurchaseCreditNotes.CREATION_DATE,
        PurchaseCreditNotes.UPDATE_DATE,
        PurchaseCreditNotes.FINANCIAL_PERIOD,
        PurchaseCreditNotes.TRANS_NUM,
        PurchaseCreditNotes.VAT_SUM,
        PurchaseCreditNotes.VAT_SUM_SYS,
        PurchaseCreditNotes.VAT_SUM_FC,
        PurchaseCreditNotes.NET_PROCEDURE,
        PurchaseCreditNotes.DOC_TOTAL_FC,
        PurchaseCreditNotes.DOC_TOTAL_SYS,
        PurchaseCreditNotes.FORM_1099,
        PurchaseCreditNotes.BOX_1099,
        PurchaseCreditNotes.REVISION_PO,
        PurchaseCreditNotes.REQURIED_DATE,
        PurchaseCreditNotes.CANCEL_DATE,
        PurchaseCreditNotes.BLOCK_DUNNING,
        PurchaseCreditNotes.SUBMITTED,
        PurchaseCreditNotes.SEGMENT,
        PurchaseCreditNotes.PICK_STATUS,
        PurchaseCreditNotes.PICK,
        PurchaseCreditNotes.PAYMENT_METHOD,
        PurchaseCreditNotes.PAYMENT_BLOCK,
        PurchaseCreditNotes.PAYMENT_BLOCK_ENTRY,
        PurchaseCreditNotes.CENTRAL_BANK_INDICATOR,
        PurchaseCreditNotes.MAXIMUM_CASH_DISCOUNT,
        PurchaseCreditNotes.RESERVE,
        PurchaseCreditNotes.PROJECT,
        PurchaseCreditNotes.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseCreditNotes.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseCreditNotes.WARE_HOUSE_UPDATE_TYPE,
        PurchaseCreditNotes.ROUNDING,
        PurchaseCreditNotes.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseCreditNotes.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseCreditNotes.NEXT_CORRECTING_DOCUMENT,
        PurchaseCreditNotes.DEFERRED_TAX,
        PurchaseCreditNotes.TAX_EXEMPTION_LETTER_NUM,
        PurchaseCreditNotes.WT_APPLIED,
        PurchaseCreditNotes.WT_APPLIED_FC,
        PurchaseCreditNotes.BILL_OF_EXCHANGE_RESERVED,
        PurchaseCreditNotes.AGENT_CODE,
        PurchaseCreditNotes.WT_APPLIED_SC,
        PurchaseCreditNotes.TOTAL_EQUALIZATION_TAX,
        PurchaseCreditNotes.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseCreditNotes.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseCreditNotes.NUMBER_OF_INSTALLMENTS,
        PurchaseCreditNotes.APPLY_TAX_ON_FIRST_INSTALLMENT,
        PurchaseCreditNotes.WT_NON_SUBJECT_AMOUNT,
        PurchaseCreditNotes.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseCreditNotes.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseCreditNotes.WT_EXEMPTED_AMOUNT,
        PurchaseCreditNotes.WT_EXEMPTED_AMOUNT_SC,
        PurchaseCreditNotes.WT_EXEMPTED_AMOUNT_FC,
        PurchaseCreditNotes.BASE_AMOUNT,
        PurchaseCreditNotes.BASE_AMOUNT_SC,
        PurchaseCreditNotes.BASE_AMOUNT_FC,
        PurchaseCreditNotes.WT_AMOUNT,
        PurchaseCreditNotes.WT_AMOUNT_SC,
        PurchaseCreditNotes.WT_AMOUNT_FC,
        PurchaseCreditNotes.VAT_DATE,
        PurchaseCreditNotes.DOCUMENTS_OWNER,
        PurchaseCreditNotes.FOLIO_PREFIX_STRING,
        PurchaseCreditNotes.FOLIO_NUMBER,
        PurchaseCreditNotes.DOCUMENT_SUB_TYPE,
        PurchaseCreditNotes.BP_CHANNEL_CODE,
        PurchaseCreditNotes.BP_CHANNEL_CONTACT,
        PurchaseCreditNotes.ADDRESS_2,
        PurchaseCreditNotes.DOCUMENT_STATUS,
        PurchaseCreditNotes.PERIOD_INDICATOR,
        PurchaseCreditNotes.PAY_TO_CODE,
        PurchaseCreditNotes.MANUAL_NUMBER,
        PurchaseCreditNotes.USE_SHPD_GOODS_ACT,
        PurchaseCreditNotes.IS_PAY_TO_BANK,
        PurchaseCreditNotes.PAY_TO_BANK_COUNTRY,
        PurchaseCreditNotes.PAY_TO_BANK_CODE,
        PurchaseCreditNotes.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseCreditNotes.PAY_TO_BANK_BRANCH,
        PurchaseCreditNotes.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseCreditNotes.DOWN_PAYMENT,
        PurchaseCreditNotes.RESERVE_INVOICE,
        PurchaseCreditNotes.LANGUAGE_CODE,
        PurchaseCreditNotes.TRACKING_NUMBER,
        PurchaseCreditNotes.PICK_REMARK,
        PurchaseCreditNotes.CLOSING_DATE,
        PurchaseCreditNotes.SEQUENCE_CODE,
        PurchaseCreditNotes.SEQUENCE_SERIAL,
        PurchaseCreditNotes.SERIES_STRING,
        PurchaseCreditNotes.SUB_SERIES_STRING,
        PurchaseCreditNotes.SEQUENCE_MODEL,
        PurchaseCreditNotes.USE_CORRECTION_VAT_GROUP,
        PurchaseCreditNotes.TOTAL_DISCOUNT,
        PurchaseCreditNotes.DOWN_PAYMENT_AMOUNT,
        PurchaseCreditNotes.DOWN_PAYMENT_PERCENTAGE,
        PurchaseCreditNotes.DOWN_PAYMENT_TYPE,
        PurchaseCreditNotes.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseCreditNotes.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseCreditNotes.VAT_PERCENT,
        PurchaseCreditNotes.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseCreditNotes.OPENING_REMARKS,
        PurchaseCreditNotes.CLOSING_REMARKS,
        PurchaseCreditNotes.ROUNDING_DIFF_AMOUNT,
        PurchaseCreditNotes.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseCreditNotes.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseCreditNotes.CANCELLED,
        PurchaseCreditNotes.SIGNATURE_INPUT_MESSAGE,
        PurchaseCreditNotes.SIGNATURE_DIGEST,
        PurchaseCreditNotes.CERTIFICATION_NUMBER,
        PurchaseCreditNotes.PRIVATE_KEY_VERSION,
        PurchaseCreditNotes.CONTROL_ACCOUNT,
        PurchaseCreditNotes.INSURANCE_OPERATION_347,
        PurchaseCreditNotes.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        PurchaseCreditNotes.GTS_CHECKER,
        PurchaseCreditNotes.GTS_PAYEE,
        PurchaseCreditNotes.EXTRA_MONTH,
        PurchaseCreditNotes.EXTRA_DAYS,
        PurchaseCreditNotes.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseCreditNotes.START_FROM,
        PurchaseCreditNotes.NTS_APPROVED,
        PurchaseCreditNotes.E_TAX_WEB_SITE,
        PurchaseCreditNotes.E_TAX_NUMBER,
        PurchaseCreditNotes.NTS_APPROVED_NUMBER,
        PurchaseCreditNotes.E_DOC_GENERATION_TYPE,
        PurchaseCreditNotes.E_DOC_SERIES,
        PurchaseCreditNotes.E_DOC_NUM,
        PurchaseCreditNotes.E_DOC_EXPORT_FORMAT,
        PurchaseCreditNotes.E_DOC_STATUS,
        PurchaseCreditNotes.E_DOC_ERROR_CODE,
        PurchaseCreditNotes.E_DOC_ERROR_MESSAGE,
        PurchaseCreditNotes.DOWN_PAYMENT_STATUS,
        PurchaseCreditNotes.GROUP_SERIES,
        PurchaseCreditNotes.GROUP_NUMBER,
        PurchaseCreditNotes.GROUP_HAND_WRITTEN,
        PurchaseCreditNotes.REOPEN_ORIGINAL_DOCUMENT,
        PurchaseCreditNotes.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        PurchaseCreditNotes.CREATE_ONLINE_QUOTATION,
        PurchaseCreditNotes.POS_EQUIPMENT_NUMBER,
        PurchaseCreditNotes.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseCreditNotes.POS_CASHIER_NUMBER,
        PurchaseCreditNotes.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        PurchaseCreditNotes.CLOSING_OPTION,
        PurchaseCreditNotes.SPECIFIED_CLOSING_DATE,
        PurchaseCreditNotes.OPEN_FOR_LANDED_COSTS,
        PurchaseCreditNotes.AUTHORIZATION_STATUS,
        PurchaseCreditNotes.TOTAL_DISCOUNT_FC,
        PurchaseCreditNotes.TOTAL_DISCOUNT_SC,
        PurchaseCreditNotes.RELEVANT_TO_GTS,
        PurchaseCreditNotes.BPL_NAME,
        PurchaseCreditNotes.VAT_REG_NUM,
        PurchaseCreditNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseCreditNotes.SUPPLIER,
        PurchaseCreditNotes.RELEASER,
        PurchaseCreditNotes.RECEIVER,
        PurchaseCreditNotes.BLANKET_AGREEMENT_NUMBER,
        PurchaseCreditNotes.IS_ALTERATION,
        PurchaseCreditNotes.CANCEL_STATUS,
        PurchaseCreditNotes.ASSET_VALUE_DATE,
        PurchaseCreditNotes.REQUESTER,
        PurchaseCreditNotes.REQUESTER_NAME,
        PurchaseCreditNotes.REQUESTER_BRANCH,
        PurchaseCreditNotes.REQUESTER_DEPARTMENT,
        PurchaseCreditNotes.REQUESTER_EMAIL,
        PurchaseCreditNotes.SEND_NOTIFICATION,
        PurchaseCreditNotes.REQ_TYPE,
        PurchaseCreditNotes.DOCUMENT_DELIVERY,
        PurchaseCreditNotes.AUTHORIZATION_CODE,
        PurchaseCreditNotes.START_DELIVERY_DATE,
        PurchaseCreditNotes.START_DELIVERY_TIME,
        PurchaseCreditNotes.END_DELIVERY_DATE,
        PurchaseCreditNotes.END_DELIVERY_TIME,
        PurchaseCreditNotes.VEHICLE_PLATE,
        PurchaseCreditNotes.AT_DOCUMENT_TYPE,
        PurchaseCreditNotes.ELEC_COMM_STATUS,
        PurchaseCreditNotes.ELEC_COMM_MESSAGE,
        PurchaseCreditNotes.REUSE_DOCUMENT_NUM,
        PurchaseCreditNotes.REUSE_NOTA_FISCAL_NUM,
        PurchaseCreditNotes.PRINT_SEPA_DIRECT,
        PurchaseCreditNotes.FISCAL_DOC_NUM,
        PurchaseCreditNotes.POS_DAILY_SUMMARY_NO,
        PurchaseCreditNotes.POS_RECEIPT_NO,
        PurchaseCreditNotes.POINT_OF_ISSUE_CODE,
        PurchaseCreditNotes.LETTER,
        PurchaseCreditNotes.FOLIO_NUMBER_FROM,
        PurchaseCreditNotes.FOLIO_NUMBER_TO,
        PurchaseCreditNotes.INTERIM_TYPE,
        PurchaseCreditNotes.RELATED_TYPE,
        PurchaseCreditNotes.RELATED_ENTRY,
        PurchaseCreditNotes.DOCUMENT_TAX_ID,
        PurchaseCreditNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseCreditNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseCreditNotes.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        PurchaseCreditNotes.POS_CASH_REGISTER,
        PurchaseCreditNotes.UPDATE_TIME,
        PurchaseCreditNotes.PRICE_MODE,
        PurchaseCreditNotes.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseCreditNotes.REVISION,
        PurchaseCreditNotes.ORIGINAL_REF_NO,
        PurchaseCreditNotes.ORIGINAL_REF_DATE,
        PurchaseCreditNotes.GST_TRANSACTION_TYPE,
        PurchaseCreditNotes.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseCreditNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseCreditNotes.E_COMMERCE_OPERATOR,
        PurchaseCreditNotes.E_COMMERCE_GSTIN,
        PurchaseCreditNotes.TAX_INVOICE_NO,
        PurchaseCreditNotes.TAX_INVOICE_DATE,
        PurchaseCreditNotes.SHIP_FROM,
        PurchaseCreditNotes.COMMISSION_TRADE,
        PurchaseCreditNotes.COMMISSION_TRADE_RETURN,
        PurchaseCreditNotes.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        PurchaseCreditNotes.ISSUING_REASON,
        PurchaseCreditNotes.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseCreditNotes.DOCUMENT_LINES,
        PurchaseCreditNotes.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseCreditNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseCreditNotes.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseCreditNotes.DOCUMENT_PACKAGES,
        PurchaseCreditNotes.DOCUMENT_SPECIAL_LINES,
        PurchaseCreditNotes.DOCUMENT_INSTALLMENTS,
        PurchaseCreditNotes.DOWN_PAYMENTS_TO_DRAW,
        PurchaseCreditNotes.TAX_EXTENSION,
        PurchaseCreditNotes.ADDRESS_EXTENSION,
        PurchaseCreditNotes.SOI_WIZARD_ID,
        PurchaseCreditNotes.BUSINESS_PARTNER,
        PurchaseCreditNotes.CURRENCY,
        PurchaseCreditNotes.PAYMENT_TERMS_TYPE,
        PurchaseCreditNotes.SALES_PERSON,
        PurchaseCreditNotes.SHIPPING_TYPE,
        PurchaseCreditNotes.FACTORING_INDICATOR,
        PurchaseCreditNotes.JOURNAL_ENTRY,
        PurchaseCreditNotes.FORMS_1099,
        PurchaseCreditNotes.WIZARD_PAYMENT_METHOD,
        PurchaseCreditNotes.PAYMENT_BLOCK_2,
        PurchaseCreditNotes.PROJECT_2,
        PurchaseCreditNotes.EMPLOYEE_INFO,
        PurchaseCreditNotes.COUNTRY,
        PurchaseCreditNotes.BUSINESS_PLACE,
        PurchaseCreditNotes.USER_LANGUAGE,
        PurchaseCreditNotes.NF_MODEL,
        PurchaseCreditNotes.CHART_OF_ACCOUNT,
        PurchaseCreditNotes.TAX_WEB_SITE,
        PurchaseCreditNotes.BRANCH,
        PurchaseCreditNotes.DEPARTMENT,
        PurchaseCreditNotes.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseCreditNotes.ALL_FIELDS = new core_1.AllFields('*', PurchaseCreditNotes);
    /**
     * All key fields of the PurchaseCreditNotes entity.
     */
    PurchaseCreditNotes._keyFields = [PurchaseCreditNotes.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseCreditNotes.
     */
    PurchaseCreditNotes._keys = PurchaseCreditNotes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseCreditNotes = exports.PurchaseCreditNotes || (exports.PurchaseCreditNotes = {}));
exports.PurchaseCreditNotes = PurchaseCreditNotes;
//# sourceMappingURL=PurchaseCreditNotes.js.map