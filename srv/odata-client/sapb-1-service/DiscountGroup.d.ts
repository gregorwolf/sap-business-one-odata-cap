import { DiscountGroupBaseObjectEnum } from './DiscountGroupBaseObjectEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Base Object Type.
     * @nullable
     */
    baseObjectType?: DiscountGroupBaseObjectEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[DiscountGroup.build]] instead.
 */
export declare function createDiscountGroup(json: any): DiscountGroup;
/**
 * DiscountGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DiscountGroupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DiscountGroup> {
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
    /**
     * Representation of the [[DiscountGroup.baseObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseObjectType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of DiscountGroupField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DiscountGroup {
    /**
     * Metadata information on all properties of the `DiscountGroup` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DiscountGroup>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DiscountGroup;
}
//# sourceMappingURL=DiscountGroup.d.ts.map