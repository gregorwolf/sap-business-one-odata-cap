/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * SalesOpportunitiesPartner
 */
export interface SalesOpportunitiesPartner {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: number;
  /**
   * Partners.
   * @nullable
   */
  partners?: number;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Relationship Code.
   * @nullable
   */
  relationshipCode?: number;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesPartner.build]] instead.
 */
export function createSalesOpportunitiesPartner(json: any): SalesOpportunitiesPartner {
  return SalesOpportunitiesPartner.build(json);
}

/**
 * SalesOpportunitiesPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesPartnerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesOpportunitiesPartner> {
  /**
   * Representation of the [[SalesOpportunitiesPartner.rowNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesPartner.partners]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partners: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Partners', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesPartner.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[SalesOpportunitiesPartner.relationshipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relationshipCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RelationshipCode', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesPartner.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');

  /**
   * Creates an instance of SalesOpportunitiesPartnerField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SalesOpportunitiesPartner);
  }
}

export namespace SalesOpportunitiesPartner {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesPartner` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesPartner>[] = [{
    originalName: 'RowNo',
    name: 'rowNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Partners',
    name: 'partners',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RelationshipCode',
    name: 'relationshipCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SequenceNo',
    name: 'sequenceNo',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesPartner {
    return deserializeComplexTypeV4(json, SalesOpportunitiesPartner);
  }
}
