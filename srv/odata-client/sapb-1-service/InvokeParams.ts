/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InvokeParams
 */
export interface InvokeParams {
  /**
   * Value.
   * @nullable
   */
  value?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[InvokeParams.build]] instead.
 */
export function createInvokeParams(json: any): InvokeParams {
  return InvokeParams.build(json);
}

/**
 * InvokeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InvokeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InvokeParams.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');
}

export namespace InvokeParams {
  export function build(json: { [keys: string]: FieldType }): InvokeParams {
    return createComplexType(json, {
      Value: (value: string) => ({ value: edmToTs(value, 'Edm.String') })
    });
  }
}
