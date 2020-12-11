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
exports.DepreciationLevel = exports.DepreciationLevelField = exports.createDepreciationLevel = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DepreciationLevel.build]] instead.
 */
function createDepreciationLevel(json) {
    return DepreciationLevel.build(json);
}
exports.createDepreciationLevel = createDepreciationLevel;
/**
 * DepreciationLevelField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DepreciationLevelField = /** @class */ (function (_super) {
    __extends(DepreciationLevelField, _super);
    /**
     * Creates an instance of DepreciationLevelField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DepreciationLevelField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DepreciationLevel) || this;
        /**
         * Representation of the [[DepreciationLevel.level]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.level = new core_1.ComplexTypeNumberPropertyField('Level', _this, 'Edm.Int32');
        /**
         * Representation of the [[DepreciationLevel.depreciationCalculationBase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationCalculationBase = new core_1.ComplexTypeEnumPropertyField('DepreciationCalculationBase', _this);
        /**
         * Representation of the [[DepreciationLevel.numberOfYears]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numberOfYears = new core_1.ComplexTypeNumberPropertyField('NumberOfYears', _this, 'Edm.Int32');
        /**
         * Representation of the [[DepreciationLevel.percentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentage = new core_1.ComplexTypeNumberPropertyField('Percentage', _this, 'Edm.Double');
        /**
         * Representation of the [[DepreciationLevel.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new core_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        return _this;
    }
    return DepreciationLevelField;
}(core_1.ComplexTypeField));
exports.DepreciationLevelField = DepreciationLevelField;
var DepreciationLevel;
(function (DepreciationLevel) {
    /**
     * Metadata information on all properties of the `DepreciationLevel` complex type.
     */
    DepreciationLevel._propertyMetadata = [{
            originalName: 'Level',
            name: 'level',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DepreciationCalculationBase',
            name: 'depreciationCalculationBase',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'NumberOfYears',
            name: 'numberOfYears',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Percentage',
            name: 'percentage',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Amount',
            name: 'amount',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DepreciationLevel);
    }
    DepreciationLevel.build = build;
})(DepreciationLevel = exports.DepreciationLevel || (exports.DepreciationLevel = {}));
//# sourceMappingURL=DepreciationLevel.js.map