import { ActivityStatusesRequestBuilder } from './ActivityStatusesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ActivityStatuses" of service "SAPB1".
 */
export declare class ActivityStatuses extends Entity implements ActivityStatusesType {
    /**
     * Technical entity name for ActivityStatuses.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ActivityStatuses.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Status Description.
     * @nullable
     */
    statusDescription?: string;
    /**
     * Status Id.
     * @nullable
     */
    statusId?: number;
    /**
     * Status Name.
     * @nullable
     */
    statusName?: string;
    /**
     * One-to-many navigation property to the [[Contacts]] entity.
     */
    contacts: Contacts[];
    /**
     * One-to-many navigation property to the [[Activities]] entity.
     */
    activities: Activities[];
    /**
     * Returns an entity builder to construct instances `ActivityStatuses`.
     * @returns A builder that constructs instances of entity type `ActivityStatuses`.
     */
    static builder(): EntityBuilderType<ActivityStatuses, ActivityStatusesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ActivityStatuses` entity type.
     * @returns A `ActivityStatuses` request builder.
     */
    static requestBuilder(): ActivityStatusesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityStatuses`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityStatuses`.
     */
    static customField(fieldName: string): CustomField<ActivityStatuses>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Contacts, ContactsType } from './Contacts';
import { Activities, ActivitiesType } from './Activities';
export interface ActivityStatusesType {
    statusDescription?: string;
    statusId?: number;
    statusName?: string;
    contacts: ContactsType[];
    activities: ActivitiesType[];
}
export interface ActivityStatusesTypeForceMandatory {
    statusDescription: string;
    statusId: number;
    statusName: string;
    contacts: ContactsType[];
    activities: ActivitiesType[];
}
export declare namespace ActivityStatuses {
    /**
     * Static representation of the [[statusDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_DESCRIPTION: StringField<ActivityStatuses>;
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_ID: NumberField<ActivityStatuses>;
    /**
     * Static representation of the [[statusName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAME: StringField<ActivityStatuses>;
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACTS: OneToManyLink<ActivityStatuses, Contacts>;
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITIES: OneToManyLink<ActivityStatuses, Activities>;
    /**
     * All fields of the ActivityStatuses entity.
     */
    const _allFields: Array<StringField<ActivityStatuses> | NumberField<ActivityStatuses> | OneToManyLink<ActivityStatuses, Contacts> | OneToManyLink<ActivityStatuses, Activities>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ActivityStatuses>;
    /**
     * All key fields of the ActivityStatuses entity.
     */
    const _keyFields: Array<Field<ActivityStatuses>>;
    /**
     * Mapping of all key field names to the respective static field property ActivityStatuses.
     */
    const _keys: {
        [keys: string]: Field<ActivityStatuses>;
    };
}
//# sourceMappingURL=ActivityStatuses.d.ts.map