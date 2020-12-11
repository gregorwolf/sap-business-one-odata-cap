/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemGroupsRequestBuilder } from './ItemGroupsRequestBuilder';
import { ItemGroupsWarehouseInfo } from './ItemGroupsWarehouseInfo';
import { BoProcurementMethod } from './BoProcurementMethod';
import { BoMrpComponentWarehouse } from './BoMrpComponentWarehouse';
import { BoInventorySystem } from './BoInventorySystem';
import { BoPlanningSystem } from './BoPlanningSystem';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ItemClassEnum } from './ItemClassEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ItemGroups" of service "SAPB1".
 */
export class ItemGroups extends EntityV4 implements ItemGroupsType {
  /**
   * Technical entity name for ItemGroups.
   */
  static _entityName = 'ItemGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Price Differences Account.
   * @nullable
   */
  priceDifferencesAccount?: string;
  /**
   * Stock Inflation Adjust Account.
   * @nullable
   */
  stockInflationAdjustAccount?: string;
  /**
   * Minimum Order Quantity.
   * @nullable
   */
  minimumOrderQuantity?: number;
  /**
   * Order Interval.
   * @nullable
   */
  orderInterval?: number;
  /**
   * Exchange Rate Differences Account.
   * @nullable
   */
  exchangeRateDifferencesAccount?: string;
  /**
   * Increasing Account.
   * @nullable
   */
  increasingAccount?: string;
  /**
   * Stock Inflation Offset Account.
   * @nullable
   */
  stockInflationOffsetAccount?: string;
  /**
   * Procurement Method.
   * @nullable
   */
  procurementMethod?: BoProcurementMethod;
  /**
   * Component Warehouse.
   * @nullable
   */
  componentWarehouse?: BoMrpComponentWarehouse;
  /**
   * Purchase Offset Account.
   * @nullable
   */
  purchaseOffsetAccount?: string;
  /**
   * Inventory System.
   * @nullable
   */
  inventorySystem?: BoInventorySystem;
  /**
   * Wip Material Variance Account.
   * @nullable
   */
  wipMaterialVarianceAccount?: string;
  /**
   * Planning System.
   * @nullable
   */
  planningSystem?: BoPlanningSystem;
  /**
   * Purchase Account.
   * @nullable
   */
  purchaseAccount?: string;
  /**
   * Returning Account.
   * @nullable
   */
  returningAccount?: string;
  /**
   * Cost Inflation Account.
   * @nullable
   */
  costInflationAccount?: string;
  /**
   * Expenses Account.
   * @nullable
   */
  expensesAccount?: string;
  /**
   * Revenues Account.
   * @nullable
   */
  revenuesAccount?: string;
  /**
   * Transfers Account.
   * @nullable
   */
  transfersAccount?: string;
  /**
   * Lead Time.
   * @nullable
   */
  leadTime?: number;
  /**
   * Order Multiple.
   * @nullable
   */
  orderMultiple?: number;
  /**
   * Cost Inflation Offset Account.
   * @nullable
   */
  costInflationOffsetAccount?: string;
  /**
   * Inventory Account.
   * @nullable
   */
  inventoryAccount?: string;
  /**
   * Decrease Gl Account.
   * @nullable
   */
  decreaseGlAccount?: string;
  /**
   * Number.
   * @nullable
   */
  number?: number;
  /**
   * Goods Clearing Account.
   * @nullable
   */
  goodsClearingAccount?: string;
  /**
   * Increase Gl Account.
   * @nullable
   */
  increaseGlAccount?: string;
  /**
   * Foreign Revenues Account.
   * @nullable
   */
  foreignRevenuesAccount?: string;
  /**
   * Alert.
   * @nullable
   */
  alert?: BoYesNoEnum;
  /**
   * Wip Material Account.
   * @nullable
   */
  wipMaterialAccount?: string;
  /**
   * Shipped Goods Account.
   * @nullable
   */
  shippedGoodsAccount?: string;
  /**
   * Exempt Revenues Account.
   * @nullable
   */
  exemptRevenuesAccount?: string;
  /**
   * Decreasing Account.
   * @nullable
   */
  decreasingAccount?: string;
  /**
   * Vat In Revenue Account.
   * @nullable
   */
  vatInRevenueAccount?: string;
  /**
   * Variance Account.
   * @nullable
   */
  varianceAccount?: string;
  /**
   * Eu Expenses Account.
   * @nullable
   */
  euExpensesAccount?: string;
  /**
   * Foreign Expenses Account.
   * @nullable
   */
  foreignExpensesAccount?: string;
  /**
   * Cycle Code.
   * @nullable
   */
  cycleCode?: number;
  /**
   * Cost Account.
   * @nullable
   */
  costAccount?: string;
  /**
   * Eu Revenues Account.
   * @nullable
   */
  euRevenuesAccount?: string;
  /**
   * Pa Return Account.
   * @nullable
   */
  paReturnAccount?: string;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: string;
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
   * Expense Offset Account.
   * @nullable
   */
  expenseOffsetAccount?: string;
  /**
   * Negative Inventory Adjustment Account.
   * @nullable
   */
  negativeInventoryAdjustmentAccount?: string;
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
   * Tolerance Days.
   * @nullable
   */
  toleranceDays?: number;
  /**
   * Default Uo M Group.
   * @nullable
   */
  defaultUoMGroup?: number;
  /**
   * Default Inventory Uo M.
   * @nullable
   */
  defaultInventoryUoM?: number;
  /**
   * Purchase Balance Account.
   * @nullable
   */
  purchaseBalanceAccount?: string;
  /**
   * Item Class.
   * @nullable
   */
  itemClass?: ItemClassEnum;
  /**
   * Item Groups Warehouse Infos.
   * @nullable
   */
  itemGroupsWarehouseInfos?: ItemGroupsWarehouseInfo[];
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[InventoryCycles]] entity.
   */
  inventoryCycles!: InventoryCycles;
  /**
   * One-to-one navigation property to the [[UnitOfMeasurementGroups]] entity.
   */
  unitOfMeasurementGroup!: UnitOfMeasurementGroups;
  /**
   * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
   */
  unitOfMeasurement!: UnitOfMeasurements;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];
  /**
   * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules[];
  /**
   * One-to-many navigation property to the [[BinLocations]] entity.
   */
  binLocations!: BinLocations[];
  /**
   * One-to-many navigation property to the [[ServiceCalls]] entity.
   */
  serviceCalls!: ServiceCalls[];

  /**
   * Returns an entity builder to construct instances of `ItemGroups`.
   * @returns A builder that constructs instances of entity type `ItemGroups`.
   */
  static builder(): EntityBuilderType<ItemGroups, ItemGroupsType> {
    return EntityV4.entityBuilder(ItemGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ItemGroups` entity type.
   * @returns A `ItemGroups` request builder.
   */
  static requestBuilder(): ItemGroupsRequestBuilder {
    return new ItemGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ItemGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ItemGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<ItemGroups> {
    return EntityV4.customFieldSelector(fieldName, ItemGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { InventoryCycles, InventoryCyclesType } from './InventoryCycles';
import { UnitOfMeasurementGroups, UnitOfMeasurementGroupsType } from './UnitOfMeasurementGroups';
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';
import { Items, ItemsType } from './Items';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { BinLocations, BinLocationsType } from './BinLocations';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';

export interface ItemGroupsType {
  priceDifferencesAccount?: string | null;
  stockInflationAdjustAccount?: string | null;
  minimumOrderQuantity?: number | null;
  orderInterval?: number | null;
  exchangeRateDifferencesAccount?: string | null;
  increasingAccount?: string | null;
  stockInflationOffsetAccount?: string | null;
  procurementMethod?: BoProcurementMethod | null;
  componentWarehouse?: BoMrpComponentWarehouse | null;
  purchaseOffsetAccount?: string | null;
  inventorySystem?: BoInventorySystem | null;
  wipMaterialVarianceAccount?: string | null;
  planningSystem?: BoPlanningSystem | null;
  purchaseAccount?: string | null;
  returningAccount?: string | null;
  costInflationAccount?: string | null;
  expensesAccount?: string | null;
  revenuesAccount?: string | null;
  transfersAccount?: string | null;
  leadTime?: number | null;
  orderMultiple?: number | null;
  costInflationOffsetAccount?: string | null;
  inventoryAccount?: string | null;
  decreaseGlAccount?: string | null;
  number?: number | null;
  goodsClearingAccount?: string | null;
  increaseGlAccount?: string | null;
  foreignRevenuesAccount?: string | null;
  alert?: BoYesNoEnum | null;
  wipMaterialAccount?: string | null;
  shippedGoodsAccount?: string | null;
  exemptRevenuesAccount?: string | null;
  decreasingAccount?: string | null;
  vatInRevenueAccount?: string | null;
  varianceAccount?: string | null;
  euExpensesAccount?: string | null;
  foreignExpensesAccount?: string | null;
  cycleCode?: number | null;
  costAccount?: string | null;
  euRevenuesAccount?: string | null;
  paReturnAccount?: string | null;
  groupName?: string | null;
  expenseClearingAct?: string | null;
  purchaseCreditAcc?: string | null;
  euPurchaseCreditAcc?: string | null;
  foreignPurchaseCreditAcc?: string | null;
  salesCreditAcc?: string | null;
  salesCreditEuAcc?: string | null;
  exemptedCredits?: string | null;
  salesCreditForeignAcc?: string | null;
  expenseOffsetAccount?: string | null;
  negativeInventoryAdjustmentAccount?: string | null;
  whIncomingCenvatAccount?: string | null;
  whOutgoingCenvatAccount?: string | null;
  stockInTransitAccount?: string | null;
  wipOffsetProfitAndLossAccount?: string | null;
  inventoryOffsetProfitAndLossAccount?: string | null;
  toleranceDays?: number | null;
  defaultUoMGroup?: number | null;
  defaultInventoryUoM?: number | null;
  purchaseBalanceAccount?: string | null;
  itemClass?: ItemClassEnum | null;
  itemGroupsWarehouseInfos?: ItemGroupsWarehouseInfo[] | null;
  chartOfAccount: ChartOfAccountsType;
  inventoryCycles: InventoryCyclesType;
  unitOfMeasurementGroup: UnitOfMeasurementGroupsType;
  unitOfMeasurement: UnitOfMeasurementsType;
  items: ItemsType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
  binLocations: BinLocationsType[];
  serviceCalls: ServiceCallsType[];
}

export namespace ItemGroups {
  /**
   * Static representation of the [[priceDifferencesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_DIFFERENCES_ACCOUNT: StringField<ItemGroups> = new StringField('PriceDifferencesAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[stockInflationAdjustAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_INFLATION_ADJUST_ACCOUNT: StringField<ItemGroups> = new StringField('StockInflationAdjustAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[minimumOrderQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_ORDER_QUANTITY: NumberField<ItemGroups> = new NumberField('MinimumOrderQuantity', ItemGroups, 'Edm.Double');
  /**
   * Static representation of the [[orderInterval]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_INTERVAL: NumberField<ItemGroups> = new NumberField('OrderInterval', ItemGroups, 'Edm.Int32');
  /**
   * Static representation of the [[exchangeRateDifferencesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCHANGE_RATE_DIFFERENCES_ACCOUNT: StringField<ItemGroups> = new StringField('ExchangeRateDifferencesAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[increasingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCREASING_ACCOUNT: StringField<ItemGroups> = new StringField('IncreasingAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[stockInflationOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_INFLATION_OFFSET_ACCOUNT: StringField<ItemGroups> = new StringField('StockInflationOffsetAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[procurementMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCUREMENT_METHOD: EnumField<ItemGroups> = new EnumField('ProcurementMethod', ItemGroups);
  /**
   * Static representation of the [[componentWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPONENT_WAREHOUSE: EnumField<ItemGroups> = new EnumField('ComponentWarehouse', ItemGroups);
  /**
   * Static representation of the [[purchaseOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_OFFSET_ACCOUNT: StringField<ItemGroups> = new StringField('PurchaseOffsetAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[inventorySystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_SYSTEM: EnumField<ItemGroups> = new EnumField('InventorySystem', ItemGroups);
  /**
   * Static representation of the [[wipMaterialVarianceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIP_MATERIAL_VARIANCE_ACCOUNT: StringField<ItemGroups> = new StringField('WIPMaterialVarianceAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[planningSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNING_SYSTEM: EnumField<ItemGroups> = new EnumField('PlanningSystem', ItemGroups);
  /**
   * Static representation of the [[purchaseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ACCOUNT: StringField<ItemGroups> = new StringField('PurchaseAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[returningAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNING_ACCOUNT: StringField<ItemGroups> = new StringField('ReturningAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[costInflationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_INFLATION_ACCOUNT: StringField<ItemGroups> = new StringField('CostInflationAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[expensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSES_ACCOUNT: StringField<ItemGroups> = new StringField('ExpensesAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[revenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVENUES_ACCOUNT: StringField<ItemGroups> = new StringField('RevenuesAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[transfersAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSFERS_ACCOUNT: StringField<ItemGroups> = new StringField('TransfersAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[leadTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEAD_TIME: NumberField<ItemGroups> = new NumberField('LeadTime', ItemGroups, 'Edm.Int32');
  /**
   * Static representation of the [[orderMultiple]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_MULTIPLE: NumberField<ItemGroups> = new NumberField('OrderMultiple', ItemGroups, 'Edm.Double');
  /**
   * Static representation of the [[costInflationOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_INFLATION_OFFSET_ACCOUNT: StringField<ItemGroups> = new StringField('CostInflationOffsetAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[inventoryAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_ACCOUNT: StringField<ItemGroups> = new StringField('InventoryAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[decreaseGlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECREASE_GL_ACCOUNT: StringField<ItemGroups> = new StringField('DecreaseGLAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[number]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER: NumberField<ItemGroups> = new NumberField('Number', ItemGroups, 'Edm.Int32');
  /**
   * Static representation of the [[goodsClearingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_CLEARING_ACCOUNT: StringField<ItemGroups> = new StringField('GoodsClearingAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[increaseGlAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCREASE_GL_ACCOUNT: StringField<ItemGroups> = new StringField('IncreaseGLAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[foreignRevenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_REVENUES_ACCOUNT: StringField<ItemGroups> = new StringField('ForeignRevenuesAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[alert]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT: EnumField<ItemGroups> = new EnumField('Alert', ItemGroups);
  /**
   * Static representation of the [[wipMaterialAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIP_MATERIAL_ACCOUNT: StringField<ItemGroups> = new StringField('WIPMaterialAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[shippedGoodsAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPED_GOODS_ACCOUNT: StringField<ItemGroups> = new StringField('ShippedGoodsAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[exemptRevenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPT_REVENUES_ACCOUNT: StringField<ItemGroups> = new StringField('ExemptRevenuesAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[decreasingAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECREASING_ACCOUNT: StringField<ItemGroups> = new StringField('DecreasingAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[vatInRevenueAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_IN_REVENUE_ACCOUNT: StringField<ItemGroups> = new StringField('VATInRevenueAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[varianceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VARIANCE_ACCOUNT: StringField<ItemGroups> = new StringField('VarianceAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[euExpensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EU_EXPENSES_ACCOUNT: StringField<ItemGroups> = new StringField('EUExpensesAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[foreignExpensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_EXPENSES_ACCOUNT: StringField<ItemGroups> = new StringField('ForeignExpensesAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[cycleCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CYCLE_CODE: NumberField<ItemGroups> = new NumberField('CycleCode', ItemGroups, 'Edm.Int32');
  /**
   * Static representation of the [[costAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_ACCOUNT: StringField<ItemGroups> = new StringField('CostAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[euRevenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EU_REVENUES_ACCOUNT: StringField<ItemGroups> = new StringField('EURevenuesAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[paReturnAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PA_RETURN_ACCOUNT: StringField<ItemGroups> = new StringField('PAReturnAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[groupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_NAME: StringField<ItemGroups> = new StringField('GroupName', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[expenseClearingAct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_CLEARING_ACT: StringField<ItemGroups> = new StringField('ExpenseClearingAct', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[purchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_CREDIT_ACC: StringField<ItemGroups> = new StringField('PurchaseCreditAcc', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[euPurchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EU_PURCHASE_CREDIT_ACC: StringField<ItemGroups> = new StringField('EUPurchaseCreditAcc', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[foreignPurchaseCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_PURCHASE_CREDIT_ACC: StringField<ItemGroups> = new StringField('ForeignPurchaseCreditAcc', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[salesCreditAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CREDIT_ACC: StringField<ItemGroups> = new StringField('SalesCreditAcc', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[salesCreditEuAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CREDIT_EU_ACC: StringField<ItemGroups> = new StringField('SalesCreditEUAcc', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[exemptedCredits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTED_CREDITS: StringField<ItemGroups> = new StringField('ExemptedCredits', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[salesCreditForeignAcc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_CREDIT_FOREIGN_ACC: StringField<ItemGroups> = new StringField('SalesCreditForeignAcc', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[expenseOffsetAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPENSE_OFFSET_ACCOUNT: StringField<ItemGroups> = new StringField('ExpenseOffsetAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[negativeInventoryAdjustmentAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: StringField<ItemGroups> = new StringField('NegativeInventoryAdjustmentAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[whIncomingCenvatAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WH_INCOMING_CENVAT_ACCOUNT: StringField<ItemGroups> = new StringField('WHIncomingCenvatAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[whOutgoingCenvatAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WH_OUTGOING_CENVAT_ACCOUNT: StringField<ItemGroups> = new StringField('WHOutgoingCenvatAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[stockInTransitAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_IN_TRANSIT_ACCOUNT: StringField<ItemGroups> = new StringField('StockInTransitAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[wipOffsetProfitAndLossAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<ItemGroups> = new StringField('WipOffsetProfitAndLossAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[inventoryOffsetProfitAndLossAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT: StringField<ItemGroups> = new StringField('InventoryOffsetProfitAndLossAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[toleranceDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOLERANCE_DAYS: NumberField<ItemGroups> = new NumberField('ToleranceDays', ItemGroups, 'Edm.Int32');
  /**
   * Static representation of the [[defaultUoMGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_UO_M_GROUP: NumberField<ItemGroups> = new NumberField('DefaultUoMGroup', ItemGroups, 'Edm.Int32');
  /**
   * Static representation of the [[defaultInventoryUoM]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_INVENTORY_UO_M: NumberField<ItemGroups> = new NumberField('DefaultInventoryUoM', ItemGroups, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseBalanceAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_BALANCE_ACCOUNT: StringField<ItemGroups> = new StringField('PurchaseBalanceAccount', ItemGroups, 'Edm.String');
  /**
   * Static representation of the [[itemClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CLASS: EnumField<ItemGroups> = new EnumField('ItemClass', ItemGroups);
  /**
   * Static representation of the [[itemGroupsWarehouseInfos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUPS_WAREHOUSE_INFOS: CollectionField<ItemGroups, ItemGroupsWarehouseInfo> = new CollectionField('ItemGroupsWarehouseInfos', ItemGroups, ItemGroupsWarehouseInfo);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<ItemGroups, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', ItemGroups, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[inventoryCycles]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_CYCLES: OneToOneLink<ItemGroups, InventoryCycles> = new OneToOneLink('InventoryCycles', ItemGroups, InventoryCycles);
  /**
   * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<ItemGroups, UnitOfMeasurementGroups> = new OneToOneLink('UnitOfMeasurementGroup', ItemGroups, UnitOfMeasurementGroups);
  /**
   * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASUREMENT: OneToOneLink<ItemGroups, UnitOfMeasurements> = new OneToOneLink('UnitOfMeasurement', ItemGroups, UnitOfMeasurements);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<ItemGroups, Items> = new OneToManyLink('Items', ItemGroups, Items);
  /**
   * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<ItemGroups, GlAccountAdvancedRules> = new OneToManyLink('GLAccountAdvancedRules', ItemGroups, GlAccountAdvancedRules);
  /**
   * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIN_LOCATIONS: OneToManyLink<ItemGroups, BinLocations> = new OneToManyLink('BinLocations', ItemGroups, BinLocations);
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<ItemGroups, ServiceCalls> = new OneToManyLink('ServiceCalls', ItemGroups, ServiceCalls);
  /**
   * All fields of the ItemGroups entity.
   */
  export const _allFields: Array<StringField<ItemGroups> | NumberField<ItemGroups> | EnumField<ItemGroups> | CollectionField<ItemGroups, ItemGroupsWarehouseInfo> | OneToOneLink<ItemGroups, ChartOfAccounts> | OneToOneLink<ItemGroups, InventoryCycles> | OneToOneLink<ItemGroups, UnitOfMeasurementGroups> | OneToOneLink<ItemGroups, UnitOfMeasurements> | OneToManyLink<ItemGroups, Items> | OneToManyLink<ItemGroups, GlAccountAdvancedRules> | OneToManyLink<ItemGroups, BinLocations> | OneToManyLink<ItemGroups, ServiceCalls>> = [
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
  export const ALL_FIELDS: AllFields<ItemGroups> = new AllFields('*', ItemGroups);
  /**
   * All key fields of the ItemGroups entity.
   */
  export const _keyFields: Array<Field<ItemGroups>> = [ItemGroups.NUMBER];
  /**
   * Mapping of all key field names to the respective static field property ItemGroups.
   */
  export const _keys: { [keys: string]: Field<ItemGroups> } = ItemGroups._keyFields.reduce((acc: { [keys: string]: Field<ItemGroups> }, field: Field<ItemGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
