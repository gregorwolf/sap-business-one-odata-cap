/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ItemLocalizationInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemLocalizationInfo> {
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

  /**
   * Creates an instance of ItemLocalizationInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemLocalizationInfo);
  }
}

export namespace ItemLocalizationInfo {
  /**
   * Metadata information on all properties of the `ItemLocalizationInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemLocalizationInfo>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IncomeNature',
    name: 'incomeNature',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemLocalizationInfo {
    return deserializeComplexTypeV4(json, ItemLocalizationInfo);
  }
}
