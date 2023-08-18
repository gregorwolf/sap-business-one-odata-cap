/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GlAccountAdvancedRules } from './GlAccountAdvancedRules';
import { GlAccountAdvancedRulesRequestBuilder } from './GlAccountAdvancedRulesRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { ItemGroupsApi } from './ItemGroupsApi';
import { WarehousesApi } from './WarehousesApi';
import { BusinessPartnerGroupsApi } from './BusinessPartnerGroupsApi';
import { CountriesApi } from './CountriesApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { VatGroupsApi } from './VatGroupsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { NotaFiscalUsageApi } from './NotaFiscalUsageApi';
import { BoSubPeriodTypeEnum } from './BoSubPeriodTypeEnum';
import { GetGlAccountByEnum } from './GetGlAccountByEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoBusinessPartnerTypes } from './BoBusinessPartnerTypes';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class GlAccountAdvancedRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GlAccountAdvancedRules<DeSerializersT>, DeSerializersT>
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
  ): GlAccountAdvancedRulesApi<DeSerializersT> {
    return new GlAccountAdvancedRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartnerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER_GROUP: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP_1: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link notaFiscalUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_USAGE: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      NotaFiscalUsageApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemsApi<DeSerializersT>,
      ItemGroupsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      BusinessPartnerGroupsApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      VatGroupsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      NotaFiscalUsageApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM: new OneToOneLink('Item', this, linkedApis[0]),
      ITEM_GROUPS: new OneToOneLink('ItemGroups', this, linkedApis[1]),
      WAREHOUSE_2: new OneToOneLink('Warehouse2', this, linkedApis[2]),
      BUSINESS_PARTNER_GROUP: new OneToOneLink(
        'BusinessPartnerGroup',
        this,
        linkedApis[3]
      ),
      COUNTRY: new OneToOneLink('Country', this, linkedApis[4]),
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[5]),
      VAT_GROUP_1: new OneToOneLink('VatGroup', this, linkedApis[6]),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[7]
      ),
      NOTA_FISCAL_USAGE: new OneToOneLink(
        'NotaFiscalUsage',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = GlAccountAdvancedRules;

  requestBuilder(): GlAccountAdvancedRulesRequestBuilder<DeSerializersT> {
    return new GlAccountAdvancedRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GlAccountAdvancedRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GlAccountAdvancedRules<DeSerializersT>,
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
    typeof GlAccountAdvancedRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GlAccountAdvancedRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABSOLUTE_ENTRY: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEGINNINGOF_FINANCIAL_YEAR: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FINANCIAL_YEAR: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PERIOD_NAME: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_PERIOD_TYPE: EnumField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      BoSubPeriodTypeEnum,
      true,
      true
    >;
    NUMBER_OF_PERIODS: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FROM_POSTING_DATE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TO_POSTING_DATE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FROM_DUE_DATE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TO_DUE_DATE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FROM_DOCUMENT_DATE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TO_DOCUMENT_DATE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ITEM_CODE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_GROUP: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_GROUP: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FEDERAL_TAX_ID: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_TO_COUNTRY: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_TO_STATE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GET_GL_ACCOUNT_BY: EnumField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      GetGlAccountByEnum,
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXPENSES_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUES_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_INCOME_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIENCE_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_DIFFERENCE_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECREASING_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCREASING_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURNING_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_REVENUES_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_EXPENSES_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_REVENUE_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_EXPENS_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ACCT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PA_RETURN_ACCT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_OFFSET_ACCT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_DIFFERENCES_ACCT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_CLEARING_ACCT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_DECREASE_ACCT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_INCREASE_ACCT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIP_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIP_VARIANCE_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_INFLATION_ADJUST_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_INFLATION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_INFLATION_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_INFLATION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_CLEARING_ACT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_OFFSETTING_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_IN_TRANSIT_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_GOODS_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_IN_REVENUE_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_CREDIT_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPTED_CREDITS: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_FOREIGN_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_PURCHASE_CREDIT_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_EU_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EU_PURCHASE_CREDIT_ACC: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_BALANCE_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WH_INCOMING_CENVAT_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WH_OUTGOING_CENVAT_ACCOUNT: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BUSINESS_PARTNER_TYPE: EnumField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      BoBusinessPartnerTypes,
      true,
      true
    >;
    VAT_GROUP: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_CODE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    UDF_1: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UDF_2: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UDF_3: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UDF_4: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UDF_5: OrderableEdmTypeField<
      GlAccountAdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartnerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER_GROUP: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vatGroup_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAT_GROUP_1: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      VatGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link notaFiscalUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_USAGE: OneToOneLink<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT,
      NotaFiscalUsageApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GlAccountAdvancedRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.String', true),
        /**
         * Static representation of the {@link beginningofFinancialYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNINGOF_FINANCIAL_YEAR: fieldBuilder.buildEdmTypeField(
          'BeginningofFinancialYear',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link financialYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_YEAR: fieldBuilder.buildEdmTypeField(
          'FinancialYear',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link periodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'PeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subPeriodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_PERIOD_TYPE: fieldBuilder.buildEnumField(
          'SubPeriodType',
          BoSubPeriodTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link numberOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PERIODS: fieldBuilder.buildEdmTypeField(
          'NumberOfPeriods',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link fromPostingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'FromPostingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link toPostingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'ToPostingDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link fromDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'FromDueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link toDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'ToDueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link fromDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'FromDocumentDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link toDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'ToDocumentDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemGroup',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_GROUP: fieldBuilder.buildEdmTypeField('BPGroup', 'Edm.Int32', true),
        /**
         * Static representation of the {@link federalTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_TAX_ID: fieldBuilder.buildEdmTypeField(
          'FederalTaxID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipToCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TO_COUNTRY: fieldBuilder.buildEdmTypeField(
          'ShipToCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipToState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TO_STATE: fieldBuilder.buildEdmTypeField(
          'ShipToState',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link getGlAccountBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GET_GL_ACCOUNT_BY: fieldBuilder.buildEnumField(
          'GetGLAccountBy',
          GetGlAccountByEnum,
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link expensesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExpensesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenuesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevenuesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptIncomeAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_INCOME_ACC: fieldBuilder.buildEdmTypeField(
          'ExemptIncomeAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InventoryAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CostAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'TransferAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link varienceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIENCE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VarienceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceDifferenceAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DIFFERENCE_ACC: fieldBuilder.buildEdmTypeField(
          'PriceDifferenceAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link negativeInventoryAdjustmentAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_INVENTORY_ADJUSTMENT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'NegativeInventoryAdjustmentAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decreasingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECREASING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DecreasingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link increasingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCREASING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'IncreasingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returningAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURNING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ReturningAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euRevenuesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_REVENUES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EURevenuesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euExpensesAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_EXPENSES_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EUExpensesAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignRevenueAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_REVENUE_ACC: fieldBuilder.buildEdmTypeField(
          'ForeignRevenueAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignExpensAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_EXPENS_ACC: fieldBuilder.buildEdmTypeField(
          'ForeignExpensAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseAcct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ACCT: fieldBuilder.buildEdmTypeField(
          'PurchaseAcct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paReturnAcct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PA_RETURN_ACCT: fieldBuilder.buildEdmTypeField(
          'PAReturnAcct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOffsetAcct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_OFFSET_ACCT: fieldBuilder.buildEdmTypeField(
          'PurchaseOffsetAcct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRateDifferencesAcct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_DIFFERENCES_ACCT: fieldBuilder.buildEdmTypeField(
          'ExchangeRateDifferencesAcct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsClearingAcct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_CLEARING_ACCT: fieldBuilder.buildEdmTypeField(
          'GoodsClearingAcct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link glDecreaseAcct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_DECREASE_ACCT: fieldBuilder.buildEdmTypeField(
          'GLDecreaseAcct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link glIncreaseAcct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_INCREASE_ACCT: fieldBuilder.buildEdmTypeField(
          'GLIncreaseAcct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wipAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WipAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wipVarianceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_VARIANCE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WipVarianceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wipOffsetProfitAndLossAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIP_OFFSET_PROFIT_AND_LOSS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WipOffsetProfitAndLossAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOffsetProfitAndLossAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OFFSET_PROFIT_AND_LOSS_ACCOUNT:
          fieldBuilder.buildEdmTypeField(
            'InventoryOffsetProfitAndLossAccount',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link stockInflationAdjustAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_INFLATION_ADJUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'StockInflationAdjustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stockInflationOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_INFLATION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'StockInflationOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costInflationAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_INFLATION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CostInflationAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costInflationOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_INFLATION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CostInflationOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseClearingAct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CLEARING_ACT: fieldBuilder.buildEdmTypeField(
          'ExpenseClearingAct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseOffsettingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_OFFSETTING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ExpenseOffsettingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stockInTransitAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_IN_TRANSIT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'StockInTransitAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippedGoodsAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_GOODS_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShippedGoodsAccount',
          'Edm.String',
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
         * Static representation of the {@link salesCreditAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CREDIT_ACC: fieldBuilder.buildEdmTypeField(
          'SalesCreditAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseCreditAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CREDIT_ACC: fieldBuilder.buildEdmTypeField(
          'PurchaseCreditAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptedCredits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTED_CREDITS: fieldBuilder.buildEdmTypeField(
          'ExemptedCredits',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCreditForeignAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CREDIT_FOREIGN_ACC: fieldBuilder.buildEdmTypeField(
          'SalesCreditForeignAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foreignPurchaseCreditAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_PURCHASE_CREDIT_ACC: fieldBuilder.buildEdmTypeField(
          'ForeignPurchaseCreditAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCreditEuAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CREDIT_EU_ACC: fieldBuilder.buildEdmTypeField(
          'SalesCreditEUAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link euPurchaseCreditAcc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_PURCHASE_CREDIT_ACC: fieldBuilder.buildEdmTypeField(
          'EUPurchaseCreditAcc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseBalanceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_BALANCE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'PurchaseBalanceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link whIncomingCenvatAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WH_INCOMING_CENVAT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WHIncomingCenvatAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link whOutgoingCenvatAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WH_OUTGOING_CENVAT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'WHOutgoingCenvatAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link businessPartnerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_TYPE: fieldBuilder.buildEnumField(
          'BusinessPartnerType',
          BoBusinessPartnerTypes,
          true
        ),
        /**
         * Static representation of the {@link vatGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_GROUP: fieldBuilder.buildEdmTypeField(
          'VATGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CODE: fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true),
        /**
         * Static representation of the {@link usage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE: fieldBuilder.buildEdmTypeField('Usage', 'Edm.Int32', true),
        /**
         * Static representation of the {@link udf1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_1: fieldBuilder.buildEdmTypeField('UDF1', 'Edm.String', true),
        /**
         * Static representation of the {@link udf2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_2: fieldBuilder.buildEdmTypeField('UDF2', 'Edm.String', true),
        /**
         * Static representation of the {@link udf3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_3: fieldBuilder.buildEdmTypeField('UDF3', 'Edm.String', true),
        /**
         * Static representation of the {@link udf4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_4: fieldBuilder.buildEdmTypeField('UDF4', 'Edm.String', true),
        /**
         * Static representation of the {@link udf5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UDF_5: fieldBuilder.buildEdmTypeField('UDF5', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GlAccountAdvancedRules)
      };
    }

    return this._schema;
  }
}
