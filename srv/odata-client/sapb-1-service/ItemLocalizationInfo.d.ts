import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemLocalizationInfo
 */
export interface ItemLocalizationInfo {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Income Nature.
     * @nullable
     */
    incomeNature?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemLocalizationInfo.build]] instead.
 */
export declare function createItemLocalizationInfo(json: any): ItemLocalizationInfo;
/**
 * ItemLocalizationInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemLocalizationInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemLocalizationInfo.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemLocalizationInfo.incomeNature]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    incomeNature: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ItemLocalizationInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemLocalizationInfo;
}
//# sourceMappingURL=ItemLocalizationInfo.d.ts.map