/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkflowTaskInputObject } from './WorkflowTaskInputObject';
import { WorkflowTaskNote } from './WorkflowTaskNote';
import { WorkflowTaskOutputObject } from './WorkflowTaskOutputObject';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  workflowTaskInputObjectCollection?: WorkflowTaskInputObject[];
  /**
   * Workflow Task Note Collection.
   * @nullable
   */
  workflowTaskNoteCollection?: WorkflowTaskNote[];
  /**
   * Workflow Task Output Object Collection.
   * @nullable
   */
  workflowTaskOutputObjectCollection?: WorkflowTaskOutputObject[];
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
export class WorkflowTaskField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowTask> {
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
  workflowTaskInputObjectCollection: CollectionField<EntityT, WorkflowTaskInputObject> = new CollectionField('WorkflowTaskInputObjectCollection', this, WorkflowTaskInputObject);
  /**
   * Representation of the [[WorkflowTask.workflowTaskNoteCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowTaskNoteCollection: CollectionField<EntityT, WorkflowTaskNote> = new CollectionField('WorkflowTaskNoteCollection', this, WorkflowTaskNote);
  /**
   * Representation of the [[WorkflowTask.workflowTaskOutputObjectCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowTaskOutputObjectCollection: CollectionField<EntityT, WorkflowTaskOutputObject> = new CollectionField('WorkflowTaskOutputObjectCollection', this, WorkflowTaskOutputObject);

  /**
   * Creates an instance of WorkflowTaskField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WorkflowTask);
  }
}

export namespace WorkflowTask {
  /**
   * Metadata information on all properties of the `WorkflowTask` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkflowTask>[] = [{
    originalName: 'InstanceID',
    name: 'instanceId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TaskID',
    name: 'taskId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TemplateID',
    name: 'templateId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TemplateName',
    name: 'templateName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Operation',
    name: 'operation',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Owner',
    name: 'owner',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Priority',
    name: 'priority',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WorkflowTaskInputObjectCollection',
    name: 'workflowTaskInputObjectCollection',
    type: WorkflowTaskInputObject,
    isCollection: true
  }, {
    originalName: 'WorkflowTaskNoteCollection',
    name: 'workflowTaskNoteCollection',
    type: WorkflowTaskNote,
    isCollection: true
  }, {
    originalName: 'WorkflowTaskOutputObjectCollection',
    name: 'workflowTaskOutputObjectCollection',
    type: WorkflowTaskOutputObject,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | WorkflowTaskInputObject | WorkflowTaskNote | WorkflowTaskOutputObject }): WorkflowTask {
    return deserializeComplexTypeV4(json, WorkflowTask);
  }
}
