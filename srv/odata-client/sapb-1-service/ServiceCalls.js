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
exports.ServiceCalls = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ServiceCallsRequestBuilder_1 = require("./ServiceCallsRequestBuilder");
var ServiceCallActivity_1 = require("./ServiceCallActivity");
var ServiceCallInventoryExpense_1 = require("./ServiceCallInventoryExpense");
var ServiceCallSolution_1 = require("./ServiceCallSolution");
var ServiceCallScheduling_1 = require("./ServiceCallScheduling");
var ServiceCallBpAddressComponent_1 = require("./ServiceCallBpAddressComponent");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ServiceCalls" of service "SAPB1".
 */
var ServiceCalls = /** @class */ (function (_super) {
    __extends(ServiceCalls, _super);
    function ServiceCalls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ServiceCalls`.
     * @returns A builder that constructs instances of entity type `ServiceCalls`.
     */
    ServiceCalls.builder = function () {
        return core_1.EntityV4.entityBuilder(ServiceCalls);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCalls` entity type.
     * @returns A `ServiceCalls` request builder.
     */
    ServiceCalls.requestBuilder = function () {
        return new ServiceCallsRequestBuilder_1.ServiceCallsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCalls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCalls`.
     */
    ServiceCalls.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ServiceCalls);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ServiceCalls.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ServiceCalls.
     */
    ServiceCalls._entityName = 'ServiceCalls';
    /**
     * Default url path for the according service.
     */
    ServiceCalls._defaultServicePath = '/b1s/v2/';
    return ServiceCalls;
}(core_1.EntityV4));
exports.ServiceCalls = ServiceCalls;
var BusinessPartners_1 = require("./BusinessPartners");
var ServiceContracts_1 = require("./ServiceContracts");
var ServiceCallOrigins_1 = require("./ServiceCallOrigins");
var Items_1 = require("./Items");
var ItemGroups_1 = require("./ItemGroups");
var ServiceCallStatus_1 = require("./ServiceCallStatus");
var ServiceCallTypes_1 = require("./ServiceCallTypes");
var ServiceCallProblemTypes_1 = require("./ServiceCallProblemTypes");
var Users_1 = require("./Users");
var EmployeesInfo_1 = require("./EmployeesInfo");
var Queue_1 = require("./Queue");
var ActivityLocations_1 = require("./ActivityLocations");
var Countries_1 = require("./Countries");
var ServiceCallProblemSubTypes_1 = require("./ServiceCallProblemSubTypes");
(function (ServiceCalls) {
    /**
     * Static representation of the [[serviceCallId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_ID = new core_1.NumberField('ServiceCallID', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SUBJECT = new core_1.StringField('Subject', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[customerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CUSTOMER_CODE = new core_1.StringField('CustomerCode', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CUSTOMER_NAME = new core_1.StringField('CustomerName', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[contactCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CONTACT_CODE = new core_1.NumberField('ContactCode', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[manufacturerSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.MANUFACTURER_SERIAL_NUM = new core_1.StringField('ManufacturerSerialNum', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[internalSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.INTERNAL_SERIAL_NUM = new core_1.StringField('InternalSerialNum', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[contractId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CONTRACT_ID = new core_1.NumberField('ContractID', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[contractEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CONTRACT_END_DATE = new core_1.DateField('ContractEndDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[resolutionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESOLUTION_DATE = new core_1.DateField('ResolutionDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[resolutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESOLUTION_TIME = new core_1.TimeField('ResolutionTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[origin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ORIGIN = new core_1.NumberField('Origin', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ITEM_CODE = new core_1.StringField('ItemCode', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ITEM_DESCRIPTION = new core_1.StringField('ItemDescription', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[itemGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ITEM_GROUP_CODE = new core_1.NumberField('ItemGroupCode', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.STATUS = new core_1.NumberField('Status', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.PRIORITY = new core_1.EnumField('Priority', ServiceCalls);
    /**
     * Static representation of the [[callType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CALL_TYPE = new core_1.NumberField('CallType', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[problemType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.PROBLEM_TYPE = new core_1.NumberField('ProblemType', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[assigneeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ASSIGNEE_CODE = new core_1.NumberField('AssigneeCode', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.DESCRIPTION = new core_1.StringField('Description', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[technicianCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.TECHNICIAN_CODE = new core_1.NumberField('TechnicianCode', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[resolution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESOLUTION = new core_1.StringField('Resolution', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CREATION_DATE = new core_1.DateField('CreationDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CREATION_TIME = new core_1.TimeField('CreationTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[responder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESPONDER = new core_1.NumberField('Responder', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[updatedTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.UPDATED_TIME = new core_1.TimeField('UpdatedTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[belongsToAQueue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BELONGS_TO_A_QUEUE = new core_1.EnumField('BelongsToAQueue', ServiceCalls);
    /**
     * Static representation of the [[responseByTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESPONSE_BY_TIME = new core_1.TimeField('ResponseByTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[responseByDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESPONSE_BY_DATE = new core_1.DateField('ResponseByDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[resolutionOnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESOLUTION_ON_DATE = new core_1.DateField('ResolutionOnDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[responseOnTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESPONSE_ON_TIME = new core_1.TimeField('ResponseOnTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[responseOnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESPONSE_ON_DATE = new core_1.DateField('ResponseOnDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[closingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CLOSING_TIME = new core_1.TimeField('ClosingTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[assignedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ASSIGNED_DATE = new core_1.DateField('AssignedDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[queue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.QUEUE = new core_1.StringField('Queue', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[responseAssignee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESPONSE_ASSIGNEE = new core_1.NumberField('ResponseAssignee', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[entitledforService]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ENTITLEDFOR_SERVICE = new core_1.EnumField('EntitledforService', ServiceCalls);
    /**
     * Static representation of the [[resolutionOnTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.RESOLUTION_ON_TIME = new core_1.TimeField('ResolutionOnTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[assignedTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ASSIGNED_TIME = new core_1.TimeField('AssignedTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CLOSING_DATE = new core_1.DateField('ClosingDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERIES = new core_1.NumberField('Series', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.DOC_NUM = new core_1.NumberField('DocNum', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.HAND_WRITTEN = new core_1.EnumField('HandWritten', ServiceCalls);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.START_DATE = new core_1.DateField('StartDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.START_TIME = new core_1.TimeField('StartTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.END_DUE_DATE = new core_1.DateField('EndDueDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.END_TIME = new core_1.TimeField('EndTime', ServiceCalls, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[duration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.DURATION = new core_1.NumberField('Duration', ServiceCalls, 'Edm.Double');
    /**
     * Static representation of the [[durationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.DURATION_TYPE = new core_1.EnumField('DurationType', ServiceCalls);
    /**
     * Static representation of the [[reminder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.REMINDER = new core_1.EnumField('Reminder', ServiceCalls);
    /**
     * Static representation of the [[reminderPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.REMINDER_PERIOD = new core_1.NumberField('ReminderPeriod', ServiceCalls, 'Edm.Double');
    /**
     * Static representation of the [[reminderType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.REMINDER_TYPE = new core_1.EnumField('ReminderType', ServiceCalls);
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.LOCATION = new core_1.NumberField('Location', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[addressName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ADDRESS_NAME = new core_1.StringField('AddressName', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ADDRESS_TYPE = new core_1.EnumField('AddressType', ServiceCalls);
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.STREET = new core_1.StringField('Street', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CITY = new core_1.StringField('City', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[room]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ROOM = new core_1.StringField('Room', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.STATE = new core_1.StringField('State', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.COUNTRY = new core_1.StringField('Country', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[displayInCalendar]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.DISPLAY_IN_CALENDAR = new core_1.EnumField('DisplayInCalendar', ServiceCalls);
    /**
     * Static representation of the [[customerRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.CUSTOMER_REF_NO = new core_1.StringField('CustomerRefNo', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[problemSubType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.PROBLEM_SUB_TYPE = new core_1.NumberField('ProblemSubType', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[serviceBpType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_BP_TYPE = new core_1.EnumField('ServiceBPType', ServiceCalls);
    /**
     * Static representation of the [[bpContactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_CONTACT_PERSON = new core_1.StringField('BPContactPerson', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bpPhone1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_PHONE_1 = new core_1.StringField('BPPhone1', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bpPhone2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_PHONE_2 = new core_1.StringField('BPPhone2', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bpCellular]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_CELLULAR = new core_1.StringField('BPCellular', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bpFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_FAX = new core_1.StringField('BPFax', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bPeMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.B_PE_MAIL = new core_1.StringField('BPeMail', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bpProjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_PROJECT_CODE = new core_1.StringField('BPProjectCode', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bpTerritory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_TERRITORY = new core_1.NumberField('BPTerritory', ServiceCalls, 'Edm.Int32');
    /**
     * Static representation of the [[bpShipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_SHIP_TO_CODE = new core_1.StringField('BPShipToCode', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bpShipToAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_SHIP_TO_ADDRESS = new core_1.StringField('BPShipToAddress', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bpBillToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_BILL_TO_CODE = new core_1.StringField('BPBillToCode', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[bpBillToAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BP_BILL_TO_ADDRESS = new core_1.StringField('BPBillToAddress', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[telephone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.TELEPHONE = new core_1.StringField('Telephone', ServiceCalls, 'Edm.String');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.UPDATE_DATE = new core_1.DateField('UpdateDate', ServiceCalls, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[serviceCallActivities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_ACTIVITIES = new core_1.CollectionField('ServiceCallActivities', ServiceCalls, ServiceCallActivity_1.ServiceCallActivity);
    /**
     * Static representation of the [[serviceCallInventoryExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_INVENTORY_EXPENSES = new core_1.CollectionField('ServiceCallInventoryExpenses', ServiceCalls, ServiceCallInventoryExpense_1.ServiceCallInventoryExpense);
    /**
     * Static representation of the [[serviceCallSolutions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_SOLUTIONS = new core_1.CollectionField('ServiceCallSolutions', ServiceCalls, ServiceCallSolution_1.ServiceCallSolution);
    /**
     * Static representation of the [[serviceCallSchedulings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_SCHEDULINGS = new core_1.CollectionField('ServiceCallSchedulings', ServiceCalls, ServiceCallScheduling_1.ServiceCallScheduling);
    /**
     * Static representation of the [[serviceCallBpAddressComponents]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_BP_ADDRESS_COMPONENTS = new core_1.CollectionField('ServiceCallBPAddressComponents', ServiceCalls, ServiceCallBpAddressComponent_1.ServiceCallBpAddressComponent);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', ServiceCalls, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[serviceContract]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CONTRACT = new core_1.OneToOneLink('ServiceContract', ServiceCalls, ServiceContracts_1.ServiceContracts);
    /**
     * Static representation of the one-to-one navigation property [[serviceCallOrigin]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_ORIGIN = new core_1.OneToOneLink('ServiceCallOrigin', ServiceCalls, ServiceCallOrigins_1.ServiceCallOrigins);
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ITEM = new core_1.OneToOneLink('Item', ServiceCalls, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ITEM_GROUPS = new core_1.OneToOneLink('ItemGroups', ServiceCalls, ItemGroups_1.ItemGroups);
    /**
     * Static representation of the one-to-one navigation property [[serviceCallStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_STATUS = new core_1.OneToOneLink('ServiceCallStatus', ServiceCalls, ServiceCallStatus_1.ServiceCallStatus);
    /**
     * Static representation of the one-to-one navigation property [[serviceCallType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_TYPE = new core_1.OneToOneLink('ServiceCallType', ServiceCalls, ServiceCallTypes_1.ServiceCallTypes);
    /**
     * Static representation of the one-to-one navigation property [[serviceCallProblemType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_PROBLEM_TYPE = new core_1.OneToOneLink('ServiceCallProblemType', ServiceCalls, ServiceCallProblemTypes_1.ServiceCallProblemTypes);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.USER = new core_1.OneToOneLink('User', ServiceCalls, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', ServiceCalls, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[queue2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.QUEUE_2 = new core_1.OneToOneLink('Queue2', ServiceCalls, Queue_1.Queue);
    /**
     * Static representation of the one-to-one navigation property [[activityLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.ACTIVITY_LOCATION = new core_1.OneToOneLink('ActivityLocation', ServiceCalls, ActivityLocations_1.ActivityLocations);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.COUNTRY_2 = new core_1.OneToOneLink('Country2', ServiceCalls, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[serviceCallProblemSubType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCalls.SERVICE_CALL_PROBLEM_SUB_TYPE = new core_1.OneToOneLink('ServiceCallProblemSubType', ServiceCalls, ServiceCallProblemSubTypes_1.ServiceCallProblemSubTypes);
    /**
     * All fields of the ServiceCalls entity.
     */
    ServiceCalls._allFields = [
        ServiceCalls.SERVICE_CALL_ID,
        ServiceCalls.SUBJECT,
        ServiceCalls.CUSTOMER_CODE,
        ServiceCalls.CUSTOMER_NAME,
        ServiceCalls.CONTACT_CODE,
        ServiceCalls.MANUFACTURER_SERIAL_NUM,
        ServiceCalls.INTERNAL_SERIAL_NUM,
        ServiceCalls.CONTRACT_ID,
        ServiceCalls.CONTRACT_END_DATE,
        ServiceCalls.RESOLUTION_DATE,
        ServiceCalls.RESOLUTION_TIME,
        ServiceCalls.ORIGIN,
        ServiceCalls.ITEM_CODE,
        ServiceCalls.ITEM_DESCRIPTION,
        ServiceCalls.ITEM_GROUP_CODE,
        ServiceCalls.STATUS,
        ServiceCalls.PRIORITY,
        ServiceCalls.CALL_TYPE,
        ServiceCalls.PROBLEM_TYPE,
        ServiceCalls.ASSIGNEE_CODE,
        ServiceCalls.DESCRIPTION,
        ServiceCalls.TECHNICIAN_CODE,
        ServiceCalls.RESOLUTION,
        ServiceCalls.CREATION_DATE,
        ServiceCalls.CREATION_TIME,
        ServiceCalls.RESPONDER,
        ServiceCalls.UPDATED_TIME,
        ServiceCalls.BELONGS_TO_A_QUEUE,
        ServiceCalls.RESPONSE_BY_TIME,
        ServiceCalls.RESPONSE_BY_DATE,
        ServiceCalls.RESOLUTION_ON_DATE,
        ServiceCalls.RESPONSE_ON_TIME,
        ServiceCalls.RESPONSE_ON_DATE,
        ServiceCalls.CLOSING_TIME,
        ServiceCalls.ASSIGNED_DATE,
        ServiceCalls.QUEUE,
        ServiceCalls.RESPONSE_ASSIGNEE,
        ServiceCalls.ENTITLEDFOR_SERVICE,
        ServiceCalls.RESOLUTION_ON_TIME,
        ServiceCalls.ASSIGNED_TIME,
        ServiceCalls.CLOSING_DATE,
        ServiceCalls.SERIES,
        ServiceCalls.DOC_NUM,
        ServiceCalls.HAND_WRITTEN,
        ServiceCalls.PERIOD_INDICATOR,
        ServiceCalls.START_DATE,
        ServiceCalls.START_TIME,
        ServiceCalls.END_DUE_DATE,
        ServiceCalls.END_TIME,
        ServiceCalls.DURATION,
        ServiceCalls.DURATION_TYPE,
        ServiceCalls.REMINDER,
        ServiceCalls.REMINDER_PERIOD,
        ServiceCalls.REMINDER_TYPE,
        ServiceCalls.LOCATION,
        ServiceCalls.ADDRESS_NAME,
        ServiceCalls.ADDRESS_TYPE,
        ServiceCalls.STREET,
        ServiceCalls.CITY,
        ServiceCalls.ROOM,
        ServiceCalls.STATE,
        ServiceCalls.COUNTRY,
        ServiceCalls.DISPLAY_IN_CALENDAR,
        ServiceCalls.CUSTOMER_REF_NO,
        ServiceCalls.PROBLEM_SUB_TYPE,
        ServiceCalls.ATTACHMENT_ENTRY,
        ServiceCalls.SERVICE_BP_TYPE,
        ServiceCalls.BP_CONTACT_PERSON,
        ServiceCalls.BP_PHONE_1,
        ServiceCalls.BP_PHONE_2,
        ServiceCalls.BP_CELLULAR,
        ServiceCalls.BP_FAX,
        ServiceCalls.B_PE_MAIL,
        ServiceCalls.BP_PROJECT_CODE,
        ServiceCalls.BP_TERRITORY,
        ServiceCalls.BP_SHIP_TO_CODE,
        ServiceCalls.BP_SHIP_TO_ADDRESS,
        ServiceCalls.BP_BILL_TO_CODE,
        ServiceCalls.BP_BILL_TO_ADDRESS,
        ServiceCalls.TELEPHONE,
        ServiceCalls.UPDATE_DATE,
        ServiceCalls.SERVICE_CALL_ACTIVITIES,
        ServiceCalls.SERVICE_CALL_INVENTORY_EXPENSES,
        ServiceCalls.SERVICE_CALL_SOLUTIONS,
        ServiceCalls.SERVICE_CALL_SCHEDULINGS,
        ServiceCalls.SERVICE_CALL_BP_ADDRESS_COMPONENTS,
        ServiceCalls.BUSINESS_PARTNER,
        ServiceCalls.SERVICE_CONTRACT,
        ServiceCalls.SERVICE_CALL_ORIGIN,
        ServiceCalls.ITEM,
        ServiceCalls.ITEM_GROUPS,
        ServiceCalls.SERVICE_CALL_STATUS,
        ServiceCalls.SERVICE_CALL_TYPE,
        ServiceCalls.SERVICE_CALL_PROBLEM_TYPE,
        ServiceCalls.USER,
        ServiceCalls.EMPLOYEE_INFO,
        ServiceCalls.QUEUE_2,
        ServiceCalls.ACTIVITY_LOCATION,
        ServiceCalls.COUNTRY_2,
        ServiceCalls.SERVICE_CALL_PROBLEM_SUB_TYPE
    ];
    /**
     * All fields selector.
     */
    ServiceCalls.ALL_FIELDS = new core_1.AllFields('*', ServiceCalls);
    /**
     * All key fields of the ServiceCalls entity.
     */
    ServiceCalls._keyFields = [ServiceCalls.SERVICE_CALL_ID];
    /**
     * Mapping of all key field names to the respective static field property ServiceCalls.
     */
    ServiceCalls._keys = ServiceCalls._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ServiceCalls = exports.ServiceCalls || (exports.ServiceCalls = {}));
exports.ServiceCalls = ServiceCalls;
//# sourceMappingURL=ServiceCalls.js.map