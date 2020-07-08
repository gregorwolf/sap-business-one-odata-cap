/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BillOfExchangeTransactionParams
 */
export interface BillOfExchangeTransactionParams {
  /**
   * Boe Transactionkey.
   * @nullable
   */
  boeTransactionkey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransactionParams.build]] instead.
 */
export function createBillOfExchangeTransactionParams(json: any): BillOfExchangeTransactionParams {
  return BillOfExchangeTransactionParams.build(json);
}

/**
 * BillOfExchangeTransactionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransactionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BillOfExchangeTransactionParams.boeTransactionkey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeTransactionkey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BOETransactionkey', this, 'Edm.Int32');
}

export namespace BillOfExchangeTransactionParams {
  export function build(json: { [keys: string]: FieldType }): BillOfExchangeTransactionParams {
    return createComplexType(json, {
      BOETransactionkey: (boeTransactionkey: number) => ({ boeTransactionkey: edmToTs(boeTransactionkey, 'Edm.Int32') })
    });
  }
}
