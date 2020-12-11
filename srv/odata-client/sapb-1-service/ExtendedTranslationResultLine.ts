/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ExtendedTranslationResultLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExtendedTranslationResultLine> {
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

  /**
   * Creates an instance of ExtendedTranslationResultLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExtendedTranslationResultLine);
  }
}

export namespace ExtendedTranslationResultLine {
  /**
   * Metadata information on all properties of the `ExtendedTranslationResultLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExtendedTranslationResultLine>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SubLineNumber',
    name: 'subLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LanguageCode',
    name: 'languageCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TranslatedText',
    name: 'translatedText',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ExtendedTranslationResultLine {
    return deserializeComplexTypeV4(json, ExtendedTranslationResultLine);
  }
}
