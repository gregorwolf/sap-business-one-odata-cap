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
exports.Forms1099 = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Forms1099RequestBuilder_1 = require("./Forms1099RequestBuilder");
var Boxes1099_1 = require("./Boxes1099");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Forms1099" of service "SAPB1".
 */
var Forms1099 = /** @class */ (function (_super) {
    __extends(Forms1099, _super);
    function Forms1099() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Forms1099`.
     * @returns A builder that constructs instances of entity type `Forms1099`.
     */
    Forms1099.builder = function () {
        return core_1.EntityV4.entityBuilder(Forms1099);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Forms1099` entity type.
     * @returns A `Forms1099` request builder.
     */
    Forms1099.requestBuilder = function () {
        return new Forms1099RequestBuilder_1.Forms1099RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Forms1099`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Forms1099`.
     */
    Forms1099.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Forms1099);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Forms1099.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Forms1099.
     */
    Forms1099._entityName = 'Forms1099';
    /**
     * Default url path for the according service.
     */
    Forms1099._defaultServicePath = '/b1s/v2/';
    return Forms1099;
}(core_1.EntityV4));
exports.Forms1099 = Forms1099;
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
(function (Forms1099) {
    /**
     * Static representation of the [[formCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.FORM_CODE = new core_1.NumberField('FormCode', Forms1099, 'Edm.Int32');
    /**
     * Static representation of the [[form1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.FORM_1099 = new core_1.StringField('Form1099', Forms1099, 'Edm.String');
    /**
     * Static representation of the [[boxes1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.BOXES_1099 = new core_1.CollectionField('Boxes1099', Forms1099, Boxes1099_1.Boxes1099);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', Forms1099, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', Forms1099, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', Forms1099, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', Forms1099, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.QUOTATIONS = new core_1.OneToManyLink('Quotations', Forms1099, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', Forms1099, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', Forms1099, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', Forms1099, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', Forms1099, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.INVOICES = new core_1.OneToManyLink('Invoices', Forms1099, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', Forms1099, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.ORDERS = new core_1.OneToManyLink('Orders', Forms1099, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', Forms1099, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.DRAFTS = new core_1.OneToManyLink('Drafts', Forms1099, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.RETURNS = new core_1.OneToManyLink('Returns', Forms1099, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', Forms1099, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', Forms1099, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', Forms1099, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', Forms1099, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', Forms1099, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', Forms1099, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', Forms1099, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', Forms1099, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', Forms1099, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Forms1099.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', Forms1099, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the Forms1099 entity.
     */
    Forms1099._allFields = [
        Forms1099.FORM_CODE,
        Forms1099.FORM_1099,
        Forms1099.BOXES_1099,
        Forms1099.INVENTORY_GEN_ENTRIES,
        Forms1099.PURCHASE_QUOTATIONS,
        Forms1099.DELIVERY_NOTES,
        Forms1099.BUSINESS_PARTNERS,
        Forms1099.QUOTATIONS,
        Forms1099.INVENTORY_GEN_EXITS,
        Forms1099.PURCHASE_REQUESTS,
        Forms1099.RETURN_REQUEST,
        Forms1099.PURCHASE_RETURNS,
        Forms1099.INVOICES,
        Forms1099.CREDIT_NOTES,
        Forms1099.ORDERS,
        Forms1099.DOWN_PAYMENTS,
        Forms1099.DRAFTS,
        Forms1099.RETURNS,
        Forms1099.CORRECTION_INVOICE_REVERSAL,
        Forms1099.CORRECTION_PURCHASE_INVOICE,
        Forms1099.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        Forms1099.PURCHASE_INVOICES,
        Forms1099.PURCHASE_DELIVERY_NOTES,
        Forms1099.CORRECTION_INVOICE,
        Forms1099.PURCHASE_CREDIT_NOTES,
        Forms1099.PURCHASE_DOWN_PAYMENTS,
        Forms1099.PURCHASE_ORDERS,
        Forms1099.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    Forms1099.ALL_FIELDS = new core_1.AllFields('*', Forms1099);
    /**
     * All key fields of the Forms1099 entity.
     */
    Forms1099._keyFields = [Forms1099.FORM_CODE];
    /**
     * Mapping of all key field names to the respective static field property Forms1099.
     */
    Forms1099._keys = Forms1099._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Forms1099 = exports.Forms1099 || (exports.Forms1099 = {}));
exports.Forms1099 = Forms1099;
//# sourceMappingURL=Forms1099.js.map