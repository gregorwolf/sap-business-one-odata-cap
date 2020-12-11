/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class WorkflowTaskCompleteParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowTaskCompleteParams> {
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

  /**
   * Creates an instance of WorkflowTaskCompleteParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WorkflowTaskCompleteParams);
  }
}

export namespace WorkflowTaskCompleteParams {
  /**
   * Metadata information on all properties of the `WorkflowTaskCompleteParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkflowTaskCompleteParams>[] = [{
    originalName: 'TaskID',
    name: 'taskId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Note',
    name: 'note',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TriggerParams',
    name: 'triggerParams',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WorkflowTaskCompleteParams {
    return deserializeComplexTypeV4(json, WorkflowTaskCompleteParams);
  }
}
