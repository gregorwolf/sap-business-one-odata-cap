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
exports.Countries = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CountriesRequestBuilder_1 = require("./CountriesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Countries" of service "SAPB1".
 */
var Countries = /** @class */ (function (_super) {
    __extends(Countries, _super);
    function Countries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Countries`.
     * @returns A builder that constructs instances of entity type `Countries`.
     */
    Countries.builder = function () {
        return v4_1.Entity.entityBuilder(Countries);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Countries` entity type.
     * @returns A `Countries` request builder.
     */
    Countries.requestBuilder = function () {
        return new CountriesRequestBuilder_1.CountriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Countries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Countries`.
     */
    Countries.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Countries);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Countries.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Countries.
     */
    Countries._entityName = 'Countries';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Countries.
     */
    Countries._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Countries._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Countries;
}(v4_1.Entity));
exports.Countries = Countries;
var UserDefaultGroups_1 = require("./UserDefaultGroups");
var Warehouses_1 = require("./Warehouses");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var ChecksforPayment_1 = require("./ChecksforPayment");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var VendorPayments_1 = require("./VendorPayments");
var CreditCards_1 = require("./CreditCards");
var Contacts_1 = require("./Contacts");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartners_1 = require("./BusinessPartners");
var Quotations_1 = require("./Quotations");
var WarehouseLocations_1 = require("./WarehouseLocations");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var GlAccountAdvancedRules_1 = require("./GlAccountAdvancedRules");
var States_1 = require("./States");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var CreditNotes_1 = require("./CreditNotes");
var BusinessPlaces_1 = require("./BusinessPlaces");
var Orders_1 = require("./Orders");
var Activities_1 = require("./Activities");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
var WizardPaymentMethods_1 = require("./WizardPaymentMethods");
var PaymentDrafts_1 = require("./PaymentDrafts");
var Returns_1 = require("./Returns");
var CorrectionInvoiceReversal_1 = require("./CorrectionInvoiceReversal");
var CorrectionPurchaseInvoice_1 = require("./CorrectionPurchaseInvoice");
var CorrectionPurchaseInvoiceReversal_1 = require("./CorrectionPurchaseInvoiceReversal");
var CustomerEquipmentCards_1 = require("./CustomerEquipmentCards");
var PurchaseInvoices_1 = require("./PurchaseInvoices");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
var CorrectionInvoice_1 = require("./CorrectionInvoice");
var PurchaseCreditNotes_1 = require("./PurchaseCreditNotes");
var ServiceCalls_1 = require("./ServiceCalls");
var PurchaseDownPayments_1 = require("./PurchaseDownPayments");
var EmployeesInfo_1 = require("./EmployeesInfo");
var Banks_1 = require("./Banks");
var PurchaseOrders_1 = require("./PurchaseOrders");
var HouseBankAccounts_1 = require("./HouseBankAccounts");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
var IncomingPayments_1 = require("./IncomingPayments");
(function (Countries) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CODE = new v4_1.StringField('Code', Countries, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.NAME = new v4_1.StringField('Name', Countries, 'Edm.String');
    /**
     * Static representation of the [[codeForReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CODE_FOR_REPORTS = new v4_1.StringField('CodeForReports', Countries, 'Edm.String');
    /**
     * Static representation of the [[addressFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.ADDRESS_FORMAT = new v4_1.NumberField('AddressFormat', Countries, 'Edm.Int32');
    /**
     * Static representation of the [[numberOfDigitsForTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.NUMBER_OF_DIGITS_FOR_TAX_ID = new v4_1.NumberField('NumberOfDigitsForTaxID', Countries, 'Edm.Int32');
    /**
     * Static representation of the [[bankCodeDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.BANK_CODE_DIGITS = new v4_1.NumberField('BankCodeDigits', Countries, 'Edm.Int32');
    /**
     * Static representation of the [[bankBranchDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.BANK_BRANCH_DIGITS = new v4_1.NumberField('BankBranchDigits', Countries, 'Edm.Int32');
    /**
     * Static representation of the [[bankAccountDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.BANK_ACCOUNT_DIGITS = new v4_1.NumberField('BankAccountDigits', Countries, 'Edm.Int32');
    /**
     * Static representation of the [[bankControlKeyDigits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.BANK_CONTROL_KEY_DIGITS = new v4_1.NumberField('BankControlKeyDigits', Countries, 'Edm.Int32');
    /**
     * Static representation of the [[uicCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.UIC_COUNTRY_CODE = new v4_1.StringField('UICCountryCode', Countries, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.USER_DEFAULT_GROUPS = new v4_1.OneToManyLink('UserDefaultGroups', Countries, UserDefaultGroups_1.UserDefaultGroups);
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.WAREHOUSES = new v4_1.OneToManyLink('Warehouses', Countries, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.INVENTORY_GEN_ENTRIES = new v4_1.OneToManyLink('InventoryGenEntries', Countries, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[checksforPayment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CHECKSFOR_PAYMENT = new v4_1.OneToManyLink('ChecksforPayment', Countries, ChecksforPayment_1.ChecksforPayment);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.PURCHASE_QUOTATIONS = new v4_1.OneToManyLink('PurchaseQuotations', Countries, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.VENDOR_PAYMENTS = new v4_1.OneToManyLink('VendorPayments', Countries, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[creditCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CREDIT_CARDS = new v4_1.OneToManyLink('CreditCards', Countries, CreditCards_1.CreditCards);
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CONTACTS = new v4_1.OneToManyLink('Contacts', Countries, Contacts_1.Contacts);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.DELIVERY_NOTES = new v4_1.OneToManyLink('DeliveryNotes', Countries, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', Countries, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.QUOTATIONS = new v4_1.OneToManyLink('Quotations', Countries, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[warehouseLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.WAREHOUSE_LOCATIONS = new v4_1.OneToManyLink('WarehouseLocations', Countries, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.INVENTORY_GEN_EXITS = new v4_1.OneToManyLink('InventoryGenExits', Countries, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.PURCHASE_REQUESTS = new v4_1.OneToManyLink('PurchaseRequests', Countries, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.RETURN_REQUEST = new v4_1.OneToManyLink('ReturnRequest', Countries, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.GL_ACCOUNT_ADVANCED_RULES = new v4_1.OneToManyLink('GLAccountAdvancedRules', Countries, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * Static representation of the one-to-many navigation property [[states]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.STATES = new v4_1.OneToManyLink('States', Countries, States_1.States);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.PURCHASE_RETURNS = new v4_1.OneToManyLink('PurchaseReturns', Countries, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.INVOICES = new v4_1.OneToManyLink('Invoices', Countries, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CREDIT_NOTES = new v4_1.OneToManyLink('CreditNotes', Countries, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.BUSINESS_PLACES = new v4_1.OneToManyLink('BusinessPlaces', Countries, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.ORDERS = new v4_1.OneToManyLink('Orders', Countries, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.ACTIVITIES = new v4_1.OneToManyLink('Activities', Countries, Activities_1.Activities);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.DOWN_PAYMENTS = new v4_1.OneToManyLink('DownPayments', Countries, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.DRAFTS = new v4_1.OneToManyLink('Drafts', Countries, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.WIZARD_PAYMENT_METHODS = new v4_1.OneToManyLink('WizardPaymentMethods', Countries, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.PAYMENT_DRAFTS = new v4_1.OneToManyLink('PaymentDrafts', Countries, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.RETURNS = new v4_1.OneToManyLink('Returns', Countries, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CORRECTION_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionInvoiceReversal', Countries, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CORRECTION_PURCHASE_INVOICE = new v4_1.OneToManyLink('CorrectionPurchaseInvoice', Countries, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CORRECTION_PURCHASE_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', Countries, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CUSTOMER_EQUIPMENT_CARDS = new v4_1.OneToManyLink('CustomerEquipmentCards', Countries, CustomerEquipmentCards_1.CustomerEquipmentCards);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.PURCHASE_INVOICES = new v4_1.OneToManyLink('PurchaseInvoices', Countries, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.PURCHASE_DELIVERY_NOTES = new v4_1.OneToManyLink('PurchaseDeliveryNotes', Countries, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CORRECTION_INVOICE = new v4_1.OneToManyLink('CorrectionInvoice', Countries, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.PURCHASE_CREDIT_NOTES = new v4_1.OneToManyLink('PurchaseCreditNotes', Countries, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.SERVICE_CALLS = new v4_1.OneToManyLink('ServiceCalls', Countries, ServiceCalls_1.ServiceCalls);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.PURCHASE_DOWN_PAYMENTS = new v4_1.OneToManyLink('PurchaseDownPayments', Countries, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.EMPLOYEES_INFO = new v4_1.OneToManyLink('EmployeesInfo', Countries, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-many navigation property [[banks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.BANKS = new v4_1.OneToManyLink('Banks', Countries, Banks_1.Banks);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.PURCHASE_ORDERS = new v4_1.OneToManyLink('PurchaseOrders', Countries, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[houseBankAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.HOUSE_BANK_ACCOUNTS = new v4_1.OneToManyLink('HouseBankAccounts', Countries, HouseBankAccounts_1.HouseBankAccounts);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.GOODS_RETURN_REQUEST = new v4_1.OneToManyLink('GoodsReturnRequest', Countries, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.INCOMING_PAYMENTS = new v4_1.OneToManyLink('IncomingPayments', Countries, IncomingPayments_1.IncomingPayments);
    /**
     * All fields of the Countries entity.
     */
    Countries._allFields = [
        Countries.CODE,
        Countries.NAME,
        Countries.CODE_FOR_REPORTS,
        Countries.ADDRESS_FORMAT,
        Countries.NUMBER_OF_DIGITS_FOR_TAX_ID,
        Countries.BANK_CODE_DIGITS,
        Countries.BANK_BRANCH_DIGITS,
        Countries.BANK_ACCOUNT_DIGITS,
        Countries.BANK_CONTROL_KEY_DIGITS,
        Countries.UIC_COUNTRY_CODE,
        Countries.USER_DEFAULT_GROUPS,
        Countries.WAREHOUSES,
        Countries.INVENTORY_GEN_ENTRIES,
        Countries.CHECKSFOR_PAYMENT,
        Countries.PURCHASE_QUOTATIONS,
        Countries.VENDOR_PAYMENTS,
        Countries.CREDIT_CARDS,
        Countries.CONTACTS,
        Countries.DELIVERY_NOTES,
        Countries.BUSINESS_PARTNERS,
        Countries.QUOTATIONS,
        Countries.WAREHOUSE_LOCATIONS,
        Countries.INVENTORY_GEN_EXITS,
        Countries.PURCHASE_REQUESTS,
        Countries.RETURN_REQUEST,
        Countries.GL_ACCOUNT_ADVANCED_RULES,
        Countries.STATES,
        Countries.PURCHASE_RETURNS,
        Countries.INVOICES,
        Countries.CREDIT_NOTES,
        Countries.BUSINESS_PLACES,
        Countries.ORDERS,
        Countries.ACTIVITIES,
        Countries.DOWN_PAYMENTS,
        Countries.DRAFTS,
        Countries.WIZARD_PAYMENT_METHODS,
        Countries.PAYMENT_DRAFTS,
        Countries.RETURNS,
        Countries.CORRECTION_INVOICE_REVERSAL,
        Countries.CORRECTION_PURCHASE_INVOICE,
        Countries.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        Countries.CUSTOMER_EQUIPMENT_CARDS,
        Countries.PURCHASE_INVOICES,
        Countries.PURCHASE_DELIVERY_NOTES,
        Countries.CORRECTION_INVOICE,
        Countries.PURCHASE_CREDIT_NOTES,
        Countries.SERVICE_CALLS,
        Countries.PURCHASE_DOWN_PAYMENTS,
        Countries.EMPLOYEES_INFO,
        Countries.BANKS,
        Countries.PURCHASE_ORDERS,
        Countries.HOUSE_BANK_ACCOUNTS,
        Countries.GOODS_RETURN_REQUEST,
        Countries.INCOMING_PAYMENTS
    ];
    /**
     * All fields selector.
     */
    Countries.ALL_FIELDS = new v4_1.AllFields('*', Countries);
    /**
     * All key fields of the Countries entity.
     */
    Countries._keyFields = [Countries.CODE];
    /**
     * Mapping of all key field names to the respective static field property Countries.
     */
    Countries._keys = Countries._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Countries = exports.Countries || (exports.Countries = {}));
exports.Countries = Countries;
//# sourceMappingURL=Countries.js.map