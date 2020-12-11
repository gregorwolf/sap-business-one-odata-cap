import { UoMPrice } from './UoMPrice';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ItemPrice
 */
export interface ItemPrice {
    /**
     * Price List.
     * @nullable
     */
    priceList?: number;
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
     * Additional Price 1.
     * @nullable
     */
    additionalPrice1?: number;
    /**
     * Additional Currency 1.
     * @nullable
     */
    additionalCurrency1?: string;
    /**
     * Additional Price 2.
     * @nullable
     */
    additionalPrice2?: number;
    /**
     * Additional Currency 2.
     * @nullable
     */
    additionalCurrency2?: string;
    /**
     * Base Price List.
     * @nullable
     */
    basePriceList?: number;
    /**
     * Factor.
     * @nullable
     */
    factor?: number;
    /**
     * Uo M Prices.
     * @nullable
     */
    uoMPrices?: UoMPrice[];
}
/**
 * @deprecated Since v1.6.0. Use [[ItemPrice.build]] instead.
 */
export declare function createItemPrice(json: any): ItemPrice;
/**
 * ItemPriceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemPriceField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemPrice> {
    /**
     * Representation of the [[ItemPrice.priceList]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceList: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPrice.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPrice.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPrice.additionalPrice1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalPrice1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPrice.additionalCurrency1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalCurrency1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPrice.additionalPrice2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalPrice2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPrice.additionalCurrency2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalCurrency2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPrice.basePriceList]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    basePriceList: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPrice.factor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemPrice.uoMPrices]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMPrices: CollectionField<EntityT, UoMPrice>;
    /**
     * Creates an instance of ItemPriceField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemPrice {
    /**
     * Metadata information on all properties of the `ItemPrice` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemPrice>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | UoMPrice;
    }): ItemPrice;
}
//# sourceMappingURL=ItemPrice.d.ts.map