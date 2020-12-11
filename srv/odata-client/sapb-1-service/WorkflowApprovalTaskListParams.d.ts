import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class WorkflowApprovalTaskListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowApprovalTaskListParams> {
    /**
     * Representation of the [[WorkflowApprovalTaskListParams.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of WorkflowApprovalTaskListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WorkflowApprovalTaskListParams {
    /**
     * Metadata information on all properties of the `WorkflowApprovalTaskListParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WorkflowApprovalTaskListParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WorkflowApprovalTaskListParams;
}
//# sourceMappingURL=WorkflowApprovalTaskListParams.d.ts.map