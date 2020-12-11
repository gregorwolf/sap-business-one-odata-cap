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
exports.StockTransferLine = exports.StockTransferLineField = exports.createStockTransferLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SerialNumber_1 = require("./SerialNumber");
var BatchNumber_1 = require("./BatchNumber");
var StockTransferLinesBinAllocation_1 = require("./StockTransferLinesBinAllocation");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of StockTransferLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function StockTransferLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, StockTransferLine) || this;
        /**
         * Representation of the [[StockTransferLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.discountPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountPercent = new core_1.ComplexTypeNumberPropertyField('DiscountPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.vendorNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorNum = new core_1.ComplexTypeStringPropertyField('VendorNum', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.serialNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumber = new core_1.ComplexTypeStringPropertyField('SerialNumber', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.fromWarehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromWarehouseCode = new core_1.ComplexTypeStringPropertyField('FromWarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new core_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.factor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor = new core_1.ComplexTypeNumberPropertyField('Factor', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.factor2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor2 = new core_1.ComplexTypeNumberPropertyField('Factor2', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.factor3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor3 = new core_1.ComplexTypeNumberPropertyField('Factor3', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.factor4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor4 = new core_1.ComplexTypeNumberPropertyField('Factor4', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.useBaseUnits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useBaseUnits = new core_1.ComplexTypeEnumPropertyField('UseBaseUnits', _this);
        /**
         * Representation of the [[StockTransferLine.measureUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.measureUnit = new core_1.ComplexTypeStringPropertyField('MeasureUnit', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.unitsOfMeasurment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurment = new core_1.ComplexTypeNumberPropertyField('UnitsOfMeasurment', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new core_1.ComplexTypeEnumPropertyField('BaseType', _this);
        /**
         * Representation of the [[StockTransferLine.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new core_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new core_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.unitPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitPrice = new core_1.ComplexTypeNumberPropertyField('UnitPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new core_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferLine.inventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryQuantity = new core_1.ComplexTypeNumberPropertyField('InventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.remainingOpenQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingOpenQuantity = new core_1.ComplexTypeNumberPropertyField('RemainingOpenQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.remainingOpenInventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingOpenInventoryQuantity = new core_1.ComplexTypeNumberPropertyField('RemainingOpenInventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLine.lineStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineStatus = new core_1.ComplexTypeEnumPropertyField('LineStatus', _this);
        /**
         * Representation of the [[StockTransferLine.serialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumbers = new core_1.CollectionField('SerialNumbers', _this, SerialNumber_1.SerialNumber);
        /**
         * Representation of the [[StockTransferLine.batchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumbers = new core_1.CollectionField('BatchNumbers', _this, BatchNumber_1.BatchNumber);
        /**
         * Representation of the [[StockTransferLine.stockTransferLinesBinAllocations]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockTransferLinesBinAllocations = new core_1.CollectionField('StockTransferLinesBinAllocations', _this, StockTransferLinesBinAllocation_1.StockTransferLinesBinAllocation);
        return _this;
    }
    return StockTransferLineField;
}(core_1.ComplexTypeField));
exports.StockTransferLineField = StockTransferLineField;
var StockTransferLine;
(function (StockTransferLine) {
    /**
     * Metadata information on all properties of the `StockTransferLine` complex type.
     */
    StockTransferLine._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
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
            originalName: 'Price',
            name: 'price',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DiscountPercent',
            name: 'discountPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VendorNum',
            name: 'vendorNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SerialNumber',
            name: 'serialNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FromWarehouseCode',
            name: 'fromWarehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProjectCode',
            name: 'projectCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Factor',
            name: 'factor',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor2',
            name: 'factor2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor3',
            name: 'factor3',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor4',
            name: 'factor4',
            type: 'Edm.Double',
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
            originalName: 'UseBaseUnits',
            name: 'useBaseUnits',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'MeasureUnit',
            name: 'measureUnit',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UnitsOfMeasurment',
            name: 'unitsOfMeasurment',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseType',
            name: 'baseType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BaseLine',
            name: 'baseLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseEntry',
            name: 'baseEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UnitPrice',
            name: 'unitPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UoMCode',
            name: 'uoMCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InventoryQuantity',
            name: 'inventoryQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'RemainingOpenQuantity',
            name: 'remainingOpenQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'RemainingOpenInventoryQuantity',
            name: 'remainingOpenInventoryQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineStatus',
            name: 'lineStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SerialNumbers',
            name: 'serialNumbers',
            type: SerialNumber_1.SerialNumber,
            isCollection: true
        }, {
            originalName: 'BatchNumbers',
            name: 'batchNumbers',
            type: BatchNumber_1.BatchNumber,
            isCollection: true
        }, {
            originalName: 'StockTransferLinesBinAllocations',
            name: 'stockTransferLinesBinAllocations',
            type: StockTransferLinesBinAllocation_1.StockTransferLinesBinAllocation,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, StockTransferLine);
    }
    StockTransferLine.build = build;
})(StockTransferLine = exports.StockTransferLine || (exports.StockTransferLine = {}));
//# sourceMappingURL=StockTransferLine.js.map