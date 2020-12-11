import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ResourcePropertyParams
 */
export interface ResourcePropertyParams {
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
 * @deprecated Since v1.6.0. Use [[ResourcePropertyParams.build]] instead.
 */
export declare function createResourcePropertyParams(json: any): ResourcePropertyParams;
/**
 * ResourcePropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourcePropertyParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourcePropertyParams> {
    /**
     * Representation of the [[ResourcePropertyParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ResourcePropertyParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ResourcePropertyParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ResourcePropertyParams {
    /**
     * Metadata information on all properties of the `ResourcePropertyParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ResourcePropertyParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ResourcePropertyParams;
}
//# sourceMappingURL=ResourcePropertyParams.d.ts.map