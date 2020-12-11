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
exports.WorkflowTask = exports.WorkflowTaskField = exports.createWorkflowTask = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WorkflowTaskInputObject_1 = require("./WorkflowTaskInputObject");
var WorkflowTaskNote_1 = require("./WorkflowTaskNote");
var WorkflowTaskOutputObject_1 = require("./WorkflowTaskOutputObject");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTask.build]] instead.
 */
function createWorkflowTask(json) {
    return WorkflowTask.build(json);
}
exports.createWorkflowTask = createWorkflowTask;
/**
 * WorkflowTaskField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WorkflowTaskField = /** @class */ (function (_super) {
    __extends(WorkflowTaskField, _super);
    /**
     * Creates an instance of WorkflowTaskField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WorkflowTaskField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WorkflowTask) || this;
        /**
         * Representation of the [[WorkflowTask.instanceId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instanceId = new core_1.ComplexTypeNumberPropertyField('InstanceID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTask.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new core_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTask.templateId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.templateId = new core_1.ComplexTypeStringPropertyField('TemplateID', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.templateName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.templateName = new core_1.ComplexTypeStringPropertyField('TemplateName', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.operation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.operation = new core_1.ComplexTypeStringPropertyField('Operation', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeStringPropertyField('Type', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.owner]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.owner = new core_1.ComplexTypeStringPropertyField('Owner', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.priority]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priority = new core_1.ComplexTypeNumberPropertyField('Priority', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTask.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeStringPropertyField('Status', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.workflowTaskInputObjectCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workflowTaskInputObjectCollection = new core_1.CollectionField('WorkflowTaskInputObjectCollection', _this, WorkflowTaskInputObject_1.WorkflowTaskInputObject);
        /**
         * Representation of the [[WorkflowTask.workflowTaskNoteCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workflowTaskNoteCollection = new core_1.CollectionField('WorkflowTaskNoteCollection', _this, WorkflowTaskNote_1.WorkflowTaskNote);
        /**
         * Representation of the [[WorkflowTask.workflowTaskOutputObjectCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workflowTaskOutputObjectCollection = new core_1.CollectionField('WorkflowTaskOutputObjectCollection', _this, WorkflowTaskOutputObject_1.WorkflowTaskOutputObject);
        return _this;
    }
    return WorkflowTaskField;
}(core_1.ComplexTypeField));
exports.WorkflowTaskField = WorkflowTaskField;
var WorkflowTask;
(function (WorkflowTask) {
    /**
     * Metadata information on all properties of the `WorkflowTask` complex type.
     */
    WorkflowTask._propertyMetadata = [{
            originalName: 'InstanceID',
            name: 'instanceId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TaskID',
            name: 'taskId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TemplateID',
            name: 'templateId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TemplateName',
            name: 'templateName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Operation',
            name: 'operation',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Owner',
            name: 'owner',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Priority',
            name: 'priority',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WorkflowTaskInputObjectCollection',
            name: 'workflowTaskInputObjectCollection',
            type: WorkflowTaskInputObject_1.WorkflowTaskInputObject,
            isCollection: true
        }, {
            originalName: 'WorkflowTaskNoteCollection',
            name: 'workflowTaskNoteCollection',
            type: WorkflowTaskNote_1.WorkflowTaskNote,
            isCollection: true
        }, {
            originalName: 'WorkflowTaskOutputObjectCollection',
            name: 'workflowTaskOutputObjectCollection',
            type: WorkflowTaskOutputObject_1.WorkflowTaskOutputObject,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WorkflowTask);
    }
    WorkflowTask.build = build;
})(WorkflowTask = exports.WorkflowTask || (exports.WorkflowTask = {}));
//# sourceMappingURL=WorkflowTask.js.map