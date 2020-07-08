import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserObjectsMdParams
 */
export interface UserObjectsMdParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserObjectsMdParams.build]] instead.
 */
export declare function createUserObjectsMdParams(json: any): UserObjectsMdParams;
/**
 * UserObjectsMdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserObjectsMdParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserObjectsMdParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserObjectsMdParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserObjectsMdParams;
}
//# sourceMappingURL=UserObjectsMdParams.d.ts.map