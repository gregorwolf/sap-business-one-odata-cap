import { ActivitiesRequestBuilder } from './ActivitiesRequestBuilder';
import { Moment } from 'moment';
import { CheckInParams } from './CheckInParams';
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
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Activities" of service "SAPB1".
 */
export declare class Activities extends EntityV4 implements ActivitiesType {
    /**
     * Technical entity name for Activities.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Closed.
     * @nullable
     */
    closed?: BoYesNoEnum;
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
     * Priority.
     * @nullable
     */
    priority?: BoMsgPriorities;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Activity.
     * @nullable
     */
    activity?: BoActivities;
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
     * Duration Type.
     * @nullable
     */
    durationType?: BoDurations;
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
     * Reminder.
     * @nullable
     */
    reminder?: BoYesNoEnum;
    /**
     * Reminder Period.
     * @nullable
     */
    reminderPeriod?: number;
    /**
     * Reminder Type.
     * @nullable
     */
    reminderType?: BoDurations;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Personal Flag.
     * @nullable
     */
    personalFlag?: BoYesNoEnum;
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
     * Inactive Flag.
     * @nullable
     */
    inactiveFlag?: BoYesNoEnum;
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
     * Tentative Flag.
     * @nullable
     */
    tentativeFlag?: BoYesNoEnum;
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
     * Recurrence Pattern.
     * @nullable
     */
    recurrencePattern?: RecurrencePatternEnum;
    /**
     * End Type.
     * @nullable
     */
    endType?: EndTypeEnum;
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
     * Sunday.
     * @nullable
     */
    sunday?: BoYesNoEnum;
    /**
     * Monday.
     * @nullable
     */
    monday?: BoYesNoEnum;
    /**
     * Tuesday.
     * @nullable
     */
    tuesday?: BoYesNoEnum;
    /**
     * Wednesday.
     * @nullable
     */
    wednesday?: BoYesNoEnum;
    /**
     * Thursday.
     * @nullable
     */
    thursday?: BoYesNoEnum;
    /**
     * Friday.
     * @nullable
     */
    friday?: BoYesNoEnum;
    /**
     * Saturday.
     * @nullable
     */
    saturday?: BoYesNoEnum;
    /**
     * Repeat Option.
     * @nullable
     */
    repeatOption?: RepeatOptionEnum;
    /**
     * Belonged Series Num.
     * @nullable
     */
    belongedSeriesNum?: number;
    /**
     * Is Removed.
     * @nullable
     */
    isRemoved?: BoYesNoEnum;
    /**
     * Address Name.
     * @nullable
     */
    addressName?: string;
    /**
     * Address Type.
     * @nullable
     */
    addressType?: BoAddressType;
    /**
     * Handled By Employee.
     * @nullable
     */
    handledByEmployee?: number;
    /**
     * Recurrence Sequence Specifier.
     * @nullable
     */
    recurrenceSequenceSpecifier?: RecurrenceSequenceEnum;
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
     * Recurrence Day Of Week.
     * @nullable
     */
    recurrenceDayOfWeek?: RecurrenceDayOfWeekEnum;
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
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[ActivityTypes]] entity.
     */
    activityType2: ActivityTypes;
    /**
     * One-to-one navigation property to the [[ActivityLocations]] entity.
     */
    activityLocation: ActivityLocations;
    /**
     * One-to-one navigation property to the [[SalesPersons]] entity.
     */
    salesPerson: SalesPersons;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country2: Countries;
    /**
     * One-to-one navigation property to the [[ActivityStatuses]] entity.
     */
    activityStatus: ActivityStatuses;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[ActivityRecipientLists]] entity.
     */
    activityRecipientList: ActivityRecipientLists;
    /**
     * Returns an entity builder to construct instances of `Activities`.
     * @returns A builder that constructs instances of entity type `Activities`.
     */
    static builder(): EntityBuilderType<Activities, ActivitiesType>;
    /**
     * Returns a request builder to construct requests for operations on the `Activities` entity type.
     * @returns A `Activities` request builder.
     */
    static requestBuilder(): ActivitiesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Activities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Activities`.
     */
    static customField(fieldName: string): CustomFieldV4<Activities>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
    activityCode?: number | null;
    cardCode?: string | null;
    notes?: string | null;
    activityDate?: Moment | null;
    activityTime?: Time | null;
    startDate?: Moment | null;
    closed?: BoYesNoEnum | null;
    closeDate?: Moment | null;
    phone?: string | null;
    fax?: string | null;
    subject?: number | null;
    docType?: string | null;
    docNum?: string | null;
    docEntry?: string | null;
    priority?: BoMsgPriorities | null;
    details?: string | null;
    activity?: BoActivities | null;
    activityType?: number | null;
    location?: number | null;
    startTime?: Time | null;
    endTime?: Time | null;
    duration?: number | null;
    durationType?: BoDurations | null;
    salesEmployee?: number | null;
    contactPersonCode?: number | null;
    handledBy?: number | null;
    reminder?: BoYesNoEnum | null;
    reminderPeriod?: number | null;
    reminderType?: BoDurations | null;
    city?: string | null;
    personalFlag?: BoYesNoEnum | null;
    street?: string | null;
    parentObjectId?: number | null;
    parentObjectType?: string | null;
    room?: string | null;
    inactiveFlag?: BoYesNoEnum | null;
    state?: string | null;
    previousActivity?: number | null;
    country?: string | null;
    status?: number | null;
    tentativeFlag?: BoYesNoEnum | null;
    endDueDate?: Moment | null;
    docTypeEx?: string | null;
    attachmentEntry?: number | null;
    recurrencePattern?: RecurrencePatternEnum | null;
    endType?: EndTypeEnum | null;
    seriesStartDate?: Moment | null;
    seriesEndDate?: Moment | null;
    maxOccurrence?: number | null;
    interval?: number | null;
    sunday?: BoYesNoEnum | null;
    monday?: BoYesNoEnum | null;
    tuesday?: BoYesNoEnum | null;
    wednesday?: BoYesNoEnum | null;
    thursday?: BoYesNoEnum | null;
    friday?: BoYesNoEnum | null;
    saturday?: BoYesNoEnum | null;
    repeatOption?: RepeatOptionEnum | null;
    belongedSeriesNum?: number | null;
    isRemoved?: BoYesNoEnum | null;
    addressName?: string | null;
    addressType?: BoAddressType | null;
    handledByEmployee?: number | null;
    recurrenceSequenceSpecifier?: RecurrenceSequenceEnum | null;
    recurrenceDayInMonth?: number | null;
    recurrenceMonth?: number | null;
    recurrenceDayOfWeek?: RecurrenceDayOfWeekEnum | null;
    salesOpportunityId?: number | null;
    salesOpportunityLine?: number | null;
    handledByRecipientList?: number | null;
    uOwner?: string | null;
    checkInListParams?: CheckInParams[] | null;
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
export declare namespace Activities {
    /**
     * Static representation of the [[activityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_CODE: NumberField<Activities>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<Activities>;
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTES: StringField<Activities>;
    /**
     * Static representation of the [[activityDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_DATE: DateField<Activities>;
    /**
     * Static representation of the [[activityTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_TIME: TimeField<Activities>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Activities>;
    /**
     * Static representation of the [[closed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSED: EnumField<Activities>;
    /**
     * Static representation of the [[closeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSE_DATE: DateField<Activities>;
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE: StringField<Activities>;
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX: StringField<Activities>;
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT: NumberField<Activities>;
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE: StringField<Activities>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: StringField<Activities>;
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: StringField<Activities>;
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: EnumField<Activities>;
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILS: StringField<Activities>;
    /**
     * Static representation of the [[activity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY: EnumField<Activities>;
    /**
     * Static representation of the [[activityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_TYPE: NumberField<Activities>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: NumberField<Activities>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: TimeField<Activities>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: TimeField<Activities>;
    /**
     * Static representation of the [[duration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DURATION: NumberField<Activities>;
    /**
     * Static representation of the [[durationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DURATION_TYPE: EnumField<Activities>;
    /**
     * Static representation of the [[salesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_EMPLOYEE: NumberField<Activities>;
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CODE: NumberField<Activities>;
    /**
     * Static representation of the [[handledBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HANDLED_BY: NumberField<Activities>;
    /**
     * Static representation of the [[reminder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER: EnumField<Activities>;
    /**
     * Static representation of the [[reminderPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER_PERIOD: NumberField<Activities>;
    /**
     * Static representation of the [[reminderType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER_TYPE: EnumField<Activities>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<Activities>;
    /**
     * Static representation of the [[personalFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSONAL_FLAG: EnumField<Activities>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<Activities>;
    /**
     * Static representation of the [[parentObjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_OBJECT_ID: NumberField<Activities>;
    /**
     * Static representation of the [[parentObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_OBJECT_TYPE: StringField<Activities>;
    /**
     * Static representation of the [[room]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROOM: StringField<Activities>;
    /**
     * Static representation of the [[inactiveFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INACTIVE_FLAG: EnumField<Activities>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<Activities>;
    /**
     * Static representation of the [[previousActivity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREVIOUS_ACTIVITY: NumberField<Activities>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<Activities>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<Activities>;
    /**
     * Static representation of the [[tentativeFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TENTATIVE_FLAG: EnumField<Activities>;
    /**
     * Static representation of the [[endDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DUE_DATE: DateField<Activities>;
    /**
     * Static representation of the [[docTypeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE_EX: StringField<Activities>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<Activities>;
    /**
     * Static representation of the [[recurrencePattern]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_PATTERN: EnumField<Activities>;
    /**
     * Static representation of the [[endType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TYPE: EnumField<Activities>;
    /**
     * Static representation of the [[seriesStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES_START_DATE: DateField<Activities>;
    /**
     * Static representation of the [[seriesEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES_END_DATE: DateField<Activities>;
    /**
     * Static representation of the [[maxOccurrence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_OCCURRENCE: NumberField<Activities>;
    /**
     * Static representation of the [[interval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVAL: NumberField<Activities>;
    /**
     * Static representation of the [[sunday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUNDAY: EnumField<Activities>;
    /**
     * Static representation of the [[monday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONDAY: EnumField<Activities>;
    /**
     * Static representation of the [[tuesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TUESDAY: EnumField<Activities>;
    /**
     * Static representation of the [[wednesday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEDNESDAY: EnumField<Activities>;
    /**
     * Static representation of the [[thursday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THURSDAY: EnumField<Activities>;
    /**
     * Static representation of the [[friday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRIDAY: EnumField<Activities>;
    /**
     * Static representation of the [[saturday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SATURDAY: EnumField<Activities>;
    /**
     * Static representation of the [[repeatOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPEAT_OPTION: EnumField<Activities>;
    /**
     * Static representation of the [[belongedSeriesNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BELONGED_SERIES_NUM: NumberField<Activities>;
    /**
     * Static representation of the [[isRemoved]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_REMOVED: EnumField<Activities>;
    /**
     * Static representation of the [[addressName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_NAME: StringField<Activities>;
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE: EnumField<Activities>;
    /**
     * Static representation of the [[handledByEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HANDLED_BY_EMPLOYEE: NumberField<Activities>;
    /**
     * Static representation of the [[recurrenceSequenceSpecifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_SEQUENCE_SPECIFIER: EnumField<Activities>;
    /**
     * Static representation of the [[recurrenceDayInMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_DAY_IN_MONTH: NumberField<Activities>;
    /**
     * Static representation of the [[recurrenceMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_MONTH: NumberField<Activities>;
    /**
     * Static representation of the [[recurrenceDayOfWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_DAY_OF_WEEK: EnumField<Activities>;
    /**
     * Static representation of the [[salesOpportunityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITY_ID: NumberField<Activities>;
    /**
     * Static representation of the [[salesOpportunityLine]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OPPORTUNITY_LINE: NumberField<Activities>;
    /**
     * Static representation of the [[handledByRecipientList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HANDLED_BY_RECIPIENT_LIST: NumberField<Activities>;
    /**
     * Static representation of the [[uOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const U_OWNER: StringField<Activities>;
    /**
     * Static representation of the [[checkInListParams]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECK_IN_LIST_PARAMS: CollectionField<Activities, CheckInParams>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<Activities, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[activityType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_TYPE_2: OneToOneLink<Activities, ActivityTypes>;
    /**
     * Static representation of the one-to-one navigation property [[activityLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_LOCATION: OneToOneLink<Activities, ActivityLocations>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: OneToOneLink<Activities, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<Activities, Users>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<Activities, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[activityStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS: OneToOneLink<Activities, ActivityStatuses>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<Activities, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[activityRecipientList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_RECIPIENT_LIST: OneToOneLink<Activities, ActivityRecipientLists>;
    /**
     * All fields of the Activities entity.
     */
    const _allFields: Array<NumberField<Activities> | StringField<Activities> | DateField<Activities> | TimeField<Activities> | EnumField<Activities> | CollectionField<Activities, CheckInParams> | OneToOneLink<Activities, BusinessPartners> | OneToOneLink<Activities, ActivityTypes> | OneToOneLink<Activities, ActivityLocations> | OneToOneLink<Activities, SalesPersons> | OneToOneLink<Activities, Users> | OneToOneLink<Activities, Countries> | OneToOneLink<Activities, ActivityStatuses> | OneToOneLink<Activities, EmployeesInfo> | OneToOneLink<Activities, ActivityRecipientLists>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Activities>;
    /**
     * All key fields of the Activities entity.
     */
    const _keyFields: Array<Field<Activities>>;
    /**
     * Mapping of all key field names to the respective static field property Activities.
     */
    const _keys: {
        [keys: string]: Field<Activities>;
    };
}
//# sourceMappingURL=Activities.d.ts.map