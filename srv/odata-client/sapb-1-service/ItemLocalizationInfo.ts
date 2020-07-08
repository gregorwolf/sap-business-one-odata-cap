/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ItemLocalizationInfo
 */
export interface ItemLocalizationInfo {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Income Nature.
   * @nullable
   */
  incomeNature?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemLocalizationInfo.build]] instead.
 */
export function createItemLocalizationInfo(json: any): ItemLocalizationInfo {
  return ItemLocalizationInfo.build(json);
}

/**
 * ItemLocalizationInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemLocalizationInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ItemLocalizationInfo.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[ItemLocalizationInfo.incomeNature]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  incomeNature: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IncomeNature', this, 'Edm.String');
}

export namespace ItemLocalizationInfo {
  export function build(json: { [keys: string]: FieldType }): ItemLocalizationInfo {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      IncomeNature: (incomeNature: string) => ({ incomeNature: edmToTs(incomeNature, 'Edm.String') })
    });
  }
}
