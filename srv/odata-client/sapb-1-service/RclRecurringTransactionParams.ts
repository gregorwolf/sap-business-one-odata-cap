/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * RclRecurringTransactionParams
 */
export interface RclRecurringTransactionParams {
  /**
   * Transaction Id.
   * @nullable
   */
  transactionId?: number;
  /**
   * Planned Date.
   * @nullable
   */
  plannedDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[RclRecurringTransactionParams.build]] instead.
 */
export function createRclRecurringTransactionParams(json: any): RclRecurringTransactionParams {
  return RclRecurringTransactionParams.build(json);
}

/**
 * RclRecurringTransactionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RclRecurringTransactionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[RclRecurringTransactionParams.transactionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransactionID', this, 'Edm.Int32');
  /**
   * Representation of the [[RclRecurringTransactionParams.plannedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PlannedDate', this, 'Edm.DateTimeOffset');
}

export namespace RclRecurringTransactionParams {
  export function build(json: { [keys: string]: FieldType }): RclRecurringTransactionParams {
    return createComplexType(json, {
      TransactionID: (transactionId: number) => ({ transactionId: edmToTs(transactionId, 'Edm.Int32') }),
      PlannedDate: (plannedDate: Moment) => ({ plannedDate: edmToTs(plannedDate, 'Edm.DateTimeOffset') })
    });
  }
}
