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
exports.ShippingTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ShippingTypesRequestBuilder_1 = require("./ShippingTypesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ShippingTypes" of service "SAPB1".
 */
var ShippingTypes = /** @class */ (function (_super) {
    __extends(ShippingTypes, _super);
    function ShippingTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ShippingTypes`.
     * @returns A builder that constructs instances of entity type `ShippingTypes`.
     */
    ShippingTypes.builder = function () {
        return core_1.EntityV4.entityBuilder(ShippingTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ShippingTypes` entity type.
     * @returns A `ShippingTypes` request builder.
     */
    ShippingTypes.requestBuilder = function () {
        return new ShippingTypesRequestBuilder_1.ShippingTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ShippingTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ShippingTypes`.
     */
    ShippingTypes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ShippingTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ShippingTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ShippingTypes.
     */
    ShippingTypes._entityName = 'ShippingTypes';
    /**
     * Default url path for the according service.
     */
    ShippingTypes._defaultServicePath = '/b1s/v2/';
    return ShippingTypes;
}(core_1.EntityV4));
exports.ShippingTypes = ShippingTypes;
var LandedCosts_1 = require("./LandedCosts");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var Items_1 = require("./Items");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartners_1 = require("./BusinessPartners");
var Quotations_1 = require("./Quotations");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var BlanketAgreements_1 = require("./BlanketAgreements");
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
(function (ShippingTypes) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.CODE = new core_1.NumberField('Code', ShippingTypes, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.NAME = new core_1.StringField('Name', ShippingTypes, 'Edm.String');
    /**
     * Static representation of the [[website]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.WEBSITE = new core_1.StringField('Website', ShippingTypes, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[landedCosts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.LANDED_COSTS = new core_1.OneToManyLink('LandedCosts', ShippingTypes, LandedCosts_1.LandedCosts);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', ShippingTypes, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', ShippingTypes, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.ITEMS = new core_1.OneToManyLink('Items', ShippingTypes, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', ShippingTypes, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', ShippingTypes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.QUOTATIONS = new core_1.OneToManyLink('Quotations', ShippingTypes, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', ShippingTypes, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', ShippingTypes, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', ShippingTypes, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.BLANKET_AGREEMENTS = new core_1.OneToManyLink('BlanketAgreements', ShippingTypes, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', ShippingTypes, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.INVOICES = new core_1.OneToManyLink('Invoices', ShippingTypes, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', ShippingTypes, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.ORDERS = new core_1.OneToManyLink('Orders', ShippingTypes, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', ShippingTypes, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.DRAFTS = new core_1.OneToManyLink('Drafts', ShippingTypes, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.RETURNS = new core_1.OneToManyLink('Returns', ShippingTypes, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', ShippingTypes, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', ShippingTypes, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', ShippingTypes, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', ShippingTypes, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', ShippingTypes, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', ShippingTypes, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', ShippingTypes, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', ShippingTypes, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', ShippingTypes, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ShippingTypes.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', ShippingTypes, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the ShippingTypes entity.
     */
    ShippingTypes._allFields = [
        ShippingTypes.CODE,
        ShippingTypes.NAME,
        ShippingTypes.WEBSITE,
        ShippingTypes.LANDED_COSTS,
        ShippingTypes.INVENTORY_GEN_ENTRIES,
        ShippingTypes.PURCHASE_QUOTATIONS,
        ShippingTypes.ITEMS,
        ShippingTypes.DELIVERY_NOTES,
        ShippingTypes.BUSINESS_PARTNERS,
        ShippingTypes.QUOTATIONS,
        ShippingTypes.INVENTORY_GEN_EXITS,
        ShippingTypes.PURCHASE_REQUESTS,
        ShippingTypes.RETURN_REQUEST,
        ShippingTypes.BLANKET_AGREEMENTS,
        ShippingTypes.PURCHASE_RETURNS,
        ShippingTypes.INVOICES,
        ShippingTypes.CREDIT_NOTES,
        ShippingTypes.ORDERS,
        ShippingTypes.DOWN_PAYMENTS,
        ShippingTypes.DRAFTS,
        ShippingTypes.RETURNS,
        ShippingTypes.CORRECTION_INVOICE_REVERSAL,
        ShippingTypes.CORRECTION_PURCHASE_INVOICE,
        ShippingTypes.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        ShippingTypes.PURCHASE_INVOICES,
        ShippingTypes.PURCHASE_DELIVERY_NOTES,
        ShippingTypes.CORRECTION_INVOICE,
        ShippingTypes.PURCHASE_CREDIT_NOTES,
        ShippingTypes.PURCHASE_DOWN_PAYMENTS,
        ShippingTypes.PURCHASE_ORDERS,
        ShippingTypes.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    ShippingTypes.ALL_FIELDS = new core_1.AllFields('*', ShippingTypes);
    /**
     * All key fields of the ShippingTypes entity.
     */
    ShippingTypes._keyFields = [ShippingTypes.CODE];
    /**
     * Mapping of all key field names to the respective static field property ShippingTypes.
     */
    ShippingTypes._keys = ShippingTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ShippingTypes = exports.ShippingTypes || (exports.ShippingTypes = {}));
exports.ShippingTypes = ShippingTypes;
//# sourceMappingURL=ShippingTypes.js.map