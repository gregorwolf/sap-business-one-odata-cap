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
 * AssetDocumentAreaJournal
 */
export interface AssetDocumentAreaJournal<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Cancellation Journal Remarks.
   * @nullable
   */
  cancellationJournalRemarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cancellation Transaction Number.
   * @nullable
   */
  cancellationTransactionNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * AssetDocumentAreaJournalField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetDocumentAreaJournalField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AssetDocumentAreaJournal,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AssetDocumentAreaJournal.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link AssetDocumentAreaJournal.lineNumber} property for query construction.
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
   * Representation of the {@link AssetDocumentAreaJournal.depreciationArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DepreciationArea',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentAreaJournal.journalRemarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  journalRemarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'JournalRemarks',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentAreaJournal.transactionNumber} property for query construction.
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
   * Representation of the {@link AssetDocumentAreaJournal.cancellationJournalRemarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationJournalRemarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CancellationJournalRemarks',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link AssetDocumentAreaJournal.cancellationTransactionNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationTransactionNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CancellationTransactionNumber',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of AssetDocumentAreaJournalField.
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
      AssetDocumentAreaJournal,
      fieldOptions
    );
  }
}

export namespace AssetDocumentAreaJournal {
  /**
   * Metadata information on all properties of the `AssetDocumentAreaJournal` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetDocumentAreaJournal>[] =
    [
      {
        originalName: 'DocEntry',
        name: 'docEntry',
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
        originalName: 'DepreciationArea',
        name: 'depreciationArea',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'JournalRemarks',
        name: 'journalRemarks',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TransactionNumber',
        name: 'transactionNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'CancellationJournalRemarks',
        name: 'cancellationJournalRemarks',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'CancellationTransactionNumber',
        name: 'cancellationTransactionNumber',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
