import { ServiceCallProblemSubTypesRequestBuilder } from './ServiceCallProblemSubTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ServiceCallProblemSubTypes" of service "SAPB1".
 */
export declare class ServiceCallProblemSubTypes extends Entity implements ServiceCallProblemSubTypesType {
    /**
     * Technical entity name for ServiceCallProblemSubTypes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ServiceCallProblemSubTypes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Problem Sub Type Id.
     * @nullable
     */
    problemSubTypeId?: number;
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
     * Returns an entity builder to construct instances `ServiceCallProblemSubTypes`.
     * @returns A builder that constructs instances of entity type `ServiceCallProblemSubTypes`.
     */
    static builder(): EntityBuilderType<ServiceCallProblemSubTypes, ServiceCallProblemSubTypesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallProblemSubTypes` entity type.
     * @returns A `ServiceCallProblemSubTypes` request builder.
     */
    static requestBuilder(): ServiceCallProblemSubTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallProblemSubTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallProblemSubTypes`.
     */
    static customField(fieldName: string): CustomField<ServiceCallProblemSubTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
export interface ServiceCallProblemSubTypesType {
    problemSubTypeId?: number;
    name?: string;
    description?: string;
    serviceCalls: ServiceCallsType[];
}
export interface ServiceCallProblemSubTypesTypeForceMandatory {
    problemSubTypeId: number;
    name: string;
    description: string;
    serviceCalls: ServiceCallsType[];
}
export declare namespace ServiceCallProblemSubTypes {
    /**
     * Static representation of the [[problemSubTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROBLEM_SUB_TYPE_ID: NumberField<ServiceCallProblemSubTypes>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ServiceCallProblemSubTypes>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ServiceCallProblemSubTypes>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<ServiceCallProblemSubTypes, ServiceCalls>;
    /**
     * All fields of the ServiceCallProblemSubTypes entity.
     */
    const _allFields: Array<NumberField<ServiceCallProblemSubTypes> | StringField<ServiceCallProblemSubTypes> | OneToManyLink<ServiceCallProblemSubTypes, ServiceCalls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ServiceCallProblemSubTypes>;
    /**
     * All key fields of the ServiceCallProblemSubTypes entity.
     */
    const _keyFields: Array<Field<ServiceCallProblemSubTypes>>;
    /**
     * Mapping of all key field names to the respective static field property ServiceCallProblemSubTypes.
     */
    const _keys: {
        [keys: string]: Field<ServiceCallProblemSubTypes>;
    };
}
//# sourceMappingURL=ServiceCallProblemSubTypes.d.ts.map