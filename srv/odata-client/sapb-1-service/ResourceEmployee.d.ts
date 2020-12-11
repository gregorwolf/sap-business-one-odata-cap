import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ResourceEmployeeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceEmployee> {
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
    /**
     * Creates an instance of ResourceEmployeeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ResourceEmployee {
    /**
     * Metadata information on all properties of the `ResourceEmployee` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ResourceEmployee>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceEmployee;
}
//# sourceMappingURL=ResourceEmployee.d.ts.map