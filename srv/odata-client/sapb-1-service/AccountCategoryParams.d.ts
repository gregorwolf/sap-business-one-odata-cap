import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AccountCategoryParams
 */
export interface AccountCategoryParams {
    /**
     * Category Code.
     * @nullable
     */
    categoryCode?: number;
    /**
     * Category Name.
     * @nullable
     */
    categoryName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AccountCategoryParams.build]] instead.
 */
export declare function createAccountCategoryParams(json: any): AccountCategoryParams;
/**
 * AccountCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccountCategoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AccountCategoryParams.categoryCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    categoryCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AccountCategoryParams.categoryName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    categoryName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AccountCategoryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AccountCategoryParams;
}
//# sourceMappingURL=AccountCategoryParams.d.ts.map