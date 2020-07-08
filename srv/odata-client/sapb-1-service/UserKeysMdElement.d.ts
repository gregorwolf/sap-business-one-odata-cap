import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UserKeysMdElement
 */
export interface UserKeysMdElement {
    /**
     * Sub Key Index.
     * @nullable
     */
    subKeyIndex?: number;
    /**
     * Column Alias.
     * @nullable
     */
    columnAlias?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UserKeysMdElement.build]] instead.
 */
export declare function createUserKeysMdElement(json: any): UserKeysMdElement;
/**
 * UserKeysMdElementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserKeysMdElementField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UserKeysMdElement.subKeyIndex]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subKeyIndex: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UserKeysMdElement.columnAlias]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    columnAlias: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UserKeysMdElement {
    function build(json: {
        [keys: string]: FieldType;
    }): UserKeysMdElement;
}
//# sourceMappingURL=UserKeysMdElement.d.ts.map