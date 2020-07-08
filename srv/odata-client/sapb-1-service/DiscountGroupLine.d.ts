import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DiscountGroupLine
 */
export interface DiscountGroupLine {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Object Code.
     * @nullable
     */
    objectCode?: string;
    /**
     * Discount.
     * @nullable
     */
    discount?: number;
    /**
     * Paid Quantity.
     * @nullable
     */
    paidQuantity?: number;
    /**
     * Free Quantity.
     * @nullable
     */
    freeQuantity?: number;
    /**
     * Maximum Free Quantity.
     * @nullable
     */
    maximumFreeQuantity?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DiscountGroupLine.build]] instead.
 */
export declare function createDiscountGroupLine(json: any): DiscountGroupLine;
/**
 * DiscountGroupLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DiscountGroupLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DiscountGroupLine.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroupLine.objectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroupLine.discount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroupLine.paidQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paidQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroupLine.freeQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroupLine.maximumFreeQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maximumFreeQuantity: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DiscountGroupLine {
    function build(json: {
        [keys: string]: FieldType;
    }): DiscountGroupLine;
}
//# sourceMappingURL=DiscountGroupLine.d.ts.map