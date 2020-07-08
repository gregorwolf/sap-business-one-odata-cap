import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ResourceFixedAssetField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ResourceFixedAsset {
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceFixedAsset;
}
//# sourceMappingURL=ResourceFixedAsset.d.ts.map