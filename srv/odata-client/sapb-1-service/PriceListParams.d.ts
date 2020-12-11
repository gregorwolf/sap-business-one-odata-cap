import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class PriceListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PriceListParams> {
    /**
     * Representation of the [[PriceListParams.priceListNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceListNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PriceListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PriceListParams {
    /**
     * Metadata information on all properties of the `PriceListParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PriceListParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PriceListParams;
}
//# sourceMappingURL=PriceListParams.d.ts.map