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
exports.Orders = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var OrdersRequestBuilder_1 = require("./OrdersRequestBuilder");
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
 * This class represents the entity "Orders" of service "SAPB1".
 */
var Orders = /** @class */ (function (_super) {
    __extends(Orders, _super);
    function Orders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Orders`.
     * @returns A builder that constructs instances of entity type `Orders`.
     */
    Orders.builder = function () {
        return core_1.EntityV4.entityBuilder(Orders);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Orders` entity type.
     * @returns A `Orders` request builder.
     */
    Orders.requestBuilder = function () {
        return new OrdersRequestBuilder_1.OrdersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Orders`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Orders`.
     */
    Orders.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Orders);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Orders.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Orders.
     */
    Orders._entityName = 'Orders';
    /**
     * Default url path for the according service.
     */
    Orders._defaultServicePath = '/b1s/v2/';
    return Orders;
}(core_1.EntityV4));
exports.Orders = Orders;
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
(function (Orders) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_ENTRY = new core_1.NumberField('DocEntry', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_NUM = new core_1.NumberField('DocNum', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_TYPE = new core_1.EnumField('DocType', Orders);
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.HAND_WRITTEN = new core_1.EnumField('HandWritten', Orders);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PRINTED = new core_1.EnumField('Printed', Orders);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_DATE = new core_1.DateField('DocDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_DUE_DATE = new core_1.DateField('DocDueDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CARD_CODE = new core_1.StringField('CardCode', Orders, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CARD_NAME = new core_1.StringField('CardName', Orders, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ADDRESS = new core_1.StringField('Address', Orders, 'Edm.String');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.NUM_AT_CARD = new core_1.StringField('NumAtCard', Orders, 'Edm.String');
    /**
     * Static representation of the [[docTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_TOTAL = new core_1.NumberField('DocTotal', Orders, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_CURRENCY = new core_1.StringField('DocCurrency', Orders, 'Edm.String');
    /**
     * Static representation of the [[docRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_RATE = new core_1.NumberField('DocRate', Orders, 'Edm.Double');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REFERENCE_1 = new core_1.StringField('Reference1', Orders, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REFERENCE_2 = new core_1.StringField('Reference2', Orders, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.COMMENTS = new core_1.StringField('Comments', Orders, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.JOURNAL_MEMO = new core_1.StringField('JournalMemo', Orders, 'Edm.String');
    /**
     * Static representation of the [[paymentGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAYMENT_GROUP_CODE = new core_1.NumberField('PaymentGroupCode', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_TIME = new core_1.TimeField('DocTime', Orders, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[transportationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TRANSPORTATION_CODE = new core_1.NumberField('TransportationCode', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[confirmed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CONFIRMED = new core_1.EnumField('Confirmed', Orders);
    /**
     * Static representation of the [[importFileNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.IMPORT_FILE_NUM = new core_1.NumberField('ImportFileNum', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[summeryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SUMMERY_TYPE = new core_1.EnumField('SummeryType', Orders);
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[showScn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SHOW_SCN = new core_1.EnumField('ShowSCN', Orders);
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SERIES = new core_1.NumberField('Series', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TAX_DATE = new core_1.DateField('TaxDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[partialSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PARTIAL_SUPPLY = new core_1.EnumField('PartialSupply', Orders);
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_OBJECT_CODE = new core_1.EnumField('DocObjectCode', Orders);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SHIP_TO_CODE = new core_1.StringField('ShipToCode', Orders, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.INDICATOR = new core_1.StringField('Indicator', Orders, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', Orders, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', Orders, 'Edm.Double');
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAYMENT_REFERENCE = new core_1.StringField('PaymentReference', Orders, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CREATION_DATE = new core_1.DateField('CreationDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.UPDATE_DATE = new core_1.DateField('UpdateDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TRANS_NUM = new core_1.NumberField('TransNum', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[vatSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.VAT_SUM = new core_1.NumberField('VatSum', Orders, 'Edm.Double');
    /**
     * Static representation of the [[vatSumSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.VAT_SUM_SYS = new core_1.NumberField('VatSumSys', Orders, 'Edm.Double');
    /**
     * Static representation of the [[vatSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.VAT_SUM_FC = new core_1.NumberField('VatSumFc', Orders, 'Edm.Double');
    /**
     * Static representation of the [[netProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.NET_PROCEDURE = new core_1.EnumField('NetProcedure', Orders);
    /**
     * Static representation of the [[docTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_TOTAL_FC = new core_1.NumberField('DocTotalFc', Orders, 'Edm.Double');
    /**
     * Static representation of the [[docTotalSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOC_TOTAL_SYS = new core_1.NumberField('DocTotalSys', Orders, 'Edm.Double');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FORM_1099 = new core_1.NumberField('Form1099', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BOX_1099 = new core_1.StringField('Box1099', Orders, 'Edm.String');
    /**
     * Static representation of the [[revisionPo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REVISION_PO = new core_1.EnumField('RevisionPo', Orders);
    /**
     * Static representation of the [[requriedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REQURIED_DATE = new core_1.DateField('RequriedDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CANCEL_DATE = new core_1.DateField('CancelDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', Orders);
    /**
     * Static representation of the [[submitted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SUBMITTED = new core_1.EnumField('Submitted', Orders);
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SEGMENT = new core_1.NumberField('Segment', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PICK_STATUS = new core_1.EnumField('PickStatus', Orders);
    /**
     * Static representation of the [[pick]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PICK = new core_1.EnumField('Pick', Orders);
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', Orders, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', Orders);
    /**
     * Static representation of the [[paymentBlockEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAYMENT_BLOCK_ENTRY = new core_1.NumberField('PaymentBlockEntry', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[centralBankIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CENTRAL_BANK_INDICATOR = new core_1.StringField('CentralBankIndicator', Orders, 'Edm.String');
    /**
     * Static representation of the [[maximumCashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.MAXIMUM_CASH_DISCOUNT = new core_1.EnumField('MaximumCashDiscount', Orders);
    /**
     * Static representation of the [[reserve]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.RESERVE = new core_1.EnumField('Reserve', Orders);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PROJECT = new core_1.StringField('Project', Orders, 'Edm.String');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[wareHouseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WARE_HOUSE_UPDATE_TYPE = new core_1.EnumField('WareHouseUpdateType', Orders);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ROUNDING = new core_1.EnumField('Rounding', Orders);
    /**
     * Static representation of the [[externalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.EXTERNAL_CORRECTED_DOC_NUM = new core_1.StringField('ExternalCorrectedDocNum', Orders, 'Edm.String');
    /**
     * Static representation of the [[internalCorrectedDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.INTERNAL_CORRECTED_DOC_NUM = new core_1.NumberField('InternalCorrectedDocNum', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[nextCorrectingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.NEXT_CORRECTING_DOCUMENT = new core_1.NumberField('NextCorrectingDocument', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DEFERRED_TAX = new core_1.EnumField('DeferredTax', Orders);
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', Orders, 'Edm.String');
    /**
     * Static representation of the [[wtApplied]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_APPLIED = new core_1.NumberField('WTApplied', Orders, 'Edm.Double');
    /**
     * Static representation of the [[wtAppliedFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_APPLIED_FC = new core_1.NumberField('WTAppliedFC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[billOfExchangeReserved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BILL_OF_EXCHANGE_RESERVED = new core_1.EnumField('BillOfExchangeReserved', Orders);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.AGENT_CODE = new core_1.StringField('AgentCode', Orders, 'Edm.String');
    /**
     * Static representation of the [[wtAppliedSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_APPLIED_SC = new core_1.NumberField('WTAppliedSC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TOTAL_EQUALIZATION_TAX = new core_1.NumberField('TotalEqualizationTax', Orders, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TOTAL_EQUALIZATION_TAX_FC = new core_1.NumberField('TotalEqualizationTaxFC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[totalEqualizationTaxSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TOTAL_EQUALIZATION_TAX_SC = new core_1.NumberField('TotalEqualizationTaxSC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.NUMBER_OF_INSTALLMENTS = new core_1.NumberField('NumberOfInstallments', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[applyTaxOnFirstInstallment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.APPLY_TAX_ON_FIRST_INSTALLMENT = new core_1.EnumField('ApplyTaxOnFirstInstallment', Orders);
    /**
     * Static representation of the [[wtNonSubjectAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_NON_SUBJECT_AMOUNT = new core_1.NumberField('WTNonSubjectAmount', Orders, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_NON_SUBJECT_AMOUNT_SC = new core_1.NumberField('WTNonSubjectAmountSC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[wtNonSubjectAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_NON_SUBJECT_AMOUNT_FC = new core_1.NumberField('WTNonSubjectAmountFC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_EXEMPTED_AMOUNT = new core_1.NumberField('WTExemptedAmount', Orders, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_EXEMPTED_AMOUNT_SC = new core_1.NumberField('WTExemptedAmountSC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[wtExemptedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_EXEMPTED_AMOUNT_FC = new core_1.NumberField('WTExemptedAmountFC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BASE_AMOUNT = new core_1.NumberField('BaseAmount', Orders, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BASE_AMOUNT_SC = new core_1.NumberField('BaseAmountSC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BASE_AMOUNT_FC = new core_1.NumberField('BaseAmountFC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[wtAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_AMOUNT = new core_1.NumberField('WTAmount', Orders, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_AMOUNT_SC = new core_1.NumberField('WTAmountSC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[wtAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WT_AMOUNT_FC = new core_1.NumberField('WTAmountFC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.VAT_DATE = new core_1.DateField('VatDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentsOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENTS_OWNER = new core_1.NumberField('DocumentsOwner', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', Orders, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_SUB_TYPE = new core_1.EnumField('DocumentSubType', Orders);
    /**
     * Static representation of the [[bpChannelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BP_CHANNEL_CODE = new core_1.StringField('BPChannelCode', Orders, 'Edm.String');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BP_CHANNEL_CONTACT = new core_1.NumberField('BPChannelContact', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ADDRESS_2 = new core_1.StringField('Address2', Orders, 'Edm.String');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', Orders);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', Orders, 'Edm.String');
    /**
     * Static representation of the [[payToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAY_TO_CODE = new core_1.StringField('PayToCode', Orders, 'Edm.String');
    /**
     * Static representation of the [[manualNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.MANUAL_NUMBER = new core_1.StringField('ManualNumber', Orders, 'Edm.String');
    /**
     * Static representation of the [[useShpdGoodsAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.USE_SHPD_GOODS_ACT = new core_1.EnumField('UseShpdGoodsAct', Orders);
    /**
     * Static representation of the [[isPayToBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.IS_PAY_TO_BANK = new core_1.EnumField('IsPayToBank', Orders);
    /**
     * Static representation of the [[payToBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAY_TO_BANK_COUNTRY = new core_1.StringField('PayToBankCountry', Orders, 'Edm.String');
    /**
     * Static representation of the [[payToBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAY_TO_BANK_CODE = new core_1.StringField('PayToBankCode', Orders, 'Edm.String');
    /**
     * Static representation of the [[payToBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAY_TO_BANK_ACCOUNT_NO = new core_1.StringField('PayToBankAccountNo', Orders, 'Edm.String');
    /**
     * Static representation of the [[payToBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAY_TO_BANK_BRANCH = new core_1.StringField('PayToBankBranch', Orders, 'Edm.String');
    /**
     * Static representation of the [[bplIdAssignedToInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BPL_ID_ASSIGNED_TO_INVOICE = new core_1.NumberField('BPL_IDAssignedToInvoice', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[downPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOWN_PAYMENT = new core_1.NumberField('DownPayment', Orders, 'Edm.Double');
    /**
     * Static representation of the [[reserveInvoice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.RESERVE_INVOICE = new core_1.EnumField('ReserveInvoice', Orders);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[trackingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TRACKING_NUMBER = new core_1.StringField('TrackingNumber', Orders, 'Edm.String');
    /**
     * Static representation of the [[pickRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PICK_REMARK = new core_1.StringField('PickRemark', Orders, 'Edm.String');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CLOSING_DATE = new core_1.DateField('ClosingDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sequenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SEQUENCE_CODE = new core_1.NumberField('SequenceCode', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[sequenceSerial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SEQUENCE_SERIAL = new core_1.NumberField('SequenceSerial', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[seriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SERIES_STRING = new core_1.StringField('SeriesString', Orders, 'Edm.String');
    /**
     * Static representation of the [[subSeriesString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SUB_SERIES_STRING = new core_1.StringField('SubSeriesString', Orders, 'Edm.String');
    /**
     * Static representation of the [[sequenceModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SEQUENCE_MODEL = new core_1.StringField('SequenceModel', Orders, 'Edm.String');
    /**
     * Static representation of the [[useCorrectionVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.USE_CORRECTION_VAT_GROUP = new core_1.EnumField('UseCorrectionVATGroup', Orders);
    /**
     * Static representation of the [[totalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TOTAL_DISCOUNT = new core_1.NumberField('TotalDiscount', Orders, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOWN_PAYMENT_AMOUNT = new core_1.NumberField('DownPaymentAmount', Orders, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOWN_PAYMENT_PERCENTAGE = new core_1.NumberField('DownPaymentPercentage', Orders, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOWN_PAYMENT_TYPE = new core_1.EnumField('DownPaymentType', Orders);
    /**
     * Static representation of the [[downPaymentAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOWN_PAYMENT_AMOUNT_SC = new core_1.NumberField('DownPaymentAmountSC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[downPaymentAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOWN_PAYMENT_AMOUNT_FC = new core_1.NumberField('DownPaymentAmountFC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[vatPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.VAT_PERCENT = new core_1.NumberField('VatPercent', Orders, 'Edm.Double');
    /**
     * Static representation of the [[serviceGrossProfitPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SERVICE_GROSS_PROFIT_PERCENT = new core_1.NumberField('ServiceGrossProfitPercent', Orders, 'Edm.Double');
    /**
     * Static representation of the [[openingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.OPENING_REMARKS = new core_1.StringField('OpeningRemarks', Orders, 'Edm.String');
    /**
     * Static representation of the [[closingRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CLOSING_REMARKS = new core_1.StringField('ClosingRemarks', Orders, 'Edm.String');
    /**
     * Static representation of the [[roundingDiffAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ROUNDING_DIFF_AMOUNT = new core_1.NumberField('RoundingDiffAmount', Orders, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ROUNDING_DIFF_AMOUNT_FC = new core_1.NumberField('RoundingDiffAmountFC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[roundingDiffAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ROUNDING_DIFF_AMOUNT_SC = new core_1.NumberField('RoundingDiffAmountSC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[cancelled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CANCELLED = new core_1.EnumField('Cancelled', Orders);
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', Orders, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', Orders, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', Orders, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CONTROL_ACCOUNT = new core_1.StringField('ControlAccount', Orders, 'Edm.String');
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', Orders);
    /**
     * Static representation of the [[archiveNonremovableSalesQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ARCHIVE_NONREMOVABLE_SALES_QUOTATION = new core_1.EnumField('ArchiveNonremovableSalesQuotation', Orders);
    /**
     * Static representation of the [[gtsChecker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.GTS_CHECKER = new core_1.NumberField('GTSChecker', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[gtsPayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.GTS_PAYEE = new core_1.NumberField('GTSPayee', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[extraMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.EXTRA_MONTH = new core_1.NumberField('ExtraMonth', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[extraDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.EXTRA_DAYS = new core_1.NumberField('ExtraDays', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[cashDiscountDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CASH_DISCOUNT_DATE_OFFSET = new core_1.NumberField('CashDiscountDateOffset', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[startFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.START_FROM = new core_1.EnumField('StartFrom', Orders);
    /**
     * Static representation of the [[ntsApproved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.NTS_APPROVED = new core_1.EnumField('NTSApproved', Orders);
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[eTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_TAX_NUMBER = new core_1.StringField('ETaxNumber', Orders, 'Edm.String');
    /**
     * Static representation of the [[ntsApprovedNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.NTS_APPROVED_NUMBER = new core_1.StringField('NTSApprovedNumber', Orders, 'Edm.String');
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', Orders);
    /**
     * Static representation of the [[eDocSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_DOC_SERIES = new core_1.NumberField('EDocSeries', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[eDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_DOC_NUM = new core_1.StringField('EDocNum', Orders, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[eDocStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_DOC_STATUS = new core_1.EnumField('EDocStatus', Orders);
    /**
     * Static representation of the [[eDocErrorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_DOC_ERROR_CODE = new core_1.StringField('EDocErrorCode', Orders, 'Edm.String');
    /**
     * Static representation of the [[eDocErrorMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_DOC_ERROR_MESSAGE = new core_1.StringField('EDocErrorMessage', Orders, 'Edm.String');
    /**
     * Static representation of the [[downPaymentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOWN_PAYMENT_STATUS = new core_1.EnumField('DownPaymentStatus', Orders);
    /**
     * Static representation of the [[groupSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.GROUP_SERIES = new core_1.NumberField('GroupSeries', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.GROUP_NUMBER = new core_1.NumberField('GroupNumber', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[groupHandWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.GROUP_HAND_WRITTEN = new core_1.EnumField('GroupHandWritten', Orders);
    /**
     * Static representation of the [[reopenOriginalDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REOPEN_ORIGINAL_DOCUMENT = new core_1.EnumField('ReopenOriginalDocument', Orders);
    /**
     * Static representation of the [[reopenManuallyClosedOrCanceledDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT = new core_1.EnumField('ReopenManuallyClosedOrCanceledDocument', Orders);
    /**
     * Static representation of the [[createOnlineQuotation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CREATE_ONLINE_QUOTATION = new core_1.EnumField('CreateOnlineQuotation', Orders);
    /**
     * Static representation of the [[posEquipmentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.POS_EQUIPMENT_NUMBER = new core_1.StringField('POSEquipmentNumber', Orders, 'Edm.String');
    /**
     * Static representation of the [[posManufacturerSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.POS_MANUFACTURER_SERIAL_NUMBER = new core_1.StringField('POSManufacturerSerialNumber', Orders, 'Edm.String');
    /**
     * Static representation of the [[posCashierNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.POS_CASHIER_NUMBER = new core_1.NumberField('POSCashierNumber', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[applyCurrentVatRatesForDownPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW = new core_1.EnumField('ApplyCurrentVATRatesForDownPaymentsToDraw', Orders);
    /**
     * Static representation of the [[closingOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CLOSING_OPTION = new core_1.EnumField('ClosingOption', Orders);
    /**
     * Static representation of the [[specifiedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SPECIFIED_CLOSING_DATE = new core_1.DateField('SpecifiedClosingDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[openForLandedCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.OPEN_FOR_LANDED_COSTS = new core_1.EnumField('OpenForLandedCosts', Orders);
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', Orders);
    /**
     * Static representation of the [[totalDiscountFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TOTAL_DISCOUNT_FC = new core_1.NumberField('TotalDiscountFC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[totalDiscountSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TOTAL_DISCOUNT_SC = new core_1.NumberField('TotalDiscountSC', Orders, 'Edm.Double');
    /**
     * Static representation of the [[relevantToGts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.RELEVANT_TO_GTS = new core_1.EnumField('RelevantToGTS', Orders);
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BPL_NAME = new core_1.StringField('BPLName', Orders, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.VAT_REG_NUM = new core_1.StringField('VATRegNum', Orders, 'Edm.String');
    /**
     * Static representation of the [[annualInvoiceDeclarationReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ANNUAL_INVOICE_DECLARATION_REFERENCE = new core_1.NumberField('AnnualInvoiceDeclarationReference', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SUPPLIER = new core_1.StringField('Supplier', Orders, 'Edm.String');
    /**
     * Static representation of the [[releaser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.RELEASER = new core_1.NumberField('Releaser', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[receiver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.RECEIVER = new core_1.NumberField('Receiver', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[isAlteration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.IS_ALTERATION = new core_1.EnumField('IsAlteration', Orders);
    /**
     * Static representation of the [[cancelStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CANCEL_STATUS = new core_1.EnumField('CancelStatus', Orders);
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[requester]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REQUESTER = new core_1.StringField('Requester', Orders, 'Edm.String');
    /**
     * Static representation of the [[requesterName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REQUESTER_NAME = new core_1.StringField('RequesterName', Orders, 'Edm.String');
    /**
     * Static representation of the [[requesterBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REQUESTER_BRANCH = new core_1.NumberField('RequesterBranch', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[requesterDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REQUESTER_DEPARTMENT = new core_1.NumberField('RequesterDepartment', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[requesterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REQUESTER_EMAIL = new core_1.StringField('RequesterEmail', Orders, 'Edm.String');
    /**
     * Static representation of the [[sendNotification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SEND_NOTIFICATION = new core_1.EnumField('SendNotification', Orders);
    /**
     * Static representation of the [[reqType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REQ_TYPE = new core_1.NumberField('ReqType', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[documentDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_DELIVERY = new core_1.EnumField('DocumentDelivery', Orders);
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', Orders, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', Orders, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', Orders, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', Orders, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', Orders, 'Edm.String');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', Orders);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', Orders, 'Edm.String');
    /**
     * Static representation of the [[reuseDocumentNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REUSE_DOCUMENT_NUM = new core_1.EnumField('ReuseDocumentNum', Orders);
    /**
     * Static representation of the [[reuseNotaFiscalNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REUSE_NOTA_FISCAL_NUM = new core_1.EnumField('ReuseNotaFiscalNum', Orders);
    /**
     * Static representation of the [[printSepaDirect]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PRINT_SEPA_DIRECT = new core_1.EnumField('PrintSEPADirect', Orders);
    /**
     * Static representation of the [[fiscalDocNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FISCAL_DOC_NUM = new core_1.StringField('FiscalDocNum', Orders, 'Edm.String');
    /**
     * Static representation of the [[posDailySummaryNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.POS_DAILY_SUMMARY_NO = new core_1.NumberField('POSDailySummaryNo', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[posReceiptNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.POS_RECEIPT_NO = new core_1.NumberField('POSReceiptNo', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', Orders, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.LETTER = new core_1.EnumField('Letter', Orders);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[interimType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.INTERIM_TYPE = new core_1.EnumField('InterimType', Orders);
    /**
     * Static representation of the [[relatedType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.RELATED_TYPE = new core_1.NumberField('RelatedType', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[relatedEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.RELATED_ENTRY = new core_1.NumberField('RelatedEntry', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[documentTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_TAX_ID = new core_1.StringField('DocumentTaxID', Orders, 'Edm.String');
    /**
     * Static representation of the [[dateOfReportingControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT = new core_1.DateField('DateOfReportingControlStatementVAT', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', Orders, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', Orders);
    /**
     * Static representation of the [[posCashRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.POS_CASH_REGISTER = new core_1.NumberField('POS_CashRegister', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.UPDATE_TIME = new core_1.TimeField('UpdateTime', Orders, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PRICE_MODE = new core_1.EnumField('PriceMode', Orders);
    /**
     * Static representation of the [[downPaymentTrasactionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOWN_PAYMENT_TRASACTION_ID = new core_1.StringField('DownPaymentTrasactionID', Orders, 'Edm.String');
    /**
     * Static representation of the [[revision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.REVISION = new core_1.EnumField('Revision', Orders);
    /**
     * Static representation of the [[originalRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ORIGINAL_REF_NO = new core_1.StringField('OriginalRefNo', Orders, 'Edm.String');
    /**
     * Static representation of the [[originalRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ORIGINAL_REF_DATE = new core_1.DateField('OriginalRefDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[gstTransactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.GST_TRANSACTION_TYPE = new core_1.EnumField('GSTTransactionType', Orders);
    /**
     * Static representation of the [[originalCreditOrDebitNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ORIGINAL_CREDIT_OR_DEBIT_NO = new core_1.StringField('OriginalCreditOrDebitNo', Orders, 'Edm.String');
    /**
     * Static representation of the [[originalCreditOrDebitDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ORIGINAL_CREDIT_OR_DEBIT_DATE = new core_1.DateField('OriginalCreditOrDebitDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[eCommerceOperator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_COMMERCE_OPERATOR = new core_1.StringField('ECommerceOperator', Orders, 'Edm.String');
    /**
     * Static representation of the [[eCommerceGstin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.E_COMMERCE_GSTIN = new core_1.StringField('ECommerceGSTIN', Orders, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TAX_INVOICE_NO = new core_1.StringField('TaxInvoiceNo', Orders, 'Edm.String');
    /**
     * Static representation of the [[taxInvoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TAX_INVOICE_DATE = new core_1.DateField('TaxInvoiceDate', Orders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[shipFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SHIP_FROM = new core_1.StringField('ShipFrom', Orders, 'Edm.String');
    /**
     * Static representation of the [[commissionTrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.COMMISSION_TRADE = new core_1.EnumField('CommissionTrade', Orders);
    /**
     * Static representation of the [[commissionTradeReturn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.COMMISSION_TRADE_RETURN = new core_1.EnumField('CommissionTradeReturn', Orders);
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', Orders);
    /**
     * Static representation of the [[issuingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ISSUING_REASON = new core_1.NumberField('IssuingReason', Orders, 'Edm.Int32');
    /**
     * Static representation of the [[documentApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_APPROVAL_REQUESTS = new core_1.CollectionField('Document_ApprovalRequests', Orders, DocumentApprovalRequest_1.DocumentApprovalRequest);
    /**
     * Static representation of the [[documentLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_LINES = new core_1.CollectionField('DocumentLines', Orders, DocumentLine_1.DocumentLine);
    /**
     * Static representation of the [[documentAdditionalExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_ADDITIONAL_EXPENSES = new core_1.CollectionField('DocumentAdditionalExpenses', Orders, DocumentAdditionalExpense_1.DocumentAdditionalExpense);
    /**
     * Static representation of the [[withholdingTaxDataWtxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WITHHOLDING_TAX_DATA_WTX_COLLECTION = new core_1.CollectionField('WithholdingTaxDataWTXCollection', Orders, WithholdingTaxDataWtx_1.WithholdingTaxDataWtx);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', Orders, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the [[documentPackages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_PACKAGES = new core_1.CollectionField('DocumentPackages', Orders, DocumentPackage_1.DocumentPackage);
    /**
     * Static representation of the [[documentSpecialLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_SPECIAL_LINES = new core_1.CollectionField('DocumentSpecialLines', Orders, DocumentSpecialLine_1.DocumentSpecialLine);
    /**
     * Static representation of the [[documentInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOCUMENT_INSTALLMENTS = new core_1.CollectionField('DocumentInstallments', Orders, DocumentInstallment_1.DocumentInstallment);
    /**
     * Static representation of the [[downPaymentsToDraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DOWN_PAYMENTS_TO_DRAW = new core_1.CollectionField('DownPaymentsToDraw', Orders, DownPaymentToDraw_1.DownPaymentToDraw);
    /**
     * Static representation of the [[taxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TAX_EXTENSION = new TaxExtension_1.TaxExtensionField('TaxExtension', Orders);
    /**
     * Static representation of the [[addressExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.ADDRESS_EXTENSION = new AddressExtension_1.AddressExtensionField('AddressExtension', Orders);
    /**
     * Static representation of the [[soiWizardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SOI_WIZARD_ID = new core_1.NumberField('SOIWizardId', Orders, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', Orders, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CURRENCY = new core_1.OneToOneLink('Currency', Orders, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', Orders, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', Orders, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', Orders, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', Orders, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.FORMS_1099 = new core_1.OneToOneLink('Forms1099', Orders, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', Orders, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', Orders, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.PROJECT_2 = new core_1.OneToOneLink('Project2', Orders, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', Orders, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.COUNTRY = new core_1.OneToOneLink('Country', Orders, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', Orders, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', Orders, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.NF_MODEL = new core_1.OneToOneLink('NFModel', Orders, NfModels_1.NfModels);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', Orders, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', Orders, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[branch]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.BRANCH = new core_1.OneToOneLink('Branch', Orders, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.DEPARTMENT = new core_1.OneToOneLink('Department', Orders, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Orders.POS_DAILY_SUMMARY = new core_1.OneToOneLink('POSDailySummary', Orders, PosDailySummary_1.PosDailySummary);
    /**
     * All fields of the Orders entity.
     */
    Orders._allFields = [
        Orders.DOC_ENTRY,
        Orders.DOC_NUM,
        Orders.DOC_TYPE,
        Orders.HAND_WRITTEN,
        Orders.PRINTED,
        Orders.DOC_DATE,
        Orders.DOC_DUE_DATE,
        Orders.CARD_CODE,
        Orders.CARD_NAME,
        Orders.ADDRESS,
        Orders.NUM_AT_CARD,
        Orders.DOC_TOTAL,
        Orders.ATTACHMENT_ENTRY,
        Orders.DOC_CURRENCY,
        Orders.DOC_RATE,
        Orders.REFERENCE_1,
        Orders.REFERENCE_2,
        Orders.COMMENTS,
        Orders.JOURNAL_MEMO,
        Orders.PAYMENT_GROUP_CODE,
        Orders.DOC_TIME,
        Orders.SALES_PERSON_CODE,
        Orders.TRANSPORTATION_CODE,
        Orders.CONFIRMED,
        Orders.IMPORT_FILE_NUM,
        Orders.SUMMERY_TYPE,
        Orders.CONTACT_PERSON_CODE,
        Orders.SHOW_SCN,
        Orders.SERIES,
        Orders.TAX_DATE,
        Orders.PARTIAL_SUPPLY,
        Orders.DOC_OBJECT_CODE,
        Orders.SHIP_TO_CODE,
        Orders.INDICATOR,
        Orders.FEDERAL_TAX_ID,
        Orders.DISCOUNT_PERCENT,
        Orders.PAYMENT_REFERENCE,
        Orders.CREATION_DATE,
        Orders.UPDATE_DATE,
        Orders.FINANCIAL_PERIOD,
        Orders.TRANS_NUM,
        Orders.VAT_SUM,
        Orders.VAT_SUM_SYS,
        Orders.VAT_SUM_FC,
        Orders.NET_PROCEDURE,
        Orders.DOC_TOTAL_FC,
        Orders.DOC_TOTAL_SYS,
        Orders.FORM_1099,
        Orders.BOX_1099,
        Orders.REVISION_PO,
        Orders.REQURIED_DATE,
        Orders.CANCEL_DATE,
        Orders.BLOCK_DUNNING,
        Orders.SUBMITTED,
        Orders.SEGMENT,
        Orders.PICK_STATUS,
        Orders.PICK,
        Orders.PAYMENT_METHOD,
        Orders.PAYMENT_BLOCK,
        Orders.PAYMENT_BLOCK_ENTRY,
        Orders.CENTRAL_BANK_INDICATOR,
        Orders.MAXIMUM_CASH_DISCOUNT,
        Orders.RESERVE,
        Orders.PROJECT,
        Orders.EXEMPTION_VALIDITY_DATE_FROM,
        Orders.EXEMPTION_VALIDITY_DATE_TO,
        Orders.WARE_HOUSE_UPDATE_TYPE,
        Orders.ROUNDING,
        Orders.EXTERNAL_CORRECTED_DOC_NUM,
        Orders.INTERNAL_CORRECTED_DOC_NUM,
        Orders.NEXT_CORRECTING_DOCUMENT,
        Orders.DEFERRED_TAX,
        Orders.TAX_EXEMPTION_LETTER_NUM,
        Orders.WT_APPLIED,
        Orders.WT_APPLIED_FC,
        Orders.BILL_OF_EXCHANGE_RESERVED,
        Orders.AGENT_CODE,
        Orders.WT_APPLIED_SC,
        Orders.TOTAL_EQUALIZATION_TAX,
        Orders.TOTAL_EQUALIZATION_TAX_FC,
        Orders.TOTAL_EQUALIZATION_TAX_SC,
        Orders.NUMBER_OF_INSTALLMENTS,
        Orders.APPLY_TAX_ON_FIRST_INSTALLMENT,
        Orders.WT_NON_SUBJECT_AMOUNT,
        Orders.WT_NON_SUBJECT_AMOUNT_SC,
        Orders.WT_NON_SUBJECT_AMOUNT_FC,
        Orders.WT_EXEMPTED_AMOUNT,
        Orders.WT_EXEMPTED_AMOUNT_SC,
        Orders.WT_EXEMPTED_AMOUNT_FC,
        Orders.BASE_AMOUNT,
        Orders.BASE_AMOUNT_SC,
        Orders.BASE_AMOUNT_FC,
        Orders.WT_AMOUNT,
        Orders.WT_AMOUNT_SC,
        Orders.WT_AMOUNT_FC,
        Orders.VAT_DATE,
        Orders.DOCUMENTS_OWNER,
        Orders.FOLIO_PREFIX_STRING,
        Orders.FOLIO_NUMBER,
        Orders.DOCUMENT_SUB_TYPE,
        Orders.BP_CHANNEL_CODE,
        Orders.BP_CHANNEL_CONTACT,
        Orders.ADDRESS_2,
        Orders.DOCUMENT_STATUS,
        Orders.PERIOD_INDICATOR,
        Orders.PAY_TO_CODE,
        Orders.MANUAL_NUMBER,
        Orders.USE_SHPD_GOODS_ACT,
        Orders.IS_PAY_TO_BANK,
        Orders.PAY_TO_BANK_COUNTRY,
        Orders.PAY_TO_BANK_CODE,
        Orders.PAY_TO_BANK_ACCOUNT_NO,
        Orders.PAY_TO_BANK_BRANCH,
        Orders.BPL_ID_ASSIGNED_TO_INVOICE,
        Orders.DOWN_PAYMENT,
        Orders.RESERVE_INVOICE,
        Orders.LANGUAGE_CODE,
        Orders.TRACKING_NUMBER,
        Orders.PICK_REMARK,
        Orders.CLOSING_DATE,
        Orders.SEQUENCE_CODE,
        Orders.SEQUENCE_SERIAL,
        Orders.SERIES_STRING,
        Orders.SUB_SERIES_STRING,
        Orders.SEQUENCE_MODEL,
        Orders.USE_CORRECTION_VAT_GROUP,
        Orders.TOTAL_DISCOUNT,
        Orders.DOWN_PAYMENT_AMOUNT,
        Orders.DOWN_PAYMENT_PERCENTAGE,
        Orders.DOWN_PAYMENT_TYPE,
        Orders.DOWN_PAYMENT_AMOUNT_SC,
        Orders.DOWN_PAYMENT_AMOUNT_FC,
        Orders.VAT_PERCENT,
        Orders.SERVICE_GROSS_PROFIT_PERCENT,
        Orders.OPENING_REMARKS,
        Orders.CLOSING_REMARKS,
        Orders.ROUNDING_DIFF_AMOUNT,
        Orders.ROUNDING_DIFF_AMOUNT_FC,
        Orders.ROUNDING_DIFF_AMOUNT_SC,
        Orders.CANCELLED,
        Orders.SIGNATURE_INPUT_MESSAGE,
        Orders.SIGNATURE_DIGEST,
        Orders.CERTIFICATION_NUMBER,
        Orders.PRIVATE_KEY_VERSION,
        Orders.CONTROL_ACCOUNT,
        Orders.INSURANCE_OPERATION_347,
        Orders.ARCHIVE_NONREMOVABLE_SALES_QUOTATION,
        Orders.GTS_CHECKER,
        Orders.GTS_PAYEE,
        Orders.EXTRA_MONTH,
        Orders.EXTRA_DAYS,
        Orders.CASH_DISCOUNT_DATE_OFFSET,
        Orders.START_FROM,
        Orders.NTS_APPROVED,
        Orders.E_TAX_WEB_SITE,
        Orders.E_TAX_NUMBER,
        Orders.NTS_APPROVED_NUMBER,
        Orders.E_DOC_GENERATION_TYPE,
        Orders.E_DOC_SERIES,
        Orders.E_DOC_NUM,
        Orders.E_DOC_EXPORT_FORMAT,
        Orders.E_DOC_STATUS,
        Orders.E_DOC_ERROR_CODE,
        Orders.E_DOC_ERROR_MESSAGE,
        Orders.DOWN_PAYMENT_STATUS,
        Orders.GROUP_SERIES,
        Orders.GROUP_NUMBER,
        Orders.GROUP_HAND_WRITTEN,
        Orders.REOPEN_ORIGINAL_DOCUMENT,
        Orders.REOPEN_MANUALLY_CLOSED_OR_CANCELED_DOCUMENT,
        Orders.CREATE_ONLINE_QUOTATION,
        Orders.POS_EQUIPMENT_NUMBER,
        Orders.POS_MANUFACTURER_SERIAL_NUMBER,
        Orders.POS_CASHIER_NUMBER,
        Orders.APPLY_CURRENT_VAT_RATES_FOR_DOWN_PAYMENTS_TO_DRAW,
        Orders.CLOSING_OPTION,
        Orders.SPECIFIED_CLOSING_DATE,
        Orders.OPEN_FOR_LANDED_COSTS,
        Orders.AUTHORIZATION_STATUS,
        Orders.TOTAL_DISCOUNT_FC,
        Orders.TOTAL_DISCOUNT_SC,
        Orders.RELEVANT_TO_GTS,
        Orders.BPL_NAME,
        Orders.VAT_REG_NUM,
        Orders.ANNUAL_INVOICE_DECLARATION_REFERENCE,
        Orders.SUPPLIER,
        Orders.RELEASER,
        Orders.RECEIVER,
        Orders.BLANKET_AGREEMENT_NUMBER,
        Orders.IS_ALTERATION,
        Orders.CANCEL_STATUS,
        Orders.ASSET_VALUE_DATE,
        Orders.REQUESTER,
        Orders.REQUESTER_NAME,
        Orders.REQUESTER_BRANCH,
        Orders.REQUESTER_DEPARTMENT,
        Orders.REQUESTER_EMAIL,
        Orders.SEND_NOTIFICATION,
        Orders.REQ_TYPE,
        Orders.DOCUMENT_DELIVERY,
        Orders.AUTHORIZATION_CODE,
        Orders.START_DELIVERY_DATE,
        Orders.START_DELIVERY_TIME,
        Orders.END_DELIVERY_DATE,
        Orders.END_DELIVERY_TIME,
        Orders.VEHICLE_PLATE,
        Orders.AT_DOCUMENT_TYPE,
        Orders.ELEC_COMM_STATUS,
        Orders.ELEC_COMM_MESSAGE,
        Orders.REUSE_DOCUMENT_NUM,
        Orders.REUSE_NOTA_FISCAL_NUM,
        Orders.PRINT_SEPA_DIRECT,
        Orders.FISCAL_DOC_NUM,
        Orders.POS_DAILY_SUMMARY_NO,
        Orders.POS_RECEIPT_NO,
        Orders.POINT_OF_ISSUE_CODE,
        Orders.LETTER,
        Orders.FOLIO_NUMBER_FROM,
        Orders.FOLIO_NUMBER_TO,
        Orders.INTERIM_TYPE,
        Orders.RELATED_TYPE,
        Orders.RELATED_ENTRY,
        Orders.DOCUMENT_TAX_ID,
        Orders.DATE_OF_REPORTING_CONTROL_STATEMENT_VAT,
        Orders.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        Orders.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        Orders.POS_CASH_REGISTER,
        Orders.UPDATE_TIME,
        Orders.PRICE_MODE,
        Orders.DOWN_PAYMENT_TRASACTION_ID,
        Orders.REVISION,
        Orders.ORIGINAL_REF_NO,
        Orders.ORIGINAL_REF_DATE,
        Orders.GST_TRANSACTION_TYPE,
        Orders.ORIGINAL_CREDIT_OR_DEBIT_NO,
        Orders.ORIGINAL_CREDIT_OR_DEBIT_DATE,
        Orders.E_COMMERCE_OPERATOR,
        Orders.E_COMMERCE_GSTIN,
        Orders.TAX_INVOICE_NO,
        Orders.TAX_INVOICE_DATE,
        Orders.SHIP_FROM,
        Orders.COMMISSION_TRADE,
        Orders.COMMISSION_TRADE_RETURN,
        Orders.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
        Orders.ISSUING_REASON,
        Orders.DOCUMENT_APPROVAL_REQUESTS,
        Orders.DOCUMENT_LINES,
        Orders.DOCUMENT_ADDITIONAL_EXPENSES,
        Orders.WITHHOLDING_TAX_DATA_WTX_COLLECTION,
        Orders.WITHHOLDING_TAX_DATA_COLLECTION,
        Orders.DOCUMENT_PACKAGES,
        Orders.DOCUMENT_SPECIAL_LINES,
        Orders.DOCUMENT_INSTALLMENTS,
        Orders.DOWN_PAYMENTS_TO_DRAW,
        Orders.TAX_EXTENSION,
        Orders.ADDRESS_EXTENSION,
        Orders.SOI_WIZARD_ID,
        Orders.BUSINESS_PARTNER,
        Orders.CURRENCY,
        Orders.PAYMENT_TERMS_TYPE,
        Orders.SALES_PERSON,
        Orders.SHIPPING_TYPE,
        Orders.FACTORING_INDICATOR,
        Orders.FORMS_1099,
        Orders.WIZARD_PAYMENT_METHOD,
        Orders.PAYMENT_BLOCK_2,
        Orders.PROJECT_2,
        Orders.EMPLOYEE_INFO,
        Orders.COUNTRY,
        Orders.BUSINESS_PLACE,
        Orders.USER_LANGUAGE,
        Orders.NF_MODEL,
        Orders.CHART_OF_ACCOUNT,
        Orders.TAX_WEB_SITE,
        Orders.BRANCH,
        Orders.DEPARTMENT,
        Orders.POS_DAILY_SUMMARY
    ];
    /**
     * All fields selector.
     */
    Orders.ALL_FIELDS = new core_1.AllFields('*', Orders);
    /**
     * All key fields of the Orders entity.
     */
    Orders._keyFields = [Orders.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Orders.
     */
    Orders._keys = Orders._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Orders = exports.Orders || (exports.Orders = {}));
exports.Orders = Orders;
//# sourceMappingURL=Orders.js.map