/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Deposits } from './Deposits';
import { DepositsRequestBuilder } from './DepositsRequestBuilder';
import { VatGroupsApi } from './VatGroupsApi';
import { ProjectsApi } from './ProjectsApi';
import { DistributionRulesApi } from './DistributionRulesApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { Attachments2Api } from './Attachments2Api';
import { CheckLine } from './CheckLine';
import { CreditLine } from './CreditLine';
import { BoeLine } from './BoeLine';
import { BoDepositTypeEnum } from './BoDepositTypeEnum';
import { BoDepositAccountTypeEnum } from './BoDepositAccountTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCheckDepositTypeEnum } from './BoCheckDepositTypeEnum';
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
export class DepositsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Deposits<DeSerializersT>, DeSerializersT>
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
  ): DepositsApi<DeSerializersT> {
    return new DepositsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VatGroupsApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      DistributionRulesApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>,
      Attachments2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VAT_GROUP: new OneToOneLink('VatGroup', this, linkedApis[0]),
      PROJECT_2: new OneToOneLink('Project2', this, linkedApis[1]),
      DISTRIBUTION_RULE_6: new OneToOneLink(
        'DistributionRule6',
        this,
        linkedApis[2]
      ),
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[3]),
      ATTACHMENTS_2: new OneToOneLink('Attachments2', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = Deposits;

  requestBuilder(): DepositsRequestBuilder<DeSerializersT> {
    return new DepositsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Deposits<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Deposits<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Deposits<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Deposits, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Deposits, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEPOSIT_NUMBER: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ABS_ENTRY: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEPOSIT_TYPE: EnumField<
      Deposits<DeSerializers>,
      DeSerializersT,
      BoDepositTypeEnum,
      true,
      true
    >;
    DEPOSIT_DATE: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEPOSIT_CURRENCY: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPOSIT_ACCOUNT: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPOSITOR_NAME: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_NUM: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_BRANCH: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_REFERENCE: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_REMARKS: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_LC: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_FC: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_SC: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ALLOCATION_ACCOUNT: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_RATE: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_ACCOUNT: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COMMISSION_ACCOUNT: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COMMISSION_DATE: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPOSIT_ACCOUNT_TYPE: EnumField<
      Deposits<DeSerializers>,
      DeSerializersT,
      BoDepositAccountTypeEnum,
      true,
      true
    >;
    RECONCILE_AFTER_DEPOSIT: EnumField<
      Deposits<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VOUCHER_ACCOUNT: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_2: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_3: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_4: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_RULE_5: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_CURRENCY: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMISSION_SC: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COMMISSION_FC: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_AMOUNT_SC: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TAX_AMOUNT_FC: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BPLID: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CHECK_DEPOSIT_TYPE: EnumField<
      Deposits<DeSerializers>,
      DeSerializersT,
      BoCheckDepositTypeEnum,
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INCOME_TAX_ACCOUNT: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOME_TAX_AMOUNT: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    INCOME_TAX_AMOUNT_SC: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    INCOME_TAX_AMOUNT_FC: OrderableEdmTypeField<
      Deposits<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CHECK_LINES: CollectionField<
      Deposits<DeSerializers>,
      DeSerializersT,
      CheckLine,
      true,
      true
    >;
    CREDIT_LINES: CollectionField<
      Deposits<DeSerializers>,
      DeSerializersT,
      CreditLine,
      true,
      true
    >;
    BOE_LINES: CollectionField<
      Deposits<DeSerializers>,
      DeSerializersT,
      BoeLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link project2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_2: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link distributionRule6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRIBUTION_RULE_6: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      DistributionRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attachments2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS_2: OneToOneLink<
      Deposits<DeSerializersT>,
      DeSerializersT,
      Attachments2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Deposits<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link depositNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepositNumber',
          'Edm.Int32',
          true
        ),
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
         * Static representation of the {@link depositType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSIT_TYPE: fieldBuilder.buildEnumField(
          'DepositType',
          BoDepositTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link depositDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSIT_DATE: fieldBuilder.buildEdmTypeField(
          'DepositDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link depositCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSIT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'DepositCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link depositAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSIT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DepositAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link depositorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSITOR_NAME: fieldBuilder.buildEdmTypeField(
          'DepositorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK: fieldBuilder.buildEdmTypeField('Bank', 'Edm.String', true),
        /**
         * Static representation of the {@link bankAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'BankAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BRANCH: fieldBuilder.buildEdmTypeField(
          'BankBranch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_REFERENCE: fieldBuilder.buildEdmTypeField(
          'BankReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_REMARKS: fieldBuilder.buildEdmTypeField(
          'JournalRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalLc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_LC: fieldBuilder.buildEdmTypeField('TotalLC', 'Edm.Double', true),
        /**
         * Static representation of the {@link totalFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_FC: fieldBuilder.buildEdmTypeField('TotalFC', 'Edm.Double', true),
        /**
         * Static representation of the {@link totalSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_SC: fieldBuilder.buildEdmTypeField('TotalSC', 'Edm.Double', true),
        /**
         * Static representation of the {@link allocationAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'AllocationAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_RATE: fieldBuilder.buildEdmTypeField('DocRate', 'Edm.Double', true),
        /**
         * Static representation of the {@link taxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link commissionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CommissionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION: fieldBuilder.buildEdmTypeField(
          'Commission',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link commissionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_DATE: fieldBuilder.buildEdmTypeField(
          'CommissionDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        /**
         * Static representation of the {@link depositAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPOSIT_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'DepositAccountType',
          BoDepositAccountTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link reconcileAfterDeposit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILE_AFTER_DEPOSIT: fieldBuilder.buildEnumField(
          'ReconcileAfterDeposit',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link voucherAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VoucherAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link project} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT: fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true),
        /**
         * Static representation of the {@link distributionRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE: fieldBuilder.buildEdmTypeField(
          'DistributionRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_2: fieldBuilder.buildEdmTypeField(
          'DistributionRule2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_3: fieldBuilder.buildEdmTypeField(
          'DistributionRule3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_4: fieldBuilder.buildEdmTypeField(
          'DistributionRule4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionRule5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_5: fieldBuilder.buildEdmTypeField(
          'DistributionRule5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CommissionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commissionSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_SC: fieldBuilder.buildEdmTypeField(
          'CommissionSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link commissionFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_FC: fieldBuilder.buildEdmTypeField(
          'CommissionFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link taxAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'TaxAmountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link taxAmountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_FC: fieldBuilder.buildEdmTypeField(
          'TaxAmountFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link bplid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPLID: fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link checkDepositType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_DEPOSIT_TYPE: fieldBuilder.buildEnumField(
          'CheckDepositType',
          BoCheckDepositTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link incomeTaxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'IncomeTaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incomeTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'IncomeTaxAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link incomeTaxAmountSc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_TAX_AMOUNT_SC: fieldBuilder.buildEdmTypeField(
          'IncomeTaxAmountSC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link incomeTaxAmountFc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOME_TAX_AMOUNT_FC: fieldBuilder.buildEdmTypeField(
          'IncomeTaxAmountFC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link checkLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_LINES: fieldBuilder.buildCollectionField(
          'CheckLines',
          CheckLine,
          true
        ),
        /**
         * Static representation of the {@link creditLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_LINES: fieldBuilder.buildCollectionField(
          'CreditLines',
          CreditLine,
          true
        ),
        /**
         * Static representation of the {@link boeLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOE_LINES: fieldBuilder.buildCollectionField('BOELines', BoeLine, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Deposits)
      };
    }

    return this._schema;
  }
}
