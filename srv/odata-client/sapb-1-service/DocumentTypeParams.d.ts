import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class DocumentTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace DocumentTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentTypeParams;
}
//# sourceMappingURL=DocumentTypeParams.d.ts.map