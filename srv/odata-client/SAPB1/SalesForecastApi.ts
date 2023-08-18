/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesForecast } from './SalesForecast';
import { SalesForecastRequestBuilder } from './SalesForecastRequestBuilder';
import { SalesForecastLine } from './SalesForecastLine';
import { BoForecastViewType } from './BoForecastViewType';
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
export class SalesForecastApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesForecast<DeSerializersT>, DeSerializersT>
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
  ): SalesForecastApi<DeSerializersT> {
    return new SalesForecastApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesForecast;

  requestBuilder(): SalesForecastRequestBuilder<DeSerializersT> {
    return new SalesForecastRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesForecast<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesForecast<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesForecast<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesForecast, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesForecast, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FORECAST_START_DATE: OrderableEdmTypeField<
      SalesForecast<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FORECAST_END_DATE: OrderableEdmTypeField<
      SalesForecast<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FORECAST_CODE: OrderableEdmTypeField<
      SalesForecast<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_NAME: OrderableEdmTypeField<
      SalesForecast<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMERATOR: OrderableEdmTypeField<
      SalesForecast<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VIEW: EnumField<
      SalesForecast<DeSerializers>,
      DeSerializersT,
      BoForecastViewType,
      true,
      true
    >;
    SALES_FORECAST_LINES: CollectionField<
      SalesForecast<DeSerializers>,
      DeSerializersT,
      SalesForecastLine,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesForecast<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link forecastStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_START_DATE: fieldBuilder.buildEdmTypeField(
          'ForecastStartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link forecastEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_END_DATE: fieldBuilder.buildEdmTypeField(
          'ForecastEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link forecastCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_CODE: fieldBuilder.buildEdmTypeField(
          'ForecastCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_NAME: fieldBuilder.buildEdmTypeField(
          'ForecastName',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link view} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW: fieldBuilder.buildEnumField('View', BoForecastViewType, true),
        /**
         * Static representation of the {@link salesForecastLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_FORECAST_LINES: fieldBuilder.buildCollectionField(
          'SalesForecastLines',
          SalesForecastLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesForecast)
      };
    }

    return this._schema;
  }
}
