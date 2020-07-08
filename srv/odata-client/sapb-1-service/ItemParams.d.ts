import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemParams
 */
export interface ItemParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemParams.build]] instead.
 */
export declare function createItemParams(json: any): ItemParams;
/**
 * ItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ItemParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemParams;
}
//# sourceMappingURL=ItemParams.d.ts.map