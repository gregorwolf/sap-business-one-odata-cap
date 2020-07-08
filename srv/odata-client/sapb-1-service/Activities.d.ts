import { ActivitiesRequestBuilder } from './ActivitiesRequestBuilder';
import { Moment } from 'moment';
import { CheckInParams } from './CheckInParams';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Activities" of service "SAPB1".
 */
export declare class Activities extends Entity implements ActivitiesType {
    /**
     * Technical entity name for Activities.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Activities.
     */
    static _serviceName: string;
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
     * Returns an entity builder to construct instances `Activities`.
     * @returns A builder that constructs instances of entity type `Activities`.
     */
    static builder(): EntityBuilderType<Activities, ActivitiesTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<Activities>;
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
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILS: StringField<Activities>;
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
     * Static representation of the [[reminderPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER_PERIOD: NumberField<Activities>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<Activities>;
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
     * Static representation of the [[belongedSeriesNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BELONGED_SERIES_NUM: NumberField<Activities>;
    /**
     * Static representation of the [[addressName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_NAME: StringField<Activities>;
    /**
     * Static representation of the [[handledByEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HANDLED_BY_EMPLOYEE: NumberField<Activities>;
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
    const CHECK_IN_LIST_PARAMS: CollectionField<Activities>;
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
    const _allFields: Array<NumberField<Activities> | StringField<Activities> | DateField<Activities> | TimeField<Activities> | CollectionField<Activities> | OneToOneLink<Activities, BusinessPartners> | OneToOneLink<Activities, ActivityTypes> | OneToOneLink<Activities, ActivityLocations> | OneToOneLink<Activities, SalesPersons> | OneToOneLink<Activities, Users> | OneToOneLink<Activities, Countries> | OneToOneLink<Activities, ActivityStatuses> | OneToOneLink<Activities, EmployeesInfo> | OneToOneLink<Activities, ActivityRecipientLists>>;
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