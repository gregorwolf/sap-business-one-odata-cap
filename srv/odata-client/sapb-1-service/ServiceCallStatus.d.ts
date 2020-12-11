import { ServiceCallStatusRequestBuilder } from './ServiceCallStatusRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ServiceCallStatus" of service "SAPB1".
 */
export declare class ServiceCallStatus extends EntityV4 implements ServiceCallStatusType {
    /**
     * Technical entity name for ServiceCallStatus.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Status Id.
     * @nullable
     */
    statusId?: number;
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
     * Returns an entity builder to construct instances of `ServiceCallStatus`.
     * @returns A builder that constructs instances of entity type `ServiceCallStatus`.
     */
    static builder(): EntityBuilderType<ServiceCallStatus, ServiceCallStatusType>;
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallStatus` entity type.
     * @returns A `ServiceCallStatus` request builder.
     */
    static requestBuilder(): ServiceCallStatusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallStatus`.
     */
    static customField(fieldName: string): CustomFieldV4<ServiceCallStatus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ServiceCalls, ServiceCallsType } from './ServiceCalls';
export interface ServiceCallStatusType {
    statusId?: number | null;
    name?: string | null;
    description?: string | null;
    serviceCalls: ServiceCallsType[];
}
export declare namespace ServiceCallStatus {
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_ID: NumberField<ServiceCallStatus>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ServiceCallStatus>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ServiceCallStatus>;
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_CALLS: OneToManyLink<ServiceCallStatus, ServiceCalls>;
    /**
     * All fields of the ServiceCallStatus entity.
     */
    const _allFields: Array<NumberField<ServiceCallStatus> | StringField<ServiceCallStatus> | OneToManyLink<ServiceCallStatus, ServiceCalls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ServiceCallStatus>;
    /**
     * All key fields of the ServiceCallStatus entity.
     */
    const _keyFields: Array<Field<ServiceCallStatus>>;
    /**
     * Mapping of all key field names to the respective static field property ServiceCallStatus.
     */
    const _keys: {
        [keys: string]: Field<ServiceCallStatus>;
    };
}
//# sourceMappingURL=ServiceCallStatus.d.ts.map