import { ItemPropertiesRequestBuilder } from './ItemPropertiesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ItemProperties" of service "SAPB1".
 */
export declare class ItemProperties extends EntityV4 implements ItemPropertiesType {
    /**
     * Technical entity name for ItemProperties.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Number.
     * @nullable
     */
    number?: number;
    /**
     * Property Name.
     * @nullable
     */
    propertyName?: string;
    /**
     * Returns an entity builder to construct instances of `ItemProperties`.
     * @returns A builder that constructs instances of entity type `ItemProperties`.
     */
    static builder(): EntityBuilderType<ItemProperties, ItemPropertiesType>;
    /**
     * Returns a request builder to construct requests for operations on the `ItemProperties` entity type.
     * @returns A `ItemProperties` request builder.
     */
    static requestBuilder(): ItemPropertiesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ItemProperties`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ItemProperties`.
     */
    static customField(fieldName: string): CustomFieldV4<ItemProperties>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ItemPropertiesType {
    number?: number | null;
    propertyName?: string | null;
}
export declare namespace ItemProperties {
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER: NumberField<ItemProperties>;
    /**
     * Static representation of the [[propertyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_NAME: StringField<ItemProperties>;
    /**
     * All fields of the ItemProperties entity.
     */
    const _allFields: Array<NumberField<ItemProperties> | StringField<ItemProperties>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ItemProperties>;
    /**
     * All key fields of the ItemProperties entity.
     */
    const _keyFields: Array<Field<ItemProperties>>;
    /**
     * Mapping of all key field names to the respective static field property ItemProperties.
     */
    const _keys: {
        [keys: string]: Field<ItemProperties>;
    };
}
//# sourceMappingURL=ItemProperties.d.ts.map