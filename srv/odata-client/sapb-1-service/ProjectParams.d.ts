import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProjectParams
 */
export interface ProjectParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ProjectParams.build]] instead.
 */
export declare function createProjectParams(json: any): ProjectParams;
/**
 * ProjectParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProjectParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProjectParams> {
    /**
     * Representation of the [[ProjectParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ProjectParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ProjectParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProjectParams {
    /**
     * Metadata information on all properties of the `ProjectParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProjectParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ProjectParams;
}
//# sourceMappingURL=ProjectParams.d.ts.map