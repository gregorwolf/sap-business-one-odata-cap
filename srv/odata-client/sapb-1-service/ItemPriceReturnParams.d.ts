import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemPriceReturnParams
 */
export interface ItemPriceReturnParams {
    /**
     * Price.
     * @nullable
     */
    price?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Discount.
     * @nullable
     */
    discount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemPriceReturnParams.build]] instead.
 */
export declare function createItemPriceReturnParams(json: any): ItemPriceReturnParams;
/**
 * ItemPriceReturnParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemPriceReturnParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemPriceReturnParams.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceReturnParams.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPriceReturnParams.discount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discount: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ItemPriceReturnParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemPriceReturnParams;
}
//# sourceMappingURL=ItemPriceReturnParams.d.ts.map