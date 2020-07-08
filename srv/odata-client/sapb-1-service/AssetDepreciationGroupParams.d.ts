import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AssetDepreciationGroupParams
 */
export interface AssetDepreciationGroupParams {
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
 * @deprecated Since v1.6.0. Use [[AssetDepreciationGroupParams.build]] instead.
 */
export declare function createAssetDepreciationGroupParams(json: any): AssetDepreciationGroupParams;
/**
 * AssetDepreciationGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssetDepreciationGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AssetDepreciationGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDepreciationGroupParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AssetDepreciationGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AssetDepreciationGroupParams;
}
//# sourceMappingURL=AssetDepreciationGroupParams.d.ts.map