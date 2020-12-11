/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemCycleCount } from './ItemCycleCount';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createItemWarehouseInfo(json: any): ItemWarehouseInfo {
  return ItemWarehouseInfo.build(json);
}

/**
 * ItemWarehouseInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemWarehouseInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemWarehouseInfo> {
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
   * Representation of the [[ItemWarehouseInfo.locked]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locked: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Locked', this);
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
   * Representation of the [[ItemWarehouseInfo.wasCounted]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wasCounted: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('WasCounted', this);
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
   * Representation of the [[ItemWarehouseInfo.defaultBinEnforced]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBinEnforced: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DefaultBinEnforced', this);
  /**
   * Representation of the [[ItemWarehouseInfo.purchaseBalanceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseBalanceAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PurchaseBalanceAccount', this, 'Edm.String');
  /**
   * Representation of the [[ItemWarehouseInfo.itemCycleCounts]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCycleCounts: CollectionField<EntityT, ItemCycleCount> = new CollectionField('ItemCycleCounts', this, ItemCycleCount);

  /**
   * Creates an instance of ItemWarehouseInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemWarehouseInfo);
  }
}

export namespace ItemWarehouseInfo {
  /**
   * Metadata information on all properties of the `ItemWarehouseInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemWarehouseInfo>[] = [{
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
    type: ItemCycleCount,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | ItemCycleCount }): ItemWarehouseInfo {
    return deserializeComplexTypeV4(json, ItemWarehouseInfo);
  }
}
