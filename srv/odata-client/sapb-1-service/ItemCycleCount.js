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
exports.ItemCycleCount = exports.ItemCycleCountField = exports.createItemCycleCount = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ItemCycleCount.build]] instead.
 */
function createItemCycleCount(json) {
    return ItemCycleCount.build(json);
}
exports.createItemCycleCount = createItemCycleCount;
/**
 * ItemCycleCountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemCycleCountField = /** @class */ (function (_super) {
    __extends(ItemCycleCountField, _super);
    /**
     * Creates an instance of ItemCycleCountField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemCycleCountField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemCycleCount) || this;
        /**
         * Representation of the [[ItemCycleCount.cycleCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cycleCode = new core_1.ComplexTypeNumberPropertyField('CycleCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemCycleCount.alert]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alert = new core_1.ComplexTypeEnumPropertyField('Alert', _this);
        /**
         * Representation of the [[ItemCycleCount.nextCountingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextCountingDate = new core_1.ComplexTypeDatePropertyField('NextCountingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemCycleCount.alertTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alertTime = new core_1.ComplexTypeTimePropertyField('AlertTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ItemCycleCount.destinationUser]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.destinationUser = new core_1.ComplexTypeNumberPropertyField('DestinationUser', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemCycleCount.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        return _this;
    }
    return ItemCycleCountField;
}(core_1.ComplexTypeField));
exports.ItemCycleCountField = ItemCycleCountField;
var ItemCycleCount;
(function (ItemCycleCount) {
    /**
     * Metadata information on all properties of the `ItemCycleCount` complex type.
     */
    ItemCycleCount._propertyMetadata = [{
            originalName: 'CycleCode',
            name: 'cycleCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Alert',
            name: 'alert',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'NextCountingDate',
            name: 'nextCountingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'AlertTime',
            name: 'alertTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'DestinationUser',
            name: 'destinationUser',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemCycleCount);
    }
    ItemCycleCount.build = build;
})(ItemCycleCount = exports.ItemCycleCount || (exports.ItemCycleCount = {}));
//# sourceMappingURL=ItemCycleCount.js.map