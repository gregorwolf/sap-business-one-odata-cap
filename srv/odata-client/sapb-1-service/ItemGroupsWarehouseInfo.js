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
exports.ItemGroupsWarehouseInfo = exports.ItemGroupsWarehouseInfoField = exports.createItemGroupsWarehouseInfo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ItemGroupsWarehouseInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemGroupsWarehouseInfo.itmsGrpCod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itmsGrpCod = new v4_1.ComplexTypeNumberPropertyField('ItmsGrpCod', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemGroupsWarehouseInfo.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemGroupsWarehouseInfo.defaultBin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBin = new v4_1.ComplexTypeNumberPropertyField('DefaultBin', _this, 'Edm.Int32');
        return _this;
    }
    return ItemGroupsWarehouseInfoField;
}(v4_1.ComplexTypeField));
exports.ItemGroupsWarehouseInfoField = ItemGroupsWarehouseInfoField;
var ItemGroupsWarehouseInfo;
(function (ItemGroupsWarehouseInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItmsGrpCod: function (itmsGrpCod) { return ({ itmsGrpCod: v4_1.edmToTs(itmsGrpCod, 'Edm.Int32') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            DefaultBin: function (defaultBin) { return ({ defaultBin: v4_1.edmToTs(defaultBin, 'Edm.Int32') }); }
        });
    }
    ItemGroupsWarehouseInfo.build = build;
})(ItemGroupsWarehouseInfo = exports.ItemGroupsWarehouseInfo || (exports.ItemGroupsWarehouseInfo = {}));
//# sourceMappingURL=ItemGroupsWarehouseInfo.js.map