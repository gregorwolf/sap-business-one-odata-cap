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
 * ExtendedTranslationResultLine
 */
export interface ExtendedTranslationResultLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sub Line Number.
   * @nullable
   */
  subLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Language Code.
   * @nullable
   */
  languageCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Translated Text.
   * @nullable
   */
  translatedText?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ExtendedTranslationResultLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExtendedTranslationResultLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExtendedTranslationResultLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExtendedTranslationResultLine.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExtendedTranslationResultLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExtendedTranslationResultLine.subLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubLineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExtendedTranslationResultLine.languageCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  languageCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LanguageCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExtendedTranslationResultLine.translatedText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  translatedText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TranslatedText',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of ExtendedTranslationResultLineField.
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
      ExtendedTranslationResultLine,
      fieldOptions
    );
  }
}

export namespace ExtendedTranslationResultLine {
  /**
   * Metadata information on all properties of the `ExtendedTranslationResultLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExtendedTranslationResultLine>[] =
    [
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineNumber',
        name: 'lineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SubLineNumber',
        name: 'subLineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LanguageCode',
        name: 'languageCode',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TranslatedText',
        name: 'translatedText',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
