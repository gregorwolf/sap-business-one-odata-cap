/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * WorkflowTaskCompleteParams
 */
export interface WorkflowTaskCompleteParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Task Id.
   * @nullable
   */
  taskId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Note.
   * @nullable
   */
  note?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Trigger Params.
   * @nullable
   */
  triggerParams?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * WorkflowTaskCompleteParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskCompleteParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WorkflowTaskCompleteParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WorkflowTaskCompleteParams.taskId} property for query construction.
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
   * Representation of the {@link WorkflowTaskCompleteParams.note} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  note: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTaskCompleteParams.triggerParams} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  triggerParams: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TriggerParams', 'Edm.String', true);

  /**
   * Creates an instance of WorkflowTaskCompleteParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      WorkflowTaskCompleteParams,
      fieldOptions
    );
  }
}

export namespace WorkflowTaskCompleteParams {
  /**
   * Metadata information on all properties of the `WorkflowTaskCompleteParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkflowTaskCompleteParams>[] =
    [
      {
        originalName: 'TaskID',
        name: 'taskId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Note',
        name: 'note',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TriggerParams',
        name: 'triggerParams',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
