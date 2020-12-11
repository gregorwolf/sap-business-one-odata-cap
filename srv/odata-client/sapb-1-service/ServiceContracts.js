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
exports.ServiceContracts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ServiceContractsRequestBuilder_1 = require("./ServiceContractsRequestBuilder");
var ServiceContractLine_1 = require("./ServiceContractLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ServiceContracts" of service "SAPB1".
 */
var ServiceContracts = /** @class */ (function (_super) {
    __extends(ServiceContracts, _super);
    function ServiceContracts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ServiceContracts`.
     * @returns A builder that constructs instances of entity type `ServiceContracts`.
     */
    ServiceContracts.builder = function () {
        return core_1.EntityV4.entityBuilder(ServiceContracts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ServiceContracts` entity type.
     * @returns A `ServiceContracts` request builder.
     */
    ServiceContracts.requestBuilder = function () {
        return new ServiceContractsRequestBuilder_1.ServiceContractsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceContracts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceContracts`.
     */
    ServiceContracts.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ServiceContracts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ServiceContracts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ServiceContracts.
     */
    ServiceContracts._entityName = 'ServiceContracts';
    /**
     * Default url path for the according service.
     */
    ServiceContracts._defaultServicePath = '/b1s/v2/';
    return ServiceContracts;
}(core_1.EntityV4));
exports.ServiceContracts = ServiceContracts;
var BusinessPartners_1 = require("./BusinessPartners");
var Users_1 = require("./Users");
var ContractTemplates_1 = require("./ContractTemplates");
var Attachments2_1 = require("./Attachments2");
var ServiceCalls_1 = require("./ServiceCalls");
(function (ServiceContracts) {
    /**
     * Static representation of the [[contractId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.CONTRACT_ID = new core_1.NumberField('ContractID', ServiceContracts, 'Edm.Int32');
    /**
     * Static representation of the [[customerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.CUSTOMER_CODE = new core_1.StringField('CustomerCode', ServiceContracts, 'Edm.String');
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.CUSTOMER_NAME = new core_1.StringField('CustomerName', ServiceContracts, 'Edm.String');
    /**
     * Static representation of the [[contactCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.CONTACT_CODE = new core_1.NumberField('ContactCode', ServiceContracts, 'Edm.Int32');
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.OWNER = new core_1.NumberField('Owner', ServiceContracts, 'Edm.Int32');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.STATUS = new core_1.EnumField('Status', ServiceContracts);
    /**
     * Static representation of the [[contractTemplate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.CONTRACT_TEMPLATE = new core_1.StringField('ContractTemplate', ServiceContracts, 'Edm.String');
    /**
     * Static representation of the [[contractType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.CONTRACT_TYPE = new core_1.EnumField('ContractType', ServiceContracts);
    /**
     * Static representation of the [[renewal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.RENEWAL = new core_1.EnumField('Renewal', ServiceContracts);
    /**
     * Static representation of the [[reminderTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.REMINDER_TIME = new core_1.NumberField('ReminderTime', ServiceContracts, 'Edm.Int32');
    /**
     * Static representation of the [[remindUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.REMIND_UNIT = new core_1.EnumField('RemindUnit', ServiceContracts);
    /**
     * Static representation of the [[durationOfCoverage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.DURATION_OF_COVERAGE = new core_1.NumberField('DurationOfCoverage', ServiceContracts, 'Edm.Int32');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.START_DATE = new core_1.DateField('StartDate', ServiceContracts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.END_DATE = new core_1.DateField('EndDate', ServiceContracts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[resolutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.RESOLUTION_TIME = new core_1.NumberField('ResolutionTime', ServiceContracts, 'Edm.Int32');
    /**
     * Static representation of the [[resolutionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.RESOLUTION_UNIT = new core_1.EnumField('ResolutionUnit', ServiceContracts);
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.DESCRIPTION = new core_1.StringField('Description', ServiceContracts, 'Edm.String');
    /**
     * Static representation of the [[mondayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.MONDAY_ENABLED = new core_1.EnumField('MondayEnabled', ServiceContracts);
    /**
     * Static representation of the [[tuesdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.TUESDAY_ENABLED = new core_1.EnumField('TuesdayEnabled', ServiceContracts);
    /**
     * Static representation of the [[wednesdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.WEDNESDAY_ENABLED = new core_1.EnumField('WednesdayEnabled', ServiceContracts);
    /**
     * Static representation of the [[thursdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.THURSDAY_ENABLED = new core_1.EnumField('ThursdayEnabled', ServiceContracts);
    /**
     * Static representation of the [[fridayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.FRIDAY_ENABLED = new core_1.EnumField('FridayEnabled', ServiceContracts);
    /**
     * Static representation of the [[saturdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SATURDAY_ENABLED = new core_1.EnumField('SaturdayEnabled', ServiceContracts);
    /**
     * Static representation of the [[sundayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SUNDAY_ENABLED = new core_1.EnumField('SundayEnabled', ServiceContracts);
    /**
     * Static representation of the [[mondayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.MONDAY_START = new core_1.TimeField('MondayStart', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[mondayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.MONDAY_END = new core_1.TimeField('MondayEnd', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[tuesdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.TUESDAY_START = new core_1.TimeField('TuesdayStart', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[tuesdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.TUESDAY_END = new core_1.TimeField('TuesdayEnd', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[wednesdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.WEDNESDAY_START = new core_1.TimeField('WednesdayStart', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[wednesdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.WEDNESDAY_END = new core_1.TimeField('WednesdayEnd', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[thursdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.THURSDAY_START = new core_1.TimeField('ThursdayStart', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[thursdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.THURSDAY_END = new core_1.TimeField('ThursdayEnd', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[fridayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.FRIDAY_START = new core_1.TimeField('FridayStart', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[fridayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.FRIDAY_END = new core_1.TimeField('FridayEnd', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[saturdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SATURDAY_START = new core_1.TimeField('SaturdayStart', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[saturdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SATURDAY_END = new core_1.TimeField('SaturdayEnd', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[sundayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SUNDAY_START = new core_1.TimeField('SundayStart', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[sundayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SUNDAY_END = new core_1.TimeField('SundayEnd', ServiceContracts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[includeParts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.INCLUDE_PARTS = new core_1.EnumField('IncludeParts', ServiceContracts);
    /**
     * Static representation of the [[includeLabor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.INCLUDE_LABOR = new core_1.EnumField('IncludeLabor', ServiceContracts);
    /**
     * Static representation of the [[includeTravel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.INCLUDE_TRAVEL = new core_1.EnumField('IncludeTravel', ServiceContracts);
    /**
     * Static representation of the [[templateRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.TEMPLATE_REMARKS = new core_1.StringField('TemplateRemarks', ServiceContracts, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.REMARKS = new core_1.StringField('Remarks', ServiceContracts, 'Edm.String');
    /**
     * Static representation of the [[includeHolidays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.INCLUDE_HOLIDAYS = new core_1.EnumField('IncludeHolidays', ServiceContracts);
    /**
     * Static representation of the [[serviceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SERVICE_TYPE = new core_1.EnumField('ServiceType', ServiceContracts);
    /**
     * Static representation of the [[responseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.RESPONSE_UNIT = new core_1.EnumField('ResponseUnit', ServiceContracts);
    /**
     * Static representation of the [[responseTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.RESPONSE_TIME = new core_1.NumberField('ResponseTime', ServiceContracts, 'Edm.Int32');
    /**
     * Static representation of the [[terminationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.TERMINATION_DATE = new core_1.DateField('TerminationDate', ServiceContracts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', ServiceContracts, 'Edm.Int32');
    /**
     * Static representation of the [[serviceBpType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SERVICE_BP_TYPE = new core_1.EnumField('ServiceBPType', ServiceContracts);
    /**
     * Static representation of the [[serviceContractLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SERVICE_CONTRACT_LINES = new core_1.CollectionField('ServiceContract_Lines', ServiceContracts, ServiceContractLine_1.ServiceContractLine);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', ServiceContracts, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.USER = new core_1.OneToOneLink('User', ServiceContracts, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[contractTemplate2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.CONTRACT_TEMPLATE_2 = new core_1.OneToOneLink('ContractTemplate2', ServiceContracts, ContractTemplates_1.ContractTemplates);
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.ATTACHMENTS_2 = new core_1.OneToOneLink('Attachments2', ServiceContracts, Attachments2_1.Attachments2);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceContracts.SERVICE_CALLS = new core_1.OneToManyLink('ServiceCalls', ServiceContracts, ServiceCalls_1.ServiceCalls);
    /**
     * All fields of the ServiceContracts entity.
     */
    ServiceContracts._allFields = [
        ServiceContracts.CONTRACT_ID,
        ServiceContracts.CUSTOMER_CODE,
        ServiceContracts.CUSTOMER_NAME,
        ServiceContracts.CONTACT_CODE,
        ServiceContracts.OWNER,
        ServiceContracts.STATUS,
        ServiceContracts.CONTRACT_TEMPLATE,
        ServiceContracts.CONTRACT_TYPE,
        ServiceContracts.RENEWAL,
        ServiceContracts.REMINDER_TIME,
        ServiceContracts.REMIND_UNIT,
        ServiceContracts.DURATION_OF_COVERAGE,
        ServiceContracts.START_DATE,
        ServiceContracts.END_DATE,
        ServiceContracts.RESOLUTION_TIME,
        ServiceContracts.RESOLUTION_UNIT,
        ServiceContracts.DESCRIPTION,
        ServiceContracts.MONDAY_ENABLED,
        ServiceContracts.TUESDAY_ENABLED,
        ServiceContracts.WEDNESDAY_ENABLED,
        ServiceContracts.THURSDAY_ENABLED,
        ServiceContracts.FRIDAY_ENABLED,
        ServiceContracts.SATURDAY_ENABLED,
        ServiceContracts.SUNDAY_ENABLED,
        ServiceContracts.MONDAY_START,
        ServiceContracts.MONDAY_END,
        ServiceContracts.TUESDAY_START,
        ServiceContracts.TUESDAY_END,
        ServiceContracts.WEDNESDAY_START,
        ServiceContracts.WEDNESDAY_END,
        ServiceContracts.THURSDAY_START,
        ServiceContracts.THURSDAY_END,
        ServiceContracts.FRIDAY_START,
        ServiceContracts.FRIDAY_END,
        ServiceContracts.SATURDAY_START,
        ServiceContracts.SATURDAY_END,
        ServiceContracts.SUNDAY_START,
        ServiceContracts.SUNDAY_END,
        ServiceContracts.INCLUDE_PARTS,
        ServiceContracts.INCLUDE_LABOR,
        ServiceContracts.INCLUDE_TRAVEL,
        ServiceContracts.TEMPLATE_REMARKS,
        ServiceContracts.REMARKS,
        ServiceContracts.INCLUDE_HOLIDAYS,
        ServiceContracts.SERVICE_TYPE,
        ServiceContracts.RESPONSE_UNIT,
        ServiceContracts.RESPONSE_TIME,
        ServiceContracts.TERMINATION_DATE,
        ServiceContracts.ATTACHMENT_ENTRY,
        ServiceContracts.SERVICE_BP_TYPE,
        ServiceContracts.SERVICE_CONTRACT_LINES,
        ServiceContracts.BUSINESS_PARTNER,
        ServiceContracts.USER,
        ServiceContracts.CONTRACT_TEMPLATE_2,
        ServiceContracts.ATTACHMENTS_2,
        ServiceContracts.SERVICE_CALLS
    ];
    /**
     * All fields selector.
     */
    ServiceContracts.ALL_FIELDS = new core_1.AllFields('*', ServiceContracts);
    /**
     * All key fields of the ServiceContracts entity.
     */
    ServiceContracts._keyFields = [ServiceContracts.CONTRACT_ID];
    /**
     * Mapping of all key field names to the respective static field property ServiceContracts.
     */
    ServiceContracts._keys = ServiceContracts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ServiceContracts = exports.ServiceContracts || (exports.ServiceContracts = {}));
exports.ServiceContracts = ServiceContracts;
//# sourceMappingURL=ServiceContracts.js.map