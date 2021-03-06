import { BusinessPartnerPropertiesRequestBuilder } from './BusinessPartnerPropertiesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BusinessPartnerProperties" of service "SAPB1".
 */
export declare class BusinessPartnerProperties extends EntityV4 implements BusinessPartnerPropertiesType {
    /**
     * Technical entity name for BusinessPartnerProperties.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Property Code.
     * @nullable
     */
    propertyCode?: number;
    /**
     * Property Name.
     * @nullable
     */
    propertyName?: string;
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerProperties`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerProperties`.
     */
    static builder(): EntityBuilderType<BusinessPartnerProperties, BusinessPartnerPropertiesType>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerProperties` entity type.
     * @returns A `BusinessPartnerProperties` request builder.
     */
    static requestBuilder(): BusinessPartnerPropertiesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerProperties`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerProperties`.
     */
    static customField(fieldName: string): CustomFieldV4<BusinessPartnerProperties>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BusinessPartnerPropertiesType {
    propertyCode?: number | null;
    propertyName?: string | null;
}
export declare namespace BusinessPartnerProperties {
    /**
     * Static representation of the [[propertyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_CODE: NumberField<BusinessPartnerProperties>;
    /**
     * Static representation of the [[propertyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROPERTY_NAME: StringField<BusinessPartnerProperties>;
    /**
     * All fields of the BusinessPartnerProperties entity.
     */
    const _allFields: Array<NumberField<BusinessPartnerProperties> | StringField<BusinessPartnerProperties>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerProperties>;
    /**
     * All key fields of the BusinessPartnerProperties entity.
     */
    const _keyFields: Array<Field<BusinessPartnerProperties>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerProperties.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerProperties>;
    };
}
//# sourceMappingURL=BusinessPartnerProperties.d.ts.map