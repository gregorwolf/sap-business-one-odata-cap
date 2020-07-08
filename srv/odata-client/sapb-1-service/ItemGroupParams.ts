/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemGroupParams
 */
export interface ItemGroupParams {
  /**
   * Number.
   * @nullable
   */
  number?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemGroupParams.build]] instead.
 */
export function createItemGroupParams(json: any): ItemGroupParams {
  return ItemGroupParams.build(json);
}

/**
 * ItemGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemGroupParams.number]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Number', this, 'Edm.Int32');
}

export namespace ItemGroupParams {
  export function build(json: { [keys: string]: FieldType }): ItemGroupParams {
    return createComplexType(json, {
      Number: (number: number) => ({ number: edmToTs(number, 'Edm.Int32') })
    });
  }
}
