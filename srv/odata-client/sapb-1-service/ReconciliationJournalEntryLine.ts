/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ReconciliationJournalEntryLine
 */
export interface ReconciliationJournalEntryLine {
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: Moment;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Ref 1.
   * @nullable
   */
  ref1?: string;
  /**
   * Ref 2.
   * @nullable
   */
  ref2?: string;
  /**
   * Ref 3.
   * @nullable
   */
  ref3?: string;
  /**
   * Debit Amount.
   * @nullable
   */
  debitAmount?: number;
  /**
   * Credit Amount.
   * @nullable
   */
  creditAmount?: number;
  /**
   * Details.
   * @nullable
   */
  details?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ReconciliationJournalEntryLine.build]] instead.
 */
export function createReconciliationJournalEntryLine(json: any): ReconciliationJournalEntryLine {
  return ReconciliationJournalEntryLine.build(json);
}

/**
 * ReconciliationJournalEntryLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReconciliationJournalEntryLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ReconciliationJournalEntryLine.transactionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransactionNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ReconciliationJournalEntryLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ReconciliationJournalEntryLine.postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('PostingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ReconciliationJournalEntryLine.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ReconciliationJournalEntryLine.ref1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Ref1', this, 'Edm.String');
  /**
   * Representation of the [[ReconciliationJournalEntryLine.ref2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Ref2', this, 'Edm.String');
  /**
   * Representation of the [[ReconciliationJournalEntryLine.ref3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Ref3', this, 'Edm.String');
  /**
   * Representation of the [[ReconciliationJournalEntryLine.debitAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DebitAmount', this, 'Edm.Double');
  /**
   * Representation of the [[ReconciliationJournalEntryLine.creditAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditAmount', this, 'Edm.Double');
  /**
   * Representation of the [[ReconciliationJournalEntryLine.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
}

export namespace ReconciliationJournalEntryLine {
  export function build(json: { [keys: string]: FieldType }): ReconciliationJournalEntryLine {
    return createComplexType(json, {
      TransactionNumber: (transactionNumber: number) => ({ transactionNumber: edmToTs(transactionNumber, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      PostingDate: (postingDate: Moment) => ({ postingDate: edmToTs(postingDate, 'Edm.DateTimeOffset') }),
      DueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTimeOffset') }),
      Ref1: (ref1: string) => ({ ref1: edmToTs(ref1, 'Edm.String') }),
      Ref2: (ref2: string) => ({ ref2: edmToTs(ref2, 'Edm.String') }),
      Ref3: (ref3: string) => ({ ref3: edmToTs(ref3, 'Edm.String') }),
      DebitAmount: (debitAmount: number) => ({ debitAmount: edmToTs(debitAmount, 'Edm.Double') }),
      CreditAmount: (creditAmount: number) => ({ creditAmount: edmToTs(creditAmount, 'Edm.Double') }),
      Details: (details: string) => ({ details: edmToTs(details, 'Edm.String') })
    });
  }
}
