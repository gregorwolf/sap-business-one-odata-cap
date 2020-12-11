import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ItemPriceReturnParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemPriceReturnParams> {
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
    /**
     * Creates an instance of ItemPriceReturnParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemPriceReturnParams {
    /**
     * Metadata information on all properties of the `ItemPriceReturnParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemPriceReturnParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemPriceReturnParams;
}
//# sourceMappingURL=ItemPriceReturnParams.d.ts.map