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
exports.InventoryOpeningBalanceLine = exports.InventoryOpeningBalanceLineField = exports.createInventoryOpeningBalanceLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryOpeningBalanceSerialNumber_1 = require("./InventoryOpeningBalanceSerialNumber");
var InventoryOpeningBalanceBatchNumber_1 = require("./InventoryOpeningBalanceBatchNumber");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function InventoryOpeningBalanceLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InventoryOpeningBalanceLine.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.binEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.binEntry = new v4_1.ComplexTypeNumberPropertyField('BinEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.inWarehouseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inWarehouseQuantity = new v4_1.ComplexTypeNumberPropertyField('InWarehouseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.openingBalance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openingBalance = new v4_1.ComplexTypeNumberPropertyField('OpeningBalance', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new v4_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new v4_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new v4_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.openInventoryAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openInventoryAccount = new v4_1.ComplexTypeStringPropertyField('OpenInventoryAccount', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new v4_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.manufacturer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturer = new v4_1.ComplexTypeNumberPropertyField('Manufacturer', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.supplierCatalogNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplierCatalogNo = new v4_1.ComplexTypeStringPropertyField('SupplierCatalogNo', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new v4_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new v4_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new v4_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new v4_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new v4_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.preferredVendor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.preferredVendor = new v4_1.ComplexTypeStringPropertyField('PreferredVendor', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.actualPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualPrice = new v4_1.ComplexTypeNumberPropertyField('ActualPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.postedValueLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postedValueLc = new v4_1.ComplexTypeNumberPropertyField('PostedValueLC', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.postedValueSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postedValueSc = new v4_1.ComplexTypeNumberPropertyField('PostedValueSC', _this, 'Edm.Double');
        /**
         * Representation of the [[InventoryOpeningBalanceLine.inventoryOpeningBalanceSerialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOpeningBalanceSerialNumbers = new InventoryOpeningBalanceSerialNumber_1.InventoryOpeningBalanceSerialNumberField('InventoryOpeningBalanceSerialNumbers', _this);
        /**
         * Representation of the [[InventoryOpeningBalanceLine.inventoryOpeningBalanceBatchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryOpeningBalanceBatchNumbers = new InventoryOpeningBalanceBatchNumber_1.InventoryOpeningBalanceBatchNumberField('InventoryOpeningBalanceBatchNumbers', _this);
        return _this;
    }
    return InventoryOpeningBalanceLineField;
}(v4_1.ComplexTypeField));
exports.InventoryOpeningBalanceLineField = InventoryOpeningBalanceLineField;
var InventoryOpeningBalanceLine;
(function (InventoryOpeningBalanceLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            BinEntry: function (binEntry) { return ({ binEntry: v4_1.edmToTs(binEntry, 'Edm.Int32') }); },
            InWarehouseQuantity: function (inWarehouseQuantity) { return ({ inWarehouseQuantity: v4_1.edmToTs(inWarehouseQuantity, 'Edm.Double') }); },
            OpeningBalance: function (openingBalance) { return ({ openingBalance: v4_1.edmToTs(openingBalance, 'Edm.Double') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            BarCode: function (barCode) { return ({ barCode: v4_1.edmToTs(barCode, 'Edm.String') }); },
            VisualOrder: function (visualOrder) { return ({ visualOrder: v4_1.edmToTs(visualOrder, 'Edm.Int32') }); },
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            Total: function (total) { return ({ total: v4_1.edmToTs(total, 'Edm.Double') }); },
            OpenInventoryAccount: function (openInventoryAccount) { return ({ openInventoryAccount: v4_1.edmToTs(openInventoryAccount, 'Edm.String') }); },
            ProjectCode: function (projectCode) { return ({ projectCode: v4_1.edmToTs(projectCode, 'Edm.String') }); },
            Manufacturer: function (manufacturer) { return ({ manufacturer: v4_1.edmToTs(manufacturer, 'Edm.Int32') }); },
            SupplierCatalogNo: function (supplierCatalogNo) { return ({ supplierCatalogNo: v4_1.edmToTs(supplierCatalogNo, 'Edm.String') }); },
            CostingCode: function (costingCode) { return ({ costingCode: v4_1.edmToTs(costingCode, 'Edm.String') }); },
            CostingCode2: function (costingCode2) { return ({ costingCode2: v4_1.edmToTs(costingCode2, 'Edm.String') }); },
            CostingCode3: function (costingCode3) { return ({ costingCode3: v4_1.edmToTs(costingCode3, 'Edm.String') }); },
            CostingCode4: function (costingCode4) { return ({ costingCode4: v4_1.edmToTs(costingCode4, 'Edm.String') }); },
            CostingCode5: function (costingCode5) { return ({ costingCode5: v4_1.edmToTs(costingCode5, 'Edm.String') }); },
            PreferredVendor: function (preferredVendor) { return ({ preferredVendor: v4_1.edmToTs(preferredVendor, 'Edm.String') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            ActualPrice: function (actualPrice) { return ({ actualPrice: v4_1.edmToTs(actualPrice, 'Edm.Double') }); },
            PostedValueLC: function (postedValueLc) { return ({ postedValueLc: v4_1.edmToTs(postedValueLc, 'Edm.Double') }); },
            PostedValueSC: function (postedValueSc) { return ({ postedValueSc: v4_1.edmToTs(postedValueSc, 'Edm.Double') }); },
            InventoryOpeningBalanceSerialNumbers: function (inventoryOpeningBalanceSerialNumbers) { return ({ inventoryOpeningBalanceSerialNumbers: InventoryOpeningBalanceSerialNumber_1.InventoryOpeningBalanceSerialNumber.build(inventoryOpeningBalanceSerialNumbers) }); },
            InventoryOpeningBalanceBatchNumbers: function (inventoryOpeningBalanceBatchNumbers) { return ({ inventoryOpeningBalanceBatchNumbers: InventoryOpeningBalanceBatchNumber_1.InventoryOpeningBalanceBatchNumber.build(inventoryOpeningBalanceBatchNumbers) }); }
        });
    }
    InventoryOpeningBalanceLine.build = build;
})(InventoryOpeningBalanceLine = exports.InventoryOpeningBalanceLine || (exports.InventoryOpeningBalanceLine = {}));
//# sourceMappingURL=InventoryOpeningBalanceLine.js.map