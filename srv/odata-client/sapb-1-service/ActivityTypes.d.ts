import { ActivityTypesRequestBuilder } from './ActivityTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ActivityTypes" of service "SAPB1".
 */
export declare class ActivityTypes extends Entity implements ActivityTypesType {
    /**
     * Technical entity name for ActivityTypes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ActivityTypes.
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
     * Returns an entity builder to construct instances `ActivityTypes`.
     * @returns A builder that constructs instances of entity type `ActivityTypes`.
     */
    static builder(): EntityBuilderType<ActivityTypes, ActivityTypesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ActivityTypes` entity type.
     * @returns A `ActivityTypes` request builder.
     */
    static requestBuilder(): ActivityTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityTypes`.
     */
    static customField(fieldName: string): CustomField<ActivityTypes>;
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
export interface ActivityTypesType {
    code?: number;
    name?: string;
    contacts: ContactsType[];
    activities: ActivitiesType[];
}
export interface ActivityTypesTypeForceMandatory {
    code: number;
    name: string;
    contacts: ContactsType[];
    activities: ActivitiesType[];
}
export declare namespace ActivityTypes {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<ActivityTypes>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ActivityTypes>;
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACTS: OneToManyLink<ActivityTypes, Contacts>;
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITIES: OneToManyLink<ActivityTypes, Activities>;
    /**
     * All fields of the ActivityTypes entity.
     */
    const _allFields: Array<NumberField<ActivityTypes> | StringField<ActivityTypes> | OneToManyLink<ActivityTypes, Contacts> | OneToManyLink<ActivityTypes, Activities>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ActivityTypes>;
    /**
     * All key fields of the ActivityTypes entity.
     */
    const _keyFields: Array<Field<ActivityTypes>>;
    /**
     * Mapping of all key field names to the respective static field property ActivityTypes.
     */
    const _keys: {
        [keys: string]: Field<ActivityTypes>;
    };
}
//# sourceMappingURL=ActivityTypes.d.ts.map