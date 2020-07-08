import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class AssetClassParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace AssetClassParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AssetClassParams;
}
//# sourceMappingURL=AssetClassParams.d.ts.map