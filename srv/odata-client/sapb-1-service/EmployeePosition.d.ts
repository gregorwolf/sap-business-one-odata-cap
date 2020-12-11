import { EmployeePositionRequestBuilder } from './EmployeePositionRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeePosition" of service "SAPB1".
 */
export declare class EmployeePosition extends EntityV4 implements EmployeePositionType {
    /**
     * Technical entity name for EmployeePosition.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Position Id.
     * @nullable
     */
    positionId?: number;
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
     * Returns an entity builder to construct instances of `EmployeePosition`.
     * @returns A builder that constructs instances of entity type `EmployeePosition`.
     */
    static builder(): EntityBuilderType<EmployeePosition, EmployeePositionType>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeePosition` entity type.
     * @returns A `EmployeePosition` request builder.
     */
    static requestBuilder(): EmployeePositionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeePosition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeePosition`.
     */
    static customField(fieldName: string): CustomFieldV4<EmployeePosition>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
export interface EmployeePositionType {
    positionId?: number | null;
    name?: string | null;
    description?: string | null;
    employeesInfo: EmployeesInfoType[];
}
export declare namespace EmployeePosition {
    /**
     * Static representation of the [[positionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_ID: NumberField<EmployeePosition>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<EmployeePosition>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<EmployeePosition>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<EmployeePosition, EmployeesInfo>;
    /**
     * All fields of the EmployeePosition entity.
     */
    const _allFields: Array<NumberField<EmployeePosition> | StringField<EmployeePosition> | OneToManyLink<EmployeePosition, EmployeesInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeePosition>;
    /**
     * All key fields of the EmployeePosition entity.
     */
    const _keyFields: Array<Field<EmployeePosition>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeePosition.
     */
    const _keys: {
        [keys: string]: Field<EmployeePosition>;
    };
}
//# sourceMappingURL=EmployeePosition.d.ts.map