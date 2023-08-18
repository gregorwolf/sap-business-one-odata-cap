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
import type { ContactsApi } from './ContactsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoMsgPriorities } from './BoMsgPriorities';
import { BoActivities } from './BoActivities';
import { BoDurations } from './BoDurations';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ActivitySubjects, ActivitySubjectsType } from './ActivitySubjects';
import { ActivityTypes, ActivityTypesType } from './ActivityTypes';
import { ActivityLocations, ActivityLocationsType } from './ActivityLocations';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Users, UsersType } from './Users';
import { Countries, CountriesType } from './Countries';
import { ActivityStatuses, ActivityStatusesType } from './ActivityStatuses';

/**
 * This class represents the entity "Contacts" of service "SAPB1".
 */
export class Contacts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ContactsType<T>
{
  /**
   * Technical entity name for Contacts.
   */
  static _entityName = 'Contacts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Contacts entity
   */
  static _keys = ['ContactCode'];
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
   * Contact Date.
   * @nullable
   */
  contactDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Contact Time.
   * @nullable
   */
  contactTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Recontact.
   * @nullable
   */
  recontact?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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
   * Contact Code.
   */
  contactCode!: DeserializedType<T, 'Edm.Int32'>;
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
   * Activity.
   * @nullable
   */
  activity?: BoActivities | null;
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
   * Personalflag.
   * @nullable
   */
  personalflag?: BoYesNoEnum | null;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parentobject Id.
   * @nullable
   */
  parentobjectId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Parentobjecttype.
   * @nullable
   */
  parentobjecttype?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Room.
   * @nullable
   */
  room?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inactiveflag.
   * @nullable
   */
  inactiveflag?: BoYesNoEnum | null;
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
   * Tentativeflag.
   * @nullable
   */
  tentativeflag?: BoYesNoEnum | null;
  /**
   * End Duedate.
   * @nullable
   */
  endDuedate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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

  constructor(readonly _entityApi: ContactsApi<T>) {
    super(_entityApi);
  }
}

export interface ContactsType<T extends DeSerializers = DefaultDeSerializers> {
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  contactDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  contactTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  recontact?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  closed?: BoYesNoEnum | null;
  closeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  subject?: DeserializedType<T, 'Edm.Int32'> | null;
  docType?: DeserializedType<T, 'Edm.String'> | null;
  docNum?: DeserializedType<T, 'Edm.String'> | null;
  docEntry?: DeserializedType<T, 'Edm.String'> | null;
  contactCode: DeserializedType<T, 'Edm.Int32'>;
  priority?: BoMsgPriorities | null;
  details?: DeserializedType<T, 'Edm.String'> | null;
  activity?: BoActivities | null;
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
  personalflag?: BoYesNoEnum | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  parentobjectId?: DeserializedType<T, 'Edm.Int32'> | null;
  parentobjecttype?: DeserializedType<T, 'Edm.String'> | null;
  room?: DeserializedType<T, 'Edm.String'> | null;
  inactiveflag?: BoYesNoEnum | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  previousActivity?: DeserializedType<T, 'Edm.Int32'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.Int32'> | null;
  tentativeflag?: BoYesNoEnum | null;
  endDuedate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  docTypeEx?: DeserializedType<T, 'Edm.String'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  activitySubject?: ActivitySubjectsType<T> | null;
  activityType2?: ActivityTypesType<T> | null;
  activityLocation?: ActivityLocationsType<T> | null;
  salesPerson?: SalesPersonsType<T> | null;
  user?: UsersType<T> | null;
  country2?: CountriesType<T> | null;
  activityStatus?: ActivityStatusesType<T> | null;
}
