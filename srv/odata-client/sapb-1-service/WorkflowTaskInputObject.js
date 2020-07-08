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
exports.WorkflowTaskInputObject = exports.WorkflowTaskInputObjectField = exports.createWorkflowTaskInputObject = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskInputObject.build]] instead.
 */
function createWorkflowTaskInputObject(json) {
    return WorkflowTaskInputObject.build(json);
}
exports.createWorkflowTaskInputObject = createWorkflowTaskInputObject;
/**
 * WorkflowTaskInputObjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WorkflowTaskInputObjectField = /** @class */ (function (_super) {
    __extends(WorkflowTaskInputObjectField, _super);
    function WorkflowTaskInputObjectField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WorkflowTaskInputObject.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new v4_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskInputObject.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineId', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskInputObject.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new v4_1.ComplexTypeStringPropertyField('Type', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskInputObject.key]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.key = new v4_1.ComplexTypeStringPropertyField('Key', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskInputObject.subType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subType = new v4_1.ComplexTypeStringPropertyField('SubType', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskInputObject.detail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.detail = new v4_1.ComplexTypeStringPropertyField('Detail', _this, 'Edm.String');
        return _this;
    }
    return WorkflowTaskInputObjectField;
}(v4_1.ComplexTypeField));
exports.WorkflowTaskInputObjectField = WorkflowTaskInputObjectField;
var WorkflowTaskInputObject;
(function (WorkflowTaskInputObject) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TaskID: function (taskId) { return ({ taskId: v4_1.edmToTs(taskId, 'Edm.Int32') }); },
            LineId: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            Type: function (type) { return ({ type: v4_1.edmToTs(type, 'Edm.String') }); },
            Key: function (key) { return ({ key: v4_1.edmToTs(key, 'Edm.String') }); },
            SubType: function (subType) { return ({ subType: v4_1.edmToTs(subType, 'Edm.String') }); },
            Detail: function (detail) { return ({ detail: v4_1.edmToTs(detail, 'Edm.String') }); }
        });
    }
    WorkflowTaskInputObject.build = build;
})(WorkflowTaskInputObject = exports.WorkflowTaskInputObject || (exports.WorkflowTaskInputObject = {}));
//# sourceMappingURL=WorkflowTaskInputObject.js.map