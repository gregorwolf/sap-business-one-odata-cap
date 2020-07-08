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
exports.FactoringIndicatorParams = exports.FactoringIndicatorParamsField = exports.createFactoringIndicatorParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[FactoringIndicatorParams.build]] instead.
 */
function createFactoringIndicatorParams(json) {
    return FactoringIndicatorParams.build(json);
}
exports.createFactoringIndicatorParams = createFactoringIndicatorParams;
/**
 * FactoringIndicatorParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FactoringIndicatorParamsField = /** @class */ (function (_super) {
    __extends(FactoringIndicatorParamsField, _super);
    function FactoringIndicatorParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FactoringIndicatorParams.indicatorCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.indicatorCode = new v4_1.ComplexTypeStringPropertyField('IndicatorCode', _this, 'Edm.String');
        return _this;
    }
    return FactoringIndicatorParamsField;
}(v4_1.ComplexTypeField));
exports.FactoringIndicatorParamsField = FactoringIndicatorParamsField;
var FactoringIndicatorParams;
(function (FactoringIndicatorParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            IndicatorCode: function (indicatorCode) { return ({ indicatorCode: v4_1.edmToTs(indicatorCode, 'Edm.String') }); }
        });
    }
    FactoringIndicatorParams.build = build;
})(FactoringIndicatorParams = exports.FactoringIndicatorParams || (exports.FactoringIndicatorParams = {}));
//# sourceMappingURL=FactoringIndicatorParams.js.map