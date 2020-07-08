import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UoMPrice
 */
export interface UoMPrice {
    /**
     * Price List.
     * @nullable
     */
    priceList?: number;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
    /**
     * Reduce By.
     * @nullable
     */
    reduceBy?: number;
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
     * Additional Reduce By 1.
     * @nullable
     */
    additionalReduceBy1?: number;
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
     * Additional Reduce By 2.
     * @nullable
     */
    additionalReduceBy2?: number;
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
}
/**
 * @deprecated Since v1.6.0. Use [[UoMPrice.build]] instead.
 */
export declare function createUoMPrice(json: any): UoMPrice;
/**
 * UoMPriceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UoMPriceField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UoMPrice.priceList]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceList: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.reduceBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reduceBy: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.additionalReduceBy1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalReduceBy1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.additionalPrice1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalPrice1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.additionalCurrency1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalCurrency1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.additionalReduceBy2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalReduceBy2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.additionalPrice2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalPrice2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UoMPrice.additionalCurrency2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalCurrency2: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UoMPrice {
    function build(json: {
        [keys: string]: FieldType;
    }): UoMPrice;
}
//# sourceMappingURL=UoMPrice.d.ts.map