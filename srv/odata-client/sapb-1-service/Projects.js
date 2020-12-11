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
exports.Projects = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ProjectsRequestBuilder_1 = require("./ProjectsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Projects" of service "SAPB1".
 */
var Projects = /** @class */ (function (_super) {
    __extends(Projects, _super);
    function Projects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Projects`.
     * @returns A builder that constructs instances of entity type `Projects`.
     */
    Projects.builder = function () {
        return core_1.EntityV4.entityBuilder(Projects);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Projects` entity type.
     * @returns A `Projects` request builder.
     */
    Projects.requestBuilder = function () {
        return new ProjectsRequestBuilder_1.ProjectsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Projects`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Projects`.
     */
    Projects.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Projects);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Projects.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Projects.
     */
    Projects._entityName = 'Projects';
    /**
     * Default url path for the according service.
     */
    Projects._defaultServicePath = '/b1s/v2/';
    return Projects;
}(core_1.EntityV4));
exports.Projects = Projects;
var SalesOpportunities_1 = require("./SalesOpportunities");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var VendorPayments_1 = require("./VendorPayments");
var JournalEntries_1 = require("./JournalEntries");
var ProductionOrders_1 = require("./ProductionOrders");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartners_1 = require("./BusinessPartners");
var Quotations_1 = require("./Quotations");
var ProductTrees_1 = require("./ProductTrees");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var BlanketAgreements_1 = require("./BlanketAgreements");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var CreditNotes_1 = require("./CreditNotes");
var BudgetScenarios_1 = require("./BudgetScenarios");
var Orders_1 = require("./Orders");
var AdditionalExpenses_1 = require("./AdditionalExpenses");
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
var ProjectManagements_1 = require("./ProjectManagements");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
var Deposits_1 = require("./Deposits");
var IncomingPayments_1 = require("./IncomingPayments");
(function (Projects) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.CODE = new core_1.StringField('Code', Projects, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.NAME = new core_1.StringField('Name', Projects, 'Edm.String');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.VALID_FROM = new core_1.DateField('ValidFrom', Projects, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.VALID_TO = new core_1.DateField('ValidTo', Projects, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.ACTIVE = new core_1.EnumField('Active', Projects);
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.SALES_OPPORTUNITIES = new core_1.OneToManyLink('SalesOpportunities', Projects, SalesOpportunities_1.SalesOpportunities);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', Projects, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', Projects, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.VENDOR_PAYMENTS = new core_1.OneToManyLink('VendorPayments', Projects, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.JOURNAL_ENTRIES = new core_1.OneToManyLink('JournalEntries', Projects, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PRODUCTION_ORDERS = new core_1.OneToManyLink('ProductionOrders', Projects, ProductionOrders_1.ProductionOrders);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', Projects, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', Projects, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.QUOTATIONS = new core_1.OneToManyLink('Quotations', Projects, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PRODUCT_TREES = new core_1.OneToManyLink('ProductTrees', Projects, ProductTrees_1.ProductTrees);
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.CHART_OF_ACCOUNTS = new core_1.OneToManyLink('ChartOfAccounts', Projects, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', Projects, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', Projects, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', Projects, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.BLANKET_AGREEMENTS = new core_1.OneToManyLink('BlanketAgreements', Projects, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', Projects, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.INVOICES = new core_1.OneToManyLink('Invoices', Projects, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', Projects, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[budgetScenarios]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.BUDGET_SCENARIOS = new core_1.OneToManyLink('BudgetScenarios', Projects, BudgetScenarios_1.BudgetScenarios);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.ORDERS = new core_1.OneToManyLink('Orders', Projects, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.ADDITIONAL_EXPENSES = new core_1.OneToManyLink('AdditionalExpenses', Projects, AdditionalExpenses_1.AdditionalExpenses);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', Projects, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.DRAFTS = new core_1.OneToManyLink('Drafts', Projects, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PAYMENT_DRAFTS = new core_1.OneToManyLink('PaymentDrafts', Projects, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.RETURNS = new core_1.OneToManyLink('Returns', Projects, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', Projects, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', Projects, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', Projects, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', Projects, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', Projects, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', Projects, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', Projects, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', Projects, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', Projects, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.PROJECT_MANAGEMENTS = new core_1.OneToManyLink('ProjectManagements', Projects, ProjectManagements_1.ProjectManagements);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', Projects, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[deposits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.DEPOSITS = new core_1.OneToManyLink('Deposits', Projects, Deposits_1.Deposits);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Projects.INCOMING_PAYMENTS = new core_1.OneToManyLink('IncomingPayments', Projects, IncomingPayments_1.IncomingPayments);
    /**
     * All fields of the Projects entity.
     */
    Projects._allFields = [
        Projects.CODE,
        Projects.NAME,
        Projects.VALID_FROM,
        Projects.VALID_TO,
        Projects.ACTIVE,
        Projects.SALES_OPPORTUNITIES,
        Projects.INVENTORY_GEN_ENTRIES,
        Projects.PURCHASE_QUOTATIONS,
        Projects.VENDOR_PAYMENTS,
        Projects.JOURNAL_ENTRIES,
        Projects.PRODUCTION_ORDERS,
        Projects.DELIVERY_NOTES,
        Projects.BUSINESS_PARTNERS,
        Projects.QUOTATIONS,
        Projects.PRODUCT_TREES,
        Projects.CHART_OF_ACCOUNTS,
        Projects.INVENTORY_GEN_EXITS,
        Projects.PURCHASE_REQUESTS,
        Projects.RETURN_REQUEST,
        Projects.BLANKET_AGREEMENTS,
        Projects.PURCHASE_RETURNS,
        Projects.INVOICES,
        Projects.CREDIT_NOTES,
        Projects.BUDGET_SCENARIOS,
        Projects.ORDERS,
        Projects.ADDITIONAL_EXPENSES,
        Projects.DOWN_PAYMENTS,
        Projects.DRAFTS,
        Projects.PAYMENT_DRAFTS,
        Projects.RETURNS,
        Projects.CORRECTION_INVOICE_REVERSAL,
        Projects.CORRECTION_PURCHASE_INVOICE,
        Projects.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        Projects.PURCHASE_INVOICES,
        Projects.PURCHASE_DELIVERY_NOTES,
        Projects.CORRECTION_INVOICE,
        Projects.PURCHASE_CREDIT_NOTES,
        Projects.PURCHASE_DOWN_PAYMENTS,
        Projects.PURCHASE_ORDERS,
        Projects.PROJECT_MANAGEMENTS,
        Projects.GOODS_RETURN_REQUEST,
        Projects.DEPOSITS,
        Projects.INCOMING_PAYMENTS
    ];
    /**
     * All fields selector.
     */
    Projects.ALL_FIELDS = new core_1.AllFields('*', Projects);
    /**
     * All key fields of the Projects entity.
     */
    Projects._keyFields = [Projects.CODE];
    /**
     * Mapping of all key field names to the respective static field property Projects.
     */
    Projects._keys = Projects._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Projects = exports.Projects || (exports.Projects = {}));
exports.Projects = Projects;
//# sourceMappingURL=Projects.js.map