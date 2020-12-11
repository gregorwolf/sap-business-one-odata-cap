import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class DepartmentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DepartmentParams> {
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
    /**
     * Creates an instance of DepartmentParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DepartmentParams {
    /**
     * Metadata information on all properties of the `DepartmentParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DepartmentParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DepartmentParams;
}
//# sourceMappingURL=DepartmentParams.d.ts.map