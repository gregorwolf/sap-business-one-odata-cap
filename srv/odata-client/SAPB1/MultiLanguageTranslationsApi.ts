/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MultiLanguageTranslations } from './MultiLanguageTranslations';
import { MultiLanguageTranslationsRequestBuilder } from './MultiLanguageTranslationsRequestBuilder';
import { TranslationsInUserLanguage } from './TranslationsInUserLanguage';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class MultiLanguageTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MultiLanguageTranslations<DeSerializersT>, DeSerializersT>
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
  ): MultiLanguageTranslationsApi<DeSerializersT> {
    return new MultiLanguageTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MultiLanguageTranslations;

  requestBuilder(): MultiLanguageTranslationsRequestBuilder<DeSerializersT> {
    return new MultiLanguageTranslationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MultiLanguageTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MultiLanguageTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MultiLanguageTranslations<DeSerializersT>,
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
    typeof MultiLanguageTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MultiLanguageTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NUMERATOR: OrderableEdmTypeField<
      MultiLanguageTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      MultiLanguageTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIELD_ALIAS: OrderableEdmTypeField<
      MultiLanguageTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_KEYOFOBJECT: OrderableEdmTypeField<
      MultiLanguageTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSLATIONS_IN_USER_LANGUAGES: CollectionField<
      MultiLanguageTranslations<DeSerializers>,
      DeSerializersT,
      TranslationsInUserLanguage,
      true,
      true
    >;
    ALL_FIELDS: AllFields<MultiLanguageTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link numerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERATOR: fieldBuilder.buildEdmTypeField(
          'Numerator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fieldAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_ALIAS: fieldBuilder.buildEdmTypeField(
          'FieldAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryKeyofobject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_KEYOFOBJECT: fieldBuilder.buildEdmTypeField(
          'PrimaryKeyofobject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link translationsInUserLanguages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSLATIONS_IN_USER_LANGUAGES: fieldBuilder.buildCollectionField(
          'TranslationsInUserLanguages',
          TranslationsInUserLanguage,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MultiLanguageTranslations)
      };
    }

    return this._schema;
  }
}
