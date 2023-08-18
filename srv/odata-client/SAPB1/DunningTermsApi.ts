/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DunningTerms } from './DunningTerms';
import { DunningTermsRequestBuilder } from './DunningTermsRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { DunningTermLine } from './DunningTermLine';
import { GroupingMethodEnum } from './GroupingMethodEnum';
import { CalculateInterestMethodEnum } from './CalculateInterestMethodEnum';
import { ExchangeRateSelectEnum } from './ExchangeRateSelectEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AutomaticPostingEnum } from './AutomaticPostingEnum';
import { BaseDateSelectEnum } from './BaseDateSelectEnum';
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
export class DunningTermsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DunningTerms<DeSerializersT>, DeSerializersT>
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
  ): DunningTermsApi<DeSerializersT> {
    return new DunningTermsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      DunningTerms<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      DunningTerms<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0]),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = DunningTerms;

  requestBuilder(): DunningTermsRequestBuilder<DeSerializersT> {
    return new DunningTermsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DunningTerms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DunningTerms<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DunningTerms<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DunningTerms, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DunningTerms, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUPING_METHOD: EnumField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      GroupingMethodEnum,
      true,
      true
    >;
    DAYS_IN_YEAR: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DAYS_IN_MONTH: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CALCULATE_INTEREST_METHOD: EnumField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      CalculateInterestMethodEnum,
      true,
      true
    >;
    EXCHANGE_RATE_SELECT: EnumField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      ExchangeRateSelectEnum,
      true,
      true
    >;
    YEARLY_INTEREST_RATE: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LETTER_FEE: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LETTER_FEE_CURRENCY: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_BALANCE: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MINIMUM_BALANCE_CURRENCY: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_INTEREST: EnumField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    APPLY_HIGHEST_LETTER_TEMPLATE: EnumField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    AUTOMATIC_POSTING: EnumField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      AutomaticPostingEnum,
      true,
      true
    >;
    INTEREST_ACCOUNT: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEE_ACCOUNT: OrderableEdmTypeField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_DATE_SELECT: EnumField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      BaseDateSelectEnum,
      true,
      true
    >;
    DUNNING_TERM_LINES: CollectionField<
      DunningTerms<DeSerializers>,
      DeSerializersT,
      DunningTermLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      DunningTerms<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      DunningTerms<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DunningTerms<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link groupingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUPING_METHOD: fieldBuilder.buildEnumField(
          'GroupingMethod',
          GroupingMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link daysInYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_IN_YEAR: fieldBuilder.buildEdmTypeField(
          'DaysInYear',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link daysInMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_IN_MONTH: fieldBuilder.buildEdmTypeField(
          'DaysInMonth',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link calculateInterestMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_INTEREST_METHOD: fieldBuilder.buildEnumField(
          'CalculateInterestMethod',
          CalculateInterestMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link exchangeRateSelect} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_SELECT: fieldBuilder.buildEnumField(
          'ExchangeRateSelect',
          ExchangeRateSelectEnum,
          true
        ),
        /**
         * Static representation of the {@link yearlyInterestRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARLY_INTEREST_RATE: fieldBuilder.buildEdmTypeField(
          'YearlyInterestRate',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link letterFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER_FEE: fieldBuilder.buildEdmTypeField(
          'LetterFee',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link letterFeeCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER_FEE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'LetterFeeCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BALANCE: fieldBuilder.buildEdmTypeField(
          'MinimumBalance',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link minimumBalanceCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BALANCE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'MinimumBalanceCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link includeInterest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_INTEREST: fieldBuilder.buildEnumField(
          'IncludeInterest',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link applyHighestLetterTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_HIGHEST_LETTER_TEMPLATE: fieldBuilder.buildEnumField(
          'ApplyHighestLetterTemplate',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link automaticPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_POSTING: fieldBuilder.buildEnumField(
          'AutomaticPosting',
          AutomaticPostingEnum,
          true
        ),
        /**
         * Static representation of the {@link interestAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InterestAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link feeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'FeeAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baseDateSelect} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_DATE_SELECT: fieldBuilder.buildEnumField(
          'BaseDateSelect',
          BaseDateSelectEnum,
          true
        ),
        /**
         * Static representation of the {@link dunningTermLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_TERM_LINES: fieldBuilder.buildCollectionField(
          'DunningTermLines',
          DunningTermLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DunningTerms)
      };
    }

    return this._schema;
  }
}
