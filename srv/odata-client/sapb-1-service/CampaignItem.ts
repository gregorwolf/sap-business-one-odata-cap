/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CampaignItemTypeEnum } from './CampaignItemTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CampaignItem
 */
export interface CampaignItem {
  /**
   * Campaign Number.
   * @nullable
   */
  campaignNumber?: number;
  /**
   * Campaign Line Number.
   * @nullable
   */
  campaignLineNumber?: number;
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
   * Item Type.
   * @nullable
   */
  itemType?: CampaignItemTypeEnum;
  /**
   * Item Group.
   * @nullable
   */
  itemGroup?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CampaignItem.build]] instead.
 */
export function createCampaignItem(json: any): CampaignItem {
  return CampaignItem.build(json);
}

/**
 * CampaignItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CampaignItem> {
  /**
   * Representation of the [[CampaignItem.campaignNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CampaignNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignItem.campaignLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CampaignLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignItem.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[CampaignItem.itemName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemName', this, 'Edm.String');
  /**
   * Representation of the [[CampaignItem.itemType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ItemType', this);
  /**
   * Representation of the [[CampaignItem.itemGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroup: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemGroup', this, 'Edm.String');

  /**
   * Creates an instance of CampaignItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CampaignItem);
  }
}

export namespace CampaignItem {
  /**
   * Metadata information on all properties of the `CampaignItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignItem>[] = [{
    originalName: 'CampaignNumber',
    name: 'campaignNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CampaignLineNumber',
    name: 'campaignLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
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
    originalName: 'ItemType',
    name: 'itemType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ItemGroup',
    name: 'itemGroup',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CampaignItem {
    return deserializeComplexTypeV4(json, CampaignItem);
  }
}
