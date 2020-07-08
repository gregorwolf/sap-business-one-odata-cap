/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class CampaignItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[CampaignItem.itemGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemGroup: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemGroup', this, 'Edm.String');
}

export namespace CampaignItem {
  export function build(json: { [keys: string]: FieldType }): CampaignItem {
    return createComplexType(json, {
      CampaignNumber: (campaignNumber: number) => ({ campaignNumber: edmToTs(campaignNumber, 'Edm.Int32') }),
      CampaignLineNumber: (campaignLineNumber: number) => ({ campaignLineNumber: edmToTs(campaignLineNumber, 'Edm.Int32') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemName: (itemName: string) => ({ itemName: edmToTs(itemName, 'Edm.String') }),
      ItemGroup: (itemGroup: string) => ({ itemGroup: edmToTs(itemGroup, 'Edm.String') })
    });
  }
}
