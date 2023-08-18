/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemCycleCount } from './ItemCycleCount';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ItemWarehouseInfo
 */
export interface ItemWarehouseInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Minimal Stock.
   * @nullable
   */
  minimalStock?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Maximal Stock.
   * @nullable
   */
  maximalStock?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Minimal Order.
   * @nullable
   */
  minimalOrder?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Standard Average Price.
   * @nullable
   */
  standardAveragePrice?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Locked.
   * @nullable
   */
  locked?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Inventory Account.
   * @nullable
   */
  inventoryAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cost Account.
   * @nullable
   */
  costAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transfer Account.
   * @nullable
   */
  transferAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Revenues Account.
   * @nullable
   */
  revenuesAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Varience Account.
   * @nullable
   */
  varienceAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Decreasing Account.
   * @nullable
   */
  decreasingAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Increasing Account.
   * @nullable
   */
  increasingAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Returning Account.
   * @nullable
   */
  returningAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expenses Account.
   * @nullable
   */
  expensesAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Eu Revenues Account.
   * @nullable
   */
  euRevenuesAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Eu Expenses Account.
   * @nullable
   */
  euExpensesAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Foreign Revenue Acc.
   * @nullable
   */
  foreignRevenueAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Foreign Expens Acc.
   * @nullable
   */
  foreignExpensAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Exempt Income Acc.
   * @nullable
   */
  exemptIncomeAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price Difference Acc.
   * @nullable
   */
  priceDifferenceAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * In Stock.
   * @nullable
   */
  inStock?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Committed.
   * @nullable
   */
  committed?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Ordered.
   * @nullable
   */
  ordered?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Counted Quantity.
   * @nullable
   */
  countedQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Was Counted.
   * @nullable
   */
  wasCounted?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Counted.
   * @nullable
   */
  counted?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Expense Clearing Act.
   * @nullable
   */
  expenseClearingAct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Credit Acc.
   * @nullable
   */
  purchaseCreditAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Eu Purchase Credit Acc.
   * @nullable
   */
  euPurchaseCreditAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Foreign Purchase Credit Acc.
   * @nullable
   */
  foreignPurchaseCreditAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Credit Acc.
   * @nullable
   */
  salesCreditAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Credit Eu Acc.
   * @nullable
   */
  salesCreditEuAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Exempted Credits.
   * @nullable
   */
  exemptedCredits?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sales Credit Foreign Acc.
   * @nullable
   */
  salesCreditForeignAcc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Expense Offsetting Account.
   * @nullable
   */
  expenseOffsettingAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wip Account.
   * @nullable
   */
  wipAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Exchange Rate Differences Acct.
   * @nullable
   */
  exchangeRateDifferencesAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Goods Clearing Acct.
   * @nullable
   */
  goodsClearingAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Negative Inventory Adjustment Account.
   * @nullable
   */
  negativeInventoryAdjustmentAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Cost Inflation Offset Account.
   * @nullable
   */
  costInflationOffsetAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gl Decrease Acct.
   * @nullable
   */
  glDecreaseAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gl Increase Acct.
   * @nullable
   */
  glIncreaseAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Pa Return Acct.
   * @nullable
   */
  paReturnAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Acct.
   * @nullable
   */
  purchaseAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchase Offset Acct.
   * @nullable
   */
  purchaseOffsetAcct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Shipped Goods Account.
   * @nullable
   */
  shippedGoodsAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stock Inflation Offset Account.
   * @nullable
   */
  stockInflationOffsetAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stock Inflation Adjust Account.
   * @nullable
   */
  stockInflationAdjustAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat In Revenue Account.
   * @nullable
   */
  vatInRevenueAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wip Variance Account.
   * @nullable
   */
  wipVarianceAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cost Inflation Account.
   * @nullable
   */
  costInflationAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wh Incoming Cenvat Account.
   * @nullable
   */
  whIncomingCenvatAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wh Outgoing Cenvat Account.
   * @nullable
   */
  whOutgoingCenvatAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stock In Transit Account.
   * @nullable
   */
  stockInTransitAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Wip Offset Profit And Loss Account.
   * @nullable
   */
  wipOffsetProfitAndLossAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Inventory Offset Profit And Loss Account.
   * @nullable
   */
  inventoryOffsetProfitAndLossAccount?: DeserializedType<
    DeSerializersT,
    'Edm.String'
  >;
  /**
   * Default Bin.
   * @nullable
   */
  defaultBin?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Default Bin Enforced.
   * @nullable
   */
  defaultBinEnforced?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Purchase Balance Account.
   * @nullable
   */
  purchaseBalanceAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ind Escala.
   * @nullable
   */
  indEscala?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Cnjp Man.
   * @nullable
   */
  cnjpMan?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Zentrallager.
   */
  uZentrallager: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Cycle Counts.
   * @nullable
   */
  itemCycleCounts?: DeserializedType<DeSerializersT, 'SAPB1.ItemCycleCount'>;
}

/**
 * ItemWarehouseInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemWarehouseInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ItemWarehouseInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.minimalStock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimalStock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MinimalStock', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.maximalStock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximalStock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MaximalStock', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.minimalOrder} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minimalOrder: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MinimalOrder', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.standardAveragePrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  standardAveragePrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StandardAveragePrice',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.locked} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locked: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Locked', BoYesNoEnum, true);
  /**
   * Representation of the {@link ItemWarehouseInfo.inventoryAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.costAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostAccount', 'Edm.String', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.transferAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransferAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.revenuesAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revenuesAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RevenuesAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.varienceAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  varienceAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VarienceAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.decreasingAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  decreasingAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DecreasingAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.increasingAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  increasingAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'IncreasingAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.returningAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  returningAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReturningAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.expensesAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expensesAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpensesAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.euRevenuesAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euRevenuesAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EURevenuesAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.euExpensesAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euExpensesAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EUExpensesAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.foreignRevenueAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignRevenueAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ForeignRevenueAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.foreignExpensAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignExpensAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ForeignExpensAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.exemptIncomeAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptIncomeAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExemptIncomeAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.priceDifferenceAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceDifferenceAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PriceDifferenceAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.warehouseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WarehouseCode', 'Edm.String', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.inStock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inStock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InStock', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.committed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  committed: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Committed', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.ordered} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ordered: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Ordered', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.countedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CountedQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.wasCounted} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wasCounted: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WasCounted', BoYesNoEnum, true);
  /**
   * Representation of the {@link ItemWarehouseInfo.userSignature} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userSignature: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserSignature', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.counted} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counted: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Counted', 'Edm.Double', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.expenseClearingAct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseClearingAct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpenseClearingAct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.purchaseCreditAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseCreditAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchaseCreditAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.euPurchaseCreditAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  euPurchaseCreditAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EUPurchaseCreditAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.foreignPurchaseCreditAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignPurchaseCreditAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ForeignPurchaseCreditAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.salesCreditAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesCreditAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.salesCreditEuAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditEuAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesCreditEUAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.exemptedCredits} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exemptedCredits: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExemptedCredits',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.salesCreditForeignAcc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesCreditForeignAcc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SalesCreditForeignAcc',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.expenseOffsettingAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseOffsettingAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpenseOffsettingAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.wipAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WipAccount', 'Edm.String', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.exchangeRateDifferencesAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exchangeRateDifferencesAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExchangeRateDifferencesAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.goodsClearingAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsClearingAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GoodsClearingAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.negativeInventoryAdjustmentAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  negativeInventoryAdjustmentAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NegativeInventoryAdjustmentAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.costInflationOffsetAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costInflationOffsetAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CostInflationOffsetAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.glDecreaseAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glDecreaseAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GLDecreaseAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.glIncreaseAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  glIncreaseAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'GLIncreaseAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.paReturnAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paReturnAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PAReturnAcct', 'Edm.String', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.purchaseAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PurchaseAcct', 'Edm.String', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.purchaseOffsetAcct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseOffsetAcct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchaseOffsetAcct',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.shippedGoodsAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shippedGoodsAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShippedGoodsAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.stockInflationOffsetAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInflationOffsetAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StockInflationOffsetAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.stockInflationAdjustAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInflationAdjustAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StockInflationAdjustAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.vatInRevenueAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatInRevenueAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'VATInRevenueAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.wipVarianceAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipVarianceAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WipVarianceAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.costInflationAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costInflationAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CostInflationAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.whIncomingCenvatAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  whIncomingCenvatAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WHIncomingCenvatAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.whOutgoingCenvatAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  whOutgoingCenvatAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WHOutgoingCenvatAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.stockInTransitAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockInTransitAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StockInTransitAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.wipOffsetProfitAndLossAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wipOffsetProfitAndLossAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'WipOffsetProfitAndLossAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.inventoryOffsetProfitAndLossAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetProfitAndLossAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'InventoryOffsetProfitAndLossAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.defaultBin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DefaultBin', 'Edm.Int32', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.defaultBinEnforced} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultBinEnforced: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DefaultBinEnforced',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.purchaseBalanceAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchaseBalanceAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PurchaseBalanceAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.indEscala} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  indEscala: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IndEscala', BoYesNoEnum, true);
  /**
   * Representation of the {@link ItemWarehouseInfo.cnjpMan} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cnjpMan: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CNJPMan', 'Edm.String', true);
  /**
   * Representation of the {@link ItemWarehouseInfo.uZentrallager} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uZentrallager: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_Zentrallager',
    'Edm.String',
    false
  );
  /**
   * Representation of the {@link ItemWarehouseInfo.itemCycleCounts} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCycleCounts: CollectionField<
    EntityT,
    DeSerializersT,
    ItemCycleCount,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ItemCycleCounts',
    ItemCycleCount,
    true
  );

  /**
   * Creates an instance of ItemWarehouseInfoField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ItemWarehouseInfo, fieldOptions);
  }
}

export namespace ItemWarehouseInfo {
  /**
   * Metadata information on all properties of the `ItemWarehouseInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemWarehouseInfo>[] = [
    {
      originalName: 'MinimalStock',
      name: 'minimalStock',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MaximalStock',
      name: 'maximalStock',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MinimalOrder',
      name: 'minimalOrder',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'StandardAveragePrice',
      name: 'standardAveragePrice',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Locked',
      name: 'locked',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'InventoryAccount',
      name: 'inventoryAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostAccount',
      name: 'costAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TransferAccount',
      name: 'transferAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RevenuesAccount',
      name: 'revenuesAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VarienceAccount',
      name: 'varienceAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DecreasingAccount',
      name: 'decreasingAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IncreasingAccount',
      name: 'increasingAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReturningAccount',
      name: 'returningAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpensesAccount',
      name: 'expensesAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EURevenuesAccount',
      name: 'euRevenuesAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EUExpensesAccount',
      name: 'euExpensesAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ForeignRevenueAcc',
      name: 'foreignRevenueAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ForeignExpensAcc',
      name: 'foreignExpensAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExemptIncomeAcc',
      name: 'exemptIncomeAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PriceDifferenceAcc',
      name: 'priceDifferenceAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WarehouseCode',
      name: 'warehouseCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InStock',
      name: 'inStock',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Committed',
      name: 'committed',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Ordered',
      name: 'ordered',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CountedQuantity',
      name: 'countedQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WasCounted',
      name: 'wasCounted',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'UserSignature',
      name: 'userSignature',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Counted',
      name: 'counted',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ExpenseClearingAct',
      name: 'expenseClearingAct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseCreditAcc',
      name: 'purchaseCreditAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EUPurchaseCreditAcc',
      name: 'euPurchaseCreditAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ForeignPurchaseCreditAcc',
      name: 'foreignPurchaseCreditAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesCreditAcc',
      name: 'salesCreditAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesCreditEUAcc',
      name: 'salesCreditEuAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExemptedCredits',
      name: 'exemptedCredits',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SalesCreditForeignAcc',
      name: 'salesCreditForeignAcc',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExpenseOffsettingAccount',
      name: 'expenseOffsettingAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WipAccount',
      name: 'wipAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExchangeRateDifferencesAcct',
      name: 'exchangeRateDifferencesAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GoodsClearingAcct',
      name: 'goodsClearingAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NegativeInventoryAdjustmentAccount',
      name: 'negativeInventoryAdjustmentAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostInflationOffsetAccount',
      name: 'costInflationOffsetAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GLDecreaseAcct',
      name: 'glDecreaseAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'GLIncreaseAcct',
      name: 'glIncreaseAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PAReturnAcct',
      name: 'paReturnAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseAcct',
      name: 'purchaseAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PurchaseOffsetAcct',
      name: 'purchaseOffsetAcct',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShippedGoodsAccount',
      name: 'shippedGoodsAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StockInflationOffsetAccount',
      name: 'stockInflationOffsetAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StockInflationAdjustAccount',
      name: 'stockInflationAdjustAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VATInRevenueAccount',
      name: 'vatInRevenueAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WipVarianceAccount',
      name: 'wipVarianceAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostInflationAccount',
      name: 'costInflationAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WHIncomingCenvatAccount',
      name: 'whIncomingCenvatAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WHOutgoingCenvatAccount',
      name: 'whOutgoingCenvatAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StockInTransitAccount',
      name: 'stockInTransitAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WipOffsetProfitAndLossAccount',
      name: 'wipOffsetProfitAndLossAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'InventoryOffsetProfitAndLossAccount',
      name: 'inventoryOffsetProfitAndLossAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DefaultBin',
      name: 'defaultBin',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DefaultBinEnforced',
      name: 'defaultBinEnforced',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PurchaseBalanceAccount',
      name: 'purchaseBalanceAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IndEscala',
      name: 'indEscala',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CNJPMan',
      name: 'cnjpMan',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'U_Zentrallager',
      name: 'uZentrallager',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ItemCycleCounts',
      name: 'itemCycleCounts',
      type: ItemCycleCount,
      isCollection: true
    }
  ];
}
