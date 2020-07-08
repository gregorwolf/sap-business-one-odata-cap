import { ComplexTypeField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ApprovalTemplateDocument
 */
export interface ApprovalTemplateDocument {
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateDocument.build]] instead.
 */
export declare function createApprovalTemplateDocument(json: any): ApprovalTemplateDocument;
/**
 * ApprovalTemplateDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalTemplateDocumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
}
export declare namespace ApprovalTemplateDocument {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateDocument;
}
//# sourceMappingURL=ApprovalTemplateDocument.d.ts.map