import { ContactsRequestBuilder } from './ContactsRequestBuilder';
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoMsgPriorities } from './BoMsgPriorities';
import { BoActivities } from './BoActivities';
import { BoDurations } from './BoDurations';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Contacts" of service "SAPB1".
 */
export declare class Contacts extends EntityV4 implements ContactsType {
    /**
     * Technical entity name for Contacts.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Contact Code.
     * @nullable
     */
    contactCode?: number;
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
     * Personalflag.
     * @nullable
     */
    personalflag?: BoYesNoEnum;
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
     * Inactiveflag.
     * @nullable
     */
    inactiveflag?: BoYesNoEnum;
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
     * Tentativeflag.
     * @nullable
     */
    tentativeflag?: BoYesNoEnum;
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
     * Returns an entity builder to construct instances of `Contacts`.
     * @returns A builder that constructs instances of entity type `Contacts`.
     */
    static builder(): EntityBuilderType<Contacts, ContactsType>;
    /**
     * Returns a request builder to construct requests for operations on the `Contacts` entity type.
     * @returns A `Contacts` request builder.
     */
    static requestBuilder(): ContactsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Contacts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Contacts`.
     */
    static customField(fieldName: string): CustomFieldV4<Contacts>;
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
export interface ContactsType {
    cardCode?: string | null;
    notes?: string | null;
    contactDate?: Moment | null;
    contactTime?: Time | null;
    recontact?: Moment | null;
    closed?: BoYesNoEnum | null;
    closeDate?: Moment | null;
    phone?: string | null;
    fax?: string | null;
    subject?: number | null;
    docType?: string | null;
    docNum?: string | null;
    docEntry?: string | null;
    contactCode?: number | null;
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
    personalflag?: BoYesNoEnum | null;
    street?: string | null;
    parentobjectId?: number | null;
    parentobjecttype?: string | null;
    room?: string | null;
    inactiveflag?: BoYesNoEnum | null;
    state?: string | null;
    previousActivity?: number | null;
    country?: string | null;
    status?: number | null;
    tentativeflag?: BoYesNoEnum | null;
    endDuedate?: Moment | null;
    docTypeEx?: string | null;
    attachmentEntry?: number | null;
    startDate?: Moment | null;
    businessPartner: BusinessPartnersType;
    activityType2: ActivityTypesType;
    activityLocation: ActivityLocationsType;
    salesPerson: SalesPersonsType;
    user: UsersType;
    country2: CountriesType;
    activityStatus: ActivityStatusesType;
}
export declare namespace Contacts {
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<Contacts>;
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTES: StringField<Contacts>;
    /**
     * Static representation of the [[contactDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_DATE: DateField<Contacts>;
    /**
     * Static representation of the [[contactTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_TIME: TimeField<Contacts>;
    /**
     * Static representation of the [[recontact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECONTACT: DateField<Contacts>;
    /**
     * Static representation of the [[closed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSED: EnumField<Contacts>;
    /**
     * Static representation of the [[closeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSE_DATE: DateField<Contacts>;
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE: StringField<Contacts>;
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX: StringField<Contacts>;
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT: NumberField<Contacts>;
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE: StringField<Contacts>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: StringField<Contacts>;
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: StringField<Contacts>;
    /**
     * Static representation of the [[contactCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_CODE: NumberField<Contacts>;
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: EnumField<Contacts>;
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILS: StringField<Contacts>;
    /**
     * Static representation of the [[activity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY: EnumField<Contacts>;
    /**
     * Static representation of the [[activityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_TYPE: NumberField<Contacts>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: NumberField<Contacts>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: TimeField<Contacts>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: TimeField<Contacts>;
    /**
     * Static representation of the [[duration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DURATION: NumberField<Contacts>;
    /**
     * Static representation of the [[durationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DURATION_TYPE: EnumField<Contacts>;
    /**
     * Static representation of the [[salesEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_EMPLOYEE: NumberField<Contacts>;
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CODE: NumberField<Contacts>;
    /**
     * Static representation of the [[handledBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HANDLED_BY: NumberField<Contacts>;
    /**
     * Static representation of the [[reminder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER: EnumField<Contacts>;
    /**
     * Static representation of the [[reminderPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER_PERIOD: NumberField<Contacts>;
    /**
     * Static representation of the [[reminderType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMINDER_TYPE: EnumField<Contacts>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<Contacts>;
    /**
     * Static representation of the [[personalflag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSONALFLAG: EnumField<Contacts>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<Contacts>;
    /**
     * Static representation of the [[parentobjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENTOBJECT_ID: NumberField<Contacts>;
    /**
     * Static representation of the [[parentobjecttype]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENTOBJECTTYPE: StringField<Contacts>;
    /**
     * Static representation of the [[room]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROOM: StringField<Contacts>;
    /**
     * Static representation of the [[inactiveflag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INACTIVEFLAG: EnumField<Contacts>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<Contacts>;
    /**
     * Static representation of the [[previousActivity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREVIOUS_ACTIVITY: NumberField<Contacts>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<Contacts>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<Contacts>;
    /**
     * Static representation of the [[tentativeflag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TENTATIVEFLAG: EnumField<Contacts>;
    /**
     * Static representation of the [[endDuedate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DUEDATE: DateField<Contacts>;
    /**
     * Static representation of the [[docTypeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE_EX: StringField<Contacts>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<Contacts>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Contacts>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<Contacts, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[activityType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_TYPE_2: OneToOneLink<Contacts, ActivityTypes>;
    /**
     * Static representation of the one-to-one navigation property [[activityLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_LOCATION: OneToOneLink<Contacts, ActivityLocations>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: OneToOneLink<Contacts, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<Contacts, Users>;
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_2: OneToOneLink<Contacts, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[activityStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_STATUS: OneToOneLink<Contacts, ActivityStatuses>;
    /**
     * All fields of the Contacts entity.
     */
    const _allFields: Array<StringField<Contacts> | DateField<Contacts> | TimeField<Contacts> | EnumField<Contacts> | NumberField<Contacts> | OneToOneLink<Contacts, BusinessPartners> | OneToOneLink<Contacts, ActivityTypes> | OneToOneLink<Contacts, ActivityLocations> | OneToOneLink<Contacts, SalesPersons> | OneToOneLink<Contacts, Users> | OneToOneLink<Contacts, Countries> | OneToOneLink<Contacts, ActivityStatuses>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Contacts>;
    /**
     * All key fields of the Contacts entity.
     */
    const _keyFields: Array<Field<Contacts>>;
    /**
     * Mapping of all key field names to the respective static field property Contacts.
     */
    const _keys: {
        [keys: string]: Field<Contacts>;
    };
}
//# sourceMappingURL=Contacts.d.ts.map