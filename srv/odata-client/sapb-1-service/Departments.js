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
exports.Departments = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DepartmentsRequestBuilder_1 = require("./DepartmentsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Departments" of service "SAPB1".
 */
var Departments = /** @class */ (function (_super) {
    __extends(Departments, _super);
    function Departments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Departments`.
     * @returns A builder that constructs instances of entity type `Departments`.
     */
    Departments.builder = function () {
        return core_1.EntityV4.entityBuilder(Departments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Departments` entity type.
     * @returns A `Departments` request builder.
     */
    Departments.requestBuilder = function () {
        return new DepartmentsRequestBuilder_1.DepartmentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Departments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Departments`.
     */
    Departments.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Departments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Departments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Departments.
     */
    Departments._entityName = 'Departments';
    /**
     * Default url path for the according service.
     */
    Departments._defaultServicePath = '/b1s/v2/';
    return Departments;
}(core_1.EntityV4));
exports.Departments = Departments;
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
(function (Departments) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.CODE = new core_1.NumberField('Code', Departments, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.NAME = new core_1.StringField('Name', Departments, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.DESCRIPTION = new core_1.StringField('Description', Departments, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', Departments, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', Departments, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', Departments, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.QUOTATIONS = new core_1.OneToManyLink('Quotations', Departments, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', Departments, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', Departments, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', Departments, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[users]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.USERS = new core_1.OneToManyLink('Users', Departments, Users_1.Users);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', Departments, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.INVOICES = new core_1.OneToManyLink('Invoices', Departments, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', Departments, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.ORDERS = new core_1.OneToManyLink('Orders', Departments, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', Departments, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.DRAFTS = new core_1.OneToManyLink('Drafts', Departments, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.RETURNS = new core_1.OneToManyLink('Returns', Departments, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', Departments, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', Departments, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', Departments, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', Departments, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', Departments, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', Departments, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', Departments, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', Departments, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.EMPLOYEES_INFO = new core_1.OneToManyLink('EmployeesInfo', Departments, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', Departments, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Departments.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', Departments, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the Departments entity.
     */
    Departments._allFields = [
        Departments.CODE,
        Departments.NAME,
        Departments.DESCRIPTION,
        Departments.INVENTORY_GEN_ENTRIES,
        Departments.PURCHASE_QUOTATIONS,
        Departments.DELIVERY_NOTES,
        Departments.QUOTATIONS,
        Departments.INVENTORY_GEN_EXITS,
        Departments.PURCHASE_REQUESTS,
        Departments.RETURN_REQUEST,
        Departments.USERS,
        Departments.PURCHASE_RETURNS,
        Departments.INVOICES,
        Departments.CREDIT_NOTES,
        Departments.ORDERS,
        Departments.DOWN_PAYMENTS,
        Departments.DRAFTS,
        Departments.RETURNS,
        Departments.CORRECTION_INVOICE_REVERSAL,
        Departments.CORRECTION_PURCHASE_INVOICE,
        Departments.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        Departments.PURCHASE_INVOICES,
        Departments.PURCHASE_DELIVERY_NOTES,
        Departments.CORRECTION_INVOICE,
        Departments.PURCHASE_CREDIT_NOTES,
        Departments.PURCHASE_DOWN_PAYMENTS,
        Departments.EMPLOYEES_INFO,
        Departments.PURCHASE_ORDERS,
        Departments.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    Departments.ALL_FIELDS = new core_1.AllFields('*', Departments);
    /**
     * All key fields of the Departments entity.
     */
    Departments._keyFields = [Departments.CODE];
    /**
     * Mapping of all key field names to the respective static field property Departments.
     */
    Departments._keys = Departments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Departments = exports.Departments || (exports.Departments = {}));
exports.Departments = Departments;
//# sourceMappingURL=Departments.js.map