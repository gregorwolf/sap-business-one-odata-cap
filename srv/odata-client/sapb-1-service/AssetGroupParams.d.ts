import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AssetGroupParams
 */
export interface AssetGroupParams {
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
 * @deprecated Since v1.6.0. Use [[AssetGroupParams.build]] instead.
 */
export declare function createAssetGroupParams(json: any): AssetGroupParams;
/**
 * AssetGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssetGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AssetGroupParams> {
    /**
     * Representation of the [[AssetGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetGroupParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of AssetGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AssetGroupParams {
    /**
     * Metadata information on all properties of the `AssetGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AssetGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AssetGroupParams;
}
//# sourceMappingURL=AssetGroupParams.d.ts.map