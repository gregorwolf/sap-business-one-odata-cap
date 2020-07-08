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
exports.WorkflowTask = exports.WorkflowTaskField = exports.createWorkflowTask = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WorkflowTaskInputObject_1 = require("./WorkflowTaskInputObject");
var WorkflowTaskNote_1 = require("./WorkflowTaskNote");
var WorkflowTaskOutputObject_1 = require("./WorkflowTaskOutputObject");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function WorkflowTaskField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WorkflowTask.instanceId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instanceId = new v4_1.ComplexTypeNumberPropertyField('InstanceID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTask.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new v4_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTask.templateId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.templateId = new v4_1.ComplexTypeStringPropertyField('TemplateID', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.templateName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.templateName = new v4_1.ComplexTypeStringPropertyField('TemplateName', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.operation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.operation = new v4_1.ComplexTypeStringPropertyField('Operation', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new v4_1.ComplexTypeStringPropertyField('Type', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.owner]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.owner = new v4_1.ComplexTypeStringPropertyField('Owner', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.priority]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priority = new v4_1.ComplexTypeNumberPropertyField('Priority', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTask.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new v4_1.ComplexTypeStringPropertyField('Status', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTask.workflowTaskInputObjectCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workflowTaskInputObjectCollection = new WorkflowTaskInputObject_1.WorkflowTaskInputObjectField('WorkflowTaskInputObjectCollection', _this);
        /**
         * Representation of the [[WorkflowTask.workflowTaskNoteCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workflowTaskNoteCollection = new WorkflowTaskNote_1.WorkflowTaskNoteField('WorkflowTaskNoteCollection', _this);
        /**
         * Representation of the [[WorkflowTask.workflowTaskOutputObjectCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workflowTaskOutputObjectCollection = new WorkflowTaskOutputObject_1.WorkflowTaskOutputObjectField('WorkflowTaskOutputObjectCollection', _this);
        return _this;
    }
    return WorkflowTaskField;
}(v4_1.ComplexTypeField));
exports.WorkflowTaskField = WorkflowTaskField;
var WorkflowTask;
(function (WorkflowTask) {
    function build(json) {
        return v4_1.createComplexType(json, {
            InstanceID: function (instanceId) { return ({ instanceId: v4_1.edmToTs(instanceId, 'Edm.Int32') }); },
            TaskID: function (taskId) { return ({ taskId: v4_1.edmToTs(taskId, 'Edm.Int32') }); },
            TemplateID: function (templateId) { return ({ templateId: v4_1.edmToTs(templateId, 'Edm.String') }); },
            TemplateName: function (templateName) { return ({ templateName: v4_1.edmToTs(templateName, 'Edm.String') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); },
            Operation: function (operation) { return ({ operation: v4_1.edmToTs(operation, 'Edm.String') }); },
            Type: function (type) { return ({ type: v4_1.edmToTs(type, 'Edm.String') }); },
            Owner: function (owner) { return ({ owner: v4_1.edmToTs(owner, 'Edm.String') }); },
            Priority: function (priority) { return ({ priority: v4_1.edmToTs(priority, 'Edm.Int32') }); },
            Status: function (status) { return ({ status: v4_1.edmToTs(status, 'Edm.String') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            WorkflowTaskInputObjectCollection: function (workflowTaskInputObjectCollection) { return ({ workflowTaskInputObjectCollection: WorkflowTaskInputObject_1.WorkflowTaskInputObject.build(workflowTaskInputObjectCollection) }); },
            WorkflowTaskNoteCollection: function (workflowTaskNoteCollection) { return ({ workflowTaskNoteCollection: WorkflowTaskNote_1.WorkflowTaskNote.build(workflowTaskNoteCollection) }); },
            WorkflowTaskOutputObjectCollection: function (workflowTaskOutputObjectCollection) { return ({ workflowTaskOutputObjectCollection: WorkflowTaskOutputObject_1.WorkflowTaskOutputObject.build(workflowTaskOutputObjectCollection) }); }
        });
    }
    WorkflowTask.build = build;
})(WorkflowTask = exports.WorkflowTask || (exports.WorkflowTask = {}));
//# sourceMappingURL=WorkflowTask.js.map