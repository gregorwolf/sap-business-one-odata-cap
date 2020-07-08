/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ReconciliationBankStatementLine
 */
export interface ReconciliationBankStatementLine {
  /**
   * Bank Statement Account Code.
   * @nullable
   */
  bankStatementAccountCode?: string;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: number;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Ref 1.
   * @nullable
   */
  ref1?: string;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
  /**
   * Details.
   * @nullable
   */
  details?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ReconciliationBankStatementLine.build]] instead.
 */
export function createReconciliationBankStatementLine(json: any): ReconciliationBankStatementLine {
  return ReconciliationBankStatementLine.build(json);
}

/**
 * ReconciliationBankStatementLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReconciliationBankStatementLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ReconciliationBankStatementLine.bankStatementAccountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStatementAccountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankStatementAccountCode', this, 'Edm.String');
  /**
   * Representation of the [[ReconciliationBankStatementLine.sequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Sequence', this, 'Edm.Int32');
  /**
   * Representation of the [[ReconciliationBankStatementLine.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ReconciliationBankStatementLine.ref1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Ref1', this, 'Edm.String');
  /**
   * Representation of the [[ReconciliationBankStatementLine.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');
  /**
   * Representation of the [[ReconciliationBankStatementLine.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
}

export namespace ReconciliationBankStatementLine {
  export function build(json: { [keys: string]: FieldType }): ReconciliationBankStatementLine {
    return createComplexType(json, {
      BankStatementAccountCode: (bankStatementAccountCode: string) => ({ bankStatementAccountCode: edmToTs(bankStatementAccountCode, 'Edm.String') }),
      Sequence: (sequence: number) => ({ sequence: edmToTs(sequence, 'Edm.Int32') }),
      Date: (date: Moment) => ({ date: edmToTs(date, 'Edm.DateTimeOffset') }),
      Ref1: (ref1: string) => ({ ref1: edmToTs(ref1, 'Edm.String') }),
      Amount: (amount: number) => ({ amount: edmToTs(amount, 'Edm.Double') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') })
    });
  }
}
