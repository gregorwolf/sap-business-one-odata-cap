/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemPriceParams
 */
export interface ItemPriceParams {
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Blanket Agreement Number.
   * @nullable
   */
  blanketAgreementNumber?: number;
  /**
   * Blanket Agreement Line.
   * @nullable
   */
  blanketAgreementLine?: number;
  /**
   * Uo M Quantity.
   * @nullable
   */
  uoMQuantity?: number;
  /**
   * Inventory Quantity.
   * @nullable
   */
  inventoryQuantity?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
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
   * Price List.
   * @nullable
   */
  priceList?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemPriceParams.build]] instead.
 */
export function createItemPriceParams(json: any): ItemPriceParams {
  return ItemPriceParams.build(json);
}

/**
 * ItemPriceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPriceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemPriceParams.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemPriceParams.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPriceParams.blanketAgreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blanketAgreementNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BlanketAgreementNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPriceParams.blanketAgreementLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blanketAgreementLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BlanketAgreementLine', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPriceParams.uoMQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPriceParams.inventoryQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InventoryQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPriceParams.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[ItemPriceParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[ItemPriceParams.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
  /**
   * Representation of the [[ItemPriceParams.priceList]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceList: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PriceList', this, 'Edm.Int32');
}

export namespace ItemPriceParams {
  export function build(json: { [keys: string]: FieldType }): ItemPriceParams {
    return createComplexType(json, {
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') }),
      UoMEntry: (uoMEntry: number) => ({ uoMEntry: edmToTs(uoMEntry, 'Edm.Int32') }),
      BlanketAgreementNumber: (blanketAgreementNumber: number) => ({ blanketAgreementNumber: edmToTs(blanketAgreementNumber, 'Edm.Int32') }),
      BlanketAgreementLine: (blanketAgreementLine: number) => ({ blanketAgreementLine: edmToTs(blanketAgreementLine, 'Edm.Int32') }),
      UoMQuantity: (uoMQuantity: number) => ({ uoMQuantity: edmToTs(uoMQuantity, 'Edm.Double') }),
      InventoryQuantity: (inventoryQuantity: number) => ({ inventoryQuantity: edmToTs(inventoryQuantity, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') }),
      PriceList: (priceList: number) => ({ priceList: edmToTs(priceList, 'Edm.Int32') })
    });
  }
}
