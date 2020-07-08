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
exports.InventoryPostingLine = exports.InventoryPostingLineField = exports.createInventoryPostingLine = void 0;
var InventoryPostingLineUoM_1 = require("./InventoryPostingLineUoM");
var InventoryPostingSerialNumber_1 = require("./InventoryPostingSerialNumber");
var InventoryPostingBatchNumber_1 = require("./InventoryPostingBatchNumber");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function InventoryPostingLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InventoryPostingLine.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.binEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.binEntry = new v4_1.ComplexTypeNumberPropertyField('BinEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.inWarehouseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inWarehouseQuantity = new v4_1.ComplexTypeNumberPropertyField('InWarehouseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new v4_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.variance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variance = new v4_1.ComplexTypeNumberPropertyField('Variance', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.variancePercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variancePercentage = new v4_1.ComplexTypeNumberPropertyField('VariancePercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.countedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countedQuantity = new v4_1.ComplexTypeNumberPropertyField('CountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new v4_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new v4_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.countDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countDate = new v4_1.ComplexTypeDatePropertyField('CountDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InventoryPostingLine.countTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countTime = new v4_1.ComplexTypeTimePropertyField('CountTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[InventoryPostingLine.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new v4_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new v4_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new v4_1.ComplexTypeNumberPropertyField('BaseType', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.baseReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseReference = new v4_1.ComplexTypeStringPropertyField('BaseReference', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.inventoryOffsetIncreaseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetIncreaseAccount = new v4_1.ComplexTypeStringPropertyField('InventoryOffsetIncreaseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.inventoryOffsetDecreaseAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOffsetDecreaseAccount = new v4_1.ComplexTypeStringPropertyField('InventoryOffsetDecreaseAccount', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new v4_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.manufacturer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturer = new v4_1.ComplexTypeNumberPropertyField('Manufacturer', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingLine.supplierCatalogNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplierCatalogNo = new v4_1.ComplexTypeStringPropertyField('SupplierCatalogNo', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.preferredVendor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.preferredVendor = new v4_1.ComplexTypeStringPropertyField('PreferredVendor', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new v4_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new v4_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new v4_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new v4_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new v4_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new v4_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryPostingLine.uoMCountedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCountedQuantity = new v4_1.ComplexTypeNumberPropertyField('UoMCountedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.itemsPerUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemsPerUnit = new v4_1.ComplexTypeNumberPropertyField('ItemsPerUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.actualPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualPrice = new v4_1.ComplexTypeNumberPropertyField('ActualPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.postedValueLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postedValueLc = new v4_1.ComplexTypeNumberPropertyField('PostedValueLC', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.postedValueSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postedValueSc = new v4_1.ComplexTypeNumberPropertyField('PostedValueSC', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryPostingLine.inventoryPostingLineUoMs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryPostingLineUoMs = new InventoryPostingLineUoM_1.InventoryPostingLineUoMField('InventoryPostingLineUoMs', _this);
        /**
         * Representation of the [[InventoryPostingLine.inventoryPostingSerialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryPostingSerialNumbers = new InventoryPostingSerialNumber_1.InventoryPostingSerialNumberField('InventoryPostingSerialNumbers', _this);
        /**
         * Representation of the [[InventoryPostingLine.inventoryPostingBatchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryPostingBatchNumbers = new InventoryPostingBatchNumber_1.InventoryPostingBatchNumberField('InventoryPostingBatchNumbers', _this);
        return _this;
    }
    return InventoryPostingLineField;
}(v4_1.ComplexTypeField));
exports.InventoryPostingLineField = InventoryPostingLineField;
var InventoryPostingLine;
(function (InventoryPostingLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            BinEntry: function (binEntry) { return ({ binEntry: v4_1.edmToTs(binEntry, 'Edm.Int32') }); },
            InWarehouseQuantity: function (inWarehouseQuantity) { return ({ inWarehouseQuantity: v4_1.edmToTs(inWarehouseQuantity, 'Edm.Double') }); },
            BarCode: function (barCode) { return ({ barCode: v4_1.edmToTs(barCode, 'Edm.String') }); },
            Variance: function (variance) { return ({ variance: v4_1.edmToTs(variance, 'Edm.Double') }); },
            VariancePercentage: function (variancePercentage) { return ({ variancePercentage: v4_1.edmToTs(variancePercentage, 'Edm.Double') }); },
            CountedQuantity: function (countedQuantity) { return ({ countedQuantity: v4_1.edmToTs(countedQuantity, 'Edm.Double') }); },
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            Total: function (total) { return ({ total: v4_1.edmToTs(total, 'Edm.Double') }); },
            VisualOrder: function (visualOrder) { return ({ visualOrder: v4_1.edmToTs(visualOrder, 'Edm.Int32') }); },
            CountDate: function (countDate) { return ({ countDate: v4_1.edmToTs(countDate, 'Edm.DateTimeOffset') }); },
            CountTime: function (countTime) { return ({ countTime: v4_1.edmToTs(countTime, 'Edm.TimeOfDay') }); },
            BaseEntry: function (baseEntry) { return ({ baseEntry: v4_1.edmToTs(baseEntry, 'Edm.Int32') }); },
            BaseLine: function (baseLine) { return ({ baseLine: v4_1.edmToTs(baseLine, 'Edm.Int32') }); },
            BaseType: function (baseType) { return ({ baseType: v4_1.edmToTs(baseType, 'Edm.Int32') }); },
            BaseReference: function (baseReference) { return ({ baseReference: v4_1.edmToTs(baseReference, 'Edm.String') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            InventoryOffsetIncreaseAccount: function (inventoryOffsetIncreaseAccount) { return ({ inventoryOffsetIncreaseAccount: v4_1.edmToTs(inventoryOffsetIncreaseAccount, 'Edm.String') }); },
            InventoryOffsetDecreaseAccount: function (inventoryOffsetDecreaseAccount) { return ({ inventoryOffsetDecreaseAccount: v4_1.edmToTs(inventoryOffsetDecreaseAccount, 'Edm.String') }); },
            ProjectCode: function (projectCode) { return ({ projectCode: v4_1.edmToTs(projectCode, 'Edm.String') }); },
            Manufacturer: function (manufacturer) { return ({ manufacturer: v4_1.edmToTs(manufacturer, 'Edm.Int32') }); },
            SupplierCatalogNo: function (supplierCatalogNo) { return ({ supplierCatalogNo: v4_1.edmToTs(supplierCatalogNo, 'Edm.String') }); },
            PreferredVendor: function (preferredVendor) { return ({ preferredVendor: v4_1.edmToTs(preferredVendor, 'Edm.String') }); },
            CostingCode: function (costingCode) { return ({ costingCode: v4_1.edmToTs(costingCode, 'Edm.String') }); },
            CostingCode2: function (costingCode2) { return ({ costingCode2: v4_1.edmToTs(costingCode2, 'Edm.String') }); },
            CostingCode3: function (costingCode3) { return ({ costingCode3: v4_1.edmToTs(costingCode3, 'Edm.String') }); },
            CostingCode4: function (costingCode4) { return ({ costingCode4: v4_1.edmToTs(costingCode4, 'Edm.String') }); },
            CostingCode5: function (costingCode5) { return ({ costingCode5: v4_1.edmToTs(costingCode5, 'Edm.String') }); },
            UoMCode: function (uoMCode) { return ({ uoMCode: v4_1.edmToTs(uoMCode, 'Edm.String') }); },
            UoMCountedQuantity: function (uoMCountedQuantity) { return ({ uoMCountedQuantity: v4_1.edmToTs(uoMCountedQuantity, 'Edm.Double') }); },
            ItemsPerUnit: function (itemsPerUnit) { return ({ itemsPerUnit: v4_1.edmToTs(itemsPerUnit, 'Edm.Double') }); },
            ActualPrice: function (actualPrice) { return ({ actualPrice: v4_1.edmToTs(actualPrice, 'Edm.Double') }); },
            PostedValueLC: function (postedValueLc) { return ({ postedValueLc: v4_1.edmToTs(postedValueLc, 'Edm.Double') }); },
            PostedValueSC: function (postedValueSc) { return ({ postedValueSc: v4_1.edmToTs(postedValueSc, 'Edm.Double') }); },
            InventoryPostingLineUoMs: function (inventoryPostingLineUoMs) { return ({ inventoryPostingLineUoMs: InventoryPostingLineUoM_1.InventoryPostingLineUoM.build(inventoryPostingLineUoMs) }); },
            InventoryPostingSerialNumbers: function (inventoryPostingSerialNumbers) { return ({ inventoryPostingSerialNumbers: InventoryPostingSerialNumber_1.InventoryPostingSerialNumber.build(inventoryPostingSerialNumbers) }); },
            InventoryPostingBatchNumbers: function (inventoryPostingBatchNumbers) { return ({ inventoryPostingBatchNumbers: InventoryPostingBatchNumber_1.InventoryPostingBatchNumber.build(inventoryPostingBatchNumbers) }); }
        });
    }
    InventoryPostingLine.build = build;
})(InventoryPostingLine = exports.InventoryPostingLine || (exports.InventoryPostingLine = {}));
//# sourceMappingURL=InventoryPostingLine.js.map