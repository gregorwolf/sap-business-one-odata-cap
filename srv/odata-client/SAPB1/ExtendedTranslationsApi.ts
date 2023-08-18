/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtendedTranslations } from './ExtendedTranslations';
import { ExtendedTranslationsRequestBuilder } from './ExtendedTranslationsRequestBuilder';
import { ExtendedTranslationItemLine } from './ExtendedTranslationItemLine';
import { TranslationCategoryEnum } from './TranslationCategoryEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class ExtendedTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExtendedTranslations<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ExtendedTranslationsApi<DeSerializersT> {
    return new ExtendedTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExtendedTranslations;

  requestBuilder(): ExtendedTranslationsRequestBuilder<DeSerializersT> {
    return new ExtendedTranslationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExtendedTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExtendedTranslations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExtendedTranslations<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ExtendedTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExtendedTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      ExtendedTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CATEGORY: EnumField<
      ExtendedTranslations<DeSerializers>,
      DeSerializersT,
      TranslationCategoryEnum,
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      ExtendedTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECONDARY_ID: OrderableEdmTypeField<
      ExtendedTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_LANGUAGE: OrderableEdmTypeField<
      ExtendedTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      ExtendedTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATE_DATE: OrderableEdmTypeField<
      ExtendedTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXTENDED_TRANSLATION_ITEM_LINES: CollectionField<
      ExtendedTranslations<DeSerializers>,
      DeSerializersT,
      ExtendedTranslationItemLine,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExtendedTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEnumField(
          'Category',
          TranslationCategoryEnum,
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', true),
        /**
         * Static representation of the {@link secondaryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_ID: fieldBuilder.buildEdmTypeField(
          'SecondaryID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'SourceLanguage',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DATE: fieldBuilder.buildEdmTypeField(
          'CreateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link extendedTranslationItemLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENDED_TRANSLATION_ITEM_LINES: fieldBuilder.buildCollectionField(
          'ExtendedTranslation_ItemLines',
          ExtendedTranslationItemLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExtendedTranslations)
      };
    }

    return this._schema;
  }
}
