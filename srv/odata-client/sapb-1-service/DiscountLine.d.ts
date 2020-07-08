import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class DiscountLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace DiscountLine {
    function build(json: {
        [keys: string]: FieldType;
    }): DiscountLine;
}
//# sourceMappingURL=DiscountLine.d.ts.map