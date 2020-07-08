/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesOpportunitiesReason
 */
export interface SalesOpportunitiesReason {
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
   * Reason.
   * @nullable
   */
  reason?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesReason.build]] instead.
 */
export function createSalesOpportunitiesReason(json: any): SalesOpportunitiesReason {
  return SalesOpportunitiesReason.build(json);
}

/**
 * SalesOpportunitiesReasonField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesReasonField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesOpportunitiesReason.rowNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesReason.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunitiesReason.reason]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reason: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Reason', this, 'Edm.Int32');
}

export namespace SalesOpportunitiesReason {
  export function build(json: { [keys: string]: FieldType }): SalesOpportunitiesReason {
    return createComplexType(json, {
      RowNo: (rowNo: number) => ({ rowNo: edmToTs(rowNo, 'Edm.Int32') }),
      SequenceNo: (sequenceNo: number) => ({ sequenceNo: edmToTs(sequenceNo, 'Edm.Int32') }),
      Reason: (reason: number) => ({ reason: edmToTs(reason, 'Edm.Int32') })
    });
  }
}
