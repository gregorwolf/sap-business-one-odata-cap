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
exports.WtdEffectiveDate = exports.WtdEffectiveDateField = exports.createWtdEffectiveDate = void 0;
var WtdValueRange_1 = require("./WtdValueRange");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WtdEffectiveDate.build]] instead.
 */
function createWtdEffectiveDate(json) {
    return WtdEffectiveDate.build(json);
}
exports.createWtdEffectiveDate = createWtdEffectiveDate;
/**
 * WtdEffectiveDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdEffectiveDateField = /** @class */ (function (_super) {
    __extends(WtdEffectiveDateField, _super);
    function WtdEffectiveDateField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WtdEffectiveDate.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdEffectiveDate.effectiveFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveFrom = new v4_1.ComplexTypeDatePropertyField('EffectiveFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WtdEffectiveDate.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[WtdEffectiveDate.wtdValueRangeCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtdValueRangeCollection = new WtdValueRange_1.WtdValueRangeField('WTDValueRangeCollection', _this);
        return _this;
    }
    return WtdEffectiveDateField;
}(v4_1.ComplexTypeField));
exports.WtdEffectiveDateField = WtdEffectiveDateField;
var WtdEffectiveDate;
(function (WtdEffectiveDate) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            EffectiveFrom: function (effectiveFrom) { return ({ effectiveFrom: v4_1.edmToTs(effectiveFrom, 'Edm.DateTimeOffset') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); },
            WTDValueRangeCollection: function (wtdValueRangeCollection) { return ({ wtdValueRangeCollection: WtdValueRange_1.WtdValueRange.build(wtdValueRangeCollection) }); }
        });
    }
    WtdEffectiveDate.build = build;
})(WtdEffectiveDate = exports.WtdEffectiveDate || (exports.WtdEffectiveDate = {}));
//# sourceMappingURL=WtdEffectiveDate.js.map