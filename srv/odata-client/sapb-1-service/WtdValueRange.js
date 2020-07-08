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
exports.WtdValueRange = exports.WtdValueRangeField = exports.createWtdValueRange = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WtdValueRange.build]] instead.
 */
function createWtdValueRange(json) {
    return WtdValueRange.build(json);
}
exports.createWtdValueRange = createWtdValueRange;
/**
 * WtdValueRangeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdValueRangeField = /** @class */ (function (_super) {
    __extends(WtdValueRangeField, _super);
    function WtdValueRangeField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WtdValueRange.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdValueRange.seqNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.seqNum = new v4_1.ComplexTypeNumberPropertyField('SeqNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdValueRange.effectiveFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveFrom = new v4_1.ComplexTypeDatePropertyField('EffectiveFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WtdValueRange.valueFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.valueFrom = new v4_1.ComplexTypeNumberPropertyField('ValueFrom', _this, 'Edm.Double');
        /**
         * Representation of the [[WtdValueRange.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        return _this;
    }
    return WtdValueRangeField;
}(v4_1.ComplexTypeField));
exports.WtdValueRangeField = WtdValueRangeField;
var WtdValueRange;
(function (WtdValueRange) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            SeqNum: function (seqNum) { return ({ seqNum: v4_1.edmToTs(seqNum, 'Edm.Int32') }); },
            EffectiveFrom: function (effectiveFrom) { return ({ effectiveFrom: v4_1.edmToTs(effectiveFrom, 'Edm.DateTimeOffset') }); },
            ValueFrom: function (valueFrom) { return ({ valueFrom: v4_1.edmToTs(valueFrom, 'Edm.Double') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); }
        });
    }
    WtdValueRange.build = build;
})(WtdValueRange = exports.WtdValueRange || (exports.WtdValueRange = {}));
//# sourceMappingURL=WtdValueRange.js.map