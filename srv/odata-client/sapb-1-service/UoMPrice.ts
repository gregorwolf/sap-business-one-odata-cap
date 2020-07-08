/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UoMPrice
 */
export interface UoMPrice {
  /**
   * Price List.
   * @nullable
   */
  priceList?: number;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Reduce By.
   * @nullable
   */
  reduceBy?: number;
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
   * Additional Reduce By 1.
   * @nullable
   */
  additionalReduceBy1?: number;
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
   * Additional Reduce By 2.
   * @nullable
   */
  additionalReduceBy2?: number;
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
}

/**
 * @deprecated Since v1.6.0. Use [[UoMPrice.build]] instead.
 */
export function createUoMPrice(json: any): UoMPrice {
  return UoMPrice.build(json);
}

/**
 * UoMPriceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UoMPriceField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UoMPrice.priceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceList', this, 'Edm.Int32');
  /**
   * Representation of the [[UoMPrice.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[UoMPrice.reduceBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reduceBy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ReduceBy', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[UoMPrice.additionalReduceBy1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalReduceBy1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalReduceBy1', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.additionalPrice1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice1: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalPrice1', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.additionalCurrency1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalCurrency1', this, 'Edm.String');
  /**
   * Representation of the [[UoMPrice.additionalReduceBy2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalReduceBy2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalReduceBy2', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.additionalPrice2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalPrice2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AdditionalPrice2', this, 'Edm.Double');
  /**
   * Representation of the [[UoMPrice.additionalCurrency2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalCurrency2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AdditionalCurrency2', this, 'Edm.String');
}

export namespace UoMPrice {
  export function build(json: { [keys: string]: FieldType }): UoMPrice {
    return createComplexType(json, {
      PriceList: (priceList: number) => ({ priceList: edmToTs(priceList, 'Edm.Int32') }),
      UoMEntry: (uoMEntry: number) => ({ uoMEntry: edmToTs(uoMEntry, 'Edm.Int32') }),
      ReduceBy: (reduceBy: number) => ({ reduceBy: edmToTs(reduceBy, 'Edm.Double') }),
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      AdditionalReduceBy1: (additionalReduceBy1: number) => ({ additionalReduceBy1: edmToTs(additionalReduceBy1, 'Edm.Double') }),
      AdditionalPrice1: (additionalPrice1: number) => ({ additionalPrice1: edmToTs(additionalPrice1, 'Edm.Double') }),
      AdditionalCurrency1: (additionalCurrency1: string) => ({ additionalCurrency1: edmToTs(additionalCurrency1, 'Edm.String') }),
      AdditionalReduceBy2: (additionalReduceBy2: number) => ({ additionalReduceBy2: edmToTs(additionalReduceBy2, 'Edm.Double') }),
      AdditionalPrice2: (additionalPrice2: number) => ({ additionalPrice2: edmToTs(additionalPrice2, 'Edm.Double') }),
      AdditionalCurrency2: (additionalCurrency2: string) => ({ additionalCurrency2: edmToTs(additionalCurrency2, 'Edm.String') })
    });
  }
}
