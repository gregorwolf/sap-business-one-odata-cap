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
exports.PmSubprojectDocumentData = exports.PmSubprojectDocumentDataField = exports.createPmSubprojectDocumentData = void 0;
var PmsStageData_1 = require("./PmsStageData");
var PmsOpenIssueData_1 = require("./PmsOpenIssueData");
var PmsDocumentData_1 = require("./PmsDocumentData");
var PmsActivityData_1 = require("./PmsActivityData");
var PmsWorkOrderData_1 = require("./PmsWorkOrderData");
var PmsSummaryData_1 = require("./PmsSummaryData");
var PmsDocAttachement_1 = require("./PmsDocAttachement");
var PmsStageAttachement_1 = require("./PmsStageAttachement");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmSubprojectDocumentData.build]] instead.
 */
function createPmSubprojectDocumentData(json) {
    return PmSubprojectDocumentData.build(json);
}
exports.createPmSubprojectDocumentData = createPmSubprojectDocumentData;
/**
 * PmSubprojectDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmSubprojectDocumentDataField = /** @class */ (function (_super) {
    __extends(PmSubprojectDocumentDataField, _super);
    /**
     * Creates an instance of PmSubprojectDocumentDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmSubprojectDocumentDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmSubprojectDocumentData) || this;
        /**
         * Representation of the [[PmSubprojectDocumentData.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.owner]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.owner = new core_1.ComplexTypeNumberPropertyField('Owner', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectName = new core_1.ComplexTypeStringPropertyField('SubprojectName', _this, 'Edm.String');
        /**
         * Representation of the [[PmSubprojectDocumentData.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmSubprojectDocumentData.finishedPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.finishedPercent = new core_1.ComplexTypeNumberPropertyField('FinishedPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[PmSubprojectDocumentData.parentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentId = new core_1.ComplexTypeNumberPropertyField('ParentID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.projectId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectId = new core_1.ComplexTypeNumberPropertyField('ProjectID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.order]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.order = new core_1.ComplexTypeNumberPropertyField('Order', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectType = new core_1.ComplexTypeNumberPropertyField('SubprojectType', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectContribution]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectContribution = new core_1.ComplexTypeNumberPropertyField('SubprojectContribution', _this, 'Edm.Double');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectStatus = new core_1.ComplexTypeEnumPropertyField('SubprojectStatus', _this);
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectEndDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectEndDate = new core_1.ComplexTypeDatePropertyField('SubprojectEndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmSubprojectDocumentData.actualCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualCost = new core_1.ComplexTypeNumberPropertyField('ActualCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmSubprojectDocumentData.plannedCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedCost = new core_1.ComplexTypeNumberPropertyField('PlannedCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectDepth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectDepth = new core_1.ComplexTypeNumberPropertyField('SubprojectDepth', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsStagesCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsStagesCollection = new core_1.CollectionField('PMS_StagesCollection', _this, PmsStageData_1.PmsStageData);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsOpenIssuesCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsOpenIssuesCollection = new core_1.CollectionField('PMS_OpenIssuesCollection', _this, PmsOpenIssueData_1.PmsOpenIssueData);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsDocumentsCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsDocumentsCollection = new core_1.CollectionField('PMS_DocumentsCollection', _this, PmsDocumentData_1.PmsDocumentData);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsActivitiesCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsActivitiesCollection = new core_1.CollectionField('PMS_ActivitiesCollection', _this, PmsActivityData_1.PmsActivityData);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsWorkOrdersCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsWorkOrdersCollection = new core_1.CollectionField('PMS_WorkOrdersCollection', _this, PmsWorkOrderData_1.PmsWorkOrderData);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsSummaryData]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsSummaryData = new PmsSummaryData_1.PmsSummaryDataField('PMS_SummaryData', _this);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsDocAttachements]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsDocAttachements = new core_1.CollectionField('PMS_DocAttachements', _this, PmsDocAttachement_1.PmsDocAttachement);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsStageAttachements]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsStageAttachements = new core_1.CollectionField('PMS_StageAttachements', _this, PmsStageAttachement_1.PmsStageAttachement);
        return _this;
    }
    return PmSubprojectDocumentDataField;
}(core_1.ComplexTypeField));
exports.PmSubprojectDocumentDataField = PmSubprojectDocumentDataField;
var PmSubprojectDocumentData;
(function (PmSubprojectDocumentData) {
    /**
     * Metadata information on all properties of the `PmSubprojectDocumentData` complex type.
     */
    PmSubprojectDocumentData._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Owner',
            name: 'owner',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SubprojectName',
            name: 'subprojectName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StartDate',
            name: 'startDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'FinishedPercent',
            name: 'finishedPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ParentID',
            name: 'parentId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ProjectID',
            name: 'projectId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Order',
            name: 'order',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SubprojectType',
            name: 'subprojectType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SubprojectContribution',
            name: 'subprojectContribution',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SubprojectStatus',
            name: 'subprojectStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SubprojectEndDate',
            name: 'subprojectEndDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ActualCost',
            name: 'actualCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PlannedCost',
            name: 'plannedCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SubprojectDepth',
            name: 'subprojectDepth',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'PMS_StagesCollection',
            name: 'pmsStagesCollection',
            type: PmsStageData_1.PmsStageData,
            isCollection: true
        }, {
            originalName: 'PMS_OpenIssuesCollection',
            name: 'pmsOpenIssuesCollection',
            type: PmsOpenIssueData_1.PmsOpenIssueData,
            isCollection: true
        }, {
            originalName: 'PMS_DocumentsCollection',
            name: 'pmsDocumentsCollection',
            type: PmsDocumentData_1.PmsDocumentData,
            isCollection: true
        }, {
            originalName: 'PMS_ActivitiesCollection',
            name: 'pmsActivitiesCollection',
            type: PmsActivityData_1.PmsActivityData,
            isCollection: true
        }, {
            originalName: 'PMS_WorkOrdersCollection',
            name: 'pmsWorkOrdersCollection',
            type: PmsWorkOrderData_1.PmsWorkOrderData,
            isCollection: true
        }, {
            originalName: 'PMS_SummaryData',
            name: 'pmsSummaryData',
            type: PmsSummaryData_1.PmsSummaryData,
            isCollection: false
        }, {
            originalName: 'PMS_DocAttachements',
            name: 'pmsDocAttachements',
            type: PmsDocAttachement_1.PmsDocAttachement,
            isCollection: true
        }, {
            originalName: 'PMS_StageAttachements',
            name: 'pmsStageAttachements',
            type: PmsStageAttachement_1.PmsStageAttachement,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmSubprojectDocumentData);
    }
    PmSubprojectDocumentData.build = build;
})(PmSubprojectDocumentData = exports.PmSubprojectDocumentData || (exports.PmSubprojectDocumentData = {}));
//# sourceMappingURL=PmSubprojectDocumentData.js.map