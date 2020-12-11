import { EmployeeStatusRequestBuilder } from './EmployeeStatusRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeStatus" of service "SAPB1".
 */
export declare class EmployeeStatus extends EntityV4 implements EmployeeStatusType {
    /**
     * Technical entity name for EmployeeStatus.
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
     * One-to-many navigation property to the [[EmployeesInfo]] entity.
     */
    employeesInfo: EmployeesInfo[];
    /**
     * Returns an entity builder to construct instances of `EmployeeStatus`.
     * @returns A builder that constructs instances of entity type `EmployeeStatus`.
     */
    static builder(): EntityBuilderType<EmployeeStatus, EmployeeStatusType>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeStatus` entity type.
     * @returns A `EmployeeStatus` request builder.
     */
    static requestBuilder(): EmployeeStatusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeStatus`.
     */
    static customField(fieldName: string): CustomFieldV4<EmployeeStatus>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
export interface EmployeeStatusType {
    statusId?: number | null;
    name?: string | null;
    description?: string | null;
    employeesInfo: EmployeesInfoType[];
}
export declare namespace EmployeeStatus {
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_ID: NumberField<EmployeeStatus>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<EmployeeStatus>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<EmployeeStatus>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<EmployeeStatus, EmployeesInfo>;
    /**
     * All fields of the EmployeeStatus entity.
     */
    const _allFields: Array<NumberField<EmployeeStatus> | StringField<EmployeeStatus> | OneToManyLink<EmployeeStatus, EmployeesInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeStatus>;
    /**
     * All key fields of the EmployeeStatus entity.
     */
    const _keyFields: Array<Field<EmployeeStatus>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeStatus.
     */
    const _keys: {
        [keys: string]: Field<EmployeeStatus>;
    };
}
//# sourceMappingURL=EmployeeStatus.d.ts.map