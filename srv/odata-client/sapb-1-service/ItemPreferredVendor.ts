/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemPreferredVendor
 */
export interface ItemPreferredVendor {
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemPreferredVendor.build]] instead.
 */
export function createItemPreferredVendor(json: any): ItemPreferredVendor {
  return ItemPreferredVendor.build(json);
}

/**
 * ItemPreferredVendorField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPreferredVendorField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemPreferredVendor.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
}

export namespace ItemPreferredVendor {
  export function build(json: { [keys: string]: FieldType }): ItemPreferredVendor {
    return createComplexType(json, {
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') })
    });
  }
}
