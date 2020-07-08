import { ItemsRequestBuilder } from './ItemsRequestBuilder';
import { Moment } from 'moment';
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
import { ItemIntrastatExtension, ItemIntrastatExtensionField } from './ItemIntrastatExtension';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Items" of service "SAPB1".
 */
export declare class Items extends Entity implements ItemsType {
    /**
     * Technical entity name for Items.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Items.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    specialPrices: SpecialPrices[];
    /**
     * One-to-one navigation property to the [[ItemGroups]] entity.
     */
    itemGroups: ItemGroups;
    /**
     * One-to-one navigation property to the [[CustomsGroups]] entity.
     */
    customsGroup: CustomsGroups;
    /**
     * One-to-one navigation property to the [[VatGroups]] entity.
     */
    vatGroup: VatGroups;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[CommissionGroups]] entity.
     */
    commissionGroup2: CommissionGroups;
    /**
     * One-to-one navigation property to the [[Manufacturers]] entity.
     */
    manufacturer2: Manufacturers;
    /**
     * One-to-one navigation property to the [[ShippingTypes]] entity.
     */
    shippingType: ShippingTypes;
    /**
     * One-to-one navigation property to the [[ContractTemplates]] entity.
     */
    contractTemplate: ContractTemplates;
    /**
     * One-to-one navigation property to the [[SalesTaxCodes]] entity.
     */
    salesTaxCode: SalesTaxCodes;
    /**
     * One-to-one navigation property to the [[InventoryCycles]] entity.
     */
    inventoryCycles: InventoryCycles;
    /**
     * One-to-one navigation property to the [[ServiceGroups]] entity.
     */
    serviceGroup2: ServiceGroups;
    /**
     * One-to-one navigation property to the [[NcmCodesSetup]] entity.
     */
    ncmCodeSetup: NcmCodesSetup;
    /**
     * One-to-one navigation property to the [[MaterialGroups]] entity.
     */
    materialGroup2: MaterialGroups;
    /**
     * One-to-one navigation property to the [[DnfCodeSetup]] entity.
     */
    dnfCodeSetup: DnfCodeSetup;
    /**
     * One-to-one navigation property to the [[BrazilFuelIndexers]] entity.
     */
    brazilFuelIndexer: BrazilFuelIndexers;
    /**
     * One-to-one navigation property to the [[BrazilStringIndexers]] entity.
     */
    brazilStringIndexer: BrazilStringIndexers;
    /**
     * One-to-one navigation property to the [[BrazilNumericIndexers]] entity.
     */
    brazilNumericIndexer: BrazilNumericIndexers;
    /**
     * One-to-one navigation property to the [[AssetClasses]] entity.
     */
    assetClass2: AssetClasses;
    /**
     * One-to-one navigation property to the [[AssetGroups]] entity.
     */
    assetGroup2: AssetGroups;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[WarehouseLocations]] entity.
     */
    warehouseLocation: WarehouseLocations;
    /**
     * One-to-one navigation property to the [[UnitOfMeasurementGroups]] entity.
     */
    unitOfMeasurementGroup: UnitOfMeasurementGroups;
    /**
     * One-to-one navigation property to the [[UnitOfMeasurements]] entity.
     */
    unitOfMeasurement: UnitOfMeasurements;
    /**
     * One-to-one navigation property to the [[AssetDepreciationGroups]] entity.
     */
    assetDepreciationGroup: AssetDepreciationGroups;
    /**
     * One-to-one navigation property to the [[Resources]] entity.
     */
    resource: Resources;
    /**
     * One-to-one navigation property to the [[IndiaSacCode]] entity.
     */
    indiaSacCode: IndiaSacCode;
    /**
     * One-to-many navigation property to the [[StockTakings]] entity.
     */
    stockTakings: StockTakings[];
    /**
     * One-to-many navigation property to the [[DepreciationAreas]] entity.
     */
    depreciationAreas: DepreciationAreas[];
    /**
     * One-to-many navigation property to the [[ProductTrees]] entity.
     */
    productTrees: ProductTrees[];
    /**
     * One-to-many navigation property to the [[GlAccountAdvancedRules]] entity.
     */
    glAccountAdvancedRules: GlAccountAdvancedRules[];
    /**
     * One-to-many navigation property to the [[BarCodes]] entity.
     */
    barCodes: BarCodes[];
    /**
     * One-to-many navigation property to the [[BatchNumberDetails]] entity.
     */
    batchNumberDetails: BatchNumberDetails[];
    /**
     * One-to-many navigation property to the [[SerialNumberDetails]] entity.
     */
    serialNumberDetails: SerialNumberDetails[];
    /**
     * One-to-many navigation property to the [[BinLocations]] entity.
     */
    binLocations: BinLocations[];
    /**
     * One-to-many navigation property to the [[CustomerEquipmentCards]] entity.
     */
    customerEquipmentCards: CustomerEquipmentCards[];
    /**
     * One-to-many navigation property to the [[KnowledgeBaseSolutions]] entity.
     */
    knowledgeBaseSolutions: KnowledgeBaseSolutions[];
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * One-to-many navigation property to the [[AlternateCatNum]] entity.
     */
    alternateCatNum: AlternateCatNum[];
    /**
     * One-to-many navigation property to the [[Resources]] entity.
     */
    resources: Resources[];
    /**
     * Returns an entity builder to construct instances `Items`.
     * @returns A builder that constructs instances of entity type `Items`.
     */
    static builder(): EntityBuilderType<Items, ItemsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Items` entity type.
     * @returns A `Items` request builder.
     */
    static requestBuilder(): ItemsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Items`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Items`.
     */
    static customField(fieldName: string): CustomField<Items>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Items {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<Items>;
    /**
     * Static representation of the [[itemName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_NAME: StringField<Items>;
    /**
     * Static representation of the [[foreignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_NAME: StringField<Items>;
    /**
     * Static representation of the [[itemsGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS_GROUP_CODE: NumberField<Items>;
    /**
     * Static representation of the [[customsGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMS_GROUP_CODE: NumberField<Items>;
    /**
     * Static representation of the [[salesVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_VAT_GROUP: StringField<Items>;
    /**
     * Static representation of the [[barCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BAR_CODE: StringField<Items>;
    /**
     * Static representation of the [[incomeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOME_ACCOUNT: StringField<Items>;
    /**
     * Static representation of the [[exemptIncomeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPT_INCOME_ACCOUNT: StringField<Items>;
    /**
     * Static representation of the [[expanseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPANSE_ACCOUNT: StringField<Items>;
    /**
     * Static representation of the [[mainsupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAINSUPPLIER: StringField<Items>;
    /**
     * Static representation of the [[supplierCatalogNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_CATALOG_NO: StringField<Items>;
    /**
     * Static representation of the [[desiredInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESIRED_INVENTORY: NumberField<Items>;
    /**
     * Static representation of the [[minInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_INVENTORY: NumberField<Items>;
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICTURE: StringField<Items>;
    /**
     * Static representation of the [[userText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_TEXT: StringField<Items>;
    /**
     * Static representation of the [[serialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIAL_NUM: StringField<Items>;
    /**
     * Static representation of the [[commissionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_PERCENT: NumberField<Items>;
    /**
     * Static representation of the [[commissionSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_SUM: NumberField<Items>;
    /**
     * Static representation of the [[commissionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_GROUP: NumberField<Items>;
    /**
     * Static representation of the [[dataExportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_EXPORT_CODE: StringField<Items>;
    /**
     * Static representation of the [[manufacturer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURER: NumberField<Items>;
    /**
     * Static representation of the [[quantityOnStock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_ON_STOCK: NumberField<Items>;
    /**
     * Static representation of the [[quantityOrderedFromVendors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_ORDERED_FROM_VENDORS: NumberField<Items>;
    /**
     * Static representation of the [[quantityOrderedByCustomers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_ORDERED_BY_CUSTOMERS: NumberField<Items>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<Items>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<Items>;
    /**
     * Static representation of the [[validRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_REMARKS: StringField<Items>;
    /**
     * Static representation of the [[frozenFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN_FROM: DateField<Items>;
    /**
     * Static representation of the [[frozenTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN_TO: DateField<Items>;
    /**
     * Static representation of the [[frozenRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN_REMARKS: StringField<Items>;
    /**
     * Static representation of the [[salesUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT: StringField<Items>;
    /**
     * Static representation of the [[salesItemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ITEMS_PER_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[salesPackagingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PACKAGING_UNIT: StringField<Items>;
    /**
     * Static representation of the [[salesQtyPerPackUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_QTY_PER_PACK_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[salesUnitLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT_LENGTH: NumberField<Items>;
    /**
     * Static representation of the [[salesLengthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_LENGTH_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[salesUnitWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT_WIDTH: NumberField<Items>;
    /**
     * Static representation of the [[salesWidthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_WIDTH_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[salesUnitHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT_HEIGHT: NumberField<Items>;
    /**
     * Static representation of the [[salesHeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_HEIGHT_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[salesUnitVolume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT_VOLUME: NumberField<Items>;
    /**
     * Static representation of the [[salesVolumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_VOLUME_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[salesUnitWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT_WEIGHT: NumberField<Items>;
    /**
     * Static representation of the [[salesWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_WEIGHT_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT: StringField<Items>;
    /**
     * Static representation of the [[purchaseItemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ITEMS_PER_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[purchasePackagingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_PACKAGING_UNIT: StringField<Items>;
    /**
     * Static representation of the [[purchaseQtyPerPackUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_QTY_PER_PACK_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnitLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT_LENGTH: NumberField<Items>;
    /**
     * Static representation of the [[purchaseLengthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_LENGTH_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnitWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT_WIDTH: NumberField<Items>;
    /**
     * Static representation of the [[purchaseWidthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_WIDTH_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnitHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT_HEIGHT: NumberField<Items>;
    /**
     * Static representation of the [[purchaseHeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_HEIGHT_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnitVolume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT_VOLUME: NumberField<Items>;
    /**
     * Static representation of the [[purchaseVolumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_VOLUME_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnitWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT_WEIGHT: NumberField<Items>;
    /**
     * Static representation of the [[purchaseWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_WEIGHT_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[purchaseVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_VAT_GROUP: StringField<Items>;
    /**
     * Static representation of the [[salesFactor1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_FACTOR_1: NumberField<Items>;
    /**
     * Static representation of the [[salesFactor2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_FACTOR_2: NumberField<Items>;
    /**
     * Static representation of the [[salesFactor3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_FACTOR_3: NumberField<Items>;
    /**
     * Static representation of the [[salesFactor4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_FACTOR_4: NumberField<Items>;
    /**
     * Static representation of the [[purchaseFactor1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_FACTOR_1: NumberField<Items>;
    /**
     * Static representation of the [[purchaseFactor2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_FACTOR_2: NumberField<Items>;
    /**
     * Static representation of the [[purchaseFactor3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_FACTOR_3: NumberField<Items>;
    /**
     * Static representation of the [[purchaseFactor4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_FACTOR_4: NumberField<Items>;
    /**
     * Static representation of the [[movingAveragePrice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOVING_AVERAGE_PRICE: NumberField<Items>;
    /**
     * Static representation of the [[foreignRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_REVENUES_ACCOUNT: StringField<Items>;
    /**
     * Static representation of the [[ecRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EC_REVENUES_ACCOUNT: StringField<Items>;
    /**
     * Static representation of the [[foreignExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOREIGN_EXPENSES_ACCOUNT: StringField<Items>;
    /**
     * Static representation of the [[ecExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EC_EXPENSES_ACCOUNT: StringField<Items>;
    /**
     * Static representation of the [[avgStdPrice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVG_STD_PRICE: NumberField<Items>;
    /**
     * Static representation of the [[defaultWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_WAREHOUSE: StringField<Items>;
    /**
     * Static representation of the [[shipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TYPE: NumberField<Items>;
    /**
     * Static representation of the [[maxInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_INVENTORY: NumberField<Items>;
    /**
     * Static representation of the [[purchaseHeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_HEIGHT_UNIT_1: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnitHeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT_HEIGHT_1: NumberField<Items>;
    /**
     * Static representation of the [[purchaseLengthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_LENGTH_UNIT_1: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnitLength1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT_LENGTH_1: NumberField<Items>;
    /**
     * Static representation of the [[purchaseWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_WEIGHT_UNIT_1: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnitWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT_WEIGHT_1: NumberField<Items>;
    /**
     * Static representation of the [[purchaseWidthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_WIDTH_UNIT_1: NumberField<Items>;
    /**
     * Static representation of the [[purchaseUnitWidth1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_UNIT_WIDTH_1: NumberField<Items>;
    /**
     * Static representation of the [[salesHeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_HEIGHT_UNIT_1: NumberField<Items>;
    /**
     * Static representation of the [[salesUnitHeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT_HEIGHT_1: NumberField<Items>;
    /**
     * Static representation of the [[salesLengthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_LENGTH_UNIT_1: NumberField<Items>;
    /**
     * Static representation of the [[salesUnitLength1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT_LENGTH_1: NumberField<Items>;
    /**
     * Static representation of the [[salesWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_WEIGHT_UNIT_1: NumberField<Items>;
    /**
     * Static representation of the [[salesUnitWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT_WEIGHT_1: NumberField<Items>;
    /**
     * Static representation of the [[salesWidthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_WIDTH_UNIT_1: NumberField<Items>;
    /**
     * Static representation of the [[salesUnitWidth1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_UNIT_WIDTH_1: NumberField<Items>;
    /**
     * Static representation of the [[sww]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SWW: StringField<Items>;
    /**
     * Static representation of the [[warrantyTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WARRANTY_TEMPLATE: StringField<Items>;
    /**
     * Static representation of the [[arTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AR_TAX_CODE: StringField<Items>;
    /**
     * Static representation of the [[apTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AP_TAX_CODE: StringField<Items>;
    /**
     * Static representation of the [[baseUnitName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_UNIT_NAME: StringField<Items>;
    /**
     * Static representation of the [[itemCountryOrg]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_COUNTRY_ORG: StringField<Items>;
    /**
     * Static representation of the [[inventoryUom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_UOM: StringField<Items>;
    /**
     * Static representation of the [[orderIntervals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_INTERVALS: NumberField<Items>;
    /**
     * Static representation of the [[orderMultiple]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_MULTIPLE: NumberField<Items>;
    /**
     * Static representation of the [[leadTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEAD_TIME: NumberField<Items>;
    /**
     * Static representation of the [[minOrderQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_ORDER_QUANTITY: NumberField<Items>;
    /**
     * Static representation of the [[outgoingServiceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OUTGOING_SERVICE_CODE: NumberField<Items>;
    /**
     * Static representation of the [[incomingServiceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOMING_SERVICE_CODE: NumberField<Items>;
    /**
     * Static representation of the [[serviceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_GROUP: NumberField<Items>;
    /**
     * Static representation of the [[ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NCM_CODE: NumberField<Items>;
    /**
     * Static representation of the [[materialGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_GROUP: NumberField<Items>;
    /**
     * Static representation of the [[productSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_SOURCE: StringField<Items>;
    /**
     * Static representation of the [[dnfEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DNF_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[gtsItemSpec]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GTS_ITEM_SPEC: StringField<Items>;
    /**
     * Static representation of the [[gtsItemTaxCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GTS_ITEM_TAX_CATEGORY: StringField<Items>;
    /**
     * Static representation of the [[fuelId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUEL_ID: NumberField<Items>;
    /**
     * Static representation of the [[beverageTableCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEVERAGE_TABLE_CODE: StringField<Items>;
    /**
     * Static representation of the [[beverageGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEVERAGE_GROUP_CODE: StringField<Items>;
    /**
     * Static representation of the [[beverageCommercialBrandCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEVERAGE_COMMERCIAL_BRAND_CODE: NumberField<Items>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<Items>;
    /**
     * Static representation of the [[toleranceDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOLERANCE_DAYS: NumberField<Items>;
    /**
     * Static representation of the [[assetClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CLASS: StringField<Items>;
    /**
     * Static representation of the [[assetGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_GROUP: StringField<Items>;
    /**
     * Static representation of the [[inventoryNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_NUMBER: StringField<Items>;
    /**
     * Static representation of the [[technician]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TECHNICIAN: NumberField<Items>;
    /**
     * Static representation of the [[employee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE: NumberField<Items>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: NumberField<Items>;
    /**
     * Static representation of the [[capitalizationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAPITALIZATION_DATE: DateField<Items>;
    /**
     * Static representation of the [[uoMGroupEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UO_M_GROUP_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[inventoryUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_UO_M_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[defaultSalesUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_SALES_UO_M_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[defaultPurchasingUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_PURCHASING_UO_M_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[depreciationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_GROUP: StringField<Items>;
    /**
     * Static representation of the [[assetSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_SERIAL_NUMBER: StringField<Items>;
    /**
     * Static representation of the [[inventoryWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_WEIGHT: NumberField<Items>;
    /**
     * Static representation of the [[inventoryWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_WEIGHT_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[inventoryWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_WEIGHT_1: NumberField<Items>;
    /**
     * Static representation of the [[inventoryWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_WEIGHT_UNIT_1: NumberField<Items>;
    /**
     * Static representation of the [[defaultCountingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_COUNTING_UNIT: StringField<Items>;
    /**
     * Static representation of the [[countingItemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTING_ITEMS_PER_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[defaultCountingUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_COUNTING_UO_M_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[chapterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHAPTER_ID: NumberField<Items>;
    /**
     * Static representation of the [[scsCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCS_CODE: StringField<Items>;
    /**
     * Static representation of the [[prodStdCost]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROD_STD_COST: NumberField<Items>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[linkedResource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_RESOURCE: StringField<Items>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<Items>;
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_TIME: TimeField<Items>;
    /**
     * Static representation of the [[sacEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAC_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[serviceCategoryEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CATEGORY_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[capitalGoodsOnHoldPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAPITAL_GOODS_ON_HOLD_PERCENT: NumberField<Items>;
    /**
     * Static representation of the [[capitalGoodsOnHoldLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAPITAL_GOODS_ON_HOLD_LIMIT: NumberField<Items>;
    /**
     * Static representation of the [[assessableValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESSABLE_VALUE: NumberField<Items>;
    /**
     * Static representation of the [[assVal4Wtr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASS_VAL_4_WTR: NumberField<Items>;
    /**
     * Static representation of the [[tnved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TNVED: StringField<Items>;
    /**
     * Static representation of the [[pricingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICING_UNIT: NumberField<Items>;
    /**
     * Static representation of the [[itemPrices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_PRICES: CollectionField<Items>;
    /**
     * Static representation of the [[itemWarehouseInfoCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_WAREHOUSE_INFO_COLLECTION: CollectionField<Items>;
    /**
     * Static representation of the [[itemPreferredVendors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_PREFERRED_VENDORS: CollectionField<Items>;
    /**
     * Static representation of the [[itemLocalizationInfos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_LOCALIZATION_INFOS: CollectionField<Items>;
    /**
     * Static representation of the [[itemProjects]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_PROJECTS: CollectionField<Items>;
    /**
     * Static representation of the [[itemDistributionRules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_DISTRIBUTION_RULES: CollectionField<Items>;
    /**
     * Static representation of the [[itemAttributeGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ATTRIBUTE_GROUPS: CollectionField<Items>;
    /**
     * Static representation of the [[itemDepreciationParameters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_DEPRECIATION_PARAMETERS: CollectionField<Items>;
    /**
     * Static representation of the [[itemPeriodControls]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_PERIOD_CONTROLS: CollectionField<Items>;
    /**
     * Static representation of the [[itemUnitOfMeasurementCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_UNIT_OF_MEASUREMENT_COLLECTION: CollectionField<Items>;
    /**
     * Static representation of the [[itemBarCodeCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_BAR_CODE_COLLECTION: CollectionField<Items>;
    /**
     * Static representation of the [[itemIntrastatExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_INTRASTAT_EXTENSION: ItemIntrastatExtensionField<Items>;
    /**
     * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPECIAL_PRICES: OneToManyLink<Items, SpecialPrices>;
    /**
     * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROUPS: OneToOneLink<Items, ItemGroups>;
    /**
     * Static representation of the one-to-one navigation property [[customsGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMS_GROUP: OneToOneLink<Items, CustomsGroups>;
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUP: OneToOneLink<Items, VatGroups>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<Items, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<Items, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[commissionGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMISSION_GROUP_2: OneToOneLink<Items, CommissionGroups>;
    /**
     * Static representation of the one-to-one navigation property [[manufacturer2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURER_2: OneToOneLink<Items, Manufacturers>;
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_TYPE: OneToOneLink<Items, ShippingTypes>;
    /**
     * Static representation of the one-to-one navigation property [[contractTemplate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTRACT_TEMPLATE: OneToOneLink<Items, ContractTemplates>;
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_CODE: OneToOneLink<Items, SalesTaxCodes>;
    /**
     * Static representation of the one-to-one navigation property [[inventoryCycles]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_CYCLES: OneToOneLink<Items, InventoryCycles>;
    /**
     * Static representation of the one-to-one navigation property [[serviceGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_GROUP_2: OneToOneLink<Items, ServiceGroups>;
    /**
     * Static representation of the one-to-one navigation property [[ncmCodeSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NCM_CODE_SETUP: OneToOneLink<Items, NcmCodesSetup>;
    /**
     * Static representation of the one-to-one navigation property [[materialGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_GROUP_2: OneToOneLink<Items, MaterialGroups>;
    /**
     * Static representation of the one-to-one navigation property [[dnfCodeSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DNF_CODE_SETUP: OneToOneLink<Items, DnfCodeSetup>;
    /**
     * Static representation of the one-to-one navigation property [[brazilFuelIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_FUEL_INDEXER: OneToOneLink<Items, BrazilFuelIndexers>;
    /**
     * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_STRING_INDEXER: OneToOneLink<Items, BrazilStringIndexers>;
    /**
     * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BRAZIL_NUMERIC_INDEXER: OneToOneLink<Items, BrazilNumericIndexers>;
    /**
     * Static representation of the one-to-one navigation property [[assetClass2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_CLASS_2: OneToOneLink<Items, AssetClasses>;
    /**
     * Static representation of the one-to-one navigation property [[assetGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_GROUP_2: OneToOneLink<Items, AssetGroups>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<Items, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_LOCATION: OneToOneLink<Items, WarehouseLocations>;
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<Items, UnitOfMeasurementGroups>;
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT: OneToOneLink<Items, UnitOfMeasurements>;
    /**
     * Static representation of the one-to-one navigation property [[assetDepreciationGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_DEPRECIATION_GROUP: OneToOneLink<Items, AssetDepreciationGroups>;
    /**
     * Static representation of the one-to-one navigation property [[resource]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCE: OneToOneLink<Items, Resources>;
    /**
     * Static representation of the one-to-one navigation property [[indiaSacCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDIA_SAC_CODE: OneToOneLink<Items, IndiaSacCode>;
    /**
     * Static representation of the one-to-many navigation property [[stockTakings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TAKINGS: OneToManyLink<Items, StockTakings>;
    /**
     * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_AREAS: OneToManyLink<Items, DepreciationAreas>;
    /**
     * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_TREES: OneToManyLink<Items, ProductTrees>;
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<Items, GlAccountAdvancedRules>;
    /**
     * Static representation of the one-to-many navigation property [[barCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BAR_CODES: OneToManyLink<Items, BarCodes>;
    /**
     * Static representation of the one-to-many navigation property [[batchNumberDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BATCH_NUMBER_DETAILS: OneToManyLink<Items, BatchNumberDetails>;
    /**
     * Static representation of the one-to-many navigation property [[serialNumberDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIAL_NUMBER_DETAILS: OneToManyLink<Items, SerialNumberDetails>;
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIN_LOCATIONS: OneToManyLink<Items, BinLocations>;
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_EQUIPMENT_CARDS: OneToManyLink<Items, CustomerEquipmentCards>;
    /**
     * Static representation of the one-to-many navigation property [[knowledgeBaseSolutions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<Items, KnowledgeBaseSolutions>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<Items, ServiceCalls>;
    /**
     * Static representation of the one-to-many navigation property [[alternateCatNum]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATE_CAT_NUM: OneToManyLink<Items, AlternateCatNum>;
    /**
     * Static representation of the one-to-many navigation property [[resources]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOURCES: OneToManyLink<Items, Resources>;
    /**
     * All fields of the Items entity.
     */
    const _allFields: Array<StringField<Items> | NumberField<Items> | DateField<Items> | TimeField<Items> | CollectionField<Items> | ItemIntrastatExtensionField<Items> | OneToManyLink<Items, SpecialPrices> | OneToOneLink<Items, ItemGroups> | OneToOneLink<Items, CustomsGroups> | OneToOneLink<Items, VatGroups> | OneToOneLink<Items, ChartOfAccounts> | OneToOneLink<Items, BusinessPartners> | OneToOneLink<Items, CommissionGroups> | OneToOneLink<Items, Manufacturers> | OneToOneLink<Items, ShippingTypes> | OneToOneLink<Items, ContractTemplates> | OneToOneLink<Items, SalesTaxCodes> | OneToOneLink<Items, InventoryCycles> | OneToOneLink<Items, ServiceGroups> | OneToOneLink<Items, NcmCodesSetup> | OneToOneLink<Items, MaterialGroups> | OneToOneLink<Items, DnfCodeSetup> | OneToOneLink<Items, BrazilFuelIndexers> | OneToOneLink<Items, BrazilStringIndexers> | OneToOneLink<Items, BrazilNumericIndexers> | OneToOneLink<Items, AssetClasses> | OneToOneLink<Items, AssetGroups> | OneToOneLink<Items, EmployeesInfo> | OneToOneLink<Items, WarehouseLocations> | OneToOneLink<Items, UnitOfMeasurementGroups> | OneToOneLink<Items, UnitOfMeasurements> | OneToOneLink<Items, AssetDepreciationGroups> | OneToOneLink<Items, Resources> | OneToOneLink<Items, IndiaSacCode> | OneToManyLink<Items, StockTakings> | OneToManyLink<Items, DepreciationAreas> | OneToManyLink<Items, ProductTrees> | OneToManyLink<Items, GlAccountAdvancedRules> | OneToManyLink<Items, BarCodes> | OneToManyLink<Items, BatchNumberDetails> | OneToManyLink<Items, SerialNumberDetails> | OneToManyLink<Items, BinLocations> | OneToManyLink<Items, CustomerEquipmentCards> | OneToManyLink<Items, KnowledgeBaseSolutions> | OneToManyLink<Items, ServiceCalls> | OneToManyLink<Items, AlternateCatNum> | OneToManyLink<Items, Resources>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Items>;
    /**
     * All key fields of the Items entity.
     */
    const _keyFields: Array<Field<Items>>;
    /**
     * Mapping of all key field names to the respective static field property Items.
     */
    const _keys: {
        [keys: string]: Field<Items>;
    };
}
//# sourceMappingURL=Items.d.ts.map