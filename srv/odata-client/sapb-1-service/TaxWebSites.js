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
exports.TaxWebSites = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TaxWebSitesRequestBuilder_1 = require("./TaxWebSitesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TaxWebSites" of service "SAPB1".
 */
var TaxWebSites = /** @class */ (function (_super) {
    __extends(TaxWebSites, _super);
    function TaxWebSites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `TaxWebSites`.
     * @returns A builder that constructs instances of entity type `TaxWebSites`.
     */
    TaxWebSites.builder = function () {
        return core_1.EntityV4.entityBuilder(TaxWebSites);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TaxWebSites` entity type.
     * @returns A `TaxWebSites` request builder.
     */
    TaxWebSites.requestBuilder = function () {
        return new TaxWebSitesRequestBuilder_1.TaxWebSitesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TaxWebSites`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TaxWebSites`.
     */
    TaxWebSites.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, TaxWebSites);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TaxWebSites.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TaxWebSites.
     */
    TaxWebSites._entityName = 'TaxWebSites';
    /**
     * Default url path for the according service.
     */
    TaxWebSites._defaultServicePath = '/b1s/v2/';
    return TaxWebSites;
}(core_1.EntityV4));
exports.TaxWebSites = TaxWebSites;
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartners_1 = require("./BusinessPartners");
var Quotations_1 = require("./Quotations");
var TaxInvoiceReport_1 = require("./TaxInvoiceReport");
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
(function (TaxWebSites) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.ABS_ENTRY = new core_1.NumberField('AbsEntry', TaxWebSites, 'Edm.Int32');
    /**
     * Static representation of the [[webSiteName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.WEB_SITE_NAME = new core_1.StringField('WebSiteName', TaxWebSites, 'Edm.String');
    /**
     * Static representation of the [[webSiteUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.WEB_SITE_URL = new core_1.StringField('WebSiteURL', TaxWebSites, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.DESCRIPTION = new core_1.StringField('Description', TaxWebSites, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', TaxWebSites, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', TaxWebSites, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', TaxWebSites, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', TaxWebSites, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.QUOTATIONS = new core_1.OneToManyLink('Quotations', TaxWebSites, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[taxInvoiceReport]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.TAX_INVOICE_REPORT = new core_1.OneToManyLink('TaxInvoiceReport', TaxWebSites, TaxInvoiceReport_1.TaxInvoiceReport);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', TaxWebSites, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', TaxWebSites, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', TaxWebSites, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', TaxWebSites, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.INVOICES = new core_1.OneToManyLink('Invoices', TaxWebSites, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', TaxWebSites, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.ORDERS = new core_1.OneToManyLink('Orders', TaxWebSites, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', TaxWebSites, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.DRAFTS = new core_1.OneToManyLink('Drafts', TaxWebSites, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.RETURNS = new core_1.OneToManyLink('Returns', TaxWebSites, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', TaxWebSites, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', TaxWebSites, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', TaxWebSites, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', TaxWebSites, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', TaxWebSites, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', TaxWebSites, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', TaxWebSites, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', TaxWebSites, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', TaxWebSites, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxWebSites.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', TaxWebSites, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the TaxWebSites entity.
     */
    TaxWebSites._allFields = [
        TaxWebSites.ABS_ENTRY,
        TaxWebSites.WEB_SITE_NAME,
        TaxWebSites.WEB_SITE_URL,
        TaxWebSites.DESCRIPTION,
        TaxWebSites.INVENTORY_GEN_ENTRIES,
        TaxWebSites.PURCHASE_QUOTATIONS,
        TaxWebSites.DELIVERY_NOTES,
        TaxWebSites.BUSINESS_PARTNERS,
        TaxWebSites.QUOTATIONS,
        TaxWebSites.TAX_INVOICE_REPORT,
        TaxWebSites.INVENTORY_GEN_EXITS,
        TaxWebSites.PURCHASE_REQUESTS,
        TaxWebSites.RETURN_REQUEST,
        TaxWebSites.PURCHASE_RETURNS,
        TaxWebSites.INVOICES,
        TaxWebSites.CREDIT_NOTES,
        TaxWebSites.ORDERS,
        TaxWebSites.DOWN_PAYMENTS,
        TaxWebSites.DRAFTS,
        TaxWebSites.RETURNS,
        TaxWebSites.CORRECTION_INVOICE_REVERSAL,
        TaxWebSites.CORRECTION_PURCHASE_INVOICE,
        TaxWebSites.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        TaxWebSites.PURCHASE_INVOICES,
        TaxWebSites.PURCHASE_DELIVERY_NOTES,
        TaxWebSites.CORRECTION_INVOICE,
        TaxWebSites.PURCHASE_CREDIT_NOTES,
        TaxWebSites.PURCHASE_DOWN_PAYMENTS,
        TaxWebSites.PURCHASE_ORDERS,
        TaxWebSites.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    TaxWebSites.ALL_FIELDS = new core_1.AllFields('*', TaxWebSites);
    /**
     * All key fields of the TaxWebSites entity.
     */
    TaxWebSites._keyFields = [TaxWebSites.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property TaxWebSites.
     */
    TaxWebSites._keys = TaxWebSites._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TaxWebSites = exports.TaxWebSites || (exports.TaxWebSites = {}));
exports.TaxWebSites = TaxWebSites;
//# sourceMappingURL=TaxWebSites.js.map