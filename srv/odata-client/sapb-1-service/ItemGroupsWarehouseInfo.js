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
exports.ItemGroupsWarehouseInfo = exports.ItemGroupsWarehouseInfoField = exports.createItemGroupsWarehouseInfo = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ItemGroupsWarehouseInfo.build]] instead.
 */
function createItemGroupsWarehouseInfo(json) {
    return ItemGroupsWarehouseInfo.build(json);
}
exports.createItemGroupsWarehouseInfo = createItemGroupsWarehouseInfo;
/**
 * ItemGroupsWarehouseInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemGroupsWarehouseInfoField = /** @class */ (function (_super) {
    __extends(ItemGroupsWarehouseInfoField, _super);
    /**
     * Creates an instance of ItemGroupsWarehouseInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemGroupsWarehouseInfoField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemGroupsWarehouseInfo) || this;
        /**
         * Representation of the [[ItemGroupsWarehouseInfo.itmsGrpCod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itmsGrpCod = new core_1.ComplexTypeNumberPropertyField('ItmsGrpCod', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemGroupsWarehouseInfo.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemGroupsWarehouseInfo.defaultBin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBin = new core_1.ComplexTypeNumberPropertyField('DefaultBin', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemGroupsWarehouseInfo.defaultBinEnforced]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBinEnforced = new core_1.ComplexTypeEnumPropertyField('DefaultBinEnforced', _this);
        return _this;
    }
    return ItemGroupsWarehouseInfoField;
}(core_1.ComplexTypeField));
exports.ItemGroupsWarehouseInfoField = ItemGroupsWarehouseInfoField;
var ItemGroupsWarehouseInfo;
(function (ItemGroupsWarehouseInfo) {
    /**
     * Metadata information on all properties of the `ItemGroupsWarehouseInfo` complex type.
     */
    ItemGroupsWarehouseInfo._propertyMetadata = [{
            originalName: 'ItmsGrpCod',
            name: 'itmsGrpCod',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DefaultBin',
            name: 'defaultBin',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DefaultBinEnforced',
            name: 'defaultBinEnforced',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemGroupsWarehouseInfo);
    }
    ItemGroupsWarehouseInfo.build = build;
})(ItemGroupsWarehouseInfo = exports.ItemGroupsWarehouseInfo || (exports.ItemGroupsWarehouseInfo = {}));
//# sourceMappingURL=ItemGroupsWarehouseInfo.js.map