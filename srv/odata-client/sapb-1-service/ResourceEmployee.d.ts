import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ResourceEmployee
 */
export interface ResourceEmployee {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Employee.
     * @nullable
     */
    employee?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourceEmployee.build]] instead.
 */
export declare function createResourceEmployee(json: any): ResourceEmployee;
/**
 * ResourceEmployeeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourceEmployeeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ResourceEmployee.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceEmployee.employee]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employee: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ResourceEmployee {
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceEmployee;
}
//# sourceMappingURL=ResourceEmployee.d.ts.map