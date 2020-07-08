import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeTransferParams
 */
export interface EmployeeTransferParams {
    /**
     * Transfer Id.
     * @nullable
     */
    transferId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeTransferParams.build]] instead.
 */
export declare function createEmployeeTransferParams(json: any): EmployeeTransferParams;
/**
 * EmployeeTransferParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeTransferParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeTransferParams.transferId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace EmployeeTransferParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeTransferParams;
}
//# sourceMappingURL=EmployeeTransferParams.d.ts.map