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
exports.ApprovalTemplateTerm = exports.ApprovalTemplateTermField = exports.createApprovalTemplateTerm = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateTerm.build]] instead.
 */
function createApprovalTemplateTerm(json) {
    return ApprovalTemplateTerm.build(json);
}
exports.createApprovalTemplateTerm = createApprovalTemplateTerm;
/**
 * ApprovalTemplateTermField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ApprovalTemplateTermField = /** @class */ (function (_super) {
    __extends(ApprovalTemplateTermField, _super);
    /**
     * Creates an instance of ApprovalTemplateTermField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ApprovalTemplateTermField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ApprovalTemplateTerm) || this;
        /**
         * Representation of the [[ApprovalTemplateTerm.conditionType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.conditionType = new core_1.ComplexTypeEnumPropertyField('ConditionType', _this);
        /**
         * Representation of the [[ApprovalTemplateTerm.operationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.operationType = new core_1.ComplexTypeEnumPropertyField('OperationType', _this);
        /**
         * Representation of the [[ApprovalTemplateTerm.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new core_1.ComplexTypeStringPropertyField('Value', _this, 'Edm.String');
        return _this;
    }
    return ApprovalTemplateTermField;
}(core_1.ComplexTypeField));
exports.ApprovalTemplateTermField = ApprovalTemplateTermField;
var ApprovalTemplateTerm;
(function (ApprovalTemplateTerm) {
    /**
     * Metadata information on all properties of the `ApprovalTemplateTerm` complex type.
     */
    ApprovalTemplateTerm._propertyMetadata = [{
            originalName: 'ConditionType',
            name: 'conditionType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'OperationType',
            name: 'operationType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Value',
            name: 'value',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ApprovalTemplateTerm);
    }
    ApprovalTemplateTerm.build = build;
})(ApprovalTemplateTerm = exports.ApprovalTemplateTerm || (exports.ApprovalTemplateTerm = {}));
//# sourceMappingURL=ApprovalTemplateTerm.js.map