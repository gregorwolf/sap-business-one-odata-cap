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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemWarehouseInfo = exports.ItemWarehouseInfoField = exports.createItemWarehouseInfo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ItemCycleCount_1 = require("./ItemCycleCount");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ItemWarehouseInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemWarehouseInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemWarehouseInfo) || this;
        /**
         * Representation of the [[ItemWarehouseInfo.minimalStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimalStock = new core_1.ComplexTypeNumberPropertyField('MinimalStock', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.maximalStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maximalStock = new core_1.ComplexTypeNumberPropertyField('MaximalStock', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.minimalOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimalOrder = new core_1.ComplexTypeNumberPropertyField('MinimalOrder', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.standardAveragePrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.standardAveragePrice = new core_1.ComplexTypeNumberPropertyField('StandardAveragePrice', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.locked]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locked = new core_1.ComplexTypeEnumPropertyField('Locked', _this);
        /**
         * Representation of the [[ItemWarehouseInfo.inventoryAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryAccount = new core_1.ComplexTypeStringPropertyField('InventoryAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.costAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costAccount = new core_1.ComplexTypeStringPropertyField('CostAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.transferAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferAccount = new core_1.ComplexTypeStringPropertyField('TransferAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.revenuesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revenuesAccount = new core_1.ComplexTypeStringPropertyField('RevenuesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.varienceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.varienceAccount = new core_1.ComplexTypeStringPropertyField('VarienceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.decreasingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.decreasingAccount = new core_1.ComplexTypeStringPropertyField('DecreasingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.increasingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.increasingAccount = new core_1.ComplexTypeStringPropertyField('IncreasingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.returningAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.returningAccount = new core_1.ComplexTypeStringPropertyField('ReturningAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.expensesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expensesAccount = new core_1.ComplexTypeStringPropertyField('ExpensesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.euRevenuesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euRevenuesAccount = new core_1.ComplexTypeStringPropertyField('EURevenuesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.euExpensesAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euExpensesAccount = new core_1.ComplexTypeStringPropertyField('EUExpensesAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.foreignRevenueAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignRevenueAcc = new core_1.ComplexTypeStringPropertyField('ForeignRevenueAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.foreignExpensAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignExpensAcc = new core_1.ComplexTypeStringPropertyField('ForeignExpensAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.exemptIncomeAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exemptIncomeAcc = new core_1.ComplexTypeStringPropertyField('ExemptIncomeAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.priceDifferenceAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceDifferenceAcc = new core_1.ComplexTypeStringPropertyField('PriceDifferenceAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.inStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inStock = new core_1.ComplexTypeNumberPropertyField('InStock', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.committed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.committed = new core_1.ComplexTypeNumberPropertyField('Committed', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.ordered]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ordered = new core_1.ComplexTypeNumberPropertyField('Ordered', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.countedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countedQuantity = new core_1.ComplexTypeNumberPropertyField('CountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.wasCounted]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wasCounted = new core_1.ComplexTypeEnumPropertyField('WasCounted', _this);
        /**
         * Representation of the [[ItemWarehouseInfo.userSignature]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userSignature = new core_1.ComplexTypeNumberPropertyField('UserSignature', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemWarehouseInfo.counted]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counted = new core_1.ComplexTypeNumberPropertyField('Counted', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemWarehouseInfo.expenseClearingAct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseClearingAct = new core_1.ComplexTypeStringPropertyField('ExpenseClearingAct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.purchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseCreditAcc = new core_1.ComplexTypeStringPropertyField('PurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.euPurchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.euPurchaseCreditAcc = new core_1.ComplexTypeStringPropertyField('EUPurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.foreignPurchaseCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foreignPurchaseCreditAcc = new core_1.ComplexTypeStringPropertyField('ForeignPurchaseCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.salesCreditAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditAcc = new core_1.ComplexTypeStringPropertyField('SalesCreditAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.salesCreditEuAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditEuAcc = new core_1.ComplexTypeStringPropertyField('SalesCreditEUAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.exemptedCredits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exemptedCredits = new core_1.ComplexTypeStringPropertyField('ExemptedCredits', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.salesCreditForeignAcc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesCreditForeignAcc = new core_1.ComplexTypeStringPropertyField('SalesCreditForeignAcc', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.expenseOffsettingAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseOffsettingAccount = new core_1.ComplexTypeStringPropertyField('ExpenseOffsettingAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.wipAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipAccount = new core_1.ComplexTypeStringPropertyField('WipAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.exchangeRateDifferencesAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exchangeRateDifferencesAcct = new core_1.ComplexTypeStringPropertyField('ExchangeRateDifferencesAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.goodsClearingAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.goodsClearingAcct = new core_1.ComplexTypeStringPropertyField('GoodsClearingAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.negativeInventoryAdjustmentAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.negativeInventoryAdjustmentAccount = new core_1.ComplexTypeStringPropertyField('NegativeInventoryAdjustmentAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.costInflationOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costInflationOffsetAccount = new core_1.ComplexTypeStringPropertyField('CostInflationOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.glDecreaseAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glDecreaseAcct = new core_1.ComplexTypeStringPropertyField('GLDecreaseAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.glIncreaseAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glIncreaseAcct = new core_1.ComplexTypeStringPropertyField('GLIncreaseAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.paReturnAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paReturnAcct = new core_1.ComplexTypeStringPropertyField('PAReturnAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.purchaseAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseAcct = new core_1.ComplexTypeStringPropertyField('PurchaseAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.purchaseOffsetAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseOffsetAcct = new core_1.ComplexTypeStringPropertyField('PurchaseOffsetAcct', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.shippedGoodsAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shippedGoodsAccount = new core_1.ComplexTypeStringPropertyField('ShippedGoodsAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.stockInflationOffsetAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInflationOffsetAccount = new core_1.ComplexTypeStringPropertyField('StockInflationOffsetAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.stockInflationAdjustAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInflationAdjustAccount = new core_1.ComplexTypeStringPropertyField('StockInflationAdjustAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.vatInRevenueAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatInRevenueAccount = new core_1.ComplexTypeStringPropertyField('VATInRevenueAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.wipVarianceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipVarianceAccount = new core_1.ComplexTypeStringPropertyField('WipVarianceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.costInflationAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costInflationAccount = new core_1.ComplexTypeStringPropertyField('CostInflationAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.whIncomingCenvatAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.whIncomingCenvatAccount = new core_1.ComplexTypeStringPropertyField('WHIncomingCenvatAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.whOutgoingCenvatAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.whOutgoingCenvatAccount = new core_1.ComplexTypeStringPropertyField('WHOutgoingCenvatAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.stockInTransitAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInTransitAccount = new core_1.ComplexTypeStringPropertyField('StockInTransitAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.wipOffsetProfitAndLossAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipOffsetProfitAndLossAccount = new core_1.ComplexTypeStringPropertyField('WipOffsetProfitAndLossAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.inventoryOffsetProfitAndLossAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetProfitAndLossAccount = new core_1.ComplexTypeStringPropertyField('InventoryOffsetProfitAndLossAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.defaultBin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBin = new core_1.ComplexTypeNumberPropertyField('DefaultBin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemWarehouseInfo.defaultBinEnforced]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBinEnforced = new core_1.ComplexTypeEnumPropertyField('DefaultBinEnforced', _this);
        /**
         * Representation of the [[ItemWarehouseInfo.purchaseBalanceAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.purchaseBalanceAccount = new core_1.ComplexTypeStringPropertyField('PurchaseBalanceAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ItemWarehouseInfo.itemCycleCounts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCycleCounts = new core_1.CollectionField('ItemCycleCounts', _this, ItemCycleCount_1.ItemCycleCount);
        return _this;
    }
    return ItemWarehouseInfoField;
}(core_1.ComplexTypeField));
exports.ItemWarehouseInfoField = ItemWarehouseInfoField;
var ItemWarehouseInfo;
(function (ItemWarehouseInfo) {
    /**
     * Metadata information on all properties of the `ItemWarehouseInfo` complex type.
     */
    ItemWarehouseInfo._propertyMetadata = [{
            originalName: 'MinimalStock',
            name: 'minimalStock',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MaximalStock',
            name: 'maximalStock',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MinimalOrder',
            name: 'minimalOrder',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'StandardAveragePrice',
            name: 'standardAveragePrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Locked',
            name: 'locked',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'InventoryAccount',
            name: 'inventoryAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostAccount',
            name: 'costAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TransferAccount',
            name: 'transferAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RevenuesAccount',
            name: 'revenuesAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VarienceAccount',
            name: 'varienceAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DecreasingAccount',
            name: 'decreasingAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IncreasingAccount',
            name: 'increasingAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReturningAccount',
            name: 'returningAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpensesAccount',
            name: 'expensesAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EURevenuesAccount',
            name: 'euRevenuesAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EUExpensesAccount',
            name: 'euExpensesAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ForeignRevenueAcc',
            name: 'foreignRevenueAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ForeignExpensAcc',
            name: 'foreignExpensAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExemptIncomeAcc',
            name: 'exemptIncomeAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PriceDifferenceAcc',
            name: 'priceDifferenceAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InStock',
            name: 'inStock',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Committed',
            name: 'committed',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Ordered',
            name: 'ordered',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CountedQuantity',
            name: 'countedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WasCounted',
            name: 'wasCounted',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UserSignature',
            name: 'userSignature',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Counted',
            name: 'counted',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ExpenseClearingAct',
            name: 'expenseClearingAct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PurchaseCreditAcc',
            name: 'purchaseCreditAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EUPurchaseCreditAcc',
            name: 'euPurchaseCreditAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ForeignPurchaseCreditAcc',
            name: 'foreignPurchaseCreditAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesCreditAcc',
            name: 'salesCreditAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesCreditEUAcc',
            name: 'salesCreditEuAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExemptedCredits',
            name: 'exemptedCredits',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesCreditForeignAcc',
            name: 'salesCreditForeignAcc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpenseOffsettingAccount',
            name: 'expenseOffsettingAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WipAccount',
            name: 'wipAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExchangeRateDifferencesAcct',
            name: 'exchangeRateDifferencesAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GoodsClearingAcct',
            name: 'goodsClearingAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'NegativeInventoryAdjustmentAccount',
            name: 'negativeInventoryAdjustmentAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostInflationOffsetAccount',
            name: 'costInflationOffsetAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GLDecreaseAcct',
            name: 'glDecreaseAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GLIncreaseAcct',
            name: 'glIncreaseAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PAReturnAcct',
            name: 'paReturnAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PurchaseAcct',
            name: 'purchaseAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PurchaseOffsetAcct',
            name: 'purchaseOffsetAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShippedGoodsAccount',
            name: 'shippedGoodsAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StockInflationOffsetAccount',
            name: 'stockInflationOffsetAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StockInflationAdjustAccount',
            name: 'stockInflationAdjustAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VATInRevenueAccount',
            name: 'vatInRevenueAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WipVarianceAccount',
            name: 'wipVarianceAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostInflationAccount',
            name: 'costInflationAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WHIncomingCenvatAccount',
            name: 'whIncomingCenvatAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WHOutgoingCenvatAccount',
            name: 'whOutgoingCenvatAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StockInTransitAccount',
            name: 'stockInTransitAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WipOffsetProfitAndLossAccount',
            name: 'wipOffsetProfitAndLossAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InventoryOffsetProfitAndLossAccount',
            name: 'inventoryOffsetProfitAndLossAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DefaultBin',
            name: 'defaultBin',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DefaultBinEnforced',
            name: 'defaultBinEnforced',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PurchaseBalanceAccount',
            name: 'purchaseBalanceAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemCycleCounts',
            name: 'itemCycleCounts',
            type: ItemCycleCount_1.ItemCycleCount,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemWarehouseInfo);
    }
    ItemWarehouseInfo.build = build;
})(ItemWarehouseInfo = exports.ItemWarehouseInfo || (exports.ItemWarehouseInfo = {}));
//# sourceMappingURL=ItemWarehouseInfo.js.map