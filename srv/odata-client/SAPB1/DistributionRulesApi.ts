/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DistributionRules } from './DistributionRules';
import { DistributionRulesRequestBuilder } from './DistributionRulesRequestBuilder';
import { ProductTreesApi } from './ProductTreesApi';
import { DimensionsApi } from './DimensionsApi';
import { AdditionalExpensesApi } from './AdditionalExpensesApi';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { ProductionOrdersApi } from './ProductionOrdersApi';
import { BudgetScenariosApi } from './BudgetScenariosApi';
import { DepositsApi } from './DepositsApi';
import { DistributionRuleLine } from './DistributionRuleLine';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DistributionRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DistributionRules<DeSerializersT>, DeSerializersT>
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
  ): DistributionRulesApi<DeSerializersT> {
    return new DistributionRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productTrees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TREES: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      ProductTreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION: OneToOneLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      DimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link additionalExpenses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_EXPENSES: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      AdditionalExpensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetScenarios} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SCENARIOS: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      BudgetScenariosApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deposits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPOSITS: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      DepositsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductTreesApi<DeSerializersT>,
      DimensionsApi<DeSerializersT>,
      AdditionalExpensesApi<DeSerializersT>,
      ChartOfAccountsApi<DeSerializersT>,
      ProductionOrdersApi<DeSerializersT>,
      BudgetScenariosApi<DeSerializersT>,
      DepositsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_TREES: new OneToManyLink('ProductTrees', this, linkedApis[0]),
      DIMENSION: new OneToOneLink('Dimension', this, linkedApis[1]),
      ADDITIONAL_EXPENSES: new OneToManyLink(
        'AdditionalExpenses',
        this,
        linkedApis[2]
      ),
      CHART_OF_ACCOUNTS: new OneToManyLink(
        'ChartOfAccounts',
        this,
        linkedApis[3]
      ),
      PRODUCTION_ORDERS: new OneToManyLink(
        'ProductionOrders',
        this,
        linkedApis[4]
      ),
      BUDGET_SCENARIOS: new OneToManyLink(
        'BudgetScenarios',
        this,
        linkedApis[5]
      ),
      DEPOSITS: new OneToManyLink('Deposits', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = DistributionRules;

  requestBuilder(): DistributionRulesRequestBuilder<DeSerializersT> {
    return new DistributionRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DistributionRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DistributionRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DistributionRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DistributionRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DistributionRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FACTOR_CODE: OrderableEdmTypeField<
      DistributionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FACTOR_DESCRIPTION: OrderableEdmTypeField<
      DistributionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_FACTOR: OrderableEdmTypeField<
      DistributionRules<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DIRECT: OrderableEdmTypeField<
      DistributionRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_WHICH_DIMENSION: OrderableEdmTypeField<
      DistributionRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ACTIVE: EnumField<
      DistributionRules<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_FIXED_AMOUNT: EnumField<
      DistributionRules<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DISTRIBUTION_RULE_LINES: CollectionField<
      DistributionRules<DeSerializers>,
      DeSerializersT,
      DistributionRuleLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTrees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TREES: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      ProductTreesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION: OneToOneLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      DimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link additionalExpenses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_EXPENSES: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      AdditionalExpensesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link chartOfAccounts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHART_OF_ACCOUNTS: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetScenarios} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SCENARIOS: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      BudgetScenariosApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deposits} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPOSITS: OneToManyLink<
      DistributionRules<DeSerializersT>,
      DeSerializersT,
      DepositsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DistributionRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link factorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR_CODE: fieldBuilder.buildEdmTypeField(
          'FactorCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link factorDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'FactorDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_FACTOR: fieldBuilder.buildEdmTypeField(
          'TotalFactor',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link direct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT: fieldBuilder.buildEdmTypeField('Direct', 'Edm.String', true),
        /**
         * Static representation of the {@link inWhichDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_WHICH_DIMENSION: fieldBuilder.buildEdmTypeField(
          'InWhichDimension',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link isFixedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_AMOUNT: fieldBuilder.buildEnumField(
          'IsFixedAmount',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link distributionRuleLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_RULE_LINES: fieldBuilder.buildCollectionField(
          'DistributionRuleLines',
          DistributionRuleLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DistributionRules)
      };
    }

    return this._schema;
  }
}
