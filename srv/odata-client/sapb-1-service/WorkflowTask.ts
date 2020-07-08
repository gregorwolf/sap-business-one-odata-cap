/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkflowTaskInputObject, WorkflowTaskInputObjectField } from './WorkflowTaskInputObject';
import { WorkflowTaskNote, WorkflowTaskNoteField } from './WorkflowTaskNote';
import { WorkflowTaskOutputObject, WorkflowTaskOutputObjectField } from './WorkflowTaskOutputObject';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createWorkflowTask(json: any): WorkflowTask {
  return WorkflowTask.build(json);
}

/**
 * WorkflowTaskField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WorkflowTask.instanceId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instanceId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InstanceID', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTask.taskId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaskID', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTask.templateId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  templateId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TemplateID', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTask.templateName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  templateName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TemplateName', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTask.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTask.operation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  operation: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Operation', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTask.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Type', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTask.owner]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owner: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Owner', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTask.priority]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Priority', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTask.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Status', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTask.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTask.workflowTaskInputObjectCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowTaskInputObjectCollection: WorkflowTaskInputObjectField<EntityT> = new WorkflowTaskInputObjectField('WorkflowTaskInputObjectCollection', this);
  /**
   * Representation of the [[WorkflowTask.workflowTaskNoteCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowTaskNoteCollection: WorkflowTaskNoteField<EntityT> = new WorkflowTaskNoteField('WorkflowTaskNoteCollection', this);
  /**
   * Representation of the [[WorkflowTask.workflowTaskOutputObjectCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowTaskOutputObjectCollection: WorkflowTaskOutputObjectField<EntityT> = new WorkflowTaskOutputObjectField('WorkflowTaskOutputObjectCollection', this);
}

export namespace WorkflowTask {
  export function build(json: { [keys: string]: FieldType | WorkflowTaskInputObject | WorkflowTaskNote | WorkflowTaskOutputObject }): WorkflowTask {
    return createComplexType(json, {
      InstanceID: (instanceId: number) => ({ instanceId: edmToTs(instanceId, 'Edm.Int32') }),
      TaskID: (taskId: number) => ({ taskId: edmToTs(taskId, 'Edm.Int32') }),
      TemplateID: (templateId: string) => ({ templateId: edmToTs(templateId, 'Edm.String') }),
      TemplateName: (templateName: string) => ({ templateName: edmToTs(templateName, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') }),
      Operation: (operation: string) => ({ operation: edmToTs(operation, 'Edm.String') }),
      Type: (type: string) => ({ type: edmToTs(type, 'Edm.String') }),
      Owner: (owner: string) => ({ owner: edmToTs(owner, 'Edm.String') }),
      Priority: (priority: number) => ({ priority: edmToTs(priority, 'Edm.Int32') }),
      Status: (status: string) => ({ status: edmToTs(status, 'Edm.String') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      WorkflowTaskInputObjectCollection: (workflowTaskInputObjectCollection: WorkflowTaskInputObject) => ({ workflowTaskInputObjectCollection: WorkflowTaskInputObject.build(workflowTaskInputObjectCollection) }),
      WorkflowTaskNoteCollection: (workflowTaskNoteCollection: WorkflowTaskNote) => ({ workflowTaskNoteCollection: WorkflowTaskNote.build(workflowTaskNoteCollection) }),
      WorkflowTaskOutputObjectCollection: (workflowTaskOutputObjectCollection: WorkflowTaskOutputObject) => ({ workflowTaskOutputObjectCollection: WorkflowTaskOutputObject.build(workflowTaskOutputObjectCollection) })
    });
  }
}
