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
exports.WorkflowTaskNote = exports.WorkflowTaskNoteField = exports.createWorkflowTaskNote = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function WorkflowTaskNoteField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WorkflowTaskNote.taskId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taskId = new v4_1.ComplexTypeNumberPropertyField('TaskID', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskNote.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineId', _this, 'Edm.Int32');
        /**
         * Representation of the [[WorkflowTaskNote.note]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.note = new v4_1.ComplexTypeStringPropertyField('Note', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskNote.creator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creator = new v4_1.ComplexTypeStringPropertyField('Creator', _this, 'Edm.String');
        /**
         * Representation of the [[WorkflowTaskNote.noteDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.noteDate = new v4_1.ComplexTypeDatePropertyField('NoteDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return WorkflowTaskNoteField;
}(v4_1.ComplexTypeField));
exports.WorkflowTaskNoteField = WorkflowTaskNoteField;
var WorkflowTaskNote;
(function (WorkflowTaskNote) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TaskID: function (taskId) { return ({ taskId: v4_1.edmToTs(taskId, 'Edm.Int32') }); },
            LineId: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            Note: function (note) { return ({ note: v4_1.edmToTs(note, 'Edm.String') }); },
            Creator: function (creator) { return ({ creator: v4_1.edmToTs(creator, 'Edm.String') }); },
            NoteDate: function (noteDate) { return ({ noteDate: v4_1.edmToTs(noteDate, 'Edm.DateTimeOffset') }); }
        });
    }
    WorkflowTaskNote.build = build;
})(WorkflowTaskNote = exports.WorkflowTaskNote || (exports.WorkflowTaskNote = {}));
//# sourceMappingURL=WorkflowTaskNote.js.map