/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class CampaignParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CampaignParams> {
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

  /**
   * Creates an instance of CampaignParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CampaignParams);
  }
}

export namespace CampaignParams {
  /**
   * Metadata information on all properties of the `CampaignParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignParams>[] = [{
    originalName: 'CampaignNumber',
    name: 'campaignNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CampaignName',
    name: 'campaignName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CampaignParams {
    return deserializeComplexTypeV4(json, CampaignParams);
  }
}
