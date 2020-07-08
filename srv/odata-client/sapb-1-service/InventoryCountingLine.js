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
exports.InventoryCountingLine = exports.InventoryCountingLineField = exports.createInventoryCountingLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryCountingLineUoM_1 = require("./InventoryCountingLineUoM");
var InventoryCountingSerialNumber_1 = require("./InventoryCountingSerialNumber");
var InventoryCountingBatchNumber_1 = require("./InventoryCountingBatchNumber");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function InventoryCountingLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InventoryCountingLine.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.binEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.binEntry = new v4_1.ComplexTypeNumberPropertyField('BinEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.inWarehouseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inWarehouseQuantity = new v4_1.ComplexTypeNumberPropertyField('InWarehouseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new v4_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new v4_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.uoMCountedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCountedQuantity = new v4_1.ComplexTypeNumberPropertyField('UoMCountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.itemsPerUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemsPerUnit = new v4_1.ComplexTypeNumberPropertyField('ItemsPerUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.countedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countedQuantity = new v4_1.ComplexTypeNumberPropertyField('CountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.variance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variance = new v4_1.ComplexTypeNumberPropertyField('Variance', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.variancePercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variancePercentage = new v4_1.ComplexTypeNumberPropertyField('VariancePercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryCountingLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new v4_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.targetEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetEntry = new v4_1.ComplexTypeNumberPropertyField('TargetEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.targetLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetLine = new v4_1.ComplexTypeNumberPropertyField('TargetLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.targetType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetType = new v4_1.ComplexTypeNumberPropertyField('TargetType', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.targetReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetReference = new v4_1.ComplexTypeStringPropertyField('TargetReference', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new v4_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.manufacturer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturer = new v4_1.ComplexTypeNumberPropertyField('Manufacturer', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.supplierCatalogNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplierCatalogNo = new v4_1.ComplexTypeStringPropertyField('SupplierCatalogNo', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.preferredVendor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.preferredVendor = new v4_1.ComplexTypeStringPropertyField('PreferredVendor', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new v4_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new v4_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new v4_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new v4_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new v4_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryCountingLine.counterId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterId = new v4_1.ComplexTypeNumberPropertyField('CounterID', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryCountingLine.inventoryCountingLineUoMs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingLineUoMs = new InventoryCountingLineUoM_1.InventoryCountingLineUoMField('InventoryCountingLineUoMs', _this);
        /**
         * Representation of the [[InventoryCountingLine.inventoryCountingSerialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingSerialNumbers = new InventoryCountingSerialNumber_1.InventoryCountingSerialNumberField('InventoryCountingSerialNumbers', _this);
        /**
         * Representation of the [[InventoryCountingLine.inventoryCountingBatchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingBatchNumbers = new InventoryCountingBatchNumber_1.InventoryCountingBatchNumberField('InventoryCountingBatchNumbers', _this);
        return _this;
    }
    return InventoryCountingLineField;
}(v4_1.ComplexTypeField));
exports.InventoryCountingLineField = InventoryCountingLineField;
var InventoryCountingLine;
(function (InventoryCountingLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            BinEntry: function (binEntry) { return ({ binEntry: v4_1.edmToTs(binEntry, 'Edm.Int32') }); },
            InWarehouseQuantity: function (inWarehouseQuantity) { return ({ inWarehouseQuantity: v4_1.edmToTs(inWarehouseQuantity, 'Edm.Double') }); },
            UoMCode: function (uoMCode) { return ({ uoMCode: v4_1.edmToTs(uoMCode, 'Edm.String') }); },
            BarCode: function (barCode) { return ({ barCode: v4_1.edmToTs(barCode, 'Edm.String') }); },
            UoMCountedQuantity: function (uoMCountedQuantity) { return ({ uoMCountedQuantity: v4_1.edmToTs(uoMCountedQuantity, 'Edm.Double') }); },
            ItemsPerUnit: function (itemsPerUnit) { return ({ itemsPerUnit: v4_1.edmToTs(itemsPerUnit, 'Edm.Double') }); },
            CountedQuantity: function (countedQuantity) { return ({ countedQuantity: v4_1.edmToTs(countedQuantity, 'Edm.Double') }); },
            Variance: function (variance) { return ({ variance: v4_1.edmToTs(variance, 'Edm.Double') }); },
            VariancePercentage: function (variancePercentage) { return ({ variancePercentage: v4_1.edmToTs(variancePercentage, 'Edm.Double') }); },
            VisualOrder: function (visualOrder) { return ({ visualOrder: v4_1.edmToTs(visualOrder, 'Edm.Int32') }); },
            TargetEntry: function (targetEntry) { return ({ targetEntry: v4_1.edmToTs(targetEntry, 'Edm.Int32') }); },
            TargetLine: function (targetLine) { return ({ targetLine: v4_1.edmToTs(targetLine, 'Edm.Int32') }); },
            TargetType: function (targetType) { return ({ targetType: v4_1.edmToTs(targetType, 'Edm.Int32') }); },
            TargetReference: function (targetReference) { return ({ targetReference: v4_1.edmToTs(targetReference, 'Edm.String') }); },
            ProjectCode: function (projectCode) { return ({ projectCode: v4_1.edmToTs(projectCode, 'Edm.String') }); },
            Manufacturer: function (manufacturer) { return ({ manufacturer: v4_1.edmToTs(manufacturer, 'Edm.Int32') }); },
            SupplierCatalogNo: function (supplierCatalogNo) { return ({ supplierCatalogNo: v4_1.edmToTs(supplierCatalogNo, 'Edm.String') }); },
            PreferredVendor: function (preferredVendor) { return ({ preferredVendor: v4_1.edmToTs(preferredVendor, 'Edm.String') }); },
            CostingCode: function (costingCode) { return ({ costingCode: v4_1.edmToTs(costingCode, 'Edm.String') }); },
            CostingCode2: function (costingCode2) { return ({ costingCode2: v4_1.edmToTs(costingCode2, 'Edm.String') }); },
            CostingCode3: function (costingCode3) { return ({ costingCode3: v4_1.edmToTs(costingCode3, 'Edm.String') }); },
            CostingCode4: function (costingCode4) { return ({ costingCode4: v4_1.edmToTs(costingCode4, 'Edm.String') }); },
            CostingCode5: function (costingCode5) { return ({ costingCode5: v4_1.edmToTs(costingCode5, 'Edm.String') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            CounterID: function (counterId) { return ({ counterId: v4_1.edmToTs(counterId, 'Edm.Int32') }); },
            InventoryCountingLineUoMs: function (inventoryCountingLineUoMs) { return ({ inventoryCountingLineUoMs: InventoryCountingLineUoM_1.InventoryCountingLineUoM.build(inventoryCountingLineUoMs) }); },
            InventoryCountingSerialNumbers: function (inventoryCountingSerialNumbers) { return ({ inventoryCountingSerialNumbers: InventoryCountingSerialNumber_1.InventoryCountingSerialNumber.build(inventoryCountingSerialNumbers) }); },
            InventoryCountingBatchNumbers: function (inventoryCountingBatchNumbers) { return ({ inventoryCountingBatchNumbers: InventoryCountingBatchNumber_1.InventoryCountingBatchNumber.build(inventoryCountingBatchNumbers) }); }
        });
    }
    InventoryCountingLine.build = build;
})(InventoryCountingLine = exports.InventoryCountingLine || (exports.InventoryCountingLine = {}));
//# sourceMappingURL=InventoryCountingLine.js.map