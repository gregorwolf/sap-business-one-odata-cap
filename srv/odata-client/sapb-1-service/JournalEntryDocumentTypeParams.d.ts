import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class JournalEntryDocumentTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, JournalEntryDocumentTypeParams> {
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
    /**
     * Creates an instance of JournalEntryDocumentTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace JournalEntryDocumentTypeParams {
    /**
     * Metadata information on all properties of the `JournalEntryDocumentTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<JournalEntryDocumentTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): JournalEntryDocumentTypeParams;
}
//# sourceMappingURL=JournalEntryDocumentTypeParams.d.ts.map