import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WorkflowApprovalTaskListParams
 */
export interface WorkflowApprovalTaskListParams {
    /**
     * Status.
     * @nullable
     */
    status?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WorkflowApprovalTaskListParams.build]] instead.
 */
export declare function createWorkflowApprovalTaskListParams(json: any): WorkflowApprovalTaskListParams;
/**
 * WorkflowApprovalTaskListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WorkflowApprovalTaskListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WorkflowApprovalTaskListParams.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WorkflowApprovalTaskListParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WorkflowApprovalTaskListParams;
}
//# sourceMappingURL=WorkflowApprovalTaskListParams.d.ts.map