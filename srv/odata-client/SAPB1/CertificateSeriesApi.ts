/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificateSeries } from './CertificateSeries';
import { CertificateSeriesRequestBuilder } from './CertificateSeriesRequestBuilder';
import { SectionsApi } from './SectionsApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { SeriesLine } from './SeriesLine';
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
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CertificateSeriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CertificateSeries<DeSerializersT>, DeSerializersT>
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
  ): CertificateSeriesApi<DeSerializersT> {
    return new CertificateSeriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link section2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECTION_2: OneToOneLink<
      CertificateSeries<DeSerializersT>,
      DeSerializersT,
      SectionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      CertificateSeries<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SectionsApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SECTION_2: new OneToOneLink('Section2', this, linkedApis[0]),
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CertificateSeries;

  requestBuilder(): CertificateSeriesRequestBuilder<DeSerializersT> {
    return new CertificateSeriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CertificateSeries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CertificateSeries<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CertificateSeries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CertificateSeries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CertificateSeries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      CertificateSeries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      CertificateSeries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECTION: OrderableEdmTypeField<
      CertificateSeries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      CertificateSeries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DEFAULT_SERIES: OrderableEdmTypeField<
      CertificateSeries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SERIES_LINES: CollectionField<
      CertificateSeries<DeSerializers>,
      DeSerializersT,
      SeriesLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link section2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECTION_2: OneToOneLink<
      CertificateSeries<DeSerializersT>,
      DeSerializersT,
      SectionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      CertificateSeries<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CertificateSeries<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link section} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION: fieldBuilder.buildEdmTypeField('Section', 'Edm.Int32', true),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField('Location', 'Edm.Int32', true),
        /**
         * Static representation of the {@link defaultSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SERIES: fieldBuilder.buildEdmTypeField(
          'DefaultSeries',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link seriesLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES_LINES: fieldBuilder.buildCollectionField(
          'SeriesLines',
          SeriesLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CertificateSeries)
      };
    }

    return this._schema;
  }
}
