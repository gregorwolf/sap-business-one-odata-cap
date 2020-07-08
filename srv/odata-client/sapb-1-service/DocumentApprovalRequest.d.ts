import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DocumentApprovalRequest
 */
export interface DocumentApprovalRequest {
    /**
     * Approval Templates Id.
     * @nullable
     */
    approvalTemplatesId?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentApprovalRequest.build]] instead.
 */
export declare function createDocumentApprovalRequest(json: any): DocumentApprovalRequest;
/**
 * DocumentApprovalRequestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentApprovalRequestField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentApprovalRequest.approvalTemplatesId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approvalTemplatesId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentApprovalRequest.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DocumentApprovalRequest {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentApprovalRequest;
}
//# sourceMappingURL=DocumentApprovalRequest.d.ts.map