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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemWarehouseInfo = exports.ItemWarehouseInfoField = exports.createItemWarehouseInfo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ItemCycleCount_1 = require("./ItemCycleCount");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemWarehouseInfo.build]] instead.
 */
function createItemWarehouseInfo(json) {
    return ItemWarehouseInfo.build(json);
}
exports.createItemWarehouseInfo = createItemWarehouseInfo;
/**
 * ItemWarehouseInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemWarehouseInfoField = /** @class */ (function (_super) {
    __extends(ItemWarehouseInfoField, _super);
    function ItemWarehouseInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemWarehouseInfo.minimalStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimalStock = new v4_1.ComplexTypeNumberPropertyField('MinimalStock', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.maximalStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maximalStock = new v4_1.ComplexTypeNumberPropertyField('MaximalStock', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.minimalOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimalOrder = new v4_1.ComplexTypeNumberPropertyField('MinimalOrder', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.standardAveragePrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.standardAveragePrice = new v4_1.ComplexTypeNumberPropertyField('StandardAveragePrice', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.inventoryAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryAccount = new v4_1.ComplexTypeStringPropertyField('InventoryAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.costAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costAccount = new v4_1.ComplexTypeStringPropertyField('CostAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.transferAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferAccount = new v4_1.ComplexTypeStringPropertyField('TransferAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.revenuesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revenuesAccount = new v4_1.ComplexTypeStringPropertyField('RevenuesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.varienceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.varienceAccount = new v4_1.ComplexTypeStringPropertyField('VarienceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.decreasingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.decreasingAccount = new v4_1.ComplexTypeStringPropertyField('DecreasingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.increasingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.increasingAccount = new v4_1.ComplexTypeStringPropertyField('IncreasingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.returningAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.returningAccount = new v4_1.ComplexTypeStringPropertyField('ReturningAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.expensesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expensesAccount = new v4_1.ComplexTypeStringPropertyField('ExpensesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.euRevenuesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euRevenuesAccount = new v4_1.ComplexTypeStringPropertyField('EURevenuesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.euExpensesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euExpensesAccount = new v4_1.ComplexTypeStringPropertyField('EUExpensesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.foreignRevenueAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignRevenueAcc = new v4_1.ComplexTypeStringPropertyField('ForeignRevenueAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.foreignExpensAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignExpensAcc = new v4_1.ComplexTypeStringPropertyField('ForeignExpensAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.exemptIncomeAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exemptIncomeAcc = new v4_1.ComplexTypeStringPropertyField('ExemptIncomeAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.priceDifferenceAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceDifferenceAcc = new v4_1.ComplexTypeStringPropertyField('PriceDifferenceAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.inStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inStock = new v4_1.ComplexTypeNumberPropertyField('InStock', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.committed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.committed = new v4_1.ComplexTypeNumberPropertyField('Committed', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.ordered]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ordered = new v4_1.ComplexTypeNumberPropertyField('Ordered', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.countedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countedQuantity = new v4_1.ComplexTypeNumberPropertyField('CountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.userSignature]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userSignature = new v4_1.ComplexTypeNumberPropertyField('UserSignature', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemWarehouseInfo.counted]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counted = new v4_1.ComplexTypeNumberPropertyField('Counted', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.expenseClearingAct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseClearingAct = new v4_1.ComplexTypeStringPropertyField('ExpenseClearingAct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.purchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseCreditAcc = new v4_1.ComplexTypeStringPropertyField('PurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.euPurchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euPurchaseCreditAcc = new v4_1.ComplexTypeStringPropertyField('EUPurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.foreignPurchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignPurchaseCreditAcc = new v4_1.ComplexTypeStringPropertyField('ForeignPurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.salesCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditAcc = new v4_1.ComplexTypeStringPropertyField('SalesCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.salesCreditEuAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditEuAcc = new v4_1.ComplexTypeStringPropertyField('SalesCreditEUAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.exemptedCredits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exemptedCredits = new v4_1.ComplexTypeStringPropertyField('ExemptedCredits', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.salesCreditForeignAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditForeignAcc = new v4_1.ComplexTypeStringPropertyField('SalesCreditForeignAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.expenseOffsettingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseOffsettingAccount = new v4_1.ComplexTypeStringPropertyField('ExpenseOffsettingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.wipAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipAccount = new v4_1.ComplexTypeStringPropertyField('WipAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.exchangeRateDifferencesAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exchangeRateDifferencesAcct = new v4_1.ComplexTypeStringPropertyField('ExchangeRateDifferencesAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.goodsClearingAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.goodsClearingAcct = new v4_1.ComplexTypeStringPropertyField('GoodsClearingAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.negativeInventoryAdjustmentAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.negativeInventoryAdjustmentAccount = new v4_1.ComplexTypeStringPropertyField('NegativeInventoryAdjustmentAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.costInflationOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costInflationOffsetAccount = new v4_1.ComplexTypeStringPropertyField('CostInflationOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.glDecreaseAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glDecreaseAcct = new v4_1.ComplexTypeStringPropertyField('GLDecreaseAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.glIncreaseAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glIncreaseAcct = new v4_1.ComplexTypeStringPropertyField('GLIncreaseAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.paReturnAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paReturnAcct = new v4_1.ComplexTypeStringPropertyField('PAReturnAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.purchaseAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseAcct = new v4_1.ComplexTypeStringPropertyField('PurchaseAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.purchaseOffsetAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseOffsetAcct = new v4_1.ComplexTypeStringPropertyField('PurchaseOffsetAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.shippedGoodsAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shippedGoodsAccount = new v4_1.ComplexTypeStringPropertyField('ShippedGoodsAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.stockInflationOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInflationOffsetAccount = new v4_1.ComplexTypeStringPropertyField('StockInflationOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.stockInflationAdjustAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInflationAdjustAccount = new v4_1.ComplexTypeStringPropertyField('StockInflationAdjustAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.vatInRevenueAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatInRevenueAccount = new v4_1.ComplexTypeStringPropertyField('VATInRevenueAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.wipVarianceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipVarianceAccount = new v4_1.ComplexTypeStringPropertyField('WipVarianceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.costInflationAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costInflationAccount = new v4_1.ComplexTypeStringPropertyField('CostInflationAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.whIncomingCenvatAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.whIncomingCenvatAccount = new v4_1.ComplexTypeStringPropertyField('WHIncomingCenvatAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.whOutgoingCenvatAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.whOutgoingCenvatAccount = new v4_1.ComplexTypeStringPropertyField('WHOutgoingCenvatAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.stockInTransitAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInTransitAccount = new v4_1.ComplexTypeStringPropertyField('StockInTransitAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.wipOffsetProfitAndLossAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipOffsetProfitAndLossAccount = new v4_1.ComplexTypeStringPropertyField('WipOffsetProfitAndLossAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.inventoryOffsetProfitAndLossAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetProfitAndLossAccount = new v4_1.ComplexTypeStringPropertyField('InventoryOffsetProfitAndLossAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.defaultBin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBin = new v4_1.ComplexTypeNumberPropertyField('DefaultBin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemWarehouseInfo.purchaseBalanceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseBalanceAccount = new v4_1.ComplexTypeStringPropertyField('PurchaseBalanceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.itemCycleCounts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCycleCounts = new ItemCycleCount_1.ItemCycleCountField('ItemCycleCounts', _this);
        return _this;
    }
    return ItemWarehouseInfoField;
}(v4_1.ComplexTypeField));
exports.ItemWarehouseInfoField = ItemWarehouseInfoField;
var ItemWarehouseInfo;
(function (ItemWarehouseInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            MinimalStock: function (minimalStock) { return ({ minimalStock: v4_1.edmToTs(minimalStock, 'Edm.Double') }); },
            MaximalStock: function (maximalStock) { return ({ maximalStock: v4_1.edmToTs(maximalStock, 'Edm.Double') }); },
            MinimalOrder: function (minimalOrder) { return ({ minimalOrder: v4_1.edmToTs(minimalOrder, 'Edm.Double') }); },
            StandardAveragePrice: function (standardAveragePrice) { return ({ standardAveragePrice: v4_1.edmToTs(standardAveragePrice, 'Edm.Double') }); },
            InventoryAccount: function (inventoryAccount) { return ({ inventoryAccount: v4_1.edmToTs(inventoryAccount, 'Edm.String') }); },
            CostAccount: function (costAccount) { return ({ costAccount: v4_1.edmToTs(costAccount, 'Edm.String') }); },
            TransferAccount: function (transferAccount) { return ({ transferAccount: v4_1.edmToTs(transferAccount, 'Edm.String') }); },
            RevenuesAccount: function (revenuesAccount) { return ({ revenuesAccount: v4_1.edmToTs(revenuesAccount, 'Edm.String') }); },
            VarienceAccount: function (varienceAccount) { return ({ varienceAccount: v4_1.edmToTs(varienceAccount, 'Edm.String') }); },
            DecreasingAccount: function (decreasingAccount) { return ({ decreasingAccount: v4_1.edmToTs(decreasingAccount, 'Edm.String') }); },
            IncreasingAccount: function (increasingAccount) { return ({ increasingAccount: v4_1.edmToTs(increasingAccount, 'Edm.String') }); },
            ReturningAccount: function (returningAccount) { return ({ returningAccount: v4_1.edmToTs(returningAccount, 'Edm.String') }); },
            ExpensesAccount: function (expensesAccount) { return ({ expensesAccount: v4_1.edmToTs(expensesAccount, 'Edm.String') }); },
            EURevenuesAccount: function (euRevenuesAccount) { return ({ euRevenuesAccount: v4_1.edmToTs(euRevenuesAccount, 'Edm.String') }); },
            EUExpensesAccount: function (euExpensesAccount) { return ({ euExpensesAccount: v4_1.edmToTs(euExpensesAccount, 'Edm.String') }); },
            ForeignRevenueAcc: function (foreignRevenueAcc) { return ({ foreignRevenueAcc: v4_1.edmToTs(foreignRevenueAcc, 'Edm.String') }); },
            ForeignExpensAcc: function (foreignExpensAcc) { return ({ foreignExpensAcc: v4_1.edmToTs(foreignExpensAcc, 'Edm.String') }); },
            ExemptIncomeAcc: function (exemptIncomeAcc) { return ({ exemptIncomeAcc: v4_1.edmToTs(exemptIncomeAcc, 'Edm.String') }); },
            PriceDifferenceAcc: function (priceDifferenceAcc) { return ({ priceDifferenceAcc: v4_1.edmToTs(priceDifferenceAcc, 'Edm.String') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            InStock: function (inStock) { return ({ inStock: v4_1.edmToTs(inStock, 'Edm.Double') }); },
            Committed: function (committed) { return ({ committed: v4_1.edmToTs(committed, 'Edm.Double') }); },
            Ordered: function (ordered) { return ({ ordered: v4_1.edmToTs(ordered, 'Edm.Double') }); },
            CountedQuantity: function (countedQuantity) { return ({ countedQuantity: v4_1.edmToTs(countedQuantity, 'Edm.Double') }); },
            UserSignature: function (userSignature) { return ({ userSignature: v4_1.edmToTs(userSignature, 'Edm.Int32') }); },
            Counted: function (counted) { return ({ counted: v4_1.edmToTs(counted, 'Edm.Double') }); },
            ExpenseClearingAct: function (expenseClearingAct) { return ({ expenseClearingAct: v4_1.edmToTs(expenseClearingAct, 'Edm.String') }); },
            PurchaseCreditAcc: function (purchaseCreditAcc) { return ({ purchaseCreditAcc: v4_1.edmToTs(purchaseCreditAcc, 'Edm.String') }); },
            EUPurchaseCreditAcc: function (euPurchaseCreditAcc) { return ({ euPurchaseCreditAcc: v4_1.edmToTs(euPurchaseCreditAcc, 'Edm.String') }); },
            ForeignPurchaseCreditAcc: function (foreignPurchaseCreditAcc) { return ({ foreignPurchaseCreditAcc: v4_1.edmToTs(foreignPurchaseCreditAcc, 'Edm.String') }); },
            SalesCreditAcc: function (salesCreditAcc) { return ({ salesCreditAcc: v4_1.edmToTs(salesCreditAcc, 'Edm.String') }); },
            SalesCreditEUAcc: function (salesCreditEuAcc) { return ({ salesCreditEuAcc: v4_1.edmToTs(salesCreditEuAcc, 'Edm.String') }); },
            ExemptedCredits: function (exemptedCredits) { return ({ exemptedCredits: v4_1.edmToTs(exemptedCredits, 'Edm.String') }); },
            SalesCreditForeignAcc: function (salesCreditForeignAcc) { return ({ salesCreditForeignAcc: v4_1.edmToTs(salesCreditForeignAcc, 'Edm.String') }); },
            ExpenseOffsettingAccount: function (expenseOffsettingAccount) { return ({ expenseOffsettingAccount: v4_1.edmToTs(expenseOffsettingAccount, 'Edm.String') }); },
            WipAccount: function (wipAccount) { return ({ wipAccount: v4_1.edmToTs(wipAccount, 'Edm.String') }); },
            ExchangeRateDifferencesAcct: function (exchangeRateDifferencesAcct) { return ({ exchangeRateDifferencesAcct: v4_1.edmToTs(exchangeRateDifferencesAcct, 'Edm.String') }); },
            GoodsClearingAcct: function (goodsClearingAcct) { return ({ goodsClearingAcct: v4_1.edmToTs(goodsClearingAcct, 'Edm.String') }); },
            NegativeInventoryAdjustmentAccount: function (negativeInventoryAdjustmentAccount) { return ({ negativeInventoryAdjustmentAccount: v4_1.edmToTs(negativeInventoryAdjustmentAccount, 'Edm.String') }); },
            CostInflationOffsetAccount: function (costInflationOffsetAccount) { return ({ costInflationOffsetAccount: v4_1.edmToTs(costInflationOffsetAccount, 'Edm.String') }); },
            GLDecreaseAcct: function (glDecreaseAcct) { return ({ glDecreaseAcct: v4_1.edmToTs(glDecreaseAcct, 'Edm.String') }); },
            GLIncreaseAcct: function (glIncreaseAcct) { return ({ glIncreaseAcct: v4_1.edmToTs(glIncreaseAcct, 'Edm.String') }); },
            PAReturnAcct: function (paReturnAcct) { return ({ paReturnAcct: v4_1.edmToTs(paReturnAcct, 'Edm.String') }); },
            PurchaseAcct: function (purchaseAcct) { return ({ purchaseAcct: v4_1.edmToTs(purchaseAcct, 'Edm.String') }); },
            PurchaseOffsetAcct: function (purchaseOffsetAcct) { return ({ purchaseOffsetAcct: v4_1.edmToTs(purchaseOffsetAcct, 'Edm.String') }); },
            ShippedGoodsAccount: function (shippedGoodsAccount) { return ({ shippedGoodsAccount: v4_1.edmToTs(shippedGoodsAccount, 'Edm.String') }); },
            StockInflationOffsetAccount: function (stockInflationOffsetAccount) { return ({ stockInflationOffsetAccount: v4_1.edmToTs(stockInflationOffsetAccount, 'Edm.String') }); },
            StockInflationAdjustAccount: function (stockInflationAdjustAccount) { return ({ stockInflationAdjustAccount: v4_1.edmToTs(stockInflationAdjustAccount, 'Edm.String') }); },
            VATInRevenueAccount: function (vatInRevenueAccount) { return ({ vatInRevenueAccount: v4_1.edmToTs(vatInRevenueAccount, 'Edm.String') }); },
            WipVarianceAccount: function (wipVarianceAccount) { return ({ wipVarianceAccount: v4_1.edmToTs(wipVarianceAccount, 'Edm.String') }); },
            CostInflationAccount: function (costInflationAccount) { return ({ costInflationAccount: v4_1.edmToTs(costInflationAccount, 'Edm.String') }); },
            WHIncomingCenvatAccount: function (whIncomingCenvatAccount) { return ({ whIncomingCenvatAccount: v4_1.edmToTs(whIncomingCenvatAccount, 'Edm.String') }); },
            WHOutgoingCenvatAccount: function (whOutgoingCenvatAccount) { return ({ whOutgoingCenvatAccount: v4_1.edmToTs(whOutgoingCenvatAccount, 'Edm.String') }); },
            StockInTransitAccount: function (stockInTransitAccount) { return ({ stockInTransitAccount: v4_1.edmToTs(stockInTransitAccount, 'Edm.String') }); },
            WipOffsetProfitAndLossAccount: function (wipOffsetProfitAndLossAccount) { return ({ wipOffsetProfitAndLossAccount: v4_1.edmToTs(wipOffsetProfitAndLossAccount, 'Edm.String') }); },
            InventoryOffsetProfitAndLossAccount: function (inventoryOffsetProfitAndLossAccount) { return ({ inventoryOffsetProfitAndLossAccount: v4_1.edmToTs(inventoryOffsetProfitAndLossAccount, 'Edm.String') }); },
            DefaultBin: function (defaultBin) { return ({ defaultBin: v4_1.edmToTs(defaultBin, 'Edm.Int32') }); },
            PurchaseBalanceAccount: function (purchaseBalanceAccount) { return ({ purchaseBalanceAccount: v4_1.edmToTs(purchaseBalanceAccount, 'Edm.String') }); },
            ItemCycleCounts: function (itemCycleCounts) { return ({ itemCycleCounts: ItemCycleCount_1.ItemCycleCount.build(itemCycleCounts) }); }
        });
    }
    ItemWarehouseInfo.build = build;
})(ItemWarehouseInfo = exports.ItemWarehouseInfo || (exports.ItemWarehouseInfo = {}));
//# sourceMappingURL=ItemWarehouseInfo.js.map