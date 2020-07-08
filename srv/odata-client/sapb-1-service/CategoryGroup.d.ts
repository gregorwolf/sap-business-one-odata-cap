import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class CategoryGroupField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace CategoryGroup {
    function build(json: {
        [keys: string]: FieldType;
    }): CategoryGroup;
}
//# sourceMappingURL=CategoryGroup.d.ts.map