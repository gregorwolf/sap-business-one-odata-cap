/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemPriceReturnParams
 */
export interface ItemPriceReturnParams {
  /**
   * Price.
   * @nullable
   */
  price?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Discount.
   * @nullable
   */
  discount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemPriceReturnParams.build]] instead.
 */
export function createItemPriceReturnParams(json: any): ItemPriceReturnParams {
  return ItemPriceReturnParams.build(json);
}

/**
 * ItemPriceReturnParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPriceReturnParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemPriceReturnParams> {
  /**
   * Representation of the [[ItemPriceReturnParams.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPriceReturnParams.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[ItemPriceReturnParams.discount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discount', this, 'Edm.Double');

  /**
   * Creates an instance of ItemPriceReturnParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemPriceReturnParams);
  }
}

export namespace ItemPriceReturnParams {
  /**
   * Metadata information on all properties of the `ItemPriceReturnParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemPriceReturnParams>[] = [{
    originalName: 'Price',
    name: 'price',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Discount',
    name: 'discount',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemPriceReturnParams {
    return deserializeComplexTypeV4(json, ItemPriceReturnParams);
  }
}
