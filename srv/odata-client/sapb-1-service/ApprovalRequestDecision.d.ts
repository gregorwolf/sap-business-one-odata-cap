import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ApprovalRequestDecision
 */
export interface ApprovalRequestDecision {
    /**
     * Approver User Name.
     * @nullable
     */
    approverUserName?: string;
    /**
     * Approver Password.
     * @nullable
     */
    approverPassword?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestDecision.build]] instead.
 */
export declare function createApprovalRequestDecision(json: any): ApprovalRequestDecision;
/**
 * ApprovalRequestDecisionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalRequestDecisionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ApprovalRequestDecision.approverUserName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approverUserName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestDecision.approverPassword]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approverPassword: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestDecision.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ApprovalRequestDecision {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalRequestDecision;
}
//# sourceMappingURL=ApprovalRequestDecision.d.ts.map