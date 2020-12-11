import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocumentParams
 */
export interface DocumentParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentParams.build]] instead.
 */
export declare function createDocumentParams(json: any): DocumentParams;
/**
 * DocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentParams> {
    /**
     * Representation of the [[DocumentParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DocumentParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentParams {
    /**
     * Metadata information on all properties of the `DocumentParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentParams;
}
//# sourceMappingURL=DocumentParams.d.ts.map