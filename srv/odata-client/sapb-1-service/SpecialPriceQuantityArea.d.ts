import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SpecialPriceQuantityArea
 */
export interface SpecialPriceQuantityArea {
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Spda Row Number.
     * @nullable
     */
    spdaRowNumber?: number;
    /**
     * Special Price.
     * @nullable
     */
    specialPrice?: number;
    /**
     * Item No.
     * @nullable
     */
    itemNo?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Price Currency.
     * @nullable
     */
    priceCurrency?: string;
    /**
     * Discountin.
     * @nullable
     */
    discountin?: number;
    /**
     * Uo M Entry.
     * @nullable
     */
    uoMEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceQuantityArea.build]] instead.
 */
export declare function createSpecialPriceQuantityArea(json: any): SpecialPriceQuantityArea;
/**
 * SpecialPriceQuantityAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SpecialPriceQuantityAreaField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SpecialPriceQuantityArea> {
    /**
     * Representation of the [[SpecialPriceQuantityArea.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceQuantityArea.spdaRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    spdaRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceQuantityArea.specialPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    specialPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceQuantityArea.itemNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceQuantityArea.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceQuantityArea.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceQuantityArea.priceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceQuantityArea.discountin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discountin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SpecialPriceQuantityArea.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SpecialPriceQuantityAreaField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SpecialPriceQuantityArea {
    /**
     * Metadata information on all properties of the `SpecialPriceQuantityArea` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SpecialPriceQuantityArea>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SpecialPriceQuantityArea;
}
//# sourceMappingURL=SpecialPriceQuantityArea.d.ts.map