import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserTableParams
 */
export interface UserTableParams {
    /**
     * Table Type.
     * @nullable
     */
    tableType?: string;
    /**
     * Table Name.
     * @nullable
     */
    tableName?: string;
    /**
     * Table Description.
     * @nullable
     */
    tableDescription?: string;
    /**
     * Archive Date Field.
     * @nullable
     */
    archiveDateField?: string;
    /**
     * Archivable.
     * @nullable
     */
    archivable?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserTableParams.build]] instead.
 */
export declare function createUserTableParams(json: any): UserTableParams;
/**
 * UserTableParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserTableParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserTableParams> {
    /**
     * Representation of the [[UserTableParams.tableType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserTableParams.tableName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserTableParams.tableDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserTableParams.archiveDateField]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    archiveDateField: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserTableParams.archivable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    archivable: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UserTableParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserTableParams {
    /**
     * Metadata information on all properties of the `UserTableParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserTableParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserTableParams;
}
//# sourceMappingURL=UserTableParams.d.ts.map