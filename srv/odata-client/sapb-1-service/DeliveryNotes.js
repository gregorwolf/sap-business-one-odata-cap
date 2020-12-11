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
exports.DeliveryNotes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DeliveryNotesRequestBuilder_1 = require("./DeliveryNotesRequestBuilder");
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
 * This class represents the entity "DeliveryNotes" of service "SAPB1".
 */
var DeliveryNotes = /** @class */ (function (_super) {
    __extends(DeliveryNotes, _super);
    function DeliveryNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `DeliveryNotes`.
     * @returns A builder that constructs instances of entity type `DeliveryNotes`.
     */
    DeliveryNotes.builder = function () {
        return core_1.EntityV4.entityBuilder(DeliveryNotes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DeliveryNotes` entity type.
     * @returns A `DeliveryNotes` request builder.
     */
    DeliveryNotes.requestBuilder = function () {
        return new DeliveryNotesRequestBuilder_1.DeliveryNotesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeliveryNotes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeliveryNotes`.
     */
    DeliveryNotes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, DeliveryNotes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DeliveryNotes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DeliveryNotes.
     */
    DeliveryNotes._entityName = 'DeliveryNotes';
    /**
     * Default url path for the according service.
     */
    DeliveryNotes._defaultServicePath = '/b1s/v2/';
    return DeliveryNotes;
}(core_1.EntityV4));
exports.DeliveryNotes = DeliveryNotes;
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
(function (DeliveryNotes) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_ENTRY = new core_1.NumberField('DocEntry', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_NUM = new core_1.NumberField('DocNum', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_TYPE = new core_1.EnumField('DocType', DeliveryNotes);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.HAND_WRITTEN = new core_1.EnumField('HandWritten', DeliveryNotes);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PRINTED = new core_1.EnumField('Printed', DeliveryNotes);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_DATE = new core_1.DateField('DocDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_DUE_DATE = new core_1.DateField('DocDueDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CARD_CODE = new core_1.StringField('CardCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CARD_NAME = new core_1.StringField('CardName', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ADDRESS = new core_1.StringField('Address', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NUM_AT_CARD = new core_1.StringField('NumAtCard', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_TOTAL = new core_1.NumberField('DocTotal', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_CURRENCY = new core_1.StringField('DocCurrency', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_RATE = new core_1.NumberField('DocRate', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REFERENCE_1 = new core_1.StringField('Reference1', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REFERENCE_2 = new core_1.StringField('Reference2', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.COMMENTS = new core_1.StringField('Comments', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.JOURNAL_MEMO = new core_1.StringField('JournalMemo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_TIME = new core_1.TimeField('DocTime', DeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CONFIRMED = new core_1.EnumField('Confirmed', DeliveryNotes);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SUMMERY_TYPE = new core_1.EnumField('SummeryType', DeliveryNotes);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SHOW_SCN = new core_1.EnumField('ShowSCN', DeliveryNotes);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SERIES = new core_1.NumberField('Series', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_DATE = new core_1.DateField('TaxDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', DeliveryNotes);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', DeliveryNotes);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SHIP_TO_CODE = new core_1.StringField('ShipToCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.INDICATOR = new core_1.StringField('Indicator', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CREATION_DATE = new core_1.DateField('CreationDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.UPDATE_DATE = new core_1.DateField('UpdateDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TRANS_NUM = new core_1.NumberField('TransNum', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_SUM = new core_1.NumberField('VatSum', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_SUM_FC = new core_1.NumberField('VatSumFc', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NET_PROCEDURE = new core_1.EnumField('NetProcedure', DeliveryNotes);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FORM_1099 = new core_1.NumberField('Form1099', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BOX_1099 = new core_1.StringField('Box1099', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REVISION_PO = new core_1.EnumField('RevisionPo', DeliveryNotes);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQURIED_DATE = new core_1.DateField('RequriedDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CANCEL_DATE = new core_1.DateField('CancelDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', DeliveryNotes);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SUBMITTED = new core_1.EnumField('Submitted', DeliveryNotes);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SEGMENT = new core_1.NumberField('Segment', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PICK_STATUS = new core_1.EnumField('PickStatus', DeliveryNotes);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PICK = new core_1.EnumField('Pick', DeliveryNotes);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', DeliveryNotes);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', DeliveryNotes);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RESERVE = new core_1.EnumField('Reserve', DeliveryNotes);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PROJECT = new core_1.StringField('Project', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', DeliveryNotes);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ROUNDING = new core_1.EnumField('Rounding', DeliveryNotes);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DEFERRED_TAX = new core_1.EnumField('DeferredTax', DeliveryNotes);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_APPLIED = new core_1.NumberField('WTApplied', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', DeliveryNotes);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.AGENT_CODE = new core_1.StringField('AgentCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', DeliveryNotes);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BASE_AMOUNT = new core_1.NumberField('BaseAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_AMOUNT = new core_1.NumberField('WTAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_DATE = new core_1.DateField('VatDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', DeliveryNotes);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ADDRESS_2 = new core_1.StringField('Address2', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', DeliveryNotes);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_CODE = new core_1.StringField('PayToCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.MANUAL_NUMBER = new core_1.StringField('ManualNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', DeliveryNotes);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', DeliveryNotes);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT = new core_1.NumberField('DownPayment', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', DeliveryNotes);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PICK_REMARK = new core_1.StringField('PickRemark', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CLOSING_DATE = new core_1.DateField('ClosingDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SERIES_STRING = new core_1.StringField('SeriesString', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', DeliveryNotes);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', DeliveryNotes);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_PERCENT = new core_1.NumberField('VatPercent', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CANCELLED = new core_1.EnumField('Cancelled', DeliveryNotes);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', DeliveryNotes);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', DeliveryNotes);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GTS_CHECKER = new core_1.NumberField('GTSChecker', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GTS_PAYEE = new core_1.NumberField('GTSPayee', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXTRA_DAYS = new core_1.NumberField('ExtraDays', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.START_FROM = new core_1.EnumField('StartFrom', DeliveryNotes);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NTS_APPROVED = new core_1.EnumField('NTSApproved', DeliveryNotes);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', DeliveryNotes);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_SERIES = new core_1.NumberField('EDocSeries', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_NUM = new core_1.StringField('EDocNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_STATUS = new core_1.EnumField('EDocStatus', DeliveryNotes);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', DeliveryNotes);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GROUP_SERIES = new core_1.NumberField('GroupSeries', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GROUP_NUMBER = new core_1.NumberField('GroupNumber', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', DeliveryNotes);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', DeliveryNotes);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', DeliveryNotes);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', DeliveryNotes);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', DeliveryNotes);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CLOSING_OPTION = new core_1.EnumField('ClosingOption', DeliveryNotes);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', DeliveryNotes);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', DeliveryNotes);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', DeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', DeliveryNotes);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BPL_NAME = new core_1.StringField('BPLName', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VAT_REG_NUM = new core_1.StringField('VATRegNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SUPPLIER = new core_1.StringField('Supplier', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RELEASER = new core_1.NumberField('Releaser', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RECEIVER = new core_1.NumberField('Receiver', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.IS_ALTERATION = new core_1.EnumField('IsAlteration', DeliveryNotes);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CANCEL_STATUS = new core_1.EnumField('CancelStatus', DeliveryNotes);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER = new core_1.StringField('Requester', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER_NAME = new core_1.StringField('RequesterName', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', DeliveryNotes);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REQ_TYPE = new core_1.NumberField('ReqType', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', DeliveryNotes);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', DeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', DeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', DeliveryNotes);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', DeliveryNotes);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', DeliveryNotes);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', DeliveryNotes);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.LETTER = new core_1.EnumField('Letter', DeliveryNotes);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.INTERIM_TYPE = new core_1.EnumField('InterimType', DeliveryNotes);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RELATED_TYPE = new core_1.NumberField('RelatedType', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', DeliveryNotes);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.UPDATE_TIME = new core_1.TimeField('UpdateTime', DeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PRICE_MODE = new core_1.EnumField('PriceMode', DeliveryNotes);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.REVISION = new core_1.EnumField('Revision', DeliveryNotes);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', DeliveryNotes);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', DeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SHIP_FROM = new core_1.StringField('ShipFrom', DeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', DeliveryNotes);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', DeliveryNotes);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', DeliveryNotes);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ISSUING_REASON = new core_1.NumberField('IssuingReason', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', DeliveryNotes, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', DeliveryNotes, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', DeliveryNotes, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', DeliveryNotes, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', DeliveryNotes, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', DeliveryNotes, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', DeliveryNotes, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', DeliveryNotes, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', DeliveryNotes, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', DeliveryNotes);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', DeliveryNotes);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', DeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', DeliveryNotes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CURRENCY = new core_1.OneToOneLink('Currency', DeliveryNotes, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', DeliveryNotes, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', DeliveryNotes, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', DeliveryNotes, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', DeliveryNotes, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', DeliveryNotes, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.FORMS_1099 = new core_1.OneToOneLink('Forms1099', DeliveryNotes, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', DeliveryNotes, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', DeliveryNotes, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.PROJECT_2 = new core_1.OneToOneLink('Project2', DeliveryNotes, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', DeliveryNotes, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.COUNTRY = new core_1.OneToOneLink('Country', DeliveryNotes, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', DeliveryNotes, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', DeliveryNotes, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.NF_MODEL = new core_1.OneToOneLink('NFModel', DeliveryNotes, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', DeliveryNotes, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', DeliveryNotes, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.BRANCH = new core_1.OneToOneLink('Branch', DeliveryNotes, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.DEPARTMENT = new core_1.OneToOneLink('Department', DeliveryNotes, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeliveryNotes.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', DeliveryNotes, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the DeliveryNotes entity.
     */
    DeliveryNotes._allFields = [
        DeliveryNotes.DOC_ENTRY,
        DeliveryNotes.DOC_NUM,
        DeliveryNotes.DOC_TYPE,
        DeliveryNotes.HAND_WRITTEN,
        DeliveryNotes.PRINTED,
        DeliveryNotes.DOC_DATE,
        DeliveryNotes.DOC_DUE_DATE,
        DeliveryNotes.CARD_CODE,
        DeliveryNotes.CARD_NAME,
        DeliveryNotes.ADDRESS,
        DeliveryNotes.NUM_AT_CARD,
        DeliveryNotes.DOC_TOTAL,
        DeliveryNotes.ATTACHMENT_ENTRY,
        DeliveryNotes.DOC_CURRENCY,
        DeliveryNotes.DOC_RATE,
        DeliveryNotes.REFERENCE_1,
        DeliveryNotes.REFERENCE_2,
        DeliveryNotes.COMMENTS,
        DeliveryNotes.JOURNAL_MEMO,
        DeliveryNotes.PAYMENT_GROUP_CODE,
        DeliveryNotes.DOC_TIME,
        DeliveryNotes.SALES_PERSON_CODE,
        DeliveryNotes.TRANSPORTATION_CODE,
        DeliveryNotes.CONFIRMED,
        DeliveryNotes.IMPORT_FILE_NUM,
        DeliveryNotes.SUMMERY_TYPE,
        DeliveryNotes.CONTACT_PERSON_CODE,
        DeliveryNotes.SHOW_SCN,
        DeliveryNotes.SERIES,
        DeliveryNotes.TAX_DATE,
        DeliveryNotes.PARTIAL_SUPPLY,
        DeliveryNotes.DOC_OBJECT_CODE,
        DeliveryNotes.SHIP_TO_CODE,
        DeliveryNotes.INDICATOR,
        DeliveryNotes.FEDERAL_TAX_ID,
        DeliveryNotes.DISCOUNT_PERCENT,
        DeliveryNotes.PAYMENT_REFERENCE,
        DeliveryNotes.CREATION_DATE,
        DeliveryNotes.UPDATE_DATE,
        DeliveryNotes.FINANCIAL_PERIOD,
        DeliveryNotes.TRANS_NUM,
        DeliveryNotes.VAT_SUM,
        DeliveryNotes.VAT_SUM_SYS,
        DeliveryNotes.VAT_SUM_FC,
        DeliveryNotes.NET_PROCEDURE,
        DeliveryNotes.DOC_TOTAL_FC,
        DeliveryNotes.DOC_TOTAL_SYS,
        DeliveryNotes.FORM_1099,
        DeliveryNotes.BOX_1099,
        DeliveryNotes.REVISION_PO,
        DeliveryNotes.REQURIED_DATE,
        DeliveryNotes.CANCEL_DATE,
        DeliveryNotes.BLOCK_DUNNING,
        DeliveryNotes.SUBMITTED,
        DeliveryNotes.SEGMENT,
        DeliveryNotes.PICK_STATUS,
        DeliveryNotes.PICK,
        DeliveryNotes.PAYMENT_METHOD,
        DeliveryNotes.PAYMENT_BLOCK,
        DeliveryNotes.PAYMENT_BLOCK_ENTRY,
        DeliveryNotes.CENTRAL_BANK_INDICATOR,
        DeliveryNotes.MAXIMUM_CASH_DISCOUNT,
        DeliveryNotes.RESERVE,
        DeliveryNotes.PROJECT,
        DeliveryNotes.EXEMPTION_VALIDITY_DATE_FROM,
        DeliveryNotes.EXEMPTION_VALIDITY_DATE_TO,
        DeliveryNotes.WARE_HOUSE_UPDATE_TYPE,
        DeliveryNotes.ROUNDING,
        DeliveryNotes.EXTERNAL_CORRECTED_DOC_NUM,
        DeliveryNotes.INTERNAL_CORRECTED_DOC_NUM,
        DeliveryNotes.NEXT_CORRECTING_DOCUMENT,
        DeliveryNotes.DEFERRED_TAX,
        DeliveryNotes.TAX_EXEMPTION_LETTER_NUM,
        DeliveryNotes.WT_APPLIED,
        DeliveryNotes.WT_APPLIED_FC,
        DeliveryNotes.BILL_OF_EXCHANGE_RESERVED,
        DeliveryNotes.AGENT_CODE,
        DeliveryNotes.WT_APPLIED_SC,
        DeliveryNotes.TOTAL_EQUALIZATION_TAX,
        DeliveryNotes.TOTAL_EQUALIZATION_TAX_FC,
        DeliveryNotes.TOTAL_EQUALIZATION_TAX_SC,
        DeliveryNotes.NUMBER_OF_INSTALLMENTS,
        DeliveryNotes.APPLY_TAX_ON_FIRST_INSTALLMENT,
        DeliveryNotes.WT_NON_SUBJECT_AMOUNT,
        DeliveryNotes.WT_NON_SUBJECT_AMOUNT_SC,
        DeliveryNotes.WT_NON_SUBJECT_AMOUNT_FC,
        DeliveryNotes.WT_EXEMPTED_AMOUNT,
        DeliveryNotes.WT_EXEMPTED_AMOUNT_SC,
        DeliveryNotes.WT_EXEMPTED_AMOUNT_FC,
        DeliveryNotes.BASE_AMOUNT,
        DeliveryNotes.BASE_AMOUNT_SC,
        DeliveryNotes.BASE_AMOUNT_FC,
        DeliveryNotes.WT_AMOUNT,
        DeliveryNotes.WT_AMOUNT_SC,
        DeliveryNotes.WT_AMOUNT_FC,
        DeliveryNotes.VAT_DATE,
        DeliveryNotes.DOCUMENTS_OWNER,
        DeliveryNotes.FOLIO_PREFIX_STRING,
        DeliveryNotes.FOLIO_NUMBER,
        DeliveryNotes.DOCUMENT_SUB_TYPE,
        DeliveryNotes.BP_CHANNEL_CODE,
        DeliveryNotes.BP_CHANNEL_CONTACT,
        DeliveryNotes.ADDRESS_2,
        DeliveryNotes.DOCUMENT_STATUS,
        DeliveryNotes.PERIOD_INDICATOR,
        DeliveryNotes.PAY_TO_CODE,
        DeliveryNotes.MANUAL_NUMBER,
        DeliveryNotes.USE_SHPD_GOODS_ACT,
        DeliveryNotes.IS_PAY_TO_BANK,
        DeliveryNotes.PAY_TO_BANK_COUNTRY,
        DeliveryNotes.PAY_TO_BANK_CODE,
        DeliveryNotes.PAY_TO_BANK_ACCOUNT_NO,
        DeliveryNotes.PAY_TO_BANK_BRANCH,
        DeliveryNotes.BPL_ID_ASSIGNED_TO_INVOICE,
        DeliveryNotes.DOWN_PAYMENT,
        DeliveryNotes.RESERVE_INVOICE,
        DeliveryNotes.LANGUAGE_CODE,
        DeliveryNotes.TRACKING_NUMBER,
        DeliveryNotes.PICK_REMARK,
        DeliveryNotes.CLOSING_DATE,
        DeliveryNotes.SEQUENCE_CODE,
        DeliveryNotes.SEQUENCE_SERIAL,
        DeliveryNotes.SERIES_STRING,
        DeliveryNotes.SUB_SERIES_STRING,
        DeliveryNotes.SEQUENCE_MODEL,
        DeliveryNotes.USE_CORRECTION_VAT_GROUP,
        DeliveryNotes.TOTAL_DISCOUNT,
        DeliveryNotes.DOWN_PAYMENT_AMOUNT,
        DeliveryNotes.DOWN_PAYMENT_PERCENTAGE,
        DeliveryNotes.DOWN_PAYMENT_TYPE,
        DeliveryNotes.DOWN_PAYMENT_AMOUNT_SC,
        DeliveryNotes.DOWN_PAYMENT_AMOUNT_FC,
        DeliveryNotes.VAT_PERCENT,
        DeliveryNotes.SERVICE_GROSS_PROFIT_PERCENT,
        DeliveryNotes.OPENING_REMARKS,
        DeliveryNotes.CLOSING_REMARKS,
        DeliveryNotes.ROUNDING_DIFF_AMOUNT,
        DeliveryNotes.ROUNDING_DIFF_AMOUNT_FC,
        DeliveryNotes.ROUNDING_DIFF_AMOUNT_SC,
        DeliveryNotes.CANCELLED,
        DeliveryNotes.SIGNATURE_INPUT_MESSAGE,
        DeliveryNotes.SIGNATURE_DIGEST,
        DeliveryNotes.CERTIFICATION_NUMBER,
        DeliveryNotes.PRIVATE_KEY_VERSION,
        DeliveryNotes.CONTROL_ACCOUNT,
        DeliveryNotes.INSURANCE_OPERATION_347,
        DeliveryNotes.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        DeliveryNotes.GTS_CHECKER,
        DeliveryNotes.GTS_PAYEE,
        DeliveryNotes.EXTRA_MONTH,
        DeliveryNotes.EXTRA_DAYS,
        DeliveryNotes.CASH_DISCOUNT_DATE_OFFSET,
        DeliveryNotes.START_FROM,
        DeliveryNotes.NTS_APPROVED,
        DeliveryNotes.E_TAX_WEB_SITE,
        DeliveryNotes.E_TAX_NUMBER,
        DeliveryNotes.NTS_APPROVED_NUMBER,
        DeliveryNotes.E_DOC_GENERATION_TYPE,
        DeliveryNotes.E_DOC_SERIES,
        DeliveryNotes.E_DOC_NUM,
        DeliveryNotes.E_DOC_EXPORT_FORMAT,
        DeliveryNotes.E_DOC_STATUS,
        DeliveryNotes.E_DOC_ERROR_CODE,
        DeliveryNotes.E_DOC_ERROR_MESSAGE,
        DeliveryNotes.DOWN_PAYMENT_STATUS,
        DeliveryNotes.GROUP_SERIES,
        DeliveryNotes.GROUP_NUMBER,
        DeliveryNotes.GROUP_HAND_WRITTEN,
        DeliveryNotes.REOPEN_ORIGINAL_DOCUMENT,
        DeliveryNotes.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        DeliveryNotes.CREATE_ONLINE_QUOTATION,
        DeliveryNotes.POS_EQUIPMENT_NUMBER,
        DeliveryNotes.POS_MANUFACTURER_SERIAL_NUMBER,
        DeliveryNotes.POS_CASHIER_NUMBER,
        DeliveryNotes.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        DeliveryNotes.CLOSING_OPTION,
        DeliveryNotes.SPECIFIED_CLOSING_DATE,
        DeliveryNotes.OPEN_FOR_LANDED_COSTS,
        DeliveryNotes.AUTHORIZATION_STATUS,
        DeliveryNotes.TOTAL_DISCOUNT_FC,
        DeliveryNotes.TOTAL_DISCOUNT_SC,
        DeliveryNotes.RELEVANT_TO_GTS,
        DeliveryNotes.BPL_NAME,
        DeliveryNotes.VAT_REG_NUM,
        DeliveryNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        DeliveryNotes.SUPPLIER,
        DeliveryNotes.RELEASER,
        DeliveryNotes.RECEIVER,
        DeliveryNotes.BLANKET_AGREEMENT_NUMBER,
        DeliveryNotes.IS_ALTERATION,
        DeliveryNotes.CANCEL_STATUS,
        DeliveryNotes.ASSET_VALUE_DATE,
        DeliveryNotes.REQUESTER,
        DeliveryNotes.REQUESTER_NAME,
        DeliveryNotes.REQUESTER_BRANCH,
        DeliveryNotes.REQUESTER_DEPARTMENT,
        DeliveryNotes.REQUESTER_EMAIL,
        DeliveryNotes.SEND_NOTIFICATION,
        DeliveryNotes.REQ_TYPE,
        DeliveryNotes.DOCUMENT_DELIVERY,
        DeliveryNotes.AUTHORIZATION_CODE,
        DeliveryNotes.START_DELIVERY_DATE,
        DeliveryNotes.START_DELIVERY_TIME,
        DeliveryNotes.END_DELIVERY_DATE,
        DeliveryNotes.END_DELIVERY_TIME,
        DeliveryNotes.VEHICLE_PLATE,
        DeliveryNotes.AT_DOCUMENT_TYPE,
        DeliveryNotes.ELEC_COMM_STATUS,
        DeliveryNotes.ELEC_COMM_MESSAGE,
        DeliveryNotes.REUSE_DOCUMENT_NUM,
        DeliveryNotes.REUSE_NOTA_FISCAL_NUM,
        DeliveryNotes.PRINT_SEPA_DIRECT,
        DeliveryNotes.FISCAL_DOC_NUM,
        DeliveryNotes.POS_DAILY_SUMMARY_NO,
        DeliveryNotes.POS_RECEIPT_NO,
        DeliveryNotes.POINT_OF_ISSUE_CODE,
        DeliveryNotes.LETTER,
        DeliveryNotes.FOLIO_NUMBER_FROM,
        DeliveryNotes.FOLIO_NUMBER_TO,
        DeliveryNotes.INTERIM_TYPE,
        DeliveryNotes.RELATED_TYPE,
        DeliveryNotes.RELATED_ENTRY,
        DeliveryNotes.DOCUMENT_TAX_ID,
        DeliveryNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        DeliveryNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        DeliveryNotes.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        DeliveryNotes.POS_CASH_REGISTER,
        DeliveryNotes.UPDATE_TIME,
        DeliveryNotes.PRICE_MODE,
        DeliveryNotes.DOWN_PAYMENT_TRASACTION_ID,
        DeliveryNotes.REVISION,
        DeliveryNotes.ORIGINAL_REF_NO,
        DeliveryNotes.ORIGINAL_REF_DATE,
        DeliveryNotes.GST_TRANSACTION_TYPE,
        DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_NO,
        DeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        DeliveryNotes.E_COMMERCE_OPERATOR,
        DeliveryNotes.E_COMMERCE_GSTIN,
        DeliveryNotes.TAX_INVOICE_NO,
        DeliveryNotes.TAX_INVOICE_DATE,
        DeliveryNotes.SHIP_FROM,
        DeliveryNotes.COMMISSION_TRADE,
        DeliveryNotes.COMMISSION_TRADE_RETURN,
        DeliveryNotes.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        DeliveryNotes.ISSUING_REASON,
        DeliveryNotes.DOCUMENT_APPROVAL_REQUESTS,
        DeliveryNotes.DOCUMENT_LINES,
        DeliveryNotes.DOCUMENT_ADDITIONAL_EXPENSES,
        DeliveryNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        DeliveryNotes.WITHHOLDING_TAX_DATA_COLLECTION,
        DeliveryNotes.DOCUMENT_PACKAGES,
        DeliveryNotes.DOCUMENT_SPECIAL_LINES,
        DeliveryNotes.DOCUMENT_INSTALLMENTS,
        DeliveryNotes.DOWN_PAYMENTS_TO_DRAW,
        DeliveryNotes.TAX_EXTENSION,
        DeliveryNotes.ADDRESS_EXTENSION,
        DeliveryNotes.SOI_WIZARD_ID,
        DeliveryNotes.BUSINESS_PARTNER,
        DeliveryNotes.CURRENCY,
        DeliveryNotes.PAYMENT_TERMS_TYPE,
        DeliveryNotes.SALES_PERSON,
        DeliveryNotes.SHIPPING_TYPE,
        DeliveryNotes.FACTORING_INDICATOR,
        DeliveryNotes.JOURNAL_ENTRY,
        DeliveryNotes.FORMS_1099,
        DeliveryNotes.WIZARD_PAYMENT_METHOD,
        DeliveryNotes.PAYMENT_BLOCK_2,
        DeliveryNotes.PROJECT_2,
        DeliveryNotes.EMPLOYEE_INFO,
        DeliveryNotes.COUNTRY,
        DeliveryNotes.BUSINESS_PLACE,
        DeliveryNotes.USER_LANGUAGE,
        DeliveryNotes.NF_MODEL,
        DeliveryNotes.CHART_OF_ACCOUNT,
        DeliveryNotes.TAX_WEB_SITE,
        DeliveryNotes.BRANCH,
        DeliveryNotes.DEPARTMENT,
        DeliveryNotes.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    DeliveryNotes.ALL_FIELDS = new core_1.AllFields('*', DeliveryNotes);
    /**
     * All key fields of the DeliveryNotes entity.
     */
    DeliveryNotes._keyFields = [DeliveryNotes.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property DeliveryNotes.
     */
    DeliveryNotes._keys = DeliveryNotes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DeliveryNotes = exports.DeliveryNotes || (exports.DeliveryNotes = {}));
exports.DeliveryNotes = DeliveryNotes;
//# sourceMappingURL=DeliveryNotes.js.map