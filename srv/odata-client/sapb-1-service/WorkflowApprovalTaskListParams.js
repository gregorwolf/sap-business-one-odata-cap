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
exports.WorkflowApprovalTaskListParams = exports.WorkflowApprovalTaskListParamsField = exports.createWorkflowApprovalTaskListParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function WorkflowApprovalTaskListParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WorkflowApprovalTaskListParams.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new v4_1.ComplexTypeStringPropertyField('Status', _this, 'Edm.String');
        return _this;
    }
    return WorkflowApprovalTaskListParamsField;
}(v4_1.ComplexTypeField));
exports.WorkflowApprovalTaskListParamsField = WorkflowApprovalTaskListParamsField;
var WorkflowApprovalTaskListParams;
(function (WorkflowApprovalTaskListParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Status: function (status) { return ({ status: v4_1.edmToTs(status, 'Edm.String') }); }
        });
    }
    WorkflowApprovalTaskListParams.build = build;
})(WorkflowApprovalTaskListParams = exports.WorkflowApprovalTaskListParams || (exports.WorkflowApprovalTaskListParams = {}));
//# sourceMappingURL=WorkflowApprovalTaskListParams.js.map