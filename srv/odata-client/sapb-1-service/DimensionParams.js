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
exports.DimensionParams = exports.DimensionParamsField = exports.createDimensionParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DimensionParams.build]] instead.
 */
function createDimensionParams(json) {
    return DimensionParams.build(json);
}
exports.createDimensionParams = createDimensionParams;
/**
 * DimensionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DimensionParamsField = /** @class */ (function (_super) {
    __extends(DimensionParamsField, _super);
    function DimensionParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DimensionParams.dimensionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dimensionCode = new v4_1.ComplexTypeNumberPropertyField('DimensionCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DimensionParams.dimensionName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dimensionName = new v4_1.ComplexTypeStringPropertyField('DimensionName', _this, 'Edm.String');
        return _this;
    }
    return DimensionParamsField;
}(v4_1.ComplexTypeField));
exports.DimensionParamsField = DimensionParamsField;
var DimensionParams;
(function (DimensionParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DimensionCode: function (dimensionCode) { return ({ dimensionCode: v4_1.edmToTs(dimensionCode, 'Edm.Int32') }); },
            DimensionName: function (dimensionName) { return ({ dimensionName: v4_1.edmToTs(dimensionName, 'Edm.String') }); }
        });
    }
    DimensionParams.build = build;
})(DimensionParams = exports.DimensionParams || (exports.DimensionParams = {}));
//# sourceMappingURL=DimensionParams.js.map