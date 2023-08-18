/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseLocations } from './WarehouseLocations';
import { WarehouseLocationsRequestBuilder } from './WarehouseLocationsRequestBuilder';
import { WarehousesApi } from './WarehousesApi';
import { ItemsApi } from './ItemsApi';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { JournalEntriesApi } from './JournalEntriesApi';
import { CertificateSeriesApi } from './CertificateSeriesApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
import { CountriesApi } from './CountriesApi';
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
import { BoGstRegnTypeEnum } from './BoGstRegnTypeEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WarehouseLocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WarehouseLocations<DeSerializersT>, DeSerializersT>
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
  ): WarehouseLocationsApi<DeSerializersT> {
    return new WarehouseLocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link journalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRIES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link certificateSeries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_SERIES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CertificateSeriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehousesApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      WithholdingTaxCodesApi<DeSerializersT>,
      JournalEntriesApi<DeSerializersT>,
      CertificateSeriesApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      IncomingPaymentsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[0]),
      ITEMS: new OneToManyLink('Items', this, linkedApis[1]),
      WITHHOLDING_TAX_CODES: new OneToManyLink(
        'WithholdingTaxCodes',
        this,
        linkedApis[2]
      ),
      JOURNAL_ENTRIES: new OneToManyLink('JournalEntries', this, linkedApis[3]),
      CERTIFICATE_SERIES: new OneToManyLink(
        'CertificateSeries',
        this,
        linkedApis[4]
      ),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[5]),
      COUNTRY_2: new OneToOneLink('Country2', this, linkedApis[6]),
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[7]
      ),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[8])
    };
    return this;
  }

  entityConstructor = WarehouseLocations;

  requestBuilder(): WarehouseLocationsRequestBuilder<DeSerializersT> {
    return new WarehouseLocationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarehouseLocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WarehouseLocations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseLocations<DeSerializersT>,
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
    typeof WarehouseLocations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseLocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LSTVAT_NUMBER: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CST_NUMBER: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPTION_NUMBER: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAN_NUMBER: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TAX_NUMBER: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSESSEE_TYPE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_TYPE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATURE_OF_BUSINESS: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIN_NUMBER: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_TYPE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ECC_NUMBER: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CE_RANGE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CE_DIVISION: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CE_COMMISSIONERATE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUFACTURER_CODE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JURISDICTION: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAN_NUMBER: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CE_REGISTER_NUMBER: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING_FLOOR_ROOM: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GSTIN: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GST_TYPE: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      BoGstRegnTypeEnum,
      true,
      true
    >;
    GSTTDS: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GSTISD: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link journalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_ENTRIES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      JournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link certificateSeries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_SERIES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CertificateSeriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseLocations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link lstvatNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LSTVAT_NUMBER: fieldBuilder.buildEdmTypeField(
          'LSTVATNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cstNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CST_NUMBER: fieldBuilder.buildEdmTypeField(
          'CSTNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExemptionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tanNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAN_NUMBER: fieldBuilder.buildEdmTypeField(
          'TANNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceTaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'ServiceTaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assesseeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSEE_TYPE: fieldBuilder.buildEdmTypeField(
          'AssesseeType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_TYPE: fieldBuilder.buildEdmTypeField(
          'CompanyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link natureOfBusiness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_BUSINESS: fieldBuilder.buildEdmTypeField(
          'NatureOfBusiness',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tinNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIN_NUMBER: fieldBuilder.buildEdmTypeField(
          'TINNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registrationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_TYPE: fieldBuilder.buildEdmTypeField(
          'RegistrationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eccNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ECC_NUMBER: fieldBuilder.buildEdmTypeField(
          'EccNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ceRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CE_RANGE: fieldBuilder.buildEdmTypeField('CERange', 'Edm.String', true),
        /**
         * Static representation of the {@link ceDivision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CE_DIVISION: fieldBuilder.buildEdmTypeField(
          'CEDivision',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ceCommissionerate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CE_COMMISSIONERATE: fieldBuilder.buildEdmTypeField(
          'CECommissionerate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manufacturerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_CODE: fieldBuilder.buildEdmTypeField(
          'ManufacturerCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jurisdiction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JURISDICTION: fieldBuilder.buildEdmTypeField(
          'Jurisdiction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
        /**
         * Static representation of the {@link block} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK: fieldBuilder.buildEdmTypeField('Block', 'Edm.String', true),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link panNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAN_NUMBER: fieldBuilder.buildEdmTypeField(
          'PANNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ceRegisterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CE_REGISTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'CERegisterNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buildingFloorRoom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING_FLOOR_ROOM: fieldBuilder.buildEdmTypeField(
          'BuildingFloorRoom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gstin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTIN: fieldBuilder.buildEdmTypeField('GSTIN', 'Edm.String', true),
        /**
         * Static representation of the {@link gstType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GST_TYPE: fieldBuilder.buildEnumField(
          'GstType',
          BoGstRegnTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link gsttds} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTTDS: fieldBuilder.buildEdmTypeField('GSTTDS', 'Edm.String', true),
        /**
         * Static representation of the {@link gstisd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GSTISD: fieldBuilder.buildEdmTypeField('GSTISD', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseLocations)
      };
    }

    return this._schema;
  }
}
