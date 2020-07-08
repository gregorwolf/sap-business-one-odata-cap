/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WtdItem
 */
export interface WtdItem {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: string;
  /**
   * Effective Date From.
   * @nullable
   */
  effectiveDateFrom?: Moment;
  /**
   * Effective Date To.
   * @nullable
   */
  effectiveDateTo?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[WtdItem.build]] instead.
 */
export function createWtdItem(json: any): WtdItem {
  return WtdItem.build(json);
}

/**
 * WtdItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WtdItem.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[WtdItem.wTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[WtdItem.effectiveDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WtdItem.effectiveDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateTo', this, 'Edm.DateTimeOffset');
}

export namespace WtdItem {
  export function build(json: { [keys: string]: FieldType }): WtdItem {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      WTaxCode: (wTaxCode: string) => ({ wTaxCode: edmToTs(wTaxCode, 'Edm.String') }),
      EffectiveDateFrom: (effectiveDateFrom: Moment) => ({ effectiveDateFrom: edmToTs(effectiveDateFrom, 'Edm.DateTimeOffset') }),
      EffectiveDateTo: (effectiveDateTo: Moment) => ({ effectiveDateTo: edmToTs(effectiveDateTo, 'Edm.DateTimeOffset') })
    });
  }
}
