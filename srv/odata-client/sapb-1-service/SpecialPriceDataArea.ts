/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { SpecialPriceQuantityArea, SpecialPriceQuantityAreaField } from './SpecialPriceQuantityArea';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SpecialPriceDataArea
 */
export interface SpecialPriceDataArea {
  /**
   * Price Currency.
   * @nullable
   */
  priceCurrency?: string;
  /**
   * Dateto.
   * @nullable
   */
  dateto?: Moment;
  /**
   * Discount.
   * @nullable
   */
  discount?: number;
  /**
   * Special Price.
   * @nullable
   */
  specialPrice?: number;
  /**
   * Date From.
   * @nullable
   */
  dateFrom?: Moment;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Price List No.
   * @nullable
   */
  priceListNo?: number;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Special Price Quantity Areas.
   * @nullable
   */
  specialPriceQuantityAreas?: SpecialPriceQuantityArea;
}

/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceDataArea.build]] instead.
 */
export function createSpecialPriceDataArea(json: any): SpecialPriceDataArea {
  return SpecialPriceDataArea.build(json);
}

/**
 * SpecialPriceDataAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SpecialPriceDataAreaField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SpecialPriceDataArea.priceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriceCurrency', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceDataArea.dateto]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateto: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Dateto', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SpecialPriceDataArea.discount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discount', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceDataArea.specialPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SpecialPrice', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceDataArea.dateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[SpecialPriceDataArea.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceDataArea.priceListNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceListNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceListNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SpecialPriceDataArea.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceDataArea.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SpecialPriceDataArea.specialPriceQuantityAreas]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialPriceQuantityAreas: SpecialPriceQuantityAreaField<EntityT> = new SpecialPriceQuantityAreaField('SpecialPriceQuantityAreas', this);
}

export namespace SpecialPriceDataArea {
  export function build(json: { [keys: string]: FieldType | SpecialPriceQuantityArea }): SpecialPriceDataArea {
    return createComplexType(json, {
      PriceCurrency: (priceCurrency: string) => ({ priceCurrency: edmToTs(priceCurrency, 'Edm.String') }),
      Dateto: (dateto: Moment) => ({ dateto: edmToTs(dateto, 'Edm.DateTimeOffset') }),
      Discount: (discount: number) => ({ discount: edmToTs(discount, 'Edm.Double') }),
      SpecialPrice: (specialPrice: number) => ({ specialPrice: edmToTs(specialPrice, 'Edm.Double') }),
      DateFrom: (dateFrom: Moment) => ({ dateFrom: edmToTs(dateFrom, 'Edm.DateTimeOffset') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      PriceListNo: (priceListNo: number) => ({ priceListNo: edmToTs(priceListNo, 'Edm.Int32') }),
      ItemNo: (itemNo: string) => ({ itemNo: edmToTs(itemNo, 'Edm.String') }),
      RowNumber: (rowNumber: number) => ({ rowNumber: edmToTs(rowNumber, 'Edm.Int32') }),
      SpecialPriceQuantityAreas: (specialPriceQuantityAreas: SpecialPriceQuantityArea) => ({ specialPriceQuantityAreas: SpecialPriceQuantityArea.build(specialPriceQuantityAreas) })
    });
  }
}
