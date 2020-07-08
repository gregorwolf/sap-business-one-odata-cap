/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SpecialPriceParams
 */
export interface SpecialPriceParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Price List Num.
   * @nullable
   */
  priceListNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceParams.build]] instead.
 */
export function createSpecialPriceParams(json: any): SpecialPriceParams {
  return SpecialPriceParams.build(json);
}

/**
 * SpecialPriceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SpecialPriceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SpecialPriceParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceParams.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
  /**
   * Representation of the [[SpecialPriceParams.priceListNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceListNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceListNum', this, 'Edm.Int32');
}

export namespace SpecialPriceParams {
  export function build(json: { [keys: string]: FieldType }): SpecialPriceParams {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') }),
      PriceListNum: (priceListNum: number) => ({ priceListNum: edmToTs(priceListNum, 'Edm.Int32') })
    });
  }
}
