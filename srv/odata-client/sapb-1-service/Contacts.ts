/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContactsRequestBuilder } from './ContactsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Contacts" of service "SAPB1".
 */
export class Contacts extends Entity implements ContactsType {
  /**
   * Technical entity name for Contacts.
   */
  static _entityName = 'Contacts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Contacts.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Notes.
   * @nullable
   */
  notes?: string;
  /**
   * Contact Date.
   * @nullable
   */
  contactDate?: Moment;
  /**
   * Contact Time.
   * @nullable
   */
  contactTime?: Time;
  /**
   * Recontact.
   * @nullable
   */
  recontact?: Moment;
  /**
   * Close Date.
   * @nullable
   */
  closeDate?: Moment;
  /**
   * Phone.
   * @nullable
   */
  phone?: string;
  /**
   * Fax.
   * @nullable
   */
  fax?: string;
  /**
   * Subject.
   * @nullable
   */
  subject?: number;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: string;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: string;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: string;
  /**
   * Contact Code.
   * @nullable
   */
  contactCode?: number;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Activity Type.
   * @nullable
   */
  activityType?: number;
  /**
   * Location.
   * @nullable
   */
  location?: number;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: Time;
  /**
   * End Time.
   * @nullable
   */
  endTime?: Time;
  /**
   * Duration.
   * @nullable
   */
  duration?: number;
  /**
   * Sales Employee.
   * @nullable
   */
  salesEmployee?: number;
  /**
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: number;
  /**
   * Handled By.
   * @nullable
   */
  handledBy?: number;
  /**
   * Reminder Period.
   * @nullable
   */
  reminderPeriod?: number;
  /**
   * City.
   * @nullable
   */
  city?: string;
  /**
   * Street.
   * @nullable
   */
  street?: string;
  /**
   * Parentobject Id.
   * @nullable
   */
  parentobjectId?: number;
  /**
   * Parentobjecttype.
   * @nullable
   */
  parentobjecttype?: string;
  /**
   * Room.
   * @nullable
   */
  room?: string;
  /**
   * State.
   * @nullable
   */
  state?: string;
  /**
   * Previous Activity.
   * @nullable
   */
  previousActivity?: number;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Status.
   * @nullable
   */
  status?: number;
  /**
   * End Duedate.
   * @nullable
   */
  endDuedate?: Moment;
  /**
   * Doc Type Ex.
   * @nullable
   */
  docTypeEx?: string;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[ActivityTypes]] entity.
   */
  activityType2!: ActivityTypes;
  /**
   * One-to-one navigation property to the [[ActivityLocations]] entity.
   */
  activityLocation!: ActivityLocations;
  /**
   * One-to-one navigation property to the [[SalesPersons]] entity.
   */
  salesPerson!: SalesPersons;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country2!: Countries;
  /**
   * One-to-one navigation property to the [[ActivityStatuses]] entity.
   */
  activityStatus!: ActivityStatuses;

  /**
   * Returns an entity builder to construct instances `Contacts`.
   * @returns A builder that constructs instances of entity type `Contacts`.
   */
  static builder(): EntityBuilderType<Contacts, ContactsTypeForceMandatory> {
    return Entity.entityBuilder(Contacts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Contacts` entity type.
   * @returns A `Contacts` request builder.
   */
  static requestBuilder(): ContactsRequestBuilder {
    return new ContactsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Contacts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Contacts`.
   */
  static customField(fieldName: string): CustomField<Contacts> {
    return Entity.customFieldSelector(fieldName, Contacts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ActivityTypes, ActivityTypesType } from './ActivityTypes';
import { ActivityLocations, ActivityLocationsType } from './ActivityLocations';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Users, UsersType } from './Users';
import { Countries, CountriesType } from './Countries';
import { ActivityStatuses, ActivityStatusesType } from './ActivityStatuses';

export interface ContactsType {
  cardCode?: string;
  notes?: string;
  contactDate?: Moment;
  contactTime?: Time;
  recontact?: Moment;
  closeDate?: Moment;
  phone?: string;
  fax?: string;
  subject?: number;
  docType?: string;
  docNum?: string;
  docEntry?: string;
  contactCode?: number;
  details?: string;
  activityType?: number;
  location?: number;
  startTime?: Time;
  endTime?: Time;
  duration?: number;
  salesEmployee?: number;
  contactPersonCode?: number;
  handledBy?: number;
  reminderPeriod?: number;
  city?: string;
  street?: string;
  parentobjectId?: number;
  parentobjecttype?: string;
  room?: string;
  state?: string;
  previousActivity?: number;
  country?: string;
  status?: number;
  endDuedate?: Moment;
  docTypeEx?: string;
  attachmentEntry?: number;
  startDate?: Moment;
  businessPartner: BusinessPartnersType;
  activityType2: ActivityTypesType;
  activityLocation: ActivityLocationsType;
  salesPerson: SalesPersonsType;
  user: UsersType;
  country2: CountriesType;
  activityStatus: ActivityStatusesType;
}

export interface ContactsTypeForceMandatory {
  cardCode: string;
  notes: string;
  contactDate: Moment;
  contactTime: Time;
  recontact: Moment;
  closeDate: Moment;
  phone: string;
  fax: string;
  subject: number;
  docType: string;
  docNum: string;
  docEntry: string;
  contactCode: number;
  details: string;
  activityType: number;
  location: number;
  startTime: Time;
  endTime: Time;
  duration: number;
  salesEmployee: number;
  contactPersonCode: number;
  handledBy: number;
  reminderPeriod: number;
  city: string;
  street: string;
  parentobjectId: number;
  parentobjecttype: string;
  room: string;
  state: string;
  previousActivity: number;
  country: string;
  status: number;
  endDuedate: Moment;
  docTypeEx: string;
  attachmentEntry: number;
  startDate: Moment;
  businessPartner: BusinessPartnersType;
  activityType2: ActivityTypesType;
  activityLocation: ActivityLocationsType;
  salesPerson: SalesPersonsType;
  user: UsersType;
  country2: CountriesType;
  activityStatus: ActivityStatusesType;
}

export namespace Contacts {
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<Contacts> = new StringField('CardCode', Contacts, 'Edm.String');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<Contacts> = new StringField('Notes', Contacts, 'Edm.String');
  /**
   * Static representation of the [[contactDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_DATE: DateField<Contacts> = new DateField('ContactDate', Contacts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[contactTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_TIME: TimeField<Contacts> = new TimeField('ContactTime', Contacts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[recontact]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECONTACT: DateField<Contacts> = new DateField('Recontact', Contacts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[closeDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSE_DATE: DateField<Contacts> = new DateField('CloseDate', Contacts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[phone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE: StringField<Contacts> = new StringField('Phone', Contacts, 'Edm.String');
  /**
   * Static representation of the [[fax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX: StringField<Contacts> = new StringField('Fax', Contacts, 'Edm.String');
  /**
   * Static representation of the [[subject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT: NumberField<Contacts> = new NumberField('Subject', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: StringField<Contacts> = new StringField('DocType', Contacts, 'Edm.String');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: StringField<Contacts> = new StringField('DocNum', Contacts, 'Edm.String');
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: StringField<Contacts> = new StringField('DocEntry', Contacts, 'Edm.String');
  /**
   * Static representation of the [[contactCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_CODE: NumberField<Contacts> = new NumberField('ContactCode', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[details]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DETAILS: StringField<Contacts> = new StringField('Details', Contacts, 'Edm.String');
  /**
   * Static representation of the [[activityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_TYPE: NumberField<Contacts> = new NumberField('ActivityType', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: NumberField<Contacts> = new NumberField('Location', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: TimeField<Contacts> = new TimeField('StartTime', Contacts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: TimeField<Contacts> = new TimeField('EndTime', Contacts, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[duration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DURATION: NumberField<Contacts> = new NumberField('Duration', Contacts, 'Edm.Double');
  /**
   * Static representation of the [[salesEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_EMPLOYEE: NumberField<Contacts> = new NumberField('SalesEmployee', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<Contacts> = new NumberField('ContactPersonCode', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[handledBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HANDLED_BY: NumberField<Contacts> = new NumberField('HandledBy', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[reminderPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMINDER_PERIOD: NumberField<Contacts> = new NumberField('ReminderPeriod', Contacts, 'Edm.Double');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<Contacts> = new StringField('City', Contacts, 'Edm.String');
  /**
   * Static representation of the [[street]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET: StringField<Contacts> = new StringField('Street', Contacts, 'Edm.String');
  /**
   * Static representation of the [[parentobjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENTOBJECT_ID: NumberField<Contacts> = new NumberField('ParentobjectId', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[parentobjecttype]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENTOBJECTTYPE: StringField<Contacts> = new StringField('Parentobjecttype', Contacts, 'Edm.String');
  /**
   * Static representation of the [[room]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROOM: StringField<Contacts> = new StringField('Room', Contacts, 'Edm.String');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<Contacts> = new StringField('State', Contacts, 'Edm.String');
  /**
   * Static representation of the [[previousActivity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREVIOUS_ACTIVITY: NumberField<Contacts> = new NumberField('PreviousActivity', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Contacts> = new StringField('Country', Contacts, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<Contacts> = new NumberField('Status', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[endDuedate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DUEDATE: DateField<Contacts> = new DateField('EndDuedate', Contacts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docTypeEx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE_EX: StringField<Contacts> = new StringField('DocTypeEx', Contacts, 'Edm.String');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<Contacts> = new NumberField('AttachmentEntry', Contacts, 'Edm.Int32');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Contacts> = new DateField('StartDate', Contacts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<Contacts, BusinessPartners> = new OneToOneLink('BusinessPartner', Contacts, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[activityType2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_TYPE_2: OneToOneLink<Contacts, ActivityTypes> = new OneToOneLink('ActivityType2', Contacts, ActivityTypes);
  /**
   * Static representation of the one-to-one navigation property [[activityLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_LOCATION: OneToOneLink<Contacts, ActivityLocations> = new OneToOneLink('ActivityLocation', Contacts, ActivityLocations);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<Contacts, SalesPersons> = new OneToOneLink('SalesPerson', Contacts, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<Contacts, Users> = new OneToOneLink('User', Contacts, Users);
  /**
   * Static representation of the one-to-one navigation property [[country2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_2: OneToOneLink<Contacts, Countries> = new OneToOneLink('Country2', Contacts, Countries);
  /**
   * Static representation of the one-to-one navigation property [[activityStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_STATUS: OneToOneLink<Contacts, ActivityStatuses> = new OneToOneLink('ActivityStatus', Contacts, ActivityStatuses);
  /**
   * All fields of the Contacts entity.
   */
  export const _allFields: Array<StringField<Contacts> | DateField<Contacts> | TimeField<Contacts> | NumberField<Contacts> | OneToOneLink<Contacts, BusinessPartners> | OneToOneLink<Contacts, ActivityTypes> | OneToOneLink<Contacts, ActivityLocations> | OneToOneLink<Contacts, SalesPersons> | OneToOneLink<Contacts, Users> | OneToOneLink<Contacts, Countries> | OneToOneLink<Contacts, ActivityStatuses>> = [
    Contacts.CARD_CODE,
    Contacts.NOTES,
    Contacts.CONTACT_DATE,
    Contacts.CONTACT_TIME,
    Contacts.RECONTACT,
    Contacts.CLOSE_DATE,
    Contacts.PHONE,
    Contacts.FAX,
    Contacts.SUBJECT,
    Contacts.DOC_TYPE,
    Contacts.DOC_NUM,
    Contacts.DOC_ENTRY,
    Contacts.CONTACT_CODE,
    Contacts.DETAILS,
    Contacts.ACTIVITY_TYPE,
    Contacts.LOCATION,
    Contacts.START_TIME,
    Contacts.END_TIME,
    Contacts.DURATION,
    Contacts.SALES_EMPLOYEE,
    Contacts.CONTACT_PERSON_CODE,
    Contacts.HANDLED_BY,
    Contacts.REMINDER_PERIOD,
    Contacts.CITY,
    Contacts.STREET,
    Contacts.PARENTOBJECT_ID,
    Contacts.PARENTOBJECTTYPE,
    Contacts.ROOM,
    Contacts.STATE,
    Contacts.PREVIOUS_ACTIVITY,
    Contacts.COUNTRY,
    Contacts.STATUS,
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
  export const ALL_FIELDS: AllFields<Contacts> = new AllFields('*', Contacts);
  /**
   * All key fields of the Contacts entity.
   */
  export const _keyFields: Array<Field<Contacts>> = [Contacts.CONTACT_CODE];
  /**
   * Mapping of all key field names to the respective static field property Contacts.
   */
  export const _keys: { [keys: string]: Field<Contacts> } = Contacts._keyFields.reduce((acc: { [keys: string]: Field<Contacts> }, field: Field<Contacts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
