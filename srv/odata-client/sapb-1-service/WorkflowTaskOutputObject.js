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
exports.WorkflowTaskOutputObject = exports.WorkflowTaskOutputObjectField = exports.createWorkflowTaskOutputObject = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskOutputObject.build]] instead.
 */
function createWorkflowTaskOutputObject(json) {
    return WorkflowTaskOutputObject.build(json);
}
exports.createWorkflowTaskOutputObject = createWorkflowTaskOutputObject;
/**
 * WorkflowTaskOutputObjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WorkflowTaskOutputObjectField = /** @class */ (function (_super) {
    __extends(WorkflowTaskOutputObjectField, _super);
    function WorkflowTaskOutputObjectField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WorkflowTaskOutputObject.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new v4_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskOutputObject.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeStringPropertyField('LineId', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskOutputObject.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new v4_1.ComplexTypeStringPropertyField('Type', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskOutputObject.key]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.key = new v4_1.ComplexTypeStringPropertyField('Key', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskOutputObject.subType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subType = new v4_1.ComplexTypeStringPropertyField('SubType', _this, 'Edm.String');
        return _this;
    }
    return WorkflowTaskOutputObjectField;
}(v4_1.ComplexTypeField));
exports.WorkflowTaskOutputObjectField = WorkflowTaskOutputObjectField;
var WorkflowTaskOutputObject;
(function (WorkflowTaskOutputObject) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TaskID: function (taskId) { return ({ taskId: v4_1.edmToTs(taskId, 'Edm.Int32') }); },
            LineId: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.String') }); },
            Type: function (type) { return ({ type: v4_1.edmToTs(type, 'Edm.String') }); },
            Key: function (key) { return ({ key: v4_1.edmToTs(key, 'Edm.String') }); },
            SubType: function (subType) { return ({ subType: v4_1.edmToTs(subType, 'Edm.String') }); }
        });
    }
    WorkflowTaskOutputObject.build = build;
})(WorkflowTaskOutputObject = exports.WorkflowTaskOutputObject || (exports.WorkflowTaskOutputObject = {}));
//# sourceMappingURL=WorkflowTaskOutputObject.js.map