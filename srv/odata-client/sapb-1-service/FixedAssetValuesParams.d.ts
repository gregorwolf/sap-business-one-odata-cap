import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * FixedAssetValuesParams
 */
export interface FixedAssetValuesParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Fiscal Year.
     * @nullable
     */
    fiscalYear?: string;
    /**
     * Depreciation Area.
     * @nullable
     */
    depreciationArea?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FixedAssetValuesParams.build]] instead.
 */
export declare function createFixedAssetValuesParams(json: any): FixedAssetValuesParams;
/**
 * FixedAssetValuesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FixedAssetValuesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[FixedAssetValuesParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValuesParams.fiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fiscalYear: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[FixedAssetValuesParams.depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationArea: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace FixedAssetValuesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): FixedAssetValuesParams;
}
//# sourceMappingURL=FixedAssetValuesParams.d.ts.map