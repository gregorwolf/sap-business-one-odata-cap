/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlternativeItem } from './AlternativeItem';
import { CollectionField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  alternativeItems?: AlternativeItem[];
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
export class OriginalItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, OriginalItem> {
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
  alternativeItems: CollectionField<EntityT, AlternativeItem> = new CollectionField('AlternativeItems', this, AlternativeItem);

  /**
   * Creates an instance of OriginalItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, OriginalItem);
  }
}

export namespace OriginalItem {
  /**
   * Metadata information on all properties of the `OriginalItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<OriginalItem>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemName',
    name: 'itemName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AlternativeItems',
    name: 'alternativeItems',
    type: AlternativeItem,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | AlternativeItem }): OriginalItem {
    return deserializeComplexTypeV4(json, OriginalItem);
  }
}
