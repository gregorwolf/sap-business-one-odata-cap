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
exports.Currencies = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CurrenciesRequestBuilder_1 = require("./CurrenciesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Currencies" of service "SAPB1".
 */
var Currencies = /** @class */ (function (_super) {
    __extends(Currencies, _super);
    function Currencies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Currencies`.
     * @returns A builder that constructs instances of entity type `Currencies`.
     */
    Currencies.builder = function () {
        return core_1.EntityV4.entityBuilder(Currencies);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Currencies` entity type.
     * @returns A `Currencies` request builder.
     */
    Currencies.requestBuilder = function () {
        return new CurrenciesRequestBuilder_1.CurrenciesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Currencies`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Currencies`.
     */
    Currencies.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Currencies);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Currencies.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Currencies.
     */
    Currencies._entityName = 'Currencies';
    /**
     * Default url path for the according service.
     */
    Currencies._defaultServicePath = '/b1s/v2/';
    return Currencies;
}(core_1.EntityV4));
exports.Currencies = Currencies;
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var VendorPayments_1 = require("./VendorPayments");
var AssetTransfer_1 = require("./AssetTransfer");
var AssetRetirement_1 = require("./AssetRetirement");
var AssetCapitalizationCreditMemo_1 = require("./AssetCapitalizationCreditMemo");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartners_1 = require("./BusinessPartners");
var Quotations_1 = require("./Quotations");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var BlanketAgreements_1 = require("./BlanketAgreements");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var AssetCapitalization_1 = require("./AssetCapitalization");
var CreditNotes_1 = require("./CreditNotes");
var Orders_1 = require("./Orders");
var AssetManualDepreciation_1 = require("./AssetManualDepreciation");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
var PaymentDrafts_1 = require("./PaymentDrafts");
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
var WithholdingTaxCodes_1 = require("./WithholdingTaxCodes");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
var IncomingPayments_1 = require("./IncomingPayments");
var BankStatements_1 = require("./BankStatements");
(function (Currencies) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.CODE = new core_1.StringField('Code', Currencies, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.NAME = new core_1.StringField('Name', Currencies, 'Edm.String');
    /**
     * Static representation of the [[documentsCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.DOCUMENTS_CODE = new core_1.StringField('DocumentsCode', Currencies, 'Edm.String');
    /**
     * Static representation of the [[internationalDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.INTERNATIONAL_DESCRIPTION = new core_1.StringField('InternationalDescription', Currencies, 'Edm.String');
    /**
     * Static representation of the [[hundredthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.HUNDREDTH_NAME = new core_1.StringField('HundredthName', Currencies, 'Edm.String');
    /**
     * Static representation of the [[englishName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ENGLISH_NAME = new core_1.StringField('EnglishName', Currencies, 'Edm.String');
    /**
     * Static representation of the [[englishHundredthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ENGLISH_HUNDREDTH_NAME = new core_1.StringField('EnglishHundredthName', Currencies, 'Edm.String');
    /**
     * Static representation of the [[pluralInternationalDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PLURAL_INTERNATIONAL_DESCRIPTION = new core_1.StringField('PluralInternationalDescription', Currencies, 'Edm.String');
    /**
     * Static representation of the [[pluralHundredthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PLURAL_HUNDREDTH_NAME = new core_1.StringField('PluralHundredthName', Currencies, 'Edm.String');
    /**
     * Static representation of the [[pluralEnglishName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PLURAL_ENGLISH_NAME = new core_1.StringField('PluralEnglishName', Currencies, 'Edm.String');
    /**
     * Static representation of the [[pluralEnglishHundredthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PLURAL_ENGLISH_HUNDREDTH_NAME = new core_1.StringField('PluralEnglishHundredthName', Currencies, 'Edm.String');
    /**
     * Static representation of the [[decimals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.DECIMALS = new core_1.EnumField('Decimals', Currencies);
    /**
     * Static representation of the [[rounding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ROUNDING = new core_1.EnumField('Rounding', Currencies);
    /**
     * Static representation of the [[roundingInPayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ROUNDING_IN_PAYMENT = new core_1.EnumField('RoundingInPayment', Currencies);
    /**
     * Static representation of the [[maxIncomingAmtDiff]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.MAX_INCOMING_AMT_DIFF = new core_1.NumberField('MaxIncomingAmtDiff', Currencies, 'Edm.Double');
    /**
     * Static representation of the [[maxOutgoingAmtDiff]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.MAX_OUTGOING_AMT_DIFF = new core_1.NumberField('MaxOutgoingAmtDiff', Currencies, 'Edm.Double');
    /**
     * Static representation of the [[maxIncomingAmtDiffPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.MAX_INCOMING_AMT_DIFF_PERCENT = new core_1.NumberField('MaxIncomingAmtDiffPercent', Currencies, 'Edm.Double');
    /**
     * Static representation of the [[maxOutgoingAmtDiffPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.MAX_OUTGOING_AMT_DIFF_PERCENT = new core_1.NumberField('MaxOutgoingAmtDiffPercent', Currencies, 'Edm.Double');
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', Currencies, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', Currencies, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.VENDOR_PAYMENTS = new core_1.OneToManyLink('VendorPayments', Currencies, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ASSET_TRANSFER = new core_1.OneToManyLink('AssetTransfer', Currencies, AssetTransfer_1.AssetTransfer);
    /**
     * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ASSET_RETIREMENT = new core_1.OneToManyLink('AssetRetirement', Currencies, AssetRetirement_1.AssetRetirement);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ASSET_CAPITALIZATION_CREDIT_MEMO = new core_1.OneToManyLink('AssetCapitalizationCreditMemo', Currencies, AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', Currencies, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', Currencies, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.QUOTATIONS = new core_1.OneToManyLink('Quotations', Currencies, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.CHART_OF_ACCOUNTS = new core_1.OneToManyLink('ChartOfAccounts', Currencies, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', Currencies, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', Currencies, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', Currencies, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.BLANKET_AGREEMENTS = new core_1.OneToManyLink('BlanketAgreements', Currencies, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', Currencies, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.INVOICES = new core_1.OneToManyLink('Invoices', Currencies, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ASSET_CAPITALIZATION = new core_1.OneToManyLink('AssetCapitalization', Currencies, AssetCapitalization_1.AssetCapitalization);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', Currencies, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ORDERS = new core_1.OneToManyLink('Orders', Currencies, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.ASSET_MANUAL_DEPRECIATION = new core_1.OneToManyLink('AssetManualDepreciation', Currencies, AssetManualDepreciation_1.AssetManualDepreciation);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', Currencies, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.DRAFTS = new core_1.OneToManyLink('Drafts', Currencies, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PAYMENT_DRAFTS = new core_1.OneToManyLink('PaymentDrafts', Currencies, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.RETURNS = new core_1.OneToManyLink('Returns', Currencies, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', Currencies, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', Currencies, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', Currencies, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', Currencies, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', Currencies, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', Currencies, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', Currencies, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', Currencies, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', Currencies, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.WITHHOLDING_TAX_CODES = new core_1.OneToManyLink('WithholdingTaxCodes', Currencies, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', Currencies, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.INCOMING_PAYMENTS = new core_1.OneToManyLink('IncomingPayments', Currencies, IncomingPayments_1.IncomingPayments);
    /**
     * Static representation of the one-to-many navigation property [[bankStatements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.BANK_STATEMENTS = new core_1.OneToManyLink('BankStatements', Currencies, BankStatements_1.BankStatements);
    /**
     * All fields of the Currencies entity.
     */
    Currencies._allFields = [
        Currencies.CODE,
        Currencies.NAME,
        Currencies.DOCUMENTS_CODE,
        Currencies.INTERNATIONAL_DESCRIPTION,
        Currencies.HUNDREDTH_NAME,
        Currencies.ENGLISH_NAME,
        Currencies.ENGLISH_HUNDREDTH_NAME,
        Currencies.PLURAL_INTERNATIONAL_DESCRIPTION,
        Currencies.PLURAL_HUNDREDTH_NAME,
        Currencies.PLURAL_ENGLISH_NAME,
        Currencies.PLURAL_ENGLISH_HUNDREDTH_NAME,
        Currencies.DECIMALS,
        Currencies.ROUNDING,
        Currencies.ROUNDING_IN_PAYMENT,
        Currencies.MAX_INCOMING_AMT_DIFF,
        Currencies.MAX_OUTGOING_AMT_DIFF,
        Currencies.MAX_INCOMING_AMT_DIFF_PERCENT,
        Currencies.MAX_OUTGOING_AMT_DIFF_PERCENT,
        Currencies.INVENTORY_GEN_ENTRIES,
        Currencies.PURCHASE_QUOTATIONS,
        Currencies.VENDOR_PAYMENTS,
        Currencies.ASSET_TRANSFER,
        Currencies.ASSET_RETIREMENT,
        Currencies.ASSET_CAPITALIZATION_CREDIT_MEMO,
        Currencies.DELIVERY_NOTES,
        Currencies.BUSINESS_PARTNERS,
        Currencies.QUOTATIONS,
        Currencies.CHART_OF_ACCOUNTS,
        Currencies.INVENTORY_GEN_EXITS,
        Currencies.PURCHASE_REQUESTS,
        Currencies.RETURN_REQUEST,
        Currencies.BLANKET_AGREEMENTS,
        Currencies.PURCHASE_RETURNS,
        Currencies.INVOICES,
        Currencies.ASSET_CAPITALIZATION,
        Currencies.CREDIT_NOTES,
        Currencies.ORDERS,
        Currencies.ASSET_MANUAL_DEPRECIATION,
        Currencies.DOWN_PAYMENTS,
        Currencies.DRAFTS,
        Currencies.PAYMENT_DRAFTS,
        Currencies.RETURNS,
        Currencies.CORRECTION_INVOICE_REVERSAL,
        Currencies.CORRECTION_PURCHASE_INVOICE,
        Currencies.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        Currencies.PURCHASE_INVOICES,
        Currencies.PURCHASE_DELIVERY_NOTES,
        Currencies.CORRECTION_INVOICE,
        Currencies.PURCHASE_CREDIT_NOTES,
        Currencies.PURCHASE_DOWN_PAYMENTS,
        Currencies.PURCHASE_ORDERS,
        Currencies.WITHHOLDING_TAX_CODES,
        Currencies.GOODS_RETURN_REQUEST,
        Currencies.INCOMING_PAYMENTS,
        Currencies.BANK_STATEMENTS
    ];
    /**
     * All fields selector.
     */
    Currencies.ALL_FIELDS = new core_1.AllFields('*', Currencies);
    /**
     * All key fields of the Currencies entity.
     */
    Currencies._keyFields = [Currencies.CODE];
    /**
     * Mapping of all key field names to the respective static field property Currencies.
     */
    Currencies._keys = Currencies._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Currencies = exports.Currencies || (exports.Currencies = {}));
exports.Currencies = Currencies;
//# sourceMappingURL=Currencies.js.map