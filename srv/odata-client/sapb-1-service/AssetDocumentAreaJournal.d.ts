import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class AssetDocumentAreaJournalField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AssetDocumentAreaJournal> {
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
    /**
     * Creates an instance of AssetDocumentAreaJournalField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AssetDocumentAreaJournal {
    /**
     * Metadata information on all properties of the `AssetDocumentAreaJournal` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AssetDocumentAreaJournal>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AssetDocumentAreaJournal;
}
//# sourceMappingURL=AssetDocumentAreaJournal.d.ts.map