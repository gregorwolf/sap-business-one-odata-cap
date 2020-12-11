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
exports.WorkflowTaskCompleteParams = exports.WorkflowTaskCompleteParamsField = exports.createWorkflowTaskCompleteParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskCompleteParams.build]] instead.
 */
function createWorkflowTaskCompleteParams(json) {
    return WorkflowTaskCompleteParams.build(json);
}
exports.createWorkflowTaskCompleteParams = createWorkflowTaskCompleteParams;
/**
 * WorkflowTaskCompleteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WorkflowTaskCompleteParamsField = /** @class */ (function (_super) {
    __extends(WorkflowTaskCompleteParamsField, _super);
    /**
     * Creates an instance of WorkflowTaskCompleteParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WorkflowTaskCompleteParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WorkflowTaskCompleteParams) || this;
        /**
         * Representation of the [[WorkflowTaskCompleteParams.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new core_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskCompleteParams.note]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.note = new core_1.ComplexTypeStringPropertyField('Note', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskCompleteParams.triggerParams]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.triggerParams = new core_1.ComplexTypeStringPropertyField('TriggerParams', _this, 'Edm.String');
        return _this;
    }
    return WorkflowTaskCompleteParamsField;
}(core_1.ComplexTypeField));
exports.WorkflowTaskCompleteParamsField = WorkflowTaskCompleteParamsField;
var WorkflowTaskCompleteParams;
(function (WorkflowTaskCompleteParams) {
    /**
     * Metadata information on all properties of the `WorkflowTaskCompleteParams` complex type.
     */
    WorkflowTaskCompleteParams._propertyMetadata = [{
            originalName: 'TaskID',
            name: 'taskId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Note',
            name: 'note',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TriggerParams',
            name: 'triggerParams',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WorkflowTaskCompleteParams);
    }
    WorkflowTaskCompleteParams.build = build;
})(WorkflowTaskCompleteParams = exports.WorkflowTaskCompleteParams || (exports.WorkflowTaskCompleteParams = {}));
//# sourceMappingURL=WorkflowTaskCompleteParams.js.map