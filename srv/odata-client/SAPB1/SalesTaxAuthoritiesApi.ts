/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxAuthorities } from './SalesTaxAuthorities';
import { SalesTaxAuthoritiesRequestBuilder } from './SalesTaxAuthoritiesRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { UsersApi } from './UsersApi';
import { SalesTaxAuthoritiesTypesApi } from './SalesTaxAuthoritiesTypesApi';
import { TaxDefinition } from './TaxDefinition';
import { BoYesNoEnum } from './BoYesNoEnum';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesTaxAuthoritiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTaxAuthorities<DeSerializersT>, DeSerializersT>
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
  ): SalesTaxAuthoritiesApi<DeSerializersT> {
    return new SalesTaxAuthoritiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      SalesTaxAuthorities<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      SalesTaxAuthorities<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxAuthoritiesType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES_TYPE: OneToOneLink<
      SalesTaxAuthorities<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      SalesTaxAuthoritiesTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0]),
      USER: new OneToOneLink('User', this, linkedApis[1]),
      SALES_TAX_AUTHORITIES_TYPE: new OneToOneLink(
        'SalesTaxAuthoritiesType',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = SalesTaxAuthorities;

  requestBuilder(): SalesTaxAuthoritiesRequestBuilder<DeSerializersT> {
    return new SalesTaxAuthoritiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTaxAuthorities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesTaxAuthorities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesTaxAuthorities<DeSerializersT>,
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
    typeof SalesTaxAuthorities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTaxAuthorities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USE_TAX_ACCOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SIGNATURE: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    A_OR_R_TAX_ACCOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    A_OR_P_TAX_ACCOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NON_DEDUCTIBLE_PRECENT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    NON_DEDUCTIBLE_ACCOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED_TAX_ACCOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MIN_TAXABLE_AMOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAX_TAXABLE_AMOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FLAT_TAX_AMOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    INCL_IN_PRICE: EnumField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    EXEMPT: EnumField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AP_EXP_ACCOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AR_EXP_ACCOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCL_IN_GROSS_REVENUE: EnumField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TEXT_CODE: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INCL_IN_FIRST_INSTALLMENT: EnumField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REVERSE_CHARGE_PERCENT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALES_TAX_RCM_ACCOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_RCM_CLR_ACCOUNT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_EXEMPTION: EnumField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VAT_EXEMPTION_BASE_PERCENT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VAT_EXEMPTION_PERCENT: OrderableEdmTypeField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_DEFINITIONS: CollectionField<
      SalesTaxAuthorities<DeSerializers>,
      DeSerializersT,
      TaxDefinition,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      SalesTaxAuthorities<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      SalesTaxAuthorities<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxAuthoritiesType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES_TYPE: OneToOneLink<
      SalesTaxAuthorities<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesTaxAuthorities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link useTaxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UseTaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.Int32', false),
        /**
         * Static representation of the {@link aOrRTaxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        A_OR_R_TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'AOrRTaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true),
        /**
         * Static representation of the {@link aOrPTaxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        A_OR_P_TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'AOrPTaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nonDeductiblePrecent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_DEDUCTIBLE_PRECENT: fieldBuilder.buildEdmTypeField(
          'NonDeductiblePrecent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link nonDeductibleAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_DEDUCTIBLE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'NonDeductibleAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link deferredTaxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DeferredTaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link minTaxableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_TAXABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinTaxableAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maxTaxableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_TAXABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxTaxableAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link flatTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLAT_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FlatTaxAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link inclInPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_IN_PRICE: fieldBuilder.buildEnumField(
          'InclInPrice',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link exempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT: fieldBuilder.buildEnumField('Exempt', BoYesNoEnum, true),
        /**
         * Static representation of the {@link apExpAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AP_EXP_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'APExpAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link arExpAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AR_EXP_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ARExpAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inclInGrossRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_IN_GROSS_REVENUE: fieldBuilder.buildEnumField(
          'InclInGrossRevenue',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link textCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_CODE: fieldBuilder.buildEdmTypeField(
          'TextCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link inclInFirstInstallment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCL_IN_FIRST_INSTALLMENT: fieldBuilder.buildEnumField(
          'InclInFirstInstallment',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link reverseChargePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE_PERCENT: fieldBuilder.buildEdmTypeField(
          'ReverseChargePercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salesTaxRcmAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_RCM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'SalesTaxRCMAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxRcmClrAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_RCM_CLR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'SalesTaxRCMClrAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatExemption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_EXEMPTION: fieldBuilder.buildEnumField(
          'VATExemption',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link vatExemptionBasePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_EXEMPTION_BASE_PERCENT: fieldBuilder.buildEdmTypeField(
          'VATExemptionBasePercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link vatExemptionPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_EXEMPTION_PERCENT: fieldBuilder.buildEdmTypeField(
          'VATExemptionPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link taxDefinitions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DEFINITIONS: fieldBuilder.buildCollectionField(
          'TaxDefinitions',
          TaxDefinition,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTaxAuthorities)
      };
    }

    return this._schema;
  }
}
