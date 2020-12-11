import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProductTreeParams
 */
export interface ProductTreeParams {
    /**
     * Tree Code.
     * @nullable
     */
    treeCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ProductTreeParams.build]] instead.
 */
export declare function createProductTreeParams(json: any): ProductTreeParams;
/**
 * ProductTreeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProductTreeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductTreeParams> {
    /**
     * Representation of the [[ProductTreeParams.treeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    treeCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ProductTreeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProductTreeParams {
    /**
     * Metadata information on all properties of the `ProductTreeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProductTreeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ProductTreeParams;
}
//# sourceMappingURL=ProductTreeParams.d.ts.map