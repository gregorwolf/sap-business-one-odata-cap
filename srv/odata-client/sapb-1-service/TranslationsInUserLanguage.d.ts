import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TranslationsInUserLanguage
 */
export interface TranslationsInUserLanguage {
    /**
     * Key From Header Table.
     * @nullable
     */
    keyFromHeaderTable?: number;
    /**
     * Language Code Of User Language.
     * @nullable
     */
    languageCodeOfUserLanguage?: number;
    /**
     * Translationscontent.
     * @nullable
     */
    translationscontent?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TranslationsInUserLanguage.build]] instead.
 */
export declare function createTranslationsInUserLanguage(json: any): TranslationsInUserLanguage;
/**
 * TranslationsInUserLanguageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TranslationsInUserLanguageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TranslationsInUserLanguage> {
    /**
     * Representation of the [[TranslationsInUserLanguage.keyFromHeaderTable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyFromHeaderTable: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TranslationsInUserLanguage.languageCodeOfUserLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    languageCodeOfUserLanguage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TranslationsInUserLanguage.translationscontent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    translationscontent: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TranslationsInUserLanguageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TranslationsInUserLanguage {
    /**
     * Metadata information on all properties of the `TranslationsInUserLanguage` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TranslationsInUserLanguage>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TranslationsInUserLanguage;
}
//# sourceMappingURL=TranslationsInUserLanguage.d.ts.map