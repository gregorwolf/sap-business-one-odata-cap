import { DiscountGroupBaseObjectEnum } from './DiscountGroupBaseObjectEnum';
import { DiscountGroupDiscountTypeEnum } from './DiscountGroupDiscountTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Object Type.
     * @nullable
     */
    objectType?: DiscountGroupBaseObjectEnum;
    /**
     * Object Code.
     * @nullable
     */
    objectCode?: string;
    /**
     * Discount Type.
     * @nullable
     */
    discountType?: DiscountGroupDiscountTypeEnum;
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
export declare class DiscountGroupLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DiscountGroupLine> {
    /**
     * Representation of the [[DiscountGroupLine.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroupLine.objectType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroupLine.objectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DiscountGroupLine.discountType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discountType: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of DiscountGroupLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DiscountGroupLine {
    /**
     * Metadata information on all properties of the `DiscountGroupLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DiscountGroupLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DiscountGroupLine;
}
//# sourceMappingURL=DiscountGroupLine.d.ts.map