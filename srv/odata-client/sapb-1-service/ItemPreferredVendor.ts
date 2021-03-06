/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ItemPreferredVendorField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemPreferredVendor> {
  /**
   * Representation of the [[ItemPreferredVendor.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');

  /**
   * Creates an instance of ItemPreferredVendorField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemPreferredVendor);
  }
}

export namespace ItemPreferredVendor {
  /**
   * Metadata information on all properties of the `ItemPreferredVendor` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemPreferredVendor>[] = [{
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemPreferredVendor {
    return deserializeComplexTypeV4(json, ItemPreferredVendor);
  }
}
