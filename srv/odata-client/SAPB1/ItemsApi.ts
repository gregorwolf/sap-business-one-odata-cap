/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Items } from './Items';
import { ItemsRequestBuilder } from './ItemsRequestBuilder';
import { ProductTreesApi } from './ProductTreesApi';
import { ServiceCallsApi } from './ServiceCallsApi';
import { ItemGroupsApi } from './ItemGroupsApi';
import { CustomsGroupsApi } from './CustomsGroupsApi';
import { VatGroupsApi } from './VatGroupsApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { CommissionGroupsApi } from './CommissionGroupsApi';
import { ManufacturersApi } from './ManufacturersApi';
import { ShippingTypesApi } from './ShippingTypesApi';
import { ContractTemplatesApi } from './ContractTemplatesApi';
import { SalesTaxCodesApi } from './SalesTaxCodesApi';
import { InventoryCyclesApi } from './InventoryCyclesApi';
import { ServiceGroupsApi } from './ServiceGroupsApi';
import { NcmCodesSetupApi } from './NcmCodesSetupApi';
import { MaterialGroupsApi } from './MaterialGroupsApi';
import { DnfCodeSetupApi } from './DnfCodeSetupApi';
import { BrazilFuelIndexersApi } from './BrazilFuelIndexersApi';
import { BrazilStringIndexersApi } from './BrazilStringIndexersApi';
import { BrazilNumericIndexersApi } from './BrazilNumericIndexersApi';
import { AssetClassesApi } from './AssetClassesApi';
import { AssetGroupsApi } from './AssetGroupsApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { UnitOfMeasurementGroupsApi } from './UnitOfMeasurementGroupsApi';
import { UnitOfMeasurementsApi } from './UnitOfMeasurementsApi';
import { AssetDepreciationGroupsApi } from './AssetDepreciationGroupsApi';
import { IndiaHsnApi } from './IndiaHsnApi';
import { ResourcesApi } from './ResourcesApi';
import { IndiaSacCodeApi } from './IndiaSacCodeApi';
import { CestCodesApi } from './CestCodesApi';
import { IdentificationCodesApi } from './IdentificationCodesApi';
import { CustomerEquipmentCardsApi } from './CustomerEquipmentCardsApi';
import { BinLocationsApi } from './BinLocationsApi';
import { AlternateCatNumApi } from './AlternateCatNumApi';
import { GlAccountAdvancedRulesApi } from './GlAccountAdvancedRulesApi';
import { BarCodesApi } from './BarCodesApi';
import { KnowledgeBaseSolutionsApi } from './KnowledgeBaseSolutionsApi';
import { DepreciationAreasApi } from './DepreciationAreasApi';
import { SpecialPricesApi } from './SpecialPricesApi';
import { SerialNumberDetailsApi } from './SerialNumberDetailsApi';
import { BatchNumberDetailsApi } from './BatchNumberDetailsApi';
import { StockTakingsApi } from './StockTakingsApi';
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
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  Time,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Items<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ItemsApi<DeSerializersT> {
    return new ItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productTrees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TREES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ProductTreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMS_GROUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      CustomsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link commissionGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMISSION_GROUP_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      CommissionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link manufacturer2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANUFACTURER_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ManufacturersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_TYPE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ShippingTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contractTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACT_TEMPLATE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ContractTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryCycles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_CYCLES: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      InventoryCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_GROUP_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ServiceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ncmCodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NCM_CODE_SETUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      NcmCodesSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link materialGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATERIAL_GROUP_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      MaterialGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dnfCodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DNF_CODE_SETUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      DnfCodeSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilFuelIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_FUEL_INDEXER: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BrazilFuelIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilStringIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_STRING_INDEXER: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BrazilStringIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilNumericIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_NUMERIC_INDEXER: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BrazilNumericIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetClass2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CLASS_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      AssetClassesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      AssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurementGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_GROUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      AssetDepreciationGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link indiaHsn} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INDIA_HSN: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      IndiaHsnApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link indiaSacCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INDIA_SAC_CODE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      IndiaSacCodeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cestCodeData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CEST_CODE_DATA: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      CestCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link identificationCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IDENTIFICATION_CODE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      IdentificationCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link alternateCatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATE_CAT_NUM: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      AlternateCatNumApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link barCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BAR_CODES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BarCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link knowledgeBaseSolutions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      KnowledgeBaseSolutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link depreciationAreas} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREAS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link specialPrices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPECIAL_PRICES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      SpecialPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serialNumberDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERIAL_NUMBER_DETAILS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      SerialNumberDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link batchNumberDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_NUMBER_DETAILS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BatchNumberDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTakings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TAKINGS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      StockTakingsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductTreesApi<DeSerializersT>,
      ServiceCallsApi<DeSerializersT>,
      ItemGroupsApi<DeSerializersT>,
      CustomsGroupsApi<DeSerializersT>,
      VatGroupsApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      CommissionGroupsApi<DeSerializersT>,
      ManufacturersApi<DeSerializersT>,
      ShippingTypesApi<DeSerializersT>,
      ContractTemplatesApi<DeSerializersT>,
      SalesTaxCodesApi<DeSerializersT>,
      InventoryCyclesApi<DeSerializersT>,
      ServiceGroupsApi<DeSerializersT>,
      NcmCodesSetupApi<DeSerializersT>,
      MaterialGroupsApi<DeSerializersT>,
      DnfCodeSetupApi<DeSerializersT>,
      BrazilFuelIndexersApi<DeSerializersT>,
      BrazilStringIndexersApi<DeSerializersT>,
      BrazilNumericIndexersApi<DeSerializersT>,
      AssetClassesApi<DeSerializersT>,
      AssetGroupsApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      UnitOfMeasurementGroupsApi<DeSerializersT>,
      UnitOfMeasurementsApi<DeSerializersT>,
      AssetDepreciationGroupsApi<DeSerializersT>,
      IndiaHsnApi<DeSerializersT>,
      ResourcesApi<DeSerializersT>,
      IndiaSacCodeApi<DeSerializersT>,
      CestCodesApi<DeSerializersT>,
      IdentificationCodesApi<DeSerializersT>,
      CustomerEquipmentCardsApi<DeSerializersT>,
      BinLocationsApi<DeSerializersT>,
      AlternateCatNumApi<DeSerializersT>,
      GlAccountAdvancedRulesApi<DeSerializersT>,
      BarCodesApi<DeSerializersT>,
      ResourcesApi<DeSerializersT>,
      KnowledgeBaseSolutionsApi<DeSerializersT>,
      DepreciationAreasApi<DeSerializersT>,
      SpecialPricesApi<DeSerializersT>,
      SerialNumberDetailsApi<DeSerializersT>,
      BatchNumberDetailsApi<DeSerializersT>,
      StockTakingsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_TREES: new OneToManyLink('ProductTrees', this, linkedApis[0]),
      SERVICE_CALLS: new OneToManyLink('ServiceCalls', this, linkedApis[1]),
      ITEM_GROUPS: new OneToOneLink('ItemGroups', this, linkedApis[2]),
      CUSTOMS_GROUP: new OneToOneLink('CustomsGroup', this, linkedApis[3]),
      VAT_GROUP: new OneToOneLink('VatGroup', this, linkedApis[4]),
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[5]),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[6]
      ),
      COMMISSION_GROUP_2: new OneToOneLink(
        'CommissionGroup2',
        this,
        linkedApis[7]
      ),
      MANUFACTURER_2: new OneToOneLink('Manufacturer2', this, linkedApis[8]),
      SHIPPING_TYPE: new OneToOneLink('ShippingType', this, linkedApis[9]),
      CONTRACT_TEMPLATE: new OneToOneLink(
        'ContractTemplate',
        this,
        linkedApis[10]
      ),
      SALES_TAX_CODE: new OneToOneLink('SalesTaxCode', this, linkedApis[11]),
      INVENTORY_CYCLES: new OneToOneLink(
        'InventoryCycles',
        this,
        linkedApis[12]
      ),
      SERVICE_GROUP_2: new OneToOneLink('ServiceGroup2', this, linkedApis[13]),
      NCM_CODE_SETUP: new OneToOneLink('NCMCodeSetup', this, linkedApis[14]),
      MATERIAL_GROUP_2: new OneToOneLink(
        'MaterialGroup2',
        this,
        linkedApis[15]
      ),
      DNF_CODE_SETUP: new OneToOneLink('DNFCodeSetup', this, linkedApis[16]),
      BRAZIL_FUEL_INDEXER: new OneToOneLink(
        'BrazilFuelIndexer',
        this,
        linkedApis[17]
      ),
      BRAZIL_STRING_INDEXER: new OneToOneLink(
        'BrazilStringIndexer',
        this,
        linkedApis[18]
      ),
      BRAZIL_NUMERIC_INDEXER: new OneToOneLink(
        'BrazilNumericIndexer',
        this,
        linkedApis[19]
      ),
      ASSET_CLASS_2: new OneToOneLink('AssetClass2', this, linkedApis[20]),
      ASSET_GROUP_2: new OneToOneLink('AssetGroup2', this, linkedApis[21]),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[22]),
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[23]
      ),
      UNIT_OF_MEASUREMENT_GROUP: new OneToOneLink(
        'UnitOfMeasurementGroup',
        this,
        linkedApis[24]
      ),
      UNIT_OF_MEASUREMENT: new OneToOneLink(
        'UnitOfMeasurement',
        this,
        linkedApis[25]
      ),
      ASSET_DEPRECIATION_GROUP: new OneToOneLink(
        'AssetDepreciationGroup',
        this,
        linkedApis[26]
      ),
      INDIA_HSN: new OneToOneLink('IndiaHsn', this, linkedApis[27]),
      RESOURCE: new OneToOneLink('Resource', this, linkedApis[28]),
      INDIA_SAC_CODE: new OneToOneLink('IndiaSacCode', this, linkedApis[29]),
      CEST_CODE_DATA: new OneToOneLink('CESTCodeData', this, linkedApis[30]),
      IDENTIFICATION_CODE: new OneToOneLink(
        'IdentificationCode',
        this,
        linkedApis[31]
      ),
      CUSTOMER_EQUIPMENT_CARDS: new OneToManyLink(
        'CustomerEquipmentCards',
        this,
        linkedApis[32]
      ),
      BIN_LOCATIONS: new OneToManyLink('BinLocations', this, linkedApis[33]),
      ALTERNATE_CAT_NUM: new OneToManyLink(
        'AlternateCatNum',
        this,
        linkedApis[34]
      ),
      GL_ACCOUNT_ADVANCED_RULES: new OneToManyLink(
        'GLAccountAdvancedRules',
        this,
        linkedApis[35]
      ),
      BAR_CODES: new OneToManyLink('BarCodes', this, linkedApis[36]),
      RESOURCES: new OneToManyLink('Resources', this, linkedApis[37]),
      KNOWLEDGE_BASE_SOLUTIONS: new OneToManyLink(
        'KnowledgeBaseSolutions',
        this,
        linkedApis[38]
      ),
      DEPRECIATION_AREAS: new OneToManyLink(
        'DepreciationAreas',
        this,
        linkedApis[39]
      ),
      SPECIAL_PRICES: new OneToManyLink('SpecialPrices', this, linkedApis[40]),
      SERIAL_NUMBER_DETAILS: new OneToManyLink(
        'SerialNumberDetails',
        this,
        linkedApis[41]
      ),
      BATCH_NUMBER_DETAILS: new OneToManyLink(
        'BatchNumberDetails',
        this,
        linkedApis[42]
      ),
      STOCK_TAKINGS: new OneToManyLink('StockTakings', this, linkedApis[43])
    };
    return this;
  }

  entityConstructor = Items;

  requestBuilder(): ItemsRequestBuilder<DeSerializersT> {
    return new ItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Items<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Items<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Items<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Items, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Items, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ITEM_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NAME: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_NAME: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEMS_GROUP_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CUSTOMS_GROUP_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_VAT_GROUP: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_LIABLE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PURCHASE_ITEM: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SALES_ITEM: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INVENTORY_ITEM: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCOME_ACCOUNT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_INCOME_ACCOUNT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPANSE_ACCOUNT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINSUPPLIER: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_CATALOG_NO: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESIRED_INVENTORY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MIN_INVENTORY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PICTURE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_TEXT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUM: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_PERCENT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COMMISSION_SUM: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COMMISSION_GROUP: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TREE_TYPE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoItemTreeTypes,
      true,
      true
    >;
    ASSET_ITEM: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DATA_EXPORT_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUFACTURER: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    QUANTITY_ON_STOCK: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    QUANTITY_ORDERED_FROM_VENDORS: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    QUANTITY_ORDERED_BY_CUSTOMERS: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MANAGE_SERIAL_NUMBERS: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MANAGE_BATCH_NUMBERS: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VALID: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_REMARKS: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROZEN: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FROZEN_FROM: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FROZEN_TO: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FROZEN_REMARKS: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ITEMS_PER_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_PACKAGING_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_QTY_PER_PACK_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_UNIT_LENGTH: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_LENGTH_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_UNIT_WIDTH: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_WIDTH_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_UNIT_HEIGHT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_HEIGHT_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_UNIT_VOLUME: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_VOLUME_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_UNIT_WEIGHT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_WEIGHT_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ITEMS_PER_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_PACKAGING_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_QTY_PER_PACK_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_UNIT_LENGTH: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_LENGTH_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_UNIT_WIDTH: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_WIDTH_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_UNIT_HEIGHT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_HEIGHT_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_UNIT_VOLUME: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_VOLUME_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_UNIT_WEIGHT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_WEIGHT_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_VAT_GROUP: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_FACTOR_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_FACTOR_2: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_FACTOR_3: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_FACTOR_4: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_FACTOR_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_FACTOR_2: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_FACTOR_3: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_FACTOR_4: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MOVING_AVERAGE_PRICE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FOREIGN_REVENUES_ACCOUNT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EC_REVENUES_ACCOUNT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_EXPENSES_ACCOUNT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EC_EXPENSES_ACCOUNT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AVG_STD_PRICE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DEFAULT_WAREHOUSE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_TYPE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    GL_METHOD: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoGlMethods,
      true,
      true
    >;
    TAX_TYPE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoTaxTypes,
      true,
      true
    >;
    MAX_INVENTORY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MANAGE_STOCK_BY_WAREHOUSE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PURCHASE_HEIGHT_UNIT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_UNIT_HEIGHT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_LENGTH_UNIT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_UNIT_LENGTH_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_WEIGHT_UNIT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_UNIT_WEIGHT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PURCHASE_WIDTH_UNIT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PURCHASE_UNIT_WIDTH_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_HEIGHT_UNIT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_UNIT_HEIGHT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_LENGTH_UNIT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_UNIT_LENGTH_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_WEIGHT_UNIT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_UNIT_WEIGHT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_WIDTH_UNIT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_UNIT_WIDTH_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FORCE_SELECTION_OF_SERIAL_NUMBER: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MANAGE_SERIAL_NUMBERS_ON_RELEASE_ONLY: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WT_LIABLE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    COST_ACCOUNTING_METHOD: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoInventorySystem,
      true,
      true
    >;
    SWW: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WARRANTY_TEMPLATE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDIRECT_TAX: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AR_TAX_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AP_TAX_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_UNIT_NAME: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_COUNTRY_ORG: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_METHOD: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoIssueMethod,
      true,
      true
    >;
    SRI_AND_BATCH_MANAGE_METHOD: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoManageMethod,
      true,
      true
    >;
    IS_PHANTOM: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INVENTORY_UOM: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_SYSTEM: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoPlanningSystem,
      true,
      true
    >;
    PROCUREMENT_METHOD: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoProcurementMethod,
      true,
      true
    >;
    COMPONENT_WAREHOUSE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoMrpComponentWarehouse,
      true,
      true
    >;
    ORDER_INTERVALS: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ORDER_MULTIPLE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LEAD_TIME: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MIN_ORDER_QUANTITY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ITEM_TYPE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemTypeEnum,
      true,
      true
    >;
    ITEM_CLASS: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemClassEnum,
      true,
      true
    >;
    OUTGOING_SERVICE_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INCOMING_SERVICE_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERVICE_GROUP: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NCM_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MATERIAL_TYPE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoMaterialTypes,
      true,
      true
    >;
    MATERIAL_GROUP: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRODUCT_SOURCE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTIES_1: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_2: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_3: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_4: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_5: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_6: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_7: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_8: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_9: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_10: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_11: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_12: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_13: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_14: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_15: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_16: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_17: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_18: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_19: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_20: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_21: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_22: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_23: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_24: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_25: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_26: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_27: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_28: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_29: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_30: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_31: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_32: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_33: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_34: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_35: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_36: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_37: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_38: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_39: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_40: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_41: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_42: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_43: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_44: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_45: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_46: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_47: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_48: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_49: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_50: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_51: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_52: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_53: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_54: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_55: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_56: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_57: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_58: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_59: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_60: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_61: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_62: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_63: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTIES_64: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AUTO_CREATE_SERIAL_NUMBERS_ON_RELEASE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DNF_ENTRY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    GTS_ITEM_SPEC: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GTS_ITEM_TAX_CATEGORY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUEL_ID: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BEVERAGE_TABLE_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEVERAGE_GROUP_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEVERAGE_COMMERCIAL_BRAND_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TOLERANCE_DAYS: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TYPE_OF_ADVANCED_RULES: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      TypeOfAdvancedRulesEnum,
      true,
      true
    >;
    ISSUE_PRIMARILY_BY: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      IssuePrimarilyByEnum,
      true,
      true
    >;
    NO_DISCOUNTS: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ASSET_CLASS: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_GROUP: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_NUMBER: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICIAN: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EMPLOYEE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ASSET_STATUS: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      AssetStatusEnum,
      true,
      true
    >;
    CAPITALIZATION_DATE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STATISTICAL_ASSET: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CESSION: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DEACTIVATE_AFTER_USEFUL_LIFE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MANAGE_BY_QUANTITY: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    UO_M_GROUP_ENTRY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INVENTORY_UO_M_ENTRY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULT_SALES_UO_M_ENTRY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULT_PURCHASING_UO_M_ENTRY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEPRECIATION_GROUP: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_SERIAL_NUMBER: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_WEIGHT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    INVENTORY_WEIGHT_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INVENTORY_WEIGHT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    INVENTORY_WEIGHT_UNIT_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULT_COUNTING_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTING_ITEMS_PER_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DEFAULT_COUNTING_UO_M_ENTRY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXCISABLE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CHAPTER_ID: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SCS_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SP_PROD_TYPE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      SpecialProductTypeEnum,
      true,
      true
    >;
    PROD_STD_COST: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    IN_COST_ROLLUP: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VIRTUAL_ASSET_ITEM: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ENFORCE_ASSET_SERIAL_NUMBERS: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LINKED_RESOURCE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_TIME: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    GST_RELEVNT: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SAC_ENTRY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    GST_TAX_CATEGORY: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      GstTaxCategoryEnum,
      true,
      true
    >;
    SERVICE_CATEGORY_ENTRY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CAPITAL_GOODS_ON_HOLD_PERCENT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CAPITAL_GOODS_ON_HOLD_LIMIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ASSESSABLE_VALUE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ASS_VAL_4_WTR: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SOI_EXCISABLE: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      SoiExcisableTypeEnum,
      true,
      true
    >;
    TNVED: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORTED_ITEM: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRICING_UNIT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREATE_DATE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATE_TIME: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    NVE_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CTR_SEAL_QTY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CEST_CODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LEGAL_TEXT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_VERSION: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREATE_QR_CODE_FROM: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACEABLE_ITEM: EnumField<
      Items<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    COMMODITY_CLASSIFICATION: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WEIGHT_OF_RECYCLED_PLASTIC: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PLASTIC_PACKAGE_TAX_CATEGORY: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLASTIC_PACKAGE_EXEMPTION_REASON_FOR_PURCHASE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLASTIC_PACKAGE_EXEMPTION_REASON_FOR_PRODUCTION: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_MEDIANDO: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BA_IS_FA: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BA_TYP_ID: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BA_NUM_ID: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BA_LVA_FROM: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_BA_LVA: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_LNUMMER: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_LAVP: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_MEDIANDO_MASTER: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_HIN_LIEF: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_ARTIKELINFO: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_ARBEITSVORBEREITUNG: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_FERTIGUNGSANGABEN: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_QUALITAETSSICHERUNG: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_SYNONYME: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_MATCHCODE: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_BILD_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_BILD_2: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_BILD_3: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_ANLAGE_1: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_ANLAGE_2: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_FERTIGUNG_ANLAGE_3: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TEMPX: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_BILD_OLD: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_DATENBLATT_BESCHREIBUNG: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_DATENBLATT_DATEN: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_DATENBLATT_PREIS: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_DATENBLATT_LIEFERANT: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BS_DATENBLATT_ZEICHNUNG: OrderableEdmTypeField<
      Items<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_PRICES: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemPrice,
      true,
      true
    >;
    ITEM_WAREHOUSE_INFO_COLLECTION: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemWarehouseInfo,
      true,
      true
    >;
    ITEM_PREFERRED_VENDORS: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemPreferredVendor,
      true,
      true
    >;
    ITEM_LOCALIZATION_INFOS: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemLocalizationInfo,
      true,
      true
    >;
    ITEM_PROJECTS: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemProject,
      true,
      true
    >;
    ITEM_DISTRIBUTION_RULES: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemDistributionRule,
      true,
      true
    >;
    ITEM_ATTRIBUTE_GROUPS: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemAttributeGroups,
      true,
      true
    >;
    ITEM_DEPRECIATION_PARAMETERS: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemDepreciationParameter,
      true,
      true
    >;
    ITEM_PERIOD_CONTROLS: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemPeriodControl,
      true,
      true
    >;
    ITEM_UNIT_OF_MEASUREMENT_COLLECTION: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemUnitOfMeasurement,
      true,
      true
    >;
    ITEM_BAR_CODE_COLLECTION: CollectionField<
      Items<DeSerializers>,
      DeSerializersT,
      ItemBarCode,
      true,
      true
    >;
    ITEM_INTRASTAT_EXTENSION: ItemIntrastatExtensionField<
      Items<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTrees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TREES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ProductTreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customsGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMS_GROUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      CustomsGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link commissionGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMMISSION_GROUP_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      CommissionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link manufacturer2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANUFACTURER_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ManufacturersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shippingType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPPING_TYPE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ShippingTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contractTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACT_TEMPLATE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ContractTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryCycles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_CYCLES: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      InventoryCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_GROUP_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ServiceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ncmCodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NCM_CODE_SETUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      NcmCodesSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link materialGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATERIAL_GROUP_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      MaterialGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dnfCodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DNF_CODE_SETUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      DnfCodeSetupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilFuelIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_FUEL_INDEXER: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BrazilFuelIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilStringIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_STRING_INDEXER: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BrazilStringIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilNumericIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_NUMERIC_INDEXER: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BrazilNumericIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetClass2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CLASS_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      AssetClassesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetGroup2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_2: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      AssetGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurementGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_GROUP: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      AssetDepreciationGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link indiaHsn} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INDIA_HSN: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      IndiaHsnApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link indiaSacCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INDIA_SAC_CODE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      IndiaSacCodeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cestCodeData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CEST_CODE_DATA: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      CestCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link identificationCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IDENTIFICATION_CODE: OneToOneLink<
      Items<DeSerializersT>,
      DeSerializersT,
      IdentificationCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerEquipmentCards} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      CustomerEquipmentCardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link alternateCatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATE_CAT_NUM: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      AlternateCatNumApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link barCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BAR_CODES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BarCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link knowledgeBaseSolutions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      KnowledgeBaseSolutionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link depreciationAreas} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREAS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link specialPrices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPECIAL_PRICES: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      SpecialPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serialNumberDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERIAL_NUMBER_DETAILS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      SerialNumberDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link batchNumberDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BATCH_NUMBER_DETAILS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      BatchNumberDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTakings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TAKINGS: OneToManyLink<
      Items<DeSerializersT>,
      DeSerializersT,
      StockTakingsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Items<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'ItemName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_NAME: fieldBuilder.buildEdmTypeField(
          'ForeignName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemsGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMS_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ItemsGroupCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link customsGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'CustomsGroupCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesVatGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_VAT_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesVATGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE: fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true),
        /**
         * Static representation of the {@link vatLiable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_LIABLE: fieldBuilder.buildEnumField('VatLiable', BoYesNoEnum, true),
        /**
         * Static representation of the {@link purchaseItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ITEM: fieldBuilder.buildEnumField(
          'PurchaseItem',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link salesItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ITEM: fieldBuilder.buildEnumField('SalesItem', BoYesNoEnum, true),
        /**
         * Static representation of the {@link inventoryItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ITEM: fieldBuilder.buildEnumField(
          'InventoryItem',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link incomeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'IncomeAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptIncomeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_INCOME_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExemptIncomeAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expanseAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPANSE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExpanseAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainsupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINSUPPLIER: fieldBuilder.buildEdmTypeField(
          'Mainsupplier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplierCatalogNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_CATALOG_NO: fieldBuilder.buildEdmTypeField(
          'SupplierCatalogNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link desiredInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESIRED_INVENTORY: fieldBuilder.buildEdmTypeField(
          'DesiredInventory',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link minInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_INVENTORY: fieldBuilder.buildEdmTypeField(
          'MinInventory',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link picture} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE: fieldBuilder.buildEdmTypeField('Picture', 'Edm.String', true),
        /**
         * Static representation of the {@link userText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_TEXT: fieldBuilder.buildEdmTypeField(
          'User_Text',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serialNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUM: fieldBuilder.buildEdmTypeField(
          'SerialNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_PERCENT: fieldBuilder.buildEdmTypeField(
          'CommissionPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link commissionSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_SUM: fieldBuilder.buildEdmTypeField(
          'CommissionSum',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link commissionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_GROUP: fieldBuilder.buildEdmTypeField(
          'CommissionGroup',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link treeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREE_TYPE: fieldBuilder.buildEnumField(
          'TreeType',
          BoItemTreeTypes,
          true
        ),
        /**
         * Static representation of the {@link assetItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ITEM: fieldBuilder.buildEnumField('AssetItem', BoYesNoEnum, true),
        /**
         * Static representation of the {@link dataExportCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_EXPORT_CODE: fieldBuilder.buildEdmTypeField(
          'DataExportCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manufacturer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER: fieldBuilder.buildEdmTypeField(
          'Manufacturer',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link quantityOnStock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_ON_STOCK: fieldBuilder.buildEdmTypeField(
          'QuantityOnStock',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link quantityOrderedFromVendors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_ORDERED_FROM_VENDORS: fieldBuilder.buildEdmTypeField(
          'QuantityOrderedFromVendors',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link quantityOrderedByCustomers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_ORDERED_BY_CUSTOMERS: fieldBuilder.buildEdmTypeField(
          'QuantityOrderedByCustomers',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link manageSerialNumbers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_SERIAL_NUMBERS: fieldBuilder.buildEnumField(
          'ManageSerialNumbers',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link manageBatchNumbers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_BATCH_NUMBERS: fieldBuilder.buildEnumField(
          'ManageBatchNumbers',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link valid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID: fieldBuilder.buildEnumField('Valid', BoYesNoEnum, true),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_REMARKS: fieldBuilder.buildEdmTypeField(
          'ValidRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link frozen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROZEN: fieldBuilder.buildEnumField('Frozen', BoYesNoEnum, true),
        /**
         * Static representation of the {@link frozenFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROZEN_FROM: fieldBuilder.buildEdmTypeField(
          'FrozenFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link frozenTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROZEN_TO: fieldBuilder.buildEdmTypeField(
          'FrozenTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link frozenRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROZEN_REMARKS: fieldBuilder.buildEdmTypeField(
          'FrozenRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesItemsPerUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ITEMS_PER_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesItemsPerUnit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesPackagingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PACKAGING_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesPackagingUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesQtyPerPackUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QTY_PER_PACK_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesQtyPerPackUnit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesUnitLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_LENGTH: fieldBuilder.buildEdmTypeField(
          'SalesUnitLength',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesLengthUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LENGTH_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesLengthUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesUnitWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_WIDTH: fieldBuilder.buildEdmTypeField(
          'SalesUnitWidth',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesWidthUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_WIDTH_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesWidthUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesUnitHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'SalesUnitHeight',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesHeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_HEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesHeightUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesUnitVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_VOLUME: fieldBuilder.buildEdmTypeField(
          'SalesUnitVolume',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesVolumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesVolumeUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesUnitWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'SalesUnitWeight',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesWeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesWeightUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseItemsPerUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ITEMS_PER_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseItemsPerUnit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchasePackagingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PACKAGING_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchasePackagingUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseQtyPerPackUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_QTY_PER_PACK_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseQtyPerPackUnit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_LENGTH: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitLength',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseLengthUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LENGTH_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseLengthUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_WIDTH: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitWidth',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseWidthUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_WIDTH_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseWidthUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitHeight',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseHeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_HEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseHeightUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_VOLUME: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitVolume',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseVolumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseVolumeUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitWeight',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseWeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseWeightUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseVatGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_VAT_GROUP: fieldBuilder.buildEdmTypeField(
          'PurchaseVATGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesFactor1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_FACTOR_1: fieldBuilder.buildEdmTypeField(
          'SalesFactor1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesFactor2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_FACTOR_2: fieldBuilder.buildEdmTypeField(
          'SalesFactor2',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesFactor3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_FACTOR_3: fieldBuilder.buildEdmTypeField(
          'SalesFactor3',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesFactor4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_FACTOR_4: fieldBuilder.buildEdmTypeField(
          'SalesFactor4',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseFactor1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_FACTOR_1: fieldBuilder.buildEdmTypeField(
          'PurchaseFactor1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseFactor2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_FACTOR_2: fieldBuilder.buildEdmTypeField(
          'PurchaseFactor2',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseFactor3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_FACTOR_3: fieldBuilder.buildEdmTypeField(
          'PurchaseFactor3',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseFactor4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_FACTOR_4: fieldBuilder.buildEdmTypeField(
          'PurchaseFactor4',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link movingAveragePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVING_AVERAGE_PRICE: fieldBuilder.buildEdmTypeField(
          'MovingAveragePrice',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link foreignRevenuesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_REVENUES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ForeignRevenuesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ecRevenuesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EC_REVENUES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ECRevenuesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignExpensesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_EXPENSES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ForeignExpensesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ecExpensesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EC_EXPENSES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ECExpensesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link avgStdPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVG_STD_PRICE: fieldBuilder.buildEdmTypeField(
          'AvgStdPrice',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link defaultWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'DefaultWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TYPE: fieldBuilder.buildEdmTypeField(
          'ShipType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link glMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_METHOD: fieldBuilder.buildEnumField('GLMethod', BoGlMethods, true),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField('TaxType', BoTaxTypes, true),
        /**
         * Static representation of the {@link maxInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_INVENTORY: fieldBuilder.buildEdmTypeField(
          'MaxInventory',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link manageStockByWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_STOCK_BY_WAREHOUSE: fieldBuilder.buildEnumField(
          'ManageStockByWarehouse',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link purchaseHeightUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_HEIGHT_UNIT_1: fieldBuilder.buildEdmTypeField(
          'PurchaseHeightUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitHeight1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_HEIGHT_1: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitHeight1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseLengthUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LENGTH_UNIT_1: fieldBuilder.buildEdmTypeField(
          'PurchaseLengthUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitLength1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_LENGTH_1: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitLength1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseWeightUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_WEIGHT_UNIT_1: fieldBuilder.buildEdmTypeField(
          'PurchaseWeightUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitWeight1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_WEIGHT_1: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitWeight1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link purchaseWidthUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_WIDTH_UNIT_1: fieldBuilder.buildEdmTypeField(
          'PurchaseWidthUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitWidth1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_WIDTH_1: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitWidth1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesHeightUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_HEIGHT_UNIT_1: fieldBuilder.buildEdmTypeField(
          'SalesHeightUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesUnitHeight1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_HEIGHT_1: fieldBuilder.buildEdmTypeField(
          'SalesUnitHeight1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesLengthUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LENGTH_UNIT_1: fieldBuilder.buildEdmTypeField(
          'SalesLengthUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesUnitLength1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_LENGTH_1: fieldBuilder.buildEdmTypeField(
          'SalesUnitLength1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesWeightUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_WEIGHT_UNIT_1: fieldBuilder.buildEdmTypeField(
          'SalesWeightUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesUnitWeight1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_WEIGHT_1: fieldBuilder.buildEdmTypeField(
          'SalesUnitWeight1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesWidthUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_WIDTH_UNIT_1: fieldBuilder.buildEdmTypeField(
          'SalesWidthUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesUnitWidth1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_WIDTH_1: fieldBuilder.buildEdmTypeField(
          'SalesUnitWidth1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link forceSelectionOfSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORCE_SELECTION_OF_SERIAL_NUMBER: fieldBuilder.buildEnumField(
          'ForceSelectionOfSerialNumber',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link manageSerialNumbersOnReleaseOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_SERIAL_NUMBERS_ON_RELEASE_ONLY: fieldBuilder.buildEnumField(
          'ManageSerialNumbersOnReleaseOnly',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link wtLiable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_LIABLE: fieldBuilder.buildEnumField('WTLiable', BoYesNoEnum, true),
        /**
         * Static representation of the {@link costAccountingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ACCOUNTING_METHOD: fieldBuilder.buildEnumField(
          'CostAccountingMethod',
          BoInventorySystem,
          true
        ),
        /**
         * Static representation of the {@link sww} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SWW: fieldBuilder.buildEdmTypeField('SWW', 'Edm.String', true),
        /**
         * Static representation of the {@link warrantyTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'WarrantyTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link indirectTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDIRECT_TAX: fieldBuilder.buildEnumField(
          'IndirectTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link arTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'ArTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AP_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'ApTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baseUnitName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT_NAME: fieldBuilder.buildEdmTypeField(
          'BaseUnitName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCountryOrg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_COUNTRY_ORG: fieldBuilder.buildEdmTypeField(
          'ItemCountryOrg',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issueMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_METHOD: fieldBuilder.buildEnumField(
          'IssueMethod',
          BoIssueMethod,
          true
        ),
        /**
         * Static representation of the {@link sriAndBatchManageMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRI_AND_BATCH_MANAGE_METHOD: fieldBuilder.buildEnumField(
          'SRIAndBatchManageMethod',
          BoManageMethod,
          true
        ),
        /**
         * Static representation of the {@link isPhantom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PHANTOM: fieldBuilder.buildEnumField('IsPhantom', BoYesNoEnum, true),
        /**
         * Static representation of the {@link inventoryUom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UOM: fieldBuilder.buildEdmTypeField(
          'InventoryUOM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planningSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_SYSTEM: fieldBuilder.buildEnumField(
          'PlanningSystem',
          BoPlanningSystem,
          true
        ),
        /**
         * Static representation of the {@link procurementMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_METHOD: fieldBuilder.buildEnumField(
          'ProcurementMethod',
          BoProcurementMethod,
          true
        ),
        /**
         * Static representation of the {@link componentWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_WAREHOUSE: fieldBuilder.buildEnumField(
          'ComponentWarehouse',
          BoMrpComponentWarehouse,
          true
        ),
        /**
         * Static representation of the {@link orderIntervals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_INTERVALS: fieldBuilder.buildEdmTypeField(
          'OrderIntervals',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link orderMultiple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_MULTIPLE: fieldBuilder.buildEdmTypeField(
          'OrderMultiple',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link leadTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAD_TIME: fieldBuilder.buildEdmTypeField(
          'LeadTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link minOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinOrderQuantity',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link itemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE: fieldBuilder.buildEnumField('ItemType', ItemTypeEnum, true),
        /**
         * Static representation of the {@link itemClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CLASS: fieldBuilder.buildEnumField(
          'ItemClass',
          ItemClassEnum,
          true
        ),
        /**
         * Static representation of the {@link outgoingServiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTGOING_SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'OutgoingServiceCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link incomingServiceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOMING_SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'IncomingServiceCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link serviceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_GROUP: fieldBuilder.buildEdmTypeField(
          'ServiceGroup',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link ncmCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NCM_CODE: fieldBuilder.buildEdmTypeField('NCMCode', 'Edm.Int32', true),
        /**
         * Static representation of the {@link materialType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_TYPE: fieldBuilder.buildEnumField(
          'MaterialType',
          BoMaterialTypes,
          true
        ),
        /**
         * Static representation of the {@link materialGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_GROUP: fieldBuilder.buildEdmTypeField(
          'MaterialGroup',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link productSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SOURCE: fieldBuilder.buildEdmTypeField(
          'ProductSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link properties1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_1: fieldBuilder.buildEnumField(
          'Properties1',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_2: fieldBuilder.buildEnumField(
          'Properties2',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_3: fieldBuilder.buildEnumField(
          'Properties3',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_4: fieldBuilder.buildEnumField(
          'Properties4',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_5: fieldBuilder.buildEnumField(
          'Properties5',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_6: fieldBuilder.buildEnumField(
          'Properties6',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_7: fieldBuilder.buildEnumField(
          'Properties7',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_8: fieldBuilder.buildEnumField(
          'Properties8',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_9: fieldBuilder.buildEnumField(
          'Properties9',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_10: fieldBuilder.buildEnumField(
          'Properties10',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_11: fieldBuilder.buildEnumField(
          'Properties11',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_12: fieldBuilder.buildEnumField(
          'Properties12',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_13: fieldBuilder.buildEnumField(
          'Properties13',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_14: fieldBuilder.buildEnumField(
          'Properties14',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_15: fieldBuilder.buildEnumField(
          'Properties15',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties16} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_16: fieldBuilder.buildEnumField(
          'Properties16',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties17} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_17: fieldBuilder.buildEnumField(
          'Properties17',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties18} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_18: fieldBuilder.buildEnumField(
          'Properties18',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties19} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_19: fieldBuilder.buildEnumField(
          'Properties19',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties20} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_20: fieldBuilder.buildEnumField(
          'Properties20',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties21} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_21: fieldBuilder.buildEnumField(
          'Properties21',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties22} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_22: fieldBuilder.buildEnumField(
          'Properties22',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties23} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_23: fieldBuilder.buildEnumField(
          'Properties23',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties24} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_24: fieldBuilder.buildEnumField(
          'Properties24',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties25} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_25: fieldBuilder.buildEnumField(
          'Properties25',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties26} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_26: fieldBuilder.buildEnumField(
          'Properties26',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties27} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_27: fieldBuilder.buildEnumField(
          'Properties27',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties28} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_28: fieldBuilder.buildEnumField(
          'Properties28',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties29} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_29: fieldBuilder.buildEnumField(
          'Properties29',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties30} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_30: fieldBuilder.buildEnumField(
          'Properties30',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties31} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_31: fieldBuilder.buildEnumField(
          'Properties31',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties32} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_32: fieldBuilder.buildEnumField(
          'Properties32',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties33} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_33: fieldBuilder.buildEnumField(
          'Properties33',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties34} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_34: fieldBuilder.buildEnumField(
          'Properties34',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties35} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_35: fieldBuilder.buildEnumField(
          'Properties35',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties36} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_36: fieldBuilder.buildEnumField(
          'Properties36',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties37} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_37: fieldBuilder.buildEnumField(
          'Properties37',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties38} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_38: fieldBuilder.buildEnumField(
          'Properties38',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties39} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_39: fieldBuilder.buildEnumField(
          'Properties39',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties40} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_40: fieldBuilder.buildEnumField(
          'Properties40',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties41} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_41: fieldBuilder.buildEnumField(
          'Properties41',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties42} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_42: fieldBuilder.buildEnumField(
          'Properties42',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties43} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_43: fieldBuilder.buildEnumField(
          'Properties43',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties44} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_44: fieldBuilder.buildEnumField(
          'Properties44',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties45} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_45: fieldBuilder.buildEnumField(
          'Properties45',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties46} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_46: fieldBuilder.buildEnumField(
          'Properties46',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties47} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_47: fieldBuilder.buildEnumField(
          'Properties47',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties48} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_48: fieldBuilder.buildEnumField(
          'Properties48',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties49} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_49: fieldBuilder.buildEnumField(
          'Properties49',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties50} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_50: fieldBuilder.buildEnumField(
          'Properties50',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties51} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_51: fieldBuilder.buildEnumField(
          'Properties51',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties52} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_52: fieldBuilder.buildEnumField(
          'Properties52',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties53} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_53: fieldBuilder.buildEnumField(
          'Properties53',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties54} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_54: fieldBuilder.buildEnumField(
          'Properties54',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties55} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_55: fieldBuilder.buildEnumField(
          'Properties55',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties56} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_56: fieldBuilder.buildEnumField(
          'Properties56',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties57} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_57: fieldBuilder.buildEnumField(
          'Properties57',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties58} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_58: fieldBuilder.buildEnumField(
          'Properties58',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties59} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_59: fieldBuilder.buildEnumField(
          'Properties59',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties60} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_60: fieldBuilder.buildEnumField(
          'Properties60',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties61} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_61: fieldBuilder.buildEnumField(
          'Properties61',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties62} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_62: fieldBuilder.buildEnumField(
          'Properties62',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties63} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_63: fieldBuilder.buildEnumField(
          'Properties63',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link properties64} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTIES_64: fieldBuilder.buildEnumField(
          'Properties64',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link autoCreateSerialNumbersOnRelease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_CREATE_SERIAL_NUMBERS_ON_RELEASE: fieldBuilder.buildEnumField(
          'AutoCreateSerialNumbersOnRelease',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link dnfEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DNF_ENTRY: fieldBuilder.buildEdmTypeField(
          'DNFEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link gtsItemSpec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GTS_ITEM_SPEC: fieldBuilder.buildEdmTypeField(
          'GTSItemSpec',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gtsItemTaxCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GTS_ITEM_TAX_CATEGORY: fieldBuilder.buildEdmTypeField(
          'GTSItemTaxCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fuelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_ID: fieldBuilder.buildEdmTypeField('FuelID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link beverageTableCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEVERAGE_TABLE_CODE: fieldBuilder.buildEdmTypeField(
          'BeverageTableCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beverageGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEVERAGE_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'BeverageGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beverageCommercialBrandCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEVERAGE_COMMERCIAL_BRAND_CODE: fieldBuilder.buildEdmTypeField(
          'BeverageCommercialBrandCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link toleranceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ToleranceDays',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link typeOfAdvancedRules} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_ADVANCED_RULES: fieldBuilder.buildEnumField(
          'TypeOfAdvancedRules',
          TypeOfAdvancedRulesEnum,
          true
        ),
        /**
         * Static representation of the {@link issuePrimarilyBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_PRIMARILY_BY: fieldBuilder.buildEnumField(
          'IssuePrimarilyBy',
          IssuePrimarilyByEnum,
          true
        ),
        /**
         * Static representation of the {@link noDiscounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_DISCOUNTS: fieldBuilder.buildEnumField(
          'NoDiscounts',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link assetClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_CLASS: fieldBuilder.buildEdmTypeField(
          'AssetClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP: fieldBuilder.buildEdmTypeField(
          'AssetGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_NUMBER: fieldBuilder.buildEdmTypeField(
          'InventoryNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technician} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICIAN: fieldBuilder.buildEdmTypeField(
          'Technician',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link employee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE: fieldBuilder.buildEdmTypeField('Employee', 'Edm.Int32', true),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField('Location', 'Edm.Int32', true),
        /**
         * Static representation of the {@link assetStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_STATUS: fieldBuilder.buildEnumField(
          'AssetStatus',
          AssetStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link capitalizationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPITALIZATION_DATE: fieldBuilder.buildEdmTypeField(
          'CapitalizationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link statisticalAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_ASSET: fieldBuilder.buildEnumField(
          'StatisticalAsset',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link cession} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CESSION: fieldBuilder.buildEnumField('Cession', BoYesNoEnum, true),
        /**
         * Static representation of the {@link deactivateAfterUsefulLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEACTIVATE_AFTER_USEFUL_LIFE: fieldBuilder.buildEnumField(
          'DeactivateAfterUsefulLife',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link manageByQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_BY_QUANTITY: fieldBuilder.buildEnumField(
          'ManageByQuantity',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link uoMGroupEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UO_M_GROUP_ENTRY: fieldBuilder.buildEdmTypeField(
          'UoMGroupEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link inventoryUoMEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UO_M_ENTRY: fieldBuilder.buildEdmTypeField(
          'InventoryUoMEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link defaultSalesUoMEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SALES_UO_M_ENTRY: fieldBuilder.buildEdmTypeField(
          'DefaultSalesUoMEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link defaultPurchasingUoMEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PURCHASING_UO_M_ENTRY: fieldBuilder.buildEdmTypeField(
          'DefaultPurchasingUoMEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link depreciationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_GROUP: fieldBuilder.buildEdmTypeField(
          'DepreciationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssetSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WEIGHT: fieldBuilder.buildEdmTypeField(
          'InventoryWeight',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link inventoryWeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'InventoryWeightUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link inventoryWeight1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WEIGHT_1: fieldBuilder.buildEdmTypeField(
          'InventoryWeight1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link inventoryWeightUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WEIGHT_UNIT_1: fieldBuilder.buildEdmTypeField(
          'InventoryWeightUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link defaultCountingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COUNTING_UNIT: fieldBuilder.buildEdmTypeField(
          'DefaultCountingUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countingItemsPerUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_ITEMS_PER_UNIT: fieldBuilder.buildEdmTypeField(
          'CountingItemsPerUnit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link defaultCountingUoMEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COUNTING_UO_M_ENTRY: fieldBuilder.buildEdmTypeField(
          'DefaultCountingUoMEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link excisable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISABLE: fieldBuilder.buildEnumField('Excisable', BoYesNoEnum, true),
        /**
         * Static representation of the {@link chapterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHAPTER_ID: fieldBuilder.buildEdmTypeField(
          'ChapterID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link scsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCS_CODE: fieldBuilder.buildEdmTypeField('ScsCode', 'Edm.String', true),
        /**
         * Static representation of the {@link spProdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SP_PROD_TYPE: fieldBuilder.buildEnumField(
          'SpProdType',
          SpecialProductTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link prodStdCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_STD_COST: fieldBuilder.buildEdmTypeField(
          'ProdStdCost',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link inCostRollup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_COST_ROLLUP: fieldBuilder.buildEnumField(
          'InCostRollup',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link virtualAssetItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIRTUAL_ASSET_ITEM: fieldBuilder.buildEnumField(
          'VirtualAssetItem',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link enforceAssetSerialNumbers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENFORCE_ASSET_SERIAL_NUMBERS: fieldBuilder.buildEnumField(
          'EnforceAssetSerialNumbers',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link linkedResource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_RESOURCE: fieldBuilder.buildEdmTypeField(
          'LinkedResource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link updateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_TIME: fieldBuilder.buildEdmTypeField(
          'UpdateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link gstRelevnt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_RELEVNT: fieldBuilder.buildEnumField(
          'GSTRelevnt',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link sacEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAC_ENTRY: fieldBuilder.buildEdmTypeField(
          'SACEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link gstTaxCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_TAX_CATEGORY: fieldBuilder.buildEnumField(
          'GSTTaxCategory',
          GstTaxCategoryEnum,
          true
        ),
        /**
         * Static representation of the {@link serviceCategoryEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CATEGORY_ENTRY: fieldBuilder.buildEdmTypeField(
          'ServiceCategoryEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link capitalGoodsOnHoldPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPITAL_GOODS_ON_HOLD_PERCENT: fieldBuilder.buildEdmTypeField(
          'CapitalGoodsOnHoldPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link capitalGoodsOnHoldLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPITAL_GOODS_ON_HOLD_LIMIT: fieldBuilder.buildEdmTypeField(
          'CapitalGoodsOnHoldLimit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link assessableValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSABLE_VALUE: fieldBuilder.buildEdmTypeField(
          'AssessableValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link assVal4Wtr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASS_VAL_4_WTR: fieldBuilder.buildEdmTypeField(
          'AssVal4WTR',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link soiExcisable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOI_EXCISABLE: fieldBuilder.buildEnumField(
          'SOIExcisable',
          SoiExcisableTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link tnved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TNVED: fieldBuilder.buildEdmTypeField('TNVED', 'Edm.String', true),
        /**
         * Static representation of the {@link importedItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTED_ITEM: fieldBuilder.buildEnumField(
          'ImportedItem',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link pricingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_UNIT: fieldBuilder.buildEdmTypeField(
          'PricingUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link createDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DATE: fieldBuilder.buildEdmTypeField(
          'CreateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_TIME: fieldBuilder.buildEdmTypeField(
          'CreateTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link nveCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NVE_CODE: fieldBuilder.buildEdmTypeField('NVECode', 'Edm.String', true),
        /**
         * Static representation of the {@link ctrSealQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CTR_SEAL_QTY: fieldBuilder.buildEdmTypeField(
          'CtrSealQty',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link cestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CEST_CODE: fieldBuilder.buildEdmTypeField(
          'CESTCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link legalText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_TEXT: fieldBuilder.buildEdmTypeField(
          'LegalText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VERSION: fieldBuilder.buildEdmTypeField(
          'DataVersion',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link createQrCodeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_QR_CODE_FROM: fieldBuilder.buildEdmTypeField(
          'CreateQRCodeFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link traceableItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACEABLE_ITEM: fieldBuilder.buildEnumField(
          'TraceableItem',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link commodityClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'CommodityClassification',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link weightOfRecycledPlastic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_OF_RECYCLED_PLASTIC: fieldBuilder.buildEdmTypeField(
          'WeightOfRecycledPlastic',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link plasticPackageTaxCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLASTIC_PACKAGE_TAX_CATEGORY: fieldBuilder.buildEdmTypeField(
          'PlasticPackageTaxCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plasticPackageExemptionReasonForPurchase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLASTIC_PACKAGE_EXEMPTION_REASON_FOR_PURCHASE:
          fieldBuilder.buildEdmTypeField(
            'PlasticPackageExemptionReasonForPurchase',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link plasticPackageExemptionReasonForProduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLASTIC_PACKAGE_EXEMPTION_REASON_FOR_PRODUCTION:
          fieldBuilder.buildEdmTypeField(
            'PlasticPackageExemptionReasonForProduction',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link uMediando} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MEDIANDO: fieldBuilder.buildEdmTypeField(
          'U_Mediando',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBaIsFa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BA_IS_FA: fieldBuilder.buildEdmTypeField(
          'U_BA_IsFA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBaTypId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BA_TYP_ID: fieldBuilder.buildEdmTypeField(
          'U_BA_TypID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBaNumId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BA_NUM_ID: fieldBuilder.buildEdmTypeField(
          'U_BA_NumID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBaLvaFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BA_LVA_FROM: fieldBuilder.buildEdmTypeField(
          'U_BA_LVAFrom',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uBaLva} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BA_LVA: fieldBuilder.buildEdmTypeField(
          'U_BA_LVA',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uLnummer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LNUMMER: fieldBuilder.buildEdmTypeField(
          'U_LNUMMER',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uLavp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LAVP: fieldBuilder.buildEdmTypeField('U_LAVP', 'Edm.String', true),
        /**
         * Static representation of the {@link uMediandoMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_MEDIANDO_MASTER: fieldBuilder.buildEdmTypeField(
          'U_Mediando_Master',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsHinLief} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_HIN_LIEF: fieldBuilder.buildEdmTypeField(
          'U_BS_HIN_LIEF',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungArtikelinfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_ARTIKELINFO: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_ARTIKELINFO',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungArbeitsvorbereitung} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_ARBEITSVORBEREITUNG: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_ARBEITSVORBEREITUNG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungFertigungsangaben} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_FERTIGUNGSANGABEN: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_FERTIGUNGSANGABEN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungQualitaetssicherung} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_QUALITAETSSICHERUNG: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_QUALITAETSSICHERUNG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungSynonyme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_SYNONYME: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_SYNONYME',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungMatchcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_MATCHCODE: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_MATCHCODE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungBild1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_BILD_1: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_BILD1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungBild2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_BILD_2: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_BILD2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungBild3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_BILD_3: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_BILD3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungAnlage1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_ANLAGE_1: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_ANLAGE1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungAnlage2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_ANLAGE_2: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_ANLAGE2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsFertigungAnlage3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_FERTIGUNG_ANLAGE_3: fieldBuilder.buildEdmTypeField(
          'U_BS_FERTIGUNG_ANLAGE3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uTempx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TEMPX: fieldBuilder.buildEdmTypeField('U_tempx', 'Edm.String', true),
        /**
         * Static representation of the {@link uBsBildOld} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_BILD_OLD: fieldBuilder.buildEdmTypeField(
          'U_BS_BILD_OLD',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsDatenblattBeschreibung} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_DATENBLATT_BESCHREIBUNG: fieldBuilder.buildEdmTypeField(
          'U_BS_DATENBLATT_BESCHREIBUNG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsDatenblattDaten} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_DATENBLATT_DATEN: fieldBuilder.buildEdmTypeField(
          'U_BS_DATENBLATT_DATEN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsDatenblattPreis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_DATENBLATT_PREIS: fieldBuilder.buildEdmTypeField(
          'U_BS_DATENBLATT_PREIS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsDatenblattLieferant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_DATENBLATT_LIEFERANT: fieldBuilder.buildEdmTypeField(
          'U_BS_DATENBLATT_LIEFERANT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBsDatenblattZeichnung} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_DATENBLATT_ZEICHNUNG: fieldBuilder.buildEdmTypeField(
          'U_BS_DATENBLATT_ZEICHNUNG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemPrices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_PRICES: fieldBuilder.buildCollectionField(
          'ItemPrices',
          ItemPrice,
          true
        ),
        /**
         * Static representation of the {@link itemWarehouseInfoCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WAREHOUSE_INFO_COLLECTION: fieldBuilder.buildCollectionField(
          'ItemWarehouseInfoCollection',
          ItemWarehouseInfo,
          true
        ),
        /**
         * Static representation of the {@link itemPreferredVendors} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_PREFERRED_VENDORS: fieldBuilder.buildCollectionField(
          'ItemPreferredVendors',
          ItemPreferredVendor,
          true
        ),
        /**
         * Static representation of the {@link itemLocalizationInfos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_LOCALIZATION_INFOS: fieldBuilder.buildCollectionField(
          'ItemLocalizationInfos',
          ItemLocalizationInfo,
          true
        ),
        /**
         * Static representation of the {@link itemProjects} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_PROJECTS: fieldBuilder.buildCollectionField(
          'ItemProjects',
          ItemProject,
          true
        ),
        /**
         * Static representation of the {@link itemDistributionRules} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DISTRIBUTION_RULES: fieldBuilder.buildCollectionField(
          'ItemDistributionRules',
          ItemDistributionRule,
          true
        ),
        /**
         * Static representation of the {@link itemAttributeGroups} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ATTRIBUTE_GROUPS: fieldBuilder.buildCollectionField(
          'ItemAttributeGroups',
          ItemAttributeGroups,
          true
        ),
        /**
         * Static representation of the {@link itemDepreciationParameters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DEPRECIATION_PARAMETERS: fieldBuilder.buildCollectionField(
          'ItemDepreciationParameters',
          ItemDepreciationParameter,
          true
        ),
        /**
         * Static representation of the {@link itemPeriodControls} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_PERIOD_CONTROLS: fieldBuilder.buildCollectionField(
          'ItemPeriodControls',
          ItemPeriodControl,
          true
        ),
        /**
         * Static representation of the {@link itemUnitOfMeasurementCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_UNIT_OF_MEASUREMENT_COLLECTION: fieldBuilder.buildCollectionField(
          'ItemUnitOfMeasurementCollection',
          ItemUnitOfMeasurement,
          true
        ),
        /**
         * Static representation of the {@link itemBarCodeCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BAR_CODE_COLLECTION: fieldBuilder.buildCollectionField(
          'ItemBarCodeCollection',
          ItemBarCode,
          true
        ),
        /**
         * Static representation of the {@link itemIntrastatExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_INTRASTAT_EXTENSION: fieldBuilder.buildComplexTypeField(
          'ItemIntrastatExtension',
          ItemIntrastatExtensionField,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Items)
      };
    }

    return this._schema;
  }
}
