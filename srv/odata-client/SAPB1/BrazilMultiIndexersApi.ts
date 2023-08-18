/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilMultiIndexers } from './BrazilMultiIndexers';
import { BrazilMultiIndexersRequestBuilder } from './BrazilMultiIndexersRequestBuilder';
import { BrazilMultiIndexerTypes } from './BrazilMultiIndexerTypes';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class BrazilMultiIndexersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BrazilMultiIndexers<DeSerializersT>, DeSerializersT>
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
  ): BrazilMultiIndexersApi<DeSerializersT> {
    return new BrazilMultiIndexersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BrazilMultiIndexers;

  requestBuilder(): BrazilMultiIndexersRequestBuilder<DeSerializersT> {
    return new BrazilMultiIndexersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BrazilMultiIndexers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BrazilMultiIndexers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BrazilMultiIndexers<DeSerializersT>,
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
    typeof BrazilMultiIndexers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BrazilMultiIndexers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      BrazilMultiIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INDEXER_TYPE: EnumField<
      BrazilMultiIndexers<DeSerializers>,
      DeSerializersT,
      BrazilMultiIndexerTypes,
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      BrazilMultiIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BrazilMultiIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_REF_INDEXER_CODE: OrderableEdmTypeField<
      BrazilMultiIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_REF_INDEXER_CODE: OrderableEdmTypeField<
      BrazilMultiIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_REF_INDEXER_CODE: OrderableEdmTypeField<
      BrazilMultiIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BrazilMultiIndexers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link indexerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEXER_TYPE: fieldBuilder.buildEnumField(
          'IndexerType',
          BrazilMultiIndexerTypes,
          true
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
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
         * Static representation of the {@link firstRefIndexerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_REF_INDEXER_CODE: fieldBuilder.buildEdmTypeField(
          'FirstRefIndexerCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondRefIndexerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_REF_INDEXER_CODE: fieldBuilder.buildEdmTypeField(
          'SecondRefIndexerCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thirdRefIndexerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_REF_INDEXER_CODE: fieldBuilder.buildEdmTypeField(
          'ThirdRefIndexerCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BrazilMultiIndexers)
      };
    }

    return this._schema;
  }
}
