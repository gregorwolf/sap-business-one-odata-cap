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
exports.FactoringIndicators = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var FactoringIndicatorsRequestBuilder_1 = require("./FactoringIndicatorsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FactoringIndicators" of service "SAPB1".
 */
var FactoringIndicators = /** @class */ (function (_super) {
    __extends(FactoringIndicators, _super);
    function FactoringIndicators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `FactoringIndicators`.
     * @returns A builder that constructs instances of entity type `FactoringIndicators`.
     */
    FactoringIndicators.builder = function () {
        return core_1.EntityV4.entityBuilder(FactoringIndicators);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FactoringIndicators` entity type.
     * @returns A `FactoringIndicators` request builder.
     */
    FactoringIndicators.requestBuilder = function () {
        return new FactoringIndicatorsRequestBuilder_1.FactoringIndicatorsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FactoringIndicators`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FactoringIndicators`.
     */
    FactoringIndicators.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, FactoringIndicators);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FactoringIndicators.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FactoringIndicators.
     */
    FactoringIndicators._entityName = 'FactoringIndicators';
    /**
     * Default url path for the according service.
     */
    FactoringIndicators._defaultServicePath = '/b1s/v2/';
    return FactoringIndicators;
}(core_1.EntityV4));
exports.FactoringIndicators = FactoringIndicators;
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var JournalEntries_1 = require("./JournalEntries");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartners_1 = require("./BusinessPartners");
var Quotations_1 = require("./Quotations");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var CreditNotes_1 = require("./CreditNotes");
var Orders_1 = require("./Orders");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
var Returns_1 = require("./Returns");
var CorrectionInvoiceReversal_1 = require("./CorrectionInvoiceReversal");
var CorrectionPurchaseInvoice_1 = require("./CorrectionPurchaseInvoice");
var CorrectionPurchaseInvoiceReversal_1 = require("./CorrectionPurchaseInvoiceReversal");
var PurchaseInvoices_1 = require("./PurchaseInvoices");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
var CorrectionInvoice_1 = require("./CorrectionInvoice");
var PurchaseCreditNotes_1 = require("./PurchaseCreditNotes");
var PurchaseDownPayments_1 = require("./PurchaseDownPayments");
var PurchaseOrders_1 = require("./PurchaseOrders");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
(function (FactoringIndicators) {
    /**
     * Static representation of the [[indicatorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.INDICATOR_CODE = new core_1.StringField('IndicatorCode', FactoringIndicators, 'Edm.String');
    /**
     * Static representation of the [[indicatorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.INDICATOR_NAME = new core_1.StringField('IndicatorName', FactoringIndicators, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', FactoringIndicators, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', FactoringIndicators, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.JOURNAL_ENTRIES = new core_1.OneToManyLink('JournalEntries', FactoringIndicators, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', FactoringIndicators, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', FactoringIndicators, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.QUOTATIONS = new core_1.OneToManyLink('Quotations', FactoringIndicators, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', FactoringIndicators, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', FactoringIndicators, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', FactoringIndicators, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', FactoringIndicators, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.INVOICES = new core_1.OneToManyLink('Invoices', FactoringIndicators, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', FactoringIndicators, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.ORDERS = new core_1.OneToManyLink('Orders', FactoringIndicators, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', FactoringIndicators, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.DRAFTS = new core_1.OneToManyLink('Drafts', FactoringIndicators, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.RETURNS = new core_1.OneToManyLink('Returns', FactoringIndicators, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', FactoringIndicators, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', FactoringIndicators, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', FactoringIndicators, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', FactoringIndicators, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', FactoringIndicators, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', FactoringIndicators, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', FactoringIndicators, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', FactoringIndicators, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', FactoringIndicators, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FactoringIndicators.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', FactoringIndicators, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the FactoringIndicators entity.
     */
    FactoringIndicators._allFields = [
        FactoringIndicators.INDICATOR_CODE,
        FactoringIndicators.INDICATOR_NAME,
        FactoringIndicators.INVENTORY_GEN_ENTRIES,
        FactoringIndicators.PURCHASE_QUOTATIONS,
        FactoringIndicators.JOURNAL_ENTRIES,
        FactoringIndicators.DELIVERY_NOTES,
        FactoringIndicators.BUSINESS_PARTNERS,
        FactoringIndicators.QUOTATIONS,
        FactoringIndicators.INVENTORY_GEN_EXITS,
        FactoringIndicators.PURCHASE_REQUESTS,
        FactoringIndicators.RETURN_REQUEST,
        FactoringIndicators.PURCHASE_RETURNS,
        FactoringIndicators.INVOICES,
        FactoringIndicators.CREDIT_NOTES,
        FactoringIndicators.ORDERS,
        FactoringIndicators.DOWN_PAYMENTS,
        FactoringIndicators.DRAFTS,
        FactoringIndicators.RETURNS,
        FactoringIndicators.CORRECTION_INVOICE_REVERSAL,
        FactoringIndicators.CORRECTION_PURCHASE_INVOICE,
        FactoringIndicators.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        FactoringIndicators.PURCHASE_INVOICES,
        FactoringIndicators.PURCHASE_DELIVERY_NOTES,
        FactoringIndicators.CORRECTION_INVOICE,
        FactoringIndicators.PURCHASE_CREDIT_NOTES,
        FactoringIndicators.PURCHASE_DOWN_PAYMENTS,
        FactoringIndicators.PURCHASE_ORDERS,
        FactoringIndicators.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    FactoringIndicators.ALL_FIELDS = new core_1.AllFields('*', FactoringIndicators);
    /**
     * All key fields of the FactoringIndicators entity.
     */
    FactoringIndicators._keyFields = [FactoringIndicators.INDICATOR_CODE];
    /**
     * Mapping of all key field names to the respective static field property FactoringIndicators.
     */
    FactoringIndicators._keys = FactoringIndicators._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FactoringIndicators = exports.FactoringIndicators || (exports.FactoringIndicators = {}));
exports.FactoringIndicators = FactoringIndicators;
//# sourceMappingURL=FactoringIndicators.js.map