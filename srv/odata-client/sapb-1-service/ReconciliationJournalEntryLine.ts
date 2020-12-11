/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ReconciliationJournalEntryLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReconciliationJournalEntryLine> {
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

  /**
   * Creates an instance of ReconciliationJournalEntryLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReconciliationJournalEntryLine);
  }
}

export namespace ReconciliationJournalEntryLine {
  /**
   * Metadata information on all properties of the `ReconciliationJournalEntryLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReconciliationJournalEntryLine>[] = [{
    originalName: 'TransactionNumber',
    name: 'transactionNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PostingDate',
    name: 'postingDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Ref1',
    name: 'ref1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Ref2',
    name: 'ref2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Ref3',
    name: 'ref3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DebitAmount',
    name: 'debitAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CreditAmount',
    name: 'creditAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ReconciliationJournalEntryLine {
    return deserializeComplexTypeV4(json, ReconciliationJournalEntryLine);
  }
}
