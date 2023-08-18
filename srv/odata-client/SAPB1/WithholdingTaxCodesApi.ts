/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdingTaxCodes } from './WithholdingTaxCodes';
import { WithholdingTaxCodesRequestBuilder } from './WithholdingTaxCodesRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { SectionsApi } from './SectionsApi';
import { NatureOfAssesseesApi } from './NatureOfAssesseesApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { NotaFiscalCstApi } from './NotaFiscalCstApi';
import { BrazilStringIndexersApi } from './BrazilStringIndexersApi';
import { CurrenciesApi } from './CurrenciesApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
import { WithholdingTaxCodesLine } from './WithholdingTaxCodesLine';
import { WithholdingTaxCodeCategoryEnum } from './WithholdingTaxCodeCategoryEnum';
import { WithholdingTaxCodeBaseTypeEnum } from './WithholdingTaxCodeBaseTypeEnum';
import { WithholdingTypeEnum } from './WithholdingTypeEnum';
import { RoundingTypeEnum } from './RoundingTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ReturnTypeEnum } from './ReturnTypeEnum';
import { TdsTypeEnum } from './TdsTypeEnum';
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
  CollectionField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WithholdingTaxCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdingTaxCodes<DeSerializersT>, DeSerializersT>
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
  ): WithholdingTaxCodesApi<DeSerializersT> {
    return new WithholdingTaxCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link section2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECTION_2: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      SectionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link natureOfAssessee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NATURE_OF_ASSESSEE: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      NatureOfAssesseesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link notaFiscalCst} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_CST: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      NotaFiscalCstApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilStringIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_STRING_INDEXER: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      BrazilStringIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_2: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      SectionsApi<DeSerializersT>,
      NatureOfAssesseesApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      NotaFiscalCstApi<DeSerializersT>,
      BrazilStringIndexersApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      IncomingPaymentsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0]),
      SECTION_2: new OneToOneLink('Section2', this, linkedApis[1]),
      NATURE_OF_ASSESSEE: new OneToOneLink(
        'NatureOfAssessee',
        this,
        linkedApis[2]
      ),
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[3]
      ),
      NOTA_FISCAL_CST: new OneToOneLink('NotaFiscalCST', this, linkedApis[4]),
      BRAZIL_STRING_INDEXER: new OneToOneLink(
        'BrazilStringIndexer',
        this,
        linkedApis[5]
      ),
      CURRENCY_2: new OneToOneLink('Currency2', this, linkedApis[6]),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[7]),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[8]
      ),
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[9]
      ),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[10])
    };
    return this;
  }

  entityConstructor = WithholdingTaxCodes;

  requestBuilder(): WithholdingTaxCodesRequestBuilder<DeSerializersT> {
    return new WithholdingTaxCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdingTaxCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdingTaxCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdingTaxCodes<DeSerializersT>,
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
    typeof WithholdingTaxCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdingTaxCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WT_CODE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WT_NAME: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      WithholdingTaxCodeCategoryEnum,
      true,
      true
    >;
    BASE_TYPE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      WithholdingTaxCodeBaseTypeEnum,
      true,
      true
    >;
    BASE_AMOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    OFFICIAL_CODE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TYPE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      WithholdingTypeEnum,
      true,
      true
    >;
    ROUNDING_TYPE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      RoundingTypeEnum,
      true,
      true
    >;
    SECTION: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    THRESHOLD: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SURCHARGE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CONCESSIONAL: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ASSESSEE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    APTDS_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AP_SURCHARGE_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AP_CESS_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APHSC_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APIGST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APCGST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APSGST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APUTGST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AP_CESS_GST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTDS_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_SURCHARGE_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_CESS_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARHSC_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARIGST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARCGST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARSGST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARUTGST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_CESS_GST_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTCS_INTERIM_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_SURCHARGE_INTERIM_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_CESS_INTERIM_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARHSC_INTERIM_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APTCS_INTERIM_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AP_SURCHARGE_INTERIM_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AP_CESS_INTERIM_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APHSC_INTERIM_ACCOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RETURN_TYPE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      ReturnTypeEnum,
      true,
      true
    >;
    INACTIVE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CST_CODE_INCOMING_ID: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CST_CODE_OUTGOING_ID: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NATURE_OF_CALCULATION_BASE_CODE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RATE: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    EFFECTIVE_FROM: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MINIMUM_TAXABLE_AMOUNT: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    IS_PROGRESSIVE_TAX: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TDS_TYPE: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      TdsTypeEnum,
      true,
      true
    >;
    TRANSACTON_THRESHOLD: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    E_BOOKS_W_TAX_CATEGORY: OrderableEdmTypeField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NON_DEDUCT_THRESHOLD: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    USE_IN_APDPR: EnumField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WITHHOLDING_TAX_CODES_LINES: CollectionField<
      WithholdingTaxCodes<DeSerializers>,
      DeSerializersT,
      WithholdingTaxCodesLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link section2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECTION_2: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      SectionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link natureOfAssessee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NATURE_OF_ASSESSEE: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      NatureOfAssesseesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link notaFiscalCst} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_CST: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      NotaFiscalCstApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link brazilStringIndexer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BRAZIL_STRING_INDEXER: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      BrazilStringIndexersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_2: OneToOneLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      WithholdingTaxCodes<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WithholdingTaxCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link wtCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_CODE: fieldBuilder.buildEdmTypeField('WTCode', 'Edm.String', false),
        /**
         * Static representation of the {@link wtName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WT_NAME: fieldBuilder.buildEdmTypeField('WTName', 'Edm.String', true),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEnumField(
          'Category',
          WithholdingTaxCodeCategoryEnum,
          true
        ),
        /**
         * Static representation of the {@link baseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_TYPE: fieldBuilder.buildEnumField(
          'BaseType',
          WithholdingTaxCodeBaseTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link baseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BaseAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link officialCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICIAL_CODE: fieldBuilder.buildEdmTypeField(
          'OfficialCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link account} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT: fieldBuilder.buildEdmTypeField('Account', 'Edm.String', true),
        /**
         * Static representation of the {@link withholdingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TYPE: fieldBuilder.buildEnumField(
          'WithholdingType',
          WithholdingTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link roundingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_TYPE: fieldBuilder.buildEnumField(
          'RoundingType',
          RoundingTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link section} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION: fieldBuilder.buildEdmTypeField('Section', 'Edm.Int32', true),
        /**
         * Static representation of the {@link threshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD: fieldBuilder.buildEdmTypeField(
          'Threshold',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link surcharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SURCHARGE: fieldBuilder.buildEdmTypeField(
          'Surcharge',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link concessional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCESSIONAL: fieldBuilder.buildEnumField(
          'Concessional',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link assessee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSEE: fieldBuilder.buildEdmTypeField('Assessee', 'Edm.Int32', true),
        /**
         * Static representation of the {@link aptdsAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APTDS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APTDSAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apSurchargeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AP_SURCHARGE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APSurchargeAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apCessAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AP_CESS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APCessAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aphscAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APHSC_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APHSCAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apigstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APIGST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APIGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apcgstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APCGST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APCGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apsgstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APSGST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APSGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aputgstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APUTGST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APUTGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apCessGstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AP_CESS_GST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APCessGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link artdsAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTDS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARTDSAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arSurchargeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_SURCHARGE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARSurchargeAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arCessAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_CESS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARCessAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arhscAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARHSC_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARHSCAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arigstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARIGST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARIGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arcgstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARCGST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARCGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arsgstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARSGST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARSGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arutgstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARUTGST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARUTGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arCessGstAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_CESS_GST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARCessGSTAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link artcsInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTCS_INTERIM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARTCSInterimAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arSurchargeInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_SURCHARGE_INTERIM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARSurchargeInterimAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arCessInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_CESS_INTERIM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARCessInterimAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arhscInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARHSC_INTERIM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARHSCInterimAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aptcsInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APTCS_INTERIM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APTCSInterimAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apSurchargeInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AP_SURCHARGE_INTERIM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APSurchargeInterimAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apCessInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AP_CESS_INTERIM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APCessInterimAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aphscInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APHSC_INTERIM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APHSCInterimAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField('Location', 'Edm.Int32', true),
        /**
         * Static representation of the {@link returnType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_TYPE: fieldBuilder.buildEnumField(
          'ReturnType',
          ReturnTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link cstCodeIncomingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CST_CODE_INCOMING_ID: fieldBuilder.buildEdmTypeField(
          'CSTCodeIncomingID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link cstCodeOutgoingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CST_CODE_OUTGOING_ID: fieldBuilder.buildEdmTypeField(
          'CSTCodeOutgoingID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link natureOfCalculationBaseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_CALCULATION_BASE_CODE: fieldBuilder.buildEdmTypeField(
          'NatureOfCalculationBaseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true),
        /**
         * Static representation of the {@link effectiveFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'EffectiveFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link minimumTaxableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_TAXABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumTaxableAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link isProgressiveTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROGRESSIVE_TAX: fieldBuilder.buildEnumField(
          'IsProgressiveTax',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tdsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_TYPE: fieldBuilder.buildEnumField('TdsType', TdsTypeEnum, true),
        /**
         * Static representation of the {@link transactonThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTON_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'TransactonThreshold',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link eBooksWTaxCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_BOOKS_W_TAX_CATEGORY: fieldBuilder.buildEdmTypeField(
          'EBooksWTaxCategory',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link nonDeductThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_DEDUCT_THRESHOLD: fieldBuilder.buildEnumField(
          'NonDeductThreshold',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link useInApdpr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_IN_APDPR: fieldBuilder.buildEnumField(
          'UseInAPDPR',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxCodesLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CODES_LINES: fieldBuilder.buildCollectionField(
          'WithholdingTaxCodes_Lines',
          WithholdingTaxCodesLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdingTaxCodes)
      };
    }

    return this._schema;
  }
}
