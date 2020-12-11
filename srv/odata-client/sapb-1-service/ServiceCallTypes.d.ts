import { ServiceCallTypesRequestBuilder } from './ServiceCallTypesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ServiceCallTypes" of service "SAPB1".
 */
export declare class ServiceCallTypes extends EntityV4 implements ServiceCallTypesType {
    /**
     * Technical entity name for ServiceCallTypes.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Call Type Id.
     * @nullable
     */
    callTypeId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * One-to-many navigation property to the [[ServiceCalls]] entity.
     */
    serviceCalls: ServiceCalls[];
    /**
     * Returns an entity builder to construct instances of `ServiceCallTypes`.
     * @returns A builder that constructs instances of entity type `ServiceCallTypes`.
     */
    static builder(): EntityBuilderType<ServiceCallTypes, ServiceCallTypesType>;
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallTypes` entity type.
     * @returns A `ServiceCallTypes` request builder.
     */
    static requestBuilder(): ServiceCallTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallTypes`.
     */
    static customField(fieldName: string): CustomFieldV4<ServiceCallTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
export interface ServiceCallTypesType {
    callTypeId?: number | null;
    name?: string | null;
    description?: string | null;
    serviceCalls: ServiceCallsType[];
}
export declare namespace ServiceCallTypes {
    /**
     * Static representation of the [[callTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALL_TYPE_ID: NumberField<ServiceCallTypes>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ServiceCallTypes>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ServiceCallTypes>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<ServiceCallTypes, ServiceCalls>;
    /**
     * All fields of the ServiceCallTypes entity.
     */
    const _allFields: Array<NumberField<ServiceCallTypes> | StringField<ServiceCallTypes> | OneToManyLink<ServiceCallTypes, ServiceCalls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ServiceCallTypes>;
    /**
     * All key fields of the ServiceCallTypes entity.
     */
    const _keyFields: Array<Field<ServiceCallTypes>>;
    /**
     * Mapping of all key field names to the respective static field property ServiceCallTypes.
     */
    const _keys: {
        [keys: string]: Field<ServiceCallTypes>;
    };
}
//# sourceMappingURL=ServiceCallTypes.d.ts.map