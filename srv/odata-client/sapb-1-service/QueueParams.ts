/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class QueueParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, QueueParams> {
  /**
   * Representation of the [[QueueParams.queueId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queueId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('QueueID', this, 'Edm.String');

  /**
   * Creates an instance of QueueParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, QueueParams);
  }
}

export namespace QueueParams {
  /**
   * Metadata information on all properties of the `QueueParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<QueueParams>[] = [{
    originalName: 'QueueID',
    name: 'queueId',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): QueueParams {
    return deserializeComplexTypeV4(json, QueueParams);
  }
}
