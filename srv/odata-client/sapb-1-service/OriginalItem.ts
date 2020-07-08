/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlternativeItem, AlternativeItemField } from './AlternativeItem';
import { CollectionField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * OriginalItem
 */
export interface OriginalItem {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: string;
  /**
   * Alternative Items.
   * @nullable
   */
  alternativeItems?: AlternativeItem;
}

/**
 * @deprecated Since v1.6.0. Use [[OriginalItem.build]] instead.
 */
export function createOriginalItem(json: any): OriginalItem {
  return OriginalItem.build(json);
}

/**
 * OriginalItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class OriginalItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[OriginalItem.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[OriginalItem.itemName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemName', this, 'Edm.String');
  /**
   * Representation of the [[OriginalItem.alternativeItems]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternativeItems: AlternativeItemField<EntityT> = new AlternativeItemField('AlternativeItems', this);
}

export namespace OriginalItem {
  export function build(json: { [keys: string]: FieldType | AlternativeItem }): OriginalItem {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemName: (itemName: string) => ({ itemName: edmToTs(itemName, 'Edm.String') }),
      AlternativeItems: (alternativeItems: AlternativeItem) => ({ alternativeItems: AlternativeItem.build(alternativeItems) })
    });
  }
}
