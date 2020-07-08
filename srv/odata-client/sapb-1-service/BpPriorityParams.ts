/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BpPriorityParams
 */
export interface BpPriorityParams {
  /**
   * Priority.
   * @nullable
   */
  priority?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BpPriorityParams.build]] instead.
 */
export function createBpPriorityParams(json: any): BpPriorityParams {
  return BpPriorityParams.build(json);
}

/**
 * BpPriorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpPriorityParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BpPriorityParams.priority]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Priority', this, 'Edm.Int32');
}

export namespace BpPriorityParams {
  export function build(json: { [keys: string]: FieldType }): BpPriorityParams {
    return createComplexType(json, {
      Priority: (priority: number) => ({ priority: edmToTs(priority, 'Edm.Int32') })
    });
  }
}
