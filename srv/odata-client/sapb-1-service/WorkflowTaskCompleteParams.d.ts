import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WorkflowTaskCompleteParams
 */
export interface WorkflowTaskCompleteParams {
    /**
     * Task Id.
     * @nullable
     */
    taskId?: number;
    /**
     * Note.
     * @nullable
     */
    note?: string;
    /**
     * Trigger Params.
     * @nullable
     */
    triggerParams?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskCompleteParams.build]] instead.
 */
export declare function createWorkflowTaskCompleteParams(json: any): WorkflowTaskCompleteParams;
/**
 * WorkflowTaskCompleteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WorkflowTaskCompleteParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WorkflowTaskCompleteParams.taskId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taskId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskCompleteParams.note]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    note: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskCompleteParams.triggerParams]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    triggerParams: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WorkflowTaskCompleteParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WorkflowTaskCompleteParams;
}
//# sourceMappingURL=WorkflowTaskCompleteParams.d.ts.map