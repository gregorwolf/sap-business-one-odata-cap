import { ItemCycleCount } from './ItemCycleCount';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ItemWarehouseInfo
 */
export interface ItemWarehouseInfo {
    /**
     * Minimal Stock.
     * @nullable
     */
    minimalStock?: number;
    /**
     * Maximal Stock.
     * @nullable
     */
    maximalStock?: number;
    /**
     * Minimal Order.
     * @nullable
     */
    minimalOrder?: number;
    /**
     * Standard Average Price.
     * @nullable
     */
    standardAveragePrice?: number;
    /**
     * Locked.
     * @nullable
     */
    locked?: BoYesNoEnum;
    /**
     * Inventory Account.
     * @nullable
     */
    inventoryAccount?: string;
    /**
     * Cost Account.
     * @nullable
     */
    costAccount?: string;
    /**
     * Transfer Account.
     * @nullable
     */
    transferAccount?: string;
    /**
     * Revenues Account.
     * @nullable
     */
    revenuesAccount?: string;
    /**
     * Varience Account.
     * @nullable
     */
    varienceAccount?: string;
    /**
     * Decreasing Account.
     * @nullable
     */
    decreasingAccount?: string;
    /**
     * Increasing Account.
     * @nullable
     */
    increasingAccount?: string;
    /**
     * Returning Account.
     * @nullable
     */
    returningAccount?: string;
    /**
     * Expenses Account.
     * @nullable
     */
    expensesAccount?: string;
    /**
     * Eu Revenues Account.
     * @nullable
     */
    euRevenuesAccount?: string;
    /**
     * Eu Expenses Account.
     * @nullable
     */
    euExpensesAccount?: string;
    /**
     * Foreign Revenue Acc.
     * @nullable
     */
    foreignRevenueAcc?: string;
    /**
     * Foreign Expens Acc.
     * @nullable
     */
    foreignExpensAcc?: string;
    /**
     * Exempt Income Acc.
     * @nullable
     */
    exemptIncomeAcc?: string;
    /**
     * Price Difference Acc.
     * @nullable
     */
    priceDifferenceAcc?: string;
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * In Stock.
     * @nullable
     */
    inStock?: number;
    /**
     * Committed.
     * @nullable
     */
    committed?: number;
    /**
     * Ordered.
     * @nullable
     */
    ordered?: number;
    /**
     * Counted Quantity.
     * @nullable
     */
    countedQuantity?: number;
    /**
     * Was Counted.
     * @nullable
     */
    wasCounted?: BoYesNoEnum;
    /**
     * User Signature.
     * @nullable
     */
    userSignature?: number;
    /**
     * Counted.
     * @nullable
     */
    counted?: number;
    /**
     * Expense Clearing Act.
     * @nullable
     */
    expenseClearingAct?: string;
    /**
     * Purchase Credit Acc.
     * @nullable
     */
    purchaseCreditAcc?: string;
    /**
     * Eu Purchase Credit Acc.
     * @nullable
     */
    euPurchaseCreditAcc?: string;
    /**
     * Foreign Purchase Credit Acc.
     * @nullable
     */
    foreignPurchaseCreditAcc?: string;
    /**
     * Sales Credit Acc.
     * @nullable
     */
    salesCreditAcc?: string;
    /**
     * Sales Credit Eu Acc.
     * @nullable
     */
    salesCreditEuAcc?: string;
    /**
     * Exempted Credits.
     * @nullable
     */
    exemptedCredits?: string;
    /**
     * Sales Credit Foreign Acc.
     * @nullable
     */
    salesCreditForeignAcc?: string;
    /**
     * Expense Offsetting Account.
     * @nullable
     */
    expenseOffsettingAccount?: string;
    /**
     * Wip Account.
     * @nullable
     */
    wipAccount?: string;
    /**
     * Exchange Rate Differences Acct.
     * @nullable
     */
    exchangeRateDifferencesAcct?: string;
    /**
     * Goods Clearing Acct.
     * @nullable
     */
    goodsClearingAcct?: string;
    /**
     * Negative Inventory Adjustment Account.
     * @nullable
     */
    negativeInventoryAdjustmentAccount?: string;
    /**
     * Cost Inflation Offset Account.
     * @nullable
     */
    costInflationOffsetAccount?: string;
    /**
     * Gl Decrease Acct.
     * @nullable
     */
    glDecreaseAcct?: string;
    /**
     * Gl Increase Acct.
     * @nullable
     */
    glIncreaseAcct?: string;
    /**
     * Pa Return Acct.
     * @nullable
     */
    paReturnAcct?: string;
    /**
     * Purchase Acct.
     * @nullable
     */
    purchaseAcct?: string;
    /**
     * Purchase Offset Acct.
     * @nullable
     */
    purchaseOffsetAcct?: string;
    /**
     * Shipped Goods Account.
     * @nullable
     */
    shippedGoodsAccount?: string;
    /**
     * Stock Inflation Offset Account.
     * @nullable
     */
    stockInflationOffsetAccount?: string;
    /**
     * Stock Inflation Adjust Account.
     * @nullable
     */
    stockInflationAdjustAccount?: string;
    /**
     * Vat In Revenue Account.
     * @nullable
     */
    vatInRevenueAccount?: string;
    /**
     * Wip Variance Account.
     * @nullable
     */
    wipVarianceAccount?: string;
    /**
     * Cost Inflation Account.
     * @nullable
     */
    costInflationAccount?: string;
    /**
     * Wh Incoming Cenvat Account.
     * @nullable
     */
    whIncomingCenvatAccount?: string;
    /**
     * Wh Outgoing Cenvat Account.
     * @nullable
     */
    whOutgoingCenvatAccount?: string;
    /**
     * Stock In Transit Account.
     * @nullable
     */
    stockInTransitAccount?: string;
    /**
     * Wip Offset Profit And Loss Account.
     * @nullable
     */
    wipOffsetProfitAndLossAccount?: string;
    /**
     * Inventory Offset Profit And Loss Account.
     * @nullable
     */
    inventoryOffsetProfitAndLossAccount?: string;
    /**
     * Default Bin.
     * @nullable
     */
    defaultBin?: number;
    /**
     * Default Bin Enforced.
     * @nullable
     */
    defaultBinEnforced?: BoYesNoEnum;
    /**
     * Purchase Balance Account.
     * @nullable
     */
    purchaseBalanceAccount?: string;
    /**
     * Item Cycle Counts.
     * @nullable
     */
    itemCycleCounts?: ItemCycleCount[];
}
/**
 * @deprecated Since v1.6.0. Use [[ItemWarehouseInfo.build]] instead.
 */
export declare function createItemWarehouseInfo(json: any): ItemWarehouseInfo;
/**
 * ItemWarehouseInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemWarehouseInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemWarehouseInfo> {
    /**
     * Representation of the [[ItemWarehouseInfo.minimalStock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minimalStock: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.maximalStock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maximalStock: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.minimalOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    minimalOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.standardAveragePrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    standardAveragePrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.locked]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locked: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.inventoryAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.costAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.transferAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.revenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revenuesAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.varienceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    varienceAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.decreasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    decreasingAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.increasingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    increasingAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.returningAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    returningAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.expensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expensesAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.euRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    euRevenuesAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.euExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    euExpensesAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.foreignRevenueAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignRevenueAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.foreignExpensAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignExpensAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.exemptIncomeAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exemptIncomeAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.priceDifferenceAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceDifferenceAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.inStock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inStock: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.committed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    committed: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.ordered]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ordered: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.countedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.wasCounted]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wasCounted: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userSignature: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.counted]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counted: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.expenseClearingAct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseClearingAct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.purchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseCreditAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.euPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    euPurchaseCreditAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.foreignPurchaseCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    foreignPurchaseCreditAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.salesCreditAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesCreditAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.salesCreditEuAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesCreditEuAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.exemptedCredits]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exemptedCredits: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.salesCreditForeignAcc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    salesCreditForeignAcc: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.expenseOffsettingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    expenseOffsettingAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.wipAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wipAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.exchangeRateDifferencesAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exchangeRateDifferencesAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.goodsClearingAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    goodsClearingAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.negativeInventoryAdjustmentAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    negativeInventoryAdjustmentAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.costInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costInflationOffsetAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.glDecreaseAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glDecreaseAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.glIncreaseAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glIncreaseAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.paReturnAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paReturnAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.purchaseAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.purchaseOffsetAcct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseOffsetAcct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.shippedGoodsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shippedGoodsAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.stockInflationOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockInflationOffsetAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.stockInflationAdjustAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockInflationAdjustAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.vatInRevenueAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatInRevenueAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.wipVarianceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wipVarianceAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.costInflationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costInflationAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.whIncomingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    whIncomingCenvatAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.whOutgoingCenvatAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    whOutgoingCenvatAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.stockInTransitAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockInTransitAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.wipOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wipOffsetProfitAndLossAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.inventoryOffsetProfitAndLossAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryOffsetProfitAndLossAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.defaultBin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.defaultBinEnforced]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    defaultBinEnforced: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.purchaseBalanceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    purchaseBalanceAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemWarehouseInfo.itemCycleCounts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCycleCounts: CollectionField<EntityT, ItemCycleCount>;
    /**
     * Creates an instance of ItemWarehouseInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemWarehouseInfo {
    /**
     * Metadata information on all properties of the `ItemWarehouseInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemWarehouseInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | ItemCycleCount;
    }): ItemWarehouseInfo;
}
//# sourceMappingURL=ItemWarehouseInfo.d.ts.map