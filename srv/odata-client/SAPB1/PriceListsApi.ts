/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceLists } from './PriceLists';
import { PriceListsRequestBuilder } from './PriceListsRequestBuilder';
import { StockTransfersApi } from './StockTransfersApi';
import { ProductTreesApi } from './ProductTreesApi';
import { BlanketAgreementsApi } from './BlanketAgreementsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { SpecialPricesApi } from './SpecialPricesApi';
import { PaymentTermsTypesApi } from './PaymentTermsTypesApi';
import { BoRoundingMethod } from './BoRoundingMethod';
import { BoPriceListGroupNum } from './BoPriceListGroupNum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRoundingRule } from './BoRoundingRule';
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
export class PriceListsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PriceLists<DeSerializersT>, DeSerializersT>
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
  ): PriceListsApi<DeSerializersT> {
    return new PriceListsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTrees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TREES: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      ProductTreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link specialPrices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPECIAL_PRICES: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      SpecialPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentTermsTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPES: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      StockTransfersApi<DeSerializersT>,
      ProductTreesApi<DeSerializersT>,
      BlanketAgreementsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      SpecialPricesApi<DeSerializersT>,
      PaymentTermsTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      STOCK_TRANSFERS: new OneToManyLink('StockTransfers', this, linkedApis[0]),
      PRODUCT_TREES: new OneToManyLink('ProductTrees', this, linkedApis[1]),
      BLANKET_AGREEMENTS: new OneToManyLink(
        'BlanketAgreements',
        this,
        linkedApis[2]
      ),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[3]
      ),
      SPECIAL_PRICES: new OneToManyLink('SpecialPrices', this, linkedApis[4]),
      PAYMENT_TERMS_TYPES: new OneToManyLink(
        'PaymentTermsTypes',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = PriceLists;

  requestBuilder(): PriceListsRequestBuilder<DeSerializersT> {
    return new PriceListsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PriceLists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PriceLists<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PriceLists<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PriceLists, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PriceLists, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ROUNDING_METHOD: EnumField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      BoRoundingMethod,
      true,
      true
    >;
    GROUP_NUM: EnumField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      BoPriceListGroupNum,
      true,
      true
    >;
    BASE_PRICE_LIST: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FACTOR: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PRICE_LIST_NO: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRICE_LIST_NAME: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_GROSS_PRICE: EnumField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ACTIVE: EnumField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEFAULT_PRIME_CURRENCY: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ADDITIONAL_CURRENCY_1: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_ADDITIONAL_CURRENCY_2: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_RULE: EnumField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      BoRoundingRule,
      true,
      true
    >;
    FIXED_AMOUNT: OrderableEdmTypeField<
      PriceLists<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link stockTransfers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STOCK_TRANSFERS: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      StockTransfersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTrees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TREES: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      ProductTreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link blanketAgreements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BLANKET_AGREEMENTS: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      BlanketAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link specialPrices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SPECIAL_PRICES: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      SpecialPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentTermsTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPES: OneToManyLink<
      PriceLists<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PriceLists<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link roundingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD: fieldBuilder.buildEnumField(
          'RoundingMethod',
          BoRoundingMethod,
          true
        ),
        /**
         * Static representation of the {@link groupNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NUM: fieldBuilder.buildEnumField(
          'GroupNum',
          BoPriceListGroupNum,
          true
        ),
        /**
         * Static representation of the {@link basePriceList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_PRICE_LIST: fieldBuilder.buildEdmTypeField(
          'BasePriceList',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link factor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR: fieldBuilder.buildEdmTypeField('Factor', 'Edm.Double', true),
        /**
         * Static representation of the {@link priceListNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LIST_NO: fieldBuilder.buildEdmTypeField(
          'PriceListNo',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link priceListName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LIST_NAME: fieldBuilder.buildEdmTypeField(
          'PriceListName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isGrossPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_GROSS_PRICE: fieldBuilder.buildEnumField(
          'IsGrossPrice',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link defaultPrimeCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRIME_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DefaultPrimeCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultAdditionalCurrency1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ADDITIONAL_CURRENCY_1: fieldBuilder.buildEdmTypeField(
          'DefaultAdditionalCurrency1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultAdditionalCurrency2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ADDITIONAL_CURRENCY_2: fieldBuilder.buildEdmTypeField(
          'DefaultAdditionalCurrency2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_RULE: fieldBuilder.buildEnumField(
          'RoundingRule',
          BoRoundingRule,
          true
        ),
        /**
         * Static representation of the {@link fixedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FixedAmount',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceLists)
      };
    }

    return this._schema;
  }
}
