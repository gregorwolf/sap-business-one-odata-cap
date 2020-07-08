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
exports.StockTakingParams = exports.StockTakingParamsField = exports.createStockTakingParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[StockTakingParams.build]] instead.
 */
function createStockTakingParams(json) {
    return StockTakingParams.build(json);
}
exports.createStockTakingParams = createStockTakingParams;
/**
 * StockTakingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var StockTakingParamsField = /** @class */ (function (_super) {
    __extends(StockTakingParamsField, _super);
    function StockTakingParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[StockTakingParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTakingParams.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        return _this;
    }
    return StockTakingParamsField;
}(v4_1.ComplexTypeField));
exports.StockTakingParamsField = StockTakingParamsField;
var StockTakingParams;
(function (StockTakingParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); }
        });
    }
    StockTakingParams.build = build;
})(StockTakingParams = exports.StockTakingParams || (exports.StockTakingParams = {}));
//# sourceMappingURL=StockTakingParams.js.map