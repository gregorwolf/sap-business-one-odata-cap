/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemPropertyParams
 */
export interface ItemPropertyParams {
  /**
   * Number.
   * @nullable
   */
  number?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemPropertyParams.build]] instead.
 */
export function createItemPropertyParams(json: any): ItemPropertyParams {
  return ItemPropertyParams.build(json);
}

/**
 * ItemPropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPropertyParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemPropertyParams.number]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Number', this, 'Edm.Int32');
}

export namespace ItemPropertyParams {
  export function build(json: { [keys: string]: FieldType }): ItemPropertyParams {
    return createComplexType(json, {
      Number: (number: number) => ({ number: edmToTs(number, 'Edm.Int32') })
    });
  }
}
