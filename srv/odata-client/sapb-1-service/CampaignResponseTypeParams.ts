/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CampaignResponseTypeParams
 */
export interface CampaignResponseTypeParams {
  /**
   * Response Type.
   * @nullable
   */
  responseType?: string;
  /**
   * Response Type Description.
   * @nullable
   */
  responseTypeDescription?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CampaignResponseTypeParams.build]] instead.
 */
export function createCampaignResponseTypeParams(json: any): CampaignResponseTypeParams {
  return CampaignResponseTypeParams.build(json);
}

/**
 * CampaignResponseTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignResponseTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CampaignResponseTypeParams.responseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  responseType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ResponseType', this, 'Edm.String');
  /**
   * Representation of the [[CampaignResponseTypeParams.responseTypeDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  responseTypeDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ResponseTypeDescription', this, 'Edm.String');
}

export namespace CampaignResponseTypeParams {
  export function build(json: { [keys: string]: FieldType }): CampaignResponseTypeParams {
    return createComplexType(json, {
      ResponseType: (responseType: string) => ({ responseType: edmToTs(responseType, 'Edm.String') }),
      ResponseTypeDescription: (responseTypeDescription: string) => ({ responseTypeDescription: edmToTs(responseTypeDescription, 'Edm.String') })
    });
  }
}
