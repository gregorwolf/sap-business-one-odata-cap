import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeInfoParams
 */
export interface EmployeeInfoParams {
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeInfoParams.build]] instead.
 */
export declare function createEmployeeInfoParams(json: any): EmployeeInfoParams;
/**
 * EmployeeInfoParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeInfoParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeInfoParams.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace EmployeeInfoParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeInfoParams;
}
//# sourceMappingURL=EmployeeInfoParams.d.ts.map