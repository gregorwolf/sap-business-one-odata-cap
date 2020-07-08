/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createTranslationsInUserLanguage(json: any): TranslationsInUserLanguage {
  return TranslationsInUserLanguage.build(json);
}

/**
 * TranslationsInUserLanguageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TranslationsInUserLanguageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TranslationsInUserLanguage.keyFromHeaderTable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFromHeaderTable: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyFromHeaderTable', this, 'Edm.Int32');
  /**
   * Representation of the [[TranslationsInUserLanguage.languageCodeOfUserLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  languageCodeOfUserLanguage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LanguageCodeOfUserLanguage', this, 'Edm.Int32');
  /**
   * Representation of the [[TranslationsInUserLanguage.translationscontent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  translationscontent: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Translationscontent', this, 'Edm.String');
}

export namespace TranslationsInUserLanguage {
  export function build(json: { [keys: string]: FieldType }): TranslationsInUserLanguage {
    return createComplexType(json, {
      KeyFromHeaderTable: (keyFromHeaderTable: number) => ({ keyFromHeaderTable: edmToTs(keyFromHeaderTable, 'Edm.Int32') }),
      LanguageCodeOfUserLanguage: (languageCodeOfUserLanguage: number) => ({ languageCodeOfUserLanguage: edmToTs(languageCodeOfUserLanguage, 'Edm.Int32') }),
      Translationscontent: (translationscontent: string) => ({ translationscontent: edmToTs(translationscontent, 'Edm.String') })
    });
  }
}
