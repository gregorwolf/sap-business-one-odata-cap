/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BillOfExchangeTransactionLine
 */
export interface BillOfExchangeTransactionLine {
  /**
   * Bill Of Exchange No.
   * @nullable
   */
  billOfExchangeNo?: number;
  /**
   * Bill Of Exchange Due Date.
   * @nullable
   */
  billOfExchangeDueDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransactionLine.build]] instead.
 */
export function createBillOfExchangeTransactionLine(json: any): BillOfExchangeTransactionLine {
  return BillOfExchangeTransactionLine.build(json);
}

/**
 * BillOfExchangeTransactionLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransactionLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfExchangeNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BillOfExchangeNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfExchangeDueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('BillOfExchangeDueDate', this, 'Edm.DateTimeOffset');
}

export namespace BillOfExchangeTransactionLine {
  export function build(json: { [keys: string]: FieldType }): BillOfExchangeTransactionLine {
    return createComplexType(json, {
      BillOfExchangeNo: (billOfExchangeNo: number) => ({ billOfExchangeNo: edmToTs(billOfExchangeNo, 'Edm.Int32') }),
      BillOfExchangeDueDate: (billOfExchangeDueDate: Moment) => ({ billOfExchangeDueDate: edmToTs(billOfExchangeDueDate, 'Edm.DateTimeOffset') })
    });
  }
}
