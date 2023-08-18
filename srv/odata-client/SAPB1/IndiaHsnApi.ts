/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IndiaHsn } from './IndiaHsn';
import { IndiaHsnRequestBuilder } from './IndiaHsnRequestBuilder';
import { ItemsApi } from './ItemsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class IndiaHsnApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IndiaHsn<DeSerializersT>, DeSerializersT>
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
  ): IndiaHsnApi<DeSerializersT> {
    return new IndiaHsnApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      IndiaHsn<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ItemsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      ITEMS: new OneToManyLink('Items', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = IndiaHsn;

  requestBuilder(): IndiaHsnRequestBuilder<DeSerializersT> {
    return new IndiaHsnRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<IndiaHsn<DeSerializersT>, DeSerializersT> {
    return entityBuilder<IndiaHsn<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<IndiaHsn<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof IndiaHsn, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(IndiaHsn, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      IndiaHsn<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHAPTER: OrderableEdmTypeField<
      IndiaHsn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADING: OrderableEdmTypeField<
      IndiaHsn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_HEADING: OrderableEdmTypeField<
      IndiaHsn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      IndiaHsn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHAPTER_ID: OrderableEdmTypeField<
      IndiaHsn<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      IndiaHsn<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IndiaHsn<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link chapter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHAPTER: fieldBuilder.buildEdmTypeField('Chapter', 'Edm.String', true),
        /**
         * Static representation of the {@link heading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADING: fieldBuilder.buildEdmTypeField('Heading', 'Edm.String', true),
        /**
         * Static representation of the {@link subHeading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_HEADING: fieldBuilder.buildEdmTypeField(
          'SubHeading',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chapterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHAPTER_ID: fieldBuilder.buildEdmTypeField(
          'ChapterID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IndiaHsn)
      };
    }

    return this._schema;
  }
}
