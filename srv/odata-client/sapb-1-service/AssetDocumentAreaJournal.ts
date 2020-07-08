/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class AssetDocumentAreaJournalField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace AssetDocumentAreaJournal {
  export function build(json: { [keys: string]: FieldType }): AssetDocumentAreaJournal {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      DepreciationArea: (depreciationArea: string) => ({ depreciationArea: edmToTs(depreciationArea, 'Edm.String') }),
      JournalRemarks: (journalRemarks: string) => ({ journalRemarks: edmToTs(journalRemarks, 'Edm.String') }),
      TransactionNumber: (transactionNumber: number) => ({ transactionNumber: edmToTs(transactionNumber, 'Edm.Int32') }),
      CancellationJournalRemarks: (cancellationJournalRemarks: string) => ({ cancellationJournalRemarks: edmToTs(cancellationJournalRemarks, 'Edm.String') }),
      CancellationTransactionNumber: (cancellationTransactionNumber: number) => ({ cancellationTransactionNumber: edmToTs(cancellationTransactionNumber, 'Edm.Int32') })
    });
  }
}
