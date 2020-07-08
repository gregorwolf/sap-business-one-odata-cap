import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserLanguageParams
 */
export interface UserLanguageParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserLanguageParams.build]] instead.
 */
export declare function createUserLanguageParams(json: any): UserLanguageParams;
/**
 * UserLanguageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserLanguageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserLanguageParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace UserLanguageParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserLanguageParams;
}
//# sourceMappingURL=UserLanguageParams.d.ts.map