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
exports.ApprovalRequestDecision = exports.ApprovalRequestDecisionField = exports.createApprovalRequestDecision = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestDecision.build]] instead.
 */
function createApprovalRequestDecision(json) {
    return ApprovalRequestDecision.build(json);
}
exports.createApprovalRequestDecision = createApprovalRequestDecision;
/**
 * ApprovalRequestDecisionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ApprovalRequestDecisionField = /** @class */ (function (_super) {
    __extends(ApprovalRequestDecisionField, _super);
    /**
     * Creates an instance of ApprovalRequestDecisionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ApprovalRequestDecisionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ApprovalRequestDecision) || this;
        /**
         * Representation of the [[ApprovalRequestDecision.approverUserName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approverUserName = new core_1.ComplexTypeStringPropertyField('ApproverUserName', _this, 'Edm.String');
        /**
         * Representation of the [[ApprovalRequestDecision.approverPassword]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approverPassword = new core_1.ComplexTypeStringPropertyField('ApproverPassword', _this, 'Edm.String');
        /**
         * Representation of the [[ApprovalRequestDecision.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[ApprovalRequestDecision.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return ApprovalRequestDecisionField;
}(core_1.ComplexTypeField));
exports.ApprovalRequestDecisionField = ApprovalRequestDecisionField;
var ApprovalRequestDecision;
(function (ApprovalRequestDecision) {
    /**
     * Metadata information on all properties of the `ApprovalRequestDecision` complex type.
     */
    ApprovalRequestDecision._propertyMetadata = [{
            originalName: 'ApproverUserName',
            name: 'approverUserName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ApproverPassword',
            name: 'approverPassword',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ApprovalRequestDecision);
    }
    ApprovalRequestDecision.build = build;
})(ApprovalRequestDecision = exports.ApprovalRequestDecision || (exports.ApprovalRequestDecision = {}));
//# sourceMappingURL=ApprovalRequestDecision.js.map