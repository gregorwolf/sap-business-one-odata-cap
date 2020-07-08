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
exports.Activities = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ActivitiesRequestBuilder_1 = require("./ActivitiesRequestBuilder");
var CheckInParams_1 = require("./CheckInParams");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Activities" of service "SAPB1".
 */
var Activities = /** @class */ (function (_super) {
    __extends(Activities, _super);
    function Activities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Activities`.
     * @returns A builder that constructs instances of entity type `Activities`.
     */
    Activities.builder = function () {
        return v4_1.Entity.entityBuilder(Activities);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Activities` entity type.
     * @returns A `Activities` request builder.
     */
    Activities.requestBuilder = function () {
        return new ActivitiesRequestBuilder_1.ActivitiesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Activities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Activities`.
     */
    Activities.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Activities);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Activities.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Activities.
     */
    Activities._entityName = 'Activities';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Activities.
     */
    Activities._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Activities._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Activities;
}(v4_1.Entity));
exports.Activities = Activities;
var BusinessPartners_1 = require("./BusinessPartners");
var ActivityTypes_1 = require("./ActivityTypes");
var ActivityLocations_1 = require("./ActivityLocations");
var SalesPersons_1 = require("./SalesPersons");
var Users_1 = require("./Users");
var Countries_1 = require("./Countries");
var ActivityStatuses_1 = require("./ActivityStatuses");
var EmployeesInfo_1 = require("./EmployeesInfo");
var ActivityRecipientLists_1 = require("./ActivityRecipientLists");
(function (Activities) {
    /**
     * Static representation of the [[activityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ACTIVITY_CODE = new v4_1.NumberField('ActivityCode', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.CARD_CODE = new v4_1.StringField('CardCode', Activities, 'Edm.String');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.NOTES = new v4_1.StringField('Notes', Activities, 'Edm.String');
    /**
     * Static representation of the [[activityDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ACTIVITY_DATE = new v4_1.DateField('ActivityDate', Activities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[activityTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ACTIVITY_TIME = new v4_1.TimeField('ActivityTime', Activities, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.START_DATE = new v4_1.DateField('StartDate', Activities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[closeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.CLOSE_DATE = new v4_1.DateField('CloseDate', Activities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.PHONE = new v4_1.StringField('Phone', Activities, 'Edm.String');
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.FAX = new v4_1.StringField('Fax', Activities, 'Edm.String');
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.SUBJECT = new v4_1.NumberField('Subject', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.DOC_TYPE = new v4_1.StringField('DocType', Activities, 'Edm.String');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.DOC_NUM = new v4_1.StringField('DocNum', Activities, 'Edm.String');
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.DOC_ENTRY = new v4_1.StringField('DocEntry', Activities, 'Edm.String');
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.DETAILS = new v4_1.StringField('Details', Activities, 'Edm.String');
    /**
     * Static representation of the [[activityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ACTIVITY_TYPE = new v4_1.NumberField('ActivityType', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.LOCATION = new v4_1.NumberField('Location', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.START_TIME = new v4_1.TimeField('StartTime', Activities, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.END_TIME = new v4_1.TimeField('EndTime', Activities, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[duration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.DURATION = new v4_1.NumberField('Duration', Activities, 'Edm.Double');
    /**
     * Static representation of the [[salesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.SALES_EMPLOYEE = new v4_1.NumberField('SalesEmployee', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.CONTACT_PERSON_CODE = new v4_1.NumberField('ContactPersonCode', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[handledBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.HANDLED_BY = new v4_1.NumberField('HandledBy', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[reminderPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.REMINDER_PERIOD = new v4_1.NumberField('ReminderPeriod', Activities, 'Edm.Double');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.CITY = new v4_1.StringField('City', Activities, 'Edm.String');
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.STREET = new v4_1.StringField('Street', Activities, 'Edm.String');
    /**
     * Static representation of the [[parentObjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.PARENT_OBJECT_ID = new v4_1.NumberField('ParentObjectId', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[parentObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.PARENT_OBJECT_TYPE = new v4_1.StringField('ParentObjectType', Activities, 'Edm.String');
    /**
     * Static representation of the [[room]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ROOM = new v4_1.StringField('Room', Activities, 'Edm.String');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.STATE = new v4_1.StringField('State', Activities, 'Edm.String');
    /**
     * Static representation of the [[previousActivity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.PREVIOUS_ACTIVITY = new v4_1.NumberField('PreviousActivity', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.COUNTRY = new v4_1.StringField('Country', Activities, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.STATUS = new v4_1.NumberField('Status', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[endDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.END_DUE_DATE = new v4_1.DateField('EndDueDate', Activities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docTypeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.DOC_TYPE_EX = new v4_1.StringField('DocTypeEx', Activities, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[seriesStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.SERIES_START_DATE = new v4_1.DateField('SeriesStartDate', Activities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[seriesEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.SERIES_END_DATE = new v4_1.DateField('SeriesEndDate', Activities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[maxOccurrence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.MAX_OCCURRENCE = new v4_1.NumberField('MaxOccurrence', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[interval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.INTERVAL = new v4_1.NumberField('Interval', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[belongedSeriesNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.BELONGED_SERIES_NUM = new v4_1.NumberField('BelongedSeriesNum', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[addressName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ADDRESS_NAME = new v4_1.StringField('AddressName', Activities, 'Edm.String');
    /**
     * Static representation of the [[handledByEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.HANDLED_BY_EMPLOYEE = new v4_1.NumberField('HandledByEmployee', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[recurrenceDayInMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.RECURRENCE_DAY_IN_MONTH = new v4_1.NumberField('RecurrenceDayInMonth', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[recurrenceMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.RECURRENCE_MONTH = new v4_1.NumberField('RecurrenceMonth', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[salesOpportunityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.SALES_OPPORTUNITY_ID = new v4_1.NumberField('SalesOpportunityId', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[salesOpportunityLine]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.SALES_OPPORTUNITY_LINE = new v4_1.NumberField('SalesOpportunityLine', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[handledByRecipientList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.HANDLED_BY_RECIPIENT_LIST = new v4_1.NumberField('HandledByRecipientList', Activities, 'Edm.Int32');
    /**
     * Static representation of the [[uOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.U_OWNER = new v4_1.StringField('U_owner', Activities, 'Edm.String');
    /**
     * Static representation of the [[checkInListParams]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.CHECK_IN_LIST_PARAMS = new v4_1.CollectionField('CheckInListParams', Activities, new CheckInParams_1.CheckInParamsField('', Activities));
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', Activities, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[activityType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ACTIVITY_TYPE_2 = new v4_1.OneToOneLink('ActivityType2', Activities, ActivityTypes_1.ActivityTypes);
    /**
     * Static representation of the one-to-one navigation property [[activityLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ACTIVITY_LOCATION = new v4_1.OneToOneLink('ActivityLocation', Activities, ActivityLocations_1.ActivityLocations);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', Activities, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.USER = new v4_1.OneToOneLink('User', Activities, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.COUNTRY_2 = new v4_1.OneToOneLink('Country2', Activities, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[activityStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ACTIVITY_STATUS = new v4_1.OneToOneLink('ActivityStatus', Activities, ActivityStatuses_1.ActivityStatuses);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', Activities, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[activityRecipientList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Activities.ACTIVITY_RECIPIENT_LIST = new v4_1.OneToOneLink('ActivityRecipientList', Activities, ActivityRecipientLists_1.ActivityRecipientLists);
    /**
     * All fields of the Activities entity.
     */
    Activities._allFields = [
        Activities.ACTIVITY_CODE,
        Activities.CARD_CODE,
        Activities.NOTES,
        Activities.ACTIVITY_DATE,
        Activities.ACTIVITY_TIME,
        Activities.START_DATE,
        Activities.CLOSE_DATE,
        Activities.PHONE,
        Activities.FAX,
        Activities.SUBJECT,
        Activities.DOC_TYPE,
        Activities.DOC_NUM,
        Activities.DOC_ENTRY,
        Activities.DETAILS,
        Activities.ACTIVITY_TYPE,
        Activities.LOCATION,
        Activities.START_TIME,
        Activities.END_TIME,
        Activities.DURATION,
        Activities.SALES_EMPLOYEE,
        Activities.CONTACT_PERSON_CODE,
        Activities.HANDLED_BY,
        Activities.REMINDER_PERIOD,
        Activities.CITY,
        Activities.STREET,
        Activities.PARENT_OBJECT_ID,
        Activities.PARENT_OBJECT_TYPE,
        Activities.ROOM,
        Activities.STATE,
        Activities.PREVIOUS_ACTIVITY,
        Activities.COUNTRY,
        Activities.STATUS,
        Activities.END_DUE_DATE,
        Activities.DOC_TYPE_EX,
        Activities.ATTACHMENT_ENTRY,
        Activities.SERIES_START_DATE,
        Activities.SERIES_END_DATE,
        Activities.MAX_OCCURRENCE,
        Activities.INTERVAL,
        Activities.BELONGED_SERIES_NUM,
        Activities.ADDRESS_NAME,
        Activities.HANDLED_BY_EMPLOYEE,
        Activities.RECURRENCE_DAY_IN_MONTH,
        Activities.RECURRENCE_MONTH,
        Activities.SALES_OPPORTUNITY_ID,
        Activities.SALES_OPPORTUNITY_LINE,
        Activities.HANDLED_BY_RECIPIENT_LIST,
        Activities.U_OWNER,
        Activities.CHECK_IN_LIST_PARAMS,
        Activities.BUSINESS_PARTNER,
        Activities.ACTIVITY_TYPE_2,
        Activities.ACTIVITY_LOCATION,
        Activities.SALES_PERSON,
        Activities.USER,
        Activities.COUNTRY_2,
        Activities.ACTIVITY_STATUS,
        Activities.EMPLOYEE_INFO,
        Activities.ACTIVITY_RECIPIENT_LIST
    ];
    /**
     * All fields selector.
     */
    Activities.ALL_FIELDS = new v4_1.AllFields('*', Activities);
    /**
     * All key fields of the Activities entity.
     */
    Activities._keyFields = [Activities.ACTIVITY_CODE];
    /**
     * Mapping of all key field names to the respective static field property Activities.
     */
    Activities._keys = Activities._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Activities = exports.Activities || (exports.Activities = {}));
exports.Activities = Activities;
//# sourceMappingURL=Activities.js.map