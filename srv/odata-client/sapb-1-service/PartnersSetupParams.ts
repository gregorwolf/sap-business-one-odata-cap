/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class PartnersSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PartnersSetupParams> {
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

  /**
   * Creates an instance of PartnersSetupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PartnersSetupParams);
  }
}

export namespace PartnersSetupParams {
  /**
   * Metadata information on all properties of the `PartnersSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PartnersSetupParams>[] = [{
    originalName: 'PartnerID',
    name: 'partnerId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DefaultRelationship',
    name: 'defaultRelationship',
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
  export function build(json: { [keys: string]: FieldType }): PartnersSetupParams {
    return deserializeComplexTypeV4(json, PartnersSetupParams);
  }
}
