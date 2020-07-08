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
exports.DistributionRuleLine = exports.DistributionRuleLineField = exports.createDistributionRuleLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DistributionRuleLine.build]] instead.
 */
function createDistributionRuleLine(json) {
    return DistributionRuleLine.build(json);
}
exports.createDistributionRuleLine = createDistributionRuleLine;
/**
 * DistributionRuleLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DistributionRuleLineField = /** @class */ (function (_super) {
    __extends(DistributionRuleLineField, _super);
    function DistributionRuleLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DistributionRuleLine.centerCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.centerCode = new v4_1.ComplexTypeStringPropertyField('CenterCode', _this, 'Edm.String');
        /**
         * Representation of the [[DistributionRuleLine.totalInCenter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalInCenter = new v4_1.ComplexTypeNumberPropertyField('TotalInCenter', _this, 'Edm.Double');
        /**
         * Representation of the [[DistributionRuleLine.effectiveFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveFrom = new v4_1.ComplexTypeDatePropertyField('EffectiveFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DistributionRuleLine.effectiveTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveTo = new v4_1.ComplexTypeDatePropertyField('EffectiveTo', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return DistributionRuleLineField;
}(v4_1.ComplexTypeField));
exports.DistributionRuleLineField = DistributionRuleLineField;
var DistributionRuleLine;
(function (DistributionRuleLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CenterCode: function (centerCode) { return ({ centerCode: v4_1.edmToTs(centerCode, 'Edm.String') }); },
            TotalInCenter: function (totalInCenter) { return ({ totalInCenter: v4_1.edmToTs(totalInCenter, 'Edm.Double') }); },
            EffectiveFrom: function (effectiveFrom) { return ({ effectiveFrom: v4_1.edmToTs(effectiveFrom, 'Edm.DateTimeOffset') }); },
            EffectiveTo: function (effectiveTo) { return ({ effectiveTo: v4_1.edmToTs(effectiveTo, 'Edm.DateTimeOffset') }); }
        });
    }
    DistributionRuleLine.build = build;
})(DistributionRuleLine = exports.DistributionRuleLine || (exports.DistributionRuleLine = {}));
//# sourceMappingURL=DistributionRuleLine.js.map