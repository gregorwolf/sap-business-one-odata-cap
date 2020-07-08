import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DiscountGroup
 */
export interface DiscountGroup {
    /**
     * Object Entry.
     * @nullable
     */
    objectEntry?: string;
    /**
     * Discount Percentage.
     * @nullable
     */
    discountPercentage?: number;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DiscountGroup.build]] instead.
 */
export declare function createDiscountGroup(json: any): DiscountGroup;
/**
 * DiscountGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DiscountGroupField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DiscountGroup.objectEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectEntry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroup.discountPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discountPercentage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroup.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DiscountGroup {
    function build(json: {
        [keys: string]: FieldType;
    }): DiscountGroup;
}
//# sourceMappingURL=DiscountGroup.d.ts.map