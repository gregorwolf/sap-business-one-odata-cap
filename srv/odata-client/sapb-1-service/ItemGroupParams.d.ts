import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemGroupParams
 */
export interface ItemGroupParams {
    /**
     * Number.
     * @nullable
     */
    number?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemGroupParams.build]] instead.
 */
export declare function createItemGroupParams(json: any): ItemGroupParams;
/**
 * ItemGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemGroupParams.number]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    number: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ItemGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemGroupParams;
}
//# sourceMappingURL=ItemGroupParams.d.ts.map