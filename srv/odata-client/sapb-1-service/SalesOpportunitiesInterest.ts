/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesOpportunitiesInterest
 */
export interface SalesOpportunitiesInterest {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: number;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Interest Id.
   * @nullable
   */
  interestId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesInterest.build]] instead.
 */
export function createSalesOpportunitiesInterest(json: any): SalesOpportunitiesInterest {
  return SalesOpportunitiesInterest.build(json);
}

/**
 * SalesOpportunitiesInterestField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesInterestField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesOpportunitiesInterest.rowNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesInterest.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesInterest.interestId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  interestId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InterestId', this, 'Edm.Int32');
}

export namespace SalesOpportunitiesInterest {
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesInterest {
    return createComplexType(json, {
      RowNo: (rowNo: number) => ({ rowNo: edmToTs(rowNo, 'Edm.Int32') }),
      SequenceNo: (sequenceNo: number) => ({ sequenceNo: edmToTs(sequenceNo, 'Edm.Int32') }),
      InterestId: (interestId: number) => ({ interestId: edmToTs(interestId, 'Edm.Int32') })
    });
  }
}
