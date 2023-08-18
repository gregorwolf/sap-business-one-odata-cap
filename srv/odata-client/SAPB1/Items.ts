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
import { ItemPrice } from './ItemPrice';
import { ItemWarehouseInfo } from './ItemWarehouseInfo';
import { ItemPreferredVendor } from './ItemPreferredVendor';
import { ItemLocalizationInfo } from './ItemLocalizationInfo';
import { ItemProject } from './ItemProject';
import { ItemDistributionRule } from './ItemDistributionRule';
import { ItemAttributeGroups } from './ItemAttributeGroups';
import { ItemDepreciationParameter } from './ItemDepreciationParameter';
import { ItemPeriodControl } from './ItemPeriodControl';
import { ItemUnitOfMeasurement } from './ItemUnitOfMeasurement';
import { ItemBarCode } from './ItemBarCode';
import {
  ItemIntrastatExtension,
  ItemIntrastatExtensionField
} from './ItemIntrastatExtension';
import type { ItemsApi } from './ItemsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoItemTreeTypes } from './BoItemTreeTypes';
import { BoGlMethods } from './BoGlMethods';
import { BoTaxTypes } from './BoTaxTypes';
import { BoInventorySystem } from './BoInventorySystem';
import { BoIssueMethod } from './BoIssueMethod';
import { BoManageMethod } from './BoManageMethod';
import { BoPlanningSystem } from './BoPlanningSystem';
import { BoProcurementMethod } from './BoProcurementMethod';
import { BoMrpComponentWarehouse } from './BoMrpComponentWarehouse';
import { ItemTypeEnum } from './ItemTypeEnum';
import { ItemClassEnum } from './ItemClassEnum';
import { BoMaterialTypes } from './BoMaterialTypes';
import { TypeOfAdvancedRulesEnum } from './TypeOfAdvancedRulesEnum';
import { IssuePrimarilyByEnum } from './IssuePrimarilyByEnum';
import { AssetStatusEnum } from './AssetStatusEnum';
import { SpecialProductTypeEnum } from './SpecialProductTypeEnum';
import { GstTaxCategoryEnum } from './GstTaxCategoryEnum';
import { SoiExcisableTypeEnum } from './SoiExcisableTypeEnum';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { ItemGroups, ItemGroupsType } from './ItemGroups';
import { CustomsGroups, CustomsGroupsType } from './CustomsGroups';
import { VatGroups, VatGroupsType } from './VatGroups';
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { CommissionGroups, CommissionGroupsType } from './CommissionGroups';
import { Manufacturers, ManufacturersType } from './Manufacturers';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import { ContractTemplates, ContractTemplatesType } from './ContractTemplates';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { InventoryCycles, InventoryCyclesType } from './InventoryCycles';
import { ServiceGroups, ServiceGroupsType } from './ServiceGroups';
import { NcmCodesSetup, NcmCodesSetupType } from './NcmCodesSetup';
import { MaterialGroups, MaterialGroupsType } from './MaterialGroups';
import { DnfCodeSetup, DnfCodeSetupType } from './DnfCodeSetup';
import {
  BrazilFuelIndexers,
  BrazilFuelIndexersType
} from './BrazilFuelIndexers';
import {
  BrazilStringIndexers,
  BrazilStringIndexersType
} from './BrazilStringIndexers';
import {
  BrazilNumericIndexers,
  BrazilNumericIndexersType
} from './BrazilNumericIndexers';
import { AssetClasses, AssetClassesType } from './AssetClasses';
import { AssetGroups, AssetGroupsType } from './AssetGroups';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import {
  WarehouseLocations,
  WarehouseLocationsType
} from './WarehouseLocations';
import {
  UnitOfMeasurementGroups,
  UnitOfMeasurementGroupsType
} from './UnitOfMeasurementGroups';
import {
  UnitOfMeasurements,
  UnitOfMeasurementsType
} from './UnitOfMeasurements';
import {
  AssetDepreciationGroups,
  AssetDepreciationGroupsType
} from './AssetDepreciationGroups';
import { IndiaHsn, IndiaHsnType } from './IndiaHsn';
import { Resources, ResourcesType } from './Resources';
import { IndiaSacCode, IndiaSacCodeType } from './IndiaSacCode';
import { CestCodes, CestCodesType } from './CestCodes';
import {
  IdentificationCodes,
  IdentificationCodesType
} from './IdentificationCodes';
import {
  CustomerEquipmentCards,
  CustomerEquipmentCardsType
} from './CustomerEquipmentCards';
import { BinLocations, BinLocationsType } from './BinLocations';
import { AlternateCatNum, AlternateCatNumType } from './AlternateCatNum';
import {
  GlAccountAdvancedRules,
  GlAccountAdvancedRulesType
} from './GlAccountAdvancedRules';
import { BarCodes, BarCodesType } from './BarCodes';
import {
  KnowledgeBaseSolutions,
  KnowledgeBaseSolutionsType
} from './KnowledgeBaseSolutions';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { SpecialPrices, SpecialPricesType } from './SpecialPrices';
import {
  SerialNumberDetails,
  SerialNumberDetailsType
} from './SerialNumberDetails';
import {
  BatchNumberDetails,
  BatchNumberDetailsType
} from './BatchNumberDetails';
import { StockTakings, StockTakingsType } from './StockTakings';

/**
 * This class represents the entity "Items" of service "SAPB1".
 */
export class Items<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemsType<T>
{
  /**
   * Technical entity name for Items.
   */
  static _entityName = 'Items';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Items entity
   */
  static _keys = ['ItemCode'];
  /**
   * Item Code.
   */
  itemCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Name.
   * @nullable
   */
  foreignName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Items Group Code.
   * @nullable
   */
  itemsGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Customs Group Code.
   * @nullable
   */
  customsGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Vat Group.
   * @nullable
   */
  salesVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Liable.
   * @nullable
   */
  vatLiable?: BoYesNoEnum | null;
  /**
   * Purchase Item.
   * @nullable
   */
  purchaseItem?: BoYesNoEnum | null;
  /**
   * Sales Item.
   * @nullable
   */
  salesItem?: BoYesNoEnum | null;
  /**
   * Inventory Item.
   * @nullable
   */
  inventoryItem?: BoYesNoEnum | null;
  /**
   * Income Account.
   * @nullable
   */
  incomeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt Income Account.
   * @nullable
   */
  exemptIncomeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expanse Account.
   * @nullable
   */
  expanseAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mainsupplier.
   * @nullable
   */
  mainsupplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier Catalog No.
   * @nullable
   */
  supplierCatalogNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Desired Inventory.
   * @nullable
   */
  desiredInventory?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Min Inventory.
   * @nullable
   */
  minInventory?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Picture.
   * @nullable
   */
  picture?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Text.
   * @nullable
   */
  userText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Serial Num.
   * @nullable
   */
  serialNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Percent.
   * @nullable
   */
  commissionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Commission Sum.
   * @nullable
   */
  commissionSum?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Commission Group.
   * @nullable
   */
  commissionGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tree Type.
   * @nullable
   */
  treeType?: BoItemTreeTypes | null;
  /**
   * Asset Item.
   * @nullable
   */
  assetItem?: BoYesNoEnum | null;
  /**
   * Data Export Code.
   * @nullable
   */
  dataExportCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manufacturer.
   * @nullable
   */
  manufacturer?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Quantity On Stock.
   * @nullable
   */
  quantityOnStock?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Quantity Ordered From Vendors.
   * @nullable
   */
  quantityOrderedFromVendors?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Quantity Ordered By Customers.
   * @nullable
   */
  quantityOrderedByCustomers?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Manage Serial Numbers.
   * @nullable
   */
  manageSerialNumbers?: BoYesNoEnum | null;
  /**
   * Manage Batch Numbers.
   * @nullable
   */
  manageBatchNumbers?: BoYesNoEnum | null;
  /**
   * Valid.
   * @nullable
   */
  valid?: BoYesNoEnum | null;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid Remarks.
   * @nullable
   */
  validRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Frozen.
   * @nullable
   */
  frozen?: BoYesNoEnum | null;
  /**
   * Frozen From.
   * @nullable
   */
  frozenFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Frozen To.
   * @nullable
   */
  frozenTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Frozen Remarks.
   * @nullable
   */
  frozenRemarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit.
   * @nullable
   */
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Items Per Unit.
   * @nullable
   */
  salesItemsPerUnit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Packaging Unit.
   * @nullable
   */
  salesPackagingUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Qty Per Pack Unit.
   * @nullable
   */
  salesQtyPerPackUnit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Unit Length.
   * @nullable
   */
  salesUnitLength?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Length Unit.
   * @nullable
   */
  salesLengthUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Unit Width.
   * @nullable
   */
  salesUnitWidth?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Width Unit.
   * @nullable
   */
  salesWidthUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Unit Height.
   * @nullable
   */
  salesUnitHeight?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Height Unit.
   * @nullable
   */
  salesHeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Unit Volume.
   * @nullable
   */
  salesUnitVolume?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Volume Unit.
   * @nullable
   */
  salesVolumeUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Unit Weight.
   * @nullable
   */
  salesUnitWeight?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Weight Unit.
   * @nullable
   */
  salesWeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Unit.
   * @nullable
   */
  purchaseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Items Per Unit.
   * @nullable
   */
  purchaseItemsPerUnit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Packaging Unit.
   * @nullable
   */
  purchasePackagingUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Qty Per Pack Unit.
   * @nullable
   */
  purchaseQtyPerPackUnit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Unit Length.
   * @nullable
   */
  purchaseUnitLength?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Length Unit.
   * @nullable
   */
  purchaseLengthUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Unit Width.
   * @nullable
   */
  purchaseUnitWidth?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Width Unit.
   * @nullable
   */
  purchaseWidthUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Unit Height.
   * @nullable
   */
  purchaseUnitHeight?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Height Unit.
   * @nullable
   */
  purchaseHeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Unit Volume.
   * @nullable
   */
  purchaseUnitVolume?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Volume Unit.
   * @nullable
   */
  purchaseVolumeUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Unit Weight.
   * @nullable
   */
  purchaseUnitWeight?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Weight Unit.
   * @nullable
   */
  purchaseWeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Vat Group.
   * @nullable
   */
  purchaseVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Factor 1.
   * @nullable
   */
  salesFactor1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Factor 2.
   * @nullable
   */
  salesFactor2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Factor 3.
   * @nullable
   */
  salesFactor3?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Factor 4.
   * @nullable
   */
  salesFactor4?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Factor 1.
   * @nullable
   */
  purchaseFactor1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Factor 2.
   * @nullable
   */
  purchaseFactor2?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Factor 3.
   * @nullable
   */
  purchaseFactor3?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Factor 4.
   * @nullable
   */
  purchaseFactor4?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Moving Average Price.
   * @nullable
   */
  movingAveragePrice?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Foreign Revenues Account.
   * @nullable
   */
  foreignRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ec Revenues Account.
   * @nullable
   */
  ecRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Expenses Account.
   * @nullable
   */
  foreignExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ec Expenses Account.
   * @nullable
   */
  ecExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Avg Std Price.
   * @nullable
   */
  avgStdPrice?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Default Warehouse.
   * @nullable
   */
  defaultWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Type.
   * @nullable
   */
  shipType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Gl Method.
   * @nullable
   */
  glMethod?: BoGlMethods | null;
  /**
   * Tax Type.
   * @nullable
   */
  taxType?: BoTaxTypes | null;
  /**
   * Max Inventory.
   * @nullable
   */
  maxInventory?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Manage Stock By Warehouse.
   * @nullable
   */
  manageStockByWarehouse?: BoYesNoEnum | null;
  /**
   * Purchase Height Unit 1.
   * @nullable
   */
  purchaseHeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Unit Height 1.
   * @nullable
   */
  purchaseUnitHeight1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Length Unit 1.
   * @nullable
   */
  purchaseLengthUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Unit Length 1.
   * @nullable
   */
  purchaseUnitLength1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Weight Unit 1.
   * @nullable
   */
  purchaseWeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Unit Weight 1.
   * @nullable
   */
  purchaseUnitWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Purchase Width Unit 1.
   * @nullable
   */
  purchaseWidthUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Purchase Unit Width 1.
   * @nullable
   */
  purchaseUnitWidth1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Height Unit 1.
   * @nullable
   */
  salesHeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Unit Height 1.
   * @nullable
   */
  salesUnitHeight1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Length Unit 1.
   * @nullable
   */
  salesLengthUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Unit Length 1.
   * @nullable
   */
  salesUnitLength1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Weight Unit 1.
   * @nullable
   */
  salesWeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Unit Weight 1.
   * @nullable
   */
  salesUnitWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Sales Width Unit 1.
   * @nullable
   */
  salesWidthUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Unit Width 1.
   * @nullable
   */
  salesUnitWidth1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Force Selection Of Serial Number.
   * @nullable
   */
  forceSelectionOfSerialNumber?: BoYesNoEnum | null;
  /**
   * Manage Serial Numbers On Release Only.
   * @nullable
   */
  manageSerialNumbersOnReleaseOnly?: BoYesNoEnum | null;
  /**
   * Wt Liable.
   * @nullable
   */
  wtLiable?: BoYesNoEnum | null;
  /**
   * Cost Accounting Method.
   * @nullable
   */
  costAccountingMethod?: BoInventorySystem | null;
  /**
   * Sww.
   * @nullable
   */
  sww?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warranty Template.
   * @nullable
   */
  warrantyTemplate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indirect Tax.
   * @nullable
   */
  indirectTax?: BoYesNoEnum | null;
  /**
   * Ar Tax Code.
   * @nullable
   */
  arTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ap Tax Code.
   * @nullable
   */
  apTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit Name.
   * @nullable
   */
  baseUnitName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Country Org.
   * @nullable
   */
  itemCountryOrg?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Method.
   * @nullable
   */
  issueMethod?: BoIssueMethod | null;
  /**
   * Sri And Batch Manage Method.
   * @nullable
   */
  sriAndBatchManageMethod?: BoManageMethod | null;
  /**
   * Is Phantom.
   * @nullable
   */
  isPhantom?: BoYesNoEnum | null;
  /**
   * Inventory Uom.
   * @nullable
   */
  inventoryUom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning System.
   * @nullable
   */
  planningSystem?: BoPlanningSystem | null;
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
   * Order Intervals.
   * @nullable
   */
  orderIntervals?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Order Multiple.
   * @nullable
   */
  orderMultiple?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Lead Time.
   * @nullable
   */
  leadTime?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Min Order Quantity.
   * @nullable
   */
  minOrderQuantity?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Item Type.
   * @nullable
   */
  itemType?: ItemTypeEnum | null;
  /**
   * Item Class.
   * @nullable
   */
  itemClass?: ItemClassEnum | null;
  /**
   * Outgoing Service Code.
   * @nullable
   */
  outgoingServiceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Incoming Service Code.
   * @nullable
   */
  incomingServiceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Service Group.
   * @nullable
   */
  serviceGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Material Type.
   * @nullable
   */
  materialType?: BoMaterialTypes | null;
  /**
   * Material Group.
   * @nullable
   */
  materialGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Product Source.
   * @nullable
   */
  productSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Properties 1.
   * @nullable
   */
  properties1?: BoYesNoEnum | null;
  /**
   * Properties 2.
   * @nullable
   */
  properties2?: BoYesNoEnum | null;
  /**
   * Properties 3.
   * @nullable
   */
  properties3?: BoYesNoEnum | null;
  /**
   * Properties 4.
   * @nullable
   */
  properties4?: BoYesNoEnum | null;
  /**
   * Properties 5.
   * @nullable
   */
  properties5?: BoYesNoEnum | null;
  /**
   * Properties 6.
   * @nullable
   */
  properties6?: BoYesNoEnum | null;
  /**
   * Properties 7.
   * @nullable
   */
  properties7?: BoYesNoEnum | null;
  /**
   * Properties 8.
   * @nullable
   */
  properties8?: BoYesNoEnum | null;
  /**
   * Properties 9.
   * @nullable
   */
  properties9?: BoYesNoEnum | null;
  /**
   * Properties 10.
   * @nullable
   */
  properties10?: BoYesNoEnum | null;
  /**
   * Properties 11.
   * @nullable
   */
  properties11?: BoYesNoEnum | null;
  /**
   * Properties 12.
   * @nullable
   */
  properties12?: BoYesNoEnum | null;
  /**
   * Properties 13.
   * @nullable
   */
  properties13?: BoYesNoEnum | null;
  /**
   * Properties 14.
   * @nullable
   */
  properties14?: BoYesNoEnum | null;
  /**
   * Properties 15.
   * @nullable
   */
  properties15?: BoYesNoEnum | null;
  /**
   * Properties 16.
   * @nullable
   */
  properties16?: BoYesNoEnum | null;
  /**
   * Properties 17.
   * @nullable
   */
  properties17?: BoYesNoEnum | null;
  /**
   * Properties 18.
   * @nullable
   */
  properties18?: BoYesNoEnum | null;
  /**
   * Properties 19.
   * @nullable
   */
  properties19?: BoYesNoEnum | null;
  /**
   * Properties 20.
   * @nullable
   */
  properties20?: BoYesNoEnum | null;
  /**
   * Properties 21.
   * @nullable
   */
  properties21?: BoYesNoEnum | null;
  /**
   * Properties 22.
   * @nullable
   */
  properties22?: BoYesNoEnum | null;
  /**
   * Properties 23.
   * @nullable
   */
  properties23?: BoYesNoEnum | null;
  /**
   * Properties 24.
   * @nullable
   */
  properties24?: BoYesNoEnum | null;
  /**
   * Properties 25.
   * @nullable
   */
  properties25?: BoYesNoEnum | null;
  /**
   * Properties 26.
   * @nullable
   */
  properties26?: BoYesNoEnum | null;
  /**
   * Properties 27.
   * @nullable
   */
  properties27?: BoYesNoEnum | null;
  /**
   * Properties 28.
   * @nullable
   */
  properties28?: BoYesNoEnum | null;
  /**
   * Properties 29.
   * @nullable
   */
  properties29?: BoYesNoEnum | null;
  /**
   * Properties 30.
   * @nullable
   */
  properties30?: BoYesNoEnum | null;
  /**
   * Properties 31.
   * @nullable
   */
  properties31?: BoYesNoEnum | null;
  /**
   * Properties 32.
   * @nullable
   */
  properties32?: BoYesNoEnum | null;
  /**
   * Properties 33.
   * @nullable
   */
  properties33?: BoYesNoEnum | null;
  /**
   * Properties 34.
   * @nullable
   */
  properties34?: BoYesNoEnum | null;
  /**
   * Properties 35.
   * @nullable
   */
  properties35?: BoYesNoEnum | null;
  /**
   * Properties 36.
   * @nullable
   */
  properties36?: BoYesNoEnum | null;
  /**
   * Properties 37.
   * @nullable
   */
  properties37?: BoYesNoEnum | null;
  /**
   * Properties 38.
   * @nullable
   */
  properties38?: BoYesNoEnum | null;
  /**
   * Properties 39.
   * @nullable
   */
  properties39?: BoYesNoEnum | null;
  /**
   * Properties 40.
   * @nullable
   */
  properties40?: BoYesNoEnum | null;
  /**
   * Properties 41.
   * @nullable
   */
  properties41?: BoYesNoEnum | null;
  /**
   * Properties 42.
   * @nullable
   */
  properties42?: BoYesNoEnum | null;
  /**
   * Properties 43.
   * @nullable
   */
  properties43?: BoYesNoEnum | null;
  /**
   * Properties 44.
   * @nullable
   */
  properties44?: BoYesNoEnum | null;
  /**
   * Properties 45.
   * @nullable
   */
  properties45?: BoYesNoEnum | null;
  /**
   * Properties 46.
   * @nullable
   */
  properties46?: BoYesNoEnum | null;
  /**
   * Properties 47.
   * @nullable
   */
  properties47?: BoYesNoEnum | null;
  /**
   * Properties 48.
   * @nullable
   */
  properties48?: BoYesNoEnum | null;
  /**
   * Properties 49.
   * @nullable
   */
  properties49?: BoYesNoEnum | null;
  /**
   * Properties 50.
   * @nullable
   */
  properties50?: BoYesNoEnum | null;
  /**
   * Properties 51.
   * @nullable
   */
  properties51?: BoYesNoEnum | null;
  /**
   * Properties 52.
   * @nullable
   */
  properties52?: BoYesNoEnum | null;
  /**
   * Properties 53.
   * @nullable
   */
  properties53?: BoYesNoEnum | null;
  /**
   * Properties 54.
   * @nullable
   */
  properties54?: BoYesNoEnum | null;
  /**
   * Properties 55.
   * @nullable
   */
  properties55?: BoYesNoEnum | null;
  /**
   * Properties 56.
   * @nullable
   */
  properties56?: BoYesNoEnum | null;
  /**
   * Properties 57.
   * @nullable
   */
  properties57?: BoYesNoEnum | null;
  /**
   * Properties 58.
   * @nullable
   */
  properties58?: BoYesNoEnum | null;
  /**
   * Properties 59.
   * @nullable
   */
  properties59?: BoYesNoEnum | null;
  /**
   * Properties 60.
   * @nullable
   */
  properties60?: BoYesNoEnum | null;
  /**
   * Properties 61.
   * @nullable
   */
  properties61?: BoYesNoEnum | null;
  /**
   * Properties 62.
   * @nullable
   */
  properties62?: BoYesNoEnum | null;
  /**
   * Properties 63.
   * @nullable
   */
  properties63?: BoYesNoEnum | null;
  /**
   * Properties 64.
   * @nullable
   */
  properties64?: BoYesNoEnum | null;
  /**
   * Auto Create Serial Numbers On Release.
   * @nullable
   */
  autoCreateSerialNumbersOnRelease?: BoYesNoEnum | null;
  /**
   * Dnf Entry.
   * @nullable
   */
  dnfEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Gts Item Spec.
   * @nullable
   */
  gtsItemSpec?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gts Item Tax Category.
   * @nullable
   */
  gtsItemTaxCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fuel Id.
   * @nullable
   */
  fuelId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Beverage Table Code.
   * @nullable
   */
  beverageTableCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beverage Group Code.
   * @nullable
   */
  beverageGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beverage Commercial Brand Code.
   * @nullable
   */
  beverageCommercialBrandCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tolerance Days.
   * @nullable
   */
  toleranceDays?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Type Of Advanced Rules.
   * @nullable
   */
  typeOfAdvancedRules?: TypeOfAdvancedRulesEnum | null;
  /**
   * Issue Primarily By.
   * @nullable
   */
  issuePrimarilyBy?: IssuePrimarilyByEnum | null;
  /**
   * No Discounts.
   * @nullable
   */
  noDiscounts?: BoYesNoEnum | null;
  /**
   * Asset Class.
   * @nullable
   */
  assetClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Group.
   * @nullable
   */
  assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Number.
   * @nullable
   */
  inventoryNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technician.
   * @nullable
   */
  technician?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Employee.
   * @nullable
   */
  employee?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Asset Status.
   * @nullable
   */
  assetStatus?: AssetStatusEnum | null;
  /**
   * Capitalization Date.
   * @nullable
   */
  capitalizationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Statistical Asset.
   * @nullable
   */
  statisticalAsset?: BoYesNoEnum | null;
  /**
   * Cession.
   * @nullable
   */
  cession?: BoYesNoEnum | null;
  /**
   * Deactivate After Useful Life.
   * @nullable
   */
  deactivateAfterUsefulLife?: BoYesNoEnum | null;
  /**
   * Manage By Quantity.
   * @nullable
   */
  manageByQuantity?: BoYesNoEnum | null;
  /**
   * Uo M Group Entry.
   * @nullable
   */
  uoMGroupEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Inventory Uo M Entry.
   * @nullable
   */
  inventoryUoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Sales Uo M Entry.
   * @nullable
   */
  defaultSalesUoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Purchasing Uo M Entry.
   * @nullable
   */
  defaultPurchasingUoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Depreciation Group.
   * @nullable
   */
  depreciationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Serial Number.
   * @nullable
   */
  assetSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Weight.
   * @nullable
   */
  inventoryWeight?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Inventory Weight Unit.
   * @nullable
   */
  inventoryWeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Inventory Weight 1.
   * @nullable
   */
  inventoryWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Inventory Weight Unit 1.
   * @nullable
   */
  inventoryWeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Default Counting Unit.
   * @nullable
   */
  defaultCountingUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counting Items Per Unit.
   * @nullable
   */
  countingItemsPerUnit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Default Counting Uo M Entry.
   * @nullable
   */
  defaultCountingUoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Excisable.
   * @nullable
   */
  excisable?: BoYesNoEnum | null;
  /**
   * Chapter Id.
   * @nullable
   */
  chapterId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Scs Code.
   * @nullable
   */
  scsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sp Prod Type.
   * @nullable
   */
  spProdType?: SpecialProductTypeEnum | null;
  /**
   * Prod Std Cost.
   * @nullable
   */
  prodStdCost?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * In Cost Rollup.
   * @nullable
   */
  inCostRollup?: BoYesNoEnum | null;
  /**
   * Virtual Asset Item.
   * @nullable
   */
  virtualAssetItem?: BoYesNoEnum | null;
  /**
   * Enforce Asset Serial Numbers.
   * @nullable
   */
  enforceAssetSerialNumbers?: BoYesNoEnum | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Linked Resource.
   * @nullable
   */
  linkedResource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Gst Relevnt.
   * @nullable
   */
  gstRelevnt?: BoYesNoEnum | null;
  /**
   * Sac Entry.
   * @nullable
   */
  sacEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Gst Tax Category.
   * @nullable
   */
  gstTaxCategory?: GstTaxCategoryEnum | null;
  /**
   * Service Category Entry.
   * @nullable
   */
  serviceCategoryEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Capital Goods On Hold Percent.
   * @nullable
   */
  capitalGoodsOnHoldPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Capital Goods On Hold Limit.
   * @nullable
   */
  capitalGoodsOnHoldLimit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Assessable Value.
   * @nullable
   */
  assessableValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Ass Val 4 Wtr.
   * @nullable
   */
  assVal4Wtr?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Soi Excisable.
   * @nullable
   */
  soiExcisable?: SoiExcisableTypeEnum | null;
  /**
   * Tnved.
   * @nullable
   */
  tnved?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Imported Item.
   * @nullable
   */
  importedItem?: BoYesNoEnum | null;
  /**
   * Pricing Unit.
   * @nullable
   */
  pricingUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Nve Code.
   * @nullable
   */
  nveCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ctr Seal Qty.
   * @nullable
   */
  ctrSealQty?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cest Code.
   * @nullable
   */
  cestCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Legal Text.
   * @nullable
   */
  legalText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Version.
   * @nullable
   */
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Create Qr Code From.
   * @nullable
   */
  createQrCodeFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Traceable Item.
   * @nullable
   */
  traceableItem?: BoYesNoEnum | null;
  /**
   * Commodity Classification.
   * @nullable
   */
  commodityClassification?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Weight Of Recycled Plastic.
   * @nullable
   */
  weightOfRecycledPlastic?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Plastic Package Tax Category.
   * @nullable
   */
  plasticPackageTaxCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plastic Package Exemption Reason For Purchase.
   * @nullable
   */
  plasticPackageExemptionReasonForPurchase?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Plastic Package Exemption Reason For Production.
   * @nullable
   */
  plasticPackageExemptionReasonForProduction?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * U Mediando.
   * @nullable
   */
  uMediando?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ba Is Fa.
   * @nullable
   */
  uBaIsFa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Ba Typ Id.
   * @nullable
   */
  uBaTypId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ba Num Id.
   * @nullable
   */
  uBaNumId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ba Lva From.
   * @nullable
   */
  uBaLvaFrom?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Ba Lva.
   * @nullable
   */
  uBaLva?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * U Lnummer.
   * @nullable
   */
  uLnummer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Lavp.
   * @nullable
   */
  uLavp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Mediando Master.
   * @nullable
   */
  uMediandoMaster?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Hin Lief.
   * @nullable
   */
  uBsHinLief?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Artikelinfo.
   * @nullable
   */
  uBsFertigungArtikelinfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Arbeitsvorbereitung.
   * @nullable
   */
  uBsFertigungArbeitsvorbereitung?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Fertigungsangaben.
   * @nullable
   */
  uBsFertigungFertigungsangaben?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Qualitaetssicherung.
   * @nullable
   */
  uBsFertigungQualitaetssicherung?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Synonyme.
   * @nullable
   */
  uBsFertigungSynonyme?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Matchcode.
   * @nullable
   */
  uBsFertigungMatchcode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Bild 1.
   * @nullable
   */
  uBsFertigungBild1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Bild 2.
   * @nullable
   */
  uBsFertigungBild2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Bild 3.
   * @nullable
   */
  uBsFertigungBild3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Anlage 1.
   * @nullable
   */
  uBsFertigungAnlage1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Anlage 2.
   * @nullable
   */
  uBsFertigungAnlage2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Fertigung Anlage 3.
   * @nullable
   */
  uBsFertigungAnlage3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Tempx.
   * @nullable
   */
  uTempx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Bild Old.
   * @nullable
   */
  uBsBildOld?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Datenblatt Beschreibung.
   * @nullable
   */
  uBsDatenblattBeschreibung?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Datenblatt Daten.
   * @nullable
   */
  uBsDatenblattDaten?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Datenblatt Preis.
   * @nullable
   */
  uBsDatenblattPreis?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Datenblatt Lieferant.
   * @nullable
   */
  uBsDatenblattLieferant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Bs Datenblatt Zeichnung.
   * @nullable
   */
  uBsDatenblattZeichnung?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Prices.
   * @nullable
   */
  itemPrices?: ItemPrice<T>[] | null;
  /**
   * Item Warehouse Info Collection.
   * @nullable
   */
  itemWarehouseInfoCollection?: ItemWarehouseInfo<T>[] | null;
  /**
   * Item Preferred Vendors.
   * @nullable
   */
  itemPreferredVendors?: ItemPreferredVendor<T>[] | null;
  /**
   * Item Localization Infos.
   * @nullable
   */
  itemLocalizationInfos?: ItemLocalizationInfo<T>[] | null;
  /**
   * Item Projects.
   * @nullable
   */
  itemProjects?: ItemProject<T>[] | null;
  /**
   * Item Distribution Rules.
   * @nullable
   */
  itemDistributionRules?: ItemDistributionRule<T>[] | null;
  /**
   * Item Attribute Groups.
   * @nullable
   */
  itemAttributeGroups?: ItemAttributeGroups<T>[] | null;
  /**
   * Item Depreciation Parameters.
   * @nullable
   */
  itemDepreciationParameters?: ItemDepreciationParameter<T>[] | null;
  /**
   * Item Period Controls.
   * @nullable
   */
  itemPeriodControls?: ItemPeriodControl<T>[] | null;
  /**
   * Item Unit Of Measurement Collection.
   * @nullable
   */
  itemUnitOfMeasurementCollection?: ItemUnitOfMeasurement<T>[] | null;
  /**
   * Item Bar Code Collection.
   * @nullable
   */
  itemBarCodeCollection?: ItemBarCode<T>[] | null;
  /**
   * Item Intrastat Extension.
   * @nullable
   */
  itemIntrastatExtension?: ItemIntrastatExtension<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductTrees} entity.
   */
  productTrees!: ProductTrees<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceCalls} entity.
   */
  serviceCalls!: ServiceCalls<T>[];
  /**
   * One-to-one navigation property to the {@link ItemGroups} entity.
   */
  itemGroups?: ItemGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomsGroups} entity.
   */
  customsGroup?: CustomsGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link VatGroups} entity.
   */
  vatGroup?: VatGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link ChartOfAccounts} entity.
   */
  chartOfAccount?: ChartOfAccounts<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link CommissionGroups} entity.
   */
  commissionGroup2?: CommissionGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link Manufacturers} entity.
   */
  manufacturer2?: Manufacturers<T> | null;
  /**
   * One-to-one navigation property to the {@link ShippingTypes} entity.
   */
  shippingType?: ShippingTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link ContractTemplates} entity.
   */
  contractTemplate?: ContractTemplates<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesTaxCodes} entity.
   */
  salesTaxCode?: SalesTaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link InventoryCycles} entity.
   */
  inventoryCycles?: InventoryCycles<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceGroups} entity.
   */
  serviceGroup2?: ServiceGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link NcmCodesSetup} entity.
   */
  ncmCodeSetup?: NcmCodesSetup<T> | null;
  /**
   * One-to-one navigation property to the {@link MaterialGroups} entity.
   */
  materialGroup2?: MaterialGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link DnfCodeSetup} entity.
   */
  dnfCodeSetup?: DnfCodeSetup<T> | null;
  /**
   * One-to-one navigation property to the {@link BrazilFuelIndexers} entity.
   */
  brazilFuelIndexer?: BrazilFuelIndexers<T> | null;
  /**
   * One-to-one navigation property to the {@link BrazilStringIndexers} entity.
   */
  brazilStringIndexer?: BrazilStringIndexers<T> | null;
  /**
   * One-to-one navigation property to the {@link BrazilNumericIndexers} entity.
   */
  brazilNumericIndexer?: BrazilNumericIndexers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetClasses} entity.
   */
  assetClass2?: AssetClasses<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetGroups} entity.
   */
  assetGroup2?: AssetGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link WarehouseLocations} entity.
   */
  warehouseLocation?: WarehouseLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitOfMeasurementGroups} entity.
   */
  unitOfMeasurementGroup?: UnitOfMeasurementGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitOfMeasurements} entity.
   */
  unitOfMeasurement?: UnitOfMeasurements<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetDepreciationGroups} entity.
   */
  assetDepreciationGroup?: AssetDepreciationGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link IndiaHsn} entity.
   */
  indiaHsn?: IndiaHsn<T> | null;
  /**
   * One-to-one navigation property to the {@link Resources} entity.
   */
  resource?: Resources<T> | null;
  /**
   * One-to-one navigation property to the {@link IndiaSacCode} entity.
   */
  indiaSacCode?: IndiaSacCode<T> | null;
  /**
   * One-to-one navigation property to the {@link CestCodes} entity.
   */
  cestCodeData?: CestCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link IdentificationCodes} entity.
   */
  identificationCode?: IdentificationCodes<T> | null;
  /**
   * One-to-many navigation property to the {@link CustomerEquipmentCards} entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards<T>[];
  /**
   * One-to-many navigation property to the {@link BinLocations} entity.
   */
  binLocations!: BinLocations<T>[];
  /**
   * One-to-many navigation property to the {@link AlternateCatNum} entity.
   */
  alternateCatNum!: AlternateCatNum<T>[];
  /**
   * One-to-many navigation property to the {@link GlAccountAdvancedRules} entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link BarCodes} entity.
   */
  barCodes!: BarCodes<T>[];
  /**
   * One-to-many navigation property to the {@link Resources} entity.
   */
  resources!: Resources<T>[];
  /**
   * One-to-many navigation property to the {@link KnowledgeBaseSolutions} entity.
   */
  knowledgeBaseSolutions!: KnowledgeBaseSolutions<T>[];
  /**
   * One-to-many navigation property to the {@link DepreciationAreas} entity.
   */
  depreciationAreas!: DepreciationAreas<T>[];
  /**
   * One-to-many navigation property to the {@link SpecialPrices} entity.
   */
  specialPrices!: SpecialPrices<T>[];
  /**
   * One-to-many navigation property to the {@link SerialNumberDetails} entity.
   */
  serialNumberDetails!: SerialNumberDetails<T>[];
  /**
   * One-to-many navigation property to the {@link BatchNumberDetails} entity.
   */
  batchNumberDetails!: BatchNumberDetails<T>[];
  /**
   * One-to-many navigation property to the {@link StockTakings} entity.
   */
  stockTakings!: StockTakings<T>[];

  constructor(readonly _entityApi: ItemsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemsType<T extends DeSerializers = DefaultDeSerializers> {
  itemCode: DeserializedType<T, 'Edm.String'>;
  itemName?: DeserializedType<T, 'Edm.String'> | null;
  foreignName?: DeserializedType<T, 'Edm.String'> | null;
  itemsGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  customsGroupCode?: DeserializedType<T, 'Edm.Int32'> | null;
  salesVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  vatLiable?: BoYesNoEnum | null;
  purchaseItem?: BoYesNoEnum | null;
  salesItem?: BoYesNoEnum | null;
  inventoryItem?: BoYesNoEnum | null;
  incomeAccount?: DeserializedType<T, 'Edm.String'> | null;
  exemptIncomeAccount?: DeserializedType<T, 'Edm.String'> | null;
  expanseAccount?: DeserializedType<T, 'Edm.String'> | null;
  mainsupplier?: DeserializedType<T, 'Edm.String'> | null;
  supplierCatalogNo?: DeserializedType<T, 'Edm.String'> | null;
  desiredInventory?: DeserializedType<T, 'Edm.Double'> | null;
  minInventory?: DeserializedType<T, 'Edm.Double'> | null;
  picture?: DeserializedType<T, 'Edm.String'> | null;
  userText?: DeserializedType<T, 'Edm.String'> | null;
  serialNum?: DeserializedType<T, 'Edm.String'> | null;
  commissionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  commissionSum?: DeserializedType<T, 'Edm.Double'> | null;
  commissionGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  treeType?: BoItemTreeTypes | null;
  assetItem?: BoYesNoEnum | null;
  dataExportCode?: DeserializedType<T, 'Edm.String'> | null;
  manufacturer?: DeserializedType<T, 'Edm.Int32'> | null;
  quantityOnStock?: DeserializedType<T, 'Edm.Double'> | null;
  quantityOrderedFromVendors?: DeserializedType<T, 'Edm.Double'> | null;
  quantityOrderedByCustomers?: DeserializedType<T, 'Edm.Double'> | null;
  manageSerialNumbers?: BoYesNoEnum | null;
  manageBatchNumbers?: BoYesNoEnum | null;
  valid?: BoYesNoEnum | null;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validRemarks?: DeserializedType<T, 'Edm.String'> | null;
  frozen?: BoYesNoEnum | null;
  frozenFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  frozenTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  frozenRemarks?: DeserializedType<T, 'Edm.String'> | null;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  salesItemsPerUnit?: DeserializedType<T, 'Edm.Double'> | null;
  salesPackagingUnit?: DeserializedType<T, 'Edm.String'> | null;
  salesQtyPerPackUnit?: DeserializedType<T, 'Edm.Double'> | null;
  salesUnitLength?: DeserializedType<T, 'Edm.Double'> | null;
  salesLengthUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  salesUnitWidth?: DeserializedType<T, 'Edm.Double'> | null;
  salesWidthUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  salesUnitHeight?: DeserializedType<T, 'Edm.Double'> | null;
  salesHeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  salesUnitVolume?: DeserializedType<T, 'Edm.Double'> | null;
  salesVolumeUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  salesUnitWeight?: DeserializedType<T, 'Edm.Double'> | null;
  salesWeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseUnit?: DeserializedType<T, 'Edm.String'> | null;
  purchaseItemsPerUnit?: DeserializedType<T, 'Edm.Double'> | null;
  purchasePackagingUnit?: DeserializedType<T, 'Edm.String'> | null;
  purchaseQtyPerPackUnit?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseUnitLength?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseLengthUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseUnitWidth?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseWidthUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseUnitHeight?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseHeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseUnitVolume?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseVolumeUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseUnitWeight?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseWeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseVatGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesFactor1?: DeserializedType<T, 'Edm.Double'> | null;
  salesFactor2?: DeserializedType<T, 'Edm.Double'> | null;
  salesFactor3?: DeserializedType<T, 'Edm.Double'> | null;
  salesFactor4?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseFactor1?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseFactor2?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseFactor3?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseFactor4?: DeserializedType<T, 'Edm.Double'> | null;
  movingAveragePrice?: DeserializedType<T, 'Edm.Double'> | null;
  foreignRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  ecRevenuesAccount?: DeserializedType<T, 'Edm.String'> | null;
  foreignExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  ecExpensesAccount?: DeserializedType<T, 'Edm.String'> | null;
  avgStdPrice?: DeserializedType<T, 'Edm.Double'> | null;
  defaultWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  shipType?: DeserializedType<T, 'Edm.Int32'> | null;
  glMethod?: BoGlMethods | null;
  taxType?: BoTaxTypes | null;
  maxInventory?: DeserializedType<T, 'Edm.Double'> | null;
  manageStockByWarehouse?: BoYesNoEnum | null;
  purchaseHeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseUnitHeight1?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseLengthUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseUnitLength1?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseWeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseUnitWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  purchaseWidthUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  purchaseUnitWidth1?: DeserializedType<T, 'Edm.Double'> | null;
  salesHeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  salesUnitHeight1?: DeserializedType<T, 'Edm.Double'> | null;
  salesLengthUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  salesUnitLength1?: DeserializedType<T, 'Edm.Double'> | null;
  salesWeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  salesUnitWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  salesWidthUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  salesUnitWidth1?: DeserializedType<T, 'Edm.Double'> | null;
  forceSelectionOfSerialNumber?: BoYesNoEnum | null;
  manageSerialNumbersOnReleaseOnly?: BoYesNoEnum | null;
  wtLiable?: BoYesNoEnum | null;
  costAccountingMethod?: BoInventorySystem | null;
  sww?: DeserializedType<T, 'Edm.String'> | null;
  warrantyTemplate?: DeserializedType<T, 'Edm.String'> | null;
  indirectTax?: BoYesNoEnum | null;
  arTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  apTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  baseUnitName?: DeserializedType<T, 'Edm.String'> | null;
  itemCountryOrg?: DeserializedType<T, 'Edm.String'> | null;
  issueMethod?: BoIssueMethod | null;
  sriAndBatchManageMethod?: BoManageMethod | null;
  isPhantom?: BoYesNoEnum | null;
  inventoryUom?: DeserializedType<T, 'Edm.String'> | null;
  planningSystem?: BoPlanningSystem | null;
  procurementMethod?: BoProcurementMethod | null;
  componentWarehouse?: BoMrpComponentWarehouse | null;
  orderIntervals?: DeserializedType<T, 'Edm.Int32'> | null;
  orderMultiple?: DeserializedType<T, 'Edm.Double'> | null;
  leadTime?: DeserializedType<T, 'Edm.Int32'> | null;
  minOrderQuantity?: DeserializedType<T, 'Edm.Double'> | null;
  itemType?: ItemTypeEnum | null;
  itemClass?: ItemClassEnum | null;
  outgoingServiceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  incomingServiceCode?: DeserializedType<T, 'Edm.Int32'> | null;
  serviceGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  ncmCode?: DeserializedType<T, 'Edm.Int32'> | null;
  materialType?: BoMaterialTypes | null;
  materialGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  productSource?: DeserializedType<T, 'Edm.String'> | null;
  properties1?: BoYesNoEnum | null;
  properties2?: BoYesNoEnum | null;
  properties3?: BoYesNoEnum | null;
  properties4?: BoYesNoEnum | null;
  properties5?: BoYesNoEnum | null;
  properties6?: BoYesNoEnum | null;
  properties7?: BoYesNoEnum | null;
  properties8?: BoYesNoEnum | null;
  properties9?: BoYesNoEnum | null;
  properties10?: BoYesNoEnum | null;
  properties11?: BoYesNoEnum | null;
  properties12?: BoYesNoEnum | null;
  properties13?: BoYesNoEnum | null;
  properties14?: BoYesNoEnum | null;
  properties15?: BoYesNoEnum | null;
  properties16?: BoYesNoEnum | null;
  properties17?: BoYesNoEnum | null;
  properties18?: BoYesNoEnum | null;
  properties19?: BoYesNoEnum | null;
  properties20?: BoYesNoEnum | null;
  properties21?: BoYesNoEnum | null;
  properties22?: BoYesNoEnum | null;
  properties23?: BoYesNoEnum | null;
  properties24?: BoYesNoEnum | null;
  properties25?: BoYesNoEnum | null;
  properties26?: BoYesNoEnum | null;
  properties27?: BoYesNoEnum | null;
  properties28?: BoYesNoEnum | null;
  properties29?: BoYesNoEnum | null;
  properties30?: BoYesNoEnum | null;
  properties31?: BoYesNoEnum | null;
  properties32?: BoYesNoEnum | null;
  properties33?: BoYesNoEnum | null;
  properties34?: BoYesNoEnum | null;
  properties35?: BoYesNoEnum | null;
  properties36?: BoYesNoEnum | null;
  properties37?: BoYesNoEnum | null;
  properties38?: BoYesNoEnum | null;
  properties39?: BoYesNoEnum | null;
  properties40?: BoYesNoEnum | null;
  properties41?: BoYesNoEnum | null;
  properties42?: BoYesNoEnum | null;
  properties43?: BoYesNoEnum | null;
  properties44?: BoYesNoEnum | null;
  properties45?: BoYesNoEnum | null;
  properties46?: BoYesNoEnum | null;
  properties47?: BoYesNoEnum | null;
  properties48?: BoYesNoEnum | null;
  properties49?: BoYesNoEnum | null;
  properties50?: BoYesNoEnum | null;
  properties51?: BoYesNoEnum | null;
  properties52?: BoYesNoEnum | null;
  properties53?: BoYesNoEnum | null;
  properties54?: BoYesNoEnum | null;
  properties55?: BoYesNoEnum | null;
  properties56?: BoYesNoEnum | null;
  properties57?: BoYesNoEnum | null;
  properties58?: BoYesNoEnum | null;
  properties59?: BoYesNoEnum | null;
  properties60?: BoYesNoEnum | null;
  properties61?: BoYesNoEnum | null;
  properties62?: BoYesNoEnum | null;
  properties63?: BoYesNoEnum | null;
  properties64?: BoYesNoEnum | null;
  autoCreateSerialNumbersOnRelease?: BoYesNoEnum | null;
  dnfEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  gtsItemSpec?: DeserializedType<T, 'Edm.String'> | null;
  gtsItemTaxCategory?: DeserializedType<T, 'Edm.String'> | null;
  fuelId?: DeserializedType<T, 'Edm.Int32'> | null;
  beverageTableCode?: DeserializedType<T, 'Edm.String'> | null;
  beverageGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  beverageCommercialBrandCode?: DeserializedType<T, 'Edm.Int32'> | null;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  toleranceDays?: DeserializedType<T, 'Edm.Int32'> | null;
  typeOfAdvancedRules?: TypeOfAdvancedRulesEnum | null;
  issuePrimarilyBy?: IssuePrimarilyByEnum | null;
  noDiscounts?: BoYesNoEnum | null;
  assetClass?: DeserializedType<T, 'Edm.String'> | null;
  assetGroup?: DeserializedType<T, 'Edm.String'> | null;
  inventoryNumber?: DeserializedType<T, 'Edm.String'> | null;
  technician?: DeserializedType<T, 'Edm.Int32'> | null;
  employee?: DeserializedType<T, 'Edm.Int32'> | null;
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  assetStatus?: AssetStatusEnum | null;
  capitalizationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  statisticalAsset?: BoYesNoEnum | null;
  cession?: BoYesNoEnum | null;
  deactivateAfterUsefulLife?: BoYesNoEnum | null;
  manageByQuantity?: BoYesNoEnum | null;
  uoMGroupEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  inventoryUoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultSalesUoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultPurchasingUoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  depreciationGroup?: DeserializedType<T, 'Edm.String'> | null;
  assetSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryWeight?: DeserializedType<T, 'Edm.Double'> | null;
  inventoryWeightUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  inventoryWeight1?: DeserializedType<T, 'Edm.Double'> | null;
  inventoryWeightUnit1?: DeserializedType<T, 'Edm.Int32'> | null;
  defaultCountingUnit?: DeserializedType<T, 'Edm.String'> | null;
  countingItemsPerUnit?: DeserializedType<T, 'Edm.Double'> | null;
  defaultCountingUoMEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  excisable?: BoYesNoEnum | null;
  chapterId?: DeserializedType<T, 'Edm.Int32'> | null;
  scsCode?: DeserializedType<T, 'Edm.String'> | null;
  spProdType?: SpecialProductTypeEnum | null;
  prodStdCost?: DeserializedType<T, 'Edm.Double'> | null;
  inCostRollup?: BoYesNoEnum | null;
  virtualAssetItem?: BoYesNoEnum | null;
  enforceAssetSerialNumbers?: BoYesNoEnum | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  linkedResource?: DeserializedType<T, 'Edm.String'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  gstRelevnt?: BoYesNoEnum | null;
  sacEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  gstTaxCategory?: GstTaxCategoryEnum | null;
  serviceCategoryEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  capitalGoodsOnHoldPercent?: DeserializedType<T, 'Edm.Double'> | null;
  capitalGoodsOnHoldLimit?: DeserializedType<T, 'Edm.Double'> | null;
  assessableValue?: DeserializedType<T, 'Edm.Double'> | null;
  assVal4Wtr?: DeserializedType<T, 'Edm.Double'> | null;
  soiExcisable?: SoiExcisableTypeEnum | null;
  tnved?: DeserializedType<T, 'Edm.String'> | null;
  importedItem?: BoYesNoEnum | null;
  pricingUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  createDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  nveCode?: DeserializedType<T, 'Edm.String'> | null;
  ctrSealQty?: DeserializedType<T, 'Edm.Double'> | null;
  cestCode?: DeserializedType<T, 'Edm.Int32'> | null;
  legalText?: DeserializedType<T, 'Edm.String'> | null;
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  createQrCodeFrom?: DeserializedType<T, 'Edm.String'> | null;
  traceableItem?: BoYesNoEnum | null;
  commodityClassification?: DeserializedType<T, 'Edm.Int32'> | null;
  weightOfRecycledPlastic?: DeserializedType<T, 'Edm.Double'> | null;
  plasticPackageTaxCategory?: DeserializedType<T, 'Edm.String'> | null;
  plasticPackageExemptionReasonForPurchase?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  plasticPackageExemptionReasonForProduction?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  uMediando?: DeserializedType<T, 'Edm.Int32'> | null;
  uBaIsFa?: DeserializedType<T, 'Edm.String'> | null;
  uBaTypId?: DeserializedType<T, 'Edm.Int32'> | null;
  uBaNumId?: DeserializedType<T, 'Edm.Int32'> | null;
  uBaLvaFrom?: DeserializedType<T, 'Edm.Double'> | null;
  uBaLva?: DeserializedType<T, 'Edm.Double'> | null;
  uLnummer?: DeserializedType<T, 'Edm.String'> | null;
  uLavp?: DeserializedType<T, 'Edm.String'> | null;
  uMediandoMaster?: DeserializedType<T, 'Edm.String'> | null;
  uBsHinLief?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungArtikelinfo?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungArbeitsvorbereitung?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungFertigungsangaben?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungQualitaetssicherung?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungSynonyme?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungMatchcode?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungBild1?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungBild2?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungBild3?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungAnlage1?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungAnlage2?: DeserializedType<T, 'Edm.String'> | null;
  uBsFertigungAnlage3?: DeserializedType<T, 'Edm.String'> | null;
  uTempx?: DeserializedType<T, 'Edm.String'> | null;
  uBsBildOld?: DeserializedType<T, 'Edm.String'> | null;
  uBsDatenblattBeschreibung?: DeserializedType<T, 'Edm.String'> | null;
  uBsDatenblattDaten?: DeserializedType<T, 'Edm.String'> | null;
  uBsDatenblattPreis?: DeserializedType<T, 'Edm.String'> | null;
  uBsDatenblattLieferant?: DeserializedType<T, 'Edm.String'> | null;
  uBsDatenblattZeichnung?: DeserializedType<T, 'Edm.String'> | null;
  itemPrices?: ItemPrice<T>[] | null;
  itemWarehouseInfoCollection?: ItemWarehouseInfo<T>[] | null;
  itemPreferredVendors?: ItemPreferredVendor<T>[] | null;
  itemLocalizationInfos?: ItemLocalizationInfo<T>[] | null;
  itemProjects?: ItemProject<T>[] | null;
  itemDistributionRules?: ItemDistributionRule<T>[] | null;
  itemAttributeGroups?: ItemAttributeGroups<T>[] | null;
  itemDepreciationParameters?: ItemDepreciationParameter<T>[] | null;
  itemPeriodControls?: ItemPeriodControl<T>[] | null;
  itemUnitOfMeasurementCollection?: ItemUnitOfMeasurement<T>[] | null;
  itemBarCodeCollection?: ItemBarCode<T>[] | null;
  itemIntrastatExtension?: ItemIntrastatExtension<T> | null;
  productTrees: ProductTreesType<T>[];
  serviceCalls: ServiceCallsType<T>[];
  itemGroups?: ItemGroupsType<T> | null;
  customsGroup?: CustomsGroupsType<T> | null;
  vatGroup?: VatGroupsType<T> | null;
  chartOfAccount?: ChartOfAccountsType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  commissionGroup2?: CommissionGroupsType<T> | null;
  manufacturer2?: ManufacturersType<T> | null;
  shippingType?: ShippingTypesType<T> | null;
  contractTemplate?: ContractTemplatesType<T> | null;
  salesTaxCode?: SalesTaxCodesType<T> | null;
  inventoryCycles?: InventoryCyclesType<T> | null;
  serviceGroup2?: ServiceGroupsType<T> | null;
  ncmCodeSetup?: NcmCodesSetupType<T> | null;
  materialGroup2?: MaterialGroupsType<T> | null;
  dnfCodeSetup?: DnfCodeSetupType<T> | null;
  brazilFuelIndexer?: BrazilFuelIndexersType<T> | null;
  brazilStringIndexer?: BrazilStringIndexersType<T> | null;
  brazilNumericIndexer?: BrazilNumericIndexersType<T> | null;
  assetClass2?: AssetClassesType<T> | null;
  assetGroup2?: AssetGroupsType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  warehouseLocation?: WarehouseLocationsType<T> | null;
  unitOfMeasurementGroup?: UnitOfMeasurementGroupsType<T> | null;
  unitOfMeasurement?: UnitOfMeasurementsType<T> | null;
  assetDepreciationGroup?: AssetDepreciationGroupsType<T> | null;
  indiaHsn?: IndiaHsnType<T> | null;
  resource?: ResourcesType<T> | null;
  indiaSacCode?: IndiaSacCodeType<T> | null;
  cestCodeData?: CestCodesType<T> | null;
  identificationCode?: IdentificationCodesType<T> | null;
  customerEquipmentCards: CustomerEquipmentCardsType<T>[];
  binLocations: BinLocationsType<T>[];
  alternateCatNum: AlternateCatNumType<T>[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType<T>[];
  barCodes: BarCodesType<T>[];
  resources: ResourcesType<T>[];
  knowledgeBaseSolutions: KnowledgeBaseSolutionsType<T>[];
  depreciationAreas: DepreciationAreasType<T>[];
  specialPrices: SpecialPricesType<T>[];
  serialNumberDetails: SerialNumberDetailsType<T>[];
  batchNumberDetails: BatchNumberDetailsType<T>[];
  stockTakings: StockTakingsType<T>[];
}
