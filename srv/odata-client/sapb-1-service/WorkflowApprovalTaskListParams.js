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
exports.WorkflowApprovalTaskListParams = exports.WorkflowApprovalTaskListParamsField = exports.createWorkflowApprovalTaskListParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WorkflowApprovalTaskListParams.build]] instead.
 */
function createWorkflowApprovalTaskListParams(json) {
    return WorkflowApprovalTaskListParams.build(json);
}
exports.createWorkflowApprovalTaskListParams = createWorkflowApprovalTaskListParams;
/**
 * WorkflowApprovalTaskListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WorkflowApprovalTaskListParamsField = /** @class */ (function (_super) {
    __extends(WorkflowApprovalTaskListParamsField, _super);
    /**
     * Creates an instance of WorkflowApprovalTaskListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WorkflowApprovalTaskListParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WorkflowApprovalTaskListParams) || this;
        /**
         * Representation of the [[WorkflowApprovalTaskListParams.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeStringPropertyField('Status', _this, 'Edm.String');
        return _this;
    }
    return WorkflowApprovalTaskListParamsField;
}(core_1.ComplexTypeField));
exports.WorkflowApprovalTaskListParamsField = WorkflowApprovalTaskListParamsField;
var WorkflowApprovalTaskListParams;
(function (WorkflowApprovalTaskListParams) {
    /**
     * Metadata information on all properties of the `WorkflowApprovalTaskListParams` complex type.
     */
    WorkflowApprovalTaskListParams._propertyMetadata = [{
            originalName: 'Status',
            name: 'status',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WorkflowApprovalTaskListParams);
    }
    WorkflowApprovalTaskListParams.build = build;
})(WorkflowApprovalTaskListParams = exports.WorkflowApprovalTaskListParams || (exports.WorkflowApprovalTaskListParams = {}));
//# sourceMappingURL=WorkflowApprovalTaskListParams.js.map