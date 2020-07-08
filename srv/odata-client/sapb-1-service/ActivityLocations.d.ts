import { ActivityLocationsRequestBuilder } from './ActivityLocationsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ActivityLocations" of service "SAPB1".
 */
export declare class ActivityLocations extends Entity implements ActivityLocationsType {
    /**
     * Technical entity name for ActivityLocations.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ActivityLocations.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * One-to-many navigation property to the [[Contacts]] entity.
     */
    contacts: Contacts[];
    /**
     * One-to-many navigation property to the [[Activities]] entity.
     */
    activities: Activities[];
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * Returns an entity builder to construct instances `ActivityLocations`.
     * @returns A builder that constructs instances of entity type `ActivityLocations`.
     */
    static builder(): EntityBuilderType<ActivityLocations, ActivityLocationsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ActivityLocations` entity type.
     * @returns A `ActivityLocations` request builder.
     */
    static requestBuilder(): ActivityLocationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityLocations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityLocations`.
     */
    static customField(fieldName: string): CustomField<ActivityLocations>;
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
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
export interface ActivityLocationsType {
    code?: number;
    name?: string;
    contacts: ContactsType[];
    activities: ActivitiesType[];
    serviceCalls: ServiceCallsType[];
}
export interface ActivityLocationsTypeForceMandatory {
    code: number;
    name: string;
    contacts: ContactsType[];
    activities: ActivitiesType[];
    serviceCalls: ServiceCallsType[];
}
export declare namespace ActivityLocations {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<ActivityLocations>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ActivityLocations>;
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACTS: OneToManyLink<ActivityLocations, Contacts>;
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITIES: OneToManyLink<ActivityLocations, Activities>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<ActivityLocations, ServiceCalls>;
    /**
     * All fields of the ActivityLocations entity.
     */
    const _allFields: Array<NumberField<ActivityLocations> | StringField<ActivityLocations> | OneToManyLink<ActivityLocations, Contacts> | OneToManyLink<ActivityLocations, Activities> | OneToManyLink<ActivityLocations, ServiceCalls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ActivityLocations>;
    /**
     * All key fields of the ActivityLocations entity.
     */
    const _keyFields: Array<Field<ActivityLocations>>;
    /**
     * Mapping of all key field names to the respective static field property ActivityLocations.
     */
    const _keys: {
        [keys: string]: Field<ActivityLocations>;
    };
}
//# sourceMappingURL=ActivityLocations.d.ts.map