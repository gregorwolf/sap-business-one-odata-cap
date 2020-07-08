import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class AssetGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace AssetGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AssetGroupParams;
}
//# sourceMappingURL=AssetGroupParams.d.ts.map