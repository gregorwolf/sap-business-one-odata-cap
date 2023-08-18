/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkflowTaskInputObject } from './WorkflowTaskInputObject';
import { WorkflowTaskNote } from './WorkflowTaskNote';
import { WorkflowTaskOutputObject } from './WorkflowTaskOutputObject';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * WorkflowTask
 */
export interface WorkflowTask<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Instance Id.
   * @nullable
   */
  instanceId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Task Id.
   * @nullable
   */
  taskId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Template Id.
   * @nullable
   */
  templateId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Template Name.
   * @nullable
   */
  templateName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Operation.
   * @nullable
   */
  operation?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Owner.
   * @nullable
   */
  owner?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Workflow Task Input Object Collection.
   * @nullable
   */
  workflowTaskInputObjectCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WorkflowTaskInputObject'
  >;
  /**
   * Workflow Task Note Collection.
   * @nullable
   */
  workflowTaskNoteCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WorkflowTaskNote'
  >;
  /**
   * Workflow Task Output Object Collection.
   * @nullable
   */
  workflowTaskOutputObjectCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WorkflowTaskOutputObject'
  >;
}

/**
 * WorkflowTaskField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WorkflowTask,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WorkflowTask.instanceId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instanceId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InstanceID', 'Edm.Int32', true);
  /**
   * Representation of the {@link WorkflowTask.taskId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaskID', 'Edm.Int32', true);
  /**
   * Representation of the {@link WorkflowTask.templateId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  templateId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TemplateID', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTask.templateName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  templateName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TemplateName', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTask.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTask.operation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  operation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Operation', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTask.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTask.owner} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  owner: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Owner', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTask.priority} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Priority', 'Edm.Int32', true);
  /**
   * Representation of the {@link WorkflowTask.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTask.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTask.workflowTaskInputObjectCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowTaskInputObjectCollection: CollectionField<
    EntityT,
    DeSerializersT,
    WorkflowTaskInputObject,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WorkflowTaskInputObjectCollection',
    WorkflowTaskInputObject,
    true
  );
  /**
   * Representation of the {@link WorkflowTask.workflowTaskNoteCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowTaskNoteCollection: CollectionField<
    EntityT,
    DeSerializersT,
    WorkflowTaskNote,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WorkflowTaskNoteCollection',
    WorkflowTaskNote,
    true
  );
  /**
   * Representation of the {@link WorkflowTask.workflowTaskOutputObjectCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowTaskOutputObjectCollection: CollectionField<
    EntityT,
    DeSerializersT,
    WorkflowTaskOutputObject,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WorkflowTaskOutputObjectCollection',
    WorkflowTaskOutputObject,
    true
  );

  /**
   * Creates an instance of WorkflowTaskField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, WorkflowTask, fieldOptions);
  }
}

export namespace WorkflowTask {
  /**
   * Metadata information on all properties of the `WorkflowTask` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkflowTask>[] = [
    {
      originalName: 'InstanceID',
      name: 'instanceId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TaskID',
      name: 'taskId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TemplateID',
      name: 'templateId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TemplateName',
      name: 'templateName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Description',
      name: 'description',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Operation',
      name: 'operation',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Owner',
      name: 'owner',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Priority',
      name: 'priority',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WorkflowTaskInputObjectCollection',
      name: 'workflowTaskInputObjectCollection',
      type: WorkflowTaskInputObject,
      isCollection: true
    },
    {
      originalName: 'WorkflowTaskNoteCollection',
      name: 'workflowTaskNoteCollection',
      type: WorkflowTaskNote,
      isCollection: true
    },
    {
      originalName: 'WorkflowTaskOutputObjectCollection',
      name: 'workflowTaskOutputObjectCollection',
      type: WorkflowTaskOutputObject,
      isCollection: true
    }
  ];
}
