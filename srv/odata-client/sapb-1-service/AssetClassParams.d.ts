import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AssetClassParams
 */
export interface AssetClassParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AssetClassParams.build]] instead.
 */
export declare function createAssetClassParams(json: any): AssetClassParams;
/**
 * AssetClassParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssetClassParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AssetClassParams> {
    /**
     * Representation of the [[AssetClassParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetClassParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of AssetClassParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AssetClassParams {
    /**
     * Metadata information on all properties of the `AssetClassParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AssetClassParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AssetClassParams;
}
//# sourceMappingURL=AssetClassParams.d.ts.map