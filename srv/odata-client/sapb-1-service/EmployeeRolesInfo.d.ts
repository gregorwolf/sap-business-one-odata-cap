import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeRolesInfo
 */
export interface EmployeeRolesInfo {
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Role Id.
     * @nullable
     */
    roleId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeRolesInfo.build]] instead.
 */
export declare function createEmployeeRolesInfo(json: any): EmployeeRolesInfo;
/**
 * EmployeeRolesInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeRolesInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeRolesInfo.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeRolesInfo.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeRolesInfo.roleId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    roleId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace EmployeeRolesInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeRolesInfo;
}
//# sourceMappingURL=EmployeeRolesInfo.d.ts.map