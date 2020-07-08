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
exports.ItemUnitOfMeasurement = exports.ItemUnitOfMeasurementField = exports.createItemUnitOfMeasurement = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ItemUoMPackage_1 = require("./ItemUoMPackage");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemUnitOfMeasurement.build]] instead.
 */
function createItemUnitOfMeasurement(json) {
    return ItemUnitOfMeasurement.build(json);
}
exports.createItemUnitOfMeasurement = createItemUnitOfMeasurement;
/**
 * ItemUnitOfMeasurementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemUnitOfMeasurementField = /** @class */ (function (_super) {
    __extends(ItemUnitOfMeasurementField, _super);
    function ItemUnitOfMeasurementField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemUnitOfMeasurement.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.defaultBarcode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBarcode = new v4_1.ComplexTypeNumberPropertyField('DefaultBarcode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.defaultPackage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultPackage = new v4_1.ComplexTypeNumberPropertyField('DefaultPackage', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.length1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.length1 = new v4_1.ComplexTypeNumberPropertyField('Length1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUnitOfMeasurement.length1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.length1Unit = new v4_1.ComplexTypeNumberPropertyField('Length1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.length2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.length2 = new v4_1.ComplexTypeNumberPropertyField('Length2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUnitOfMeasurement.length2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.length2Unit = new v4_1.ComplexTypeNumberPropertyField('Length2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.width1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width1 = new v4_1.ComplexTypeNumberPropertyField('Width1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUnitOfMeasurement.width1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width1Unit = new v4_1.ComplexTypeNumberPropertyField('Width1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.width2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width2 = new v4_1.ComplexTypeNumberPropertyField('Width2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUnitOfMeasurement.width2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width2Unit = new v4_1.ComplexTypeNumberPropertyField('Width2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.height1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height1 = new v4_1.ComplexTypeNumberPropertyField('Height1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUnitOfMeasurement.height1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height1Unit = new v4_1.ComplexTypeNumberPropertyField('Height1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.height2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height2 = new v4_1.ComplexTypeNumberPropertyField('Height2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUnitOfMeasurement.height2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height2Unit = new v4_1.ComplexTypeNumberPropertyField('Height2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.volume]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volume = new v4_1.ComplexTypeNumberPropertyField('Volume', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUnitOfMeasurement.volumeUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volumeUnit = new v4_1.ComplexTypeNumberPropertyField('VolumeUnit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.weight1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1 = new v4_1.ComplexTypeNumberPropertyField('Weight1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUnitOfMeasurement.weight1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1Unit = new v4_1.ComplexTypeNumberPropertyField('Weight1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.weight2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2 = new v4_1.ComplexTypeNumberPropertyField('Weight2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUnitOfMeasurement.weight2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2Unit = new v4_1.ComplexTypeNumberPropertyField('Weight2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUnitOfMeasurement.itemUoMPackageCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemUoMPackageCollection = new ItemUoMPackage_1.ItemUoMPackageField('ItemUoMPackageCollection', _this);
        return _this;
    }
    return ItemUnitOfMeasurementField;
}(v4_1.ComplexTypeField));
exports.ItemUnitOfMeasurementField = ItemUnitOfMeasurementField;
var ItemUnitOfMeasurement;
(function (ItemUnitOfMeasurement) {
    function build(json) {
        return v4_1.createComplexType(json, {
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            DefaultBarcode: function (defaultBarcode) { return ({ defaultBarcode: v4_1.edmToTs(defaultBarcode, 'Edm.Int32') }); },
            DefaultPackage: function (defaultPackage) { return ({ defaultPackage: v4_1.edmToTs(defaultPackage, 'Edm.Int32') }); },
            Length1: function (length1) { return ({ length1: v4_1.edmToTs(length1, 'Edm.Double') }); },
            Length1Unit: function (length1Unit) { return ({ length1Unit: v4_1.edmToTs(length1Unit, 'Edm.Int32') }); },
            Length2: function (length2) { return ({ length2: v4_1.edmToTs(length2, 'Edm.Double') }); },
            Length2Unit: function (length2Unit) { return ({ length2Unit: v4_1.edmToTs(length2Unit, 'Edm.Int32') }); },
            Width1: function (width1) { return ({ width1: v4_1.edmToTs(width1, 'Edm.Double') }); },
            Width1Unit: function (width1Unit) { return ({ width1Unit: v4_1.edmToTs(width1Unit, 'Edm.Int32') }); },
            Width2: function (width2) { return ({ width2: v4_1.edmToTs(width2, 'Edm.Double') }); },
            Width2Unit: function (width2Unit) { return ({ width2Unit: v4_1.edmToTs(width2Unit, 'Edm.Int32') }); },
            Height1: function (height1) { return ({ height1: v4_1.edmToTs(height1, 'Edm.Double') }); },
            Height1Unit: function (height1Unit) { return ({ height1Unit: v4_1.edmToTs(height1Unit, 'Edm.Int32') }); },
            Height2: function (height2) { return ({ height2: v4_1.edmToTs(height2, 'Edm.Double') }); },
            Height2Unit: function (height2Unit) { return ({ height2Unit: v4_1.edmToTs(height2Unit, 'Edm.Int32') }); },
            Volume: function (volume) { return ({ volume: v4_1.edmToTs(volume, 'Edm.Double') }); },
            VolumeUnit: function (volumeUnit) { return ({ volumeUnit: v4_1.edmToTs(volumeUnit, 'Edm.Int32') }); },
            Weight1: function (weight1) { return ({ weight1: v4_1.edmToTs(weight1, 'Edm.Double') }); },
            Weight1Unit: function (weight1Unit) { return ({ weight1Unit: v4_1.edmToTs(weight1Unit, 'Edm.Int32') }); },
            Weight2: function (weight2) { return ({ weight2: v4_1.edmToTs(weight2, 'Edm.Double') }); },
            Weight2Unit: function (weight2Unit) { return ({ weight2Unit: v4_1.edmToTs(weight2Unit, 'Edm.Int32') }); },
            ItemUoMPackageCollection: function (itemUoMPackageCollection) { return ({ itemUoMPackageCollection: ItemUoMPackage_1.ItemUoMPackage.build(itemUoMPackageCollection) }); }
        });
    }
    ItemUnitOfMeasurement.build = build;
})(ItemUnitOfMeasurement = exports.ItemUnitOfMeasurement || (exports.ItemUnitOfMeasurement = {}));
//# sourceMappingURL=ItemUnitOfMeasurement.js.map