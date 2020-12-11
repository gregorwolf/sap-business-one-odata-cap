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
exports.Branches = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BranchesRequestBuilder_1 = require("./BranchesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Branches" of service "SAPB1".
 */
var Branches = /** @class */ (function (_super) {
    __extends(Branches, _super);
    function Branches() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Branches`.
     * @returns A builder that constructs instances of entity type `Branches`.
     */
    Branches.builder = function () {
        return core_1.EntityV4.entityBuilder(Branches);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Branches` entity type.
     * @returns A `Branches` request builder.
     */
    Branches.requestBuilder = function () {
        return new BranchesRequestBuilder_1.BranchesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Branches`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Branches`.
     */
    Branches.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Branches);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Branches.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Branches.
     */
    Branches._entityName = 'Branches';
    /**
     * Default url path for the according service.
     */
    Branches._defaultServicePath = '/b1s/v2/';
    return Branches;
}(core_1.EntityV4));
exports.Branches = Branches;
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var DeliveryNotes_1 = require("./DeliveryNotes");
var Quotations_1 = require("./Quotations");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var Users_1 = require("./Users");
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
var EmployeesInfo_1 = require("./EmployeesInfo");
var PurchaseOrders_1 = require("./PurchaseOrders");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
(function (Branches) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.CODE = new core_1.NumberField('Code', Branches, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.NAME = new core_1.StringField('Name', Branches, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.DESCRIPTION = new core_1.StringField('Description', Branches, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', Branches, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', Branches, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', Branches, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.QUOTATIONS = new core_1.OneToManyLink('Quotations', Branches, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', Branches, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', Branches, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', Branches, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[users]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.USERS = new core_1.OneToManyLink('Users', Branches, Users_1.Users);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', Branches, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.INVOICES = new core_1.OneToManyLink('Invoices', Branches, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', Branches, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.ORDERS = new core_1.OneToManyLink('Orders', Branches, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', Branches, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.DRAFTS = new core_1.OneToManyLink('Drafts', Branches, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.RETURNS = new core_1.OneToManyLink('Returns', Branches, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', Branches, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', Branches, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', Branches, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', Branches, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', Branches, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', Branches, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', Branches, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', Branches, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.EMPLOYEES_INFO = new core_1.OneToManyLink('EmployeesInfo', Branches, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', Branches, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Branches.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', Branches, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the Branches entity.
     */
    Branches._allFields = [
        Branches.CODE,
        Branches.NAME,
        Branches.DESCRIPTION,
        Branches.INVENTORY_GEN_ENTRIES,
        Branches.PURCHASE_QUOTATIONS,
        Branches.DELIVERY_NOTES,
        Branches.QUOTATIONS,
        Branches.INVENTORY_GEN_EXITS,
        Branches.PURCHASE_REQUESTS,
        Branches.RETURN_REQUEST,
        Branches.USERS,
        Branches.PURCHASE_RETURNS,
        Branches.INVOICES,
        Branches.CREDIT_NOTES,
        Branches.ORDERS,
        Branches.DOWN_PAYMENTS,
        Branches.DRAFTS,
        Branches.RETURNS,
        Branches.CORRECTION_INVOICE_REVERSAL,
        Branches.CORRECTION_PURCHASE_INVOICE,
        Branches.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        Branches.PURCHASE_INVOICES,
        Branches.PURCHASE_DELIVERY_NOTES,
        Branches.CORRECTION_INVOICE,
        Branches.PURCHASE_CREDIT_NOTES,
        Branches.PURCHASE_DOWN_PAYMENTS,
        Branches.EMPLOYEES_INFO,
        Branches.PURCHASE_ORDERS,
        Branches.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    Branches.ALL_FIELDS = new core_1.AllFields('*', Branches);
    /**
     * All key fields of the Branches entity.
     */
    Branches._keyFields = [Branches.CODE];
    /**
     * Mapping of all key field names to the respective static field property Branches.
     */
    Branches._keys = Branches._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Branches = exports.Branches || (exports.Branches = {}));
exports.Branches = Branches;
//# sourceMappingURL=Branches.js.map