import { EmployeeRolesSetupRequestBuilder } from './EmployeeRolesSetupRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "EmployeeRolesSetup" of service "SAPB1".
 */
export declare class EmployeeRolesSetup extends Entity implements EmployeeRolesSetupType {
    /**
     * Technical entity name for EmployeeRolesSetup.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeRolesSetup.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Type Id.
     * @nullable
     */
    typeId?: number;
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
     * Returns an entity builder to construct instances `EmployeeRolesSetup`.
     * @returns A builder that constructs instances of entity type `EmployeeRolesSetup`.
     */
    static builder(): EntityBuilderType<EmployeeRolesSetup, EmployeeRolesSetupTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeRolesSetup` entity type.
     * @returns A `EmployeeRolesSetup` request builder.
     */
    static requestBuilder(): EmployeeRolesSetupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeRolesSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeRolesSetup`.
     */
    static customField(fieldName: string): CustomField<EmployeeRolesSetup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
export interface EmployeeRolesSetupType {
    typeId?: number;
    name?: string;
    description?: string;
    employeesInfo: EmployeesInfoType[];
}
export interface EmployeeRolesSetupTypeForceMandatory {
    typeId: number;
    name: string;
    description: string;
    employeesInfo: EmployeesInfoType[];
}
export declare namespace EmployeeRolesSetup {
    /**
     * Static representation of the [[typeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_ID: NumberField<EmployeeRolesSetup>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<EmployeeRolesSetup>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<EmployeeRolesSetup>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<EmployeeRolesSetup, EmployeesInfo>;
    /**
     * All fields of the EmployeeRolesSetup entity.
     */
    const _allFields: Array<NumberField<EmployeeRolesSetup> | StringField<EmployeeRolesSetup> | OneToManyLink<EmployeeRolesSetup, EmployeesInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeRolesSetup>;
    /**
     * All key fields of the EmployeeRolesSetup entity.
     */
    const _keyFields: Array<Field<EmployeeRolesSetup>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeRolesSetup.
     */
    const _keys: {
        [keys: string]: Field<EmployeeRolesSetup>;
    };
}
//# sourceMappingURL=EmployeeRolesSetup.d.ts.map