/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * TranslationsInUserLanguage
 */
export interface TranslationsInUserLanguage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Key From Header Table.
   * @nullable
   */
  keyFromHeaderTable?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Language Code Of User Language.
   * @nullable
   */
  languageCodeOfUserLanguage?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Translationscontent.
   * @nullable
   */
  translationscontent?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * TranslationsInUserLanguageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TranslationsInUserLanguageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TranslationsInUserLanguage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TranslationsInUserLanguage.keyFromHeaderTable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyFromHeaderTable: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'KeyFromHeaderTable',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TranslationsInUserLanguage.languageCodeOfUserLanguage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  languageCodeOfUserLanguage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LanguageCodeOfUserLanguage',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TranslationsInUserLanguage.translationscontent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  translationscontent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'Translationscontent',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of TranslationsInUserLanguageField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      TranslationsInUserLanguage,
      fieldOptions
    );
  }
}

export namespace TranslationsInUserLanguage {
  /**
   * Metadata information on all properties of the `TranslationsInUserLanguage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TranslationsInUserLanguage>[] =
    [
      {
        originalName: 'KeyFromHeaderTable',
        name: 'keyFromHeaderTable',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LanguageCodeOfUserLanguage',
        name: 'languageCodeOfUserLanguage',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Translationscontent',
        name: 'translationscontent',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
