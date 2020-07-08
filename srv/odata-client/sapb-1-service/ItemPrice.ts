/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UoMPrice, UoMPriceField } from './UoMPrice';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemPrice
 */
export interface ItemPrice {
  /**
   * Price List.
   * @nullable
   */
  priceList?: number;
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
   * Additional Price 1.
   * @nullable
   */
  additionalPrice1?: number;
  /**
   * Additional Currency 1.
   * @nullable
   */
  additionalCurrency1?: string;
  /**
   * Additional Price 2.
   * @nullable
   */
  additionalPrice2?: number;
  /**
   * Additional Currency 2.
   * @nullable
   */
  additionalCurrency2?: string;
  /**
   * Base Price List.
   * @nullable
   */
  basePriceList?: number;
  /**
   * Factor.
   * @nullable
   */
  factor?: number;
  /**
   * Uo M Prices.
   * @nullable
   */
  uoMPrices?: UoMPrice;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemPrice.build]] instead.
 */
export function createItemPrice(json: any): ItemPrice {
  return ItemPrice.build(json);
}

/**
 * ItemPriceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPriceField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemPrice.priceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceList', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPrice.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPrice.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[ItemPrice.additionalPrice1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalPrice1', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPrice.additionalCurrency1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalCurrency1', this, 'Edm.String');
  /**
   * Representation of the [[ItemPrice.additionalPrice2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalPrice2', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPrice.additionalCurrency2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalCurrency2', this, 'Edm.String');
  /**
   * Representation of the [[ItemPrice.basePriceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  basePriceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BasePriceList', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPrice.factor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPrice.uoMPrices]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMPrices: UoMPriceField<EntityT> = new UoMPriceField('UoMPrices', this);
}

export namespace ItemPrice {
  export function build(json: { [keys: string]: FieldType | UoMPrice }): ItemPrice {
    return createComplexType(json, {
      PriceList: (priceList: number) => ({ priceList: edmToTs(priceList, 'Edm.Int32') }),
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      AdditionalPrice1: (additionalPrice1: number) => ({ additionalPrice1: edmToTs(additionalPrice1, 'Edm.Double') }),
      AdditionalCurrency1: (additionalCurrency1: string) => ({ additionalCurrency1: edmToTs(additionalCurrency1, 'Edm.String') }),
      AdditionalPrice2: (additionalPrice2: number) => ({ additionalPrice2: edmToTs(additionalPrice2, 'Edm.Double') }),
      AdditionalCurrency2: (additionalCurrency2: string) => ({ additionalCurrency2: edmToTs(additionalCurrency2, 'Edm.String') }),
      BasePriceList: (basePriceList: number) => ({ basePriceList: edmToTs(basePriceList, 'Edm.Int32') }),
      Factor: (factor: number) => ({ factor: edmToTs(factor, 'Edm.Double') }),
      UoMPrices: (uoMPrices: UoMPrice) => ({ uoMPrices: UoMPrice.build(uoMPrices) })
    });
  }
}
