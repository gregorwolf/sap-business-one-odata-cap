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
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Items" of service "SAPB1".
 */
export declare class Items extends EntityV4 implements ItemsType {
    /**
     * Technical entity name for Items.
     */
    static _entityName: string;
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
     * Vat Liable.
     * @nullable
     */
    vatLiable?: BoYesNoEnum;
    /**
     * Purchase Item.
     * @nullable
     */
    purchaseItem?: BoYesNoEnum;
    /**
     * Sales Item.
     * @nullable
     */
    salesItem?: BoYesNoEnum;
    /**
     * Inventory Item.
     * @nullable
     */
    inventoryItem?: BoYesNoEnum;
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
     * Tree Type.
     * @nullable
     */
    treeType?: BoItemTreeTypes;
    /**
     * Asset Item.
     * @nullable
     */
    assetItem?: BoYesNoEnum;
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
     * Manage Serial Numbers.
     * @nullable
     */
    manageSerialNumbers?: BoYesNoEnum;
    /**
     * Manage Batch Numbers.
     * @nullable
     */
    manageBatchNumbers?: BoYesNoEnum;
    /**
     * Valid.
     * @nullable
     */
    valid?: BoYesNoEnum;
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
     * Frozen.
     * @nullable
     */
    frozen?: BoYesNoEnum;
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
     * Gl Method.
     * @nullable
     */
    glMethod?: BoGlMethods;
    /**
     * Tax Type.
     * @nullable
     */
    taxType?: BoTaxTypes;
    /**
     * Max Inventory.
     * @nullable
     */
    maxInventory?: number;
    /**
     * Manage Stock By Warehouse.
     * @nullable
     */
    manageStockByWarehouse?: BoYesNoEnum;
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
     * Force Selection Of Serial Number.
     * @nullable
     */
    forceSelectionOfSerialNumber?: BoYesNoEnum;
    /**
     * Manage Serial Numbers On Release Only.
     * @nullable
     */
    manageSerialNumbersOnReleaseOnly?: BoYesNoEnum;
    /**
     * Wt Liable.
     * @nullable
     */
    wtLiable?: BoYesNoEnum;
    /**
     * Cost Accounting Method.
     * @nullable
     */
    costAccountingMethod?: BoInventorySystem;
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
     * Indirect Tax.
     * @nullable
     */
    indirectTax?: BoYesNoEnum;
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
     * Issue Method.
     * @nullable
     */
    issueMethod?: BoIssueMethod;
    /**
     * Sri And Batch Manage Method.
     * @nullable
     */
    sriAndBatchManageMethod?: BoManageMethod;
    /**
     * Is Phantom.
     * @nullable
     */
    isPhantom?: BoYesNoEnum;
    /**
     * Inventory Uom.
     * @nullable
     */
    inventoryUom?: string;
    /**
     * Planning System.
     * @nullable
     */
    planningSystem?: BoPlanningSystem;
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
     * Item Type.
     * @nullable
     */
    itemType?: ItemTypeEnum;
    /**
     * Item Class.
     * @nullable
     */
    itemClass?: ItemClassEnum;
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
     * Material Type.
     * @nullable
     */
    materialType?: BoMaterialTypes;
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
     * Properties 1.
     * @nullable
     */
    properties1?: BoYesNoEnum;
    /**
     * Properties 2.
     * @nullable
     */
    properties2?: BoYesNoEnum;
    /**
     * Properties 3.
     * @nullable
     */
    properties3?: BoYesNoEnum;
    /**
     * Properties 4.
     * @nullable
     */
    properties4?: BoYesNoEnum;
    /**
     * Properties 5.
     * @nullable
     */
    properties5?: BoYesNoEnum;
    /**
     * Properties 6.
     * @nullable
     */
    properties6?: BoYesNoEnum;
    /**
     * Properties 7.
     * @nullable
     */
    properties7?: BoYesNoEnum;
    /**
     * Properties 8.
     * @nullable
     */
    properties8?: BoYesNoEnum;
    /**
     * Properties 9.
     * @nullable
     */
    properties9?: BoYesNoEnum;
    /**
     * Properties 10.
     * @nullable
     */
    properties10?: BoYesNoEnum;
    /**
     * Properties 11.
     * @nullable
     */
    properties11?: BoYesNoEnum;
    /**
     * Properties 12.
     * @nullable
     */
    properties12?: BoYesNoEnum;
    /**
     * Properties 13.
     * @nullable
     */
    properties13?: BoYesNoEnum;
    /**
     * Properties 14.
     * @nullable
     */
    properties14?: BoYesNoEnum;
    /**
     * Properties 15.
     * @nullable
     */
    properties15?: BoYesNoEnum;
    /**
     * Properties 16.
     * @nullable
     */
    properties16?: BoYesNoEnum;
    /**
     * Properties 17.
     * @nullable
     */
    properties17?: BoYesNoEnum;
    /**
     * Properties 18.
     * @nullable
     */
    properties18?: BoYesNoEnum;
    /**
     * Properties 19.
     * @nullable
     */
    properties19?: BoYesNoEnum;
    /**
     * Properties 20.
     * @nullable
     */
    properties20?: BoYesNoEnum;
    /**
     * Properties 21.
     * @nullable
     */
    properties21?: BoYesNoEnum;
    /**
     * Properties 22.
     * @nullable
     */
    properties22?: BoYesNoEnum;
    /**
     * Properties 23.
     * @nullable
     */
    properties23?: BoYesNoEnum;
    /**
     * Properties 24.
     * @nullable
     */
    properties24?: BoYesNoEnum;
    /**
     * Properties 25.
     * @nullable
     */
    properties25?: BoYesNoEnum;
    /**
     * Properties 26.
     * @nullable
     */
    properties26?: BoYesNoEnum;
    /**
     * Properties 27.
     * @nullable
     */
    properties27?: BoYesNoEnum;
    /**
     * Properties 28.
     * @nullable
     */
    properties28?: BoYesNoEnum;
    /**
     * Properties 29.
     * @nullable
     */
    properties29?: BoYesNoEnum;
    /**
     * Properties 30.
     * @nullable
     */
    properties30?: BoYesNoEnum;
    /**
     * Properties 31.
     * @nullable
     */
    properties31?: BoYesNoEnum;
    /**
     * Properties 32.
     * @nullable
     */
    properties32?: BoYesNoEnum;
    /**
     * Properties 33.
     * @nullable
     */
    properties33?: BoYesNoEnum;
    /**
     * Properties 34.
     * @nullable
     */
    properties34?: BoYesNoEnum;
    /**
     * Properties 35.
     * @nullable
     */
    properties35?: BoYesNoEnum;
    /**
     * Properties 36.
     * @nullable
     */
    properties36?: BoYesNoEnum;
    /**
     * Properties 37.
     * @nullable
     */
    properties37?: BoYesNoEnum;
    /**
     * Properties 38.
     * @nullable
     */
    properties38?: BoYesNoEnum;
    /**
     * Properties 39.
     * @nullable
     */
    properties39?: BoYesNoEnum;
    /**
     * Properties 40.
     * @nullable
     */
    properties40?: BoYesNoEnum;
    /**
     * Properties 41.
     * @nullable
     */
    properties41?: BoYesNoEnum;
    /**
     * Properties 42.
     * @nullable
     */
    properties42?: BoYesNoEnum;
    /**
     * Properties 43.
     * @nullable
     */
    properties43?: BoYesNoEnum;
    /**
     * Properties 44.
     * @nullable
     */
    properties44?: BoYesNoEnum;
    /**
     * Properties 45.
     * @nullable
     */
    properties45?: BoYesNoEnum;
    /**
     * Properties 46.
     * @nullable
     */
    properties46?: BoYesNoEnum;
    /**
     * Properties 47.
     * @nullable
     */
    properties47?: BoYesNoEnum;
    /**
     * Properties 48.
     * @nullable
     */
    properties48?: BoYesNoEnum;
    /**
     * Properties 49.
     * @nullable
     */
    properties49?: BoYesNoEnum;
    /**
     * Properties 50.
     * @nullable
     */
    properties50?: BoYesNoEnum;
    /**
     * Properties 51.
     * @nullable
     */
    properties51?: BoYesNoEnum;
    /**
     * Properties 52.
     * @nullable
     */
    properties52?: BoYesNoEnum;
    /**
     * Properties 53.
     * @nullable
     */
    properties53?: BoYesNoEnum;
    /**
     * Properties 54.
     * @nullable
     */
    properties54?: BoYesNoEnum;
    /**
     * Properties 55.
     * @nullable
     */
    properties55?: BoYesNoEnum;
    /**
     * Properties 56.
     * @nullable
     */
    properties56?: BoYesNoEnum;
    /**
     * Properties 57.
     * @nullable
     */
    properties57?: BoYesNoEnum;
    /**
     * Properties 58.
     * @nullable
     */
    properties58?: BoYesNoEnum;
    /**
     * Properties 59.
     * @nullable
     */
    properties59?: BoYesNoEnum;
    /**
     * Properties 60.
     * @nullable
     */
    properties60?: BoYesNoEnum;
    /**
     * Properties 61.
     * @nullable
     */
    properties61?: BoYesNoEnum;
    /**
     * Properties 62.
     * @nullable
     */
    properties62?: BoYesNoEnum;
    /**
     * Properties 63.
     * @nullable
     */
    properties63?: BoYesNoEnum;
    /**
     * Properties 64.
     * @nullable
     */
    properties64?: BoYesNoEnum;
    /**
     * Auto Create Serial Numbers On Release.
     * @nullable
     */
    autoCreateSerialNumbersOnRelease?: BoYesNoEnum;
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
     * Type Of Advanced Rules.
     * @nullable
     */
    typeOfAdvancedRules?: TypeOfAdvancedRulesEnum;
    /**
     * Issue Primarily By.
     * @nullable
     */
    issuePrimarilyBy?: IssuePrimarilyByEnum;
    /**
     * No Discounts.
     * @nullable
     */
    noDiscounts?: BoYesNoEnum;
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
     * Asset Status.
     * @nullable
     */
    assetStatus?: AssetStatusEnum;
    /**
     * Capitalization Date.
     * @nullable
     */
    capitalizationDate?: Moment;
    /**
     * Statistical Asset.
     * @nullable
     */
    statisticalAsset?: BoYesNoEnum;
    /**
     * Cession.
     * @nullable
     */
    cession?: BoYesNoEnum;
    /**
     * Deactivate After Useful Life.
     * @nullable
     */
    deactivateAfterUsefulLife?: BoYesNoEnum;
    /**
     * Manage By Quantity.
     * @nullable
     */
    manageByQuantity?: BoYesNoEnum;
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
     * Excisable.
     * @nullable
     */
    excisable?: BoYesNoEnum;
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
     * Sp Prod Type.
     * @nullable
     */
    spProdType?: SpecialProductTypeEnum;
    /**
     * Prod Std Cost.
     * @nullable
     */
    prodStdCost?: number;
    /**
     * In Cost Rollup.
     * @nullable
     */
    inCostRollup?: BoYesNoEnum;
    /**
     * Virtual Asset Item.
     * @nullable
     */
    virtualAssetItem?: BoYesNoEnum;
    /**
     * Enforce Asset Serial Numbers.
     * @nullable
     */
    enforceAssetSerialNumbers?: BoYesNoEnum;
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
     * Gst Relevnt.
     * @nullable
     */
    gstRelevnt?: BoYesNoEnum;
    /**
     * Sac Entry.
     * @nullable
     */
    sacEntry?: number;
    /**
     * Gst Tax Category.
     * @nullable
     */
    gstTaxCategory?: GstTaxCategoryEnum;
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
     * Soi Excisable.
     * @nullable
     */
    soiExcisable?: SoiExcisableTypeEnum;
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
     * Returns an entity builder to construct instances of `Items`.
     * @returns A builder that constructs instances of entity type `Items`.
     */
    static builder(): EntityBuilderType<Items, ItemsType>;
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
    static customField(fieldName: string): CustomFieldV4<Items>;
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
    itemCode?: string | null;
    itemName?: string | null;
    foreignName?: string | null;
    itemsGroupCode?: number | null;
    customsGroupCode?: number | null;
    salesVatGroup?: string | null;
    barCode?: string | null;
    vatLiable?: BoYesNoEnum | null;
    purchaseItem?: BoYesNoEnum | null;
    salesItem?: BoYesNoEnum | null;
    inventoryItem?: BoYesNoEnum | null;
    incomeAccount?: string | null;
    exemptIncomeAccount?: string | null;
    expanseAccount?: string | null;
    mainsupplier?: string | null;
    supplierCatalogNo?: string | null;
    desiredInventory?: number | null;
    minInventory?: number | null;
    picture?: string | null;
    userText?: string | null;
    serialNum?: string | null;
    commissionPercent?: number | null;
    commissionSum?: number | null;
    commissionGroup?: number | null;
    treeType?: BoItemTreeTypes | null;
    assetItem?: BoYesNoEnum | null;
    dataExportCode?: string | null;
    manufacturer?: number | null;
    quantityOnStock?: number | null;
    quantityOrderedFromVendors?: number | null;
    quantityOrderedByCustomers?: number | null;
    manageSerialNumbers?: BoYesNoEnum | null;
    manageBatchNumbers?: BoYesNoEnum | null;
    valid?: BoYesNoEnum | null;
    validFrom?: Moment | null;
    validTo?: Moment | null;
    validRemarks?: string | null;
    frozen?: BoYesNoEnum | null;
    frozenFrom?: Moment | null;
    frozenTo?: Moment | null;
    frozenRemarks?: string | null;
    salesUnit?: string | null;
    salesItemsPerUnit?: number | null;
    salesPackagingUnit?: string | null;
    salesQtyPerPackUnit?: number | null;
    salesUnitLength?: number | null;
    salesLengthUnit?: number | null;
    salesUnitWidth?: number | null;
    salesWidthUnit?: number | null;
    salesUnitHeight?: number | null;
    salesHeightUnit?: number | null;
    salesUnitVolume?: number | null;
    salesVolumeUnit?: number | null;
    salesUnitWeight?: number | null;
    salesWeightUnit?: number | null;
    purchaseUnit?: string | null;
    purchaseItemsPerUnit?: number | null;
    purchasePackagingUnit?: string | null;
    purchaseQtyPerPackUnit?: number | null;
    purchaseUnitLength?: number | null;
    purchaseLengthUnit?: number | null;
    purchaseUnitWidth?: number | null;
    purchaseWidthUnit?: number | null;
    purchaseUnitHeight?: number | null;
    purchaseHeightUnit?: number | null;
    purchaseUnitVolume?: number | null;
    purchaseVolumeUnit?: number | null;
    purchaseUnitWeight?: number | null;
    purchaseWeightUnit?: number | null;
    purchaseVatGroup?: string | null;
    salesFactor1?: number | null;
    salesFactor2?: number | null;
    salesFactor3?: number | null;
    salesFactor4?: number | null;
    purchaseFactor1?: number | null;
    purchaseFactor2?: number | null;
    purchaseFactor3?: number | null;
    purchaseFactor4?: number | null;
    movingAveragePrice?: number | null;
    foreignRevenuesAccount?: string | null;
    ecRevenuesAccount?: string | null;
    foreignExpensesAccount?: string | null;
    ecExpensesAccount?: string | null;
    avgStdPrice?: number | null;
    defaultWarehouse?: string | null;
    shipType?: number | null;
    glMethod?: BoGlMethods | null;
    taxType?: BoTaxTypes | null;
    maxInventory?: number | null;
    manageStockByWarehouse?: BoYesNoEnum | null;
    purchaseHeightUnit1?: number | null;
    purchaseUnitHeight1?: number | null;
    purchaseLengthUnit1?: number | null;
    purchaseUnitLength1?: number | null;
    purchaseWeightUnit1?: number | null;
    purchaseUnitWeight1?: number | null;
    purchaseWidthUnit1?: number | null;
    purchaseUnitWidth1?: number | null;
    salesHeightUnit1?: number | null;
    salesUnitHeight1?: number | null;
    salesLengthUnit1?: number | null;
    salesUnitLength1?: number | null;
    salesWeightUnit1?: number | null;
    salesUnitWeight1?: number | null;
    salesWidthUnit1?: number | null;
    salesUnitWidth1?: number | null;
    forceSelectionOfSerialNumber?: BoYesNoEnum | null;
    manageSerialNumbersOnReleaseOnly?: BoYesNoEnum | null;
    wtLiable?: BoYesNoEnum | null;
    costAccountingMethod?: BoInventorySystem | null;
    sww?: string | null;
    warrantyTemplate?: string | null;
    indirectTax?: BoYesNoEnum | null;
    arTaxCode?: string | null;
    apTaxCode?: string | null;
    baseUnitName?: string | null;
    itemCountryOrg?: string | null;
    issueMethod?: BoIssueMethod | null;
    sriAndBatchManageMethod?: BoManageMethod | null;
    isPhantom?: BoYesNoEnum | null;
    inventoryUom?: string | null;
    planningSystem?: BoPlanningSystem | null;
    procurementMethod?: BoProcurementMethod | null;
    componentWarehouse?: BoMrpComponentWarehouse | null;
    orderIntervals?: number | null;
    orderMultiple?: number | null;
    leadTime?: number | null;
    minOrderQuantity?: number | null;
    itemType?: ItemTypeEnum | null;
    itemClass?: ItemClassEnum | null;
    outgoingServiceCode?: number | null;
    incomingServiceCode?: number | null;
    serviceGroup?: number | null;
    ncmCode?: number | null;
    materialType?: BoMaterialTypes | null;
    materialGroup?: number | null;
    productSource?: string | null;
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
    dnfEntry?: number | null;
    gtsItemSpec?: string | null;
    gtsItemTaxCategory?: string | null;
    fuelId?: number | null;
    beverageTableCode?: string | null;
    beverageGroupCode?: string | null;
    beverageCommercialBrandCode?: number | null;
    series?: number | null;
    toleranceDays?: number | null;
    typeOfAdvancedRules?: TypeOfAdvancedRulesEnum | null;
    issuePrimarilyBy?: IssuePrimarilyByEnum | null;
    noDiscounts?: BoYesNoEnum | null;
    assetClass?: string | null;
    assetGroup?: string | null;
    inventoryNumber?: string | null;
    technician?: number | null;
    employee?: number | null;
    location?: number | null;
    assetStatus?: AssetStatusEnum | null;
    capitalizationDate?: Moment | null;
    statisticalAsset?: BoYesNoEnum | null;
    cession?: BoYesNoEnum | null;
    deactivateAfterUsefulLife?: BoYesNoEnum | null;
    manageByQuantity?: BoYesNoEnum | null;
    uoMGroupEntry?: number | null;
    inventoryUoMEntry?: number | null;
    defaultSalesUoMEntry?: number | null;
    defaultPurchasingUoMEntry?: number | null;
    depreciationGroup?: string | null;
    assetSerialNumber?: string | null;
    inventoryWeight?: number | null;
    inventoryWeightUnit?: number | null;
    inventoryWeight1?: number | null;
    inventoryWeightUnit1?: number | null;
    defaultCountingUnit?: string | null;
    countingItemsPerUnit?: number | null;
    defaultCountingUoMEntry?: number | null;
    excisable?: BoYesNoEnum | null;
    chapterId?: number | null;
    scsCode?: string | null;
    spProdType?: SpecialProductTypeEnum | null;
    prodStdCost?: number | null;
    inCostRollup?: BoYesNoEnum | null;
    virtualAssetItem?: BoYesNoEnum | null;
    enforceAssetSerialNumbers?: BoYesNoEnum | null;
    attachmentEntry?: number | null;
    linkedResource?: string | null;
    updateDate?: Moment | null;
    updateTime?: Time | null;
    gstRelevnt?: BoYesNoEnum | null;
    sacEntry?: number | null;
    gstTaxCategory?: GstTaxCategoryEnum | null;
    serviceCategoryEntry?: number | null;
    capitalGoodsOnHoldPercent?: number | null;
    capitalGoodsOnHoldLimit?: number | null;
    assessableValue?: number | null;
    assVal4Wtr?: number | null;
    soiExcisable?: SoiExcisableTypeEnum | null;
    tnved?: string | null;
    pricingUnit?: number | null;
    itemPrices?: ItemPrice[] | null;
    itemWarehouseInfoCollection?: ItemWarehouseInfo[] | null;
    itemPreferredVendors?: ItemPreferredVendor[] | null;
    itemLocalizationInfos?: ItemLocalizationInfo[] | null;
    itemProjects?: ItemProject[] | null;
    itemDistributionRules?: ItemDistributionRule[] | null;
    itemAttributeGroups?: ItemAttributeGroups[] | null;
    itemDepreciationParameters?: ItemDepreciationParameter[] | null;
    itemPeriodControls?: ItemPeriodControl[] | null;
    itemUnitOfMeasurementCollection?: ItemUnitOfMeasurement[] | null;
    itemBarCodeCollection?: ItemBarCode[] | null;
    itemIntrastatExtension?: ItemIntrastatExtension | null;
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
     * Static representation of the [[vatLiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_LIABLE: EnumField<Items>;
    /**
     * Static representation of the [[purchaseItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ITEM: EnumField<Items>;
    /**
     * Static representation of the [[salesItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ITEM: EnumField<Items>;
    /**
     * Static representation of the [[inventoryItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_ITEM: EnumField<Items>;
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
     * Static representation of the [[treeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TREE_TYPE: EnumField<Items>;
    /**
     * Static representation of the [[assetItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_ITEM: EnumField<Items>;
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
     * Static representation of the [[manageSerialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGE_SERIAL_NUMBERS: EnumField<Items>;
    /**
     * Static representation of the [[manageBatchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGE_BATCH_NUMBERS: EnumField<Items>;
    /**
     * Static representation of the [[valid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID: EnumField<Items>;
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
     * Static representation of the [[frozen]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROZEN: EnumField<Items>;
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
     * Static representation of the [[glMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GL_METHOD: EnumField<Items>;
    /**
     * Static representation of the [[taxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_TYPE: EnumField<Items>;
    /**
     * Static representation of the [[maxInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_INVENTORY: NumberField<Items>;
    /**
     * Static representation of the [[manageStockByWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGE_STOCK_BY_WAREHOUSE: EnumField<Items>;
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
     * Static representation of the [[forceSelectionOfSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORCE_SELECTION_OF_SERIAL_NUMBER: EnumField<Items>;
    /**
     * Static representation of the [[manageSerialNumbersOnReleaseOnly]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGE_SERIAL_NUMBERS_ON_RELEASE_ONLY: EnumField<Items>;
    /**
     * Static representation of the [[wtLiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WT_LIABLE: EnumField<Items>;
    /**
     * Static representation of the [[costAccountingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_ACCOUNTING_METHOD: EnumField<Items>;
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
     * Static representation of the [[indirectTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDIRECT_TAX: EnumField<Items>;
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
     * Static representation of the [[issueMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISSUE_METHOD: EnumField<Items>;
    /**
     * Static representation of the [[sriAndBatchManageMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SRI_AND_BATCH_MANAGE_METHOD: EnumField<Items>;
    /**
     * Static representation of the [[isPhantom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PHANTOM: EnumField<Items>;
    /**
     * Static representation of the [[inventoryUom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVENTORY_UOM: StringField<Items>;
    /**
     * Static representation of the [[planningSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNING_SYSTEM: EnumField<Items>;
    /**
     * Static representation of the [[procurementMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCUREMENT_METHOD: EnumField<Items>;
    /**
     * Static representation of the [[componentWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPONENT_WAREHOUSE: EnumField<Items>;
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
     * Static representation of the [[itemType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_TYPE: EnumField<Items>;
    /**
     * Static representation of the [[itemClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CLASS: EnumField<Items>;
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
     * Static representation of the [[materialType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_TYPE: EnumField<Items>;
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
     * Static representation of the [[properties1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_1: EnumField<Items>;
    /**
     * Static representation of the [[properties2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_2: EnumField<Items>;
    /**
     * Static representation of the [[properties3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_3: EnumField<Items>;
    /**
     * Static representation of the [[properties4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_4: EnumField<Items>;
    /**
     * Static representation of the [[properties5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_5: EnumField<Items>;
    /**
     * Static representation of the [[properties6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_6: EnumField<Items>;
    /**
     * Static representation of the [[properties7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_7: EnumField<Items>;
    /**
     * Static representation of the [[properties8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_8: EnumField<Items>;
    /**
     * Static representation of the [[properties9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_9: EnumField<Items>;
    /**
     * Static representation of the [[properties10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_10: EnumField<Items>;
    /**
     * Static representation of the [[properties11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_11: EnumField<Items>;
    /**
     * Static representation of the [[properties12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_12: EnumField<Items>;
    /**
     * Static representation of the [[properties13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_13: EnumField<Items>;
    /**
     * Static representation of the [[properties14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_14: EnumField<Items>;
    /**
     * Static representation of the [[properties15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_15: EnumField<Items>;
    /**
     * Static representation of the [[properties16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_16: EnumField<Items>;
    /**
     * Static representation of the [[properties17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_17: EnumField<Items>;
    /**
     * Static representation of the [[properties18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_18: EnumField<Items>;
    /**
     * Static representation of the [[properties19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_19: EnumField<Items>;
    /**
     * Static representation of the [[properties20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_20: EnumField<Items>;
    /**
     * Static representation of the [[properties21]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_21: EnumField<Items>;
    /**
     * Static representation of the [[properties22]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_22: EnumField<Items>;
    /**
     * Static representation of the [[properties23]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_23: EnumField<Items>;
    /**
     * Static representation of the [[properties24]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_24: EnumField<Items>;
    /**
     * Static representation of the [[properties25]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_25: EnumField<Items>;
    /**
     * Static representation of the [[properties26]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_26: EnumField<Items>;
    /**
     * Static representation of the [[properties27]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_27: EnumField<Items>;
    /**
     * Static representation of the [[properties28]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_28: EnumField<Items>;
    /**
     * Static representation of the [[properties29]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_29: EnumField<Items>;
    /**
     * Static representation of the [[properties30]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_30: EnumField<Items>;
    /**
     * Static representation of the [[properties31]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_31: EnumField<Items>;
    /**
     * Static representation of the [[properties32]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_32: EnumField<Items>;
    /**
     * Static representation of the [[properties33]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_33: EnumField<Items>;
    /**
     * Static representation of the [[properties34]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_34: EnumField<Items>;
    /**
     * Static representation of the [[properties35]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_35: EnumField<Items>;
    /**
     * Static representation of the [[properties36]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_36: EnumField<Items>;
    /**
     * Static representation of the [[properties37]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_37: EnumField<Items>;
    /**
     * Static representation of the [[properties38]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_38: EnumField<Items>;
    /**
     * Static representation of the [[properties39]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_39: EnumField<Items>;
    /**
     * Static representation of the [[properties40]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_40: EnumField<Items>;
    /**
     * Static representation of the [[properties41]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_41: EnumField<Items>;
    /**
     * Static representation of the [[properties42]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_42: EnumField<Items>;
    /**
     * Static representation of the [[properties43]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_43: EnumField<Items>;
    /**
     * Static representation of the [[properties44]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_44: EnumField<Items>;
    /**
     * Static representation of the [[properties45]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_45: EnumField<Items>;
    /**
     * Static representation of the [[properties46]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_46: EnumField<Items>;
    /**
     * Static representation of the [[properties47]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_47: EnumField<Items>;
    /**
     * Static representation of the [[properties48]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_48: EnumField<Items>;
    /**
     * Static representation of the [[properties49]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_49: EnumField<Items>;
    /**
     * Static representation of the [[properties50]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_50: EnumField<Items>;
    /**
     * Static representation of the [[properties51]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_51: EnumField<Items>;
    /**
     * Static representation of the [[properties52]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_52: EnumField<Items>;
    /**
     * Static representation of the [[properties53]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_53: EnumField<Items>;
    /**
     * Static representation of the [[properties54]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_54: EnumField<Items>;
    /**
     * Static representation of the [[properties55]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_55: EnumField<Items>;
    /**
     * Static representation of the [[properties56]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_56: EnumField<Items>;
    /**
     * Static representation of the [[properties57]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_57: EnumField<Items>;
    /**
     * Static representation of the [[properties58]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_58: EnumField<Items>;
    /**
     * Static representation of the [[properties59]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_59: EnumField<Items>;
    /**
     * Static representation of the [[properties60]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_60: EnumField<Items>;
    /**
     * Static representation of the [[properties61]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_61: EnumField<Items>;
    /**
     * Static representation of the [[properties62]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_62: EnumField<Items>;
    /**
     * Static representation of the [[properties63]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_63: EnumField<Items>;
    /**
     * Static representation of the [[properties64]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTIES_64: EnumField<Items>;
    /**
     * Static representation of the [[autoCreateSerialNumbersOnRelease]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTO_CREATE_SERIAL_NUMBERS_ON_RELEASE: EnumField<Items>;
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
     * Static representation of the [[typeOfAdvancedRules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_OF_ADVANCED_RULES: EnumField<Items>;
    /**
     * Static representation of the [[issuePrimarilyBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISSUE_PRIMARILY_BY: EnumField<Items>;
    /**
     * Static representation of the [[noDiscounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NO_DISCOUNTS: EnumField<Items>;
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
     * Static representation of the [[assetStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSET_STATUS: EnumField<Items>;
    /**
     * Static representation of the [[capitalizationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAPITALIZATION_DATE: DateField<Items>;
    /**
     * Static representation of the [[statisticalAsset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATISTICAL_ASSET: EnumField<Items>;
    /**
     * Static representation of the [[cession]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CESSION: EnumField<Items>;
    /**
     * Static representation of the [[deactivateAfterUsefulLife]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEACTIVATE_AFTER_USEFUL_LIFE: EnumField<Items>;
    /**
     * Static representation of the [[manageByQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGE_BY_QUANTITY: EnumField<Items>;
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
     * Static representation of the [[excisable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCISABLE: EnumField<Items>;
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
     * Static representation of the [[spProdType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SP_PROD_TYPE: EnumField<Items>;
    /**
     * Static representation of the [[prodStdCost]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROD_STD_COST: NumberField<Items>;
    /**
     * Static representation of the [[inCostRollup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IN_COST_ROLLUP: EnumField<Items>;
    /**
     * Static representation of the [[virtualAssetItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VIRTUAL_ASSET_ITEM: EnumField<Items>;
    /**
     * Static representation of the [[enforceAssetSerialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENFORCE_ASSET_SERIAL_NUMBERS: EnumField<Items>;
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
     * Static representation of the [[gstRelevnt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GST_RELEVNT: EnumField<Items>;
    /**
     * Static representation of the [[sacEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAC_ENTRY: NumberField<Items>;
    /**
     * Static representation of the [[gstTaxCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GST_TAX_CATEGORY: EnumField<Items>;
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
     * Static representation of the [[soiExcisable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOI_EXCISABLE: EnumField<Items>;
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
    const ITEM_PRICES: CollectionField<Items, ItemPrice>;
    /**
     * Static representation of the [[itemWarehouseInfoCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_WAREHOUSE_INFO_COLLECTION: CollectionField<Items, ItemWarehouseInfo>;
    /**
     * Static representation of the [[itemPreferredVendors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_PREFERRED_VENDORS: CollectionField<Items, ItemPreferredVendor>;
    /**
     * Static representation of the [[itemLocalizationInfos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_LOCALIZATION_INFOS: CollectionField<Items, ItemLocalizationInfo>;
    /**
     * Static representation of the [[itemProjects]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_PROJECTS: CollectionField<Items, ItemProject>;
    /**
     * Static representation of the [[itemDistributionRules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_DISTRIBUTION_RULES: CollectionField<Items, ItemDistributionRule>;
    /**
     * Static representation of the [[itemAttributeGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ATTRIBUTE_GROUPS: CollectionField<Items, ItemAttributeGroups>;
    /**
     * Static representation of the [[itemDepreciationParameters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_DEPRECIATION_PARAMETERS: CollectionField<Items, ItemDepreciationParameter>;
    /**
     * Static representation of the [[itemPeriodControls]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_PERIOD_CONTROLS: CollectionField<Items, ItemPeriodControl>;
    /**
     * Static representation of the [[itemUnitOfMeasurementCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_UNIT_OF_MEASUREMENT_COLLECTION: CollectionField<Items, ItemUnitOfMeasurement>;
    /**
     * Static representation of the [[itemBarCodeCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_BAR_CODE_COLLECTION: CollectionField<Items, ItemBarCode>;
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
    const _allFields: Array<StringField<Items> | NumberField<Items> | EnumField<Items> | DateField<Items> | TimeField<Items> | CollectionField<Items, ItemPrice> | CollectionField<Items, ItemWarehouseInfo> | CollectionField<Items, ItemPreferredVendor> | CollectionField<Items, ItemLocalizationInfo> | CollectionField<Items, ItemProject> | CollectionField<Items, ItemDistributionRule> | CollectionField<Items, ItemAttributeGroups> | CollectionField<Items, ItemDepreciationParameter> | CollectionField<Items, ItemPeriodControl> | CollectionField<Items, ItemUnitOfMeasurement> | CollectionField<Items, ItemBarCode> | ItemIntrastatExtensionField<Items> | OneToManyLink<Items, SpecialPrices> | OneToOneLink<Items, ItemGroups> | OneToOneLink<Items, CustomsGroups> | OneToOneLink<Items, VatGroups> | OneToOneLink<Items, ChartOfAccounts> | OneToOneLink<Items, BusinessPartners> | OneToOneLink<Items, CommissionGroups> | OneToOneLink<Items, Manufacturers> | OneToOneLink<Items, ShippingTypes> | OneToOneLink<Items, ContractTemplates> | OneToOneLink<Items, SalesTaxCodes> | OneToOneLink<Items, InventoryCycles> | OneToOneLink<Items, ServiceGroups> | OneToOneLink<Items, NcmCodesSetup> | OneToOneLink<Items, MaterialGroups> | OneToOneLink<Items, DnfCodeSetup> | OneToOneLink<Items, BrazilFuelIndexers> | OneToOneLink<Items, BrazilStringIndexers> | OneToOneLink<Items, BrazilNumericIndexers> | OneToOneLink<Items, AssetClasses> | OneToOneLink<Items, AssetGroups> | OneToOneLink<Items, EmployeesInfo> | OneToOneLink<Items, WarehouseLocations> | OneToOneLink<Items, UnitOfMeasurementGroups> | OneToOneLink<Items, UnitOfMeasurements> | OneToOneLink<Items, AssetDepreciationGroups> | OneToOneLink<Items, Resources> | OneToOneLink<Items, IndiaSacCode> | OneToManyLink<Items, StockTakings> | OneToManyLink<Items, DepreciationAreas> | OneToManyLink<Items, ProductTrees> | OneToManyLink<Items, GlAccountAdvancedRules> | OneToManyLink<Items, BarCodes> | OneToManyLink<Items, BatchNumberDetails> | OneToManyLink<Items, SerialNumberDetails> | OneToManyLink<Items, BinLocations> | OneToManyLink<Items, CustomerEquipmentCards> | OneToManyLink<Items, KnowledgeBaseSolutions> | OneToManyLink<Items, ServiceCalls> | OneToManyLink<Items, AlternateCatNum> | OneToManyLink<Items, Resources>>;
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