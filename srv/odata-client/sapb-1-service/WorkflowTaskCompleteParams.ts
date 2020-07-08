/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createWorkflowTaskCompleteParams(json: any): WorkflowTaskCompleteParams {
  return WorkflowTaskCompleteParams.build(json);
}

/**
 * WorkflowTaskCompleteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskCompleteParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WorkflowTaskCompleteParams.taskId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaskID', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTaskCompleteParams.note]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  note: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Note', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskCompleteParams.triggerParams]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  triggerParams: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TriggerParams', this, 'Edm.String');
}

export namespace WorkflowTaskCompleteParams {
  export function build(json: { [keys: string]: FieldType }): WorkflowTaskCompleteParams {
    return createComplexType(json, {
      TaskID: (taskId: number) => ({ taskId: edmToTs(taskId, 'Edm.Int32') }),
      Note: (note: string) => ({ note: edmToTs(note, 'Edm.String') }),
      TriggerParams: (triggerParams: string) => ({ triggerParams: edmToTs(triggerParams, 'Edm.String') })
    });
  }
}
