/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WorkflowTaskNote
 */
export interface WorkflowTaskNote {
  /**
   * Task Id.
   * @nullable
   */
  taskId?: number;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Note.
   * @nullable
   */
  note?: string;
  /**
   * Creator.
   * @nullable
   */
  creator?: string;
  /**
   * Note Date.
   * @nullable
   */
  noteDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskNote.build]] instead.
 */
export function createWorkflowTaskNote(json: any): WorkflowTaskNote {
  return WorkflowTaskNote.build(json);
}

/**
 * WorkflowTaskNoteField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskNoteField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowTaskNote> {
  /**
   * Representation of the [[WorkflowTaskNote.taskId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaskID', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTaskNote.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineId', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTaskNote.note]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  note: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Note', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskNote.creator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Creator', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskNote.noteDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  noteDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('NoteDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of WorkflowTaskNoteField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WorkflowTaskNote);
  }
}

export namespace WorkflowTaskNote {
  /**
   * Metadata information on all properties of the `WorkflowTaskNote` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkflowTaskNote>[] = [{
    originalName: 'TaskID',
    name: 'taskId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineId',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Note',
    name: 'note',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Creator',
    name: 'creator',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NoteDate',
    name: 'noteDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WorkflowTaskNote {
    return deserializeComplexTypeV4(json, WorkflowTaskNote);
  }
}
