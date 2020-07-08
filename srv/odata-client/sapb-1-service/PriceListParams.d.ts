import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PriceListParams
 */
export interface PriceListParams {
    /**
     * Price List No.
     * @nullable
     */
    priceListNo?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PriceListParams.build]] instead.
 */
export declare function createPriceListParams(json: any): PriceListParams;
/**
 * PriceListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PriceListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PriceListParams.priceListNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceListNo: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PriceListParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PriceListParams;
}
//# sourceMappingURL=PriceListParams.d.ts.map