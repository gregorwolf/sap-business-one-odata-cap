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
exports.InventoryOpeningBalanceLine = exports.InventoryOpeningBalanceLineField = exports.createInventoryOpeningBalanceLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryOpeningBalanceSerialNumber_1 = require("./InventoryOpeningBalanceSerialNumber");
var InventoryOpeningBalanceBatchNumber_1 = require("./InventoryOpeningBalanceBatchNumber");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InventoryOpeningBalanceLine.build]] instead.
 */
function createInventoryOpeningBalanceLine(json) {
    return InventoryOpeningBalanceLine.build(json);
}
exports.createInventoryOpeningBalanceLine = createInventoryOpeningBalanceLine;
/**
 * InventoryOpeningBalanceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryOpeningBalanceLineField = /** @class */ (function (_super) {
    __extends(InventoryOpeningBalanceLineField, _super);
    /**
     * Creates an instance of InventoryOpeningBalanceLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InventoryOpeningBalanceLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InventoryOpeningBalanceLine) || this;
        /**
         * Representation of the [[InventoryOpeningBalanceLine.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.binEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.binEntry = new core_1.ComplexTypeNumberPropertyField('BinEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.inWarehouseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inWarehouseQuantity = new core_1.ComplexTypeNumberPropertyField('InWarehouseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.openingBalance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openingBalance = new core_1.ComplexTypeNumberPropertyField('OpeningBalance', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new core_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new core_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new core_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.openInventoryAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openInventoryAccount = new core_1.ComplexTypeStringPropertyField('OpenInventoryAccount', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new core_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.manufacturer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturer = new core_1.ComplexTypeNumberPropertyField('Manufacturer', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.supplierCatalogNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplierCatalogNo = new core_1.ComplexTypeStringPropertyField('SupplierCatalogNo', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new core_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new core_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new core_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new core_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new core_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.preferredVendor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.preferredVendor = new core_1.ComplexTypeStringPropertyField('PreferredVendor', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.allowBinNegativeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowBinNegativeQuantity = new core_1.ComplexTypeEnumPropertyField('AllowBinNegativeQuantity', _this);
        /**
         * Representation of the [[InventoryOpeningBalanceLine.actualPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualPrice = new core_1.ComplexTypeNumberPropertyField('ActualPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.postedValueLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postedValueLc = new core_1.ComplexTypeNumberPropertyField('PostedValueLC', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.postedValueSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postedValueSc = new core_1.ComplexTypeNumberPropertyField('PostedValueSC', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.inventoryOpeningBalanceSerialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOpeningBalanceSerialNumbers = new core_1.CollectionField('InventoryOpeningBalanceSerialNumbers', _this, InventoryOpeningBalanceSerialNumber_1.InventoryOpeningBalanceSerialNumber);
        /**
         * Representation of the [[InventoryOpeningBalanceLine.inventoryOpeningBalanceBatchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOpeningBalanceBatchNumbers = new core_1.CollectionField('InventoryOpeningBalanceBatchNumbers', _this, InventoryOpeningBalanceBatchNumber_1.InventoryOpeningBalanceBatchNumber);
        return _this;
    }
    return InventoryOpeningBalanceLineField;
}(core_1.ComplexTypeField));
exports.InventoryOpeningBalanceLineField = InventoryOpeningBalanceLineField;
var InventoryOpeningBalanceLine;
(function (InventoryOpeningBalanceLine) {
    /**
     * Metadata information on all properties of the `InventoryOpeningBalanceLine` complex type.
     */
    InventoryOpeningBalanceLine._propertyMetadata = [{
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
            originalName: 'OpeningBalance',
            name: 'openingBalance',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BarCode',
            name: 'barCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VisualOrder',
            name: 'visualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Price',
            name: 'price',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Total',
            name: 'total',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OpenInventoryAccount',
            name: 'openInventoryAccount',
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
            originalName: 'PreferredVendor',
            name: 'preferredVendor',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
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
            originalName: 'InventoryOpeningBalanceSerialNumbers',
            name: 'inventoryOpeningBalanceSerialNumbers',
            type: InventoryOpeningBalanceSerialNumber_1.InventoryOpeningBalanceSerialNumber,
            isCollection: true
        }, {
            originalName: 'InventoryOpeningBalanceBatchNumbers',
            name: 'inventoryOpeningBalanceBatchNumbers',
            type: InventoryOpeningBalanceBatchNumber_1.InventoryOpeningBalanceBatchNumber,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InventoryOpeningBalanceLine);
    }
    InventoryOpeningBalanceLine.build = build;
})(InventoryOpeningBalanceLine = exports.InventoryOpeningBalanceLine || (exports.InventoryOpeningBalanceLine = {}));
//# sourceMappingURL=InventoryOpeningBalanceLine.js.map