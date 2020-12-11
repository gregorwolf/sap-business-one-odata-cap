/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum;
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
export class CampaignResponseTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CampaignResponseTypeParams> {
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
  /**
   * Representation of the [[CampaignResponseTypeParams.isActive]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isActive: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsActive', this);

  /**
   * Creates an instance of CampaignResponseTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CampaignResponseTypeParams);
  }
}

export namespace CampaignResponseTypeParams {
  /**
   * Metadata information on all properties of the `CampaignResponseTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignResponseTypeParams>[] = [{
    originalName: 'ResponseType',
    name: 'responseType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ResponseTypeDescription',
    name: 'responseTypeDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'IsActive',
    name: 'isActive',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CampaignResponseTypeParams {
    return deserializeComplexTypeV4(json, CampaignResponseTypeParams);
  }
}
