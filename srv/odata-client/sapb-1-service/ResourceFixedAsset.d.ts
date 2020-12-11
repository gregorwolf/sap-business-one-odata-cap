import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ResourceFixedAsset
 */
export interface ResourceFixedAsset {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourceFixedAsset.build]] instead.
 */
export declare function createResourceFixedAsset(json: any): ResourceFixedAsset;
/**
 * ResourceFixedAssetField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourceFixedAssetField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceFixedAsset> {
    /**
     * Representation of the [[ResourceFixedAsset.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceFixedAsset.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ResourceFixedAssetField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ResourceFixedAsset {
    /**
     * Metadata information on all properties of the `ResourceFixedAsset` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ResourceFixedAsset>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceFixedAsset;
}
//# sourceMappingURL=ResourceFixedAsset.d.ts.map