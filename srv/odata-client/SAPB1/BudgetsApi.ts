/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Budgets } from './Budgets';
import { BudgetsRequestBuilder } from './BudgetsRequestBuilder';
import { BudgetDistributionsApi } from './BudgetDistributionsApi';
import { BudgetScenariosApi } from './BudgetScenariosApi';
import { BudgetLine } from './BudgetLine';
import { BudgetCostAccountingLine } from './BudgetCostAccountingLine';
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
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Budgets<DeSerializersT>, DeSerializersT>
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
  ): BudgetsApi<DeSerializersT> {
    return new BudgetsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetDistribution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_DISTRIBUTION: OneToOneLink<
      Budgets<DeSerializersT>,
      DeSerializersT,
      BudgetDistributionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetScenario2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SCENARIO_2: OneToOneLink<
      Budgets<DeSerializersT>,
      DeSerializersT,
      BudgetScenariosApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetDistributionsApi<DeSerializersT>,
      BudgetScenariosApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_DISTRIBUTION: new OneToOneLink(
        'BudgetDistribution',
        this,
        linkedApis[0]
      ),
      BUDGET_SCENARIO_2: new OneToOneLink(
        'BudgetScenario2',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = Budgets;

  requestBuilder(): BudgetsRequestBuilder<DeSerializersT> {
    return new BudgetsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Budgets<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Budgets<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Budgets<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Budgets, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Budgets, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FUTURE_ANNUAL_EXPENSES_CREDIT_SYS: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FUTURE_ANNUAL_EXPENSES_CREDIT_LOC: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FUTURE_ANNUAL_EXPENSES_DEBIT_SYS: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FUTURE_ANNUAL_EXPENSES_DEBIT_LOC: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FUTURE_ANNUAL_REVENUES_CREDIT: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FUTURE_ANNUAL_REVENUES_DEBIT: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FUTURE_REVENUES_DEBIT_SYS: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FUTURE_REVENUES_DEBIT_LOC: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PARENT_ACC_PERCENT: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STARTOF_FISCAL_YEAR: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PARENT_ACCOUNT_KEY: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_ANNUAL_BUDGET_DEBIT_SYS: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BUDGET_BALANCE_DEBIT_SYS: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BUDGET_BALANCE_DEBIT_LOC: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_ANNUAL_BUDGET_DEBIT_LOC: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_ANNUAL_BUDGET_CREDIT_SYS: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    TOTAL_ANNUAL_BUDGET_CREDIT_LOC: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BUDGET_BALANCE_CREDIT_SYS: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BUDGET_BALANCE_CREDIT_LOC: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DIVISION_CODE: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ACCOUNT_CODE: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMERATOR: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BUDGET_SCENARIO: OrderableEdmTypeField<
      Budgets<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BUDGET_LINES: CollectionField<
      Budgets<DeSerializers>,
      DeSerializersT,
      BudgetLine,
      true,
      true
    >;
    BUDGET_COST_ACCOUNTING_LINES: CollectionField<
      Budgets<DeSerializers>,
      DeSerializersT,
      BudgetCostAccountingLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetDistribution} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_DISTRIBUTION: OneToOneLink<
      Budgets<DeSerializersT>,
      DeSerializersT,
      BudgetDistributionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetScenario2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_SCENARIO_2: OneToOneLink<
      Budgets<DeSerializersT>,
      DeSerializersT,
      BudgetScenariosApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Budgets<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link futureAnnualExpensesCreditSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_ANNUAL_EXPENSES_CREDIT_SYS: fieldBuilder.buildEdmTypeField(
          'FutureAnnualExpensesCreditSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link futureAnnualExpensesCreditLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_ANNUAL_EXPENSES_CREDIT_LOC: fieldBuilder.buildEdmTypeField(
          'FutureAnnualExpensesCreditLoc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link futureAnnualExpensesDebitSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_ANNUAL_EXPENSES_DEBIT_SYS: fieldBuilder.buildEdmTypeField(
          'FutureAnnualExpensesDebitSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link futureAnnualExpensesDebitLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_ANNUAL_EXPENSES_DEBIT_LOC: fieldBuilder.buildEdmTypeField(
          'FutureAnnualExpensesDebitLoc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link futureAnnualRevenuesCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_ANNUAL_REVENUES_CREDIT: fieldBuilder.buildEdmTypeField(
          'FutureAnnualRevenuesCredit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link futureAnnualRevenuesDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_ANNUAL_REVENUES_DEBIT: fieldBuilder.buildEdmTypeField(
          'FutureAnnualRevenuesDebit',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link futureRevenuesDebitSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_REVENUES_DEBIT_SYS: fieldBuilder.buildEdmTypeField(
          'FutureRevenuesDebitSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link futureRevenuesDebitLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_REVENUES_DEBIT_LOC: fieldBuilder.buildEdmTypeField(
          'FutureRevenuesDebitLoc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link parentAccPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ACC_PERCENT: fieldBuilder.buildEdmTypeField(
          'ParentAccPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link startofFiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTOF_FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'StartofFiscalYear',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link parentAccountKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ACCOUNT_KEY: fieldBuilder.buildEdmTypeField(
          'ParentAccountKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalAnnualBudgetDebitSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ANNUAL_BUDGET_DEBIT_SYS: fieldBuilder.buildEdmTypeField(
          'TotalAnnualBudgetDebitSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link budgetBalanceDebitSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_BALANCE_DEBIT_SYS: fieldBuilder.buildEdmTypeField(
          'BudgetBalanceDebitSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link budgetBalanceDebitLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_BALANCE_DEBIT_LOC: fieldBuilder.buildEdmTypeField(
          'BudgetBalanceDebitLoc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalAnnualBudgetDebitLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ANNUAL_BUDGET_DEBIT_LOC: fieldBuilder.buildEdmTypeField(
          'TotalAnnualBudgetDebitLoc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalAnnualBudgetCreditSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ANNUAL_BUDGET_CREDIT_SYS: fieldBuilder.buildEdmTypeField(
          'TotalAnnualBudgetCreditSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link totalAnnualBudgetCreditLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ANNUAL_BUDGET_CREDIT_LOC: fieldBuilder.buildEdmTypeField(
          'TotalAnnualBudgetCreditLoc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link budgetBalanceCreditSys} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_BALANCE_CREDIT_SYS: fieldBuilder.buildEdmTypeField(
          'BudgetBalanceCreditSys',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link budgetBalanceCreditLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_BALANCE_CREDIT_LOC: fieldBuilder.buildEdmTypeField(
          'BudgetBalanceCreditLoc',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link divisionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION_CODE: fieldBuilder.buildEdmTypeField(
          'DivisionCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEdmTypeField(
          'AccountCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERATOR: fieldBuilder.buildEdmTypeField(
          'Numerator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link budgetScenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_SCENARIO: fieldBuilder.buildEdmTypeField(
          'BudgetScenario',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link budgetLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_LINES: fieldBuilder.buildCollectionField(
          'BudgetLines',
          BudgetLine,
          true
        ),
        /**
         * Static representation of the {@link budgetCostAccountingLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_COST_ACCOUNTING_LINES: fieldBuilder.buildCollectionField(
          'BudgetCostAccountingLines',
          BudgetCostAccountingLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Budgets)
      };
    }

    return this._schema;
  }
}
