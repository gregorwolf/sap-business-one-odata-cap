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
exports.UserLanguages = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserLanguagesRequestBuilder_1 = require("./UserLanguagesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UserLanguages" of service "SAPB1".
 */
var UserLanguages = /** @class */ (function (_super) {
    __extends(UserLanguages, _super);
    function UserLanguages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `UserLanguages`.
     * @returns A builder that constructs instances of entity type `UserLanguages`.
     */
    UserLanguages.builder = function () {
        return core_1.EntityV4.entityBuilder(UserLanguages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UserLanguages` entity type.
     * @returns A `UserLanguages` request builder.
     */
    UserLanguages.requestBuilder = function () {
        return new UserLanguagesRequestBuilder_1.UserLanguagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserLanguages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserLanguages`.
     */
    UserLanguages.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, UserLanguages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UserLanguages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UserLanguages.
     */
    UserLanguages._entityName = 'UserLanguages';
    /**
     * Default url path for the according service.
     */
    UserLanguages._defaultServicePath = '/b1s/v2/';
    return UserLanguages;
}(core_1.EntityV4));
exports.UserLanguages = UserLanguages;
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
(function (UserLanguages) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.CODE = new core_1.NumberField('Code', UserLanguages, 'Edm.Int32');
    /**
     * Static representation of the [[languageShortName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.LANGUAGE_SHORT_NAME = new core_1.StringField('LanguageShortName', UserLanguages, 'Edm.String');
    /**
     * Static representation of the [[languageFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.LANGUAGE_FULL_NAME = new core_1.StringField('LanguageFullName', UserLanguages, 'Edm.String');
    /**
     * Static representation of the [[relatedSystemLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.RELATED_SYSTEM_LANGUAGE = new core_1.NumberField('RelatedSystemLanguage', UserLanguages, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', UserLanguages, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', UserLanguages, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', UserLanguages, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', UserLanguages, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.QUOTATIONS = new core_1.OneToManyLink('Quotations', UserLanguages, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', UserLanguages, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', UserLanguages, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', UserLanguages, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', UserLanguages, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.INVOICES = new core_1.OneToManyLink('Invoices', UserLanguages, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', UserLanguages, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.ORDERS = new core_1.OneToManyLink('Orders', UserLanguages, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', UserLanguages, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.DRAFTS = new core_1.OneToManyLink('Drafts', UserLanguages, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.RETURNS = new core_1.OneToManyLink('Returns', UserLanguages, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', UserLanguages, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', UserLanguages, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', UserLanguages, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', UserLanguages, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', UserLanguages, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', UserLanguages, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', UserLanguages, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', UserLanguages, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', UserLanguages, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UserLanguages.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', UserLanguages, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the UserLanguages entity.
     */
    UserLanguages._allFields = [
        UserLanguages.CODE,
        UserLanguages.LANGUAGE_SHORT_NAME,
        UserLanguages.LANGUAGE_FULL_NAME,
        UserLanguages.RELATED_SYSTEM_LANGUAGE,
        UserLanguages.INVENTORY_GEN_ENTRIES,
        UserLanguages.PURCHASE_QUOTATIONS,
        UserLanguages.DELIVERY_NOTES,
        UserLanguages.BUSINESS_PARTNERS,
        UserLanguages.QUOTATIONS,
        UserLanguages.INVENTORY_GEN_EXITS,
        UserLanguages.PURCHASE_REQUESTS,
        UserLanguages.RETURN_REQUEST,
        UserLanguages.PURCHASE_RETURNS,
        UserLanguages.INVOICES,
        UserLanguages.CREDIT_NOTES,
        UserLanguages.ORDERS,
        UserLanguages.DOWN_PAYMENTS,
        UserLanguages.DRAFTS,
        UserLanguages.RETURNS,
        UserLanguages.CORRECTION_INVOICE_REVERSAL,
        UserLanguages.CORRECTION_PURCHASE_INVOICE,
        UserLanguages.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        UserLanguages.PURCHASE_INVOICES,
        UserLanguages.PURCHASE_DELIVERY_NOTES,
        UserLanguages.CORRECTION_INVOICE,
        UserLanguages.PURCHASE_CREDIT_NOTES,
        UserLanguages.PURCHASE_DOWN_PAYMENTS,
        UserLanguages.PURCHASE_ORDERS,
        UserLanguages.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    UserLanguages.ALL_FIELDS = new core_1.AllFields('*', UserLanguages);
    /**
     * All key fields of the UserLanguages entity.
     */
    UserLanguages._keyFields = [UserLanguages.CODE];
    /**
     * Mapping of all key field names to the respective static field property UserLanguages.
     */
    UserLanguages._keys = UserLanguages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UserLanguages = exports.UserLanguages || (exports.UserLanguages = {}));
exports.UserLanguages = UserLanguages;
//# sourceMappingURL=UserLanguages.js.map