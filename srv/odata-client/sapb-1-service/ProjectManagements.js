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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectManagements = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ProjectManagementsRequestBuilder_1 = require("./ProjectManagementsRequestBuilder");
var PmStageData_1 = require("./PmStageData");
var PmOpenIssueData_1 = require("./PmOpenIssueData");
var PmDocumentData_1 = require("./PmDocumentData");
var PmActivityData_1 = require("./PmActivityData");
var PmWorkOrderData_1 = require("./PmWorkOrderData");
var PmSummaryData_1 = require("./PmSummaryData");
var PmDocAttachement_1 = require("./PmDocAttachement");
var PmStageAttachement_1 = require("./PmStageAttachement");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ProjectManagements" of service "SAPB1".
 */
var ProjectManagements = /** @class */ (function (_super) {
    __extends(ProjectManagements, _super);
    function ProjectManagements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ProjectManagements`.
     * @returns A builder that constructs instances of entity type `ProjectManagements`.
     */
    ProjectManagements.builder = function () {
        return v4_1.Entity.entityBuilder(ProjectManagements);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ProjectManagements` entity type.
     * @returns A `ProjectManagements` request builder.
     */
    ProjectManagements.requestBuilder = function () {
        return new ProjectManagementsRequestBuilder_1.ProjectManagementsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProjectManagements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProjectManagements`.
     */
    ProjectManagements.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ProjectManagements);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ProjectManagements.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ProjectManagements.
     */
    ProjectManagements._entityName = 'ProjectManagements';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ProjectManagements.
     */
    ProjectManagements._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ProjectManagements._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ProjectManagements;
}(v4_1.Entity));
exports.ProjectManagements = ProjectManagements;
var EmployeesInfo_1 = require("./EmployeesInfo");
var BusinessPartners_1 = require("./BusinessPartners");
var Territories_1 = require("./Territories");
var SalesPersons_1 = require("./SalesPersons");
var Projects_1 = require("./Projects");
var Industries_1 = require("./Industries");
var Attachments2_1 = require("./Attachments2");
(function (ProjectManagements) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.ABS_ENTRY = new v4_1.NumberField('AbsEntry', ProjectManagements, 'Edm.Int32');
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.OWNER = new v4_1.NumberField('Owner', ProjectManagements, 'Edm.Int32');
    /**
     * Static representation of the [[projectName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PROJECT_NAME = new v4_1.StringField('ProjectName', ProjectManagements, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.START_DATE = new v4_1.DateField('StartDate', ProjectManagements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[finishedPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.FINISHED_PERCENT = new v4_1.NumberField('FinishedPercent', ProjectManagements, 'Edm.Double');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.DOC_NUM = new v4_1.NumberField('DocNum', ProjectManagements, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.SERIES = new v4_1.NumberField('Series', ProjectManagements, 'Edm.Int32');
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.BUSINESS_PARTNER = new v4_1.StringField('BusinessPartner', ProjectManagements, 'Edm.String');
    /**
     * Static representation of the [[businessPartnerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.BUSINESS_PARTNER_NAME = new v4_1.StringField('BusinessPartnerName', ProjectManagements, 'Edm.String');
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.CONTACT_PERSON = new v4_1.NumberField('ContactPerson', ProjectManagements, 'Edm.Int32');
    /**
     * Static representation of the [[territory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.TERRITORY = new v4_1.NumberField('Territory', ProjectManagements, 'Edm.Int32');
    /**
     * Static representation of the [[salesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.SALES_EMPLOYEE = new v4_1.NumberField('SalesEmployee', ProjectManagements, 'Edm.Int32');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.DUE_DATE = new v4_1.DateField('DueDate', ProjectManagements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.CLOSING_DATE = new v4_1.DateField('ClosingDate', ProjectManagements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialProject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.FINANCIAL_PROJECT = new v4_1.StringField('FinancialProject', ProjectManagements, 'Edm.String');
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.INDUSTRY = new v4_1.NumberField('Industry', ProjectManagements, 'Edm.Int32');
    /**
     * Static representation of the [[reason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.REASON = new v4_1.StringField('Reason', ProjectManagements, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', ProjectManagements, 'Edm.Int32');
    /**
     * Static representation of the [[pmStagesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PM_STAGES_COLLECTION = new v4_1.CollectionField('PM_StagesCollection', ProjectManagements, new PmStageData_1.PmStageDataField('', ProjectManagements));
    /**
     * Static representation of the [[pmOpenIssuesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PM_OPEN_ISSUES_COLLECTION = new v4_1.CollectionField('PM_OpenIssuesCollection', ProjectManagements, new PmOpenIssueData_1.PmOpenIssueDataField('', ProjectManagements));
    /**
     * Static representation of the [[pmDocumentsCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PM_DOCUMENTS_COLLECTION = new v4_1.CollectionField('PM_DocumentsCollection', ProjectManagements, new PmDocumentData_1.PmDocumentDataField('', ProjectManagements));
    /**
     * Static representation of the [[pmActivitiesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PM_ACTIVITIES_COLLECTION = new v4_1.CollectionField('PM_ActivitiesCollection', ProjectManagements, new PmActivityData_1.PmActivityDataField('', ProjectManagements));
    /**
     * Static representation of the [[pmWorkOrdersCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PM_WORK_ORDERS_COLLECTION = new v4_1.CollectionField('PM_WorkOrdersCollection', ProjectManagements, new PmWorkOrderData_1.PmWorkOrderDataField('', ProjectManagements));
    /**
     * Static representation of the [[pmSummaryData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PM_SUMMARY_DATA = new PmSummaryData_1.PmSummaryDataField('PM_SummaryData', ProjectManagements);
    /**
     * Static representation of the [[pmDocAttachements]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PM_DOC_ATTACHEMENTS = new v4_1.CollectionField('PM_DocAttachements', ProjectManagements, new PmDocAttachement_1.PmDocAttachementField('', ProjectManagements));
    /**
     * Static representation of the [[pmStageAttachements]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PM_STAGE_ATTACHEMENTS = new v4_1.CollectionField('PM_StageAttachements', ProjectManagements, new PmStageAttachement_1.PmStageAttachementField('', ProjectManagements));
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', ProjectManagements, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.BUSINESS_PARTNER_2 = new v4_1.OneToOneLink('BusinessPartner2', ProjectManagements, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[territory2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.TERRITORY_2 = new v4_1.OneToOneLink('Territory2', ProjectManagements, Territories_1.Territories);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', ProjectManagements, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.PROJECT = new v4_1.OneToOneLink('Project', ProjectManagements, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[industry2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.INDUSTRY_2 = new v4_1.OneToOneLink('Industry2', ProjectManagements, Industries_1.Industries);
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagements.ATTACHMENTS_2 = new v4_1.OneToOneLink('Attachments2', ProjectManagements, Attachments2_1.Attachments2);
    /**
     * All fields of the ProjectManagements entity.
     */
    ProjectManagements._allFields = [
        ProjectManagements.ABS_ENTRY,
        ProjectManagements.OWNER,
        ProjectManagements.PROJECT_NAME,
        ProjectManagements.START_DATE,
        ProjectManagements.FINISHED_PERCENT,
        ProjectManagements.DOC_NUM,
        ProjectManagements.SERIES,
        ProjectManagements.BUSINESS_PARTNER,
        ProjectManagements.BUSINESS_PARTNER_NAME,
        ProjectManagements.CONTACT_PERSON,
        ProjectManagements.TERRITORY,
        ProjectManagements.SALES_EMPLOYEE,
        ProjectManagements.DUE_DATE,
        ProjectManagements.CLOSING_DATE,
        ProjectManagements.FINANCIAL_PROJECT,
        ProjectManagements.INDUSTRY,
        ProjectManagements.REASON,
        ProjectManagements.ATTACHMENT_ENTRY,
        ProjectManagements.PM_STAGES_COLLECTION,
        ProjectManagements.PM_OPEN_ISSUES_COLLECTION,
        ProjectManagements.PM_DOCUMENTS_COLLECTION,
        ProjectManagements.PM_ACTIVITIES_COLLECTION,
        ProjectManagements.PM_WORK_ORDERS_COLLECTION,
        ProjectManagements.PM_SUMMARY_DATA,
        ProjectManagements.PM_DOC_ATTACHEMENTS,
        ProjectManagements.PM_STAGE_ATTACHEMENTS,
        ProjectManagements.EMPLOYEE_INFO,
        ProjectManagements.BUSINESS_PARTNER_2,
        ProjectManagements.TERRITORY_2,
        ProjectManagements.SALES_PERSON,
        ProjectManagements.PROJECT,
        ProjectManagements.INDUSTRY_2,
        ProjectManagements.ATTACHMENTS_2
    ];
    /**
     * All fields selector.
     */
    ProjectManagements.ALL_FIELDS = new v4_1.AllFields('*', ProjectManagements);
    /**
     * All key fields of the ProjectManagements entity.
     */
    ProjectManagements._keyFields = [ProjectManagements.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property ProjectManagements.
     */
    ProjectManagements._keys = ProjectManagements._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ProjectManagements = exports.ProjectManagements || (exports.ProjectManagements = {}));
exports.ProjectManagements = ProjectManagements;
//# sourceMappingURL=ProjectManagements.js.map