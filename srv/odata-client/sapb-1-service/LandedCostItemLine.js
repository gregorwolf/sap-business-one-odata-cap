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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandedCostItemLine = exports.LandedCostItemLineField = exports.createLandedCostItemLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[LandedCostItemLine.build]] instead.
 */
function createLandedCostItemLine(json) {
    return LandedCostItemLine.build(json);
}
exports.createLandedCostItemLine = createLandedCostItemLine;
/**
 * LandedCostItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LandedCostItemLineField = /** @class */ (function (_super) {
    __extends(LandedCostItemLineField, _super);
    /**
     * Creates an instance of LandedCostItemLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function LandedCostItemLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, LandedCostItemLine) || this;
        /**
         * Representation of the [[LandedCostItemLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.baseDocumentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentType = new core_1.ComplexTypeEnumPropertyField('BaseDocumentType', _this);
        /**
         * Representation of the [[LandedCostItemLine.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new core_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.number]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.number = new core_1.ComplexTypeStringPropertyField('Number', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.baseDocumentPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentPrice = new core_1.ComplexTypeNumberPropertyField('BaseDocumentPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.projectedCustoms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectedCustoms = new core_1.ComplexTypeNumberPropertyField('ProjectedCustoms', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.projectedCustomsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectedCustomsFc = new core_1.ComplexTypeNumberPropertyField('ProjectedCustomsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.expenditure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenditure = new core_1.ComplexTypeNumberPropertyField('Expenditure', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.expenditureFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenditureFc = new core_1.ComplexTypeNumberPropertyField('ExpenditureFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.warehousePrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehousePrice = new core_1.ComplexTypeNumberPropertyField('WarehousePrice', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.warehousePriceFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehousePriceFc = new core_1.ComplexTypeNumberPropertyField('WarehousePriceFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new core_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.lineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalFc = new core_1.ComplexTypeNumberPropertyField('LineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.volume]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volume = new core_1.ComplexTypeNumberPropertyField('Volume', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.volumeUoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volumeUoM = new core_1.ComplexTypeNumberPropertyField('VolumeUoM', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.weight1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1 = new core_1.ComplexTypeNumberPropertyField('Weight1', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.weight1UnitCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1UnitCode = new core_1.ComplexTypeNumberPropertyField('Weight1UnitCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.weight2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2 = new core_1.ComplexTypeNumberPropertyField('Weight2', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.weight2UnitCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2UnitCode = new core_1.ComplexTypeNumberPropertyField('Weight2UnitCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.vendorCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorCode = new core_1.ComplexTypeStringPropertyField('VendorCode', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.reference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference = new core_1.ComplexTypeStringPropertyField('Reference', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.factorWithoutCustoms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorWithoutCustoms = new core_1.ComplexTypeNumberPropertyField('FactorWithoutCustoms', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.factorWithCustoms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorWithCustoms = new core_1.ComplexTypeNumberPropertyField('FactorWithCustoms', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.inventoryUoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryUoM = new core_1.ComplexTypeStringPropertyField('InventoryUoM', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.blockNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockNumber = new core_1.ComplexTypeStringPropertyField('BlockNumber', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.importLog]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importLog = new core_1.ComplexTypeStringPropertyField('ImportLog', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.originalWarehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originalWarehouse = new core_1.ComplexTypeStringPropertyField('OriginalWarehouse', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.releaseNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.releaseNumber = new core_1.ComplexTypeNumberPropertyField('ReleaseNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.variantCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variantCosts = new core_1.ComplexTypeNumberPropertyField('VariantCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.fixCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fixCosts = new core_1.ComplexTypeNumberPropertyField('FixCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.variantCostsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variantCostsFc = new core_1.ComplexTypeNumberPropertyField('VariantCostsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.fixCostsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fixCostsFc = new core_1.ComplexTypeNumberPropertyField('FixCostsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customs = new core_1.ComplexTypeNumberPropertyField('Customs', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsFc = new core_1.ComplexTypeNumberPropertyField('CustomsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.baseDocumentValueLineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentValueLineTotal = new core_1.ComplexTypeNumberPropertyField('BaseDocumentValueLineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.baseDocumentValueLineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentValueLineTotalFc = new core_1.ComplexTypeNumberPropertyField('BaseDocumentValueLineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.allocatedUnitCostsLineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allocatedUnitCostsLineTotal = new core_1.ComplexTypeNumberPropertyField('AllocatedUnitCostsLineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.allocatedUnitCostsLineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allocatedUnitCostsLineTotalFc = new core_1.ComplexTypeNumberPropertyField('AllocatedUnitCostsLineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsValue = new core_1.ComplexTypeNumberPropertyField('CustomsValue', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsValueFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsValueFc = new core_1.ComplexTypeNumberPropertyField('CustomsValueFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.totalCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalCosts = new core_1.ComplexTypeNumberPropertyField('TotalCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.totalCostsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalCostsFc = new core_1.ComplexTypeNumberPropertyField('TotalCostsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.totalVolume]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalVolume = new core_1.ComplexTypeNumberPropertyField('TotalVolume', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new core_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.totalLineProjectedCustoms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalLineProjectedCustoms = new core_1.ComplexTypeNumberPropertyField('TotalLineProjectedCustoms', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.allocatedCostsLineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allocatedCostsLineTotal = new core_1.ComplexTypeNumberPropertyField('AllocatedCostsLineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.foBandIncludedCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foBandIncludedCosts = new core_1.ComplexTypeNumberPropertyField('FOBandIncludedCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.foBandIncludedCostsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foBandIncludedCostsFc = new core_1.ComplexTypeNumberPropertyField('FOBandIncludedCostsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new core_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new core_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.automaticExpenditure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.automaticExpenditure = new core_1.ComplexTypeEnumPropertyField('AutomaticExpenditure', _this);
        /**
         * Representation of the [[LandedCostItemLine.inventoryValuation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryValuation = new core_1.ComplexTypeEnumPropertyField('InventoryValuation', _this);
        /**
         * Representation of the [[LandedCostItemLine.originLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originLine = new core_1.ComplexTypeNumberPropertyField('OriginLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.customsGroupRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsGroupRate = new core_1.ComplexTypeNumberPropertyField('CustomsGroupRate', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new core_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.vatPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatPercent = new core_1.ComplexTypeNumberPropertyField('VatPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.exciseSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exciseSum = new core_1.ComplexTypeNumberPropertyField('ExciseSum', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.exciseSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exciseSumFc = new core_1.ComplexTypeNumberPropertyField('ExciseSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.exciseAffectStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exciseAffectStock = new core_1.ComplexTypeEnumPropertyField('ExciseAffectStock', _this);
        /**
         * Representation of the [[LandedCostItemLine.customsCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsCost = new core_1.ComplexTypeNumberPropertyField('CustomsCost', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsCostFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsCostFc = new core_1.ComplexTypeNumberPropertyField('CustomsCostFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsAffectStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsAffectStock = new core_1.ComplexTypeEnumPropertyField('CustomsAffectStock', _this);
        /**
         * Representation of the [[LandedCostItemLine.customsVat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsVat = new core_1.ComplexTypeNumberPropertyField('CustomsVat', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsVatFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsVatFc = new core_1.ComplexTypeNumberPropertyField('CustomsVatFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsVatAffectStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsVatAffectStock = new core_1.ComplexTypeEnumPropertyField('CustomsVatAffectStock', _this);
        /**
         * Representation of the [[LandedCostItemLine.ccdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ccdNumber = new core_1.ComplexTypeStringPropertyField('CCDNumber', _this, 'Edm.String');
        return _this;
    }
    return LandedCostItemLineField;
}(core_1.ComplexTypeField));
exports.LandedCostItemLineField = LandedCostItemLineField;
var LandedCostItemLine;
(function (LandedCostItemLine) {
    /**
     * Metadata information on all properties of the `LandedCostItemLine` complex type.
     */
    LandedCostItemLine._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocumentType',
            name: 'baseDocumentType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BaseEntry',
            name: 'baseEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Number',
            name: 'number',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemDescription',
            name: 'itemDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseDocumentPrice',
            name: 'baseDocumentPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ProjectedCustoms',
            name: 'projectedCustoms',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ProjectedCustomsFC',
            name: 'projectedCustomsFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Expenditure',
            name: 'expenditure',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ExpenditureFC',
            name: 'expenditureFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WarehousePrice',
            name: 'warehousePrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WarehousePriceFC',
            name: 'warehousePriceFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineTotal',
            name: 'lineTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineTotalFC',
            name: 'lineTotalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Volume',
            name: 'volume',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VolumeUoM',
            name: 'volumeUoM',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Weight1',
            name: 'weight1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Weight1UnitCode',
            name: 'weight1UnitCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Weight2',
            name: 'weight2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Weight2UnitCode',
            name: 'weight2UnitCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'VendorCode',
            name: 'vendorCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Reference',
            name: 'reference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FactorWithoutCustoms',
            name: 'factorWithoutCustoms',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FactorWithCustoms',
            name: 'factorWithCustoms',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InventoryUoM',
            name: 'inventoryUoM',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BlockNumber',
            name: 'blockNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ImportLog',
            name: 'importLog',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OriginalWarehouse',
            name: 'originalWarehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Warehouse',
            name: 'warehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReleaseNumber',
            name: 'releaseNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'VariantCosts',
            name: 'variantCosts',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FixCosts',
            name: 'fixCosts',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VariantCostsFC',
            name: 'variantCostsFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FixCostsFC',
            name: 'fixCostsFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Customs',
            name: 'customs',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CustomsFC',
            name: 'customsFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseDocumentValueLineTotal',
            name: 'baseDocumentValueLineTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseDocumentValueLineTotalFC',
            name: 'baseDocumentValueLineTotalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AllocatedUnitCostsLineTotal',
            name: 'allocatedUnitCostsLineTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AllocatedUnitCostsLineTotalFC',
            name: 'allocatedUnitCostsLineTotalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CustomsValue',
            name: 'customsValue',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CustomsValueFC',
            name: 'customsValueFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalCosts',
            name: 'totalCosts',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalCostsFC',
            name: 'totalCostsFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalVolume',
            name: 'totalVolume',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseLine',
            name: 'baseLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TotalLineProjectedCustoms',
            name: 'totalLineProjectedCustoms',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AllocatedCostsLineTotal',
            name: 'allocatedCostsLineTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FOBandIncludedCosts',
            name: 'foBandIncludedCosts',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FOBandIncludedCostsFC',
            name: 'foBandIncludedCostsFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Project',
            name: 'project',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule',
            name: 'distributionRule',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule2',
            name: 'distributionRule2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule3',
            name: 'distributionRule3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule4',
            name: 'distributionRule4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule5',
            name: 'distributionRule5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PriceList',
            name: 'priceList',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AutomaticExpenditure',
            name: 'automaticExpenditure',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'InventoryValuation',
            name: 'inventoryValuation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'OriginLine',
            name: 'originLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomsGroupRate',
            name: 'customsGroupRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VatGroup',
            name: 'vatGroup',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VatPercent',
            name: 'vatPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ExciseSum',
            name: 'exciseSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ExciseSumFC',
            name: 'exciseSumFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ExciseAffectStock',
            name: 'exciseAffectStock',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CustomsCost',
            name: 'customsCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CustomsCostFC',
            name: 'customsCostFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CustomsAffectStock',
            name: 'customsAffectStock',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CustomsVat',
            name: 'customsVat',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CustomsVatFC',
            name: 'customsVatFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CustomsVatAffectStock',
            name: 'customsVatAffectStock',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CCDNumber',
            name: 'ccdNumber',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, LandedCostItemLine);
    }
    LandedCostItemLine.build = build;
})(LandedCostItemLine = exports.LandedCostItemLine || (exports.LandedCostItemLine = {}));
//# sourceMappingURL=LandedCostItemLine.js.map