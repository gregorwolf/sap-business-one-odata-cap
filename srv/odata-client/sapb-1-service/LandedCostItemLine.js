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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandedCostItemLine = exports.LandedCostItemLineField = exports.createLandedCostItemLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function LandedCostItemLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[LandedCostItemLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new v4_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.number]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.number = new v4_1.ComplexTypeStringPropertyField('Number', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.baseDocumentPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentPrice = new v4_1.ComplexTypeNumberPropertyField('BaseDocumentPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.projectedCustoms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectedCustoms = new v4_1.ComplexTypeNumberPropertyField('ProjectedCustoms', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.projectedCustomsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectedCustomsFc = new v4_1.ComplexTypeNumberPropertyField('ProjectedCustomsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.expenditure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenditure = new v4_1.ComplexTypeNumberPropertyField('Expenditure', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.expenditureFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenditureFc = new v4_1.ComplexTypeNumberPropertyField('ExpenditureFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.warehousePrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehousePrice = new v4_1.ComplexTypeNumberPropertyField('WarehousePrice', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.warehousePriceFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehousePriceFc = new v4_1.ComplexTypeNumberPropertyField('WarehousePriceFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new v4_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.lineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotalFc = new v4_1.ComplexTypeNumberPropertyField('LineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.volume]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volume = new v4_1.ComplexTypeNumberPropertyField('Volume', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.volumeUoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volumeUoM = new v4_1.ComplexTypeNumberPropertyField('VolumeUoM', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.weight1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1 = new v4_1.ComplexTypeNumberPropertyField('Weight1', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.weight1UnitCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1UnitCode = new v4_1.ComplexTypeNumberPropertyField('Weight1UnitCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.weight2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2 = new v4_1.ComplexTypeNumberPropertyField('Weight2', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.weight2UnitCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2UnitCode = new v4_1.ComplexTypeNumberPropertyField('Weight2UnitCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.vendorCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorCode = new v4_1.ComplexTypeStringPropertyField('VendorCode', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.reference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference = new v4_1.ComplexTypeStringPropertyField('Reference', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.factorWithoutCustoms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorWithoutCustoms = new v4_1.ComplexTypeNumberPropertyField('FactorWithoutCustoms', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.factorWithCustoms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorWithCustoms = new v4_1.ComplexTypeNumberPropertyField('FactorWithCustoms', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.inventoryUoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryUoM = new v4_1.ComplexTypeStringPropertyField('InventoryUoM', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.blockNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockNumber = new v4_1.ComplexTypeStringPropertyField('BlockNumber', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.importLog]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importLog = new v4_1.ComplexTypeStringPropertyField('ImportLog', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.originalWarehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originalWarehouse = new v4_1.ComplexTypeStringPropertyField('OriginalWarehouse', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new v4_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.releaseNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.releaseNumber = new v4_1.ComplexTypeNumberPropertyField('ReleaseNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.variantCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variantCosts = new v4_1.ComplexTypeNumberPropertyField('VariantCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.fixCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fixCosts = new v4_1.ComplexTypeNumberPropertyField('FixCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.variantCostsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variantCostsFc = new v4_1.ComplexTypeNumberPropertyField('VariantCostsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.fixCostsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fixCostsFc = new v4_1.ComplexTypeNumberPropertyField('FixCostsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customs = new v4_1.ComplexTypeNumberPropertyField('Customs', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsFc = new v4_1.ComplexTypeNumberPropertyField('CustomsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.baseDocumentValueLineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentValueLineTotal = new v4_1.ComplexTypeNumberPropertyField('BaseDocumentValueLineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.baseDocumentValueLineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentValueLineTotalFc = new v4_1.ComplexTypeNumberPropertyField('BaseDocumentValueLineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.allocatedUnitCostsLineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allocatedUnitCostsLineTotal = new v4_1.ComplexTypeNumberPropertyField('AllocatedUnitCostsLineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.allocatedUnitCostsLineTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allocatedUnitCostsLineTotalFc = new v4_1.ComplexTypeNumberPropertyField('AllocatedUnitCostsLineTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsValue = new v4_1.ComplexTypeNumberPropertyField('CustomsValue', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsValueFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsValueFc = new v4_1.ComplexTypeNumberPropertyField('CustomsValueFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.totalCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalCosts = new v4_1.ComplexTypeNumberPropertyField('TotalCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.totalCostsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalCostsFc = new v4_1.ComplexTypeNumberPropertyField('TotalCostsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.totalVolume]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalVolume = new v4_1.ComplexTypeNumberPropertyField('TotalVolume', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new v4_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.totalLineProjectedCustoms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalLineProjectedCustoms = new v4_1.ComplexTypeNumberPropertyField('TotalLineProjectedCustoms', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.allocatedCostsLineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allocatedCostsLineTotal = new v4_1.ComplexTypeNumberPropertyField('AllocatedCostsLineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.foBandIncludedCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foBandIncludedCosts = new v4_1.ComplexTypeNumberPropertyField('FOBandIncludedCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.foBandIncludedCostsFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.foBandIncludedCostsFc = new v4_1.ComplexTypeNumberPropertyField('FOBandIncludedCostsFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new v4_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new v4_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.originLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originLine = new v4_1.ComplexTypeNumberPropertyField('OriginLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[LandedCostItemLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.customsGroupRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsGroupRate = new v4_1.ComplexTypeNumberPropertyField('CustomsGroupRate', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new v4_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[LandedCostItemLine.vatPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatPercent = new v4_1.ComplexTypeNumberPropertyField('VatPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.exciseSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exciseSum = new v4_1.ComplexTypeNumberPropertyField('ExciseSum', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.exciseSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exciseSumFc = new v4_1.ComplexTypeNumberPropertyField('ExciseSumFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsCost = new v4_1.ComplexTypeNumberPropertyField('CustomsCost', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsCostFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsCostFc = new v4_1.ComplexTypeNumberPropertyField('CustomsCostFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsVat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsVat = new v4_1.ComplexTypeNumberPropertyField('CustomsVat', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.customsVatFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsVatFc = new v4_1.ComplexTypeNumberPropertyField('CustomsVatFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LandedCostItemLine.ccdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ccdNumber = new v4_1.ComplexTypeStringPropertyField('CCDNumber', _this, 'Edm.String');
        return _this;
    }
    return LandedCostItemLineField;
}(v4_1.ComplexTypeField));
exports.LandedCostItemLineField = LandedCostItemLineField;
var LandedCostItemLine;
(function (LandedCostItemLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            BaseEntry: function (baseEntry) { return ({ baseEntry: v4_1.edmToTs(baseEntry, 'Edm.Int32') }); },
            Number: function (number) { return ({ number: v4_1.edmToTs(number, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            BaseDocumentPrice: function (baseDocumentPrice) { return ({ baseDocumentPrice: v4_1.edmToTs(baseDocumentPrice, 'Edm.Double') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); },
            ProjectedCustoms: function (projectedCustoms) { return ({ projectedCustoms: v4_1.edmToTs(projectedCustoms, 'Edm.Double') }); },
            ProjectedCustomsFC: function (projectedCustomsFc) { return ({ projectedCustomsFc: v4_1.edmToTs(projectedCustomsFc, 'Edm.Double') }); },
            Expenditure: function (expenditure) { return ({ expenditure: v4_1.edmToTs(expenditure, 'Edm.Double') }); },
            ExpenditureFC: function (expenditureFc) { return ({ expenditureFc: v4_1.edmToTs(expenditureFc, 'Edm.Double') }); },
            WarehousePrice: function (warehousePrice) { return ({ warehousePrice: v4_1.edmToTs(warehousePrice, 'Edm.Double') }); },
            WarehousePriceFC: function (warehousePriceFc) { return ({ warehousePriceFc: v4_1.edmToTs(warehousePriceFc, 'Edm.Double') }); },
            LineTotal: function (lineTotal) { return ({ lineTotal: v4_1.edmToTs(lineTotal, 'Edm.Double') }); },
            LineTotalFC: function (lineTotalFc) { return ({ lineTotalFc: v4_1.edmToTs(lineTotalFc, 'Edm.Double') }); },
            Volume: function (volume) { return ({ volume: v4_1.edmToTs(volume, 'Edm.Double') }); },
            VolumeUoM: function (volumeUoM) { return ({ volumeUoM: v4_1.edmToTs(volumeUoM, 'Edm.Int32') }); },
            Weight1: function (weight1) { return ({ weight1: v4_1.edmToTs(weight1, 'Edm.Double') }); },
            Weight1UnitCode: function (weight1UnitCode) { return ({ weight1UnitCode: v4_1.edmToTs(weight1UnitCode, 'Edm.Int32') }); },
            Weight2: function (weight2) { return ({ weight2: v4_1.edmToTs(weight2, 'Edm.Double') }); },
            Weight2UnitCode: function (weight2UnitCode) { return ({ weight2UnitCode: v4_1.edmToTs(weight2UnitCode, 'Edm.Int32') }); },
            VendorCode: function (vendorCode) { return ({ vendorCode: v4_1.edmToTs(vendorCode, 'Edm.String') }); },
            Reference: function (reference) { return ({ reference: v4_1.edmToTs(reference, 'Edm.String') }); },
            FactorWithoutCustoms: function (factorWithoutCustoms) { return ({ factorWithoutCustoms: v4_1.edmToTs(factorWithoutCustoms, 'Edm.Double') }); },
            FactorWithCustoms: function (factorWithCustoms) { return ({ factorWithCustoms: v4_1.edmToTs(factorWithCustoms, 'Edm.Double') }); },
            InventoryUoM: function (inventoryUoM) { return ({ inventoryUoM: v4_1.edmToTs(inventoryUoM, 'Edm.String') }); },
            BlockNumber: function (blockNumber) { return ({ blockNumber: v4_1.edmToTs(blockNumber, 'Edm.String') }); },
            ImportLog: function (importLog) { return ({ importLog: v4_1.edmToTs(importLog, 'Edm.String') }); },
            OriginalWarehouse: function (originalWarehouse) { return ({ originalWarehouse: v4_1.edmToTs(originalWarehouse, 'Edm.String') }); },
            Warehouse: function (warehouse) { return ({ warehouse: v4_1.edmToTs(warehouse, 'Edm.String') }); },
            ReleaseNumber: function (releaseNumber) { return ({ releaseNumber: v4_1.edmToTs(releaseNumber, 'Edm.Int32') }); },
            VariantCosts: function (variantCosts) { return ({ variantCosts: v4_1.edmToTs(variantCosts, 'Edm.Double') }); },
            FixCosts: function (fixCosts) { return ({ fixCosts: v4_1.edmToTs(fixCosts, 'Edm.Double') }); },
            VariantCostsFC: function (variantCostsFc) { return ({ variantCostsFc: v4_1.edmToTs(variantCostsFc, 'Edm.Double') }); },
            FixCostsFC: function (fixCostsFc) { return ({ fixCostsFc: v4_1.edmToTs(fixCostsFc, 'Edm.Double') }); },
            Customs: function (customs) { return ({ customs: v4_1.edmToTs(customs, 'Edm.Double') }); },
            CustomsFC: function (customsFc) { return ({ customsFc: v4_1.edmToTs(customsFc, 'Edm.Double') }); },
            BaseDocumentValueLineTotal: function (baseDocumentValueLineTotal) { return ({ baseDocumentValueLineTotal: v4_1.edmToTs(baseDocumentValueLineTotal, 'Edm.Double') }); },
            BaseDocumentValueLineTotalFC: function (baseDocumentValueLineTotalFc) { return ({ baseDocumentValueLineTotalFc: v4_1.edmToTs(baseDocumentValueLineTotalFc, 'Edm.Double') }); },
            AllocatedUnitCostsLineTotal: function (allocatedUnitCostsLineTotal) { return ({ allocatedUnitCostsLineTotal: v4_1.edmToTs(allocatedUnitCostsLineTotal, 'Edm.Double') }); },
            AllocatedUnitCostsLineTotalFC: function (allocatedUnitCostsLineTotalFc) { return ({ allocatedUnitCostsLineTotalFc: v4_1.edmToTs(allocatedUnitCostsLineTotalFc, 'Edm.Double') }); },
            CustomsValue: function (customsValue) { return ({ customsValue: v4_1.edmToTs(customsValue, 'Edm.Double') }); },
            CustomsValueFC: function (customsValueFc) { return ({ customsValueFc: v4_1.edmToTs(customsValueFc, 'Edm.Double') }); },
            TotalCosts: function (totalCosts) { return ({ totalCosts: v4_1.edmToTs(totalCosts, 'Edm.Double') }); },
            TotalCostsFC: function (totalCostsFc) { return ({ totalCostsFc: v4_1.edmToTs(totalCostsFc, 'Edm.Double') }); },
            TotalVolume: function (totalVolume) { return ({ totalVolume: v4_1.edmToTs(totalVolume, 'Edm.Double') }); },
            BaseLine: function (baseLine) { return ({ baseLine: v4_1.edmToTs(baseLine, 'Edm.Int32') }); },
            TotalLineProjectedCustoms: function (totalLineProjectedCustoms) { return ({ totalLineProjectedCustoms: v4_1.edmToTs(totalLineProjectedCustoms, 'Edm.Double') }); },
            AllocatedCostsLineTotal: function (allocatedCostsLineTotal) { return ({ allocatedCostsLineTotal: v4_1.edmToTs(allocatedCostsLineTotal, 'Edm.Double') }); },
            FOBandIncludedCosts: function (foBandIncludedCosts) { return ({ foBandIncludedCosts: v4_1.edmToTs(foBandIncludedCosts, 'Edm.Double') }); },
            FOBandIncludedCostsFC: function (foBandIncludedCostsFc) { return ({ foBandIncludedCostsFc: v4_1.edmToTs(foBandIncludedCostsFc, 'Edm.Double') }); },
            Project: function (project) { return ({ project: v4_1.edmToTs(project, 'Edm.String') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); },
            PriceList: function (priceList) { return ({ priceList: v4_1.edmToTs(priceList, 'Edm.Int32') }); },
            OriginLine: function (originLine) { return ({ originLine: v4_1.edmToTs(originLine, 'Edm.Int32') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            CustomsGroupRate: function (customsGroupRate) { return ({ customsGroupRate: v4_1.edmToTs(customsGroupRate, 'Edm.Double') }); },
            VatGroup: function (vatGroup) { return ({ vatGroup: v4_1.edmToTs(vatGroup, 'Edm.String') }); },
            VatPercent: function (vatPercent) { return ({ vatPercent: v4_1.edmToTs(vatPercent, 'Edm.Double') }); },
            ExciseSum: function (exciseSum) { return ({ exciseSum: v4_1.edmToTs(exciseSum, 'Edm.Double') }); },
            ExciseSumFC: function (exciseSumFc) { return ({ exciseSumFc: v4_1.edmToTs(exciseSumFc, 'Edm.Double') }); },
            CustomsCost: function (customsCost) { return ({ customsCost: v4_1.edmToTs(customsCost, 'Edm.Double') }); },
            CustomsCostFC: function (customsCostFc) { return ({ customsCostFc: v4_1.edmToTs(customsCostFc, 'Edm.Double') }); },
            CustomsVat: function (customsVat) { return ({ customsVat: v4_1.edmToTs(customsVat, 'Edm.Double') }); },
            CustomsVatFC: function (customsVatFc) { return ({ customsVatFc: v4_1.edmToTs(customsVatFc, 'Edm.Double') }); },
            CCDNumber: function (ccdNumber) { return ({ ccdNumber: v4_1.edmToTs(ccdNumber, 'Edm.String') }); }
        });
    }
    LandedCostItemLine.build = build;
})(LandedCostItemLine = exports.LandedCostItemLine || (exports.LandedCostItemLine = {}));
//# sourceMappingURL=LandedCostItemLine.js.map