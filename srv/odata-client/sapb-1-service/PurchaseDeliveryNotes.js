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
exports.PurchaseDeliveryNotes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseDeliveryNotesRequestBuilder_1 = require("./PurchaseDeliveryNotesRequestBuilder");
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
 * This class represents the entity "PurchaseDeliveryNotes" of service "SAPB1".
 */
var PurchaseDeliveryNotes = /** @class */ (function (_super) {
    __extends(PurchaseDeliveryNotes, _super);
    function PurchaseDeliveryNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PurchaseDeliveryNotes`.
     * @returns A builder that constructs instances of entity type `PurchaseDeliveryNotes`.
     */
    PurchaseDeliveryNotes.builder = function () {
        return core_1.EntityV4.entityBuilder(PurchaseDeliveryNotes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseDeliveryNotes` entity type.
     * @returns A `PurchaseDeliveryNotes` request builder.
     */
    PurchaseDeliveryNotes.requestBuilder = function () {
        return new PurchaseDeliveryNotesRequestBuilder_1.PurchaseDeliveryNotesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseDeliveryNotes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseDeliveryNotes`.
     */
    PurchaseDeliveryNotes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PurchaseDeliveryNotes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseDeliveryNotes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseDeliveryNotes.
     */
    PurchaseDeliveryNotes._entityName = 'PurchaseDeliveryNotes';
    /**
     * Default url path for the according service.
     */
    PurchaseDeliveryNotes._defaultServicePath = '/b1s/v2/';
    return PurchaseDeliveryNotes;
}(core_1.EntityV4));
exports.PurchaseDeliveryNotes = PurchaseDeliveryNotes;
var BusinessPartners_1 = require("./BusinessPartners");
var Currencies_1 = require("./Currencies");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
var SalesPersons_1 = require("./SalesPersons");
var ShippingTypes_1 = require("./ShippingTypes");
var LandedCosts_1 = require("./LandedCosts");
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
(function (PurchaseDeliveryNotes) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_ENTRY = new core_1.NumberField('DocEntry', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_NUM = new core_1.NumberField('DocNum', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_TYPE = new core_1.EnumField('DocType', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.HAND_WRITTEN = new core_1.EnumField('HandWritten', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PRINTED = new core_1.EnumField('Printed', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_DATE = new core_1.DateField('DocDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_DUE_DATE = new core_1.DateField('DocDueDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CARD_CODE = new core_1.StringField('CardCode', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CARD_NAME = new core_1.StringField('CardName', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ADDRESS = new core_1.StringField('Address', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.NUM_AT_CARD = new core_1.StringField('NumAtCard', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_TOTAL = new core_1.NumberField('DocTotal', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_CURRENCY = new core_1.StringField('DocCurrency', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_RATE = new core_1.NumberField('DocRate', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REFERENCE_1 = new core_1.StringField('Reference1', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REFERENCE_2 = new core_1.StringField('Reference2', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.COMMENTS = new core_1.StringField('Comments', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.JOURNAL_MEMO = new core_1.StringField('JournalMemo', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_TIME = new core_1.TimeField('DocTime', PurchaseDeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CONFIRMED = new core_1.EnumField('Confirmed', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SUMMERY_TYPE = new core_1.EnumField('SummeryType', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SHOW_SCN = new core_1.EnumField('ShowSCN', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SERIES = new core_1.NumberField('Series', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TAX_DATE = new core_1.DateField('TaxDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SHIP_TO_CODE = new core_1.StringField('ShipToCode', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.INDICATOR = new core_1.StringField('Indicator', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CREATION_DATE = new core_1.DateField('CreationDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.UPDATE_DATE = new core_1.DateField('UpdateDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TRANS_NUM = new core_1.NumberField('TransNum', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.VAT_SUM = new core_1.NumberField('VatSum', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.VAT_SUM_FC = new core_1.NumberField('VatSumFc', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.NET_PROCEDURE = new core_1.EnumField('NetProcedure', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FORM_1099 = new core_1.NumberField('Form1099', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BOX_1099 = new core_1.StringField('Box1099', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REVISION_PO = new core_1.EnumField('RevisionPo', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REQURIED_DATE = new core_1.DateField('RequriedDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CANCEL_DATE = new core_1.DateField('CancelDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SUBMITTED = new core_1.EnumField('Submitted', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SEGMENT = new core_1.NumberField('Segment', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PICK_STATUS = new core_1.EnumField('PickStatus', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PICK = new core_1.EnumField('Pick', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.RESERVE = new core_1.EnumField('Reserve', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PROJECT = new core_1.StringField('Project', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ROUNDING = new core_1.EnumField('Rounding', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DEFERRED_TAX = new core_1.EnumField('DeferredTax', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_APPLIED = new core_1.NumberField('WTApplied', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.AGENT_CODE = new core_1.StringField('AgentCode', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BASE_AMOUNT = new core_1.NumberField('BaseAmount', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_AMOUNT = new core_1.NumberField('WTAmount', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.VAT_DATE = new core_1.DateField('VatDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ADDRESS_2 = new core_1.StringField('Address2', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAY_TO_CODE = new core_1.StringField('PayToCode', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.MANUAL_NUMBER = new core_1.StringField('ManualNumber', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOWN_PAYMENT = new core_1.NumberField('DownPayment', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PICK_REMARK = new core_1.StringField('PickRemark', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CLOSING_DATE = new core_1.DateField('ClosingDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SERIES_STRING = new core_1.StringField('SeriesString', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.VAT_PERCENT = new core_1.NumberField('VatPercent', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CANCELLED = new core_1.EnumField('Cancelled', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.GTS_CHECKER = new core_1.NumberField('GTSChecker', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.GTS_PAYEE = new core_1.NumberField('GTSPayee', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.EXTRA_DAYS = new core_1.NumberField('ExtraDays', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.START_FROM = new core_1.EnumField('StartFrom', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.NTS_APPROVED = new core_1.EnumField('NTSApproved', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_DOC_SERIES = new core_1.NumberField('EDocSeries', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_DOC_NUM = new core_1.StringField('EDocNum', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_DOC_STATUS = new core_1.EnumField('EDocStatus', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.GROUP_SERIES = new core_1.NumberField('GroupSeries', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.GROUP_NUMBER = new core_1.NumberField('GroupNumber', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CLOSING_OPTION = new core_1.EnumField('ClosingOption', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', PurchaseDeliveryNotes, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BPL_NAME = new core_1.StringField('BPLName', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.VAT_REG_NUM = new core_1.StringField('VATRegNum', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SUPPLIER = new core_1.StringField('Supplier', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.RELEASER = new core_1.NumberField('Releaser', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.RECEIVER = new core_1.NumberField('Receiver', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.IS_ALTERATION = new core_1.EnumField('IsAlteration', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CANCEL_STATUS = new core_1.EnumField('CancelStatus', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REQUESTER = new core_1.StringField('Requester', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REQUESTER_NAME = new core_1.StringField('RequesterName', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REQ_TYPE = new core_1.NumberField('ReqType', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', PurchaseDeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', PurchaseDeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.LETTER = new core_1.EnumField('Letter', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.INTERIM_TYPE = new core_1.EnumField('InterimType', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.RELATED_TYPE = new core_1.NumberField('RelatedType', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.UPDATE_TIME = new core_1.TimeField('UpdateTime', PurchaseDeliveryNotes, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PRICE_MODE = new core_1.EnumField('PriceMode', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.REVISION = new core_1.EnumField('Revision', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', PurchaseDeliveryNotes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SHIP_FROM = new core_1.StringField('ShipFrom', PurchaseDeliveryNotes, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ISSUING_REASON = new core_1.NumberField('IssuingReason', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', PurchaseDeliveryNotes, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', PurchaseDeliveryNotes, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', PurchaseDeliveryNotes, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseDeliveryNotes, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', PurchaseDeliveryNotes, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', PurchaseDeliveryNotes, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', PurchaseDeliveryNotes, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', PurchaseDeliveryNotes, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', PurchaseDeliveryNotes, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseDeliveryNotes);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', PurchaseDeliveryNotes, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', PurchaseDeliveryNotes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CURRENCY = new core_1.OneToOneLink('Currency', PurchaseDeliveryNotes, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', PurchaseDeliveryNotes, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', PurchaseDeliveryNotes, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', PurchaseDeliveryNotes, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[landedCost]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.LANDED_COST = new core_1.OneToOneLink('LandedCost', PurchaseDeliveryNotes, LandedCosts_1.LandedCosts);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', PurchaseDeliveryNotes, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', PurchaseDeliveryNotes, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.FORMS_1099 = new core_1.OneToOneLink('Forms1099', PurchaseDeliveryNotes, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', PurchaseDeliveryNotes, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', PurchaseDeliveryNotes, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.PROJECT_2 = new core_1.OneToOneLink('Project2', PurchaseDeliveryNotes, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', PurchaseDeliveryNotes, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.COUNTRY = new core_1.OneToOneLink('Country', PurchaseDeliveryNotes, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', PurchaseDeliveryNotes, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', PurchaseDeliveryNotes, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.NF_MODEL = new core_1.OneToOneLink('NFModel', PurchaseDeliveryNotes, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', PurchaseDeliveryNotes, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', PurchaseDeliveryNotes, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.BRANCH = new core_1.OneToOneLink('Branch', PurchaseDeliveryNotes, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.DEPARTMENT = new core_1.OneToOneLink('Department', PurchaseDeliveryNotes, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseDeliveryNotes.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', PurchaseDeliveryNotes, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseDeliveryNotes entity.
     */
    PurchaseDeliveryNotes._allFields = [
        PurchaseDeliveryNotes.DOC_ENTRY,
        PurchaseDeliveryNotes.DOC_NUM,
        PurchaseDeliveryNotes.DOC_TYPE,
        PurchaseDeliveryNotes.HAND_WRITTEN,
        PurchaseDeliveryNotes.PRINTED,
        PurchaseDeliveryNotes.DOC_DATE,
        PurchaseDeliveryNotes.DOC_DUE_DATE,
        PurchaseDeliveryNotes.CARD_CODE,
        PurchaseDeliveryNotes.CARD_NAME,
        PurchaseDeliveryNotes.ADDRESS,
        PurchaseDeliveryNotes.NUM_AT_CARD,
        PurchaseDeliveryNotes.DOC_TOTAL,
        PurchaseDeliveryNotes.ATTACHMENT_ENTRY,
        PurchaseDeliveryNotes.DOC_CURRENCY,
        PurchaseDeliveryNotes.DOC_RATE,
        PurchaseDeliveryNotes.REFERENCE_1,
        PurchaseDeliveryNotes.REFERENCE_2,
        PurchaseDeliveryNotes.COMMENTS,
        PurchaseDeliveryNotes.JOURNAL_MEMO,
        PurchaseDeliveryNotes.PAYMENT_GROUP_CODE,
        PurchaseDeliveryNotes.DOC_TIME,
        PurchaseDeliveryNotes.SALES_PERSON_CODE,
        PurchaseDeliveryNotes.TRANSPORTATION_CODE,
        PurchaseDeliveryNotes.CONFIRMED,
        PurchaseDeliveryNotes.IMPORT_FILE_NUM,
        PurchaseDeliveryNotes.SUMMERY_TYPE,
        PurchaseDeliveryNotes.CONTACT_PERSON_CODE,
        PurchaseDeliveryNotes.SHOW_SCN,
        PurchaseDeliveryNotes.SERIES,
        PurchaseDeliveryNotes.TAX_DATE,
        PurchaseDeliveryNotes.PARTIAL_SUPPLY,
        PurchaseDeliveryNotes.DOC_OBJECT_CODE,
        PurchaseDeliveryNotes.SHIP_TO_CODE,
        PurchaseDeliveryNotes.INDICATOR,
        PurchaseDeliveryNotes.FEDERAL_TAX_ID,
        PurchaseDeliveryNotes.DISCOUNT_PERCENT,
        PurchaseDeliveryNotes.PAYMENT_REFERENCE,
        PurchaseDeliveryNotes.CREATION_DATE,
        PurchaseDeliveryNotes.UPDATE_DATE,
        PurchaseDeliveryNotes.FINANCIAL_PERIOD,
        PurchaseDeliveryNotes.TRANS_NUM,
        PurchaseDeliveryNotes.VAT_SUM,
        PurchaseDeliveryNotes.VAT_SUM_SYS,
        PurchaseDeliveryNotes.VAT_SUM_FC,
        PurchaseDeliveryNotes.NET_PROCEDURE,
        PurchaseDeliveryNotes.DOC_TOTAL_FC,
        PurchaseDeliveryNotes.DOC_TOTAL_SYS,
        PurchaseDeliveryNotes.FORM_1099,
        PurchaseDeliveryNotes.BOX_1099,
        PurchaseDeliveryNotes.REVISION_PO,
        PurchaseDeliveryNotes.REQURIED_DATE,
        PurchaseDeliveryNotes.CANCEL_DATE,
        PurchaseDeliveryNotes.BLOCK_DUNNING,
        PurchaseDeliveryNotes.SUBMITTED,
        PurchaseDeliveryNotes.SEGMENT,
        PurchaseDeliveryNotes.PICK_STATUS,
        PurchaseDeliveryNotes.PICK,
        PurchaseDeliveryNotes.PAYMENT_METHOD,
        PurchaseDeliveryNotes.PAYMENT_BLOCK,
        PurchaseDeliveryNotes.PAYMENT_BLOCK_ENTRY,
        PurchaseDeliveryNotes.CENTRAL_BANK_INDICATOR,
        PurchaseDeliveryNotes.MAXIMUM_CASH_DISCOUNT,
        PurchaseDeliveryNotes.RESERVE,
        PurchaseDeliveryNotes.PROJECT,
        PurchaseDeliveryNotes.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseDeliveryNotes.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseDeliveryNotes.WARE_HOUSE_UPDATE_TYPE,
        PurchaseDeliveryNotes.ROUNDING,
        PurchaseDeliveryNotes.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseDeliveryNotes.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseDeliveryNotes.NEXT_CORRECTING_DOCUMENT,
        PurchaseDeliveryNotes.DEFERRED_TAX,
        PurchaseDeliveryNotes.TAX_EXEMPTION_LETTER_NUM,
        PurchaseDeliveryNotes.WT_APPLIED,
        PurchaseDeliveryNotes.WT_APPLIED_FC,
        PurchaseDeliveryNotes.BILL_OF_EXCHANGE_RESERVED,
        PurchaseDeliveryNotes.AGENT_CODE,
        PurchaseDeliveryNotes.WT_APPLIED_SC,
        PurchaseDeliveryNotes.TOTAL_EQUALIZATION_TAX,
        PurchaseDeliveryNotes.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseDeliveryNotes.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseDeliveryNotes.NUMBER_OF_INSTALLMENTS,
        PurchaseDeliveryNotes.APPLY_TAX_ON_FIRST_INSTALLMENT,
        PurchaseDeliveryNotes.WT_NON_SUBJECT_AMOUNT,
        PurchaseDeliveryNotes.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseDeliveryNotes.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseDeliveryNotes.WT_EXEMPTED_AMOUNT,
        PurchaseDeliveryNotes.WT_EXEMPTED_AMOUNT_SC,
        PurchaseDeliveryNotes.WT_EXEMPTED_AMOUNT_FC,
        PurchaseDeliveryNotes.BASE_AMOUNT,
        PurchaseDeliveryNotes.BASE_AMOUNT_SC,
        PurchaseDeliveryNotes.BASE_AMOUNT_FC,
        PurchaseDeliveryNotes.WT_AMOUNT,
        PurchaseDeliveryNotes.WT_AMOUNT_SC,
        PurchaseDeliveryNotes.WT_AMOUNT_FC,
        PurchaseDeliveryNotes.VAT_DATE,
        PurchaseDeliveryNotes.DOCUMENTS_OWNER,
        PurchaseDeliveryNotes.FOLIO_PREFIX_STRING,
        PurchaseDeliveryNotes.FOLIO_NUMBER,
        PurchaseDeliveryNotes.DOCUMENT_SUB_TYPE,
        PurchaseDeliveryNotes.BP_CHANNEL_CODE,
        PurchaseDeliveryNotes.BP_CHANNEL_CONTACT,
        PurchaseDeliveryNotes.ADDRESS_2,
        PurchaseDeliveryNotes.DOCUMENT_STATUS,
        PurchaseDeliveryNotes.PERIOD_INDICATOR,
        PurchaseDeliveryNotes.PAY_TO_CODE,
        PurchaseDeliveryNotes.MANUAL_NUMBER,
        PurchaseDeliveryNotes.USE_SHPD_GOODS_ACT,
        PurchaseDeliveryNotes.IS_PAY_TO_BANK,
        PurchaseDeliveryNotes.PAY_TO_BANK_COUNTRY,
        PurchaseDeliveryNotes.PAY_TO_BANK_CODE,
        PurchaseDeliveryNotes.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseDeliveryNotes.PAY_TO_BANK_BRANCH,
        PurchaseDeliveryNotes.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseDeliveryNotes.DOWN_PAYMENT,
        PurchaseDeliveryNotes.RESERVE_INVOICE,
        PurchaseDeliveryNotes.LANGUAGE_CODE,
        PurchaseDeliveryNotes.TRACKING_NUMBER,
        PurchaseDeliveryNotes.PICK_REMARK,
        PurchaseDeliveryNotes.CLOSING_DATE,
        PurchaseDeliveryNotes.SEQUENCE_CODE,
        PurchaseDeliveryNotes.SEQUENCE_SERIAL,
        PurchaseDeliveryNotes.SERIES_STRING,
        PurchaseDeliveryNotes.SUB_SERIES_STRING,
        PurchaseDeliveryNotes.SEQUENCE_MODEL,
        PurchaseDeliveryNotes.USE_CORRECTION_VAT_GROUP,
        PurchaseDeliveryNotes.TOTAL_DISCOUNT,
        PurchaseDeliveryNotes.DOWN_PAYMENT_AMOUNT,
        PurchaseDeliveryNotes.DOWN_PAYMENT_PERCENTAGE,
        PurchaseDeliveryNotes.DOWN_PAYMENT_TYPE,
        PurchaseDeliveryNotes.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseDeliveryNotes.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseDeliveryNotes.VAT_PERCENT,
        PurchaseDeliveryNotes.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseDeliveryNotes.OPENING_REMARKS,
        PurchaseDeliveryNotes.CLOSING_REMARKS,
        PurchaseDeliveryNotes.ROUNDING_DIFF_AMOUNT,
        PurchaseDeliveryNotes.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseDeliveryNotes.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseDeliveryNotes.CANCELLED,
        PurchaseDeliveryNotes.SIGNATURE_INPUT_MESSAGE,
        PurchaseDeliveryNotes.SIGNATURE_DIGEST,
        PurchaseDeliveryNotes.CERTIFICATION_NUMBER,
        PurchaseDeliveryNotes.PRIVATE_KEY_VERSION,
        PurchaseDeliveryNotes.CONTROL_ACCOUNT,
        PurchaseDeliveryNotes.INSURANCE_OPERATION_347,
        PurchaseDeliveryNotes.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        PurchaseDeliveryNotes.GTS_CHECKER,
        PurchaseDeliveryNotes.GTS_PAYEE,
        PurchaseDeliveryNotes.EXTRA_MONTH,
        PurchaseDeliveryNotes.EXTRA_DAYS,
        PurchaseDeliveryNotes.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseDeliveryNotes.START_FROM,
        PurchaseDeliveryNotes.NTS_APPROVED,
        PurchaseDeliveryNotes.E_TAX_WEB_SITE,
        PurchaseDeliveryNotes.E_TAX_NUMBER,
        PurchaseDeliveryNotes.NTS_APPROVED_NUMBER,
        PurchaseDeliveryNotes.E_DOC_GENERATION_TYPE,
        PurchaseDeliveryNotes.E_DOC_SERIES,
        PurchaseDeliveryNotes.E_DOC_NUM,
        PurchaseDeliveryNotes.E_DOC_EXPORT_FORMAT,
        PurchaseDeliveryNotes.E_DOC_STATUS,
        PurchaseDeliveryNotes.E_DOC_ERROR_CODE,
        PurchaseDeliveryNotes.E_DOC_ERROR_MESSAGE,
        PurchaseDeliveryNotes.DOWN_PAYMENT_STATUS,
        PurchaseDeliveryNotes.GROUP_SERIES,
        PurchaseDeliveryNotes.GROUP_NUMBER,
        PurchaseDeliveryNotes.GROUP_HAND_WRITTEN,
        PurchaseDeliveryNotes.REOPEN_ORIGINAL_DOCUMENT,
        PurchaseDeliveryNotes.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        PurchaseDeliveryNotes.CREATE_ONLINE_QUOTATION,
        PurchaseDeliveryNotes.POS_EQUIPMENT_NUMBER,
        PurchaseDeliveryNotes.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseDeliveryNotes.POS_CASHIER_NUMBER,
        PurchaseDeliveryNotes.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        PurchaseDeliveryNotes.CLOSING_OPTION,
        PurchaseDeliveryNotes.SPECIFIED_CLOSING_DATE,
        PurchaseDeliveryNotes.OPEN_FOR_LANDED_COSTS,
        PurchaseDeliveryNotes.AUTHORIZATION_STATUS,
        PurchaseDeliveryNotes.TOTAL_DISCOUNT_FC,
        PurchaseDeliveryNotes.TOTAL_DISCOUNT_SC,
        PurchaseDeliveryNotes.RELEVANT_TO_GTS,
        PurchaseDeliveryNotes.BPL_NAME,
        PurchaseDeliveryNotes.VAT_REG_NUM,
        PurchaseDeliveryNotes.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseDeliveryNotes.SUPPLIER,
        PurchaseDeliveryNotes.RELEASER,
        PurchaseDeliveryNotes.RECEIVER,
        PurchaseDeliveryNotes.BLANKET_AGREEMENT_NUMBER,
        PurchaseDeliveryNotes.IS_ALTERATION,
        PurchaseDeliveryNotes.CANCEL_STATUS,
        PurchaseDeliveryNotes.ASSET_VALUE_DATE,
        PurchaseDeliveryNotes.REQUESTER,
        PurchaseDeliveryNotes.REQUESTER_NAME,
        PurchaseDeliveryNotes.REQUESTER_BRANCH,
        PurchaseDeliveryNotes.REQUESTER_DEPARTMENT,
        PurchaseDeliveryNotes.REQUESTER_EMAIL,
        PurchaseDeliveryNotes.SEND_NOTIFICATION,
        PurchaseDeliveryNotes.REQ_TYPE,
        PurchaseDeliveryNotes.DOCUMENT_DELIVERY,
        PurchaseDeliveryNotes.AUTHORIZATION_CODE,
        PurchaseDeliveryNotes.START_DELIVERY_DATE,
        PurchaseDeliveryNotes.START_DELIVERY_TIME,
        PurchaseDeliveryNotes.END_DELIVERY_DATE,
        PurchaseDeliveryNotes.END_DELIVERY_TIME,
        PurchaseDeliveryNotes.VEHICLE_PLATE,
        PurchaseDeliveryNotes.AT_DOCUMENT_TYPE,
        PurchaseDeliveryNotes.ELEC_COMM_STATUS,
        PurchaseDeliveryNotes.ELEC_COMM_MESSAGE,
        PurchaseDeliveryNotes.REUSE_DOCUMENT_NUM,
        PurchaseDeliveryNotes.REUSE_NOTA_FISCAL_NUM,
        PurchaseDeliveryNotes.PRINT_SEPA_DIRECT,
        PurchaseDeliveryNotes.FISCAL_DOC_NUM,
        PurchaseDeliveryNotes.POS_DAILY_SUMMARY_NO,
        PurchaseDeliveryNotes.POS_RECEIPT_NO,
        PurchaseDeliveryNotes.POINT_OF_ISSUE_CODE,
        PurchaseDeliveryNotes.LETTER,
        PurchaseDeliveryNotes.FOLIO_NUMBER_FROM,
        PurchaseDeliveryNotes.FOLIO_NUMBER_TO,
        PurchaseDeliveryNotes.INTERIM_TYPE,
        PurchaseDeliveryNotes.RELATED_TYPE,
        PurchaseDeliveryNotes.RELATED_ENTRY,
        PurchaseDeliveryNotes.DOCUMENT_TAX_ID,
        PurchaseDeliveryNotes.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseDeliveryNotes.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseDeliveryNotes.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        PurchaseDeliveryNotes.POS_CASH_REGISTER,
        PurchaseDeliveryNotes.UPDATE_TIME,
        PurchaseDeliveryNotes.PRICE_MODE,
        PurchaseDeliveryNotes.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseDeliveryNotes.REVISION,
        PurchaseDeliveryNotes.ORIGINAL_REF_NO,
        PurchaseDeliveryNotes.ORIGINAL_REF_DATE,
        PurchaseDeliveryNotes.GST_TRANSACTION_TYPE,
        PurchaseDeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseDeliveryNotes.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseDeliveryNotes.E_COMMERCE_OPERATOR,
        PurchaseDeliveryNotes.E_COMMERCE_GSTIN,
        PurchaseDeliveryNotes.TAX_INVOICE_NO,
        PurchaseDeliveryNotes.TAX_INVOICE_DATE,
        PurchaseDeliveryNotes.SHIP_FROM,
        PurchaseDeliveryNotes.COMMISSION_TRADE,
        PurchaseDeliveryNotes.COMMISSION_TRADE_RETURN,
        PurchaseDeliveryNotes.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        PurchaseDeliveryNotes.ISSUING_REASON,
        PurchaseDeliveryNotes.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseDeliveryNotes.DOCUMENT_LINES,
        PurchaseDeliveryNotes.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseDeliveryNotes.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseDeliveryNotes.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseDeliveryNotes.DOCUMENT_PACKAGES,
        PurchaseDeliveryNotes.DOCUMENT_SPECIAL_LINES,
        PurchaseDeliveryNotes.DOCUMENT_INSTALLMENTS,
        PurchaseDeliveryNotes.DOWN_PAYMENTS_TO_DRAW,
        PurchaseDeliveryNotes.TAX_EXTENSION,
        PurchaseDeliveryNotes.ADDRESS_EXTENSION,
        PurchaseDeliveryNotes.SOI_WIZARD_ID,
        PurchaseDeliveryNotes.BUSINESS_PARTNER,
        PurchaseDeliveryNotes.CURRENCY,
        PurchaseDeliveryNotes.PAYMENT_TERMS_TYPE,
        PurchaseDeliveryNotes.SALES_PERSON,
        PurchaseDeliveryNotes.SHIPPING_TYPE,
        PurchaseDeliveryNotes.LANDED_COST,
        PurchaseDeliveryNotes.FACTORING_INDICATOR,
        PurchaseDeliveryNotes.JOURNAL_ENTRY,
        PurchaseDeliveryNotes.FORMS_1099,
        PurchaseDeliveryNotes.WIZARD_PAYMENT_METHOD,
        PurchaseDeliveryNotes.PAYMENT_BLOCK_2,
        PurchaseDeliveryNotes.PROJECT_2,
        PurchaseDeliveryNotes.EMPLOYEE_INFO,
        PurchaseDeliveryNotes.COUNTRY,
        PurchaseDeliveryNotes.BUSINESS_PLACE,
        PurchaseDeliveryNotes.USER_LANGUAGE,
        PurchaseDeliveryNotes.NF_MODEL,
        PurchaseDeliveryNotes.CHART_OF_ACCOUNT,
        PurchaseDeliveryNotes.TAX_WEB_SITE,
        PurchaseDeliveryNotes.BRANCH,
        PurchaseDeliveryNotes.DEPARTMENT,
        PurchaseDeliveryNotes.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseDeliveryNotes.ALL_FIELDS = new core_1.AllFields('*', PurchaseDeliveryNotes);
    /**
     * All key fields of the PurchaseDeliveryNotes entity.
     */
    PurchaseDeliveryNotes._keyFields = [PurchaseDeliveryNotes.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseDeliveryNotes.
     */
    PurchaseDeliveryNotes._keys = PurchaseDeliveryNotes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseDeliveryNotes = exports.PurchaseDeliveryNotes || (exports.PurchaseDeliveryNotes = {}));
exports.PurchaseDeliveryNotes = PurchaseDeliveryNotes;
//# sourceMappingURL=PurchaseDeliveryNotes.js.map