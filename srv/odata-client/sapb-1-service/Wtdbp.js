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
exports.Wtdbp = exports.WtdbpField = exports.createWtdbp = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[Wtdbp.build]] instead.
 */
function createWtdbp(json) {
    return Wtdbp.build(json);
}
exports.createWtdbp = createWtdbp;
/**
 * WtdbpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdbpField = /** @class */ (function (_super) {
    __extends(WtdbpField, _super);
    function WtdbpField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Wtdbp.bpKeyPart1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpKeyPart1 = new v4_1.ComplexTypeStringPropertyField('BPKeyPart1', _this, 'Edm.String');
        /**
         * Representation of the [[Wtdbp.bpKeyPart2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpKeyPart2 = new v4_1.ComplexTypeStringPropertyField('BPKeyPart2', _this, 'Edm.String');
        /**
         * Representation of the [[Wtdbp.wTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxCode = new v4_1.ComplexTypeStringPropertyField('WTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[Wtdbp.effectiveDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateFrom = new v4_1.ComplexTypeDatePropertyField('EffectiveDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[Wtdbp.effectiveDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateTo = new v4_1.ComplexTypeDatePropertyField('EffectiveDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[Wtdbp.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        return _this;
    }
    return WtdbpField;
}(v4_1.ComplexTypeField));
exports.WtdbpField = WtdbpField;
var Wtdbp;
(function (Wtdbp) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BPKeyPart1: function (bpKeyPart1) { return ({ bpKeyPart1: v4_1.edmToTs(bpKeyPart1, 'Edm.String') }); },
            BPKeyPart2: function (bpKeyPart2) { return ({ bpKeyPart2: v4_1.edmToTs(bpKeyPart2, 'Edm.String') }); },
            WTaxCode: function (wTaxCode) { return ({ wTaxCode: v4_1.edmToTs(wTaxCode, 'Edm.String') }); },
            EffectiveDateFrom: function (effectiveDateFrom) { return ({ effectiveDateFrom: v4_1.edmToTs(effectiveDateFrom, 'Edm.DateTimeOffset') }); },
            EffectiveDateTo: function (effectiveDateTo) { return ({ effectiveDateTo: v4_1.edmToTs(effectiveDateTo, 'Edm.DateTimeOffset') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); }
        });
    }
    Wtdbp.build = build;
})(Wtdbp = exports.Wtdbp || (exports.Wtdbp = {}));
//# sourceMappingURL=Wtdbp.js.map