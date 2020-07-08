"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Items" of service "SAPB1".
 */
var Items = /** @class */ (function (_super) {
    __extends(Items, _super);
    function Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Items`.
     * @returns A builder that constructs instances of entity type `Items`.
     */
    Items.builder = function () {
        return v4_1.Entity.entityBuilder(Items);
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
        return v4_1.Entity.customFieldSelector(fieldName, Items);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Items.
     */
    Items._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Items._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Items;
}(v4_1.Entity));
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
    Items.ITEM_CODE = new v4_1.StringField('ItemCode', Items, 'Edm.String');
    /**
     * Static representation of the [[itemName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_NAME = new v4_1.StringField('ItemName', Items, 'Edm.String');
    /**
     * Static representation of the [[foreignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FOREIGN_NAME = new v4_1.StringField('ForeignName', Items, 'Edm.String');
    /**
     * Static representation of the [[itemsGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEMS_GROUP_CODE = new v4_1.NumberField('ItemsGroupCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[customsGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CUSTOMS_GROUP_CODE = new v4_1.NumberField('CustomsGroupCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_VAT_GROUP = new v4_1.StringField('SalesVATGroup', Items, 'Edm.String');
    /**
     * Static representation of the [[barCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BAR_CODE = new v4_1.StringField('BarCode', Items, 'Edm.String');
    /**
     * Static representation of the [[incomeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INCOME_ACCOUNT = new v4_1.StringField('IncomeAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[exemptIncomeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EXEMPT_INCOME_ACCOUNT = new v4_1.StringField('ExemptIncomeAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[expanseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EXPANSE_ACCOUNT = new v4_1.StringField('ExpanseAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[mainsupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MAINSUPPLIER = new v4_1.StringField('Mainsupplier', Items, 'Edm.String');
    /**
     * Static representation of the [[supplierCatalogNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SUPPLIER_CATALOG_NO = new v4_1.StringField('SupplierCatalogNo', Items, 'Edm.String');
    /**
     * Static representation of the [[desiredInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DESIRED_INVENTORY = new v4_1.NumberField('DesiredInventory', Items, 'Edm.Double');
    /**
     * Static representation of the [[minInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MIN_INVENTORY = new v4_1.NumberField('MinInventory', Items, 'Edm.Double');
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PICTURE = new v4_1.StringField('Picture', Items, 'Edm.String');
    /**
     * Static representation of the [[userText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.USER_TEXT = new v4_1.StringField('User_Text', Items, 'Edm.String');
    /**
     * Static representation of the [[serialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERIAL_NUM = new v4_1.StringField('SerialNum', Items, 'Edm.String');
    /**
     * Static representation of the [[commissionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COMMISSION_PERCENT = new v4_1.NumberField('CommissionPercent', Items, 'Edm.Double');
    /**
     * Static representation of the [[commissionSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COMMISSION_SUM = new v4_1.NumberField('CommissionSum', Items, 'Edm.Double');
    /**
     * Static representation of the [[commissionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COMMISSION_GROUP = new v4_1.NumberField('CommissionGroup', Items, 'Edm.Int32');
    /**
     * Static representation of the [[dataExportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DATA_EXPORT_CODE = new v4_1.StringField('DataExportCode', Items, 'Edm.String');
    /**
     * Static representation of the [[manufacturer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MANUFACTURER = new v4_1.NumberField('Manufacturer', Items, 'Edm.Int32');
    /**
     * Static representation of the [[quantityOnStock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.QUANTITY_ON_STOCK = new v4_1.NumberField('QuantityOnStock', Items, 'Edm.Double');
    /**
     * Static representation of the [[quantityOrderedFromVendors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.QUANTITY_ORDERED_FROM_VENDORS = new v4_1.NumberField('QuantityOrderedFromVendors', Items, 'Edm.Double');
    /**
     * Static representation of the [[quantityOrderedByCustomers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.QUANTITY_ORDERED_BY_CUSTOMERS = new v4_1.NumberField('QuantityOrderedByCustomers', Items, 'Edm.Double');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VALID_FROM = new v4_1.DateField('ValidFrom', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VALID_TO = new v4_1.DateField('ValidTo', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VALID_REMARKS = new v4_1.StringField('ValidRemarks', Items, 'Edm.String');
    /**
     * Static representation of the [[frozenFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FROZEN_FROM = new v4_1.DateField('FrozenFrom', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FROZEN_TO = new v4_1.DateField('FrozenTo', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FROZEN_REMARKS = new v4_1.StringField('FrozenRemarks', Items, 'Edm.String');
    /**
     * Static representation of the [[salesUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT = new v4_1.StringField('SalesUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[salesItemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_ITEMS_PER_UNIT = new v4_1.NumberField('SalesItemsPerUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesPackagingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_PACKAGING_UNIT = new v4_1.StringField('SalesPackagingUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[salesQtyPerPackUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_QTY_PER_PACK_UNIT = new v4_1.NumberField('SalesQtyPerPackUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesUnitLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_LENGTH = new v4_1.NumberField('SalesUnitLength', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesLengthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_LENGTH_UNIT = new v4_1.NumberField('SalesLengthUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_WIDTH = new v4_1.NumberField('SalesUnitWidth', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesWidthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_WIDTH_UNIT = new v4_1.NumberField('SalesWidthUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_HEIGHT = new v4_1.NumberField('SalesUnitHeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesHeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_HEIGHT_UNIT = new v4_1.NumberField('SalesHeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitVolume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_VOLUME = new v4_1.NumberField('SalesUnitVolume', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesVolumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_VOLUME_UNIT = new v4_1.NumberField('SalesVolumeUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_WEIGHT = new v4_1.NumberField('SalesUnitWeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_WEIGHT_UNIT = new v4_1.NumberField('SalesWeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT = new v4_1.StringField('PurchaseUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[purchaseItemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_ITEMS_PER_UNIT = new v4_1.NumberField('PurchaseItemsPerUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchasePackagingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_PACKAGING_UNIT = new v4_1.StringField('PurchasePackagingUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[purchaseQtyPerPackUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_QTY_PER_PACK_UNIT = new v4_1.NumberField('PurchaseQtyPerPackUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseUnitLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_LENGTH = new v4_1.NumberField('PurchaseUnitLength', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseLengthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_LENGTH_UNIT = new v4_1.NumberField('PurchaseLengthUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_WIDTH = new v4_1.NumberField('PurchaseUnitWidth', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseWidthUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_WIDTH_UNIT = new v4_1.NumberField('PurchaseWidthUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_HEIGHT = new v4_1.NumberField('PurchaseUnitHeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseHeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_HEIGHT_UNIT = new v4_1.NumberField('PurchaseHeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitVolume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_VOLUME = new v4_1.NumberField('PurchaseUnitVolume', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseVolumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_VOLUME_UNIT = new v4_1.NumberField('PurchaseVolumeUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_WEIGHT = new v4_1.NumberField('PurchaseUnitWeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_WEIGHT_UNIT = new v4_1.NumberField('PurchaseWeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_VAT_GROUP = new v4_1.StringField('PurchaseVATGroup', Items, 'Edm.String');
    /**
     * Static representation of the [[salesFactor1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_FACTOR_1 = new v4_1.NumberField('SalesFactor1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesFactor2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_FACTOR_2 = new v4_1.NumberField('SalesFactor2', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesFactor3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_FACTOR_3 = new v4_1.NumberField('SalesFactor3', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesFactor4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_FACTOR_4 = new v4_1.NumberField('SalesFactor4', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseFactor1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_FACTOR_1 = new v4_1.NumberField('PurchaseFactor1', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseFactor2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_FACTOR_2 = new v4_1.NumberField('PurchaseFactor2', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseFactor3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_FACTOR_3 = new v4_1.NumberField('PurchaseFactor3', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseFactor4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_FACTOR_4 = new v4_1.NumberField('PurchaseFactor4', Items, 'Edm.Double');
    /**
     * Static representation of the [[movingAveragePrice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MOVING_AVERAGE_PRICE = new v4_1.NumberField('MovingAveragePrice', Items, 'Edm.Double');
    /**
     * Static representation of the [[foreignRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FOREIGN_REVENUES_ACCOUNT = new v4_1.StringField('ForeignRevenuesAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[ecRevenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EC_REVENUES_ACCOUNT = new v4_1.StringField('ECRevenuesAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[foreignExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FOREIGN_EXPENSES_ACCOUNT = new v4_1.StringField('ForeignExpensesAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[ecExpensesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EC_EXPENSES_ACCOUNT = new v4_1.StringField('ECExpensesAccount', Items, 'Edm.String');
    /**
     * Static representation of the [[avgStdPrice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.AVG_STD_PRICE = new v4_1.NumberField('AvgStdPrice', Items, 'Edm.Double');
    /**
     * Static representation of the [[defaultWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_WAREHOUSE = new v4_1.StringField('DefaultWarehouse', Items, 'Edm.String');
    /**
     * Static representation of the [[shipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SHIP_TYPE = new v4_1.NumberField('ShipType', Items, 'Edm.Int32');
    /**
     * Static representation of the [[maxInventory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MAX_INVENTORY = new v4_1.NumberField('MaxInventory', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseHeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_HEIGHT_UNIT_1 = new v4_1.NumberField('PurchaseHeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitHeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_HEIGHT_1 = new v4_1.NumberField('PurchaseUnitHeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseLengthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_LENGTH_UNIT_1 = new v4_1.NumberField('PurchaseLengthUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitLength1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_LENGTH_1 = new v4_1.NumberField('PurchaseUnitLength1', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_WEIGHT_UNIT_1 = new v4_1.NumberField('PurchaseWeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_WEIGHT_1 = new v4_1.NumberField('PurchaseUnitWeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[purchaseWidthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_WIDTH_UNIT_1 = new v4_1.NumberField('PurchaseWidthUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[purchaseUnitWidth1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PURCHASE_UNIT_WIDTH_1 = new v4_1.NumberField('PurchaseUnitWidth1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesHeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_HEIGHT_UNIT_1 = new v4_1.NumberField('SalesHeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitHeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_HEIGHT_1 = new v4_1.NumberField('SalesUnitHeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesLengthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_LENGTH_UNIT_1 = new v4_1.NumberField('SalesLengthUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitLength1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_LENGTH_1 = new v4_1.NumberField('SalesUnitLength1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_WEIGHT_UNIT_1 = new v4_1.NumberField('SalesWeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_WEIGHT_1 = new v4_1.NumberField('SalesUnitWeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[salesWidthUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_WIDTH_UNIT_1 = new v4_1.NumberField('SalesWidthUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[salesUnitWidth1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_UNIT_WIDTH_1 = new v4_1.NumberField('SalesUnitWidth1', Items, 'Edm.Double');
    /**
     * Static representation of the [[sww]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SWW = new v4_1.StringField('SWW', Items, 'Edm.String');
    /**
     * Static representation of the [[warrantyTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.WARRANTY_TEMPLATE = new v4_1.StringField('WarrantyTemplate', Items, 'Edm.String');
    /**
     * Static representation of the [[arTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.AR_TAX_CODE = new v4_1.StringField('ArTaxCode', Items, 'Edm.String');
    /**
     * Static representation of the [[apTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.AP_TAX_CODE = new v4_1.StringField('ApTaxCode', Items, 'Edm.String');
    /**
     * Static representation of the [[baseUnitName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BASE_UNIT_NAME = new v4_1.StringField('BaseUnitName', Items, 'Edm.String');
    /**
     * Static representation of the [[itemCountryOrg]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_COUNTRY_ORG = new v4_1.StringField('ItemCountryOrg', Items, 'Edm.String');
    /**
     * Static representation of the [[inventoryUom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_UOM = new v4_1.StringField('InventoryUOM', Items, 'Edm.String');
    /**
     * Static representation of the [[orderIntervals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ORDER_INTERVALS = new v4_1.NumberField('OrderIntervals', Items, 'Edm.Int32');
    /**
     * Static representation of the [[orderMultiple]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ORDER_MULTIPLE = new v4_1.NumberField('OrderMultiple', Items, 'Edm.Double');
    /**
     * Static representation of the [[leadTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.LEAD_TIME = new v4_1.NumberField('LeadTime', Items, 'Edm.Int32');
    /**
     * Static representation of the [[minOrderQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MIN_ORDER_QUANTITY = new v4_1.NumberField('MinOrderQuantity', Items, 'Edm.Double');
    /**
     * Static representation of the [[outgoingServiceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.OUTGOING_SERVICE_CODE = new v4_1.NumberField('OutgoingServiceCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[incomingServiceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INCOMING_SERVICE_CODE = new v4_1.NumberField('IncomingServiceCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[serviceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERVICE_GROUP = new v4_1.NumberField('ServiceGroup', Items, 'Edm.Int32');
    /**
     * Static representation of the [[ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.NCM_CODE = new v4_1.NumberField('NCMCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[materialGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MATERIAL_GROUP = new v4_1.NumberField('MaterialGroup', Items, 'Edm.Int32');
    /**
     * Static representation of the [[productSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PRODUCT_SOURCE = new v4_1.StringField('ProductSource', Items, 'Edm.String');
    /**
     * Static representation of the [[dnfEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DNF_ENTRY = new v4_1.NumberField('DNFEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[gtsItemSpec]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.GTS_ITEM_SPEC = new v4_1.StringField('GTSItemSpec', Items, 'Edm.String');
    /**
     * Static representation of the [[gtsItemTaxCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.GTS_ITEM_TAX_CATEGORY = new v4_1.StringField('GTSItemTaxCategory', Items, 'Edm.String');
    /**
     * Static representation of the [[fuelId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.FUEL_ID = new v4_1.NumberField('FuelID', Items, 'Edm.Int32');
    /**
     * Static representation of the [[beverageTableCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BEVERAGE_TABLE_CODE = new v4_1.StringField('BeverageTableCode', Items, 'Edm.String');
    /**
     * Static representation of the [[beverageGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BEVERAGE_GROUP_CODE = new v4_1.StringField('BeverageGroupCode', Items, 'Edm.String');
    /**
     * Static representation of the [[beverageCommercialBrandCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BEVERAGE_COMMERCIAL_BRAND_CODE = new v4_1.NumberField('BeverageCommercialBrandCode', Items, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERIES = new v4_1.NumberField('Series', Items, 'Edm.Int32');
    /**
     * Static representation of the [[toleranceDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.TOLERANCE_DAYS = new v4_1.NumberField('ToleranceDays', Items, 'Edm.Int32');
    /**
     * Static representation of the [[assetClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_CLASS = new v4_1.StringField('AssetClass', Items, 'Edm.String');
    /**
     * Static representation of the [[assetGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_GROUP = new v4_1.StringField('AssetGroup', Items, 'Edm.String');
    /**
     * Static representation of the [[inventoryNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_NUMBER = new v4_1.StringField('InventoryNumber', Items, 'Edm.String');
    /**
     * Static representation of the [[technician]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.TECHNICIAN = new v4_1.NumberField('Technician', Items, 'Edm.Int32');
    /**
     * Static representation of the [[employee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EMPLOYEE = new v4_1.NumberField('Employee', Items, 'Edm.Int32');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.LOCATION = new v4_1.NumberField('Location', Items, 'Edm.Int32');
    /**
     * Static representation of the [[capitalizationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CAPITALIZATION_DATE = new v4_1.DateField('CapitalizationDate', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[uoMGroupEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UO_M_GROUP_ENTRY = new v4_1.NumberField('UoMGroupEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[inventoryUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_UO_M_ENTRY = new v4_1.NumberField('InventoryUoMEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[defaultSalesUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_SALES_UO_M_ENTRY = new v4_1.NumberField('DefaultSalesUoMEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[defaultPurchasingUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_PURCHASING_UO_M_ENTRY = new v4_1.NumberField('DefaultPurchasingUoMEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[depreciationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEPRECIATION_GROUP = new v4_1.StringField('DepreciationGroup', Items, 'Edm.String');
    /**
     * Static representation of the [[assetSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_SERIAL_NUMBER = new v4_1.StringField('AssetSerialNumber', Items, 'Edm.String');
    /**
     * Static representation of the [[inventoryWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_WEIGHT = new v4_1.NumberField('InventoryWeight', Items, 'Edm.Double');
    /**
     * Static representation of the [[inventoryWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_WEIGHT_UNIT = new v4_1.NumberField('InventoryWeightUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[inventoryWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_WEIGHT_1 = new v4_1.NumberField('InventoryWeight1', Items, 'Edm.Double');
    /**
     * Static representation of the [[inventoryWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_WEIGHT_UNIT_1 = new v4_1.NumberField('InventoryWeightUnit1', Items, 'Edm.Int32');
    /**
     * Static representation of the [[defaultCountingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_COUNTING_UNIT = new v4_1.StringField('DefaultCountingUnit', Items, 'Edm.String');
    /**
     * Static representation of the [[countingItemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COUNTING_ITEMS_PER_UNIT = new v4_1.NumberField('CountingItemsPerUnit', Items, 'Edm.Double');
    /**
     * Static representation of the [[defaultCountingUoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEFAULT_COUNTING_UO_M_ENTRY = new v4_1.NumberField('DefaultCountingUoMEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[chapterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CHAPTER_ID = new v4_1.NumberField('ChapterID', Items, 'Edm.Int32');
    /**
     * Static representation of the [[scsCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SCS_CODE = new v4_1.StringField('ScsCode', Items, 'Edm.String');
    /**
     * Static representation of the [[prodStdCost]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PROD_STD_COST = new v4_1.NumberField('ProdStdCost', Items, 'Edm.Double');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[linkedResource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.LINKED_RESOURCE = new v4_1.StringField('LinkedResource', Items, 'Edm.String');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UPDATE_DATE = new v4_1.DateField('UpdateDate', Items, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UPDATE_TIME = new v4_1.TimeField('UpdateTime', Items, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[sacEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SAC_ENTRY = new v4_1.NumberField('SACEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[serviceCategoryEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERVICE_CATEGORY_ENTRY = new v4_1.NumberField('ServiceCategoryEntry', Items, 'Edm.Int32');
    /**
     * Static representation of the [[capitalGoodsOnHoldPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CAPITAL_GOODS_ON_HOLD_PERCENT = new v4_1.NumberField('CapitalGoodsOnHoldPercent', Items, 'Edm.Double');
    /**
     * Static representation of the [[capitalGoodsOnHoldLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CAPITAL_GOODS_ON_HOLD_LIMIT = new v4_1.NumberField('CapitalGoodsOnHoldLimit', Items, 'Edm.Double');
    /**
     * Static representation of the [[assessableValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSESSABLE_VALUE = new v4_1.NumberField('AssessableValue', Items, 'Edm.Double');
    /**
     * Static representation of the [[assVal4Wtr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASS_VAL_4_WTR = new v4_1.NumberField('AssVal4WTR', Items, 'Edm.Double');
    /**
     * Static representation of the [[tnved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.TNVED = new v4_1.StringField('TNVED', Items, 'Edm.String');
    /**
     * Static representation of the [[pricingUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PRICING_UNIT = new v4_1.NumberField('PricingUnit', Items, 'Edm.Int32');
    /**
     * Static representation of the [[itemPrices]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_PRICES = new v4_1.CollectionField('ItemPrices', Items, new ItemPrice_1.ItemPriceField('', Items));
    /**
     * Static representation of the [[itemWarehouseInfoCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_WAREHOUSE_INFO_COLLECTION = new v4_1.CollectionField('ItemWarehouseInfoCollection', Items, new ItemWarehouseInfo_1.ItemWarehouseInfoField('', Items));
    /**
     * Static representation of the [[itemPreferredVendors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_PREFERRED_VENDORS = new v4_1.CollectionField('ItemPreferredVendors', Items, new ItemPreferredVendor_1.ItemPreferredVendorField('', Items));
    /**
     * Static representation of the [[itemLocalizationInfos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_LOCALIZATION_INFOS = new v4_1.CollectionField('ItemLocalizationInfos', Items, new ItemLocalizationInfo_1.ItemLocalizationInfoField('', Items));
    /**
     * Static representation of the [[itemProjects]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_PROJECTS = new v4_1.CollectionField('ItemProjects', Items, new ItemProject_1.ItemProjectField('', Items));
    /**
     * Static representation of the [[itemDistributionRules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_DISTRIBUTION_RULES = new v4_1.CollectionField('ItemDistributionRules', Items, new ItemDistributionRule_1.ItemDistributionRuleField('', Items));
    /**
     * Static representation of the [[itemAttributeGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_ATTRIBUTE_GROUPS = new v4_1.CollectionField('ItemAttributeGroups', Items, new ItemAttributeGroups_1.ItemAttributeGroupsField('', Items));
    /**
     * Static representation of the [[itemDepreciationParameters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_DEPRECIATION_PARAMETERS = new v4_1.CollectionField('ItemDepreciationParameters', Items, new ItemDepreciationParameter_1.ItemDepreciationParameterField('', Items));
    /**
     * Static representation of the [[itemPeriodControls]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_PERIOD_CONTROLS = new v4_1.CollectionField('ItemPeriodControls', Items, new ItemPeriodControl_1.ItemPeriodControlField('', Items));
    /**
     * Static representation of the [[itemUnitOfMeasurementCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_UNIT_OF_MEASUREMENT_COLLECTION = new v4_1.CollectionField('ItemUnitOfMeasurementCollection', Items, new ItemUnitOfMeasurement_1.ItemUnitOfMeasurementField('', Items));
    /**
     * Static representation of the [[itemBarCodeCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_BAR_CODE_COLLECTION = new v4_1.CollectionField('ItemBarCodeCollection', Items, new ItemBarCode_1.ItemBarCodeField('', Items));
    /**
     * Static representation of the [[itemIntrastatExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_INTRASTAT_EXTENSION = new ItemIntrastatExtension_1.ItemIntrastatExtensionField('ItemIntrastatExtension', Items);
    /**
     * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SPECIAL_PRICES = new v4_1.OneToManyLink('SpecialPrices', Items, SpecialPrices_1.SpecialPrices);
    /**
     * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ITEM_GROUPS = new v4_1.OneToOneLink('ItemGroups', Items, ItemGroups_1.ItemGroups);
    /**
     * Static representation of the one-to-one navigation property [[customsGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CUSTOMS_GROUP = new v4_1.OneToOneLink('CustomsGroup', Items, CustomsGroups_1.CustomsGroups);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.VAT_GROUP = new v4_1.OneToOneLink('VatGroup', Items, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', Items, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', Items, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[commissionGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.COMMISSION_GROUP_2 = new v4_1.OneToOneLink('CommissionGroup2', Items, CommissionGroups_1.CommissionGroups);
    /**
     * Static representation of the one-to-one navigation property [[manufacturer2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MANUFACTURER_2 = new v4_1.OneToOneLink('Manufacturer2', Items, Manufacturers_1.Manufacturers);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', Items, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[contractTemplate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CONTRACT_TEMPLATE = new v4_1.OneToOneLink('ContractTemplate', Items, ContractTemplates_1.ContractTemplates);
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SALES_TAX_CODE = new v4_1.OneToOneLink('SalesTaxCode', Items, SalesTaxCodes_1.SalesTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[inventoryCycles]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INVENTORY_CYCLES = new v4_1.OneToOneLink('InventoryCycles', Items, InventoryCycles_1.InventoryCycles);
    /**
     * Static representation of the one-to-one navigation property [[serviceGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERVICE_GROUP_2 = new v4_1.OneToOneLink('ServiceGroup2', Items, ServiceGroups_1.ServiceGroups);
    /**
     * Static representation of the one-to-one navigation property [[ncmCodeSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.NCM_CODE_SETUP = new v4_1.OneToOneLink('NCMCodeSetup', Items, NcmCodesSetup_1.NcmCodesSetup);
    /**
     * Static representation of the one-to-one navigation property [[materialGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.MATERIAL_GROUP_2 = new v4_1.OneToOneLink('MaterialGroup2', Items, MaterialGroups_1.MaterialGroups);
    /**
     * Static representation of the one-to-one navigation property [[dnfCodeSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DNF_CODE_SETUP = new v4_1.OneToOneLink('DNFCodeSetup', Items, DnfCodeSetup_1.DnfCodeSetup);
    /**
     * Static representation of the one-to-one navigation property [[brazilFuelIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BRAZIL_FUEL_INDEXER = new v4_1.OneToOneLink('BrazilFuelIndexer', Items, BrazilFuelIndexers_1.BrazilFuelIndexers);
    /**
     * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BRAZIL_STRING_INDEXER = new v4_1.OneToOneLink('BrazilStringIndexer', Items, BrazilStringIndexers_1.BrazilStringIndexers);
    /**
     * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BRAZIL_NUMERIC_INDEXER = new v4_1.OneToOneLink('BrazilNumericIndexer', Items, BrazilNumericIndexers_1.BrazilNumericIndexers);
    /**
     * Static representation of the one-to-one navigation property [[assetClass2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_CLASS_2 = new v4_1.OneToOneLink('AssetClass2', Items, AssetClasses_1.AssetClasses);
    /**
     * Static representation of the one-to-one navigation property [[assetGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_GROUP_2 = new v4_1.OneToOneLink('AssetGroup2', Items, AssetGroups_1.AssetGroups);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', Items, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.WAREHOUSE_LOCATION = new v4_1.OneToOneLink('WarehouseLocation', Items, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UNIT_OF_MEASUREMENT_GROUP = new v4_1.OneToOneLink('UnitOfMeasurementGroup', Items, UnitOfMeasurementGroups_1.UnitOfMeasurementGroups);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.UNIT_OF_MEASUREMENT = new v4_1.OneToOneLink('UnitOfMeasurement', Items, UnitOfMeasurements_1.UnitOfMeasurements);
    /**
     * Static representation of the one-to-one navigation property [[assetDepreciationGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ASSET_DEPRECIATION_GROUP = new v4_1.OneToOneLink('AssetDepreciationGroup', Items, AssetDepreciationGroups_1.AssetDepreciationGroups);
    /**
     * Static representation of the one-to-one navigation property [[resource]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.RESOURCE = new v4_1.OneToOneLink('Resource', Items, Resources_1.Resources);
    /**
     * Static representation of the one-to-one navigation property [[indiaSacCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.INDIA_SAC_CODE = new v4_1.OneToOneLink('IndiaSacCode', Items, IndiaSacCode_1.IndiaSacCode);
    /**
     * Static representation of the one-to-many navigation property [[stockTakings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.STOCK_TAKINGS = new v4_1.OneToManyLink('StockTakings', Items, StockTakings_1.StockTakings);
    /**
     * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.DEPRECIATION_AREAS = new v4_1.OneToManyLink('DepreciationAreas', Items, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.PRODUCT_TREES = new v4_1.OneToManyLink('ProductTrees', Items, ProductTrees_1.ProductTrees);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.GL_ACCOUNT_ADVANCED_RULES = new v4_1.OneToManyLink('GLAccountAdvancedRules', Items, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * Static representation of the one-to-many navigation property [[barCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BAR_CODES = new v4_1.OneToManyLink('BarCodes', Items, BarCodes_1.BarCodes);
    /**
     * Static representation of the one-to-many navigation property [[batchNumberDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BATCH_NUMBER_DETAILS = new v4_1.OneToManyLink('BatchNumberDetails', Items, BatchNumberDetails_1.BatchNumberDetails);
    /**
     * Static representation of the one-to-many navigation property [[serialNumberDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERIAL_NUMBER_DETAILS = new v4_1.OneToManyLink('SerialNumberDetails', Items, SerialNumberDetails_1.SerialNumberDetails);
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.BIN_LOCATIONS = new v4_1.OneToManyLink('BinLocations', Items, BinLocations_1.BinLocations);
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.CUSTOMER_EQUIPMENT_CARDS = new v4_1.OneToManyLink('CustomerEquipmentCards', Items, CustomerEquipmentCards_1.CustomerEquipmentCards);
    /**
     * Static representation of the one-to-many navigation property [[knowledgeBaseSolutions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.KNOWLEDGE_BASE_SOLUTIONS = new v4_1.OneToManyLink('KnowledgeBaseSolutions', Items, KnowledgeBaseSolutions_1.KnowledgeBaseSolutions);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.SERVICE_CALLS = new v4_1.OneToManyLink('ServiceCalls', Items, ServiceCalls_1.ServiceCalls);
    /**
     * Static representation of the one-to-many navigation property [[alternateCatNum]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.ALTERNATE_CAT_NUM = new v4_1.OneToManyLink('AlternateCatNum', Items, AlternateCatNum_1.AlternateCatNum);
    /**
     * Static representation of the one-to-many navigation property [[resources]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Items.RESOURCES = new v4_1.OneToManyLink('Resources', Items, Resources_1.Resources);
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
    Items.ALL_FIELDS = new v4_1.AllFields('*', Items);
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