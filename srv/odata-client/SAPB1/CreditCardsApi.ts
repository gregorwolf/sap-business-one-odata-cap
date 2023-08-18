/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditCards } from './CreditCards';
import { CreditCardsRequestBuilder } from './CreditCardsRequestBuilder';
import { CreditPaymentMethodsApi } from './CreditPaymentMethodsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { CountriesApi } from './CountriesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CreditCardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CreditCards<DeSerializersT>, DeSerializersT>
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
  ): CreditCardsApi<DeSerializersT> {
    return new CreditCardsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link creditPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_PAYMENT_METHODS: OneToManyLink<
      CreditCards<DeSerializersT>,
      DeSerializersT,
      CreditPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      CreditCards<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      CreditCards<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      CreditCards<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CreditPaymentMethodsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      CountriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CREDIT_PAYMENT_METHODS: new OneToManyLink(
        'CreditPaymentMethods',
        this,
        linkedApis[0]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[1]
      ),
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[2]),
      COUNTRY: new OneToOneLink('Country', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = CreditCards;

  requestBuilder(): CreditCardsRequestBuilder<DeSerializersT> {
    return new CreditCardsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CreditCards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CreditCards<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CreditCards<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CreditCards, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CreditCards, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREDIT_CARD_CODE: OrderableEdmTypeField<
      CreditCards<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_NAME: OrderableEdmTypeField<
      CreditCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_ACCOUNT: OrderableEdmTypeField<
      CreditCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      CreditCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ID: OrderableEdmTypeField<
      CreditCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_CODE: OrderableEdmTypeField<
      CreditCards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link creditPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CREDIT_PAYMENT_METHODS: OneToManyLink<
      CreditCards<DeSerializersT>,
      DeSerializersT,
      CreditPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      CreditCards<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      CreditCards<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      CreditCards<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CreditCards<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link creditCardCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_CODE: fieldBuilder.buildEdmTypeField(
          'CreditCardCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditCardName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_NAME: fieldBuilder.buildEdmTypeField(
          'CreditCardName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link glAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompanyID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'CountryCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CreditCards)
      };
    }

    return this._schema;
  }
}
