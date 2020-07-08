/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmcTaskData
 */
export interface PmcTaskData {
  /**
   * Task Id.
   * @nullable
   */
  taskId?: number;
  /**
   * Task Name.
   * @nullable
   */
  taskName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PmcTaskData.build]] instead.
 */
export function createPmcTaskData(json: any): PmcTaskData {
  return PmcTaskData.build(json);
}

/**
 * PmcTaskDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcTaskDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmcTaskData.taskId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaskID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmcTaskData.taskName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taskName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaskName', this, 'Edm.String');
}

export namespace PmcTaskData {
  export function build(json: { [keys: string]: FieldType }): PmcTaskData {
    return createComplexType(json, {
      TaskID: (taskId: number) => ({ taskId: edmToTs(taskId, 'Edm.Int32') }),
      TaskName: (taskName: string) => ({ taskName: edmToTs(taskName, 'Edm.String') })
    });
  }
}
