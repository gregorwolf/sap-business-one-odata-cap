import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CategoryGroup
 */
export interface CategoryGroup {
    /**
     * Auth Group Id.
     * @nullable
     */
    authGroupId?: number;
    /**
     * Category Id.
     * @nullable
     */
    categoryId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CategoryGroup.build]] instead.
 */
export declare function createCategoryGroup(json: any): CategoryGroup;
/**
 * CategoryGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CategoryGroupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CategoryGroup> {
    /**
     * Representation of the [[CategoryGroup.authGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    authGroupId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CategoryGroup.categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    categoryId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CategoryGroupField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CategoryGroup {
    /**
     * Metadata information on all properties of the `CategoryGroup` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CategoryGroup>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CategoryGroup;
}
//# sourceMappingURL=CategoryGroup.d.ts.map