import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserFieldMdParams
 */
export interface UserFieldMdParams {
    /**
     * Table Name.
     * @nullable
     */
    tableName?: string;
    /**
     * Field Id.
     * @nullable
     */
    fieldId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[UserFieldMdParams.build]] instead.
 */
export declare function createUserFieldMdParams(json: any): UserFieldMdParams;
/**
 * UserFieldMdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserFieldMdParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserFieldMdParams.tableName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserFieldMdParams.fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace UserFieldMdParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UserFieldMdParams;
}
//# sourceMappingURL=UserFieldMdParams.d.ts.map