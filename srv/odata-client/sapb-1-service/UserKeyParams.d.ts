import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class UserKeyParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserKeyParams> {
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
    /**
     * Creates an instance of UserKeyParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserKeyParams {
    /**
     * Metadata information on all properties of the `UserKeyParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserKeyParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserKeyParams;
}
//# sourceMappingURL=UserKeyParams.d.ts.map