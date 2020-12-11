import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocumentTypeParams
 */
export interface DocumentTypeParams {
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
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentTypeParams.build]] instead.
 */
export declare function createDocumentTypeParams(json: any): DocumentTypeParams;
/**
 * DocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentTypeParams> {
    /**
     * Representation of the [[DocumentTypeParams.document]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    document: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentTypeParams.documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentSubType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DocumentTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentTypeParams {
    /**
     * Metadata information on all properties of the `DocumentTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentTypeParams;
}
//# sourceMappingURL=DocumentTypeParams.d.ts.map