import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class AccountCategoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AccountCategoryParams> {
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
    /**
     * Creates an instance of AccountCategoryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AccountCategoryParams {
    /**
     * Metadata information on all properties of the `AccountCategoryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AccountCategoryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AccountCategoryParams;
}
//# sourceMappingURL=AccountCategoryParams.d.ts.map