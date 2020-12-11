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
exports.ChartOfAccounts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ChartOfAccountsRequestBuilder_1 = require("./ChartOfAccountsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ChartOfAccounts" of service "SAPB1".
 */
var ChartOfAccounts = /** @class */ (function (_super) {
    __extends(ChartOfAccounts, _super);
    function ChartOfAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ChartOfAccounts`.
     * @returns A builder that constructs instances of entity type `ChartOfAccounts`.
     */
    ChartOfAccounts.builder = function () {
        return core_1.EntityV4.entityBuilder(ChartOfAccounts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ChartOfAccounts` entity type.
     * @returns A `ChartOfAccounts` request builder.
     */
    ChartOfAccounts.requestBuilder = function () {
        return new ChartOfAccountsRequestBuilder_1.ChartOfAccountsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ChartOfAccounts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ChartOfAccounts`.
     */
    ChartOfAccounts.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ChartOfAccounts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ChartOfAccounts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ChartOfAccounts.
     */
    ChartOfAccounts._entityName = 'ChartOfAccounts';
    /**
     * Default url path for the according service.
     */
    ChartOfAccounts._defaultServicePath = '/b1s/v2/';
    return ChartOfAccounts;
}(core_1.EntityV4));
exports.ChartOfAccounts = ChartOfAccounts;
var WorkOrders_1 = require("./WorkOrders");
var Warehouses_1 = require("./Warehouses");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var CustomsGroups_1 = require("./CustomsGroups");
var AccrualTypes_1 = require("./AccrualTypes");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var ItemGroups_1 = require("./ItemGroups");
var VatGroups_1 = require("./VatGroups");
var VendorPayments_1 = require("./VendorPayments");
var BankPages_1 = require("./BankPages");
var Items_1 = require("./Items");
var CreditCards_1 = require("./CreditCards");
var FaAccountDeterminations_1 = require("./FaAccountDeterminations");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartners_1 = require("./BusinessPartners");
var Quotations_1 = require("./Quotations");
var Currencies_1 = require("./Currencies");
var Projects_1 = require("./Projects");
var AccountCategory_1 = require("./AccountCategory");
var TransactionCodes_1 = require("./TransactionCodes");
var DistributionRules_1 = require("./DistributionRules");
var CostElements_1 = require("./CostElements");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var GlAccountAdvancedRules_1 = require("./GlAccountAdvancedRules");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var CreditNotes_1 = require("./CreditNotes");
var BusinessPlaces_1 = require("./BusinessPlaces");
var Orders_1 = require("./Orders");
var AdditionalExpenses_1 = require("./AdditionalExpenses");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
var SalesTaxAuthorities_1 = require("./SalesTaxAuthorities");
var WizardPaymentMethods_1 = require("./WizardPaymentMethods");
var PaymentDrafts_1 = require("./PaymentDrafts");
var Returns_1 = require("./Returns");
var CorrectionInvoiceReversal_1 = require("./CorrectionInvoiceReversal");
var CorrectionPurchaseInvoice_1 = require("./CorrectionPurchaseInvoice");
var CorrectionPurchaseInvoiceReversal_1 = require("./CorrectionPurchaseInvoiceReversal");
var PurchaseInvoices_1 = require("./PurchaseInvoices");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
var CorrectionInvoice_1 = require("./CorrectionInvoice");
var PurchaseCreditNotes_1 = require("./PurchaseCreditNotes");
var DunningTerms_1 = require("./DunningTerms");
var PurchaseDownPayments_1 = require("./PurchaseDownPayments");
var ExpenseTypes_1 = require("./ExpenseTypes");
var PurchaseOrders_1 = require("./PurchaseOrders");
var HouseBankAccounts_1 = require("./HouseBankAccounts");
var WithholdingTaxCodes_1 = require("./WithholdingTaxCodes");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
var IncomingPayments_1 = require("./IncomingPayments");
(function (ChartOfAccounts) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CODE = new core_1.StringField('Code', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.NAME = new core_1.StringField('Name', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[balance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BALANCE = new core_1.NumberField('Balance', ChartOfAccounts, 'Edm.Double');
    /**
     * Static representation of the [[cashAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CASH_ACCOUNT = new core_1.EnumField('CashAccount', ChartOfAccounts);
    /**
     * Static representation of the [[budgetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BUDGET_ACCOUNT = new core_1.EnumField('BudgetAccount', ChartOfAccounts);
    /**
     * Static representation of the [[activeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ACTIVE_ACCOUNT = new core_1.EnumField('ActiveAccount', ChartOfAccounts);
    /**
     * Static representation of the [[primaryAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PRIMARY_ACCOUNT = new core_1.EnumField('PrimaryAccount', ChartOfAccounts);
    /**
     * Static representation of the [[accountLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ACCOUNT_LEVEL = new core_1.NumberField('AccountLevel', ChartOfAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[dataExportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DATA_EXPORT_CODE = new core_1.StringField('DataExportCode', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[fatherAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.FATHER_ACCOUNT_KEY = new core_1.StringField('FatherAccountKey', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.EXTERNAL_CODE = new core_1.StringField('ExternalCode', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[rateConversion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.RATE_CONVERSION = new core_1.EnumField('RateConversion', ChartOfAccounts);
    /**
     * Static representation of the [[taxLiableAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.TAX_LIABLE_ACCOUNT = new core_1.EnumField('TaxLiableAccount', ChartOfAccounts);
    /**
     * Static representation of the [[taxExemptAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.TAX_EXEMPT_ACCOUNT = new core_1.EnumField('TaxExemptAccount', ChartOfAccounts);
    /**
     * Static representation of the [[externalReconNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.EXTERNAL_RECON_NO = new core_1.NumberField('ExternalReconNo', ChartOfAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[internalReconNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.INTERNAL_RECON_NO = new core_1.NumberField('InternalReconNo', ChartOfAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[accountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ACCOUNT_TYPE = new core_1.EnumField('AccountType', ChartOfAccounts);
    /**
     * Static representation of the [[acctCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ACCT_CURRENCY = new core_1.StringField('AcctCurrency', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[balanceSyscurr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BALANCE_SYSCURR = new core_1.NumberField('Balance_syscurr', ChartOfAccounts, 'Edm.Double');
    /**
     * Static representation of the [[balanceFrgnCurr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BALANCE_FRGN_CURR = new core_1.NumberField('Balance_FrgnCurr', ChartOfAccounts, 'Edm.Double');
    /**
     * Static representation of the [[protected]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PROTECTED = new core_1.EnumField('Protected', ChartOfAccounts);
    /**
     * Static representation of the [[reconciledAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.RECONCILED_ACCOUNT = new core_1.EnumField('ReconciledAccount', ChartOfAccounts);
    /**
     * Static representation of the [[liableForAdvances]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.LIABLE_FOR_ADVANCES = new core_1.EnumField('LiableForAdvances', ChartOfAccounts);
    /**
     * Static representation of the [[foreignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.FOREIGN_NAME = new core_1.StringField('ForeignName', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DETAILS = new core_1.StringField('Details', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PROJECT_CODE = new core_1.StringField('ProjectCode', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[revaluationCoordinated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.REVALUATION_COORDINATED = new core_1.EnumField('RevaluationCoordinated', ChartOfAccounts);
    /**
     * Static representation of the [[lockManualTransaction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.LOCK_MANUAL_TRANSACTION = new core_1.EnumField('LockManualTransaction', ChartOfAccounts);
    /**
     * Static representation of the [[formatCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.FORMAT_CODE = new core_1.StringField('FormatCode', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[allowChangeVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ALLOW_CHANGE_VAT_GROUP = new core_1.EnumField('AllowChangeVatGroup', ChartOfAccounts);
    /**
     * Static representation of the [[defaultVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DEFAULT_VAT_GROUP = new core_1.StringField('DefaultVatGroup', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CATEGORY = new core_1.NumberField('Category', ChartOfAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[transactionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.TRANSACTION_CODE = new core_1.StringField('TransactionCode', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[loadingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.LOADING_TYPE = new core_1.EnumField('LoadingType', ChartOfAccounts);
    /**
     * Static representation of the [[loadingFactorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.LOADING_FACTOR_CODE = new core_1.StringField('LoadingFactorCode', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[loadingFactorCode2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.LOADING_FACTOR_CODE_2 = new core_1.StringField('LoadingFactorCode2', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[loadingFactorCode3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.LOADING_FACTOR_CODE_3 = new core_1.StringField('LoadingFactorCode3', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[loadingFactorCode4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.LOADING_FACTOR_CODE_4 = new core_1.StringField('LoadingFactorCode4', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[loadingFactorCode5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.LOADING_FACTOR_CODE_5 = new core_1.StringField('LoadingFactorCode5', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[planningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PLANNING_LEVEL = new core_1.StringField('PlanningLevel', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[datevAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DATEV_ACCOUNT = new core_1.StringField('DatevAccount', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[datevAutoAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DATEV_AUTO_ACCOUNT = new core_1.EnumField('DatevAutoAccount', ChartOfAccounts);
    /**
     * Static representation of the [[datevFirstDataEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DATEV_FIRST_DATA_ENTRY = new core_1.EnumField('DatevFirstDataEntry', ChartOfAccounts);
    /**
     * Static representation of the [[allowMultipleLinking]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ALLOW_MULTIPLE_LINKING = new core_1.EnumField('AllowMultipleLinking', ChartOfAccounts);
    /**
     * Static representation of the [[projectRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PROJECT_RELEVANT = new core_1.EnumField('ProjectRelevant', ChartOfAccounts);
    /**
     * Static representation of the [[distributionRuleRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DISTRIBUTION_RULE_RELEVANT = new core_1.EnumField('DistributionRuleRelevant', ChartOfAccounts);
    /**
     * Static representation of the [[distributionRule2Relevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DISTRIBUTION_RULE_2_RELEVANT = new core_1.EnumField('DistributionRule2Relevant', ChartOfAccounts);
    /**
     * Static representation of the [[distributionRule3Relevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DISTRIBUTION_RULE_3_RELEVANT = new core_1.EnumField('DistributionRule3Relevant', ChartOfAccounts);
    /**
     * Static representation of the [[distributionRule4Relevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DISTRIBUTION_RULE_4_RELEVANT = new core_1.EnumField('DistributionRule4Relevant', ChartOfAccounts);
    /**
     * Static representation of the [[distributionRule5Relevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DISTRIBUTION_RULE_5_RELEVANT = new core_1.EnumField('DistributionRule5Relevant', ChartOfAccounts);
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BPLID = new core_1.NumberField('BPLID', ChartOfAccounts, 'Edm.Int32');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BPL_NAME = new core_1.StringField('BPLName', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.VAT_REG_NUM = new core_1.StringField('VATRegNum', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[accountPurposeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ACCOUNT_PURPOSE_CODE = new core_1.EnumField('AccountPurposeCode', ChartOfAccounts);
    /**
     * Static representation of the [[referentialAccountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.REFERENTIAL_ACCOUNT_CODE = new core_1.StringField('ReferentialAccountCode', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[validFor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.VALID_FOR = new core_1.EnumField('ValidFor', ChartOfAccounts);
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.VALID_FROM = new core_1.DateField('ValidFrom', ChartOfAccounts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.VALID_TO = new core_1.DateField('ValidTo', ChartOfAccounts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.VALID_REMARKS = new core_1.StringField('ValidRemarks', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[frozenFor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.FROZEN_FOR = new core_1.EnumField('FrozenFor', ChartOfAccounts);
    /**
     * Static representation of the [[frozenFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.FROZEN_FROM = new core_1.DateField('FrozenFrom', ChartOfAccounts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.FROZEN_TO = new core_1.DateField('FrozenTo', ChartOfAccounts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.FROZEN_REMARKS = new core_1.StringField('FrozenRemarks', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[blockManualPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BLOCK_MANUAL_POSTING = new core_1.EnumField('BlockManualPosting', ChartOfAccounts);
    /**
     * Static representation of the [[cashFlowRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CASH_FLOW_RELEVANT = new core_1.EnumField('CashFlowRelevant', ChartOfAccounts);
    /**
     * Static representation of the [[pcn874ReportRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PCN_874_REPORT_RELEVANT = new core_1.EnumField('PCN874ReportRelevant', ChartOfAccounts);
    /**
     * Static representation of the [[primaryClosingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PRIMARY_CLOSING_ACCOUNT = new core_1.StringField('PrimaryClosingAccount', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the [[costAccountingOnly]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.COST_ACCOUNTING_ONLY = new core_1.EnumField('CostAccountingOnly', ChartOfAccounts);
    /**
     * Static representation of the [[costElementRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.COST_ELEMENT_RELEVANT = new core_1.EnumField('CostElementRelevant', ChartOfAccounts);
    /**
     * Static representation of the [[costElementCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.COST_ELEMENT_CODE = new core_1.StringField('CostElementCode', ChartOfAccounts, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.WORK_ORDERS = new core_1.OneToManyLink('WorkOrders', ChartOfAccounts, WorkOrders_1.WorkOrders);
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.WAREHOUSES = new core_1.OneToManyLink('Warehouses', ChartOfAccounts, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', ChartOfAccounts, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[customsGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CUSTOMS_GROUPS = new core_1.OneToManyLink('CustomsGroups', ChartOfAccounts, CustomsGroups_1.CustomsGroups);
    /**
     * Static representation of the one-to-many navigation property [[accrualTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ACCRUAL_TYPES = new core_1.OneToManyLink('AccrualTypes', ChartOfAccounts, AccrualTypes_1.AccrualTypes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', ChartOfAccounts, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ITEM_GROUPS = new core_1.OneToManyLink('ItemGroups', ChartOfAccounts, ItemGroups_1.ItemGroups);
    /**
     * Static representation of the one-to-many navigation property [[vatGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.VAT_GROUPS = new core_1.OneToManyLink('VatGroups', ChartOfAccounts, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.VENDOR_PAYMENTS = new core_1.OneToManyLink('VendorPayments', ChartOfAccounts, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[bankPages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BANK_PAGES = new core_1.OneToManyLink('BankPages', ChartOfAccounts, BankPages_1.BankPages);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ITEMS = new core_1.OneToManyLink('Items', ChartOfAccounts, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[creditCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CREDIT_CARDS = new core_1.OneToManyLink('CreditCards', ChartOfAccounts, CreditCards_1.CreditCards);
    /**
     * Static representation of the one-to-many navigation property [[faAccountDeterminations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.FA_ACCOUNT_DETERMINATIONS = new core_1.OneToManyLink('FAAccountDeterminations', ChartOfAccounts, FaAccountDeterminations_1.FaAccountDeterminations);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', ChartOfAccounts, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', ChartOfAccounts, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.QUOTATIONS = new core_1.OneToManyLink('Quotations', ChartOfAccounts, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CURRENCY = new core_1.OneToOneLink('Currency', ChartOfAccounts, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PROJECT = new core_1.OneToOneLink('Project', ChartOfAccounts, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[accountCategory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ACCOUNT_CATEGORY = new core_1.OneToOneLink('AccountCategory', ChartOfAccounts, AccountCategory_1.AccountCategory);
    /**
     * Static representation of the one-to-one navigation property [[transactionCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.TRANSACTION_CODE_2 = new core_1.OneToOneLink('TransactionCode2', ChartOfAccounts, TransactionCodes_1.TransactionCodes);
    /**
     * Static representation of the one-to-one navigation property [[distributionRule]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DISTRIBUTION_RULE = new core_1.OneToOneLink('DistributionRule', ChartOfAccounts, DistributionRules_1.DistributionRules);
    /**
     * Static representation of the one-to-one navigation property [[costElement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.COST_ELEMENT = new core_1.OneToOneLink('CostElement', ChartOfAccounts, CostElements_1.CostElements);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', ChartOfAccounts, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', ChartOfAccounts, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', ChartOfAccounts, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.GL_ACCOUNT_ADVANCED_RULES = new core_1.OneToManyLink('GLAccountAdvancedRules', ChartOfAccounts, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', ChartOfAccounts, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.INVOICES = new core_1.OneToManyLink('Invoices', ChartOfAccounts, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', ChartOfAccounts, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.BUSINESS_PLACES = new core_1.OneToManyLink('BusinessPlaces', ChartOfAccounts, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ORDERS = new core_1.OneToManyLink('Orders', ChartOfAccounts, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.ADDITIONAL_EXPENSES = new core_1.OneToManyLink('AdditionalExpenses', ChartOfAccounts, AdditionalExpenses_1.AdditionalExpenses);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', ChartOfAccounts, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DRAFTS = new core_1.OneToManyLink('Drafts', ChartOfAccounts, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[salesTaxAuthorities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.SALES_TAX_AUTHORITIES = new core_1.OneToManyLink('SalesTaxAuthorities', ChartOfAccounts, SalesTaxAuthorities_1.SalesTaxAuthorities);
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.WIZARD_PAYMENT_METHODS = new core_1.OneToManyLink('WizardPaymentMethods', ChartOfAccounts, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PAYMENT_DRAFTS = new core_1.OneToManyLink('PaymentDrafts', ChartOfAccounts, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.RETURNS = new core_1.OneToManyLink('Returns', ChartOfAccounts, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', ChartOfAccounts, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', ChartOfAccounts, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', ChartOfAccounts, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', ChartOfAccounts, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', ChartOfAccounts, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', ChartOfAccounts, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', ChartOfAccounts, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[dunningTerms]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.DUNNING_TERMS = new core_1.OneToManyLink('DunningTerms', ChartOfAccounts, DunningTerms_1.DunningTerms);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', ChartOfAccounts, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[expenseTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.EXPENSE_TYPES = new core_1.OneToManyLink('ExpenseTypes', ChartOfAccounts, ExpenseTypes_1.ExpenseTypes);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', ChartOfAccounts, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[houseBankAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.HOUSE_BANK_ACCOUNTS = new core_1.OneToManyLink('HouseBankAccounts', ChartOfAccounts, HouseBankAccounts_1.HouseBankAccounts);
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.WITHHOLDING_TAX_CODES = new core_1.OneToManyLink('WithholdingTaxCodes', ChartOfAccounts, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', ChartOfAccounts, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ChartOfAccounts.INCOMING_PAYMENTS = new core_1.OneToManyLink('IncomingPayments', ChartOfAccounts, IncomingPayments_1.IncomingPayments);
    /**
     * All fields of the ChartOfAccounts entity.
     */
    ChartOfAccounts._allFields = [
        ChartOfAccounts.CODE,
        ChartOfAccounts.NAME,
        ChartOfAccounts.BALANCE,
        ChartOfAccounts.CASH_ACCOUNT,
        ChartOfAccounts.BUDGET_ACCOUNT,
        ChartOfAccounts.ACTIVE_ACCOUNT,
        ChartOfAccounts.PRIMARY_ACCOUNT,
        ChartOfAccounts.ACCOUNT_LEVEL,
        ChartOfAccounts.DATA_EXPORT_CODE,
        ChartOfAccounts.FATHER_ACCOUNT_KEY,
        ChartOfAccounts.EXTERNAL_CODE,
        ChartOfAccounts.RATE_CONVERSION,
        ChartOfAccounts.TAX_LIABLE_ACCOUNT,
        ChartOfAccounts.TAX_EXEMPT_ACCOUNT,
        ChartOfAccounts.EXTERNAL_RECON_NO,
        ChartOfAccounts.INTERNAL_RECON_NO,
        ChartOfAccounts.ACCOUNT_TYPE,
        ChartOfAccounts.ACCT_CURRENCY,
        ChartOfAccounts.BALANCE_SYSCURR,
        ChartOfAccounts.BALANCE_FRGN_CURR,
        ChartOfAccounts.PROTECTED,
        ChartOfAccounts.RECONCILED_ACCOUNT,
        ChartOfAccounts.LIABLE_FOR_ADVANCES,
        ChartOfAccounts.FOREIGN_NAME,
        ChartOfAccounts.DETAILS,
        ChartOfAccounts.PROJECT_CODE,
        ChartOfAccounts.REVALUATION_COORDINATED,
        ChartOfAccounts.LOCK_MANUAL_TRANSACTION,
        ChartOfAccounts.FORMAT_CODE,
        ChartOfAccounts.ALLOW_CHANGE_VAT_GROUP,
        ChartOfAccounts.DEFAULT_VAT_GROUP,
        ChartOfAccounts.CATEGORY,
        ChartOfAccounts.TRANSACTION_CODE,
        ChartOfAccounts.LOADING_TYPE,
        ChartOfAccounts.LOADING_FACTOR_CODE,
        ChartOfAccounts.LOADING_FACTOR_CODE_2,
        ChartOfAccounts.LOADING_FACTOR_CODE_3,
        ChartOfAccounts.LOADING_FACTOR_CODE_4,
        ChartOfAccounts.LOADING_FACTOR_CODE_5,
        ChartOfAccounts.PLANNING_LEVEL,
        ChartOfAccounts.DATEV_ACCOUNT,
        ChartOfAccounts.DATEV_AUTO_ACCOUNT,
        ChartOfAccounts.DATEV_FIRST_DATA_ENTRY,
        ChartOfAccounts.ALLOW_MULTIPLE_LINKING,
        ChartOfAccounts.PROJECT_RELEVANT,
        ChartOfAccounts.DISTRIBUTION_RULE_RELEVANT,
        ChartOfAccounts.DISTRIBUTION_RULE_2_RELEVANT,
        ChartOfAccounts.DISTRIBUTION_RULE_3_RELEVANT,
        ChartOfAccounts.DISTRIBUTION_RULE_4_RELEVANT,
        ChartOfAccounts.DISTRIBUTION_RULE_5_RELEVANT,
        ChartOfAccounts.BPLID,
        ChartOfAccounts.BPL_NAME,
        ChartOfAccounts.VAT_REG_NUM,
        ChartOfAccounts.ACCOUNT_PURPOSE_CODE,
        ChartOfAccounts.REFERENTIAL_ACCOUNT_CODE,
        ChartOfAccounts.VALID_FOR,
        ChartOfAccounts.VALID_FROM,
        ChartOfAccounts.VALID_TO,
        ChartOfAccounts.VALID_REMARKS,
        ChartOfAccounts.FROZEN_FOR,
        ChartOfAccounts.FROZEN_FROM,
        ChartOfAccounts.FROZEN_TO,
        ChartOfAccounts.FROZEN_REMARKS,
        ChartOfAccounts.BLOCK_MANUAL_POSTING,
        ChartOfAccounts.CASH_FLOW_RELEVANT,
        ChartOfAccounts.PCN_874_REPORT_RELEVANT,
        ChartOfAccounts.PRIMARY_CLOSING_ACCOUNT,
        ChartOfAccounts.COST_ACCOUNTING_ONLY,
        ChartOfAccounts.COST_ELEMENT_RELEVANT,
        ChartOfAccounts.COST_ELEMENT_CODE,
        ChartOfAccounts.WORK_ORDERS,
        ChartOfAccounts.WAREHOUSES,
        ChartOfAccounts.INVENTORY_GEN_ENTRIES,
        ChartOfAccounts.CUSTOMS_GROUPS,
        ChartOfAccounts.ACCRUAL_TYPES,
        ChartOfAccounts.PURCHASE_QUOTATIONS,
        ChartOfAccounts.ITEM_GROUPS,
        ChartOfAccounts.VAT_GROUPS,
        ChartOfAccounts.VENDOR_PAYMENTS,
        ChartOfAccounts.BANK_PAGES,
        ChartOfAccounts.ITEMS,
        ChartOfAccounts.CREDIT_CARDS,
        ChartOfAccounts.FA_ACCOUNT_DETERMINATIONS,
        ChartOfAccounts.DELIVERY_NOTES,
        ChartOfAccounts.BUSINESS_PARTNERS,
        ChartOfAccounts.QUOTATIONS,
        ChartOfAccounts.CURRENCY,
        ChartOfAccounts.PROJECT,
        ChartOfAccounts.ACCOUNT_CATEGORY,
        ChartOfAccounts.TRANSACTION_CODE_2,
        ChartOfAccounts.DISTRIBUTION_RULE,
        ChartOfAccounts.COST_ELEMENT,
        ChartOfAccounts.INVENTORY_GEN_EXITS,
        ChartOfAccounts.PURCHASE_REQUESTS,
        ChartOfAccounts.RETURN_REQUEST,
        ChartOfAccounts.GL_ACCOUNT_ADVANCED_RULES,
        ChartOfAccounts.PURCHASE_RETURNS,
        ChartOfAccounts.INVOICES,
        ChartOfAccounts.CREDIT_NOTES,
        ChartOfAccounts.BUSINESS_PLACES,
        ChartOfAccounts.ORDERS,
        ChartOfAccounts.ADDITIONAL_EXPENSES,
        ChartOfAccounts.DOWN_PAYMENTS,
        ChartOfAccounts.DRAFTS,
        ChartOfAccounts.SALES_TAX_AUTHORITIES,
        ChartOfAccounts.WIZARD_PAYMENT_METHODS,
        ChartOfAccounts.PAYMENT_DRAFTS,
        ChartOfAccounts.RETURNS,
        ChartOfAccounts.CORRECTION_INVOICE_REVERSAL,
        ChartOfAccounts.CORRECTION_PURCHASE_INVOICE,
        ChartOfAccounts.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        ChartOfAccounts.PURCHASE_INVOICES,
        ChartOfAccounts.PURCHASE_DELIVERY_NOTES,
        ChartOfAccounts.CORRECTION_INVOICE,
        ChartOfAccounts.PURCHASE_CREDIT_NOTES,
        ChartOfAccounts.DUNNING_TERMS,
        ChartOfAccounts.PURCHASE_DOWN_PAYMENTS,
        ChartOfAccounts.EXPENSE_TYPES,
        ChartOfAccounts.PURCHASE_ORDERS,
        ChartOfAccounts.HOUSE_BANK_ACCOUNTS,
        ChartOfAccounts.WITHHOLDING_TAX_CODES,
        ChartOfAccounts.GOODS_RETURN_REQUEST,
        ChartOfAccounts.INCOMING_PAYMENTS
    ];
    /**
     * All fields selector.
     */
    ChartOfAccounts.ALL_FIELDS = new core_1.AllFields('*', ChartOfAccounts);
    /**
     * All key fields of the ChartOfAccounts entity.
     */
    ChartOfAccounts._keyFields = [ChartOfAccounts.CODE];
    /**
     * Mapping of all key field names to the respective static field property ChartOfAccounts.
     */
    ChartOfAccounts._keys = ChartOfAccounts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ChartOfAccounts = exports.ChartOfAccounts || (exports.ChartOfAccounts = {}));
exports.ChartOfAccounts = ChartOfAccounts;
//# sourceMappingURL=ChartOfAccounts.js.map