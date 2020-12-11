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
exports.WorkflowTaskInputObject = exports.WorkflowTaskInputObjectField = exports.createWorkflowTaskInputObject = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of WorkflowTaskInputObjectField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WorkflowTaskInputObjectField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WorkflowTaskInputObject) || this;
        /**
         * Representation of the [[WorkflowTaskInputObject.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new core_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskInputObject.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineId', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskInputObject.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeStringPropertyField('Type', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskInputObject.key]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.key = new core_1.ComplexTypeStringPropertyField('Key', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskInputObject.subType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subType = new core_1.ComplexTypeStringPropertyField('SubType', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskInputObject.detail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.detail = new core_1.ComplexTypeStringPropertyField('Detail', _this, 'Edm.String');
        return _this;
    }
    return WorkflowTaskInputObjectField;
}(core_1.ComplexTypeField));
exports.WorkflowTaskInputObjectField = WorkflowTaskInputObjectField;
var WorkflowTaskInputObject;
(function (WorkflowTaskInputObject) {
    /**
     * Metadata information on all properties of the `WorkflowTaskInputObject` complex type.
     */
    WorkflowTaskInputObject._propertyMetadata = [{
            originalName: 'TaskID',
            name: 'taskId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineId',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Key',
            name: 'key',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SubType',
            name: 'subType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Detail',
            name: 'detail',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WorkflowTaskInputObject);
    }
    WorkflowTaskInputObject.build = build;
})(WorkflowTaskInputObject = exports.WorkflowTaskInputObject || (exports.WorkflowTaskInputObject = {}));
//# sourceMappingURL=WorkflowTaskInputObject.js.map