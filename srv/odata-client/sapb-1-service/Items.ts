/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemsRequestBuilder } from './ItemsRequestBuilder';
import { Moment } from 'moment';
import { ItemPrice, ItemPriceField } from './ItemPrice';
import { ItemWarehouseInfo, ItemWarehouseInfoField } from './ItemWarehouseInfo';
import { ItemPreferredVendor, ItemPreferredVendorField } from './ItemPreferredVendor';
import { ItemLocalizationInfo, ItemLocalizationInfoField } from './ItemLocalizationInfo';
import { ItemProject, ItemProjectField } from './ItemProject';
import { ItemDistributionRule, ItemDistributionRuleField } from './ItemDistributionRule';
import { ItemAttributeGroups, ItemAttributeGroupsField } from './ItemAttributeGroups';
import { ItemDepreciationParameter, ItemDepreciationParameterField } from './ItemDepreciationParameter';
import { ItemPeriodControl, ItemPeriodControlField } from './ItemPeriodControl';
import { ItemUnitOfMeasurement, ItemUnitOfMeasurementField } from './ItemUnitOfMeasurement';
import { ItemBarCode, ItemBarCodeField } from './ItemBarCode';
import { ItemIntrastatExtension, ItemIntrastatExtensionField } from './ItemIntrastatExtension';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Items" of service "SAPB1".
 */
export class Items extends Entity implements ItemsType {
  /**
   * Technical entity name for Items.
   */
  static _entityName = 'Items';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Items.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: string;
  /**
   * Foreign Name.
   * @nullable
   */
  foreignName?: string;
  /**
   * Items Group Code.
   * @nullable
   */
  itemsGroupCode?: number;
  /**
   * Customs Group Code.
   * @nullable
   */
  customsGroupCode?: number;
  /**
   * Sales Vat Group.
   * @nullable
   */
  salesVatGroup?: string;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: string;
  /**
   * Income Account.
   * @nullable
   */
  incomeAccount?: string;
  /**
   * Exempt Income Account.
   * @nullable
   */
  exemptIncomeAccount?: string;
  /**
   * Expanse Account.
   * @nullable
   */
  expanseAccount?: string;
  /**
   * Mainsupplier.
   * @nullable
   */
  mainsupplier?: string;
  /**
   * Supplier Catalog No.
   * @nullable
   */
  supplierCatalogNo?: string;
  /**
   * Desired Inventory.
   * @nullable
   */
  desiredInventory?: number;
  /**
   * Min Inventory.
   * @nullable
   */
  minInventory?: number;
  /**
   * Picture.
   * @nullable
   */
  picture?: string;
  /**
   * User Text.
   * @nullable
   */
  userText?: string;
  /**
   * Serial Num.
   * @nullable
   */
  serialNum?: string;
  /**
   * Commission Percent.
   * @nullable
   */
  commissionPercent?: number;
  /**
   * Commission Sum.
   * @nullable
   */
  commissionSum?: number;
  /**
   * Commission Group.
   * @nullable
   */
  commissionGroup?: number;
  /**
   * Data Export Code.
   * @nullable
   */
  dataExportCode?: string;
  /**
   * Manufacturer.
   * @nullable
   */
  manufacturer?: number;
  /**
   * Quantity On Stock.
   * @nullable
   */
  quantityOnStock?: number;
  /**
   * Quantity Ordered From Vendors.
   * @nullable
   */
  quantityOrderedFromVendors?: number;
  /**
   * Quantity Ordered By Customers.
   * @nullable
   */
  quantityOrderedByCustomers?: number;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: Moment;
  /**
   * Valid Remarks.
   * @nullable
   */
  validRemarks?: string;
  /**
   * Frozen From.
   * @nullable
   */
  frozenFrom?: Moment;
  /**
   * Frozen To.
   * @nullable
   */
  frozenTo?: Moment;
  /**
   * Frozen Remarks.
   * @nullable
   */
  frozenRemarks?: string;
  /**
   * Sales Unit.
   * @nullable
   */
  salesUnit?: string;
  /**
   * Sales Items Per Unit.
   * @nullable
   */
  salesItemsPerUnit?: number;
  /**
   * Sales Packaging Unit.
   * @nullable
   */
  salesPackagingUnit?: string;
  /**
   * Sales Qty Per Pack Unit.
   * @nullable
   */
  salesQtyPerPackUnit?: number;
  /**
   * Sales Unit Length.
   * @nullable
   */
  salesUnitLength?: number;
  /**
   * Sales Length Unit.
   * @nullable
   */
  salesLengthUnit?: number;
  /**
   * Sales Unit Width.
   * @nullable
   */
  salesUnitWidth?: number;
  /**
   * Sales Width Unit.
   * @nullable
   */
  salesWidthUnit?: number;
  /**
   * Sales Unit Height.
   * @nullable
   */
  salesUnitHeight?: number;
  /**
   * Sales Height Unit.
   * @nullable
   */
  salesHeightUnit?: number;
  /**
   * Sales Unit Volume.
   * @nullable
   */
  salesUnitVolume?: number;
  /**
   * Sales Volume Unit.
   * @nullable
   */
  salesVolumeUnit?: number;
  /**
   * Sales Unit Weight.
   * @nullable
   */
  salesUnitWeight?: number;
  /**
   * Sales Weight Unit.
   * @nullable
   */
  salesWeightUnit?: number;
  /**
   * Purchase Unit.
   * @nullable
   */
  purchaseUnit?: string;
  /**
   * Purchase Items Per Unit.
   * @nullable
   */
  purchaseItemsPerUnit?: number;
  /**
   * Purchase Packaging Unit.
   * @nullable
   */
  purchasePackagingUnit?: string;
  /**
   * Purchase Qty Per Pack Unit.
   * @nullable
   */
  purchaseQtyPerPackUnit?: number;
  /**
   * Purchase Unit Length.
   * @nullable
   */
  purchaseUnitLength?: number;
  /**
   * Purchase Length Unit.
   * @nullable
   */
  purchaseLengthUnit?: number;
  /**
   * Purchase Unit Width.
   * @nullable
   */
  purchaseUnitWidth?: number;
  /**
   * Purchase Width Unit.
   * @nullable
   */
  purchaseWidthUnit?: number;
  /**
   * Purchase Unit Height.
   * @nullable
   */
  purchaseUnitHeight?: number;
  /**
   * Purchase Height Unit.
   * @nullable
   */
  purchaseHeightUnit?: number;
  /**
   * Purchase Unit Volume.
   * @nullable
   */
  purchaseUnitVolume?: number;
  /**
   * Purchase Volume Unit.
   * @nullable
   */
  purchaseVolumeUnit?: number;
  /**
   * Purchase Unit Weight.
   * @nullable
   */
  purchaseUnitWeight?: number;
  /**
   * Purchase Weight Unit.
   * @nullable
   */
  purchaseWeightUnit?: number;
  /**
   * Purchase Vat Group.
   * @nullable
   */
  purchaseVatGroup?: string;
  /**
   * Sales Factor 1.
   * @nullable
   */
  salesFactor1?: number;
  /**
   * Sales Factor 2.
   * @nullable
   */
  salesFactor2?: number;
  /**
   * Sales Factor 3.
   * @nullable
   */
  salesFactor3?: number;
  /**
   * Sales Factor 4.
   * @nullable
   */
  salesFactor4?: number;
  /**
   * Purchase Factor 1.
   * @nullable
   */
  purchaseFactor1?: number;
  /**
   * Purchase Factor 2.
   * @nullable
   */
  purchaseFactor2?: number;
  /**
   * Purchase Factor 3.
   * @nullable
   */
  purchaseFactor3?: number;
  /**
   * Purchase Factor 4.
   * @nullable
   */
  purchaseFactor4?: number;
  /**
   * Moving Average Price.
   * @nullable
   */
  movingAveragePrice?: number;
  /**
   * Foreign Revenues Account.
   * @nullable
   */
  foreignRevenuesAccount?: string;
  /**
   * Ec Revenues Account.
   * @nullable
   */
  ecRevenuesAccount?: string;
  /**
   * Foreign Expenses Account.
   * @nullable
   */
  foreignExpensesAccount?: string;
  /**
   * Ec Expenses Account.
   * @nullable
   */
  ecExpensesAccount?: string;
  /**
   * Avg Std Price.
   * @nullable
   */
  avgStdPrice?: number;
  /**
   * Default Warehouse.
   * @nullable
   */
  defaultWarehouse?: string;
  /**
   * Ship Type.
   * @nullable
   */
  shipType?: number;
  /**
   * Max Inventory.
   * @nullable
   */
  maxInventory?: number;
  /**
   * Purchase Height Unit 1.
   * @nullable
   */
  purchaseHeightUnit1?: number;
  /**
   * Purchase Unit Height 1.
   * @nullable
   */
  purchaseUnitHeight1?: number;
  /**
   * Purchase Length Unit 1.
   * @nullable
   */
  purchaseLengthUnit1?: number;
  /**
   * Purchase Unit Length 1.
   * @nullable
   */
  purchaseUnitLength1?: number;
  /**
   * Purchase Weight Unit 1.
   * @nullable
   */
  purchaseWeightUnit1?: number;
  /**
   * Purchase Unit Weight 1.
   * @nullable
   */
  purchaseUnitWeight1?: number;
  /**
   * Purchase Width Unit 1.
   * @nullable
   */
  purchaseWidthUnit1?: number;
  /**
   * Purchase Unit Width 1.
   * @nullable
   */
  purchaseUnitWidth1?: number;
  /**
   * Sales Height Unit 1.
   * @nullable
   */
  salesHeightUnit1?: number;
  /**
   * Sales Unit Height 1.
   * @nullable
   */
  salesUnitHeight1?: number;
  /**
   * Sales Length Unit 1.
   * @nullable
   */
  salesLengthUnit1?: number;
  /**
   * Sales Unit Length 1.
   * @nullable
   */
  salesUnitLength1?: number;
  /**
   * Sales Weight Unit 1.
   * @nullable
   */
  salesWeightUnit1?: number;
  /**
   * Sales Unit Weight 1.
   * @nullable
   */
  salesUnitWeight1?: number;
  /**
   * Sales Width Unit 1.
   * @nullable
   */
  salesWidthUnit1?: number;
  /**
   * Sales Unit Width 1.
   * @nullable
   */
  salesUnitWidth1?: number;
  /**
   * Sww.
   * @nullable
   */
  sww?: string;
  /**
   * Warranty Template.
   * @nullable
   */
  warrantyTemplate?: string;
  /**
   * Ar Tax Code.
   * @nullable
   */
  arTaxCode?: string;
  /**
   * Ap Tax Code.
   * @nullable
   */
  apTaxCode?: string;
  /**
   * Base Unit Name.
   * @nullable
   */
  baseUnitName?: string;
  /**
   * Item Country Org.
   * @nullable
   */
  itemCountryOrg?: string;
  /**
   * Inventory Uom.
   * @nullable
   */
  inventoryUom?: string;
  /**
   * Order Intervals.
   * @nullable
   */
  orderIntervals?: number;
  /**
   * Order Multiple.
   * @nullable
   */
  orderMultiple?: number;
  /**
   * Lead Time.
   * @nullable
   */
  leadTime?: number;
  /**
   * Min Order Quantity.
   * @nullable
   */
  minOrderQuantity?: number;
  /**
   * Outgoing Service Code.
   * @nullable
   */
  outgoingServiceCode?: number;
  /**
   * Incoming Service Code.
   * @nullable
   */
  incomingServiceCode?: number;
  /**
   * Service Group.
   * @nullable
   */
  serviceGroup?: number;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: number;
  /**
   * Material Group.
   * @nullable
   */
  materialGroup?: number;
  /**
   * Product Source.
   * @nullable
   */
  productSource?: string;
  /**
   * Dnf Entry.
   * @nullable
   */
  dnfEntry?: number;
  /**
   * Gts Item Spec.
   * @nullable
   */
  gtsItemSpec?: string;
  /**
   * Gts Item Tax Category.
   * @nullable
   */
  gtsItemTaxCategory?: string;
  /**
   * Fuel Id.
   * @nullable
   */
  fuelId?: number;
  /**
   * Beverage Table Code.
   * @nullable
   */
  beverageTableCode?: string;
  /**
   * Beverage Group Code.
   * @nullable
   */
  beverageGroupCode?: string;
  /**
   * Beverage Commercial Brand Code.
   * @nullable
   */
  beverageCommercialBrandCode?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Tolerance Days.
   * @nullable
   */
  toleranceDays?: number;
  /**
   * Asset Class.
   * @nullable
   */
  assetClass?: string;
  /**
   * Asset Group.
   * @nullable
   */
  assetGroup?: string;
  /**
   * Inventory Number.
   * @nullable
   */
  inventoryNumber?: string;
  /**
   * Technician.
   * @nullable
   */
  technician?: number;
  /**
   * Employee.
   * @nullable
   */
  employee?: number;
  /**
   * Location.
   * @nullable
   */
  location?: number;
  /**
   * Capitalization Date.
   * @nullable
   */
  capitalizationDate?: Moment;
  /**
   * Uo M Group Entry.
   * @nullable
   */
  uoMGroupEntry?: number;
  /**
   * Inventory Uo M Entry.
   * @nullable
   */
  inventoryUoMEntry?: number;
  /**
   * Default Sales Uo M Entry.
   * @nullable
   */
  defaultSalesUoMEntry?: number;
  /**
   * Default Purchasing Uo M Entry.
   * @nullable
   */
  defaultPurchasingUoMEntry?: number;
  /**
   * Depreciation Group.
   * @nullable
   */
  depreciationGroup?: string;
  /**
   * Asset Serial Number.
   * @nullable
   */
  assetSerialNumber?: string;
  /**
   * Inventory Weight.
   * @nullable
   */
  inventoryWeight?: number;
  /**
   * Inventory Weight Unit.
   * @nullable
   */
  inventoryWeightUnit?: number;
  /**
   * Inventory Weight 1.
   * @nullable
   */
  inventoryWeight1?: number;
  /**
   * Inventory Weight Unit 1.
   * @nullable
   */
  inventoryWeightUnit1?: number;
  /**
   * Default Counting Unit.
   * @nullable
   */
  defaultCountingUnit?: string;
  /**
   * Counting Items Per Unit.
   * @nullable
   */
  countingItemsPerUnit?: number;
  /**
   * Default Counting Uo M Entry.
   * @nullable
   */
  defaultCountingUoMEntry?: number;
  /**
   * Chapter Id.
   * @nullable
   */
  chapterId?: number;
  /**
   * Scs Code.
   * @nullable
   */
  scsCode?: string;
  /**
   * Prod Std Cost.
   * @nullable
   */
  prodStdCost?: number;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * Linked Resource.
   * @nullable
   */
  linkedResource?: string;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: Moment;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: Time;
  /**
   * Sac Entry.
   * @nullable
   */
  sacEntry?: number;
  /**
   * Service Category Entry.
   * @nullable
   */
  serviceCategoryEntry?: number;
  /**
   * Capital Goods On Hold Percent.
   * @nullable
   */
  capitalGoodsOnHoldPercent?: number;
  /**
   * Capital Goods On Hold Limit.
   * @nullable
   */
  capitalGoodsOnHoldLimit?: number;
  /**
   * Assessable Value.
   * @nullable
   */
  assessableValue?: number;
  /**
   * Ass Val 4 Wtr.
   * @nullable
   */
  assVal4Wtr?: number;
  /**
   * Tnved.
   * @nullable
   */
  tnved?: string;
  /**
   * Pricing Unit.
   * @nullable
   */
  pricingUnit?: number;
  /**
   * Item Prices.
   * @nullable
   */
  itemPrices?: ItemPrice[];
  /**
   * Item Warehouse Info Collection.
   * @nullable
   */
  itemWarehouseInfoCollection?: ItemWarehouseInfo[];
  /**
   * Item Preferred Vendors.
   * @nullable
   */
  itemPreferredVendors?: ItemPreferredVendor[];
  /**
   * Item Localization Infos.
   * @nullable
   */
  itemLocalizationInfos?: ItemLocalizationInfo[];
  /**
   * Item Projects.
   * @nullable
   */
  itemProjects?: ItemProject[];
  /**
   * Item Distribution Rules.
   * @nullable
   */
  itemDistributionRules?: ItemDistributionRule[];
  /**
   * Item Attribute Groups.
   * @nullable
   */
  itemAttributeGroups?: ItemAttributeGroups[];
  /**
   * Item Depreciation Parameters.
   * @nullable
   */
  itemDepreciationParameters?: ItemDepreciationParameter[];
  /**
   * Item Period Controls.
   * @nullable
   */
  itemPeriodControls?: ItemPeriodControl[];
  /**
   * Item Unit Of Measurement Collection.
   * @nullable
   */
  itemUnitOfMeasurementCollection?: ItemUnitOfMeasurement[];
  /**
   * Item Bar Code Collection.
   * @nullable
   */
  itemBarCodeCollection?: ItemBarCode[];
  /**
   * Item Intrastat Extension.
   * @nullable
   */
  itemIntrastatExtension?: ItemIntrastatExtension;
  /**
   * One-to-many navigation property to the [[SpecialPrices]] entity.
   */
  specialPrices!: SpecialPrices[];
  /**
   * One-to-one navigation property to the [[ItemGroups]] entity.
   */
  itemGroups!: ItemGroups;
  /**
   * One-to-one navigation property to the [[CustomsGroups]] entity.
   */
  customsGroup!: CustomsGroups;
  /**
   * One-to-one navigation property to the [[VatGroups]] entity.
   */
  vatGroup!: VatGroups;
  /**
   * One-to-one navigation property to the [[ChartOfAccounts]] entity.
   */
  chartOfAccount!: ChartOfAccounts;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[CommissionGroups]] entity.
   */
  commissionGroup2!: CommissionGroups;
  /**
   * One-to-one navigation property to the [[Manufacturers]] entity.
   */
  manufacturer2!: Manufacturers;
  /**
   * One-to-one navigation property to the [[ShippingTypes]] entity.
   */
  shippingType!: ShippingTypes;
  /**
   * One-to-one navigation property to the [[ContractTemplates]] entity.
   */
  contractTemplate!: ContractTemplates;
  /**
   * One-to-one navigation property to the [[SalesTaxCodes]] entity.
   */
  salesTaxCode!: SalesTaxCodes;
  /**
   * One-to-one navigation property to the [[InventoryCycles]] entity.
   */
  inventoryCycles!: InventoryCycles;
  /**
   * One-to-one navigation property to the [[ServiceGroups]] entity.
   */
  serviceGroup2!: ServiceGroups;
  /**
   * One-to-one navigation property to the [[NcmCodesSetup]] entity.
   */
  ncmCodeSetup!: NcmCodesSetup;
  /**
   * One-to-one navigation property to the [[MaterialGroups]] entity.
   */
  materialGroup2!: MaterialGroups;
  /**
   * One-to-one navigation property to the [[DnfCodeSetup]] entity.
   */
  dnfCodeSetup!: DnfCodeSetup;
  /**
   * One-to-one navigation property to the [[BrazilFuelIndexers]] entity.
   */
  brazilFuelIndexer!: BrazilFuelIndexers;
  /**
   * One-to-one navigation property to the [[BrazilStringIndexers]] entity.
   */
  brazilStringIndexer!: BrazilStringIndexers;
  /**
   * One-to-one navigation property to the [[BrazilNumericIndexers]] entity.
   */
  brazilNumericIndexer!: BrazilNumericIndexers;
  /**
   * One-to-one navigation property to the [[AssetClasses]] entity.
   */
  assetClass2!: AssetClasses;
  /**
   * One-to-one navigation property to the [[AssetGroups]] entity.
   */
  assetGroup2!: AssetGroups;
  /**
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[WarehouseLocations]] entity.
   */
  warehouseLocation!: WarehouseLocations;
  /**
   * One-to-one navigation property to the [[UnitOfMeasurementGroups]] entity.
   */
  unitOfMeasurementGroup!: UnitOfMeasurementGroups;
  /**
   * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
   */
  unitOfMeasurement!: UnitOfMeasurements;
  /**
   * One-to-one navigation property to the [[AssetDepreciationGroups]] entity.
   */
  assetDepreciationGroup!: AssetDepreciationGroups;
  /**
   * One-to-one navigation property to the [[Resources]] entity.
   */
  resource!: Resources;
  /**
   * One-to-one navigation property to the [[IndiaSacCode]] entity.
   */
  indiaSacCode!: IndiaSacCode;
  /**
   * One-to-many navigation property to the [[StockTakings]] entity.
   */
  stockTakings!: StockTakings[];
  /**
   * One-to-many navigation property to the [[DepreciationAreas]] entity.
   */
  depreciationAreas!: DepreciationAreas[];
  /**
   * One-to-many navigation property to the [[ProductTrees]] entity.
   */
  productTrees!: ProductTrees[];
  /**
   * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
   */
  glAccountAdvancedRules!: GlAccountAdvancedRules[];
  /**
   * One-to-many navigation property to the [[BarCodes]] entity.
   */
  barCodes!: BarCodes[];
  /**
   * One-to-many navigation property to the [[BatchNumberDetails]] entity.
   */
  batchNumberDetails!: BatchNumberDetails[];
  /**
   * One-to-many navigation property to the [[SerialNumberDetails]] entity.
   */
  serialNumberDetails!: SerialNumberDetails[];
  /**
   * One-to-many navigation property to the [[BinLocations]] entity.
   */
  binLocations!: BinLocations[];
  /**
   * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards[];
  /**
   * One-to-many navigation property to the [[KnowledgeBaseSolutions]] entity.
   */
  knowledgeBaseSolutions!: KnowledgeBaseSolutions[];
  /**
   * One-to-many navigation property to the [[ServiceCalls]] entity.
   */
  serviceCalls!: ServiceCalls[];
  /**
   * One-to-many navigation property to the [[AlternateCatNum]] entity.
   */
  alternateCatNum!: AlternateCatNum[];
  /**
   * One-to-many navigation property to the [[Resources]] entity.
   */
  resources!: Resources[];

  /**
   * Returns an entity builder to construct instances `Items`.
   * @returns A builder that constructs instances of entity type `Items`.
   */
  static builder(): EntityBuilderType<Items, ItemsTypeForceMandatory> {
    return Entity.entityBuilder(Items);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Items` entity type.
   * @returns A `Items` request builder.
   */
  static requestBuilder(): ItemsRequestBuilder {
    return new ItemsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Items`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Items`.
   */
  static customField(fieldName: string): CustomField<Items> {
    return Entity.customFieldSelector(fieldName, Items);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SpecialPrices, SpecialPricesType } from './SpecialPrices';
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
import { BrazilFuelIndexers, BrazilFuelIndexersType } from './BrazilFuelIndexers';
import { BrazilStringIndexers, BrazilStringIndexersType } from './BrazilStringIndexers';
import { BrazilNumericIndexers, BrazilNumericIndexersType } from './BrazilNumericIndexers';
import { AssetClasses, AssetClassesType } from './AssetClasses';
import { AssetGroups, AssetGroupsType } from './AssetGroups';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';
import { UnitOfMeasurementGroups, UnitOfMeasurementGroupsType } from './UnitOfMeasurementGroups';
import { UnitOfMeasurements, UnitOfMeasurementsType } from './UnitOfMeasurements';
import { AssetDepreciationGroups, AssetDepreciationGroupsType } from './AssetDepreciationGroups';
import { Resources, ResourcesType } from './Resources';
import { IndiaSacCode, IndiaSacCodeType } from './IndiaSacCode';
import { StockTakings, StockTakingsType } from './StockTakings';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { ProductTrees, ProductTreesType } from './ProductTrees';
import { GlAccountAdvancedRules, GlAccountAdvancedRulesType } from './GlAccountAdvancedRules';
import { BarCodes, BarCodesType } from './BarCodes';
import { BatchNumberDetails, BatchNumberDetailsType } from './BatchNumberDetails';
import { SerialNumberDetails, SerialNumberDetailsType } from './SerialNumberDetails';
import { BinLocations, BinLocationsType } from './BinLocations';
import { CustomerEquipmentCards, CustomerEquipmentCardsType } from './CustomerEquipmentCards';
import { KnowledgeBaseSolutions, KnowledgeBaseSolutionsType } from './KnowledgeBaseSolutions';
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
import { AlternateCatNum, AlternateCatNumType } from './AlternateCatNum';

export interface ItemsType {
  itemCode?: string;
  itemName?: string;
  foreignName?: string;
  itemsGroupCode?: number;
  customsGroupCode?: number;
  salesVatGroup?: string;
  barCode?: string;
  incomeAccount?: string;
  exemptIncomeAccount?: string;
  expanseAccount?: string;
  mainsupplier?: string;
  supplierCatalogNo?: string;
  desiredInventory?: number;
  minInventory?: number;
  picture?: string;
  userText?: string;
  serialNum?: string;
  commissionPercent?: number;
  commissionSum?: number;
  commissionGroup?: number;
  dataExportCode?: string;
  manufacturer?: number;
  quantityOnStock?: number;
  quantityOrderedFromVendors?: number;
  quantityOrderedByCustomers?: number;
  validFrom?: Moment;
  validTo?: Moment;
  validRemarks?: string;
  frozenFrom?: Moment;
  frozenTo?: Moment;
  frozenRemarks?: string;
  salesUnit?: string;
  salesItemsPerUnit?: number;
  salesPackagingUnit?: string;
  salesQtyPerPackUnit?: number;
  salesUnitLength?: number;
  salesLengthUnit?: number;
  salesUnitWidth?: number;
  salesWidthUnit?: number;
  salesUnitHeight?: number;
  salesHeightUnit?: number;
  salesUnitVolume?: number;
  salesVolumeUnit?: number;
  salesUnitWeight?: number;
  salesWeightUnit?: number;
  purchaseUnit?: string;
  purchaseItemsPerUnit?: number;
  purchasePackagingUnit?: string;
  purchaseQtyPerPackUnit?: number;
  purchaseUnitLength?: number;
  purchaseLengthUnit?: number;
  purchaseUnitWidth?: number;
  purchaseWidthUnit?: number;
  purchaseUnitHeight?: number;
  purchaseHeightUnit?: number;
  purchaseUnitVolume?: number;
  purchaseVolumeUnit?: number;
  purchaseUnitWeight?: number;
  purchaseWeightUnit?: number;
  purchaseVatGroup?: string;
  salesFactor1?: number;
  salesFactor2?: number;
  salesFactor3?: number;
  salesFactor4?: number;
  purchaseFactor1?: number;
  purchaseFactor2?: number;
  purchaseFactor3?: number;
  purchaseFactor4?: number;
  movingAveragePrice?: number;
  foreignRevenuesAccount?: string;
  ecRevenuesAccount?: string;
  foreignExpensesAccount?: string;
  ecExpensesAccount?: string;
  avgStdPrice?: number;
  defaultWarehouse?: string;
  shipType?: number;
  maxInventory?: number;
  purchaseHeightUnit1?: number;
  purchaseUnitHeight1?: number;
  purchaseLengthUnit1?: number;
  purchaseUnitLength1?: number;
  purchaseWeightUnit1?: number;
  purchaseUnitWeight1?: number;
  purchaseWidthUnit1?: number;
  purchaseUnitWidth1?: number;
  salesHeightUnit1?: number;
  salesUnitHeight1?: number;
  salesLengthUnit1?: number;
  salesUnitLength1?: number;
  salesWeightUnit1?: number;
  salesUnitWeight1?: number;
  salesWidthUnit1?: number;
  salesUnitWidth1?: number;
  sww?: string;
  warrantyTemplate?: string;
  arTaxCode?: string;
  apTaxCode?: string;
  baseUnitName?: string;
  itemCountryOrg?: string;
  inventoryUom?: string;
  orderIntervals?: number;
  orderMultiple?: number;
  leadTime?: number;
  minOrderQuantity?: number;
  outgoingServiceCode?: number;
  incomingServiceCode?: number;
  serviceGroup?: number;
  ncmCode?: number;
  materialGroup?: number;
  productSource?: string;
  dnfEntry?: number;
  gtsItemSpec?: string;
  gtsItemTaxCategory?: string;
  fuelId?: number;
  beverageTableCode?: string;
  beverageGroupCode?: string;
  beverageCommercialBrandCode?: number;
  series?: number;
  toleranceDays?: number;
  assetClass?: string;
  assetGroup?: string;
  inventoryNumber?: string;
  technician?: number;
  employee?: number;
  location?: number;
  capitalizationDate?: Moment;
  uoMGroupEntry?: number;
  inventoryUoMEntry?: number;
  defaultSalesUoMEntry?: number;
  defaultPurchasingUoMEntry?: number;
  depreciationGroup?: string;
  assetSerialNumber?: string;
  inventoryWeight?: number;
  inventoryWeightUnit?: number;
  inventoryWeight1?: number;
  inventoryWeightUnit1?: number;
  defaultCountingUnit?: string;
  countingItemsPerUnit?: number;
  defaultCountingUoMEntry?: number;
  chapterId?: number;
  scsCode?: string;
  prodStdCost?: number;
  attachmentEntry?: number;
  linkedResource?: string;
  updateDate?: Moment;
  updateTime?: Time;
  sacEntry?: number;
  serviceCategoryEntry?: number;
  capitalGoodsOnHoldPercent?: number;
  capitalGoodsOnHoldLimit?: number;
  assessableValue?: number;
  assVal4Wtr?: number;
  tnved?: string;
  pricingUnit?: number;
  itemPrices?: ItemPrice[];
  itemWarehouseInfoCollection?: ItemWarehouseInfo[];
  itemPreferredVendors?: ItemPreferredVendor[];
  itemLocalizationInfos?: ItemLocalizationInfo[];
  itemProjects?: ItemProject[];
  itemDistributionRules?: ItemDistributionRule[];
  itemAttributeGroups?: ItemAttributeGroups[];
  itemDepreciationParameters?: ItemDepreciationParameter[];
  itemPeriodControls?: ItemPeriodControl[];
  itemUnitOfMeasurementCollection?: ItemUnitOfMeasurement[];
  itemBarCodeCollection?: ItemBarCode[];
  itemIntrastatExtension?: ItemIntrastatExtension;
  specialPrices: SpecialPricesType[];
  itemGroups: ItemGroupsType;
  customsGroup: CustomsGroupsType;
  vatGroup: VatGroupsType;
  chartOfAccount: ChartOfAccountsType;
  businessPartner: BusinessPartnersType;
  commissionGroup2: CommissionGroupsType;
  manufacturer2: ManufacturersType;
  shippingType: ShippingTypesType;
  contractTemplate: ContractTemplatesType;
  salesTaxCode: SalesTaxCodesType;
  inventoryCycles: InventoryCyclesType;
  serviceGroup2: ServiceGroupsType;
  ncmCodeSetup: NcmCodesSetupType;
  materialGroup2: MaterialGroupsType;
  dnfCodeSetup: DnfCodeSetupType;
  brazilFuelIndexer: BrazilFuelIndexersType;
  brazilStringIndexer: BrazilStringIndexersType;
  brazilNumericIndexer: BrazilNumericIndexersType;
  assetClass2: AssetClassesType;
  assetGroup2: AssetGroupsType;
  employeeInfo: EmployeesInfoType;
  warehouseLocation: WarehouseLocationsType;
  unitOfMeasurementGroup: UnitOfMeasurementGroupsType;
  unitOfMeasurement: UnitOfMeasurementsType;
  assetDepreciationGroup: AssetDepreciationGroupsType;
  resource: ResourcesType;
  indiaSacCode: IndiaSacCodeType;
  stockTakings: StockTakingsType[];
  depreciationAreas: DepreciationAreasType[];
  productTrees: ProductTreesType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
  barCodes: BarCodesType[];
  batchNumberDetails: BatchNumberDetailsType[];
  serialNumberDetails: SerialNumberDetailsType[];
  binLocations: BinLocationsType[];
  customerEquipmentCards: CustomerEquipmentCardsType[];
  knowledgeBaseSolutions: KnowledgeBaseSolutionsType[];
  serviceCalls: ServiceCallsType[];
  alternateCatNum: AlternateCatNumType[];
  resources: ResourcesType[];
}

export interface ItemsTypeForceMandatory {
  itemCode: string;
  itemName: string;
  foreignName: string;
  itemsGroupCode: number;
  customsGroupCode: number;
  salesVatGroup: string;
  barCode: string;
  incomeAccount: string;
  exemptIncomeAccount: string;
  expanseAccount: string;
  mainsupplier: string;
  supplierCatalogNo: string;
  desiredInventory: number;
  minInventory: number;
  picture: string;
  userText: string;
  serialNum: string;
  commissionPercent: number;
  commissionSum: number;
  commissionGroup: number;
  dataExportCode: string;
  manufacturer: number;
  quantityOnStock: number;
  quantityOrderedFromVendors: number;
  quantityOrderedByCustomers: number;
  validFrom: Moment;
  validTo: Moment;
  validRemarks: string;
  frozenFrom: Moment;
  frozenTo: Moment;
  frozenRemarks: string;
  salesUnit: string;
  salesItemsPerUnit: number;
  salesPackagingUnit: string;
  salesQtyPerPackUnit: number;
  salesUnitLength: number;
  salesLengthUnit: number;
  salesUnitWidth: number;
  salesWidthUnit: number;
  salesUnitHeight: number;
  salesHeightUnit: number;
  salesUnitVolume: number;
  salesVolumeUnit: number;
  salesUnitWeight: number;
  salesWeightUnit: number;
  purchaseUnit: string;
  purchaseItemsPerUnit: number;
  purchasePackagingUnit: string;
  purchaseQtyPerPackUnit: number;
  purchaseUnitLength: number;
  purchaseLengthUnit: number;
  purchaseUnitWidth: number;
  purchaseWidthUnit: number;
  purchaseUnitHeight: number;
  purchaseHeightUnit: number;
  purchaseUnitVolume: number;
  purchaseVolumeUnit: number;
  purchaseUnitWeight: number;
  purchaseWeightUnit: number;
  purchaseVatGroup: string;
  salesFactor1: number;
  salesFactor2: number;
  salesFactor3: number;
  salesFactor4: number;
  purchaseFactor1: number;
  purchaseFactor2: number;
  purchaseFactor3: number;
  purchaseFactor4: number;
  movingAveragePrice: number;
  foreignRevenuesAccount: string;
  ecRevenuesAccount: string;
  foreignExpensesAccount: string;
  ecExpensesAccount: string;
  avgStdPrice: number;
  defaultWarehouse: string;
  shipType: number;
  maxInventory: number;
  purchaseHeightUnit1: number;
  purchaseUnitHeight1: number;
  purchaseLengthUnit1: number;
  purchaseUnitLength1: number;
  purchaseWeightUnit1: number;
  purchaseUnitWeight1: number;
  purchaseWidthUnit1: number;
  purchaseUnitWidth1: number;
  salesHeightUnit1: number;
  salesUnitHeight1: number;
  salesLengthUnit1: number;
  salesUnitLength1: number;
  salesWeightUnit1: number;
  salesUnitWeight1: number;
  salesWidthUnit1: number;
  salesUnitWidth1: number;
  sww: string;
  warrantyTemplate: string;
  arTaxCode: string;
  apTaxCode: string;
  baseUnitName: string;
  itemCountryOrg: string;
  inventoryUom: string;
  orderIntervals: number;
  orderMultiple: number;
  leadTime: number;
  minOrderQuantity: number;
  outgoingServiceCode: number;
  incomingServiceCode: number;
  serviceGroup: number;
  ncmCode: number;
  materialGroup: number;
  productSource: string;
  dnfEntry: number;
  gtsItemSpec: string;
  gtsItemTaxCategory: string;
  fuelId: number;
  beverageTableCode: string;
  beverageGroupCode: string;
  beverageCommercialBrandCode: number;
  series: number;
  toleranceDays: number;
  assetClass: string;
  assetGroup: string;
  inventoryNumber: string;
  technician: number;
  employee: number;
  location: number;
  capitalizationDate: Moment;
  uoMGroupEntry: number;
  inventoryUoMEntry: number;
  defaultSalesUoMEntry: number;
  defaultPurchasingUoMEntry: number;
  depreciationGroup: string;
  assetSerialNumber: string;
  inventoryWeight: number;
  inventoryWeightUnit: number;
  inventoryWeight1: number;
  inventoryWeightUnit1: number;
  defaultCountingUnit: string;
  countingItemsPerUnit: number;
  defaultCountingUoMEntry: number;
  chapterId: number;
  scsCode: string;
  prodStdCost: number;
  attachmentEntry: number;
  linkedResource: string;
  updateDate: Moment;
  updateTime: Time;
  sacEntry: number;
  serviceCategoryEntry: number;
  capitalGoodsOnHoldPercent: number;
  capitalGoodsOnHoldLimit: number;
  assessableValue: number;
  assVal4Wtr: number;
  tnved: string;
  pricingUnit: number;
  itemPrices: ItemPrice[];
  itemWarehouseInfoCollection: ItemWarehouseInfo[];
  itemPreferredVendors: ItemPreferredVendor[];
  itemLocalizationInfos: ItemLocalizationInfo[];
  itemProjects: ItemProject[];
  itemDistributionRules: ItemDistributionRule[];
  itemAttributeGroups: ItemAttributeGroups[];
  itemDepreciationParameters: ItemDepreciationParameter[];
  itemPeriodControls: ItemPeriodControl[];
  itemUnitOfMeasurementCollection: ItemUnitOfMeasurement[];
  itemBarCodeCollection: ItemBarCode[];
  itemIntrastatExtension: ItemIntrastatExtension;
  specialPrices: SpecialPricesType[];
  itemGroups: ItemGroupsType;
  customsGroup: CustomsGroupsType;
  vatGroup: VatGroupsType;
  chartOfAccount: ChartOfAccountsType;
  businessPartner: BusinessPartnersType;
  commissionGroup2: CommissionGroupsType;
  manufacturer2: ManufacturersType;
  shippingType: ShippingTypesType;
  contractTemplate: ContractTemplatesType;
  salesTaxCode: SalesTaxCodesType;
  inventoryCycles: InventoryCyclesType;
  serviceGroup2: ServiceGroupsType;
  ncmCodeSetup: NcmCodesSetupType;
  materialGroup2: MaterialGroupsType;
  dnfCodeSetup: DnfCodeSetupType;
  brazilFuelIndexer: BrazilFuelIndexersType;
  brazilStringIndexer: BrazilStringIndexersType;
  brazilNumericIndexer: BrazilNumericIndexersType;
  assetClass2: AssetClassesType;
  assetGroup2: AssetGroupsType;
  employeeInfo: EmployeesInfoType;
  warehouseLocation: WarehouseLocationsType;
  unitOfMeasurementGroup: UnitOfMeasurementGroupsType;
  unitOfMeasurement: UnitOfMeasurementsType;
  assetDepreciationGroup: AssetDepreciationGroupsType;
  resource: ResourcesType;
  indiaSacCode: IndiaSacCodeType;
  stockTakings: StockTakingsType[];
  depreciationAreas: DepreciationAreasType[];
  productTrees: ProductTreesType[];
  glAccountAdvancedRules: GlAccountAdvancedRulesType[];
  barCodes: BarCodesType[];
  batchNumberDetails: BatchNumberDetailsType[];
  serialNumberDetails: SerialNumberDetailsType[];
  binLocations: BinLocationsType[];
  customerEquipmentCards: CustomerEquipmentCardsType[];
  knowledgeBaseSolutions: KnowledgeBaseSolutionsType[];
  serviceCalls: ServiceCallsType[];
  alternateCatNum: AlternateCatNumType[];
  resources: ResourcesType[];
}

export namespace Items {
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<Items> = new StringField('ItemCode', Items, 'Edm.String');
  /**
   * Static representation of the [[itemName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_NAME: StringField<Items> = new StringField('ItemName', Items, 'Edm.String');
  /**
   * Static representation of the [[foreignName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_NAME: StringField<Items> = new StringField('ForeignName', Items, 'Edm.String');
  /**
   * Static representation of the [[itemsGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS_GROUP_CODE: NumberField<Items> = new NumberField('ItemsGroupCode', Items, 'Edm.Int32');
  /**
   * Static representation of the [[customsGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMS_GROUP_CODE: NumberField<Items> = new NumberField('CustomsGroupCode', Items, 'Edm.Int32');
  /**
   * Static representation of the [[salesVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_VAT_GROUP: StringField<Items> = new StringField('SalesVATGroup', Items, 'Edm.String');
  /**
   * Static representation of the [[barCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BAR_CODE: StringField<Items> = new StringField('BarCode', Items, 'Edm.String');
  /**
   * Static representation of the [[incomeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOME_ACCOUNT: StringField<Items> = new StringField('IncomeAccount', Items, 'Edm.String');
  /**
   * Static representation of the [[exemptIncomeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPT_INCOME_ACCOUNT: StringField<Items> = new StringField('ExemptIncomeAccount', Items, 'Edm.String');
  /**
   * Static representation of the [[expanseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPANSE_ACCOUNT: StringField<Items> = new StringField('ExpanseAccount', Items, 'Edm.String');
  /**
   * Static representation of the [[mainsupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAINSUPPLIER: StringField<Items> = new StringField('Mainsupplier', Items, 'Edm.String');
  /**
   * Static representation of the [[supplierCatalogNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CATALOG_NO: StringField<Items> = new StringField('SupplierCatalogNo', Items, 'Edm.String');
  /**
   * Static representation of the [[desiredInventory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESIRED_INVENTORY: NumberField<Items> = new NumberField('DesiredInventory', Items, 'Edm.Double');
  /**
   * Static representation of the [[minInventory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_INVENTORY: NumberField<Items> = new NumberField('MinInventory', Items, 'Edm.Double');
  /**
   * Static representation of the [[picture]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICTURE: StringField<Items> = new StringField('Picture', Items, 'Edm.String');
  /**
   * Static representation of the [[userText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_TEXT: StringField<Items> = new StringField('User_Text', Items, 'Edm.String');
  /**
   * Static representation of the [[serialNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIAL_NUM: StringField<Items> = new StringField('SerialNum', Items, 'Edm.String');
  /**
   * Static representation of the [[commissionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_PERCENT: NumberField<Items> = new NumberField('CommissionPercent', Items, 'Edm.Double');
  /**
   * Static representation of the [[commissionSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_SUM: NumberField<Items> = new NumberField('CommissionSum', Items, 'Edm.Double');
  /**
   * Static representation of the [[commissionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_GROUP: NumberField<Items> = new NumberField('CommissionGroup', Items, 'Edm.Int32');
  /**
   * Static representation of the [[dataExportCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_EXPORT_CODE: StringField<Items> = new StringField('DataExportCode', Items, 'Edm.String');
  /**
   * Static representation of the [[manufacturer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUFACTURER: NumberField<Items> = new NumberField('Manufacturer', Items, 'Edm.Int32');
  /**
   * Static representation of the [[quantityOnStock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_ON_STOCK: NumberField<Items> = new NumberField('QuantityOnStock', Items, 'Edm.Double');
  /**
   * Static representation of the [[quantityOrderedFromVendors]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_ORDERED_FROM_VENDORS: NumberField<Items> = new NumberField('QuantityOrderedFromVendors', Items, 'Edm.Double');
  /**
   * Static representation of the [[quantityOrderedByCustomers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_ORDERED_BY_CUSTOMERS: NumberField<Items> = new NumberField('QuantityOrderedByCustomers', Items, 'Edm.Double');
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<Items> = new DateField('ValidFrom', Items, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<Items> = new DateField('ValidTo', Items, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_REMARKS: StringField<Items> = new StringField('ValidRemarks', Items, 'Edm.String');
  /**
   * Static representation of the [[frozenFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_FROM: DateField<Items> = new DateField('FrozenFrom', Items, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[frozenTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_TO: DateField<Items> = new DateField('FrozenTo', Items, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[frozenRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FROZEN_REMARKS: StringField<Items> = new StringField('FrozenRemarks', Items, 'Edm.String');
  /**
   * Static representation of the [[salesUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT: StringField<Items> = new StringField('SalesUnit', Items, 'Edm.String');
  /**
   * Static representation of the [[salesItemsPerUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ITEMS_PER_UNIT: NumberField<Items> = new NumberField('SalesItemsPerUnit', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesPackagingUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PACKAGING_UNIT: StringField<Items> = new StringField('SalesPackagingUnit', Items, 'Edm.String');
  /**
   * Static representation of the [[salesQtyPerPackUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_QTY_PER_PACK_UNIT: NumberField<Items> = new NumberField('SalesQtyPerPackUnit', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesUnitLength]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT_LENGTH: NumberField<Items> = new NumberField('SalesUnitLength', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesLengthUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_LENGTH_UNIT: NumberField<Items> = new NumberField('SalesLengthUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[salesUnitWidth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT_WIDTH: NumberField<Items> = new NumberField('SalesUnitWidth', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesWidthUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_WIDTH_UNIT: NumberField<Items> = new NumberField('SalesWidthUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[salesUnitHeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT_HEIGHT: NumberField<Items> = new NumberField('SalesUnitHeight', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesHeightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_HEIGHT_UNIT: NumberField<Items> = new NumberField('SalesHeightUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[salesUnitVolume]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT_VOLUME: NumberField<Items> = new NumberField('SalesUnitVolume', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesVolumeUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_VOLUME_UNIT: NumberField<Items> = new NumberField('SalesVolumeUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[salesUnitWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT_WEIGHT: NumberField<Items> = new NumberField('SalesUnitWeight', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesWeightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_WEIGHT_UNIT: NumberField<Items> = new NumberField('SalesWeightUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT: StringField<Items> = new StringField('PurchaseUnit', Items, 'Edm.String');
  /**
   * Static representation of the [[purchaseItemsPerUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ITEMS_PER_UNIT: NumberField<Items> = new NumberField('PurchaseItemsPerUnit', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchasePackagingUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_PACKAGING_UNIT: StringField<Items> = new StringField('PurchasePackagingUnit', Items, 'Edm.String');
  /**
   * Static representation of the [[purchaseQtyPerPackUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_QTY_PER_PACK_UNIT: NumberField<Items> = new NumberField('PurchaseQtyPerPackUnit', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseUnitLength]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT_LENGTH: NumberField<Items> = new NumberField('PurchaseUnitLength', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseLengthUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_LENGTH_UNIT: NumberField<Items> = new NumberField('PurchaseLengthUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseUnitWidth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT_WIDTH: NumberField<Items> = new NumberField('PurchaseUnitWidth', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseWidthUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_WIDTH_UNIT: NumberField<Items> = new NumberField('PurchaseWidthUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseUnitHeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT_HEIGHT: NumberField<Items> = new NumberField('PurchaseUnitHeight', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseHeightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_HEIGHT_UNIT: NumberField<Items> = new NumberField('PurchaseHeightUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseUnitVolume]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT_VOLUME: NumberField<Items> = new NumberField('PurchaseUnitVolume', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseVolumeUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_VOLUME_UNIT: NumberField<Items> = new NumberField('PurchaseVolumeUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseUnitWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT_WEIGHT: NumberField<Items> = new NumberField('PurchaseUnitWeight', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseWeightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_WEIGHT_UNIT: NumberField<Items> = new NumberField('PurchaseWeightUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseVatGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_VAT_GROUP: StringField<Items> = new StringField('PurchaseVATGroup', Items, 'Edm.String');
  /**
   * Static representation of the [[salesFactor1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_FACTOR_1: NumberField<Items> = new NumberField('SalesFactor1', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesFactor2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_FACTOR_2: NumberField<Items> = new NumberField('SalesFactor2', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesFactor3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_FACTOR_3: NumberField<Items> = new NumberField('SalesFactor3', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesFactor4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_FACTOR_4: NumberField<Items> = new NumberField('SalesFactor4', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseFactor1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_FACTOR_1: NumberField<Items> = new NumberField('PurchaseFactor1', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseFactor2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_FACTOR_2: NumberField<Items> = new NumberField('PurchaseFactor2', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseFactor3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_FACTOR_3: NumberField<Items> = new NumberField('PurchaseFactor3', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseFactor4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_FACTOR_4: NumberField<Items> = new NumberField('PurchaseFactor4', Items, 'Edm.Double');
  /**
   * Static representation of the [[movingAveragePrice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOVING_AVERAGE_PRICE: NumberField<Items> = new NumberField('MovingAveragePrice', Items, 'Edm.Double');
  /**
   * Static representation of the [[foreignRevenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_REVENUES_ACCOUNT: StringField<Items> = new StringField('ForeignRevenuesAccount', Items, 'Edm.String');
  /**
   * Static representation of the [[ecRevenuesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EC_REVENUES_ACCOUNT: StringField<Items> = new StringField('ECRevenuesAccount', Items, 'Edm.String');
  /**
   * Static representation of the [[foreignExpensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOREIGN_EXPENSES_ACCOUNT: StringField<Items> = new StringField('ForeignExpensesAccount', Items, 'Edm.String');
  /**
   * Static representation of the [[ecExpensesAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EC_EXPENSES_ACCOUNT: StringField<Items> = new StringField('ECExpensesAccount', Items, 'Edm.String');
  /**
   * Static representation of the [[avgStdPrice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVG_STD_PRICE: NumberField<Items> = new NumberField('AvgStdPrice', Items, 'Edm.Double');
  /**
   * Static representation of the [[defaultWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_WAREHOUSE: StringField<Items> = new StringField('DefaultWarehouse', Items, 'Edm.String');
  /**
   * Static representation of the [[shipType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TYPE: NumberField<Items> = new NumberField('ShipType', Items, 'Edm.Int32');
  /**
   * Static representation of the [[maxInventory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_INVENTORY: NumberField<Items> = new NumberField('MaxInventory', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseHeightUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_HEIGHT_UNIT_1: NumberField<Items> = new NumberField('PurchaseHeightUnit1', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseUnitHeight1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT_HEIGHT_1: NumberField<Items> = new NumberField('PurchaseUnitHeight1', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseLengthUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_LENGTH_UNIT_1: NumberField<Items> = new NumberField('PurchaseLengthUnit1', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseUnitLength1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT_LENGTH_1: NumberField<Items> = new NumberField('PurchaseUnitLength1', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseWeightUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_WEIGHT_UNIT_1: NumberField<Items> = new NumberField('PurchaseWeightUnit1', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseUnitWeight1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT_WEIGHT_1: NumberField<Items> = new NumberField('PurchaseUnitWeight1', Items, 'Edm.Double');
  /**
   * Static representation of the [[purchaseWidthUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_WIDTH_UNIT_1: NumberField<Items> = new NumberField('PurchaseWidthUnit1', Items, 'Edm.Int32');
  /**
   * Static representation of the [[purchaseUnitWidth1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_UNIT_WIDTH_1: NumberField<Items> = new NumberField('PurchaseUnitWidth1', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesHeightUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_HEIGHT_UNIT_1: NumberField<Items> = new NumberField('SalesHeightUnit1', Items, 'Edm.Int32');
  /**
   * Static representation of the [[salesUnitHeight1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT_HEIGHT_1: NumberField<Items> = new NumberField('SalesUnitHeight1', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesLengthUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_LENGTH_UNIT_1: NumberField<Items> = new NumberField('SalesLengthUnit1', Items, 'Edm.Int32');
  /**
   * Static representation of the [[salesUnitLength1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT_LENGTH_1: NumberField<Items> = new NumberField('SalesUnitLength1', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesWeightUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_WEIGHT_UNIT_1: NumberField<Items> = new NumberField('SalesWeightUnit1', Items, 'Edm.Int32');
  /**
   * Static representation of the [[salesUnitWeight1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT_WEIGHT_1: NumberField<Items> = new NumberField('SalesUnitWeight1', Items, 'Edm.Double');
  /**
   * Static representation of the [[salesWidthUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_WIDTH_UNIT_1: NumberField<Items> = new NumberField('SalesWidthUnit1', Items, 'Edm.Int32');
  /**
   * Static representation of the [[salesUnitWidth1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_UNIT_WIDTH_1: NumberField<Items> = new NumberField('SalesUnitWidth1', Items, 'Edm.Double');
  /**
   * Static representation of the [[sww]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SWW: StringField<Items> = new StringField('SWW', Items, 'Edm.String');
  /**
   * Static representation of the [[warrantyTemplate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WARRANTY_TEMPLATE: StringField<Items> = new StringField('WarrantyTemplate', Items, 'Edm.String');
  /**
   * Static representation of the [[arTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AR_TAX_CODE: StringField<Items> = new StringField('ArTaxCode', Items, 'Edm.String');
  /**
   * Static representation of the [[apTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AP_TAX_CODE: StringField<Items> = new StringField('ApTaxCode', Items, 'Edm.String');
  /**
   * Static representation of the [[baseUnitName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_UNIT_NAME: StringField<Items> = new StringField('BaseUnitName', Items, 'Edm.String');
  /**
   * Static representation of the [[itemCountryOrg]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_COUNTRY_ORG: StringField<Items> = new StringField('ItemCountryOrg', Items, 'Edm.String');
  /**
   * Static representation of the [[inventoryUom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_UOM: StringField<Items> = new StringField('InventoryUOM', Items, 'Edm.String');
  /**
   * Static representation of the [[orderIntervals]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_INTERVALS: NumberField<Items> = new NumberField('OrderIntervals', Items, 'Edm.Int32');
  /**
   * Static representation of the [[orderMultiple]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_MULTIPLE: NumberField<Items> = new NumberField('OrderMultiple', Items, 'Edm.Double');
  /**
   * Static representation of the [[leadTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEAD_TIME: NumberField<Items> = new NumberField('LeadTime', Items, 'Edm.Int32');
  /**
   * Static representation of the [[minOrderQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_ORDER_QUANTITY: NumberField<Items> = new NumberField('MinOrderQuantity', Items, 'Edm.Double');
  /**
   * Static representation of the [[outgoingServiceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OUTGOING_SERVICE_CODE: NumberField<Items> = new NumberField('OutgoingServiceCode', Items, 'Edm.Int32');
  /**
   * Static representation of the [[incomingServiceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOMING_SERVICE_CODE: NumberField<Items> = new NumberField('IncomingServiceCode', Items, 'Edm.Int32');
  /**
   * Static representation of the [[serviceGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROUP: NumberField<Items> = new NumberField('ServiceGroup', Items, 'Edm.Int32');
  /**
   * Static representation of the [[ncmCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NCM_CODE: NumberField<Items> = new NumberField('NCMCode', Items, 'Edm.Int32');
  /**
   * Static representation of the [[materialGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_GROUP: NumberField<Items> = new NumberField('MaterialGroup', Items, 'Edm.Int32');
  /**
   * Static representation of the [[productSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_SOURCE: StringField<Items> = new StringField('ProductSource', Items, 'Edm.String');
  /**
   * Static representation of the [[dnfEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DNF_ENTRY: NumberField<Items> = new NumberField('DNFEntry', Items, 'Edm.Int32');
  /**
   * Static representation of the [[gtsItemSpec]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_ITEM_SPEC: StringField<Items> = new StringField('GTSItemSpec', Items, 'Edm.String');
  /**
   * Static representation of the [[gtsItemTaxCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GTS_ITEM_TAX_CATEGORY: StringField<Items> = new StringField('GTSItemTaxCategory', Items, 'Edm.String');
  /**
   * Static representation of the [[fuelId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUEL_ID: NumberField<Items> = new NumberField('FuelID', Items, 'Edm.Int32');
  /**
   * Static representation of the [[beverageTableCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEVERAGE_TABLE_CODE: StringField<Items> = new StringField('BeverageTableCode', Items, 'Edm.String');
  /**
   * Static representation of the [[beverageGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEVERAGE_GROUP_CODE: StringField<Items> = new StringField('BeverageGroupCode', Items, 'Edm.String');
  /**
   * Static representation of the [[beverageCommercialBrandCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEVERAGE_COMMERCIAL_BRAND_CODE: NumberField<Items> = new NumberField('BeverageCommercialBrandCode', Items, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<Items> = new NumberField('Series', Items, 'Edm.Int32');
  /**
   * Static representation of the [[toleranceDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOLERANCE_DAYS: NumberField<Items> = new NumberField('ToleranceDays', Items, 'Edm.Int32');
  /**
   * Static representation of the [[assetClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CLASS: StringField<Items> = new StringField('AssetClass', Items, 'Edm.String');
  /**
   * Static representation of the [[assetGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_GROUP: StringField<Items> = new StringField('AssetGroup', Items, 'Edm.String');
  /**
   * Static representation of the [[inventoryNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_NUMBER: StringField<Items> = new StringField('InventoryNumber', Items, 'Edm.String');
  /**
   * Static representation of the [[technician]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TECHNICIAN: NumberField<Items> = new NumberField('Technician', Items, 'Edm.Int32');
  /**
   * Static representation of the [[employee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE: NumberField<Items> = new NumberField('Employee', Items, 'Edm.Int32');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: NumberField<Items> = new NumberField('Location', Items, 'Edm.Int32');
  /**
   * Static representation of the [[capitalizationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPITALIZATION_DATE: DateField<Items> = new DateField('CapitalizationDate', Items, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[uoMGroupEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UO_M_GROUP_ENTRY: NumberField<Items> = new NumberField('UoMGroupEntry', Items, 'Edm.Int32');
  /**
   * Static representation of the [[inventoryUoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_UO_M_ENTRY: NumberField<Items> = new NumberField('InventoryUoMEntry', Items, 'Edm.Int32');
  /**
   * Static representation of the [[defaultSalesUoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_SALES_UO_M_ENTRY: NumberField<Items> = new NumberField('DefaultSalesUoMEntry', Items, 'Edm.Int32');
  /**
   * Static representation of the [[defaultPurchasingUoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_PURCHASING_UO_M_ENTRY: NumberField<Items> = new NumberField('DefaultPurchasingUoMEntry', Items, 'Edm.Int32');
  /**
   * Static representation of the [[depreciationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_GROUP: StringField<Items> = new StringField('DepreciationGroup', Items, 'Edm.String');
  /**
   * Static representation of the [[assetSerialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_SERIAL_NUMBER: StringField<Items> = new StringField('AssetSerialNumber', Items, 'Edm.String');
  /**
   * Static representation of the [[inventoryWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_WEIGHT: NumberField<Items> = new NumberField('InventoryWeight', Items, 'Edm.Double');
  /**
   * Static representation of the [[inventoryWeightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_WEIGHT_UNIT: NumberField<Items> = new NumberField('InventoryWeightUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[inventoryWeight1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_WEIGHT_1: NumberField<Items> = new NumberField('InventoryWeight1', Items, 'Edm.Double');
  /**
   * Static representation of the [[inventoryWeightUnit1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_WEIGHT_UNIT_1: NumberField<Items> = new NumberField('InventoryWeightUnit1', Items, 'Edm.Int32');
  /**
   * Static representation of the [[defaultCountingUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_COUNTING_UNIT: StringField<Items> = new StringField('DefaultCountingUnit', Items, 'Edm.String');
  /**
   * Static representation of the [[countingItemsPerUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTING_ITEMS_PER_UNIT: NumberField<Items> = new NumberField('CountingItemsPerUnit', Items, 'Edm.Double');
  /**
   * Static representation of the [[defaultCountingUoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_COUNTING_UO_M_ENTRY: NumberField<Items> = new NumberField('DefaultCountingUoMEntry', Items, 'Edm.Int32');
  /**
   * Static representation of the [[chapterId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHAPTER_ID: NumberField<Items> = new NumberField('ChapterID', Items, 'Edm.Int32');
  /**
   * Static representation of the [[scsCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCS_CODE: StringField<Items> = new StringField('ScsCode', Items, 'Edm.String');
  /**
   * Static representation of the [[prodStdCost]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROD_STD_COST: NumberField<Items> = new NumberField('ProdStdCost', Items, 'Edm.Double');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<Items> = new NumberField('AttachmentEntry', Items, 'Edm.Int32');
  /**
   * Static representation of the [[linkedResource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINKED_RESOURCE: StringField<Items> = new StringField('LinkedResource', Items, 'Edm.String');
  /**
   * Static representation of the [[updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_DATE: DateField<Items> = new DateField('UpdateDate', Items, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATE_TIME: TimeField<Items> = new TimeField('UpdateTime', Items, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[sacEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAC_ENTRY: NumberField<Items> = new NumberField('SACEntry', Items, 'Edm.Int32');
  /**
   * Static representation of the [[serviceCategoryEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CATEGORY_ENTRY: NumberField<Items> = new NumberField('ServiceCategoryEntry', Items, 'Edm.Int32');
  /**
   * Static representation of the [[capitalGoodsOnHoldPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPITAL_GOODS_ON_HOLD_PERCENT: NumberField<Items> = new NumberField('CapitalGoodsOnHoldPercent', Items, 'Edm.Double');
  /**
   * Static representation of the [[capitalGoodsOnHoldLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPITAL_GOODS_ON_HOLD_LIMIT: NumberField<Items> = new NumberField('CapitalGoodsOnHoldLimit', Items, 'Edm.Double');
  /**
   * Static representation of the [[assessableValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSABLE_VALUE: NumberField<Items> = new NumberField('AssessableValue', Items, 'Edm.Double');
  /**
   * Static representation of the [[assVal4Wtr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASS_VAL_4_WTR: NumberField<Items> = new NumberField('AssVal4WTR', Items, 'Edm.Double');
  /**
   * Static representation of the [[tnved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TNVED: StringField<Items> = new StringField('TNVED', Items, 'Edm.String');
  /**
   * Static representation of the [[pricingUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICING_UNIT: NumberField<Items> = new NumberField('PricingUnit', Items, 'Edm.Int32');
  /**
   * Static representation of the [[itemPrices]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_PRICES: CollectionField<Items> = new CollectionField('ItemPrices', Items, new ItemPriceField('', Items));
  /**
   * Static representation of the [[itemWarehouseInfoCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_WAREHOUSE_INFO_COLLECTION: CollectionField<Items> = new CollectionField('ItemWarehouseInfoCollection', Items, new ItemWarehouseInfoField('', Items));
  /**
   * Static representation of the [[itemPreferredVendors]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_PREFERRED_VENDORS: CollectionField<Items> = new CollectionField('ItemPreferredVendors', Items, new ItemPreferredVendorField('', Items));
  /**
   * Static representation of the [[itemLocalizationInfos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_LOCALIZATION_INFOS: CollectionField<Items> = new CollectionField('ItemLocalizationInfos', Items, new ItemLocalizationInfoField('', Items));
  /**
   * Static representation of the [[itemProjects]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_PROJECTS: CollectionField<Items> = new CollectionField('ItemProjects', Items, new ItemProjectField('', Items));
  /**
   * Static representation of the [[itemDistributionRules]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_DISTRIBUTION_RULES: CollectionField<Items> = new CollectionField('ItemDistributionRules', Items, new ItemDistributionRuleField('', Items));
  /**
   * Static representation of the [[itemAttributeGroups]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ATTRIBUTE_GROUPS: CollectionField<Items> = new CollectionField('ItemAttributeGroups', Items, new ItemAttributeGroupsField('', Items));
  /**
   * Static representation of the [[itemDepreciationParameters]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_DEPRECIATION_PARAMETERS: CollectionField<Items> = new CollectionField('ItemDepreciationParameters', Items, new ItemDepreciationParameterField('', Items));
  /**
   * Static representation of the [[itemPeriodControls]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_PERIOD_CONTROLS: CollectionField<Items> = new CollectionField('ItemPeriodControls', Items, new ItemPeriodControlField('', Items));
  /**
   * Static representation of the [[itemUnitOfMeasurementCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_UNIT_OF_MEASUREMENT_COLLECTION: CollectionField<Items> = new CollectionField('ItemUnitOfMeasurementCollection', Items, new ItemUnitOfMeasurementField('', Items));
  /**
   * Static representation of the [[itemBarCodeCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_BAR_CODE_COLLECTION: CollectionField<Items> = new CollectionField('ItemBarCodeCollection', Items, new ItemBarCodeField('', Items));
  /**
   * Static representation of the [[itemIntrastatExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_INTRASTAT_EXTENSION: ItemIntrastatExtensionField<Items> = new ItemIntrastatExtensionField('ItemIntrastatExtension', Items);
  /**
   * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPECIAL_PRICES: OneToManyLink<Items, SpecialPrices> = new OneToManyLink('SpecialPrices', Items, SpecialPrices);
  /**
   * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROUPS: OneToOneLink<Items, ItemGroups> = new OneToOneLink('ItemGroups', Items, ItemGroups);
  /**
   * Static representation of the one-to-one navigation property [[customsGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMS_GROUP: OneToOneLink<Items, CustomsGroups> = new OneToOneLink('CustomsGroup', Items, CustomsGroups);
  /**
   * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_GROUP: OneToOneLink<Items, VatGroups> = new OneToOneLink('VatGroup', Items, VatGroups);
  /**
   * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHART_OF_ACCOUNT: OneToOneLink<Items, ChartOfAccounts> = new OneToOneLink('ChartOfAccount', Items, ChartOfAccounts);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<Items, BusinessPartners> = new OneToOneLink('BusinessPartner', Items, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[commissionGroup2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMISSION_GROUP_2: OneToOneLink<Items, CommissionGroups> = new OneToOneLink('CommissionGroup2', Items, CommissionGroups);
  /**
   * Static representation of the one-to-one navigation property [[manufacturer2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUFACTURER_2: OneToOneLink<Items, Manufacturers> = new OneToOneLink('Manufacturer2', Items, Manufacturers);
  /**
   * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE: OneToOneLink<Items, ShippingTypes> = new OneToOneLink('ShippingType', Items, ShippingTypes);
  /**
   * Static representation of the one-to-one navigation property [[contractTemplate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_TEMPLATE: OneToOneLink<Items, ContractTemplates> = new OneToOneLink('ContractTemplate', Items, ContractTemplates);
  /**
   * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_CODE: OneToOneLink<Items, SalesTaxCodes> = new OneToOneLink('SalesTaxCode', Items, SalesTaxCodes);
  /**
   * Static representation of the one-to-one navigation property [[inventoryCycles]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_CYCLES: OneToOneLink<Items, InventoryCycles> = new OneToOneLink('InventoryCycles', Items, InventoryCycles);
  /**
   * Static representation of the one-to-one navigation property [[serviceGroup2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_GROUP_2: OneToOneLink<Items, ServiceGroups> = new OneToOneLink('ServiceGroup2', Items, ServiceGroups);
  /**
   * Static representation of the one-to-one navigation property [[ncmCodeSetup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NCM_CODE_SETUP: OneToOneLink<Items, NcmCodesSetup> = new OneToOneLink('NCMCodeSetup', Items, NcmCodesSetup);
  /**
   * Static representation of the one-to-one navigation property [[materialGroup2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_GROUP_2: OneToOneLink<Items, MaterialGroups> = new OneToOneLink('MaterialGroup2', Items, MaterialGroups);
  /**
   * Static representation of the one-to-one navigation property [[dnfCodeSetup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DNF_CODE_SETUP: OneToOneLink<Items, DnfCodeSetup> = new OneToOneLink('DNFCodeSetup', Items, DnfCodeSetup);
  /**
   * Static representation of the one-to-one navigation property [[brazilFuelIndexer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_FUEL_INDEXER: OneToOneLink<Items, BrazilFuelIndexers> = new OneToOneLink('BrazilFuelIndexer', Items, BrazilFuelIndexers);
  /**
   * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_STRING_INDEXER: OneToOneLink<Items, BrazilStringIndexers> = new OneToOneLink('BrazilStringIndexer', Items, BrazilStringIndexers);
  /**
   * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRAZIL_NUMERIC_INDEXER: OneToOneLink<Items, BrazilNumericIndexers> = new OneToOneLink('BrazilNumericIndexer', Items, BrazilNumericIndexers);
  /**
   * Static representation of the one-to-one navigation property [[assetClass2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_CLASS_2: OneToOneLink<Items, AssetClasses> = new OneToOneLink('AssetClass2', Items, AssetClasses);
  /**
   * Static representation of the one-to-one navigation property [[assetGroup2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_GROUP_2: OneToOneLink<Items, AssetGroups> = new OneToOneLink('AssetGroup2', Items, AssetGroups);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<Items, EmployeesInfo> = new OneToOneLink('EmployeeInfo', Items, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_LOCATION: OneToOneLink<Items, WarehouseLocations> = new OneToOneLink('WarehouseLocation', Items, WarehouseLocations);
  /**
   * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<Items, UnitOfMeasurementGroups> = new OneToOneLink('UnitOfMeasurementGroup', Items, UnitOfMeasurementGroups);
  /**
   * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASUREMENT: OneToOneLink<Items, UnitOfMeasurements> = new OneToOneLink('UnitOfMeasurement', Items, UnitOfMeasurements);
  /**
   * Static representation of the one-to-one navigation property [[assetDepreciationGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_DEPRECIATION_GROUP: OneToOneLink<Items, AssetDepreciationGroups> = new OneToOneLink('AssetDepreciationGroup', Items, AssetDepreciationGroups);
  /**
   * Static representation of the one-to-one navigation property [[resource]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCE: OneToOneLink<Items, Resources> = new OneToOneLink('Resource', Items, Resources);
  /**
   * Static representation of the one-to-one navigation property [[indiaSacCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDIA_SAC_CODE: OneToOneLink<Items, IndiaSacCode> = new OneToOneLink('IndiaSacCode', Items, IndiaSacCode);
  /**
   * Static representation of the one-to-many navigation property [[stockTakings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_TAKINGS: OneToManyLink<Items, StockTakings> = new OneToManyLink('StockTakings', Items, StockTakings);
  /**
   * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPRECIATION_AREAS: OneToManyLink<Items, DepreciationAreas> = new OneToManyLink('DepreciationAreas', Items, DepreciationAreas);
  /**
   * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TREES: OneToManyLink<Items, ProductTrees> = new OneToManyLink('ProductTrees', Items, ProductTrees);
  /**
   * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<Items, GlAccountAdvancedRules> = new OneToManyLink('GLAccountAdvancedRules', Items, GlAccountAdvancedRules);
  /**
   * Static representation of the one-to-many navigation property [[barCodes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BAR_CODES: OneToManyLink<Items, BarCodes> = new OneToManyLink('BarCodes', Items, BarCodes);
  /**
   * Static representation of the one-to-many navigation property [[batchNumberDetails]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BATCH_NUMBER_DETAILS: OneToManyLink<Items, BatchNumberDetails> = new OneToManyLink('BatchNumberDetails', Items, BatchNumberDetails);
  /**
   * Static representation of the one-to-many navigation property [[serialNumberDetails]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIAL_NUMBER_DETAILS: OneToManyLink<Items, SerialNumberDetails> = new OneToManyLink('SerialNumberDetails', Items, SerialNumberDetails);
  /**
   * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIN_LOCATIONS: OneToManyLink<Items, BinLocations> = new OneToManyLink('BinLocations', Items, BinLocations);
  /**
   * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<Items, CustomerEquipmentCards> = new OneToManyLink('CustomerEquipmentCards', Items, CustomerEquipmentCards);
  /**
   * Static representation of the one-to-many navigation property [[knowledgeBaseSolutions]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<Items, KnowledgeBaseSolutions> = new OneToManyLink('KnowledgeBaseSolutions', Items, KnowledgeBaseSolutions);
  /**
   * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALLS: OneToManyLink<Items, ServiceCalls> = new OneToManyLink('ServiceCalls', Items, ServiceCalls);
  /**
   * Static representation of the one-to-many navigation property [[alternateCatNum]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATE_CAT_NUM: OneToManyLink<Items, AlternateCatNum> = new OneToManyLink('AlternateCatNum', Items, AlternateCatNum);
  /**
   * Static representation of the one-to-many navigation property [[resources]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESOURCES: OneToManyLink<Items, Resources> = new OneToManyLink('Resources', Items, Resources);
  /**
   * All fields of the Items entity.
   */
  export const _allFields: Array<StringField<Items> | NumberField<Items> | DateField<Items> | TimeField<Items> | CollectionField<Items> | ItemIntrastatExtensionField<Items> | OneToManyLink<Items, SpecialPrices> | OneToOneLink<Items, ItemGroups> | OneToOneLink<Items, CustomsGroups> | OneToOneLink<Items, VatGroups> | OneToOneLink<Items, ChartOfAccounts> | OneToOneLink<Items, BusinessPartners> | OneToOneLink<Items, CommissionGroups> | OneToOneLink<Items, Manufacturers> | OneToOneLink<Items, ShippingTypes> | OneToOneLink<Items, ContractTemplates> | OneToOneLink<Items, SalesTaxCodes> | OneToOneLink<Items, InventoryCycles> | OneToOneLink<Items, ServiceGroups> | OneToOneLink<Items, NcmCodesSetup> | OneToOneLink<Items, MaterialGroups> | OneToOneLink<Items, DnfCodeSetup> | OneToOneLink<Items, BrazilFuelIndexers> | OneToOneLink<Items, BrazilStringIndexers> | OneToOneLink<Items, BrazilNumericIndexers> | OneToOneLink<Items, AssetClasses> | OneToOneLink<Items, AssetGroups> | OneToOneLink<Items, EmployeesInfo> | OneToOneLink<Items, WarehouseLocations> | OneToOneLink<Items, UnitOfMeasurementGroups> | OneToOneLink<Items, UnitOfMeasurements> | OneToOneLink<Items, AssetDepreciationGroups> | OneToOneLink<Items, Resources> | OneToOneLink<Items, IndiaSacCode> | OneToManyLink<Items, StockTakings> | OneToManyLink<Items, DepreciationAreas> | OneToManyLink<Items, ProductTrees> | OneToManyLink<Items, GlAccountAdvancedRules> | OneToManyLink<Items, BarCodes> | OneToManyLink<Items, BatchNumberDetails> | OneToManyLink<Items, SerialNumberDetails> | OneToManyLink<Items, BinLocations> | OneToManyLink<Items, CustomerEquipmentCards> | OneToManyLink<Items, KnowledgeBaseSolutions> | OneToManyLink<Items, ServiceCalls> | OneToManyLink<Items, AlternateCatNum> | OneToManyLink<Items, Resources>> = [
    Items.ITEM_CODE,
    Items.ITEM_NAME,
    Items.FOREIGN_NAME,
    Items.ITEMS_GROUP_CODE,
    Items.CUSTOMS_GROUP_CODE,
    Items.SALES_VAT_GROUP,
    Items.BAR_CODE,
    Items.INCOME_ACCOUNT,
    Items.EXEMPT_INCOME_ACCOUNT,
    Items.EXPANSE_ACCOUNT,
    Items.MAINSUPPLIER,
    Items.SUPPLIER_CATALOG_NO,
    Items.DESIRED_INVENTORY,
    Items.MIN_INVENTORY,
    Items.PICTURE,
    Items.USER_TEXT,
    Items.SERIAL_NUM,
    Items.COMMISSION_PERCENT,
    Items.COMMISSION_SUM,
    Items.COMMISSION_GROUP,
    Items.DATA_EXPORT_CODE,
    Items.MANUFACTURER,
    Items.QUANTITY_ON_STOCK,
    Items.QUANTITY_ORDERED_FROM_VENDORS,
    Items.QUANTITY_ORDERED_BY_CUSTOMERS,
    Items.VALID_FROM,
    Items.VALID_TO,
    Items.VALID_REMARKS,
    Items.FROZEN_FROM,
    Items.FROZEN_TO,
    Items.FROZEN_REMARKS,
    Items.SALES_UNIT,
    Items.SALES_ITEMS_PER_UNIT,
    Items.SALES_PACKAGING_UNIT,
    Items.SALES_QTY_PER_PACK_UNIT,
    Items.SALES_UNIT_LENGTH,
    Items.SALES_LENGTH_UNIT,
    Items.SALES_UNIT_WIDTH,
    Items.SALES_WIDTH_UNIT,
    Items.SALES_UNIT_HEIGHT,
    Items.SALES_HEIGHT_UNIT,
    Items.SALES_UNIT_VOLUME,
    Items.SALES_VOLUME_UNIT,
    Items.SALES_UNIT_WEIGHT,
    Items.SALES_WEIGHT_UNIT,
    Items.PURCHASE_UNIT,
    Items.PURCHASE_ITEMS_PER_UNIT,
    Items.PURCHASE_PACKAGING_UNIT,
    Items.PURCHASE_QTY_PER_PACK_UNIT,
    Items.PURCHASE_UNIT_LENGTH,
    Items.PURCHASE_LENGTH_UNIT,
    Items.PURCHASE_UNIT_WIDTH,
    Items.PURCHASE_WIDTH_UNIT,
    Items.PURCHASE_UNIT_HEIGHT,
    Items.PURCHASE_HEIGHT_UNIT,
    Items.PURCHASE_UNIT_VOLUME,
    Items.PURCHASE_VOLUME_UNIT,
    Items.PURCHASE_UNIT_WEIGHT,
    Items.PURCHASE_WEIGHT_UNIT,
    Items.PURCHASE_VAT_GROUP,
    Items.SALES_FACTOR_1,
    Items.SALES_FACTOR_2,
    Items.SALES_FACTOR_3,
    Items.SALES_FACTOR_4,
    Items.PURCHASE_FACTOR_1,
    Items.PURCHASE_FACTOR_2,
    Items.PURCHASE_FACTOR_3,
    Items.PURCHASE_FACTOR_4,
    Items.MOVING_AVERAGE_PRICE,
    Items.FOREIGN_REVENUES_ACCOUNT,
    Items.EC_REVENUES_ACCOUNT,
    Items.FOREIGN_EXPENSES_ACCOUNT,
    Items.EC_EXPENSES_ACCOUNT,
    Items.AVG_STD_PRICE,
    Items.DEFAULT_WAREHOUSE,
    Items.SHIP_TYPE,
    Items.MAX_INVENTORY,
    Items.PURCHASE_HEIGHT_UNIT_1,
    Items.PURCHASE_UNIT_HEIGHT_1,
    Items.PURCHASE_LENGTH_UNIT_1,
    Items.PURCHASE_UNIT_LENGTH_1,
    Items.PURCHASE_WEIGHT_UNIT_1,
    Items.PURCHASE_UNIT_WEIGHT_1,
    Items.PURCHASE_WIDTH_UNIT_1,
    Items.PURCHASE_UNIT_WIDTH_1,
    Items.SALES_HEIGHT_UNIT_1,
    Items.SALES_UNIT_HEIGHT_1,
    Items.SALES_LENGTH_UNIT_1,
    Items.SALES_UNIT_LENGTH_1,
    Items.SALES_WEIGHT_UNIT_1,
    Items.SALES_UNIT_WEIGHT_1,
    Items.SALES_WIDTH_UNIT_1,
    Items.SALES_UNIT_WIDTH_1,
    Items.SWW,
    Items.WARRANTY_TEMPLATE,
    Items.AR_TAX_CODE,
    Items.AP_TAX_CODE,
    Items.BASE_UNIT_NAME,
    Items.ITEM_COUNTRY_ORG,
    Items.INVENTORY_UOM,
    Items.ORDER_INTERVALS,
    Items.ORDER_MULTIPLE,
    Items.LEAD_TIME,
    Items.MIN_ORDER_QUANTITY,
    Items.OUTGOING_SERVICE_CODE,
    Items.INCOMING_SERVICE_CODE,
    Items.SERVICE_GROUP,
    Items.NCM_CODE,
    Items.MATERIAL_GROUP,
    Items.PRODUCT_SOURCE,
    Items.DNF_ENTRY,
    Items.GTS_ITEM_SPEC,
    Items.GTS_ITEM_TAX_CATEGORY,
    Items.FUEL_ID,
    Items.BEVERAGE_TABLE_CODE,
    Items.BEVERAGE_GROUP_CODE,
    Items.BEVERAGE_COMMERCIAL_BRAND_CODE,
    Items.SERIES,
    Items.TOLERANCE_DAYS,
    Items.ASSET_CLASS,
    Items.ASSET_GROUP,
    Items.INVENTORY_NUMBER,
    Items.TECHNICIAN,
    Items.EMPLOYEE,
    Items.LOCATION,
    Items.CAPITALIZATION_DATE,
    Items.UO_M_GROUP_ENTRY,
    Items.INVENTORY_UO_M_ENTRY,
    Items.DEFAULT_SALES_UO_M_ENTRY,
    Items.DEFAULT_PURCHASING_UO_M_ENTRY,
    Items.DEPRECIATION_GROUP,
    Items.ASSET_SERIAL_NUMBER,
    Items.INVENTORY_WEIGHT,
    Items.INVENTORY_WEIGHT_UNIT,
    Items.INVENTORY_WEIGHT_1,
    Items.INVENTORY_WEIGHT_UNIT_1,
    Items.DEFAULT_COUNTING_UNIT,
    Items.COUNTING_ITEMS_PER_UNIT,
    Items.DEFAULT_COUNTING_UO_M_ENTRY,
    Items.CHAPTER_ID,
    Items.SCS_CODE,
    Items.PROD_STD_COST,
    Items.ATTACHMENT_ENTRY,
    Items.LINKED_RESOURCE,
    Items.UPDATE_DATE,
    Items.UPDATE_TIME,
    Items.SAC_ENTRY,
    Items.SERVICE_CATEGORY_ENTRY,
    Items.CAPITAL_GOODS_ON_HOLD_PERCENT,
    Items.CAPITAL_GOODS_ON_HOLD_LIMIT,
    Items.ASSESSABLE_VALUE,
    Items.ASS_VAL_4_WTR,
    Items.TNVED,
    Items.PRICING_UNIT,
    Items.ITEM_PRICES,
    Items.ITEM_WAREHOUSE_INFO_COLLECTION,
    Items.ITEM_PREFERRED_VENDORS,
    Items.ITEM_LOCALIZATION_INFOS,
    Items.ITEM_PROJECTS,
    Items.ITEM_DISTRIBUTION_RULES,
    Items.ITEM_ATTRIBUTE_GROUPS,
    Items.ITEM_DEPRECIATION_PARAMETERS,
    Items.ITEM_PERIOD_CONTROLS,
    Items.ITEM_UNIT_OF_MEASUREMENT_COLLECTION,
    Items.ITEM_BAR_CODE_COLLECTION,
    Items.ITEM_INTRASTAT_EXTENSION,
    Items.SPECIAL_PRICES,
    Items.ITEM_GROUPS,
    Items.CUSTOMS_GROUP,
    Items.VAT_GROUP,
    Items.CHART_OF_ACCOUNT,
    Items.BUSINESS_PARTNER,
    Items.COMMISSION_GROUP_2,
    Items.MANUFACTURER_2,
    Items.SHIPPING_TYPE,
    Items.CONTRACT_TEMPLATE,
    Items.SALES_TAX_CODE,
    Items.INVENTORY_CYCLES,
    Items.SERVICE_GROUP_2,
    Items.NCM_CODE_SETUP,
    Items.MATERIAL_GROUP_2,
    Items.DNF_CODE_SETUP,
    Items.BRAZIL_FUEL_INDEXER,
    Items.BRAZIL_STRING_INDEXER,
    Items.BRAZIL_NUMERIC_INDEXER,
    Items.ASSET_CLASS_2,
    Items.ASSET_GROUP_2,
    Items.EMPLOYEE_INFO,
    Items.WAREHOUSE_LOCATION,
    Items.UNIT_OF_MEASUREMENT_GROUP,
    Items.UNIT_OF_MEASUREMENT,
    Items.ASSET_DEPRECIATION_GROUP,
    Items.RESOURCE,
    Items.INDIA_SAC_CODE,
    Items.STOCK_TAKINGS,
    Items.DEPRECIATION_AREAS,
    Items.PRODUCT_TREES,
    Items.GL_ACCOUNT_ADVANCED_RULES,
    Items.BAR_CODES,
    Items.BATCH_NUMBER_DETAILS,
    Items.SERIAL_NUMBER_DETAILS,
    Items.BIN_LOCATIONS,
    Items.CUSTOMER_EQUIPMENT_CARDS,
    Items.KNOWLEDGE_BASE_SOLUTIONS,
    Items.SERVICE_CALLS,
    Items.ALTERNATE_CAT_NUM,
    Items.RESOURCES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Items> = new AllFields('*', Items);
  /**
   * All key fields of the Items entity.
   */
  export const _keyFields: Array<Field<Items>> = [Items.ITEM_CODE];
  /**
   * Mapping of all key field names to the respective static field property Items.
   */
  export const _keys: { [keys: string]: Field<Items> } = Items._keyFields.reduce((acc: { [keys: string]: Field<Items> }, field: Field<Items>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
