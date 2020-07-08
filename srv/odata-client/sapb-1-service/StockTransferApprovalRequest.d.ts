import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class StockTransferApprovalRequestField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace StockTransferApprovalRequest {
    function build(json: {
        [keys: string]: FieldType;
    }): StockTransferApprovalRequest;
}
//# sourceMappingURL=StockTransferApprovalRequest.d.ts.map