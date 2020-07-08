/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivitiesRequestBuilder } from './ActivitiesRequestBuilder';
import { Moment } from 'moment';
import { CheckInParams, CheckInParamsField } from './CheckInParams';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "Activities" of service "SAPB1".
 */
export class Activities extends Entity implements ActivitiesType {
  /**
   * Technical entity name for Activities.
   */
  static _entityName = 'Activities';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Activities.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Activity Code.
   * @nullable
   */
  activityCode?: number;
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
   * Activity Date.
   * @nullable
   */
  activityDate?: Moment;
  /**
   * Activity Time.
   * @nullable
   */
  activityTime?: Time;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
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
   * Parent Object Id.
   * @nullable
   */
  parentObjectId?: number;
  /**
   * Parent Object Type.
   * @nullable
   */
  parentObjectType?: string;
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
   * End Due Date.
   * @nullable
   */
  endDueDate?: Moment;
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
   * Series Start Date.
   * @nullable
   */
  seriesStartDate?: Moment;
  /**
   * Series End Date.
   * @nullable
   */
  seriesEndDate?: Moment;
  /**
   * Max Occurrence.
   * @nullable
   */
  maxOccurrence?: number;
  /**
   * Interval.
   * @nullable
   */
  interval?: number;
  /**
   * Belonged Series Num.
   * @nullable
   */
  belongedSeriesNum?: number;
  /**
   * Address Name.
   * @nullable
   */
  addressName?: string;
  /**
   * Handled By Employee.
   * @nullable
   */
  handledByEmployee?: number;
  /**
   * Recurrence Day In Month.
   * @nullable
   */
  recurrenceDayInMonth?: number;
  /**
   * Recurrence Month.
   * @nullable
   */
  recurrenceMonth?: number;
  /**
   * Sales Opportunity Id.
   * @nullable
   */
  salesOpportunityId?: number;
  /**
   * Sales Opportunity Line.
   * @nullable
   */
  salesOpportunityLine?: number;
  /**
   * Handled By Recipient List.
   * @nullable
   */
  handledByRecipientList?: number;
  /**
   * U Owner.
   * @nullable
   */
  uOwner?: string;
  /**
   * Check In List Params.
   * @nullable
   */
  checkInListParams?: CheckInParams[];
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
   * One-to-one navigation property to the [[EmployeesInfo]] entity.
   */
  employeeInfo!: EmployeesInfo;
  /**
   * One-to-one navigation property to the [[ActivityRecipientLists]] entity.
   */
  activityRecipientList!: ActivityRecipientLists;

  /**
   * Returns an entity builder to construct instances `Activities`.
   * @returns A builder that constructs instances of entity type `Activities`.
   */
  static builder(): EntityBuilderType<Activities, ActivitiesTypeForceMandatory> {
    return Entity.entityBuilder(Activities);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Activities` entity type.
   * @returns A `Activities` request builder.
   */
  static requestBuilder(): ActivitiesRequestBuilder {
    return new ActivitiesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Activities`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Activities`.
   */
  static customField(fieldName: string): CustomField<Activities> {
    return Entity.customFieldSelector(fieldName, Activities);
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
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { ActivityRecipientLists, ActivityRecipientListsType } from './ActivityRecipientLists';

export interface ActivitiesType {
  activityCode?: number;
  cardCode?: string;
  notes?: string;
  activityDate?: Moment;
  activityTime?: Time;
  startDate?: Moment;
  closeDate?: Moment;
  phone?: string;
  fax?: string;
  subject?: number;
  docType?: string;
  docNum?: string;
  docEntry?: string;
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
  parentObjectId?: number;
  parentObjectType?: string;
  room?: string;
  state?: string;
  previousActivity?: number;
  country?: string;
  status?: number;
  endDueDate?: Moment;
  docTypeEx?: string;
  attachmentEntry?: number;
  seriesStartDate?: Moment;
  seriesEndDate?: Moment;
  maxOccurrence?: number;
  interval?: number;
  belongedSeriesNum?: number;
  addressName?: string;
  handledByEmployee?: number;
  recurrenceDayInMonth?: number;
  recurrenceMonth?: number;
  salesOpportunityId?: number;
  salesOpportunityLine?: number;
  handledByRecipientList?: number;
  uOwner?: string;
  checkInListParams?: CheckInParams[];
  businessPartner: BusinessPartnersType;
  activityType2: ActivityTypesType;
  activityLocation: ActivityLocationsType;
  salesPerson: SalesPersonsType;
  user: UsersType;
  country2: CountriesType;
  activityStatus: ActivityStatusesType;
  employeeInfo: EmployeesInfoType;
  activityRecipientList: ActivityRecipientListsType;
}

export interface ActivitiesTypeForceMandatory {
  activityCode: number;
  cardCode: string;
  notes: string;
  activityDate: Moment;
  activityTime: Time;
  startDate: Moment;
  closeDate: Moment;
  phone: string;
  fax: string;
  subject: number;
  docType: string;
  docNum: string;
  docEntry: string;
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
  parentObjectId: number;
  parentObjectType: string;
  room: string;
  state: string;
  previousActivity: number;
  country: string;
  status: number;
  endDueDate: Moment;
  docTypeEx: string;
  attachmentEntry: number;
  seriesStartDate: Moment;
  seriesEndDate: Moment;
  maxOccurrence: number;
  interval: number;
  belongedSeriesNum: number;
  addressName: string;
  handledByEmployee: number;
  recurrenceDayInMonth: number;
  recurrenceMonth: number;
  salesOpportunityId: number;
  salesOpportunityLine: number;
  handledByRecipientList: number;
  uOwner: string;
  checkInListParams: CheckInParams[];
  businessPartner: BusinessPartnersType;
  activityType2: ActivityTypesType;
  activityLocation: ActivityLocationsType;
  salesPerson: SalesPersonsType;
  user: UsersType;
  country2: CountriesType;
  activityStatus: ActivityStatusesType;
  employeeInfo: EmployeesInfoType;
  activityRecipientList: ActivityRecipientListsType;
}

export namespace Activities {
  /**
   * Static representation of the [[activityCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_CODE: NumberField<Activities> = new NumberField('ActivityCode', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_CODE: StringField<Activities> = new StringField('CardCode', Activities, 'Edm.String');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<Activities> = new StringField('Notes', Activities, 'Edm.String');
  /**
   * Static representation of the [[activityDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_DATE: DateField<Activities> = new DateField('ActivityDate', Activities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[activityTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_TIME: TimeField<Activities> = new TimeField('ActivityTime', Activities, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<Activities> = new DateField('StartDate', Activities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[closeDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSE_DATE: DateField<Activities> = new DateField('CloseDate', Activities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[phone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE: StringField<Activities> = new StringField('Phone', Activities, 'Edm.String');
  /**
   * Static representation of the [[fax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX: StringField<Activities> = new StringField('Fax', Activities, 'Edm.String');
  /**
   * Static representation of the [[subject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT: NumberField<Activities> = new NumberField('Subject', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: StringField<Activities> = new StringField('DocType', Activities, 'Edm.String');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: StringField<Activities> = new StringField('DocNum', Activities, 'Edm.String');
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: StringField<Activities> = new StringField('DocEntry', Activities, 'Edm.String');
  /**
   * Static representation of the [[details]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DETAILS: StringField<Activities> = new StringField('Details', Activities, 'Edm.String');
  /**
   * Static representation of the [[activityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_TYPE: NumberField<Activities> = new NumberField('ActivityType', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: NumberField<Activities> = new NumberField('Location', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: TimeField<Activities> = new TimeField('StartTime', Activities, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: TimeField<Activities> = new TimeField('EndTime', Activities, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[duration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DURATION: NumberField<Activities> = new NumberField('Duration', Activities, 'Edm.Double');
  /**
   * Static representation of the [[salesEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_EMPLOYEE: NumberField<Activities> = new NumberField('SalesEmployee', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[contactPersonCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_CODE: NumberField<Activities> = new NumberField('ContactPersonCode', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[handledBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HANDLED_BY: NumberField<Activities> = new NumberField('HandledBy', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[reminderPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMINDER_PERIOD: NumberField<Activities> = new NumberField('ReminderPeriod', Activities, 'Edm.Double');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<Activities> = new StringField('City', Activities, 'Edm.String');
  /**
   * Static representation of the [[street]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET: StringField<Activities> = new StringField('Street', Activities, 'Edm.String');
  /**
   * Static representation of the [[parentObjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_OBJECT_ID: NumberField<Activities> = new NumberField('ParentObjectId', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[parentObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_OBJECT_TYPE: StringField<Activities> = new StringField('ParentObjectType', Activities, 'Edm.String');
  /**
   * Static representation of the [[room]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROOM: StringField<Activities> = new StringField('Room', Activities, 'Edm.String');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<Activities> = new StringField('State', Activities, 'Edm.String');
  /**
   * Static representation of the [[previousActivity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREVIOUS_ACTIVITY: NumberField<Activities> = new NumberField('PreviousActivity', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Activities> = new StringField('Country', Activities, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<Activities> = new NumberField('Status', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[endDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DUE_DATE: DateField<Activities> = new DateField('EndDueDate', Activities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[docTypeEx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE_EX: StringField<Activities> = new StringField('DocTypeEx', Activities, 'Edm.String');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<Activities> = new NumberField('AttachmentEntry', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[seriesStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_START_DATE: DateField<Activities> = new DateField('SeriesStartDate', Activities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[seriesEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES_END_DATE: DateField<Activities> = new DateField('SeriesEndDate', Activities, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[maxOccurrence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_OCCURRENCE: NumberField<Activities> = new NumberField('MaxOccurrence', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[interval]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVAL: NumberField<Activities> = new NumberField('Interval', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[belongedSeriesNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BELONGED_SERIES_NUM: NumberField<Activities> = new NumberField('BelongedSeriesNum', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[addressName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_NAME: StringField<Activities> = new StringField('AddressName', Activities, 'Edm.String');
  /**
   * Static representation of the [[handledByEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HANDLED_BY_EMPLOYEE: NumberField<Activities> = new NumberField('HandledByEmployee', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[recurrenceDayInMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRENCE_DAY_IN_MONTH: NumberField<Activities> = new NumberField('RecurrenceDayInMonth', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[recurrenceMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRENCE_MONTH: NumberField<Activities> = new NumberField('RecurrenceMonth', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[salesOpportunityId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITY_ID: NumberField<Activities> = new NumberField('SalesOpportunityId', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[salesOpportunityLine]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OPPORTUNITY_LINE: NumberField<Activities> = new NumberField('SalesOpportunityLine', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[handledByRecipientList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HANDLED_BY_RECIPIENT_LIST: NumberField<Activities> = new NumberField('HandledByRecipientList', Activities, 'Edm.Int32');
  /**
   * Static representation of the [[uOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const U_OWNER: StringField<Activities> = new StringField('U_owner', Activities, 'Edm.String');
  /**
   * Static representation of the [[checkInListParams]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_IN_LIST_PARAMS: CollectionField<Activities> = new CollectionField('CheckInListParams', Activities, new CheckInParamsField('', Activities));
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<Activities, BusinessPartners> = new OneToOneLink('BusinessPartner', Activities, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[activityType2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_TYPE_2: OneToOneLink<Activities, ActivityTypes> = new OneToOneLink('ActivityType2', Activities, ActivityTypes);
  /**
   * Static representation of the one-to-one navigation property [[activityLocation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_LOCATION: OneToOneLink<Activities, ActivityLocations> = new OneToOneLink('ActivityLocation', Activities, ActivityLocations);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<Activities, SalesPersons> = new OneToOneLink('SalesPerson', Activities, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<Activities, Users> = new OneToOneLink('User', Activities, Users);
  /**
   * Static representation of the one-to-one navigation property [[country2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_2: OneToOneLink<Activities, Countries> = new OneToOneLink('Country2', Activities, Countries);
  /**
   * Static representation of the one-to-one navigation property [[activityStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_STATUS: OneToOneLink<Activities, ActivityStatuses> = new OneToOneLink('ActivityStatus', Activities, ActivityStatuses);
  /**
   * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_INFO: OneToOneLink<Activities, EmployeesInfo> = new OneToOneLink('EmployeeInfo', Activities, EmployeesInfo);
  /**
   * Static representation of the one-to-one navigation property [[activityRecipientList]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_RECIPIENT_LIST: OneToOneLink<Activities, ActivityRecipientLists> = new OneToOneLink('ActivityRecipientList', Activities, ActivityRecipientLists);
  /**
   * All fields of the Activities entity.
   */
  export const _allFields: Array<NumberField<Activities> | StringField<Activities> | DateField<Activities> | TimeField<Activities> | CollectionField<Activities> | OneToOneLink<Activities, BusinessPartners> | OneToOneLink<Activities, ActivityTypes> | OneToOneLink<Activities, ActivityLocations> | OneToOneLink<Activities, SalesPersons> | OneToOneLink<Activities, Users> | OneToOneLink<Activities, Countries> | OneToOneLink<Activities, ActivityStatuses> | OneToOneLink<Activities, EmployeesInfo> | OneToOneLink<Activities, ActivityRecipientLists>> = [
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
  export const ALL_FIELDS: AllFields<Activities> = new AllFields('*', Activities);
  /**
   * All key fields of the Activities entity.
   */
  export const _keyFields: Array<Field<Activities>> = [Activities.ACTIVITY_CODE];
  /**
   * Mapping of all key field names to the respective static field property Activities.
   */
  export const _keys: { [keys: string]: Field<Activities> } = Activities._keyFields.reduce((acc: { [keys: string]: Field<Activities> }, field: Field<Activities>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
