import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * StockTransferApprovalRequest
 */
export interface StockTransferApprovalRequest {
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
 * @deprecated Since v1.6.0. Use [[StockTransferApprovalRequest.build]] instead.
 */
export declare function createStockTransferApprovalRequest(json: any): StockTransferApprovalRequest;
/**
 * StockTransferApprovalRequestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class StockTransferApprovalRequestField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTransferApprovalRequest> {
    /**
     * Representation of the [[StockTransferApprovalRequest.approvalTemplatesId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approvalTemplatesId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferApprovalRequest.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of StockTransferApprovalRequestField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace StockTransferApprovalRequest {
    /**
     * Metadata information on all properties of the `StockTransferApprovalRequest` complex type.
     */
    const _propertyMetadata: PropertyMetadata<StockTransferApprovalRequest>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): StockTransferApprovalRequest;
}
//# sourceMappingURL=StockTransferApprovalRequest.d.ts.map