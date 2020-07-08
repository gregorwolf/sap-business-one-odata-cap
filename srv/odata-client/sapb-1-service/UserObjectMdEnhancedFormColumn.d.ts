import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserObjectMdEnhancedFormColumn
 */
export interface UserObjectMdEnhancedFormColumn {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Column Number.
     * @nullable
     */
    columnNumber?: number;
    /**
     * Child Number.
     * @nullable
     */
    childNumber?: number;
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
}
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdEnhancedFormColumn.build]] instead.
 */
export declare function createUserObjectMdEnhancedFormColumn(json: any): UserObjectMdEnhancedFormColumn;
/**
 * UserObjectMdEnhancedFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserObjectMdEnhancedFormColumnField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.columnNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.childNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    childNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.columnAlias]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnAlias: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdEnhancedFormColumn.columnDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnDescription: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserObjectMdEnhancedFormColumn {
    function build(json: {
        [keys: string]: FieldType;
    }): UserObjectMdEnhancedFormColumn;
}
//# sourceMappingURL=UserObjectMdEnhancedFormColumn.d.ts.map