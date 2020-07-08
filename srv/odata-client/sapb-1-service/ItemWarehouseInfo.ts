/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemCycleCount, ItemCycleCountField } from './ItemCycleCount';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
   * Purchase Balance Account.
   * @nullable
   */
  purchaseBalanceAccount?: string;
  /**
   * Item Cycle Counts.
   * @nullable
   */
  itemCycleCounts?: ItemCycleCount;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemWarehouseInfo.build]] instead.
 */
export function createItemWarehouseInfo(json: any): ItemWarehouseInfo {
  return ItemWarehouseInfo.build(json);
}

/**
 * ItemWarehouseInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemWarehouseInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemWarehouseInfo.minimalStock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimalStock: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MinimalStock', this, 'Edm.Double');
  /**
   * Representation of the [[ItemWarehouseInfo.maximalStock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximalStock: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaximalStock', this, 'Edm.Double');
  /**
   * Representation of the [[ItemWarehouseInfo.minimalOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimalOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MinimalOrder', this, 'Edm.Double');
  /**
   * Representation of the [[ItemWarehouseInfo.standardAveragePrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  standardAveragePrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StandardAveragePrice', this, 'Edm.Double');
  /**
   * Representation of the [[ItemWarehouseInfo.inventoryAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.costAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.transferAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TransferAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.revenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revenuesAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RevenuesAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.varienceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  varienceAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VarienceAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.decreasingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  decreasingAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DecreasingAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.increasingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  increasingAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IncreasingAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.returningAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  returningAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReturningAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.expensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expensesAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpensesAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.euRevenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euRevenuesAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EURevenuesAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.euExpensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euExpensesAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EUExpensesAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.foreignRevenueAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignRevenueAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ForeignRevenueAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.foreignExpensAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignExpensAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ForeignExpensAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.exemptIncomeAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptIncomeAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExemptIncomeAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.priceDifferenceAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceDifferenceAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriceDifferenceAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.inStock]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inStock: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InStock', this, 'Edm.Double');
  /**
   * Representation of the [[ItemWarehouseInfo.committed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  committed: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Committed', this, 'Edm.Double');
  /**
   * Representation of the [[ItemWarehouseInfo.ordered]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ordered: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Ordered', this, 'Edm.Double');
  /**
   * Representation of the [[ItemWarehouseInfo.countedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ItemWarehouseInfo.userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userSignature: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserSignature', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemWarehouseInfo.counted]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counted: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Counted', this, 'Edm.Double');
  /**
   * Representation of the [[ItemWarehouseInfo.expenseClearingAct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseClearingAct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpenseClearingAct', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.purchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseCreditAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseCreditAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.euPurchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euPurchaseCreditAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EUPurchaseCreditAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.foreignPurchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignPurchaseCreditAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ForeignPurchaseCreditAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.salesCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesCreditAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.salesCreditEuAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditEuAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesCreditEUAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.exemptedCredits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptedCredits: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExemptedCredits', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.salesCreditForeignAcc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditForeignAcc: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SalesCreditForeignAcc', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.expenseOffsettingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseOffsettingAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpenseOffsettingAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.wipAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WipAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.exchangeRateDifferencesAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exchangeRateDifferencesAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExchangeRateDifferencesAcct', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.goodsClearingAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsClearingAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GoodsClearingAcct', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.negativeInventoryAdjustmentAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  negativeInventoryAdjustmentAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NegativeInventoryAdjustmentAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.costInflationOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costInflationOffsetAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostInflationOffsetAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.glDecreaseAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glDecreaseAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLDecreaseAcct', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.glIncreaseAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glIncreaseAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GLIncreaseAcct', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.paReturnAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paReturnAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PAReturnAcct', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.purchaseAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseAcct', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.purchaseOffsetAcct]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseOffsetAcct: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseOffsetAcct', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.shippedGoodsAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shippedGoodsAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShippedGoodsAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.stockInflationOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInflationOffsetAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StockInflationOffsetAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.stockInflationAdjustAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInflationAdjustAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StockInflationAdjustAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.vatInRevenueAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatInRevenueAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VATInRevenueAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.wipVarianceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipVarianceAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WipVarianceAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.costInflationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costInflationAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostInflationAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.whIncomingCenvatAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  whIncomingCenvatAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WHIncomingCenvatAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.whOutgoingCenvatAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  whOutgoingCenvatAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WHOutgoingCenvatAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.stockInTransitAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInTransitAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StockInTransitAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.wipOffsetProfitAndLossAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipOffsetProfitAndLossAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WipOffsetProfitAndLossAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.inventoryOffsetProfitAndLossAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetProfitAndLossAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryOffsetProfitAndLossAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.defaultBin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultBin', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemWarehouseInfo.purchaseBalanceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseBalanceAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseBalanceAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.itemCycleCounts]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCycleCounts: ItemCycleCountField<EntityT> = new ItemCycleCountField('ItemCycleCounts', this);
}

export namespace ItemWarehouseInfo {
  export function build(json: { [keys: string]: FieldType | ItemCycleCount }): ItemWarehouseInfo {
    return createComplexType(json, {
      MinimalStock: (minimalStock: number) => ({ minimalStock: edmToTs(minimalStock, 'Edm.Double') }),
      MaximalStock: (maximalStock: number) => ({ maximalStock: edmToTs(maximalStock, 'Edm.Double') }),
      MinimalOrder: (minimalOrder: number) => ({ minimalOrder: edmToTs(minimalOrder, 'Edm.Double') }),
      StandardAveragePrice: (standardAveragePrice: number) => ({ standardAveragePrice: edmToTs(standardAveragePrice, 'Edm.Double') }),
      InventoryAccount: (inventoryAccount: string) => ({ inventoryAccount: edmToTs(inventoryAccount, 'Edm.String') }),
      CostAccount: (costAccount: string) => ({ costAccount: edmToTs(costAccount, 'Edm.String') }),
      TransferAccount: (transferAccount: string) => ({ transferAccount: edmToTs(transferAccount, 'Edm.String') }),
      RevenuesAccount: (revenuesAccount: string) => ({ revenuesAccount: edmToTs(revenuesAccount, 'Edm.String') }),
      VarienceAccount: (varienceAccount: string) => ({ varienceAccount: edmToTs(varienceAccount, 'Edm.String') }),
      DecreasingAccount: (decreasingAccount: string) => ({ decreasingAccount: edmToTs(decreasingAccount, 'Edm.String') }),
      IncreasingAccount: (increasingAccount: string) => ({ increasingAccount: edmToTs(increasingAccount, 'Edm.String') }),
      ReturningAccount: (returningAccount: string) => ({ returningAccount: edmToTs(returningAccount, 'Edm.String') }),
      ExpensesAccount: (expensesAccount: string) => ({ expensesAccount: edmToTs(expensesAccount, 'Edm.String') }),
      EURevenuesAccount: (euRevenuesAccount: string) => ({ euRevenuesAccount: edmToTs(euRevenuesAccount, 'Edm.String') }),
      EUExpensesAccount: (euExpensesAccount: string) => ({ euExpensesAccount: edmToTs(euExpensesAccount, 'Edm.String') }),
      ForeignRevenueAcc: (foreignRevenueAcc: string) => ({ foreignRevenueAcc: edmToTs(foreignRevenueAcc, 'Edm.String') }),
      ForeignExpensAcc: (foreignExpensAcc: string) => ({ foreignExpensAcc: edmToTs(foreignExpensAcc, 'Edm.String') }),
      ExemptIncomeAcc: (exemptIncomeAcc: string) => ({ exemptIncomeAcc: edmToTs(exemptIncomeAcc, 'Edm.String') }),
      PriceDifferenceAcc: (priceDifferenceAcc: string) => ({ priceDifferenceAcc: edmToTs(priceDifferenceAcc, 'Edm.String') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      InStock: (inStock: number) => ({ inStock: edmToTs(inStock, 'Edm.Double') }),
      Committed: (committed: number) => ({ committed: edmToTs(committed, 'Edm.Double') }),
      Ordered: (ordered: number) => ({ ordered: edmToTs(ordered, 'Edm.Double') }),
      CountedQuantity: (countedQuantity: number) => ({ countedQuantity: edmToTs(countedQuantity, 'Edm.Double') }),
      UserSignature: (userSignature: number) => ({ userSignature: edmToTs(userSignature, 'Edm.Int32') }),
      Counted: (counted: number) => ({ counted: edmToTs(counted, 'Edm.Double') }),
      ExpenseClearingAct: (expenseClearingAct: string) => ({ expenseClearingAct: edmToTs(expenseClearingAct, 'Edm.String') }),
      PurchaseCreditAcc: (purchaseCreditAcc: string) => ({ purchaseCreditAcc: edmToTs(purchaseCreditAcc, 'Edm.String') }),
      EUPurchaseCreditAcc: (euPurchaseCreditAcc: string) => ({ euPurchaseCreditAcc: edmToTs(euPurchaseCreditAcc, 'Edm.String') }),
      ForeignPurchaseCreditAcc: (foreignPurchaseCreditAcc: string) => ({ foreignPurchaseCreditAcc: edmToTs(foreignPurchaseCreditAcc, 'Edm.String') }),
      SalesCreditAcc: (salesCreditAcc: string) => ({ salesCreditAcc: edmToTs(salesCreditAcc, 'Edm.String') }),
      SalesCreditEUAcc: (salesCreditEuAcc: string) => ({ salesCreditEuAcc: edmToTs(salesCreditEuAcc, 'Edm.String') }),
      ExemptedCredits: (exemptedCredits: string) => ({ exemptedCredits: edmToTs(exemptedCredits, 'Edm.String') }),
      SalesCreditForeignAcc: (salesCreditForeignAcc: string) => ({ salesCreditForeignAcc: edmToTs(salesCreditForeignAcc, 'Edm.String') }),
      ExpenseOffsettingAccount: (expenseOffsettingAccount: string) => ({ expenseOffsettingAccount: edmToTs(expenseOffsettingAccount, 'Edm.String') }),
      WipAccount: (wipAccount: string) => ({ wipAccount: edmToTs(wipAccount, 'Edm.String') }),
      ExchangeRateDifferencesAcct: (exchangeRateDifferencesAcct: string) => ({ exchangeRateDifferencesAcct: edmToTs(exchangeRateDifferencesAcct, 'Edm.String') }),
      GoodsClearingAcct: (goodsClearingAcct: string) => ({ goodsClearingAcct: edmToTs(goodsClearingAcct, 'Edm.String') }),
      NegativeInventoryAdjustmentAccount: (negativeInventoryAdjustmentAccount: string) => ({ negativeInventoryAdjustmentAccount: edmToTs(negativeInventoryAdjustmentAccount, 'Edm.String') }),
      CostInflationOffsetAccount: (costInflationOffsetAccount: string) => ({ costInflationOffsetAccount: edmToTs(costInflationOffsetAccount, 'Edm.String') }),
      GLDecreaseAcct: (glDecreaseAcct: string) => ({ glDecreaseAcct: edmToTs(glDecreaseAcct, 'Edm.String') }),
      GLIncreaseAcct: (glIncreaseAcct: string) => ({ glIncreaseAcct: edmToTs(glIncreaseAcct, 'Edm.String') }),
      PAReturnAcct: (paReturnAcct: string) => ({ paReturnAcct: edmToTs(paReturnAcct, 'Edm.String') }),
      PurchaseAcct: (purchaseAcct: string) => ({ purchaseAcct: edmToTs(purchaseAcct, 'Edm.String') }),
      PurchaseOffsetAcct: (purchaseOffsetAcct: string) => ({ purchaseOffsetAcct: edmToTs(purchaseOffsetAcct, 'Edm.String') }),
      ShippedGoodsAccount: (shippedGoodsAccount: string) => ({ shippedGoodsAccount: edmToTs(shippedGoodsAccount, 'Edm.String') }),
      StockInflationOffsetAccount: (stockInflationOffsetAccount: string) => ({ stockInflationOffsetAccount: edmToTs(stockInflationOffsetAccount, 'Edm.String') }),
      StockInflationAdjustAccount: (stockInflationAdjustAccount: string) => ({ stockInflationAdjustAccount: edmToTs(stockInflationAdjustAccount, 'Edm.String') }),
      VATInRevenueAccount: (vatInRevenueAccount: string) => ({ vatInRevenueAccount: edmToTs(vatInRevenueAccount, 'Edm.String') }),
      WipVarianceAccount: (wipVarianceAccount: string) => ({ wipVarianceAccount: edmToTs(wipVarianceAccount, 'Edm.String') }),
      CostInflationAccount: (costInflationAccount: string) => ({ costInflationAccount: edmToTs(costInflationAccount, 'Edm.String') }),
      WHIncomingCenvatAccount: (whIncomingCenvatAccount: string) => ({ whIncomingCenvatAccount: edmToTs(whIncomingCenvatAccount, 'Edm.String') }),
      WHOutgoingCenvatAccount: (whOutgoingCenvatAccount: string) => ({ whOutgoingCenvatAccount: edmToTs(whOutgoingCenvatAccount, 'Edm.String') }),
      StockInTransitAccount: (stockInTransitAccount: string) => ({ stockInTransitAccount: edmToTs(stockInTransitAccount, 'Edm.String') }),
      WipOffsetProfitAndLossAccount: (wipOffsetProfitAndLossAccount: string) => ({ wipOffsetProfitAndLossAccount: edmToTs(wipOffsetProfitAndLossAccount, 'Edm.String') }),
      InventoryOffsetProfitAndLossAccount: (inventoryOffsetProfitAndLossAccount: string) => ({ inventoryOffsetProfitAndLossAccount: edmToTs(inventoryOffsetProfitAndLossAccount, 'Edm.String') }),
      DefaultBin: (defaultBin: number) => ({ defaultBin: edmToTs(defaultBin, 'Edm.Int32') }),
      PurchaseBalanceAccount: (purchaseBalanceAccount: string) => ({ purchaseBalanceAccount: edmToTs(purchaseBalanceAccount, 'Edm.String') }),
      ItemCycleCounts: (itemCycleCounts: ItemCycleCount) => ({ itemCycleCounts: ItemCycleCount.build(itemCycleCounts) })
    });
  }
}
