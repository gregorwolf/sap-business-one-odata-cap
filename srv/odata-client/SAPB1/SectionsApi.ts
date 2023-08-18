/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sections } from './Sections';
import { SectionsRequestBuilder } from './SectionsRequestBuilder';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { CertificateSeriesApi } from './CertificateSeriesApi';
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
export class SectionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Sections<DeSerializersT>, DeSerializersT>
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
  ): SectionsApi<DeSerializersT> {
    return new SectionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      Sections<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link certificateSeries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_SERIES: OneToManyLink<
      Sections<DeSerializersT>,
      DeSerializersT,
      CertificateSeriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WithholdingTaxCodesApi<DeSerializersT>,
      CertificateSeriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WITHHOLDING_TAX_CODES: new OneToManyLink(
        'WithholdingTaxCodes',
        this,
        linkedApis[0]
      ),
      CERTIFICATE_SERIES: new OneToManyLink(
        'CertificateSeries',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = Sections;

  requestBuilder(): SectionsRequestBuilder<DeSerializersT> {
    return new SectionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Sections<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Sections<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Sections<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Sections, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Sections, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      Sections<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      Sections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Sections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_CODE: OrderableEdmTypeField<
      Sections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      Sections<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link certificateSeries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_SERIES: OneToManyLink<
      Sections<DeSerializersT>,
      DeSerializersT,
      CertificateSeriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Sections<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_CODE: fieldBuilder.buildEdmTypeField('ECode', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Sections)
      };
    }

    return this._schema;
  }
}
