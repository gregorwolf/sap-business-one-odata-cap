/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BrazilStringIndexers } from './BrazilStringIndexers';
import { BrazilStringIndexersRequestBuilder } from './BrazilStringIndexersRequestBuilder';
import { BrazilBeverageIndexersApi } from './BrazilBeverageIndexersApi';
import { ItemsApi } from './ItemsApi';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { BrazilStringIndexerTypes } from './BrazilStringIndexerTypes';
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
export class BrazilStringIndexersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BrazilStringIndexers<DeSerializersT>, DeSerializersT>
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
  ): BrazilStringIndexersApi<DeSerializersT> {
    return new BrazilStringIndexersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link brazilBeverageIndexers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_BEVERAGE_INDEXERS: OneToManyLink<
      BrazilStringIndexers<DeSerializersT>,
      DeSerializersT,
      BrazilBeverageIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      BrazilStringIndexers<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      BrazilStringIndexers<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      BrazilStringIndexers<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BrazilBeverageIndexersApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      WithholdingTaxCodesApi<DeSerializersT>,
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
      WITHHOLDING_TAX_CODES: new OneToManyLink(
        'WithholdingTaxCodes',
        this,
        linkedApis[2]
      ),
      BUSINESS_PLACES: new OneToManyLink('BusinessPlaces', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = BrazilStringIndexers;

  requestBuilder(): BrazilStringIndexersRequestBuilder<DeSerializersT> {
    return new BrazilStringIndexersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BrazilStringIndexers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BrazilStringIndexers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BrazilStringIndexers<DeSerializersT>,
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
    typeof BrazilStringIndexers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BrazilStringIndexers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INDEXER_TYPE: EnumField<
      BrazilStringIndexers<DeSerializers>,
      DeSerializersT,
      BrazilStringIndexerTypes,
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      BrazilStringIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BrazilStringIndexers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      BrazilStringIndexers<DeSerializers>,
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
      BrazilStringIndexers<DeSerializersT>,
      DeSerializersT,
      BrazilBeverageIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      BrazilStringIndexers<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      BrazilStringIndexers<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      BrazilStringIndexers<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BrazilStringIndexers<DeSerializers>>;
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
          BrazilStringIndexerTypes,
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BrazilStringIndexers)
      };
    }

    return this._schema;
  }
}
