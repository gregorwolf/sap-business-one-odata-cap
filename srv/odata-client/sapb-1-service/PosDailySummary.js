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
exports.PosDailySummary = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PosDailySummaryRequestBuilder_1 = require("./PosDailySummaryRequestBuilder");
var PosTotalizer_1 = require("./PosTotalizer");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "POSDailySummary" of service "SAPB1".
 */
var PosDailySummary = /** @class */ (function (_super) {
    __extends(PosDailySummary, _super);
    function PosDailySummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PosDailySummary`.
     * @returns A builder that constructs instances of entity type `PosDailySummary`.
     */
    PosDailySummary.builder = function () {
        return core_1.EntityV4.entityBuilder(PosDailySummary);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PosDailySummary` entity type.
     * @returns A `PosDailySummary` request builder.
     */
    PosDailySummary.requestBuilder = function () {
        return new PosDailySummaryRequestBuilder_1.PosDailySummaryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PosDailySummary`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PosDailySummary`.
     */
    PosDailySummary.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PosDailySummary);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PosDailySummary.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PosDailySummary.
     */
    PosDailySummary._entityName = 'POSDailySummary';
    /**
     * Default url path for the according service.
     */
    PosDailySummary._defaultServicePath = '/b1s/v2/';
    return PosDailySummary;
}(core_1.EntityV4));
exports.PosDailySummary = PosDailySummary;
var InventoryGenEntries_1 = require("./InventoryGenEntries");
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
var FiscalPrinter_1 = require("./FiscalPrinter");
var PurchaseInvoices_1 = require("./PurchaseInvoices");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
var CorrectionInvoice_1 = require("./CorrectionInvoice");
var PurchaseCreditNotes_1 = require("./PurchaseCreditNotes");
var PurchaseDownPayments_1 = require("./PurchaseDownPayments");
var PurchaseOrders_1 = require("./PurchaseOrders");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
(function (PosDailySummary) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.ABS_ENTRY = new core_1.NumberField('AbsEntry', PosDailySummary, 'Edm.Int32');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.DATE = new core_1.DateField('Date', PosDailySummary, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[equipmentNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.EQUIPMENT_NO = new core_1.StringField('EquipmentNo', PosDailySummary, 'Edm.String');
    /**
     * Static representation of the [[counterPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.COUNTER_POSITION = new core_1.NumberField('CounterPosition', PosDailySummary, 'Edm.Int32');
    /**
     * Static representation of the [[resetCounterPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.RESET_COUNTER_POSITION = new core_1.NumberField('ResetCounterPosition', PosDailySummary, 'Edm.Int32');
    /**
     * Static representation of the [[operationCounter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.OPERATION_COUNTER = new core_1.NumberField('OperationCounter', PosDailySummary, 'Edm.Int32');
    /**
     * Static representation of the [[total]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.TOTAL = new core_1.NumberField('Total', PosDailySummary, 'Edm.Double');
    /**
     * Static representation of the [[grossSales]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.GROSS_SALES = new core_1.NumberField('GrossSales', PosDailySummary, 'Edm.Double');
    /**
     * Static representation of the [[pisTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.PIS_TOTAL = new core_1.NumberField('PISTotal', PosDailySummary, 'Edm.Double');
    /**
     * Static representation of the [[cofinsTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.COFINS_TOTAL = new core_1.NumberField('COFINSTotal', PosDailySummary, 'Edm.Double');
    /**
     * Static representation of the [[posTotalizerCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.POS_TOTALIZER_COLLECTION = new core_1.CollectionField('POSTotalizerCollection', PosDailySummary, PosTotalizer_1.PosTotalizer);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', PosDailySummary, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', PosDailySummary, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', PosDailySummary, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.QUOTATIONS = new core_1.OneToManyLink('Quotations', PosDailySummary, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', PosDailySummary, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', PosDailySummary, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', PosDailySummary, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', PosDailySummary, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.INVOICES = new core_1.OneToManyLink('Invoices', PosDailySummary, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', PosDailySummary, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.ORDERS = new core_1.OneToManyLink('Orders', PosDailySummary, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', PosDailySummary, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.DRAFTS = new core_1.OneToManyLink('Drafts', PosDailySummary, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.RETURNS = new core_1.OneToManyLink('Returns', PosDailySummary, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', PosDailySummary, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', PosDailySummary, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', PosDailySummary, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-one navigation property [[fiscalPrinter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.FISCAL_PRINTER = new core_1.OneToOneLink('FiscalPrinter', PosDailySummary, FiscalPrinter_1.FiscalPrinter);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', PosDailySummary, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', PosDailySummary, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', PosDailySummary, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', PosDailySummary, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', PosDailySummary, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', PosDailySummary, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PosDailySummary.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', PosDailySummary, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the PosDailySummary entity.
     */
    PosDailySummary._allFields = [
        PosDailySummary.ABS_ENTRY,
        PosDailySummary.DATE,
        PosDailySummary.EQUIPMENT_NO,
        PosDailySummary.COUNTER_POSITION,
        PosDailySummary.RESET_COUNTER_POSITION,
        PosDailySummary.OPERATION_COUNTER,
        PosDailySummary.TOTAL,
        PosDailySummary.GROSS_SALES,
        PosDailySummary.PIS_TOTAL,
        PosDailySummary.COFINS_TOTAL,
        PosDailySummary.POS_TOTALIZER_COLLECTION,
        PosDailySummary.INVENTORY_GEN_ENTRIES,
        PosDailySummary.PURCHASE_QUOTATIONS,
        PosDailySummary.DELIVERY_NOTES,
        PosDailySummary.QUOTATIONS,
        PosDailySummary.INVENTORY_GEN_EXITS,
        PosDailySummary.PURCHASE_REQUESTS,
        PosDailySummary.RETURN_REQUEST,
        PosDailySummary.PURCHASE_RETURNS,
        PosDailySummary.INVOICES,
        PosDailySummary.CREDIT_NOTES,
        PosDailySummary.ORDERS,
        PosDailySummary.DOWN_PAYMENTS,
        PosDailySummary.DRAFTS,
        PosDailySummary.RETURNS,
        PosDailySummary.CORRECTION_INVOICE_REVERSAL,
        PosDailySummary.CORRECTION_PURCHASE_INVOICE,
        PosDailySummary.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        PosDailySummary.FISCAL_PRINTER,
        PosDailySummary.PURCHASE_INVOICES,
        PosDailySummary.PURCHASE_DELIVERY_NOTES,
        PosDailySummary.CORRECTION_INVOICE,
        PosDailySummary.PURCHASE_CREDIT_NOTES,
        PosDailySummary.PURCHASE_DOWN_PAYMENTS,
        PosDailySummary.PURCHASE_ORDERS,
        PosDailySummary.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    PosDailySummary.ALL_FIELDS = new core_1.AllFields('*', PosDailySummary);
    /**
     * All key fields of the PosDailySummary entity.
     */
    PosDailySummary._keyFields = [PosDailySummary.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property PosDailySummary.
     */
    PosDailySummary._keys = PosDailySummary._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PosDailySummary = exports.PosDailySummary || (exports.PosDailySummary = {}));
exports.PosDailySummary = PosDailySummary;
//# sourceMappingURL=PosDailySummary.js.map