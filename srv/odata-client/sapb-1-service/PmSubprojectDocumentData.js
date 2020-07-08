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
exports.PmSubprojectDocumentData = exports.PmSubprojectDocumentDataField = exports.createPmSubprojectDocumentData = void 0;
var PmsStageData_1 = require("./PmsStageData");
var PmsOpenIssueData_1 = require("./PmsOpenIssueData");
var PmsDocumentData_1 = require("./PmsDocumentData");
var PmsActivityData_1 = require("./PmsActivityData");
var PmsWorkOrderData_1 = require("./PmsWorkOrderData");
var PmsSummaryData_1 = require("./PmsSummaryData");
var PmsDocAttachement_1 = require("./PmsDocAttachement");
var PmsStageAttachement_1 = require("./PmsStageAttachement");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function PmSubprojectDocumentDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmSubprojectDocumentData.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.owner]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.owner = new v4_1.ComplexTypeNumberPropertyField('Owner', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectName = new v4_1.ComplexTypeStringPropertyField('SubprojectName', _this, 'Edm.String');
        /**
         * Representation of the [[PmSubprojectDocumentData.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmSubprojectDocumentData.finishedPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.finishedPercent = new v4_1.ComplexTypeNumberPropertyField('FinishedPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[PmSubprojectDocumentData.parentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentId = new v4_1.ComplexTypeNumberPropertyField('ParentID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.projectId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectId = new v4_1.ComplexTypeNumberPropertyField('ProjectID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.order]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.order = new v4_1.ComplexTypeNumberPropertyField('Order', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectType = new v4_1.ComplexTypeNumberPropertyField('SubprojectType', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectContribution]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectContribution = new v4_1.ComplexTypeNumberPropertyField('SubprojectContribution', _this, 'Edm.Double');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectEndDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectEndDate = new v4_1.ComplexTypeDatePropertyField('SubprojectEndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmSubprojectDocumentData.actualCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualCost = new v4_1.ComplexTypeNumberPropertyField('ActualCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmSubprojectDocumentData.plannedCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedCost = new v4_1.ComplexTypeNumberPropertyField('PlannedCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmSubprojectDocumentData.subprojectDepth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectDepth = new v4_1.ComplexTypeNumberPropertyField('SubprojectDepth', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmSubprojectDocumentData.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsStagesCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsStagesCollection = new PmsStageData_1.PmsStageDataField('PMS_StagesCollection', _this);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsOpenIssuesCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsOpenIssuesCollection = new PmsOpenIssueData_1.PmsOpenIssueDataField('PMS_OpenIssuesCollection', _this);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsDocumentsCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsDocumentsCollection = new PmsDocumentData_1.PmsDocumentDataField('PMS_DocumentsCollection', _this);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsActivitiesCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsActivitiesCollection = new PmsActivityData_1.PmsActivityDataField('PMS_ActivitiesCollection', _this);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsWorkOrdersCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsWorkOrdersCollection = new PmsWorkOrderData_1.PmsWorkOrderDataField('PMS_WorkOrdersCollection', _this);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsSummaryData]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsSummaryData = new PmsSummaryData_1.PmsSummaryDataField('PMS_SummaryData', _this);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsDocAttachements]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsDocAttachements = new PmsDocAttachement_1.PmsDocAttachementField('PMS_DocAttachements', _this);
        /**
         * Representation of the [[PmSubprojectDocumentData.pmsStageAttachements]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pmsStageAttachements = new PmsStageAttachement_1.PmsStageAttachementField('PMS_StageAttachements', _this);
        return _this;
    }
    return PmSubprojectDocumentDataField;
}(v4_1.ComplexTypeField));
exports.PmSubprojectDocumentDataField = PmSubprojectDocumentDataField;
var PmSubprojectDocumentData;
(function (PmSubprojectDocumentData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            Owner: function (owner) { return ({ owner: v4_1.edmToTs(owner, 'Edm.Int32') }); },
            SubprojectName: function (subprojectName) { return ({ subprojectName: v4_1.edmToTs(subprojectName, 'Edm.String') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            FinishedPercent: function (finishedPercent) { return ({ finishedPercent: v4_1.edmToTs(finishedPercent, 'Edm.Double') }); },
            ParentID: function (parentId) { return ({ parentId: v4_1.edmToTs(parentId, 'Edm.Int32') }); },
            ProjectID: function (projectId) { return ({ projectId: v4_1.edmToTs(projectId, 'Edm.Int32') }); },
            Order: function (order) { return ({ order: v4_1.edmToTs(order, 'Edm.Int32') }); },
            SubprojectType: function (subprojectType) { return ({ subprojectType: v4_1.edmToTs(subprojectType, 'Edm.Int32') }); },
            SubprojectContribution: function (subprojectContribution) { return ({ subprojectContribution: v4_1.edmToTs(subprojectContribution, 'Edm.Double') }); },
            SubprojectEndDate: function (subprojectEndDate) { return ({ subprojectEndDate: v4_1.edmToTs(subprojectEndDate, 'Edm.DateTimeOffset') }); },
            ActualCost: function (actualCost) { return ({ actualCost: v4_1.edmToTs(actualCost, 'Edm.Double') }); },
            PlannedCost: function (plannedCost) { return ({ plannedCost: v4_1.edmToTs(plannedCost, 'Edm.Double') }); },
            SubprojectDepth: function (subprojectDepth) { return ({ subprojectDepth: v4_1.edmToTs(subprojectDepth, 'Edm.Int32') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            PMS_StagesCollection: function (pmsStagesCollection) { return ({ pmsStagesCollection: PmsStageData_1.PmsStageData.build(pmsStagesCollection) }); },
            PMS_OpenIssuesCollection: function (pmsOpenIssuesCollection) { return ({ pmsOpenIssuesCollection: PmsOpenIssueData_1.PmsOpenIssueData.build(pmsOpenIssuesCollection) }); },
            PMS_DocumentsCollection: function (pmsDocumentsCollection) { return ({ pmsDocumentsCollection: PmsDocumentData_1.PmsDocumentData.build(pmsDocumentsCollection) }); },
            PMS_ActivitiesCollection: function (pmsActivitiesCollection) { return ({ pmsActivitiesCollection: PmsActivityData_1.PmsActivityData.build(pmsActivitiesCollection) }); },
            PMS_WorkOrdersCollection: function (pmsWorkOrdersCollection) { return ({ pmsWorkOrdersCollection: PmsWorkOrderData_1.PmsWorkOrderData.build(pmsWorkOrdersCollection) }); },
            PMS_SummaryData: function (pmsSummaryData) { return ({ pmsSummaryData: PmsSummaryData_1.PmsSummaryData.build(pmsSummaryData) }); },
            PMS_DocAttachements: function (pmsDocAttachements) { return ({ pmsDocAttachements: PmsDocAttachement_1.PmsDocAttachement.build(pmsDocAttachements) }); },
            PMS_StageAttachements: function (pmsStageAttachements) { return ({ pmsStageAttachements: PmsStageAttachement_1.PmsStageAttachement.build(pmsStageAttachements) }); }
        });
    }
    PmSubprojectDocumentData.build = build;
})(PmSubprojectDocumentData = exports.PmSubprojectDocumentData || (exports.PmSubprojectDocumentData = {}));
//# sourceMappingURL=PmSubprojectDocumentData.js.map