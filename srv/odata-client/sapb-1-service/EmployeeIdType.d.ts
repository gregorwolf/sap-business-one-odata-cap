import { EmployeeIdTypeRequestBuilder } from './EmployeeIdTypeRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeIDType" of service "SAPB1".
 */
export declare class EmployeeIdType extends EntityV4 implements EmployeeIdTypeType {
    /**
     * Technical entity name for EmployeeIdType.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Id Type.
     * @nullable
     */
    idType?: string;
    /**
     * One-to-many navigation property to the [[EmployeesInfo]] entity.
     */
    employeesInfo: EmployeesInfo[];
    /**
     * Returns an entity builder to construct instances of `EmployeeIdType`.
     * @returns A builder that constructs instances of entity type `EmployeeIdType`.
     */
    static builder(): EntityBuilderType<EmployeeIdType, EmployeeIdTypeType>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeIdType` entity type.
     * @returns A `EmployeeIdType` request builder.
     */
    static requestBuilder(): EmployeeIdTypeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeIdType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeIdType`.
     */
    static customField(fieldName: string): CustomFieldV4<EmployeeIdType>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
export interface EmployeeIdTypeType {
    idType?: string | null;
    employeesInfo: EmployeesInfoType[];
}
export declare namespace EmployeeIdType {
    /**
     * Static representation of the [[idType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID_TYPE: StringField<EmployeeIdType>;
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEES_INFO: OneToManyLink<EmployeeIdType, EmployeesInfo>;
    /**
     * All fields of the EmployeeIdType entity.
     */
    const _allFields: Array<StringField<EmployeeIdType> | OneToManyLink<EmployeeIdType, EmployeesInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeIdType>;
    /**
     * All key fields of the EmployeeIdType entity.
     */
    const _keyFields: Array<Field<EmployeeIdType>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeIdType.
     */
    const _keys: {
        [keys: string]: Field<EmployeeIdType>;
    };
}
//# sourceMappingURL=EmployeeIdType.d.ts.map