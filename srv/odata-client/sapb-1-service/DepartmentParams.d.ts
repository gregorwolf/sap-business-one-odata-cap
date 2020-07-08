import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DepartmentParams
 */
export interface DepartmentParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DepartmentParams.build]] instead.
 */
export declare function createDepartmentParams(json: any): DepartmentParams;
/**
 * DepartmentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DepartmentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DepartmentParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DepartmentParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DepartmentParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DepartmentParams;
}
//# sourceMappingURL=DepartmentParams.d.ts.map