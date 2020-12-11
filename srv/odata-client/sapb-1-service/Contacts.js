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
exports.Contacts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ContactsRequestBuilder_1 = require("./ContactsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Contacts" of service "SAPB1".
 */
var Contacts = /** @class */ (function (_super) {
    __extends(Contacts, _super);
    function Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Contacts`.
     * @returns A builder that constructs instances of entity type `Contacts`.
     */
    Contacts.builder = function () {
        return core_1.EntityV4.entityBuilder(Contacts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Contacts` entity type.
     * @returns A `Contacts` request builder.
     */
    Contacts.requestBuilder = function () {
        return new ContactsRequestBuilder_1.ContactsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Contacts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Contacts`.
     */
    Contacts.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Contacts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Contacts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Contacts.
     */
    Contacts._entityName = 'Contacts';
    /**
     * Default url path for the according service.
     */
    Contacts._defaultServicePath = '/b1s/v2/';
    return Contacts;
}(core_1.EntityV4));
exports.Contacts = Contacts;
var BusinessPartners_1 = require("./BusinessPartners");
var ActivityTypes_1 = require("./ActivityTypes");
var ActivityLocations_1 = require("./ActivityLocations");
var SalesPersons_1 = require("./SalesPersons");
var Users_1 = require("./Users");
var Countries_1 = require("./Countries");
var ActivityStatuses_1 = require("./ActivityStatuses");
(function (Contacts) {
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.CARD_CODE = new core_1.StringField('CardCode', Contacts, 'Edm.String');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.NOTES = new core_1.StringField('Notes', Contacts, 'Edm.String');
    /**
     * Static representation of the [[contactDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.CONTACT_DATE = new core_1.DateField('ContactDate', Contacts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[contactTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.CONTACT_TIME = new core_1.TimeField('ContactTime', Contacts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[recontact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.RECONTACT = new core_1.DateField('Recontact', Contacts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[closed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.CLOSED = new core_1.EnumField('Closed', Contacts);
    /**
     * Static representation of the [[closeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.CLOSE_DATE = new core_1.DateField('CloseDate', Contacts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.PHONE = new core_1.StringField('Phone', Contacts, 'Edm.String');
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.FAX = new core_1.StringField('Fax', Contacts, 'Edm.String');
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.SUBJECT = new core_1.NumberField('Subject', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.DOC_TYPE = new core_1.StringField('DocType', Contacts, 'Edm.String');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.DOC_NUM = new core_1.StringField('DocNum', Contacts, 'Edm.String');
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.DOC_ENTRY = new core_1.StringField('DocEntry', Contacts, 'Edm.String');
    /**
     * Static representation of the [[contactCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.CONTACT_CODE = new core_1.NumberField('ContactCode', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.PRIORITY = new core_1.EnumField('Priority', Contacts);
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.DETAILS = new core_1.StringField('Details', Contacts, 'Edm.String');
    /**
     * Static representation of the [[activity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.ACTIVITY = new core_1.EnumField('Activity', Contacts);
    /**
     * Static representation of the [[activityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.ACTIVITY_TYPE = new core_1.NumberField('ActivityType', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.LOCATION = new core_1.NumberField('Location', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.START_TIME = new core_1.TimeField('StartTime', Contacts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.END_TIME = new core_1.TimeField('EndTime', Contacts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[duration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.DURATION = new core_1.NumberField('Duration', Contacts, 'Edm.Double');
    /**
     * Static representation of the [[durationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.DURATION_TYPE = new core_1.EnumField('DurationType', Contacts);
    /**
     * Static representation of the [[salesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.SALES_EMPLOYEE = new core_1.NumberField('SalesEmployee', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[handledBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.HANDLED_BY = new core_1.NumberField('HandledBy', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[reminder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.REMINDER = new core_1.EnumField('Reminder', Contacts);
    /**
     * Static representation of the [[reminderPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.REMINDER_PERIOD = new core_1.NumberField('ReminderPeriod', Contacts, 'Edm.Double');
    /**
     * Static representation of the [[reminderType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.REMINDER_TYPE = new core_1.EnumField('ReminderType', Contacts);
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.CITY = new core_1.StringField('City', Contacts, 'Edm.String');
    /**
     * Static representation of the [[personalflag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.PERSONALFLAG = new core_1.EnumField('Personalflag', Contacts);
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.STREET = new core_1.StringField('Street', Contacts, 'Edm.String');
    /**
     * Static representation of the [[parentobjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.PARENTOBJECT_ID = new core_1.NumberField('ParentobjectId', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[parentobjecttype]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.PARENTOBJECTTYPE = new core_1.StringField('Parentobjecttype', Contacts, 'Edm.String');
    /**
     * Static representation of the [[room]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.ROOM = new core_1.StringField('Room', Contacts, 'Edm.String');
    /**
     * Static representation of the [[inactiveflag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.INACTIVEFLAG = new core_1.EnumField('Inactiveflag', Contacts);
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.STATE = new core_1.StringField('State', Contacts, 'Edm.String');
    /**
     * Static representation of the [[previousActivity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.PREVIOUS_ACTIVITY = new core_1.NumberField('PreviousActivity', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.COUNTRY = new core_1.StringField('Country', Contacts, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.STATUS = new core_1.NumberField('Status', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[tentativeflag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.TENTATIVEFLAG = new core_1.EnumField('Tentativeflag', Contacts);
    /**
     * Static representation of the [[endDuedate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.END_DUEDATE = new core_1.DateField('EndDuedate', Contacts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docTypeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.DOC_TYPE_EX = new core_1.StringField('DocTypeEx', Contacts, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', Contacts, 'Edm.Int32');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.START_DATE = new core_1.DateField('StartDate', Contacts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', Contacts, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[activityType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.ACTIVITY_TYPE_2 = new core_1.OneToOneLink('ActivityType2', Contacts, ActivityTypes_1.ActivityTypes);
    /**
     * Static representation of the one-to-one navigation property [[activityLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.ACTIVITY_LOCATION = new core_1.OneToOneLink('ActivityLocation', Contacts, ActivityLocations_1.ActivityLocations);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', Contacts, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.USER = new core_1.OneToOneLink('User', Contacts, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.COUNTRY_2 = new core_1.OneToOneLink('Country2', Contacts, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[activityStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Contacts.ACTIVITY_STATUS = new core_1.OneToOneLink('ActivityStatus', Contacts, ActivityStatuses_1.ActivityStatuses);
    /**
     * All fields of the Contacts entity.
     */
    Contacts._allFields = [
        Contacts.CARD_CODE,
        Contacts.NOTES,
        Contacts.CONTACT_DATE,
        Contacts.CONTACT_TIME,
        Contacts.RECONTACT,
        Contacts.CLOSED,
        Contacts.CLOSE_DATE,
        Contacts.PHONE,
        Contacts.FAX,
        Contacts.SUBJECT,
        Contacts.DOC_TYPE,
        Contacts.DOC_NUM,
        Contacts.DOC_ENTRY,
        Contacts.CONTACT_CODE,
        Contacts.PRIORITY,
        Contacts.DETAILS,
        Contacts.ACTIVITY,
        Contacts.ACTIVITY_TYPE,
        Contacts.LOCATION,
        Contacts.START_TIME,
        Contacts.END_TIME,
        Contacts.DURATION,
        Contacts.DURATION_TYPE,
        Contacts.SALES_EMPLOYEE,
        Contacts.CONTACT_PERSON_CODE,
        Contacts.HANDLED_BY,
        Contacts.REMINDER,
        Contacts.REMINDER_PERIOD,
        Contacts.REMINDER_TYPE,
        Contacts.CITY,
        Contacts.PERSONALFLAG,
        Contacts.STREET,
        Contacts.PARENTOBJECT_ID,
        Contacts.PARENTOBJECTTYPE,
        Contacts.ROOM,
        Contacts.INACTIVEFLAG,
        Contacts.STATE,
        Contacts.PREVIOUS_ACTIVITY,
        Contacts.COUNTRY,
        Contacts.STATUS,
        Contacts.TENTATIVEFLAG,
        Contacts.END_DUEDATE,
        Contacts.DOC_TYPE_EX,
        Contacts.ATTACHMENT_ENTRY,
        Contacts.START_DATE,
        Contacts.BUSINESS_PARTNER,
        Contacts.ACTIVITY_TYPE_2,
        Contacts.ACTIVITY_LOCATION,
        Contacts.SALES_PERSON,
        Contacts.USER,
        Contacts.COUNTRY_2,
        Contacts.ACTIVITY_STATUS
    ];
    /**
     * All fields selector.
     */
    Contacts.ALL_FIELDS = new core_1.AllFields('*', Contacts);
    /**
     * All key fields of the Contacts entity.
     */
    Contacts._keyFields = [Contacts.CONTACT_CODE];
    /**
     * Mapping of all key field names to the respective static field property Contacts.
     */
    Contacts._keys = Contacts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Contacts = exports.Contacts || (exports.Contacts = {}));
exports.Contacts = Contacts;
//# sourceMappingURL=Contacts.js.map