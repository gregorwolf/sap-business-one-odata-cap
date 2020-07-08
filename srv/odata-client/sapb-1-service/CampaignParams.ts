/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CampaignParams
 */
export interface CampaignParams {
  /**
   * Campaign Number.
   * @nullable
   */
  campaignNumber?: number;
  /**
   * Campaign Name.
   * @nullable
   */
  campaignName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CampaignParams.build]] instead.
 */
export function createCampaignParams(json: any): CampaignParams {
  return CampaignParams.build(json);
}

/**
 * CampaignParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CampaignParams.campaignNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CampaignNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignParams.campaignName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CampaignName', this, 'Edm.String');
}

export namespace CampaignParams {
  export function build(json: { [keys: string]: FieldType }): CampaignParams {
    return createComplexType(json, {
      CampaignNumber: (campaignNumber: number) => ({ campaignNumber: edmToTs(campaignNumber, 'Edm.Int32') }),
      CampaignName: (campaignName: string) => ({ campaignName: edmToTs(campaignName, 'Edm.String') })
    });
  }
}
