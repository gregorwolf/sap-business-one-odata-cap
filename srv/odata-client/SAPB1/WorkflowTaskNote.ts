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
 * WorkflowTaskNote
 */
export interface WorkflowTaskNote<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Task Id.
   * @nullable
   */
  taskId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Note.
   * @nullable
   */
  note?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Creator.
   * @nullable
   */
  creator?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Note Date.
   * @nullable
   */
  noteDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * WorkflowTaskNoteField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskNoteField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WorkflowTaskNote,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WorkflowTaskNote.taskId} property for query construction.
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
   * Representation of the {@link WorkflowTaskNote.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineId', 'Edm.Int32', true);
  /**
   * Representation of the {@link WorkflowTaskNote.note} property for query construction.
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
   * Representation of the {@link WorkflowTaskNote.creator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Creator', 'Edm.String', true);
  /**
   * Representation of the {@link WorkflowTaskNote.noteDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  noteDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NoteDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of WorkflowTaskNoteField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, WorkflowTaskNote, fieldOptions);
  }
}

export namespace WorkflowTaskNote {
  /**
   * Metadata information on all properties of the `WorkflowTaskNote` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkflowTaskNote>[] = [
    {
      originalName: 'TaskID',
      name: 'taskId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineId',
      name: 'lineId',
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
      originalName: 'Creator',
      name: 'creator',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NoteDate',
      name: 'noteDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
