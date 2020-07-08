import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserParams
 */
export interface UserParams {
    /**
     * Internal Key.
     * @nullable
     */
    internalKey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserParams.build]] instead.
 */
export declare function createUserParams(json: any): UserParams;
/**
 * UserParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserParams.internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalKey: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace UserParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserParams;
}
//# sourceMappingURL=UserParams.d.ts.map