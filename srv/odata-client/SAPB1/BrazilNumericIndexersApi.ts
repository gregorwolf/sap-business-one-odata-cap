/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilNumericIndexers } from './BrazilNumericIndexers';
import { BrazilNumericIndexersRequestBuilder } from './BrazilNumericIndexersRequestBuilder';
import { BrazilBeverageIndexersApi } from './BrazilBeverageIndexersApi';
import { ItemsApi } from './ItemsApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { BrazilNumericIndexerTypes } from './BrazilNumericIndexerTypes';
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
  EnumField,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BrazilNumericIndexersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BrazilNumericIndexers<DeSerializersT>, DeSerializersT>
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
  ): BrazilNumericIndexersApi<DeSerializersT> {
    return new BrazilNumericIndexersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link brazilBeverageIndexers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_BEVERAGE_INDEXERS: OneToManyLink<
      BrazilNumericIndexers<DeSerializersT>,
      DeSerializersT,
      BrazilBeverageIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      BrazilNumericIndexers<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      BrazilNumericIndexers<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BrazilBeverageIndexersApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BRAZIL_BEVERAGE_INDEXERS: new OneToManyLink(
        'BrazilBeverageIndexers',
        this,
        linkedApis[0]
      ),
      ITEMS: new OneToManyLink('Items', this, linkedApis[1]),
      BUSINESS_PLACES: new OneToManyLink('BusinessPlaces', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = BrazilNumericIndexers;

  requestBuilder(): BrazilNumericIndexersRequestBuilder<DeSerializersT> {
    return new BrazilNumericIndexersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BrazilNumericIndexers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BrazilNumericIndexers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BrazilNumericIndexers<DeSerializersT>,
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
    typeof BrazilNumericIndexers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BrazilNumericIndexers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INDEXER_TYPE: EnumField<
      BrazilNumericIndexers<DeSerializers>,
      DeSerializersT,
      BrazilNumericIndexerTypes,
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      BrazilNumericIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BrazilNumericIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      BrazilNumericIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link brazilBeverageIndexers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_BEVERAGE_INDEXERS: OneToManyLink<
      BrazilNumericIndexers<DeSerializersT>,
      DeSerializersT,
      BrazilBeverageIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      BrazilNumericIndexers<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      BrazilNumericIndexers<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BrazilNumericIndexers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link indexerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEXER_TYPE: fieldBuilder.buildEnumField(
          'IndexerType',
          BrazilNumericIndexerTypes,
          true
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', true),
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BrazilNumericIndexers)
      };
    }

    return this._schema;
  }
}
