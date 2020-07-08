/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ItemPriceReturnParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ItemPriceReturnParams {
  export function build(json: { [keys: string]: FieldType }): ItemPriceReturnParams {
    return createComplexType(json, {
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      Discount: (discount: number) => ({ discount: edmToTs(discount, 'Edm.Double') })
    });
  }
}
