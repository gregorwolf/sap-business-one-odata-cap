import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PaymentsApprovalRequest
 */
export interface PaymentsApprovalRequest {
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
 * @deprecated Since v1.6.0. Use [[PaymentsApprovalRequest.build]] instead.
 */
export declare function createPaymentsApprovalRequest(json: any): PaymentsApprovalRequest;
/**
 * PaymentsApprovalRequestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentsApprovalRequestField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentsApprovalRequest> {
    /**
     * Representation of the [[PaymentsApprovalRequest.approvalTemplatesId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approvalTemplatesId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentsApprovalRequest.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PaymentsApprovalRequestField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentsApprovalRequest {
    /**
     * Metadata information on all properties of the `PaymentsApprovalRequest` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentsApprovalRequest>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentsApprovalRequest;
}
//# sourceMappingURL=PaymentsApprovalRequest.d.ts.map