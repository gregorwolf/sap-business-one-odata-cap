/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PartnersSetupParams
 */
export interface PartnersSetupParams {
  /**
   * Partner Id.
   * @nullable
   */
  partnerId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Default Relationship.
   * @nullable
   */
  defaultRelationship?: number;
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
 * @deprecated Since v1.6.0. Use [[PartnersSetupParams.build]] instead.
 */
export function createPartnersSetupParams(json: any): PartnersSetupParams {
  return PartnersSetupParams.build(json);
}

/**
 * PartnersSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PartnersSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PartnersSetupParams.partnerId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partnerId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PartnerID', this, 'Edm.Int32');
  /**
   * Representation of the [[PartnersSetupParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[PartnersSetupParams.defaultRelationship]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  defaultRelationship: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DefaultRelationship', this, 'Edm.Int32');
  /**
   * Representation of the [[PartnersSetupParams.relatedBp]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relatedBp: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RelatedBP', this, 'Edm.String');
  /**
   * Representation of the [[PartnersSetupParams.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
}

export namespace PartnersSetupParams {
  export function build(json: { [keys: string]: FieldType }): PartnersSetupParams {
    return createComplexType(json, {
      PartnerID: (partnerId: number) => ({ partnerId: edmToTs(partnerId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      DefaultRelationship: (defaultRelationship: number) => ({ defaultRelationship: edmToTs(defaultRelationship, 'Edm.Int32') }),
      RelatedBP: (relatedBp: string) => ({ relatedBp: edmToTs(relatedBp, 'Edm.String') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') })
    });
  }
}
