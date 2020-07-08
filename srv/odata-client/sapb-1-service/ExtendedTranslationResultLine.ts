/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createExtendedTranslationResultLine(json: any): ExtendedTranslationResultLine {
  return ExtendedTranslationResultLine.build(json);
}

/**
 * ExtendedTranslationResultLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExtendedTranslationResultLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ExtendedTranslationResultLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedTranslationResultLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedTranslationResultLine.subLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedTranslationResultLine.languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  languageCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LanguageCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedTranslationResultLine.translatedText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  translatedText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TranslatedText', this, 'Edm.String');
}

export namespace ExtendedTranslationResultLine {
  export function build(json: { [keys: string]: FieldType }): ExtendedTranslationResultLine {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      SubLineNumber: (subLineNumber: number) => ({ subLineNumber: edmToTs(subLineNumber, 'Edm.Int32') }),
      LanguageCode: (languageCode: number) => ({ languageCode: edmToTs(languageCode, 'Edm.Int32') }),
      TranslatedText: (translatedText: string) => ({ translatedText: edmToTs(translatedText, 'Edm.String') })
    });
  }
}
