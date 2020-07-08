/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class CampaignPartnerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace CampaignPartner {
  export function build(json: { [keys: string]: FieldType }): CampaignPartner {
    return createComplexType(json, {
      CampaignNumber: (campaignNumber: number) => ({ campaignNumber: edmToTs(campaignNumber, 'Edm.Int32') }),
      CampaignLineNumber: (campaignLineNumber: number) => ({ campaignLineNumber: edmToTs(campaignLineNumber, 'Edm.Int32') }),
      PartnerID: (partnerId: number) => ({ partnerId: edmToTs(partnerId, 'Edm.Int32') }),
      RelationshipCode: (relationshipCode: number) => ({ relationshipCode: edmToTs(relationshipCode, 'Edm.Int32') }),
      RelatedBP: (relatedBp: string) => ({ relatedBp: edmToTs(relatedBp, 'Edm.String') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') })
    });
  }
}
