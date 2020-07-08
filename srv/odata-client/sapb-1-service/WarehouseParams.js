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
exports.WarehouseParams = exports.WarehouseParamsField = exports.createWarehouseParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WarehouseParams.build]] instead.
 */
function createWarehouseParams(json) {
    return WarehouseParams.build(json);
}
exports.createWarehouseParams = createWarehouseParams;
/**
 * WarehouseParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WarehouseParamsField = /** @class */ (function (_super) {
    __extends(WarehouseParamsField, _super);
    function WarehouseParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WarehouseParams.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        return _this;
    }
    return WarehouseParamsField;
}(v4_1.ComplexTypeField));
exports.WarehouseParamsField = WarehouseParamsField;
var WarehouseParams;
(function (WarehouseParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); }
        });
    }
    WarehouseParams.build = build;
})(WarehouseParams = exports.WarehouseParams || (exports.WarehouseParams = {}));
//# sourceMappingURL=WarehouseParams.js.map