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
exports.ItemDistributionRule = exports.ItemDistributionRuleField = exports.createItemDistributionRule = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ItemDistributionRuleField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemDistributionRuleField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemDistributionRule) || this;
        /**
         * Representation of the [[ItemDistributionRule.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemDistributionRule.validFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.validFrom = new core_1.ComplexTypeDatePropertyField('ValidFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemDistributionRule.validTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.validTo = new core_1.ComplexTypeDatePropertyField('ValidTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDistributionRule.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        return _this;
    }
    return ItemDistributionRuleField;
}(core_1.ComplexTypeField));
exports.ItemDistributionRuleField = ItemDistributionRuleField;
var ItemDistributionRule;
(function (ItemDistributionRule) {
    /**
     * Metadata information on all properties of the `ItemDistributionRule` complex type.
     */
    ItemDistributionRule._propertyMetadata = [{
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ValidFrom',
            name: 'validFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ValidTo',
            name: 'validTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DistributionRule',
            name: 'distributionRule',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule2',
            name: 'distributionRule2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule3',
            name: 'distributionRule3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule4',
            name: 'distributionRule4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule5',
            name: 'distributionRule5',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemDistributionRule);
    }
    ItemDistributionRule.build = build;
})(ItemDistributionRule = exports.ItemDistributionRule || (exports.ItemDistributionRule = {}));
//# sourceMappingURL=ItemDistributionRule.js.map