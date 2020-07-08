import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeRoleSetupParams
 */
export interface EmployeeRoleSetupParams {
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
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeRoleSetupParams.build]] instead.
 */
export declare function createEmployeeRoleSetupParams(json: any): EmployeeRoleSetupParams;
/**
 * EmployeeRoleSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeRoleSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeRoleSetupParams.typeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    typeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeRoleSetupParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EmployeeRoleSetupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeRoleSetupParams;
}
//# sourceMappingURL=EmployeeRoleSetupParams.d.ts.map