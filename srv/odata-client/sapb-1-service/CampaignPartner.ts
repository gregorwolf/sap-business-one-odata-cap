/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CampaignPartner
 */
export interface CampaignPartner {
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
   * Partner Id.
   * @nullable
   */
  partnerId?: number;
  /**
   * Relationship Code.
   * @nullable
   */
  relationshipCode?: number;
  /**
   * Related Bp.
   * @nullable
   */
  relatedBp?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CampaignPartner.build]] instead.
 */
export function createCampaignPartner(json: any): CampaignPartner {
  return CampaignPartner.build(json);
}

/**
 * CampaignPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignPartnerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CampaignPartner> {
  /**
   * Representation of the [[CampaignPartner.campaignNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CampaignNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignPartner.campaignLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CampaignLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignPartner.partnerId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partnerId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PartnerID', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignPartner.relationshipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relationshipCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RelationshipCode', this, 'Edm.Int32');
  /**
   * Representation of the [[CampaignPartner.relatedBp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relatedBp: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RelatedBP', this, 'Edm.String');
  /**
   * Representation of the [[CampaignPartner.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');

  /**
   * Creates an instance of CampaignPartnerField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CampaignPartner);
  }
}

export namespace CampaignPartner {
  /**
   * Metadata information on all properties of the `CampaignPartner` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignPartner>[] = [{
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
    originalName: 'PartnerID',
    name: 'partnerId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RelationshipCode',
    name: 'relationshipCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RelatedBP',
    name: 'relatedBp',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CampaignPartner {
    return deserializeComplexTypeV4(json, CampaignPartner);
  }
}
