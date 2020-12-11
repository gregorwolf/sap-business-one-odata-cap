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
exports.EnhancedDiscountGroupParams = exports.EnhancedDiscountGroupParamsField = exports.createEnhancedDiscountGroupParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EnhancedDiscountGroupParams.build]] instead.
 */
function createEnhancedDiscountGroupParams(json) {
    return EnhancedDiscountGroupParams.build(json);
}
exports.createEnhancedDiscountGroupParams = createEnhancedDiscountGroupParams;
/**
 * EnhancedDiscountGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EnhancedDiscountGroupParamsField = /** @class */ (function (_super) {
    __extends(EnhancedDiscountGroupParamsField, _super);
    /**
     * Creates an instance of EnhancedDiscountGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EnhancedDiscountGroupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EnhancedDiscountGroupParams) || this;
        /**
         * Representation of the [[EnhancedDiscountGroupParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[EnhancedDiscountGroupParams.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        /**
         * Representation of the [[EnhancedDiscountGroupParams.objectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.objectCode = new core_1.ComplexTypeStringPropertyField('ObjectCode', _this, 'Edm.String');
        return _this;
    }
    return EnhancedDiscountGroupParamsField;
}(core_1.ComplexTypeField));
exports.EnhancedDiscountGroupParamsField = EnhancedDiscountGroupParamsField;
var EnhancedDiscountGroupParams;
(function (EnhancedDiscountGroupParams) {
    /**
     * Metadata information on all properties of the `EnhancedDiscountGroupParams` complex type.
     */
    EnhancedDiscountGroupParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ObjectCode',
            name: 'objectCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EnhancedDiscountGroupParams);
    }
    EnhancedDiscountGroupParams.build = build;
})(EnhancedDiscountGroupParams = exports.EnhancedDiscountGroupParams || (exports.EnhancedDiscountGroupParams = {}));
//# sourceMappingURL=EnhancedDiscountGroupParams.js.map