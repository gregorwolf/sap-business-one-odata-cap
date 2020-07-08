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
exports.WeightMeasureParams = exports.WeightMeasureParamsField = exports.createWeightMeasureParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WeightMeasureParams.build]] instead.
 */
function createWeightMeasureParams(json) {
    return WeightMeasureParams.build(json);
}
exports.createWeightMeasureParams = createWeightMeasureParams;
/**
 * WeightMeasureParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WeightMeasureParamsField = /** @class */ (function (_super) {
    __extends(WeightMeasureParamsField, _super);
    function WeightMeasureParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WeightMeasureParams.unitCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitCode = new v4_1.ComplexTypeNumberPropertyField('UnitCode', _this, 'Edm.Int32');
        return _this;
    }
    return WeightMeasureParamsField;
}(v4_1.ComplexTypeField));
exports.WeightMeasureParamsField = WeightMeasureParamsField;
var WeightMeasureParams;
(function (WeightMeasureParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            UnitCode: function (unitCode) { return ({ unitCode: v4_1.edmToTs(unitCode, 'Edm.Int32') }); }
        });
    }
    WeightMeasureParams.build = build;
})(WeightMeasureParams = exports.WeightMeasureParams || (exports.WeightMeasureParams = {}));
//# sourceMappingURL=WeightMeasureParams.js.map