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
exports.ProjectManagementTimeSheet = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ProjectManagementTimeSheetRequestBuilder_1 = require("./ProjectManagementTimeSheetRequestBuilder");
var PmTimeSheetLineData_1 = require("./PmTimeSheetLineData");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ProjectManagementTimeSheet" of service "SAPB1".
 */
var ProjectManagementTimeSheet = /** @class */ (function (_super) {
    __extends(ProjectManagementTimeSheet, _super);
    function ProjectManagementTimeSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ProjectManagementTimeSheet`.
     * @returns A builder that constructs instances of entity type `ProjectManagementTimeSheet`.
     */
    ProjectManagementTimeSheet.builder = function () {
        return core_1.EntityV4.entityBuilder(ProjectManagementTimeSheet);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ProjectManagementTimeSheet` entity type.
     * @returns A `ProjectManagementTimeSheet` request builder.
     */
    ProjectManagementTimeSheet.requestBuilder = function () {
        return new ProjectManagementTimeSheetRequestBuilder_1.ProjectManagementTimeSheetRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProjectManagementTimeSheet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProjectManagementTimeSheet`.
     */
    ProjectManagementTimeSheet.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ProjectManagementTimeSheet);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ProjectManagementTimeSheet.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ProjectManagementTimeSheet.
     */
    ProjectManagementTimeSheet._entityName = 'ProjectManagementTimeSheet';
    /**
     * Default url path for the according service.
     */
    ProjectManagementTimeSheet._defaultServicePath = '/b1s/v2/';
    return ProjectManagementTimeSheet;
}(core_1.EntityV4));
exports.ProjectManagementTimeSheet = ProjectManagementTimeSheet;
var EmployeesInfo_1 = require("./EmployeesInfo");
(function (ProjectManagementTimeSheet) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.ABS_ENTRY = new core_1.NumberField('AbsEntry', ProjectManagementTimeSheet, 'Edm.Int32');
    /**
     * Static representation of the [[docNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.DOC_NUMBER = new core_1.NumberField('DocNumber', ProjectManagementTimeSheet, 'Edm.Int32');
    /**
     * Static representation of the [[timeSheetType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.TIME_SHEET_TYPE = new core_1.EnumField('TimeSheetType', ProjectManagementTimeSheet);
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.USER_ID = new core_1.NumberField('UserID', ProjectManagementTimeSheet, 'Edm.Int32');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.LAST_NAME = new core_1.StringField('LastName', ProjectManagementTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.FIRST_NAME = new core_1.StringField('FirstName', ProjectManagementTimeSheet, 'Edm.String');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.DEPARTMENT = new core_1.NumberField('Department', ProjectManagementTimeSheet, 'Edm.Int32');
    /**
     * Static representation of the [[dateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.DATE_FROM = new core_1.DateField('DateFrom', ProjectManagementTimeSheet, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.DATE_TO = new core_1.DateField('DateTo', ProjectManagementTimeSheet, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[pmTimeSheetLineDataCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.PM_TIME_SHEET_LINE_DATA_COLLECTION = new core_1.CollectionField('PM_TimeSheetLineDataCollection', ProjectManagementTimeSheet, PmTimeSheetLineData_1.PmTimeSheetLineData);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProjectManagementTimeSheet.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', ProjectManagementTimeSheet, EmployeesInfo_1.EmployeesInfo);
    /**
     * All fields of the ProjectManagementTimeSheet entity.
     */
    ProjectManagementTimeSheet._allFields = [
        ProjectManagementTimeSheet.ABS_ENTRY,
        ProjectManagementTimeSheet.DOC_NUMBER,
        ProjectManagementTimeSheet.TIME_SHEET_TYPE,
        ProjectManagementTimeSheet.USER_ID,
        ProjectManagementTimeSheet.LAST_NAME,
        ProjectManagementTimeSheet.FIRST_NAME,
        ProjectManagementTimeSheet.DEPARTMENT,
        ProjectManagementTimeSheet.DATE_FROM,
        ProjectManagementTimeSheet.DATE_TO,
        ProjectManagementTimeSheet.PM_TIME_SHEET_LINE_DATA_COLLECTION,
        ProjectManagementTimeSheet.EMPLOYEE_INFO
    ];
    /**
     * All fields selector.
     */
    ProjectManagementTimeSheet.ALL_FIELDS = new core_1.AllFields('*', ProjectManagementTimeSheet);
    /**
     * All key fields of the ProjectManagementTimeSheet entity.
     */
    ProjectManagementTimeSheet._keyFields = [ProjectManagementTimeSheet.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property ProjectManagementTimeSheet.
     */
    ProjectManagementTimeSheet._keys = ProjectManagementTimeSheet._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ProjectManagementTimeSheet = exports.ProjectManagementTimeSheet || (exports.ProjectManagementTimeSheet = {}));
exports.ProjectManagementTimeSheet = ProjectManagementTimeSheet;
//# sourceMappingURL=ProjectManagementTimeSheet.js.map