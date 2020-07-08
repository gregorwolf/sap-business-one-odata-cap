/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SpecialPriceQuantityArea
 */
export interface SpecialPriceQuantityArea {
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Spda Row Number.
   * @nullable
   */
  spdaRowNumber?: number;
  /**
   * Special Price.
   * @nullable
   */
  specialPrice?: number;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Price Currency.
   * @nullable
   */
  priceCurrency?: string;
  /**
   * Discountin.
   * @nullable
   */
  discountin?: number;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceQuantityArea.build]] instead.
 */
export function createSpecialPriceQuantityArea(json: any): SpecialPriceQuantityArea {
  return SpecialPriceQuantityArea.build(json);
}

/**
 * SpecialPriceQuantityAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SpecialPriceQuantityAreaField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SpecialPriceQuantityArea.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceQuantityArea.spdaRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  spdaRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SPDARowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SpecialPriceQuantityArea.specialPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SpecialPrice', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceQuantityArea.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceQuantityArea.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceQuantityArea.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[SpecialPriceQuantityArea.priceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriceCurrency', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceQuantityArea.discountin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discountin', this, 'Edm.Double');
  /**
   * Representation of the [[SpecialPriceQuantityArea.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
}

export namespace SpecialPriceQuantityArea {
  export function build(json: { [keys: string]: FieldType }): SpecialPriceQuantityArea {
    return createComplexType(json, {
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      SPDARowNumber: (spdaRowNumber: number) => ({ spdaRowNumber: edmToTs(spdaRowNumber, 'Edm.Int32') }),
      SpecialPrice: (specialPrice: number) => ({ specialPrice: edmToTs(specialPrice, 'Edm.Double') }),
      ItemNo: (itemNo: string) => ({ itemNo: edmToTs(itemNo, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      RowNumber: (rowNumber: number) => ({ rowNumber: edmToTs(rowNumber, 'Edm.Int32') }),
      PriceCurrency: (priceCurrency: string) => ({ priceCurrency: edmToTs(priceCurrency, 'Edm.String') }),
      Discountin: (discountin: number) => ({ discountin: edmToTs(discountin, 'Edm.Double') }),
      UoMEntry: (uoMEntry: number) => ({ uoMEntry: edmToTs(uoMEntry, 'Edm.Int32') })
    });
  }
}
