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
exports.GlAccountAdvancedRules = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var GlAccountAdvancedRulesRequestBuilder_1 = require("./GlAccountAdvancedRulesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "GLAccountAdvancedRules" of service "SAPB1".
 */
var GlAccountAdvancedRules = /** @class */ (function (_super) {
    __extends(GlAccountAdvancedRules, _super);
    function GlAccountAdvancedRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GlAccountAdvancedRules`.
     * @returns A builder that constructs instances of entity type `GlAccountAdvancedRules`.
     */
    GlAccountAdvancedRules.builder = function () {
        return v4_1.Entity.entityBuilder(GlAccountAdvancedRules);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GlAccountAdvancedRules` entity type.
     * @returns A `GlAccountAdvancedRules` request builder.
     */
    GlAccountAdvancedRules.requestBuilder = function () {
        return new GlAccountAdvancedRulesRequestBuilder_1.GlAccountAdvancedRulesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GlAccountAdvancedRules`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GlAccountAdvancedRules`.
     */
    GlAccountAdvancedRules.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, GlAccountAdvancedRules);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GlAccountAdvancedRules.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GlAccountAdvancedRules.
     */
    GlAccountAdvancedRules._entityName = 'GLAccountAdvancedRules';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GlAccountAdvancedRules.
     */
    GlAccountAdvancedRules._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    GlAccountAdvancedRules._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GlAccountAdvancedRules;
}(v4_1.Entity));
exports.GlAccountAdvancedRules = GlAccountAdvancedRules;
var Items_1 = require("./Items");
var ItemGroups_1 = require("./ItemGroups");
var Warehouses_1 = require("./Warehouses");
var BusinessPartnerGroups_1 = require("./BusinessPartnerGroups");
var Countries_1 = require("./Countries");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var VatGroups_1 = require("./VatGroups");
var BusinessPartners_1 = require("./BusinessPartners");
(function (GlAccountAdvancedRules) {
    /**
     * Static representation of the [[absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.ABSOLUTE_ENTRY = new v4_1.NumberField('AbsoluteEntry', GlAccountAdvancedRules, 'Edm.Int32');
    /**
     * Static representation of the [[period]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.PERIOD = new v4_1.StringField('Period', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[beginningofFinancialYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.BEGINNINGOF_FINANCIAL_YEAR = new v4_1.DateField('BeginningofFinancialYear', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.FINANCIAL_YEAR = new v4_1.NumberField('FinancialYear', GlAccountAdvancedRules, 'Edm.Int32');
    /**
     * Static representation of the [[periodName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.PERIOD_NAME = new v4_1.StringField('PeriodName', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[numberOfPeriods]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.NUMBER_OF_PERIODS = new v4_1.NumberField('NumberOfPeriods', GlAccountAdvancedRules, 'Edm.Int32');
    /**
     * Static representation of the [[fromPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.FROM_POSTING_DATE = new v4_1.DateField('FromPostingDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[toPostingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.TO_POSTING_DATE = new v4_1.DateField('ToPostingDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[fromDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.FROM_DUE_DATE = new v4_1.DateField('FromDueDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[toDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.TO_DUE_DATE = new v4_1.DateField('ToDueDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[fromDocumentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.FROM_DOCUMENT_DATE = new v4_1.DateField('FromDocumentDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[toDocumentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.TO_DOCUMENT_DATE = new v4_1.DateField('ToDocumentDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.ITEM_CODE = new v4_1.StringField('ItemCode', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[itemGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.ITEM_GROUP = new v4_1.NumberField('ItemGroup', GlAccountAdvancedRules, 'Edm.Int32');
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.WAREHOUSE = new v4_1.StringField('Warehouse', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[bpGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.BP_GROUP = new v4_1.NumberField('BPGroup', GlAccountAdvancedRules, 'Edm.Int32');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[shipToCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.SHIP_TO_COUNTRY = new v4_1.StringField('ShipToCountry', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[shipToState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.SHIP_TO_STATE = new v4_1.StringField('ShipToState', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.DESCRIPTION = new v4_1.StringField('Description', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.CODE = new v4_1.StringField('Code', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[fromDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.FROM_DATE = new v4_1.DateField('FromDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[toDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.TO_DATE = new v4_1.DateField('ToDate', GlAccountAdvancedRules, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[expensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.EXPENSES_ACCOUNT = new v4_1.StringField('ExpensesAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[revenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.REVENUES_ACCOUNT = new v4_1.StringField('RevenuesAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[exemptIncomeAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.EXEMPT_INCOME_ACC = new v4_1.StringField('ExemptIncomeAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[inventoryAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.INVENTORY_ACCOUNT = new v4_1.StringField('InventoryAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[costAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.COST_ACCOUNT = new v4_1.StringField('CostAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[transferAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.TRANSFER_ACCOUNT = new v4_1.StringField('TransferAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[varienceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.VARIENCE_ACCOUNT = new v4_1.StringField('VarienceAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[priceDifferenceAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.PRICE_DIFFERENCE_ACC = new v4_1.StringField('PriceDifferenceAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[negativeInventoryAdjustmentAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT = new v4_1.StringField('NegativeInventoryAdjustmentAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[decreasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.DECREASING_ACCOUNT = new v4_1.StringField('DecreasingAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[increasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.INCREASING_ACCOUNT = new v4_1.StringField('IncreasingAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[returningAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.RETURNING_ACCOUNT = new v4_1.StringField('ReturningAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[euRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.EU_REVENUES_ACCOUNT = new v4_1.StringField('EURevenuesAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[euExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.EU_EXPENSES_ACCOUNT = new v4_1.StringField('EUExpensesAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[foreignRevenueAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.FOREIGN_REVENUE_ACC = new v4_1.StringField('ForeignRevenueAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[foreignExpensAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.FOREIGN_EXPENS_ACC = new v4_1.StringField('ForeignExpensAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[purchaseAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.PURCHASE_ACCT = new v4_1.StringField('PurchaseAcct', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[paReturnAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.PA_RETURN_ACCT = new v4_1.StringField('PAReturnAcct', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[purchaseOffsetAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.PURCHASE_OFFSET_ACCT = new v4_1.StringField('PurchaseOffsetAcct', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[exchangeRateDifferencesAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.EXCHANGE_RATE_DIFFERENCES_ACCT = new v4_1.StringField('ExchangeRateDifferencesAcct', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[goodsClearingAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.GOODS_CLEARING_ACCT = new v4_1.StringField('GoodsClearingAcct', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[glDecreaseAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.GL_DECREASE_ACCT = new v4_1.StringField('GLDecreaseAcct', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[glIncreaseAcct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.GL_INCREASE_ACCT = new v4_1.StringField('GLIncreaseAcct', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[wipAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.WIP_ACCOUNT = new v4_1.StringField('WipAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[wipVarianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.WIP_VARIANCE_ACCOUNT = new v4_1.StringField('WipVarianceAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[wipOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT = new v4_1.StringField('WipOffsetProfitAndLossAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[inventoryOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT = new v4_1.StringField('InventoryOffsetProfitAndLossAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[stockInflationAdjustAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.STOCK_INFLATION_ADJUST_ACCOUNT = new v4_1.StringField('StockInflationAdjustAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[stockInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.STOCK_INFLATION_OFFSET_ACCOUNT = new v4_1.StringField('StockInflationOffsetAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[costInflationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.COST_INFLATION_ACCOUNT = new v4_1.StringField('CostInflationAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[costInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.COST_INFLATION_OFFSET_ACCOUNT = new v4_1.StringField('CostInflationOffsetAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[expenseClearingAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.EXPENSE_CLEARING_ACT = new v4_1.StringField('ExpenseClearingAct', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[expenseOffsettingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.EXPENSE_OFFSETTING_ACCOUNT = new v4_1.StringField('ExpenseOffsettingAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[stockInTransitAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.STOCK_IN_TRANSIT_ACCOUNT = new v4_1.StringField('StockInTransitAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[shippedGoodsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.SHIPPED_GOODS_ACCOUNT = new v4_1.StringField('ShippedGoodsAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[vatInRevenueAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.VAT_IN_REVENUE_ACCOUNT = new v4_1.StringField('VATInRevenueAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[salesCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.SALES_CREDIT_ACC = new v4_1.StringField('SalesCreditAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[purchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.PURCHASE_CREDIT_ACC = new v4_1.StringField('PurchaseCreditAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[exemptedCredits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.EXEMPTED_CREDITS = new v4_1.StringField('ExemptedCredits', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[salesCreditForeignAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.SALES_CREDIT_FOREIGN_ACC = new v4_1.StringField('SalesCreditForeignAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[foreignPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.FOREIGN_PURCHASE_CREDIT_ACC = new v4_1.StringField('ForeignPurchaseCreditAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[salesCreditEuAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.SALES_CREDIT_EU_ACC = new v4_1.StringField('SalesCreditEUAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[euPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.EU_PURCHASE_CREDIT_ACC = new v4_1.StringField('EUPurchaseCreditAcc', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[purchaseBalanceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.PURCHASE_BALANCE_ACCOUNT = new v4_1.StringField('PurchaseBalanceAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[whIncomingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.WH_INCOMING_CENVAT_ACCOUNT = new v4_1.StringField('WHIncomingCenvatAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[whOutgoingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.WH_OUTGOING_CENVAT_ACCOUNT = new v4_1.StringField('WHOutgoingCenvatAccount', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.VAT_GROUP = new v4_1.StringField('VATGroup', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.BP_CODE = new v4_1.StringField('BPCode', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[usage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.USAGE = new v4_1.NumberField('Usage', GlAccountAdvancedRules, 'Edm.Int32');
    /**
     * Static representation of the [[udf1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.UDF_1 = new v4_1.StringField('UDF1', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[udf2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.UDF_2 = new v4_1.StringField('UDF2', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[udf3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.UDF_3 = new v4_1.StringField('UDF3', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[udf4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.UDF_4 = new v4_1.StringField('UDF4', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the [[udf5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.UDF_5 = new v4_1.StringField('UDF5', GlAccountAdvancedRules, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.ITEM = new v4_1.OneToOneLink('Item', GlAccountAdvancedRules, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.ITEM_GROUPS = new v4_1.OneToOneLink('ItemGroups', GlAccountAdvancedRules, ItemGroups_1.ItemGroups);
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.WAREHOUSE_2 = new v4_1.OneToOneLink('Warehouse2', GlAccountAdvancedRules, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-one navigation property [[businessPartnerGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.BUSINESS_PARTNER_GROUP = new v4_1.OneToOneLink('BusinessPartnerGroup', GlAccountAdvancedRules, BusinessPartnerGroups_1.BusinessPartnerGroups);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.COUNTRY = new v4_1.OneToOneLink('Country', GlAccountAdvancedRules, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', GlAccountAdvancedRules, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup_1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.VAT_GROUP_1 = new v4_1.OneToOneLink('VatGroup', GlAccountAdvancedRules, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GlAccountAdvancedRules.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', GlAccountAdvancedRules, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the GlAccountAdvancedRules entity.
     */
    GlAccountAdvancedRules._allFields = [
        GlAccountAdvancedRules.ABSOLUTE_ENTRY,
        GlAccountAdvancedRules.PERIOD,
        GlAccountAdvancedRules.BEGINNINGOF_FINANCIAL_YEAR,
        GlAccountAdvancedRules.FINANCIAL_YEAR,
        GlAccountAdvancedRules.PERIOD_NAME,
        GlAccountAdvancedRules.NUMBER_OF_PERIODS,
        GlAccountAdvancedRules.FROM_POSTING_DATE,
        GlAccountAdvancedRules.TO_POSTING_DATE,
        GlAccountAdvancedRules.FROM_DUE_DATE,
        GlAccountAdvancedRules.TO_DUE_DATE,
        GlAccountAdvancedRules.FROM_DOCUMENT_DATE,
        GlAccountAdvancedRules.TO_DOCUMENT_DATE,
        GlAccountAdvancedRules.ITEM_CODE,
        GlAccountAdvancedRules.ITEM_GROUP,
        GlAccountAdvancedRules.WAREHOUSE,
        GlAccountAdvancedRules.BP_GROUP,
        GlAccountAdvancedRules.FEDERAL_TAX_ID,
        GlAccountAdvancedRules.SHIP_TO_COUNTRY,
        GlAccountAdvancedRules.SHIP_TO_STATE,
        GlAccountAdvancedRules.DESCRIPTION,
        GlAccountAdvancedRules.CODE,
        GlAccountAdvancedRules.FROM_DATE,
        GlAccountAdvancedRules.TO_DATE,
        GlAccountAdvancedRules.EXPENSES_ACCOUNT,
        GlAccountAdvancedRules.REVENUES_ACCOUNT,
        GlAccountAdvancedRules.EXEMPT_INCOME_ACC,
        GlAccountAdvancedRules.INVENTORY_ACCOUNT,
        GlAccountAdvancedRules.COST_ACCOUNT,
        GlAccountAdvancedRules.TRANSFER_ACCOUNT,
        GlAccountAdvancedRules.VARIENCE_ACCOUNT,
        GlAccountAdvancedRules.PRICE_DIFFERENCE_ACC,
        GlAccountAdvancedRules.NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT,
        GlAccountAdvancedRules.DECREASING_ACCOUNT,
        GlAccountAdvancedRules.INCREASING_ACCOUNT,
        GlAccountAdvancedRules.RETURNING_ACCOUNT,
        GlAccountAdvancedRules.EU_REVENUES_ACCOUNT,
        GlAccountAdvancedRules.EU_EXPENSES_ACCOUNT,
        GlAccountAdvancedRules.FOREIGN_REVENUE_ACC,
        GlAccountAdvancedRules.FOREIGN_EXPENS_ACC,
        GlAccountAdvancedRules.PURCHASE_ACCT,
        GlAccountAdvancedRules.PA_RETURN_ACCT,
        GlAccountAdvancedRules.PURCHASE_OFFSET_ACCT,
        GlAccountAdvancedRules.EXCHANGE_RATE_DIFFERENCES_ACCT,
        GlAccountAdvancedRules.GOODS_CLEARING_ACCT,
        GlAccountAdvancedRules.GL_DECREASE_ACCT,
        GlAccountAdvancedRules.GL_INCREASE_ACCT,
        GlAccountAdvancedRules.WIP_ACCOUNT,
        GlAccountAdvancedRules.WIP_VARIANCE_ACCOUNT,
        GlAccountAdvancedRules.WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT,
        GlAccountAdvancedRules.INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT,
        GlAccountAdvancedRules.STOCK_INFLATION_ADJUST_ACCOUNT,
        GlAccountAdvancedRules.STOCK_INFLATION_OFFSET_ACCOUNT,
        GlAccountAdvancedRules.COST_INFLATION_ACCOUNT,
        GlAccountAdvancedRules.COST_INFLATION_OFFSET_ACCOUNT,
        GlAccountAdvancedRules.EXPENSE_CLEARING_ACT,
        GlAccountAdvancedRules.EXPENSE_OFFSETTING_ACCOUNT,
        GlAccountAdvancedRules.STOCK_IN_TRANSIT_ACCOUNT,
        GlAccountAdvancedRules.SHIPPED_GOODS_ACCOUNT,
        GlAccountAdvancedRules.VAT_IN_REVENUE_ACCOUNT,
        GlAccountAdvancedRules.SALES_CREDIT_ACC,
        GlAccountAdvancedRules.PURCHASE_CREDIT_ACC,
        GlAccountAdvancedRules.EXEMPTED_CREDITS,
        GlAccountAdvancedRules.SALES_CREDIT_FOREIGN_ACC,
        GlAccountAdvancedRules.FOREIGN_PURCHASE_CREDIT_ACC,
        GlAccountAdvancedRules.SALES_CREDIT_EU_ACC,
        GlAccountAdvancedRules.EU_PURCHASE_CREDIT_ACC,
        GlAccountAdvancedRules.PURCHASE_BALANCE_ACCOUNT,
        GlAccountAdvancedRules.WH_INCOMING_CENVAT_ACCOUNT,
        GlAccountAdvancedRules.WH_OUTGOING_CENVAT_ACCOUNT,
        GlAccountAdvancedRules.VAT_GROUP,
        GlAccountAdvancedRules.BP_CODE,
        GlAccountAdvancedRules.USAGE,
        GlAccountAdvancedRules.UDF_1,
        GlAccountAdvancedRules.UDF_2,
        GlAccountAdvancedRules.UDF_3,
        GlAccountAdvancedRules.UDF_4,
        GlAccountAdvancedRules.UDF_5,
        GlAccountAdvancedRules.ITEM,
        GlAccountAdvancedRules.ITEM_GROUPS,
        GlAccountAdvancedRules.WAREHOUSE_2,
        GlAccountAdvancedRules.BUSINESS_PARTNER_GROUP,
        GlAccountAdvancedRules.COUNTRY,
        GlAccountAdvancedRules.CHART_OF_ACCOUNT,
        GlAccountAdvancedRules.VAT_GROUP_1,
        GlAccountAdvancedRules.BUSINESS_PARTNER
    ];
    /**
     * All fields selector.
     */
    GlAccountAdvancedRules.ALL_FIELDS = new v4_1.AllFields('*', GlAccountAdvancedRules);
    /**
     * All key fields of the GlAccountAdvancedRules entity.
     */
    GlAccountAdvancedRules._keyFields = [GlAccountAdvancedRules.ABSOLUTE_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property GlAccountAdvancedRules.
     */
    GlAccountAdvancedRules._keys = GlAccountAdvancedRules._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GlAccountAdvancedRules = exports.GlAccountAdvancedRules || (exports.GlAccountAdvancedRules = {}));
exports.GlAccountAdvancedRules = GlAccountAdvancedRules;
//# sourceMappingURL=GlAccountAdvancedRules.js.map