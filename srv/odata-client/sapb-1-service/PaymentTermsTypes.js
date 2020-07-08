"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
exports.PaymentTermsTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PaymentTermsTypesRequestBuilder_1 = require("./PaymentTermsTypesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "PaymentTermsTypes" of service "SAPB1".
 */
var PaymentTermsTypes = /** @class */ (function (_super) {
    __extends(PaymentTermsTypes, _super);
    function PaymentTermsTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PaymentTermsTypes`.
     * @returns A builder that constructs instances of entity type `PaymentTermsTypes`.
     */
    PaymentTermsTypes.builder = function () {
        return v4_1.Entity.entityBuilder(PaymentTermsTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PaymentTermsTypes` entity type.
     * @returns A `PaymentTermsTypes` request builder.
     */
    PaymentTermsTypes.requestBuilder = function () {
        return new PaymentTermsTypesRequestBuilder_1.PaymentTermsTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentTermsTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PaymentTermsTypes`.
     */
    PaymentTermsTypes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, PaymentTermsTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PaymentTermsTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PaymentTermsTypes.
     */
    PaymentTermsTypes._entityName = 'PaymentTermsTypes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PaymentTermsTypes.
     */
    PaymentTermsTypes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    PaymentTermsTypes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PaymentTermsTypes;
}(v4_1.Entity));
exports.PaymentTermsTypes = PaymentTermsTypes;
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var PriceLists_1 = require("./PriceLists");
var CashDiscounts_1 = require("./CashDiscounts");
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
var InventoryTransferRequests_1 = require("./InventoryTransferRequests");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
var WizardPaymentMethods_1 = require("./WizardPaymentMethods");
var StockTransferDrafts_1 = require("./StockTransferDrafts");
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
(function (PaymentTermsTypes) {
    /**
     * Static representation of the [[groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.GROUP_NUMBER = new v4_1.NumberField('GroupNumber', PaymentTermsTypes, 'Edm.Int32');
    /**
     * Static representation of the [[paymentTermsGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PAYMENT_TERMS_GROUP_NAME = new v4_1.StringField('PaymentTermsGroupName', PaymentTermsTypes, 'Edm.String');
    /**
     * Static representation of the [[numberOfAdditionalMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.NUMBER_OF_ADDITIONAL_MONTHS = new v4_1.NumberField('NumberOfAdditionalMonths', PaymentTermsTypes, 'Edm.Int32');
    /**
     * Static representation of the [[numberOfAdditionalDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.NUMBER_OF_ADDITIONAL_DAYS = new v4_1.NumberField('NumberOfAdditionalDays', PaymentTermsTypes, 'Edm.Int32');
    /**
     * Static representation of the [[creditLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.CREDIT_LIMIT = new v4_1.NumberField('CreditLimit', PaymentTermsTypes, 'Edm.Double');
    /**
     * Static representation of the [[generalDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.GENERAL_DISCOUNT = new v4_1.NumberField('GeneralDiscount', PaymentTermsTypes, 'Edm.Double');
    /**
     * Static representation of the [[interestOnArrears]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.INTEREST_ON_ARREARS = new v4_1.NumberField('InterestOnArrears', PaymentTermsTypes, 'Edm.Double');
    /**
     * Static representation of the [[priceListNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PRICE_LIST_NO = new v4_1.NumberField('PriceListNo', PaymentTermsTypes, 'Edm.Int32');
    /**
     * Static representation of the [[loadLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.LOAD_LIMIT = new v4_1.NumberField('LoadLimit', PaymentTermsTypes, 'Edm.Double');
    /**
     * Static representation of the [[discountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.DISCOUNT_CODE = new v4_1.StringField('DiscountCode', PaymentTermsTypes, 'Edm.String');
    /**
     * Static representation of the [[dunningCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.DUNNING_CODE = new v4_1.StringField('DunningCode', PaymentTermsTypes, 'Edm.String');
    /**
     * Static representation of the [[numberOfInstallments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.NUMBER_OF_INSTALLMENTS = new v4_1.NumberField('NumberOfInstallments', PaymentTermsTypes, 'Edm.Int32');
    /**
     * Static representation of the [[numberOfToleranceDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.NUMBER_OF_TOLERANCE_DAYS = new v4_1.NumberField('NumberOfToleranceDays', PaymentTermsTypes, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.INVENTORY_GEN_ENTRIES = new v4_1.OneToManyLink('InventoryGenEntries', PaymentTermsTypes, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PURCHASE_QUOTATIONS = new v4_1.OneToManyLink('PurchaseQuotations', PaymentTermsTypes, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-one navigation property [[priceList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PRICE_LIST = new v4_1.OneToOneLink('PriceList', PaymentTermsTypes, PriceLists_1.PriceLists);
    /**
     * Static representation of the one-to-one navigation property [[cashDiscount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.CASH_DISCOUNT = new v4_1.OneToOneLink('CashDiscount', PaymentTermsTypes, CashDiscounts_1.CashDiscounts);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.DELIVERY_NOTES = new v4_1.OneToManyLink('DeliveryNotes', PaymentTermsTypes, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', PaymentTermsTypes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.QUOTATIONS = new v4_1.OneToManyLink('Quotations', PaymentTermsTypes, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.INVENTORY_GEN_EXITS = new v4_1.OneToManyLink('InventoryGenExits', PaymentTermsTypes, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PURCHASE_REQUESTS = new v4_1.OneToManyLink('PurchaseRequests', PaymentTermsTypes, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.RETURN_REQUEST = new v4_1.OneToManyLink('ReturnRequest', PaymentTermsTypes, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.BLANKET_AGREEMENTS = new v4_1.OneToManyLink('BlanketAgreements', PaymentTermsTypes, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PURCHASE_RETURNS = new v4_1.OneToManyLink('PurchaseReturns', PaymentTermsTypes, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.INVOICES = new v4_1.OneToManyLink('Invoices', PaymentTermsTypes, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.CREDIT_NOTES = new v4_1.OneToManyLink('CreditNotes', PaymentTermsTypes, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.ORDERS = new v4_1.OneToManyLink('Orders', PaymentTermsTypes, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.INVENTORY_TRANSFER_REQUESTS = new v4_1.OneToManyLink('InventoryTransferRequests', PaymentTermsTypes, InventoryTransferRequests_1.InventoryTransferRequests);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.DOWN_PAYMENTS = new v4_1.OneToManyLink('DownPayments', PaymentTermsTypes, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.DRAFTS = new v4_1.OneToManyLink('Drafts', PaymentTermsTypes, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.WIZARD_PAYMENT_METHODS = new v4_1.OneToManyLink('WizardPaymentMethods', PaymentTermsTypes, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.STOCK_TRANSFER_DRAFTS = new v4_1.OneToManyLink('StockTransferDrafts', PaymentTermsTypes, StockTransferDrafts_1.StockTransferDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.RETURNS = new v4_1.OneToManyLink('Returns', PaymentTermsTypes, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.CORRECTION_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionInvoiceReversal', PaymentTermsTypes, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.CORRECTION_PURCHASE_INVOICE = new v4_1.OneToManyLink('CorrectionPurchaseInvoice', PaymentTermsTypes, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.CORRECTION_PURCHASE_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', PaymentTermsTypes, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PURCHASE_INVOICES = new v4_1.OneToManyLink('PurchaseInvoices', PaymentTermsTypes, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PURCHASE_DELIVERY_NOTES = new v4_1.OneToManyLink('PurchaseDeliveryNotes', PaymentTermsTypes, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.CORRECTION_INVOICE = new v4_1.OneToManyLink('CorrectionInvoice', PaymentTermsTypes, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PURCHASE_CREDIT_NOTES = new v4_1.OneToManyLink('PurchaseCreditNotes', PaymentTermsTypes, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PURCHASE_DOWN_PAYMENTS = new v4_1.OneToManyLink('PurchaseDownPayments', PaymentTermsTypes, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.PURCHASE_ORDERS = new v4_1.OneToManyLink('PurchaseOrders', PaymentTermsTypes, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PaymentTermsTypes.GOODS_RETURN_REQUEST = new v4_1.OneToManyLink('GoodsReturnRequest', PaymentTermsTypes, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the PaymentTermsTypes entity.
     */
    PaymentTermsTypes._allFields = [
        PaymentTermsTypes.GROUP_NUMBER,
        PaymentTermsTypes.PAYMENT_TERMS_GROUP_NAME,
        PaymentTermsTypes.NUMBER_OF_ADDITIONAL_MONTHS,
        PaymentTermsTypes.NUMBER_OF_ADDITIONAL_DAYS,
        PaymentTermsTypes.CREDIT_LIMIT,
        PaymentTermsTypes.GENERAL_DISCOUNT,
        PaymentTermsTypes.INTEREST_ON_ARREARS,
        PaymentTermsTypes.PRICE_LIST_NO,
        PaymentTermsTypes.LOAD_LIMIT,
        PaymentTermsTypes.DISCOUNT_CODE,
        PaymentTermsTypes.DUNNING_CODE,
        PaymentTermsTypes.NUMBER_OF_INSTALLMENTS,
        PaymentTermsTypes.NUMBER_OF_TOLERANCE_DAYS,
        PaymentTermsTypes.INVENTORY_GEN_ENTRIES,
        PaymentTermsTypes.PURCHASE_QUOTATIONS,
        PaymentTermsTypes.PRICE_LIST,
        PaymentTermsTypes.CASH_DISCOUNT,
        PaymentTermsTypes.DELIVERY_NOTES,
        PaymentTermsTypes.BUSINESS_PARTNERS,
        PaymentTermsTypes.QUOTATIONS,
        PaymentTermsTypes.INVENTORY_GEN_EXITS,
        PaymentTermsTypes.PURCHASE_REQUESTS,
        PaymentTermsTypes.RETURN_REQUEST,
        PaymentTermsTypes.BLANKET_AGREEMENTS,
        PaymentTermsTypes.PURCHASE_RETURNS,
        PaymentTermsTypes.INVOICES,
        PaymentTermsTypes.CREDIT_NOTES,
        PaymentTermsTypes.ORDERS,
        PaymentTermsTypes.INVENTORY_TRANSFER_REQUESTS,
        PaymentTermsTypes.DOWN_PAYMENTS,
        PaymentTermsTypes.DRAFTS,
        PaymentTermsTypes.WIZARD_PAYMENT_METHODS,
        PaymentTermsTypes.STOCK_TRANSFER_DRAFTS,
        PaymentTermsTypes.RETURNS,
        PaymentTermsTypes.CORRECTION_INVOICE_REVERSAL,
        PaymentTermsTypes.CORRECTION_PURCHASE_INVOICE,
        PaymentTermsTypes.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        PaymentTermsTypes.PURCHASE_INVOICES,
        PaymentTermsTypes.PURCHASE_DELIVERY_NOTES,
        PaymentTermsTypes.CORRECTION_INVOICE,
        PaymentTermsTypes.PURCHASE_CREDIT_NOTES,
        PaymentTermsTypes.PURCHASE_DOWN_PAYMENTS,
        PaymentTermsTypes.PURCHASE_ORDERS,
        PaymentTermsTypes.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    PaymentTermsTypes.ALL_FIELDS = new v4_1.AllFields('*', PaymentTermsTypes);
    /**
     * All key fields of the PaymentTermsTypes entity.
     */
    PaymentTermsTypes._keyFields = [PaymentTermsTypes.GROUP_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property PaymentTermsTypes.
     */
    PaymentTermsTypes._keys = PaymentTermsTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PaymentTermsTypes = exports.PaymentTermsTypes || (exports.PaymentTermsTypes = {}));
exports.PaymentTermsTypes = PaymentTermsTypes;
//# sourceMappingURL=PaymentTermsTypes.js.map