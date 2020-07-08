import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserObjectMdFormColumn
 */
export interface UserObjectMdFormColumn {
    /**
     * Form Column Alias.
     * @nullable
     */
    formColumnAlias?: string;
    /**
     * Form Column Description.
     * @nullable
     */
    formColumnDescription?: string;
    /**
     * Form Column Number.
     * @nullable
     */
    formColumnNumber?: number;
    /**
     * Son Number.
     * @nullable
     */
    sonNumber?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFormColumn.build]] instead.
 */
export declare function createUserObjectMdFormColumn(json: any): UserObjectMdFormColumn;
/**
 * UserObjectMdFormColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserObjectMdFormColumnField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserObjectMdFormColumn.formColumnAlias]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formColumnAlias: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFormColumn.formColumnDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formColumnDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFormColumn.formColumnNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formColumnNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFormColumn.sonNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sonNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserObjectMdFormColumn.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserObjectMdFormColumn {
    function build(json: {
        [keys: string]: FieldType;
    }): UserObjectMdFormColumn;
}
//# sourceMappingURL=UserObjectMdFormColumn.d.ts.map