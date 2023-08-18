/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { CheckInParams } from './CheckInParams';
import { ActivityMultipleRecipient } from './ActivityMultipleRecipient';
import type { ActivitiesApi } from './ActivitiesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoMsgPriorities } from './BoMsgPriorities';
import { BoActivities } from './BoActivities';
import { BoDurations } from './BoDurations';
import { RecurrencePatternEnum } from './RecurrencePatternEnum';
import { EndTypeEnum } from './EndTypeEnum';
import { RepeatOptionEnum } from './RepeatOptionEnum';
import { BoAddressType } from './BoAddressType';
import { RecurrenceSequenceEnum } from './RecurrenceSequenceEnum';
import { RecurrenceDayOfWeekEnum } from './RecurrenceDayOfWeekEnum';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ActivitySubjects, ActivitySubjectsType } from './ActivitySubjects';
import { ActivityTypes, ActivityTypesType } from './ActivityTypes';
import { ActivityLocations, ActivityLocationsType } from './ActivityLocations';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Users, UsersType } from './Users';
import { Countries, CountriesType } from './Countries';
import { ActivityStatuses, ActivityStatusesType } from './ActivityStatuses';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import {
  ActivityRecipientLists,
  ActivityRecipientListsType
} from './ActivityRecipientLists';

/**
 * This class represents the entity "Activities" of service "SAPB1".
 */
export class Activities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActivitiesType<T>
{
  /**
   * Technical entity name for Activities.
   */
  static _entityName = 'Activities';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Activities entity
   */
  static _keys = ['ActivityCode'];
  /**
   * Activity Code.
   */
  activityCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Date.
   * @nullable
   */
  activityDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Activity Time.
   * @nullable
   */
  activityTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Closed.
   * @nullable
   */
  closed?: BoYesNoEnum | null;
  /**
   * Close Date.
   * @nullable
   */
  closeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Phone.
   * @nullable
   */
  phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * @nullable
   */
  fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subject.
   * @nullable
   */
  subject?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   * @nullable
   */
  priority?: BoMsgPriorities | null;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Property.
   * @nullable
   */
  activityProperty?: BoActivities | null;
  /**
   * Activity Type.
   * @nullable
   */
  activityType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Location.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * End Time.
   * @nullable
   */
  endTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Duration.
   * @nullable
   */
  duration?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Duration Type.
   * @nullable
   */
  durationType?: BoDurations | null;
  /**
   * Sales Employee.
   * @nullable
   */
  salesEmployee?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Contact Person Code.
   * @nullable
   */
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Handled By.
   * @nullable
   */
  handledBy?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Reminder.
   * @nullable
   */
  reminder?: BoYesNoEnum | null;
  /**
   * Reminder Period.
   * @nullable
   */
  reminderPeriod?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Reminder Type.
   * @nullable
   */
  reminderType?: BoDurations | null;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personal Flag.
   * @nullable
   */
  personalFlag?: BoYesNoEnum | null;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Object Id.
   * @nullable
   */
  parentObjectId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Parent Object Type.
   * @nullable
   */
  parentObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Room.
   * @nullable
   */
  room?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inactive Flag.
   * @nullable
   */
  inactiveFlag?: BoYesNoEnum | null;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Previous Activity.
   * @nullable
   */
  previousActivity?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tentative Flag.
   * @nullable
   */
  tentativeFlag?: BoYesNoEnum | null;
  /**
   * End Due Date.
   * @nullable
   */
  endDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Doc Type Ex.
   * @nullable
   */
  docTypeEx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Recurrence Pattern.
   * @nullable
   */
  recurrencePattern?: RecurrencePatternEnum | null;
  /**
   * End Type.
   * @nullable
   */
  endType?: EndTypeEnum | null;
  /**
   * Series Start Date.
   * @nullable
   */
  seriesStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Series End Date.
   * @nullable
   */
  seriesEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Max Occurrence.
   * @nullable
   */
  maxOccurrence?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Interval.
   * @nullable
   */
  interval?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sunday.
   * @nullable
   */
  sunday?: BoYesNoEnum | null;
  /**
   * Monday.
   * @nullable
   */
  monday?: BoYesNoEnum | null;
  /**
   * Tuesday.
   * @nullable
   */
  tuesday?: BoYesNoEnum | null;
  /**
   * Wednesday.
   * @nullable
   */
  wednesday?: BoYesNoEnum | null;
  /**
   * Thursday.
   * @nullable
   */
  thursday?: BoYesNoEnum | null;
  /**
   * Friday.
   * @nullable
   */
  friday?: BoYesNoEnum | null;
  /**
   * Saturday.
   * @nullable
   */
  saturday?: BoYesNoEnum | null;
  /**
   * Repeat Option.
   * @nullable
   */
  repeatOption?: RepeatOptionEnum | null;
  /**
   * Belonged Series Num.
   * @nullable
   */
  belongedSeriesNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Is Removed.
   * @nullable
   */
  isRemoved?: BoYesNoEnum | null;
  /**
   * Address Name.
   * @nullable
   */
  addressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Type.
   * @nullable
   */
  addressType?: BoAddressType | null;
  /**
   * Handled By Employee.
   * @nullable
   */
  handledByEmployee?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Recurrence Sequence Specifier.
   * @nullable
   */
  recurrenceSequenceSpecifier?: RecurrenceSequenceEnum | null;
  /**
   * Recurrence Day In Month.
   * @nullable
   */
  recurrenceDayInMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Recurrence Month.
   * @nullable
   */
  recurrenceMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Recurrence Day Of Week.
   * @nullable
   */
  recurrenceDayOfWeek?: RecurrenceDayOfWeekEnum | null;
  /**
   * Sales Opportunity Id.
   * @nullable
   */
  salesOpportunityId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Opportunity Line.
   * @nullable
   */
  salesOpportunityLine?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Handled By Recipient List.
   * @nullable
   */
  handledByRecipientList?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Office 365 Event Id.
   * @nullable
   */
  office365EventId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Version.
   * @nullable
   */
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Check In List Params.
   * @nullable
   */
  checkInListParams?: CheckInParams<T>[] | null;
  /**
   * Activity Multiple Recipients.
   * @nullable
   */
  activityMultipleRecipients?: ActivityMultipleRecipient<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link ActivitySubjects} entity.
   */
  activitySubject?: ActivitySubjects<T> | null;
  /**
   * One-to-one navigation property to the {@link ActivityTypes} entity.
   */
  activityType2?: ActivityTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link ActivityLocations} entity.
   */
  activityLocation?: ActivityLocations<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesPersons} entity.
   */
  salesPerson?: SalesPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link ActivityStatuses} entity.
   */
  activityStatus?: ActivityStatuses<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesInfo} entity.
   */
  employeeInfo?: EmployeesInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link ActivityRecipientLists} entity.
   */
  activityRecipientList?: ActivityRecipientLists<T> | null;

  constructor(readonly _entityApi: ActivitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ActivitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  activityCode: DeserializedType<T, 'Edm.Int32'>;
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  activityDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  activityTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  closed?: BoYesNoEnum | null;
  closeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  subject?: DeserializedType<T, 'Edm.Int32'> | null;
  docType?: DeserializedType<T, 'Edm.String'> | null;
  docNum?: DeserializedType<T, 'Edm.String'> | null;
  docEntry?: DeserializedType<T, 'Edm.String'> | null;
  priority?: BoMsgPriorities | null;
  details?: DeserializedType<T, 'Edm.String'> | null;
  activityProperty?: BoActivities | null;
  activityType?: DeserializedType<T, 'Edm.Int32'> | null;
  location?: DeserializedType<T, 'Edm.Int32'> | null;
  startTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  endTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  duration?: DeserializedType<T, 'Edm.Double'> | null;
  durationType?: BoDurations | null;
  salesEmployee?: DeserializedType<T, 'Edm.Int32'> | null;
  contactPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  handledBy?: DeserializedType<T, 'Edm.Int32'> | null;
  reminder?: BoYesNoEnum | null;
  reminderPeriod?: DeserializedType<T, 'Edm.Double'> | null;
  reminderType?: BoDurations | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  personalFlag?: BoYesNoEnum | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  parentObjectId?: DeserializedType<T, 'Edm.Int32'> | null;
  parentObjectType?: DeserializedType<T, 'Edm.String'> | null;
  room?: DeserializedType<T, 'Edm.String'> | null;
  inactiveFlag?: BoYesNoEnum | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  previousActivity?: DeserializedType<T, 'Edm.Int32'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.Int32'> | null;
  tentativeFlag?: BoYesNoEnum | null;
  endDueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  docTypeEx?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  recurrencePattern?: RecurrencePatternEnum | null;
  endType?: EndTypeEnum | null;
  seriesStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  seriesEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  maxOccurrence?: DeserializedType<T, 'Edm.Int32'> | null;
  interval?: DeserializedType<T, 'Edm.Int32'> | null;
  sunday?: BoYesNoEnum | null;
  monday?: BoYesNoEnum | null;
  tuesday?: BoYesNoEnum | null;
  wednesday?: BoYesNoEnum | null;
  thursday?: BoYesNoEnum | null;
  friday?: BoYesNoEnum | null;
  saturday?: BoYesNoEnum | null;
  repeatOption?: RepeatOptionEnum | null;
  belongedSeriesNum?: DeserializedType<T, 'Edm.Int32'> | null;
  isRemoved?: BoYesNoEnum | null;
  addressName?: DeserializedType<T, 'Edm.String'> | null;
  addressType?: BoAddressType | null;
  handledByEmployee?: DeserializedType<T, 'Edm.Int32'> | null;
  recurrenceSequenceSpecifier?: RecurrenceSequenceEnum | null;
  recurrenceDayInMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  recurrenceMonth?: DeserializedType<T, 'Edm.Int32'> | null;
  recurrenceDayOfWeek?: RecurrenceDayOfWeekEnum | null;
  salesOpportunityId?: DeserializedType<T, 'Edm.Int32'> | null;
  salesOpportunityLine?: DeserializedType<T, 'Edm.Int32'> | null;
  handledByRecipientList?: DeserializedType<T, 'Edm.Int32'> | null;
  office365EventId?: DeserializedType<T, 'Edm.String'> | null;
  dataVersion?: DeserializedType<T, 'Edm.Int32'> | null;
  checkInListParams?: CheckInParams<T>[] | null;
  activityMultipleRecipients?: ActivityMultipleRecipient<T>[] | null;
  businessPartner?: BusinessPartnersType<T> | null;
  activitySubject?: ActivitySubjectsType<T> | null;
  activityType2?: ActivityTypesType<T> | null;
  activityLocation?: ActivityLocationsType<T> | null;
  salesPerson?: SalesPersonsType<T> | null;
  user?: UsersType<T> | null;
  country2?: CountriesType<T> | null;
  activityStatus?: ActivityStatusesType<T> | null;
  employeeInfo?: EmployeesInfoType<T> | null;
  activityRecipientList?: ActivityRecipientListsType<T> | null;
}
