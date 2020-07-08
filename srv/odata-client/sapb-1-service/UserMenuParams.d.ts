import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserMenuParams
 */
export interface UserMenuParams {
    /**
     * User Id.
     * @nullable
     */
    userId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserMenuParams.build]] instead.
 */
export declare function createUserMenuParams(json: any): UserMenuParams;
/**
 * UserMenuParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserMenuParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserMenuParams.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace UserMenuParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserMenuParams;
}
//# sourceMappingURL=UserMenuParams.d.ts.map