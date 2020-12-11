import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class SpecialPriceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SpecialPriceParams> {
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
    /**
     * Creates an instance of SpecialPriceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SpecialPriceParams {
    /**
     * Metadata information on all properties of the `SpecialPriceParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SpecialPriceParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SpecialPriceParams;
}
//# sourceMappingURL=SpecialPriceParams.d.ts.map