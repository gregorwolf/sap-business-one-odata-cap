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
exports.ItemPeriodControl = exports.ItemPeriodControlField = exports.createItemPeriodControl = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ItemPeriodControl.build]] instead.
 */
function createItemPeriodControl(json) {
    return ItemPeriodControl.build(json);
}
exports.createItemPeriodControl = createItemPeriodControl;
/**
 * ItemPeriodControlField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemPeriodControlField = /** @class */ (function (_super) {
    __extends(ItemPeriodControlField, _super);
    /**
     * Creates an instance of ItemPeriodControlField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemPeriodControlField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemPeriodControl) || this;
        /**
         * Representation of the [[ItemPeriodControl.fiscalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalYear = new core_1.ComplexTypeStringPropertyField('FiscalYear', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPeriodControl.depreciationArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationArea = new core_1.ComplexTypeStringPropertyField('DepreciationArea', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPeriodControl.subPeriod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subPeriod = new core_1.ComplexTypeNumberPropertyField('SubPeriod', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPeriodControl.depreciationStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationStatus = new core_1.ComplexTypeEnumPropertyField('DepreciationStatus', _this);
        /**
         * Representation of the [[ItemPeriodControl.factor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor = new core_1.ComplexTypeNumberPropertyField('Factor', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPeriodControl.actualUnits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualUnits = new core_1.ComplexTypeNumberPropertyField('ActualUnits', _this, 'Edm.Int32');
        return _this;
    }
    return ItemPeriodControlField;
}(core_1.ComplexTypeField));
exports.ItemPeriodControlField = ItemPeriodControlField;
var ItemPeriodControl;
(function (ItemPeriodControl) {
    /**
     * Metadata information on all properties of the `ItemPeriodControl` complex type.
     */
    ItemPeriodControl._propertyMetadata = [{
            originalName: 'FiscalYear',
            name: 'fiscalYear',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DepreciationArea',
            name: 'depreciationArea',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SubPeriod',
            name: 'subPeriod',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DepreciationStatus',
            name: 'depreciationStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Factor',
            name: 'factor',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ActualUnits',
            name: 'actualUnits',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemPeriodControl);
    }
    ItemPeriodControl.build = build;
})(ItemPeriodControl = exports.ItemPeriodControl || (exports.ItemPeriodControl = {}));
//# sourceMappingURL=ItemPeriodControl.js.map