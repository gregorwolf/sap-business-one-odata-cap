import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UserObjectMdFindColumn
 */
export interface UserObjectMdFindColumn {
    /**
     * Column Number.
     * @nullable
     */
    columnNumber?: number;
    /**
     * Column Alias.
     * @nullable
     */
    columnAlias?: string;
    /**
     * Column Description.
     * @nullable
     */
    columnDescription?: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFindColumn.build]] instead.
 */
export declare function createUserObjectMdFindColumn(json: any): UserObjectMdFindColumn;
/**
 * UserObjectMdFindColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserObjectMdFindColumnField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserObjectMdFindColumn> {
    /**
     * Representation of the [[UserObjectMdFindColumn.columnNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFindColumn.columnAlias]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnAlias: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFindColumn.columnDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFindColumn.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UserObjectMdFindColumnField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserObjectMdFindColumn {
    /**
     * Metadata information on all properties of the `UserObjectMdFindColumn` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserObjectMdFindColumn>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserObjectMdFindColumn;
}
//# sourceMappingURL=UserObjectMdFindColumn.d.ts.map