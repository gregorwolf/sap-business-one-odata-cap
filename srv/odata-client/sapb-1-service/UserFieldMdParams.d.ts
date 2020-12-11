import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class UserFieldMdParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserFieldMdParams> {
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
    /**
     * Creates an instance of UserFieldMdParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserFieldMdParams {
    /**
     * Metadata information on all properties of the `UserFieldMdParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserFieldMdParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserFieldMdParams;
}
//# sourceMappingURL=UserFieldMdParams.d.ts.map