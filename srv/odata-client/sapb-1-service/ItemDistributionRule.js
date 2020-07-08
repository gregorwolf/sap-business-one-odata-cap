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
exports.ItemDistributionRule = exports.ItemDistributionRuleField = exports.createItemDistributionRule = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemDistributionRule.build]] instead.
 */
function createItemDistributionRule(json) {
    return ItemDistributionRule.build(json);
}
exports.createItemDistributionRule = createItemDistributionRule;
/**
 * ItemDistributionRuleField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemDistributionRuleField = /** @class */ (function (_super) {
    __extends(ItemDistributionRuleField, _super);
    function ItemDistributionRuleField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemDistributionRule.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemDistributionRule.validFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.validFrom = new v4_1.ComplexTypeDatePropertyField('ValidFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemDistributionRule.validTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.validTo = new v4_1.ComplexTypeDatePropertyField('ValidTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        return _this;
    }
    return ItemDistributionRuleField;
}(v4_1.ComplexTypeField));
exports.ItemDistributionRuleField = ItemDistributionRuleField;
var ItemDistributionRule;
(function (ItemDistributionRule) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ValidFrom: function (validFrom) { return ({ validFrom: v4_1.edmToTs(validFrom, 'Edm.DateTimeOffset') }); },
            ValidTo: function (validTo) { return ({ validTo: v4_1.edmToTs(validTo, 'Edm.DateTimeOffset') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); }
        });
    }
    ItemDistributionRule.build = build;
})(ItemDistributionRule = exports.ItemDistributionRule || (exports.ItemDistributionRule = {}));
//# sourceMappingURL=ItemDistributionRule.js.map