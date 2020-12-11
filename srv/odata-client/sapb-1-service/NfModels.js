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
exports.NfModels = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var NfModelsRequestBuilder_1 = require("./NfModelsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "NFModels" of service "SAPB1".
 */
var NfModels = /** @class */ (function (_super) {
    __extends(NfModels, _super);
    function NfModels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `NfModels`.
     * @returns A builder that constructs instances of entity type `NfModels`.
     */
    NfModels.builder = function () {
        return core_1.EntityV4.entityBuilder(NfModels);
    };
    /**
     * Returns a request builder to construct requests for operations on the `NfModels` entity type.
     * @returns A `NfModels` request builder.
     */
    NfModels.requestBuilder = function () {
        return new NfModelsRequestBuilder_1.NfModelsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NfModels`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NfModels`.
     */
    NfModels.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, NfModels);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    NfModels.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for NfModels.
     */
    NfModels._entityName = 'NFModels';
    /**
     * Default url path for the according service.
     */
    NfModels._defaultServicePath = '/b1s/v2/';
    return NfModels;
}(core_1.EntityV4));
exports.NfModels = NfModels;
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var FiscalPrinter_1 = require("./FiscalPrinter");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var DeliveryNotes_1 = require("./DeliveryNotes");
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
(function (NfModels) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.ABS_ENTRY = new core_1.StringField('AbsEntry', NfModels, 'Edm.String');
    /**
     * Static representation of the [[nfmName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.NFM_NAME = new core_1.StringField('NFMName', NfModels, 'Edm.String');
    /**
     * Static representation of the [[nfmDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.NFM_DESCRIPTION = new core_1.StringField('NFMDescription', NfModels, 'Edm.String');
    /**
     * Static representation of the [[nfmCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.NFM_CODE = new core_1.StringField('NFMCode', NfModels, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', NfModels, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[fiscalPrinter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.FISCAL_PRINTER = new core_1.OneToManyLink('FiscalPrinter', NfModels, FiscalPrinter_1.FiscalPrinter);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', NfModels, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', NfModels, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.QUOTATIONS = new core_1.OneToManyLink('Quotations', NfModels, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', NfModels, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', NfModels, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', NfModels, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', NfModels, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.INVOICES = new core_1.OneToManyLink('Invoices', NfModels, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', NfModels, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.ORDERS = new core_1.OneToManyLink('Orders', NfModels, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', NfModels, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.DRAFTS = new core_1.OneToManyLink('Drafts', NfModels, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.RETURNS = new core_1.OneToManyLink('Returns', NfModels, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', NfModels, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', NfModels, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', NfModels, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', NfModels, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', NfModels, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', NfModels, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', NfModels, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', NfModels, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', NfModels, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfModels.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', NfModels, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the NfModels entity.
     */
    NfModels._allFields = [
        NfModels.ABS_ENTRY,
        NfModels.NFM_NAME,
        NfModels.NFM_DESCRIPTION,
        NfModels.NFM_CODE,
        NfModels.INVENTORY_GEN_ENTRIES,
        NfModels.FISCAL_PRINTER,
        NfModels.PURCHASE_QUOTATIONS,
        NfModels.DELIVERY_NOTES,
        NfModels.QUOTATIONS,
        NfModels.INVENTORY_GEN_EXITS,
        NfModels.PURCHASE_REQUESTS,
        NfModels.RETURN_REQUEST,
        NfModels.PURCHASE_RETURNS,
        NfModels.INVOICES,
        NfModels.CREDIT_NOTES,
        NfModels.ORDERS,
        NfModels.DOWN_PAYMENTS,
        NfModels.DRAFTS,
        NfModels.RETURNS,
        NfModels.CORRECTION_INVOICE_REVERSAL,
        NfModels.CORRECTION_PURCHASE_INVOICE,
        NfModels.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        NfModels.PURCHASE_INVOICES,
        NfModels.PURCHASE_DELIVERY_NOTES,
        NfModels.CORRECTION_INVOICE,
        NfModels.PURCHASE_CREDIT_NOTES,
        NfModels.PURCHASE_DOWN_PAYMENTS,
        NfModels.PURCHASE_ORDERS,
        NfModels.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    NfModels.ALL_FIELDS = new core_1.AllFields('*', NfModels);
    /**
     * All key fields of the NfModels entity.
     */
    NfModels._keyFields = [NfModels.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property NfModels.
     */
    NfModels._keys = NfModels._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(NfModels = exports.NfModels || (exports.NfModels = {}));
exports.NfModels = NfModels;
//# sourceMappingURL=NfModels.js.map