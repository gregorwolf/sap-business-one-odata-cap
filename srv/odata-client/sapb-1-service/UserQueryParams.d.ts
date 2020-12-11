import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserQueryParams
 */
export interface UserQueryParams {
    /**
     * Internal Key.
     * @nullable
     */
    internalKey?: number;
    /**
     * Query Category.
     * @nullable
     */
    queryCategory?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserQueryParams.build]] instead.
 */
export declare function createUserQueryParams(json: any): UserQueryParams;
/**
 * UserQueryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserQueryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserQueryParams> {
    /**
     * Representation of the [[UserQueryParams.internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserQueryParams.queryCategory]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    queryCategory: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of UserQueryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserQueryParams {
    /**
     * Metadata information on all properties of the `UserQueryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserQueryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserQueryParams;
}
//# sourceMappingURL=UserQueryParams.d.ts.map