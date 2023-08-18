/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ReconciliationJournalEntryLine
 */
export interface ReconciliationJournalEntryLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Ref 1.
   * @nullable
   */
  ref1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ref 2.
   * @nullable
   */
  ref2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ref 3.
   * @nullable
   */
  ref3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Debit Amount.
   * @nullable
   */
  debitAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit Amount.
   * @nullable
   */
  creditAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ReconciliationJournalEntryLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReconciliationJournalEntryLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReconciliationJournalEntryLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.transactionNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransactionNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.postingDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postingDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PostingDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DueDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.ref1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Ref1', 'Edm.String', true);
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.ref2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Ref2', 'Edm.String', true);
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.ref3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Ref3', 'Edm.String', true);
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.debitAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DebitAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.creditAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreditAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link ReconciliationJournalEntryLine.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);

  /**
   * Creates an instance of ReconciliationJournalEntryLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      ReconciliationJournalEntryLine,
      fieldOptions
    );
  }
}

export namespace ReconciliationJournalEntryLine {
  /**
   * Metadata information on all properties of the `ReconciliationJournalEntryLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReconciliationJournalEntryLine>[] =
    [
      {
        originalName: 'TransactionNumber',
        name: 'transactionNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineNumber',
        name: 'lineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PostingDate',
        name: 'postingDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'DueDate',
        name: 'dueDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'Ref1',
        name: 'ref1',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Ref2',
        name: 'ref2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Ref3',
        name: 'ref3',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DebitAmount',
        name: 'debitAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'CreditAmount',
        name: 'creditAmount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Details',
        name: 'details',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
