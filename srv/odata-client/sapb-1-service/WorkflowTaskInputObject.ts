/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WorkflowTaskInputObject
 */
export interface WorkflowTaskInputObject {
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
  /**
   * Detail.
   * @nullable
   */
  detail?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskInputObject.build]] instead.
 */
export function createWorkflowTaskInputObject(json: any): WorkflowTaskInputObject {
  return WorkflowTaskInputObject.build(json);
}

/**
 * WorkflowTaskInputObjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkflowTaskInputObjectField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WorkflowTaskInputObject.taskId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaskID', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTaskInputObject.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineId', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkflowTaskInputObject.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Type', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskInputObject.key]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  key: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Key', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskInputObject.subType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SubType', this, 'Edm.String');
  /**
   * Representation of the [[WorkflowTaskInputObject.detail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  detail: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Detail', this, 'Edm.String');
}

export namespace WorkflowTaskInputObject {
  export function build(json: { [keys: string]: FieldType }): WorkflowTaskInputObject {
    return createComplexType(json, {
      TaskID: (taskId: number) => ({ taskId: edmToTs(taskId, 'Edm.Int32') }),
      LineId: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      Type: (type: string) => ({ type: edmToTs(type, 'Edm.String') }),
      Key: (key: string) => ({ key: edmToTs(key, 'Edm.String') }),
      SubType: (subType: string) => ({ subType: edmToTs(subType, 'Edm.String') }),
      Detail: (detail: string) => ({ detail: edmToTs(detail, 'Edm.String') })
    });
  }
}
