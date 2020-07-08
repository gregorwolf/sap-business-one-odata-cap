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
exports.StockTransferLine = exports.StockTransferLineField = exports.createStockTransferLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SerialNumber_1 = require("./SerialNumber");
var BatchNumber_1 = require("./BatchNumber");
var StockTransferLinesBinAllocation_1 = require("./StockTransferLinesBinAllocation");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[StockTransferLine.build]] instead.
 */
function createStockTransferLine(json) {
    return StockTransferLine.build(json);
}
exports.createStockTransferLine = createStockTransferLine;
/**
 * StockTransferLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var StockTransferLineField = /** @class */ (function (_super) {
    __extends(StockTransferLineField, _super);
    function StockTransferLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[StockTransferLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.discountPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountPercent = new v4_1.ComplexTypeNumberPropertyField('DiscountPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.vendorNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorNum = new v4_1.ComplexTypeStringPropertyField('VendorNum', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.serialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumber = new v4_1.ComplexTypeStringPropertyField('SerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.fromWarehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromWarehouseCode = new v4_1.ComplexTypeStringPropertyField('FromWarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new v4_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.factor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor = new v4_1.ComplexTypeNumberPropertyField('Factor', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.factor2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor2 = new v4_1.ComplexTypeNumberPropertyField('Factor2', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.factor3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor3 = new v4_1.ComplexTypeNumberPropertyField('Factor3', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.factor4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor4 = new v4_1.ComplexTypeNumberPropertyField('Factor4', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.measureUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.measureUnit = new v4_1.ComplexTypeStringPropertyField('MeasureUnit', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.unitsOfMeasurment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurment = new v4_1.ComplexTypeNumberPropertyField('UnitsOfMeasurment', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new v4_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new v4_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.unitPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitPrice = new v4_1.ComplexTypeNumberPropertyField('UnitPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new v4_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.inventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryQuantity = new v4_1.ComplexTypeNumberPropertyField('InventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.remainingOpenQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingOpenQuantity = new v4_1.ComplexTypeNumberPropertyField('RemainingOpenQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.remainingOpenInventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingOpenInventoryQuantity = new v4_1.ComplexTypeNumberPropertyField('RemainingOpenInventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.serialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumbers = new SerialNumber_1.SerialNumberField('SerialNumbers', _this);
        /**
         * Representation of the [[StockTransferLine.batchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumbers = new BatchNumber_1.BatchNumberField('BatchNumbers', _this);
        /**
         * Representation of the [[StockTransferLine.stockTransferLinesBinAllocations]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockTransferLinesBinAllocations = new StockTransferLinesBinAllocation_1.StockTransferLinesBinAllocationField('StockTransferLinesBinAllocations', _this);
        return _this;
    }
    return StockTransferLineField;
}(v4_1.ComplexTypeField));
exports.StockTransferLineField = StockTransferLineField;
var StockTransferLine;
(function (StockTransferLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); },
            DiscountPercent: function (discountPercent) { return ({ discountPercent: v4_1.edmToTs(discountPercent, 'Edm.Double') }); },
            VendorNum: function (vendorNum) { return ({ vendorNum: v4_1.edmToTs(vendorNum, 'Edm.String') }); },
            SerialNumber: function (serialNumber) { return ({ serialNumber: v4_1.edmToTs(serialNumber, 'Edm.String') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            FromWarehouseCode: function (fromWarehouseCode) { return ({ fromWarehouseCode: v4_1.edmToTs(fromWarehouseCode, 'Edm.String') }); },
            ProjectCode: function (projectCode) { return ({ projectCode: v4_1.edmToTs(projectCode, 'Edm.String') }); },
            Factor: function (factor) { return ({ factor: v4_1.edmToTs(factor, 'Edm.Double') }); },
            Factor2: function (factor2) { return ({ factor2: v4_1.edmToTs(factor2, 'Edm.Double') }); },
            Factor3: function (factor3) { return ({ factor3: v4_1.edmToTs(factor3, 'Edm.Double') }); },
            Factor4: function (factor4) { return ({ factor4: v4_1.edmToTs(factor4, 'Edm.Double') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); },
            MeasureUnit: function (measureUnit) { return ({ measureUnit: v4_1.edmToTs(measureUnit, 'Edm.String') }); },
            UnitsOfMeasurment: function (unitsOfMeasurment) { return ({ unitsOfMeasurment: v4_1.edmToTs(unitsOfMeasurment, 'Edm.Double') }); },
            BaseLine: function (baseLine) { return ({ baseLine: v4_1.edmToTs(baseLine, 'Edm.Int32') }); },
            BaseEntry: function (baseEntry) { return ({ baseEntry: v4_1.edmToTs(baseEntry, 'Edm.Int32') }); },
            UnitPrice: function (unitPrice) { return ({ unitPrice: v4_1.edmToTs(unitPrice, 'Edm.Double') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            UoMCode: function (uoMCode) { return ({ uoMCode: v4_1.edmToTs(uoMCode, 'Edm.String') }); },
            InventoryQuantity: function (inventoryQuantity) { return ({ inventoryQuantity: v4_1.edmToTs(inventoryQuantity, 'Edm.Double') }); },
            RemainingOpenQuantity: function (remainingOpenQuantity) { return ({ remainingOpenQuantity: v4_1.edmToTs(remainingOpenQuantity, 'Edm.Double') }); },
            RemainingOpenInventoryQuantity: function (remainingOpenInventoryQuantity) { return ({ remainingOpenInventoryQuantity: v4_1.edmToTs(remainingOpenInventoryQuantity, 'Edm.Double') }); },
            SerialNumbers: function (serialNumbers) { return ({ serialNumbers: SerialNumber_1.SerialNumber.build(serialNumbers) }); },
            BatchNumbers: function (batchNumbers) { return ({ batchNumbers: BatchNumber_1.BatchNumber.build(batchNumbers) }); },
            StockTransferLinesBinAllocations: function (stockTransferLinesBinAllocations) { return ({ stockTransferLinesBinAllocations: StockTransferLinesBinAllocation_1.StockTransferLinesBinAllocation.build(stockTransferLinesBinAllocations) }); }
        });
    }
    StockTransferLine.build = build;
})(StockTransferLine = exports.StockTransferLine || (exports.StockTransferLine = {}));
//# sourceMappingURL=StockTransferLine.js.map