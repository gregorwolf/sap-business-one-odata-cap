/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VatGroups } from './VatGroups';
import { VatGroupsRequestBuilder } from './VatGroupsRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { TaxExemptReasonsApi } from './TaxExemptReasonsApi';
import { ItemsApi } from './ItemsApi';
import { GlAccountAdvancedRulesApi } from './GlAccountAdvancedRulesApi';
import { AdditionalExpensesApi } from './AdditionalExpensesApi';
import { PaymentDraftsApi } from './PaymentDraftsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { IncomingPaymentsApi } from './IncomingPaymentsApi';
import { DepositsApi } from './DepositsApi';
import { VendorPaymentsApi } from './VendorPaymentsApi';
import { VatGroupsLine } from './VatGroupsLine';
import { BoVatCategoryEnum } from './BoVatCategoryEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { TaxTypeBlackListEnum } from './TaxTypeBlackListEnum';
import { Report349CodeListEnum } from './Report349CodeListEnum';
import { VatGroupsTaxRegionEnum } from './VatGroupsTaxRegionEnum';
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
export class VatGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VatGroups<DeSerializersT>, DeSerializersT>
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
  ): VatGroupsApi<DeSerializersT> {
    return new VatGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxExemptReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_EXEMPT_REASON: OneToOneLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      TaxExemptReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link additionalExpenses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_EXPENSES: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      AdditionalExpensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deposits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPOSITS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      DepositsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      TaxExemptReasonsApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      GlAccountAdvancedRulesApi<DeSerializersT>,
      AdditionalExpensesApi<DeSerializersT>,
      PaymentDraftsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      IncomingPaymentsApi<DeSerializersT>,
      DepositsApi<DeSerializersT>,
      VendorPaymentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0]),
      TAX_EXEMPT_REASON: new OneToOneLink(
        'TaxExemptReason',
        this,
        linkedApis[1]
      ),
      ITEMS: new OneToManyLink('Items', this, linkedApis[2]),
      GL_ACCOUNT_ADVANCED_RULES: new OneToManyLink(
        'GLAccountAdvancedRules',
        this,
        linkedApis[3]
      ),
      ADDITIONAL_EXPENSES: new OneToManyLink(
        'AdditionalExpenses',
        this,
        linkedApis[4]
      ),
      PAYMENT_DRAFTS: new OneToManyLink('PaymentDrafts', this, linkedApis[5]),
      BUSINESS_PARTNERS: new OneToManyLink(
        'BusinessPartners',
        this,
        linkedApis[6]
      ),
      INCOMING_PAYMENTS: new OneToManyLink(
        'IncomingPayments',
        this,
        linkedApis[7]
      ),
      DEPOSITS: new OneToManyLink('Deposits', this, linkedApis[8]),
      VENDOR_PAYMENTS: new OneToManyLink('VendorPayments', this, linkedApis[9])
    };
    return this;
  }

  entityConstructor = VatGroups;

  requestBuilder(): VatGroupsRequestBuilder<DeSerializersT> {
    return new VatGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VatGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VatGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VatGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VatGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VatGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: EnumField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      BoVatCategoryEnum,
      true,
      true
    >;
    TAX_ACCOUNT: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU: EnumField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TRIANGULAR_DEAL: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACQUISITION_REVERSE: EnumField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    NON_DEDUCT: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ACQUISITION_TAX: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_SHIPMENT: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NON_DEDUCT_ACC: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED_TAX_ACC: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRECTION: EnumField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VAT_CORRECTION: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EQUALIZATION_TAX_ACCOUNT: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_SUPPLY: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INACTIVE: EnumField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TAX_TYPE_BLACK_LIST: EnumField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      TaxTypeBlackListEnum,
      true,
      true
    >;
    REPORT_349_CODE: EnumField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      Report349CodeListEnum,
      true,
      true
    >;
    VAT_IN_REVENUE_ACCOUNT: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOWN_PAYMENT_TAX_OFFSET_ACCOUNT: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_ACCOUNT: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_DEDUCTIBLE_ACCOUNT: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REGION: EnumField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      VatGroupsTaxRegionEnum,
      true,
      true
    >;
    ACQUISITION_REVERSE_CORRESPONDING_TAX_CODE: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_BOOKS_VAT_CATEGORY: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TAX_EXEMPTION_REASON: OrderableEdmTypeField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_GROUPS_LINES: CollectionField<
      VatGroups<DeSerializers>,
      DeSerializersT,
      VatGroupsLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxExemptReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_EXEMPT_REASON: OneToOneLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      TaxExemptReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link glAccountAdvancedRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GL_ACCOUNT_ADVANCED_RULES: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      GlAccountAdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link additionalExpenses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_EXPENSES: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      AdditionalExpensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentDrafts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DRAFTS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      PaymentDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPartners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNERS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link incomingPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INCOMING_PAYMENTS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      IncomingPaymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deposits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPOSITS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      DepositsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPayments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENTS: OneToManyLink<
      VatGroups<DeSerializersT>,
      DeSerializersT,
      VendorPaymentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VatGroups<DeSerializers>>;
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
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEnumField(
          'Category',
          BoVatCategoryEnum,
          true
        ),
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
         * Static representation of the {@link eu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU: fieldBuilder.buildEnumField('EU', BoYesNoEnum, true),
        /**
         * Static representation of the {@link triangularDeal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIANGULAR_DEAL: fieldBuilder.buildEdmTypeField(
          'TriangularDeal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link acquisitionReverse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_REVERSE: fieldBuilder.buildEnumField(
          'AcquisitionReverse',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link nonDeduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_DEDUCT: fieldBuilder.buildEdmTypeField(
          'NonDeduct',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link acquisitionTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_TAX: fieldBuilder.buildEdmTypeField(
          'AcquisitionTax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_SHIPMENT: fieldBuilder.buildEdmTypeField(
          'GoodsShipment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nonDeductAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_DEDUCT_ACC: fieldBuilder.buildEdmTypeField(
          'NonDeductAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferredTaxAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_TAX_ACC: fieldBuilder.buildEdmTypeField(
          'DeferredTaxAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION: fieldBuilder.buildEnumField(
          'Correction',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link vatCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_CORRECTION: fieldBuilder.buildEdmTypeField(
          'VatCorrection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link equalizationTaxAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUALIZATION_TAX_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EqualizationTaxAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceSupply} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_SUPPLY: fieldBuilder.buildEdmTypeField(
          'ServiceSupply',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link taxTypeBlackList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE_BLACK_LIST: fieldBuilder.buildEnumField(
          'TaxTypeBlackList',
          TaxTypeBlackListEnum,
          true
        ),
        /**
         * Static representation of the {@link report349Code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_349_CODE: fieldBuilder.buildEnumField(
          'Report349Code',
          Report349CodeListEnum,
          true
        ),
        /**
         * Static representation of the {@link vatInRevenueAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_IN_REVENUE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VATInRevenueAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link downPaymentTaxOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOWN_PAYMENT_TAX_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DownPaymentTaxOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscountAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatDeductibleAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DEDUCTIBLE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VATDeductibleAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGION: fieldBuilder.buildEnumField(
          'TaxRegion',
          VatGroupsTaxRegionEnum,
          true
        ),
        /**
         * Static representation of the {@link acquisitionReverseCorrespondingTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_REVERSE_CORRESPONDING_TAX_CODE:
          fieldBuilder.buildEdmTypeField(
            'AcquisitionReverseCorrespondingTaxCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link eBooksVatCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_BOOKS_VAT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'EBooksVatCategory',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link taxExemptionReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPTION_REASON: fieldBuilder.buildEdmTypeField(
          'TaxExemptionReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatGroupsLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_GROUPS_LINES: fieldBuilder.buildCollectionField(
          'VatGroups_Lines',
          VatGroupsLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VatGroups)
      };
    }

    return this._schema;
  }
}
