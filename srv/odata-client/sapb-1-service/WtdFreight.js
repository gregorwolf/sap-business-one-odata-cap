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
exports.WtdFreight = exports.WtdFreightField = exports.createWtdFreight = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WtdFreight.build]] instead.
 */
function createWtdFreight(json) {
    return WtdFreight.build(json);
}
exports.createWtdFreight = createWtdFreight;
/**
 * WtdFreightField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdFreightField = /** @class */ (function (_super) {
    __extends(WtdFreightField, _super);
    function WtdFreightField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WtdFreight.freightCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freightCode = new v4_1.ComplexTypeNumberPropertyField('FreightCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdFreight.wTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxCode = new v4_1.ComplexTypeStringPropertyField('WTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[WtdFreight.effectiveDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateFrom = new v4_1.ComplexTypeDatePropertyField('EffectiveDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WtdFreight.effectiveDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateTo = new v4_1.ComplexTypeDatePropertyField('EffectiveDateTo', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return WtdFreightField;
}(v4_1.ComplexTypeField));
exports.WtdFreightField = WtdFreightField;
var WtdFreight;
(function (WtdFreight) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FreightCode: function (freightCode) { return ({ freightCode: v4_1.edmToTs(freightCode, 'Edm.Int32') }); },
            WTaxCode: function (wTaxCode) { return ({ wTaxCode: v4_1.edmToTs(wTaxCode, 'Edm.String') }); },
            EffectiveDateFrom: function (effectiveDateFrom) { return ({ effectiveDateFrom: v4_1.edmToTs(effectiveDateFrom, 'Edm.DateTimeOffset') }); },
            EffectiveDateTo: function (effectiveDateTo) { return ({ effectiveDateTo: v4_1.edmToTs(effectiveDateTo, 'Edm.DateTimeOffset') }); }
        });
    }
    WtdFreight.build = build;
})(WtdFreight = exports.WtdFreight || (exports.WtdFreight = {}));
//# sourceMappingURL=WtdFreight.js.map