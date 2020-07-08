import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ExtendedTranslationResultLine
 */
export interface ExtendedTranslationResultLine {
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
     * Sub Line Number.
     * @nullable
     */
    subLineNumber?: number;
    /**
     * Language Code.
     * @nullable
     */
    languageCode?: number;
    /**
     * Translated Text.
     * @nullable
     */
    translatedText?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationResultLine.build]] instead.
 */
export declare function createExtendedTranslationResultLine(json: any): ExtendedTranslationResultLine;
/**
 * ExtendedTranslationResultLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExtendedTranslationResultLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ExtendedTranslationResultLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationResultLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationResultLine.subLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationResultLine.languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    languageCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationResultLine.translatedText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    translatedText: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ExtendedTranslationResultLine {
    function build(json: {
        [keys: string]: FieldType;
    }): ExtendedTranslationResultLine;
}
//# sourceMappingURL=ExtendedTranslationResultLine.d.ts.map