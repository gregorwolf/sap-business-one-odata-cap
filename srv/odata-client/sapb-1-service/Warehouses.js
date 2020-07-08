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
exports.Warehouses = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WarehousesRequestBuilder_1 = require("./WarehousesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Warehouses" of service "SAPB1".
 */
var Warehouses = /** @class */ (function (_super) {
    __extends(Warehouses, _super);
    function Warehouses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Warehouses`.
     * @returns A builder that constructs instances of entity type `Warehouses`.
     */
    Warehouses.builder = function () {
        return v4_1.Entity.entityBuilder(Warehouses);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Warehouses` entity type.
     * @returns A `Warehouses` request builder.
     */
    Warehouses.requestBuilder = function () {
        return new WarehousesRequestBuilder_1.WarehousesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Warehouses`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Warehouses`.
     */
    Warehouses.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Warehouses);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Warehouses.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Warehouses.
     */
    Warehouses._entityName = 'Warehouses';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Warehouses.
     */
    Warehouses._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Warehouses._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Warehouses;
}(v4_1.Entity));
exports.Warehouses = Warehouses;
var UserDefaultGroups_1 = require("./UserDefaultGroups");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var WarehouseLocations_1 = require("./WarehouseLocations");
var SalesTaxCodes_1 = require("./SalesTaxCodes");
var Countries_1 = require("./Countries");
var EmployeesInfo_1 = require("./EmployeesInfo");
var BusinessPartners_1 = require("./BusinessPartners");
var BinLocations_1 = require("./BinLocations");
var StockTakings_1 = require("./StockTakings");
var ProductionOrders_1 = require("./ProductionOrders");
var ResourceCapacities_1 = require("./ResourceCapacities");
var GlAccountAdvancedRules_1 = require("./GlAccountAdvancedRules");
var StockTransfers_1 = require("./StockTransfers");
var BusinessPlaces_1 = require("./BusinessPlaces");
var InventoryTransferRequests_1 = require("./InventoryTransferRequests");
var StockTransferDrafts_1 = require("./StockTransferDrafts");
(function (Warehouses) {
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STREET = new v4_1.StringField('Street', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[stockInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STOCK_INFLATION_OFFSET_ACCOUNT = new v4_1.StringField('StockInflationOffsetAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.ZIP_CODE = new v4_1.StringField('ZipCode', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[decreasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.DECREASING_ACCOUNT = new v4_1.StringField('DecreasingAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[purchaseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.PURCHASE_ACCOUNT = new v4_1.StringField('PurchaseAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[euRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EU_REVENUES_ACCOUNT = new v4_1.StringField('EURevenuesAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[returningAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.RETURNING_ACCOUNT = new v4_1.StringField('ReturningAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[shippedGoodsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.SHIPPED_GOODS_ACCOUNT = new v4_1.StringField('ShippedGoodsAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[stockInflationAdjustAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STOCK_INFLATION_ADJUST_ACCOUNT = new v4_1.StringField('StockInflationAdjustAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[costInflationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.COST_INFLATION_ACCOUNT = new v4_1.StringField('CostInflationAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[foreignExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.FOREIGN_EXPENSES_ACCOUNT = new v4_1.StringField('ForeignExpensesAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[euExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EU_EXPENSES_ACCOUNT = new v4_1.StringField('EUExpensesAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[costInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.COST_INFLATION_OFFSET_ACCOUNT = new v4_1.StringField('CostInflationOffsetAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[expensesClearingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EXPENSES_CLEARING_ACCOUNT = new v4_1.StringField('ExpensesClearingAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[purchaseReturningAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.PURCHASE_RETURNING_ACCOUNT = new v4_1.StringField('PurchaseReturningAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[vatInRevenueAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.VAT_IN_REVENUE_ACCOUNT = new v4_1.StringField('VATInRevenueAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.LOCATION = new v4_1.NumberField('Location', Warehouses, 'Edm.Int32');
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.BLOCK = new v4_1.StringField('Block', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[expenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EXPENSE_ACCOUNT = new v4_1.StringField('ExpenseAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[decreaseGlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.DECREASE_GL_ACCOUNT = new v4_1.StringField('DecreaseGLAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[revenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.REVENUES_ACCOUNT = new v4_1.StringField('RevenuesAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[taxGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.TAX_GROUP = new v4_1.StringField('TaxGroup', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[exemptRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EXEMPT_REVENUES_ACCOUNT = new v4_1.StringField('ExemptRevenuesAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[purchaseOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.PURCHASE_OFFSET_ACCOUNT = new v4_1.StringField('PurchaseOffsetAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[costOfGoodsSold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.COST_OF_GOODS_SOLD = new v4_1.StringField('CostOfGoodsSold', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.WAREHOUSE_CODE = new v4_1.StringField('WarehouseCode', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STATE = new v4_1.StringField('State', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.CITY = new v4_1.StringField('City', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[priceDifferencesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.PRICE_DIFFERENCES_ACCOUNT = new v4_1.StringField('PriceDifferencesAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[varianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.VARIANCE_ACCOUNT = new v4_1.StringField('VarianceAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.COUNTRY = new v4_1.StringField('Country', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[increaseGlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.INCREASE_GL_ACCOUNT = new v4_1.StringField('IncreaseGLAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[exchangeRateDifferencesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EXCHANGE_RATE_DIFFERENCES_ACCOUNT = new v4_1.StringField('ExchangeRateDifferencesAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[wipMaterialAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.WIP_MATERIAL_ACCOUNT = new v4_1.StringField('WIPMaterialAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[warehouseName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.WAREHOUSE_NAME = new v4_1.StringField('WarehouseName', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[wipMaterialVarianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.WIP_MATERIAL_VARIANCE_ACCOUNT = new v4_1.StringField('WIPMaterialVarianceAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[transfersAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.TRANSFERS_ACC = new v4_1.StringField('TransfersAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.INTERNAL_KEY = new v4_1.NumberField('InternalKey', Warehouses, 'Edm.Int32');
    /**
     * Static representation of the [[foreignRevenuesAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.FOREIGN_REVENUES_ACC = new v4_1.StringField('ForeignRevenuesAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[buildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.BUILDING_FLOOR_ROOM = new v4_1.StringField('BuildingFloorRoom', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.COUNTY = new v4_1.StringField('County', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[increasingAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.INCREASING_ACC = new v4_1.StringField('IncreasingAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[expenseOffsetingAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EXPENSE_OFFSETING_ACT = new v4_1.StringField('ExpenseOffsetingAct', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[goodsClearingAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.GOODS_CLEARING_ACC = new v4_1.StringField('GoodsClearingAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[stockAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STOCK_ACCOUNT = new v4_1.StringField('StockAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[businessPlaceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.BUSINESS_PLACE_ID = new v4_1.NumberField('BusinessPlaceID', Warehouses, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.PURCHASE_CREDIT_ACC = new v4_1.StringField('PurchaseCreditAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[euPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EU_PURCHASE_CREDIT_ACC = new v4_1.StringField('EUPurchaseCreditAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[foreignPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.FOREIGN_PURCHASE_CREDIT_ACC = new v4_1.StringField('ForeignPurchaseCreditAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[salesCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.SALES_CREDIT_ACC = new v4_1.StringField('SalesCreditAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[salesCreditEuAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.SALES_CREDIT_EU_ACC = new v4_1.StringField('SalesCreditEUAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[exemptedCredits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EXEMPTED_CREDITS = new v4_1.StringField('ExemptedCredits', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[salesCreditForeignAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.SALES_CREDIT_FOREIGN_ACC = new v4_1.StringField('SalesCreditForeignAcc', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[negativeInventoryAdjustmentAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT = new v4_1.StringField('NegativeInventoryAdjustmentAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[whShipToName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.WH_SHIP_TO_NAME = new v4_1.StringField('WHShipToName', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[whIncomingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.WH_INCOMING_CENVAT_ACCOUNT = new v4_1.StringField('WHIncomingCenvatAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[whOutgoingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.WH_OUTGOING_CENVAT_ACCOUNT = new v4_1.StringField('WHOutgoingCenvatAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[stockInTransitAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STOCK_IN_TRANSIT_ACCOUNT = new v4_1.StringField('StockInTransitAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[wipOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT = new v4_1.StringField('WipOffsetProfitAndLossAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[inventoryOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT = new v4_1.StringField('InventoryOffsetProfitAndLossAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.ADDRESS_TYPE = new v4_1.StringField('AddressType', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STREET_NO = new v4_1.StringField('StreetNo', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[storekeeper]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STOREKEEPER = new v4_1.NumberField('Storekeeper', Warehouses, 'Edm.Int32');
    /**
     * Static representation of the [[shipper]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.SHIPPER = new v4_1.StringField('Shipper', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[globalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.GLOBAL_LOCATION_NUMBER = new v4_1.StringField('GlobalLocationNumber', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[binLocCodeSeparator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.BIN_LOC_CODE_SEPARATOR = new v4_1.StringField('BinLocCodeSeparator', Warehouses, 'Edm.String');
    /**
     * Static representation of the [[defaultBin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.DEFAULT_BIN = new v4_1.NumberField('DefaultBin', Warehouses, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseBalanceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.PURCHASE_BALANCE_ACCOUNT = new v4_1.StringField('PurchaseBalanceAccount', Warehouses, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.USER_DEFAULT_GROUPS = new v4_1.OneToManyLink('UserDefaultGroups', Warehouses, UserDefaultGroups_1.UserDefaultGroups);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', Warehouses, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.WAREHOUSE_LOCATION = new v4_1.OneToOneLink('WarehouseLocation', Warehouses, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.SALES_TAX_CODE = new v4_1.OneToOneLink('SalesTaxCode', Warehouses, SalesTaxCodes_1.SalesTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.COUNTRY_2 = new v4_1.OneToOneLink('Country2', Warehouses, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', Warehouses, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', Warehouses, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[binLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.BIN_LOCATION = new v4_1.OneToOneLink('BinLocation', Warehouses, BinLocations_1.BinLocations);
    /**
     * Static representation of the one-to-many navigation property [[stockTakings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STOCK_TAKINGS = new v4_1.OneToManyLink('StockTakings', Warehouses, StockTakings_1.StockTakings);
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.PRODUCTION_ORDERS = new v4_1.OneToManyLink('ProductionOrders', Warehouses, ProductionOrders_1.ProductionOrders);
    /**
     * Static representation of the one-to-many navigation property [[resourceCapacities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.RESOURCE_CAPACITIES = new v4_1.OneToManyLink('ResourceCapacities', Warehouses, ResourceCapacities_1.ResourceCapacities);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.GL_ACCOUNT_ADVANCED_RULES = new v4_1.OneToManyLink('GLAccountAdvancedRules', Warehouses, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STOCK_TRANSFERS = new v4_1.OneToManyLink('StockTransfers', Warehouses, StockTransfers_1.StockTransfers);
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.BUSINESS_PLACES = new v4_1.OneToManyLink('BusinessPlaces', Warehouses, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.INVENTORY_TRANSFER_REQUESTS = new v4_1.OneToManyLink('InventoryTransferRequests', Warehouses, InventoryTransferRequests_1.InventoryTransferRequests);
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.BIN_LOCATIONS = new v4_1.OneToManyLink('BinLocations', Warehouses, BinLocations_1.BinLocations);
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Warehouses.STOCK_TRANSFER_DRAFTS = new v4_1.OneToManyLink('StockTransferDrafts', Warehouses, StockTransferDrafts_1.StockTransferDrafts);
    /**
     * All fields of the Warehouses entity.
     */
    Warehouses._allFields = [
        Warehouses.STREET,
        Warehouses.STOCK_INFLATION_OFFSET_ACCOUNT,
        Warehouses.ZIP_CODE,
        Warehouses.DECREASING_ACCOUNT,
        Warehouses.PURCHASE_ACCOUNT,
        Warehouses.EU_REVENUES_ACCOUNT,
        Warehouses.RETURNING_ACCOUNT,
        Warehouses.SHIPPED_GOODS_ACCOUNT,
        Warehouses.STOCK_INFLATION_ADJUST_ACCOUNT,
        Warehouses.COST_INFLATION_ACCOUNT,
        Warehouses.FOREIGN_EXPENSES_ACCOUNT,
        Warehouses.EU_EXPENSES_ACCOUNT,
        Warehouses.COST_INFLATION_OFFSET_ACCOUNT,
        Warehouses.EXPENSES_CLEARING_ACCOUNT,
        Warehouses.PURCHASE_RETURNING_ACCOUNT,
        Warehouses.VAT_IN_REVENUE_ACCOUNT,
        Warehouses.FEDERAL_TAX_ID,
        Warehouses.LOCATION,
        Warehouses.BLOCK,
        Warehouses.EXPENSE_ACCOUNT,
        Warehouses.DECREASE_GL_ACCOUNT,
        Warehouses.REVENUES_ACCOUNT,
        Warehouses.TAX_GROUP,
        Warehouses.EXEMPT_REVENUES_ACCOUNT,
        Warehouses.PURCHASE_OFFSET_ACCOUNT,
        Warehouses.COST_OF_GOODS_SOLD,
        Warehouses.WAREHOUSE_CODE,
        Warehouses.STATE,
        Warehouses.CITY,
        Warehouses.PRICE_DIFFERENCES_ACCOUNT,
        Warehouses.VARIANCE_ACCOUNT,
        Warehouses.COUNTRY,
        Warehouses.INCREASE_GL_ACCOUNT,
        Warehouses.EXCHANGE_RATE_DIFFERENCES_ACCOUNT,
        Warehouses.WIP_MATERIAL_ACCOUNT,
        Warehouses.WAREHOUSE_NAME,
        Warehouses.WIP_MATERIAL_VARIANCE_ACCOUNT,
        Warehouses.TRANSFERS_ACC,
        Warehouses.INTERNAL_KEY,
        Warehouses.FOREIGN_REVENUES_ACC,
        Warehouses.BUILDING_FLOOR_ROOM,
        Warehouses.COUNTY,
        Warehouses.INCREASING_ACC,
        Warehouses.EXPENSE_OFFSETING_ACT,
        Warehouses.GOODS_CLEARING_ACC,
        Warehouses.STOCK_ACCOUNT,
        Warehouses.BUSINESS_PLACE_ID,
        Warehouses.PURCHASE_CREDIT_ACC,
        Warehouses.EU_PURCHASE_CREDIT_ACC,
        Warehouses.FOREIGN_PURCHASE_CREDIT_ACC,
        Warehouses.SALES_CREDIT_ACC,
        Warehouses.SALES_CREDIT_EU_ACC,
        Warehouses.EXEMPTED_CREDITS,
        Warehouses.SALES_CREDIT_FOREIGN_ACC,
        Warehouses.NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT,
        Warehouses.WH_SHIP_TO_NAME,
        Warehouses.WH_INCOMING_CENVAT_ACCOUNT,
        Warehouses.WH_OUTGOING_CENVAT_ACCOUNT,
        Warehouses.STOCK_IN_TRANSIT_ACCOUNT,
        Warehouses.WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT,
        Warehouses.INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT,
        Warehouses.ADDRESS_TYPE,
        Warehouses.STREET_NO,
        Warehouses.STOREKEEPER,
        Warehouses.SHIPPER,
        Warehouses.GLOBAL_LOCATION_NUMBER,
        Warehouses.BIN_LOC_CODE_SEPARATOR,
        Warehouses.DEFAULT_BIN,
        Warehouses.PURCHASE_BALANCE_ACCOUNT,
        Warehouses.USER_DEFAULT_GROUPS,
        Warehouses.CHART_OF_ACCOUNT,
        Warehouses.WAREHOUSE_LOCATION,
        Warehouses.SALES_TAX_CODE,
        Warehouses.COUNTRY_2,
        Warehouses.EMPLOYEE_INFO,
        Warehouses.BUSINESS_PARTNER,
        Warehouses.BIN_LOCATION,
        Warehouses.STOCK_TAKINGS,
        Warehouses.PRODUCTION_ORDERS,
        Warehouses.RESOURCE_CAPACITIES,
        Warehouses.GL_ACCOUNT_ADVANCED_RULES,
        Warehouses.STOCK_TRANSFERS,
        Warehouses.BUSINESS_PLACES,
        Warehouses.INVENTORY_TRANSFER_REQUESTS,
        Warehouses.BIN_LOCATIONS,
        Warehouses.STOCK_TRANSFER_DRAFTS
    ];
    /**
     * All fields selector.
     */
    Warehouses.ALL_FIELDS = new v4_1.AllFields('*', Warehouses);
    /**
     * All key fields of the Warehouses entity.
     */
    Warehouses._keyFields = [Warehouses.WAREHOUSE_CODE];
    /**
     * Mapping of all key field names to the respective static field property Warehouses.
     */
    Warehouses._keys = Warehouses._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Warehouses = exports.Warehouses || (exports.Warehouses = {}));
exports.Warehouses = Warehouses;
//# sourceMappingURL=Warehouses.js.map