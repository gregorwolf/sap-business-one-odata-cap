/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilBeverageIndexers } from './BrazilBeverageIndexers';
import { BrazilBeverageIndexersRequestBuilder } from './BrazilBeverageIndexersRequestBuilder';
import { BrazilStringIndexersApi } from './BrazilStringIndexersApi';
import { BrazilNumericIndexersApi } from './BrazilNumericIndexersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BrazilBeverageIndexersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BrazilBeverageIndexers<DeSerializersT>, DeSerializersT>
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
  ): BrazilBeverageIndexersApi<DeSerializersT> {
    return new BrazilBeverageIndexersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link brazilStringIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_STRING_INDEXER: OneToOneLink<
      BrazilBeverageIndexers<DeSerializersT>,
      DeSerializersT,
      BrazilStringIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilNumericIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_NUMERIC_INDEXER: OneToOneLink<
      BrazilBeverageIndexers<DeSerializersT>,
      DeSerializersT,
      BrazilNumericIndexersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BrazilStringIndexersApi<DeSerializersT>,
      BrazilNumericIndexersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BRAZIL_STRING_INDEXER: new OneToOneLink(
        'BrazilStringIndexer',
        this,
        linkedApis[0]
      ),
      BRAZIL_NUMERIC_INDEXER: new OneToOneLink(
        'BrazilNumericIndexer',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BrazilBeverageIndexers;

  requestBuilder(): BrazilBeverageIndexersRequestBuilder<DeSerializersT> {
    return new BrazilBeverageIndexersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BrazilBeverageIndexers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BrazilBeverageIndexers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BrazilBeverageIndexers<DeSerializersT>,
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
    typeof BrazilBeverageIndexers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BrazilBeverageIndexers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BEVERAGE_GROUP_CODE: OrderableEdmTypeField<
      BrazilBeverageIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEVERAGE_TABLE_CODE: OrderableEdmTypeField<
      BrazilBeverageIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEVERAGE_COMMERCIAL_BRAND_CODE: OrderableEdmTypeField<
      BrazilBeverageIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BEVERAGE_ID: OrderableEdmTypeField<
      BrazilBeverageIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilStringIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_STRING_INDEXER: OneToOneLink<
      BrazilBeverageIndexers<DeSerializersT>,
      DeSerializersT,
      BrazilStringIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilNumericIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_NUMERIC_INDEXER: OneToOneLink<
      BrazilBeverageIndexers<DeSerializersT>,
      DeSerializersT,
      BrazilNumericIndexersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BrazilBeverageIndexers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link beverageGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEVERAGE_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'BeverageGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beverageTableCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEVERAGE_TABLE_CODE: fieldBuilder.buildEdmTypeField(
          'BeverageTableCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beverageCommercialBrandCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEVERAGE_COMMERCIAL_BRAND_CODE: fieldBuilder.buildEdmTypeField(
          'BeverageCommercialBrandCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link beverageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEVERAGE_ID: fieldBuilder.buildEdmTypeField(
          'BeverageID',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BrazilBeverageIndexers)
      };
    }

    return this._schema;
  }
}
