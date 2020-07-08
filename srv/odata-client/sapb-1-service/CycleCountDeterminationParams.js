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
exports.CycleCountDeterminationParams = exports.CycleCountDeterminationParamsField = exports.createCycleCountDeterminationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CycleCountDeterminationParams.build]] instead.
 */
function createCycleCountDeterminationParams(json) {
    return CycleCountDeterminationParams.build(json);
}
exports.createCycleCountDeterminationParams = createCycleCountDeterminationParams;
/**
 * CycleCountDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CycleCountDeterminationParamsField = /** @class */ (function (_super) {
    __extends(CycleCountDeterminationParamsField, _super);
    function CycleCountDeterminationParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CycleCountDeterminationParams.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[CycleCountDeterminationParams.cycleBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cycleBy = new v4_1.ComplexTypeNumberPropertyField('CycleBy', _this, 'Edm.Int32');
        return _this;
    }
    return CycleCountDeterminationParamsField;
}(v4_1.ComplexTypeField));
exports.CycleCountDeterminationParamsField = CycleCountDeterminationParamsField;
var CycleCountDeterminationParams;
(function (CycleCountDeterminationParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            CycleBy: function (cycleBy) { return ({ cycleBy: v4_1.edmToTs(cycleBy, 'Edm.Int32') }); }
        });
    }
    CycleCountDeterminationParams.build = build;
})(CycleCountDeterminationParams = exports.CycleCountDeterminationParams || (exports.CycleCountDeterminationParams = {}));
//# sourceMappingURL=CycleCountDeterminationParams.js.map