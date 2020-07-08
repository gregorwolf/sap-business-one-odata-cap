import { ServiceCallOriginsRequestBuilder } from './ServiceCallOriginsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ServiceCallOrigins" of service "SAPB1".
 */
export declare class ServiceCallOrigins extends Entity implements ServiceCallOriginsType {
    /**
     * Technical entity name for ServiceCallOrigins.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ServiceCallOrigins.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Origin Id.
     * @nullable
     */
    originId?: number;
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
     * Returns an entity builder to construct instances `ServiceCallOrigins`.
     * @returns A builder that constructs instances of entity type `ServiceCallOrigins`.
     */
    static builder(): EntityBuilderType<ServiceCallOrigins, ServiceCallOriginsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallOrigins` entity type.
     * @returns A `ServiceCallOrigins` request builder.
     */
    static requestBuilder(): ServiceCallOriginsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallOrigins`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallOrigins`.
     */
    static customField(fieldName: string): CustomField<ServiceCallOrigins>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
export interface ServiceCallOriginsType {
    originId?: number;
    name?: string;
    description?: string;
    serviceCalls: ServiceCallsType[];
}
export interface ServiceCallOriginsTypeForceMandatory {
    originId: number;
    name: string;
    description: string;
    serviceCalls: ServiceCallsType[];
}
export declare namespace ServiceCallOrigins {
    /**
     * Static representation of the [[originId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGIN_ID: NumberField<ServiceCallOrigins>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ServiceCallOrigins>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ServiceCallOrigins>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<ServiceCallOrigins, ServiceCalls>;
    /**
     * All fields of the ServiceCallOrigins entity.
     */
    const _allFields: Array<NumberField<ServiceCallOrigins> | StringField<ServiceCallOrigins> | OneToManyLink<ServiceCallOrigins, ServiceCalls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ServiceCallOrigins>;
    /**
     * All key fields of the ServiceCallOrigins entity.
     */
    const _keyFields: Array<Field<ServiceCallOrigins>>;
    /**
     * Mapping of all key field names to the respective static field property ServiceCallOrigins.
     */
    const _keys: {
        [keys: string]: Field<ServiceCallOrigins>;
    };
}
//# sourceMappingURL=ServiceCallOrigins.d.ts.map