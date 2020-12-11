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
exports.PmOpenIssueData = exports.PmOpenIssueDataField = exports.createPmOpenIssueData = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PmOpenIssueDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmOpenIssueDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmOpenIssueData) || this;
        /**
         * Representation of the [[PmOpenIssueData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.area]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.area = new core_1.ComplexTypeNumberPropertyField('Area', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.priority]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priority = new core_1.ComplexTypeNumberPropertyField('Priority', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[PmOpenIssueData.closed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.closed = new core_1.ComplexTypeEnumPropertyField('Closed', _this);
        /**
         * Representation of the [[PmOpenIssueData.solutionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.solutionId = new core_1.ComplexTypeNumberPropertyField('SolutionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.responsible]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.responsible = new core_1.ComplexTypeNumberPropertyField('Responsible', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.enteredBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enteredBy = new core_1.ComplexTypeNumberPropertyField('EnteredBy', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmOpenIssueData.enteredDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enteredDate = new core_1.ComplexTypeDatePropertyField('EnteredDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmOpenIssueData.effort]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effort = new core_1.ComplexTypeNumberPropertyField('Effort', _this, 'Edm.Double');
        return _this;
    }
    return PmOpenIssueDataField;
}(core_1.ComplexTypeField));
exports.PmOpenIssueDataField = PmOpenIssueDataField;
var PmOpenIssueData;
(function (PmOpenIssueData) {
    /**
     * Metadata information on all properties of the `PmOpenIssueData` complex type.
     */
    PmOpenIssueData._propertyMetadata = [{
            originalName: 'LineID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Area',
            name: 'area',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Priority',
            name: 'priority',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Closed',
            name: 'closed',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SolutionID',
            name: 'solutionId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Responsible',
            name: 'responsible',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EnteredBy',
            name: 'enteredBy',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EnteredDate',
            name: 'enteredDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Effort',
            name: 'effort',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmOpenIssueData);
    }
    PmOpenIssueData.build = build;
})(PmOpenIssueData = exports.PmOpenIssueData || (exports.PmOpenIssueData = {}));
//# sourceMappingURL=PmOpenIssueData.js.map