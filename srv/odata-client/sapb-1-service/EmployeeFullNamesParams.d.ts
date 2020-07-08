import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeFullNamesParams
 */
export interface EmployeeFullNamesParams {
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
    /**
     * Employee Full Name.
     * @nullable
     */
    employeeFullName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeFullNamesParams.build]] instead.
 */
export declare function createEmployeeFullNamesParams(json: any): EmployeeFullNamesParams;
/**
 * EmployeeFullNamesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeFullNamesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeFullNamesParams.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeFullNamesParams.employeeFullName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeFullName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EmployeeFullNamesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeFullNamesParams;
}
//# sourceMappingURL=EmployeeFullNamesParams.d.ts.map