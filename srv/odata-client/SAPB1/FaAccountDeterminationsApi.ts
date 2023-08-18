/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FaAccountDeterminations } from './FaAccountDeterminations';
import { FaAccountDeterminationsRequestBuilder } from './FaAccountDeterminationsRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FaAccountDeterminationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FaAccountDeterminations<DeSerializersT>, DeSerializersT>
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
  ): FaAccountDeterminationsApi<DeSerializersT> {
    return new FaAccountDeterminationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      FaAccountDeterminations<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ChartOfAccountsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CHART_OF_ACCOUNT: new OneToOneLink('ChartOfAccount', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = FaAccountDeterminations;

  requestBuilder(): FaAccountDeterminationsRequestBuilder<DeSerializersT> {
    return new FaAccountDeterminationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FaAccountDeterminations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FaAccountDeterminations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FaAccountDeterminations<DeSerializersT>,
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
    typeof FaAccountDeterminations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FaAccountDeterminations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_BALANCE_SHEET_ACCOUNT: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_ACCOUNT_ACQUISITION: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUATION_RESERVE_ACCOUNT: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUATION_RESERVE_CLEARING: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDINARY_DEPRECIATION: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCUMULATED_ORDINARY_DEPR: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNPLANNED_DEPRECIATION: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCUMULATED_UNPLANNED_DEPR: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCUMULATED_SPECIAL_DEPR: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUEFROM_ASSET_SALES_NET: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETIREMENTWITH_EXPENSE_NET: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETIREMENTWITH_REVENUE_NET: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAVEWITH_EXPENSE_NBV_GROSS: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAVEWITH_REVENUE_NBV_GROSS: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE_ACCOUNTFOR_RETIREMENT: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE_CLEARING_ACCOUNT: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUATION_ACCOUNT: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVALUATION_LOSS_ACCT: OrderableEdmTypeField<
      FaAccountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chartOfAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNT: OneToOneLink<
      FaAccountDeterminations<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FaAccountDeterminations<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetBalanceSheetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_BALANCE_SHEET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'AssetBalanceSheetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clearingAccountAcquisition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_ACCOUNT_ACQUISITION: fieldBuilder.buildEdmTypeField(
          'ClearingAccountAcquisition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revaluationReserveAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_RESERVE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevaluationReserveAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revaluationReserveClearing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_RESERVE_CLEARING: fieldBuilder.buildEdmTypeField(
          'RevaluationReserveClearing',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ordinaryDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDINARY_DEPRECIATION: fieldBuilder.buildEdmTypeField(
          'OrdinaryDepreciation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accumulatedOrdinaryDepr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_ORDINARY_DEPR: fieldBuilder.buildEdmTypeField(
          'AccumulatedOrdinaryDepr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unplannedDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNPLANNED_DEPRECIATION: fieldBuilder.buildEdmTypeField(
          'UnplannedDepreciation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accumulatedUnplannedDepr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_UNPLANNED_DEPR: fieldBuilder.buildEdmTypeField(
          'AccumulatedUnplannedDepr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION: fieldBuilder.buildEdmTypeField(
          'SpecialDepreciation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accumulatedSpecialDepr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_SPECIAL_DEPR: fieldBuilder.buildEdmTypeField(
          'AccumulatedSpecialDepr',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenuefromAssetSalesNet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUEFROM_ASSET_SALES_NET: fieldBuilder.buildEdmTypeField(
          'RevenuefromAssetSalesNet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retirementwithExpenseNet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETIREMENTWITH_EXPENSE_NET: fieldBuilder.buildEdmTypeField(
          'RetirementwithExpenseNet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retirementwithRevenueNet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETIREMENTWITH_REVENUE_NET: fieldBuilder.buildEdmTypeField(
          'RetirementwithRevenueNet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leavewithExpenseNbvGross} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVEWITH_EXPENSE_NBV_GROSS: fieldBuilder.buildEdmTypeField(
          'LeavewithExpenseNBVGross',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leavewithRevenueNbvGross} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVEWITH_REVENUE_NBV_GROSS: fieldBuilder.buildEdmTypeField(
          'LeavewithRevenueNBVGross',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenueAccountforRetirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_ACCOUNTFOR_RETIREMENT: fieldBuilder.buildEdmTypeField(
          'RevenueAccountforRetirement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenueClearingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_CLEARING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevenueClearingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revaluationAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevaluationAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revaluationLossAcct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_LOSS_ACCT: fieldBuilder.buildEdmTypeField(
          'RevaluationLossAcct',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FaAccountDeterminations)
      };
    }

    return this._schema;
  }
}
