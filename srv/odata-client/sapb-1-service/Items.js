"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ItemsRequestBuilder_1 = require("./ItemsRequestBuilder");
var ItemPrice_1 = require("./ItemPrice");
var ItemWarehouseInfo_1 = require("./ItemWarehouseInfo");
var ItemPreferredVendor_1 = require("./ItemPreferredVendor");
var ItemLocalizationInfo_1 = require("./ItemLocalizationInfo");
var ItemProject_1 = require("./ItemProject");
var ItemDistributionRule_1 = require("./ItemDistributionRule");
var ItemAttributeGroups_1 = require("./ItemAttributeGroups");
var ItemDepreciationParameter_1 = require("./ItemDepreciationParameter");
var ItemPeriodControl_1 = require("./ItemPeriodControl");
var ItemUnitOfMeasurement_1 = require("./ItemUnitOfMeasurement");
var ItemBarCode_1 = require("./ItemBarCode");
var ItemIntrastatExtension_1 = require("./ItemIntrastatExtension");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Items" of service "SAPB1".
 */
var Items = /** @class */ (function (_super) {
    __extends(Items, _super);
    function Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Items`.
     * @returns A builder that constructs instances of entity type `Items`.
     */
    Items.builder = function () {
        return core_1.EntityV4.entityBuilder(Items);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Items` entity type.
     * @returns A `Items` request builder.
     */
    Items.requestBuilder = function () {
        return new ItemsRequestBuilder_1.ItemsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Items`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Items`.
     */
    Items.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Items);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Items.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Items.
     */
    Items._entityName = 'Items';
    /**
     * Default url path for the according service.
     */
    Items._defaultServicePath = '/b1s/v2/';
    return Items;
}(core_1.EntityV4));
exports.Items = Items;
var SpecialPrices_1 = require("./SpecialPrices");
var ItemGroups_1 = require("./ItemGroups");
var CustomsGroups_1 = require("./CustomsGroups");
var VatGroups_1 = require("./VatGroups");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var BusinessPartners_1 = require("./BusinessPartners");
var CommissionGroups_1 = require("./CommissionGroups");
var Manufacturers_1 = require("./Manufacturers");
var ShippingTypes_1 = require("./ShippingTypes");
var ContractTemplates_1 = require("./ContractTemplates");
var SalesTaxCodes_1 = require("./SalesTaxCodes");
var InventoryCycles_1 = require("./InventoryCycles");
var ServiceGroups_1 = require("./ServiceGroups");
var NcmCodesSetup_1 = require("./NcmCodesSetup");
var MaterialGroups_1 = require("./MaterialGroups");
var DnfCodeSetup_1 = require("./DnfCodeSetup");
var BrazilFuelIndexers_1 = require("./BrazilFuelIndexers");
var BrazilStringIndexers_1 = require("./BrazilStringIndexers");
var BrazilNumericIndexers_1 = require("./BrazilNumericIndexers");
var AssetClasses_1 = require("./AssetClasses");
var AssetGroups_1 = require("./AssetGroups");
var EmployeesInfo_1 = require("./EmployeesInfo");
var WarehouseLocations_1 = require("./WarehouseLocations");
var UnitOfMeasurementGroups_1 = require("./UnitOfMeasurementGroups");
var UnitOfMeasurements_1 = require("./UnitOfMeasurements");
var AssetDepreciationGroups_1 = require("./AssetDepreciationGroups");
var Resources_1 = require("./Resources");
var IndiaSacCode_1 = require("./IndiaSacCode");
var StockTakings_1 = require("./StockTakings");
var DepreciationAreas_1 = require("./DepreciationAreas");
var ProductTrees_1 = require("./ProductTrees");
var GlAccountAdvancedRules_1 = require("./GlAccountAdvancedRules");
var BarCodes_1 = require("./BarCodes");
var BatchNumberDetails_1 = require("./BatchNumberDetails");
var SerialNumberDetails_1 = require("./SerialNumberDetails");
var BinLocations_1 = require("./BinLocations");
var CustomerEquipmentCards_1 = require("./CustomerEquipmentCards");
var KnowledgeBaseSolutions_1 = require("./KnowledgeBaseSolutions");
var ServiceCalls_1 = require("./ServiceCalls");
var AlternateCatNum_1 = require("./AlternateCatNum");
(function (Items) {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_CODE = new core_1.StringField('ItemCode', Items, 'Edm.String');
    /**
     * Static representation of the [[itemName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_NAME = new core_1.StringField('ItemName', Items, 'Edm.String');
    /**
     * Static representation of the [[foreignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FOREIGN_NAME = new core_1.StringField('ForeignName', Items, 'Edm.String');
    /**
     * Static representation of the [[itemsGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEMS_GROUP_CODE = new core_1.NumberField('ItemsGroupCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[customsGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CUSTOMS_GROUP_CODE = new core_1.NumberField('CustomsGroupCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_VAT_GROUP = new core_1.StringField('SalesVATGroup', Items, 'Edm.String');
    /**
     * Static representation of the [[barCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BAR_CODE = new core_1.StringField('BarCode', Items, 'Edm.String');
    /**
     * Static representation of the [[vatLiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VAT_LIABLE = new core_1.EnumField('VatLiable', Items);
    /**
     * Static representation of the [[purchaseItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_ITEM = new core_1.EnumField('PurchaseItem', Items);
    /**
     * Static representation of the [[salesItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_ITEM = new core_1.EnumField('SalesItem', Items);
    /**
     * Static representation of the [[inventoryItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_ITEM = new core_1.EnumField('InventoryItem', Items);
    /**
     * Static representation of the [[incomeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INCOME_ACCOUNT = new core_1.StringField('IncomeAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[exemptIncomeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EXEMPT_INCOME_ACCOUNT = new core_1.StringField('ExemptIncomeAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[expanseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EXPANSE_ACCOUNT = new core_1.StringField('ExpanseAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[mainsupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MAINSUPPLIER = new core_1.StringField('Mainsupplier', Items, 'Edm.String');
    /**
     * Static representation of the [[supplierCatalogNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SUPPLIER_CATALOG_NO = new core_1.StringField('SupplierCatalogNo', Items, 'Edm.String');
    /**
     * Static representation of the [[desiredInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DESIRED_INVENTORY = new core_1.NumberField('DesiredInventory', Items, 'Edm.Double');
    /**
     * Static representation of the [[minInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MIN_INVENTORY = new core_1.NumberField('MinInventory', Items, 'Edm.Double');
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PICTURE = new core_1.StringField('Picture', Items, 'Edm.String');
    /**
     * Static representation of the [[userText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.USER_TEXT = new core_1.StringField('User_Text', Items, 'Edm.String');
    /**
     * Static representation of the [[serialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERIAL_NUM = new core_1.StringField('SerialNum', Items, 'Edm.String');
    /**
     * Static representation of the [[commissionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COMMISSION_PERCENT = new core_1.NumberField('CommissionPercent', Items, 'Edm.Double');
    /**
     * Static representation of the [[commissionSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COMMISSION_SUM = new core_1.NumberField('CommissionSum', Items, 'Edm.Double');
    /**
     * Static representation of the [[commissionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COMMISSION_GROUP = new core_1.NumberField('CommissionGroup', Items, 'Edm.Int32');
    /**
     * Static representation of the [[treeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.TREE_TYPE = new core_1.EnumField('TreeType', Items);
    /**
     * Static representation of the [[assetItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_ITEM = new core_1.EnumField('AssetItem', Items);
    /**
     * Static representation of the [[dataExportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DATA_EXPORT_CODE = new core_1.StringField('DataExportCode', Items, 'Edm.String');
    /**
     * Static representation of the [[manufacturer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MANUFACTURER = new core_1.NumberField('Manufacturer', Items, 'Edm.Int32');
    /**
     * Static representation of the [[quantityOnStock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.QUANTITY_ON_STOCK = new core_1.NumberField('QuantityOnStock', Items, 'Edm.Double');
    /**
     * Static representation of the [[quantityOrderedFromVendors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.QUANTITY_ORDERED_FROM_VENDORS = new core_1.NumberField('QuantityOrderedFromVendors', Items, 'Edm.Double');
    /**
     * Static representation of the [[quantityOrderedByCustomers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.QUANTITY_ORDERED_BY_CUSTOMERS = new core_1.NumberField('QuantityOrderedByCustomers', Items, 'Edm.Double');
    /**
     * Static representation of the [[manageSerialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MANAGE_SERIAL_NUMBERS = new core_1.EnumField('ManageSerialNumbers', Items);
    /**
     * Static representation of the [[manageBatchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MANAGE_BATCH_NUMBERS = new core_1.EnumField('ManageBatchNumbers', Items);
    /**
     * Static representation of the [[valid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VALID = new core_1.EnumField('Valid', Items);
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VALID_FROM = new core_1.DateField('ValidFrom', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VALID_TO = new core_1.DateField('ValidTo', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VALID_REMARKS = new core_1.StringField('ValidRemarks', Items, 'Edm.String');
    /**
     * Static representation of the [[frozen]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FROZEN = new core_1.EnumField('Frozen', Items);
    /**
     * Static representation of the [[frozenFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FROZEN_FROM = new core_1.DateField('FrozenFrom', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FROZEN_TO = new core_1.DateField('FrozenTo', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FROZEN_REMARKS = new core_1.StringField('FrozenRemarks', Items, 'Edm.String');
    /**
     * Static representation of the [[salesUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT = new core_1.StringField('SalesUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[salesItemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_ITEMS_PER_UNIT = new core_1.NumberField('SalesItemsPerUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesPackagingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_PACKAGING_UNIT = new core_1.StringField('SalesPackagingUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[salesQtyPerPackUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_QTY_PER_PACK_UNIT = new core_1.NumberField('SalesQtyPerPackUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesUnitLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_LENGTH = new core_1.NumberField('SalesUnitLength', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesLengthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_LENGTH_UNIT = new core_1.NumberField('SalesLengthUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_WIDTH = new core_1.NumberField('SalesUnitWidth', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesWidthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_WIDTH_UNIT = new core_1.NumberField('SalesWidthUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_HEIGHT = new core_1.NumberField('SalesUnitHeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesHeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_HEIGHT_UNIT = new core_1.NumberField('SalesHeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitVolume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_VOLUME = new core_1.NumberField('SalesUnitVolume', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesVolumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_VOLUME_UNIT = new core_1.NumberField('SalesVolumeUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_WEIGHT = new core_1.NumberField('SalesUnitWeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_WEIGHT_UNIT = new core_1.NumberField('SalesWeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT = new core_1.StringField('PurchaseUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[purchaseItemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_ITEMS_PER_UNIT = new core_1.NumberField('PurchaseItemsPerUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchasePackagingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_PACKAGING_UNIT = new core_1.StringField('PurchasePackagingUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[purchaseQtyPerPackUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_QTY_PER_PACK_UNIT = new core_1.NumberField('PurchaseQtyPerPackUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseUnitLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_LENGTH = new core_1.NumberField('PurchaseUnitLength', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseLengthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_LENGTH_UNIT = new core_1.NumberField('PurchaseLengthUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_WIDTH = new core_1.NumberField('PurchaseUnitWidth', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseWidthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_WIDTH_UNIT = new core_1.NumberField('PurchaseWidthUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_HEIGHT = new core_1.NumberField('PurchaseUnitHeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseHeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_HEIGHT_UNIT = new core_1.NumberField('PurchaseHeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitVolume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_VOLUME = new core_1.NumberField('PurchaseUnitVolume', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseVolumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_VOLUME_UNIT = new core_1.NumberField('PurchaseVolumeUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_WEIGHT = new core_1.NumberField('PurchaseUnitWeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_WEIGHT_UNIT = new core_1.NumberField('PurchaseWeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_VAT_GROUP = new core_1.StringField('PurchaseVATGroup', Items, 'Edm.String');
    /**
     * Static representation of the [[salesFactor1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_FACTOR_1 = new core_1.NumberField('SalesFactor1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesFactor2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_FACTOR_2 = new core_1.NumberField('SalesFactor2', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesFactor3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_FACTOR_3 = new core_1.NumberField('SalesFactor3', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesFactor4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_FACTOR_4 = new core_1.NumberField('SalesFactor4', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseFactor1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_FACTOR_1 = new core_1.NumberField('PurchaseFactor1', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseFactor2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_FACTOR_2 = new core_1.NumberField('PurchaseFactor2', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseFactor3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_FACTOR_3 = new core_1.NumberField('PurchaseFactor3', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseFactor4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_FACTOR_4 = new core_1.NumberField('PurchaseFactor4', Items, 'Edm.Double');
    /**
     * Static representation of the [[movingAveragePrice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MOVING_AVERAGE_PRICE = new core_1.NumberField('MovingAveragePrice', Items, 'Edm.Double');
    /**
     * Static representation of the [[foreignRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FOREIGN_REVENUES_ACCOUNT = new core_1.StringField('ForeignRevenuesAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[ecRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EC_REVENUES_ACCOUNT = new core_1.StringField('ECRevenuesAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[foreignExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FOREIGN_EXPENSES_ACCOUNT = new core_1.StringField('ForeignExpensesAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[ecExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EC_EXPENSES_ACCOUNT = new core_1.StringField('ECExpensesAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[avgStdPrice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.AVG_STD_PRICE = new core_1.NumberField('AvgStdPrice', Items, 'Edm.Double');
    /**
     * Static representation of the [[defaultWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_WAREHOUSE = new core_1.StringField('DefaultWarehouse', Items, 'Edm.String');
    /**
     * Static representation of the [[shipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SHIP_TYPE = new core_1.NumberField('ShipType', Items, 'Edm.Int32');
    /**
     * Static representation of the [[glMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.GL_METHOD = new core_1.EnumField('GLMethod', Items);
    /**
     * Static representation of the [[taxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.TAX_TYPE = new core_1.EnumField('TaxType', Items);
    /**
     * Static representation of the [[maxInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MAX_INVENTORY = new core_1.NumberField('MaxInventory', Items, 'Edm.Double');
    /**
     * Static representation of the [[manageStockByWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MANAGE_STOCK_BY_WAREHOUSE = new core_1.EnumField('ManageStockByWarehouse', Items);
    /**
     * Static representation of the [[purchaseHeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_HEIGHT_UNIT_1 = new core_1.NumberField('PurchaseHeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitHeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_HEIGHT_1 = new core_1.NumberField('PurchaseUnitHeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseLengthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_LENGTH_UNIT_1 = new core_1.NumberField('PurchaseLengthUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitLength1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_LENGTH_1 = new core_1.NumberField('PurchaseUnitLength1', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_WEIGHT_UNIT_1 = new core_1.NumberField('PurchaseWeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_WEIGHT_1 = new core_1.NumberField('PurchaseUnitWeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseWidthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_WIDTH_UNIT_1 = new core_1.NumberField('PurchaseWidthUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitWidth1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_WIDTH_1 = new core_1.NumberField('PurchaseUnitWidth1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesHeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_HEIGHT_UNIT_1 = new core_1.NumberField('SalesHeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitHeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_HEIGHT_1 = new core_1.NumberField('SalesUnitHeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesLengthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_LENGTH_UNIT_1 = new core_1.NumberField('SalesLengthUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitLength1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_LENGTH_1 = new core_1.NumberField('SalesUnitLength1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_WEIGHT_UNIT_1 = new core_1.NumberField('SalesWeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_WEIGHT_1 = new core_1.NumberField('SalesUnitWeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesWidthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_WIDTH_UNIT_1 = new core_1.NumberField('SalesWidthUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitWidth1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_WIDTH_1 = new core_1.NumberField('SalesUnitWidth1', Items, 'Edm.Double');
    /**
     * Static representation of the [[forceSelectionOfSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FORCE_SELECTION_OF_SERIAL_NUMBER = new core_1.EnumField('ForceSelectionOfSerialNumber', Items);
    /**
     * Static representation of the [[manageSerialNumbersOnReleaseOnly]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MANAGE_SERIAL_NUMBERS_ON_RELEASE_ONLY = new core_1.EnumField('ManageSerialNumbersOnReleaseOnly', Items);
    /**
     * Static representation of the [[wtLiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.WT_LIABLE = new core_1.EnumField('WTLiable', Items);
    /**
     * Static representation of the [[costAccountingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COST_ACCOUNTING_METHOD = new core_1.EnumField('CostAccountingMethod', Items);
    /**
     * Static representation of the [[sww]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SWW = new core_1.StringField('SWW', Items, 'Edm.String');
    /**
     * Static representation of the [[warrantyTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.WARRANTY_TEMPLATE = new core_1.StringField('WarrantyTemplate', Items, 'Edm.String');
    /**
     * Static representation of the [[indirectTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INDIRECT_TAX = new core_1.EnumField('IndirectTax', Items);
    /**
     * Static representation of the [[arTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.AR_TAX_CODE = new core_1.StringField('ArTaxCode', Items, 'Edm.String');
    /**
     * Static representation of the [[apTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.AP_TAX_CODE = new core_1.StringField('ApTaxCode', Items, 'Edm.String');
    /**
     * Static representation of the [[baseUnitName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BASE_UNIT_NAME = new core_1.StringField('BaseUnitName', Items, 'Edm.String');
    /**
     * Static representation of the [[itemCountryOrg]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_COUNTRY_ORG = new core_1.StringField('ItemCountryOrg', Items, 'Edm.String');
    /**
     * Static representation of the [[issueMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ISSUE_METHOD = new core_1.EnumField('IssueMethod', Items);
    /**
     * Static representation of the [[sriAndBatchManageMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SRI_AND_BATCH_MANAGE_METHOD = new core_1.EnumField('SRIAndBatchManageMethod', Items);
    /**
     * Static representation of the [[isPhantom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.IS_PHANTOM = new core_1.EnumField('IsPhantom', Items);
    /**
     * Static representation of the [[inventoryUom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_UOM = new core_1.StringField('InventoryUOM', Items, 'Edm.String');
    /**
     * Static representation of the [[planningSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PLANNING_SYSTEM = new core_1.EnumField('PlanningSystem', Items);
    /**
     * Static representation of the [[procurementMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROCUREMENT_METHOD = new core_1.EnumField('ProcurementMethod', Items);
    /**
     * Static representation of the [[componentWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COMPONENT_WAREHOUSE = new core_1.EnumField('ComponentWarehouse', Items);
    /**
     * Static representation of the [[orderIntervals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ORDER_INTERVALS = new core_1.NumberField('OrderIntervals', Items, 'Edm.Int32');
    /**
     * Static representation of the [[orderMultiple]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ORDER_MULTIPLE = new core_1.NumberField('OrderMultiple', Items, 'Edm.Double');
    /**
     * Static representation of the [[leadTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.LEAD_TIME = new core_1.NumberField('LeadTime', Items, 'Edm.Int32');
    /**
     * Static representation of the [[minOrderQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MIN_ORDER_QUANTITY = new core_1.NumberField('MinOrderQuantity', Items, 'Edm.Double');
    /**
     * Static representation of the [[itemType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_TYPE = new core_1.EnumField('ItemType', Items);
    /**
     * Static representation of the [[itemClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_CLASS = new core_1.EnumField('ItemClass', Items);
    /**
     * Static representation of the [[outgoingServiceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.OUTGOING_SERVICE_CODE = new core_1.NumberField('OutgoingServiceCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[incomingServiceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INCOMING_SERVICE_CODE = new core_1.NumberField('IncomingServiceCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[serviceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERVICE_GROUP = new core_1.NumberField('ServiceGroup', Items, 'Edm.Int32');
    /**
     * Static representation of the [[ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.NCM_CODE = new core_1.NumberField('NCMCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[materialType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MATERIAL_TYPE = new core_1.EnumField('MaterialType', Items);
    /**
     * Static representation of the [[materialGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MATERIAL_GROUP = new core_1.NumberField('MaterialGroup', Items, 'Edm.Int32');
    /**
     * Static representation of the [[productSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PRODUCT_SOURCE = new core_1.StringField('ProductSource', Items, 'Edm.String');
    /**
     * Static representation of the [[properties1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_1 = new core_1.EnumField('Properties1', Items);
    /**
     * Static representation of the [[properties2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_2 = new core_1.EnumField('Properties2', Items);
    /**
     * Static representation of the [[properties3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_3 = new core_1.EnumField('Properties3', Items);
    /**
     * Static representation of the [[properties4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_4 = new core_1.EnumField('Properties4', Items);
    /**
     * Static representation of the [[properties5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_5 = new core_1.EnumField('Properties5', Items);
    /**
     * Static representation of the [[properties6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_6 = new core_1.EnumField('Properties6', Items);
    /**
     * Static representation of the [[properties7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_7 = new core_1.EnumField('Properties7', Items);
    /**
     * Static representation of the [[properties8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_8 = new core_1.EnumField('Properties8', Items);
    /**
     * Static representation of the [[properties9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_9 = new core_1.EnumField('Properties9', Items);
    /**
     * Static representation of the [[properties10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_10 = new core_1.EnumField('Properties10', Items);
    /**
     * Static representation of the [[properties11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_11 = new core_1.EnumField('Properties11', Items);
    /**
     * Static representation of the [[properties12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_12 = new core_1.EnumField('Properties12', Items);
    /**
     * Static representation of the [[properties13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_13 = new core_1.EnumField('Properties13', Items);
    /**
     * Static representation of the [[properties14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_14 = new core_1.EnumField('Properties14', Items);
    /**
     * Static representation of the [[properties15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_15 = new core_1.EnumField('Properties15', Items);
    /**
     * Static representation of the [[properties16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_16 = new core_1.EnumField('Properties16', Items);
    /**
     * Static representation of the [[properties17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_17 = new core_1.EnumField('Properties17', Items);
    /**
     * Static representation of the [[properties18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_18 = new core_1.EnumField('Properties18', Items);
    /**
     * Static representation of the [[properties19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_19 = new core_1.EnumField('Properties19', Items);
    /**
     * Static representation of the [[properties20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_20 = new core_1.EnumField('Properties20', Items);
    /**
     * Static representation of the [[properties21]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_21 = new core_1.EnumField('Properties21', Items);
    /**
     * Static representation of the [[properties22]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_22 = new core_1.EnumField('Properties22', Items);
    /**
     * Static representation of the [[properties23]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_23 = new core_1.EnumField('Properties23', Items);
    /**
     * Static representation of the [[properties24]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_24 = new core_1.EnumField('Properties24', Items);
    /**
     * Static representation of the [[properties25]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_25 = new core_1.EnumField('Properties25', Items);
    /**
     * Static representation of the [[properties26]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_26 = new core_1.EnumField('Properties26', Items);
    /**
     * Static representation of the [[properties27]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_27 = new core_1.EnumField('Properties27', Items);
    /**
     * Static representation of the [[properties28]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_28 = new core_1.EnumField('Properties28', Items);
    /**
     * Static representation of the [[properties29]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_29 = new core_1.EnumField('Properties29', Items);
    /**
     * Static representation of the [[properties30]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_30 = new core_1.EnumField('Properties30', Items);
    /**
     * Static representation of the [[properties31]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_31 = new core_1.EnumField('Properties31', Items);
    /**
     * Static representation of the [[properties32]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_32 = new core_1.EnumField('Properties32', Items);
    /**
     * Static representation of the [[properties33]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_33 = new core_1.EnumField('Properties33', Items);
    /**
     * Static representation of the [[properties34]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_34 = new core_1.EnumField('Properties34', Items);
    /**
     * Static representation of the [[properties35]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_35 = new core_1.EnumField('Properties35', Items);
    /**
     * Static representation of the [[properties36]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_36 = new core_1.EnumField('Properties36', Items);
    /**
     * Static representation of the [[properties37]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_37 = new core_1.EnumField('Properties37', Items);
    /**
     * Static representation of the [[properties38]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_38 = new core_1.EnumField('Properties38', Items);
    /**
     * Static representation of the [[properties39]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_39 = new core_1.EnumField('Properties39', Items);
    /**
     * Static representation of the [[properties40]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_40 = new core_1.EnumField('Properties40', Items);
    /**
     * Static representation of the [[properties41]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_41 = new core_1.EnumField('Properties41', Items);
    /**
     * Static representation of the [[properties42]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_42 = new core_1.EnumField('Properties42', Items);
    /**
     * Static representation of the [[properties43]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_43 = new core_1.EnumField('Properties43', Items);
    /**
     * Static representation of the [[properties44]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_44 = new core_1.EnumField('Properties44', Items);
    /**
     * Static representation of the [[properties45]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_45 = new core_1.EnumField('Properties45', Items);
    /**
     * Static representation of the [[properties46]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_46 = new core_1.EnumField('Properties46', Items);
    /**
     * Static representation of the [[properties47]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_47 = new core_1.EnumField('Properties47', Items);
    /**
     * Static representation of the [[properties48]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_48 = new core_1.EnumField('Properties48', Items);
    /**
     * Static representation of the [[properties49]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_49 = new core_1.EnumField('Properties49', Items);
    /**
     * Static representation of the [[properties50]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_50 = new core_1.EnumField('Properties50', Items);
    /**
     * Static representation of the [[properties51]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_51 = new core_1.EnumField('Properties51', Items);
    /**
     * Static representation of the [[properties52]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_52 = new core_1.EnumField('Properties52', Items);
    /**
     * Static representation of the [[properties53]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_53 = new core_1.EnumField('Properties53', Items);
    /**
     * Static representation of the [[properties54]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_54 = new core_1.EnumField('Properties54', Items);
    /**
     * Static representation of the [[properties55]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_55 = new core_1.EnumField('Properties55', Items);
    /**
     * Static representation of the [[properties56]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_56 = new core_1.EnumField('Properties56', Items);
    /**
     * Static representation of the [[properties57]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_57 = new core_1.EnumField('Properties57', Items);
    /**
     * Static representation of the [[properties58]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_58 = new core_1.EnumField('Properties58', Items);
    /**
     * Static representation of the [[properties59]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_59 = new core_1.EnumField('Properties59', Items);
    /**
     * Static representation of the [[properties60]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_60 = new core_1.EnumField('Properties60', Items);
    /**
     * Static representation of the [[properties61]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_61 = new core_1.EnumField('Properties61', Items);
    /**
     * Static representation of the [[properties62]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_62 = new core_1.EnumField('Properties62', Items);
    /**
     * Static representation of the [[properties63]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_63 = new core_1.EnumField('Properties63', Items);
    /**
     * Static representation of the [[properties64]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROPERTIES_64 = new core_1.EnumField('Properties64', Items);
    /**
     * Static representation of the [[autoCreateSerialNumbersOnRelease]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.AUTO_CREATE_SERIAL_NUMBERS_ON_RELEASE = new core_1.EnumField('AutoCreateSerialNumbersOnRelease', Items);
    /**
     * Static representation of the [[dnfEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DNF_ENTRY = new core_1.NumberField('DNFEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[gtsItemSpec]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.GTS_ITEM_SPEC = new core_1.StringField('GTSItemSpec', Items, 'Edm.String');
    /**
     * Static representation of the [[gtsItemTaxCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.GTS_ITEM_TAX_CATEGORY = new core_1.StringField('GTSItemTaxCategory', Items, 'Edm.String');
    /**
     * Static representation of the [[fuelId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FUEL_ID = new core_1.NumberField('FuelID', Items, 'Edm.Int32');
    /**
     * Static representation of the [[beverageTableCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BEVERAGE_TABLE_CODE = new core_1.StringField('BeverageTableCode', Items, 'Edm.String');
    /**
     * Static representation of the [[beverageGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BEVERAGE_GROUP_CODE = new core_1.StringField('BeverageGroupCode', Items, 'Edm.String');
    /**
     * Static representation of the [[beverageCommercialBrandCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BEVERAGE_COMMERCIAL_BRAND_CODE = new core_1.NumberField('BeverageCommercialBrandCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERIES = new core_1.NumberField('Series', Items, 'Edm.Int32');
    /**
     * Static representation of the [[toleranceDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.TOLERANCE_DAYS = new core_1.NumberField('ToleranceDays', Items, 'Edm.Int32');
    /**
     * Static representation of the [[typeOfAdvancedRules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.TYPE_OF_ADVANCED_RULES = new core_1.EnumField('TypeOfAdvancedRules', Items);
    /**
     * Static representation of the [[issuePrimarilyBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ISSUE_PRIMARILY_BY = new core_1.EnumField('IssuePrimarilyBy', Items);
    /**
     * Static representation of the [[noDiscounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.NO_DISCOUNTS = new core_1.EnumField('NoDiscounts', Items);
    /**
     * Static representation of the [[assetClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_CLASS = new core_1.StringField('AssetClass', Items, 'Edm.String');
    /**
     * Static representation of the [[assetGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_GROUP = new core_1.StringField('AssetGroup', Items, 'Edm.String');
    /**
     * Static representation of the [[inventoryNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_NUMBER = new core_1.StringField('InventoryNumber', Items, 'Edm.String');
    /**
     * Static representation of the [[technician]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.TECHNICIAN = new core_1.NumberField('Technician', Items, 'Edm.Int32');
    /**
     * Static representation of the [[employee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EMPLOYEE = new core_1.NumberField('Employee', Items, 'Edm.Int32');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.LOCATION = new core_1.NumberField('Location', Items, 'Edm.Int32');
    /**
     * Static representation of the [[assetStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_STATUS = new core_1.EnumField('AssetStatus', Items);
    /**
     * Static representation of the [[capitalizationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CAPITALIZATION_DATE = new core_1.DateField('CapitalizationDate', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[statisticalAsset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.STATISTICAL_ASSET = new core_1.EnumField('StatisticalAsset', Items);
    /**
     * Static representation of the [[cession]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CESSION = new core_1.EnumField('Cession', Items);
    /**
     * Static representation of the [[deactivateAfterUsefulLife]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEACTIVATE_AFTER_USEFUL_LIFE = new core_1.EnumField('DeactivateAfterUsefulLife', Items);
    /**
     * Static representation of the [[manageByQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MANAGE_BY_QUANTITY = new core_1.EnumField('ManageByQuantity', Items);
    /**
     * Static representation of the [[uoMGroupEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UO_M_GROUP_ENTRY = new core_1.NumberField('UoMGroupEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[inventoryUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_UO_M_ENTRY = new core_1.NumberField('InventoryUoMEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[defaultSalesUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_SALES_UO_M_ENTRY = new core_1.NumberField('DefaultSalesUoMEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[defaultPurchasingUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_PURCHASING_UO_M_ENTRY = new core_1.NumberField('DefaultPurchasingUoMEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[depreciationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEPRECIATION_GROUP = new core_1.StringField('DepreciationGroup', Items, 'Edm.String');
    /**
     * Static representation of the [[assetSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_SERIAL_NUMBER = new core_1.StringField('AssetSerialNumber', Items, 'Edm.String');
    /**
     * Static representation of the [[inventoryWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_WEIGHT = new core_1.NumberField('InventoryWeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[inventoryWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_WEIGHT_UNIT = new core_1.NumberField('InventoryWeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[inventoryWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_WEIGHT_1 = new core_1.NumberField('InventoryWeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[inventoryWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_WEIGHT_UNIT_1 = new core_1.NumberField('InventoryWeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[defaultCountingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_COUNTING_UNIT = new core_1.StringField('DefaultCountingUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[countingItemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COUNTING_ITEMS_PER_UNIT = new core_1.NumberField('CountingItemsPerUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[defaultCountingUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_COUNTING_UO_M_ENTRY = new core_1.NumberField('DefaultCountingUoMEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[excisable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EXCISABLE = new core_1.EnumField('Excisable', Items);
    /**
     * Static representation of the [[chapterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CHAPTER_ID = new core_1.NumberField('ChapterID', Items, 'Edm.Int32');
    /**
     * Static representation of the [[scsCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SCS_CODE = new core_1.StringField('ScsCode', Items, 'Edm.String');
    /**
     * Static representation of the [[spProdType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SP_PROD_TYPE = new core_1.EnumField('SpProdType', Items);
    /**
     * Static representation of the [[prodStdCost]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROD_STD_COST = new core_1.NumberField('ProdStdCost', Items, 'Edm.Double');
    /**
     * Static representation of the [[inCostRollup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.IN_COST_ROLLUP = new core_1.EnumField('InCostRollup', Items);
    /**
     * Static representation of the [[virtualAssetItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VIRTUAL_ASSET_ITEM = new core_1.EnumField('VirtualAssetItem', Items);
    /**
     * Static representation of the [[enforceAssetSerialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ENFORCE_ASSET_SERIAL_NUMBERS = new core_1.EnumField('EnforceAssetSerialNumbers', Items);
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[linkedResource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.LINKED_RESOURCE = new core_1.StringField('LinkedResource', Items, 'Edm.String');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UPDATE_DATE = new core_1.DateField('UpdateDate', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UPDATE_TIME = new core_1.TimeField('UpdateTime', Items, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[gstRelevnt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.GST_RELEVNT = new core_1.EnumField('GSTRelevnt', Items);
    /**
     * Static representation of the [[sacEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SAC_ENTRY = new core_1.NumberField('SACEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[gstTaxCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.GST_TAX_CATEGORY = new core_1.EnumField('GSTTaxCategory', Items);
    /**
     * Static representation of the [[serviceCategoryEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERVICE_CATEGORY_ENTRY = new core_1.NumberField('ServiceCategoryEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[capitalGoodsOnHoldPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CAPITAL_GOODS_ON_HOLD_PERCENT = new core_1.NumberField('CapitalGoodsOnHoldPercent', Items, 'Edm.Double');
    /**
     * Static representation of the [[capitalGoodsOnHoldLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CAPITAL_GOODS_ON_HOLD_LIMIT = new core_1.NumberField('CapitalGoodsOnHoldLimit', Items, 'Edm.Double');
    /**
     * Static representation of the [[assessableValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSESSABLE_VALUE = new core_1.NumberField('AssessableValue', Items, 'Edm.Double');
    /**
     * Static representation of the [[assVal4Wtr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASS_VAL_4_WTR = new core_1.NumberField('AssVal4WTR', Items, 'Edm.Double');
    /**
     * Static representation of the [[soiExcisable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SOI_EXCISABLE = new core_1.EnumField('SOIExcisable', Items);
    /**
     * Static representation of the [[tnved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.TNVED = new core_1.StringField('TNVED', Items, 'Edm.String');
    /**
     * Static representation of the [[pricingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PRICING_UNIT = new core_1.NumberField('PricingUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[itemPrices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_PRICES = new core_1.CollectionField('ItemPrices', Items, ItemPrice_1.ItemPrice);
    /**
     * Static representation of the [[itemWarehouseInfoCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_WAREHOUSE_INFO_COLLECTION = new core_1.CollectionField('ItemWarehouseInfoCollection', Items, ItemWarehouseInfo_1.ItemWarehouseInfo);
    /**
     * Static representation of the [[itemPreferredVendors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_PREFERRED_VENDORS = new core_1.CollectionField('ItemPreferredVendors', Items, ItemPreferredVendor_1.ItemPreferredVendor);
    /**
     * Static representation of the [[itemLocalizationInfos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_LOCALIZATION_INFOS = new core_1.CollectionField('ItemLocalizationInfos', Items, ItemLocalizationInfo_1.ItemLocalizationInfo);
    /**
     * Static representation of the [[itemProjects]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_PROJECTS = new core_1.CollectionField('ItemProjects', Items, ItemProject_1.ItemProject);
    /**
     * Static representation of the [[itemDistributionRules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_DISTRIBUTION_RULES = new core_1.CollectionField('ItemDistributionRules', Items, ItemDistributionRule_1.ItemDistributionRule);
    /**
     * Static representation of the [[itemAttributeGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_ATTRIBUTE_GROUPS = new core_1.CollectionField('ItemAttributeGroups', Items, ItemAttributeGroups_1.ItemAttributeGroups);
    /**
     * Static representation of the [[itemDepreciationParameters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_DEPRECIATION_PARAMETERS = new core_1.CollectionField('ItemDepreciationParameters', Items, ItemDepreciationParameter_1.ItemDepreciationParameter);
    /**
     * Static representation of the [[itemPeriodControls]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_PERIOD_CONTROLS = new core_1.CollectionField('ItemPeriodControls', Items, ItemPeriodControl_1.ItemPeriodControl);
    /**
     * Static representation of the [[itemUnitOfMeasurementCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_UNIT_OF_MEASUREMENT_COLLECTION = new core_1.CollectionField('ItemUnitOfMeasurementCollection', Items, ItemUnitOfMeasurement_1.ItemUnitOfMeasurement);
    /**
     * Static representation of the [[itemBarCodeCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_BAR_CODE_COLLECTION = new core_1.CollectionField('ItemBarCodeCollection', Items, ItemBarCode_1.ItemBarCode);
    /**
     * Static representation of the [[itemIntrastatExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_INTRASTAT_EXTENSION = new ItemIntrastatExtension_1.ItemIntrastatExtensionField('ItemIntrastatExtension', Items);
    /**
     * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SPECIAL_PRICES = new core_1.OneToManyLink('SpecialPrices', Items, SpecialPrices_1.SpecialPrices);
    /**
     * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_GROUPS = new core_1.OneToOneLink('ItemGroups', Items, ItemGroups_1.ItemGroups);
    /**
     * Static representation of the one-to-one navigation property [[customsGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CUSTOMS_GROUP = new core_1.OneToOneLink('CustomsGroup', Items, CustomsGroups_1.CustomsGroups);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VAT_GROUP = new core_1.OneToOneLink('VatGroup', Items, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', Items, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', Items, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[commissionGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COMMISSION_GROUP_2 = new core_1.OneToOneLink('CommissionGroup2', Items, CommissionGroups_1.CommissionGroups);
    /**
     * Static representation of the one-to-one navigation property [[manufacturer2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MANUFACTURER_2 = new core_1.OneToOneLink('Manufacturer2', Items, Manufacturers_1.Manufacturers);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SHIPPING_TYPE = new core_1.OneToOneLink('ShippingType', Items, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[contractTemplate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CONTRACT_TEMPLATE = new core_1.OneToOneLink('ContractTemplate', Items, ContractTemplates_1.ContractTemplates);
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_TAX_CODE = new core_1.OneToOneLink('SalesTaxCode', Items, SalesTaxCodes_1.SalesTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[inventoryCycles]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_CYCLES = new core_1.OneToOneLink('InventoryCycles', Items, InventoryCycles_1.InventoryCycles);
    /**
     * Static representation of the one-to-one navigation property [[serviceGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERVICE_GROUP_2 = new core_1.OneToOneLink('ServiceGroup2', Items, ServiceGroups_1.ServiceGroups);
    /**
     * Static representation of the one-to-one navigation property [[ncmCodeSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.NCM_CODE_SETUP = new core_1.OneToOneLink('NCMCodeSetup', Items, NcmCodesSetup_1.NcmCodesSetup);
    /**
     * Static representation of the one-to-one navigation property [[materialGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MATERIAL_GROUP_2 = new core_1.OneToOneLink('MaterialGroup2', Items, MaterialGroups_1.MaterialGroups);
    /**
     * Static representation of the one-to-one navigation property [[dnfCodeSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DNF_CODE_SETUP = new core_1.OneToOneLink('DNFCodeSetup', Items, DnfCodeSetup_1.DnfCodeSetup);
    /**
     * Static representation of the one-to-one navigation property [[brazilFuelIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BRAZIL_FUEL_INDEXER = new core_1.OneToOneLink('BrazilFuelIndexer', Items, BrazilFuelIndexers_1.BrazilFuelIndexers);
    /**
     * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BRAZIL_STRING_INDEXER = new core_1.OneToOneLink('BrazilStringIndexer', Items, BrazilStringIndexers_1.BrazilStringIndexers);
    /**
     * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BRAZIL_NUMERIC_INDEXER = new core_1.OneToOneLink('BrazilNumericIndexer', Items, BrazilNumericIndexers_1.BrazilNumericIndexers);
    /**
     * Static representation of the one-to-one navigation property [[assetClass2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_CLASS_2 = new core_1.OneToOneLink('AssetClass2', Items, AssetClasses_1.AssetClasses);
    /**
     * Static representation of the one-to-one navigation property [[assetGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_GROUP_2 = new core_1.OneToOneLink('AssetGroup2', Items, AssetGroups_1.AssetGroups);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', Items, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.WAREHOUSE_LOCATION = new core_1.OneToOneLink('WarehouseLocation', Items, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UNIT_OF_MEASUREMENT_GROUP = new core_1.OneToOneLink('UnitOfMeasurementGroup', Items, UnitOfMeasurementGroups_1.UnitOfMeasurementGroups);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UNIT_OF_MEASUREMENT = new core_1.OneToOneLink('UnitOfMeasurement', Items, UnitOfMeasurements_1.UnitOfMeasurements);
    /**
     * Static representation of the one-to-one navigation property [[assetDepreciationGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_DEPRECIATION_GROUP = new core_1.OneToOneLink('AssetDepreciationGroup', Items, AssetDepreciationGroups_1.AssetDepreciationGroups);
    /**
     * Static representation of the one-to-one navigation property [[resource]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.RESOURCE = new core_1.OneToOneLink('Resource', Items, Resources_1.Resources);
    /**
     * Static representation of the one-to-one navigation property [[indiaSacCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INDIA_SAC_CODE = new core_1.OneToOneLink('IndiaSacCode', Items, IndiaSacCode_1.IndiaSacCode);
    /**
     * Static representation of the one-to-many navigation property [[stockTakings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.STOCK_TAKINGS = new core_1.OneToManyLink('StockTakings', Items, StockTakings_1.StockTakings);
    /**
     * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEPRECIATION_AREAS = new core_1.OneToManyLink('DepreciationAreas', Items, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PRODUCT_TREES = new core_1.OneToManyLink('ProductTrees', Items, ProductTrees_1.ProductTrees);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.GL_ACCOUNT_ADVANCED_RULES = new core_1.OneToManyLink('GLAccountAdvancedRules', Items, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * Static representation of the one-to-many navigation property [[barCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BAR_CODES = new core_1.OneToManyLink('BarCodes', Items, BarCodes_1.BarCodes);
    /**
     * Static representation of the one-to-many navigation property [[batchNumberDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BATCH_NUMBER_DETAILS = new core_1.OneToManyLink('BatchNumberDetails', Items, BatchNumberDetails_1.BatchNumberDetails);
    /**
     * Static representation of the one-to-many navigation property [[serialNumberDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERIAL_NUMBER_DETAILS = new core_1.OneToManyLink('SerialNumberDetails', Items, SerialNumberDetails_1.SerialNumberDetails);
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BIN_LOCATIONS = new core_1.OneToManyLink('BinLocations', Items, BinLocations_1.BinLocations);
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CUSTOMER_EQUIPMENT_CARDS = new core_1.OneToManyLink('CustomerEquipmentCards', Items, CustomerEquipmentCards_1.CustomerEquipmentCards);
    /**
     * Static representation of the one-to-many navigation property [[knowledgeBaseSolutions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.KNOWLEDGE_BASE_SOLUTIONS = new core_1.OneToManyLink('KnowledgeBaseSolutions', Items, KnowledgeBaseSolutions_1.KnowledgeBaseSolutions);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERVICE_CALLS = new core_1.OneToManyLink('ServiceCalls', Items, ServiceCalls_1.ServiceCalls);
    /**
     * Static representation of the one-to-many navigation property [[alternateCatNum]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ALTERNATE_CAT_NUM = new core_1.OneToManyLink('AlternateCatNum', Items, AlternateCatNum_1.AlternateCatNum);
    /**
     * Static representation of the one-to-many navigation property [[resources]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.RESOURCES = new core_1.OneToManyLink('Resources', Items, Resources_1.Resources);
    /**
     * All fields of the Items entity.
     */
    Items._allFields = [
        Items.ITEM_CODE,
        Items.ITEM_NAME,
        Items.FOREIGN_NAME,
        Items.ITEMS_GROUP_CODE,
        Items.CUSTOMS_GROUP_CODE,
        Items.SALES_VAT_GROUP,
        Items.BAR_CODE,
        Items.VAT_LIABLE,
        Items.PURCHASE_ITEM,
        Items.SALES_ITEM,
        Items.INVENTORY_ITEM,
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
        Items.TREE_TYPE,
        Items.ASSET_ITEM,
        Items.DATA_EXPORT_CODE,
        Items.MANUFACTURER,
        Items.QUANTITY_ON_STOCK,
        Items.QUANTITY_ORDERED_FROM_VENDORS,
        Items.QUANTITY_ORDERED_BY_CUSTOMERS,
        Items.MANAGE_SERIAL_NUMBERS,
        Items.MANAGE_BATCH_NUMBERS,
        Items.VALID,
        Items.VALID_FROM,
        Items.VALID_TO,
        Items.VALID_REMARKS,
        Items.FROZEN,
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
        Items.GL_METHOD,
        Items.TAX_TYPE,
        Items.MAX_INVENTORY,
        Items.MANAGE_STOCK_BY_WAREHOUSE,
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
        Items.FORCE_SELECTION_OF_SERIAL_NUMBER,
        Items.MANAGE_SERIAL_NUMBERS_ON_RELEASE_ONLY,
        Items.WT_LIABLE,
        Items.COST_ACCOUNTING_METHOD,
        Items.SWW,
        Items.WARRANTY_TEMPLATE,
        Items.INDIRECT_TAX,
        Items.AR_TAX_CODE,
        Items.AP_TAX_CODE,
        Items.BASE_UNIT_NAME,
        Items.ITEM_COUNTRY_ORG,
        Items.ISSUE_METHOD,
        Items.SRI_AND_BATCH_MANAGE_METHOD,
        Items.IS_PHANTOM,
        Items.INVENTORY_UOM,
        Items.PLANNING_SYSTEM,
        Items.PROCUREMENT_METHOD,
        Items.COMPONENT_WAREHOUSE,
        Items.ORDER_INTERVALS,
        Items.ORDER_MULTIPLE,
        Items.LEAD_TIME,
        Items.MIN_ORDER_QUANTITY,
        Items.ITEM_TYPE,
        Items.ITEM_CLASS,
        Items.OUTGOING_SERVICE_CODE,
        Items.INCOMING_SERVICE_CODE,
        Items.SERVICE_GROUP,
        Items.NCM_CODE,
        Items.MATERIAL_TYPE,
        Items.MATERIAL_GROUP,
        Items.PRODUCT_SOURCE,
        Items.PROPERTIES_1,
        Items.PROPERTIES_2,
        Items.PROPERTIES_3,
        Items.PROPERTIES_4,
        Items.PROPERTIES_5,
        Items.PROPERTIES_6,
        Items.PROPERTIES_7,
        Items.PROPERTIES_8,
        Items.PROPERTIES_9,
        Items.PROPERTIES_10,
        Items.PROPERTIES_11,
        Items.PROPERTIES_12,
        Items.PROPERTIES_13,
        Items.PROPERTIES_14,
        Items.PROPERTIES_15,
        Items.PROPERTIES_16,
        Items.PROPERTIES_17,
        Items.PROPERTIES_18,
        Items.PROPERTIES_19,
        Items.PROPERTIES_20,
        Items.PROPERTIES_21,
        Items.PROPERTIES_22,
        Items.PROPERTIES_23,
        Items.PROPERTIES_24,
        Items.PROPERTIES_25,
        Items.PROPERTIES_26,
        Items.PROPERTIES_27,
        Items.PROPERTIES_28,
        Items.PROPERTIES_29,
        Items.PROPERTIES_30,
        Items.PROPERTIES_31,
        Items.PROPERTIES_32,
        Items.PROPERTIES_33,
        Items.PROPERTIES_34,
        Items.PROPERTIES_35,
        Items.PROPERTIES_36,
        Items.PROPERTIES_37,
        Items.PROPERTIES_38,
        Items.PROPERTIES_39,
        Items.PROPERTIES_40,
        Items.PROPERTIES_41,
        Items.PROPERTIES_42,
        Items.PROPERTIES_43,
        Items.PROPERTIES_44,
        Items.PROPERTIES_45,
        Items.PROPERTIES_46,
        Items.PROPERTIES_47,
        Items.PROPERTIES_48,
        Items.PROPERTIES_49,
        Items.PROPERTIES_50,
        Items.PROPERTIES_51,
        Items.PROPERTIES_52,
        Items.PROPERTIES_53,
        Items.PROPERTIES_54,
        Items.PROPERTIES_55,
        Items.PROPERTIES_56,
        Items.PROPERTIES_57,
        Items.PROPERTIES_58,
        Items.PROPERTIES_59,
        Items.PROPERTIES_60,
        Items.PROPERTIES_61,
        Items.PROPERTIES_62,
        Items.PROPERTIES_63,
        Items.PROPERTIES_64,
        Items.AUTO_CREATE_SERIAL_NUMBERS_ON_RELEASE,
        Items.DNF_ENTRY,
        Items.GTS_ITEM_SPEC,
        Items.GTS_ITEM_TAX_CATEGORY,
        Items.FUEL_ID,
        Items.BEVERAGE_TABLE_CODE,
        Items.BEVERAGE_GROUP_CODE,
        Items.BEVERAGE_COMMERCIAL_BRAND_CODE,
        Items.SERIES,
        Items.TOLERANCE_DAYS,
        Items.TYPE_OF_ADVANCED_RULES,
        Items.ISSUE_PRIMARILY_BY,
        Items.NO_DISCOUNTS,
        Items.ASSET_CLASS,
        Items.ASSET_GROUP,
        Items.INVENTORY_NUMBER,
        Items.TECHNICIAN,
        Items.EMPLOYEE,
        Items.LOCATION,
        Items.ASSET_STATUS,
        Items.CAPITALIZATION_DATE,
        Items.STATISTICAL_ASSET,
        Items.CESSION,
        Items.DEACTIVATE_AFTER_USEFUL_LIFE,
        Items.MANAGE_BY_QUANTITY,
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
        Items.EXCISABLE,
        Items.CHAPTER_ID,
        Items.SCS_CODE,
        Items.SP_PROD_TYPE,
        Items.PROD_STD_COST,
        Items.IN_COST_ROLLUP,
        Items.VIRTUAL_ASSET_ITEM,
        Items.ENFORCE_ASSET_SERIAL_NUMBERS,
        Items.ATTACHMENT_ENTRY,
        Items.LINKED_RESOURCE,
        Items.UPDATE_DATE,
        Items.UPDATE_TIME,
        Items.GST_RELEVNT,
        Items.SAC_ENTRY,
        Items.GST_TAX_CATEGORY,
        Items.SERVICE_CATEGORY_ENTRY,
        Items.CAPITAL_GOODS_ON_HOLD_PERCENT,
        Items.CAPITAL_GOODS_ON_HOLD_LIMIT,
        Items.ASSESSABLE_VALUE,
        Items.ASS_VAL_4_WTR,
        Items.SOI_EXCISABLE,
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
    Items.ALL_FIELDS = new core_1.AllFields('*', Items);
    /**
     * All key fields of the Items entity.
     */
    Items._keyFields = [Items.ITEM_CODE];
    /**
     * Mapping of all key field names to the respective static field property Items.
     */
    Items._keys = Items._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Items = exports.Items || (exports.Items = {}));
exports.Items = Items;
//# sourceMappingURL=Items.js.map