import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createAssetDocumentAreaJournal(json: any): AssetDocumentAreaJournal;
/**
 * AssetDocumentAreaJournalField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssetDocumentAreaJournalField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AssetDocumentAreaJournal.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentAreaJournal.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentAreaJournal.depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depreciationArea: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentAreaJournal.journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    journalRemarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentAreaJournal.transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transactionNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentAreaJournal.cancellationJournalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cancellationJournalRemarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentAreaJournal.cancellationTransactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cancellationTransactionNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace AssetDocumentAreaJournal {
    function build(json: {
        [keys: string]: FieldType;
    }): AssetDocumentAreaJournal;
}
//# sourceMappingURL=AssetDocumentAreaJournal.d.ts.map