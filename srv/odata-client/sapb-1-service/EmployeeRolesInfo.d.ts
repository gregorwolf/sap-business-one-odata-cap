import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class EmployeeRolesInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeRolesInfo> {
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
    /**
     * Creates an instance of EmployeeRolesInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeRolesInfo {
    /**
     * Metadata information on all properties of the `EmployeeRolesInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeRolesInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeRolesInfo;
}
//# sourceMappingURL=EmployeeRolesInfo.d.ts.map