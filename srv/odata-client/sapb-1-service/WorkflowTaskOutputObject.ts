/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WorkflowTaskOutputObject
 */
export interface WorkflowTaskOutputObject {
  /**
   * Task Id.
   * @nullable
   */
  taskId?: number;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: string;
  /**
   * Type.
   * @nullable
   */
  type?: string;
  /**
   * Key.
   * @nullable
   */
  key?: string;
  /**
   * Sub Type.
   * @nullable
   */
  subType?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskOutputObject.build]] instead.
 */
export function createWorkflowTaskOutputObject(json: any): WorkflowTaskOutputObject {
  return WorkflowTaskOutputObject.build(json);
}

/**
 * WorkflowTaskOutputObjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskOutputObjectField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WorkflowTaskOutputObject.taskId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaskID', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTaskOutputObject.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LineId', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskOutputObject.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Type', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskOutputObject.key]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  key: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Key', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskOutputObject.subType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SubType', this, 'Edm.String');
}

export namespace WorkflowTaskOutputObject {
  export function build(json: { [keys: string]: FieldType }): WorkflowTaskOutputObject {
    return createComplexType(json, {
      TaskID: (taskId: number) => ({ taskId: edmToTs(taskId, 'Edm.Int32') }),
      LineId: (lineId: string) => ({ lineId: edmToTs(lineId, 'Edm.String') }),
      Type: (type: string) => ({ type: edmToTs(type, 'Edm.String') }),
      Key: (key: string) => ({ key: edmToTs(key, 'Edm.String') }),
      SubType: (subType: string) => ({ subType: edmToTs(subType, 'Edm.String') })
    });
  }
}
