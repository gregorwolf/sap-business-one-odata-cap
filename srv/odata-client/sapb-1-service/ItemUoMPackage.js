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
exports.ItemUoMPackage = exports.ItemUoMPackageField = exports.createItemUoMPackage = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ItemUoMPackage.build]] instead.
 */
function createItemUoMPackage(json) {
    return ItemUoMPackage.build(json);
}
exports.createItemUoMPackage = createItemUoMPackage;
/**
 * ItemUoMPackageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemUoMPackageField = /** @class */ (function (_super) {
    __extends(ItemUoMPackageField, _super);
    /**
     * Creates an instance of ItemUoMPackageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemUoMPackageField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemUoMPackage) || this;
        /**
         * Representation of the [[ItemUoMPackage.uoMType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMType = new core_1.ComplexTypeEnumPropertyField('UoMType', _this);
        /**
         * Representation of the [[ItemUoMPackage.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.packageTypeEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packageTypeEntry = new core_1.ComplexTypeNumberPropertyField('PackageTypeEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.length1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.length1 = new core_1.ComplexTypeNumberPropertyField('Length1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUoMPackage.length1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.length1Unit = new core_1.ComplexTypeNumberPropertyField('Length1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.length2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.length2 = new core_1.ComplexTypeNumberPropertyField('Length2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUoMPackage.length2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.length2Unit = new core_1.ComplexTypeNumberPropertyField('Length2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.width1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width1 = new core_1.ComplexTypeNumberPropertyField('Width1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUoMPackage.width1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width1Unit = new core_1.ComplexTypeNumberPropertyField('Width1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.width2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width2 = new core_1.ComplexTypeNumberPropertyField('Width2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUoMPackage.width2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width2Unit = new core_1.ComplexTypeNumberPropertyField('Width2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.height1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height1 = new core_1.ComplexTypeNumberPropertyField('Height1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUoMPackage.height1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height1Unit = new core_1.ComplexTypeNumberPropertyField('Height1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.height2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height2 = new core_1.ComplexTypeNumberPropertyField('Height2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUoMPackage.height2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height2Unit = new core_1.ComplexTypeNumberPropertyField('Height2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.volume]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volume = new core_1.ComplexTypeNumberPropertyField('Volume', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUoMPackage.volumeUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volumeUnit = new core_1.ComplexTypeNumberPropertyField('VolumeUnit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.weight1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1 = new core_1.ComplexTypeNumberPropertyField('Weight1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUoMPackage.weight1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1Unit = new core_1.ComplexTypeNumberPropertyField('Weight1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.weight2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2 = new core_1.ComplexTypeNumberPropertyField('Weight2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemUoMPackage.weight2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2Unit = new core_1.ComplexTypeNumberPropertyField('Weight2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemUoMPackage.quantityPerPackage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantityPerPackage = new core_1.ComplexTypeNumberPropertyField('QuantityPerPackage', _this, 'Edm.Double');
        return _this;
    }
    return ItemUoMPackageField;
}(core_1.ComplexTypeField));
exports.ItemUoMPackageField = ItemUoMPackageField;
var ItemUoMPackage;
(function (ItemUoMPackage) {
    /**
     * Metadata information on all properties of the `ItemUoMPackage` complex type.
     */
    ItemUoMPackage._propertyMetadata = [{
            originalName: 'UoMType',
            name: 'uoMType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PackageTypeEntry',
            name: 'packageTypeEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Length1',
            name: 'length1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Length1Unit',
            name: 'length1Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Length2',
            name: 'length2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Length2Unit',
            name: 'length2Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Width1',
            name: 'width1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Width1Unit',
            name: 'width1Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Width2',
            name: 'width2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Width2Unit',
            name: 'width2Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Height1',
            name: 'height1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Height1Unit',
            name: 'height1Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Height2',
            name: 'height2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Height2Unit',
            name: 'height2Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Volume',
            name: 'volume',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VolumeUnit',
            name: 'volumeUnit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Weight1',
            name: 'weight1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Weight1Unit',
            name: 'weight1Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Weight2',
            name: 'weight2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Weight2Unit',
            name: 'weight2Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'QuantityPerPackage',
            name: 'quantityPerPackage',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemUoMPackage);
    }
    ItemUoMPackage.build = build;
})(ItemUoMPackage = exports.ItemUoMPackage || (exports.ItemUoMPackage = {}));
//# sourceMappingURL=ItemUoMPackage.js.map