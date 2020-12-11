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
exports.PurchaseRequests = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PurchaseRequestsRequestBuilder_1 = require("./PurchaseRequestsRequestBuilder");
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
 * This class represents the entity "PurchaseRequests" of service "SAPB1".
 */
var PurchaseRequests = /** @class */ (function (_super) {
    __extends(PurchaseRequests, _super);
    function PurchaseRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PurchaseRequests`.
     * @returns A builder that constructs instances of entity type `PurchaseRequests`.
     */
    PurchaseRequests.builder = function () {
        return core_1.EntityV4.entityBuilder(PurchaseRequests);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseRequests` entity type.
     * @returns A `PurchaseRequests` request builder.
     */
    PurchaseRequests.requestBuilder = function () {
        return new PurchaseRequestsRequestBuilder_1.PurchaseRequestsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseRequests`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseRequests`.
     */
    PurchaseRequests.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PurchaseRequests);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PurchaseRequests.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PurchaseRequests.
     */
    PurchaseRequests._entityName = 'PurchaseRequests';
    /**
     * Default url path for the according service.
     */
    PurchaseRequests._defaultServicePath = '/b1s/v2/';
    return PurchaseRequests;
}(core_1.EntityV4));
exports.PurchaseRequests = PurchaseRequests;
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
(function (PurchaseRequests) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_ENTRY = new core_1.NumberField('DocEntry', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_NUM = new core_1.NumberField('DocNum', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_TYPE = new core_1.EnumField('DocType', PurchaseRequests);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.HAND_WRITTEN = new core_1.EnumField('HandWritten', PurchaseRequests);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PRINTED = new core_1.EnumField('Printed', PurchaseRequests);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_DATE = new core_1.DateField('DocDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_DUE_DATE = new core_1.DateField('DocDueDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CARD_CODE = new core_1.StringField('CardCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CARD_NAME = new core_1.StringField('CardName', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ADDRESS = new core_1.StringField('Address', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NUM_AT_CARD = new core_1.StringField('NumAtCard', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_TOTAL = new core_1.NumberField('DocTotal', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_CURRENCY = new core_1.StringField('DocCurrency', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_RATE = new core_1.NumberField('DocRate', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REFERENCE_1 = new core_1.StringField('Reference1', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REFERENCE_2 = new core_1.StringField('Reference2', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.COMMENTS = new core_1.StringField('Comments', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.JOURNAL_MEMO = new core_1.StringField('JournalMemo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_TIME = new core_1.TimeField('DocTime', PurchaseRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CONFIRMED = new core_1.EnumField('Confirmed', PurchaseRequests);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SUMMERY_TYPE = new core_1.EnumField('SummeryType', PurchaseRequests);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SHOW_SCN = new core_1.EnumField('ShowSCN', PurchaseRequests);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SERIES = new core_1.NumberField('Series', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_DATE = new core_1.DateField('TaxDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', PurchaseRequests);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', PurchaseRequests);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SHIP_TO_CODE = new core_1.StringField('ShipToCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.INDICATOR = new core_1.StringField('Indicator', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CREATION_DATE = new core_1.DateField('CreationDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.UPDATE_DATE = new core_1.DateField('UpdateDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TRANS_NUM = new core_1.NumberField('TransNum', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_SUM = new core_1.NumberField('VatSum', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_SUM_FC = new core_1.NumberField('VatSumFc', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NET_PROCEDURE = new core_1.EnumField('NetProcedure', PurchaseRequests);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FORM_1099 = new core_1.NumberField('Form1099', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BOX_1099 = new core_1.StringField('Box1099', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REVISION_PO = new core_1.EnumField('RevisionPo', PurchaseRequests);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQURIED_DATE = new core_1.DateField('RequriedDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CANCEL_DATE = new core_1.DateField('CancelDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', PurchaseRequests);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SUBMITTED = new core_1.EnumField('Submitted', PurchaseRequests);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SEGMENT = new core_1.NumberField('Segment', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PICK_STATUS = new core_1.EnumField('PickStatus', PurchaseRequests);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PICK = new core_1.EnumField('Pick', PurchaseRequests);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', PurchaseRequests);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', PurchaseRequests);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RESERVE = new core_1.EnumField('Reserve', PurchaseRequests);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PROJECT = new core_1.StringField('Project', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', PurchaseRequests);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ROUNDING = new core_1.EnumField('Rounding', PurchaseRequests);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DEFERRED_TAX = new core_1.EnumField('DeferredTax', PurchaseRequests);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_APPLIED = new core_1.NumberField('WTApplied', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', PurchaseRequests);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.AGENT_CODE = new core_1.StringField('AgentCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', PurchaseRequests);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BASE_AMOUNT = new core_1.NumberField('BaseAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_AMOUNT = new core_1.NumberField('WTAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_DATE = new core_1.DateField('VatDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', PurchaseRequests);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ADDRESS_2 = new core_1.StringField('Address2', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', PurchaseRequests);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_CODE = new core_1.StringField('PayToCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.MANUAL_NUMBER = new core_1.StringField('ManualNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', PurchaseRequests);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', PurchaseRequests);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT = new core_1.NumberField('DownPayment', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', PurchaseRequests);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PICK_REMARK = new core_1.StringField('PickRemark', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CLOSING_DATE = new core_1.DateField('ClosingDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SERIES_STRING = new core_1.StringField('SeriesString', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', PurchaseRequests);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', PurchaseRequests);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_PERCENT = new core_1.NumberField('VatPercent', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CANCELLED = new core_1.EnumField('Cancelled', PurchaseRequests);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', PurchaseRequests);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', PurchaseRequests);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GTS_CHECKER = new core_1.NumberField('GTSChecker', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GTS_PAYEE = new core_1.NumberField('GTSPayee', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXTRA_DAYS = new core_1.NumberField('ExtraDays', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.START_FROM = new core_1.EnumField('StartFrom', PurchaseRequests);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NTS_APPROVED = new core_1.EnumField('NTSApproved', PurchaseRequests);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', PurchaseRequests);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_SERIES = new core_1.NumberField('EDocSeries', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_NUM = new core_1.StringField('EDocNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_STATUS = new core_1.EnumField('EDocStatus', PurchaseRequests);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', PurchaseRequests);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GROUP_SERIES = new core_1.NumberField('GroupSeries', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GROUP_NUMBER = new core_1.NumberField('GroupNumber', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', PurchaseRequests);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', PurchaseRequests);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', PurchaseRequests);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', PurchaseRequests);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', PurchaseRequests);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CLOSING_OPTION = new core_1.EnumField('ClosingOption', PurchaseRequests);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', PurchaseRequests);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', PurchaseRequests);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', PurchaseRequests, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', PurchaseRequests);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BPL_NAME = new core_1.StringField('BPLName', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VAT_REG_NUM = new core_1.StringField('VATRegNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SUPPLIER = new core_1.StringField('Supplier', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RELEASER = new core_1.NumberField('Releaser', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RECEIVER = new core_1.NumberField('Receiver', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.IS_ALTERATION = new core_1.EnumField('IsAlteration', PurchaseRequests);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CANCEL_STATUS = new core_1.EnumField('CancelStatus', PurchaseRequests);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER = new core_1.StringField('Requester', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER_NAME = new core_1.StringField('RequesterName', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', PurchaseRequests);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REQ_TYPE = new core_1.NumberField('ReqType', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', PurchaseRequests);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', PurchaseRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', PurchaseRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', PurchaseRequests);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', PurchaseRequests);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', PurchaseRequests);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', PurchaseRequests);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.LETTER = new core_1.EnumField('Letter', PurchaseRequests);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.INTERIM_TYPE = new core_1.EnumField('InterimType', PurchaseRequests);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RELATED_TYPE = new core_1.NumberField('RelatedType', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', PurchaseRequests);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.UPDATE_TIME = new core_1.TimeField('UpdateTime', PurchaseRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PRICE_MODE = new core_1.EnumField('PriceMode', PurchaseRequests);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.REVISION = new core_1.EnumField('Revision', PurchaseRequests);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', PurchaseRequests);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', PurchaseRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SHIP_FROM = new core_1.StringField('ShipFrom', PurchaseRequests, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', PurchaseRequests);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', PurchaseRequests);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', PurchaseRequests);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ISSUING_REASON = new core_1.NumberField('IssuingReason', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', PurchaseRequests, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', PurchaseRequests, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', PurchaseRequests, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', PurchaseRequests, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', PurchaseRequests, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', PurchaseRequests, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', PurchaseRequests, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', PurchaseRequests, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', PurchaseRequests, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', PurchaseRequests);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', PurchaseRequests);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', PurchaseRequests, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', PurchaseRequests, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CURRENCY = new core_1.OneToOneLink('Currency', PurchaseRequests, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', PurchaseRequests, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', PurchaseRequests, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', PurchaseRequests, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', PurchaseRequests, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.FORMS_1099 = new core_1.OneToOneLink('Forms1099', PurchaseRequests, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', PurchaseRequests, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', PurchaseRequests, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.PROJECT_2 = new core_1.OneToOneLink('Project2', PurchaseRequests, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', PurchaseRequests, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.COUNTRY = new core_1.OneToOneLink('Country', PurchaseRequests, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', PurchaseRequests, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', PurchaseRequests, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.NF_MODEL = new core_1.OneToOneLink('NFModel', PurchaseRequests, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', PurchaseRequests, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', PurchaseRequests, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.BRANCH = new core_1.OneToOneLink('Branch', PurchaseRequests, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.DEPARTMENT = new core_1.OneToOneLink('Department', PurchaseRequests, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PurchaseRequests.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', PurchaseRequests, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the PurchaseRequests entity.
     */
    PurchaseRequests._allFields = [
        PurchaseRequests.DOC_ENTRY,
        PurchaseRequests.DOC_NUM,
        PurchaseRequests.DOC_TYPE,
        PurchaseRequests.HAND_WRITTEN,
        PurchaseRequests.PRINTED,
        PurchaseRequests.DOC_DATE,
        PurchaseRequests.DOC_DUE_DATE,
        PurchaseRequests.CARD_CODE,
        PurchaseRequests.CARD_NAME,
        PurchaseRequests.ADDRESS,
        PurchaseRequests.NUM_AT_CARD,
        PurchaseRequests.DOC_TOTAL,
        PurchaseRequests.ATTACHMENT_ENTRY,
        PurchaseRequests.DOC_CURRENCY,
        PurchaseRequests.DOC_RATE,
        PurchaseRequests.REFERENCE_1,
        PurchaseRequests.REFERENCE_2,
        PurchaseRequests.COMMENTS,
        PurchaseRequests.JOURNAL_MEMO,
        PurchaseRequests.PAYMENT_GROUP_CODE,
        PurchaseRequests.DOC_TIME,
        PurchaseRequests.SALES_PERSON_CODE,
        PurchaseRequests.TRANSPORTATION_CODE,
        PurchaseRequests.CONFIRMED,
        PurchaseRequests.IMPORT_FILE_NUM,
        PurchaseRequests.SUMMERY_TYPE,
        PurchaseRequests.CONTACT_PERSON_CODE,
        PurchaseRequests.SHOW_SCN,
        PurchaseRequests.SERIES,
        PurchaseRequests.TAX_DATE,
        PurchaseRequests.PARTIAL_SUPPLY,
        PurchaseRequests.DOC_OBJECT_CODE,
        PurchaseRequests.SHIP_TO_CODE,
        PurchaseRequests.INDICATOR,
        PurchaseRequests.FEDERAL_TAX_ID,
        PurchaseRequests.DISCOUNT_PERCENT,
        PurchaseRequests.PAYMENT_REFERENCE,
        PurchaseRequests.CREATION_DATE,
        PurchaseRequests.UPDATE_DATE,
        PurchaseRequests.FINANCIAL_PERIOD,
        PurchaseRequests.TRANS_NUM,
        PurchaseRequests.VAT_SUM,
        PurchaseRequests.VAT_SUM_SYS,
        PurchaseRequests.VAT_SUM_FC,
        PurchaseRequests.NET_PROCEDURE,
        PurchaseRequests.DOC_TOTAL_FC,
        PurchaseRequests.DOC_TOTAL_SYS,
        PurchaseRequests.FORM_1099,
        PurchaseRequests.BOX_1099,
        PurchaseRequests.REVISION_PO,
        PurchaseRequests.REQURIED_DATE,
        PurchaseRequests.CANCEL_DATE,
        PurchaseRequests.BLOCK_DUNNING,
        PurchaseRequests.SUBMITTED,
        PurchaseRequests.SEGMENT,
        PurchaseRequests.PICK_STATUS,
        PurchaseRequests.PICK,
        PurchaseRequests.PAYMENT_METHOD,
        PurchaseRequests.PAYMENT_BLOCK,
        PurchaseRequests.PAYMENT_BLOCK_ENTRY,
        PurchaseRequests.CENTRAL_BANK_INDICATOR,
        PurchaseRequests.MAXIMUM_CASH_DISCOUNT,
        PurchaseRequests.RESERVE,
        PurchaseRequests.PROJECT,
        PurchaseRequests.EXEMPTION_VALIDITY_DATE_FROM,
        PurchaseRequests.EXEMPTION_VALIDITY_DATE_TO,
        PurchaseRequests.WARE_HOUSE_UPDATE_TYPE,
        PurchaseRequests.ROUNDING,
        PurchaseRequests.EXTERNAL_CORRECTED_DOC_NUM,
        PurchaseRequests.INTERNAL_CORRECTED_DOC_NUM,
        PurchaseRequests.NEXT_CORRECTING_DOCUMENT,
        PurchaseRequests.DEFERRED_TAX,
        PurchaseRequests.TAX_EXEMPTION_LETTER_NUM,
        PurchaseRequests.WT_APPLIED,
        PurchaseRequests.WT_APPLIED_FC,
        PurchaseRequests.BILL_OF_EXCHANGE_RESERVED,
        PurchaseRequests.AGENT_CODE,
        PurchaseRequests.WT_APPLIED_SC,
        PurchaseRequests.TOTAL_EQUALIZATION_TAX,
        PurchaseRequests.TOTAL_EQUALIZATION_TAX_FC,
        PurchaseRequests.TOTAL_EQUALIZATION_TAX_SC,
        PurchaseRequests.NUMBER_OF_INSTALLMENTS,
        PurchaseRequests.APPLY_TAX_ON_FIRST_INSTALLMENT,
        PurchaseRequests.WT_NON_SUBJECT_AMOUNT,
        PurchaseRequests.WT_NON_SUBJECT_AMOUNT_SC,
        PurchaseRequests.WT_NON_SUBJECT_AMOUNT_FC,
        PurchaseRequests.WT_EXEMPTED_AMOUNT,
        PurchaseRequests.WT_EXEMPTED_AMOUNT_SC,
        PurchaseRequests.WT_EXEMPTED_AMOUNT_FC,
        PurchaseRequests.BASE_AMOUNT,
        PurchaseRequests.BASE_AMOUNT_SC,
        PurchaseRequests.BASE_AMOUNT_FC,
        PurchaseRequests.WT_AMOUNT,
        PurchaseRequests.WT_AMOUNT_SC,
        PurchaseRequests.WT_AMOUNT_FC,
        PurchaseRequests.VAT_DATE,
        PurchaseRequests.DOCUMENTS_OWNER,
        PurchaseRequests.FOLIO_PREFIX_STRING,
        PurchaseRequests.FOLIO_NUMBER,
        PurchaseRequests.DOCUMENT_SUB_TYPE,
        PurchaseRequests.BP_CHANNEL_CODE,
        PurchaseRequests.BP_CHANNEL_CONTACT,
        PurchaseRequests.ADDRESS_2,
        PurchaseRequests.DOCUMENT_STATUS,
        PurchaseRequests.PERIOD_INDICATOR,
        PurchaseRequests.PAY_TO_CODE,
        PurchaseRequests.MANUAL_NUMBER,
        PurchaseRequests.USE_SHPD_GOODS_ACT,
        PurchaseRequests.IS_PAY_TO_BANK,
        PurchaseRequests.PAY_TO_BANK_COUNTRY,
        PurchaseRequests.PAY_TO_BANK_CODE,
        PurchaseRequests.PAY_TO_BANK_ACCOUNT_NO,
        PurchaseRequests.PAY_TO_BANK_BRANCH,
        PurchaseRequests.BPL_ID_ASSIGNED_TO_INVOICE,
        PurchaseRequests.DOWN_PAYMENT,
        PurchaseRequests.RESERVE_INVOICE,
        PurchaseRequests.LANGUAGE_CODE,
        PurchaseRequests.TRACKING_NUMBER,
        PurchaseRequests.PICK_REMARK,
        PurchaseRequests.CLOSING_DATE,
        PurchaseRequests.SEQUENCE_CODE,
        PurchaseRequests.SEQUENCE_SERIAL,
        PurchaseRequests.SERIES_STRING,
        PurchaseRequests.SUB_SERIES_STRING,
        PurchaseRequests.SEQUENCE_MODEL,
        PurchaseRequests.USE_CORRECTION_VAT_GROUP,
        PurchaseRequests.TOTAL_DISCOUNT,
        PurchaseRequests.DOWN_PAYMENT_AMOUNT,
        PurchaseRequests.DOWN_PAYMENT_PERCENTAGE,
        PurchaseRequests.DOWN_PAYMENT_TYPE,
        PurchaseRequests.DOWN_PAYMENT_AMOUNT_SC,
        PurchaseRequests.DOWN_PAYMENT_AMOUNT_FC,
        PurchaseRequests.VAT_PERCENT,
        PurchaseRequests.SERVICE_GROSS_PROFIT_PERCENT,
        PurchaseRequests.OPENING_REMARKS,
        PurchaseRequests.CLOSING_REMARKS,
        PurchaseRequests.ROUNDING_DIFF_AMOUNT,
        PurchaseRequests.ROUNDING_DIFF_AMOUNT_FC,
        PurchaseRequests.ROUNDING_DIFF_AMOUNT_SC,
        PurchaseRequests.CANCELLED,
        PurchaseRequests.SIGNATURE_INPUT_MESSAGE,
        PurchaseRequests.SIGNATURE_DIGEST,
        PurchaseRequests.CERTIFICATION_NUMBER,
        PurchaseRequests.PRIVATE_KEY_VERSION,
        PurchaseRequests.CONTROL_ACCOUNT,
        PurchaseRequests.INSURANCE_OPERATION_347,
        PurchaseRequests.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        PurchaseRequests.GTS_CHECKER,
        PurchaseRequests.GTS_PAYEE,
        PurchaseRequests.EXTRA_MONTH,
        PurchaseRequests.EXTRA_DAYS,
        PurchaseRequests.CASH_DISCOUNT_DATE_OFFSET,
        PurchaseRequests.START_FROM,
        PurchaseRequests.NTS_APPROVED,
        PurchaseRequests.E_TAX_WEB_SITE,
        PurchaseRequests.E_TAX_NUMBER,
        PurchaseRequests.NTS_APPROVED_NUMBER,
        PurchaseRequests.E_DOC_GENERATION_TYPE,
        PurchaseRequests.E_DOC_SERIES,
        PurchaseRequests.E_DOC_NUM,
        PurchaseRequests.E_DOC_EXPORT_FORMAT,
        PurchaseRequests.E_DOC_STATUS,
        PurchaseRequests.E_DOC_ERROR_CODE,
        PurchaseRequests.E_DOC_ERROR_MESSAGE,
        PurchaseRequests.DOWN_PAYMENT_STATUS,
        PurchaseRequests.GROUP_SERIES,
        PurchaseRequests.GROUP_NUMBER,
        PurchaseRequests.GROUP_HAND_WRITTEN,
        PurchaseRequests.REOPEN_ORIGINAL_DOCUMENT,
        PurchaseRequests.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        PurchaseRequests.CREATE_ONLINE_QUOTATION,
        PurchaseRequests.POS_EQUIPMENT_NUMBER,
        PurchaseRequests.POS_MANUFACTURER_SERIAL_NUMBER,
        PurchaseRequests.POS_CASHIER_NUMBER,
        PurchaseRequests.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        PurchaseRequests.CLOSING_OPTION,
        PurchaseRequests.SPECIFIED_CLOSING_DATE,
        PurchaseRequests.OPEN_FOR_LANDED_COSTS,
        PurchaseRequests.AUTHORIZATION_STATUS,
        PurchaseRequests.TOTAL_DISCOUNT_FC,
        PurchaseRequests.TOTAL_DISCOUNT_SC,
        PurchaseRequests.RELEVANT_TO_GTS,
        PurchaseRequests.BPL_NAME,
        PurchaseRequests.VAT_REG_NUM,
        PurchaseRequests.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        PurchaseRequests.SUPPLIER,
        PurchaseRequests.RELEASER,
        PurchaseRequests.RECEIVER,
        PurchaseRequests.BLANKET_AGREEMENT_NUMBER,
        PurchaseRequests.IS_ALTERATION,
        PurchaseRequests.CANCEL_STATUS,
        PurchaseRequests.ASSET_VALUE_DATE,
        PurchaseRequests.REQUESTER,
        PurchaseRequests.REQUESTER_NAME,
        PurchaseRequests.REQUESTER_BRANCH,
        PurchaseRequests.REQUESTER_DEPARTMENT,
        PurchaseRequests.REQUESTER_EMAIL,
        PurchaseRequests.SEND_NOTIFICATION,
        PurchaseRequests.REQ_TYPE,
        PurchaseRequests.DOCUMENT_DELIVERY,
        PurchaseRequests.AUTHORIZATION_CODE,
        PurchaseRequests.START_DELIVERY_DATE,
        PurchaseRequests.START_DELIVERY_TIME,
        PurchaseRequests.END_DELIVERY_DATE,
        PurchaseRequests.END_DELIVERY_TIME,
        PurchaseRequests.VEHICLE_PLATE,
        PurchaseRequests.AT_DOCUMENT_TYPE,
        PurchaseRequests.ELEC_COMM_STATUS,
        PurchaseRequests.ELEC_COMM_MESSAGE,
        PurchaseRequests.REUSE_DOCUMENT_NUM,
        PurchaseRequests.REUSE_NOTA_FISCAL_NUM,
        PurchaseRequests.PRINT_SEPA_DIRECT,
        PurchaseRequests.FISCAL_DOC_NUM,
        PurchaseRequests.POS_DAILY_SUMMARY_NO,
        PurchaseRequests.POS_RECEIPT_NO,
        PurchaseRequests.POINT_OF_ISSUE_CODE,
        PurchaseRequests.LETTER,
        PurchaseRequests.FOLIO_NUMBER_FROM,
        PurchaseRequests.FOLIO_NUMBER_TO,
        PurchaseRequests.INTERIM_TYPE,
        PurchaseRequests.RELATED_TYPE,
        PurchaseRequests.RELATED_ENTRY,
        PurchaseRequests.DOCUMENT_TAX_ID,
        PurchaseRequests.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        PurchaseRequests.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        PurchaseRequests.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        PurchaseRequests.POS_CASH_REGISTER,
        PurchaseRequests.UPDATE_TIME,
        PurchaseRequests.PRICE_MODE,
        PurchaseRequests.DOWN_PAYMENT_TRASACTION_ID,
        PurchaseRequests.REVISION,
        PurchaseRequests.ORIGINAL_REF_NO,
        PurchaseRequests.ORIGINAL_REF_DATE,
        PurchaseRequests.GST_TRANSACTION_TYPE,
        PurchaseRequests.ORIGINAL_CREDIT_OR_DEBIT_NO,
        PurchaseRequests.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        PurchaseRequests.E_COMMERCE_OPERATOR,
        PurchaseRequests.E_COMMERCE_GSTIN,
        PurchaseRequests.TAX_INVOICE_NO,
        PurchaseRequests.TAX_INVOICE_DATE,
        PurchaseRequests.SHIP_FROM,
        PurchaseRequests.COMMISSION_TRADE,
        PurchaseRequests.COMMISSION_TRADE_RETURN,
        PurchaseRequests.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        PurchaseRequests.ISSUING_REASON,
        PurchaseRequests.DOCUMENT_APPROVAL_REQUESTS,
        PurchaseRequests.DOCUMENT_LINES,
        PurchaseRequests.DOCUMENT_ADDITIONAL_EXPENSES,
        PurchaseRequests.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        PurchaseRequests.WITHHOLDING_TAX_DATA_COLLECTION,
        PurchaseRequests.DOCUMENT_PACKAGES,
        PurchaseRequests.DOCUMENT_SPECIAL_LINES,
        PurchaseRequests.DOCUMENT_INSTALLMENTS,
        PurchaseRequests.DOWN_PAYMENTS_TO_DRAW,
        PurchaseRequests.TAX_EXTENSION,
        PurchaseRequests.ADDRESS_EXTENSION,
        PurchaseRequests.SOI_WIZARD_ID,
        PurchaseRequests.BUSINESS_PARTNER,
        PurchaseRequests.CURRENCY,
        PurchaseRequests.PAYMENT_TERMS_TYPE,
        PurchaseRequests.SALES_PERSON,
        PurchaseRequests.SHIPPING_TYPE,
        PurchaseRequests.FACTORING_INDICATOR,
        PurchaseRequests.FORMS_1099,
        PurchaseRequests.WIZARD_PAYMENT_METHOD,
        PurchaseRequests.PAYMENT_BLOCK_2,
        PurchaseRequests.PROJECT_2,
        PurchaseRequests.EMPLOYEE_INFO,
        PurchaseRequests.COUNTRY,
        PurchaseRequests.BUSINESS_PLACE,
        PurchaseRequests.USER_LANGUAGE,
        PurchaseRequests.NF_MODEL,
        PurchaseRequests.CHART_OF_ACCOUNT,
        PurchaseRequests.TAX_WEB_SITE,
        PurchaseRequests.BRANCH,
        PurchaseRequests.DEPARTMENT,
        PurchaseRequests.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    PurchaseRequests.ALL_FIELDS = new core_1.AllFields('*', PurchaseRequests);
    /**
     * All key fields of the PurchaseRequests entity.
     */
    PurchaseRequests._keyFields = [PurchaseRequests.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PurchaseRequests.
     */
    PurchaseRequests._keys = PurchaseRequests._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PurchaseRequests = exports.PurchaseRequests || (exports.PurchaseRequests = {}));
exports.PurchaseRequests = PurchaseRequests;
//# sourceMappingURL=PurchaseRequests.js.map