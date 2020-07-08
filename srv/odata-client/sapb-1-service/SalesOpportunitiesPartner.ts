/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class SalesOpportunitiesPartnerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace SalesOpportunitiesPartner {
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesPartner {
    return createComplexType(json, {
      RowNo: (rowNo: number) => ({ rowNo: edmToTs(rowNo, 'Edm.Int32') }),
      Partners: (partners: number) => ({ partners: edmToTs(partners, 'Edm.Int32') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') }),
      RelationshipCode: (relationshipCode: number) => ({ relationshipCode: edmToTs(relationshipCode, 'Edm.Int32') }),
      SequenceNo: (sequenceNo: number) => ({ sequenceNo: edmToTs(sequenceNo, 'Edm.Int32') })
    });
  }
}
