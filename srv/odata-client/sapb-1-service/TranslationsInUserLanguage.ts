/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class TranslationsInUserLanguageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TranslationsInUserLanguage> {
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

  /**
   * Creates an instance of TranslationsInUserLanguageField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TranslationsInUserLanguage);
  }
}

export namespace TranslationsInUserLanguage {
  /**
   * Metadata information on all properties of the `TranslationsInUserLanguage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TranslationsInUserLanguage>[] = [{
    originalName: 'KeyFromHeaderTable',
    name: 'keyFromHeaderTable',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LanguageCodeOfUserLanguage',
    name: 'languageCodeOfUserLanguage',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Translationscontent',
    name: 'translationscontent',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TranslationsInUserLanguage {
    return deserializeComplexTypeV4(json, TranslationsInUserLanguage);
  }
}
