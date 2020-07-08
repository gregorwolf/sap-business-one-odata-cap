import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ApprovalStageApprover
 */
export interface ApprovalStageApprover {
    /**
     * User Id.
     * @nullable
     */
    userId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalStageApprover.build]] instead.
 */
export declare function createApprovalStageApprover(json: any): ApprovalStageApprover;
/**
 * ApprovalStageApproverField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalStageApproverField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ApprovalStageApprover.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ApprovalStageApprover {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalStageApprover;
}
//# sourceMappingURL=ApprovalStageApprover.d.ts.map