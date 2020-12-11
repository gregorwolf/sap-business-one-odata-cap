import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocumentChangeMenuName
 */
export interface DocumentChangeMenuName {
    /**
     * Document.
     * @nullable
     */
    document?: string;
    /**
     * Document Sub Type.
     * @nullable
     */
    documentSubType?: string;
    /**
     * Changed Menu Name.
     * @nullable
     */
    changedMenuName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentChangeMenuName.build]] instead.
 */
export declare function createDocumentChangeMenuName(json: any): DocumentChangeMenuName;
/**
 * DocumentChangeMenuNameField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentChangeMenuNameField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentChangeMenuName> {
    /**
     * Representation of the [[DocumentChangeMenuName.document]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    document: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentChangeMenuName.documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentSubType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentChangeMenuName.changedMenuName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changedMenuName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DocumentChangeMenuNameField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentChangeMenuName {
    /**
     * Metadata information on all properties of the `DocumentChangeMenuName` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentChangeMenuName>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentChangeMenuName;
}
//# sourceMappingURL=DocumentChangeMenuName.d.ts.map