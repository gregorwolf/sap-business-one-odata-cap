/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesOpportunitiesCompetitionItem
 */
export interface SalesOpportunitiesCompetitionItem {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: number;
  /**
   * Competition.
   * @nullable
   */
  competition?: number;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Won Or Lost.
   * @nullable
   */
  wonOrLost?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesCompetitionItem.build]] instead.
 */
export function createSalesOpportunitiesCompetitionItem(json: any): SalesOpportunitiesCompetitionItem {
  return SalesOpportunitiesCompetitionItem.build(json);
}

/**
 * SalesOpportunitiesCompetitionItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesCompetitionItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.rowNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.competition]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  competition: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Competition', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesCompetitionItem.wonOrLost]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wonOrLost: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WonOrLost', this, 'Edm.String');
}

export namespace SalesOpportunitiesCompetitionItem {
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesCompetitionItem {
    return createComplexType(json, {
      RowNo: (rowNo: number) => ({ rowNo: edmToTs(rowNo, 'Edm.Int32') }),
      Competition: (competition: number) => ({ competition: edmToTs(competition, 'Edm.Int32') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') }),
      SequenceNo: (sequenceNo: number) => ({ sequenceNo: edmToTs(sequenceNo, 'Edm.Int32') }),
      WonOrLost: (wonOrLost: string) => ({ wonOrLost: edmToTs(wonOrLost, 'Edm.String') })
    });
  }
}
