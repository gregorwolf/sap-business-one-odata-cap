import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserKeyParams
 */
export interface UserKeyParams {
    /**
     * Table Name.
     * @nullable
     */
    tableName?: string;
    /**
     * Key Index.
     * @nullable
     */
    keyIndex?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserKeyParams.build]] instead.
 */
export declare function createUserKeyParams(json: any): UserKeyParams;
/**
 * UserKeyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserKeyParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserKeyParams.tableName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserKeyParams.keyIndex]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyIndex: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace UserKeyParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserKeyParams;
}
//# sourceMappingURL=UserKeyParams.d.ts.map