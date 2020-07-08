import { ResourcePropertiesRequestBuilder } from './ResourcePropertiesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ResourceProperties" of service "SAPB1".
 */
export declare class ResourceProperties extends Entity implements ResourcePropertiesType {
    /**
     * Technical entity name for ResourceProperties.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ResourceProperties.
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
     * Returns an entity builder to construct instances `ResourceProperties`.
     * @returns A builder that constructs instances of entity type `ResourceProperties`.
     */
    static builder(): EntityBuilderType<ResourceProperties, ResourcePropertiesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ResourceProperties` entity type.
     * @returns A `ResourceProperties` request builder.
     */
    static requestBuilder(): ResourcePropertiesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ResourceProperties`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ResourceProperties`.
     */
    static customField(fieldName: string): CustomField<ResourceProperties>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ResourcePropertiesType {
    code?: number;
    name?: string;
}
export interface ResourcePropertiesTypeForceMandatory {
    code: number;
    name: string;
}
export declare namespace ResourceProperties {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<ResourceProperties>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ResourceProperties>;
    /**
     * All fields of the ResourceProperties entity.
     */
    const _allFields: Array<NumberField<ResourceProperties> | StringField<ResourceProperties>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ResourceProperties>;
    /**
     * All key fields of the ResourceProperties entity.
     */
    const _keyFields: Array<Field<ResourceProperties>>;
    /**
     * Mapping of all key field names to the respective static field property ResourceProperties.
     */
    const _keys: {
        [keys: string]: Field<ResourceProperties>;
    };
}
//# sourceMappingURL=ResourceProperties.d.ts.map