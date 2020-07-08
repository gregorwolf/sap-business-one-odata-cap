/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * QueueParams
 */
export interface QueueParams {
  /**
   * Queue Id.
   * @nullable
   */
  queueId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[QueueParams.build]] instead.
 */
export function createQueueParams(json: any): QueueParams {
  return QueueParams.build(json);
}

/**
 * QueueParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class QueueParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[QueueParams.queueId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queueId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('QueueID', this, 'Edm.String');
}

export namespace QueueParams {
  export function build(json: { [keys: string]: FieldType }): QueueParams {
    return createComplexType(json, {
      QueueID: (queueId: string) => ({ queueId: edmToTs(queueId, 'Edm.String') })
    });
  }
}
