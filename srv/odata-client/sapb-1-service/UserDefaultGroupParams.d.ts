import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserDefaultGroupParams
 */
export interface UserDefaultGroupParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserDefaultGroupParams.build]] instead.
 */
export declare function createUserDefaultGroupParams(json: any): UserDefaultGroupParams;
/**
 * UserDefaultGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserDefaultGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserDefaultGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserDefaultGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserDefaultGroupParams;
}
//# sourceMappingURL=UserDefaultGroupParams.d.ts.map