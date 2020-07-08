import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class UserQueryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace UserQueryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserQueryParams;
}
//# sourceMappingURL=UserQueryParams.d.ts.map