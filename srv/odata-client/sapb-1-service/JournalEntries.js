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
exports.JournalEntries = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var JournalEntriesRequestBuilder_1 = require("./JournalEntriesRequestBuilder");
var JournalEntryLine_1 = require("./JournalEntryLine");
var WithholdingTaxData_1 = require("./WithholdingTaxData");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "JournalEntries" of service "SAPB1".
 */
var JournalEntries = /** @class */ (function (_super) {
    __extends(JournalEntries, _super);
    function JournalEntries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `JournalEntries`.
     * @returns A builder that constructs instances of entity type `JournalEntries`.
     */
    JournalEntries.builder = function () {
        return core_1.EntityV4.entityBuilder(JournalEntries);
    };
    /**
     * Returns a request builder to construct requests for operations on the `JournalEntries` entity type.
     * @returns A `JournalEntries` request builder.
     */
    JournalEntries.requestBuilder = function () {
        return new JournalEntriesRequestBuilder_1.JournalEntriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JournalEntries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JournalEntries`.
     */
    JournalEntries.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, JournalEntries);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    JournalEntries.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for JournalEntries.
     */
    JournalEntries._entityName = 'JournalEntries';
    /**
     * Default url path for the according service.
     */
    JournalEntries._defaultServicePath = '/b1s/v2/';
    return JournalEntries;
}(core_1.EntityV4));
exports.JournalEntries = JournalEntries;
var LandedCosts_1 = require("./LandedCosts");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var ChecksforPayment_1 = require("./ChecksforPayment");
var TransactionCodes_1 = require("./TransactionCodes");
var Projects_1 = require("./Projects");
var FactoringIndicators_1 = require("./FactoringIndicators");
var WarehouseLocations_1 = require("./WarehouseLocations");
var JournalEntryDocumentTypes_1 = require("./JournalEntryDocumentTypes");
var BlanketAgreements_1 = require("./BlanketAgreements");
var ProductionOrders_1 = require("./ProductionOrders");
var DeliveryNotes_1 = require("./DeliveryNotes");
var InventoryGenExits_1 = require("./InventoryGenExits");
var ReturnRequest_1 = require("./ReturnRequest");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var CreditNotes_1 = require("./CreditNotes");
var StockTransfers_1 = require("./StockTransfers");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
var StockTransferDrafts_1 = require("./StockTransferDrafts");
var Returns_1 = require("./Returns");
var MaterialRevaluation_1 = require("./MaterialRevaluation");
var CorrectionInvoiceReversal_1 = require("./CorrectionInvoiceReversal");
var CorrectionPurchaseInvoice_1 = require("./CorrectionPurchaseInvoice");
var CorrectionPurchaseInvoiceReversal_1 = require("./CorrectionPurchaseInvoiceReversal");
var PurchaseInvoices_1 = require("./PurchaseInvoices");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
var BillOfExchangeTransactions_1 = require("./BillOfExchangeTransactions");
var CorrectionInvoice_1 = require("./CorrectionInvoice");
var PurchaseCreditNotes_1 = require("./PurchaseCreditNotes");
var PurchaseDownPayments_1 = require("./PurchaseDownPayments");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
(function (JournalEntries) {
    /**
     * Static representation of the [[referenceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.REFERENCE_DATE = new core_1.DateField('ReferenceDate', JournalEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[memo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.MEMO = new core_1.StringField('Memo', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.REFERENCE = new core_1.StringField('Reference', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.REFERENCE_2 = new core_1.StringField('Reference2', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[transactionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.TRANSACTION_CODE = new core_1.StringField('TransactionCode', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PROJECT_CODE = new core_1.StringField('ProjectCode', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.TAX_DATE = new core_1.DateField('TaxDate', JournalEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[jdtNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.JDT_NUM = new core_1.NumberField('JdtNum', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.INDICATOR = new core_1.StringField('Indicator', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[useAutoStorno]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.USE_AUTO_STORNO = new core_1.EnumField('UseAutoStorno', JournalEntries);
    /**
     * Static representation of the [[stornoDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.STORNO_DATE = new core_1.DateField('StornoDate', JournalEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.VAT_DATE = new core_1.DateField('VatDate', JournalEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.SERIES = new core_1.NumberField('Series', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[stampTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.STAMP_TAX = new core_1.EnumField('StampTax', JournalEntries);
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.DUE_DATE = new core_1.DateField('DueDate', JournalEntries, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[autoVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.AUTO_VAT = new core_1.EnumField('AutoVAT', JournalEntries);
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.NUMBER = new core_1.NumberField('Number', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[reportEu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.REPORT_EU = new core_1.EnumField('ReportEU', JournalEntries);
    /**
     * Static representation of the [[report347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.REPORT_347 = new core_1.EnumField('Report347', JournalEntries);
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PRINTED = new core_1.EnumField('Printed', JournalEntries);
    /**
     * Static representation of the [[locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.LOCATION_CODE = new core_1.NumberField('LocationCode', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[originalJournal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.ORIGINAL_JOURNAL = new core_1.EnumField('OriginalJournal', JournalEntries);
    /**
     * Static representation of the [[original]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.ORIGINAL = new core_1.NumberField('Original', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.BASE_REFERENCE = new core_1.StringField('BaseReference', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[blockDunningLetter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.BLOCK_DUNNING_LETTER = new core_1.EnumField('BlockDunningLetter', JournalEntries);
    /**
     * Static representation of the [[automaticWt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.AUTOMATIC_WT = new core_1.EnumField('AutomaticWT', JournalEntries);
    /**
     * Static representation of the [[wtSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.WT_SUM = new core_1.NumberField('WTSum', JournalEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.WT_SUM_SC = new core_1.NumberField('WTSumSC', JournalEntries, 'Edm.Double');
    /**
     * Static representation of the [[wtSumFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.WT_SUM_FC = new core_1.NumberField('WTSumFC', JournalEntries, 'Edm.Double');
    /**
     * Static representation of the [[signatureInputMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.SIGNATURE_INPUT_MESSAGE = new core_1.StringField('SignatureInputMessage', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[signatureDigest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.SIGNATURE_DIGEST = new core_1.StringField('SignatureDigest', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[certificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.CERTIFICATION_NUMBER = new core_1.StringField('CertificationNumber', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[privateKeyVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PRIVATE_KEY_VERSION = new core_1.NumberField('PrivateKeyVersion', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[corisptivi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.CORISPTIVI = new core_1.EnumField('Corisptivi', JournalEntries);
    /**
     * Static representation of the [[reference3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.REFERENCE_3 = new core_1.StringField('Reference3', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.DOCUMENT_TYPE = new core_1.StringField('DocumentType', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.DEFERRED_TAX = new core_1.EnumField('DeferredTax', JournalEntries);
    /**
     * Static representation of the [[blanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('BlanketAgreementNumber', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[operationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.OPERATION_CODE = new core_1.EnumField('OperationCode', JournalEntries);
    /**
     * Static representation of the [[residenceNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.RESIDENCE_NUMBER_TYPE = new core_1.EnumField('ResidenceNumberType', JournalEntries);
    /**
     * Static representation of the [[ecdPostingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.ECD_POSTING_TYPE = new core_1.EnumField('ECDPostingType', JournalEntries);
    /**
     * Static representation of the [[exposedTransNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.EXPOSED_TRANS_NUMBER = new core_1.NumberField('ExposedTransNumber', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.LETTER = new core_1.EnumField('Letter', JournalEntries);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', JournalEntries, 'Edm.Int32');
    /**
     * Static representation of the [[isCostCenterTransfer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.IS_COST_CENTER_TRANSFER = new core_1.EnumField('IsCostCenterTransfer', JournalEntries);
    /**
     * Static representation of the [[reportingSectionControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.REPORTING_SECTION_CONTROL_STATEMENT_VAT = new core_1.StringField('ReportingSectionControlStatementVAT', JournalEntries, 'Edm.String');
    /**
     * Static representation of the [[excludeFromTaxReportControlStatementVat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT = new core_1.EnumField('ExcludeFromTaxReportControlStatementVAT', JournalEntries);
    /**
     * Static representation of the [[journalEntryLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.JOURNAL_ENTRY_LINES = new core_1.CollectionField('JournalEntryLines', JournalEntries, JournalEntryLine_1.JournalEntryLine);
    /**
     * Static representation of the [[withholdingTaxDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.WITHHOLDING_TAX_DATA_COLLECTION = new core_1.CollectionField('WithholdingTaxDataCollection', JournalEntries, WithholdingTaxData_1.WithholdingTaxData);
    /**
     * Static representation of the one-to-many navigation property [[landedCosts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.LANDED_COSTS = new core_1.OneToManyLink('LandedCosts', JournalEntries, LandedCosts_1.LandedCosts);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', JournalEntries, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[checksforPayment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.CHECKSFOR_PAYMENT = new core_1.OneToManyLink('ChecksforPayment', JournalEntries, ChecksforPayment_1.ChecksforPayment);
    /**
     * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.TRANSACTION_CODE_2 = new core_1.OneToOneLink('TransactionCode2', JournalEntries, TransactionCodes_1.TransactionCodes);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PROJECT = new core_1.OneToOneLink('Project', JournalEntries, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', JournalEntries, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.WAREHOUSE_LOCATION = new core_1.OneToOneLink('WarehouseLocation', JournalEntries, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-one navigation property [[journalEntryDocumentType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.JOURNAL_ENTRY_DOCUMENT_TYPE = new core_1.OneToOneLink('JournalEntryDocumentType', JournalEntries, JournalEntryDocumentTypes_1.JournalEntryDocumentTypes);
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.BLANKET_AGREEMENT = new core_1.OneToOneLink('BlanketAgreement', JournalEntries, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PRODUCTION_ORDERS = new core_1.OneToManyLink('ProductionOrders', JournalEntries, ProductionOrders_1.ProductionOrders);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', JournalEntries, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', JournalEntries, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', JournalEntries, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', JournalEntries, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.INVOICES = new core_1.OneToManyLink('Invoices', JournalEntries, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', JournalEntries, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.STOCK_TRANSFERS = new core_1.OneToManyLink('StockTransfers', JournalEntries, StockTransfers_1.StockTransfers);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', JournalEntries, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.DRAFTS = new core_1.OneToManyLink('Drafts', JournalEntries, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.STOCK_TRANSFER_DRAFTS = new core_1.OneToManyLink('StockTransferDrafts', JournalEntries, StockTransferDrafts_1.StockTransferDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.RETURNS = new core_1.OneToManyLink('Returns', JournalEntries, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[materialRevaluation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.MATERIAL_REVALUATION = new core_1.OneToManyLink('MaterialRevaluation', JournalEntries, MaterialRevaluation_1.MaterialRevaluation);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', JournalEntries, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', JournalEntries, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', JournalEntries, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', JournalEntries, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', JournalEntries, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[billOfExchangeTransactions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.BILL_OF_EXCHANGE_TRANSACTIONS = new core_1.OneToManyLink('BillOfExchangeTransactions', JournalEntries, BillOfExchangeTransactions_1.BillOfExchangeTransactions);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', JournalEntries, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', JournalEntries, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', JournalEntries, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JournalEntries.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', JournalEntries, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the JournalEntries entity.
     */
    JournalEntries._allFields = [
        JournalEntries.REFERENCE_DATE,
        JournalEntries.MEMO,
        JournalEntries.REFERENCE,
        JournalEntries.REFERENCE_2,
        JournalEntries.TRANSACTION_CODE,
        JournalEntries.PROJECT_CODE,
        JournalEntries.TAX_DATE,
        JournalEntries.JDT_NUM,
        JournalEntries.INDICATOR,
        JournalEntries.USE_AUTO_STORNO,
        JournalEntries.STORNO_DATE,
        JournalEntries.VAT_DATE,
        JournalEntries.SERIES,
        JournalEntries.STAMP_TAX,
        JournalEntries.DUE_DATE,
        JournalEntries.AUTO_VAT,
        JournalEntries.NUMBER,
        JournalEntries.FOLIO_NUMBER,
        JournalEntries.FOLIO_PREFIX_STRING,
        JournalEntries.REPORT_EU,
        JournalEntries.REPORT_347,
        JournalEntries.PRINTED,
        JournalEntries.LOCATION_CODE,
        JournalEntries.ORIGINAL_JOURNAL,
        JournalEntries.ORIGINAL,
        JournalEntries.BASE_REFERENCE,
        JournalEntries.BLOCK_DUNNING_LETTER,
        JournalEntries.AUTOMATIC_WT,
        JournalEntries.WT_SUM,
        JournalEntries.WT_SUM_SC,
        JournalEntries.WT_SUM_FC,
        JournalEntries.SIGNATURE_INPUT_MESSAGE,
        JournalEntries.SIGNATURE_DIGEST,
        JournalEntries.CERTIFICATION_NUMBER,
        JournalEntries.PRIVATE_KEY_VERSION,
        JournalEntries.CORISPTIVI,
        JournalEntries.REFERENCE_3,
        JournalEntries.DOCUMENT_TYPE,
        JournalEntries.DEFERRED_TAX,
        JournalEntries.BLANKET_AGREEMENT_NUMBER,
        JournalEntries.OPERATION_CODE,
        JournalEntries.RESIDENCE_NUMBER_TYPE,
        JournalEntries.ECD_POSTING_TYPE,
        JournalEntries.EXPOSED_TRANS_NUMBER,
        JournalEntries.POINT_OF_ISSUE_CODE,
        JournalEntries.LETTER,
        JournalEntries.FOLIO_NUMBER_FROM,
        JournalEntries.FOLIO_NUMBER_TO,
        JournalEntries.IS_COST_CENTER_TRANSFER,
        JournalEntries.REPORTING_SECTION_CONTROL_STATEMENT_VAT,
        JournalEntries.EXCLUDE_FROM_TAX_REPORT_CONTROL_STATEMENT_VAT,
        JournalEntries.JOURNAL_ENTRY_LINES,
        JournalEntries.WITHHOLDING_TAX_DATA_COLLECTION,
        JournalEntries.LANDED_COSTS,
        JournalEntries.INVENTORY_GEN_ENTRIES,
        JournalEntries.CHECKSFOR_PAYMENT,
        JournalEntries.TRANSACTION_CODE_2,
        JournalEntries.PROJECT,
        JournalEntries.FACTORING_INDICATOR,
        JournalEntries.WAREHOUSE_LOCATION,
        JournalEntries.JOURNAL_ENTRY_DOCUMENT_TYPE,
        JournalEntries.BLANKET_AGREEMENT,
        JournalEntries.PRODUCTION_ORDERS,
        JournalEntries.DELIVERY_NOTES,
        JournalEntries.INVENTORY_GEN_EXITS,
        JournalEntries.RETURN_REQUEST,
        JournalEntries.PURCHASE_RETURNS,
        JournalEntries.INVOICES,
        JournalEntries.CREDIT_NOTES,
        JournalEntries.STOCK_TRANSFERS,
        JournalEntries.DOWN_PAYMENTS,
        JournalEntries.DRAFTS,
        JournalEntries.STOCK_TRANSFER_DRAFTS,
        JournalEntries.RETURNS,
        JournalEntries.MATERIAL_REVALUATION,
        JournalEntries.CORRECTION_INVOICE_REVERSAL,
        JournalEntries.CORRECTION_PURCHASE_INVOICE,
        JournalEntries.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        JournalEntries.PURCHASE_INVOICES,
        JournalEntries.PURCHASE_DELIVERY_NOTES,
        JournalEntries.BILL_OF_EXCHANGE_TRANSACTIONS,
        JournalEntries.CORRECTION_INVOICE,
        JournalEntries.PURCHASE_CREDIT_NOTES,
        JournalEntries.PURCHASE_DOWN_PAYMENTS,
        JournalEntries.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    JournalEntries.ALL_FIELDS = new core_1.AllFields('*', JournalEntries);
    /**
     * All key fields of the JournalEntries entity.
     */
    JournalEntries._keyFields = [JournalEntries.JDT_NUM];
    /**
     * Mapping of all key field names to the respective static field property JournalEntries.
     */
    JournalEntries._keys = JournalEntries._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(JournalEntries = exports.JournalEntries || (exports.JournalEntries = {}));
exports.JournalEntries = JournalEntries;
//# sourceMappingURL=JournalEntries.js.map