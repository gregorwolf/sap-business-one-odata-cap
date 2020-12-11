import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DiscountLine
 */
export interface DiscountLine {
    /**
     * Discount Code.
     * @nullable
     */
    discountCode?: string;
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Num Of Days.
     * @nullable
     */
    numOfDays?: number;
    /**
     * Discount.
     * @nullable
     */
    discount?: number;
    /**
     * Day.
     * @nullable
     */
    day?: number;
    /**
     * Month.
     * @nullable
     */
    month?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DiscountLine.build]] instead.
 */
export declare function createDiscountLine(json: any): DiscountLine;
/**
 * DiscountLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DiscountLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DiscountLine> {
    /**
     * Representation of the [[DiscountLine.discountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountLine.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountLine.numOfDays]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numOfDays: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountLine.discount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountLine.day]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    day: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountLine.month]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    month: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DiscountLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DiscountLine {
    /**
     * Metadata information on all properties of the `DiscountLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DiscountLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DiscountLine;
}
//# sourceMappingURL=DiscountLine.d.ts.map