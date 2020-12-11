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
exports.ApprovalRequestParams = exports.ApprovalRequestParamsField = exports.createApprovalRequestParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestParams.build]] instead.
 */
function createApprovalRequestParams(json) {
    return ApprovalRequestParams.build(json);
}
exports.createApprovalRequestParams = createApprovalRequestParams;
/**
 * ApprovalRequestParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ApprovalRequestParamsField = /** @class */ (function (_super) {
    __extends(ApprovalRequestParamsField, _super);
    /**
     * Creates an instance of ApprovalRequestParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ApprovalRequestParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ApprovalRequestParams) || this;
        /**
         * Representation of the [[ApprovalRequestParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[ApprovalRequestParams.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[ApprovalRequestParams.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        return _this;
    }
    return ApprovalRequestParamsField;
}(core_1.ComplexTypeField));
exports.ApprovalRequestParamsField = ApprovalRequestParamsField;
var ApprovalRequestParams;
(function (ApprovalRequestParams) {
    /**
     * Metadata information on all properties of the `ApprovalRequestParams` complex type.
     */
    ApprovalRequestParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ApprovalRequestParams);
    }
    ApprovalRequestParams.build = build;
})(ApprovalRequestParams = exports.ApprovalRequestParams || (exports.ApprovalRequestParams = {}));
//# sourceMappingURL=ApprovalRequestParams.js.map