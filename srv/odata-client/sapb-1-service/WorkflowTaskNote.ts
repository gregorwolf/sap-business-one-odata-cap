/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class WorkflowTaskNoteField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace WorkflowTaskNote {
  export function build(json: { [keys: string]: FieldType }): WorkflowTaskNote {
    return createComplexType(json, {
      TaskID: (taskId: number) => ({ taskId: edmToTs(taskId, 'Edm.Int32') }),
      LineId: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      Note: (note: string) => ({ note: edmToTs(note, 'Edm.String') }),
      Creator: (creator: string) => ({ creator: edmToTs(creator, 'Edm.String') }),
      NoteDate: (noteDate: Moment) => ({ noteDate: edmToTs(noteDate, 'Edm.DateTimeOffset') })
    });
  }
}
