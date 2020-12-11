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
exports.InventoryCountingLine = exports.InventoryCountingLineField = exports.createInventoryCountingLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryCountingLineUoM_1 = require("./InventoryCountingLineUoM");
var InventoryCountingSerialNumber_1 = require("./InventoryCountingSerialNumber");
var InventoryCountingBatchNumber_1 = require("./InventoryCountingBatchNumber");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingLine.build]] instead.
 */
function createInventoryCountingLine(json) {
    return InventoryCountingLine.build(json);
}
exports.createInventoryCountingLine = createInventoryCountingLine;
/**
 * InventoryCountingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryCountingLineField = /** @class */ (function (_super) {
    __extends(InventoryCountingLineField, _super);
    /**
     * Creates an instance of InventoryCountingLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InventoryCountingLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InventoryCountingLine) || this;
        /**
         * Representation of the [[InventoryCountingLine.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.freeze]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeze = new core_1.ComplexTypeEnumPropertyField('Freeze', _this);
        /**
         * Representation of the [[InventoryCountingLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.binEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.binEntry = new core_1.ComplexTypeNumberPropertyField('BinEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.inWarehouseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inWarehouseQuantity = new core_1.ComplexTypeNumberPropertyField('InWarehouseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.counted]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counted = new core_1.ComplexTypeEnumPropertyField('Counted', _this);
        /**
         * Representation of the [[InventoryCountingLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new core_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new core_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.uoMCountedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCountedQuantity = new core_1.ComplexTypeNumberPropertyField('UoMCountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.itemsPerUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemsPerUnit = new core_1.ComplexTypeNumberPropertyField('ItemsPerUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.countedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countedQuantity = new core_1.ComplexTypeNumberPropertyField('CountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.variance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variance = new core_1.ComplexTypeNumberPropertyField('Variance', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.variancePercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variancePercentage = new core_1.ComplexTypeNumberPropertyField('VariancePercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new core_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.targetEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetEntry = new core_1.ComplexTypeNumberPropertyField('TargetEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.targetLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetLine = new core_1.ComplexTypeNumberPropertyField('TargetLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.targetType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetType = new core_1.ComplexTypeNumberPropertyField('TargetType', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.targetReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetReference = new core_1.ComplexTypeStringPropertyField('TargetReference', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new core_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.manufacturer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturer = new core_1.ComplexTypeNumberPropertyField('Manufacturer', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.supplierCatalogNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplierCatalogNo = new core_1.ComplexTypeStringPropertyField('SupplierCatalogNo', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.preferredVendor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.preferredVendor = new core_1.ComplexTypeStringPropertyField('PreferredVendor', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new core_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new core_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new core_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new core_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new core_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.lineStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineStatus = new core_1.ComplexTypeEnumPropertyField('LineStatus', _this);
        /**
         * Representation of the [[InventoryCountingLine.counterType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterType = new core_1.ComplexTypeEnumPropertyField('CounterType', _this);
        /**
         * Representation of the [[InventoryCountingLine.counterId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterId = new core_1.ComplexTypeNumberPropertyField('CounterID', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.multipleCounterRole]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.multipleCounterRole = new core_1.ComplexTypeEnumPropertyField('MultipleCounterRole', _this);
        /**
         * Representation of the [[InventoryCountingLine.inventoryCountingLineUoMs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingLineUoMs = new core_1.CollectionField('InventoryCountingLineUoMs', _this, InventoryCountingLineUoM_1.InventoryCountingLineUoM);
        /**
         * Representation of the [[InventoryCountingLine.inventoryCountingSerialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingSerialNumbers = new core_1.CollectionField('InventoryCountingSerialNumbers', _this, InventoryCountingSerialNumber_1.InventoryCountingSerialNumber);
        /**
         * Representation of the [[InventoryCountingLine.inventoryCountingBatchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingBatchNumbers = new core_1.CollectionField('InventoryCountingBatchNumbers', _this, InventoryCountingBatchNumber_1.InventoryCountingBatchNumber);
        return _this;
    }
    return InventoryCountingLineField;
}(core_1.ComplexTypeField));
exports.InventoryCountingLineField = InventoryCountingLineField;
var InventoryCountingLine;
(function (InventoryCountingLine) {
    /**
     * Metadata information on all properties of the `InventoryCountingLine` complex type.
     */
    InventoryCountingLine._propertyMetadata = [{
            originalName: 'DocumentEntry',
            name: 'documentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
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
            originalName: 'Freeze',
            name: 'freeze',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BinEntry',
            name: 'binEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'InWarehouseQuantity',
            name: 'inWarehouseQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Counted',
            name: 'counted',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UoMCode',
            name: 'uoMCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BarCode',
            name: 'barCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UoMCountedQuantity',
            name: 'uoMCountedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ItemsPerUnit',
            name: 'itemsPerUnit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CountedQuantity',
            name: 'countedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Variance',
            name: 'variance',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VariancePercentage',
            name: 'variancePercentage',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VisualOrder',
            name: 'visualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TargetEntry',
            name: 'targetEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TargetLine',
            name: 'targetLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TargetType',
            name: 'targetType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TargetReference',
            name: 'targetReference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProjectCode',
            name: 'projectCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Manufacturer',
            name: 'manufacturer',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SupplierCatalogNo',
            name: 'supplierCatalogNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PreferredVendor',
            name: 'preferredVendor',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostingCode',
            name: 'costingCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostingCode2',
            name: 'costingCode2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostingCode3',
            name: 'costingCode3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostingCode4',
            name: 'costingCode4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostingCode5',
            name: 'costingCode5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineStatus',
            name: 'lineStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CounterType',
            name: 'counterType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CounterID',
            name: 'counterId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'MultipleCounterRole',
            name: 'multipleCounterRole',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'InventoryCountingLineUoMs',
            name: 'inventoryCountingLineUoMs',
            type: InventoryCountingLineUoM_1.InventoryCountingLineUoM,
            isCollection: true
        }, {
            originalName: 'InventoryCountingSerialNumbers',
            name: 'inventoryCountingSerialNumbers',
            type: InventoryCountingSerialNumber_1.InventoryCountingSerialNumber,
            isCollection: true
        }, {
            originalName: 'InventoryCountingBatchNumbers',
            name: 'inventoryCountingBatchNumbers',
            type: InventoryCountingBatchNumber_1.InventoryCountingBatchNumber,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InventoryCountingLine);
    }
    InventoryCountingLine.build = build;
})(InventoryCountingLine = exports.InventoryCountingLine || (exports.InventoryCountingLine = {}));
//# sourceMappingURL=InventoryCountingLine.js.map