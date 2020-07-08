import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeIdTypeParams
 */
export interface EmployeeIdTypeParams {
    /**
     * Id Type.
     * @nullable
     */
    idType?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeIdTypeParams.build]] instead.
 */
export declare function createEmployeeIdTypeParams(json: any): EmployeeIdTypeParams;
/**
 * EmployeeIdTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeIdTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeIdTypeParams.idType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    idType: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EmployeeIdTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeIdTypeParams;
}
//# sourceMappingURL=EmployeeIdTypeParams.d.ts.map