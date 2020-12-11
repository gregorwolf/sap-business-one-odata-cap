"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of DistributionRuleLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DistributionRuleLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DistributionRuleLine) || this;
        /**
         * Representation of the [[DistributionRuleLine.centerCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.centerCode = new core_1.ComplexTypeStringPropertyField('CenterCode', _this, 'Edm.String');
        /**
         * Representation of the [[DistributionRuleLine.totalInCenter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalInCenter = new core_1.ComplexTypeNumberPropertyField('TotalInCenter', _this, 'Edm.Double');
        /**
         * Representation of the [[DistributionRuleLine.effectiveFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveFrom = new core_1.ComplexTypeDatePropertyField('EffectiveFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DistributionRuleLine.effectiveTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveTo = new core_1.ComplexTypeDatePropertyField('EffectiveTo', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return DistributionRuleLineField;
}(core_1.ComplexTypeField));
exports.DistributionRuleLineField = DistributionRuleLineField;
var DistributionRuleLine;
(function (DistributionRuleLine) {
    /**
     * Metadata information on all properties of the `DistributionRuleLine` complex type.
     */
    DistributionRuleLine._propertyMetadata = [{
            originalName: 'CenterCode',
            name: 'centerCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TotalInCenter',
            name: 'totalInCenter',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EffectiveFrom',
            name: 'effectiveFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'EffectiveTo',
            name: 'effectiveTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DistributionRuleLine);
    }
    DistributionRuleLine.build = build;
})(DistributionRuleLine = exports.DistributionRuleLine || (exports.DistributionRuleLine = {}));
//# sourceMappingURL=DistributionRuleLine.js.map