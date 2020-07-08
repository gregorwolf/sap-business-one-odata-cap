import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SpecialPriceParams
 */
export interface SpecialPriceParams {
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Price List Num.
     * @nullable
     */
    priceListNum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceParams.build]] instead.
 */
export declare function createSpecialPriceParams(json: any): SpecialPriceParams;
/**
 * SpecialPriceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SpecialPriceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SpecialPriceParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceParams.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceParams.priceListNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceListNum: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SpecialPriceParams {
    function build(json: {
        [keys: string]: FieldType;
    }): SpecialPriceParams;
}
//# sourceMappingURL=SpecialPriceParams.d.ts.map