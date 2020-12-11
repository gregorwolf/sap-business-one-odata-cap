import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AccountSegmentationsCategory
 */
export interface AccountSegmentationsCategory {
    /**
     * Segment Id.
     * @nullable
     */
    segmentId?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Short Name.
     * @nullable
     */
    shortName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationsCategory.build]] instead.
 */
export declare function createAccountSegmentationsCategory(json: any): AccountSegmentationsCategory;
/**
 * AccountSegmentationsCategoryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccountSegmentationsCategoryField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AccountSegmentationsCategory> {
    /**
     * Representation of the [[AccountSegmentationsCategory.segmentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    segmentId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AccountSegmentationsCategory.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AccountSegmentationsCategory.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AccountSegmentationsCategory.shortName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shortName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of AccountSegmentationsCategoryField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AccountSegmentationsCategory {
    /**
     * Metadata information on all properties of the `AccountSegmentationsCategory` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AccountSegmentationsCategory>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AccountSegmentationsCategory;
}
//# sourceMappingURL=AccountSegmentationsCategory.d.ts.map