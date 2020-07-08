import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class TranslationsInUserLanguageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace TranslationsInUserLanguage {
    function build(json: {
        [keys: string]: FieldType;
    }): TranslationsInUserLanguage;
}
//# sourceMappingURL=TranslationsInUserLanguage.d.ts.map