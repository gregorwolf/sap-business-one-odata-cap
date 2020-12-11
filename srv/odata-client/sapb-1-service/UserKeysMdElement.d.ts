import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class UserKeysMdElementField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserKeysMdElement> {
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
    /**
     * Creates an instance of UserKeysMdElementField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserKeysMdElement {
    /**
     * Metadata information on all properties of the `UserKeysMdElement` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserKeysMdElement>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserKeysMdElement;
}
//# sourceMappingURL=UserKeysMdElement.d.ts.map