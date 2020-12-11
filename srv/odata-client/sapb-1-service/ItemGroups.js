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
exports.ItemGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ItemGroupsRequestBuilder_1 = require("./ItemGroupsRequestBuilder");
var ItemGroupsWarehouseInfo_1 = require("./ItemGroupsWarehouseInfo");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ItemGroups" of service "SAPB1".
 */
var ItemGroups = /** @class */ (function (_super) {
    __extends(ItemGroups, _super);
    function ItemGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ItemGroups`.
     * @returns A builder that constructs instances of entity type `ItemGroups`.
     */
    ItemGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(ItemGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ItemGroups` entity type.
     * @returns A `ItemGroups` request builder.
     */
    ItemGroups.requestBuilder = function () {
        return new ItemGroupsRequestBuilder_1.ItemGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ItemGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ItemGroups`.
     */
    ItemGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ItemGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ItemGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ItemGroups.
     */
    ItemGroups._entityName = 'ItemGroups';
    /**
     * Default url path for the according service.
     */
    ItemGroups._defaultServicePath = '/b1s/v2/';
    return ItemGroups;
}(core_1.EntityV4));
exports.ItemGroups = ItemGroups;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var InventoryCycles_1 = require("./InventoryCycles");
var UnitOfMeasurementGroups_1 = require("./UnitOfMeasurementGroups");
var UnitOfMeasurements_1 = require("./UnitOfMeasurements");
var Items_1 = require("./Items");
var GlAccountAdvancedRules_1 = require("./GlAccountAdvancedRules");
var BinLocations_1 = require("./BinLocations");
var ServiceCalls_1 = require("./ServiceCalls");
(function (ItemGroups) {
    /**
     * Static representation of the [[priceDifferencesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.PRICE_DIFFERENCES_ACCOUNT = new core_1.StringField('PriceDifferencesAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[stockInflationAdjustAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.STOCK_INFLATION_ADJUST_ACCOUNT = new core_1.StringField('StockInflationAdjustAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[minimumOrderQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.MINIMUM_ORDER_QUANTITY = new core_1.NumberField('MinimumOrderQuantity', ItemGroups, 'Edm.Double');
    /**
     * Static representation of the [[orderInterval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.ORDER_INTERVAL = new core_1.NumberField('OrderInterval', ItemGroups, 'Edm.Int32');
    /**
     * Static representation of the [[exchangeRateDifferencesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.EXCHANGE_RATE_DIFFERENCES_ACCOUNT = new core_1.StringField('ExchangeRateDifferencesAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[increasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.INCREASING_ACCOUNT = new core_1.StringField('IncreasingAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[stockInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.STOCK_INFLATION_OFFSET_ACCOUNT = new core_1.StringField('StockInflationOffsetAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[procurementMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.PROCUREMENT_METHOD = new core_1.EnumField('ProcurementMethod', ItemGroups);
    /**
     * Static representation of the [[componentWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.COMPONENT_WAREHOUSE = new core_1.EnumField('ComponentWarehouse', ItemGroups);
    /**
     * Static representation of the [[purchaseOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.PURCHASE_OFFSET_ACCOUNT = new core_1.StringField('PurchaseOffsetAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[inventorySystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.INVENTORY_SYSTEM = new core_1.EnumField('InventorySystem', ItemGroups);
    /**
     * Static representation of the [[wipMaterialVarianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.WIP_MATERIAL_VARIANCE_ACCOUNT = new core_1.StringField('WIPMaterialVarianceAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[planningSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.PLANNING_SYSTEM = new core_1.EnumField('PlanningSystem', ItemGroups);
    /**
     * Static representation of the [[purchaseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.PURCHASE_ACCOUNT = new core_1.StringField('PurchaseAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[returningAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.RETURNING_ACCOUNT = new core_1.StringField('ReturningAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[costInflationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.COST_INFLATION_ACCOUNT = new core_1.StringField('CostInflationAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[expensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.EXPENSES_ACCOUNT = new core_1.StringField('ExpensesAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[revenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.REVENUES_ACCOUNT = new core_1.StringField('RevenuesAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[transfersAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.TRANSFERS_ACCOUNT = new core_1.StringField('TransfersAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[leadTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.LEAD_TIME = new core_1.NumberField('LeadTime', ItemGroups, 'Edm.Int32');
    /**
     * Static representation of the [[orderMultiple]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.ORDER_MULTIPLE = new core_1.NumberField('OrderMultiple', ItemGroups, 'Edm.Double');
    /**
     * Static representation of the [[costInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.COST_INFLATION_OFFSET_ACCOUNT = new core_1.StringField('CostInflationOffsetAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[inventoryAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.INVENTORY_ACCOUNT = new core_1.StringField('InventoryAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[decreaseGlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.DECREASE_GL_ACCOUNT = new core_1.StringField('DecreaseGLAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.NUMBER = new core_1.NumberField('Number', ItemGroups, 'Edm.Int32');
    /**
     * Static representation of the [[goodsClearingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.GOODS_CLEARING_ACCOUNT = new core_1.StringField('GoodsClearingAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[increaseGlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.INCREASE_GL_ACCOUNT = new core_1.StringField('IncreaseGLAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[foreignRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.FOREIGN_REVENUES_ACCOUNT = new core_1.StringField('ForeignRevenuesAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[alert]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.ALERT = new core_1.EnumField('Alert', ItemGroups);
    /**
     * Static representation of the [[wipMaterialAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.WIP_MATERIAL_ACCOUNT = new core_1.StringField('WIPMaterialAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[shippedGoodsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.SHIPPED_GOODS_ACCOUNT = new core_1.StringField('ShippedGoodsAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[exemptRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.EXEMPT_REVENUES_ACCOUNT = new core_1.StringField('ExemptRevenuesAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[decreasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.DECREASING_ACCOUNT = new core_1.StringField('DecreasingAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[vatInRevenueAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.VAT_IN_REVENUE_ACCOUNT = new core_1.StringField('VATInRevenueAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[varianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.VARIANCE_ACCOUNT = new core_1.StringField('VarianceAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[euExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.EU_EXPENSES_ACCOUNT = new core_1.StringField('EUExpensesAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[foreignExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.FOREIGN_EXPENSES_ACCOUNT = new core_1.StringField('ForeignExpensesAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.CYCLE_CODE = new core_1.NumberField('CycleCode', ItemGroups, 'Edm.Int32');
    /**
     * Static representation of the [[costAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.COST_ACCOUNT = new core_1.StringField('CostAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[euRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.EU_REVENUES_ACCOUNT = new core_1.StringField('EURevenuesAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[paReturnAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.PA_RETURN_ACCOUNT = new core_1.StringField('PAReturnAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[groupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.GROUP_NAME = new core_1.StringField('GroupName', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[expenseClearingAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.EXPENSE_CLEARING_ACT = new core_1.StringField('ExpenseClearingAct', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[purchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.PURCHASE_CREDIT_ACC = new core_1.StringField('PurchaseCreditAcc', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[euPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.EU_PURCHASE_CREDIT_ACC = new core_1.StringField('EUPurchaseCreditAcc', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[foreignPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.FOREIGN_PURCHASE_CREDIT_ACC = new core_1.StringField('ForeignPurchaseCreditAcc', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[salesCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.SALES_CREDIT_ACC = new core_1.StringField('SalesCreditAcc', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[salesCreditEuAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.SALES_CREDIT_EU_ACC = new core_1.StringField('SalesCreditEUAcc', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[exemptedCredits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.EXEMPTED_CREDITS = new core_1.StringField('ExemptedCredits', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[salesCreditForeignAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.SALES_CREDIT_FOREIGN_ACC = new core_1.StringField('SalesCreditForeignAcc', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[expenseOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.EXPENSE_OFFSET_ACCOUNT = new core_1.StringField('ExpenseOffsetAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[negativeInventoryAdjustmentAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT = new core_1.StringField('NegativeInventoryAdjustmentAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[whIncomingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.WH_INCOMING_CENVAT_ACCOUNT = new core_1.StringField('WHIncomingCenvatAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[whOutgoingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.WH_OUTGOING_CENVAT_ACCOUNT = new core_1.StringField('WHOutgoingCenvatAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[stockInTransitAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.STOCK_IN_TRANSIT_ACCOUNT = new core_1.StringField('StockInTransitAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[wipOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT = new core_1.StringField('WipOffsetProfitAndLossAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[inventoryOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT = new core_1.StringField('InventoryOffsetProfitAndLossAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[toleranceDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.TOLERANCE_DAYS = new core_1.NumberField('ToleranceDays', ItemGroups, 'Edm.Int32');
    /**
     * Static representation of the [[defaultUoMGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.DEFAULT_UO_M_GROUP = new core_1.NumberField('DefaultUoMGroup', ItemGroups, 'Edm.Int32');
    /**
     * Static representation of the [[defaultInventoryUoM]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.DEFAULT_INVENTORY_UO_M = new core_1.NumberField('DefaultInventoryUoM', ItemGroups, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseBalanceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.PURCHASE_BALANCE_ACCOUNT = new core_1.StringField('PurchaseBalanceAccount', ItemGroups, 'Edm.String');
    /**
     * Static representation of the [[itemClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.ITEM_CLASS = new core_1.EnumField('ItemClass', ItemGroups);
    /**
     * Static representation of the [[itemGroupsWarehouseInfos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.ITEM_GROUPS_WAREHOUSE_INFOS = new core_1.CollectionField('ItemGroupsWarehouseInfos', ItemGroups, ItemGroupsWarehouseInfo_1.ItemGroupsWarehouseInfo);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', ItemGroups, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[inventoryCycles]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.INVENTORY_CYCLES = new core_1.OneToOneLink('InventoryCycles', ItemGroups, InventoryCycles_1.InventoryCycles);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.UNIT_OF_MEASUREMENT_GROUP = new core_1.OneToOneLink('UnitOfMeasurementGroup', ItemGroups, UnitOfMeasurementGroups_1.UnitOfMeasurementGroups);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.UNIT_OF_MEASUREMENT = new core_1.OneToOneLink('UnitOfMeasurement', ItemGroups, UnitOfMeasurements_1.UnitOfMeasurements);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.ITEMS = new core_1.OneToManyLink('Items', ItemGroups, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.GL_ACCOUNT_ADVANCED_RULES = new core_1.OneToManyLink('GLAccountAdvancedRules', ItemGroups, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.BIN_LOCATIONS = new core_1.OneToManyLink('BinLocations', ItemGroups, BinLocations_1.BinLocations);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemGroups.SERVICE_CALLS = new core_1.OneToManyLink('ServiceCalls', ItemGroups, ServiceCalls_1.ServiceCalls);
    /**
     * All fields of the ItemGroups entity.
     */
    ItemGroups._allFields = [
        ItemGroups.PRICE_DIFFERENCES_ACCOUNT,
        ItemGroups.STOCK_INFLATION_ADJUST_ACCOUNT,
        ItemGroups.MINIMUM_ORDER_QUANTITY,
        ItemGroups.ORDER_INTERVAL,
        ItemGroups.EXCHANGE_RATE_DIFFERENCES_ACCOUNT,
        ItemGroups.INCREASING_ACCOUNT,
        ItemGroups.STOCK_INFLATION_OFFSET_ACCOUNT,
        ItemGroups.PROCUREMENT_METHOD,
        ItemGroups.COMPONENT_WAREHOUSE,
        ItemGroups.PURCHASE_OFFSET_ACCOUNT,
        ItemGroups.INVENTORY_SYSTEM,
        ItemGroups.WIP_MATERIAL_VARIANCE_ACCOUNT,
        ItemGroups.PLANNING_SYSTEM,
        ItemGroups.PURCHASE_ACCOUNT,
        ItemGroups.RETURNING_ACCOUNT,
        ItemGroups.COST_INFLATION_ACCOUNT,
        ItemGroups.EXPENSES_ACCOUNT,
        ItemGroups.REVENUES_ACCOUNT,
        ItemGroups.TRANSFERS_ACCOUNT,
        ItemGroups.LEAD_TIME,
        ItemGroups.ORDER_MULTIPLE,
        ItemGroups.COST_INFLATION_OFFSET_ACCOUNT,
        ItemGroups.INVENTORY_ACCOUNT,
        ItemGroups.DECREASE_GL_ACCOUNT,
        ItemGroups.NUMBER,
        ItemGroups.GOODS_CLEARING_ACCOUNT,
        ItemGroups.INCREASE_GL_ACCOUNT,
        ItemGroups.FOREIGN_REVENUES_ACCOUNT,
        ItemGroups.ALERT,
        ItemGroups.WIP_MATERIAL_ACCOUNT,
        ItemGroups.SHIPPED_GOODS_ACCOUNT,
        ItemGroups.EXEMPT_REVENUES_ACCOUNT,
        ItemGroups.DECREASING_ACCOUNT,
        ItemGroups.VAT_IN_REVENUE_ACCOUNT,
        ItemGroups.VARIANCE_ACCOUNT,
        ItemGroups.EU_EXPENSES_ACCOUNT,
        ItemGroups.FOREIGN_EXPENSES_ACCOUNT,
        ItemGroups.CYCLE_CODE,
        ItemGroups.COST_ACCOUNT,
        ItemGroups.EU_REVENUES_ACCOUNT,
        ItemGroups.PA_RETURN_ACCOUNT,
        ItemGroups.GROUP_NAME,
        ItemGroups.EXPENSE_CLEARING_ACT,
        ItemGroups.PURCHASE_CREDIT_ACC,
        ItemGroups.EU_PURCHASE_CREDIT_ACC,
        ItemGroups.FOREIGN_PURCHASE_CREDIT_ACC,
        ItemGroups.SALES_CREDIT_ACC,
        ItemGroups.SALES_CREDIT_EU_ACC,
        ItemGroups.EXEMPTED_CREDITS,
        ItemGroups.SALES_CREDIT_FOREIGN_ACC,
        ItemGroups.EXPENSE_OFFSET_ACCOUNT,
        ItemGroups.NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT,
        ItemGroups.WH_INCOMING_CENVAT_ACCOUNT,
        ItemGroups.WH_OUTGOING_CENVAT_ACCOUNT,
        ItemGroups.STOCK_IN_TRANSIT_ACCOUNT,
        ItemGroups.WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT,
        ItemGroups.INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT,
        ItemGroups.TOLERANCE_DAYS,
        ItemGroups.DEFAULT_UO_M_GROUP,
        ItemGroups.DEFAULT_INVENTORY_UO_M,
        ItemGroups.PURCHASE_BALANCE_ACCOUNT,
        ItemGroups.ITEM_CLASS,
        ItemGroups.ITEM_GROUPS_WAREHOUSE_INFOS,
        ItemGroups.CHART_OF_ACCOUNT,
        ItemGroups.INVENTORY_CYCLES,
        ItemGroups.UNIT_OF_MEASUREMENT_GROUP,
        ItemGroups.UNIT_OF_MEASUREMENT,
        ItemGroups.ITEMS,
        ItemGroups.GL_ACCOUNT_ADVANCED_RULES,
        ItemGroups.BIN_LOCATIONS,
        ItemGroups.SERVICE_CALLS
    ];
    /**
     * All fields selector.
     */
    ItemGroups.ALL_FIELDS = new core_1.AllFields('*', ItemGroups);
    /**
     * All key fields of the ItemGroups entity.
     */
    ItemGroups._keyFields = [ItemGroups.NUMBER];
    /**
     * Mapping of all key field names to the respective static field property ItemGroups.
     */
    ItemGroups._keys = ItemGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ItemGroups = exports.ItemGroups || (exports.ItemGroups = {}));
exports.ItemGroups = ItemGroups;
//# sourceMappingURL=ItemGroups.js.map