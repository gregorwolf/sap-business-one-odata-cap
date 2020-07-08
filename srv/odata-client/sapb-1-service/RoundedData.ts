/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * RoundedData
 */
export interface RoundedData {
  /**
   * Value.
   * @nullable
   */
  value?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[RoundedData.build]] instead.
 */
export function createRoundedData(json: any): RoundedData {
  return RoundedData.build(json);
}

/**
 * RoundedDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RoundedDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[RoundedData.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Value', this, 'Edm.Double');
}

export namespace RoundedData {
  export function build(json: { [keys: string]: FieldType }): RoundedData {
    return createComplexType(json, {
      Value: (value: number) => ({ value: edmToTs(value, 'Edm.Double') })
    });
  }
}
