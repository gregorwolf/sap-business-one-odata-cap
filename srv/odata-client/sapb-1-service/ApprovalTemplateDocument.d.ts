import { ApprovalTemplatesDocumentTypeEnum } from './ApprovalTemplatesDocumentTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ApprovalTemplateDocument
 */
export interface ApprovalTemplateDocument {
    /**
     * Document Type.
     * @nullable
     */
    documentType?: ApprovalTemplatesDocumentTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateDocument.build]] instead.
 */
export declare function createApprovalTemplateDocument(json: any): ApprovalTemplateDocument;
/**
 * ApprovalTemplateDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalTemplateDocumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateDocument> {
    /**
     * Representation of the [[ApprovalTemplateDocument.documentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ApprovalTemplateDocumentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ApprovalTemplateDocument {
    /**
     * Metadata information on all properties of the `ApprovalTemplateDocument` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ApprovalTemplateDocument>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateDocument;
}
//# sourceMappingURL=ApprovalTemplateDocument.d.ts.map