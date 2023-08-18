/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoePortfolios } from './BoePortfolios';
import { BoePortfoliosRequestBuilder } from './BoePortfoliosRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class BoePortfoliosApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BoePortfolios<DeSerializersT>, DeSerializersT>
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
  ): BoePortfoliosApi<DeSerializersT> {
    return new BoePortfoliosApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BoePortfolios;

  requestBuilder(): BoePortfoliosRequestBuilder<DeSerializersT> {
    return new BoePortfoliosRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BoePortfolios<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BoePortfolios<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BoePortfolios<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BoePortfolios, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BoePortfolios, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PORTFOLIO_ENTRY: OrderableEdmTypeField<
      BoePortfolios<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PORTFOLIO_ID: OrderableEdmTypeField<
      BoePortfolios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORTFOLIO_CODE: OrderableEdmTypeField<
      BoePortfolios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORTFOLIO_NUM: OrderableEdmTypeField<
      BoePortfolios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORTFOLIO_DESCRIPTION: OrderableEdmTypeField<
      BoePortfolios<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BoePortfolios<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link portfolioEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORTFOLIO_ENTRY: fieldBuilder.buildEdmTypeField(
          'PortfolioEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link portfolioId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORTFOLIO_ID: fieldBuilder.buildEdmTypeField(
          'PortfolioID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link portfolioCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORTFOLIO_CODE: fieldBuilder.buildEdmTypeField(
          'PortfolioCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link portfolioNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORTFOLIO_NUM: fieldBuilder.buildEdmTypeField(
          'PortfolioNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link portfolioDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORTFOLIO_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PortfolioDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BoePortfolios)
      };
    }

    return this._schema;
  }
}
