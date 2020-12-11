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
exports.WorkflowTaskNote = exports.WorkflowTaskNoteField = exports.createWorkflowTaskNote = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskNote.build]] instead.
 */
function createWorkflowTaskNote(json) {
    return WorkflowTaskNote.build(json);
}
exports.createWorkflowTaskNote = createWorkflowTaskNote;
/**
 * WorkflowTaskNoteField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WorkflowTaskNoteField = /** @class */ (function (_super) {
    __extends(WorkflowTaskNoteField, _super);
    /**
     * Creates an instance of WorkflowTaskNoteField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WorkflowTaskNoteField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WorkflowTaskNote) || this;
        /**
         * Representation of the [[WorkflowTaskNote.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new core_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskNote.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineId', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskNote.note]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.note = new core_1.ComplexTypeStringPropertyField('Note', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskNote.creator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creator = new core_1.ComplexTypeStringPropertyField('Creator', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskNote.noteDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.noteDate = new core_1.ComplexTypeDatePropertyField('NoteDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return WorkflowTaskNoteField;
}(core_1.ComplexTypeField));
exports.WorkflowTaskNoteField = WorkflowTaskNoteField;
var WorkflowTaskNote;
(function (WorkflowTaskNote) {
    /**
     * Metadata information on all properties of the `WorkflowTaskNote` complex type.
     */
    WorkflowTaskNote._propertyMetadata = [{
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
            originalName: 'Note',
            name: 'note',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Creator',
            name: 'creator',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'NoteDate',
            name: 'noteDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WorkflowTaskNote);
    }
    WorkflowTaskNote.build = build;
})(WorkflowTaskNote = exports.WorkflowTaskNote || (exports.WorkflowTaskNote = {}));
//# sourceMappingURL=WorkflowTaskNote.js.map