/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AssetDocumentAreaJournal
 */
export interface AssetDocumentAreaJournal {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: string;
  /**
   * Journal Remarks.
   * @nullable
   */
  journalRemarks?: string;
  /**
   * Transaction Number.
   * @nullable
   */
  transactionNumber?: number;
  /**
   * Cancellation Journal Remarks.
   * @nullable
   */
  cancellationJournalRemarks?: string;
  /**
   * Cancellation Transaction Number.
   * @nullable
   */
  cancellationTransactionNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[AssetDocumentAreaJournal.build]] instead.
 */
export function createAssetDocumentAreaJournal(json: any): AssetDocumentAreaJournal {
  return AssetDocumentAreaJournal.build(json);
}

/**
 * AssetDocumentAreaJournalField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetDocumentAreaJournalField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AssetDocumentAreaJournal> {
  /**
   * Representation of the [[AssetDocumentAreaJournal.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[AssetDocumentAreaJournal.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[AssetDocumentAreaJournal.depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationArea', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentAreaJournal.journalRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  journalRemarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('JournalRemarks', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentAreaJournal.transactionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TransactionNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[AssetDocumentAreaJournal.cancellationJournalRemarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationJournalRemarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CancellationJournalRemarks', this, 'Edm.String');
  /**
   * Representation of the [[AssetDocumentAreaJournal.cancellationTransactionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationTransactionNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CancellationTransactionNumber', this, 'Edm.Int32');

  /**
   * Creates an instance of AssetDocumentAreaJournalField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AssetDocumentAreaJournal);
  }
}

export namespace AssetDocumentAreaJournal {
  /**
   * Metadata information on all properties of the `AssetDocumentAreaJournal` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AssetDocumentAreaJournal>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DepreciationArea',
    name: 'depreciationArea',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'JournalRemarks',
    name: 'journalRemarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TransactionNumber',
    name: 'transactionNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CancellationJournalRemarks',
    name: 'cancellationJournalRemarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CancellationTransactionNumber',
    name: 'cancellationTransactionNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AssetDocumentAreaJournal {
    return deserializeComplexTypeV4(json, AssetDocumentAreaJournal);
  }
}
