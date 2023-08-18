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
import type { WarehousesApi } from './WarehousesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoDocWhsAutoIssueMethod } from './BoDocWhsAutoIssueMethod';
import { ReceivingBinLocationsMethodEnum } from './ReceivingBinLocationsMethodEnum';
import { AutoAllocOnReceiptMethodEnum } from './AutoAllocOnReceiptMethodEnum';
import { ReceivingUpToMethodEnum } from './ReceivingUpToMethodEnum';
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { StockTransfers, StockTransfersType } from './StockTransfers';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { Countries, CountriesType } from './Countries';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { BinLocations, BinLocationsType } from './BinLocations';
import {
  GlAccountAdvancedRules,
  GlAccountAdvancedRulesType
} from './GlAccountAdvancedRules';
import {
  InventoryTransferRequests,
  InventoryTransferRequestsType
} from './InventoryTransferRequests';
import {
  ResourceCapacities,
  ResourceCapacitiesType
} from './ResourceCapacities';
import {
  StockTransferDrafts,
  StockTransferDraftsType
} from './StockTransferDrafts';
import { ProductionOrders, ProductionOrdersType } from './ProductionOrders';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { StockTakings, StockTakingsType } from './StockTakings';

/**
 * This class represents the entity "Warehouses" of service "SAPB1".
 */
export class Warehouses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarehousesType<T>
{
  /**
   * Technical entity name for Warehouses.
   */
  static _entityName = 'Warehouses';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Warehouses entity
   */
  static _keys = ['WarehouseCode'];
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Inflation Offset Account.
   * @nullable
   */
  stockInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decreasing Account.
   * @nullable
   */
  decreasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Account.
   * @nullable
   */
  purchaseAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Revenues Account.
   * @nullable
   */
  euRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Returning Account.
   * @nullable
   */
  returningAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipped Goods Account.
   * @nullable
   */
  shippedGoodsAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Inflation Adjust Account.
   * @nullable
   */
  stockInflationAdjustAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Use Tax.
   * @nullable
   */
  allowUseTax?: BoYesNoEnum | null;
  /**
   * Cost Inflation Account.
   * @nullable
   */
  costInflationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Expenses Account.
   * @nullable
   */
  foreignExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eu Expenses Account.
   * @nullable
   */
  euExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Inflation Offset Account.
   * @nullable
   */
  costInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expenses Clearing Account.
   * @nullable
   */
  expensesClearingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Returning Account.
   * @nullable
   */
  purchaseReturningAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat In Revenue Account.
   * @nullable
   */
  vatInRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Federal Tax Id.
   * @nullable
   */
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Account.
   * @nullable
   */
  expenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decrease Gl Account.
   * @nullable
   */
  decreaseGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revenues Account.
   * @nullable
   */
  revenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt Revenues Account.
   * @nullable
   */
  exemptRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Offset Account.
   * @nullable
   */
  purchaseOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Of Goods Sold.
   * @nullable
   */
  costOfGoodsSold?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Code.
   */
  warehouseCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Differences Account.
   * @nullable
   */
  priceDifferencesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variance Account.
   * @nullable
   */
  varianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Increase Gl Account.
   * @nullable
   */
  increaseGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Differences Account.
   * @nullable
   */
  exchangeRateDifferencesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wip Material Account.
   * @nullable
   */
  wipMaterialAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Name.
   * @nullable
   */
  warehouseName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drop Ship.
   * @nullable
   */
  dropShip?: BoYesNoEnum | null;
  /**
   * Wip Material Variance Account.
   * @nullable
   */
  wipMaterialVarianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfers Acc.
   * @nullable
   */
  transfersAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal Key.
   * @nullable
   */
  internalKey?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Foreign Revenues Acc.
   * @nullable
   */
  foreignRevenuesAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building Floor Room.
   * @nullable
   */
  buildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nettable.
   * @nullable
   */
  nettable?: BoYesNoEnum | null;
  /**
   * Increasing Acc.
   * @nullable
   */
  increasingAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Offseting Act.
   * @nullable
   */
  expenseOffsetingAct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods Clearing Acc.
   * @nullable
   */
  goodsClearingAcc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Account.
   * @nullable
   */
  stockAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Place Id.
   * @nullable
   */
  businessPlaceId?: DeserializedType<T, 'Edm.Int32'> | null;
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
   * Negative Inventory Adjustment Account.
   * @nullable
   */
  negativeInventoryAdjustmentAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wh Ship To Name.
   * @nullable
   */
  whShipToName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excisable.
   * @nullable
   */
  excisable?: BoYesNoEnum | null;
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
   * Address Type.
   * @nullable
   */
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street No.
   * @nullable
   */
  streetNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storekeeper.
   * @nullable
   */
  storekeeper?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Shipper.
   * @nullable
   */
  shipper?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manage Serial And Batch Numbers.
   * @nullable
   */
  manageSerialAndBatchNumbers?: BoYesNoEnum | null;
  /**
   * Global Location Number.
   * @nullable
   */
  globalLocationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enable Bin Locations.
   * @nullable
   */
  enableBinLocations?: BoYesNoEnum | null;
  /**
   * Bin Loc Code Separator.
   * @nullable
   */
  binLocCodeSeparator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Bin.
   * @nullable
   */
  defaultBin?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Bin Enforced.
   * @nullable
   */
  defaultBinEnforced?: BoYesNoEnum | null;
  /**
   * Auto Alloc On Issue.
   * @nullable
   */
  autoAllocOnIssue?: BoDocWhsAutoIssueMethod | null;
  /**
   * Enable Receiving Bin Locations.
   * @nullable
   */
  enableReceivingBinLocations?: BoYesNoEnum | null;
  /**
   * Receiving Bin Locations By.
   * @nullable
   */
  receivingBinLocationsBy?: ReceivingBinLocationsMethodEnum | null;
  /**
   * Purchase Balance Account.
   * @nullable
   */
  purchaseBalanceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Restrict Receipt To Empty Bin Location.
   * @nullable
   */
  restrictReceiptToEmptyBinLocation?: BoYesNoEnum | null;
  /**
   * Receive Up To Max Quantity.
   * @nullable
   */
  receiveUpToMaxQuantity?: BoYesNoEnum | null;
  /**
   * Auto Alloc On Receipt.
   * @nullable
   */
  autoAllocOnReceipt?: AutoAllocOnReceiptMethodEnum | null;
  /**
   * Receive Up To Max Weight.
   * @nullable
   */
  receiveUpToMaxWeight?: BoYesNoEnum | null;
  /**
   * Receive Up To Method.
   * @nullable
   */
  receiveUpToMethod?: ReceivingUpToMethodEnum | null;
  /**
   * Legal Text.
   * @nullable
   */
  legalText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Name 2.
   * @nullable
   */
  addressName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Name 3.
   * @nullable
   */
  addressName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link UserDefaultGroups} entity.
   */
  userDefaultGroups!: UserDefaultGroups<T>[];
  /**
   * One-to-many navigation property to the {@link StockTransfers} entity.
   */
  stockTransfers!: StockTransfers<T>[];
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesTaxCodes} entity.
   */
  salesTaxCode?: SalesTaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link BinLocations} entity.
   */
  binLocation?: BinLocations<T> | null;
  /**
   * One-to-many navigation property to the {@link BinLocations} entity.
   */
  binLocations!: BinLocations<T>[];
  /**
   * One-to-many navigation property to the {@link GlAccountAdvancedRules} entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link InventoryTransferRequests} entity.
   */
  inventoryTransferRequests!: InventoryTransferRequests<T>[];
  /**
   * One-to-many navigation property to the {@link ResourceCapacities} entity.
   */
  resourceCapacities!: ResourceCapacities<T>[];
  /**
   * One-to-many navigation property to the {@link StockTransferDrafts} entity.
   */
  stockTransferDrafts!: StockTransferDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link ProductionOrders} entity.
   */
  productionOrders!: ProductionOrders<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlaces!: BusinessPlaces<T>[];
  /**
   * One-to-many navigation property to the {@link StockTakings} entity.
   */
  stockTakings!: StockTakings<T>[];

  constructor(readonly _entityApi: WarehousesApi<T>) {
    super(_entityApi);
  }
}

export interface WarehousesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  street?: DeserializedType<T, 'Edm.String'> | null;
  stockInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  decreasingAccount?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAccount?: DeserializedType<T, 'Edm.String'> | null;
  euRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  returningAccount?: DeserializedType<T, 'Edm.String'> | null;
  shippedGoodsAccount?: DeserializedType<T, 'Edm.String'> | null;
  stockInflationAdjustAccount?: DeserializedType<T, 'Edm.String'> | null;
  allowUseTax?: BoYesNoEnum | null;
  costInflationAccount?: DeserializedType<T, 'Edm.String'> | null;
  foreignExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  euExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  costInflationOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  expensesClearingAccount?: DeserializedType<T, 'Edm.String'> | null;
  purchaseReturningAccount?: DeserializedType<T, 'Edm.String'> | null;
  vatInRevenueAccount?: DeserializedType<T, 'Edm.String'> | null;
  federalTaxId?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  block?: DeserializedType<T, 'Edm.String'> | null;
  expenseAccount?: DeserializedType<T, 'Edm.String'> | null;
  decreaseGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  revenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  exemptRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOffsetAccount?: DeserializedType<T, 'Edm.String'> | null;
  costOfGoodsSold?: DeserializedType<T, 'Edm.String'> | null;
  warehouseCode: DeserializedType<T, 'Edm.String'>;
  state?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  priceDifferencesAccount?: DeserializedType<T, 'Edm.String'> | null;
  varianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  increaseGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateDifferencesAccount?: DeserializedType<T, 'Edm.String'> | null;
  wipMaterialAccount?: DeserializedType<T, 'Edm.String'> | null;
  warehouseName?: DeserializedType<T, 'Edm.String'> | null;
  dropShip?: BoYesNoEnum | null;
  wipMaterialVarianceAccount?: DeserializedType<T, 'Edm.String'> | null;
  transfersAcc?: DeserializedType<T, 'Edm.String'> | null;
  internalKey?: DeserializedType<T, 'Edm.Int32'> | null;
  foreignRevenuesAcc?: DeserializedType<T, 'Edm.String'> | null;
  buildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  nettable?: BoYesNoEnum | null;
  increasingAcc?: DeserializedType<T, 'Edm.String'> | null;
  expenseOffsetingAct?: DeserializedType<T, 'Edm.String'> | null;
  goodsClearingAcc?: DeserializedType<T, 'Edm.String'> | null;
  stockAccount?: DeserializedType<T, 'Edm.String'> | null;
  businessPlaceId?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  euPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  foreignPurchaseCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditAcc?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditEuAcc?: DeserializedType<T, 'Edm.String'> | null;
  exemptedCredits?: DeserializedType<T, 'Edm.String'> | null;
  salesCreditForeignAcc?: DeserializedType<T, 'Edm.String'> | null;
  negativeInventoryAdjustmentAccount?: DeserializedType<T, 'Edm.String'> | null;
  whShipToName?: DeserializedType<T, 'Edm.String'> | null;
  excisable?: BoYesNoEnum | null;
  whIncomingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  whOutgoingCenvatAccount?: DeserializedType<T, 'Edm.String'> | null;
  stockInTransitAccount?: DeserializedType<T, 'Edm.String'> | null;
  wipOffsetProfitAndLossAccount?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOffsetProfitAndLossAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  streetNo?: DeserializedType<T, 'Edm.String'> | null;
  storekeeper?: DeserializedType<T, 'Edm.Int32'> | null;
  shipper?: DeserializedType<T, 'Edm.String'> | null;
  manageSerialAndBatchNumbers?: BoYesNoEnum | null;
  globalLocationNumber?: DeserializedType<T, 'Edm.String'> | null;
  enableBinLocations?: BoYesNoEnum | null;
  binLocCodeSeparator?: DeserializedType<T, 'Edm.String'> | null;
  defaultBin?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultBinEnforced?: BoYesNoEnum | null;
  autoAllocOnIssue?: BoDocWhsAutoIssueMethod | null;
  enableReceivingBinLocations?: BoYesNoEnum | null;
  receivingBinLocationsBy?: ReceivingBinLocationsMethodEnum | null;
  purchaseBalanceAccount?: DeserializedType<T, 'Edm.String'> | null;
  inactive?: BoYesNoEnum | null;
  restrictReceiptToEmptyBinLocation?: BoYesNoEnum | null;
  receiveUpToMaxQuantity?: BoYesNoEnum | null;
  autoAllocOnReceipt?: AutoAllocOnReceiptMethodEnum | null;
  receiveUpToMaxWeight?: BoYesNoEnum | null;
  receiveUpToMethod?: ReceivingUpToMethodEnum | null;
  legalText?: DeserializedType<T, 'Edm.String'> | null;
  addressName2?: DeserializedType<T, 'Edm.String'> | null;
  addressName3?: DeserializedType<T, 'Edm.String'> | null;
  userDefaultGroups: UserDefaultGroupsType<T>[];
  stockTransfers: StockTransfersType<T>[];
  chartOfAccount?: ChartOfAccountsType<T> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  salesTaxCode?: SalesTaxCodesType<T> | null;
  country2?: CountriesType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  binLocation?: BinLocationsType<T> | null;
  binLocations: BinLocationsType<T>[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType<T>[];
  inventoryTransferRequests: InventoryTransferRequestsType<T>[];
  resourceCapacities: ResourceCapacitiesType<T>[];
  stockTransferDrafts: StockTransferDraftsType<T>[];
  productionOrders: ProductionOrdersType<T>[];
  businessPlaces: BusinessPlacesType<T>[];
  stockTakings: StockTakingsType<T>[];
}
