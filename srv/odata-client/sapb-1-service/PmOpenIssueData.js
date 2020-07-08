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
exports.PmOpenIssueData = exports.PmOpenIssueDataField = exports.createPmOpenIssueData = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmOpenIssueData.build]] instead.
 */
function createPmOpenIssueData(json) {
    return PmOpenIssueData.build(json);
}
exports.createPmOpenIssueData = createPmOpenIssueData;
/**
 * PmOpenIssueDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmOpenIssueDataField = /** @class */ (function (_super) {
    __extends(PmOpenIssueDataField, _super);
    function PmOpenIssueDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmOpenIssueData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.area]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.area = new v4_1.ComplexTypeNumberPropertyField('Area', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.priority]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priority = new v4_1.ComplexTypeNumberPropertyField('Priority', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[PmOpenIssueData.solutionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.solutionId = new v4_1.ComplexTypeNumberPropertyField('SolutionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.responsible]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.responsible = new v4_1.ComplexTypeNumberPropertyField('Responsible', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.enteredBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enteredBy = new v4_1.ComplexTypeNumberPropertyField('EnteredBy', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.enteredDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enteredDate = new v4_1.ComplexTypeDatePropertyField('EnteredDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmOpenIssueData.effort]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effort = new v4_1.ComplexTypeNumberPropertyField('Effort', _this, 'Edm.Double');
        return _this;
    }
    return PmOpenIssueDataField;
}(v4_1.ComplexTypeField));
exports.PmOpenIssueDataField = PmOpenIssueDataField;
var PmOpenIssueData;
(function (PmOpenIssueData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineID: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            Area: function (area) { return ({ area: v4_1.edmToTs(area, 'Edm.Int32') }); },
            Priority: function (priority) { return ({ priority: v4_1.edmToTs(priority, 'Edm.Int32') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            SolutionID: function (solutionId) { return ({ solutionId: v4_1.edmToTs(solutionId, 'Edm.Int32') }); },
            Responsible: function (responsible) { return ({ responsible: v4_1.edmToTs(responsible, 'Edm.Int32') }); },
            EnteredBy: function (enteredBy) { return ({ enteredBy: v4_1.edmToTs(enteredBy, 'Edm.Int32') }); },
            EnteredDate: function (enteredDate) { return ({ enteredDate: v4_1.edmToTs(enteredDate, 'Edm.DateTimeOffset') }); },
            Effort: function (effort) { return ({ effort: v4_1.edmToTs(effort, 'Edm.Double') }); }
        });
    }
    PmOpenIssueData.build = build;
})(PmOpenIssueData = exports.PmOpenIssueData || (exports.PmOpenIssueData = {}));
//# sourceMappingURL=PmOpenIssueData.js.map