import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * JournalEntryDocumentTypeParams
 */
export interface JournalEntryDocumentTypeParams {
    /**
     * Journal Entry Type.
     * @nullable
     */
    journalEntryType?: string;
    /**
     * Doc Type Description.
     * @nullable
     */
    docTypeDescription?: string;
    /**
     * Short Name.
     * @nullable
     */
    shortName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[JournalEntryDocumentTypeParams.build]] instead.
 */
export declare function createJournalEntryDocumentTypeParams(json: any): JournalEntryDocumentTypeParams;
/**
 * JournalEntryDocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class JournalEntryDocumentTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[JournalEntryDocumentTypeParams.journalEntryType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    journalEntryType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryDocumentTypeParams.docTypeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docTypeDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryDocumentTypeParams.shortName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shortName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace JournalEntryDocumentTypeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): JournalEntryDocumentTypeParams;
}
//# sourceMappingURL=JournalEntryDocumentTypeParams.d.ts.map