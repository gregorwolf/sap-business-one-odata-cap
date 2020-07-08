import { ServiceCallProblemTypesRequestBuilder } from './ServiceCallProblemTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ServiceCallProblemTypes" of service "SAPB1".
 */
export declare class ServiceCallProblemTypes extends Entity implements ServiceCallProblemTypesType {
    /**
     * Technical entity name for ServiceCallProblemTypes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ServiceCallProblemTypes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Problem Type Id.
     * @nullable
     */
    problemTypeId?: number;
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
     * Returns an entity builder to construct instances `ServiceCallProblemTypes`.
     * @returns A builder that constructs instances of entity type `ServiceCallProblemTypes`.
     */
    static builder(): EntityBuilderType<ServiceCallProblemTypes, ServiceCallProblemTypesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallProblemTypes` entity type.
     * @returns A `ServiceCallProblemTypes` request builder.
     */
    static requestBuilder(): ServiceCallProblemTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallProblemTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallProblemTypes`.
     */
    static customField(fieldName: string): CustomField<ServiceCallProblemTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
export interface ServiceCallProblemTypesType {
    problemTypeId?: number;
    name?: string;
    description?: string;
    serviceCalls: ServiceCallsType[];
}
export interface ServiceCallProblemTypesTypeForceMandatory {
    problemTypeId: number;
    name: string;
    description: string;
    serviceCalls: ServiceCallsType[];
}
export declare namespace ServiceCallProblemTypes {
    /**
     * Static representation of the [[problemTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROBLEM_TYPE_ID: NumberField<ServiceCallProblemTypes>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ServiceCallProblemTypes>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ServiceCallProblemTypes>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<ServiceCallProblemTypes, ServiceCalls>;
    /**
     * All fields of the ServiceCallProblemTypes entity.
     */
    const _allFields: Array<NumberField<ServiceCallProblemTypes> | StringField<ServiceCallProblemTypes> | OneToManyLink<ServiceCallProblemTypes, ServiceCalls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ServiceCallProblemTypes>;
    /**
     * All key fields of the ServiceCallProblemTypes entity.
     */
    const _keyFields: Array<Field<ServiceCallProblemTypes>>;
    /**
     * Mapping of all key field names to the respective static field property ServiceCallProblemTypes.
     */
    const _keys: {
        [keys: string]: Field<ServiceCallProblemTypes>;
    };
}
//# sourceMappingURL=ServiceCallProblemTypes.d.ts.map