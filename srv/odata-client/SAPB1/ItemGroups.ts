/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { ItemGroupsWarehouseInfo } from './ItemGroupsWarehouseInfo';
import type { ItemGroupsApi } from './ItemGroupsApi';
import { BoProcurementMethod } from './BoProcurementMethod';
import { BoMrpComponentWarehouse } from './BoMrpComponentWarehouse';
import { BoInventorySystem } from './BoInventorySystem';
import { BoPlanningSystem } from './BoPlanningSystem';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ItemClassEnum } from './ItemClassEnum';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { InventoryCycles, InventoryCyclesType } from './InventoryCycles';
import {
  UnitOfMeasurementGroups,
  UnitOfMeasurementGroupsType
} from './UnitOfMeasurementGroups';
import {
  UnitOfMeasurements,
  UnitOfMeasurementsType
} from './UnitOfMeasurements';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { Items, ItemsType } from './Items';
import { BinLocations, BinLocationsType } from './BinLocations';
import {
  GlAccountAdvancedRules,
  GlAccountAdvancedRulesType
} from './GlAccountAdvancedRules';

/**
 * This class represents the entity "ItemGroups" of service "SAPB1".
 */
export class ItemGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemGroupsType<T>
{
  /**
   * Technical entity name for ItemGroups.
   */
  static _entityName = 'ItemGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ItemGroups entity
   */
  static _keys = ['Number'];
  /**
   * Price Differences Account.
   * @nullable
   */
  priceDifferencesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Inflation Adjust Account.
   * @nullable
   */
  stockInflationAdjustAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Order Quantity.
   * @nullable
   */
  minimumOrderQuantity?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Order Interval.
   * @nullable
   */
  orderInterval?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Exchange Rate Differences Account.
   * @nullable
   */
  exchangeRateDifferencesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Increasing Account.
   * @nullable
   */
  increasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Inflation Offset Account.
   * @nullable
   */
  stockInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Method.
   * @nullable
   */
  procurementMethod?: BoProcurementMethod | null;
  /**
   * Component Warehouse.
   * @nullable
   */
  componentWarehouse?: BoMrpComponentWarehouse | null;
  /**
   * Purchase Offset Account.
   * @nullable
   */
  purchaseOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory System.
   * @nullable
   */
  inventorySystem?: BoInventorySystem | null;
  /**
   * Wip Material Variance Account.
   * @nullable
   */
  wipMaterialVarianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning System.
   * @nullable
   */
  planningSystem?: BoPlanningSystem | null;
  /**
   * Purchase Account.
   * @nullable
   */
  purchaseAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Returning Account.
   * @nullable
   */
  returningAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Inflation Account.
   * @nullable
   */
  costInflationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expenses Account.
   * @nullable
   */
  expensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenues Account.
   * @nullable
   */
  revenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfers Account.
   * @nullable
   */
  transfersAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lead Time.
   * @nullable
   */
  leadTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Order Multiple.
   * @nullable
   */
  orderMultiple?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cost Inflation Offset Account.
   * @nullable
   */
  costInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Account.
   * @nullable
   */
  inventoryAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decrease Gl Account.
   * @nullable
   */
  decreaseGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number.
   */
  number!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Goods Clearing Account.
   * @nullable
   */
  goodsClearingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Increase Gl Account.
   * @nullable
   */
  increaseGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Revenues Account.
   * @nullable
   */
  foreignRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alert.
   * @nullable
   */
  alert?: BoYesNoEnum | null;
  /**
   * Wip Material Account.
   * @nullable
   */
  wipMaterialAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipped Goods Account.
   * @nullable
   */
  shippedGoodsAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt Revenues Account.
   * @nullable
   */
  exemptRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decreasing Account.
   * @nullable
   */
  decreasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat In Revenue Account.
   * @nullable
   */
  vatInRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variance Account.
   * @nullable
   */
  varianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Expenses Account.
   * @nullable
   */
  euExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Expenses Account.
   * @nullable
   */
  foreignExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cycle Code.
   * @nullable
   */
  cycleCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cost Account.
   * @nullable
   */
  costAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Revenues Account.
   * @nullable
   */
  euRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pa Return Account.
   * @nullable
   */
  paReturnAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Clearing Act.
   * @nullable
   */
  expenseClearingAct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Credit Acc.
   * @nullable
   */
  purchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Purchase Credit Acc.
   * @nullable
   */
  euPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Purchase Credit Acc.
   * @nullable
   */
  foreignPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Credit Acc.
   * @nullable
   */
  salesCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Credit Eu Acc.
   * @nullable
   */
  salesCreditEuAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempted Credits.
   * @nullable
   */
  exemptedCredits?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Credit Foreign Acc.
   * @nullable
   */
  salesCreditForeignAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Offset Account.
   * @nullable
   */
  expenseOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Negative Inventory Adjustment Account.
   * @nullable
   */
  negativeInventoryAdjustmentAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wh Incoming Cenvat Account.
   * @nullable
   */
  whIncomingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wh Outgoing Cenvat Account.
   * @nullable
   */
  whOutgoingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock In Transit Account.
   * @nullable
   */
  stockInTransitAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wip Offset Profit And Loss Account.
   * @nullable
   */
  wipOffsetProfitAndLossAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Offset Profit And Loss Account.
   * @nullable
   */
  inventoryOffsetProfitAndLossAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tolerance Days.
   * @nullable
   */
  toleranceDays?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Uo M Group.
   * @nullable
   */
  defaultUoMGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Inventory Uo M.
   * @nullable
   */
  defaultInventoryUoM?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Balance Account.
   * @nullable
   */
  purchaseBalanceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Class.
   * @nullable
   */
  itemClass?: ItemClassEnum | null;
  /**
   * Raw Material.
   * @nullable
   */
  rawMaterial?: BoYesNoEnum | null;
  /**
   * U Bs Warengruppen.
   * @nullable
   */
  uBsWarengruppen?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Beschreibung.
   * @nullable
   */
  uBsBeschreibung?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Rabattgruppe S.
   * @nullable
   */
  uBsRabattgruppeS?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Lieferantennummer.
   * @nullable
   */
  uBsLieferantennummer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Dummyartikel.
   * @nullable
   */
  uBsDummyartikel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Groups Warehouse Infos.
   * @nullable
   */
  itemGroupsWarehouseInfos?: ItemGroupsWarehouseInfo<T>[] | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link InventoryCycles} entity.
   */
  inventoryCycles?: InventoryCycles<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitOfMeasurementGroups} entity.
   */
  unitOfMeasurementGroup?: UnitOfMeasurementGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitOfMeasurements} entity.
   */
  unitOfMeasurement?: UnitOfMeasurements<T> | null;
  /**
   * One-to-many navigation property to the {@link ServiceCalls} entity.
   */
  serviceCalls!: ServiceCalls<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link BinLocations} entity.
   */
  binLocations!: BinLocations<T>[];
  /**
   * One-to-many navigation property to the {@link GlAccountAdvancedRules} entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules<T>[];

  constructor(readonly _entityApi: ItemGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  priceDifferencesAccount?: DeserializedType<T, 'Edm.String'> | null;
  stockInflationAdjustAccount?: DeserializedType<T, 'Edm.String'> | null;
  minimumOrderQuantity?: DeserializedType<T, 'Edm.Double'> | null;
  orderInterval?: DeserializedType<T, 'Edm.Int32'> | null;
  exchangeRateDifferencesAccount?: DeserializedType<T, 'Edm.String'> | null;
  increasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  stockInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  procurementMethod?: BoProcurementMethod | null;
  componentWarehouse?: BoMrpComponentWarehouse | null;
  purchaseOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  inventorySystem?: BoInventorySystem | null;
  wipMaterialVarianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  planningSystem?: BoPlanningSystem | null;
  purchaseAccount?: DeserializedType<T, 'Edm.String'> | null;
  returningAccount?: DeserializedType<T, 'Edm.String'> | null;
  costInflationAccount?: DeserializedType<T, 'Edm.String'> | null;
  expensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  revenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  transfersAccount?: DeserializedType<T, 'Edm.String'> | null;
  leadTime?: DeserializedType<T, 'Edm.Int32'> | null;
  orderMultiple?: DeserializedType<T, 'Edm.Double'> | null;
  costInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  inventoryAccount?: DeserializedType<T, 'Edm.String'> | null;
  decreaseGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  number: DeserializedType<T, 'Edm.Int32'>;
  goodsClearingAccount?: DeserializedType<T, 'Edm.String'> | null;
  increaseGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  foreignRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  alert?: BoYesNoEnum | null;
  wipMaterialAccount?: DeserializedType<T, 'Edm.String'> | null;
  shippedGoodsAccount?: DeserializedType<T, 'Edm.String'> | null;
  exemptRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  decreasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  vatInRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  varianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  euExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  foreignExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  cycleCode?: DeserializedType<T, 'Edm.Int32'> | null;
  costAccount?: DeserializedType<T, 'Edm.String'> | null;
  euRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  paReturnAccount?: DeserializedType<T, 'Edm.String'> | null;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  expenseClearingAct?: DeserializedType<T, 'Edm.String'> | null;
  purchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  euPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  foreignPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditEuAcc?: DeserializedType<T, 'Edm.String'> | null;
  exemptedCredits?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditForeignAcc?: DeserializedType<T, 'Edm.String'> | null;
  expenseOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  negativeInventoryAdjustmentAccount?: DeserializedType<T, 'Edm.String'> | null;
  whIncomingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  whOutgoingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  stockInTransitAccount?: DeserializedType<T, 'Edm.String'> | null;
  wipOffsetProfitAndLossAccount?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOffsetProfitAndLossAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  toleranceDays?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultUoMGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultInventoryUoM?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseBalanceAccount?: DeserializedType<T, 'Edm.String'> | null;
  itemClass?: ItemClassEnum | null;
  rawMaterial?: BoYesNoEnum | null;
  uBsWarengruppen?: DeserializedType<T, 'Edm.String'> | null;
  uBsBeschreibung?: DeserializedType<T, 'Edm.String'> | null;
  uBsRabattgruppeS?: DeserializedType<T, 'Edm.String'> | null;
  uBsLieferantennummer?: DeserializedType<T, 'Edm.String'> | null;
  uBsDummyartikel?: DeserializedType<T, 'Edm.String'> | null;
  itemGroupsWarehouseInfos?: ItemGroupsWarehouseInfo<T>[] | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  inventoryCycles?: InventoryCyclesType<T> | null;
  unitOfMeasurementGroup?: UnitOfMeasurementGroupsType<T> | null;
  unitOfMeasurement?: UnitOfMeasurementsType<T> | null;
  serviceCalls: ServiceCallsType<T>[];
  items: ItemsType<T>[];
  binLocations: BinLocationsType<T>[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType<T>[];
}
