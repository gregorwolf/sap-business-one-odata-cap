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
exports.WorkflowTaskCompleteParams = exports.WorkflowTaskCompleteParamsField = exports.createWorkflowTaskCompleteParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function WorkflowTaskCompleteParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WorkflowTaskCompleteParams.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new v4_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskCompleteParams.note]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.note = new v4_1.ComplexTypeStringPropertyField('Note', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskCompleteParams.triggerParams]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.triggerParams = new v4_1.ComplexTypeStringPropertyField('TriggerParams', _this, 'Edm.String');
        return _this;
    }
    return WorkflowTaskCompleteParamsField;
}(v4_1.ComplexTypeField));
exports.WorkflowTaskCompleteParamsField = WorkflowTaskCompleteParamsField;
var WorkflowTaskCompleteParams;
(function (WorkflowTaskCompleteParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TaskID: function (taskId) { return ({ taskId: v4_1.edmToTs(taskId, 'Edm.Int32') }); },
            Note: function (note) { return ({ note: v4_1.edmToTs(note, 'Edm.String') }); },
            TriggerParams: function (triggerParams) { return ({ triggerParams: v4_1.edmToTs(triggerParams, 'Edm.String') }); }
        });
    }
    WorkflowTaskCompleteParams.build = build;
})(WorkflowTaskCompleteParams = exports.WorkflowTaskCompleteParams || (exports.WorkflowTaskCompleteParams = {}));
//# sourceMappingURL=WorkflowTaskCompleteParams.js.map