import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeePositionParams
 */
export interface EmployeePositionParams {
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
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeePositionParams.build]] instead.
 */
export declare function createEmployeePositionParams(json: any): EmployeePositionParams;
/**
 * EmployeePositionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeePositionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeePositionParams.positionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    positionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePositionParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePositionParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EmployeePositionParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeePositionParams;
}
//# sourceMappingURL=EmployeePositionParams.d.ts.map