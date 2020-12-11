import { ServiceGroupsRequestBuilder } from './ServiceGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ServiceGroups" of service "SAPB1".
 */
export declare class ServiceGroups extends EntityV4 implements ServiceGroupsType {
    /**
     * Technical entity name for ServiceGroups.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Service Group Code.
     * @nullable
     */
    serviceGroupCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * Returns an entity builder to construct instances of `ServiceGroups`.
     * @returns A builder that constructs instances of entity type `ServiceGroups`.
     */
    static builder(): EntityBuilderType<ServiceGroups, ServiceGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `ServiceGroups` entity type.
     * @returns A `ServiceGroups` request builder.
     */
    static requestBuilder(): ServiceGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<ServiceGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
export interface ServiceGroupsType {
    absEntry?: number | null;
    serviceGroupCode?: string | null;
    description?: string | null;
    items: ItemsType[];
}
export declare namespace ServiceGroups {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<ServiceGroups>;
    /**
     * Static representation of the [[serviceGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_GROUP_CODE: StringField<ServiceGroups>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ServiceGroups>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<ServiceGroups, Items>;
    /**
     * All fields of the ServiceGroups entity.
     */
    const _allFields: Array<NumberField<ServiceGroups> | StringField<ServiceGroups> | OneToManyLink<ServiceGroups, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ServiceGroups>;
    /**
     * All key fields of the ServiceGroups entity.
     */
    const _keyFields: Array<Field<ServiceGroups>>;
    /**
     * Mapping of all key field names to the respective static field property ServiceGroups.
     */
    const _keys: {
        [keys: string]: Field<ServiceGroups>;
    };
}
//# sourceMappingURL=ServiceGroups.d.ts.map