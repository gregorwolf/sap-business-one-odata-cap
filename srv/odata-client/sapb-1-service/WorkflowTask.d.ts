import { WorkflowTaskInputObject, WorkflowTaskInputObjectField } from './WorkflowTaskInputObject';
import { WorkflowTaskNote, WorkflowTaskNoteField } from './WorkflowTaskNote';
import { WorkflowTaskOutputObject, WorkflowTaskOutputObjectField } from './WorkflowTaskOutputObject';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WorkflowTask
 */
export interface WorkflowTask {
    /**
     * Instance Id.
     * @nullable
     */
    instanceId?: number;
    /**
     * Task Id.
     * @nullable
     */
    taskId?: number;
    /**
     * Template Id.
     * @nullable
     */
    templateId?: string;
    /**
     * Template Name.
     * @nullable
     */
    templateName?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Operation.
     * @nullable
     */
    operation?: string;
    /**
     * Type.
     * @nullable
     */
    type?: string;
    /**
     * Owner.
     * @nullable
     */
    owner?: string;
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
    /**
     * Status.
     * @nullable
     */
    status?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Workflow Task Input Object Collection.
     * @nullable
     */
    workflowTaskInputObjectCollection?: WorkflowTaskInputObject;
    /**
     * Workflow Task Note Collection.
     * @nullable
     */
    workflowTaskNoteCollection?: WorkflowTaskNote;
    /**
     * Workflow Task Output Object Collection.
     * @nullable
     */
    workflowTaskOutputObjectCollection?: WorkflowTaskOutputObject;
}
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTask.build]] instead.
 */
export declare function createWorkflowTask(json: any): WorkflowTask;
/**
 * WorkflowTaskField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WorkflowTaskField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WorkflowTask.instanceId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    instanceId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.taskId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taskId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.templateId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    templateId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.templateName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    templateName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.operation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    operation: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.owner]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    owner: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.priority]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priority: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.workflowTaskInputObjectCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    workflowTaskInputObjectCollection: WorkflowTaskInputObjectField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.workflowTaskNoteCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    workflowTaskNoteCollection: WorkflowTaskNoteField<EntityT>;
    /**
     * Representation of the [[WorkflowTask.workflowTaskOutputObjectCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    workflowTaskOutputObjectCollection: WorkflowTaskOutputObjectField<EntityT>;
}
export declare namespace WorkflowTask {
    function build(json: {
        [keys: string]: FieldType | WorkflowTaskInputObject | WorkflowTaskNote | WorkflowTaskOutputObject;
    }): WorkflowTask;
}
//# sourceMappingURL=WorkflowTask.d.ts.map