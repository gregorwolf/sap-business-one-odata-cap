import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class UserObjectMdFindColumnField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace UserObjectMdFindColumn {
    function build(json: {
        [keys: string]: FieldType;
    }): UserObjectMdFindColumn;
}
//# sourceMappingURL=UserObjectMdFindColumn.d.ts.map