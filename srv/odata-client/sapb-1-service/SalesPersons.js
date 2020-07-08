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
exports.SalesPersons = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesPersonsRequestBuilder_1 = require("./SalesPersonsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesPersons" of service "SAPB1".
 */
var SalesPersons = /** @class */ (function (_super) {
    __extends(SalesPersons, _super);
    function SalesPersons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesPersons`.
     * @returns A builder that constructs instances of entity type `SalesPersons`.
     */
    SalesPersons.builder = function () {
        return v4_1.Entity.entityBuilder(SalesPersons);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesPersons` entity type.
     * @returns A `SalesPersons` request builder.
     */
    SalesPersons.requestBuilder = function () {
        return new SalesPersonsRequestBuilder_1.SalesPersonsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesPersons`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesPersons`.
     */
    SalesPersons.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesPersons);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesPersons.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesPersons.
     */
    SalesPersons._entityName = 'SalesPersons';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesPersons.
     */
    SalesPersons._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesPersons._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesPersons;
}(v4_1.Entity));
exports.SalesPersons = SalesPersons;
var SalesOpportunities_1 = require("./SalesOpportunities");
var UserDefaultGroups_1 = require("./UserDefaultGroups");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var CommissionGroups_1 = require("./CommissionGroups");
var Contacts_1 = require("./Contacts");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartners_1 = require("./BusinessPartners");
var Quotations_1 = require("./Quotations");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var CreditNotes_1 = require("./CreditNotes");
var StockTransfers_1 = require("./StockTransfers");
var Orders_1 = require("./Orders");
var InventoryTransferRequests_1 = require("./InventoryTransferRequests");
var Activities_1 = require("./Activities");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
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
var EmployeesInfo_1 = require("./EmployeesInfo");
var PurchaseOrders_1 = require("./PurchaseOrders");
var ProjectManagements_1 = require("./ProjectManagements");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
(function (SalesPersons) {
    /**
     * Static representation of the [[salesEmployeeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.SALES_EMPLOYEE_CODE = new v4_1.NumberField('SalesEmployeeCode', SalesPersons, 'Edm.Int32');
    /**
     * Static representation of the [[salesEmployeeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.SALES_EMPLOYEE_NAME = new v4_1.StringField('SalesEmployeeName', SalesPersons, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.REMARKS = new v4_1.StringField('Remarks', SalesPersons, 'Edm.String');
    /**
     * Static representation of the [[commissionForSalesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.COMMISSION_FOR_SALES_EMPLOYEE = new v4_1.NumberField('CommissionForSalesEmployee', SalesPersons, 'Edm.Double');
    /**
     * Static representation of the [[commissionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.COMMISSION_GROUP = new v4_1.NumberField('CommissionGroup', SalesPersons, 'Edm.Int32');
    /**
     * Static representation of the [[employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.EMPLOYEE_ID = new v4_1.NumberField('EmployeeID', SalesPersons, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.SALES_OPPORTUNITIES = new v4_1.OneToManyLink('SalesOpportunities', SalesPersons, SalesOpportunities_1.SalesOpportunities);
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.USER_DEFAULT_GROUPS = new v4_1.OneToManyLink('UserDefaultGroups', SalesPersons, UserDefaultGroups_1.UserDefaultGroups);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.INVENTORY_GEN_ENTRIES = new v4_1.OneToManyLink('InventoryGenEntries', SalesPersons, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.PURCHASE_QUOTATIONS = new v4_1.OneToManyLink('PurchaseQuotations', SalesPersons, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-one navigation property [[commissionGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.COMMISSION_GROUP_2 = new v4_1.OneToOneLink('CommissionGroup2', SalesPersons, CommissionGroups_1.CommissionGroups);
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.CONTACTS = new v4_1.OneToManyLink('Contacts', SalesPersons, Contacts_1.Contacts);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.DELIVERY_NOTES = new v4_1.OneToManyLink('DeliveryNotes', SalesPersons, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', SalesPersons, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.QUOTATIONS = new v4_1.OneToManyLink('Quotations', SalesPersons, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.INVENTORY_GEN_EXITS = new v4_1.OneToManyLink('InventoryGenExits', SalesPersons, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.PURCHASE_REQUESTS = new v4_1.OneToManyLink('PurchaseRequests', SalesPersons, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.RETURN_REQUEST = new v4_1.OneToManyLink('ReturnRequest', SalesPersons, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.PURCHASE_RETURNS = new v4_1.OneToManyLink('PurchaseReturns', SalesPersons, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.INVOICES = new v4_1.OneToManyLink('Invoices', SalesPersons, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.CREDIT_NOTES = new v4_1.OneToManyLink('CreditNotes', SalesPersons, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.STOCK_TRANSFERS = new v4_1.OneToManyLink('StockTransfers', SalesPersons, StockTransfers_1.StockTransfers);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.ORDERS = new v4_1.OneToManyLink('Orders', SalesPersons, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.INVENTORY_TRANSFER_REQUESTS = new v4_1.OneToManyLink('InventoryTransferRequests', SalesPersons, InventoryTransferRequests_1.InventoryTransferRequests);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.ACTIVITIES = new v4_1.OneToManyLink('Activities', SalesPersons, Activities_1.Activities);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.DOWN_PAYMENTS = new v4_1.OneToManyLink('DownPayments', SalesPersons, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.DRAFTS = new v4_1.OneToManyLink('Drafts', SalesPersons, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.STOCK_TRANSFER_DRAFTS = new v4_1.OneToManyLink('StockTransferDrafts', SalesPersons, StockTransferDrafts_1.StockTransferDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.RETURNS = new v4_1.OneToManyLink('Returns', SalesPersons, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.CORRECTION_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionInvoiceReversal', SalesPersons, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.CORRECTION_PURCHASE_INVOICE = new v4_1.OneToManyLink('CorrectionPurchaseInvoice', SalesPersons, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.CORRECTION_PURCHASE_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', SalesPersons, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.PURCHASE_INVOICES = new v4_1.OneToManyLink('PurchaseInvoices', SalesPersons, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.PURCHASE_DELIVERY_NOTES = new v4_1.OneToManyLink('PurchaseDeliveryNotes', SalesPersons, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.CORRECTION_INVOICE = new v4_1.OneToManyLink('CorrectionInvoice', SalesPersons, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.PURCHASE_CREDIT_NOTES = new v4_1.OneToManyLink('PurchaseCreditNotes', SalesPersons, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.PURCHASE_DOWN_PAYMENTS = new v4_1.OneToManyLink('PurchaseDownPayments', SalesPersons, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.EMPLOYEES_INFO = new v4_1.OneToManyLink('EmployeesInfo', SalesPersons, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.PURCHASE_ORDERS = new v4_1.OneToManyLink('PurchaseOrders', SalesPersons, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.PROJECT_MANAGEMENTS = new v4_1.OneToManyLink('ProjectManagements', SalesPersons, ProjectManagements_1.ProjectManagements);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesPersons.GOODS_RETURN_REQUEST = new v4_1.OneToManyLink('GoodsReturnRequest', SalesPersons, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the SalesPersons entity.
     */
    SalesPersons._allFields = [
        SalesPersons.SALES_EMPLOYEE_CODE,
        SalesPersons.SALES_EMPLOYEE_NAME,
        SalesPersons.REMARKS,
        SalesPersons.COMMISSION_FOR_SALES_EMPLOYEE,
        SalesPersons.COMMISSION_GROUP,
        SalesPersons.EMPLOYEE_ID,
        SalesPersons.SALES_OPPORTUNITIES,
        SalesPersons.USER_DEFAULT_GROUPS,
        SalesPersons.INVENTORY_GEN_ENTRIES,
        SalesPersons.PURCHASE_QUOTATIONS,
        SalesPersons.COMMISSION_GROUP_2,
        SalesPersons.CONTACTS,
        SalesPersons.DELIVERY_NOTES,
        SalesPersons.BUSINESS_PARTNERS,
        SalesPersons.QUOTATIONS,
        SalesPersons.INVENTORY_GEN_EXITS,
        SalesPersons.PURCHASE_REQUESTS,
        SalesPersons.RETURN_REQUEST,
        SalesPersons.PURCHASE_RETURNS,
        SalesPersons.INVOICES,
        SalesPersons.CREDIT_NOTES,
        SalesPersons.STOCK_TRANSFERS,
        SalesPersons.ORDERS,
        SalesPersons.INVENTORY_TRANSFER_REQUESTS,
        SalesPersons.ACTIVITIES,
        SalesPersons.DOWN_PAYMENTS,
        SalesPersons.DRAFTS,
        SalesPersons.STOCK_TRANSFER_DRAFTS,
        SalesPersons.RETURNS,
        SalesPersons.CORRECTION_INVOICE_REVERSAL,
        SalesPersons.CORRECTION_PURCHASE_INVOICE,
        SalesPersons.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        SalesPersons.PURCHASE_INVOICES,
        SalesPersons.PURCHASE_DELIVERY_NOTES,
        SalesPersons.CORRECTION_INVOICE,
        SalesPersons.PURCHASE_CREDIT_NOTES,
        SalesPersons.PURCHASE_DOWN_PAYMENTS,
        SalesPersons.EMPLOYEES_INFO,
        SalesPersons.PURCHASE_ORDERS,
        SalesPersons.PROJECT_MANAGEMENTS,
        SalesPersons.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    SalesPersons.ALL_FIELDS = new v4_1.AllFields('*', SalesPersons);
    /**
     * All key fields of the SalesPersons entity.
     */
    SalesPersons._keyFields = [SalesPersons.SALES_EMPLOYEE_CODE];
    /**
     * Mapping of all key field names to the respective static field property SalesPersons.
     */
    SalesPersons._keys = SalesPersons._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesPersons = exports.SalesPersons || (exports.SalesPersons = {}));
exports.SalesPersons = SalesPersons;
//# sourceMappingURL=SalesPersons.js.map