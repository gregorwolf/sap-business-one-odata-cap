import { TerminationReasonRequestBuilder } from './TerminationReasonRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "TerminationReason" of service "SAPB1".
 */
export declare class TerminationReason extends Entity implements TerminationReasonType {
    /**
     * Technical entity name for TerminationReason.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TerminationReason.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Reason Id.
     * @nullable
     */
    reasonId?: number;
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
     * One-to-many navigation property to the [[EmployeesInfo]] entity.
     */
    employeesInfo: EmployeesInfo[];
    /**
     * Returns an entity builder to construct instances `TerminationReason`.
     * @returns A builder that constructs instances of entity type `TerminationReason`.
     */
    static builder(): EntityBuilderType<TerminationReason, TerminationReasonTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TerminationReason` entity type.
     * @returns A `TerminationReason` request builder.
     */
    static requestBuilder(): TerminationReasonRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TerminationReason`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TerminationReason`.
     */
    static customField(fieldName: string): CustomField<TerminationReason>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
export interface TerminationReasonType {
    reasonId?: number;
    name?: string;
    description?: string;
    employeesInfo: EmployeesInfoType[];
}
export interface TerminationReasonTypeForceMandatory {
    reasonId: number;
    name: string;
    description: string;
    employeesInfo: EmployeesInfoType[];
}
export declare namespace TerminationReason {
    /**
     * Static representation of the [[reasonId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON_ID: NumberField<TerminationReason>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<TerminationReason>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<TerminationReason>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<TerminationReason, EmployeesInfo>;
    /**
     * All fields of the TerminationReason entity.
     */
    const _allFields: Array<NumberField<TerminationReason> | StringField<TerminationReason> | OneToManyLink<TerminationReason, EmployeesInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TerminationReason>;
    /**
     * All key fields of the TerminationReason entity.
     */
    const _keyFields: Array<Field<TerminationReason>>;
    /**
     * Mapping of all key field names to the respective static field property TerminationReason.
     */
    const _keys: {
        [keys: string]: Field<TerminationReason>;
    };
}
//# sourceMappingURL=TerminationReason.d.ts.map