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
exports.InventoryPostingLine = exports.InventoryPostingLineField = exports.createInventoryPostingLine = void 0;
var InventoryPostingLineUoM_1 = require("./InventoryPostingLineUoM");
var InventoryPostingSerialNumber_1 = require("./InventoryPostingSerialNumber");
var InventoryPostingBatchNumber_1 = require("./InventoryPostingBatchNumber");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingLine.build]] instead.
 */
function createInventoryPostingLine(json) {
    return InventoryPostingLine.build(json);
}
exports.createInventoryPostingLine = createInventoryPostingLine;
/**
 * InventoryPostingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryPostingLineField = /** @class */ (function (_super) {
    __extends(InventoryPostingLineField, _super);
    /**
     * Creates an instance of InventoryPostingLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InventoryPostingLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InventoryPostingLine) || this;
        /**
         * Representation of the [[InventoryPostingLine.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.binEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.binEntry = new core_1.ComplexTypeNumberPropertyField('BinEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.inWarehouseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inWarehouseQuantity = new core_1.ComplexTypeNumberPropertyField('InWarehouseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new core_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.variance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variance = new core_1.ComplexTypeNumberPropertyField('Variance', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.variancePercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variancePercentage = new core_1.ComplexTypeNumberPropertyField('VariancePercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.countedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countedQuantity = new core_1.ComplexTypeNumberPropertyField('CountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new core_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new core_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.countDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countDate = new core_1.ComplexTypeDatePropertyField('CountDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingLine.countTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countTime = new core_1.ComplexTypeTimePropertyField('CountTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[InventoryPostingLine.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new core_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new core_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new core_1.ComplexTypeNumberPropertyField('BaseType', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.baseReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseReference = new core_1.ComplexTypeStringPropertyField('BaseReference', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.inventoryOffsetIncreaseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetIncreaseAccount = new core_1.ComplexTypeStringPropertyField('InventoryOffsetIncreaseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.inventoryOffsetDecreaseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetDecreaseAccount = new core_1.ComplexTypeStringPropertyField('InventoryOffsetDecreaseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new core_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.manufacturer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturer = new core_1.ComplexTypeNumberPropertyField('Manufacturer', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.supplierCatalogNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplierCatalogNo = new core_1.ComplexTypeStringPropertyField('SupplierCatalogNo', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.preferredVendor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.preferredVendor = new core_1.ComplexTypeStringPropertyField('PreferredVendor', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new core_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new core_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new core_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new core_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new core_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new core_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.uoMCountedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCountedQuantity = new core_1.ComplexTypeNumberPropertyField('UoMCountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.itemsPerUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemsPerUnit = new core_1.ComplexTypeNumberPropertyField('ItemsPerUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.allowBinNegativeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowBinNegativeQuantity = new core_1.ComplexTypeEnumPropertyField('AllowBinNegativeQuantity', _this);
        /**
         * Representation of the [[InventoryPostingLine.actualPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualPrice = new core_1.ComplexTypeNumberPropertyField('ActualPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.postedValueLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postedValueLc = new core_1.ComplexTypeNumberPropertyField('PostedValueLC', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.postedValueSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postedValueSc = new core_1.ComplexTypeNumberPropertyField('PostedValueSC', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.inventoryPostingLineUoMs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryPostingLineUoMs = new core_1.CollectionField('InventoryPostingLineUoMs', _this, InventoryPostingLineUoM_1.InventoryPostingLineUoM);
        /**
         * Representation of the [[InventoryPostingLine.inventoryPostingSerialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryPostingSerialNumbers = new core_1.CollectionField('InventoryPostingSerialNumbers', _this, InventoryPostingSerialNumber_1.InventoryPostingSerialNumber);
        /**
         * Representation of the [[InventoryPostingLine.inventoryPostingBatchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryPostingBatchNumbers = new core_1.CollectionField('InventoryPostingBatchNumbers', _this, InventoryPostingBatchNumber_1.InventoryPostingBatchNumber);
        return _this;
    }
    return InventoryPostingLineField;
}(core_1.ComplexTypeField));
exports.InventoryPostingLineField = InventoryPostingLineField;
var InventoryPostingLine;
(function (InventoryPostingLine) {
    /**
     * Metadata information on all properties of the `InventoryPostingLine` complex type.
     */
    InventoryPostingLine._propertyMetadata = [{
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
            originalName: 'BarCode',
            name: 'barCode',
            type: 'Edm.String',
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
            originalName: 'CountedQuantity',
            name: 'countedQuantity',
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
            originalName: 'Total',
            name: 'total',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VisualOrder',
            name: 'visualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CountDate',
            name: 'countDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CountTime',
            name: 'countTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'BaseEntry',
            name: 'baseEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseLine',
            name: 'baseLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseType',
            name: 'baseType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseReference',
            name: 'baseReference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InventoryOffsetIncreaseAccount',
            name: 'inventoryOffsetIncreaseAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InventoryOffsetDecreaseAccount',
            name: 'inventoryOffsetDecreaseAccount',
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
            originalName: 'UoMCode',
            name: 'uoMCode',
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
            originalName: 'AllowBinNegativeQuantity',
            name: 'allowBinNegativeQuantity',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ActualPrice',
            name: 'actualPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PostedValueLC',
            name: 'postedValueLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PostedValueSC',
            name: 'postedValueSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InventoryPostingLineUoMs',
            name: 'inventoryPostingLineUoMs',
            type: InventoryPostingLineUoM_1.InventoryPostingLineUoM,
            isCollection: true
        }, {
            originalName: 'InventoryPostingSerialNumbers',
            name: 'inventoryPostingSerialNumbers',
            type: InventoryPostingSerialNumber_1.InventoryPostingSerialNumber,
            isCollection: true
        }, {
            originalName: 'InventoryPostingBatchNumbers',
            name: 'inventoryPostingBatchNumbers',
            type: InventoryPostingBatchNumber_1.InventoryPostingBatchNumber,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InventoryPostingLine);
    }
    InventoryPostingLine.build = build;
})(InventoryPostingLine = exports.InventoryPostingLine || (exports.InventoryPostingLine = {}));
//# sourceMappingURL=InventoryPostingLine.js.map