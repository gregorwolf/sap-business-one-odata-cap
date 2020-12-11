import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class DocumentApprovalRequestField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentApprovalRequest> {
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
    /**
     * Creates an instance of DocumentApprovalRequestField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentApprovalRequest {
    /**
     * Metadata information on all properties of the `DocumentApprovalRequest` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentApprovalRequest>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentApprovalRequest;
}
//# sourceMappingURL=DocumentApprovalRequest.d.ts.map