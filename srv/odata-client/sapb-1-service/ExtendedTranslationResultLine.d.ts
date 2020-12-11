import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ExtendedTranslationResultLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExtendedTranslationResultLine> {
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
    /**
     * Creates an instance of ExtendedTranslationResultLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ExtendedTranslationResultLine {
    /**
     * Metadata information on all properties of the `ExtendedTranslationResultLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ExtendedTranslationResultLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ExtendedTranslationResultLine;
}
//# sourceMappingURL=ExtendedTranslationResultLine.d.ts.map