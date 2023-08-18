/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HouseBankAccounts } from './HouseBankAccounts';
import { HouseBankAccountsRequestBuilder } from './HouseBankAccountsRequestBuilder';
import { WizardPaymentMethodsApi } from './WizardPaymentMethodsApi';
import { BankStatementsApi } from './BankStatementsApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { CountriesApi } from './CountriesApi';
import { BanksApi } from './BanksApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { PrintOnEnum } from './PrintOnEnum';
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
export class HouseBankAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<HouseBankAccounts<DeSerializersT>, DeSerializersT>
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
  ): HouseBankAccountsApi<DeSerializersT> {
    return new HouseBankAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankStatements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_STATEMENTS: OneToManyLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      BankStatementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bank} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK: OneToOneLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      BanksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WizardPaymentMethodsApi<DeSerializersT>,
      BankStatementsApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      BanksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WIZARD_PAYMENT_METHODS: new OneToManyLink(
        'WizardPaymentMethods',
        this,
        linkedApis[0]
      ),
      BANK_STATEMENTS: new OneToManyLink('BankStatements', this, linkedApis[1]),
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[2]),
      COUNTRY_2: new OneToOneLink('Country2', this, linkedApis[3]),
      BANK: new OneToOneLink('Bank', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = HouseBankAccounts;

  requestBuilder(): HouseBankAccountsRequestBuilder<DeSerializersT> {
    return new HouseBankAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HouseBankAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<HouseBankAccounts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<HouseBankAccounts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof HouseBankAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HouseBankAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BANK_CODE: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACC_NO: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT_CHECK_NO: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    GL_ACCOUNT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DSC_1_STREET_ALIAS: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BISR: EnumField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CONTROL_KEY: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NO_1: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NO_2: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NO_3: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NO_4: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBAN: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBTOF_DISCOUNTED_BILLOF_EXC: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOLERANCE_DAYS: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MIN_AMOUNTOF_BILLOF_EXCHANG: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAX_AMOUNTOF_BILLOF_EXCHAN: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DISCOUNT_LIMIT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DAYS_IN_ADVANCE: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BANKON_COLLECTION: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANKON_DISCOUNTED: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_INTERIM_ACCOUNT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABSOLUTE_ENTRY: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BANK_KEY: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LOCK_CHECKS_PRINTING: EnumField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TEMPLATE_NAME: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_LINES: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRINT_ON: EnumField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      PrintOnEnum,
      true,
      true
    >;
    CUSTOMER_ID_NUMBER: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISR_BILLER_ID: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISR_TYPE: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ACCOUNT_CHECK_DIGIT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUR_NUMBER: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    AGREEMENT_NUMBER: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NO: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOMING_PAYMENT_SERIES: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OUTGOING_PAYMENT_SERIES: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    JOURNAL_ENTRY_SERIES: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IMPORT_FILE_NAME: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NAME: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIC_SWIFT_CODE: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINE_ACCOUNT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_ACCOUNT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_ACCOUNT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_FEE_ACCOUNT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IOF_TAX_ACCOUNT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OTHER_EXPENSES_ACCOUNT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OTHER_INCOMES_ACCOUNT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETORNO_FILE_NAME: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_CHECK_DIGIT: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLECTION_CODE: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILE_SEQ_NEXT_NUMBER: OrderableEdmTypeField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NO_VALIDATION_FOR_STARTING_ENDING_BAL: EnumField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    E_CHECK: EnumField<
      HouseBankAccounts<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wizardPaymentMethods} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WIZARD_PAYMENT_METHODS: OneToManyLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      WizardPaymentMethodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankStatements} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_STATEMENTS: OneToManyLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      BankStatementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bank} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK: OneToOneLink<
      HouseBankAccounts<DeSerializersT>,
      DeSerializersT,
      BanksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<HouseBankAccounts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link bankCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE: fieldBuilder.buildEdmTypeField(
          'BankCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACC_NO: fieldBuilder.buildEdmTypeField('AccNo', 'Edm.String', true),
        /**
         * Static representation of the {@link branch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH: fieldBuilder.buildEdmTypeField('Branch', 'Edm.String', true),
        /**
         * Static representation of the {@link nextCheckNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_CHECK_NO: fieldBuilder.buildEdmTypeField(
          'NextCheckNo',
          'Edm.Int32',
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
         * Static representation of the {@link dsc1StreetAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DSC_1_STREET_ALIAS: fieldBuilder.buildEdmTypeField(
          'DSC1_STREET_ALIAS',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link bisr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BISR: fieldBuilder.buildEnumField('BISR', BoYesNoEnum, true),
        /**
         * Static representation of the {@link controlKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_KEY: fieldBuilder.buildEdmTypeField(
          'ControlKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userNo1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NO_1: fieldBuilder.buildEdmTypeField(
          'UserNo1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userNo2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NO_2: fieldBuilder.buildEdmTypeField(
          'UserNo2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userNo3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NO_3: fieldBuilder.buildEdmTypeField(
          'UserNo3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userNo4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NO_4: fieldBuilder.buildEdmTypeField(
          'UserNo4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link iban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
        /**
         * Static representation of the {@link debtofDiscountedBillofExc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBTOF_DISCOUNTED_BILLOF_EXC: fieldBuilder.buildEdmTypeField(
          'DebtofDiscountedBillofExc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toleranceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ToleranceDays',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link minAmountofBillofExchang} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_AMOUNTOF_BILLOF_EXCHANG: fieldBuilder.buildEdmTypeField(
          'MinAmountofBillofExchang',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maxAmountofBillofExchan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_AMOUNTOF_BILLOF_EXCHAN: fieldBuilder.buildEdmTypeField(
          'MaxAmountofBillofExchan',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link discountLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_LIMIT: fieldBuilder.buildEdmTypeField(
          'DiscountLimit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link daysInAdvance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_IN_ADVANCE: fieldBuilder.buildEdmTypeField(
          'DaysInAdvance',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bankonCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANKON_COLLECTION: fieldBuilder.buildEdmTypeField(
          'BankonCollection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankonDiscounted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANKON_DISCOUNTED: fieldBuilder.buildEdmTypeField(
          'BankonDiscounted',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link glInterimAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_INTERIM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GLInterimAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link absoluteEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSOLUTE_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsoluteEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bankKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_KEY: fieldBuilder.buildEdmTypeField('BankKey', 'Edm.Int32', true),
        /**
         * Static representation of the {@link lockChecksPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCK_CHECKS_PRINTING: fieldBuilder.buildEnumField(
          'LockChecksPrinting',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link templateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'TemplateName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LINES: fieldBuilder.buildEdmTypeField(
          'MaximumLines',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link printOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_ON: fieldBuilder.buildEnumField('PrintOn', PrintOnEnum, true),
        /**
         * Static representation of the {@link customerIdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerIdNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isrBillerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISR_BILLER_ID: fieldBuilder.buildEdmTypeField(
          'ISRBillerID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isrType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISR_TYPE: fieldBuilder.buildEdmTypeField('ISRType', 'Edm.Int32', true),
        /**
         * Static representation of the {@link accountCheckDigit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CHECK_DIGIT: fieldBuilder.buildEdmTypeField(
          'AccountCheckDigit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ourNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUR_NUMBER: fieldBuilder.buildEdmTypeField(
          'OurNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link agreementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TYPE: fieldBuilder.buildEdmTypeField(
          'AddressType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link streetNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NO: fieldBuilder.buildEdmTypeField(
          'StreetNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link building} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING: fieldBuilder.buildEdmTypeField(
          'Building',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incomingPaymentSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOMING_PAYMENT_SERIES: fieldBuilder.buildEdmTypeField(
          'IncomingPaymentSeries',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link outgoingPaymentSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTGOING_PAYMENT_SERIES: fieldBuilder.buildEdmTypeField(
          'OutgoingPaymentSeries',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link journalEntrySeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ENTRY_SERIES: fieldBuilder.buildEdmTypeField(
          'JournalEntrySeries',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link importFileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_FILE_NAME: fieldBuilder.buildEdmTypeField(
          'ImportFileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'AccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bicSwiftCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIC_SWIFT_CODE: fieldBuilder.buildEdmTypeField(
          'BICSwiftCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fineAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'FineAccount',
          'Edm.String',
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
         * Static representation of the {@link discountAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceFeeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_FEE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ServiceFeeAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link iofTaxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IOF_TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'IOFTaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link otherExpensesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_EXPENSES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OtherExpensesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link otherIncomesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_INCOMES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OtherIncomesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retornoFileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETORNO_FILE_NAME: fieldBuilder.buildEdmTypeField(
          'RetornoFileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branchCheckDigit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_CHECK_DIGIT: fieldBuilder.buildEdmTypeField(
          'BranchCheckDigit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collectionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLECTION_CODE: fieldBuilder.buildEdmTypeField(
          'CollectionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fileSeqNextNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_SEQ_NEXT_NUMBER: fieldBuilder.buildEdmTypeField(
          'FileSeqNextNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link noValidationForStartingEndingBal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_VALIDATION_FOR_STARTING_ENDING_BAL: fieldBuilder.buildEnumField(
          'NoValidationForStartingEndingBal',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link eCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_CHECK: fieldBuilder.buildEnumField('ECheck', BoYesNoEnum, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HouseBankAccounts)
      };
    }

    return this._schema;
  }
}
