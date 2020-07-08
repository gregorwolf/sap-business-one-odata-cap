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
exports.WizardPaymentMethods = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WizardPaymentMethodsRequestBuilder_1 = require("./WizardPaymentMethodsRequestBuilder");
var CurrencyRestriction_1 = require("./CurrencyRestriction");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "WizardPaymentMethods" of service "SAPB1".
 */
var WizardPaymentMethods = /** @class */ (function (_super) {
    __extends(WizardPaymentMethods, _super);
    function WizardPaymentMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WizardPaymentMethods`.
     * @returns A builder that constructs instances of entity type `WizardPaymentMethods`.
     */
    WizardPaymentMethods.builder = function () {
        return v4_1.Entity.entityBuilder(WizardPaymentMethods);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WizardPaymentMethods` entity type.
     * @returns A `WizardPaymentMethods` request builder.
     */
    WizardPaymentMethods.requestBuilder = function () {
        return new WizardPaymentMethodsRequestBuilder_1.WizardPaymentMethodsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WizardPaymentMethods`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WizardPaymentMethods`.
     */
    WizardPaymentMethods.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, WizardPaymentMethods);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WizardPaymentMethods.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WizardPaymentMethods.
     */
    WizardPaymentMethods._entityName = 'WizardPaymentMethods';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WizardPaymentMethods.
     */
    WizardPaymentMethods._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    WizardPaymentMethods._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return WizardPaymentMethods;
}(v4_1.Entity));
exports.WizardPaymentMethods = WizardPaymentMethods;
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
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
var Users_1 = require("./Users");
var Countries_1 = require("./Countries");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
var HouseBankAccounts_1 = require("./HouseBankAccounts");
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
(function (WizardPaymentMethods) {
    /**
     * Static representation of the [[paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PAYMENT_METHOD_CODE = new v4_1.StringField('PaymentMethodCode', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.DESCRIPTION = new v4_1.StringField('Description', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[minimumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.MINIMUM_AMOUNT = new v4_1.NumberField('MinimumAmount', WizardPaymentMethods, 'Edm.Double');
    /**
     * Static representation of the [[maximumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.MAXIMUM_AMOUNT = new v4_1.NumberField('MaximumAmount', WizardPaymentMethods, 'Edm.Double');
    /**
     * Static representation of the [[defaultBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.DEFAULT_BANK = new v4_1.StringField('DefaultBank', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.USER_SIGNATURE = new v4_1.NumberField('UserSignature', WizardPaymentMethods, 'Edm.Int32');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CREATION_DATE = new v4_1.DateField('CreationDate', WizardPaymentMethods, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.BANK_COUNTRY = new v4_1.StringField('BankCountry', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[defaultAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.DEFAULT_ACCOUNT = new v4_1.StringField('DefaultAccount', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.GL_ACCOUNT = new v4_1.StringField('GLAccount', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.BRANCH = new v4_1.StringField('Branch', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[keyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.KEY_CODE = new v4_1.StringField('KeyCode', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[transactionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.TRANSACTION_TYPE = new v4_1.StringField('TransactionType', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[format]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.FORMAT = new v4_1.StringField('Format', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[depositNorm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.DEPOSIT_NORM = new v4_1.StringField('DepositNorm', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[paymentTermsCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PAYMENT_TERMS_CODE = new v4_1.NumberField('PaymentTermsCode', WizardPaymentMethods, 'Edm.Int32');
    /**
     * Static representation of the [[bankAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.BANK_ACCOUNT_KEY = new v4_1.NumberField('BankAccountKey', WizardPaymentMethods, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.DOC_TYPE = new v4_1.StringField('DocType', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[accepted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.ACCEPTED = new v4_1.StringField('Accepted', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[portfolioId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PORTFOLIO_ID = new v4_1.StringField('PortfolioID', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[curCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CUR_CODE = new v4_1.StringField('CurCode', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[instruction1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.INSTRUCTION_1 = new v4_1.StringField('Instruction1', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[instruction2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.INSTRUCTION_2 = new v4_1.StringField('Instruction2', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[paymentPlace]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PAYMENT_PLACE = new v4_1.StringField('PaymentPlace', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[barcodeDll]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.BARCODE_DLL = new v4_1.StringField('BarcodeDll', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[bankChargeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.BANK_CHARGE_RATE = new v4_1.NumberField('BankChargeRate', WizardPaymentMethods, 'Edm.Double');
    /**
     * Static representation of the [[reportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.REPORT_CODE = new v4_1.StringField('ReportCode', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[cancelInstruction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CANCEL_INSTRUCTION = new v4_1.StringField('CancelInstruction', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[occurenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.OCCURENCE_CODE = new v4_1.StringField('OccurenceCode', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[movementCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.MOVEMENT_CODE = new v4_1.StringField('MovementCode', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[directDebit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.DIRECT_DEBIT = new v4_1.StringField('DirectDebit', WizardPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[currencyRestrictions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CURRENCY_RESTRICTIONS = new v4_1.CollectionField('CurrencyRestrictions', WizardPaymentMethods, new CurrencyRestriction_1.CurrencyRestrictionField('', WizardPaymentMethods));
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.INVENTORY_GEN_ENTRIES = new v4_1.OneToManyLink('InventoryGenEntries', WizardPaymentMethods, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PURCHASE_QUOTATIONS = new v4_1.OneToManyLink('PurchaseQuotations', WizardPaymentMethods, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.DELIVERY_NOTES = new v4_1.OneToManyLink('DeliveryNotes', WizardPaymentMethods, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', WizardPaymentMethods, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.QUOTATIONS = new v4_1.OneToManyLink('Quotations', WizardPaymentMethods, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.INVENTORY_GEN_EXITS = new v4_1.OneToManyLink('InventoryGenExits', WizardPaymentMethods, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PURCHASE_REQUESTS = new v4_1.OneToManyLink('PurchaseRequests', WizardPaymentMethods, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.RETURN_REQUEST = new v4_1.OneToManyLink('ReturnRequest', WizardPaymentMethods, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.BLANKET_AGREEMENTS = new v4_1.OneToManyLink('BlanketAgreements', WizardPaymentMethods, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PURCHASE_RETURNS = new v4_1.OneToManyLink('PurchaseReturns', WizardPaymentMethods, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.INVOICES = new v4_1.OneToManyLink('Invoices', WizardPaymentMethods, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CREDIT_NOTES = new v4_1.OneToManyLink('CreditNotes', WizardPaymentMethods, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.ORDERS = new v4_1.OneToManyLink('Orders', WizardPaymentMethods, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.DOWN_PAYMENTS = new v4_1.OneToManyLink('DownPayments', WizardPaymentMethods, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.DRAFTS = new v4_1.OneToManyLink('Drafts', WizardPaymentMethods, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.USER = new v4_1.OneToOneLink('User', WizardPaymentMethods, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.COUNTRY = new v4_1.OneToOneLink('Country', WizardPaymentMethods, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', WizardPaymentMethods, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', WizardPaymentMethods, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[houseBankAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.HOUSE_BANK_ACCOUNT = new v4_1.OneToOneLink('HouseBankAccount', WizardPaymentMethods, HouseBankAccounts_1.HouseBankAccounts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.RETURNS = new v4_1.OneToManyLink('Returns', WizardPaymentMethods, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CORRECTION_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionInvoiceReversal', WizardPaymentMethods, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CORRECTION_PURCHASE_INVOICE = new v4_1.OneToManyLink('CorrectionPurchaseInvoice', WizardPaymentMethods, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CORRECTION_PURCHASE_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', WizardPaymentMethods, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PURCHASE_INVOICES = new v4_1.OneToManyLink('PurchaseInvoices', WizardPaymentMethods, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PURCHASE_DELIVERY_NOTES = new v4_1.OneToManyLink('PurchaseDeliveryNotes', WizardPaymentMethods, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.CORRECTION_INVOICE = new v4_1.OneToManyLink('CorrectionInvoice', WizardPaymentMethods, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PURCHASE_CREDIT_NOTES = new v4_1.OneToManyLink('PurchaseCreditNotes', WizardPaymentMethods, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PURCHASE_DOWN_PAYMENTS = new v4_1.OneToManyLink('PurchaseDownPayments', WizardPaymentMethods, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.PURCHASE_ORDERS = new v4_1.OneToManyLink('PurchaseOrders', WizardPaymentMethods, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WizardPaymentMethods.GOODS_RETURN_REQUEST = new v4_1.OneToManyLink('GoodsReturnRequest', WizardPaymentMethods, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the WizardPaymentMethods entity.
     */
    WizardPaymentMethods._allFields = [
        WizardPaymentMethods.PAYMENT_METHOD_CODE,
        WizardPaymentMethods.DESCRIPTION,
        WizardPaymentMethods.MINIMUM_AMOUNT,
        WizardPaymentMethods.MAXIMUM_AMOUNT,
        WizardPaymentMethods.DEFAULT_BANK,
        WizardPaymentMethods.USER_SIGNATURE,
        WizardPaymentMethods.CREATION_DATE,
        WizardPaymentMethods.BANK_COUNTRY,
        WizardPaymentMethods.DEFAULT_ACCOUNT,
        WizardPaymentMethods.GL_ACCOUNT,
        WizardPaymentMethods.BRANCH,
        WizardPaymentMethods.KEY_CODE,
        WizardPaymentMethods.TRANSACTION_TYPE,
        WizardPaymentMethods.FORMAT,
        WizardPaymentMethods.DEPOSIT_NORM,
        WizardPaymentMethods.PAYMENT_TERMS_CODE,
        WizardPaymentMethods.BANK_ACCOUNT_KEY,
        WizardPaymentMethods.DOC_TYPE,
        WizardPaymentMethods.ACCEPTED,
        WizardPaymentMethods.PORTFOLIO_ID,
        WizardPaymentMethods.CUR_CODE,
        WizardPaymentMethods.INSTRUCTION_1,
        WizardPaymentMethods.INSTRUCTION_2,
        WizardPaymentMethods.PAYMENT_PLACE,
        WizardPaymentMethods.BARCODE_DLL,
        WizardPaymentMethods.BANK_CHARGE_RATE,
        WizardPaymentMethods.REPORT_CODE,
        WizardPaymentMethods.CANCEL_INSTRUCTION,
        WizardPaymentMethods.OCCURENCE_CODE,
        WizardPaymentMethods.MOVEMENT_CODE,
        WizardPaymentMethods.DIRECT_DEBIT,
        WizardPaymentMethods.CURRENCY_RESTRICTIONS,
        WizardPaymentMethods.INVENTORY_GEN_ENTRIES,
        WizardPaymentMethods.PURCHASE_QUOTATIONS,
        WizardPaymentMethods.DELIVERY_NOTES,
        WizardPaymentMethods.BUSINESS_PARTNERS,
        WizardPaymentMethods.QUOTATIONS,
        WizardPaymentMethods.INVENTORY_GEN_EXITS,
        WizardPaymentMethods.PURCHASE_REQUESTS,
        WizardPaymentMethods.RETURN_REQUEST,
        WizardPaymentMethods.BLANKET_AGREEMENTS,
        WizardPaymentMethods.PURCHASE_RETURNS,
        WizardPaymentMethods.INVOICES,
        WizardPaymentMethods.CREDIT_NOTES,
        WizardPaymentMethods.ORDERS,
        WizardPaymentMethods.DOWN_PAYMENTS,
        WizardPaymentMethods.DRAFTS,
        WizardPaymentMethods.USER,
        WizardPaymentMethods.COUNTRY,
        WizardPaymentMethods.CHART_OF_ACCOUNT,
        WizardPaymentMethods.PAYMENT_TERMS_TYPE,
        WizardPaymentMethods.HOUSE_BANK_ACCOUNT,
        WizardPaymentMethods.RETURNS,
        WizardPaymentMethods.CORRECTION_INVOICE_REVERSAL,
        WizardPaymentMethods.CORRECTION_PURCHASE_INVOICE,
        WizardPaymentMethods.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        WizardPaymentMethods.PURCHASE_INVOICES,
        WizardPaymentMethods.PURCHASE_DELIVERY_NOTES,
        WizardPaymentMethods.CORRECTION_INVOICE,
        WizardPaymentMethods.PURCHASE_CREDIT_NOTES,
        WizardPaymentMethods.PURCHASE_DOWN_PAYMENTS,
        WizardPaymentMethods.PURCHASE_ORDERS,
        WizardPaymentMethods.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    WizardPaymentMethods.ALL_FIELDS = new v4_1.AllFields('*', WizardPaymentMethods);
    /**
     * All key fields of the WizardPaymentMethods entity.
     */
    WizardPaymentMethods._keyFields = [WizardPaymentMethods.PAYMENT_METHOD_CODE];
    /**
     * Mapping of all key field names to the respective static field property WizardPaymentMethods.
     */
    WizardPaymentMethods._keys = WizardPaymentMethods._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WizardPaymentMethods = exports.WizardPaymentMethods || (exports.WizardPaymentMethods = {}));
exports.WizardPaymentMethods = WizardPaymentMethods;
//# sourceMappingURL=WizardPaymentMethods.js.map