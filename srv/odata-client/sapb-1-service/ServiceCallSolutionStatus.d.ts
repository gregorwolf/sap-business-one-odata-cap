import { ServiceCallSolutionStatusRequestBuilder } from './ServiceCallSolutionStatusRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ServiceCallSolutionStatus" of service "SAPB1".
 */
export declare class ServiceCallSolutionStatus extends Entity implements ServiceCallSolutionStatusType {
    /**
     * Technical entity name for ServiceCallSolutionStatus.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ServiceCallSolutionStatus.
     */
    static _serviceName: string;
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
     * One-to-many navigation property to the [[KnowledgeBaseSolutions]] entity.
     */
    knowledgeBaseSolutions: KnowledgeBaseSolutions[];
    /**
     * Returns an entity builder to construct instances `ServiceCallSolutionStatus`.
     * @returns A builder that constructs instances of entity type `ServiceCallSolutionStatus`.
     */
    static builder(): EntityBuilderType<ServiceCallSolutionStatus, ServiceCallSolutionStatusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallSolutionStatus` entity type.
     * @returns A `ServiceCallSolutionStatus` request builder.
     */
    static requestBuilder(): ServiceCallSolutionStatusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallSolutionStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallSolutionStatus`.
     */
    static customField(fieldName: string): CustomField<ServiceCallSolutionStatus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { KnowledgeBaseSolutions, KnowledgeBaseSolutionsType } from './KnowledgeBaseSolutions';
export interface ServiceCallSolutionStatusType {
    statusId?: number;
    name?: string;
    description?: string;
    knowledgeBaseSolutions: KnowledgeBaseSolutionsType[];
}
export interface ServiceCallSolutionStatusTypeForceMandatory {
    statusId: number;
    name: string;
    description: string;
    knowledgeBaseSolutions: KnowledgeBaseSolutionsType[];
}
export declare namespace ServiceCallSolutionStatus {
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_ID: NumberField<ServiceCallSolutionStatus>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ServiceCallSolutionStatus>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ServiceCallSolutionStatus>;
    /**
     * Static representation of the one-to-many navigation property [[knowledgeBaseSolutions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<ServiceCallSolutionStatus, KnowledgeBaseSolutions>;
    /**
     * All fields of the ServiceCallSolutionStatus entity.
     */
    const _allFields: Array<NumberField<ServiceCallSolutionStatus> | StringField<ServiceCallSolutionStatus> | OneToManyLink<ServiceCallSolutionStatus, KnowledgeBaseSolutions>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ServiceCallSolutionStatus>;
    /**
     * All key fields of the ServiceCallSolutionStatus entity.
     */
    const _keyFields: Array<Field<ServiceCallSolutionStatus>>;
    /**
     * Mapping of all key field names to the respective static field property ServiceCallSolutionStatus.
     */
    const _keys: {
        [keys: string]: Field<ServiceCallSolutionStatus>;
    };
}
//# sourceMappingURL=ServiceCallSolutionStatus.d.ts.map