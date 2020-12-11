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
exports.PaymentBlocks = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PaymentBlocksRequestBuilder_1 = require("./PaymentBlocksRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PaymentBlocks" of service "SAPB1".
 */
var PaymentBlocks = /** @class */ (function (_super) {
    __extends(PaymentBlocks, _super);
    function PaymentBlocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PaymentBlocks`.
     * @returns A builder that constructs instances of entity type `PaymentBlocks`.
     */
    PaymentBlocks.builder = function () {
        return core_1.EntityV4.entityBuilder(PaymentBlocks);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentBlocks` entity type.
     * @returns A `PaymentBlocks` request builder.
     */
    PaymentBlocks.requestBuilder = function () {
        return new PaymentBlocksRequestBuilder_1.PaymentBlocksRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentBlocks`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentBlocks`.
     */
    PaymentBlocks.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PaymentBlocks);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentBlocks.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentBlocks.
     */
    PaymentBlocks._entityName = 'PaymentBlocks';
    /**
     * Default url path for the according service.
     */
    PaymentBlocks._defaultServicePath = '/b1s/v2/';
    return PaymentBlocks;
}(core_1.EntityV4));
exports.PaymentBlocks = PaymentBlocks;
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
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
(function (PaymentBlocks) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.ABS_ENTRY = new core_1.NumberField('AbsEntry', PaymentBlocks, 'Edm.Int32');
    /**
     * Static representation of the [[paymentBlockCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.PAYMENT_BLOCK_CODE = new core_1.StringField('PaymentBlockCode', PaymentBlocks, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', PaymentBlocks, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', PaymentBlocks, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', PaymentBlocks, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', PaymentBlocks, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.QUOTATIONS = new core_1.OneToManyLink('Quotations', PaymentBlocks, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', PaymentBlocks, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', PaymentBlocks, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', PaymentBlocks, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', PaymentBlocks, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.INVOICES = new core_1.OneToManyLink('Invoices', PaymentBlocks, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', PaymentBlocks, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.ORDERS = new core_1.OneToManyLink('Orders', PaymentBlocks, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', PaymentBlocks, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.DRAFTS = new core_1.OneToManyLink('Drafts', PaymentBlocks, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.RETURNS = new core_1.OneToManyLink('Returns', PaymentBlocks, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', PaymentBlocks, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', PaymentBlocks, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', PaymentBlocks, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', PaymentBlocks, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', PaymentBlocks, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', PaymentBlocks, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', PaymentBlocks, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', PaymentBlocks, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', PaymentBlocks, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentBlocks.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', PaymentBlocks, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the PaymentBlocks entity.
     */
    PaymentBlocks._allFields = [
        PaymentBlocks.ABS_ENTRY,
        PaymentBlocks.PAYMENT_BLOCK_CODE,
        PaymentBlocks.INVENTORY_GEN_ENTRIES,
        PaymentBlocks.PURCHASE_QUOTATIONS,
        PaymentBlocks.DELIVERY_NOTES,
        PaymentBlocks.BUSINESS_PARTNERS,
        PaymentBlocks.QUOTATIONS,
        PaymentBlocks.INVENTORY_GEN_EXITS,
        PaymentBlocks.PURCHASE_REQUESTS,
        PaymentBlocks.RETURN_REQUEST,
        PaymentBlocks.PURCHASE_RETURNS,
        PaymentBlocks.INVOICES,
        PaymentBlocks.CREDIT_NOTES,
        PaymentBlocks.ORDERS,
        PaymentBlocks.DOWN_PAYMENTS,
        PaymentBlocks.DRAFTS,
        PaymentBlocks.RETURNS,
        PaymentBlocks.CORRECTION_INVOICE_REVERSAL,
        PaymentBlocks.CORRECTION_PURCHASE_INVOICE,
        PaymentBlocks.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        PaymentBlocks.PURCHASE_INVOICES,
        PaymentBlocks.PURCHASE_DELIVERY_NOTES,
        PaymentBlocks.CORRECTION_INVOICE,
        PaymentBlocks.PURCHASE_CREDIT_NOTES,
        PaymentBlocks.PURCHASE_DOWN_PAYMENTS,
        PaymentBlocks.PURCHASE_ORDERS,
        PaymentBlocks.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    PaymentBlocks.ALL_FIELDS = new core_1.AllFields('*', PaymentBlocks);
    /**
     * All key fields of the PaymentBlocks entity.
     */
    PaymentBlocks._keyFields = [PaymentBlocks.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PaymentBlocks.
     */
    PaymentBlocks._keys = PaymentBlocks._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentBlocks = exports.PaymentBlocks || (exports.PaymentBlocks = {}));
exports.PaymentBlocks = PaymentBlocks;
//# sourceMappingURL=PaymentBlocks.js.map